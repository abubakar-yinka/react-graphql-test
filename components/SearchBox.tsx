import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { SEARCH_USERS_QUERY } from '../graphql/queries/search';
import { User } from '../interfaces';
import { DropDown, DropDownItem } from './styles/DropDown';

type TextInputProps = {
  label?: string;
  renderIcon?: () => React.ReactNode;
  name: string;
  [x: string]: any;
};
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { label, name, renderIcon, ...textInputProps } = props;
    const router = useRouter();
    const [findItems, { loading, data, error }] = useLazyQuery(
      SEARCH_USERS_QUERY,
      {
        fetchPolicy: 'no-cache',
      },
    );

    const items = data?.queriedUsers || [];
    const findItemsButChill = debounce(findItems, 500);
    resetIdCounter();
    const {
      isOpen,
      inputValue,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      getItemProps,
      highlightedIndex,
    } = useCombobox({
      items,
      onInputValueChange() {
        findItemsButChill({
          variables: {
            searchTerm: `%${inputValue}%`,
          },
        });
      },
      onSelectedItemChange({ selectedItem }) {
        router.push({
          pathname: `/user/${(selectedItem as User).id}`,
        });
      },
      itemToString: (item) => (item as User).name || '',
    });

    return (
      <Wrapper {...getComboboxProps()}>
        <Input
          {...getInputProps({
            id: name,
            name,
            type: 'search',
            placeholder: 'Search for an Item',
            className: loading ? 'loading' : undefined,
            ref,
            ...textInputProps,
          })}
        />
        {label && <Label htmlFor={name}>{label}</Label>}
        <InputIcon>{renderIcon && renderIcon()}</InputIcon>
        <DropDown {...getMenuProps()}>
          {isOpen &&
            items.map((item: User, index: number) => (
              <DropDownItem
                {...getItemProps({ item, index })}
                key={item.id}
                highlighted={index === highlightedIndex}
              >
                {item.name}
              </DropDownItem>
            ))}
          {isOpen && !items.length && !loading && (
            <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
          )}
          {isOpen && !items.length && !loading && error && (
            <DropDownItem>{error.message}</DropDownItem>
          )}
        </DropDown>
      </Wrapper>
    );
  },
);

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const Wrapper = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  &:last-child() {
    margin-top: unset;
  }
  .loading {
    animation: ${glow} 0.5s ease-in-out infinite alternate;
  }
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000;
  transition: border 0.3s;
  font-size: 14px;
  padding: 4px 20px 0;
  width: 100%;
  background-color: var(--offWhite);

  &::-webkit-input-placeholder {
    color: #000;
  }
  &::-moz-placeholder {
    color: #000;
  }
  /* Firefox 19+ */
  &:-moz-placeholder {
    color: #000;
  }
  /* Firefox 18- */
  &:-ms-input-placeholder {
    color: #000;
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    transform: translateY(-15px) scale(0.75);
  }

  &:not(:placeholder-shown) ~ label {
    color: #000;
  }
  &:focus ~ label {
    color: #000;
  }

  &:focus,
  &:active {
    border: 1px solid #1c1c;
  }

  &.error {
    background-color: red;
    border: 1px solid red;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  right: 12px;
  transform: translateY(80%);
  width: 20px;
  height: 20px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Label = styled.label`
  color: #000;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  top: 20px;
  transition: transform 200ms;
`;

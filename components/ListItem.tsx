import React from 'react';

import { User } from '../interfaces';
import ItemStyles from './styles/ItemStyles';

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <ItemStyles>
    <p>{data.name && data.name !== '' ? data.name : 'Fallback Name'}</p>
  </ItemStyles>
);

export default ListItem;

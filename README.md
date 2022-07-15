# React + GraphQL Challenge

Implementation a simple app that shows a view of a mock SpaceX dataset grouped by their date of creation and can be searched through with a search box.
![image](https://user-images.githubusercontent.com/64968306/179146478-2cef6da9-952f-48a3-a638-052245c526b6.png)

## Technology Used

- React: Next.js for server side rendering, routing and tooling
- GraphQL: 
    - Apollo's React Hooks for interfacing with Apollo Client
    - Fetching data via GraphQL Queries
    - Caching GraphQL Data
    - Error and Loading UI States
- TypeScript: For static typing, type inference, IntelliSense support
- Styled Components: for dynamic styling and avoiding className bugs.

## User Experience

The choice of technology is appropriate for this project. By using a type-safe query language for communicating with our database, we eliminate bugs that come with the conventional approach to APIs and also gives us the flexibility of requesting the specific data that we need at that particular point in time. Apollo Client also replaces the need for redux + data fetching/caching libraries. I decided to use Nextjs over React for better performance and enhanced UX due to server side rendering and code-splitting, which enhanced my development process.

It could have been made better by giving the users more control over the filtering of data for them to easily get the result of their choice especially as the dataset gets larger. It could have also been tabulated for a better presentation of the results and detailed representation of each row with the option of viewing a particular row.

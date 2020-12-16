import React from 'react';
import SearchForm from './SearchForm';
import UsersList from "./UsersList";

const App = (): JSX.Element => {
  return (
    <>
      <SearchForm />
      <UsersList />
    </>
  );
}

export default App;

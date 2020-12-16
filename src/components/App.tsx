import React, { useReducer } from 'react';
import SearchForm from './SearchForm';
import UsersList from "./UsersList";
import UserContext from "../contexts/UserContext";
import users from "../reducers";

const App = (): JSX.Element => {
  // TODO initialstateの型指定
  const initialState: any = '';
  const [state, dispatch] = useReducer(users, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <SearchForm />
      <UsersList />
    </UserContext.Provider>
  );
};

export default App;

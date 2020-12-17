import React, {useReducer, useState} from 'react';
import SearchForm from "./SearchForm";
import UsersList from "./UsersList";
import UserContext from "../contexts/UserContext";
import users from "../reducers";
import useAxios from "axios-hooks";

const App = (): JSX.Element => {
  // TODO initialstateの型指定
  const initialState: any = '';
  const [state, dispatch] = useReducer(users, initialState);
  const [pageNumber, setPageNumber] = useState(1);
  const [userName, setUserName] = useState('');
  const [{ loading }, getUsers] = useAxios({ method: "GET" }, { manual: true });

  return (
    <UserContext.Provider value={{
      dispatch,
      pageNumber,
      setPageNumber,
      getUsers,
      userName,
    }}>
      <SearchForm loading={loading} setUserName={setUserName} />
      <UsersList state={state} />
    </UserContext.Provider>
  );
};

export default App;

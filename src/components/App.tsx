import React, {useReducer, useState} from 'react';
import SearchForm from "./SearchForm";
import UsersList from "./UsersList";
import users from "../reducers";
import UserContext from "../contexts/UserContext";
import useAxios from "axios-hooks";

type AxiosType = {
  [key: string] : string | number | object;
}

const App: React.FC = (): JSX.Element => {
  const initialState: object[] = [];
  const [state, dispatch] = useReducer(users, initialState);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [userName, setUserName] = useState<string | number>('');
  const [{ loading, error }, getUsers] = useAxios<AxiosType>({ method: "GET" }, { manual: true });

  return (
    <UserContext.Provider value={{
      dispatch,
      pageNumber,
      setPageNumber,
      userName,
      loading,
      getUsers,
    }}>
      <SearchForm setUserName={setUserName} error={error}/>
      <UsersList state={state} />
    </UserContext.Provider>
  );
};

export default App;

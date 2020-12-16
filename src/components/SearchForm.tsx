import React, { ChangeEvent, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { SEARCH_USERS } from "../reducers";
import axios from "axios";

const SearchForm = (): JSX.Element => {
  const [userName, setUserName] = useState<string | number>('');
  const { dispatch } = useContext(UserContext);

  const searchUser = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // TODO GitHubAPIの実装  https://api.github.com/search/users?q=tom ←tomで検索

    dispatch({
      type: SEARCH_USERS,
      userName,
    });
    setUserName('');
  };

  return (
    <>
      <h1>GitHubユーザー検索</h1>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e:ChangeEvent<HTMLInputElement>): void => {setUserName(e.target.value)}}
        />
        <button onClick={searchUser} disabled={userName === ''}>検索</button>
      </form>
    </>
  );
};

export default SearchForm;
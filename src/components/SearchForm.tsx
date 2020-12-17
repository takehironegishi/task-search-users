import React, { ChangeEvent, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import useAxios from "axios-hooks";

// TODO 型指定
const SearchForm = (): JSX.Element => {
  const [userName, setUserName] = useState<string | number>('');
  const { dispatch } = useContext(UserContext);
  const [{ loading }, getUsers] = useAxios({ method: "GET" }, { manual: true });

  const searchUser = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    getUsers({ url: `https://api.github.com/search/users?q=${userName}&per_page=30&page=1` })
        .then((data) => {
          const userData = data.data.items;
          dispatch({
            type: 'search_users',
            userData,
          });
          setUserName('');
        });
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
      <p>{loading? 'Loading...': ''}</p>
    </>
  );
};

export default SearchForm;
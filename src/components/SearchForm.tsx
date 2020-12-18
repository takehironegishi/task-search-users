import React, { ChangeEvent, useContext } from "react";
import Button from "./Button";
import UserContext from "../contexts/UserContext";

// TODO 型指定
const SearchForm = ({setUserName, error}: any): JSX.Element => {
  const { userName, loading } = useContext(UserContext);

  return (
    <>
      <h1>GitHubユーザー検索</h1>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e:ChangeEvent<HTMLInputElement>): void => {setUserName(e.target.value)}}
        />
        <Button disabled={userName === '' || loading} value={'検索'} />
      </form>
      <p>{loading? 'Loading...': ''}</p>
      <p>{error? 'エラーだよ！ページを読み込めなかったよ！リロードするかなんかしてね！' : ''}</p>
    </>
  );
};

export default SearchForm;
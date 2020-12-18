import React, { ChangeEvent, useContext } from "react";
import Button from "./Button";
import UserContext from "../contexts/UserContext";
import { AxiosError } from "axios";

type SearchFormType = {
  setUserName: React.Dispatch<React.SetStateAction<string | number>>;
  error: AxiosError<boolean> | undefined;
}

const SearchForm: React.FC<SearchFormType> = ({ setUserName, error }): JSX.Element => {
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
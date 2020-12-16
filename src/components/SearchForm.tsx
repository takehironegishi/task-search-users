import React, { ChangeEvent, useState } from "react";

const SearchForm = (): JSX.Element => {
  const [userName, setUserName] = useState<string | number>('');

  const searchUser: (e: React.MouseEvent<HTMLButtonElement>) => void = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
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
        <button onClick={searchUser}>検索</button>
      </form>
    </>
  );
};

export default SearchForm;
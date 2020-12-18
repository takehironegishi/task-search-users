import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

type ButtonType = {
  disabled: boolean;
  value: '進む' | '戻る' | '検索';
}

const Button: React.FC<ButtonType> = ({disabled, value}): JSX.Element => {
  const { getUsers, dispatch, userName, pageNumber, setPageNumber } = useContext(UserContext);

  const searchUser: (e: React.MouseEvent<HTMLButtonElement>) => void = (
    e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      if (value === '進む') {
        setPageNumber(pageNumber + 1);
      } else if (value === '戻る') {
        setPageNumber(pageNumber - 1);
      } else {
        setPageNumber(1);
      }

      getUsers({ url: `https://api.github.com/search/users?q=${userName}&per_page=30&page=${pageNumber}` })
          .then((data: any) => {
            const userData: object[] = data.data.items;
            dispatch({
              type: 'search_users',
              userData,
            });
          });
      window.scrollTo(0,0);
    };

  return <button onClick={searchUser} disabled={disabled}>{value}</button>
};

export default Button;
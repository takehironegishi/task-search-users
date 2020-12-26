import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { ButtonType } from '../types/type';

const Button: React.FC<ButtonType> = ({ disabled, value }): JSX.Element => {
  const {
    getUsers,
    dispatch,
    userName,
    pageNumber,
    setPageNumber,
  } = useContext(UserContext);

  const searchUser = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    let newPageNumber: number;
    if (value === '進む') {
      newPageNumber = pageNumber + 1;
    } else if (value === '戻る') {
      newPageNumber = pageNumber - 1;
    } else {
      newPageNumber = 1;
    }
    setPageNumber(newPageNumber);

    getUsers({
      url: `https://api.github.com/search/users?q=${userName}&per_page=30&page=${newPageNumber}`,
    }).then((data: any) => {
      const userData: object[] = data.data.items;
      dispatch({
        type: 'search_users',
        userData,
      });
    });
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={searchUser} disabled={disabled}>
      {value}
    </button>
  );
};

export default Button;

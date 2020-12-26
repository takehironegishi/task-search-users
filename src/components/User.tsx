import React from 'react';
import { UserType } from '../types/type';

const User: React.FC<{ user: UserType }> = ({ user }): JSX.Element => {
  return (
    <tr>
      <td>
        <a href={user.html_url}>
          <img
            src={user.avatar_url}
            alt={`${user.login}のアイコン`}
            width="200px"
          />
        </a>
      </td>
      <td>
        <a href={user.html_url}>{user.login}</a>
      </td>
    </tr>
  );
};

export default User;

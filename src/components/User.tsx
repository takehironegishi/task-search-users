import React from 'react';

const User = (user: any): JSX.Element => {
  const _user = user.user;

  return (
    <tr>
      <td><a href={_user.html_url}><img src={_user.avatar_url} alt={`${_user.login}のアイコン`} width="200px" /></a></td>
      <td><a href={_user.html_url}>{_user.login}</a></td>
    </tr>
  );
};

export default User;
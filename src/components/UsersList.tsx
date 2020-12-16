import React from "react";
import User from './User';


const UsersList = (): JSX.Element => {
  return (
    <>
      <h2>ユーザー一覧</h2>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>ユーザーアイコン</th>
          <th>ユーザー名</th>
        </tr>
        </thead>
        <tbody>
          <User />
        </tbody>
      </table>
    </>
  )
};

export default UsersList;
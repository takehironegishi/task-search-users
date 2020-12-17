import React, {useContext, useEffect, useState} from "react";
import User from './User';
import UserContext from "../contexts/UserContext";


const UsersList = (): JSX.Element => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [ifNothing, setIfNothing] = useState('');
  const { state } = useContext(UserContext);

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
      setIfNothing('');
    } else {
      if(state.length === 0) {
        setIfNothing('ユーザーが見つかりませんでした。');
      } else {
        setIfNothing('');
      }
    }
    // eslint-disable-next-line
  }, [state]);

  return (
    <>
      <h2>ユーザー一覧</h2>
      <table>
        <thead>
        <tr>
          <th>ユーザーアイコン</th>
          <th>ユーザー名</th>
        </tr>
        </thead>
        <tbody>
        {[...state].map((user: any) => <User key={user.id} user={user} />)}
        </tbody>
      </table>
      <p>{ifNothing}</p>
    </>
  );
};

export default UsersList;
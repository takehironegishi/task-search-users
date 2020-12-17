import React, {useContext, useEffect, useState} from "react";
import User from './User';
import Button from "./Button";
import UserContext from "../contexts/UserContext";


const UsersList = ({state}: any): JSX.Element => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [ifNothing, setIfNothing] = useState('');
  const { pageNumber } = useContext(UserContext);

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
      {
        state.length !== 0
        ?
            <div><Button disabled={pageNumber === 1} value={'戻る'} /><Button disabled={false} value={'進む'} /></div>
        :
            ''
      }
      <p>{ifNothing}</p>
    </>
  );
};

export default UsersList;
import React, {useContext, useEffect, useState} from "react";
import User from './User';
import Button from "./Button";
import UserContext from "../contexts/UserContext";

const UsersList: React.FC<{ state: object[] }> = ({ state }): JSX.Element => {
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);
  const [ifNothing, setIfNothing] = useState<string>('');
  const { pageNumber, loading } = useContext(UserContext);

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
      {
        state.length !== 0
        ?
            <div><Button disabled={pageNumber === 1 || loading} value={'戻る'} /><Button disabled={loading} value={'進む'} /></div>
        :
            ''
      }
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
            <div><Button disabled={pageNumber === 1 || loading} value={'戻る'} /><Button disabled={loading} value={'進む'} /></div>
        :
            ''
      }
      <p>{ifNothing}</p>
    </>
  );
};

export default UsersList;
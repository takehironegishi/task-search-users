import { ActionType, UserType } from '../types/type';

const users = (
  state: UserType[] = [],
  action: ActionType
): UserType[] | never => {
  switch (action.type) {
    case 'search_users':
      return [...action.userData];
    default:
      throw new Error();
  }
};

export default users;

type ActionType = {
  type: 'search_users';
  userData: object[];
};

const users = (state: object[] = [], action: ActionType): object[] | never => {
    switch (action.type) {
      case 'search_users':
        return [...action.userData];
      default:
        throw new Error();
    }
};

export default users;
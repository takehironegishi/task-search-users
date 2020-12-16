export const SEARCH_USERS: string = 'search_users';

// TODO 型指定
const users = (state: any = [], action: any) => {
    switch (action.type) {
      case SEARCH_USERS:
        const objectiveUser: string | number = action.userName;
        return state; // TODO 戻り値変更
      default:
        return state;
    }
};

export default users;
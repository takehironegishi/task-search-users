// TODO 型指定
const users = (state: any = [], action: any) => {
    switch (action.type) {
      case 'search_users':
        return [...action.userData];
      default:
        return state;
    }
};

export default users;
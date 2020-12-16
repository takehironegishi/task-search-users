// TODO 型指定
const users = (state: any = [], action: any) => {
    switch (action.type) {
      case 'search_users':
        console.log(action.userData); // TODO debug用のため削除
        return action.userData;
      default:
        return state;
    }
};

export default users;
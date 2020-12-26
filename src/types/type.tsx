import { AxiosError } from 'axios';

export type AxiosType = {
  [key: string]: string | number | object;
};

export type ButtonType = {
  disabled: boolean;
  value: '進む' | '戻る' | '検索';
};

export type SearchFormType = {
  setUserName: React.Dispatch<React.SetStateAction<string | number>>;
  error: AxiosError<boolean> | undefined;
};

export type UserType = {
  id?: number;
  html_url?: string;
  avatar_url?: string;
  login?: string;
};

export type ActionType = {
  type: 'search_users';
  userData: UserType[];
};

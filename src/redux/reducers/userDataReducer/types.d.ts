interface UserState {
  token: string;
  refreshToken: string;
  isAuthed: boolean;
  roles: string[];
  info: any;
}

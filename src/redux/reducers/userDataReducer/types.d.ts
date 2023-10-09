interface UserState {
  token: string;
  refreshToken: string;
  isAuthed: boolean;
  info: {
    display_name: string;
    country: string;
    product: string;
    followers: {
      total: number;
    };
    images: {
      url: string;
    }[];
  };
}

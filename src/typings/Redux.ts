interface ActionType { type?: string; }

export interface ReduxState {
  authState: AuthState;
  navState: any;
}

export interface AuthAction extends ActionType {
  isLoggedIn?: boolean;
}

export interface AuthState {
  isLoggedIn: boolean;
  isFetching: boolean;
}

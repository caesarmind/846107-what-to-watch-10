export enum AppRoute {
  Main = '/',
  Signin = '/login',
  MyList = '/mylist',
  Films = '/films/:id',
  Player = '/Player/:id',
  AddReview = '/films:id/review',


}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


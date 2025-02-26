  
  // app/exercise3/data-fetchers/UserDataFetcher.ts
  import { User } from '../types';
  import { BaseDataFetcher } from './BaseDataFetcher';
  
  export class UserDataFetcher extends BaseDataFetcher<User> {
    protected endpoint = '/api/users';
  
    protected transformData(data: any): User[] {
      return data.users;
    }
  }
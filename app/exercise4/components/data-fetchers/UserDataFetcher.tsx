import { User } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

// app/exercise4/lib/data-fetchers/UserDataFetcher.ts
export class UserDataFetcher extends BaseDataFetcher<User> {
  protected endpoint = '/api/users';

  constructor(baseUrl?: string) {
    super(baseUrl);
  }

  protected transformData(data: any): User[] {
    return data.users;
  }
}

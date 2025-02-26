// app/exercise5/lib/data-fetchers/UserDataFetcher.ts
import { User } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

export class UserDataFetcher extends BaseDataFetcher<User> {
  constructor() {
    super('users');
  }

  protected transformData(data: unknown): User[] {
    if (!data || typeof data !== 'object' || !('users' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { users: User[] }).users;
  }
}
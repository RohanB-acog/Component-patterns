import { User } from "../../types";
import { BaseDataFetcher } from "./BaseDataFetcher";

// app/exercise5/lib/data-fetchers/UserDataFetcher.ts
export class UserDataFetcher extends BaseDataFetcher<User> {
  protected getEndpoint(): string {
    return '/api/users';
  }

  protected transformData(data: unknown): User[] {
    if (!data || typeof data !== 'object' || !('users' in data)) {
      throw new Error('Invalid data format');
    }
    return (data as { users: User[] }).users;
  }
}

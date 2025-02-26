// app/lib/fetchers/UserFetcher.ts
import { BaseFetcher } from '../BaseFetcher';

export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserFetcher extends BaseFetcher<User[]> {
  constructor() {
    super('/api/users');
  }

  protected transformData(data: any): User[] {
    return data.users;
  }
}


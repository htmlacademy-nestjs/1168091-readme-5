import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  id: string;

  @Expose()
  userName: string;

  @Expose()
  email: string;

  @Expose()
  createdAt: string;

  @Expose()
  avatar?: string;
}

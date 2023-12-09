import { Expose } from 'class-transformer';

export class CreatedUserRdo {
  @Expose()
  id: string;

  @Expose()
  userName: string;

  @Expose()
  email: string;

  @Expose()
  createdAt: string;

  @Expose()
  token: string;

  @Expose()
  avatar?: string;
}

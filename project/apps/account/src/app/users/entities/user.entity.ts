import { AuthUser } from '@project/shared/types';
import { Entity } from '@project/shared/core';
import { genSalt, hash, compare } from 'bcrypt';
import { SALT_ROUNDS } from '../../account.constant';

export class UserEntity implements AuthUser, Entity<string> {
  avatar?: string;
  createdAt: string;
  email: string;
  id?: string;
  passwordHash: string;
  updatedAt: string;

  constructor(user: AuthUser) {
    this.populate(user)
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  public populate(authUser: AuthUser): void {
    this.email = authUser.email;
    if (authUser.avatar) {
      this.avatar = authUser.avatar;
    }
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}

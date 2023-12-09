import { AuthUser } from '@project/shared/types';
import { Entity } from '@project/shared/core';

export class UserEntity implements AuthUser, Entity<string> {
  avatar?: string;
  createdAt: string;
  email: string;
  id?: string;
  login: string;
  passwordHash: string;
  updatedAt: string;

  constructor(user: AuthUser) {
    this.populate(user)
  }

  public toPOJO() {
    return {
      id: this.id,
      login: this.login,
      email: this.email,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  public populate(authUser: AuthUser): void {
    this.email = authUser.email;
    this.login = authUser.login;
    if (authUser.avatar) {
      this.avatar = authUser.avatar;
    }
  }
}

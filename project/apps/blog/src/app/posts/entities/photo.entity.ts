import { AbstractPostEntity } from './abstract-post.entity';
import { ContentType, PhotoPost } from '@project/shared/types';
import * as perf_hooks from 'perf_hooks';

export class PhotoEntity extends AbstractPostEntity implements PhotoPost {
  photo: string;
  postType: ContentType.PHOTO;

  constructor(photoPost: PhotoPost) {
    super(photoPost);
    this.photo = photoPost.photo;
  }
}

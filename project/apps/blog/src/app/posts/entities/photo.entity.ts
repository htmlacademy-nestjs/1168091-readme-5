import { AbstractPostEntity } from './abstract-post.entity';
import { ContentType, PhotoPost } from '@project/shared/types';

export class PhotoEntity extends AbstractPostEntity implements PhotoPost {
  photo: string;
  postType: ContentType.PHOTO;

  constructor(photoPost: PhotoPost) {
    super(photoPost);
    this.photo = photoPost.photo;
    this.postType = ContentType.PHOTO
  }

  public toPOJO(): any {
    return {
      ... super.toPOJO(),
      ...this
    }
  }
}

import { AbstractPost } from './astract-post.inteface';
import { ContentType } from '@project/shared/types';

export interface PhotoPost extends AbstractPost {
  photo: string;
  postType: ContentType.PHOTO;
}

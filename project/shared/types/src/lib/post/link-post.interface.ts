import { AbstractPost } from './astract-post.inteface';
import { ContentType } from '@project/shared/types';

export interface LinkPost extends AbstractPost {
  url: string
  description: string
  postType: ContentType.LINK
}

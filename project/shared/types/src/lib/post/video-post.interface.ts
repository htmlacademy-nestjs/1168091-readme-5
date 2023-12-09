import { AbstractPost } from './astract-post.inteface';
import { ContentType, PostState } from '@project/shared/types';

export interface VideoPost extends AbstractPost {
  title: string
  videoLink: string
  postType: ContentType.VIDEO
}

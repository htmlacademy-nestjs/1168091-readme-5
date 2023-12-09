import { AbstractPost } from './astract-post.inteface';
import { ContentType } from '@project/shared/types';

export interface TextPost extends AbstractPost{
  title: string
  text: string
  announce: string
  postType: ContentType.TEXT
}

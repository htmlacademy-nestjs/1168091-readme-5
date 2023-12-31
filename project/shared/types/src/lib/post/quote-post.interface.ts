import { AbstractPost } from './astract-post.inteface';
import { ContentType } from '@project/shared/types';

export interface QuotePost extends AbstractPost {
  text: string;
  quoteAuthorId: string;
  postType: ContentType.QUOTE;
}

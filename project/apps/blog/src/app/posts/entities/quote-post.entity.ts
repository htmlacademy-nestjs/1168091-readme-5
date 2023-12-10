import { AbstractPostEntity } from './abstract-post.entity';
import { ContentType, QuotePost } from '@project/shared/types';

export class QuotePostEntity extends AbstractPostEntity implements QuotePost {
  postType: ContentType.QUOTE;
  quoteAuthorId: number;
  text: string;

  constructor(quotePost: QuotePost) {
    super(quotePost);
    this.quoteAuthorId = quotePost.quoteAuthorId;
    this.text = quotePost.text;
  }
}

import { AbstractPostEntity } from './abstract-post.entity';
import { ContentType, TextPost } from '@project/shared/types';

export class TextPostEntity extends AbstractPostEntity implements TextPost {
  announce: string;
  postType: ContentType.TEXT;
  text: string;
  title: string;

  constructor(textPost: TextPost) {
    super(textPost);
    this.text = textPost.text;
    this.title = textPost.title;
    this.postType = ContentType.TEXT
  }

  public toPOJO(): any {
    return {
      ... super.toPOJO(),
      ...this
    }
  }
}

import { AbstractPostEntity } from './abstract-post.entity';
import { ContentType, LinkPost } from '@project/shared/types';

export class LinkPostEntity extends AbstractPostEntity implements LinkPost {
  description: string;
  postType: ContentType.LINK;
  url: string;

  constructor(linkPost: LinkPost) {
    super(linkPost);
    this.description = linkPost.description;
    this.url = linkPost.url;
    this.postType = ContentType.LINK;
  }

  public toPOJO(): any {
    return {
      ... super.toPOJO(),
      ...this
    }
  }

}

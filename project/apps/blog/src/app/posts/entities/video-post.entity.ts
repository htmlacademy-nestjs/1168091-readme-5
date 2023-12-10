import { AbstractPostEntity } from './abstract-post.entity';
import { ContentType, VideoPost } from '@project/shared/types';

export class VideoPostEntity extends AbstractPostEntity implements VideoPost {
  postType: ContentType.VIDEO;
  title: string;
  videoLink: string;
  constructor(videoPost: VideoPost) {
    super(videoPost);
    this.title = videoPost.title;
    this.videoLink = videoPost.videoLink;
  }
}

import {ContentType} from './content-type.enum';
import {PostState} from './post-state.enum';

export interface Post {
  id: number,
  title?: string,
  content: string,
  postType: ContentType,
  postState: PostState,
  isRepost: boolean,
  quoteAuthorId?: number,
  originalPostId?: number,
  announce?: string,
  description?: string,
  createdAt: string,
  updatedAt: string,
}

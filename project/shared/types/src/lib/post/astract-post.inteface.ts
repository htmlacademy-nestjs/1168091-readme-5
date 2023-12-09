import {ContentType} from './content-type.enum';
import {PostState} from './post-state.enum';

export interface AbstractPost {
  id: number,
  postType: ContentType,
  postState: PostState,
  isRepost: boolean,
  originalPostId?: number,
  createdAt: string,
  updatedAt: string,
}

import {PostState} from './post-state.enum';

export interface AbstractPost {
  id: string;
  authorId: string;
  postState: PostState;
  isRepost: boolean;
  originalPostId?: number;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

import { VideoPostRdo } from './video-post.rdo';
import { TextPostRdo } from './text-post.rdo';
import { QuotePostRdo } from './quote-post.rdo';
import { PhotoPostRdo } from './photo-post.rdo';
import { LinkPostRdo } from './link-post.rdo';
import { ContentType } from '@project/shared/types';


export type PostRdo = VideoPostRdo | TextPostRdo | QuotePostRdo | PhotoPostRdo | LinkPostRdo;


export { VideoPostRdo, TextPostRdo, QuotePostRdo, PhotoPostRdo, LinkPostRdo };

export const postTypeToRdoClass = {
  [ContentType.VIDEO]: VideoPostRdo,
  [ContentType.TEXT]: TextPostRdo,
  [ContentType.QUOTE]: QuotePostRdo,
  [ContentType.PHOTO]: PhotoPostRdo,
  [ContentType.LINK]: LinkPostRdo,
};

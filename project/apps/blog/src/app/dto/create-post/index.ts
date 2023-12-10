import {VideoPostDto} from './video-post.dto';
import {PhotoPostDto} from './photo-post.dto';
import {LinkPostDto} from './link-post.dto';
import {QuotePostDto} from './quote-post.dto';
import {TextPostDto} from './text-post.dto';

export type CreatePostDto = VideoPostDto | PhotoPostDto | LinkPostDto | QuotePostDto | TextPostDto;

export { VideoPostDto, PhotoPostDto, LinkPostDto, QuotePostDto, TextPostDto }

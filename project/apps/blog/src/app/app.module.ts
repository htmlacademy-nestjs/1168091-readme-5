import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { TagsModule } from './tags/tags.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [PostsModule, CommentsModule, LikesModule, TagsModule, SearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

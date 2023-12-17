import { Module } from '@nestjs/common';
import { FileLoaderController } from './file-loader.controller';
import { FileLoaderService } from './file-loader.service';
@Module({
  imports: [],
  controllers: [FileLoaderController],
  providers: [FileLoaderService],
})
export class AppModule {}

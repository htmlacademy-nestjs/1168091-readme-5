import { Injectable } from '@nestjs/common';
import { CommentsMemoryRepository } from './comments-memory.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsMemoryRepository
  ) {
  }

  async create(createCommentDto: CreateCommentDto){
    const dateNow = new Date().toDateString();
    const newComment = new CommentEntity({
      ...createCommentDto,
      createdAt: dateNow,
      updatedAt: dateNow
    })

    return await this.commentsRepository.save(newComment);
  }

  async update(updateCommentDto: UpdateCommentDto) {}

  async delete(id: string) {}

  async getComment(id: string) {}
}

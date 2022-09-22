import {
    Controller,
    Get,
    UseInterceptors,
    ClassSerializerInterceptor, Query,
  } from '@nestjs/common';
import { PostsService } from './posts.service';

   
  @Controller('posts')
  @UseInterceptors(ClassSerializerInterceptor)
  export default class PostsController {
    constructor(
      private readonly postsService: PostsService
    ) {}
   
    @Get()
    async getPosts(@Query('search') search: string) {
      if (search) {
        return this.postsService.searchForPosts(search);
      }
      return this.postsService.searchForPosts(search);
    }
   
    // (...)
   
  }
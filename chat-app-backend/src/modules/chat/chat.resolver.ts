import { Inject, } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription, Query } from '@nestjs/graphql';
import { Chat } from './../../models/chatModel';
import { ChatService } from './chat.service';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(@Inject(ChatService) private readonly chatService: ChatService) { }

  @Query((returns) => [Chat], {
    description: 'It returns all registered users',
  })
  async getAllMessages() {
    return this.chatService.getMessage();
  }
  @Subscription((returns) => Chat)
  messageAdded() {
    return this.chatService.messageAdded();
  }

  @Mutation((returns) => Chat)
  async sendMessage(
    @Args('message') message: string,
    @Args('userId') userId: number | null,
  ) {
    return this.chatService.sendMessage(message, userId);
  }
}

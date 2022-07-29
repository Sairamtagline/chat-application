import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Chat } from './../../models/chatModel';
import { ChatService } from './chat.service';

@Resolver(() => Chat)
export class ChatResolver {
  constructor(@Inject(ChatService) private readonly chatService: ChatService) { }

  @Query(() => [Chat], {
    description: 'It returns all messages',
  })
  async getAllMessages() {
    return this.chatService.getMessage();
  }

  @Subscription(() => Chat, {
    description: 'It returns new message with user details',
  })
  messageAdded() {
    return this.chatService.messageAdded();
  }

  @Mutation(() => Chat, {
    description: 'It add chat message and return latest message',
  })
  async sendMessage(
    @Args('message') message: string,
    @Args('userId') userId: number | null,
  ) {
    return this.chatService.sendMessage(message, userId);
  }
}

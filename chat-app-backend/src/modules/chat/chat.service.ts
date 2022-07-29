import { PrismaService } from './../../databaseService';
import { Inject, Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions'
export const pubsub = new PubSub();

@Injectable()
export class ChatService {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

    sendMessage = async (message: string, userId: number | null) => {
        const msg = await this.prismaService.chat.create({ data: { message, userId } })
        const latestChat = await this.prismaService.chat.findFirst({
            where: {
                id: msg.id
            },
            include: {
                users: true
            }
        })
        pubsub.publish('MESSAGE_ADDED', { messageAdded: latestChat });
        return await this.prismaService.chat.create({ data: { message, userId } })
    };

    getMessage = async () => {
        return this.prismaService.chat.findMany({
            include: {
                users: true
            }
        })
    };

    messageAdded = async () => {
        return pubsub.asyncIterator('MESSAGE_ADDED');
    };
}
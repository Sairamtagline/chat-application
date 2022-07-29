import { subscriptionEvents } from './../../common/subscriptionEvents';
import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PrismaService } from './../../databaseService';
export const pubsub = new PubSub();

@Injectable()
export class ChatService {
    constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

    //Add new message service
    async sendMessage(message: string, userId: number | null) {
        try {
            const msg = await this.prismaService.chat.create({ data: { message, userId } })
            const latestChat = await this.prismaService.chat.findFirst({
                where: {
                    id: msg.id
                },
                include: {
                    users: true
                }
            })

            //Publish latest message
            pubsub.publish(subscriptionEvents.MESSAGE_ADDED, { messageAdded: latestChat });
            return msg
        } catch (error) {
            throw new HttpException("BadRequestException", HttpStatus.BAD_REQUEST)
        }
    };

    //Get all message service
    async getMessage() {
        try {
            return this.prismaService.chat.findMany({
                orderBy: [{
                    createdAt: "asc"
                }],
                include: {
                    users: true
                }
            })
        } catch (error) {
            throw new HttpException("BadRequestException", HttpStatus.BAD_REQUEST)
        }
    };

    //Message subscription service
    async messageAdded() {
        try {
            return pubsub.asyncIterator(subscriptionEvents.MESSAGE_ADDED);
        } catch (error) {
            throw new HttpException("BadRequestException", HttpStatus.BAD_REQUEST)
        }
    };
}
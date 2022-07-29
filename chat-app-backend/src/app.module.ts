import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './databaseService';
import { GraphqlOptions } from './modules/graphql.option';
import { ChatModule } from './modules/chat/chat.module';
import { PubSub } from 'graphql-subscriptions'
import { ConfigModule,ConfigService } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      // installSubscriptionHandlers: true, 
      driver: ApolloDriver,
      useClass: GraphqlOptions,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService,
      ) => ({
        // playground: Boolean(configService.get('GRAPHQL_PLAYGROUND')),
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        installSubscriptionHandlers: true
      })
    }),
    UserModule,
    ChatModule
  ],
  controllers: [],
  providers: [PrismaService,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },],
})
export class AppModule { }

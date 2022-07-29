import { ApolloDriver } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './databaseService';
import { ChatModule } from './modules/chat/chat.module';
import { GraphqlOptions } from './modules/graphql.option';
import { UserModule } from './modules/user/user.module';

@Global()
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GraphqlOptions,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService,
      ) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        installSubscriptionHandlers: true
      })
    }),
    UserModule,
    ChatModule
  ],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule { }

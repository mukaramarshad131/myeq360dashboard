import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
constructor(){
    super({
        datasources: {
            db:{
                url:process.env.POSTGRES_PRISMA_URL
        }
    }
    })
}
async getUserWithDetails(id: number) {
    try {
      const user = await this.user.findUnique({
        where: {
          id
        },
        include: {
          roles: true,
          profile: true,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }
      const {hash, ...rest} =user
      return rest;
    } catch (error) {
      // Handle errors (e.g., log or transform them as needed)
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }
async onModuleInit() {
    await this.$connect();
}
async onModuleDestroy() {
    await this.$disconnect();
}
}
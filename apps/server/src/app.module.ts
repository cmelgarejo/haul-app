import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { InspectionsModule } from "./inspections/inspections.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VinModule } from "./vin/vin.module";

const MONGO_URL = process.env.MONGO_URL || ""; //if it is not set should fail, and hard

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: MONGO_URL,
      synchronize: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
    InspectionsModule,
    VinModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

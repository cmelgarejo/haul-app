import { Module } from "@nestjs/common";
import { InspectionsService } from "./inspections.service";
import { InspectionsController } from "./inspections.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Inspection } from "./entities/inspection.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Inspection])],
  controllers: [InspectionsController],
  providers: [InspectionsService],
})
export class InspectionsModule {}

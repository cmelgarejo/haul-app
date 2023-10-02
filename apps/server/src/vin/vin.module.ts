import { Module } from "@nestjs/common";
import { VinService } from "./vin.service";
import { VinController } from "./vin.controller";
import { DecodedVIN } from "./entities/decoded-vin.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([DecodedVIN])],
  controllers: [VinController],
  providers: [VinService],
})
export class VinModule {}

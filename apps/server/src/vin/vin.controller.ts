import { Controller, Get, Param, Query } from "@nestjs/common";
import { VinService } from "./vin.service";

@Controller("decode-vin")
export class VinController {
  constructor(private readonly vinService: VinService) {}

  @Get(":id")
  decodeVIN(@Param("id") vin: string, @Query("modelyear") modelyear?: string) {
    return this.vinService.decodeVIN(vin, modelyear);
  }
}

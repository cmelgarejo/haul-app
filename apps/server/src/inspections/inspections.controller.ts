import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { InspectionsService } from "./inspections.service";

@Controller("inspections")
export class InspectionsController {
  constructor(private inspectionsSvc: InspectionsService) {}

  @Get()
  findAll(
    @Query("page", new ParseIntPipe({ optional: true })) page: number = 1,
    @Query("limit", new ParseIntPipe({ optional: true })) limit: number = 10,
    @Query("filter") filter?: string,
    @Query("sortBy") sortBy?: string,
    @Query("sortDir") sortDir?: string,
  ) {
    return this.inspectionsSvc.findAll(page, limit, filter, sortBy, sortDir);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.inspectionsSvc.findOne(id);
  }
}

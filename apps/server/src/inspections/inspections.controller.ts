import { Controller, Get, Param, Query } from "@nestjs/common";
import { InspectionsService } from "./inspections.service";

@Controller("inspections")
export class InspectionsController {
  constructor(private inspectionsSvc: InspectionsService) {}

  @Get()
  findAll(
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Query("filter") filter: string,
    @Query("sortBy") sortBy: string,
    @Query("sortDir") sortDir: string = "ASC",
  ) {
    return this.inspectionsSvc.findAll(page, limit, filter, sortBy, sortDir);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.inspectionsSvc.findOne(id);
  }
}

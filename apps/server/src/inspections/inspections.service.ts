import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { ObjectId } from "mongodb";
import { Inspection } from "./entities/inspection.entity";

@Injectable()
export class InspectionsService {
  @InjectRepository(Inspection)
  private inspections: MongoRepository<Inspection>;

  findAll(page: number = 0, limit: number = 10, filter?: string, sortBy?: string, sortDir?: string) {
    const where = filter ? JSON.parse(filter) : undefined;
    // awful way to make a case-insensitive search
    if (where) where[Object.keys(where)[0]] = new RegExp(where[Object.keys(where)[0]], "i");
    const order = sortBy ? { [sortBy]: sortDir ? sortDir : "ASC" } : undefined;
    return this.inspections.findAndCount({
      select: ["id", "inspection_date", "report_number", "violations", "vehicles"],
      skip: page > 0 ? page * limit : 0,
      take: limit ? limit : 10,
      where,
      order,
    });
  }

  async findOne(id: string) {
    const record = await this.inspections.findOne({ where: { _id: new ObjectId(id) } });
    if (!record) throw new NotFoundException("Record not found");
    return record;
  }
}

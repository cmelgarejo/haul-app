import { Injectable } from "@nestjs/common";
import { DecodedVIN } from "./entities/decoded-vin.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";

@Injectable()
export class VinService {
  @InjectRepository(DecodedVIN)
  private vinRepo: MongoRepository<DecodedVIN>;

  async decodeVIN(vin: string, modelyear?: string) {
    const where: DecodedVIN = { VIN: vin } as DecodedVIN;
    if (modelyear) where.ModelYear = modelyear;
    // Get the cached decoded VIN, if it exists
    const decodedVIN = await this.vinRepo.findOne({ where });
    if (!decodedVIN) return await this.getAndCacheDecodedVIN(vin, modelyear);
    return decodedVIN;
  }

  async getAndCacheDecodedVIN(vin: string, modelyear?: string): Promise<DecodedVIN> {
    // NHTSA API call example:
    // https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/3HAEUMML0NL514491?format=json
    const qsModelYear: string = modelyear ? `&modelyear=${modelyear}` : "";
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json${qsModelYear}`;
    const response = await fetch(url);
    const json = await response.json();
    const decodedVIN = json["Results"][0] as DecodedVIN;
    decodedVIN && (await this.vinRepo.save(decodedVIN));
    return decodedVIN;
  }
}

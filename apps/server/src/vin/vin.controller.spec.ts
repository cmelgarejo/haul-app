import { Test, TestingModule } from "@nestjs/testing";
import { VinController } from "./vin.controller";
import { VinService } from "./vin.service";

describe("VinController", () => {
  let controller: VinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinController],
      providers: [VinService],
    }).compile();

    controller = module.get<VinController>(VinController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

import { Column } from "typeorm";

export class Vehicle {
  @Column()
  unit: string;

  @Column()
  vehicle_id_number: string;

  @Column()
  unit_type: string;

  @Column()
  license_state: string;

  @Column()
  license_number: string;
}

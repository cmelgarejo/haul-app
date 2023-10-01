import { Column } from "typeorm";

export class Violation {
  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  oos: string;

  @Column()
  time_severity_weight: string;

  @Column()
  BASIC: string;

  @Column()
  unit: string;

  @Column()
  convicted_of_dif_charge: string;
}

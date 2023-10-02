import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Vehicles } from "./vehicle";
import { Violations } from "./violation";

@Entity({ name: "inspections" })
export class Inspection {
  @ObjectIdColumn()
  id: string;

  @Column()
  inspection_date: string;

  @Column()
  report_state: string;

  @Column()
  report_number: string;

  @Column()
  level: string;

  @Column()
  time_weight: string;

  @Column()
  Placarable_HM_Veh_Insp: string;

  @Column()
  HM_inspection: string;

  @Column()
  vehicles: Vehicles;

  @Column()
  violations: Violations;
}

import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Vehicle } from "./vehicle";
import { Violation } from "./violation";

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
  vehicles: Vehicle[];

  @Column()
  violations: Violation[];
}

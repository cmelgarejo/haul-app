import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: "decoded_vins" })
export class DecodedVIN {
  @ObjectIdColumn()
  id: string;

  @Column()
  ABS: string;

  @Column()
  ActiveSafetySysNote: string;

  @Column()
  AdaptiveCruiseControl: string;

  @Column()
  AdaptiveDrivingBeam: string;

  @Column()
  AdaptiveHeadlights: string;

  @Column()
  AdditionalErrorText: string;

  @Column()
  AirBagLocCurtain: string;

  @Column()
  AirBagLocFront: string;

  @Column()
  AirBagLocKnee: string;

  @Column()
  AirBagLocSeatCushion: string;

  @Column()
  AirBagLocSide: string;

  @Column()
  AutoReverseSystem: string;

  @Column()
  AutomaticPedestrianAlertingSound: string;

  @Column()
  AxleConfiguration: string;

  @Column()
  Axles: string;

  @Column()
  BasePrice: string;

  @Column()
  BatteryA: string;

  @Column()
  BatteryA_to: string;

  @Column()
  BatteryCells: string;

  @Column()
  BatteryInfo: string;

  @Column()
  BatteryKWh: string;

  @Column()
  BatteryKWh_to: string;

  @Column()
  BatteryModules: string;

  @Column()
  BatteryPacks: string;

  @Column()
  BatteryType: string;

  @Column()
  BatteryV: string;

  @Column()
  BatteryV_to: string;

  @Column()
  BedLengthIN: string;

  @Column()
  BedType: string;

  @Column()
  BlindSpotIntervention: string;

  @Column()
  BlindSpotMon: string;

  @Column()
  BodyCabType: string;

  @Column()
  BodyClass: string;

  @Column()
  BrakeSystemDesc: string;

  @Column()
  BrakeSystemType: string;

  @Column()
  BusFloorConfigType: string;

  @Column()
  BusLength: string;

  @Column()
  BusType: string;

  @Column()
  CAN_AACN: string;

  @Column()
  CIB: string;

  @Column()
  CashForClunkers: string;

  @Column()
  ChargerLevel: string;

  @Column()
  ChargerPowerKW: string;

  @Column()
  CoolingType: string;

  @Column()
  CurbWeightLB: string;

  @Column()
  CustomMotorcycleType: string;

  @Column()
  DaytimeRunningLight: string;

  @Column()
  DestinationMarket: string;

  @Column()
  DisplacementCC: string;

  @Column()
  DisplacementCI: string;

  @Column()
  DisplacementL: string;

  @Column()
  Doors: string;

  @Column()
  DriveType: string;

  @Column()
  DriverAssist: string;

  @Column()
  DynamicBrakeSupport: string;

  @Column()
  EDR: string;

  @Column()
  ESC: string;

  @Column()
  EVDriveUnit: string;

  @Column()
  ElectrificationLevel: string;

  @Column()
  EngineConfiguration: string;

  @Column()
  EngineCycles: string;

  @Column()
  EngineCylinders: string;

  @Column()
  EngineHP: string;

  @Column()
  EngineHP_to: string;

  @Column()
  EngineKW: string;

  @Column()
  EngineManufacturer: string;

  @Column()
  EngineModel: string;

  @Column()
  EntertainmentSystem: string;

  @Column()
  ErrorCode: string;

  @Column()
  ErrorText: string;

  @Column()
  ForwardCollisionWarning: string;

  @Column()
  FuelInjectionType: string;

  @Column()
  FuelTypePrimary: string;

  @Column()
  FuelTypeSecondary: string;

  @Column()
  GCWR: string;

  @Column()
  GCWR_to: string;

  @Column()
  GVWR: string;

  @Column()
  GVWR_to: string;

  @Column()
  KeylessIgnition: string;

  @Column()
  LaneCenteringAssistance: string;

  @Column()
  LaneDepartureWarning: string;

  @Column()
  LaneKeepSystem: string;

  @Column()
  LowerBeamHeadlampLightSource: string;

  @Column()
  Make: string;

  @Column()
  MakeID: string;

  @Column()
  Manufacturer: string;

  @Column()
  ManufacturerId: string;

  @Column()
  Model: string;

  @Column()
  ModelID: string;

  @Column()
  ModelYear: string;

  @Column()
  MotorcycleChassisType: string;

  @Column()
  MotorcycleSuspensionType: string;

  @Column()
  NCSABodyType: string;

  @Column()
  NCSAMake: string;

  @Column()
  NCSAMapExcApprovedBy: string;

  @Column()
  NCSAMapExcApprovedOn: string;

  @Column()
  NCSAMappingException: string;

  @Column()
  NCSAModel: string;

  @Column()
  NCSANote: string;

  @Column()
  NonLandUse: string;

  @Column()
  Note: string;

  @Column()
  OtherBusInfo: string;

  @Column()
  OtherEngineInfo: string;

  @Column()
  OtherMotorcycleInfo: string;

  @Column()
  OtherRestraintSystemInfo: string;

  @Column()
  OtherTrailerInfo: string;

  @Column()
  ParkAssist: string;

  @Column()
  PedestrianAutomaticEmergencyBraking: string;

  @Column()
  PlantCity: string;

  @Column()
  PlantCompanyName: string;

  @Column()
  PlantCountry: string;

  @Column()
  PlantState: string;

  @Column()
  PossibleValues: string;

  @Column()
  Pretensioner: string;

  @Column()
  RearAutomaticEmergencyBraking: string;

  @Column()
  RearCrossTrafficAlert: string;

  @Column()
  RearVisibilitySystem: string;

  @Column()
  SAEAutomationLevel: string;

  @Column()
  SAEAutomationLevel_to: string;

  @Column()
  SeatBeltsAll: string;

  @Column()
  SeatRows: string;

  @Column()
  Seats: string;

  @Column()
  SemiautomaticHeadlampBeamSwitching: string;

  @Column()
  Series: string;

  @Column()
  Series2: string;

  @Column()
  SteeringLocation: string;

  @Column()
  SuggestedVIN: string;

  @Column()
  TPMS: string;

  @Column()
  TopSpeedMPH: string;

  @Column()
  TrackWidth: string;

  @Column()
  TractionControl: string;

  @Column()
  TrailerBodyType: string;

  @Column()
  TrailerLength: string;

  @Column()
  TrailerType: string;

  @Column()
  TransmissionSpeeds: string;

  @Column()
  TransmissionStyle: string;

  @Column()
  Trim: string;

  @Column()
  Trim2: string;

  @Column()
  Turbo: string;

  @Column()
  VIN: string;

  @Column()
  ValveTrainDesign: string;

  @Column()
  VehicleDescriptor: string;

  @Column()
  VehicleType: string;

  @Column()
  WheelBaseLong: string;

  @Column()
  WheelBaseShort: string;

  @Column()
  WheelBaseType: string;

  @Column()
  WheelSizeFront: string;

  @Column()
  WheelSizeRear: string;

  @Column()
  Wheels: string;

  @Column()
  Windows: string;
}

"use client";
import { useEffect, useState } from "react";
import { Typography, CircularProgress, Card, IconButton, TextField } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Please double-check this import as 'next/navigation' might not be correct
import Status from "@web/app/components/Status";
import { Inspection } from "@server/inspections/entities/inspection.entity";
import { useTheme } from "@table-library/react-table-library/theme";
import { Vehicle } from "@server/inspections/entities/vehicle";
import { CompactTable } from "@table-library/react-table-library/compact";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Violation } from "@server/inspections/entities/violation";

const InspectionDetailView = ({ params }: { params: { id: string } }) => {
  const theme = useTheme(getTheme());
  const router = useRouter();
  const { id } = params;

  const getInspection = async (id: string) => {
    const res = await fetch(`/api/inspections/${id}`);
    setInspection(await res.json());
  };

  const [inspection, setInspection] = useState<Inspection | undefined>(undefined);

  useEffect(() => {
    getInspection(id);
  }, [id]);

  if (!inspection)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );

  const vehiclesColumns = [
    {
      label: "Unit",
      resize: true,
      renderCell: (item: Vehicle) => item.unit,
    },
    {
      label: "Type",
      resize: true,
      renderCell: (item: Vehicle) => item.unit_type,
    },
    {
      label: "Plate State",
      resize: true,
      renderCell: (item: Vehicle) => item.license_state,
    },
    {
      label: "Plate Number",
      resize: true,
      renderCell: (item: Vehicle) => item.license_number,
    },
    {
      label: "VIN",
      resize: true,
      renderCell: (item: Vehicle) => item.vehicle_id_number,
    },
  ];
  const violationsColumns = [
    {
      label: "Code",
      resize: true,
      renderCell: (item: Violation) => item.code,
    },
    {
      label: "Section",
      resize: true,
      renderCell: () => "-",
      // renderCell: (item: Violation) => "Section",
    },
    {
      label: "Unit",
      resize: true,
      renderCell: (item: Violation) => item.unit,
    },
    {
      label: "OOS",
      resize: true,
      renderCell: (item: Violation) => item.oos,
    },
    {
      label: "Description",
      resize: true,
      renderCell: (item: Violation) => item.description,
    },
    {
      label: "IN SMS",
      resize: true,
      renderCell: (item: Violation) => item.convicted_of_dif_charge,
    },
    {
      label: "BASIC",
      resize: true,
      renderCell: (item: Violation) => item.BASIC,
    },
  ];
  const date = new Date(inspection.inspection_date);
  return (
    <div className="min-h-screen">
      <div className="flex flex-col space-y-4 w-full">
        <div id="header" className="flex items-center mb-2 w-full">
          <IconButton color="primary" aria-label="Go back" onClick={() => router.back()}>
            <FaArrowLeft />
          </IconButton>
          <Typography variant="h3" className="font-bold ml-2">
            {inspection.report_number}
          </Typography>
        </div>
        <div id="content" className="flex mb-2 w-full">
          <div id="overview" className="flex-grow bg-white p-4 m-2 rounded shadow-md">
            <div className="flex w-full mb-4">
              <div className="w-1/2 pr-4">
                <div className="w-full pt-4 pl-4 h-14 bg-gray-100 rounded-sm">
                  {inspection.violations.violation.BASIC ? (
                    <Status text="Unresolved" color="error" />
                  ) : (
                    <Status text="No Violation" color="success" />
                  )}
                </div>
              </div>
              <div className="w-1/2">
                <TextField fullWidth label="Report number" variant="filled" value={inspection.report_number} />
              </div>
            </div>

            <div className="flex w-full mb-4">
              <div className="w-1/2 pr-4">
                <TextField
                  fullWidth
                  label="#USDOT"
                  variant="filled"
                  value={inspection.vehicles.vehicle[0].license_number}
                />
              </div>
              <div className="w-1/2">
                <TextField fullWidth label="Report State" variant="filled" value={inspection.report_state} />
              </div>
            </div>

            <div className="flex w-full mb-4">
              <div className="w-1/2 pr-4">
                <TextField
                  label="Date"
                  fullWidth
                  variant="filled"
                  value={date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
                />
              </div>
              <div className="w-1/2 flex">
                <div className="w-1/2 pr-4">
                  <TextField label="Start time" variant="filled" value={"00:00"} />
                </div>
                <div className="w-1/2 pr-4">
                  <TextField label="End time" variant="filled" value={"00:00"} />
                </div>
              </div>
            </div>

            <div className="flex w-full mb-4">
              <div className="w-1/2 pr-4">
                <TextField fullWidth label="Level" variant="filled" value={inspection.level} />
              </div>
              <div className="w-1/2">
                <TextField fullWidth label="Facility" variant="filled" value={"Facility"} />
              </div>
            </div>

            <div className="flex w-full mb-4">
              <div className="w-1/2 pr-4">
                <TextField fullWidth label="Post Crash Inspection" variant="filled" value={inspection.HM_inspection} />
              </div>
              <div className="w-1/2">
                <TextField
                  fullWidth
                  label="Hazmat Placard Required"
                  variant="filled"
                  value={inspection.Placarable_HM_Veh_Insp}
                />
              </div>
            </div>
            <div className="flex w-full">
              <CompactTable columns={vehiclesColumns} data={{ nodes: inspection.vehicles.vehicle }} theme={theme} />
            </div>
            <div className="flex w-full">
              <CompactTable
                columns={violationsColumns}
                data={{ nodes: [inspection.violations.violation] }}
                theme={theme}
              />
            </div>
          </div>
          <div id="vehicle_info" className="flex-grow">
            <div id="truck" className="m-2">
              {/* Truck info cards */}
              <Card className="p-4">{/* Truck info */}</Card>
            </div>
            <div id="trailer" className="m-2">
              {/* Trailer info cards */}
              <Card className="p-4">{/* Trailer info */}</Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectionDetailView;

import { Avatar, Chip, CircularProgress } from "@mui/material";
import { DecodedVIN } from "@server/vin/entities/decoded-vin.entity";
import { useEffect, useState } from "react";
import { FaRegRectangleList, FaTrailer } from "react-icons/fa6";
import { BsTruckFlatbed } from "react-icons/bs";

type TTCardProps = {
  vin: string;
  type: string;
};

export default function TTCard({ vin, type }: TTCardProps) {
  const [data, setData] = useState<DecodedVIN | undefined>();
  const [loading, setLoading] = useState(false);
  const fetchData = async (vin: string) => {
    setLoading(true);
    if (vin !== "") {
      const response = await fetch(`/api/decode-vin/${vin}`);
      const data = await response.json();
      setData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(vin);
  }, [vin]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-auto">
        <CircularProgress />
      </div>
    );
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl pt-4 pb-4 pl-8 pr-8">
      <div className="flex flex-grow flex-row items-center">
        <div className="basis-1/3">
          <Avatar sx={{ width: 64, height: 64 }} className="bg-gray-100">
            {type?.toLowerCase().indexOf("truck") >= 0 ? (
              <BsTruckFlatbed size={48} className="text-gray-300" />
            ) : (
              <FaTrailer size={48} className="text-gray-300" />
            )}
          </Avatar>
        </div>
        <div className="basis-2/3">
          <div className="flex justify-between align-middle mt-4">
            <Chip
              sx={{
                width: 32,
                height: 32,
                "& .MuiChip-label": {
                  paddingLeft: "4px",
                  paddingBottom: "4px",
                  textOverflow: "initial",
                  fontWeight: "bold",
                  color: "rgb(209 213 219)",
                },
                borderColor: "rgb(209 213 219)",
                borderWidth: 2,
              }}
              label={<BsTruckFlatbed size={20} className="text-gray-300" />}
              variant="outlined"
            />
            <div className="flex flex-grow items-center">
              <p className="ml-2 font-semibold">
                {data?.ModelYear ?? ""} {data?.Model ?? ""}
              </p>
            </div>
          </div>
          <div className="flex flex-wrapjustify-between align-middle mt-4">
            <Chip
              sx={{
                width: 32,
                height: 32,
                "& .MuiChip-label": {
                  paddingLeft: "4px",
                  paddingBottom: "0px",
                  textOverflow: "initial",
                  fontWeight: "bold",
                  color: "rgb(209 213 219)",
                },
                borderColor: "rgb(209 213 219)",
                borderWidth: 2,
              }}
              label={<FaRegRectangleList size={20} className="text-gray-300" />}
              variant="outlined"
            />
            <div className="flex flex-grow items-center">
              <p className="ml-2 font-semibold">{data?.VehicleDescriptor ?? ""}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between align-middle mt-4">
        <Chip
          sx={{
            width: 32,
            height: 32,
            "& .MuiChip-label": {
              paddingLeft: "3px",
              textOverflow: "initial",
              fontWeight: "bold",
              color: "rgb(209 213 219)",
            },
            borderColor: "rgb(209 213 219)",
            borderWidth: 2,
          }}
          label="VIN"
          variant="outlined"
        />
        <div className="flex flex-grow items-center">
          <p className="ml-2 align-middle font-semibold">{vin}</p>
        </div>
      </div>
      <div className="flex justify-between align-middle mt-4">
        <Chip
          sx={{
            width: 32,
            height: 32,
            "& .MuiChip-label": {
              paddingLeft: "4px",
              paddingBottom: "4px",
              textOverflow: "initial",
              fontWeight: "bold",
              color: "rgb(209 213 219)",
            },
            borderColor: "rgb(209 213 219)",
            borderWidth: 2,
          }}
          label={<BsTruckFlatbed size={20} className="text-gray-300" />}
          variant="outlined"
        />
        <div className="flex flex-grow items-center">
          <p className="ml-2 font-semibold">{data?.Make ?? ""}</p>
        </div>
      </div>
    </div>
  );
}

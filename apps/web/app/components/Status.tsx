import { Badge } from "@mui/material";

const Status = ({ text, color }) => {
  return (
    <div style={{ display: "flex" }}>
      <Badge
        badgeContent=""
        color={color}
        variant="dot"
        anchorOrigin={{ vertical: "center", horizontal: "left" }}
        style={{ transform: "translate(0px, 7px)" }}
      ></Badge>
      <p style={{ transform: "translate(15px, 0px)" }}>{text}</p>
    </div>
  );
};

export default Status;

import { Badge } from "@mui/material";
import "./styles.css";

type StatusProps = {
  text: string;
  color: "success" | "error";
};

const Status = ({ text, color }: StatusProps) => {
  return (
    <div className="flex">
      <Badge
        badgeContent=""
        color={color}
        variant="dot"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        className="status-badge"
      ></Badge>
      <p className="status-text">{text}</p>
    </div>
  );
};

export default Status;

import "./ClientList.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const ClientList = ({ rows }) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHead">CLIENT ID</TableCell>
            <TableCell className="tableHead">CLIENT NAME</TableCell>
            <TableCell className="tableHead flex">
              <span>ONBOARD DATE</span>{" "}
              <KeyboardArrowDownIcon className="icon" />
            </TableCell>
            <TableCell className="tableHead">STATUS</TableCell>
            <TableCell className="tableHead">AVG PURCHASE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className="tableRow"
              onClick={() => navigate("/")}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.onboardDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell wallet">
                {row.avgPurchase}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientList;

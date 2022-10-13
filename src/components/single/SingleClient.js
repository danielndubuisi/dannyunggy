import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./SingleClient.scss";

const SingleClient = () => {
  const { id } = useParams();
  return (
    <div className="client">
      <Sidebar />

      <div className="client-container">
        <Navbar />
        <h2>Single Client page - {id}</h2>
      </div>
    </div>
  );
};

export default SingleClient;

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Clients.scss";
import ClientList from "../../components/clientList/ClientList";
import { eventData } from "../../data/Data";

const Clients = () => {
  return (
    <div className="clients">
      <Sidebar />
      <div className="clients-container">
        <Navbar />
        <div className="content">
          <ClientList rows={eventData} />
        </div>
      </div>
    </div>
  );
};

export default Clients;

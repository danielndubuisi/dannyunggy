import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Reps.scss";

const Reps = () => {
  return (
    <div className="reps">
      <Sidebar />
      <div className="reps-container">
        <Navbar />
        <div className="content">Reps info go here...</div>
      </div>
    </div>
  );
};

export default Reps;

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Reps.scss";
import Widget from "../../components/widget/Widget";

const Reps = () => {
  return (
    <div className="reps">
      <Sidebar />
      <div className="reps-container">
        <Navbar />
        <div className="widgets">
          <Widget type="clients" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="target" />
        </div>
        <div className="charts">Charts go here</div>
      </div>
    </div>
  );
};

export default Reps;

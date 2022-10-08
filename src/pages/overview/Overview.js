import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Overview.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Overview = () => {
  return (
    <div className="overview">
      <Sidebar />
      <div className="overview-container">
        <Navbar />
        <div className="widgets">
          <Widget type="clients" />
          <Widget type="orders" />
          <Widget type="projections" />
          <Widget type="target" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Overview;

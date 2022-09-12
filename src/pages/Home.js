import Sidebar from "../components/sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">Homepage</div>
    </div>
  );
};

export default Home;

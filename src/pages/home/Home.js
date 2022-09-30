import { useState } from "react";
import Map from "../../components/map/Map";
import { eventData } from "../../data/Data";
import Spinner from "../../components/spinner/Spinner";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
  // const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(setLoading);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true);
  //     const res = await fetch("");
  //     const data = await res.json;

  //     setEventData(data);
  //     setLoading(false);
  //   };

  //   fetchEvents();
  // }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        {!loading ? <Map eventData={eventData} /> : <Spinner />}
      </div>
    </div>
  );
};

export default Home;

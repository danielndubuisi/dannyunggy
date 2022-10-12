import { useState } from "react";
import Map from "../../components/map/Map";
import { eventData } from "../../data/Data";
import Spinner from "../../components/spinner/Spinner";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Tracker.scss";

const Tracker = () => {
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
    <div className="tracker">
      <Sidebar />
      <div className="tracker-container">
        {!loading ? <Map eventData={eventData} /> : <Spinner />}
      </div>
    </div>
  );
};

export default Tracker;

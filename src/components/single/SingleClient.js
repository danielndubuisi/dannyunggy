import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./SingleClient.scss";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";

const SingleClient = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/eventData/" + id;
  const { error, isPending, data } = useFetch(url);

  return (
    <div className="client">
      <Sidebar />
      <div className="client-container">
        <Navbar />
        {error && <p className="error">{error}</p>}
        {isPending && <Spinner />}
        {data && (
          <div className="single">
            <h2>{data.name}</h2>
            <h4>What to show...</h4>
            <ul>
              <li>Client category</li>
              <li>Recievable days</li>
              <li>Avg Purchase</li>
              <li>Purchase pattern (trend line)</li>
              <li>Payment status</li>
              <li>No. of orders</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleClient;

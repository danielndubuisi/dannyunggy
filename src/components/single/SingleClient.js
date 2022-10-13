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
        <h2>Single Client page - {id}</h2>
        {error && <p className="error">{error}</p>}
        {isPending && <Spinner />}
        {data && <h1>{data.name}</h1>}
      </div>
    </div>
  );
};

export default SingleClient;

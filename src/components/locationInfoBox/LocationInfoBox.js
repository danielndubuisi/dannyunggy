import "./LocationInfoBox.scss";

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Client Info</h2>
      <div className="content">
        <ul>
          <li>
            ID: <span>{info.id}</span>
          </li>
          <li>
            Name: <span>{info.name}</span>
          </li>
          <li>
            LCDA: <span>{info.lcda}</span>
          </li>
        </ul>
        <div className="image">
          <img src={info.img} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default LocationInfoBox;

import { Col, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { connect } from "react-redux";
import { addFavourite, removeFavourite } from "../actions/index.js";
import { ToastContainer, toast } from "react-toastify";

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    favList: state.favourites.favList,
  };
};

const Job = ({
  title,
  company,
  type,
  location,
  created_at,
  id,
  favList,
  addFavourite,
  removeFavourite,
  job,
}) => {
  const history = useHistory();
  const handleAddFav = () => {
    toast.success(`${title} Added`);
    addFavourite(job);
  };

  const handleRemoveFav = () => {
    toast(`${title} Removed`);
    removeFavourite(id);
  };

  return (
    <Col xs={12}>
      <div
        style={{ backgroundColor: "#fffbdf", borderRadius: "15px" }}
        className="d-flex border-bottom justify-content-between py-4 px-4 mb-3 shadow"
      >
        <div>
          <h6 className="mb-0">{title}</h6>
          <p className="my-2">
            {company} - <span className="fw-bold">{type}</span>
          </p>
          {favList.some((job) => job.id === id) ? (
            <>
              <span onClick={handleRemoveFav} style={{ cursor: "pointer" }}>
                💔
              </span>
              <Badge
                onClick={() => history.push(`/details/${id}`)}
                style={{ cursor: "pointer", background: "#34656d" }}
                className="lh-base ms-3 rounded-pill"
              >
                Details
              </Badge>
            </>
          ) : (
            <>
              <span onClick={handleAddFav} style={{ cursor: "pointer" }}>
                ❤️
              </span>
              <Badge
                onClick={() => history.push(`/details/${id}`)}
                style={{ cursor: "pointer", background: "#34656d" }}
                className="lh-base ms-3 rounded-pill"
              >
                Details
              </Badge>
            </>
          )}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end">
          <p className="mb-0">{location}</p>
          <p className="mb-0">{format(new Date(created_at), "MM/dd/yyyy")}</p>
        </div>
      </div>
    </Col>
  );
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(Job);

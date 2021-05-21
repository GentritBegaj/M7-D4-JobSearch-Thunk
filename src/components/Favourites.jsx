import { Col, Container, Row, ListGroup, Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFavourite } from "../actions/index.js";

const mapStateToProps = (state) => ({
  favList: state.favourites.favList,
});

const Favourites = ({ favList, removeFavourite, history }) => {
  const handleRemoveFav = (id) => {
    removeFavourite(id);
  };

  return (
    <Container className="min-vh-100 mt-3">
      <Row className="justify-content-center">
        <Col>
          {favList.length === 0 && (
            <div className="text-center">
              <h1 className="text-center text-white">
                No fav yet, go add some!
              </h1>
              <Button
                variant="warning"
                onClick={() => history.push("/")}
                className="rounded-circle mt-3"
              >
                {" "}
                🏠{" "}
              </Button>
            </div>
          )}
          <ListGroup>
            {favList.map((fav) => (
              <ListGroup.Item
                style={{ background: "#fffbdf", borderRadius: "15px" }}
                key={fav.id}
                className="d-flex lh-lg mb-3 shadow"
              >
                <span className="me-auto">
                  {fav.title} - {fav.company}
                </span>

                <span
                  onClick={() => handleRemoveFav(fav.id)}
                  style={{ cursor: "pointer" }}
                  className="me-3"
                >
                  💔
                </span>

                <Badge
                  onClick={() => history.push(`/details/${fav.id}`)}
                  style={{ cursor: "pointer", background: "#34656d" }}
                  className="rounded-pill lh-lg"
                >
                  Details
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, { removeFavourite })(Favourites);

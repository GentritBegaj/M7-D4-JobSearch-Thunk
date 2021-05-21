import { Navbar, Container, Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => ({
  favouritesLength: state.favourites.favList.length,
});

const MyNavbar = ({ favouritesLength }) => {
  let history = useHistory();

  return (
    <Navbar style={{ background: "#34656d" }}>
      <Container className="justify-content-start">
        <Button
          variant="warning"
          onClick={() => history.push(`/favourites`)}
          className="rounded-pill"
        >
          <span className="ms-2">Favourites: </span>
          {favouritesLength > 0 && <Badge>{favouritesLength}</Badge>}
        </Button>
      </Container>
    </Navbar>
  );
};

export default connect(mapStateToProps)(MyNavbar);

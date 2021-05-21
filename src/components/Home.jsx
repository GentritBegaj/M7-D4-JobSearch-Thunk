import { useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import Joblist from "./Joblist";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { fetchJobs } from "../actions/jobs";

const mapStateToProps = (state) => state.jobs;

const Home = ({ jobList, loading, error, fetchJobs }) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <>
      {/* <SearchBar searchJobs={searchJobs} /> */}
      <SearchBar />
      <Container className="min-vh-100">
        {(loading && (
          <Row className="justify-content-center mt-3">
            <Spinner animation="grow" />
          </Row>
        )) || (
          <>
            <Row className="mt-3">
              <Joblist jobs={jobList} />
            </Row>{" "}
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              variant="info"
              style={{ position: "sticky", bottom: "0" }}
              className="rounded-circle lh-base d-block ms-auto"
            >
              🔝
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default connect(mapStateToProps, { fetchJobs })(Home);

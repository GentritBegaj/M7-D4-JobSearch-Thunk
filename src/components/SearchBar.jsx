import { useState } from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { searchJob } from "../actions/jobs";

const SearchBar = ({ searchJob }) => {
  const [fields, setFields] = useState({ position: "", area: "" });
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFields({ ...fields, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchJob(fields.position, fields.area);
  };

  return (
    <Navbar
      className="sticky-top"
      style={{ background: "#c6ffc1" }}
      variant="dark"
    >
      <Container className="justify-content-end">
        <Form onSubmit={handleSubmit} className="d-flex">
          <Form.Control
            onChange={handleChange}
            value={fields.position}
            type="text"
            placeholder="Insert Position"
            className="mr-2 rounded-pill"
            autoFocus
          />
          <Form.Control
            onChange={handleChange}
            value={fields.area}
            type="text"
            placeholder="Insert Area"
            className="mx-2 rounded-pill"
            name="area"
          />
          <Button
            type="submit"
            variant="outline-info"
            className="ml-2 rounded-pill"
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default connect(null, { searchJob })(SearchBar);

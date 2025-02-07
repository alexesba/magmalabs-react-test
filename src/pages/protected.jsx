import React from "react";
import Menu from "../components/menu";
import { Container, Button } from "react-bootstrap";

const ProtectedPage = () => {
  const logout = () => console.info("Logout action");
  return (
    <>
      <Menu />
      <Container>
        Protected Page
        <br />
        <Button variant="danger" onClick={logout}>
          logout
        </Button>
      </Container>
    </>
  );
};

export default ProtectedPage;

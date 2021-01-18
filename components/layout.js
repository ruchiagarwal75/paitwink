import React from "react";
import styled from "styled-components";
import NavBar from "../components/navbar";
export default function Layout(props) {
  return (
    <div>
      <NavBar handleResetGalleryView={props.handleResetGalleryView} />
      <Container>{props.children}</Container>;
    </div>
  );
}

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  letter-spacing: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

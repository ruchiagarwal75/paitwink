import React from "react";
import styles from "../styles/Home.module.scss";
import styled from "styled-components";

export default function GalleryList(props) {
  return (
    <Gallery>
      <GalleryViewer image="./images/IMG_0260.JPG">
        <ExpandoOverlay>
          <GalleryName>FASHION</GalleryName>
          <Button onClick={props.handleViewGallery}>VIEW GALLERY</Button>
        </ExpandoOverlay>
      </GalleryViewer>
      <GalleryViewer image="./images/IMG_0133.JPG">
        <ExpandoOverlay>
          <GalleryName>FACE PAINTINGS</GalleryName>
          <Button>VIEW GALLERY</Button>
        </ExpandoOverlay>
      </GalleryViewer>
      <GalleryViewer image="./images/IMG_0197.JPG">
        <ExpandoOverlay>
          <GalleryName>FACE PAINTINGS</GalleryName>
          <Button>VIEW GALLERY</Button>
        </ExpandoOverlay>
      </GalleryViewer>
      <GalleryViewer image="./images/IMG_0204.JPG">
        <ExpandoOverlay>
          <GalleryName>FACE PAINTINGS</GalleryName>
          <Button>VIEW GALLERY</Button>
        </ExpandoOverlay>
      </GalleryViewer>
      <GalleryViewer image="./images/IMG_0220.JPG">
        <ExpandoOverlay>
          <GalleryName>FACE PAINTINGS</GalleryName>
          <Button>VIEW GALLERY</Button>
        </ExpandoOverlay>
      </GalleryViewer>
    </Gallery>
  );
}

const Gallery = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 600px);
`;
const GalleryViewer = styled.div`
  padding: 300px 50px 300px 50px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
  position: relative;
  border-radius: 3px;
  transition: all 0.3s;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid black;
    }
  }
`;
const ExpandoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
}
`;
const Button = styled.button`
  font-size: 1em;
  margin-top: 50px;
  padding: 24px 54px;
  border-radius: 2px;
  color: #fff;
  border: 2px solid #fff;
  background: none;
  font-family: "Poppins", sans-serif;
  letter-spacing: 3px;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: #000;
  }
`;
const GalleryName = styled.div`
  font-size: 24px;
  color: #fff;
`;

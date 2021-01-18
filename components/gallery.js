import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import CenterFocusIcon from "@material-ui/icons/CenterFocusWeak";
import _ from "lodash";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1200,

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  },
  modal: {
    backgroundColor: "rgba(0, 0, 0, 0.9)"
  }
}));

const tileData = [
  {
    id: 1,
    img: "./images/IMG_0133.JPG",
    author: "author"
  },
  {
    id: 2,
    img: "./images/IMG_0197.JPG",
    author: "author"
  },
  {
    id: 3,
    img: "./images/IMG_0204.JPG",
    author: "author"
  },
  {
    id: 4,
    img: "./images/IMG_0220.JPG",
    author: "author"
  },
  {
    id: 5,
    img: "./images/IMG_0260.JPG",
    author: "author"
  }
];
export default function Gallery(props) {
  const classes = useStyles();

  const [expandImage, setExpandImage] = useState(false);
  const [expandImageId, setExpandImageId] = useState(0);

  const showImage = id => {
    setExpandImage(true);
    setExpandImageId(id);
  };

  const handleCloseModal = () => {
    setExpandImage(false);
  };
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={400}
        spacing={30}
        className={classes.gridList}
        cols={3}
      >
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={() => showImage(tile.id)}
                >
                  <CenterFocusIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
      <Modal
        className={classes.modal}
        open={expandImage}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalContent>
          {expandImageId ? (
            <Image image={_.find(tileData, { id: expandImageId }).img} />
          ) : null}
        </ModalContent>
      </Modal>
    </div>
  );
}

const ModalContent = styled.div`
  width: 50vw;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  outline: none;
  //   background: beige;
`;
const Image = styled.div`
  padding: 20vw;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

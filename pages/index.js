import Head from "next/head";
import styles from "../styles/Home.module.scss";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>paintwink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Gallery>
          <GalleryViewer>
            <ExpandoOverlay>
              <button>CLick me</button>
            </ExpandoOverlay>
          </GalleryViewer>
          <GalleryViewer>
            <ExpandoOverlay />
          </GalleryViewer>
          <GalleryViewer>
            <ExpandoOverlay />
          </GalleryViewer>
          <GalleryViewer>
            <ExpandoOverlay />
          </GalleryViewer>
        </Gallery>
      </main>
    </div>
  );
}
const GalleryViewer = styled.div`
  padding: 250px;
  background-size: cover;
  background-position: center;
  background-image: url("./images/IMG_0133.JPG");
  position: relative;
`;
const Gallery = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 600px);
`;
const ExpandoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #4f6c9a;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }
}
`;

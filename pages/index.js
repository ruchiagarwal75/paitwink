import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import GalleryList from "../components/gallery-list";
import Gallery from "../components/gallery";
export default function Home() {
  const [viewGallery, setViewGallery] = useState(false);
  const [galleryId, setGalleryId] = useState(0);
  const handleViewGallery = id => {
    setViewGallery(true);
    setGalleryId(id);
  };
  const handleResetGalleryView = () => {
    setViewGallery(false);
  };
  return (
    <>
      <Head>
        <title>paintwink</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Poppins:wght@300&family=Roboto:wght@100;400&display=swap');
        </style>
      </Head>
      <Layout handleResetGalleryView={handleResetGalleryView}>
        {!viewGallery ? (
          <GalleryList handleViewGallery={handleViewGallery} />
        ) : (
          <Gallery galleryId={galleryId} />
        )}
      </Layout>
    </>
  );
}

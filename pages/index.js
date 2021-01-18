import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layout";
import GalleryList from "../components/gallery-list";
export default function Home() {
  const [viewGallery, setViewGallery] = useState(false);
  const handleViewGallery = () => {
    setViewGallery(true);
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
          <div>Test</div>
        )}
      </Layout>
    </>
  );
}

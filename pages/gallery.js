import React from 'react'
import Head from 'next/head'
import Gallery from '../components/Gallery'
import menu from "../public/Data/menu.json";
import ComponentId from '../components/ComponentId';

function gallery() {
  let images = [];
  menu.map((item) => {
    item.content.map((cont) => {
      images.push(cont.img);
    });
  });
  return (
    <>
    <Head>
      <title>Delicious | Gallery</title>
    </Head>
    <ComponentId name={'Gallary'} />
    <Gallery imgs={images} />
    </>
  )
}

export default gallery
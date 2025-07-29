import Head from "next/head";
import Menu from "../components/Menu";
import Link from 'next/link'
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";
import Event from "../components/Event";
import Booking from "../components/Booking";
import React,{ useEffect,useState } from "react";

export default function Home() {
  const [scroll, setScroll] = useState(0)
  // useEffect(() => {
  //   window.onscroll = function(){
  //     console.log(this.scrollY)
  //     setScroll(this.scrollY)
  //   }
  // if (scroll) {
  //   window.scrollTo(scroll)
  // }
  // }, [])
  return (
    <>
      <Head>
        <title>Delicious | Home</title>
      </Head>
      <div className="home">
        <div className="landing">
          <div className="container">
            <div className="text">
              <h1 className="mainh1">Enjoy Your Healthy <strong>Delicious</strong> Food</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, odio? A eveniet temporibus ratione ad neque saepe
                harum voluptatum sit enim vero consequuntur non molestiae,
                facilis quidem voluptates voluptas dolor.
              </p>
              <Link href="/menu">
                <a>
                  <div className="btn">see our menu</div>
                </a>
              </Link>
            </div>
            <img src="./images/bowl-1.png" alt="" />
          </div>
        </div>
        <Menu />
        <Testimonial />
        <Gallery />
        <Event />
        <Booking/>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          padding-top: 20px;
        }
        @media (max-width: 991px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
        .landing {
          background: var(--secondry);
          padding-bottom: 100px
        }
        .text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        img{
          width: 95%;
        }
      `}</style>
    </>
  );
}

import React,{ useEffect, useState} from "react";
import Head from "next/head";
import data from "../public/Data/menu.json";
import Card from "../components/Card";



function Menu() {
  useEffect(() => {
    window.onscroll = function(){
      window.sessionStorage.setItem('scroll', this.scrollY)
      console.log(window.sessionStorage.getItem('scroll'))
    }
    if (window.sessionStorage.getItem('scroll')) {
    // setScroll(window.sessionStorage.getItem('scroll'))
    window.scrollTo({
      top: window.sessionStorage.getItem('scroll'),
      behavior: 'smooth'
    })
  }
  }, [])

  return (
    <div>
      <Head>
        <title> Menu | Delicious</title>
      </Head>
      <div className="container">
        <div className="mainHeading">menu</div>
        <h1 className="mainh1">
          menu & <strong>Detaills</strong>
        </h1>
        <div className="menu-cont">
          {data.map((sec, i1) => (
            <section  key={i1}>
              <h2>{sec.category} :</h2>
              <div className="sec-box">
                {sec.content.map((item, i) => (
                  <Card
                    key={i}
                    img={item.img}
                    category={sec.category}
                    name={item.name}
                    price={item.price}
                    showIng={true}
                    i1={i1}
                    i={i}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mainHeading {
          margin: auto;
          margin-top: 45px;
        }
        .mainh1 {
          text-align: center;
          margin: auto;
        }
        section {
          margin: 55px 0;
        }
        section h2 {
          text-transform: capitalize;
          margin-bottom: 45px;
          color: #777;
          position: relative;
          width: fit-content;
        }
        section h2:before {
          content: "";
          position: absolute;
          width: 100%;
          bottom: -9px;
          left: 0;
          background: var(--main);
          height: 3px;
          opacity: 1;
        }
        .sec-box {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        @media (max-width: 991px) {
          .sec-box {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 577px) {
          .sec-box {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Menu;

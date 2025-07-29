import React from "react";
import Head from "next/head";
import ComponentId from "../components/ComponentId";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function About() {
  return (
    <>
      <Head>
        <title>Delicious | About</title>
      </Head>
      <div className="about">
        <ComponentId name={"About Us"} />
        <div className="restaurant ">
          <div className="container">
            <img src="./images/img_rect_4-min.jpg" alt="" />
            <div className="text">
              <h2>The Restraurant</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                explicabo, aut, aperiam asperiores iusto assumenda omnis facere,
                cumque veniam libero pariatur laudantium natus! Ipsum at sed
                facilis odit obcaecati vitae.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="choose">
          <div className="container">
            <h3 className="mainHeading">Choose Us</h3>
            <h1 className="mainh1">
              Why <strong>Choose Us</strong>
            </h1>
            <div className="cont">
              <div className="box">
                <h2 className="mainh1">
                  <strong>01</strong>
                </h2>
                <h2>Delicious food</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, magnam. Atque harum ex quis! Nesciunt officiis dolorum
                </p>
              </div>
              <div className="box">
                <h2 className="mainh1">
                  <strong>02</strong>
                </h2>
                <h2>Expert Shefs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, magnam. Atque harum ex quis! Nesciunt officiis dolorum
                </p>
              </div>
              <div className="box">
                <h2 className="mainh1">
                  <strong>03</strong>
                </h2>
                <h2>Frindly People</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, magnam. Atque harum ex quis! Nesciunt officiis dolorum
                </p>
              </div>
              <div className="box">
                <h2 className="mainh1">
                  <strong>04</strong>
                </h2>
                <h2>Parties</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, magnam. Atque harum ex quis! Nesciunt officiis dolorum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shefs">
          <div className="container">
            <h4 className="mainHeading">chefs</h4>
            <h1 className="mainh1">
              our <strong>Professinol Shefs</strong>
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="cont">
              <div className="box">
                <img src="./images/chef_1.jpg" alt="" />
                <div className="over-lay"></div>
                <div className="detels">
                  <h2 className="name">James Anderson</h2>
                  <div className="role">Master Chef</div>
                  <div className="social">
                    <span><BsInstagram /></span>
                    <span><AiOutlineTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><FaLinkedinIn /></span>
                  </div>
                </div>
              </div>
              <div className="box">
                <img src="./images/chef_2.jpg" alt="" />
                <div className="over-lay"></div>
                <div className="detels">
                  <h2 className="name">Graig Gold</h2>
                  <div className="role">Cook</div>
                  <div className="social">
                    <span><BsInstagram /></span>
                    <span><AiOutlineTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><FaLinkedinIn /></span>
                  </div>
                </div>
              </div>
              <div className="box">
                <img src="./images/chef_1.jpg" alt="" />
                <div className="over-lay"></div>
                <div className="detels">
                  <h2 className="name">Mellissa White</h2>
                  <div className="role">Chef</div>
                  <div className="social">
                    <span><BsInstagram /></span>
                    <span><AiOutlineTwitter /></span>
                    <span><FaFacebookF /></span>
                    <span><FaLinkedinIn /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .restaurant {
          background: var(--secondry);
          padding: 40px 0;
        }
        .restaurant .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .restaurant img {
          width: 100%;
          border-radius: 15px;
        }
        .text {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
          justify-content: space-evenly;
        }
        ul {
          list-style-position: inside;
        }
        .choose {
          background: var(--secondry);
          padding: 100px 0;
        }
        h1 {
          margin-top: 0;
        }

        .choose .cont {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 40px;
        }
        .choose .box {
          padding: 20px;
          border: 1px solid #00000024;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: 0.5s;
          border-radius: 10px;
        }
        .choose .box:hover {
          background: var(--main);
          transform: translatey(-15px);
          color: var(--secondry);
        }
        .choose .box:hover strong {
          color: var(--secondry);
        }
        .shefs {
          margin-top: 100px;
          margin-bottom: 100px;
        }
        .shefs .mainh1 {
          max-width: fit-content;
          margin: auto;
          margin-bottom: 10px;
        }
        .shefs .mainHeading {
          width: fit-content;
          margin: auto;
        }
        .shefs p {
          max-width: 640px;
          text-align: center;
          margin: auto;
        }
        .shefs .cont {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 45px;
        }
        .shefs .cont .box {
          position: relative;
          height: 400px;
        }
        .shefs .cont .box img {
          position: absolute;
          height: 100%;
          width: 100%;
        }
        .social {
          display: flex;
          gap: 10px;
        }
        span {
          display: inline-flex;
          height: 35px;
          width: 35px;
          border-radius: 50%;
          background: var(--secondry);
          cursor: pointer;
          transition: 0.3s;
          justify-content: center;
          align-items: center;
          color: var(--main);
          font-size: 18px;
        }
        span:hover {
          transform: translateY(-10px);
        }
        .detels {
          bottom: 27px;
          position: absolute;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 15px;
          left: 50%;
          transform: translatex(-50%);
          color: #fff;
        }
        .over-lay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #00000035;
        }
        .name{
          font-size: 18px;
          font-weight: 600;
        }
        @media (max-width: 991px) {
          .restaurant .container {
            grid-template-columns: 1fr;
          }
          .choose .cont {
            grid-template-columns: 1fr 1fr;
          }
          .shefs .cont {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          
        }
        @media (max-width: 577px) {
          .choose .cont {
            grid-template-columns: 1fr;
          }
          .shefs .cont {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default About;

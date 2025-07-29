import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="about">
          <h5>About us</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="icons">
            <div className="icon">
              <BsInstagram />
            </div>
            <div className="icon">
              <AiOutlineTwitter />
            </div>
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              {" "}
              <FaLinkedinIn />
            </div>
            <div className="icon">
              <FaPinterest />
            </div>
            <div className="icon">
              <BsGoogle />
            </div>
            <div className="icon">
              <BsApple />
            </div>
          </div>
        </div>
        <div className="pages">
          <h5>Pages</h5>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className="resources">
          <h5>Resources</h5>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </div>
        <div className="contact">
          <h5>Contact Us</h5>
          <div>
            <span>
              <MdEmail />
            </span>
            <span>mail@example.com</span>
          </div>
          <div>
            <span>
              <IoIosCall />
            </span>
            <span>+1 222 212 3819</span>
          </div>
          <div>
            <span>
              <FaMapMarkerAlt />
            </span>
            <span>43 Raymouth Rd. Baltemoer, London 3910</span>
          </div>
        </div>
      </div>
      <p>
        Copyright ©2022. All Rights Reserved. — Designed with love by{" "}
        <span>Omer Yasir</span>
      </p>
      <style jsx>{`
        footer {
          padding: 80px 0 80px;
          background-color: #efefef;
        }
        footer .container {
          display: grid;
          grid-template-columns: 30% auto auto 40%;
          column-gap: 30px;
        }
        footer h5 {
          margin-bottom: 10px;
        }
        footer li {
          margin-bottom: 10px;
          list-style: none;
        }
        footer .about .icons {
          display: flex;
          margin-top: 20px;
        }
        footer .about .icons .icon {
          margin-left: 7px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #777;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          color: white;
        }
        footer .about .icons .icon:hover {
          background-color: var(--main);
          cursor: pointer;
        }
        footer .contact div {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }
        footer .contact div span:first-child {
          border-radius: 10px;
          margin-right: 15px;
          font-size: 20px;
          color: var(--main);
        }
        footer > p {
          width: fit-content;
          margin: auto;
          margin-top: 80px;
          text-align: center;
        }
        footer > p span {
          color: var(--main);
          font-weight: bolder;
        }
        @media (max-width: 767px) {
          footer .container {
            grid-template-columns: 50% auto;
            row-gap: 20px;
          }
        }
        @media (max-width: 570px) {
          footer .container {
            grid-template-columns: 100%;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;

import React from "react";
import Head from "next/head";
import ComponentId from "../components/ComponentId";
import {IoLocationSharp, IoTimeSharp, IoCallSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'

function Contact() {
  return (
    <>
      <Head>
        <title>Delicious | Contact</title>
      </Head>
      <div>
        <ComponentId name={"Contact Us"} />
        <div className="contact">
          <div className="container">
            <div className='cont'>
              <div className='text'>
                <div className='box'>
                  <div className='icon'>
                    <IoLocationSharp />
                  </div>
                  <span>
                    <h5>Location : </h5>
                    <div className='addres'>
                      43 Raymouth Rd. Baltemoer, London 3910
                    </div>
                  </span>
                </div>
                <div className='box'>
                  <div className='icon'>
                    <IoTimeSharp />
                  </div>
                  <span>
                    <h5>Open Hours : </h5>
                    <div className='addres'>
                      Sunday-Friday:
                      <br />
                      11:00 AM - 2300 PM
                    </div>
                  </span>
                </div>
                <div className='box'>
                  <div className='icon'>
                    <MdEmail />
                  </div>
                  <span>
                    <h5>Email :</h5>
                    <div className='addres'>info@Colorlib</div>
                  </span>
                </div>
                <div className='box'>
                  <div className='icon'>
                    <IoCallSharp />
                  </div>
                  <span>
                    <h5>Call :</h5>
                    <div className='addres'>+1 1234 55488 55</div>
                  </span>
                </div>
              </div>
              <form className='form'>
                <div>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <div className="btn">Send a Message</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          padding: 50px 0;
          background: var(--secondry);
        }
        .cont {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 50px;
        }
        @media (max-width: 991px) {
          .cont {
            grid-template-columns: 1fr;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .box {
          display: flex;
          gap: 15px;
        }
        .icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--main);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
          color: var(--secondry);
        }
        .addres {
          font-size: 14px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 25px;
          flex: 1;
        }
        form div {
          display: flex;
          gap: 10px;
        }
        input,
        textarea {
          width: 100%;
          height: 50px;
          outline: none;
          border-radius: 3px;
          border: 1px solid var(--trans);
          padding: 15px;
        }
        input:focus,
        textarea:focus {
          border: 1px solid var(--main);
        }
        textarea {
          height: 200px;
        }
        h5 {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}

export default Contact;

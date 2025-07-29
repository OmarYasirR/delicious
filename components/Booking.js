import React from "react";

const booking = () => {
  return (
    <div className="book container">
      <img src="./images/hero_bg.jpg" alt="" />
      <div className="text">
        <h2>Book A Table Now</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tenetur harum facilis obcaecati vel?
        </p>
        <div className="btn">book a table</div>
      </div>
      <div className="over-lay"></div>
      <style jsx>{`
        .book {
          height: 550px;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
          margin: 85px 0;
        }
        .over-lay{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: #00000063;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .book .text {
          z-index: 3;
          position: absolute;
          text-align: center;
          max-width: 540px;
          margin: auto;
          color: #ffff;
          top: 50%;
          transform: translate(-50%, -50%);
          left: 50%;
        }
        .btn{
          margin: auto;
          margin-top: 20px;
        }
        @media (max-width: 767px) {
          .book{
            height: 400px;
          }
        }
        @media (max-width: 577px) {
          .book{
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default booking;

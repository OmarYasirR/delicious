import React, { useEffect, useState } from "react";

function Event() {
  const events = [
    {
      image: "./images/img_rect_1-min.jpg",
      name: "Guest Chef Nihgt Party",
    },
    {
      image: "./images/img_rect_3-min.jpg",
      name: "Work Dinner Nihgt Party",
    },
    {
      image: "./images/img_rect_2-min.jpg",
      name: "Birthday Party",
    },
    {
      image: "./images/img_rect_4-min.jpg",
      name: "Work Dinner Nihgt Party",
    },
  ];
  const [active, setActive] = useState(0);
  const classHandler = (i) => {
    if (i == active) {
      return "active";
    }
    if (i == events.length - 1 && active == 0) {
      return "prev";
    }

    if ((i > active) || (active == events.length - 1 && i == 0)) {
      return "next";
    }
    if ((active == 0 && i == events.length - 1) || (i < active)) {
      return "prev";
    }
  };
  let handler;
  const navHandler = (i) => {
    setActive(i);
    clearTimeout(handler);
  };
  useEffect(() => {
    handler = setTimeout(() => {
      setActive((prev) => prev + 1);
      active < events.length - 1 ? false : setActive(0);
    }, 2000);
  }, [active]);

  return (
    <div className="event">
      <div className="container">
        <h4 className="mainHeading">UPCOMING EVENTS</h4>
        <h1 className="mainh1">
          enjoy <strong>our events</strong>
        </h1>
        <p className="p">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="ev-cont">
          {events.map((item, i) => (
            <div className={`${classHandler(i)} ev-box`} key={i}>
              <img src={item.image} alt="" />
              <div className="text">
                <h1 className="mainh1">{item.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quia odit corporis minima laborum sed porro quas
                  sunt tenetur culpa quo minus vel architecto neque ut beatae
                  saepe, animi dolores!
                </p>
                <ul>
                  <li>Away behind the word</li>
                  <li>Bookmarksgrove right at the coast</li>
                  <li>Separated they live</li>
                </ul>
              </div>
            </div>
          ))}
          <div className="bolluts">
            {events.map((item, i) => (
              <li
                onClick={() => {
                  navHandler(i);
                }}
                key={i}
                className={i == active && "active"}
              ></li>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .event {
          background: var(--secondry);
          padding: 50px 0;
          margin-bottom: 80px;
        }
        .mainHeading {
          margin: auto;
        }
        .mainh1 {
          margin: auto;
          text-align: center;
        }
        .p {
          max-width: 600px;
          margin: auto;
          text-align: center;
          margin-top: 20px;
        }
        .ev-cont {
          display: flex;
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 450px;
          padding-bottom: 30px;
        }
        .ev-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          margin-top: 40px;
          transition: 0.8s;
          padding: 0 20px;
        }
        img {
          width: 100%;
          border-radius: 15px;
        }
        .ev-box .mainh1{
          width: fit-content;
          margin: 0;
          text-align: start;
        }
        p {
          margin-bottom: 20px;
        }
        ul {
          list-style-position: inside;
        }
        .text h1 {
          margin-left: 0;
          margin-bottom: 20px;
        }
        .active{
          transform: translateX(0);
        }
        .prev{
          transform: translateX(-100%);
          opacity: 0;
        }
        .next{
          transform: translateX(100%);
          opacity: 0;
        }
        .bolluts{
          display: flex;
          gap: 5px;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
        .bolluts li{
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #7777;
          list-style: none;
          cursor: pointer;
        }
        .bolluts li.active{
          background: var(--main);
        }
        @media (max-width: 767px) {
          .ev-cont{
            height: 680px;
          }
          .ev-box {
          grid-template-columns: 1fr;
        }
        }
        @media (max-width: 577px) {
          .ev-cont{
            height: 600px;
          }
        }
      `}</style>
    </div>
  );
}

export default Event;

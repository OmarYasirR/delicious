import React, { useEffect, useState } from "react";
import testi from "../public/Data/testimionial.json";

function Testimonial() {
  const [active, setActive] = useState(0);
  let handler
  let Nav = (i) => {
    clearTimeout(handler);
    setActive(i);
  };
  useEffect(() => {
    handler = setTimeout(() => {
      active < testi.length - 1 ? setActive(active + 1): setActive(0) 
    }, 2000);
  }, [active]);
  return (
    <div className="tsti">
      <div className="container">
        <div className="mainHeading">Testimonial</div>
        <h1 className="mainh1">
          Satisfied <strong>Customers</strong>
        </h1>
        <div className="tsti-cont">
          {testi.map((item, i) => (
            <div
              className={i == active ? "active tsti-box" : "tsti-box"}
              key={i}
            >
              <img src={item.img} alt="" />
              <div className="name">{item.name}</div>
              <div className="role">{item.role}</div>
              <p>{item.text}</p>
            </div>
          ))}
          <div className="bolluts">
            {testi.map((_, i) => (
              <span
                onClick={() => {
                  Nav(i);
                }}
                key={i}
                className={i == active && "active"}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .tsti {
          margin: 100px 0;
          height: 380px;
        }
        .mainh1 {
          max-width: fit-content;
        }
        .tsti-cont {
          position: relative;
        }
        .tsti-box {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
          background: white;
          width: 100%;
          margin: auto;
          margin-top: 65px;
          transition: 0.7s ease-in-out;
        }
        .active{
          z-index: 6;
        }
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: auto;
          margin-bottom: 10px;
        }
        .name {
          color: var(--main);
          font-weight: 600;
          font-size: 17px;
        }
        .role{
          font-weight: 700;
          opacity: 0.7;
        }
        p {
          margin: auto;
          max-width: 525px
        }
        .bolluts {
          display: flex;
          gap: 5px;
          position: absolute;
          top: 322px;
          left: 50%;
          transform: translateX(-50%);
        }
        .bolluts span {
          display: inline-block;
          transition: 0.7s;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #c5baba;
        }
        .bolluts span.active {
          background: var(--main);
        }
        @media (max-width: 767px) {
          .bolluts {
          top: 360px;
        }
      `}</style>
    </div>
  );
}

export default Testimonial;

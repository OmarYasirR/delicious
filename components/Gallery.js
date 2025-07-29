import React, { useState } from "react";
import menu from "../public/Data/menu.json";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/menu");
  console.log(data);
  return {
    props: {
      DD: data,
    },
  };
};
// Uesing Functions Genenators in this Component

function Gallery({ imgs }) {
  let images = [];
  menu.map((item) => {
    item.content.map((cont) => {
      images.push(cont.img);
    });
  });

  const [curntGalry, setCurntGalry] = useState(images.slice(0, 12));
  const [activeIndcator, setActiveIndcator] = useState(1);
  const num = 12;

  const showMore = (i) => { 
    setActiveIndcator(prev => prev = i);
    setCurntGalry((prev) => {
      if (
        images.length == curntGalry.length ||
        images.length - curntGalry.length > num
      ) {
        prev = images.slice(0, num * i);
      } else {
        prev = images;
      }

      return prev;
    });
  };

  const imgHandler = (i) => {
    setShowViower(true);
    setCrntImg(i);
  };
  const indicatorShow = (i) => {
    if (
      i == activeIndcator + 1 ||
      i == activeIndcator + 2 ||
      i == activeIndcator - 1 ||
      i == activeIndcator - 2 ||
      i == activeIndcator
    ) {
      return "inline-block";
    }
  };
  const data = imgs ? imgs : images.slice(8, 17);
  const [showViower, setShowViower] = useState(false);
  const [crntImg, setCrntImg] = useState(0);
  return (
    <div className="gallery">
      {showViower && (
        <div className="img-viower">
          <div className="action">
            <div>
              {curntGalry.length} / {crntImg + 1}
            </div>
            <div
              className="icon"
              onClick={() => {
                setShowViower(false);
              }}
            >
              <ImCross />
            </div>
          </div>
          <div className="control">
            <div
              className={crntImg == 0 ? "icon disable" : "icon"}
              onClick={() => {
                setCrntImg((prev) => prev - 1);
              }}
            >
              <AiOutlineLeft />
            </div>
            <div
              className={
                crntImg == curntGalry.length - 1 ? "icon disable" : "icon"
              }
              onClick={() => {
                setCrntImg((prev) => prev + 1);
              }}
            >
              <AiOutlineRight />
            </div>
          </div>
          <img src={curntGalry[crntImg]} alt="" />
        </div>
      )}
      <div className="container">
        <div className="mainHeading">gallary</div>
        <h1 className="mainh1">
          photo <strong>gallaries</strong>
        </h1>
        <div className="gallary-cont">
          {curntGalry.map((img, i) => (
            <div
              className="gallary-box"
              key={i}
              onClick={() => {
                imgHandler(i);
              }}
            >
              <img src={img} alt="" />
              <div className="over-lay"></div>
            </div>
          ))}
        </div>
        {!imgs && (
          <Link href="/gallery">
            <a>
              <div className="btn">more gallaries</div>
            </a>
          </Link>
        )}
      </div>
      {imgs && (
        <div className="indcators">
          <span
            className={
              activeIndcator == 1 ? "indcator-icon disable" : "indcator-icon"
            }
            onClick={() => {
              setActiveIndcator((prev) => {
                prev - 1;
                showMore(prev - 1);
                return prev;
              });
            }}
          >
            <AiOutlineLeft />
          </span>
          {[...Array(Math.trunc(images.length / num) + 1)].map((item, i) => {
            return (
              <span
                className={i + 1 == activeIndcator ? "active indcator" : "indcator"}
                onClick={() => {
                  showMore(i + 1);
                }}
                style={{ display: indicatorShow(i + 1) }}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={
              activeIndcator == Math.trunc(images.length / num) + 1
                ? "indcator-icon disable"
                : "indcator-icon"
            }
            onClick={() => {
              setActiveIndcator((prev) => {
                prev + 1;
                showMore(prev + 1);
                return prev;
              });
            }}
          >
            <AiOutlineRight />
          </span>
        </div>
      )}
      <style jsx>{`
        .gallery {
          position: relative;
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .action {
          display: flex;
          justify-content: space-between;
        }
        .icon {
          width: 30px;
          height: 30px;
          border-radius: 5px;
          background: var(--main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .img-viower {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000000a3;
          z-index: 1000;
          padding: 20px;
          color: white;
          transition: 0.3s;
        }
        .img-viower img {
          transition: 0.3s;
          width: 350px;
          height: 500px;
          margin: auto;
          transform: translate(-50%, -50%);
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 6px;
          user-select: none;
        }
        .control {
          display: flex;
          justify-content: space-between;
          position: sticky;
          top: 50%;
          transform: translateY(-50%);
          z-index: 3;
        }
        .control .icon {
          border-radius: 5px;
          background: var(--main);
          cursor: pointer;
          display: flex;
          padding: 3px;
          font-size: 20px;
          align-items: center;
          justify-content: center;
        }
        .disable {
          pointer-events: none;
          opacity: 0.5;
        }
        .gallary-cont {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin: 50px 0;
        }
        .gallary-box {
          width: 100%;
          height: 100%;
          border-radius: 15px;
          overflow: hidden;
          background: var(--secondry);
          transition: 0.3s;
          position: relative;
        }
        .over-lay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0000005e;
          display: none;
        }
        .gallary-box img {
          width: 100%;
          height: 100%;
          transition: 0.3s;
          transform: scale(1.1);
        }
        .gallary-box:hover img {
          transform: scale(1);
        }
        .gallary-box:hover .over-lay {
          display: block;
        }
        .btn {
          margin: auto;
        }
        @media (max-width: 991px) {
          .gallary-cont {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 767px) {
          .gallary-cont {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 577px) {
          .img-viower img {
            width: 330px;
          }
        }
        .indcators {
          width: fit-content;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .indcator {
          display: none;
          margin-left: 5px;
          background: var(--main);
          padding: 10px;
          cursor: pointer;
          color: var(--secondry);
          border-radius: 15px;
          transition: 0.3s;
        }
        .indcator.active {
          color: var(--main);
          background: var(--secondry);
        }
        .indcator-icon {
          font-size: 24px;
          color: var(--main);
          cursor: pointer;
          border-radius: 20px;
          display: flex;
          padding: 4px;
          background: var(--secondry);
        }
      `}</style>
    </div>
  );
}

export default Gallery;

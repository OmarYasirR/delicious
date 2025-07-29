import Link from "next/link";
import React, {useEffect} from "react";


function Card({img, category, name, price,showIng, i1, i}) {

  return (
    <div className="card">
      <div className="img-cont">
        <img src={img} alt="" />
        <div className="detls">
          <div>
            <h5>Catigory:</h5> <span>{category}</span>
          </div>
          <div>
            <h5>Name:</h5> <span>{name}</span>
          </div>
          <div>
            <h5> price:</h5> <span>{price}</span>
          </div>
          {showIng && <div className="btn">
          <Link href={'ingredaints/' + `${category}-${i1}-${i}`}>Ingrediants</Link>
          </div>}
        </div>
      </div>
      <h5>{name}</h5>
      <span>{price}</span>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          gap: 5px;
          text-align: center;
        }
        .card span {
          color: var(--main);
          font-weight: 800;
        }
        .img-cont {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .detls {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          background: #0000005e;
          color: white;
          padding: 15px;
          width: 100%;
          height: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          transition: 0.5s;
        }
        .detls h5{
          display: inline;
          color: white
          font-size: 15px;
        }
        .detls span{
          color: white;
          font-weight: normal;
          text-transform: capitalize;
        }
        .img-cont:hover .detls {
          display: flex;
          transition: 0.5s;
        }
        .img-cont:hover img{
          transform: scale(1);
        }
        img {
          width: 100%;
          height: 100%;
          transition: 0.5s;
          transform: scale(1.1);
        }
        h5 {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
}

export default Card;

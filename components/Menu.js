import React, { useEffect, useState } from "react";
import data from "../public/Data/menu.json";
import Card from "./Card";

function Menu() {
  const [active, setActive] = useState(0);
  const menu = data.slice(0, 5);
  const [crntmenu, setCrntmenu] = useState(menu[active]);
  useEffect(() => {
    setCrntmenu(menu[active]);
  }, [active]);

  useEffect(() => {
    window.onscroll = function(){
      window.sessionStorage.setItem('scroll', this.scrollY)
      console.log('run')
    }
    if (window.sessionStorage.getItem('scroll')) {
    window.scrollTo({
      top: window.sessionStorage.getItem('scroll'),
      behavior: 'smooth'
    })
  }
    if (window.sessionStorage.getItem('active')) {
      setActive(window.sessionStorage.getItem('active'))
    }
  }, [])
  return (
    <div className="menu">
      <div className="container">
        <h4 className="mainHeading">menu</h4>
        <h1 className="mainh1">
          enjoy our <strong>multiple</strong> Options
        </h1>
        <div className="menu-box">
          <div className="menu-bar">
            {menu.map((item, i) => (
              <div
                className={i == active ? "active" : ""}
                key={i}
                onClick={() => {
                  setActive(i);
                  window.sessionStorage.setItem('active', i)
                }}
              >
                {item.category}
              </div>
            ))}
          </div>
          <div className="menu-content">
            {crntmenu.content.map((item, i) => (
              <Card
                key={i}
                img={item.img}
                category={crntmenu.category}
                name={item.name}
                price={item.price}
                showIng={true}
                i1={active}
                i = {i}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .menu {
          background: var(--secondry);
          padding: 0 0 100px 0;
        }
        .menu-bar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: fit-content;
          height: fit-content;
          background: var(--main);
          padding: 10px;
          border-radius: 4px;
          text-transform: capitalize;
          color: var(--secondry);
        }
        .menu-bar div {
          cursor: pointer;
          padding: 16px;
          font-weight: 500;
          cursor: pointer;
        }
        .menu-bar div.active {
          background: var(--secondry);
          color: var(--main);
          border-radius: 3px;
          position: relative;
        }
        .menu-bar div.active::before {
          content: "";
          position: absolute;
          top: 50%;
          right: -20px;
          border-width: 10px;
          border-color: transparent;
          border-style: solid;
          border-left-color: var(--secondry);
          transform: translateY(-50%);
        }
        .menu-box {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 50px;
          align-items: flex-start;
          margin-top: 60px;
          height: calc(100vh - 30px) ;
        }
        .menu-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          height: 100%;
          overflow: auto;
          border-radius: 10px;
          padding: 10px;
          background: white;
        }
        .menu-content::-webkit-scrollbar {
          width: 7px;
        }
        .menu-content::-webkit-scrollbar-track {
          background-color: white;
          box-shadow: 0 0 4px #DDD inset;
        }
        .menu-content::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: var(--main);
        }
        @media (max-width: 991px) {
          .menu-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .menu-box {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .menu-bar {
            display: grid;
            grid-template-columns: repeat(5, auto);
            gap: 0px;
            width: 100%;
            text-align: center;
            padding: 10px;
          }
          .menu-bar div {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 0;
          }
          .menu-bar div.active::before {
            position: absolute;
            top: 38px;
            right: 50%;
            border-top-color: var(--secondry);
            border-left-color: transparent;
            transform: translatex(50%);
          }
        }
        @media (max-width: 577px) {
          .menu-bar {
            padding: 15px 3px;
          }
        }
      `}</style>
    </div>
  );
}


export default Menu;

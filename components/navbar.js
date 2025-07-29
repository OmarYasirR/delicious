import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

function navbar() {
  const links = [
    { link: "Home", route: "/" },
    { link: "Events", route: "/events" },
    { link: "Gallery", route: "/gallery" },
    { link: "About", route: "/about" },
    { link: "Contact US", route: "/contact" },
  ];
  const router = useRouter();
  const [vertical, setVertical] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="./images/Logoo.png" alt="" />
              <h5>Cafe & Resaurant</h5>
            </a>
          </Link>
        </div>
        <div
          className="hor-icon"
          onClick={() => {
            setVertical(true);
          }}
        >
          <AiOutlineMenu className="icon" />
        </div>
        <nav>
          {links.map((link, i) => (
            <Link key={i} href={link.route}>
              <a className={router.route == link.route ? "active": false}>
                {link.link}
              </a>
            </Link>
          ))}
        </nav>
        <div
          style={{display: vertical ? 'block': false}}
          className="over-lay"
          onClick={()=> setVertical(false)}
        ></div>
        <nav
          className="vertical"
          style={{ transform: vertical ? "translateX(0)": false }}
        >
          <div
            className="icon"
            onClick={() => {
              setVertical(false);
            }}
          >
            <MdOutlineCancel />
          </div>
          {links.map((link, i) => (
            <Link key={i} href={link.route}>
              <a className={router.route == link.route && "active"}>
                {link.link}
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <style jsx>{`
        header {
          background: var(--secondry);
        }
        header > div {
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          width: fit-content;
        }
        .logo h5 {
          color: var(--main);
        }
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .active {
          color: var(--main);
        }
        img {
          width: 120px;
        }
        nav {
          display: flex;
          gap: 15px;
        }
        .over-lay{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #00000038;
          display: none;
          z-index: 399;
        }
        .hor-icon,
        .vertical .icon {
          display: none;
        }
        .vertical {
          display: none;
        }
        @media (max-width: 767px) {
          nav {
            display: none;
          }
          .vertical {
            position: fixed;
            top: 0;
            right: 0;
            width: 300px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
            align-items: flex-start;
            background: white;
            transform: translateX(100%);
            transition: 0.8s;
            z-index: 4000;
          }
          .active{
            color: var(--main)
          }
          .vertical .icon {
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 3;
            cursor: pointer;
            font-size: 30px;
            color: var(--main);
          }
          .hor-icon {
            display: block;
            cursor: pointer;
            font-size: 24px;
            color: var(--main);
            z-index: 400
          }
        }
        @media (max-width: 767px) {
          img {
          width: 70px;
        }
}
      `}</style>
    </header>
  );
}

export default navbar;

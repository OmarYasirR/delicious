import React from "react";
import Link from 'next/link'

function ComponentId({ name}) {
  return (
    <div className="cont">
      <h1 className="mainh1">
        <strong>{name}</strong>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, esse?
        Vitae soluta sunt delectus rem voluptate inventore eveniet facilis,
        dolor necessitatibus
      </p>
      <Link href="/menu">
      <div className="btn">see our menu</div>
      </Link>
      <style jsx>{`
        .cont {
          background: var(--secondry);
          padding: 50px 0;
          text-align: center;
        }
        p{
          margin: auto;
          max-width: 450px;
          margin-bottom: 15px;
          padding: 0 10px;
        }
        h1{
          margin: auto;
          margin-bottom: 15px
        }
        .btn{
          margin: auto;
        }
      `}</style>
    </div>
  );
}

export default ComponentId;

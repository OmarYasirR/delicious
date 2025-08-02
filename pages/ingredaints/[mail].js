import React from 'react'
import Data from '../../public/Data/menu.json'
import Card from '../../components/Card'
import Head from 'next/head'

export const getStaticPaths = () => {
    let paths = []
  Data.map((catgry, i1) => {
    catgry.content.forEach((item, i2) => {
      paths.push({
        params : {
          mail: (`${catgry.category}-${i1}-${i2}`).toString(),
        }
      })
    })
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = (context) => {
  const deteles = context.params.mail
  const i1 = context.params.i1
  const i = context.params.i
  return {
    props: {
      title: 'indg',
      i1 : deteles.split('-')[1],
      i : deteles.split('-')[2],
      category: deteles.split('-')[0]
    }
  }
}
const Mail = ({i1, i, category}) => {
  const item = Data[i1].content[i]
  return (
    <div className='container'>
      <Head>
        <title> Delicious | {category} - {item.name}</title>
      </Head>
      <h4 className="mainHeading">{category}</h4>
        <h1 className="mainh1"> {item.name}</h1>
      <div className="img-box">
        <img src={`.${item.img}`} alt="" />
      </div>
      <div className="price">{item.price}</div>
      <div className="ing-cont">
        <h2>Ingrediants :</h2>
        {item.ing.map((itm, i) => (
          <h5 key={i}>{itm}</h5>
        ))}
      </div>
      <style jsx>{`
      .container {
        margin-top: 70px;
        margin-bottom: 100px;
      }
      h3 {
          text-transform: capitalize;
          margin-bottom: 45px;
          color: #777;
          position: relative;
          width: fit-content;
        }
        h3:before {
          content: "";
          position: absolute;
          width: 100%;
          bottom: -9px;
          left: 0;
          background: var(--main);
          height: 3px;
          opacity: 1;
        }
        .item{
          font-weight: 600;
          margin: auto;
          width: fit-content;
          margin-bottom: 20px;
          text-transform: capitalize;
        }
      .img-box {
          width: 320px;
          height: 400px;
          margin: auto;
          border-radius: 15px;
          overflow: hidden;
          background: var(--secondry);
        }
        .img-box img {
          width: 100%;
          height: 100%;
          transition: 0.3s;
        }
        .price{
          font-weight: 600;
          width: fit-content;
          margin: auto;
          margin-top: 18px;
        }
        .ing-cont{
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .ing-cont h2{
          margin-bottom: 15px;
          color: var(--main);
        }
        .ing-cont h5{
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  )
}

export default Mail
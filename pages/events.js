import React from 'react'
import Head from 'next/head'
import Event from '../components/Event'
import Booking from '../components/Booking'
import ComponentId from '../components/ComponentId'

function events() {
  return (
    <>
    <Head>
      <title>Delicious | Events</title>
    </Head>
    <div className='events'>
      <ComponentId name={'Events'} />
      <Event />
      <Booking />
    </div>
    
    </>
  )
}

export default events
import React from 'react'
import {Header, Categories, Limited, TopCreators,JoinUs} from '../pages/home/'
function Home() {
  return (
    <main className='page-container'>

    <Header></Header>
    <Categories></Categories>
    <Limited></Limited>
    <TopCreators></TopCreators>
    <JoinUs></JoinUs>

    </main>
  )
}

export default Home
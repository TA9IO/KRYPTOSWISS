import React from 'react'
import winuser from "../../assets/images/win-user.png";
import { Title } from "../../components/";
import Auctoin from './Auction'

function History() {
  return (
    <div className='history-main-container'>
    
    <Title
    style={{
      color: "black",
      borderBottom: "1px solid #ececec",
      paddingBottom: "20px",
      width: "80%",
    }}
  >
    History
  </Title>
  <Auctoin></Auctoin>
    
    </div>
  )
}

export default History
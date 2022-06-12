import React from 'react'
import {exploreData} from '../../assets/dummyData/exploreData'
import { ButtonNoBg, Button, Btn } from '../../components';

function MainPage() {
  return (
    <main className='main-page-contaner'>
      <div className="items-container">
      {exploreData.map((item) => {
        const { name, image, owner, price, currency, id, link, icon } = item;
        return (
          <div className="item-container" key={id}>
            <div className="item-image-container">
              <img src={image} alt="nft1" />
            </div>
            <div className="item-info-container">
              <div className="item-name">{name}</div>
              <div className="item-owner">By <span>{owner}</span></div>
              <div className="current-bid">Current Bid</div>
              <div className="item-price">{price} <span>{currency.toUpperCase()} {icon}</span></div>
              {/**<div className="item-currency"></div>**/}
              <div className="item-link">
                <Btn buttonStyle='btn--primary--outline' className='btn-with' styele={{border: '2px solid red'}}>Buy</Btn>
              </div>
            </div>
          </div>
        );
      })}

      
      </div>
      <Btn buttonStyle ='btn--primary--nogradiant--solid'>click</Btn>
    
    </main>
  )
}

export default MainPage
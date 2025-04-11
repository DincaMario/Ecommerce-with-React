import React from "react";
import { useNavigate } from "react-router-dom"
import "./menu-item.styles.scss";

    function MenuItem(title)
    {
      const history = useNavigate();
      
      return(
   <div className={`${title.size} menu-item`}
   onClick = {() =>history(`${title.LinkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${title.imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.title}</h1>
      <span className='subtitle'>SHOP NOW</span>
      
    </div>
  </div>
      );
    }

export default MenuItem;

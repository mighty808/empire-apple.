import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Products</h1>
    <p className='explore-menu-text'>Discover our extensive range of top-quality Apple products and accessories. Our goal is to provide you with the latest technology and exceptional customer service, enhancing your digital lifestyle with every purchase.
    </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                </div>
            )
        })}
      </div>

      <div className='phone-des'>
          <p>Iphones</p>
          <p>Ipads</p>
          <p>MacBooks</p>
          <p>AirPods</p>
          <p>Watches</p>
          <p>TVs</p>
          <p>Accessories</p>
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu

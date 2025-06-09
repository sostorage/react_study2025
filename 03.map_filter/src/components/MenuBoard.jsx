import React, { useState } from 'react'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem';
import MenuNav from './MenuNav';

const MenuBoard = () => {

    // console.log(menuData);
    
    const [menu, setMenu] = useState(menuData);

    // 메뉴 버튼 클릭시, 조건에 맞는 메뉴만 출력되는 기능 구현 해보기
    // e.g.) '커피' 클릭 -> 아메리카노만 출력
    //       '디저트' 클릭 -> 마카롱만 출력
    //       '전체' 클릭 -> 모든 메뉴 출력
    const menuFilter = (category)=>{
        let filterData = menuData.filter((item)=>item.category===category);

        if(category === "All"){
          // menu에는 가장 최근에 조회한 정보가 저장되어있음
          // 'All'을 누르면 최근 정보로만 조회
          setMenu(menuData);
        } else {
          setMenu(filterData);
        }
    }
    
  return (
    <div className='menu-board'>
        <h1>메뉴판</h1>
        <MenuNav menuFilter={menuFilter}/>
        <div className='menu-list'>
        {menu.map((menu)=> (
            <MenuItem menu={menu}/>
        ))}
        </div>
    </div>
  )
}

export default MenuBoard
import React from 'react'

const MenuNav = ({menuFilter}) => {
    const categories = ['All', '커피', '디저트', '에이드', '베이커리'];
  return (
    <div>
        <ul className='menu-nav'>
            {categories.map((category, index)=> (
                <li onClick={()=>menuFilter(category)} key={index}>{category}</li>
            ))}
        </ul>
    </div>
  )
}

export default MenuNav
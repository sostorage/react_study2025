import React from 'react'

const Board = ({data,name}) => {

  console.log(name, data.score);
  

  
  return (

      <div>
      <h4>{name}</h4>
      <img src={data.imgPath} alt="주사위 이미지" />
      <div>
      <p>현재 점수는?</p>
      <p>{data.score}</p>
      </div>
      </div>
  )
}

export default Board
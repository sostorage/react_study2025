import React from 'react'

const Board = ({data,name}) => {

  console.log(data);
  console.log(data.score);
  console.log(name)
  return (
    <div>
      <h4>{name}</h4>
      <img src={data.imgPath} />
      <div>
        <p>현재 점수는?</p>
        <p>{data.score}</p>
      </div>
    </div>
  )
}

export default Board
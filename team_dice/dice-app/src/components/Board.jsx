import React from 'react'

const Board = ({name, data}) => {
  return (
    <div >
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
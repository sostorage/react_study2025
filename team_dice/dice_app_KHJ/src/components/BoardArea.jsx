import React from 'react'
import Board from './Board'

const BoardArea = ({user,com}) => {

  return (
    <div className='board-area'>
      <Board data={user} name={"나"}/>
      <Board data={com} name={"COM"}/>
    </div>
  )
}

export default BoardArea
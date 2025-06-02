import React from 'react'

const ButtonArea = ({throwDice,initDice}) => {


  return (
    <div>
        <button onClick={()=>throwDice()}>던지기</button>
        <button onClick={()=>initDice()}>RESTE</button>
    </div>
  )
}

export default ButtonArea
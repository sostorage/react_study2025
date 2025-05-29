import React from 'react'

const MemberInfo = ({teamNm, player}) => {

  return (

    <div className='teamInfo'>
        <p>{teamNm}</p>
        <p>{player}</p>
    </div>

  )
}

export default MemberInfo
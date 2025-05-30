import React, { useState } from 'react'

const LikeCount2 = () => {
  const [num, setNum] = useState(0);

  // const upClick = () => {
    
  //   setNum(num+1);

  // }
    

  const downClick = () => {

    if(num > 0){
      setNum(num-1);
    }
  }

  return (
    <div className='likeBox'>
        <img src={"src/assets/img/chiigood.png"} alt={"치이카와 굿"} /> 
        <br/>
        <span className='likeText'>좋아요{num}</span>
        <div>
          {/* onClick 속성에 함수 실행문을 넣을 때 {()=>함수명} 형태로 정의해야한다. */}
        <button onClick={()=>setNum(num+1)}>💘</button>
        <button onClick={downClick}>💔</button>
        </div>
    </div>
  )
}

export default LikeCount2
import React, { use, useState } from 'react'
import BoardArea from './BoardArea'
import ButtonArea from './ButtonArea'

const DiceGame2 = () => {

  const imgPath = 'src/assets/img/img/dice';
  const [user, setUser] = useState({imgPath: `${imgPath}1.png`, score: 0});
  const [com, setCom] = useState({imgPath: `${imgPath}1.png`, score: 0});

  // 주사위 던지기 기능
  const throwDice = () => {
    // 주사위 눈 생성
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    let userScore = user.score;
    let comScore = com.score;

    
    // 주사위 눈 비교
    if(userIndex > comIndex){
      userScore += 1;
    } else if(comIndex > userIndex) {
      comScore += 1;
    }

    //주사위 눈 이미지, 점수 초기화
    // ...(전개 연산자)
    // e.g.) let user = {imgPath: "~", score: 0};
    //       console.log(...user);
    //       출력) imgPath:"~", score: 0
    //       변경) imgPath:"새로운 경로", score: 0
    setUser({
      ...user,
      imgPath: `${imgPath}${userIndex}.png`,
      score: userScore
    });
  
    setCom({
      imgPath: `${imgPath}${comIndex}.png`,
      score: comScore
    })
  }
  
  // 초기화 기능
  const initDice = () => {
    // alert('초기화 실행');
    // setUserScore(0);
    // setComScore(0);
    setUser({...user, imgPath: `${imgPath}1.png`, score: 0});
    setCom({...com, imgPath: `${imgPath}1.png`, score: 0});

    // setUserDiceImg(`${imgPath}1.png`);
  }


  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/> {/* 함수 넘겨주는 방법 */}
        <BoardArea
        user={user} com={com}
        />
        
    </div>
  )
}

export default DiceGame2
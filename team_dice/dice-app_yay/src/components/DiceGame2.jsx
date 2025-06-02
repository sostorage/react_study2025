import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import Board from './Board'
import BoardArea from './BoardArea'


const DiceGame = () => {

  // 초기화 기능
  const initDice = () => {
    // alert('초기화 실행');
  }

  const imgPath = 'src/assets/img/img/dice';

  //  const [userScore, setUserScore] = useState(0);
  //  const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);
  const [com, setCom] = useState({imgPath:`${imgPath}1.png`,score:0});
  const [user,setUser] = useState({imgPath:`${imgPath}1.png`,score:0});
   //const [comScore, setComScore] = useState(0);
   //const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);

    // 주사위 던지기 기능
   const throwDice = () => {
    // alert('던지기 실행');

    // 주사위 눈 생성
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    // 주사위 눈 이미지 , 점수 초기화
    // ...(전개연산자)
    // ex) let user = {imgPath:"~",score:0}
    //     console.log(...user);
    //    출력) imgPath:"~", score:0
    //    변경) imgPath:"새로운 경로", score:0
    // setUserDiceImg(`${imgPath}${userIndex}.png`);
    setUser({
      ...user,
      imgPath:`${imgPath}${userIndex}.png`
    } );
    setCom({
      ...com,
      imgPath:`${imgPath}${comIndex}.png`
    });

    // 실습) 주사위 눈 비교 -> 이긴 쪽 +1 증가

    if(userIndex>comIndex) {
      setUser({...user, score : user.score+1});
    }else if(comIndex>userIndex){
      setCom({...com, score:com.score+1 });
    }


  }

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice}/>
        <BoardArea user={user} com={com}
/>
    </div>
  )
}

export default DiceGame
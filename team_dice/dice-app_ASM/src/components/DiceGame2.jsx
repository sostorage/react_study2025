import React, { useState } from 'react'
import ButtonArea from './buttonArea'
import BoardArea from './BoardArea'

const DiceGame2 = () => {

const imgPath = "src/assets/img/dice";

// const [userScore, setUserScore] = useState(0);
// const [userDiceImg, setUserDiceImg] = useState(`${imgPath}1.png`);

const [user, setUser] = useState({imgPath:`${imgPath}1.png`, score:0});

// const [comScore, setComScore] = useState(0);
// const [comDiceImg, setComDiceImg] = useState(`${imgPath}1.png`);
const [com, setCom] = useState({imgPath:`${imgPath}1.png`,score:0});

const initDice = () => {
  // alert('초기화 설정');
  setUser({imgPath:`${imgPath}1.png`, score:0})
  setCom({imgPath:`${imgPath}1.png`,score:0})
}

const throwDice =()=>{
  // alert('던지기 실행');
  let userIndex = parseInt(Math.random()*6)+1;
  let comIndex = parseInt(Math.random()*6)+1;
  
  let userScore = user.score;
  let comScore = com.score;


  // 주사위 눈 이미지 초기화
  // setUserDiceImg(`${imgPath}${userIndex}.png`);
  

  console.log('나', userIndex);
  console.log('컴퓨터', comIndex);
  
  
  if(userIndex > comIndex){
    console.log('나 승');
    
    // setUser({...user, score : user.score+1});
    userScore += 1;

  }else if(userIndex < comIndex){
    console.log('컴퓨터 승');
    
    // setCom({...com, score : com.score+1});
    comScore += 1;

  }else{
    alert("무승부 입니다.")
  }
  
  setUser({
    // usestate를 객체형태로 만들었을때 사용하는 방법
    // ...(전개연산자)
    // ex) let user = {imgPath "~", score:0}
    //      consol.log(...user)
    //      출력) imgPath : "~", score : 0
    //      변경) imgPath : "새로운 경로", score : 0
    
    ...user,
      imgPath:`${imgPath}${userIndex}.png`,
      score : userScore
  })

  // setComDiceImg(`${imgPath}${comIndex}.png`);
    setCom({
      ...com,
      imgPath:`${imgPath}${comIndex}.png`,
      score : comScore
    })


}

  return (
    <div className='container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice = {initDice}/>
        <BoardArea 
        user = {user}
        com = {com}
        />
    </div>
  )
}

export default DiceGame2
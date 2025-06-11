import React, { useEffect, useState } from 'react'

/* 
    실습) 참참참 게임
    1. 사용자는 공격, 컴퓨터는 수비 역할 입니다.
    2. '좌', '정면', '우' 중 하나를 클릭했을 때, 사용자와 컴퓨터의 선택을 비교합니다.
      - 같은 선택일 경우: 사용자의 승리
      - 다른 선택일 경우: 컴퓨터의 승리
    3. 승리에 대한 결과를 화면에 출력합니다.

    * '좌', '정면', '우' 값은 배열로 만들어서 활용할 것
    * 사용자, 컴퓨터, 결과값에 대한 총 3개의 state 생성할 것
    * 
*/

const ChamChamCham = () => {

  const [user, setUser] = useState();
  const [com, setCom] = useState();
  const [result, setResult] = useState();
  const compare = ['좌', '정면', '우'];

//   console.log(compare[2]);

  const handleClick = (e) => {
    console.log(compare[parseInt(Math.random()*3)]);
    
    const userSelect = e.target.innerText;
    const comSelect = compare[Math.floor(Math.random()*compare.length)];

    setUser(userSelect);
    setCom(comSelect);

    
}

/*
useEffect(()=>{
    if(user === com) {
        if(user != null){
            setResult("게임 결과: 승리");
        }
    } else {
        setResult("게임 결과: 패배");
    }
}, [user, com])
*/

useEffect(()=> {
    if(user === '' || com === '' ) return;
    // if(user === com) {
    //     setResult("사용자의 승리!");
    // } else {
    //     setResult("컴퓨터의 승리...........");
    // }

    user === com ? setResult("사용자의 승리!"): setResult("컴퓨터의 승리...........");
})

  return (
    <div>
        <h1>참참참 게임!</h1>
        <h3>나의 선택: {user}</h3>
        <h3>컴퓨터의 선택: {com}</h3>
        {/* <h3>{result}</h3> */}
        {result === ""? (<h1></h1>): <h4>게임결과: {result}</h4>}
        {/* 
            ""(공백)은 false로 인식하기 때문에 오른쪽의 태그를 출력하지 않음
            result state의 값이 초기화되면 true로 인식하면서 결과값을 출력
        */}
        <div>
            {/* {compare.map((v, i)=>
            <button key={i} onClick={handleClick}>{v}</button>
            )} */}
            <button onClick={handleClick}>좌</button>
            <button onClick={handleClick}>정면</button>
            <button onClick={handleClick}>우</button>
        </div>
    </div>
  )
}

export default ChamChamCham
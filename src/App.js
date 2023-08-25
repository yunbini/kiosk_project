import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
  let [menuAmount,setMenuAmount] = useState(1);
  //각 메뉴 개수 +,-
  // 1 이하로는 안내려갑니다.
const[Displayed,setDisplayed] = useState(true);
   const cancelDisplay = () =>{
      setDisplayed(false);
   }
   const cancelStyle = {
    display: Displayed ? 'block':'none' 
   }
   // 선택된 메뉴에서 빨간 x 버튼 누르면 사라지는겁니다.

  let [menuName,setMenuName] = useState(['계란','계란말이','계란찜','계란볶음밥','계란후라이','삶은계란']);
  let [menuImage,setMenuImage] = useState(['계란.jpeg','계란말이.jpeg','계란찜.jpeg','계란볶음밥.jpeg','계란후라이.jpeg','삶은계란.jpeg']);
  let [menuPrice,setMenuPrice] = useState(['100원','2000원','4000원','5500원','1500원','1000원'])
   // 초기 메뉴값 여기서 변경하시면 됩니다.

   const [menubar,setMenubar] = useState(0);
   const menuStyle = (Index)=>{
    setMenubar(Index);
    if(Index === 1){
        setMenuName(['사이다','콜라','환타','맥주','소주','막걸리']);
        setMenuImage(['사이다.jpeg','콜라.jpeg','환타.jpeg','맥주.jpeg','소주.jpeg','막걸리.jpeg']);
        setMenuPrice(['2000원','2000원','2000원','5000원','5500원','5000원']);
    }
    else if(Index === 2){
        setMenuName(['감자튀김','젤리','과자','아이스크림','껌','초콜릿']);
        setMenuImage(['감자튀김.jpeg','젤리.jpeg','과자.jpeg','아이스크림.jpeg','껌.jpeg','초콜릿.jpeg']);
        setMenuPrice(['2000원','1500원','1500원','1800원','500원','1300원']);
    }
   else{
        setMenuName(['계란','계란말이','계란찜','계란볶음밥','계란후라이','삶은계란']);
        setMenuImage(['계란.jpeg','계란말이.jpeg','계란찜.jpeg','계란볶음밥.jpeg','계란후라이.jpeg','삶은계란.jpeg']);
        setMenuPrice(['100원','2000원','4000원','5500원','1500원','1000원']);
   }
   }

   // 메인메뉴, 음료, 사이드 메뉴바 디폴트는 메인메뉴고
  // 다른 버튼 클릭하면 배경색, 폰트색 변합니다.
  // 메뉴바 클릭시 하단 메뉴 이름, 사진, 가격 변화

   const [checkedMenus,setCheckedMenus] = useState([]); // 선택된 메뉴들이 저장되는 배열
   const nextId = useRef(1); // 선택된 메뉴들의 id는 1부터 시작
   const onCreate = (index) => {
    const checkedmenu = {
        id:nextId.current,
        menuImage,
        menuName,
        menuPrice
   }
   setCheckedMenus([...checkedMenus,checkedmenu])
   nextId.current += 1;
   }

  return (
    <body>
    <nav className="nav_top">
      <div className="nav_logo">
          <img src="smu_logo.png" alt="스마트정보통신공학과 로고"></img>
          <a href="">스마트정보통신공학과</a>
      </div>
      
      <p>주문 번호: 1번</p>
  </nav>

  <ul className="menu_bar">
      <li id="mainmenu" className={menubar === 0 ? 'active' : ''}
        onClick={()=>menuStyle(0)}>메인 메뉴</li>
      <li id="drink" className={menubar === 1 ? 'active' : ''}
        onClick={()=>menuStyle(1)}>음료</li>
      <li id="sidemenu" className={menubar === 2 ? 'active' : ''}
        onClick={()=>menuStyle(2)}>사이드</li>
  </ul>
  
  <ul className="mainmenu_1">
      <li>
          <img src={menuImage[0]}></img>
          <p className="menuName1">{menuName[0]}</p>
          <p>{menuPrice[0]}</p>
      </li>
      <li>
          <img src={menuImage[1]}></img>
          <p className="menuName1">{menuName[1]}</p>
          <p>{menuPrice[1]}</p>
      </li>
      <li>
          <img src={menuImage[2]}></img>
          <p className="menuName1">{menuName[2]}</p>
          <p>{menuPrice[2]}</p>
      </li>
  </ul>
  <ul className="mainmenu_2">
      <li>
          <img src={menuImage[3]}></img>
          <p className="menuName2">{menuName[3]}</p>
          <p>{menuPrice[3]}</p>
      </li>
      <li>
          <img src={menuImage[4]}></img>
          <p className="menuName2">{menuName[4]}</p>
          <p>{menuPrice[4]}</p>
      </li>
      <li>
          <img src={menuImage[5]}></img>
          <p className="menuName2">{menuName[5]}</p>
          <p>{menuPrice[5]}</p>
      </li>
  </ul>

  <div className="checked_menu_line"> 
      <p>선택한 메뉴</p>
  </div>

  <div>
      <ul className="checked_menu_bar">
        {/*
          <li style={cancelStyle}>
              <img src="계란말이.jpeg"></img>
              <button id="cancel_btn" onClick={cancelDisplay}>X</button>
              <p id="amount_btn">
              <button onClick = {()=>{
                if(menuAmount <= 1)
                    setMenuAmount(1);
                else
                    setMenuAmount(menuAmount-1);
              }}>-</button>
              <span> {menuAmount} </span>
              <button onClick = {()=>{
                setMenuAmount(menuAmount+1)
              }}>+</button>
              </p>
          </li>
            */}
      </ul>
  </div>
  
  
  <div className="order_line">
      <p id="order_amount">
          <span>주문 수량</span>
          <span>1</span>
      </p>
      <p id="order_price">
          <span>주문 금액</span>
          <span>20,000원</span>
      </p>

  </div>

  <div className="bottom_line">
      <button id="all_cancel_btn">전체 취소</button>
      <button id="payment_btn">결제 하기</button>
  </div>
  </body>
  )
        };


export default App;

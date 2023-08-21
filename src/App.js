import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [menuAmount,setMenu] = useState(1);
  //각 메뉴 개수 +,-

  let [mainmenu,setMainmenu] = useState(['계란말이','계란말이','계란찜','계란말이','계란후라이','계란말이']);
  let [drinkmenu,setDrinkmenu] = useState(['사이다','콜라','환타','맥주','소주','막걸리']);
  let [sidemenu,setSidemenu] = useState(['감자튀김','젤리','과자','아이스크림','껌','초콜릿']);
   // 여기서 메뉴 이름 변경하시면 됩니다.

   const[Displayed,setDisplayed] = useState(true);
   const cancelDisplay = () =>{
      setDisplayed(false);
   }
   const cancelStyle = {
    display: Displayed ? 'block':'none'
   }
   // 선택된 메뉴에서 빨간 x 버튼 누르면 사라지는겁니다.

  
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
      <li id="mainmenu" className="menu_item">메인 메뉴</li>
      <li id="drink" className="menu_item">음료</li>
      <li id="sidemenu" className="menu_item">사이드</li>
  </ul>
  
  <ul className="mainmenu_1">
      <li onClick>
          <img src="계란말이.jpeg"></img>
          <p className="menuName1">{mainmenu[0]}</p>
          <p>10000원</p>
      </li>
      <li>
          <img src="계란말이.jpeg"></img>
          <p className="menuName1">{mainmenu[1]}</p>
          <p>10000원</p>
      </li>
      <li>
          <img src="계란말이.jpeg"></img>
          <p className="menuName1">{mainmenu[2]}</p>
          <p>10000원</p>
      </li>
  </ul>
  <ul className="mainmenu_2">
      <li>
          <img src="계란말이.jpeg"></img>
          <p className="menuName2">{mainmenu[3]}</p>
          <p>10000원</p>
      </li>
      <li>
          <img src="계란말이.jpeg"></img>
          <p className="menuName2">{mainmenu[4]}</p>
          <p>10000원</p>
      </li>
      <li>
          <img src="계란말이.jpeg"></img>
          <p className="menuName2">{mainmenu[5]}</p>
          <p>10000원</p>
      </li>
  </ul>

  <div className="checked_menu_line"> 
      <p>선택한 메뉴</p>
  </div>

  <div>
      <ul className="checked_menu_bar">
          <li style={cancelStyle}>
              <img src="계란말이.jpeg"></img>
              <button id="cancel_btn" onClick={cancelDisplay}>X</button>
              <p id="amount_btn">
              <button onClick = {()=>{
                setMenu(menuAmount-1)
              }}>-</button>
              <span> {menuAmount} </span>
              <button onClick = {()=>{
                setMenu(menuAmount+1)
              }}>+</button>
              </p>
          </li>
          
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
  )}


export default App;

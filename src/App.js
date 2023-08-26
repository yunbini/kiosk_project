import './App.css';
import Menu from './Menu';
import MenuList from './MenuList';
import { useState, useRef } from 'react';

function App() {

   const [checkedMenus,setCheckedMenus] = useState([
    
   ]); // 선택된 메뉴들이 저장되는 배열

   const nextId = useRef(1); // 선택된 메뉴들의 id는 1부터 시작

   const onCreate = (menuImage, menuName, menuPrice) => {
    const checkedmenu = {
        id:nextId.current,
        menuImage,
        menuName,
        menuPrice
   }
   setCheckedMenus([...checkedMenus,checkedmenu])
   nextId.current += 1;
   }

   const onRemove = id =>{
    setCheckedMenus(checkedMenus.filter(checkedmenu => checkedmenu.id !== id));
   }

  return (
    <>
    <nav className="nav_top">
      <div className="nav_logo">
          <img src="smu_logo.png" alt="스마트정보통신공학과 로고"></img>
          <a href="">스마트정보통신공학과</a>
      </div>
      
      <p>주문 번호: 1번</p>
  </nav>

  <Menu
   checkedMenus={checkedMenus}
   onCreate={onCreate}
 />

  <div className="checked_menu_line"> 
      <p>선택한 메뉴</p>
  </div>

  <MenuList checkedMenus={checkedMenus} onRemove={onRemove} />
  
  
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
  </>
  )
        };


export default App;

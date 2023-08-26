import React from 'react';
import { useState, useRef } from 'react';

function MenuItem({menuName,menuImage,menuPrice,onCreate}){
    return(
        <li onClick={onCreate}>
            <img src={menuImage} alt={menuName}></img>
            <p>{menuName}</p>
            <p>{menuPrice}</p>
        </li>
    );
}


function Menu({checkedMenus,onCreate}){
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
  
   const menuItems = [
    {menuName:menuName[0], menuImage:menuImage[0], menuPrice:menuPrice[0]},
    {menuName:menuName[1], menuImage:menuImage[1], menuPrice:menuPrice[1]},
    {menuName:menuName[2], menuImage:menuImage[2], menuPrice:menuPrice[2]},
    {menuName:menuName[3], menuImage:menuImage[3], menuPrice:menuPrice[3]},
    {menuName:menuName[4], menuImage:menuImage[4], menuPrice:menuPrice[4]},
    {menuName:menuName[5], menuImage:menuImage[5], menuPrice:menuPrice[5]},
   ]

  
    return(
    <div>

    <ul className="menu_bar">
      <li id="mainmenu" className={menubar === 0 ? 'active' : ''}
        onClick={()=>menuStyle(0)}>메인 메뉴</li>
      <li id="drink" className={menubar === 1 ? 'active' : ''}
        onClick={()=>menuStyle(1)}>음료</li>
      <li id="sidemenu" className={menubar === 2 ? 'active' : ''}
        onClick={()=>menuStyle(2)}>사이드</li>
    </ul>
  
  <ul className="menu_1">
      {menuItems.slice(0,3).map(item =>(
            <MenuItem key={item.menuName}
            menuName={item.menuName}
                        menuImage={item.menuImage}
                        menuPrice={item.menuPrice}
                        onCreate={() => onCreate(item.menuImage, item.menuName, item.menuPrice)}  />
      ))}
  </ul>
  <ul className="menu_2">
        {menuItems.slice(3).map(item =>(
            <MenuItem key={item.menuName} 
            menuName={item.menuName}
                        menuImage={item.menuImage}
                        menuPrice={item.menuPrice}
                        onCreate={() => onCreate(item.menuImage, item.menuName, item.menuPrice)} />
        ))}
  </ul></div>
    )
}
export default Menu;
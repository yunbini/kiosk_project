import { toBeEmpty } from '@testing-library/jest-dom/matchers';
import React from 'react';
import { useState, useRef } from 'react';

function Menu({checkedmenu,onRemove,Plus,Minus}){
    let [menuAmount,setMenuAmount] = useState(1);
    //각 메뉴 개수 +,-
    // 1 이하로는 안내려갑니다.

    return( 
            
        <li style={{display:'block'}}>
            <img src={checkedmenu.menuImage} alt={checkedmenu.menuName}></img>
            <button className="cancel_btn" onClick={()=>onRemove(checkedmenu.id,checkedmenu.menuPrice,menuAmount)}>X</button>
            <p id="amount_btn">
            <button onClick = {()=>{
                if(menuAmount <= 1)
                    setMenuAmount(1);
                else{
                    setMenuAmount(menuAmount - 1);
                    Minus(checkedmenu.menuPrice)
                }
                }}>-</button> 
            <span> {menuAmount} </span>
            <button onClick = {()=>{setMenuAmount(menuAmount + 1); Plus(checkedmenu.menuPrice)}}>+</button>
            </p>
        </li>
                
    );
}

function MenuList({checkedMenus,onRemove,menuPrice,Plus,Minus}){

    if (checkedMenus.length === 0) {
        return (
        <ul className="checked_menu_bar">
            
        </ul>  // 선택된 메뉴가 없을 때 렌더링하지 않음
    )  }
    else 
    {
        return(
            
                <ul className="checked_menu_bar">
                    {checkedMenus.map(checkedmenu =>(
                        <Menu checkedmenu={checkedmenu} key={checkedmenu.id} onRemove={onRemove} Plus={Plus} Minus={Minus}/>
                    ))}
                </ul>
            
        )
    }
}
export default MenuList;
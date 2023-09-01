import React from 'react';
import { useState, useRef } from 'react';

function Menu({checkedmenu,onRemove,menuPrice,handleAmount}){
    let [menuAmount,setMenuAmount] = useState(1);
    //각 메뉴 개수 +,-
    // 1 이하로는 안내려갑니다.

    const onAmount = (amount,menuPrice) =>{
            setMenuAmount(amount);
            handleAmount(menuPrice);
    };

    return( 
            
        <li style={{display:'block'}}>
            <img src={checkedmenu.menuImage} alt={checkedmenu.menuName}></img>
            <button className="cancel_btn" onClick={()=>onRemove(checkedmenu.id,menuPrice,menuAmount)}>X</button>
            <p id="amount_btn">
            <button onClick = {()=>{
                if(menuAmount <= 1)
                    setMenuAmount(1);
                else
                    onAmount(menuAmount - 1,menuPrice); 
                }}>-</button> 
            <span> {menuAmount} </span>
            <button onClick = {()=>onAmount(menuAmount + 1,menuPrice)}>+</button>
            </p>
        </li>
                
    );
}

function MenuList({checkedMenus,onRemove,menuPrice,handleAmount}){

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
                        <Menu checkedmenu={checkedmenu} key={checkedmenu.id} onRemove={onRemove} menuPrice={checkedmenu.menuPrice} handleAmount={handleAmount}/>
                    ))}
                </ul>
            
        )
    }
}
export default MenuList;
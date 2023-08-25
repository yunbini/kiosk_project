import React from 'react';

function CheckedMenuList(){
<li style={cancelStyle}>
              <img src={checkedMenu.Image}></img>
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
}
export default CheckedMenuList;
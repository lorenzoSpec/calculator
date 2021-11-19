import React from 'react';
import Digit from './digits';
import Extras from './extras';

const LeftButton = () => {
  return ( 
    <div id="left-buttons">
        <Digit digit={"0"} id={"zero"} />
        <Extras symbol={"."} id={"decimal"} />
        <Extras symbol={"+/-"} id={"pos-neg-stat"} />
        <Digit digit={"1"} id={"one"} />
        <Digit digit={"2"} id={"two"} />
        <Digit digit={"3"} id={"three"} />
        <Digit digit={"4"} id={"four"} />
        <Digit digit={"5"} id={"five"} />
        <Digit digit={"6"} id={"six"} />
        <Digit digit={"7"} id={"seven"} />
        <Digit digit={"8"} id={"eight"} />
        <Digit digit={"9"} id={"nine"} />
      </div>
   );
}
 
export default LeftButton;
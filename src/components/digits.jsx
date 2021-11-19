const Digit = (props) => {
  return ( 
    <div id={props.id} className="digits">
      {props.digit}
    </div>
   );
}
 
export default Digit;
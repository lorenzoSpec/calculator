const Digit = (props) => {
  return ( 
    <div id={props.id} className="digits">
      <p>{props.digit}</p>
    </div>
   );
}
 
export default Digit;
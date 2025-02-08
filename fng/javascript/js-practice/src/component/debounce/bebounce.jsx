import { useCallback,useState } from "react";

const DebounceComponent = () => {
 const [input, setInput] = useState('');
 const debounce = (fn,delay) => {
     let timeoutId;
     return function(...args) {
       const context = this;
       if (timeoutId) {
         clearTimeout(timeoutId);
       }
       timeoutId = setTimeout(() => {
         fn.apply(context, args);
       }, delay);
     }
   }
const onInputChange = (e) => {
    setInput(e.target.value);
    handleChange(e.target.value);
}
const handleChange = useCallback(
  debounce((value) => {
    console.log("Debounced Input:", value);
  }, 500),
  []
);
   return (
    <>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'lightgray',
      }}>
        <input type="text" onChange={onInputChange}  value={input} placeholder="type to see debounce action"/>
      </div>
      </>)

}

export default DebounceComponent;
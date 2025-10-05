import { useReducer } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function Comp({onclickbutton})
{

const reducerFunction1 = (state, action)=>
{
switch (action.type) {
  case "NAMECHANGE":

    return action.payload.target.value;

  default:
      return state;
    
  

}

}

const reducerFunction2 = (state, action)=>
{
switch (action.type) {
  case "DATECHANGE":

    return action.payload.target.value;

  default:
      return state;
    
  

}

}





  
  const [todoname, dispatchname ] = useReducer(reducerFunction1,"");
const [tododate, dispatchdate] = useReducer(reducerFunction2,"");








//  const refname = useRef();
//   const refdate = useRef();

const clickonbuttonofclick = (event)=>
{
// console.log(`name is ${todoname}, date is ${tododate}`)
event.preventDefault();
// console.log(event);
// const todoname = refname.current.value
// const tododate = refdate.current.value
onclickbutton(todoname, tododate);
// refname.current.value = ""
//  refdate.current.value = ""

}

 const onnamechange =(event)=>
 {
// settodoname(event.target.value);
dispatchname ({
  type:"NAMECHANGE",
  payload: event,

})


 }

 
 const ondatechange =(event)=>
 {
// settododate(event.target.value);
dispatchdate ({
  type:"DATECHANGE",
  payload: event,

})

 }
  return  (
  <form onSubmit={clickonbuttonofclick}>
   
 <div class="row">
       <div class="col-6">
        {/* <input type="text"  placeholder="Enter the todo here"   */
        <input type="text"  placeholder="Enter the todo here" 
value = {todoname} onChange={onnamechange}
         />
        }
       </div>
    <div class="col-4">
      <input type="date" 
      value = {tododate} onChange={ondatechange} />
    </div>
    <div class="col-2">
      <button  class="btn btn-success" ><IoAddCircleSharp /></button>
    </div>
  </div>
  </form>
  )
}
 export default Comp;
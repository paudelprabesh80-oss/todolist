  import 'bootstrap/dist/css/bootstrap.min.css'
import Appname from './component/Appname23'
import Comp from './component/searchcomp'


import './App.css';
import Itemscontain from './Itemscontainer';
import { createContext, useReducer } from 'react';
const Todocontex = createContext();
  function App() {


const reducerFunction = (state,action)=>
{
switch (action.type) {
  case "ADD":
    
    return [...state,  {todoname: action.payload.todoname,
    duedate: action.payload.duedate}]

    case "DELETE":

    return state.filter((__, index)=>
action.payload!== index);

 default:
  return state;
}

}

    const [newtodoitem, dispatch] = useReducer(reducerFunction, [])
  



const onhandlebutton= (newtodoname,newduedata)=>
{


// const upgradeitems = [...newtodoitem, {todoname: newtodoname,
//     duedate: newduedata}]
// settodoitem(upgradeitems);



dispatch({

  type:"ADD",
  payload: {todoname: newtodoname,
    duedate: newduedata},
})






}

const handledeletebutton =(indextoarray) =>{
 
// const upgradeitems =  newtodoitem.filter((__, index)=>
// indextoarray!== index);
dispatch({

  type:"DELETE",
  payload: indextoarray,
})

}




    return (
    < Todocontex.Provider value = {{newtodoitem, handledeletebutton}}>
     
<center className ="todo-header ">
<Appname />

<Comp onclickbutton={onhandlebutton}/>


   <Itemscontain 
   
></Itemscontain>

</center>
</Todocontex.Provider>
    );
  }
export {Todocontex}
export default App;


import { useContext } from "react";
import Items from "./component/items";

import { Todocontex } from "./App";
const Itemscontain = () =>
{
  const {newtodoitem } = useContext(Todocontex)
  if (newtodoitem .length==0) {
    return (
       <div className="container">
        <h4 className="text-success">Today’s work has been done ✅</h4>
      </div>
    )
  }

return (
<div className="container ">

 {newtodoitem .map((item, index) =>
  (
<Items
  key={index}
  todoname={item.todoname}
  tododate={item.duedate}
  index={index}
/>


 )
 )} 

    </div>

)

}
export default Itemscontain;
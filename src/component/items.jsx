

import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { Todocontex } from "../App";


function Items({ todoname, tododate, index }) {
  const {handledeletebutton} = useContext(Todocontex)
  return (
 
    <div className="row">
      <div className="col-6">
        <p>{todoname}</p>
      </div>
      <div className="col-4">
        <p>{tododate}</p>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={()=>
        handledeletebutton(index)
        }><MdAutoDelete /></button>
      </div>
    </div>
  )

}


export default Items;

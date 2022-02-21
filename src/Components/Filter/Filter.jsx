import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/contacts-actions'

const Filter = ()  => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  
   return (
     <>
     <label htmlFor="" name="filter"> Find contact by name : </label>
        <input  
            name="filter"
            type="text"   
            value={filter}
            onChange={(event) => dispatch(changeFilter(event))}/>
    </>
   );
 };
 

 export default Filter;
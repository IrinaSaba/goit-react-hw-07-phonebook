import { useDispatch, useSelector } from "react-redux";
// import {deleteContact} from '../../redux/contacts-actions'
import { removeContact } from "redux/contacts-operations";

const filterContact = (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const newItems = filterContact(items, filter);
  console.log(items)
   return  newItems.length ? (
    <table> 
       {newItems.map(({ name, id, number }) => (
            <tr key={id}>
              <td>{name} :</td>
              <td>{number}</td>
              <td> <button  onClick={() => {
                dispatch(removeContact(id));
              }}>Delete</button></td>
            </tr>
       ))}
    </table>
   ) : null;
 };
 
 export default ContactList;
 
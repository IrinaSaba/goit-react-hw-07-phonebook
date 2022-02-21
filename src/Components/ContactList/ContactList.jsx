import { useDispatch, useSelector } from "react-redux";
// import {deleteContact} from '../../redux/contacts-actions'

const filterContact = (items, filter) => {
  return items.filter(contact =>
    contact.name.includes(filter)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const newItems = filterContact(items, filter);
  console.log(items)
   return  newItems.length ? (
     <ul>
       {newItems.map(({ name, id, number }) => (
        <li key={id}>
         {name} : {number}
         <button >Delete</button>
        </li>
       ))}
     </ul>
   ) : null;
 };
 
 export default ContactList;
 
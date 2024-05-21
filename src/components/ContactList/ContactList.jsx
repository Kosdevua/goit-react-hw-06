import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ users, handleDeleteContact }) => {
  const contacts = Object.values(users);
  return (
    <ul className={s.contacts_list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;

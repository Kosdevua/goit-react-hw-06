import s from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  const handleDeleteContact = () => {
    onDeleteContact(id);
  };
  return (
    <li className={s.contact_wrapper}>
      <div className={s.contact_data}>
        <p>
          <span>
            <FaUser />
          </span>
          {name}
        </p>
        <p>
          <span>
            <BsFillTelephoneFill />
          </span>
          {number}
        </p>
      </div>
      <button onClick={handleDeleteContact} className={s.contact_btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

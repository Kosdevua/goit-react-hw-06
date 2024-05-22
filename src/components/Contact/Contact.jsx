import s from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

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
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={s.contact_btn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

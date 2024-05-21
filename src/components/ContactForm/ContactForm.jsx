import * as yup from "yup";
import s from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, options) => {
    handleAddContact(values);
    // console.log(values);
    options.resetForm();
  };
  const initialValues = { name: "", number: "", id: nanoid() };
  const FeedbackSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
    number: yup
      .string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long")
      .trim(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form_wrapper}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage
          className={s.error_message}
          name="name"
          component="span"
        />
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" />
        <ErrorMessage
          className={s.error_message}
          name="number"
          component="span"
        />
        <button>Add contact</button>{" "}
      </Form>
    </Formik>
  );
};

export default ContactForm;

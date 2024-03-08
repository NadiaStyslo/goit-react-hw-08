import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FaAddressBook, FaMobileAlt } from 'react-icons/fa';
import { addContact } from '../../redux/operationsApi';

import { useDispatch } from 'react-redux';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short, Name must has at least 3 characters')
    .max(50, 'Too long, please stop')
    .required('This is a required field'),
  number: Yup.string()
    .min(3, 'Too short, Number must has at least 3 digits')
    .max(50, 'Too long, please stop')
    .required('This is a required field'),
});
const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const onAdd = { id: nanoid(), ...values };
        dispatch(addContact(onAdd));
        actions.resetForm();
        // onAdd({ id: nanoid(), ...values });
        // actions.resetForm();
      }}
    >
      <Form className={css.contact}>
        <div>
          <label htmlFor={nameFieldId} className={css.name}>
            <FaAddressBook />
            Name:
          </label>
          <Field type="text" name="name" id={nameFieldId} className={css.input} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId} className={css.name}>
            <FaMobileAlt />
            Number:
          </label>
          <Field type="text" name="number" id={numberFieldId} className={css.input} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div>
          <button type="sumbit" className={css.button}>
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;

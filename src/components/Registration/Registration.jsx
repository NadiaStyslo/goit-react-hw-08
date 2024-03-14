import { useDispatch } from 'react-redux';
import css from './Registration.module.css';
import { register } from '../../redux/auth/operation';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
// import { FaAddressBook, FaMobileAlt } from 'react-icons/fa';

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
export const Registration = () => {
  const nameId = useId();
  const passwordId = useId();
  const emailId = useId();
  const dispatch = useDispatch();

  const handleSumbit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('Login is success!');
      })
      .catch(() => {
        toast.error('Login is error!');
      });
    // form.reset();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={userSchema}
      onSubmit={(value, actions) => {
        dispatch(register({ id: nanoid(3), ...value }));
        actions.resetForm();
      }}
    >
      <Form className={css.contact} onSubmit={handleSumbit} autoComplete="off">
        <div>
          <label htmlFor={nameId} className={css.name}>
            Username
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
        </div>
        <div>
          <label htmlFor={emailId} className={css.name}>
            Email
            <Field type="email" name="email" id={emailId} />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
        </div>
        <label htmlFor={passwordId} className={css.name}>
          Password
          <Field type="password" name="password" id={passwordId} />
          <ErrorMessage className={css.error} name="password" component="span" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

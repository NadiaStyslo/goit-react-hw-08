import { useDispatch } from 'react-redux';
import css from './Registration.module.css';
import { register } from '../../redux/auth/operation';
import { useId } from 'react';
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
    );

    form.reset();
  };
  return (
    <form className={css.contact} onSubmit={handleSumbit} autoComplete="off">
      <div>
        <label htmlFor={nameId} className={css.name}>
          Username
          <input type="text" name="name" id={nameId} />
        </label>
      </div>
      <div>
        <label htmlFor={emailId} className={css.name}>
          Email
          <input type="email" name="email" id={emailId} />
        </label>
      </div>
      <label htmlFor={passwordId} className={css.name}>
        Password
        <input type="password" name="password" id={passwordId} />
      </label>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};

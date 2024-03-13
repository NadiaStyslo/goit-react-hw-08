import { useDispatch } from 'react-redux';
import css from './Registration.module.css';
import { register } from '../../redux/auth/operation';

export const Registration = () => {
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
    <form className={css.form} onSubmit={handleSumbit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

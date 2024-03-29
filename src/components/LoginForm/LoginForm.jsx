import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import css from './LoginForm.module.css';
// import css from './LoginForm.module.css';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('login success');
      })
      .catch(() => {
        toast.error('Wrong login!');
      });

    // form.reset();
  };

  return (
    <form className={css.contact} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.name}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.name}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit" className={css.button}>
        Log In
      </button>
    </form>
  );
};

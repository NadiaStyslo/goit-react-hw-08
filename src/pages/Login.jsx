import { LoginForm } from '../components/LoginForm/LoginForm';
import css from './Contact.module.css';
export default function Login() {
  return (
    <div>
      <h2 className={css.title}>Login</h2>
      <LoginForm />
    </div>
  );
}

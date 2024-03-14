import { Registration } from '../components/Registration/Registration';
import css from './Contact.module.css';
function Register() {
  return (
    <div>
      <h1 className={css.title}>Registration</h1>
      <Registration />
    </div>
  );
}
export default Register;

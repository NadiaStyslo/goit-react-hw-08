import { Link } from 'react-router-dom';
import css from './Contact.module.css';
export default function ErrorPage404() {
  return (
    <div>
      <h1 className={css.title}>Error! Page not found! </h1>
      <Link className={css.page} to="/">
        {' '}
        Go to Home page
      </Link>
    </div>
  );
}

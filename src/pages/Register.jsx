import { Helmet } from 'react-helmet';
import { Registration } from '../components/Registration/Registration';

function loginIn() {
  return (
    <div>
      <Helmet>
        <h1>Registration</h1>
        <Registration />
      </Helmet>
    </div>
  );
}
export default loginIn;

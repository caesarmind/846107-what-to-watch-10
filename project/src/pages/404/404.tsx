import {Link} from 'react-router-dom';

function Page404(): JSX.Element {

  return (
    <>
      <h1>404 Error</h1>
      <p>Such a page does not exists</p>

      <Link to="/">Return to the homepage</Link>
    </>

  );
}

export default Page404;

import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      
      <div className="error-actions">
        <button 
          className="btn primary-btn"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
        <Link to="/">
          <button className="btn secondary-btn">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.data || error.statusText}</p>
    </div>
  );
}

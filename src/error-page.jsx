import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="mt-56">
      <h1 className="text-6xl">Oops!</h1>
      <p className="pt-5">{error.data}</p>
      <p className="py-2">{error.status} <i>{error.statusText}</i></p>
      <p className="pb-2">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message }</i>
      </p>
    </div>
  );
}
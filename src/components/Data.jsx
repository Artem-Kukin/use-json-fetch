import useJsonFetch from "./useJsonFetch";
const url = `http://localhost:7070/`

export default function Data({ opts }) {

  const [data, loading, error] = useJsonFetch(url, opts);

  return (
    <div className="fetch-status">
      {data && <p>data status: {data.status}</p>}
      {loading && <p> . . . e x p a n d . . .</p>}
      {error && <p>error prone: {error.message}</p>}
    </div>
  );
}

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Movie(props) {
  const { id, posterURL, title } = props.movie;

  return (
    <div key={id} className="movie">
      <Link to={`filmes/${id}`}>
        <figure>
          <img src={posterURL} alt={title} />
        </figure>
      </Link>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function Session(day) {
  const { id, weekday, date, showtimes } = day.session;

  return (
    <div key={id} className="session">
      <h3>
        {weekday} - {date}
      </h3>
      <div>
        {
        showtimes.map((showtime) => {
          const { name} = showtime;
          return (
            <NavLink key={showtime.id} exact to={`/sessao/${showtime.id}`}>
              <div className="horario">
                <h3>{name}</h3>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

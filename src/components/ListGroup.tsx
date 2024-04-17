import { Link } from "react-router-dom";

function ListGroup() {
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return (
    <div className="list-group">
      {days.map((day) => (
        <Link
          key={day}
          to="/ListGroup"
          className="list-group-item list-group-item-action"
        >
          {day}
        </Link>
      ))}
    </div>
  );
}
export default ListGroup;

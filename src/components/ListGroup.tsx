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
      {days.map(
        (day) =>
          '<a href="#" className="list-group-item list-group-item-action">' +
          day +
          "<a>"
      )}
    </div>
  );
}
export default ListGroup;

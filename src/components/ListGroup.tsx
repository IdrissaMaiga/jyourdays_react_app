let days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function GetMessage(list: string[]) {
  if (list.length <= 0 || !list) {
    return (
      <div>
        number of items is {list.length}
        {list.length <= 0} in the list "No items in the list"
      </div>
    );
  }
  return (
    <>
      <dialog id="dialog">
        <div>
          number of items is {list.length}
          {list.length <= 0} in the list
        </div>
      </dialog>

      <div className="list-group">
        {days.map((day) => (
          <a
            key={day}
            href="#"
            className="list-group-item list-group-item-action"
          >
            {day}
          </a>
        ))}
      </div>
    </>
  );
}
function ListGroup() {
  return GetMessage(days);
}
export default ListGroup;

import { useState } from "react";
import "./Dialog.css";
function Dialog() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openDialog}>Open Dialog</button>
      {isOpen && (
        <div className="dialog">
          <p>This is a dialog</p>
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Dialog;

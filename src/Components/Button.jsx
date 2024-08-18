import React from "react";

function Button({ children, type, handler }) {
  const style =
    type === "danger"
      ? "text-white px-5 py-2 rounded-md bg-red-500"
      : "text-white px-5 py-2 rounded-md bg-green-500";

  return (
    <button className={style} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;

import React from "react";

const Like = ({ onToggleLike, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onToggleLike}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;

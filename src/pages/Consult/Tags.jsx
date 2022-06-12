import React from "react";

const tags = [
  "japan",
  "animation",
  "anime",
  "manga",
  "2d",
  "3d",
  "digital",
  "tokyo",
  "color",
  "illustration",
];

function Tags() {
  return (
    <div className="main-tags-container">
      <h3>Tags</h3>
      <div className="tags-container">
        {tags.map((tag, i) => {
          return <div className="tag">{tag}</div>;
        })}
      </div>
    </div>
  );
}

export default Tags;

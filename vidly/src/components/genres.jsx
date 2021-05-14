import React from "react";

const Genres = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreSelect(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

Genres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Genres;

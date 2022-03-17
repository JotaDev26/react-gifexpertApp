import React from "react";
import { useFetchgifs } from "../hooks/useFetchgifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchgifs(category);

  return (
    <>
      <h3> {category} </h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

// React needs to be imported in every file with a component.
import React from "react";
import { Link } from "react-router-dom";

import Tag from "./Tag";
import Heart from "./Heart";

export default function BlogItem({ title, excerpt, tags, image, slug }) {
  return (
    <div className="relative flex-auto max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-4">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <Link to={`/posts/${slug}`}>
          <div className="font-bold text-xl mb-2 text-indigo-500">{title}</div>{" "}
        </Link>

        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
          <Tag tag={tag} />
        ))}
      </div>
      <Heart />
    </div>
  );
}

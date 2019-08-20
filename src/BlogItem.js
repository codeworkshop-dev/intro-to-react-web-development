// React needs to be imported in every file with a component.
import React from 'react'

export default function BlogItem({ title, excerpt, tags, image }) {
  return (
    <div className="flex-1 max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
      <img
        className="w-full"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

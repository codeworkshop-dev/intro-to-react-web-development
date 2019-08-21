// React needs to be imported in every file with a component.
import React from 'react'
import Tag from './Tag'
import Heart from './Heart'

export default function BlogItem({ title, excerpt, tags, image }) {
  return (
    <div className="relative flex-auto max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 m-4">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
          <Tag tag={tag} />
        ))}
      </div>
      <Heart />
    </div>
  )
}

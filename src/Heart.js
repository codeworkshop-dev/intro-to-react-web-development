import React, { useState } from 'react'

function Like() {
  const [liked, setLiked] = useState(false)
  return (
    <span
      className={[
        'absolute',
        'bottom-0',
        'right-0',
        'm-2',
        'text-3xl',
        'cursor-pointer',
        liked ? 'text-red-500' : 'text-gray-500',
      ].join(' ')}
      onClick={() => setLiked(!liked)}
    >
      ♥
    </span>
  )
}

export default Like

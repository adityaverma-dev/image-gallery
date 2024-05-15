import React from 'react';

function ImageCard( {image}) {
    const tags=image.tags.split(',');
  return (

<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={image.webformatURL} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <ul>
<li>
    <strong>Views:{image.views}</strong>
</li>
<li>
    <strong>Downloads:{image.downloads}</strong>
</li>
<li>
    <strong>Likes:{image.likes}</strong>
</li>
    </ul>
  </div>
  <div className="px-6 pt-4 pb-2">
    {tags.map(tag => (
 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
    ))}
  </div>
</div>
  );
}

export default ImageCard;
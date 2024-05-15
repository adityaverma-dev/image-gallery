import './App.css';
import React, { useEffect, useState } from 'react'
import ImageCard from './components/ImageCard.js'
import Search from './components/Search';

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=43750982-cccb38e876ce2f6037a8568fd&q=${term}&image_type=photo&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
      })

  }, [term]);

  return (

    <div className= "container mx-auto">
<Search searchText={(text) => setTerm(text)}  />
      <div className="grid grid-cols-4 gap-4">

        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))} </div>
    </div>);
}
export default App;

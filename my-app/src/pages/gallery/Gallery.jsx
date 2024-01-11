import React from 'react'
import GalleryPic from '../../images/gallery.jpg'
import Header from '../../components/Header'
import './gallery.css'
const Gallery = () => {
  const galleryLength = 5;
  const images = []

  for(let i = 1; i<= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
    <Header title="Our Gallery" image={GalleryPic}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Odit dolor quod dolores quos excepturi consectetur labore, 
      repellat ratione consequatur deserunt.
    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Picha ${index + 1}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery
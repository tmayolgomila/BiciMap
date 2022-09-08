import React from 'react'
import Carousel from 'better-react-carousel'
import "../../styles/carrousel.css";

export default function Gallery() {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" />
        <h2 className='elTituloFoto'>Titulo de la foto</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/170379/pexels-photo-170379.jpeg?cs=srgb&dl=pexels-heather-smith-170379.jpg&fm=jpg" />
        <h2 className='elTituloFoto'>Titulo2 de la foto</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?cs=srgb&dl=pexels-irene-lasus-90454.jpg&fm=jpg" />
        <h2 className='elTituloFoto'>Titulo2 de la foto</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?cs=srgb&dl=pexels-irene-lasus-90454.jpg&fm=jpg" />
        <h2 className='elTituloFoto'>Titulo2 de la foto</h2>
        </div>
      </Carousel.Item>

    </Carousel>
  )
}
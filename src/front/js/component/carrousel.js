import React from 'react'
import Carousel from 'better-react-carousel'
import "../../styles/carrousel.css";

export default function Gallery() {
  return (
    <div className='cajaDeFoto'>
    <Carousel cols={1} rows={1} gap={1}  loop>
      
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/5225317/pexels-photo-5225317.jpeg?cs=srgb&dl=pexels-samson-katt-5225317.jpg&fm=jpg" />
        <h1 className='elTituloFoto'>Muévete por la ciudad</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?cs=srgb&dl=pexels-jahangeer-bm-1619299.jpg&fm=jpg" />
        <h1 className='elTituloFoto'>Disfruta de la montaña</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" />
        <h1 className='elTituloFoto'>Vende o alquila tu bici</h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='laCartaFoto'>
        <img className='laFoto' width="100%" src="https://images.pexels.com/photos/210117/pexels-photo-210117.jpeg?cs=srgb&dl=pexels-pixabay-210117.jpg&fm=jpg" />
        <h1 className='elTituloFoto'>Descubre nuestro catálogo</h1>
        </div>
      </Carousel.Item>
      

    </Carousel>
    </div>
  )
}
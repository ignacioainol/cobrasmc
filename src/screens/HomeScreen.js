import React from 'react'
import { Carousel } from 'react-bootstrap'
import { CarouselImage } from '../components/CarouselImage'

export const HomeScreen = () => {
  return (
      <>
          <Carousel>
            <Carousel.Item>
                  <CarouselImage
                    src="/assets/images/cobras-slider-1.png" 
                    alt="First slide" 
                  />
                <Carousel.Caption>
                <h3>Cobras MC</h3>
                <p>To Death</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <CarouselImage
                    src="/assets/images/cobras-slider-2.jpeg" 
                    alt="First slide" 
                  />
                <Carousel.Caption>
                <h3>Club House</h3>
                <p>Let's Rock </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <CarouselImage
                    src="/assets/images/cobras-slider-3.png" 
                    alt="First slide" 
                  />
                <Carousel.Caption>
                <h3>Rebel Rebel</h3>
                <p>
                    Heavy Metal is the Law
                </p>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
      

      <div className="container mt-5">
        <div className="row mt-5">
          <h4>Historia</h4>
          <p>Hace quince años, en la ciudad de Concepción, un grupo de apasionados por las motocicletas se unió para formar un motoclub que honraría la herencia de la cultura de las dos ruedas. Así nació "Cobras MC", un nombre que resonaría en las carreteras y más allá, como símbolo de camaradería, respeto y pasión por la conducción.</p>
          <p>Desde sus comienzos, los miembros de Cobras MC se comprometieron a establecer un estándar excepcional en el mundo de los motoclubs. Respetando rigurosamente todas las reglas de seguridad y ética, el club se convirtió en un faro de integridad y responsabilidad en la comunidad motorizada de la región.</p>
          <p>A lo largo de los años, Cobras MC ha forjado lazos indestructibles entre sus miembros, cimentados en el amor compartido por la libertad en dos ruedas. Juntos, han explorado intrépidamente las carreteras sinuosas de Chile, descubriendo nuevos horizontes y creando recuerdos inolvidables en cada curva.</p>
        </div>
      </div>
      </>
  )
}

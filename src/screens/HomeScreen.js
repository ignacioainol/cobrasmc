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
                <h3>deploy CObras Site</h3>
                <p>COBRAS M.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <CarouselImage
                    src="/assets/images/cobras-slider-2.jpeg" 
                    alt="First slide" 
                  />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                  <CarouselImage
                    src="/assets/images/cobras-slider-3.png" 
                    alt="First slide" 
                  />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      </>
  )
}

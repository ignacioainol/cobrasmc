import React from 'react'

export const CarouselImage = ({ src, alt}) => {
    const style = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        height: '65vh', 
        width: '100%', 
      };
    
      return <div style={style} aria-label={alt} />;
}

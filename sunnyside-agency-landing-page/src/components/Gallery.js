import React from "react";
import Image1Mobile from "../images/mobile/image-gallery-cone.jpg";
import Image1Desktop from "../images/desktop/image-gallery-cone.jpg";
import Image2Mobile from "../images/mobile/image-gallery-orange.jpg";
import Image2Desktop from "../images/desktop/image-gallery-orange.jpg";
import Image3Mobile from "../images/mobile/image-gallery-sugar-cubes.jpg";
import Image3Desktop from "../images/desktop/image-gallery-sugarcubes.jpg";
import Image4Mobile from "../images/mobile/image-gallery-milkbottles.jpg";
import Image4Desktop from "../images/desktop/image-gallery-milkbottles.jpg";

const Gallery = () => {
  return (
    <div className='images'>
      <div className='grid grid-cols-2 md:flex'>
        <picture>
          <source media='(min-width: 768px)' srcSet={Image4Desktop} />
          <img src={Image4Mobile} alt='' />
        </picture>
        <picture>
          <source media='(min-width: 768px)' srcSet={Image2Desktop} />
          <img src={Image2Mobile} alt='' />
        </picture>

        <picture>
          <source media='(min-width: 768px)' srcSet={Image1Desktop} />
          <img src={Image1Mobile} alt='' />
        </picture>

        <picture>
          <source media='(min-width: 768px)' srcSet={Image3Desktop} />
          <img src={Image3Mobile} alt='' />
        </picture>
      </div>
    </div>
  );
};

export default Gallery;

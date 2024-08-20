import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './App.css'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const [showFullImg , setFullImg] = useState(false)
  const { slides, options } = props
  const [srcImg, setSrcImg] = useState('')
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })])
  const imgs = ['jijai.jpg', 'car.png', 'ubtan.jpg' , 'cric.jpg', 'jijai.jpg', 'car.png']
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
   <>
   {showFullImg && <FullImg src= {srcImg} setFullImg={setFullImg} />}
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
          {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div>
                  <div className='coro embla__slide__number '>
                    <img
                    onClick={()=>{
                      setFullImg(true);
                     setSrcImg('/' + imgs[index])
                    }}
                    src= {'/' + imgs[index]}
                    />
                  
                  </div>
          
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
  
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </section>
   </>
  )
}


function FullImg({src, setFullImg} : any){

  return(
    <div 
    className='fullImg'
    onClick={()=> setFullImg(false)}
    >
      <img 
      src= {src}
      />

    </div>
  )
}


export default EmblaCarousel

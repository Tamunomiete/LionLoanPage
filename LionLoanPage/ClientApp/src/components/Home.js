import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import './Home.css';

const items = [
    {
        src: require('./EduLoan.png'), 
        altText: 'Slide 1',
        caption: 'Image 1 Text',
    },
    {
        src: 'image2.jpg',
        altText: 'Slide 2',
        caption: 'Image 2 Text',
    },
    {
        src: 'image3.jpg',
        altText: 'Slide 3',
        caption: 'Image 3 Text',
    },
    {
        src: 'image4.jpg',
        altText: 'Slide 4',
        caption: 'Image 4 Text',
    },
];

const Home = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <div className="text-center">
                <p>Text written under the carousel images goes here.</p>
            </div>
        </div>
    );
};

export default Home;

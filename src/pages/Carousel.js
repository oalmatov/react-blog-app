import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const featuredImages = [
    require('../images/img-1.jpg'),
    require('../images/img-2.jpg'),
    require('../images/img-3.jpg'),
];

let count = 0;

function Carousel() {
    const [index, setIndex] = useState(0);

    const handleNextClick = () => {
        count = (index + 1) % featuredImages.length;
        setIndex(count);
    };

    useEffect(() => {
        startSlider();
    });

    const startSlider = () => {
        setInterval(() => {
            handleNextClick();
        }, 3000);
    };

    return (
        <div className="w-full relative select-none">
            <img
                className="mx-auto shadow-lg"
                src={featuredImages[index]}
                alt={featuredImages[index]}
            />
        </div>
    );
}

export default Carousel;

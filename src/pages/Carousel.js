import React, { useState } from 'react';

const featuredImages = [
    '../images/img-1.jpg',
    '../images/img-2.jpg',
    '../images/img-3.jpg',
];

let count = 0;

function Carousel() {
    const [index, setIndex] = useState(0);

    const handleNextClick = () => {
        count = (count + 1) % featuredImages.length;
        setIndex(count);
        console.log(featuredImages[count]);
    };

    const handlePrevClick = () => {
        count = (index + featuredImages.length - 1) % featuredImages.length;
        setIndex(count);
        console.log(featuredImages[count]);
    };

    return (
        <div className="w-full relative select-none">
            <img
                className="w-1/2 mx-auto shadow-lg"
                src={featuredImages[index]}
                alt={featuredImages[index]}
            />
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                <button onClick={handlePrevClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
}

export default Carousel;

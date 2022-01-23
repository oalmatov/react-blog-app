import React from 'react';
import Carousel from './Carousel';

function Home() {
    return (
        <>
            <div className="font-mono mx-auto justify-center container w-[700px] m-10">
                <Carousel />
            </div>
            <img src="img-1.jpg" alt="" />
            <div className="font-mono mx-auto justify-center container w-[700px] m-10 divide-y-4 divide-solid divide-sky-900">
                <h1 className="text-center text-2xl pb-3">
                    Hi, my name is Omar!
                </h1>
                <p className="text-lg pt-3">
                    I'm a sophomore at UC Berkeley studying Computer Science. I
                    enjoy rock climbing, going on hikes, and making fun software
                    projects. Currently looking for internship opportunities.
                    (he/him/his).
                </p>
            </div>
        </>
    );
}

export default Home;

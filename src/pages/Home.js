import React from 'react';
import Carousel from './Carousel';

function Home() {
    return (
        <>
            <div className="container mx-auto my-20 justify-center columns-2 font-mono">
                <div className="grid place-items-top mx-auto h-screen">
                    <div>
                        <h1 className="text-center text-2xl pb-3">
                            Hi, my name is Omar!
                        </h1>
                        <p className="text-lg pt-3">
                            I'm a sophomore at UC Berkeley studying Computer
                            Science. I enjoy rock climbing, going on hikes, and
                            making fun software projects. Currently looking for
                            internship opportunities. (he/him/his).
                        </p>
                        <p className="text-lg pt-3">
                            I'm a sophomore at UC Berkeley studying Computer
                            Science. I enjoy rock climbing, going on hikes, and
                            making fun software projects. Currently looking for
                            internship opportunities. (he/him/his).
                        </p>
                    </div>
                </div>
                <div className="rounded-lg mx-auto justify-center container w-full">
                    <Carousel />
                </div>
            </div>
        </>
    );
}

export default Home;

'use client';
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function CarouselCoverUdicth() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} statusFormatter={() => ''}>
            <div>
                <Image
                    src={"/images/blog/coveruditch/1.webp"}
                    alt="author"
                    width={700}
                    height={700}
                />
            </div>
            <div>
                <Image
                    src={"/images/blog/coveruditch/2.webp"}
                    alt="author"
                    width={700}
                    height={700}
                />
            </div>
        </Carousel>
    )
}

export default CarouselCoverUdicth
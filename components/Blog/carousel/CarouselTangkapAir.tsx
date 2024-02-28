'use client';
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function CarouselTangkapAir() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} statusFormatter={() => ''}>
            <div>
                <Image
                    src={"/images/blog/boxtangkapair/tangkapair.webp"}
                    alt="author"
                    width={700}
                    height={700}
                />
            </div>
            <div>
                <Image
                    src={"/images/blog/boxtangkapair/tangkapair.webp"}
                    alt="author"
                    width={700}
                    height={700}
                />
            </div>
        </Carousel>
    )
}

export default CarouselTangkapAir
"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function CarouselFrameAndCover() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      statusFormatter={() => ""}
    >
      <div>
        <Image
          src={"/images/blog/frameandcover/frameandcover1.webp"}
          alt="author"
          width={700}
          height={700}
        />
      </div>
      <div>
        <Image
          src={"/images/blog/frameandcover/frameandcover2.webp"}
          alt="author"
          width={700}
          height={700}
        />
      </div>
      <div>
        <Image
          src={"/images/blog/frameandcover/frameandcover3.webp"}
          alt="author"
          width={700}
          height={700}
        />
      </div>
    </Carousel>
  );
}

export default CarouselFrameAndCover;

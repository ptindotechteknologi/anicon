"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

function CarouselFlanel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      statusFormatter={() => ""}
    >
      <Image
        src={"/images/blog/flanel/flanel1.webp"}
        alt="author"
        width={700}
        height={700}
      />

      <Image
        src={"/images/blog/flanel/flanel1.webp"}
        alt="author"
        width={700}
        height={700}
      />
    </Carousel>
  );
}

export default CarouselFlanel;

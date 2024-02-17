"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import Link from "next/link";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Beton pracetak adalah produk konstruksi yang dibuat dengan cara mencetak beton dalam sebuah cetakan yang dapat digunakan kembali."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.webp" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <Link
                    href={'https://drive.google.com/file/d/1YvFM_PQzfd366lJ5aqQAUdNjeReVY8un/view?usp=sharing'}
                    target="_blank"
                    aria-label="video play button"
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="24"
                      height="24"
                      version="1.1"
                      id="lni_lni-download"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 64 64"
                      className="fill-current"
                    >
                      <g>
                        <path
                          d="M60,44c-1.2,0-2.3,1-2.3,2.3v8.9c0,0.9-0.7,1.6-1.6,1.6H7.9c-0.9,0-1.6-0.7-1.6-1.6v-8.9C6.3,45,5.2,44,4,44
		s-2.3,1-2.3,2.3v8.9c0,3.4,2.7,6.1,6.1,6.1h48.3c3.4,0,6.1-2.7,6.1-6.1v-8.9C62.3,45,61.2,44,60,44z"
                        />
                        <path
                          d="M30.4,46.5c0.4,0.4,1,0.6,1.6,0.6s1.1-0.2,1.6-0.6l14.5-14.1c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L34.3,39.6V5
		c0-1.2-1-2.3-2.3-2.3c-1.2,0-2.3,1-2.3,2.3v34.6L19.1,29.2c-0.9-0.9-2.3-0.8-3.2,0c-0.9,0.9-0.8,2.3,0,3.2L30.4,46.5z"
                        />
                      </g>
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;

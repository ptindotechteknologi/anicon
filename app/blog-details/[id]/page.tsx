import Image from "next/image";

import { Metadata } from "next";
import blogData from "@/components/Blog/blogData";
import Link from "next/link";
import U_ditch from "@/components/Blog/details/U_ditch";
import CoverUditch from "@/components/Blog/details/CoverUditch";
import BoxCulvert from "@/components/Blog/details/BoxCulvert";
import Barrier from "@/components/Blog/details/Barrier";
import Pipe from "@/components/Blog/details/Pipe";
import CarouselUdicth from "@/components/Blog/carousel/CarouselUdicth";
import CarouselCoverUdicth from "@/components/Blog/carousel/CarouselCoverUdicth";
import CarouselBoxCulvert from "@/components/Blog/carousel/CarouselBoxCulvert";
import CarouselBarrier from "@/components/Blog/carousel/CarouselBarrier";
import CarouselPipe from "@/components/Blog/carousel/CarouselPipe";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = ({ params }) => {
  let data = blogData.find((item) => item.id == params.id);
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="m-auto max-w-7xl p-3">
            <div className="mt-6 sm:mt-10">
              <div>
                <div className="gird-cols-1 grid h-max gap-6 sm:grid-cols-2 md:grid-cols-2">
                  <div className="overflow-hidden rounded-xl">
                    {params.id == 1 && <CarouselUdicth />}
                    {params.id == 2 && <CarouselCoverUdicth />}
                    {params.id == 3 && <CarouselBoxCulvert />}
                    {params.id == 4 && <CarouselBarrier />}
                    {params.id == 5 && <CarouselPipe />}
                  </div>
                  {/* Product Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      {/* Product Title */}
                      <h1 className="block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                        {data?.title}
                      </h1>
                      {/* Product Description */}
                      <p className="text-md mt-3 text-justify leading-6 text-gray-600 sm:mt-4 sm:text-left">
                        {data?.longParagraph}
                      </p>
                      {/* Product Price */}
                      <span className="mt-2 text-xl font-semibold sm:text-2xl">
                        {/* $20 */}
                      </span>
                    </div>
                    {/* Quantity Input and Order Button */}
                    <div className=" ">
                      {/* Order Button */}
                      <Link
                        href={
                          "https://api.whatsapp.com/send?phone=62813231123&text=Haii%20..%20"
                        }
                        target="_blank"
                        className="my-4 w-full text-left"
                      >
                        <button
                          className="text-md flex w-full items-center justify-center gap-2 rounded-md border border-primary bg-primary px-4 py-3 font-bold text-white shadow-slate-600 duration-150 ease-in-out hover:bg-white hover:text-red-500 md:px-6 lg:m-0"
                          title="Confirm Order"
                        >
                          <span>Pesan Sekarang</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {params.id == 1 && <U_ditch />}
          {params.id == 2 && <CoverUditch />}
          {params.id == 3 && <BoxCulvert />}
          {params.id == 4 && <Barrier />}
          {params.id == 5 && <Pipe />}
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;

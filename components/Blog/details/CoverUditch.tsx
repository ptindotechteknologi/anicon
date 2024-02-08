import Image from "next/image";
import React from "react";
import TagButton from "../TagButton";
import SharePost from "../SharePost";
import Quote from "@/components/Quote";

function CoverUditch() {
  return (
    <div className="mt-8">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-8/12">
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Detail Barang
            </h2>
            <div>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                
              </p>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[80/20] w-full sm:aspect-[85/21]">
                  <Image
                    src="/images/blog/coveruditch/spekcoverudtich.png"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/97] w-full ">
                  <Image
                    src="/images/blog/coveruditch/tablecoverudtich.png"
                    alt="image"
                    fill
                    className=" object-center"
                  />
                </div>
              </div>
              <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Spesifikasi Teknis
              </h3>
              <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                Adapun Spesifikasi Teknis Tambahan seperti berikut
              </p>
              <ul className="mb-10 list-inside list-disc text-body-color">
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Mutu Beton K-350
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem Cetak Basah dengan getaran
                </li>
              </ul>
              <Quote />
              <div className="items-center justify-between sm:flex">
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color">
                    Popular Tags :
                  </h4>
                  <div className="flex items-center">
                    <TagButton text="Beton Precast" />
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                    Share this post :
                  </h5>
                  <div className="flex items-center sm:justify-end">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverUditch;

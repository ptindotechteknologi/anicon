import Image from "next/image";
import React from "react";
import TagButton from "../TagButton";
import SharePost from "../SharePost";
import Quote from "@/components/Quote";

function Panel() {
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
                Berikut Adalah Ukuran Ukuran Panel yang Kami Produksi
              </p>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[7/2] w-full sm:aspect-[7/2]">
                  <Image
                    src="/images/blog/flanel/ukuran.webp"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

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

export default Panel;

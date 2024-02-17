import Image from "next/image";
import React from "react";
import TagButton from "../TagButton";
import SharePost from "../SharePost";
import Quote from "@/components/Quote";

function Pipe() {
  return (
    <div className="mt-8">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-8/12">
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Detail Barang
            </h2>
            <div>
              <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Pipa Beton Bertulang Untuk Dranaise -Type FJ
              </h3>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[90/30] w-full sm:aspect-[87/30]">
                  <Image
                    src="/images/blog/pipe/combined.webp"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[95/40] w-full sm:aspect-[98/40]">
                  <Image
                    src="/images/blog/pipe/table.webp"
                    alt="image"
                    fill
                    className="object-cover object-center"
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
                  Mutu Beton K-500
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem cetak spun roller compacted
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem joint male female dengan mortar
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Pipa Beton Bertulang Untuk Dranaise -Type RJ
              </h3>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[90/30] w-full sm:aspect-[87/30]">
                  <Image
                    src="/images/blog/pipe/combinedRj.webp"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[78/20] w-full sm:aspect-[120/30]">
                  <Image
                    src="/images/blog/pipe/piep2.webp"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[55/29] w-full sm:aspect-[55/29]">
                  <Image
                    src="/images/blog/pipe/tablerj.webp"
                    alt="image"
                    fill
                    className="object-cover object-center"
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
                  Mutu Beton K-500
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem cetak spun roller compacted
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem joint soket dan dilengkapi karet seal
                </li>
              </ul>
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
  );
}

export default Pipe;

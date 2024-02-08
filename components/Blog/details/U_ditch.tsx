import Image from "next/image";
import React from "react";
import TagButton from "../TagButton";
import SharePost from "../SharePost";
import Quote from "@/components/Quote";

function U_ditch() {
  let data = [
    "30 x 30 x 120 cm",
    "30 x 40 x 120 cm",
    "30 x 50 x 120 cm",
    "40 x 40 x 120 cm",
    "40 x 50 x 120 cm",
    "40 x 60 x 120 cm",
  ];
  let data2 = [
    "50 x 50 x 120 cm",
    "50 x 60 x 120 cm",
    "50 x 70 x 120 cm",
    "60 x 60 x 120 cm",
    "60 x 70 x 120 cm",
    "60 x 80 x 120 cm",
    "80 x 80 x 120 cm",
  ];
  let data3 = [
    "80 x 100 x 120 cm",
    "100 x 100 x 120 cm",
    "100 x 120 x 120 cm",
    "120 x 120 x 120 cm",
    "120 x 140 x 120 cm",
    "140 x 140 x 120 cm",
    "150 x 150 x 120 cm",
    "*Custom",
  ];
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
                Berikut Adalah Ukuran Ukuran Uditch yang Kami Produksi
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 my-6">
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th>Ukuran</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <>
                          <tr>
                            <td align="center">{item}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th>Ukuran</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((item) => {
                      return (
                        <>
                          <tr>
                            <td align="center">{item}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th>Ukuran</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data3.map((item) => {
                      return (
                        <>
                          <tr>
                            <td align="center">{item}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[90/40] w-full sm:aspect-[97/44]">
                  <Image
                    src="/images/blog/uditch/spesifikasi-uditch.png"
                    alt="image"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="mb-10 w-full overflow-hidden rounded">
                <div className="relative aspect-[97/97] w-full ">
                  <Image
                    src="/images/blog/uditch/table.png"
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
                  Uditch dapat dilengkapi cover
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Mutu Beton K-350
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem Cetak Basah dengan getaran
                </li>
                <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Sistem Joint Male Female
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

export default U_ditch;

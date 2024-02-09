import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionFour = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  let list = [
    "Proyek double track PT. KAI di Cigombong",
    "Proyek peningkatan saluran air Pemda Kota Bekasi",
    "Proyek peningkatan saluran air Pemda Tangsel",
    "Proyek peningkatan saluran air Pemda Depok",
    "Peningkatan saluran drainase JI. Duta-Cimanggis",
    "Peningkatan saluran drainase JL. Villa Pamulang-Tangerang selatan",
    "Proyek saluran drainase Mabes TNI-Cilangkap",
    "Proyek revitalisasi drainase bandara Soekarno Hatta",
    "Sistem drainasi pabrik PT. Hitachi Astemo-Bekasi",
    "Pengadaan Concrete Barrier Dishub Sukoharjo",
    "Pengadaan Concrete Barrier Tol Krapyak-Semarang",
    "Revitalisasi drainase alun-alun kota Jepara",
    "Dan lain-lain",
  ];

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <h5 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          Referensi Proyek
        </h5>
        <div className="-mx-4 flex flex-wrap items-center dark:border-white/[.15]">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/project.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/project.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div data-wow-delay=".15s">
              {list.map((item, idx) => (
                <List key={idx} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;

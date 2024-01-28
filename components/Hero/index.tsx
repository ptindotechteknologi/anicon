import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen overflow-hidden bg-white dark:bg-gray-dark md:pb-[120px]  xl:pb-[160px]  2xl:pb-[200px] "
      >
        <video
          autoPlay
          loop
          muted
          className="absolute h-full w-full object-cover opacity-60"
        >
          <source src={"/videos/hero/heroVideo.mp4"} type="video/mp4"></source>
        </video>
        <div className="z-2 container relative pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  CV. ANICON
                </h1>
                <p className="mb-12 text-3xl !leading-relaxed text-body-color dark:text-body-color-dark  md:text-5xl">
                  SELAMAT DATANG di Pusat Spesialis Beton Precast
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Produk
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Hubungi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

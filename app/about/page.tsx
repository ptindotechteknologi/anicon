import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Cv Anicon",
  description: "This is About Page for Anicon",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="CV Anicon"
        description="CV. ANICON adalah perusahaan yang bergerak di bidang teknik sipil. Kami berdiri tahun 2018 dengan spesialis pada industri produsen beton pracetak. Kami memiliki karyawan yang berpengalaman dan handal dalam bidang beton.  "
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
    </>
  );
};

export default AboutPage;

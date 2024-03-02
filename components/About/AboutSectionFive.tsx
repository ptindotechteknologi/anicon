"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const AboutSectionFive = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };
  let data = {
    labels: [
      "Pipa Dia 800 FJ",
      "Pipa Dia 400 NR",
      "PIPA RJ 400",
      "RCP DIA 300 FJ",
      "Pipa 30 FJ",
      "RCP Dia 300 FJ",
      "Pipa RCP D 30 RJ",
      "RCP Dia 300 FJ",
    ],
    datasets: [
      {
        label: "Data Penjualan Per Unit ",
        backgroundColor: "rgba(1, 147, 66, 0.1) ",
        borderColor: "rgba(1, 147, 66, 1) ",
        borderWidth: 1,
        //stack: 1,
        hoverBackgroundColor: "rgba(1, 147, 66, 0.2) ",
        hoverBorderColor: "rgba(1, 147, 66, 1) ",
        data: [6, 10, 9, 180, 2, 150, 100, 150],
      },
    ],
  };
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 mb-4">
      <div className="container">
        <h5 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">Data Penjualan Januari 2024</h5>
        <Bar data={data} width={null} height={null} options={options} />
      </div>
    </section>
  );
};

export default AboutSectionFive;

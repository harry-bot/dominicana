"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const SectionTwo = () => {
  const t = useTranslations("sectionTwo");
  return (
    <>
      <section id="home" className="pt-16">
        <div className="mx-10 text-center flex flex-col">
          <div className="mx-auto pb-10 lg:pb-28">
            <div className="bg-primary px-5 py-2 rounded-lg">
              <p className="text-2xl font-light lg:text-7xl lg:font-bold text-white">
                {t("title2")}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between space-x-4">
            <div className="w-full">
              <Image
                src="/images/insight/D4K Company Insights 2.svg"
                alt="logo"
                width="500"
                height="500"
                className="object-cover mx-auto w-1/2 lg:w-2/3"
              />
            </div>
            <div className="text-base lg:text-4xl lg:font-bold lg:text-left w-full">
              <p className="text-secondary">
                {t("title")}
              </p>
              <br/>
              <p className="text-black text-justify">{t("para1")}</p>
              <br/>
              <p className="text-black text-justify">{t("para2")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;

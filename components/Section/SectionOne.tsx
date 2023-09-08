"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const SectionOne = () => {
  const t = useTranslations("sectionOne");
  return (
    <>
      <section id="home" className=" pt-28">
          <div className="mx-10 text-center">
            
              <div className="w-full">
                <p className=" text-2xl font-light lg:text-7xl lg:font-bold text-secondary">
                  {t("Title1")}
                </p>
                <p className=" text-2xl font-light lg:text-7xl lg:font-bold text-primary">
                  {t("Title2")}
                </p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/insight/D4K Company Insights.svg"
                  alt="logo"
                  width="800"
                  height="300"
                  className="object-cover mx-auto w-full"
                />
              </div>
            </div>
      </section>
    </>
  );
};

export default SectionOne;

"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const SectionThree = () => {
  const t = useTranslations("sectionThree");
  return (
    <>
      <section id="home" className="pt-16">
        <div className="mx-10 text-center">
          <div className="w-full">
            <Image
              src="/images/brand/Uparrow Icon.svg"
              alt="logo"
              width="200"
              height="200"
              className="object-cover mx-auto w-1/3 lg:w-1/5"
            />
          </div>
          <div className="text-base lg:text-4xl lg:font-bold w-full mx-auto">
            <br/>
            <p className="text-secondary">
              {t("title")}
            </p>
            <br/>
            <p className=" text-justify text-black">
              {t("para1")}
            </p>
            <br/>
            <p className=" text-justify text-black">
              {t("para2")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;

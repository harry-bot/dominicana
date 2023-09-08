"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SectionSix = () => {
  const t = useTranslations("sectionSix");
  return (
    <>
      <section id="home" className="pt-28">
        <div className="mx-10 text-center">
          <div className="lg:flex lg:space-x-16">
            <div className="w-full">
              <Image
                src="/images/brand/Calendar Icon.svg"
                alt="logo"
                width="200"
                height="200"
                className="object-cover mx-auto w-1/3 lg:w-1/5"
              />
              <div className="text-base lg:text-4xl lg:font-bold w-full mx-auto">
                <br />
                <p className="text-secondary">{t("title1")}</p>
                <br />
                <p className=" text-justify text-black">{t("para1")}</p>
                <br />
                <p className=" text-justify text-black">{t("para2")}</p>
              </div>
            </div>

            <div className="w-full pt-16 lg:pt-0">
              <Image
                src="/images/brand/Global icon.svg"
                alt="logo"
                width="200"
                height="200"
                className="object-cover mx-auto w-1/3 lg:w-1/5"
              />
              <div className="text-base lg:text-4xl lg:font-bold w-full mx-auto">
                <br />
                <p className="text-secondary">{t("title2")}</p>
                <br />
                <p className=" text-justify text-black">{t("para3")}</p>
                <br />
                <p className=" text-justify text-black">{t("para4")}</p>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-10 lg:pt-28 pb-10">
            <div className="bg-secondary px-5 py-2 rounded-lg">
              <p className="text-base font-light lg:text-4xl lg:font-bold text-white text-justify">
                {t("para5")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSix;

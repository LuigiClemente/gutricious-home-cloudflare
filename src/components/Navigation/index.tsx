import classNames from "classnames";
import {
  useLocale,
  useTranslations,
} from "@/components/SimpleTranslationProvider";
import Link from "next/link";
import { IMAGE_URL } from "@/utils/image_url";
import { LocalActiveType, routes } from "@/utils/routes";
import { LanguageSelector } from "@/components/LanguageSelector";
import "@/components/LanguageSelector/styles.css";

export const Navigation = ({
  section,
  navOpen,
  setNavOpen,
  isHovered,
  setIsHovered,
  isLangBtnHovered,
  setIsLangBtnHovered,
  selectCard,
}: {
  section: "light" | "dark";
  navOpen: boolean;
  setNavOpen: any;
  isHovered: any;
  setIsHovered: any;
  setIsLangBtnHovered: any;
  isLangBtnHovered: any;
  selectCard: any;
}) => {
  const localActive = useLocale();
  const selectedLanguage = localActive as LocalActiveType;
  const t = useTranslations("Index");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 sticky top-0">
        <div className="relative font-extrabold text-black">
          <img
            alt="logo"
            height={70}
            width={120}
            className="h-[110px] w-[120px] object-contain 2xl:h-[100px] 2xl:w-[150px]"
            src={`${IMAGE_URL}/assets/${
              section === "light" ? "night" : "day"
            }/logo.webp`}
          />
          <div className="absolute top-0 z-20 h-full w-full cursor-pointer rounded-full" />
        </div>

        <div className="mr-[10px] flex items-center gap-[25px]">
          <LanguageSelector
            section={section}
            isHovered={isLangBtnHovered}
            setIsHovered={setIsLangBtnHovered}
          />
          <div
            className={`relative ${
              section === "light" ? "light" : "dark"
            } hamburger-container ${navOpen ? "navOpen" : ""}`}
          >
            <div
              className={`z-20 absolute  h-full w-full rounded-full duration-[800ms] extra-nav`}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setNavOpen(!navOpen)}
            ></div>
            <button
              className={` menu__icon  ${
                isHovered || navOpen ? "hovered-class" : ""
              }`}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={classNames("navigation", "dark")}>
            <input
              type="checkbox"
              className="navigation__checkbox"
              checked={navOpen}
              id="navi-toggle"
              readOnly
            />
            <div
              className={`navigation__background ${navOpen ? "navOpen" : ""}`}
            >
              &nbsp;
            </div>
            <nav className="navigation__nav">
              <div className="custom-container flex min-h-[130px] items-center justify-between">
                <div />
                <div
                  className={`hamburger-container dark relative ${
                    navOpen ? "navOpen" : ""
                  }`}
                >
                  <div
                    className="extra-nav absolute z-20 h-20 w-20 rounded-full duration-[800ms]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setNavOpen(!navOpen)}
                  />
                  <button
                    className={`menu__icon mr-[-40px] mb-[20px] ${
                      isHovered || navOpen ? "hovered-class" : ""
                    }`}
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
              <ul className="navigation__list flex flex-col">
                <Link
                  href={routes[selectedLanguage]["home"]}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">{t("Home")}</span>
                </Link>
                <Link
                  href={routes[selectedLanguage]["about-us"]}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">{t("About_Us")}</span>
                </Link>
                <Link
                  href={routes[selectedLanguage]["our-studies"]}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">{t("Our_Studies")}</span>
                </Link>
                <Link
                  href={routes[selectedLanguage]["terms-of-use"]}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">
                    {t("Terms_of_Service")}
                  </span>
                </Link>
                <Link
                  href={routes[selectedLanguage]["cookies"] as any}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">
                    {t("Cookies_Policy")}
                  </span>
                </Link>
                <Link
                  href={routes[selectedLanguage]["privacy"]}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">
                    {t("Privacy_Policy")}
                  </span>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

{
  /* <nav
className={
  "flex w-full justify-between items-center  mx-auto pr-[10px] " + section
}
>
<div className="relative font-extrabold text-black">
  <Image
   loader={({ src }) => src}
    alt="logo"
    height={70}
    width={120}
    className=" h-[110px] w-[120px] 2xl:h-[100px] 2xl:w-[150px] object-contain"
    style={{ objectFit: 'contain' }}
    src={`${IMAGE_URL}/assets/${section === "dark" ? "day" : "night"}/logo.webp`}
  ></Image>
  <div
    className={`z-20 absolute   h-full w-full rounded-full top-0 cursor-pointer`}
    onClick={() => {
      selectCard(1, true);
    }}
  ></div>
</div>

<div className="flex items-center gap-10 mr-[10px]">
  <Popover
  isOpen={langOpen}
    positions={["left", "top"]}
    padding={10}
    onClickOutside={() => setLangOpen(false)}
    content={({ position, nudgedLeft, nudgedTop }) => (
      <div className="languages-box">
{languages.map((lang) => (
  <div
    key={lang.code}
    className={`language ${selectedLanguage === lang.code ? "selected" : ""}`}
    onClick={() => changeLanguage(lang.code as LocalActiveType)}
  >
    <span>{lang.label}</span>
    <svg
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M20.54 7.225 9.58 18.185l-6.12-6.12 1.415-1.414 4.705 4.706 9.546-9.546z"
      ></path>
    </svg>
  </div>
))}
</div>
    )}
  >
    <div
      className={`lang-btn relative cursor-pointer ${
        isLangBtnHovered ? "hovered" : ""
      }`}
     
    >
      <div
        className="h-full w-full absolute z-20 cursor-pointer inner-lang-btn"
        onMouseEnter={() => {
          setIsLangBtnHovered(true);
        }}
        onMouseLeave={() => setIsLangBtnHovered(false)}
        onClick={() => {
          if(!langBtnState){
            setLangBtnState(true);
            setLangOpen(true)
          }else {
            setLangBtnState(false);
          setLangOpen(false)
          }
          

  
      }
        }
      ></div>

      <CiGlobe color={section === "light" ? "#ffffff" : "#000000"} />
    </div>
  </Popover>
  <div
    className={`relative ${
      section === "light" ? "light" : "dark"
    } hamburger-container ${navOpen ? "navOpen" : ""}`}
  >
    <div
      className={`z-20 absolute  h-full w-full rounded-full duration-[800ms] extra-nav`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setNavOpen(!navOpen)}
    ></div>
    <button
      className={` menu__icon  ${
        isHovered || navOpen ? "hovered-class" : ""
      }`}
    >
      <span></span>
      <span></span>
    </button>
  </div>

  <div className={classNames("navigation", section)}>
    <input
      type="checkbox"
      className="navigation__checkbox"
      checked={navOpen}
      id="navi-toggle"
    />

    <div className={`navigation__background ${navOpen ? "navOpen" : ""}`}>
      &nbsp;
    </div>

    <nav className="navigation__nav">
      <div className="custom-container flex justify-between min-h-[130px] items-center">
        <div></div>
        <div
          className={`relative ${
            section === "light" ? "light" : "dark"
          } hamburger-container ${navOpen ? "navOpen" : ""}`}
        >
          <div
            className={`z-20 absolute  w-20 h-20 rounded-full duration-[800ms] extra-nav`}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setNavOpen(!navOpen)}
          ></div>
          <button
            className={` mr-8 menu__icon  ${
              isHovered || navOpen ? "hovered-class" : ""
            }`}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <ul className="navigation__list flex flex-col">
        <Link href={routes[selectedLanguage]['home']} className="navigation__item inline-block">
          <span className="navigation__link">{t("Home")}</span>
        </Link>
        <Link href={routes[selectedLanguage]['about-us']}  className="navigation__item inline-block">
          <span className="navigation__link">{t("About_Us")}</span>
        </Link>
        <Link
          href={routes[selectedLanguage]['our-studies']}
          className="navigation__item inline-block"
        >
          <span className="navigation__link">{t("Our_Studies")}</span>
        </Link>
        <Link href={routes[selectedLanguage]['terms-of-use']} className="navigation__item inline-block">
          <span className="navigation__link">
            {t("Terms_of_Service")}
          </span>
        </Link>
        <Link href={routes[selectedLanguage]['cookies'] as any} className="navigation__item inline-block">
          <span className="navigation__link">{t("Cookies_Policy")}</span>
        </Link>
        <Link
         href={routes[selectedLanguage]['privacy']}
          className="navigation__item inline-block"
        >
          <span className="navigation__link">{t("Privacy_Policy")}</span>
        </Link>
      </ul>
    </nav>
  </div>
</div>
</nav> */
}

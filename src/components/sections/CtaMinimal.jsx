import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import links from "../../content/links";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;
export default function CtaSecondary({ colorMode = "default" }) {
  const navigate = useNavigate();

  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-secondary",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea className={`${bgClass}`}>
        <SectionWrapper>
          <div className=" flex flex-col desktop1:flex-row justify-evenly">
            <div className=" items-center desktop1:w-[45%] ">
              <SectionHeader
                colorMode="dark"
                className={`text-center desktop1:hidden w-full ${textClass}`}
                miniTitle={content.texts.ctaSecondary.miniTag}
                sectionHeaderTitle={content.texts.ctaSecondary.title}
                titleColorSet={textClass}
                subtitleColorSet={textClass}
                type=""
              />
              <SectionHeader
                colorMode="dark"
                className={`text-center hidden desktop1:flex ${textClass}`}
                miniTitle={content.texts.ctaSecondary.miniTag}
                sectionHeaderTitle={content.texts.ctaSecondary.title}
                titleColorSet={textClass}
                subtitleColorSet={textClass}
                type="article"
              />
            </div>
            <div className=" desktop1:w-[45%] flex flex-col items-center justify-evenly">
              {" "}
              <FaWhatsapp size={54} className="text-primary" />
              {content.texts.ctaSecondary.subtitleDireita}
              {content.texts.ctaSecondary.titleDireita}
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label="Faça sua cotação agora"
                animation
                buttonLink={whatsappContactLink}
                icon={<FaWhatsapp size={24} color="2A050F" />}
                color="bg-primary"
                labelColor="text-secondary"
              />
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}

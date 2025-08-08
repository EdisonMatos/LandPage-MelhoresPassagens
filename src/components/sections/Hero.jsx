import links from "../../content/links";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import content from "../../content/content";
import bgHeroImg from "../../assets/imgs/hero/bgHero.jpg";
import Button from "../interactives/Button";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";
import imgLaw from "../../assets/imgs/hero/aviao.webp";
import SectionArea from "../sectionElements/SectionArea";
import imgPoints from "../../assets/imgs/about/points.png";
import imgHeroTrustedBy1 from "../../assets/imgs/hero/latam.png";
import imgHeroTrustedBy2 from "../../assets/imgs/hero/gol.png";
import imgHeroTrustedBy3 from "../../assets/imgs/hero/azul.png";
import imgHeroTrustedBy4 from "../../assets/imgs/hero/tapPortugal.png";
import imgHero1 from "../../assets/imgs/hero/latam.png";
import imgHero2 from "../../assets/imgs/hero/gol.png";
import imgHero3 from "../../assets/imgs/hero/azul.png";
import imgHero4 from "../../assets/imgs/hero/tapPortugal.png";
import SectionWrapper from "../sectionElements/SectionWrapper";

//latam1 gol2 azul3 portugal4

const whatsappContactLink =
  "https://www.comprarviagem.com.br/melhorespassagens/home";

const whatsappContactLinkSecondary = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function Hero() {
  return (
    <div
      className="w-full h-auto bg-center bg-no-repeat bg-cover font-mainFont"
      style={{ backgroundImage: `url(${bgHeroImg})` }}
      id="home"
    >
      <SectionArea paddingbot={false}>
        <SectionWrapper>
          <div className="relative z-10 flex w-full bg-black bg-opacity-0 items-left desktop1:pl desktop3:pl-0">
            <div className="w-full justify-evenly">
              <div className="phone1:h-[60px] desktop1:h-[20px] desktop3:h-[40px]" />
              <div className="flex phone1:flex-col desktop1:flex-row mx-auto w-full items-center py-[46px] tablet1:py-[70px] desktop1:py-[30px] desktop3:pb-6 ">
                <div className="flex flex-col w-full desktop1:w-[60%] desktop1:mr-[20px] desktop2:w-[80%] ">
                  <MotionDivLeftToRight>
                    <div className="w-auto text-center desktop1:text-left font-secondFont phone1:text-paragraph4">
                      <p className="mb-[16px] bg-primary bg-opacity-100 font-medium text-secondary rounded-2xl px-[16px] py-[6px] inline-block text-paragraph2">
                        {content.texts.hero.miniTag}
                      </p>
                    </div>
                  </MotionDivLeftToRight>
                  <MotionDivLeftToRight>
                    <div className="text-lighter flex justify-center tablet1:justify-start font-bold leading-[36px] phone2:leading-[43px] tablet1:leading-[65px] desktop1:leading-[60px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 ">
                      <h1 className="">{content.texts.hero.title}</h1>
                    </div>
                  </MotionDivLeftToRight>
                  <MotionDivLeftToRight>
                    <div className="flex justify-center text-center phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5 desktop1:text-left desktop1:justify-start ">
                      <p className="text-lighter mb-[32px] opacity-80">
                        {content.texts.hero.subtitle}
                      </p>
                    </div>
                  </MotionDivLeftToRight>
                  <div className="w-full phone2:w-full tablet2:w-auto">
                    <MotionDivLeftToRight>
                      <div className="flex flex-col gap-8 justify-center w-full desktop1:justify-start">
                        <Button
                          aria-label={content.texts.hero.ctaButtonAriaLabel}
                          label="Compre sua passagem aqui"
                          buttonLink={whatsappContactLink}
                          gap="0px"
                        />
                        <p className="justify-center text-center text-white phone1:flex text-paragraph3 desktop1:justify-start desktop1:text-paragraph4 desktop1:text-left">
                          Mas se preferir um atendimento personalizado
                        </p>
                        <Button
                          aria-label={content.texts.hero.ctaButtonAriaLabel}
                          label={content.texts.hero.ctaButtonText}
                          buttonLink={whatsappContactLinkSecondary}
                          gap="0px"
                        />
                      </div>
                    </MotionDivLeftToRight>
                  </div>
                  <MotionDivLeftToRight>
                    <div className="pt-8">
                      <p className="justify-center text-center text-white phone1:flex text-paragraph3 desktop1:justify-start desktop1:text-paragraph4 desktop1:text-left">
                        Emitimos passagens para as principais companhias aéreas
                        dentro e fora do Brasil:
                      </p>
                      <div className="flex w-full pt-4 gap-4 items-center justify-center phone3:pt-6 desktop1: desktop1:justify-start desktop1:top-[30%] desktop1:pt-4 desktop1:gap-4 ">
                        <img
                          className="size-[20%] tablet2:size-[15%] desktop1:size-[20%] desktop3:size-[25%]"
                          src={imgHero1}
                          alt="Logomarca da Latam"
                        />
                        <img
                          className="size-[15%] tablet1:size-[10%] tablet2:size-[8%] desktop1:size-[10%] desktop3:size-[15%]"
                          src={imgHero2}
                          alt="Logomarca da Gol"
                        />
                        <img
                          className="size-[20%] tablet1:size-[15%] tablet2:size-[13%] desktop1:size-[15%] desktop3:size-[25%]"
                          src={imgHero3}
                          alt="Logomarca da Azul"
                        />

                        <img
                          className="size-[20%] tablet2:size-[18%] desktop1:size-[26%] desktop3:size-[25%]"
                          src={imgHero4}
                          alt="Logomarca da AirPortugal"
                        />
                      </div>
                    </div>
                  </MotionDivLeftToRight>
                  {/* <div className="">
                <MotionDivLeftToRight>
                  <p className="mb-[20px]">Baixe nosso app:</p>
                  <div className="">
                    {" "}
                    <div className="flex items-start gap-[20px]">
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgAppStore}
                          alt="Botão para a App Store"
                          className=""
                        />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="transition hover:scale-110"
                      >
                        <img
                          src={imgGooglePlay}
                          alt="Botão para a Google Play"
                          className=""
                        />
                      </a>
                    </div>
                  </div>
                </MotionDivLeftToRight>
              </div> */}
                </div>
                <div className="hidden desktop1:flex desktop3:w-[1200px] desktop3:relative desktop3:left-[5%]">
                  <MotionDivRightToLeft className="relative flex justify-end ">
                    {/* <img
                  src={imgLaw}
                  alt="Foto de itens do direito"
                  className="bg-red-500 "
                /> */}
                    <img
                      src={imgLaw}
                      alt="Foto de passaports"
                      className="w-full rounded-3xl relative z-20 desktop3:top-[15%]"
                    ></img>
                    {/* <img
                  src={imgPoints}
                  alt="Imagem de efeito pontilhado"
                  className="absolute opacity-75 phone1:right-[-10px] phone1:top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
                ></img> */}
                  </MotionDivRightToLeft>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
      <div className="relative z-0 custom-shape-divider-bottom-1725634512">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

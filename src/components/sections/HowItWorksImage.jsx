import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import links from "../../content/links";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";

export default function HowItWorksImage() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="" paddingbot={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[60px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          {/* <div
            style={{
              backgroundImage: url(${imgHowItWorks}),
            }}
            className="relative desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[467px] rounded-2xl"
          >
            <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-75 right-[-40px] top-[40px] phone1:right-[-10px] phone1:top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img>
          </div> */}
          <img
            src={content.texts.steps.imgSteps}
            alt="Imagem de pessoa de férias em um passeio de barco em Arraial do Cabo"
            className=""
          />
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp className="flex justify-center">
            <SectionHeader
              className="hidden text-center desktop1:flex"
              miniTitle={content.texts.steps.miniTag}
              sectionHeaderTitle={content.texts.steps.title}
              color="dark"
              type="article"
            />
            <SectionHeader
              className="text-center desktop1:hidden"
              miniTitle={content.texts.steps.miniTag}
              sectionHeaderTitle={content.texts.steps.title}
              color="dark"
              type=""
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] desktop1:mt-0">
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card1.stepNumber}
                  title={content.texts.steps.cards.card1.cardTitle}
                  description={content.texts.steps.cards.card1.cardDescription}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card2.stepNumber}
                  title={content.texts.steps.cards.card2.cardTitle}
                  description={content.texts.steps.cards.card2.cardDescription}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card3.stepNumber}
                  title={content.texts.steps.cards.card3.cardTitle}
                  description={content.texts.steps.cards.card3.cardDescription}
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="tablet1:w-[45%]">
                <HowItWorksCard
                  number={content.texts.steps.cards.card4.stepNumber}
                  title={content.texts.steps.cards.card4.cardTitle}
                  description={content.texts.steps.cards.card4.cardDescription}
                />
              </MotionDivDownToUp>
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
      <div class="custom-shape-divider-top-1725902583 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </SectionArea>
  );
}

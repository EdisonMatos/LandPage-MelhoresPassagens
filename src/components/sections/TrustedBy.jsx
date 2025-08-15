import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../content/content";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import TrustedByMore from "../sections/TrustedByMore";

const images = [
  {
    src: content.texts.trustedBy.images.img1.img.trustedByImg1,
    alt: content.texts.trustedBy.images.img1.alt,
  },
  {
    src: content.texts.trustedBy.images.img2.img.trustedByImg2,
    alt: content.texts.trustedBy.images.img2.alt,
  },
  {
    src: content.texts.trustedBy.images.img3.img.trustedByImg3,
    alt: content.texts.trustedBy.images.img3.alt,
  },
  {
    src: content.texts.trustedBy.images.img4.img.trustedByImg4,
    alt: content.texts.trustedBy.images.img4.alt,
  },
  {
    src: content.texts.trustedBy.images.img5.img.trustedByImg5,
    alt: content.texts.trustedBy.images.img5.alt,
  },
  {
    src: content.texts.trustedBy.images.img6.img.trustedByImg6,
    alt: content.texts.trustedBy.images.img6.alt,
  },
];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Seguradoras que trabalhamos");
    setModalContent(
      <div>
        <TrustedByMore />
      </div>
    );
    setVisible(true);
  };

  return (
    <SectionArea className="">
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
        <MotionDivDownToUp className="mt-8">
          <p className="text-center"> Agência afiliada aos principais programas de viagens no mundo:</p>{" "}
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}

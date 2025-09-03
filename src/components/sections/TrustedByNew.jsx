import TrustedBy from "../cards/TrustedBy";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function TrustedByNew() {
  return (
    <SectionArea className="bg-neutral-100" paddingbot={true}>
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="w-full">
          {/* Header Desktop */}
          <SectionHeader
            className="justify-center hidden text-center desktop1:flex desktop1:flex-col m-auto"
            miniTitle="PREFERIDO POR VIAJANTES"
            sectionHeaderTitle="Viaje tranquilo, junto a milhares de clientes satisfeitos"
            sectionHeaderSubtitle="Conectamos você às melhores opções de passagens e experiências, no Brasil e no mundo, sempre com confiança e economia."
            color="dark"
            type=""
          />
          {/* Header Mobile */}
          <SectionHeader
            className="text-center desktop1:hidden m-auto"
            miniTitle="PREFERIDO POR VIAJANTES"
            sectionHeaderTitle="Viaje tranquilo, junto a milhares de clientes satisfeitos"
            sectionHeaderSubtitle="Conectamos você às melhores opções de passagens e experiências, no Brasil e no mundo, sempre com confiança e economia."
            color="dark"
            type=""
          />

          {/* Cards em Grid responsivo */}
          <div className="grid grid-cols-1 tablet1:grid-cols-2 desktop1:grid-cols-4 gap-[32px] mt-[50px] desktop1:mt-0 w-full">
            <TrustedBy
              number="1"
              title="🌍 Somos credenciados aos principais operadores de turismo, garantindo acesso a uma ampla rede de serviços para tornar sua viagem inesquecível, sem pesar no bolso."
              animation
            />
            <TrustedBy
              number="2"
              title="💼 Planejamos cada detalhe da sua viagem com foco no que você precisa: praticidade, segurança e tranquilidade do início ao fim."
              animation
            />
            <TrustedBy
              number="3"
              title="🛫 Emitimos a sua viagem aérea com as principais Cias. aéreas do Brasil."
              animation
            />
            <TrustedBy
              number="4"
              title="🌐 Elevamos a sua experiência de viagens com as principais alianças globais."
              animation
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

import AccordionSection from "../AccordionSection";
import Title from "@/components/forms-components/title";
import Action from "./Action";
import Details from "./Details";
import Disposition from "./Disposition";
import Header from "./Header";
import ImageRNC from "./ImageRNC";
import Analytics from "./Analytics";
import Diagram from "./Diagram";
import WhyAnalytics from "./WhyAnalytics";
import Documetation from "./Documentation";
import { Accordion } from "@radix-ui/react-accordion";

import { useForm, FormProvider } from 'react-hook-form';

import '../../../assets/styles/forms.css'
import '../../../index.css'


function RNC() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Title />
      <div className="container-xl mx-auto grid grid-cols-12 items-center gap-4">
        <div className="forms-box col-span-10 col-start-2 rounded-xl mb-20">
            <Header />
            <Accordion type="single" collapsible>
              <AccordionSection title="1 - DETALHES DA NÃO CONFORMIDADE">
                <Details />
              </AccordionSection>

              <AccordionSection title="2 - AÇÃO DE CONTENÇÃO">
                <Action />
              </AccordionSection>

              <AccordionSection title="3 - DISPOSIÇÃO">
                <Disposition />
              </AccordionSection>

              <AccordionSection title="4 - IMAGEM DA PEÇA NÃO CONFORME">
                <ImageRNC />
              </AccordionSection>

              <AccordionSection title="5 - ANÁLISE DE CAUSA RAIZ (REAL MOTIVO DA FALHA)">
                <Analytics />
              </AccordionSection>

              <AccordionSection title="5.1 - DIAGRAMA DE CAUSA E EFEITO">
                <Diagram />
              </AccordionSection>

              <AccordionSection title="5.2 - ANÁLISE DOS 5 PORQUÊS">
                <WhyAnalytics />
              </AccordionSection>

              <AccordionSection title="5.3 - DOCUMENTAÇÃO">
                <Documetation />
              </AccordionSection>
            </Accordion>
          </div>
        </div>
    </FormProvider>
  );
}

export default RNC;

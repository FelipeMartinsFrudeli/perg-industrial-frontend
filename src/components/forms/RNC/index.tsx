import AccordionSection from "../../ui/AccordionSection";
import Title from "@/components/ui/title";
import Action from "./Action";
import Details from "./Details";
import Disposition from "./Disposition";
import Header from "./Header";
import ImageRNC from "./ImageRNC";
import Analytics from "./Analytics";
import Diagram from "./Diagram";
import WhyAnalytics from "./WhyAnalytics";
import Documetation from "./Documentation";
import CorrectiveActions from "./CorrectiveActions";
import Risks from "./Risks";
import Report from "./Report";
import { Accordion } from "@radix-ui/react-accordion";

import { useForm, FormProvider } from 'react-hook-form';

import '../../../assets/styles/forms.css'
import '../../../index.css'
import { Button } from "@/components/ui/button";


function RNC() {
  const methods = useForm();

  const onSubmit = ({ data }: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Title />
        <div className="container-xl mx-auto grid grid-cols-12 items-center gap-4">
          <div className="forms-box col-span-10 col-start-2 rounded-xl mb-20">
            <div className="grid grid-cols-12">
              <Header/>
              <Accordion type="single" collapsible className="col-span-12">
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

                <AccordionSection title="6 - AÇÕES CORRETIVAS">
                  <CorrectiveActions />
                </AccordionSection>

                <AccordionSection title="7 - RISCOS E OPORTUNIDADES">
                  <Risks />
                </AccordionSection>

                <AccordionSection title="8 - FECHAMENTO DO RELATÓRIO">
                  <Report />
                </AccordionSection>
              </Accordion>
              <Button type="submit" className="col-span-2 col-start-6 my-6">Enviar</Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default RNC;

import React from "react";
import Action from "./Action";
import Details from "./Details";
import Disposition from "./Disposition";
import Header from "./Header";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionProps = {
  title: string;
  children: React.ReactElement;
};

const Accordion = ({ title, children }: AccordionProps) => (
  <div className="container grid grid-cols-12 items-center gap-4">
    <AccordionItem value={React.useId()} className="col-span-12">
      <AccordionTrigger>{title}</AccordionTrigger>
    </AccordionItem>
    <hr />
    <AccordionContent className="w-auto mx-1 grid grid-cols-12 gap-10 mt-4">
      {children}
    </AccordionContent>
  </div>
);

function RNC() {
  return (
    <div>
      <Header />

      <Accordion title="1 - DETALHES DA NÃO CONFORMIDADE">
        <Details />
      </Accordion>
      
      <Accordion title="2 - AÇÃO DE CONTENÇÃO">
        <Action />
      </Accordion>
      
      <Accordion title="3 - DISPOSIÇÃO">
        <Disposition />
      </Accordion>
    </div>
  );
}

export default RNC;

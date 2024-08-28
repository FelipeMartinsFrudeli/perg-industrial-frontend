import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type AccordionProps = {
  title: string;
  children: React.ReactElement;
};

const AccordionSection = ({ title, children }: AccordionProps) => (
  <div className="container grid grid-cols-12 items-center gap-4">
    <AccordionItem value={React.useId()} className="col-span-12">
      <AccordionTrigger>{title}</AccordionTrigger>
      <hr />
      <AccordionContent className="w-auto mx-1 grid grid-cols-12 gap-10 mt-4">
        {children}
      </AccordionContent>
    </AccordionItem>
  </div>
);

export default AccordionSection;
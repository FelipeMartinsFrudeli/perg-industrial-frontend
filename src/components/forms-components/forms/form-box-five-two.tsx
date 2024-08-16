import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { InputField } from "../form-fields";

export function FormBoxFiveTwo({ form }: any) {
  const items = [];
  for (let index = 1; index <= 5; index++) {
    items.push(
      <React.Fragment key={index}>
        <InputField
          form={form}
          name={`porqueHouve${index}`}
          style="col-span-4"
          label=""
          placeholder={`Digite do porquê houve n°${index} aqui`}
          type="text"
        />
        <InputField
          form={form}
          name={`porqueDetectada${index}`}
          style="col-span-4"
          label=""
          placeholder={`Digite do porquê não foi detectado n°${index} aqui`}
          type="text"
        />
        <InputField
          form={form}
          name={`porquePrevista${index}`}
          style="col-span-4"
          label=""
          placeholder={`Digite do porquê não foi prevista n°${index} aqui`}
          type="text"
        />
      </React.Fragment>
    );
  }
  return (
    <>
      <div className="container grid grid-cols-12 flex items-center gap-4">
        <AccordionItem value="item-7" className="col-span-12">
          <AccordionTrigger>5.2 - ANÁLISE DOS 5 PORQUÊS</AccordionTrigger>
          <hr />
          <AccordionContent className="w-auto mx-1 items-center flex grid grid-cols-12 gap-6 mt-4">
            <p className="col-span-4 font-bold text-center text-lg mt-4">
              Porquê houve a falha?
            </p>
            <p className="col-span-4 font-bold text-center text-lg mt-4">
              Porquê a falha não foi detectada?
            </p>
            <p className="col-span-4 font-bold text-center text-lg mt-4">
              Porquê a falha não foi prevista?
            </p>

            {items}
          </AccordionContent>
        </AccordionItem>
      </div>
    </>
  );
}

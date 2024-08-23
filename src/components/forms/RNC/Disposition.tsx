import { RadioField } from "@/components/ui/radio-group";
import { dipositionsOptions } from "@/lib/constants";

function Disposition() {
  return (
    <div className="grid grid-cols-12 col-span-12 gap-4">
      <RadioField name="disposition" options={dipositionsOptions} />
    </div>
  );
}

export default Disposition;

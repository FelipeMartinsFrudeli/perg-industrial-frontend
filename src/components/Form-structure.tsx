import { Title } from "./forms/title.tsx";
import { StartForm } from "./forms/start-form.tsx";
import { FormBoxOne } from "./forms/form-box-one.tsx";
import '../assets/styles/forms.css'
import '../index.css'

export const Register_RNC = () => {
    return (
        <>
            <Title />
            <div className="container-xl mx-auto grid grid-cols-12 flex items-center gap-4">
            <div className="forms-box col-span-10 col-start-2 rounded-xl">
                <StartForm />
                {/* <FormBoxOne /> */}
            </div>
            </div>
        </>
    )
}
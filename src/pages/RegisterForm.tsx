import { FormProvider, useForm } from "react-hook-form";
import { InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Register() {
    const methods = useForm()
    return (
        <FormProvider {...methods}>
            <div className="container-xl mx-auto grid grid-cols-12 items-center gap-4">
                <div className="col-span-6 col-start-4">

                    <div className="grid grid-cols-12 gap-4 items-center bg-blue-950 rounded-xl mt-12">
                        <div className="col-span-2 col-start-6 mt-8">
                            <img src="public/images/Icon_Perg.png" alt="" />
                        </div>
                        <div className="col-span-6 col-start-4 mt-4 text-center text-white font-semibold text-2xl">
                            <p>Faça seu cadastro agora!</p>
                        </div>
                        <form className="col-span-10 col-start-2 items-center grid grid-cols-12">
                            <InputField name="nome" label="Nome" placeholder="Digite o seu nome" className="col-span-12 text-white mt-6" />
                            <InputField name="email" label="Email" placeholder="Digite o seu email" className="col-span-12 text-white mt-6" />
                            <InputField name="senha" label="Senha" placeholder="Digite a sua senha" className="col-span-12 text-white mt-6" />
                            <Button type="submit" className="bg-sky-500 py-7 col-span-4 text-xl mt-16 col-start-5 mb-4">Cadastrar</Button>
                        </form>
                        <div className="col-span-6 col-start-4 text-center text-white mb-8">
                            <Link id="registerButton" to={`/login`}>
                                <p className="underline underline-offset-2 cursor-pointer">Ja tem uma conta? Faça um login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}

export default Register;
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar h-full w-1/6">
                <div className="top m-6">
                    <img src="/images/Icon_PERG.png" className="IconEmpresa" alt="Icon Empresa" />

                    <div className="user flex mt-6 items-center">
                        <img src="/images/User_Icon.png" className="mr-3 w-14 h-14" alt="Icon User" />
                        <div className="box flex-nowrap">
                            <p className="NameUser font-bold text-lg">Usuario 1</p>
                            <div className="buttonViewAccount border-2 border-slate-50 p-2 rounded-lg text-xs text-center cursor-pointer">Ver conta &nbsp;&nbsp; →</div>
                        </div>
                    </div>
                </div>

                <hr className="m-3"/>

                <ul className="Abas mt-3">
                    <li className="Aba inline-flex border-s-slate-50">
                        <img src="/images/Dashboard_Icon.png" alt="Dashboard Icon" />
                        <p className="AbaText">Dashboard</p>
                    </li>
                    <li className="Aba">
                        <img src="/images/CadRNC_Icon.png" alt="Cadastrar RNC Icon" />
                        <p className="AbaText">Cadastrar RNC</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

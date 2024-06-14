import react from "react"
import { ContainerFooter, ContainerHeader } from "../../Ui/Style/GeneralStyle"
import Banner from "../Banner/Banner"
import Header from "../Header/Header"


const Layout =({children }) =>{

    return (<>
         <ContainerHeader >
                <Banner/>
                <Header/>   
                    {children}

                    <ContainerFooter     >
                    <div className="  max-w-5xl container mx-auto px-4">
                            <div className="lg:flex text-center  justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold">contáctanos</h3>
                                <p>
                                <a href="mailto:info@vacationcartagena.com" className="text-blue-500">info@Zelvanegra.com.</a><br />
                                tel: +57 (320) 834-3763
                                </p>
                            </div>
                            <div className=" " >
                                <h3 className="text-lg  font-semibold">aceptamos</h3>
                                <div className="flex space-x-2 mt-2 justify-center">
                                <img src="https://static.wixstatic.com/media/a9ff3b_2c80103407e548a0a61d4a54f4f59501.png/v1/fill/w_43,h_27,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a9ff3b_2c80103407e548a0a61d4a54f4f59501.png" alt="American Express" className="h-8" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" className="h-8" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-8" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">política de cancelación y alquiler</h3>
                                <p>
                                <a href="#" className="text-blue-500">Ver más</a>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">otras políticas</h3>
                                <p>
                                <a href="#" className="text-blue-500">Ver más</a>
                                </p>
                            </div>
                            </div>
                            <div className=" border-gray-400 pt-6">
                            <p className="text-center mb-2 font-semibold">Nuestro compromiso con el turismo sostenible y la responsabilidad social.</p>
                            <p className="text-sm text-center">
                                "Cartagena Vacation Rentals S.A.S. rechaza todos los casos de explotación sexual, pornografía, turismo sexual y todas las formas de abuso sexual con menores de edad; comprometiéndonos a respetar la Ley 679 de 2001 y denunciar todos los casos de trata y abuso sexual infantil"
                            </p>
                            <p className="text-sm text-center">
                                "Nos comprometemos a salvaguardar la flora, la fauna y el patrimonio cultural del país de acuerdo con la Ley 599 de 2000, artículo 328, y denunciaremos todos los casos de tráfico ilegal"
                            </p>
                            <p className="text-sm text-center">
                                "Di no al tráfico de artefactos culturales del patrimonio histórico de Colombia y a la explotación de menores"
                            </p>
                            </div>
                    </div>
                    </ContainerFooter>      
            </ContainerHeader>
    
    </>)

}

export default Layout
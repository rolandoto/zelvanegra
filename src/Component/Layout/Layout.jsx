import react from "react"
import { ContainerHeader } from "../../Ui/Style/GeneralStyle"


const Layout =() =>{

    return (<>
         <ContainerHeader >
                <span className="mx-auto flex  max-w-5xl items-end justify-center p-4 lg:px-8 font-light" > info@Zelvanegra.com. |  +57 (320) 834-3763  |  RNT de la empresa No. 43008</span>
                <nav className="mx-auto flex  max-w-5xl items-end justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="w-60" src="https://raw.githubusercontent.com/rolandoto/image-pms/main/Logos/Mesa%20de%20trabajo%204%402x.png" alt=""/>
                    </a>
                    </div>
                    <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                    
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Inicio</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Propiedades</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Actividades</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Preguntas frecuentes</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contactanos</a>
                    </div>
                </nav>
            </ContainerHeader>
    
    </>)

}

export default Layout
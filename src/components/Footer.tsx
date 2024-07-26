import React from 'react';

import { BiLogoFacebookSquare, BiSolidEnvelope, BiLogoLinkedinSquare, BiLogoInstagramAlt} from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="relative w-full h-80 mt-10 bg-transparent flex flex-row items-end justify-between before:content-[''] before:absolute before:w-full before:h-80 before:bg-[url('/waves.svg')] before:bg-cover before:bg-no-repeat before:bg-top before:-z-10">
            
            {/* Texto */}
            <h1 className="flex h-4 items-center text-center font-sans font-semibold text-black m-10">Desenvolvido por PET-SI 2024</h1>
            
            {/* Logo PET e BX */}
            <div className="flex h-4 items-center justify-center m-10">
                <img src="logoCoruja.svg" alt="Logo PET" />
            </div>
            
            {/* Botões interativos */}
            <ul className="flex h-4 space-x-2 m-10">
                <li>
                    <a href="https://www.facebook.com/petsieach" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoFacebookSquare size={26} color='black' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/pet-si-each-usp/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoLinkedinSquare size={26} color='black' />
                    </a>
                </li>
                <li>
                    <a href="mailto:pet.si.each@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiSolidEnvelope size={26} color='black' />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/petsieach/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <BiLogoInstagramAlt  size={26} color='black' />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

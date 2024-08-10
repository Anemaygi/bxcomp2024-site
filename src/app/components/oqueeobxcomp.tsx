'use client'

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ImageG from "@/components/ImageG";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});


export default function oqueeobxcomp() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[pretoBX] md:pb-16 pt-8 md:pt-12 lg:pt-16">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <ImageG src="/home/sobrebx.png" quality={100} width={1154} height={875} className="object-contain" alt={""}/>
            </div>

            {/* Text Balloon */}
            <div className="relative z-10 w-full max-w-sm md:max-w-2xl p-8 md:p-16 lg:p-24 bg-brancoBX bg-opacity-90 rounded-[25px] md:rounded-[100px] lg:rounded-[125px] shadow-lg text-center flex flex-col items-center mx-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-laranjaBX mb-4">O que é BXCOMP?</h2>
                <p className={`${poppins.className} text-sm md:text-base lg:text-lg text-black mb-6 text-left`}>
                    O <span className="font-bold">BXComp</span> é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação organizado pelo PET-SI. Seu objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">                   
                    <PrimaryButton title="Saiba mais" onClick={() => location.replace("/saibamais")} />
                    <SecondaryButton title="Regulamento" onClick={() => location.replace("/regulamento")} />
                </div>
            </div>
        </section>
    );
}

'use client'

import Hero from "./components/hero";
import Oqueeobxcomp from "./components/oqueeobxcomp";
import Etapas from "./components/Etapas";
import Equipes from "../components/Equipes";
import Ranking from "@/components/Ranking";
import PrimaryButton from "@/components/PrimaryButton";
import data from '../data/landingpage.json';
import ImageG from "@/components/ImageG";

export default function Home() {

  return (

    <main>   
      <Hero />
      <Oqueeobxcomp />
      
      {/* Etapas section using etapas component */}
      <section>
        <figure className="w-full bg-brancoBX pointer-events-none">
          <ImageG
            src="/home/onda_azul.svg"
            alt="Onda azul"
            width="9999"
            height="99"
          />
        </figure>
        <Etapas />
      </section>

      {/* Equipes section using equipes component*/}
      <section>
      <Equipes />

        <figure className="relative w-full bg-pretoBX pointer-events-none">
          <ImageG className="hidden md:block absolute right-12 -bottom-8" src="/home/gravityfalls.png" alt="" width="281" height="312" /> 
          <ImageG
            src="/home/onda_branca.svg"
            alt="Onda branca"
            width="9999"
            height="99">
          </ImageG>           
        </figure>
      </section>

      {/* Ranking section using ranking component */}
      <section className="flex flex-col my-12 lg:px-16 gap-12">
        <h1 className="text-7xl px-8">Ranking</h1>
        <Ranking equipes={data.equipes} displayQuantity={5} />
        <div className="flex justify-center w-full">
          <PrimaryButton title="Ranking completo" onClick={() => location.replace("/equipes-e-ranking#ranking")} />
        </div>
      </section>

    </main>
  );
}

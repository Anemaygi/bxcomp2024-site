'use client'

import ImageG from "@/components/ImageG"
import equipes_data from '@/data/landingpage.json'
import { MouseEventHandler } from "react";

interface ObjEquipe{
    nome: string;
    membros: string[];
    pontos: number;
    iconPath: string;
}

interface BotaoEquipeProps{
    equipe: ObjEquipe,
    selecionado: boolean,
    onClick: MouseEventHandler
}

export default function BotaoEquipe(props: BotaoEquipeProps){
    return(
        
        <button onClick={props.onClick} className={` flex flex-col items-center justify-center w-20 py-2 px-2 h-26 mx-1 my-2 rounded-md border border-slate-500
         ${props.selecionado ? 'bg-laranjaBX' : 'opacity-50 bg-brancoBX'}`}>
            <ImageG className="w-16" src={props.equipe.iconPath} width={60} height={60} alt={`ícone da equipe ${props.equipe.nome}`}></ImageG>
        <div className="w-16 truncate text-center text-pretoBX pt-1"> {props.equipe.nome} </div>
        </button>

    );
}
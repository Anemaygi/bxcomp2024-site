'use client'

import { Poppins, Bubblegum_Sans } from 'next/font/google'
import { ImLinkedin } from "react-icons/im";
import PrimaryButton from '@/components/PrimaryButton';

import Image from 'next/image';

import organizadores from '../../data/organizadores.json';

const poppins = Poppins({ weight: '400', subsets: ['latin'] })
const bubblegum = Bubblegum_Sans({ subsets: ["latin"], weight: "400" })

export default function o_que_eh_BXComp() {
	return(
		<main className="pt-8 sm:pb-20 px-8 md:px-20">
			<Descricao />
			<Organizadores />
		</main>
	);
}


function Descricao() {
	return (
		<section>
			<div className="lg:px-32">
				<h1 className="text-6xl sm:text-6xl py-4 sm:py-8">
					O que é o <span className="text-laranjaBX">BXComp</span>?
				</h1>

				<p className={`${poppins.className} text-white`}>
					O <b>BXComp</b> é o tradicional Campeonato de Programação para Calouros do Curso de Sistemas de Informação da EACH-USP.
					<br />

				</p>

				<p className={`${poppins.className} text-white py-4`}>
					Neste ano, o BXCOMP está em sua 14ª edição com o <b>tema</b> de <b>Desenhos e Animações</b>!
				</p>
			</div>

			<div className="w-full flex justify-center py-8">
				<PrimaryButton title={'Regulamento'} onClick={() => window.open("regulamento")} />
			</div>

			<div className="sm:grid grid-cols-2 gap-4 lg:px-32">

				<div className="order-2 flex flex-col justify-center">
					<h2 className="text-4xl py-4">Objetivo</h2>
					<p className={`${poppins.className} text-white`}>
						Nosso objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação.
						<br />
						Os participantes aprendem e evoluem muito no decorrer do campeonato, o que torna o evento ainda mais satisfatório!
					</p>
				</div>

				<div className="order-1 flex justify-center items-center">
					<div className='size-80 relative'>
						<Image className="object-contain" src={'/o-que-e-bxcomp/tom-jerry.png'} alt={'Tom e Jerry'} fill={true} />
					</div>
				</div>

				<div className='order-3 flex flex-col justify-center'>
					<h2 className="text-4xl py-4">Formato</h2>
					<div className={`${poppins.className}`}>
						<p>O campeonato acontece em 5 etapas presenciais nos laboratórios da EACH.</p>
						<p>Em cada etapa, 5 problemas de autoria do PET-SI no estilo de maratona de programação são disponibilizados aos participantes, com diferentes pontuações baseadas em dificuldade.</p>
					</div>
				</div>

				<div className="order-4 flex justify-center items-center">
					<div className='size-80 relative'>
						<Image className="object-contain" src={'/o-que-e-bxcomp/phineas.png'} alt={'Phineas'} fill={true} />
					</div>
				</div>

				<div className='order-6 flex flex-col justify-center'>
					<h2 className="text-4xl py-4">Organização</h2>
					<p className={`${poppins.className} text-white`}>O BXComp é um projeto organizado pelo PET-SI (Programa de Educação Tutorial - Sistemas de Informação) da EACH.<br />
						O PET é um programa do Governo Federal subordinado ao Ministério da Educação,	cujo objetivo é realizar projetos para os três pilares da graduação: ensino, pesquisa e extensão. Acompanhe o PET para saber de suas outras iniciativas!
					</p>
				</div>

				<div className="order-5 flex justify-center items-center">
					<div className='size-80 relative'>
						<Image className="object-contain" src={'/o-que-e-bxcomp/padrinhos.png'} alt={'Padrinhos mágicos'} fill={true} />
					</div>
				</div>

				<div className='order-7 flex flex-col justify-center'>
					<h2 className="text-4xl py-4">Outras competições</h2>

					<ul className={`${poppins.className} text-white list-disc`}>
						<li className='pb-4'><b>Olimpíada Brasileira de Informática (OBI):</b> Promovida pela Sociedade Brasileira de Computação (SBC). Veja mais detalhes em <a className='underline' target="_blank" href='https://olimpiada.ic.unicamp.br/'>olimpiada.ic.unicamp.br</a></li>
						<li className='pb-4'><b>Maratona SBC de Programação:</b> Promovida pela Sociedade Brasileira de Computação (SBC), eliminatória para o	International Collegiate Programming Contest. Veja mais em <a className='underline' target="_blank" href='https://maratona.sbc.org.br/'>maratona.sbc.org.br</a>.</li>
						<li className='pb-4'><b>International Collegiate Programming Contest (ICPC):</b>  Também conhecida como “A Batalha dos Cérebros”. Veja mais em <a className='underline' target="_blank" href='https://icpc.global/'>icpc.global/</a>.</li>
					</ul>
				</div>

				<div className="order-8 flex justify-center items-center">
					<div className='size-80 relative'>
						<Image className="object-contain" src={'/o-que-e-bxcomp/meninas-superpoderosas.png'} alt={'Meninas Superpoderoas'} fill={true} />
					</div>
				</div>
			</div>
		</section>
	);
}


interface Organizador {
	nome: string;
	linkedinUrl: string;
	imgSrc: string;
	dev: boolean;
}

interface OrganizadorCardProps {
	organizador: Organizador
}

const OrganizadorCard: React.FC<OrganizadorCardProps> = ({ organizador }) => {
	return (
		<article className='w-full flex flex-col items-center justify-center gap-y-8 p-8'>
			<figure className="size-52 rounded-full outline outline-offset-8 outline-4 outline-verdeBX relative ">
				<Image className="object-cover rounded-full" src={organizador.imgSrc} alt={""} fill={true} />
				{organizador.dev && (
					<Image
						className="absolute right-6 bottom-4 transform translate-x-1/2 translate-y-1/2"
						src={'/o-que-e-bxcomp/seloDev.png'}
						alt={'Desenvolvedor'}
						width={100}
						height={98}
					/>
				)}
			</figure>

			<section className={` w-full bg-brancoBX rounded-full text-black flex items-center  ${poppins.className} justify-center py-4 px-2`}>
				{
					organizador.linkedinUrl != "#" ?
						<a href={organizador.linkedinUrl} target='_blank' className='flex items-center w-full justify-center gap-x-2'>
							<p className="truncate max-w-[calc(100%-28px)] ">{"<" + organizador.nome + ">"}</p>
							<ImLinkedin size={20}/>
						</a>
						:
						<span className='flex items-center w-full justify-center gap-x-2'>
							<p className="truncate max-w-[calc(100%-28px)] ">{"<" + organizador.nome + ">"}</p>
							<ImLinkedin size={20} className="text-gray-400"/>
						</span>
				}
				
			</section>
		</article>
	)
}

function Organizadores() {
	return (
		<section className="flex flex-col items-center justify-center my-20">
			<h1 className="text-6xl text-laranjaBX sm:text-6xl py-4 sm:py-8 text-center">
				Organizadores
			</h1>

			<p className={`${poppins.className}`}>Conheça as <b>pessoas</b> por trás do BXCOMP</p>

			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-12 w-full xl:px-24">

				{
					organizadores.map((organizador, idx) => (
						<OrganizadorCard key={idx} organizador={organizador} />
					))
				}

			</section>

			<p className={`${poppins.className} text-center`}>Confira o repositório deste site no <a href="https://github.com/petsi-each/bxcomp2024-site" target="_blank" className={`text-laranjaBX cursor-pointer text-xl ${bubblegum.className}`}>GitHub</a></p>

		</section>
	);
}



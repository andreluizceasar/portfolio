// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section id="sobre-mim" classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Sobre Mim"
					preTitle="Sinópse"
					subTitle="Com mais de 3 anos de experiência em desenvolvimento, possuo um portfólio diversificado de projetos desenvolvidos individualmente, demonstrando minha capacidade de trabalhar de forma independente e proativa."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/portfolio_picture.jpg" alt="André Luiz Ceasar" width={1200} height={1600} />
						{/* <img src="/img/portfolio_picture.jpg" alt="André Luiz Ceasar"/> */}
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Sou uma pessoa apaixonada por aprender e crescer, buscando constantemente aprimorar minhas habilidades e conhecimentos. Possuo excelente comunicação, transmitindo ideias de forma clara e eficiente. Sou habilidoso em apresentar informações complexas de maneira simples e compreensível, tanto em português quanto em inglês."
						/>
						{/* <BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/> */}
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]
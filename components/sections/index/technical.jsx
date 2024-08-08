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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section id="tecnologias" classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Tecnologias"
					preTitle="Habilidades"
					subTitle="Utilizo um conjunto diversificado de ferramentos e linguagens."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock
							title="Fundação em conhecimentos"
							icon={['fat', 'chart-network']}
							copy="Com uma sólida base em design e desenvolvimento, eu trago uma perspectiva única para cada projeto e estou constantemente aprendendo e evoluindo para me manter atualizado com as últimas tendências da indústria."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock
							title="Software que gosto de usar"
							copy="Com mais de 3 anos de experiência na criação de ativos digitais, tenho um entendimento profundo e intuitivo de como as interfaces dos melhores produtos de software do mundo são projetadas. Aqui estão apenas alguns dos softwares que utilizei ao longo desse tempo."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Tecnologias com que construo"
							copy="Eu realmente aprecio resolver problemas por meio de código. Desde o front end até o back end e os APIs intermediários. Nenhum projeto é muito desafiador para mim."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'android', name: 'Android Studio', type: 'devicon' },
	{ key: 'photoshop', name: 'Photoshop', type: 'devicon' },
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'vscode', name: 'VSCode', type: 'devicon' },
	{ key: 'mysql', name: 'DBeaver', type: 'devicon' },
]

const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'react', name: 'React Native', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
]
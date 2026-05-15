// Core packages

import BadgesBlock from '../../blocks/about.badges.block'
import Container from '../../structure/container';
import CopyBlock from '../../blocks/about.copy.block'
import Image from 'next/image'
import Section from '../../structure/section';
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'
import about from '../../../styles/sections/index/about.module.scss';

// Section structure



// Section general blocks



// Section specific blocks



// Section scss


/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section id="about-me" classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I have a diverse portfolio of projects developed individually, demonstrating my ability to work independently and proactively."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/20240304_124324.png" alt="André Luiz Ceasar" width={1200} height={1600} />
						{/* <img src="/img/20240304_124324.png" alt="André Luiz Ceasar"/> */}
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
						title="Soft Skills"
						containerClass={about.container}
						iconClass={about.icon}
						icon={[ 'fas', 'ear-listen' ]}
						copy="I am a person passionate about learning and growing, constantly seeking to improve my skills and knowledge. I have excellent communication, transmitting ideas clearly and efficiently. I am skilled at presenting complex information in a simple and understandable way, both in Portuguese and English."
						/>
						<BadgesBlock 
						title="Research and Planning" 
						containerClass={about.container}
						list={methods} 
						fullContainer="fullContainer"
						block="methods" 
						icon="fingerprint"
						copy="One of my favorite aspects when creating a project is building and planning the architecture. From Design Systems to Branding strategies, I enjoy working with various aspects of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'earth-americas',    name: 'User Research', 		type: 'fas' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fas' },
	{ key: 'window-maximize', 	name: 'Design Systems', 	type: 'fas' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'fas' },
	{ key: 'layer-group', 		name: 'Brand Strategy', 	type: 'fas' },
	{ key: 'globe', 			name: 'Operations', 		type: 'fas' },
]
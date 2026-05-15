import Badges 		from '../../utils/badge.list.util'
import Container 	from '../../structure/container';
import FeaturedProject from '../../blocks/projects/featured'
import Icon 		from '../../utils/icon.util'
import Section 		from '../../structure/section';
import SectionTitle from '../../blocks/section.title.block'
import content 		from '../../../content/projects/featured.json'
import css 			from '../../../styles/sections/projects/featured.module.scss'

// Section structure









export default function FeaturedProjects() {

	return (
		<Section id="projects" classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Projects"
					preTitle="UX and Full Stack"
					subTitle="Creating solutions efficiently."
				/> 				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
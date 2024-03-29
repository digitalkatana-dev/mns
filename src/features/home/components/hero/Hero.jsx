import './hero.scss';

const Hero = () => {
	return (
		// <>
		// 	<div id='home-hero'></div>
		// 	<div className='hero-text'>
		// 		<h3>Inspiring new love connections.</h3>
		// 		<h5>~ I am a ~</h5>
		// 		<div>
		// 			<a className='link visitor-type' href='#clients'>
		// 				Client
		// 			</a>
		// 			<a className='link visitor-type' href='#candidates'>
		// 				Candidate
		// 			</a>
		// 		</div>
		// 	</div>
		// </>
		<div className='hero'>
			<video src='nanny.mp4' muted autoPlay loop />
			<div className='hero-txt'>
				<h3>Inspiring new love connections.</h3>
				<h5>~ I am a ~</h5>
				<div>
					<a className='link visitor-type' href='#clients'>
						Client
					</a>
					<a className='link visitor-type' href='#candidates'>
						Candidate
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;

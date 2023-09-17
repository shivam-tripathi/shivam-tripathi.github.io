import img from '../../assets/hero.png';

import './about.css';

const About = () => {
	return <div className='about'>
		<h1>About</h1>
		<section style={{textAlign: 'center'}}>
			<p>Hi, my name is Shivam Tripathi.</p>
			<p>Currently I live in Bengaluru, working at <a href="https://quizizz.com">Quizizz</a>. I lead the team for Content and Machine Learning. Previously, I led the team for Growth and was part of the platform team.<br/></p>
			<p>I hold a bachelor's degree in Computer Science and Engineering from <a href="https://iitu.ac.in">Indian Institute of Information Technology Una</a>.</p>
			<p>I joined Quizizz just before their seed round - where I helped build and scale the product to a peak of 70M MAUs and grow the team from 10 engineers to more than 75 engineers.</p>
			<p>You can reach out to me at shivam [at] quizizz [dot] com.</p>
		</section>
		<section style={{ textAlign: 'center' }}>
			<img
				style={{
					width: "200px",
					border: "10px inset",
					borderRadius: "500px",
					margin: "10px",
				}}
				src={img}
				className="heroimg"
			/>
			<p className='quote'>
				इयं विसृष्टिर्यत आबभूव यदि वा दधे यदि वा न ।
				<br />
				यो अस्याध्यक्षः परमे व्योमन्त्सो अङ्ग वेद यदि वा न वेद ॥
			</p>
			<p className='quoteExplanation'>
				Whence all creation had its origin, the creator, whether s/he fashioned
				it or whether s/he did not, <br />
				The creator, who surveys it all from highest heaven, s/he knows — or
				maybe even s/he does not know. <br />
				<a href="https://en.wikipedia.org/wiki/Nasadiya_Sukta">
					Nasadiya Sukta, 7:129:10 Rig Veda
				</a>
			</p>
		</section>
	</div>;
}

export default About;

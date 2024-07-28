import img from '../../assets/banyan.webp';

import './about.css';

const About = () => {

	const content = `
Hello there!

Welcome to my blog! My name is Shivam .

Currently I have the privilege of leading the Search and Discovery team at Quizizz. Search and Discovery combines the power of product, design, data, engineering and applied machine learning to build experiences which help every educator find the right content at the right time with the right rigor across the world in their language and curriculum for their leaners.

My journey with Quizizz began shortly before their seed funding round, and I've been fortunate to contribute to the platform's growth, scaling it to an impressive 70 million monthly active users as a part of the early team.

Prior to my role in Search and Discovery, I had the opportunity to lead both the Content and Growth teams. I was part of the platform team in my early years. My professional journey has been both challenging and rewarding, allowing me to expand our engineering team from a modest 10 members to over 100 talented engineers.

If you'd like to get in touch, please feel free to reach out to me at shivam [at] quizizz [dot] com. I'm always happy to connect with like-minded individuals and engage in stimulating conversations!
`

/* <p>Hi, my name is Shivam Tripathi.</p>
			<p>Currently I live in Bengaluru, working at <a href="https://quizizz.com">Quizizz</a>. I lead the team for Search and Discovery. Previously, I led Content and Growth teams and was part of the platform team.<br/></p>
			<p>I hold a bachelor's degree in Computer Science and Engineering from <a href="https://iitu.ac.in">Indian Institute of Information Technology Una</a>.</p>
			<p>I joined Quizizz shortly before their seed funding round, where I contributed to building and scaling the product to reach 70 million monthly active users. Additionally, I supported the growth of the engineering team, expanding it from 10 to over 100 engineers.</p>
			<p>You can reach out to me at shivam [at] quizizz [dot] com.</p> */

	return <div className='about'>
		<h1>About</h1>
		<section style={{textAlign: 'center'}}>
			{
				content.split('\n').map((line, index) => {
					return <p key={index}>{line}</p>;
				})
			}
		</section>
		<section style={{ textAlign: 'center' }}>
			<img src={img} className="heroimg" />
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

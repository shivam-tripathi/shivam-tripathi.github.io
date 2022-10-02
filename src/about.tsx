import React from "react";

const About = () => {
	return <div className="content" style={{marginTop: '5rem'}}>
		<h1>About</h1>
		<section className="content-body" style={{
			textAlign: 'center'
		}}>
			<p>Hi, my name is Shivam Tripathi.</p>
			{/* <p>I hold a bachelor's degree in Computer Science and Engineering from Indian Institute of Information Technology Una.</p> */}
			<p>Currently I live in Bengaluru, where I work for Quizizz. <br/> I joined Quizizz right out of college just before their seed round - where I helped build and scale the product to a peak of 70M MAUs.</p>
			<p>Currently, I lead the team for Growth.</p>
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
				src="/assets/hero.png"
				className="heroimg"
			/>
			<p style={{ fontWeight: "bold", fontFamily: "'Pragati Narrow', sans-serif;" }}>
				इयं विसृष्टिर्यत आबभूव यदि वा दधे यदि वा न ।
				<br />
				यो अस्याध्यक्षः परमे व्योमन्त्सो अङ्ग वेद यदि वा न वेद ॥
			</p>
			<p style={{ fontSize: ".75rem", fontFamily: "sans-serif" }}>
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

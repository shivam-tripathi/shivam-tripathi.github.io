import { FC } from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

const About: FC = () => {
  const banyanImg = '/banyan.webp'

  const aboutContent = `Hello there! My name is Shivam Tripathi.

I'm passionate about building products, understanding markets, and learning how things work. This blog is my space to document ideas, share learnings, and explore topics at the intersection of product, engineering, and business.`

  const quote = `इयं विसृष्टिर्यत आबभूव यदि वा दधे यदि वा न ।
यो अस्याध्यक्षः परमे व्योमन्त्सो अङ्ग वेद यदि वा न वेद ॥`

  const quoteExplanation = `Whence all creation had its origin, the creator, whether s/he fashioned it or whether s/he did not,
The creator, who surveys it all from highest heaven, s/he knows - or maybe even s/he does not know.`

  return (
    <div className="about">
      <h1>About</h1>
      <section>
        {aboutContent.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>

      <section>
        <img src={banyanImg} alt="Banyan Tree" className="heroimg" />
        <p className="quote">
          {quote.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p className="quoteExplanation">
          {quoteExplanation.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
          <br />
          <Link to="https://en.wikipedia.org/wiki/Nasadiya_Sukta" target="_blank" rel="noopener noreferrer">
            Nasadiya Sukta, 7:129:10 Rig Veda
          </Link>
        </p>
      </section>
    </div>
  )
}

export default About


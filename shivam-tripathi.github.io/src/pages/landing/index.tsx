import imgUrl from './hero.png'
import './landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <h1> संक्षिप्त </h1>
      <h2> Musings on Life, Universe, and Everything </h2>
      <img src={imgUrl} className="heroimg"/>
    </div>
  );
};

export default Landing;
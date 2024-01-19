import ContentTree from '../content-tree';
import imgUrl from '../../assets/banyan.webp'
import './landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <h1> Kalpavriksha </h1>
      <h2> Musings on Life, Universe, and Everything </h2>
      <img src={imgUrl} className="heroimg"/>
      <ContentTree />
    </div>
  );
};

export default Landing;

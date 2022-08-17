import './Hero.scss';
// import video from '../../Data/videos.json'

function Hero (props) {
  
    return (
      <>
      <section className='hero'>
        <video className="hero__video" width="80%" poster={props.item.image} controls>
          <source src="" type='video/mp4'></source>
          Sorry, your browser doesn't support embedded videos
          </video>
      </section>
      </>
    );
  
}
export default Hero;
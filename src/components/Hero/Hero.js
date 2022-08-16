import './Hero.scss';
// import video from '../../Data/videos.json'



function Hero () {
    return (
      <>
      <section className='hero'>
        <video className="hero__video" width="80%" poster='https://i.imgur.com/l2Xfgpl.jpg' controls>
          <source src="" type='video/mp4'></source>
          Sorry, your browser doesn't support embedded videos
          </video>
      </section>
      </>
    );
}
export default Hero;
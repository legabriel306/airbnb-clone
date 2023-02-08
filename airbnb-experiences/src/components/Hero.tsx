import heroImage from '../assets/images/group77.png';

const Hero = () =>{
    return (
        <header className='hero'>
            <img src={heroImage} alt="hero" className='hero-image' />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </header>
    )
}

export default Hero;
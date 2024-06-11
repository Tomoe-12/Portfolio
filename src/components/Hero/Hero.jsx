import './Hero.css'
import Assests from '../../assets/assets'
const Hero = () => {
    return (
        <section id='home' className='hero-container'>
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>Passionate Frontend Developer | Transforming ideas into Seamless and Visually Stunning Web Solutions</p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className="tech-icon">
                        <img src={Assests.reactImg}  alt="" />
                    </div>
                    <img  src={Assests.profileImg} alt="" />
                </div>

                <div>
                    <div className='tech-icon'>
                        <img src={Assests.htmlImg} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={Assests.cssImg} alt="" />
                    </div>
                    <div className='tech-icon'>
                        <img src={Assests.jsImg} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
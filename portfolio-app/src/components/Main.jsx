
import anne from './assets/IMG_7582.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './styles/Main.scss'

const Main = () =>{
    return(
        <div className="main" >
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <p>Hello Everyone</p>
                        <h1>I am Anne-Marie</h1>
                        <p>Front-end Developper </p>

                        <div className="icons">
                            <TwitterIcon className="icon"/>
                            <InstagramIcon className="icon"/>
                            <FacebookIcon className="icon"/>
                            <LinkedInIcon className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>See me</button>
                            <button>Hire me</button>
                        </div>
                    </div>
                </div>

                <div className="main__img">
                        <img src={anne} alt="photo" width="400px" />
                </div>
            </div>
        </div>
    )
}

export default Main;
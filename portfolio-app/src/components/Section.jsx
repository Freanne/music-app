import './styles/Section.scss'
import anno from './assets/IMG_7582.jpg'

const Section = () => {
    return(
        <div className="sections">
            <div className="sections__container">
                <div className="section__img">
                    <img src={anno} alt="" width="270px" />
                </div>

                <div className="section__content">
                    <h1>
                        Anne-Marie AKOTEGNON
                    </h1>
                    <p>
                        Experience in Frontend developpement
                    </p>
                    <p>
                        Javascript Developpement
                    </p>
                    <p>
                        Java
                    </p>
                    <p>
                       Python
                    </p>
                    <p>
                        HTML & CSS
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section;
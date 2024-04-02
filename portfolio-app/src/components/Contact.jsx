import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './styles/Contact.scss'
import { Link } from 'react-router-dom';

const Contact = () =>{
    return (
        <div className="contact">
            <Link to="/">
                <ArrowBackIcon className='arrow'/>
            </Link>
            <div className="inputs">
                <h1>Contact Me</h1>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Message" className="Message"/>
                <button>Send</button>
            </div>

        </div>
    )
}


export default Contact
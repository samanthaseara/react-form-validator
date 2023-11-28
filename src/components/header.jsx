import {Link} from 'react-router-dom'

const Header = (props)=>{
    return (
        <header>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/form'>Formulaire</Link>
            </nav>
        </header>
    ) 
}

export default Header
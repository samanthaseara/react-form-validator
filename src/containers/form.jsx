//création d'un composant de formulaire avec des states qui réceptionne les valeurs du formulaire et une fonction de soumission qui appel notre fonction de validator qui va nous permettre de vérifier les valeurs des states avant même d'envoyer la requète ajax au final envoi de requète ajax et vérification qu'il nous retourne bien la validation d'enregistrement
import {useState, useEffect} from "react"
import axios from "axios"
import {validateInputField} from "../helpers/validator"

const Form = () => {
    
    //on crée des states pour valider tous le types de champs de formulaire
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [error, setError] = useState(null)
    const[success, setSuccess] = useState(null)
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        /* appel de la fonction de validation de formulaire pour chacun des champs.
        on doit stocker les réponse (true ou la phrase d'erreur) dans une constante*/
        const emailErr = validateInputField("email", email)
        if(emailErr !== true){
            setError(emailErr)
            return;
        }
        
        const errPass = validateInputField("password", password)
        if(errPass !== true){
            setError(errPass)
            return;
        }
        
        const errAge = validateInputField("age", age)
        if(errAge !== true){
            setError(errAge)
            return;
        }
        
        const errAddress = validateInputField("address", address)
        if(errAddress !== true){
            setError(errAddress)
            return;
        }
        
        
        setSuccess("Bravo Bryan tu as réussis!")
        //on fait notre requète ajax pour pousser vers le back
        const user = {
            email: email,
            password: password,
            age: age,
            address: address
        }
        axios.post('http://fsjs30.ide.3wa.io:9500/api/v1/postForm', user)
        .then((res) => {
            console.log(res.data)
        })
        .catch(err=>console.log(err))
    }
    return (
        <section>
            <h1>Mon super formulaire</h1>
            {error !== null && <p style={{color: "red"}}>{error}</p>}
            {success !== null && <p style={{color: "green"}}>{success}</p>}
            <form onSubmit={onSubmitForm}>
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={(e)=>{
                        setPassword(e.currentTarget.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="age"
                    onChange={(e)=>{
                        setAge(e.currentTarget.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="adresse"
                    onChange={(e)=>{
                        setAddress(e.currentTarget.value)
                    }}
                />
                <button>Envoyer</button>
            </form>
        </section>
    )
}

export default Form
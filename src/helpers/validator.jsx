export const validateInputField = (type, value) =>{
    //si le champs est vide
    if(value === ""){
        //on retourne une erreur
        return `Le champ ${type} est vide...`
    }
    //une magnifique condition switch
    switch(type){
        //si c'est email
        case "email":
            //on test le mail à l'aide d'un regex qui test mails
            const regMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            //si le teste du regex est négatif
            if(regMail.test(value) === false){
                //on retourne un message d'erreur
                 return `Le champ ${type} n'est pas valide!`
            }
        break;
        //si c'est password
        case "password":
            //on test le mot de passe à l'aide d'un regex qui test la valeur pour avoir 8 chiffres,au moins une lettre, une majuscule une minuscule et un caractère spécial.
            const regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            //si le test du regex est négatif
            if(regPass.test(value) === false){
                //on retourne un message d'erreur
                return `Le champ ${type} doit contenir mini charactères et au moins: un chiffre, une lettre majuscule, une lettre minuscule et un caractère spécial!`
            }
        break;        
        //si c'est age
        case "age":
            //on test si l'age est correct
            //si ce n'est pas un nombre entier
            if(isNaN(value)){
                //on retourne un message d'erreur
                return `Vous n'avez pas rentré un chiffre pour le champ ${type}!`
            //sinon si celui-ci est supérieur à 122 ans
            } else if(value > 122){
                //on retourne que c'est un mytho
                return `Votre age ne peut pas aller au delà de 122 ans mytho!`
            }     
        break;
        //si c'est l'addresse
        case "address":
            //si la longueur de la valeur est supérieur à 50 caractères
            if(value.length > 50){
                //on retourne que c'est pas possible en message d'erreur
                return `Le champ ${type} possède trop de caractères!`
            //sinon si c'est inférieur à 10
            } else if(value.length < 10){
                 //on retourne que c'est pas possible en message d'erreur
                 return `Le champ ${type} ne possède pas assez de caractères!`
            }
    }             
    //on retourne true (toutes les conditions sont bien remplies du coup)
    return true
            
}
    
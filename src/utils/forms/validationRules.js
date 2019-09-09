const validation = (value, rules, form) => {
    let valid = true;
    for (let rule in rules) {
        switch (rule) {
            case "isRequired":
                valid = valid && validateRequired(value)
                break;
            case "isEmail":
                valid = valid && validateEmail(value)
                break;
            case "minLength":
                valid = valid && validateMinLength(value,rules[rule])
                break;
            default:
                valid = true;
        }

    }
    return valid;

}



const validateRequired = (value) => {
    if (value !== '') {
        return true;
    }
    return false;

}

const validateMinLength=(value,rulesValue)=>{

    return true;


}


const validateEmail = (value) => {

    return true;

}
export default validation;
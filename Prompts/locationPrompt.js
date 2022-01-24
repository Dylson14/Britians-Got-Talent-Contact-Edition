// This is where we will store the prompts
const locationPrompt = [{
    type: "input",
    name: "locationInput",
    message:"Choose a location for your talent",
    // default:"Springfield",
    validate:(answers) => {
        if(answers === "" || answers !== isNaN){
            return "Please put a valid name, N.B cannot be empty or a number, strictly a string"
        }
        return true
    }


}]

module.exports = locationPrompt;

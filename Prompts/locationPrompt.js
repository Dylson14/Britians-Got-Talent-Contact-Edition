// This is where we will store the prompts
const locationPrompt = [{
    type: "input",
    name: "locationInput",
    message:"Choose a location for your talent",
    // default:"Springfield",
    validate:(answers) => {
        if(answers === ""){
            return "Please put a valid name, N.B cannot be empty"
        }else if(!isNaN(answers)){
            return "you cannot input a number"
        }else{
            return true
        }
    }


}]

module.exports = locationPrompt;

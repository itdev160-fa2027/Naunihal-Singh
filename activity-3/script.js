const greetingMessage= document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput"); 

const greetings = {
    birthday: {
        message: "Happy Birthday!",
        image: "https://picsum.photos/id/1/300/200",
        alt: "Birthday celebration greeting"
    },
    holiday: {
        message: "Happy Holidays!",
        image: "https://picsum.photos/id/12/300/200",
        alt: "Holiday celebration greeting"        
    },
    thankYou: {
        message: "Thank You!",
        image: "https://picsum.photos/id/47/300/200",
        alt: "Thank you greeting"
    }
};
function updateGreeting(type){
    const greeting = greetings[type];
    if (greeting) {
        greetingMessage.textContent = greeting.message;
        greetingImage.setAttribute("src", greeting.image);
        greetingImage.setAttribute("alt", greeting.alt);
        console.log(`Greeting updated to: ${type}`);
    }
    else{
        console.error(`Greeting type "${type}" not found.`);
    }
}

    function setBirthdayGreeting(){
        updateGreeting("birthday");
    }

    function setHolidayGreeting(){
        updateGreeting("holiday");
    }
    function setThankYouGreeting(){
        updateGreeting("thankYou");
    }

    function setRandomGreeting(){
        const types= Object.keys(greetings);
        const randomType= types[Math.floor(Math.random()*types.length)];
        console.log(`Random greeting selected: ${randomType}`);
        updateGreeting(randomType);
    }

    function personalizeGreeting(){
        const name = nameInput.value.trim();

        if (name === "")
        {
            alert("Please enter a name to personalize the greeting !");
            return;
        }

        const currentMessage = greetingMessage.textContent;
        greetingMessage.innerHTML = `Dear ${name}, <br> ${currentMessage}`;
        console.log(`Personalized greeting for: ${name}`);
        
        nameInput.value = "";
    }

    console.log("Dynamic Greeting Card application loaded");


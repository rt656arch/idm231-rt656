// Store HTML objects into JS variables/objects
const CaitlynObj = document.getElementById("Caitlyn");
const EkkoObj = document.getElementById("Ekko");
const HeimerdingerObj = document.getElementById("Heimerdinger");
const JayceObj = document.getElementById("Jayce");
const JinxObj = document.getElementById("Jinx");
const MelObj = document.getElementById("Mel");
const SevikaObj = document.getElementById("Sevika");
const SilcoObj = document.getElementById("Silco");
const SingedObj = document.getElementById("Singed");
const VanderObj = document.getElementById("Vander");
const ViObj = document.getElementById("Vi");
const ViktorObj = document.getElementById("Viktor");


// Display Object
const zNameObj = document.getElementById("zName");
const zImageObj = document.getElementById("zImage");
const zDateRangeObj = document.getElementById("zDateRange");
const zDescriptionObj = document.getElementById("zDescription");

const zodiacInfo = document.getElementById("zodiacInfo");

const zInfoButton = document.getElementById("zInfo");
const closeInfoBtn = document.getElementById("closeInfoBtn");
const infoDisplay = document.getElementById("infoDisplay");

// Close Mode
const DisplayAreaObj = document.getElementById("DisplayArea");
const CloseBtnObj = document.getElementById("CloseBtn");

// Get all buttons to call one central function
CaitlynObj.addEventListener('click', function() {
    displayZodInfo('Caitlyn');
});
EkkoObj.addEventListener('click', function() {
    displayZodInfo('Ekko');
});
HeimerdingerObj.addEventListener('click', function() {
    displayZodInfo('Heimerdinger');
});
JayceObj.addEventListener('click', function() {
    displayZodInfo('Jayce');
});
JinxObj.addEventListener('click', function() {
    displayZodInfo('Jinx');
});
MelObj.addEventListener('click', function() {
    displayZodInfo('Mel');
});
SevikaObj.addEventListener('click', function() {
    displayZodInfo('Sevika');
});
SilcoObj.addEventListener('click', function() {
    displayZodInfo('Silco');
});
SingedObj.addEventListener('click', function() {
    displayZodInfo('Singed');
});
VanderObj.addEventListener('click', function() {
    displayZodInfo('Vander');
});
ViObj.addEventListener('click', function() {
    displayZodInfo('Vi');
});
ViktorObj.addEventListener('click', function() {
    displayZodInfo('Viktor');
});

// Display Zod Info funtion
function displayZodInfo(whichOne) {
    // console.log('displayZodInfo called ' + whichOne);
    zNameObj.innerHTML = whichOne;
    DisplayAreaObj.classList.remove("hideMe");

    switch (whichOne) {
        case 'Caitlyn':
            zImageObj.src = 'images/caitlyn.webp';
            zDateRangeObj.innerHTML = 'June 21 .. July 22';
            zDescriptionObj.innerHTML = 'Emotionally intelligent, nurturing, extremely stubborn, challenges authority, moody, calm but capable of explosive anger when upset.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('caitlyn');
            break;
        case 'Ekko':
            zImageObj.src = 'images/ekko.webp';
            zDateRangeObj.innerHTML = 'September 23 .. October 22';
            zDescriptionObj.innerHTML = 'Seeks harmony and peace, avoids hurting those close to them, has a strong sense of justice, and struggles with a savior complex.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('ekko');
            break;
        case 'Heimerdinger':
            zImageObj.src = 'images/heimerdinger.jpg';
            zDateRangeObj.innerHTML = 'November 22 - December 21';
            zDescriptionObj.innerHTML = 'Wise, curious, loves discovering new things about the world, and sticks to tradition.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('heimerdinger');
            break;
        case 'Jayce':
            zImageObj.src = 'images/jayce.jpg';
            zDateRangeObj.innerHTML = 'January 20 – February 18';
            zDescriptionObj.innerHTML = 'Believes in progress, extremely altruistic, forward-thinking, intelligent, politically inclined, and thinks outside the box.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('jayce');
            break;
        case 'Jinx':
            zImageObj.src = 'images/jinx.jpg';
            zDateRangeObj.innerHTML = 'February 19 – March 20';
            zDescriptionObj.innerHTML = 'A storm of inner chaos, childlike, overflowing with imagination, crafty, dreamy, ruled by emotions, has a big heart, suffers from deep insecurity, prone to breaking down at the slightest instability.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('jinx');
            break;
        case 'Mel':
            zImageObj.src = 'images/mel.jpg';
            zDateRangeObj.innerHTML = 'December 22 – January 19';
            zDescriptionObj.innerHTML = 'Ambitious, emotionally intelligent, manipulative, has family issues, prone to success, climbs corporate ladder easily, seeks to fortify their current standing.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('mel');
            break;
        case 'Sevika':
            zImageObj.src = 'images/sevika.jpg';
            zDateRangeObj.innerHTML = 'July 23 – August 22';
            zDescriptionObj.innerHTML = 'Seeks attention from authority figures, courageous, has a generous heart, highly ambitious, loyal to a cause rather people, could step up to be a leader, and constantly strives for self-fulfillment.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('sevika');
            break;
        case 'Silco':
            zImageObj.src = 'images/silco.jpg';
            zDateRangeObj.innerHTML = 'October 23–November 21';
            zDescriptionObj.innerHTML = "Fascinated by taboo, transformation, and uncovering hidden depths. Driven by profound ideas for revolution.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('silco');
            break;
        case 'Singed':
            zImageObj.src = 'images/singed.jpg';
            zDateRangeObj.innerHTML = 'May 21 – June 20';
            zDescriptionObj.innerHTML = "Highly intelligent, cunning, double-sided, scientifically-inclined, and extremely curious.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('singed');
            break;
        case 'Vander':
            zImageObj.src = 'images/vander.jpg';
            zDateRangeObj.innerHTML = 'April 20 – May 20';
            zDescriptionObj.innerHTML = "Grounded, pragmatic, values material security, business-owner, loves simple pleasures, deeply loves their family.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('vander');
            break;
        case 'Vi':
            zImageObj.src = 'images/vi.jpg';
            zDateRangeObj.innerHTML = 'March 21 – April 19';
            zDescriptionObj.innerHTML = "Fiery temperament, acts and fights before thinking, natural leader, short-tempered, impatient, family-oriented, and hyper-energetic.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('vi');
            break;
        case 'Viktor':
            zImageObj.src = 'images/viktor.webp';
            zDateRangeObj.innerHTML = 'August 23 – September 22';
            zDescriptionObj.innerHTML = "Self-sacrificing, extremely intelligent, methodical, modest, lives to serve others—even after gaining immense power.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            playAudio('viktor');
            break;
        default:
            console.log('ERROR WRONG ONE!');
    }
}

zInfoButton.addEventListener("click", function() {
    zodiacInfo.innerHTML = "Enter your birthday and you will find out which Arcane zodiac you are!";
    infoDisplay.style.display = "flex";
});

closeInfoBtn.addEventListener('click', function() {
    infoDisplay.style.display = "none";
});

CloseBtnObj.addEventListener('click', function() {
    DisplayAreaObj.classList.add("hideMe");
});

// Play Audio funtion
const allAudios = document.querySelectorAll('audio');
function playAudio(whichSound) {
    allAudios.forEach(thisAudio => {
        thisAudio.pause();
        // reset sound file back to start 
        thisAudio.currentTime = 0; 
    });
    document.getElementById(whichSound).play();
}


// Input Date and Submit code below
//
const submitObj = document.getElementById("zSubmit");

submitObj.addEventListener('click', function() {
    console.log('Submit button clicked on!');
    // Capture user input date
    const birthDateObj = document.getElementById('zBirthday').valueAsDate;
    console.log('birthDateObj is: ' + birthDateObj);
    // Make sure date is valid (dont use alert, use a pop up)
    if (birthDateObj) {
        const tzOffSet = birthDateObj.getTimezoneOffset() * 60 * 1000;
        console.log('tzOffSet is: ' + tzOffSet);
        const birthDateEST = new Date(birthDateObj.getTime() + tzOffSet);
        console.log('birthDateEST is: ' + birthDateEST);
        // Extract Month
        const month = birthDateEST.getMonth() + 1;
        // Extract Day of month
        const day = birthDateEST.getDate();
        console.log('month is: ' + month + ' day is: ' + day);
        // Convery date to a zodiac sign
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            astrological_sign = 'Mel'
          } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            astrological_sign = 'Heimerdinger'
          } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            astrological_sign = 'Silco'
          } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
            astrological_sign = 'Ekko'
          } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            astrological_sign = 'Viktor'
          } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            astrological_sign = 'Sevika'
          } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            astrological_sign = 'Caitlyn'
          } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            astrological_sign = 'Singed'
          } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            astrological_sign = 'Vander'
          } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            astrological_sign = 'Vi'
          } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            astrological_sign = 'Jinx'
          } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            astrological_sign = 'Jayce'
          }
          displayZodInfo(astrological_sign);
    } else {
        zNameObj.innerHTML = 'ERROR';
        zImageObj.src = 'images/errorImg.jpg';
        zDateRangeObj.innerHTML = 'Oops!';
        zDescriptionObj.innerHTML = "Invalid date entered";
        DisplayAreaObj.classList.remove("hideMe");
    }
    // Convert date to a zodiac sign
    // Display that zodiac sign info in popup
});
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

    switch (whichOne) {
        case 'Caitlyn':
            zImageObj.src = 'images/caitlyn.webp';
            zDateRangeObj.innerHTML = 'June 21 .. July 22';
            zDescriptionObj.innerHTML = 'Sweet like a cupcake, emotionally intelligent, nurturing (especially with Vi), extremely stubborn (disobeys orders from her superiors and her mother), moody, calm but capable of explosive anger when upset.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('bloop');
            break;
        case 'Ekko':
            zImageObj.src = 'images/ekko.webp';
            zDateRangeObj.innerHTML = 'September 23 .. October 22';
            zDescriptionObj.innerHTML = 'Seeks harmony and peace, regrets fighting Jinx almost immediately. A talented artist (his murals speak for themselves), has a strong sense of justice (leader of the Firelights), and struggles with a savior complex like many Libras.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('chimes');
            break;
        case 'Heimerdinger':
            zImageObj.src = 'images/heimerdinger.jpg';
            zDateRangeObj.innerHTML = 'November 22 - December 21';
            zDescriptionObj.innerHTML = 'The philosopher-scientist archetype of Sagittarius. Wise, curious, and loves discovering new things about the world.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Jayce':
            zImageObj.src = 'images/jayce.jpg';
            zDateRangeObj.innerHTML = 'January 20 – February 18';
            zDescriptionObj.innerHTML = 'Strong Aquarius vibes. Believes in progress, extremely altruistic and forward-thinking. Very intelligent and thinks outside the box to solve social problems.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Jinx':
            zImageObj.src = 'images/jinx.jpg';
            zDateRangeObj.innerHTML = 'February 19 – March 20';
            zDescriptionObj.innerHTML = 'A storm of inner chaos, childlike, overflowing with imagination. Crafty, dreamy, ruled by her emotions, has a big heart (e.g., with Isha), but suffers from deep insecurity that makes her crumble at the slightest instability.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Mel':
            zImageObj.src = 'images/mel.jpg';
            zDateRangeObj.innerHTML = 'December 22 – January 19';
            zDescriptionObj.innerHTML = 'Ambitious, deeply affected by being ostracized from her powerful family. The wealthiest woman in Piltover with the most intriguing public career on the council. Constantly seeks to fortify her position.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Sevika':
            zImageObj.src = 'images/sevika.jpg';
            zDateRangeObj.innerHTML = 'July 23 – August 22';
            zDescriptionObj.innerHTML = 'Seeks attention from Silco, courageous with a generous heart deep down, highly ambitious, wants to lead Zaun’s rebellion, constantly strives for self-fulfillment.';
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Silco':
            zImageObj.src = 'images/silco.jpg';
            zDateRangeObj.innerHTML = 'October 23–November 21';
            zDescriptionObj.innerHTML = "Fascinated by taboo, transformation, and uncovering hidden depths (like the monster within us). Driven by profound ideas for Zaun's revolution.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Singed':
            zImageObj.src = 'images/singed.jpg';
            zDateRangeObj.innerHTML = 'May 21 – June 20';
            zDescriptionObj.innerHTML = "Highly intelligent, cunning, double-sided (works for Silco but ultimately prioritizes his own gain), very curious (eager to see the shimmer's effects on Vander).";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Vander':
            zImageObj.src = 'images/vander.jpg';
            zDateRangeObj.innerHTML = 'April 20 – May 20';
            zDescriptionObj.innerHTML = "Grounded, pragmatic (shown in his deal with the enforcers in Season 1), values material security to be happy, runs a bar (Tauruses love simple pleasures like drinking), deeply loves his family—even as Warwick.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Vi':
            zImageObj.src = 'images/vi.jpg';
            zDateRangeObj.innerHTML = 'March 21 – April 19';
            zDescriptionObj.innerHTML = "Fiery temperament, acts and fights before thinking, natural leader (evident with Claggor and Mylo when young, and later with Caitlyn and during the finale), short-tempered, no patience, hyper-energetic.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        case 'Viktor':
            zImageObj.src = 'images/viktor.webp';
            zDateRangeObj.innerHTML = 'August 23 – September 22';
            zDescriptionObj.innerHTML = "Self-sacrificing, extremely intelligent, methodical, modest, lives to serve others—even after gaining immense power, he uses it to benefit his community and Zaun instead of ruling tyrannically. Very Virgo-like.";
            DisplayAreaObj.classList.remove("hideMe");
            // Play Audio for this character
            // playAudio('crack');
            break;
        default:
            console.log('ERROR WRONG ONE!');
    }
}

CloseBtnObj.addEventListener('click', function() {
    DisplayAreaObj.classList.add("hideMe");
});

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
        alert('Please enter a valid date');
    }
    // Convert date to a zodiac sign
    // Display that zodiac sign info in popup
});
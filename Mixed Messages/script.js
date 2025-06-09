const rashiChart = {
    A: "Mesha (Aries)", B: "Vrishabha (Taurus)", C: "Mithun (Gemini)", D: "Karka (Cancer)",
    E: "Simha (Leo)", F: "Kanya (Virgo)", G: "Tula (Libra)", H: "Vrischika (Scorpio)",
    I: "Dhanu (Sagittarius)", J: "Makara (Capricorn)", K: "Kumbha (Aquarius)", L: "Meena (Pisces)",
    M: "Mesha (Aries)", N: "Vrishabha (Taurus)", O: "Mithun (Gemini)", P: "Karka (Cancer)",
    Q: "Simha (Leo)", R: "Kanya (Virgo)", S: "Tula (Libra)", T: "Vrischika (Scorpio)",
    U: "Dhanu (Sagittarius)", V: "Makara (Capricorn)", W: "Kumbha (Aquarius)", X: "Meena (Pisces)",
    Y: "Mesha (Aries)", Z: "Vrishabha (Taurus)"
};

const rashiGods = {
    "Mesha (Aries)": "Hanuman",
    "Vrishabha (Taurus)": "Vishnu",
    "Mithun (Gemini)": "Shiva",
    "Karka (Cancer)": "Durga",
    "Simha (Leo)": "Surya",
    "Kanya (Virgo)": "Lakshmi",
    "Tula (Libra)": "Venus",
    "Vrischika (Scorpio)": "Kali",
    "Dhanu (Sagittarius)": "Brihaspati",
    "Makara (Capricorn)": "Shani",
    "Kumbha (Aquarius)": "Shiva",
    "Meena (Pisces)": "Vishnu"
};

const rashiMessages = {
    "Mesha (Aries)": "Be bold and take risks!",
    "Vrishabha (Taurus)": "Stay grounded and patient.",
    "Mithun (Gemini)": "Your words are powerful, use them wisely.",
    "Karka (Cancer)": "Trust your emotions, they guide you well.",
    "Simha (Leo)": "You are a born leader, shine bright!",
    "Kanya (Virgo)": "Your perfectionism is your strength, but don’t overthink.",
    "Tula (Libra)": "Balance is the key to your happiness.",
    "Vrischika (Scorpio)": "Your passion will lead you to success.",
    "Dhanu (Sagittarius)": "Adventure awaits you, never stop exploring!",
    "Makara (Capricorn)": "Hard work always pays off.",
    "Kumbha (Aquarius)": "Think different, your ideas change the world.",
    "Meena (Pisces)": "Your dreams have power, believe in them."
};

const mobileNumberCompatibility = {
    0: ["All Rashis"], 
    1: ["Simha (Leo)", "Dhanu (Sagittarius)"], 
    2: ["Karka (Cancer)"], 
    3: ["Dhanu (Sagittarius)", "Meena (Pisces)"], 
    4: ["Kumbha (Aquarius)"], 
    5: ["Mithun (Gemini)", "Kanya (Virgo)"], 
    6: ["Vrishabha (Taurus)", "Tula (Libra)"], 
    7: ["Kumbha (Aquarius)"], 
    8: ["Makara (Capricorn)", "Kumbha (Aquarius)"], 
    9: ["Mesha (Aries)", "Vrischika (Scorpio)"] 
};

const rashiNumbers = {
    "Mesha (Aries)": 9,  
    "Vrishabha (Taurus)": 6,  
    "Mithun (Gemini)": 5,  
    "Karka (Cancer)": 2,  
    "Simha (Leo)": 1,  
    "Kanya (Virgo)": 5,  
    "Tula (Libra)": 6,  
    "Vrischika (Scorpio)": 9,  
    "Dhanu (Sagittarius)": 3,  
    "Makara (Capricorn)": 8,  
    "Kumbha (Aquarius)": 8,  
    "Meena (Pisces)": 3  
};

const name = document.getElementById('name').value || 'Vishal'; // Default name if input is empty
const mobileNumber = document.getElementById('mobileNumber').value || '1234567890'; // Default mobile number if input is empty
const messageBox = document.getElementById('messageDisplay');


// Find Rashi based on name
const rashi = (name) => {
    const firstLetter = name[0].toUpperCase();
    return rashiChart[firstLetter] || "Unknown Rashi";
}

// Find message based on Rashi
const message = (rashi) => {
    return rashiMessages[rashi] || "No message found.";
}

// Find god associated with Rashi
const god = (rashi) => {
    return rashiGods[rashi] || "No god assigned.";
}

// Get single-digit sum of mobile number
const mobileNoSum = (mobileNumber) => {
    let sum = mobileNumber.split('').reduce((acc, num) => acc + parseInt(num), 0);
    
    while (sum > 9) {  
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }
    
    return sum;
}

// Check if mobile number is compatible with Rashi
const mobileNoCompatibility = (mobileNoSum, userRashi) => {
    const compatibleRashis = mobileNumberCompatibility[mobileNoSum] || [];
    const rashiNumber = rashiNumbers[userRashi];

    let compatibilityMessage = compatibleRashis.includes(userRashi) ? "✅ Compatible" : "❌ Not Compatible";

    if (mobileNoSum === rashiNumber) {
        compatibilityMessage += " (Perfect Match! 🔥)";
    } else if (Math.abs(mobileNoSum - rashiNumber) === 1) {
        compatibilityMessage += " (Good Match 👍)";
    }

    return compatibilityMessage;
};


// Run the program
const userRashi = rashi(name);
const userMobileNoSum = mobileNoSum(mobileNumber);
const isCompatible = mobileNoCompatibility(userMobileNoSum, userRashi);

console.log(`🔮 Name: ${name}`);
console.log(`🌟 Rashi: ${userRashi}`);
console.log(`📖 Message: ${message(userRashi)}`);
console.log(`🛕 God: ${god(userRashi)}`);
console.log(`📱 Mobile No. Sum: ${userMobileNoSum}`);
console.log(`✅ Mobile No. Compatibility: ${isCompatible}`);

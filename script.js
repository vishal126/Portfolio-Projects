const nameDb = {
    0: "Anonymous",
    1: "John Doe",
    2: "Jane Smith",
    3: "Alice Johnson",
    4: "Bob Brown",
    5: "Charlie Davis",
    6: "Diana Prince",
    7: "Ethan Hunt",
    8: "Felicity Smoak",
    9: "George Washington",
    10: "Hannah Montana",
    11: "Ian Malcolm",
    12: "Jack Sparrow",
    13: "Katherine Johnson",
    14: "Leonardo DiCaprio",
    15: "Mia Wallace",
    16: "Nathan Drake",
    17: "Olivia Pope",
    18: "Peter Parker",
    19: "Quentin Tarantino",
    20: "Rachel Green",
    21: "Steve Rogers",
    22: "Tony Stark",
    23: "Uma Thurman",
    24: "Victor Frankenstein",
    25: "Will Smith",
    26: "Xena Warrior Princess",
    27: "Yoda",
    28: "Zorro",
    29: "Aang",
    30: "Beyoncé",
    31: "Cinderella",
    32: "Darth Vader",
    33: "Elsa",
    34: "Frodo Baggins",
    35: "Gandalf",
    36: "Hermione Granger",
    37: "Indiana Jones",
    38: "Jack Dawson",
    39: "Katniss Everdeen",
    40: "Luke Skywalker",
    41: "Marty McFly",
    42: "Neo",
    43: "Oprah Winfrey",
    44: "Pikachu",
    45: "Quasimodo",
    46: "R2-D2",
    47: "SpongeBob SquarePants",
    48: "Thor",
    49: "Ursula",
    50: "Voldemort"
}

const messageDb = {
    get 0() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}! Welcome to the site.`;
    },
    get 1() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. Hope you enjoy your visit.`;
    },
    get 2() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Have a great day!`;
    },
    get 3() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We're glad to have you here.`;
    },
    get 4() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. Enjoy your time on our site.`;
    },
    get 5() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you find what you're looking for.`;
    },
    get 6() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for visiting us.`;
    },
    get 7() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We appreciate your presence.`;
    },
    get 8() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We hope you have a pleasant experience.`;
    },
    get 9() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. Thank you for stopping by.`;
    },
    get 10() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. We hope you enjoy your stay.`;
    },
    get 11() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you find our site useful.`;
    },
    get 12() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We hope you have a great time here.`;
    },
    get 13() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you enjoy your visit.`;
    },
    get 14() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for being here.`;
    },
    get 15() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a wonderful experience.`;
    },
    get 16() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We appreciate your visit.`;
    },
    get 17() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you find our site enjoyable.`;
    },
    get 18() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for joining us.`;
    },
    get 19() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a great time.`;
    },
    get 20() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We hope you enjoy your stay.`;
    },
    get 21() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you find our site helpful.`;
    },
    get 22() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for being here.`;
    },
    get 23() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a pleasant experience.`;
    },
    get 24() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We appreciate your presence.`;
    },
    get 25() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you enjoy your visit.`;
    },
    get 26() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for stopping by.`;
    },
    get 27() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you find our site useful.`;
    },
    get 28() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We hope you have a great time here.`;
    },
    get 29() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you enjoy your visit.`;
    },
    get 30() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for being here.`;
    },
    get 31() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a wonderful experience.`;
    },
    get 32() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We appreciate your visit.`;
    },
    get 33() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you find our site enjoyable.`;
    },
    get 34() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for joining us.`;
    },
    get 35() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a great time.`;
    },
    get 36() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We hope you enjoy your stay.`;
    },
    get 37() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you find our site helpful.`;
    },
    get 38() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for being here.`;
    },
    get 39() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a pleasant experience.`;
    },
    get 40() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We appreciate your presence.`;
    },
    get 41() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you enjoy your visit.`;
    },
    get 42() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for stopping by.`;
    },
    get 43() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you find our site useful.`;
    },
    get 44() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We hope you have a great time here.`;
    },
    get 45() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you enjoy your visit.`;
    },
    get 46() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for being here.`;
    },
    get 47() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Welcome, ${name}. We hope you have a wonderful experience.`;
    },
    get 48() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hello, ${name}. We appreciate your visit.`;
    },
    get 49() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Hi, ${name}. We hope you find our site enjoyable.`;
    },
    get 50() {
        const randomNumber = Math.floor(Math.random()*51);
        const name = nameDb[randomNumber];
        return `Greetings, ${name}. Thank you for joining us.`;
    }
};

const phoneNumberGenerator = () => {
    let phoneNumber = '';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}

const emailGenerator = () => {
    const domains = ['example.com', 'test.com', 'demo.com', 'sample.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `user${Math.floor(Math.random() * 1000)}@${randomDomain}`;
}

const data = () => {
    const randomNumber = Math.floor(Math.random() * 51);
    const name = nameDb[randomNumber];
    const message = messageDb[randomNumber];
    const phone = phoneNumberGenerator();
    const email = emailGenerator();
    return {
        randomNumber,
        name,
        message,
        phone,
        email
    }
}

function displayData() {
    const { randomNumber, name, message, phone, email } = data();
    console.log(`Random Number🔢: ${randomNumber}`);
    console.log(`Name🤵: ${name}`);
    console.log(`MessageⓂ️: ${message}`);
    console.log(`Phone☎️: ${phone}`);
    console.log(`Email📧: ${email}`);
}

// Calling the function to display data
displayData();
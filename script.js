//show and hide desktop site image

function showDSite() {
    document.getElementById('swim-desktop').style.display = "block";
    document.getElementById('show-desktop').style.display = "none";
};

document.getElementById('show-desktop').onclick = showDSite;

function hideDSite() {
    document.getElementById('show-desktop').style.display = "block";
    document.getElementById('swim-desktop').style.display = "none";
};

document.getElementById('swim-desktop').onclick = hideDSite;



//show and hide tablet site image

function showTSite() {
    document.getElementById('swim-tablet').style.display = "block";
    document.getElementById('show-tablet').style.display = "none";
};

document.getElementById('show-tablet').onclick = showTSite;

function hideTSite() {
    document.getElementById('show-tablet').style.display = "block";
    document.getElementById('swim-tablet').style.display = "none";
};

document.getElementById('swim-tablet').onclick = hideTSite;


//show and hide mobile site image

function showMSite() {
    document.getElementById('swim-mobile').style.display = "block";
    document.getElementById('show-mobile').style.display = "none";
};

document.getElementById('show-mobile').onclick = showMSite;

function hideMSite() {
    document.getElementById('show-mobile').style.display = "block";
    document.getElementById('swim-mobile').style.display = "none";
};

document.getElementById('swim-mobile').onclick = hideMSite;


//CelebCampMates

const jobs1 = ['scavenger', 'hunter', 'chef'];
const jobs2 = ['builder', 'strategist', 'defender'];
const jobs3 = ['emotional support', 'explorer', 'lazy good-for-nothing'];

const names = ['Dwayne Johnson', 'Bear Grylls', 'Jack Black', 'Scarlett Johansson', 'Kim Kardashian', 'Beyonce', 'Ryan Reynolds', 'Stephen King', 'Kathy Bates', 'Hannah Waddingham'];

const randPerc = () => Math.floor(Math.random() * 100);
const randJob = jobArr => jobArr[Math.floor(Math.random() * 3)];
const randName = nameArr => nameArr[Math.floor(Math.random() * 10)];

const calcSurvival = (perc) => {
    if (perc > 75) {
        return `
    ${perc}% 
    I like those odds!
        `;
    } else if (perc > 50) {
        return `
    ${perc}%  
    Not bad, go for it!
        `;
    } else if (perc > 20) {
        return `
    ${perc}% 
    You err... you got this...
        `;
    } else {
        return `
    ${perc}%
    Yikes...
        `;
    };
}


function generateCamp() {
    document.getElementById('job1').innerHTML = randJob(jobs1);
    document.getElementById('job2').innerHTML = randJob(jobs2);
    document.getElementById('job3').innerHTML = randJob(jobs3);
    document.getElementById('name1').innerHTML = randName(names);
    document.getElementById('name2').innerHTML = randName(names);
    document.getElementById('name3').innerHTML = randName(names);
    document.getElementById('survivalChance').innerHTML = calcSurvival(randPerc());
    document.getElementById('clickMessage').innerHTML = 'Click to try again!';
};

document.getElementById('generator').onclick = generateCamp;
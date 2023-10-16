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
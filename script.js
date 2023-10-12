//show and hide desktop site image

function showDSite() {
    document.getElementById('swim-desktop').style.visibility = "visible";
    document.getElementById('show-desktop').style.visibility = "hidden";
};

document.getElementById('show-desktop').onclick = showDSite;

function hideDSite() {
    document.getElementById('show-desktop').style.visibility = "visible";
    document.getElementById('swim-desktop').style.visibility = "hidden";
};

document.getElementById('swim-desktop').onclick = hideDSite;



//show and hide tablet site image

function showTSite() {
    document.getElementById('swim-tablet').style.visibility = "visible";
    document.getElementById('show-tablet').style.visibility = "hidden";
};

document.getElementById('show-tablet').onclick = showTSite;

function hideTSite() {
    document.getElementById('show-tablet').style.visibility = "visible";
    document.getElementById('swim-tablet').style.visibility = "hidden";
};

document.getElementById('swim-tablet').onclick = hideTSite;


//show and hide mobile site image

function showMSite() {
    document.getElementById('swim-mobile').style.visibility = "visible";
    document.getElementById('show-mobile').style.visibility = "hidden";
};

document.getElementById('show-mobile').onclick = showMSite;

function hideMSite() {
    document.getElementById('show-mobile').style.visibility = "visible";
    document.getElementById('swim-mobile').style.visibility = "hidden";
};

document.getElementById('swim-mobile').onclick = hideMSite;
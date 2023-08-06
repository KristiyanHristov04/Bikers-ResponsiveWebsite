let isOn = false;
document.getElementsByClassName('fa-xmark')[0].style.display = "none";
function toggleOnAndOff() {
    if (isOn) {
        isOn = false;
        document.getElementById('firstList').style.display = 'none';
        document.getElementsByClassName('fa-xmark')[0].style.display = 'none';
        document.getElementsByClassName('fa-bars')[0].style.display = 'inline';
    }
    else {
        isOn = true;
        document.getElementById('firstList').style.display = 'grid';
        document.getElementsByClassName('fa-xmark')[0].style.display = 'inline';
        document.getElementsByClassName('fa-bars')[0].style.display = 'none';
    }
}   
document.getElementById('agasawBtn').onclick = function () {
    document.getElementById('agasaw').style.display = "inherit";
    document.getElementById('dahamDenuma').style.display = "none";
    document.getElementById('poya').style.display = "none";
    document.getElementById('subH').style.display = "none";
}

document.getElementById('dahamBtn').onclick = function () {
    document.getElementById('agasaw').style.display = "none";
    document.getElementById('dahamDenuma').style.display = "inherit";
    document.getElementById('poya').style.display = "none";
    document.getElementById('subH').style.display = "none";
}

document.getElementById('poyaBtn').onclick = function () {
    document.getElementById('agasaw').style.display = "none";
    document.getElementById('dahamDenuma').style.display = "none";
    document.getElementById('poya').style.display = "inherit";
    document.getElementById('subH').style.display = "none";
}

document.getElementById('lankaBtn').onclick = function () {
    document.getElementById('sl').style.display = "inherit";
    document.getElementById('wd').style.display = "none";
}

document.getElementById('worldBtn').onclick = function () {
    document.getElementById('sl').style.display = "none";
    document.getElementById('wd').style.display = "inherit";
}

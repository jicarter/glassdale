let show = function (WitnessList) {
    WitnessList.style.display = 'block';
};

let hide = function (WitnessList) {
    WitnessList.style.display = 'none';
};

let toggle = function (WitnessList) {
    if (window.getComputedStyle(WitnessList).display === 'block') {
        hide(WitnessList);
        return
    }
}


let show = function (listItem) {
    listItem.style.display = 'block';
};

let hide = function (listItem) {
    listItem.style.display = 'none';
};

let toggle = function (listItem) {
    if (window.getComputedStyle(listItem).display === 'block') {
        hide(listItem);
        return
    }
}


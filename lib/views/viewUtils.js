module.exports = {
    // Faster than jquery $el.show()
    showElement: function (el) {
        el[0].style.display = "block";
    },
    // Faster than jquery $el.hide()
    hideElement: function (el) {
        el[0].style.display = "none";
    }
};

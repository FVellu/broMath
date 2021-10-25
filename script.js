// Navbar adder
var head = document.getElementsByTagName('body')[0];

var navbar = document.createElement('nav')
navbar.innerHTML = '<p><a href="#" id="nav-hyperlink">broMath</a></p>'
head.prepend(navbar)


// New result animation triggerer
var result = document.getElementById("result")

elementToObserve = result

observer = new MutationObserver(function(mutationsList) {
    // Change has been made in #result
    result.style.animation = "result 200ms linear"
    setTimeout(function () {
        result.style.animation = ""
    }, 200);
});

observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});
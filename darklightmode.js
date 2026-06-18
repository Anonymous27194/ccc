window.onload = onPageLoad;

// if (localStorage.getItem("darklightmode")) {
//     window.alert("There is a set value.")
// } else {
//     window.alert("There is NO set value.")
// }


function onPageLoad() {
    // window.alert(localStorage.getItem("darklightmode"));

    if (localStorage.getItem("darklightmode") == "dark") {
        switchToDark();
    } else if (localStorage.getItem("darklightmode") == "light") {
        switchToLight();
    
    } else {
        const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        if (darkModeMql && darkModeMql.matches) {
        // dark mode
        switchToDark();
        } else {
        switchToLight();
        }
    }
}

function switchToLight() {
    localStorage.setItem("darklightmode", "light");
    let all_elements = document.querySelectorAll('*');
    let all = document.querySelectorAll('*');

    for (let all_elements of all) {
        all_elements.classList.add('no_transition');
        all_elements.classList.add('lightmode');
        all_elements.classList.remove('darkmode');
        setTimeout(function() {
            all_elements.classList.remove('no_transition');
        }, 10);
    }

    let light = document.querySelectorAll('.light');
    let all_light = document.querySelectorAll('.light');
    for (let all_light of light) {
        all_light.classList.add('hide');
    }

    let dark = document.querySelectorAll('.dark');
    let all_dark = document.querySelectorAll('.dark');
    for (let all_dark of dark) {
        all_dark.classList.remove('hide');
    }
}

function switchToDark() {
    localStorage.setItem("darklightmode", "dark");
    let all_elements = document.querySelectorAll('*');
    let all = document.querySelectorAll('*');
    for (let all_elements of all) {
        all_elements.classList.add('no_transition')
        all_elements.classList.add('darkmode');
        all_elements.classList.remove('lightmode');
        setTimeout(function() {
            all_elements.classList.remove('no_transition');
        }, 10);

    }

    let dark = document.querySelectorAll('.dark');
    let all_dark = document.querySelectorAll('.dark');
    for (let all_dark of dark) {
        all_dark.classList.add('hide');
    }

    let light = document.querySelectorAll('.light');
    let all_light = document.querySelectorAll('.light');
    for (let all_light of light) {
        all_light.classList.remove('hide');
    }
}
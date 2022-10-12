let themeStyle = localStorage.getItem('themeStyle')
if (themeStyle == null) {
    setTheme('light')
} else {
    setTheme(themeStyle)
}


console.log('yaha')
let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {

        let mode = this.dataset.mode
        console.log('clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme').href = 'main.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme').href = 'blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme').href = 'green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme').href = 'purple.css'
    }

    localStorage.setItem('themeStyle', mode)
}
function openNav() {
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidebar").style.width = "80%";
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById("mySidebar").style.width = "23%";
        document.getElementById("main").style.marginLeft = "25%";
    } else {
        document.getElementById("mySidebar").style.width = "80%";
        document.getElementById("main").style.marginLeft = "0";
    }
});


var specifiedElement = document.getElementById('mySidebar');
var b = document.querySelector('.openbtn')

document.addEventListener('click', function (event) {
    var isClickInside = specifiedElement.contains(event.target);
    var isClickInsidebtn = b.contains(event.target);

    if (!isClickInside && !isClickInsidebtn && window.innerWidth <= 768) {
        specifiedElement.style.width = 0;
        document.getElementById("main").style.marginLeft = "0";
    }
});

function loadContent(page) {
    document.querySelector('.main').innerHTML = document.querySelector(`#${page}`).innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent(document.querySelector('.act').dataset.page)
    document.querySelectorAll('section').forEach(sec => {
        sec.style.display = "none"
    })

    document.querySelectorAll('.navigation').forEach(bttn => {
        bttn.onclick = () => {
            if (window.innerWidth <= 768) {
                specifiedElement.style.width = 0;
                document.getElementById("main").style.marginLeft = "0";
            }
            document.querySelector('.act').classList.remove('act')
            bttn.classList.add('act')
            loadContent(bttn.dataset.page)
        }
    })


})



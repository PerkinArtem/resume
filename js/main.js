
let menu = function () {
    let tabNav = document.querySelectorAll('.aside__nav-item'),
        tabContent = document.querySelectorAll('.main-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('current');
        });
        this.classList.add('current');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            if(item.classList.contains(tabName)){
                item.classList.add('current')
            } else {
                item.classList.remove('current')
            }
        })
    }

};

menu();





document.querySelector('.header__menu').onclick = function() {
    document.querySelector('.aside').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('lock');
}

document.querySelector('.aside__close').onclick = function() {
    document.querySelector('.aside').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('lock');
}

document.querySelector('.overlay').onclick = function() {
    document.querySelector('.aside').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('lock');
}





// POPUP

const popupLinks = document.querySelectorAll('.main__home-contact');
const body = document.querySelector('.body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#','');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e){
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive) {
    popupActive.classList.remove('open');
}


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});










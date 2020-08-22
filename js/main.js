
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




// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.email.value == '' || document.form.message.value == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
            alert("Спасибо!");
			// $('.js-overlay-thank-you').fadeIn();
			// $(this).find('input').val('');
			// $('#form').trigger('reset');
		});
		return false;
	});
});

// // Закрыть попап «спасибо»
// $('.js-close-thank-you').click(function() { // по клику на крестик
// 	$('.js-overlay-thank-you').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
// 	var popup = $('.popup');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
// 		$('.js-overlay-thank-you').fadeOut();
// 	}
// });

// // Маска ввода номера телефона (плагин maskedinput)
// $(function($){
// 	$('[name="phone"]').mask("+7(999) 999-9999");
// });










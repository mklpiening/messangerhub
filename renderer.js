var ById = function (id) {
    return document.getElementById(id);
}

var whatsapp = ById('whatsapp'),
    telegram = ById('telegram'),
    rocketchat = ById('rocketchat'),
    whatsappView = ById('whatsappView'),
    telegramView = ById('telegramView'),
    rocketchatView = ById('rocketchatView');

function showWhatsapp() {
    telegramView.style.visibility = 'visible';
    telegramView.style.visibility = 'hidden';
    rocketchatView.style.visibility = 'hidden';

    whatsapp.className = 'selected';
    telegram.className = '';
    rocketchat.className = '';
}

function showTelegram() {
    telegramView.style.visibility = 'hidden';
    telegramView.style.visibility = 'visible';
    rocketchatView.style.visibility = 'hidden';

    whatsapp.className = '';
    telegram.className = 'selected';
    rocketchat.className = '';
}

function showRocketchat() {
    telegramView.style.visibility = 'hidden';
    telegramView.style.visibility = 'hidden';
    rocketchatView.style.visibility = 'visible';

    whatsapp.className = '';
    telegram.className = '';
    rocketchat.className = 'selected';
}

whatsapp.addEventListener('click', showWhatsapp);
telegram.addEventListener('click', showTelegram);
rocketchat.addEventListener('click', showRocketchat);

showWhatsapp();
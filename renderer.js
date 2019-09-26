var ById = function (id) {
    return document.getElementById(id);
}

var whatsappBtn = ById('whatsappBtn'),
    telegramBtn = ById('telegramBtn'),
    rocketchatBtn = ById('rocketchatBtn'),
    whatsappView = ById('whatsappView'),
    telegramView = ById('telegramView'),
    rocketchatView = ById('rocketchatView');

function showWhatsapp() {
    whatsappView.style.visibility = 'visible';
    telegramView.style.visibility = 'hidden';
    rocketchatView.style.visibility = 'hidden';

    whatsappBtn.className = 'selected';
    telegramBtn.className = '';
    rocketchatBtn.className = '';
}

function showTelegram() {
    whatsappView.style.visibility = 'hidden';
    telegramView.style.visibility = 'visible';
    rocketchatView.style.visibility = 'hidden';

    whatsappBtn.className = '';
    telegramBtn.className = 'selected';
    rocketchatBtn.className = '';
}

function showRocketchat() {
    whatsappView.style.visibility = 'hidden';
    telegramView.style.visibility = 'hidden';
    rocketchatView.style.visibility = 'visible';

    whatsappBtn.className = '';
    telegramBtn.className = '';
    rocketchatBtn.className = 'selected';
}

whatsappBtn.addEventListener('click', showWhatsapp);
telegramBtn.addEventListener('click', showTelegram);
rocketchatBtn.addEventListener('click', showRocketchat);

showWhatsapp();
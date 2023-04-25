let profileOpen = document.querySelector('.profile__changer');
let popupClose = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup');
let inputName = document.querySelector('.popup__input_type_name');
let inputInfo = document.querySelector('.popup__input_type_info');

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function openPopup() {
  popupForm.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputInfo.value = profileStatus.textContent;
}

function closePopup() {
  popupForm.classList.remove('popup_opened');
  inputName.value = '';
  inputInfo.value = '';
}

profileOpen.addEventListener('click', function () {
  if (popupForm.classList.contains('popup_opened')) {
    return closePopup();
  } else {
    return openPopup();
  }
});

popupClose.addEventListener('click', function () {
  popupForm.classList.toggle('popup_opened');
});

popupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputInfo.value;
  closePopup();
});

let profileOpen = document.querySelector('.profile__changer');
let popupClose = document.querySelector('.popup__close');
let popupMain = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__inputs');
let inputName = document.querySelector('.popup__input_type_name');
let inputInfo = document.querySelector('.popup__input_type_info');

let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function openPopup() {
  popupMain.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputInfo.value = profileStatus.textContent;
}

function closePopup() {
  popupMain.classList.remove('popup_opened');
  inputName.value = '';
  inputInfo.value = '';
}

profileOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputInfo.value;
  closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit);

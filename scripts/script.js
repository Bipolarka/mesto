const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

const profileOpen = document.querySelector('.profile__changer');
const postAdd = document.querySelector('.profile__add');

const popupChangeProfile = document.querySelector('.popup_type_change-profile');
const popupAdd = document.querySelector('.popup_type_add-publication');
const popupPlace = document.querySelector('.popup_type_place');

const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];

const closeButtons = document.querySelectorAll('.popup__close');
const inputName = document.querySelector('.popup__input_type_name');
const inputInfo = document.querySelector('.popup__input_type_info');
const popupPhoto = popupPlace.querySelector('.popup__photo');
const popupDescription = popupPlace.querySelector('.popup__description');

const inputPlace = document.querySelector('.popup__input_type_place');
const inputPhoto = document.querySelector('.popup__input_type_photo');

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

const placeCardsParent = document.querySelector('.places__list');

// function togglePopUp(nameOfPopUp){
//     nameOfPopUp.classList.toggle('popup_opened');
// }
function openPopUp(popup) {
  popup.classList.add('popup_opened');
}
function closePopUp(popup) {
  popup.classList.remove('popup_opened');
}

profileOpen.addEventListener('click', function () {
  openPopUp(popupChangeProfile);
  inputName.value = profileName.textContent;
  inputInfo.value = profileStatus.textContent;
});

postAdd.addEventListener('click', function () {
  openPopUp(popupAdd);
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', function () {
    closePopUp(closeButton.closest('.popup'));
  });
});

function handleProfileFormSubmit(profileForm) {
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputInfo.value;
}

function handleCardFormSubmit(cardForm) {
  insertPublication(inputPlace.value, inputPhoto.value);
}

function initSubmitProfileForm(profileForm) {
  profileForm.addEventListener('submit', function (event) {
    event.preventDefault();
    handleProfileFormSubmit(profileForm);
    closePopUp(popupChangeProfile);
  });
}

function initSubmitCardForm(cardForm) {
  cardForm.addEventListener('submit', function (event) {
    event.preventDefault();
    handleCardFormSubmit(cardForm);
    event.target.reset();
    closePopUp(popupChangeProfile);
  });
}

initSubmitProfileForm(profileForm);
initSubmitCardForm(cardForm);

function makeLike(placeLike) {
  placeLike.addEventListener('click', function (event) {
    event.stopPropagation();
    placeLike.classList.toggle('place__like_active');
  });
}

function handleRemoveByClickBin(placeBin) {
  placeBin.addEventListener('click', function (event) {
    event.stopPropagation();
    const parent = placeBin.closest('.place');
    parent.remove();
  });
}

function viewPublication(publication, name, photo) {
  publication.addEventListener('click', function (event) {
    event.preventDefault();
    openPopUp(popupPlace);
    popupPhoto.src = photo;
    popupPhoto.alt = name;
    popupDescription.textContent = name;
  });
}

function createCard(name, photo) {
  const clone = document
    .querySelector('#template-place')
    .content.querySelector('.place')
    .cloneNode(true);
  const clonePhoto = clone.querySelector('.place__photo');
  clone.querySelector('.place__name').textContent = name;
  clonePhoto.src = photo;
  clonePhoto.alt = photo.replace(/^.*[\\\/]/, '');
  makeLike(clone.querySelector('.place__like'));
  handleRemoveByClickBin(clone.querySelector('.place__delete'));
  viewPublication(clone, name, photo);
  return clone;
}

function insertPublication(name, photo) {
  const card = createCard(name, photo);
  placeCardsParent.prepend(card);
}

function makeInitialCards(initialCards) {
  initialCards.forEach((item) => {
    insertPublication(item.name, item.link);
  });
}
makeInitialCards(initialCards);

import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const PHOTO_DESCRIPTIONS = [
  'Прыгать или нет? Напишите в коментарии свой совет и смотрите прямую трансляцию в перископе, задавайте свои вопросы!',
  'Вчера он на луну летал, сегодня в руки к нам попал.',
  'Соседи будут рады!',
  'Здесь могла быть ваша цитата о высоком и вечном',
  'Самая кубанская в мире!',
  'Где снег-то?',
  'Всем GM и взаимные лайки!'
];
const PHOTO_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENT_NAMES = [
  'Олег',
  'Мария',
  'Егор',
  'Валентин',
  'Эрнст',
  'Кристина',
  'Дарья',
  'Виола'
];
const PHOTO_COUNT = 25;

const generateId = () => {
  let id = 1;

  return () => id++;
};

const generateCommentId = generateId();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(PHOTO_COMMENTS),
  name: getRandomArrayElement(COMMENT_NAMES)
});

const createComments = () => Array.from({length: getRandomPositiveInteger(1, 3)}, createComment);

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: createComments()
});

const getPhotos = () => Array.from({length: PHOTO_COUNT}, (_item, index) => createPhoto(index + 1));

export {getPhotos};

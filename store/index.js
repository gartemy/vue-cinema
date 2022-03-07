export const state = () => ({
  isModalVisible: false,
  trailer: '',
  carouselData: [
    {
      id: 1,
      trailer: 'https://www.youtube.com/embed/V0hagz_8L3M',
      title: 'Человек-паук: Нет пути домой',
      carouselImg: 'spider-man1.webp',
      filmImg: 'spider-man.webp',
      country: 'США',
      genre: 'боевик',
      timing: '2 часа 30 минут',
      age: '12+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}
      ],
    },
    {
      id: 2,
      trailer: 'https://www.youtube.com/embed/_JqXO37znNU',
      title: 'Дом Gucci',
      carouselImg: 'gucci.webp',
      filmImg: 'gucci1.webp',
      country: 'США',
      genre: 'фантастика',
      timing: '2 часа 28 минут',
      age: '16+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}
      ]
    },
    {
      id: 3,
      trailer: 'https://www.youtube.com/embed/RkA5CjdkM8M',
      title: 'Матрица: Воскрешение',
      carouselImg: 'matrix1.webp',
      filmImg: 'matrix.webp',
      country: 'США',
      genre: 'драма',
      timing: '2 часа 28 минут',
      age: '18+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}
      ]
    },
  ],
  days: [{id: 1, week: 'Сегодня', date: '31 декабря', isActive: true},
    {id: 2, week: 'Завтра', date: '1 января', isActive: false},
    {id: 3, week: 'Воскресенье', date: '2 января', isActive: false},
    {id: 4, week: 'Понедельник', date: '3 января', isActive: false},
    {id: 5, week: 'Вторник', date: '4 января', isActive: false},
    {id: 6, week: 'Среда', date: '5 января', isActive: false},
    {id: 7, week: 'Четверг', date: '6 января', isActive: false}],
  films: [
    {
      id: 1,
      trailer: 'https://www.youtube.com/embed/eY9ZZyEc0CQ',
      title: 'Энканто',
      desktopImg: 'enkanto.webp',
      mobileImg: 'enkanto-mob.webp',
      country: 'США, Колумбия',
      genre: 'мультфильм',
      timing: '1 час 42 минуты',
      age: '6+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}
      ],
      isFavourite: false
    },
    {
      id: 2,
      trailer: 'https://www.youtube.com/embed/V0hagz_8L3M',
      title: 'Человек-паук: Нет пути домой',
      desktopImg: 'spider-man.webp',
      mobileImg: 'spider-man-mob.webp',
      country: 'США',
      genre: 'боевик',
      timing: '2 часа 30 минут',
      age: '12+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}
      ],
      isFavourite: false
    },
    {
      id: 3,
      trailer: 'https://www.youtube.com/embed/RkA5CjdkM8M',
      title: 'Матрица: Воскрешение',
      desktopImg: 'matrix.webp',
      mobileImg: 'matrix-mob.webp',
      country: 'США',
      genre: 'фантастика',
      timing: '2 часа 28 минут',
      age: '16+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}
      ],
      isFavourite: false
    },
    {
      id: 4,
      trailer: 'https://www.youtube.com/embed/_JqXO37znNU',
      title: 'Дом Gucci',
      desktopImg: 'gucci.webp',
      mobileImg: 'gucci-mob.webp',
      country: 'США',
      genre: 'драма',
      timing: '2 часа 28 минут',
      age: '18+',
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}],
      isFavourite: false
    }]
})

export const getters = {
  isModalVisible: isModalVisible => state.isModalVisible,
  trailer: trailer => state.trailer
}

export const mutations = {
  'SHOW_TRAILER'(state, trailer) {
    state.isModalVisible = true
    state.trailer = trailer
    document.querySelector('html').style.overflow = 'hidden'
  },
  'HIDE_TRAILER' (state) {
    state.isModalVisible = false
    document.querySelector('html').style.overflow = 'auto'
  },
  'ADD_FAVOURITE'(state, filmId) {
    const film = state.films.find(film => film.id === filmId)
    film.isFavourite = !film.isFavourite
  }
}




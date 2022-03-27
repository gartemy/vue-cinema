export const state = () => ({
  isMenuOpen: false,
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
      directors: 'Джаред Буш, Байрон Ховард, Чариз Кастро Смит',
      content: 'Удивительная семья Мадригаль живет в спрятанном в горах Колумбии волшебном доме, расположенном в чудесном и очаровательном уголке под названием Энканто. Каждого ребёнка в семье Мадригаль магия этого места благословила уникальным даром — от суперсилы до способности исцелять. Увы, магия обошла стороной одну лишь юную Мирабель. Обнаружив, что магия Энканто находится в опасности, Мирабель решает, что именно она может быть последней надеждой на спасение своей особенной семьи.',
      gallery: {
        main: 'enkanto/frame1.jpg',
        others: ['enkanto/frame2.jpg', 'enkanto/frame3.jpg']
      },
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
      directors: 'Джон Уоттс',
      actors: 'Том Холланд, Зендея Коулман, Бенедикт Камбербэтч, Энгаури Райс',
      content: 'Впервые в киноистории Человека-паука наш дружелюбный герой разоблачён. Теперь супергеройские подвиги стали неотделимы от его обычной жизни. Когда он просит помощи у Доктора Стрэнджа, ситуация только накаляется. И Питер Паркер начинает понимать, что такое быть Человеком-пауком на самом деле.',
      gallery: ['spider-man/frame1.jpg', 'spider-man/frame2.jpg', 'spider-man/frame3.jpg'],
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
      directors: 'Лана Вачовски',
      actors: 'Киану Ривз, Кэрри-Энн Мосс, Джонатан Грофф, Джада Пинкетт, Джессика Хенвик',
      content: 'Геймдизайнер Томас Андерсон сделал себе имя работой над трилогией игр «Матрица». Хотя окружающий мир периодически даёт сбои и обнажает свою истинную сущность, бывший Нео исправно посещает психотерапевта, принимает пилюли и практически убедил себя, что всё это — игра его воображения. Но однажды на него выходит хакерша Багз и предлагает снова следовать за белым кроликом.',
      gallery: {
        main: 'matrix/frame1.jpg',
        others: ['matrix/frame2.jpg', 'matrix/frame3.jpg']
      },
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
      directors: 'Ридли Скотт',
      actors: 'Адам Драйвер, Джаред Лето, Джереми Айронс, Леди Гага, Джек Хьюстон, Сальма Хайек, Аль Пачино, Камилль Коттен',
      content: 'Милан, 1978 год. Девушка из небогатой семьи Патриция Реджани на вечеринке знакомится с Маурицио Гуччи, нерешительным наследником знаменитого модного дома. Несмотря на неодобрение его отца Родольфо и отлучение от финансирования, молодые люди женятся. Но дядя Маурицио, второй владелец империи Альдо Гуччи, хочет наладить семейные отношения, и Патриция, пользуясь советами и наущениями телевизионной гадалки, решает извлечь из этой ситуации максимальную выгоду.',
      gallery: {
        main: 'gucci/frame1.jpg',
        others: ['gucci/frame2.jpg', 'gucci/frame3.jpg']
      },
      schedule: [
        {id: 1, time: '10:35', price: '190 ₽'},
        {id: 2, time: '10:35', price: '190 ₽'},
        {id: 3, time: '10:35', price: '190 ₽'},
        {id: 4, time: '10:35', price: '190 ₽'},
        {id: 5, time: '10:35', price: '190 ₽'},
        {id: 6, time: '10:35', price: '190 ₽'},
        {id: 7, time: '10:35', price: '190 ₽'}],
      isFavourite: false
    }],
  stocks: [
    {id: 1, img: 'stocks/pushkin.jpg', title: 'Пушкинская карта', description: 'Оплачивайте билеты на фильмы, одобренные Министерством культуры РФ'},
    {id: 2, img: 'stocks/bonus.jpg', title: 'Кинобонусы', description: 'Получайте больше за свою любовь к кино'},
    {id: 3, img: 'stocks/pensioners.jpg', title: 'Скидки для пенсионеров'},
    {id: 4, img: 'stocks/students.jpg', title: 'Скидки для школьников и студентов'}
  ],
  news: [
    {id: 1, img: '', title: 'Иностранные фильмы только у нас!', date: '21.03.2022'},
    {id: 2, img: '', title: 'Смотри "Энканто" и выиграй приз', date: '25.02.2022'},
    {id: 3, img: '', title: 'Бонусная карта', date: '01.01.2022'}
  ]
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




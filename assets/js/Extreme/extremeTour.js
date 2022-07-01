const extremeTourData =
    [
        {
            id: 1,
            mainTitle: 'Полёт на параплане',
            textIntro: 'Продолжительность полета  20-25 минут',
            daysNumber: 3,
            day: 'часа',
            kilometersNumber: '∞',
            hikeDifficulty: 1,
            maximumSeats: 5,
            priceAdult: 7000,
            priceKid: '--',
            restrictions: [
                'Ваш вес не должен превышать 100 кг',
                'Полеты осуществляются по погоде, о ее изменении вас проинформируют либо вечером перед полетом, либо рано утром',
                'К полетам допускаются дети с 14-ти лет, дети младше 14-ти только по договоренности с родителями',
                'Не допускаются к полету пассажиры в состоянии измененного сознания, алкогольного опьянения!',
                'Не рекомендуется обильно кушать перед полетом. Если вас укачивает в транспорте - возьмите с собой таблетки от укачивания',
                'Форма одежды - спортивная, обязательно возьмите с собой ветровку.'
            ],
            tourDescription: [
                'Гора Мамзышха в Абхазии популярна не только своими видами, но и тем что отсюда можно спуститься на параплане прямо на пляж в Гагре. Головокружительный полет в тандеме с опытным инструктором на высоте 1500 метров над уровнем моря для любителей экстрима. Все побережье Гагры как на ладони.',
                'По вашему желанию возможно исполнение пилотом сложных трюков и вращений, а также можете самостоятельно поуправлять парапланом в конце полета под чутким руководством инструктора.',
                'Продолжительность полета  20-25 минут.'
            ],
            includedPrice: [
                'трансфер от санатория “Нарт” до стартовой площадки',
                'полет с инструктором',
                'аренда снаряжения'
            ],
            notIncludedPrice: [
                'трансфер до санатория “Нарт”',
                'видео/фото съемка с GoPro (по желанию 1500р)'
            ]
        },
        {
            id: 2,
            mainTitle: 'Рафтинг в Кодорском ущелье',
            textIntro: 'Старт из Сухума в 9.00, возврат - 17.00',
            daysNumber: 8,
            day: 'часов',
            kilometersNumber: 25,
            hikeDifficulty: 1,
            maximumSeats: 10,
            priceAdult: 4000,
            priceKid: '--',
            restrictions: [
                'Ограничение по возрасту - от 16 лет',
                'Ограничение по весу - до 100 кг',
                'Умение плавать - ОБЯЗАТЕЛЬНО',
                'Форма одежды - спортивная, обязательно возьмите с собой сменную одежду, сухим из воды еще никто не выходил'
            ],
            tourDescription: [
                'Друзья, предлагаем вам отправится с нами в увлекательный сплав по реке Кодор.',
                'Для прохождения данного участка реки, специальной подготовки не требуется. С вами находится опытный гид-инструктор, который руководит действиями команды.',
                'Сплав стартует от Багадских скал в Кодорском ущельем. Дорога до места старта проходит через живописные долины Цебельдинского нагорья с остановкой к Барьяльского водопада. Остановка на обед на берегу реки Кодор после прохождения первой половины маршрута.',
                'Место финиша деревня Владимировка (г.Дранда).',
                'Мы принимаем как индивидуальные так и групповые заявки на сплав. Количество мест в рафте от 7 до 10 человек.'
            ],
            includedPrice: [
                'Трансфер до точки выхода на сплав',
                'Чай/кофе в кемпинге',
                'Аренда снаряжения',
                'Обед на маршруте'
            ],
            notIncludedPrice: [
                'Трансфер до Сухума (цена зависит от вашего местонахождения, от 200 до 500р с человека)'
            ]
        }
    ]

const extremeGalleryData =
    [
        {
            id: 1,
            data: [
                {
                    link: 'images/extreme/extreme_1/02.jpg',
                    image: 'images/extreme/extreme_1/02.jpg'
                },
                {
                    link: 'images/extreme/extreme_1/03.jpg',
                    image: 'images/extreme/extreme_1/03.jpg'
                },
                {
                    link: 'images/extreme/extreme_1/04.jpg',
                    image: 'images/extreme/extreme_1/04.jpg'
                },
                {
                    link: 'images/extreme/extreme_1/05.jpg',
                    image: 'images/extreme/extreme_1/05.jpg'
                },
                {
                    link: 'images/extreme/extreme_1/06.jpg',
                    image: 'images/extreme/extreme_1/06.jpg'
                },
                {
                    link: 'images/extreme/extreme_1/07.jpg',
                    image: 'images/extreme/extreme_1/07.jpg'
                },
                {
                    link: 'images/extreme/extreme_1/08.jpg',
                    image: 'images/extreme/extreme_1/08.jpg'
                }
            ]
        },
        {
            id: 2,
            data: [
                {
                    link: 'images/extreme/extreme_2/02.jpg',
                    image: 'images/extreme/extreme_2/02.jpg'
                },
                {
                    link: 'images/extreme/extreme_2/03.jpg',
                    image: 'images/extreme/extreme_2/03.jpg'
                },
                {
                    link: 'images/extreme/extreme_2/04.jpg',
                    image: 'images/extreme/extreme_2/04.jpg'
                },
                {
                    link: 'images/extreme/extreme_2/05.jpg',
                    image: 'images/extreme/extreme_2/05.jpg'
                },
                {
                    link: 'images/extreme/extreme_2/06.jpg',
                    image: 'images/extreme/extreme_2/06.jpg'
                }
            ]
        }
    ]

const getTourTitle = (data) => {
    return `<header class="major">
                <h1>${data.mainTitle}</h1>
            </header>
            <div class="content">
                <p>${data.textIntro}</p>
            </div>`
}

const getTourDescription = (data) => {
    return `<section class="tour-icons">
                <div class="tour-item">
                    <h5>Длительность</h5>
                    <div class="tour-days">
                        <p class="icon solid fa-calendar-day"></p>
                        <p>${data.daysNumber}</p>
                        <p>${data.day}</p>
                    </div>
                </div>
                <div class="tour-item">
                    <h5>Длина</h5>
                    <div class="tour-days">
                        <p class="icon solid fa-route"></p>
                        <p>${data.kilometersNumber}</p>
                        <p>км</p>
                    </div>
                </div>
                <div class="tour-item">
                    <h5>Сложность</h5>
                    <div class="tour-days">
                        <p class="icon solid fa-hiking"></p>
                        <p>${data.hikeDifficulty}</p>
                        <p>/5</p>
                    </div>
                </div>
                <div class="tour-item">
                    <h5>Максимум мест</h5>
                    <div class="tour-days">
                        <p class="icon solid fa-users"></p>
                        <p>${data.maximumSeats}</p>
                        <p>чел</p>
                    </div>
                </div>
                <div class="tour-item">
                    <h5>Цена взрослый</h5>
                    <div class="tour-days">
                        <p class="icon solid fa-user"></p>
                        <p>${data.priceAdult}</p>
                        <p>₽</p>
                    </div>
                </div>
                <div class="tour-item">
                    <h5>Цена детский</h5>
                    <div class="tour-days">
                        <p class="icon solid fa-child"></p>
                        <p>${data.priceKid}</p>
                        <p>₽</p>
                    </div>
                </div>
            </section>`
}

const getTourText = (data) => {
    let summary = data.restrictions.reduce((tips, tip) => {
        tips += `<li>${tip}</li>`
        return tips
    }, '')

    let summaryIncludedPrice = data.includedPrice.reduce((tips, tip) => {
        tips += `<li>${tip}</li>`
        return tips
    }, '')

    let summaryNotIncludedPrice = data.notIncludedPrice.reduce((tips, tip) => {
        tips += `<li>${tip}</li>`
        return tips
    }, '')

    let text = ''
    for (let i = 0; i < data.tourDescription.length; i++) {
        text += `<li style="margin-bottom:1rem">${data.tourDescription[i]}</li>`
    }

    return `<ul class="take-with"> Ограничения: 
                ${summary} 
           </ul>
           <ul style="list-style-type:none;">
                ${text}
           </ul>
           <ul class="jeeping-list"> Что входит в стоимость: 
                ${summaryIncludedPrice} 
           </ul>
           <ul class="jeeping-list"> Что не входит в стоимость: 
                ${summaryNotIncludedPrice} 
           </ul>`
}

const addExtremeGallery = (id) => {
    let carouselData = extremeGalleryData.find(item => item.id === Number(id))
    let images = carouselData.data.map(item => {
        return `<article>
                    <a href=${item.link} class="image">
                        <img src=${item.image} alt="" />
                    </a>
                    <div class="caption">
                        <ul class="actions fixed">
                            <li><span class="button small">Увеличить</span></li>
                        </ul>
                    </div>
                </article>`
    })

    let gallery = document.getElementById('extremeGallery');
    gallery.innerHTML = images.toString().replaceAll('</article>,', '</article>');
}

const addTourInformation = () => {
    let id = localStorage.getItem("dikohodExtreme");
    let tour = extremeTourData.find(item => item.id === Number(id));
    let title = document.getElementById('extremeTourTitle');
    let iconsInformation = document.getElementById('extremeTourIcons');
    let text = document.getElementById('extremeTourText');
    title.innerHTML = getTourTitle(tour);
    iconsInformation.innerHTML = getTourDescription(tour);
    text.innerHTML = getTourText(tour);
    addExtremeGallery(id);
}

addTourInformation();
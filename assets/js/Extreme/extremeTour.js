const extremeTourData =
    [
        {
            id: 1,
            mainTitle: 'Полёт на параплане',
            textIntro: 'Продолжительность полета 20-25 минут',
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
        },
        {
            id: 3,
            mainTitle: 'Прогулки на квадроциклах',
            textIntro: 'Продолжительность тура 1.5 часа',
            daysNumber: 1.5,
            day: 'часа',
            kilometersNumber: 10,
            hikeDifficulty: 1,
            maximumSeats: 10,
            priceAdult: 5000,
            priceKid: '--',
            restrictions: [
                'Ограничение по возрасту - от 14 лет',
                'Ограничение по весу - до 100 кг',
                'Форма одежды - спортивная. Не забудьте солнцезащитный крем!'
            ],
            tourDescription: [
                'Прогулки на квадроциклах по горной местности в сопровождении гида-инструктора. По дороге мы посетим мандариновые плантации, эвкалиптовую рощу и гималайские сосны. Остановки для фотографий в самых живописных местах!',
                'Цена указана за квадроцикл на 2 места.'
            ],
            includedPrice: [
                'Трансфер до точки начала маршрута (забираем со всех городов Абхазии, либо с границы со стороны Абхазии)',
                'Аренда снаряжения',
                'Услуги инструктора'
            ],
            notIncludedPrice: [
                'Трансфер до Сухума (цена зависит от вашего местонахождения, от 200 до 500р с человека)'
            ]
        },
        {
            id: 4,
            mainTitle: 'Рафтинг по реке Бзыбь',
            textIntro: 'Продолжительность тура 6 часов',
            daysNumber: 6,
            day: 'часов',
            kilometersNumber: 11,
            hikeDifficulty: 1,
            maximumSeats: 10,
            priceAdult: 2500,
            priceKid: '--',
            restrictions: [
                'Ограничение по возрасту - от 14 лет',
                'Ограничение по весу - до 100 кг',
                'Умение плавать - ОБЯЗАТЕЛЬНО',
                'Форма одежды - спортивная, обязательно возьмите с собой сменную одежду, сухим из воды еще никто не выходил'
            ],
            tourDescription: [
                'Хочешь испытать настоящий восторг и адреналин, покорить бурный поток горной реки, увидеть красивые пейзажи и наполнить отдых яркими воспоминаниями? Тогда тебе обязательно надо отправиться с нами в незабываемый сплав по горной реке Бзыбь.',
                'Безопасность гарантируем!'
            ],
            includedPrice: [
                'Трансфер до точки начала маршрута (забираем со всех городов Абхазии, либо с границы со стороны Абхазии)',
                'Аренда снаряжения',
                'Услуги инструктора'
            ],
            notIncludedPrice: [
                'Трансфер до Сухума (цена зависит от вашего местонахождения, от 200 до 500р с человека)'
            ]
        },
        {
            id: 5,
            mainTitle: 'Роупджампинг',
            textIntro: 'Продолжительность тура 6 часов',
            daysNumber: 6,
            day: 'часов',
            kilometersNumber: '--',
            hikeDifficulty: 1,
            maximumSeats: 10,
            priceAdult: 6000,
            priceKid: '--',
            restrictions: [
                'Ограничение по возрасту - от 16 лет',
                'Ограничение по весу - до 100 кг',
                'Форма одежды - спортивная'
            ],
            tourDescription: [
                'Любишь острые ощущения и экстрим? Тогда роупджампинг (прыжки с отвесных скал или водопадов) то что тебе нужно!',
                'На выбор два варианта места прыжка - Шакуранский водопад или Джампальский каньон.',
                'У нас только сертифицированные инструктора. Приоритетом является безопасность прыгающего, поэтому мы используем только качественное, прошедшее сертификацию оборудование. Вы не только получите незабываемые ощущения от прыжка, но и увидите уникальную красоту горной Абхазии и сможете отдохнуть в нашем уютном кемпинге.',
                'Если вы самостоятельно добираетесь до нашей базы, стоимость прыжка 4000р.'
            ],
            includedPrice: [
                'Трансфер до места прыжка и обратно',
                'Прыжок',
                'Аренда снаряжения (страховочная система, каска)'
            ],
            notIncludedPrice: [
                'Дополнительный прыжок в тот же день - 1500р'
            ]
        },
        {
            id: 6,
            mainTitle: 'Экстремальный SUP-тур по каньону Хашупсе',
            textIntro: 'Продолжительность тура 2 - 2.5 часа',
            daysNumber: 2.5,
            day: 'часов',
            kilometersNumber: 25,
            hikeDifficulty: 1,
            maximumSeats: 10,
            priceAdult: 6000,
            priceKid: '--',
            restrictions: [
                'Ограничение по возрасту - от 16 лет',
                'Ограничение по весу - до 100 кг',
                'Умение плавать - ОБЯЗАТЕЛЬНО',
                'Форма одежды - спортивная, обязательно возьмите с собой сменную одежду, сухим из воды еще никто не выходил'
            ],
            tourDescription: [
                'До начала маршрута мы едем по грунтовой горной дороге. Затем переодеваемся в гидрокостюмы, берем рюкзаки с сапами 10-12 кг и идём примерно 1.5 км вдоль реки.',
                'У слияния двух рек, накачиваем сапы и начинаем движение вниз по реке. Далее будем сам каньон Хашупсе. После каньона начинается бурная вода с многочисленными порогами.'
            ],
            includedPrice: [
                'Трансфер к началу маршрута и обратно (забираем со всех городов Абхазии, либо с границы со стороны Абхазии)',
                'Аренда снаряжения (гидрокостюм, гидро-ботинки, шлем, защитные чехлы на телефоны',
                'Перекус (чай со сладостями)',
                'Услуги инструктора'
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
        },
        {
            id: 3,
            data: [
                {
                    link: 'images/extreme/extreme_3/02.jpg',
                    image: 'images/extreme/extreme_3/02.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/03.jpg',
                    image: 'images/extreme/extreme_3/03.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/04.jpg',
                    image: 'images/extreme/extreme_3/04.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/05.jpg',
                    image: 'images/extreme/extreme_3/05.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/06.jpg',
                    image: 'images/extreme/extreme_3/06.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/07.jpg',
                    image: 'images/extreme/extreme_3/07.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/08.jpg',
                    image: 'images/extreme/extreme_3/08.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/09.jpg',
                    image: 'images/extreme/extreme_3/09.jpg'
                },
                {
                    link: 'images/extreme/extreme_3/10.jpg',
                    image: 'images/extreme/extreme_3/10.jpg'
                }
            ]
        },
        {
            id: 4,
            data: [
                {
                    link: 'images/extreme/extreme_4/02.jpg',
                    image: 'images/extreme/extreme_4/02.jpg'
                },
                {
                    link: 'images/extreme/extreme_4/03.jpg',
                    image: 'images/extreme/extreme_4/03.jpg'
                },
                {
                    link: 'images/extreme/extreme_4/04.jpg',
                    image: 'images/extreme/extreme_4/04.jpg'
                },
                {
                    link: 'images/extreme/extreme_4/05.jpg',
                    image: 'images/extreme/extreme_4/05.jpg'
                },
                {
                    link: 'images/extreme/extreme_4/06.jpg',
                    image: 'images/extreme/extreme_4/06.jpg'
                },
                {
                    link: 'images/extreme/extreme_4/07.jpg',
                    image: 'images/extreme/extreme_4/07.jpg'
                },
                {
                    link: 'images/extreme/extreme_4/08.jpg',
                    image: 'images/extreme/extreme_4/08.jpg'
                }
            ]
        },
        {
            id: 5,
            data: [
                {
                    link: 'images/extreme/extreme_5/02.jpg',
                    image: 'images/extreme/extreme_5/02.jpg'
                },
                {
                    link: 'images/extreme/extreme_5/03.jpg',
                    image: 'images/extreme/extreme_5/03.jpg'
                },
                {
                    link: 'images/extreme/extreme_5/04.jpg',
                    image: 'images/extreme/extreme_5/04.jpg'
                },
                {
                    link: 'images/extreme/extreme_5/05.jpg',
                    image: 'images/extreme/extreme_5/05.jpg'
                }
            ]
        },
        {
            id: 6,
            data: [
                {
                    link: 'images/extreme/extreme_6/02.jpg',
                    image: 'images/extreme/extreme_6/02.jpg'
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
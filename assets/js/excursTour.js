const excursTourData =
    [
        {
            id: 1,
            mainTitle: 'Новый Афон. Святыни Абхазии',
            textIntro: '',
            daysNumber: 8,
            day: 'часов',
            hikeDifficulty: 1,
            maximumSeats: 15,
            priceAdult: 1800,
            priceKid: 1400,
            takeWith: ['небольшой сытный перекус (или же по желанию можно будет перекусить в кафе(апацхе) на маршруте', 'маршрут более экскурсионный, чем походный - однако наличие удобной, нескользкой обуви обязательно!', 'питьевая вода - 1 литр не более. Т.к. у нас на пути будет источник и не один. Ветровка, штормовка - лишними не будут. Это горы. В распадке тихо и безветренно, поднялись на крепость - а тут ветер и свежо.'],
            tourDescription: ['На комфортабельном автомобиле мы отправляемся в Новый Афон. По предварительной договоренности решаем в каком городе Абхазии вы находитесь и где удобнее вас забрать. Мы посетим православную жемчужину Абхазии - Новоафонский монастырь, пройдем по тропе грешников, насладимся красотой новоафонского водопада. Далее наш путь лежит на заброшенную станцию Псцырха. В данный момент станция не действует и является туристической достопримечательностью, но железнодорожные пути, проходящие через станцию, до сих пор эксплуатируются, поезд проходит без остановки на станции. Направляемся к пещерной отшельнической келье Симона Кананита – одного из апостолов Иисуса Христа, который по преданиям закончил свой жизненный путь в Новом Афоне. Посетив пещерную келью и лобное место Симона Кананита мы поднимемся на Анакопийскую крепость, которая находится на вершине Иверской горы. Оттуда открывается фантастический вид на Новый Афон с высоты птичьего полета. Внутри крепости и рядом с ее стенами можно увидеть развалины нескольких древнехристианских храмов. В одном из них, храме Феодора Тирона, веками хранилась чудотворная икона Пресвятой Богородицы. Здесь же находится и непересыхаемый святой колодец, где вода всегда держится на одном уровне, даже в самые засушливые годы. Насладившись видами Нового Афона и спустившись с вершины горы, возвращаемся.']
        }
    ]

const excursionGalleryData =
    [
        {
            id: 1,
            data: [
                {
                    link: 'images/excursions/excurs_1/02.jpg',
                    image: 'images/excursions/excurs_1/02.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/03.jpg',
                    image: 'images/excursions/excurs_1/03.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/04.jpg',
                    image: 'images/excursions/excurs_1/04.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/05.jpg',
                    image: 'images/excursions/excurs_1/05.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/06.jpg',
                    image: 'images/excursions/excurs_1/06.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/07.jpg',
                    image: 'images/excursions/excurs_1/07.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/08.jpg',
                    image: 'images/excursions/excurs_1/08.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/09.jpg',
                    image: 'images/excursions/excurs_1/09.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/10.jpg',
                    image: 'images/excursions/excurs_1/10.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/11.jpg',
                    image: 'images/excursions/excurs_1/11.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/12.jpg',
                    image: 'images/excursions/excurs_1/12.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/13.jpg',
                    image: 'images/excursions/excurs_1/13.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/14.jpg',
                    image: 'images/excursions/excurs_1/14.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/15.jpg',
                    image: 'images/excursions/excurs_1/15.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/16.jpg',
                    image: 'images/excursions/excurs_1/16.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/17.jpg',
                    image: 'images/excursions/excurs_1/17.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/18.jpg',
                    image: 'images/excursions/excurs_1/18.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/19.jpg',
                    image: 'images/excursions/excurs_1/19.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/20.jpg',
                    image: 'images/excursions/excurs_1/20.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/21.jpg',
                    image: 'images/excursions/excurs_1/21.jpg'
                },
                {
                    link: 'images/excursions/excurs_1/22.jpg',
                    image: 'images/excursions/excurs_1/22.jpg'
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
    let summary = data.takeWith.reduce((tips, tip) => {
        tips += `<li>${tip}</li>`
        return tips
    }, '')

    let text = ''
    for (let i = 0; i < data.tourDescription.length; i++){
        text += `<li style="margin-bottom:1rem">${data.tourDescription[i]}</li>`
    }

    return `<ul class="take-with"> Что взять с собой: 
                ${summary} 
           </ul>
           <ul style="list-style-type:none;">
                ${text}
           </ul>`
}

const addExcursionGallery = (id) => {
    let carouselData = excursionGalleryData.find(item => item.id === Number(id))
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

    let gallery = document.getElementById('excursionGallery');
    gallery.innerHTML = images.toString().replaceAll('</article>,', '</article>');
}

const addTourInformation = () => {
    let id = localStorage.getItem("dikohodExcursions");
    let tour = excursTourData.find(item => item.id === Number(id));
    let title = document.getElementById('excursTourTitle');
    let iconsInformation = document.getElementById('excursTourIcons');
    let text = document.getElementById('excursTourText');
    title.innerHTML = getTourTitle(tour);
    iconsInformation.innerHTML = getTourDescription(tour);
    text.innerHTML = getTourText(tour);
    addExcursionGallery(id);
}

addTourInformation();
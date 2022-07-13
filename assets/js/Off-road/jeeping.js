const jeepingData =
    [
        {
            id: 1,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_1/01.jpg',
            title: 'Гегский водопад. Рицинский национальный заповедник',
            text: 'Водопады "Девичьи и Мужские слезы", Голубое озеро, Гегский водопад, Юпшарский каньон, озеро Рица, смотровая "Прощай Родина", 2-я смотровая озера Рица, дача Сталина(за доп. плату). Бесплатная дегустация меда и вина. (Cбор за КПП - 700 р. включен в стоимость)',
            price: 2500
        },
        {
            id: 2,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_2/01.jpg',
            title: 'Затерянный мир - Акармара. Водопады восточной Абхазии',
            text: 'Обзорная экскурсия по затерянному шахтерскому городу – Акармара. Экстремальный подъем на джипе на водопады "Святой" - 38 м, "Ирина" - 40 м и "Великан" - 100м. Посещение термального природного источника (по желанию - 200 р.). Форма одежды спортивная. (Входные билеты на водопады включены в стоимость).',
            price: 3500
        },
        {
            id: 3,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_3/01.jpg',
            title: 'Совершенный мир. Долина 7 озёр, 2500м над уровнем моря',
            text: 'Джип-тур в Долину 7 озёр - это невероятный дивный мир величественной и неповторимой абхазской природы. Здесь потрясающе красиво, а кристально чистый воздух просто кружит голову! Это дикий уголок, оплот гармонии и вдохновения вдали от суеты цивилизованного мира.',
            price: 3500
        },
        {
            id: 4,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_4/01.jpg',
            title: 'Вершина горы Мамзышха, 1873м над уровнем моря',
            text: 'Джип-тур на вершину Мамзышхи (1873м) это невероятно красивый, захватывающий дух, маршрут с видами на горы и море. Пешая часть маршрута не сложная и доступна для туристов любого возраста и уровня физической подготовки.',
            price: 2000
        },
        {
            id: 5,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_5/01.jpg',
            title: 'Альпийские луга - 2200м над уровнем моря. Ледниковое озеро Мзы',
            text: 'Водопады "Девичьи и Мужские слезы", Голубое озеро, Юпшарский каньон, озеро Рица, минеральный источник Ауадхара, альпийские луга и пеший маршрут 5 км или на лошадях (за доп. плату). Бесплатная дегустация меда и вина, пикник на озере Мзы. Форма одежды – спортивная. (Сбор за КПП - 700 р., включен в стоимость)',
            price: 3500
        }
    ]

const addJeepingCards = () => {

    let cards = jeepingData.map(item => {
        return `<section class="hiking-card">
                    	<a class="image" href=${item.link}>
                        	<img data-id=${item.id} src=${item.image} alt="" data-position="center center"/>
                    	</a>
                    	<div class="content">
                        	<div class="inner card-item">
                            	<header class="major">
                            	    <a class="tour-link" href=${item.link}>
                            	        <h3 data-id=${item.id}>${item.title}</h3>
                            	    </a>
                            	</header>
                            	<p>${item.text}</p>
                            	<p class="hiking-price">${item.price} ₽</p>
                        	</div>
                    	</div>
                	</section>`
    })

    let jeepingCards = document.getElementById('jeepingCards');
    jeepingCards.innerHTML = cards.toString().replaceAll('</section>,', '</section>');
}

addJeepingCards();

const addOnClick = (selector) => {
    let elements = document.querySelectorAll(selector);
    for (let item of elements) {
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodJeepTour', id);
        })
    }

}

addOnClick('a.image img');
addOnClick('.hiking-card .major a h3');
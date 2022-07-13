const extremeData =
    [
        {
            id: 1,
            link: 'extremeTour.html',
            image: 'images/extreme/extreme_1/01.jpg',
            title: 'Полёт на параплане',
            text: 'Головокружительный полет с опытным инструктором на высоте 1500 метров над уровнем моря для любителей экстрима. Гора Мамзышха в Абхазии популярна не только своими видами, но и тем, что отсюда можно спуститься на параплане. Время полета 20-25 минут, приземление на пляже в городе Гагра.',
            price: 7000
        },
        {
            id: 2,
            link: 'extremeTour.html',
            image: 'images/extreme/extreme_2/01.jpg',
            title: 'Рафтинг в Кодорском ущелье',
            text: 'Увлекательный сплав по горной реке Кодор. Для прохождения данного участка реки специальной подготовки не требуется. С вами находится опытный гид-инструктор, который руководит действиями команды. Протяженность - 25 км, длительность - 8 часов. Ограничение по возрасту - от 16 лет. Ограничение по весу - до 100 кг. Умение плавать – обязательно.',
            price: 4000
        },
        {
            id: 3,
            link: 'extremeTour.html',
            image: 'images/extreme/extreme_3/01.jpg',
            title: 'Прогулки на квадроциклах',
            text: 'Прогулки на квадроциклах по горной местности в сопровождении гида-инструктора. По дороге мы посетим мандариновые плантации, эвкалиптовую рощу и гималайские сосны.',
            price: 5000
        },
        {
            id: 4,
            link: 'extremeTour.html',
            image: 'images/extreme/extreme_4/01.jpg',
            title: 'Рафтинг по реке Бзыбь',
            text: 'Хочешь испытать настоящий восторг и адреналин, покорить бурный поток горной реки, увидеть красивые пейзажи и наполнить отдых яркими воспоминаниями? Тогда тебе обязательно надо отправиться с нами в незабываемый сплав по горной реке Бзыбь. Безопасность гарантируем!',
            price: 2500
        },
        {
            id: 5,
            link: 'extremeTour.html',
            image: 'images/extreme/extreme_5/01.jpg',
            title: 'Роупджампинг',
            text: 'Любишь острые ощущения и экстрим? Тогда роупджампинг (прыжки с отвесных скал или водопадов) то что тебе нужно! На выбор два варианта места прыжка: Шакуранский водопад или Джампальский каньон.',
            price: 6000
        },
        {
            id: 6,
            link: 'extremeTour.html',
            image: 'images/extreme/extreme_6/01.jpg',
            title: 'Экстремальный SUP-тур по каньону Хашупсе',
            text: 'На выбор два варианта места прыжка: Шакуранский водопад или Джампальский каньон.',
            price: 6000
        }
    ]

const addExtremeCards = () => {

    let cards = extremeData.map(item => {
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

    let extremeCards = document.getElementById('extremeCards');
    extremeCards.innerHTML = cards.toString().replaceAll('</section>,', '</section>');
}

addExtremeCards();

const addOnClick = (selector) => {
    let elements = document.querySelectorAll(selector);
    for (let item of elements) {
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodExtreme', id);
        })
    }

}

addOnClick('a.image img');
addOnClick('.hiking-card .major a h3');
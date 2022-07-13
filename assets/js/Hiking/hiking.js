const hikingData =
    [
        {
            id: 1,
            link: 'hikingTour.html',
            image: 'images/tour/hike_1/01.jpg',
            title: 'Красоты урочища Хабю',
            text: 'Ачандарские водопады, многовековые платаны,пещера Хабю – трехдневный поход для любого уровня физической подготовки, отлично подойдет для тех, кто решился отправиться в многодневку с рюкзаком в первый раз!',
            textItalic: 'Перепады высот от 200 до 1200м над уровнем моря',
            price: 7000
        },
        {
            id: 2,
            link: 'hikingTour.html',
            image: 'images/tour/hike_2/01.jpg',
            title: 'Гегский водопад - Пшегишхва - Рица',
            text: 'Настоящее приключение для любителей пешего туризма. Полная перезагрузка и единение с природой. Трехдневный маршрут — Гегский водопад-река Гега-Вершина горы Пшегишхва-озера Малая и Большая Рица.',
            textItalic: 'Перепады высот от 200 до 2300м над уровнем моря',
            price: 8800
        },
        {
            id: 3,
            link: 'hikingTour.html',
            image: 'images/tour/hike_3/01.jpg',
            title: 'Дикие тропы урочища Хипста',
            text: '4 дня экстремального восхождения, только для опытных походников с хорошей физической подготовкой!',
            textItalic: 'Перепады высот от 200 до 2400м над уровнем моря',
            price: 9000
        }
    ]

const addHikingCards = () => {

    let cards = hikingData.map(item => {
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
                            	<p style="font-style: italic">${item.textItalic}</p>
                            	<p class="hiking-price">${item.price} ₽</p>
                        	</div>
                    	</div>
                	</section>`
    })

    let hikingCards = document.getElementById('hikingCards');
    hikingCards.innerHTML = cards.toString().replaceAll('</section>,', '</section>');
}

addHikingCards();

const addOnClick = (selector) => {
    let elements = document.querySelectorAll(selector);
    for (let item of elements) {
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodTour', id);
        })
    }

}

addOnClick('a.image img');
addOnClick('.hiking-card .major a h3');
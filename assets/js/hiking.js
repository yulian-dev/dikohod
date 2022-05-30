const hikingData =
    [
        {
            id: 1,
            link: 'tour.html',
            image: 'images/tour/hike_1/01.jpg',
            title: 'Красоты урочища Хабю',
            text: 'Перепады высот от 200 до 1200м над уровнем моря',
            price: 7000
        },
        {
            id: 2,
            link: 'tour.html',
            image: 'images/tour/hike_2/01.jpg',
            title: 'Гегский водопад-Пшегишхва-Рица',
            text: 'Настоящее приключение для любителей пешего туризма. Полная перезагрузка и единение с природой. Трехдневный маршрут — Гегский водопад-река Гега-Вершина горы Пшегишхва-озера Малая и Большая Рица.',
            price: 8800
        },
        {
            id: 3,
            link: 'tour.html',
            image: 'images/tour/hike_3/01.jpg',
            title: 'Дикие тропы урочища Хипста',
            text: 'Перепады высот от 200 до 2400м над уровнем моря',
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
                                	<h3>${item.title}</h3>
                            	</header>
                            	<p>${item.text}</p>
                            	<p class="hiking-price">${item.price} ₽</p>
                        	</div>
                    	</div>
                	</section>`
    })

    let hikingCards = document.getElementById('hikingCards');
    hikingCards.innerHTML = cards.toString().replaceAll('</section>,', '</section>');
}

addHikingCards();

const addOnClick = () => {
    let images = document.querySelectorAll('a.image img');
    for(let item of images){
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodTour', id);
        })
    }
}

addOnClick();
const jeepingData =
    [
        {
            id: 1,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_1/01.jpg',
            title: 'Гегский водопад. Рицинский национальный заповедник',
            text: 'Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.',
            price: 2300
        },
        {
            id: 2,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_2/01.jpg',
            title: 'Водопады восточной Абхазии. Затерянный город Акармара',
            text: 'Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.',
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
            price: 1800
        },
        {
            id: 5,
            link: 'jeepTour.html',
            image: 'images/jeepTours/tour_5/01.jpg',
            title: 'Озеро Мзы. Альпийские луга, 2200м над уровнем моря',
            text: 'Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.',
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
                                	<h3>${item.title}</h3>
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

const addOnClick = () => {
    let images = document.querySelectorAll('a.image img');
    for(let item of images){
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodJeepTour', id);
        })
    }
}

addOnClick();
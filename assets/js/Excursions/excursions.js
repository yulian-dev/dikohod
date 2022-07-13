const excursionData =
    [
        {
            id: 1,
            link: 'excursTour.html',
            image: 'images/excursions/excurs_1/01.jpg',
            title: 'Новый Афон. Святыни Абхазии',
            text: 'Мужской монастырь, храм Св.Пантелеймона, рукотворный водопад, храм Х в. и келья Симона Канонита, Анакопийская крепость, Иверская гора, святой источник, лебединое озеро, Новоафонская пещера (за доп. плату - 700 р. взрослый, детский от 8 до 16 – 200 р., детям до 8 лет БЕСПЛАТНО)',
            price: 1800
        },
        {
            id: 2,
            link: 'excursTour.html',
            image: 'images/excursions/excurs_2/01.jpg',
            title: 'Рицинский национальный парк',
            text: 'Водопады "Девичьи и Мужские слезы", Голубое озеро, Юпшарский каньон, озеро Рица - полный обзор, смотровая "Прощай Родина". Водопады "Молочный" и "Птичий" за доп. плату, по желанию. Бесплатная дегустация меда и вина. (Cбор за КПП - 700 р. включен в стоимость)',
            price: 1900
        },
        {
            id: 3,
            link: 'excursTour.html',
            image: 'images/excursions/excurs_3/01.jpg',
            title: 'Каманы, Драндский собор, Илорский храм',
            text: 'Илорский храм Св. Георгия Победоносца Х в., Драндский собор ХI в., часовня и могила Св.Великомученика Василиска VI в., Каманский монастырь Иоанна Златоуста, святой источник (омовение по желанию). Путешествие наполнит вас умиротворением и спокойствием святых мест.',
            price: 2300
        },
        {
            id: 4,
            link: 'excursTour.html',
            image: 'images/excursions/excurs_4/01.jpg',
            title: 'Ачандарские водопады. Пещера Хабю',
            text: 'Пешая прогулка по достопримечательностям села Ачандара. Многовековые платаны, «Древо жизни» - 860 лет, пещера Хабю, купание в горной реке, Ачандарские водопады, рыбалка по желанию, катание на лошадях, пикник. Форма одежды – спортивная (входной билет в пещеру включен в стоимость). Дети от 12 лет. Стоимость входного билета в пещеру включена в стоимость. Дети до 12 лет',
            price: 2300
        }
    ]

const addExcursionCards = () => {

    let cards = excursionData.map(item => {
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

    let excursionCards = document.getElementById('excursionCards');
    excursionCards.innerHTML = cards.toString().replaceAll('</section>,', '</section>');
}

addExcursionCards();

const addOnClick = (selector) => {
    let elements = document.querySelectorAll(selector);
    for (let item of elements) {
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodExcursions', id);
        })
    }

}

addOnClick('a.image img');
addOnClick('.hiking-card .major a h3');
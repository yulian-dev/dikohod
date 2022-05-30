const excursionData =
    [
        {
            id: 1,
            link: 'excursTour.html',
            image: 'images/excursions/excurs_1/01.jpg',
            title: 'Новый Афон. Святыни Абхазии',
            text: 'Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.',
            price: 1800
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
                                	<h3>${item.title}</h3>
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

const addOnClick = () => {
    let images = document.querySelectorAll('a.image img');
    for(let item of images){
        item.addEventListener('click', (event) => {
            let id = event.target.getAttribute('data-id');
            localStorage.setItem('dikohodExcursions', id);
        })
    }
}

addOnClick();
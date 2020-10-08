$(document).ready(function () {


	loadJson();
});

function loadJson() {
	$.getJSON("cqnrBctj.json", function (data) {
		var out = '';
		for (let key in data) {
			// Обертка поста
			out += '<div class="slider__item">';
			out += '<div class="slider__product product" itemscope itemtype="https://schema.org/ItemList">';

			// Верхняя часть поста с картинкой
			out += '<div class="product__top">';
			out += '<a href="' + data[key].url_direct + '" class="product__img"><img src="' + data[key].image + '" itemprop="image" alt="' + data[key].product_image_alt + '"></a>';
			out += '<div class="product__like"></div>';
			out += '</div>';

			out += '<div class="product__body">'; // Начало блока с заголовком, текстом, рейтингом

			// Заголовок
			out += '<a href="' + data[key].url_direct + '" itemprop="name" class="product__title">' + data[key]['brand_name'] + '</a>';
			// Заголовок Конец

			// Текст Начало
			out += '<div class="product__text">' + data[key]['product_title'] + '</div>';
			// Текст Конец

			out += '<div class="product__rating">'; // Рейтинг и рекомендации
			if (data[key].rating) {
				// Если не равен 0 или null:
				out += '<fieldset class="rating__fieldset">';
				out += '<div class="rating__group">';
				out += '<input type="radio" name="' + data[key].product_id + '" value="1" class="rating__star" aria-label="Ужасно">';
				out += '<input type="radio" name="' + data[key].product_id + '" value="2" class="rating__star" aria-label="Плохо">';
				out += '<input type="radio" name="' + data[key].product_id + '" value="3" class="rating__star" aria-label="Нормально">';
				out += '<input type="radio" name="' + data[key].product_id + '" value="4" class="rating__star" aria-label="Хорошо" checked>';
				out += '<input type="radio" name="' + data[key].product_id + '" value="5" class="rating__star" aria-label="Отлично">';
				out += '</div>';
				out += '</fieldset>';
			} else {
				out += '';
			}

			// Проверям есть ли рекомендации: 
			if (data[key].recomendation == "") {
				// Если нет:
				out += '<div class="product__recom"></div>';
			} else {
				// Если есть:
				out += '<div class="product__recom"> (' + data[key]['recomendation'] + ' рекомендации)</div>';
			};
			out += '</div>'; // Конец рейтинга и рекомендации
			out += '</div>'; // Конец блока с заголовком, текстом, рейтингом



			//===============================================================================================================================================================
			// блок с ценой и кнопкой "купить"
			out += '<div class="product__bottom">';
			// первая колонка
			out += '<div class="product__column">';
			out += '<div class="product__price" itemprop="offers" itemscope itemtype="https://schema.org/Offer"><span itemprop="price">' + data[key]['price'] + '</span> грн</div>';
			// Проверям есть ли товар: 
			if (data[key].available > "0") {
				// если число товаров больше 1 выводим:
				out += '<div class="product__label product__label_green">В наличии</div>';
			} else {
				// если число товаров 0 выводим:
				out += '<div class="product__label">Нет в наличии</div>';
			};
			out += '</div>';
			// конец первой колонки
			//===============================================================================================================================================================
			// вторая колонка
			out += '<div class="product__column">';
			out += '<a href="' + data[key].url_direct + '" class="product__button btn">Купить</a>';
			out += '</div>';
			// конец второй колонки
			out += '</div>';
			// Конец подвала поста(цена и кнопка "купить") 

			out += '</div>';
			out += '</div>';
		}
		// Записываем результат в html
		$('.slider__body').html(out);

		// Включаем слайдер
		var $slider = $('.slider__body');
		if ($slider) {
			$slider.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				speed: 500,
				infinite: false,
				initialSlide: 0,
				autoplay: false,
				adaptiveHeight: true,
				appendArrows: $('.slider__navigation'),
				prevArrow: '<div class="slider__prev"><i class = "icon-arrow-left2"></div>',
				nextArrow: '<div class="slider__next"><i class = "icon-arrow-left2"></div>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
						}

					},
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 3,
						}

					}, {
						breakpoint: 850,
						settings: {
							slidesToShow: 2,
						}

					},
					{
						breakpoint: 600,
						settings: {
							variableWidth: true,
							arrows: false,
							slidesToShow: 1,
						}

					},
					{
						breakpoint: 460,
						settings: {
							slidesToShow: 1,
							arrows: false,
							variableWidth: true,
						}

					},


				]
			});
		}

	});


}








//===============================================================================================================================================================


var $newSlider = $('.new-slider__body');
$(document).ready(function () {
	if ($newSlider) {
		$newSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			speed: 500,
			infinite: false,
			initialSlide: 0,
			autoplay: false,
			adaptiveHeight: true,
			appendArrows: $('.new-slider__navigation'),
			prevArrow: '<div class="new-slider__prev"><i class = "icon-arrow-left2"></div>',
			nextArrow: '<div class="new-slider__next"><i class = "icon-arrow-left2"></div>',
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}

				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3,
					}

				}, {
					breakpoint: 850,
					settings: {
						slidesToShow: 2,
					}

				},
				{
					breakpoint: 600,
					settings: {
						variableWidth: true,
						arrows: false,
						slidesToShow: 1,
					}

				},
				{
					breakpoint: 460,
					settings: {
						slidesToShow: 1,
						arrows: false,
						variableWidth: true,
					}

				},


			]
		});
	}

});

let likes = document.querySelectorAll('.product__like');

for (let index = 0; index < likes.length; index++) {
	const like = likes[index];
	like.addEventListener('click', function () {
		this.classList.toggle('active');
	});

}
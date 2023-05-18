import svgDeleteUrl from '../images/sprite.svg';
import amzonimg1 from '../images/shoplist/amazon1x.png';
import amzonimg2 from '../images/shoplist/amazon2x.png';
import appleimg1 from '../images/shoplist/apple1x.png';
import appleimg2 from '../images/shoplist/apple2x.png';
import bookshopimg1 from '../images/shoplist/bookshop1x.png';
import bookshopimg2 from '../images/shoplist/bookshop2x.png';

function markupBooksInBasket(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        author,
        book_image_width,
        book_image_height,
        title,
        list_name,
        description,
        buy_links: [amazon, apple, , , bookshop],
      }) => {
        return `<li class="shopinlist__card" data-id="${_id}">
					<div class="shopinlist__block">
						<div>
							<div class="shopinlist__thumb">
								<img src="${book_image}" alt="${list_name}" class="shopinlist__book-img" width="${book_image_width}" height="${book_image_height}" />
							</div>
							<p class="shopinlist__book-author">${author}</p>
						</div>
						<div class="shopinlist__wrap">
							<h2 class="shopinlist__title">${cutNameCategory(title)}</h2>
							<p class="shopinlist__category">${cutNameCategory(list_name)}</p>
							<p class="shopinlist__book-description--tablet">${
                !description ? 'Description' : description
							}</p>
                !description ? 'Description empty!!!' : description
              }</p>
							<ul class="shopinlist__shops">
								<li class="shopinlist__shop">
									<a href="${
                    amazon.url
                  }" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">
									<img srset="${amzonimg1} 1x, ${amzonimg2} 2x" src="${amzonimg1}" alt="${
          amazon.name
        }" class="shopinlist__shop-img amazon" width="48" height="15" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'apple.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">
									<img srset="${appleimg1} 1x, ${appleimg2} 2x" src="${appleimg1}" alt="${
          apple.name
        }" class="shopinlist__shop-img" width="28" height="27" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'bookshop.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">
									<img srset="${bookshopimg1} 1x, ${bookshopimg2} 2x" src="${bookshopimg1}" alt="${
          bookshop.name
        }" class="shopinlist__shop-img" width="32" height="30" />
									</a>
								</li>
							</ul>
							<div class="shopinlist__wrap-shops--tablet">
							<p class="shopinlist__bookauthor--tablet">${author}</p>
							<ul class="shopinlist__shops--tablet">
								<li class="shopinlist__shop">
									<a href="${
                    amazon.url
                  }" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">
									<img srset="${amzonimg1} 1x, ${amzonimg2} 2x" src="${amzonimg1}" alt="${
          amazon.name
        }" class="shopinlist__shop-img amazon" width="48" height="15" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'apple.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">
									<img srset="${appleimg1} 1x, ${appleimg2} 2x" src="${appleimg1}" alt="${
          apple.name
        }" class="shopinlist__shop-img" width="28" height="27" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'bookshop.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">
									<img srset="${bookshopimg1} 1x, ${bookshopimg2} 2x" src="${bookshopimg1}" alt="${
          bookshop.name
        }" class="shopinlist__shop-img" width="32" height="30" />
									</a>
								</li>
							</ul>
							</div>
						</div>
					</div>
					<button type="button" class="shopinlist__btn" arial-label="Delete the book from shopping list">
						<svg class="shopinlist__btn-icon" width="15" height="15">
							<use href="${svgDeleteUrl}#icon-dump"></use>
						</svg>
					</button
			</li>`;
      }
    )
    .join('');
}

function cutNameCategory(name) {
  if (window.innerWidth < 768) {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }
  return name;
}

export default markupBooksInBasket;

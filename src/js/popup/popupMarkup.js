const popupBookMarkupEl = ({ author, book_image, title }) => {
  return arr.map({ author, book_image, title })`
  <div class="js-popup">
    <button  class="js-popup-close" type="button">
        <svg width="20" height="20"></svg>
        <use href=""></use>
        </svg>
    </button>
    <div>
        <a href="">
            <img src="" alt="">
        </a>
        <h2></h2>
        <h3></h3>
        <p></p>
        <ul>
            <li>
                <a href="">
                    <img src="" alt="">
                </a>
            </li>
        </ul>
    </div>
    <div>
        <button type="button">

        </button>
        <p class=""></p>
    </div>
</div>
  `;
};

export { popupBookMarkupEl };

// import { getImages } from './api';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const el = {
//     searchForm: document.querySelector('.search-form'),
//     wrapperCards: document.querySelector('.gallery'),
//     loadMoreBtn: document.querySelector('.load-more'),
//     inputQuantity: document.querySelector('.quantity'),
//     target: document.querySelector('.js-guard'),
//     btnUp: document.querySelector('.btn-up'),
// };
// const options = {
//     root: null,
//     rootMargin: '500px',
// };
// const observer = new IntersectionObserver(loadMore, options);

// let quantityPerPage = 40;
// let keyword = '';
// let currentPage = 1;
// let totalPages = 1;
// let gallery = null;

// window.addEventListener('scroll', onScroll);
// el.searchForm.addEventListener('submit', handlerSearch);
// // el.loadMoreBtn.addEventListener('click', handlerLoadMore);
// el.btnUp.addEventListener('click', scrollToTop);

// function handlerSearch(e) {
//     e.preventDefault();

//     // el.loadMoreBtn.hidden = true;

//     observer.unobserve(el.target);

//     currentPage = 1;
//     keyword = e.currentTarget.firstElementChild.value.trim();

//     if (el.inputQuantity.value >= 3 && el.inputQuantity.value <= 200) {
//         quantityPerPage = Number(el.inputQuantity.value);
//     }

//     if (keyword === '') {
//         Notify.warning('Please, enter search request.');
//         return;
//     }

//     el.wrapperCards.innerHTML = '';

//     getImages(keyword, quantityPerPage)
//         .then(data => {
//             if (!data.hits.length) {
//                 Notify.failure(
//                     'Sorry, there are no images matching your search query. Please try again.'
//                 );

//                 el.searchForm.reset();

//                 return;
//             }

//             totalPages = data.totalHits / quantityPerPage;

//             Notify.success(`Hooray! We found ${data.totalHits} images.`);

//             createMarkup(data.hits);

//             el.searchForm.reset();

//             observer.observe(el.target);

//             gallery = new SimpleLightbox('.gallery-link', {
//                 captionsData: 'alt',
//                 captionDelay: 250,
//             });

//             if (currentPage >= totalPages) {
//                 // el.loadMoreBtn.hidden = true;

//                 observer.unobserve(el.target);

//                 Notify.info(
//                     'We are sorry, but you have reached the end of search results.'
//                 );

//                 return;
//             }

//             // el.loadMoreBtn.hidden = false;
//         })
//         .catch(({ code, message }) => {
//             Report.failure(
//                 `${message}. Code: ${code} `,
//                 'Oops! Something went wrong! Try reloading the page!',
//                 'OK'
//             );
//         });
// }

// // function handlerLoadMore() {
// //     currentPage += 1;

// //     getImages(keyword, quantityPerPage, currentPage)
// //         .then(data => {
// //             createMarkup(data.hits);

// //             const { height: cardHeight } = document
// //                 .querySelector('.gallery')
// //                 .firstElementChild.getBoundingClientRect();

// //             window.scrollBy({
// //                 top: cardHeight * 2.28,
// //                 behavior: 'smooth',
// //             });

// //             if (currentPage >= totalPages) {
// //                 el.loadMoreBtn.hidden = true;
// //                 Notify.info(
// //                     'We are sorry, but you have reached the end of search results.'
// //                 );
// //             }
// //             gallery.refresh();
// //         })
// //         .catch(({ code, message }) => {
// //             Report.failure(
// //                 `${message}. Code: ${code} `,
// //                 'Oops! Something went wrong! Try reloading the page!',
// //                 'OK'
// //             );
// //         });
// // }

// function loadMore(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             currentPage += 1;

//             getImages(keyword, quantityPerPage, currentPage)
//                 .then(data => {
//                     createMarkup(data.hits);

//                     const { height: cardHeight } = document
//                         .querySelector('.gallery')
//                         .firstElementChild.getBoundingClientRect();

//                     window.scrollBy({
//                         top: cardHeight * 2.28,
//                         behavior: 'smooth',
//                     });

//                     if (currentPage >= totalPages) {
//                         observer.unobserve(el.target);

//                         Notify.info(
//                             'We are sorry, but you have reached the end of search results.'
//                         );
//                     }
//                     gallery.refresh();
//                 })
//                 .catch(({ code, message }) => {
//                     Report.failure(
//                         `${message}. Code: ${code} `,
//                         'Oops! Something went wrong! Try reloading the page!',
//                         'OK'
//                     );
//                 });
//         }
//     });
// }

// function createMarkup(arrHits) {
//     el.wrapperCards.insertAdjacentHTML(
//         'beforeend',
//         arrHits
//             .map(
//                 ({
//                     webformatURL,
//                     largeImageURL,
//                     tags,
//                     likes,
//                     views,
//                     comments,
//                     downloads,
//                 }) => `<div class="photo-card"><a href=${largeImageURL} class="gallery-link">
//                     <img src=${webformatURL} alt="${tags}" loading="lazy" width="300" class="gallery-img"/>
//                     <div class="info">
//                         <p class="info-item">
//                             <b>Likes:</b></br>
//                             <span>${likes}</span>
//                         </p>
//                         <p class="info-item">
//                             <b>Views:</b></br>
//                             <span>${views}</span>

//                         </p>
//                         <p class="info-item">
//                             <b>Comments:</b></br>
//                             <span>${comments}</span>
//                         </p>
//                         <p class="info-item">
//                             <b>Downloads:</b></br>
//                             <span>${downloads}</span>
//                         </p>
//                     </div></a>
//                 </div>`
//             )
//             .join('')
//     );
// }

// function onScroll() {
//     el.btnUp.classList.toggle('hidden', window.scrollY > 800);
// }

// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// }

{
    /* <div class="wrapper-form">
            <form class="search-form" id="search-form">
                <input
                    type="text"
                    name="searchQuery"
                    autocomplete="off"
                    placeholder="Search images..."
                />
                <button type="submit" class="btn-form">Search</button>
                <label>
                    <b>Select the number of cards per page (range 3-200) </b>
                    <input
                        class="quantity"
                        type="number"
                        name="quantity"
                        min="03"
                        max="200"
                        value="40"
                    />
                </label>
            </form>
        </div>

        <div class="gallery"></div>
        <div class="js-guard"></div>
        <button type="button" class="btn-up">&#11014;</button> */
}

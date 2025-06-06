(function () {

    //Бургер
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Модальное окно
    let modal = document.querySelector('.modal');
    let modalButton = document.querySelector('.about__img-button');

    modalButton.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault();

        let target = e.target;

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }


    // Табы

    let tabControls = document.querySelector('.tab-controls')
    console.log(tabControls)
    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        let tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault();
        if (tabControl.classList.contains('tab-controls__link--active')) return


        let tabContentID = tabControl.getAttribute('href');
        let tabContent = document.querySelector(tabContentID);
        let activeControl = document.querySelector('.tab-controls__link--active');
        let activeContent = document.querySelector('.tab-content--show');

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }



    // Аккордеон

    let accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            let accordionList = e.currentTarget;
            let accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            let accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            let accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault();

            let accordionItem = accordionControl.parentElement;
            let accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        })
    })


    // Слайдер-галлерея

    new Swiper('.gallery__slider', {
        // Optional parameters


        spaceBetween: 15,
        slidesPerView: 1.5,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            // when window width is >= 320px
            601: {
                slidesPerView: 3,
            },
            // when window width is >= 801px
            801: {
                spaceBetween: 32,
            },
            // when window width is >= 1101px
            1101: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }


    });

    // Слайдер-отзывы

    new Swiper('.testimonials__slider', {
        // Optional parameters


        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,

        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.05,
            },
        }



    });

    // Маска для телефона

    let telInputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(telInputs);
    


})()
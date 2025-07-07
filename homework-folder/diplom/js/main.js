(function () {

    let burgerIconBurger = document.querySelector('.burger-icon__burger')
    let burgerIconBack = document.querySelector('.burger-icon__back')
    document.addEventListener('click', burgerInit)

    function burgerInit(event) {

        let target = event.target;
        let burgerIcon = target.closest('.burger-icon');

        let burgerNavLink = target.closest('.nav__link');

        let sidebar = target.closest('.sidebar');

        if (!sidebar && !burgerIcon) {
            burgerIconBurger.classList.remove('hidden')
            burgerIconBack.classList.add('hidden')


            document.body.classList.remove('body--opened-menu')
        }

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1200) return

        if (burgerIcon) {
            event.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {


            burgerIconBack.classList.remove('hidden')
            burgerIconBurger.classList.add('hidden')

            document.body.classList.add('body--opened-menu')

        } else {

            burgerIconBurger.classList.remove('hidden')
            burgerIconBack.classList.add('hidden')


            document.body.classList.remove('body--opened-menu')

        }




    }


    // Ползунок + диаграмма ============---------------------------------
    // Выбираем заполняемые части диаграммы

    let diagramsFront = document.querySelectorAll('.circle-front')

    // Выбираем все ползунки
    let containerSlider = document.querySelectorAll('.range-slider');


    // Выбираю Radio кнопки
    let radioButtons = document.querySelectorAll('.diagram-radio');

    let percent = document.querySelector('.diagram-percent')

    //  Пройтись по всем ползункам если их много
    for (let i = 0; i < containerSlider.length; i++) {

        // Выбираем части ползунка
        let slider = containerSlider[i].querySelector('.slider')
        // <!-- Тут слайдер-thumb не нужен, но мы его не убираем для будущих работ -->

        let thumb = containerSlider[i].querySelector('.slider-thumb')
        // console.log(thumb)

        let progress = containerSlider[i].querySelector('.progress')

        radioButtons.forEach(element => {
            element.addEventListener('input', () => {
                let percent = document.querySelector('.diagram-percent')
                // Привязываем radio
                if (radioButtons[0].checked) {
                    percent.textContent = 'до 5%'

                    slider.value = '300';
                    // Берем проценты
                    let maxVal = slider.getAttribute('max');
                    let val = (slider.value / maxVal) * 100;


                    // if( val <= 2){

                    //     progress.style.width = val*3 + "%";
                    // }else if(val <=6) {
                    //     progress.style.width = val*1.5 + "%";

                    // } else{
                    //     progress.style.width = val + "%";

                    // }
                    progress.style.width = val + "%";
                    thumb.style.left = val * 0.953 + "%";



                    diagramsFront.forEach(element => {
                        element.style.strokeDasharray = `${10.43 * 30} 2086`

                    });


                }
                if (radioButtons[1].checked) {
                    percent.textContent = 'до 1111%'

                    slider.value = '1900';
                    // Берем проценты
                    let maxVal = slider.getAttribute('max');
                    let val = (slider.value / maxVal) * 100;


                    // if( val <= 2){

                    //     progress.style.width = val*3 + "%";
                    // }else if(val <=6) {
                    //     progress.style.width = val*1.5 + "%";

                    // } else{
                    //     progress.style.width = val + "%";

                    // }
                    progress.style.width = val + "%";
                    thumb.style.left = val * 0.96 + "%";




                    diagramsFront.forEach(element => {
                        element.style.strokeDasharray = `${10.43 * 120} 2086`

                    });


                }
            })

        });



        function customSlider() {



            // Берем проценты
            let maxVal = slider.getAttribute('max');
            let val = (slider.value / maxVal) * 100;


            // if( val <= 2){

            //     progress.style.width = val*3 + "%";
            // }else if(val <=6) {
            //     progress.style.width = val*1.5 + "%";

            // } else{
            //     progress.style.width = val + "%";

            // }
            progress.style.width = val + "%";
            thumb.style.left = val * 0.96 + "%";

            // Движение спидометра ==================================----------------------------
            diagramsFront.forEach(element => {
                element.style.strokeDasharray = `${10.43 * val} 2086`
            });

        }
        // Без выполнения функции ниже, ползунок не станет на место при загрузке страницы
        customSlider()

        // Выполнение функции ползунка при каждом взаимодействии
        slider.addEventListener('input', () => {
            customSlider()
        })
    }

    // Аккордеон ============---------------------------------

    // Ul аккордеона
    let accordionList = document.querySelector('.accordion-list');

    function accordionOpen(event) {

        // Ul аккордеона На который кликнули
        let accordionList = event.currentTarget;

        // Li с открытым контентом
        let accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        let accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        //Button видимая часть аккордеона
        let accordionControl = event.target.closest('.accordion-list__control');

        if (!accordionControl) return

        //Li аккордеона
        let accordionItem = accordionControl.parentElement;
        //Div контейнер контента аккордиона
        let accordionContent = accordionControl.nextElementSibling;

        // Если есть Li с открытым контентом, и li аккордеона на который сейчас
        // кликнули был закрытым, то закрываем
        // открытый, чобы потом открыть тот li на который кликнули
        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            // Возвращаем открытому элементу max-height для плавной анимации
            accordionOpenedContent.style.maxHeight = accordionOpenedContent.scrollHeight + 'px'

            // Делаем через реквест, чтоб кнопку сильно не трясло

            requestAnimationFrame(() => {
                accordionOpenedContent.style.maxHeight = null;

            });

        }

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {

            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            setTimeout(() => {
                accordionContent.style.maxHeight = 'none';

                console.log('lalala')
            }, 600)

        } else {

            // Возвращаем открытому элементу max-height для плавной анимации

            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            // Делаем через реквест, чтоб кнопку сильно не трясло

            requestAnimationFrame(() => {
                accordionContent.style.maxHeight = null;
            });
        }
    }

    accordionList.addEventListener('click', accordionOpen)

    // Маска для телефона ============---------------------------------

    let tellsInputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999 99 99')
    im.mask(tellsInputs);




})()


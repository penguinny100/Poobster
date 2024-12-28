document.addEventListener('DOMContentLoaded', function() {

    let historymenu = document.querySelectorAll('.btn-year');
    for (let i = 0; i < historymenu.length; i++)
    {
        historymenu[i].addEventListener('click', function() {
            document.querySelector('.historysection').innerHTML = list[i];
        });
    };
});

var list = ['<img src="historypics/2014.jpeg" alt="Poobster in 2014" class="historyimage">January 22, 2014'

            ,
            '<img src="historypics/2015.jpeg" alt="Poobster in 2015" class="historyimage">October 1, 2015'

            ,
            '<img src="historypics/2016.jpeg" alt="Poobster in 2016" class="historyimage">September 3, 2016'

            ,
            '<img src="historypics/2017.jpeg" alt="Poobster in 2017" class="historyimage">October 16, 2017'

            ,
            '<img src="historypics/2018.jpeg" alt="Poobster in 2018" class="historyimage">January 6, 2018'

            ,
            '<img src="historypics/2019.jpeg" alt="Poobster in 2019" class="historyimage">June 26, 2019'

            ,
            '<img src="historypics/2020.jpeg" alt="Poobster in 2020" class="historyimage">December 24, 2020'

            ,
            '<img src="historypics/2021.jpeg" alt="Poobster in 2021" class="historyimage">May 10, 2021'

            ,
            '<video src="historypics/2022.mp4" class="historyimage" controls>Poobster in 2022</video>December 22, 2022'

            ,
            '<img src="historypics/2023.jpeg" alt="Poobster in 2023" class="historyimage">September 2, 2023'

            ,
            '<img src="historypics/2024.jpeg" alt="Poobster in 2024" class="historyimage">January 16, 2024'

];

/*

if (i === 8)
            {
                document.querySelector('.historysection').innerHTML = '<video src="historypics/2022.mov" class="hobbiesimage" controls>Hesitant Poobster</video>';
            };
            else
            {
                document.querySelector('.historysection').innerHTML = list[i];
            };
*/

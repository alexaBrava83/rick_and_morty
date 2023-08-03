let request = new XMLHttpRequest();
let currentPage = 1;

showPage();
function showPage() {
    $.ajax({
        url: 'https://rickandmortyapi.com/api/character',
        method: 'GET',
        data: {
            page: currentPage
        },
        dataType: 'json',

        success: function (response) {
            console.log(response);
            let listHtml = '';

            response.results.forEach(element => {
                listHtml += `
                    <div class="item">
                        <img src="${element.image}" alt="${element.name}"></img>
                        <p>${element.name}</p>
                    </div>
                `;
            });

            $('.list').append(listHtml);

            currentPage++;
        },
        error: function (e) {
            console.warn(e);
        }
    });
}

$('button.next-page').on('click', showPage)
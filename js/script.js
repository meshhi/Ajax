window.addEventListener("DOMContentLoaded", () => {
    function req() {
        // использование XMLHttpRequest
        // const request = new XMLHttpRequest();
        // request.open("GET", "http://localhost:3000/people");
        // request.setRequestHeader("Contenc-type", "application/json; charset=utf-8");
        // request.send();

        // request.addEventListener("load", function() {
        //     if (request.readyState === 4 && request.status == 200) {
        //         let data = JSON.parse(request.response);
        //         console.log(data)
        //         loadImage(data);
        //     } else {
        //         console.error("Что-то пошло не так!")
        //     }
        // });

        // использование Fetch
        // getResource("http://localhost:3000/people")
        //     .then(data => loadImage(data))
        //     .catch(error => console.error(error))

        // this.remove();

        // async function getResource(url) {
        //     const res = await fetch(`${url}`)
        //     if (!res.ok) {
        //         throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        //     }

        //     return await res.json();
        // }

        // использование axios, вместо fetch() используем axios, он делает тоже самое только возвращает уже преобразованный в json данные, только возвращает больше элементов(в том числе конфиг, заголовки и т.д.)
        getResource("http://localhost:3000/people")
            .then(data => loadImage(data.data))
            .catch(error => console.error(error))

        this.remove();

        async function getResource(url) {
            const res = await axios(`${url}`)
            if (res.status !== 200) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`)
            }

            return await res;
        }

    }

    let btn2 = document.querySelector('.button');
    btn2.addEventListener("click", req, { "once": true });
});
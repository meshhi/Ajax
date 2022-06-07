window.addEventListener("DOMContentLoaded", () => {
    function req() {
        const request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/people");
        request.setRequestHeader("Contenc-type", "application/json; charset=utf-8");
        request.send();

        request.addEventListener("load", function() {
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                console.log(data)
                console.log('AllGoesRight')

                let btn = document.querySelector('.btn1');
                btn.addEventListener("click", function() {
                    data.forEach(element => {
                        let card = document.createElement('div');

                        card.classList.add('card');

                        let icon, alter;

                        if (element.sex == 'male') {
                            icon = "icons/mars.png"
                            alter = "male"
                        } else {
                            icon = "icons/female.png"
                            alter = "female"
                        }

                        card.innerHTML = `<img src="${element.photo}" alt="photo"></img>  
                        <div class="name">${element.name} ${element.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt=${alter}></img>    
                        </div>   
                        <div class="age">
                            ${element.age}    
                        </div>`;
                        document.querySelector('.app').appendChild(card);

                    });
                    this.remove();
                })

            } else {

                console.error("Что-то пошло не так!")
            }


        });
        this.remove();
    }

    let btn2 = document.querySelector('.btn2');
    btn2.addEventListener("click", req, { "once": true });
});
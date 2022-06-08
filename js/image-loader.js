function loadImage(data) {


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

        defaultPictureSrc = "icons/download.jpg"

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
};
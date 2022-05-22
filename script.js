const days = document.querySelector(".graph-area");
//fetching data of json 

fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element) => {
            var span = document.createElement('span');
            var para = document.createElement('p');
            var bar = document.createElement('div');
            span.className = "days";
            para.innerHTML = "$" + `${element.amount}`
            span.innerHTML = `${element.day}`
            bar.className = "bars";
            para.className = "amount";
            document.querySelector(".graph-area").append(span);
            span.appendChild(bar);
            span.appendChild(para);
        });
        
    })


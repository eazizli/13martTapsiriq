//const body = document.querySelector("body");
let row =document.querySelector(".row");
console.log(row)
fetch("https://api.tvmaze.com/shows")
.then(response => response.json())
.then(data =>{
  console.log(data);
    data.forEach(element => {
        row.innerHTML+=`
        <div class="col-3"> 
        <div>
        <img src="" alt="" class="image">
        <div>
          <h4 class="teze">HDfilmCehennemi</h4>
          <p>Tum filimlere uzretsiz izleme kanali</p>
        </div>
       </div>
        <div class="card" style="width: 18rem; ">
        <img src="${element.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">Imdb: ${element.rating.average}</p>
        <a href="detalies.html?id=${element.id}" class="btn btn-primary">BURDAN IZLE</a>
        </div>
        </div>
      `
        
    });
 })

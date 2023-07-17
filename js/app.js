const btnSearch = document.querySelector("#search-btn")
const input = document.querySelector("#input-text")
const resulttext = document.querySelector("#search-result")
const ShowMore = document.querySelector("#show-more-btn")
const form = document.querySelector("#search-form")
const p = document.querySelector("p")
const ketword = "";
let page = 1;




async function searchImages() {
    if(page === 1) {
        resulttext.removeChild(p)
    }
    const ketword = input.value ;
    if(page === 1 || page === 8) {
        resulttext.innerHTML="";
       }
      
  
    const AccessKey = "cZDNFgvXevislIVk8oEZGOjFvDelVkCb7G6sUuKcQc4"

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${ketword}&client_id=${AccessKey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()
   // console.log(data.results[0].links.download);

 

   const results = data.results;


   results.map( (result)=> {
    const img = document.createElement("img");
    const a = document.createElement("a")
    const i = document.createElement("i")
    const divv = document.createElement("div")
    divv.setAttribute("id" , "divimg")
   img.src = result.urls.small;
   ahref = result.links.download
   a.href = `${ahref}&force=true`
   a.innerHTML = "Download"
   divv.appendChild(img)
   divv.appendChild(a)
resulttext.appendChild(divv)
  // resulttext.appendChild(img)
  //  resulttext.appendChild(a)
    
   })


  ShowMore.style.display = "block"
   

}




form.addEventListener("submit" , (e)=> { 
    e.preventDefault()
   page = 8;
  searchImages()

});


ShowMore.addEventListener("click" , ()=> {


    page++;
    searchImages()

    })

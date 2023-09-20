// btn=document.getElementsByClassName("pageChanger")

// Array.prototype.forEach.call(btn, function(e) {
//     console.log(e.value)
//     e.onclick =()=>{
//         console.log("dsa")
//     }
// });
page = document.getElementsByClassName('page');
page = page[0];
// console.log(page.offsetWidth)
pageChange=(val)=>{
    document.getElementById("pageContainer").style.transform="translateX(-"+val*page.offsetWidth+"px)"
}
// queryString = window.location.search;
// urlParams = new URLSearchParams(queryString);

// urlParams.append('size', 'xl');
// console.log(urlParams.get('size'))
// console.log(document.URL)


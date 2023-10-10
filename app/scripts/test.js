document.getElementById("addBlocksTest").innerHTML="dsadsadsa"

color = {"rgb":{"r":200,"g":20,"b":50}}
table = null
getData =()=>{
    fetch('https://raw.githubusercontent.com/oskarBoladz/CollorWiki/main/app/data/colors.json')
.then(
function (response) {
    return response.json()
}).then(
    function (object) {
        localStorage.setItem('colors',JSON.stringify(object))
    })
}
table=JSON.parse(localStorage.getItem('colors'));
console.log(table)

// .then(function(json){
//     $table =json
// // localStorage.clear();
// // localStorage.setItem('periodicTable',JSON.stringify(json))
// });

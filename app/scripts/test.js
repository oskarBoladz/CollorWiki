
colorr = {"rgb":{"r":0,"g":0,"b":0}}
table = null
getData =()=>{
    fetch('http://127.0.0.1:5500/app/data/colors.json')
.then(
function (response) {
    return response.json()
    console.log(response)
}).then(
    function (object) {
        localStorage.setItem('colors',JSON.stringify(object))
    })
}
getData()
table=JSON.parse(localStorage.getItem('colors'));
console.log(table)

createTile=(color)=>{
    div=document.createElement("div")
    div.className="testCube"
    div.style.backgroundColor="#"+color
    document.getElementById("cubes").appendChild(div)
}
bN=60
sN=60
similar=(color)=>{
    parent=document.getElementById("cubes")
    while (parent.hasChildNodes()){
               parent.removeChild(parent.firstChild)
               }
    // val=color.rgb.r
    // valName="r"
    // for (const [key, value] of Object.entries(color.rgb)) {
    //     if(value>val){
    //         val=value
    //         valName=key
    //     }
    // }
   
    for (const [key, value] of Object.entries(table)) {
        newColor // conv hex to hsl and check is color == color PRINT
        // r=parseInt(key.slice(0, 2),16)
        // g=parseInt(key.slice(2, 4),16)
        // b=parseInt(key.slice(4, 7),16)
        // // console.log(r,g,b,key.slice(0, 2),key.slice(2,4),key.slice(4,7),key)
        // switch(valName){
        //     case "r":
        //         if(val+bN>r && val-bN<r){
        //             if(color.rgb.g+sN>g && color.rgb.g-sN<g){
        //                 if(color.rgb.b+sN>b && color.rgb.b-sN<b){
        //                     createTile(key)
        //                 }
        //             }
        //         }
        //         break;
        //     case "g":
        //         if(val+bN>g && val-bN<g){
        //             if(color.rgb.r+sN>r && color.rgb.r-sN<r){
        //                 if(color.rgb.b+sN>b && color.rgb.b-sN<b){
        //                     createTile(key)
        //                 }
        //             }
        //         }
        //         break;
                
        //     case "b":
        //         if(val+bN>b && val-bN<b){
        //             if(color.rgb.g+sN>g && color.rgb.g-sN<g){
        //                 if(color.rgb.r+sN>r && color.rgb.r-sN<r){
        //                     createTile(key)
        //                 }
        //             }
        //         }
        //         break;
        // }

    }
   
}
similar(colorr)


// .then(function(json){
//     $table =json
// // localStorage.clear();
// // localStorage.setItem('periodicTable',JSON.stringify(json))
// });

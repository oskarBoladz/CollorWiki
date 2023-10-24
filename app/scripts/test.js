
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

createTile=(color,name)=>{
    document.getElementById("weelColor").innerHTML=""
    div=document.createElement("div")
    div.className="testCube"
    div.style.backgroundColor="#"+color
    div.setAttribute("value", JSON.stringify(name))
    div.onmouseover=()=>{
        str=""
        for (const [key, value] of Object.entries(name)) {
            str+=key+": "+value+"\n"
        }
        document.getElementById("weelColor").innerHTML=str
    }
    document.getElementById("cubes").appendChild(div)
    
}
// bN=30
// sN=45
similar=(inputColor)=>{
    // console.log(inputColor)
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
//    console.log(inputColor)
   wG=inputColor.hsl.h+26
        wD=inputColor.hsl.h-26
        // if(wG>360){
        //     wG-=360
        // }
        // if(wD<0){
        //     wD=360+wD
        // }
    for (const [key, value] of Object.entries(table)) {
        keyHSL = color.getValues({"hex":key})
        // console.log()
        if(keyHSL.hsl.h<wG && keyHSL.hsl.h>wD){
            
            if(keyHSL.hsl.s>inputColor.hsl.s-40 && keyHSL.hsl.s<inputColor.hsl.s+40){

                if(keyHSL.hsl.l>inputColor.hsl.l-20 && keyHSL.hsl.l<inputColor.hsl.l+20){
                    createTile(key,value["name"])
                }
            }
        }
        if(inputColor.hsl.s>=0 && inputColor.hsl.s <= 7){
            if(keyHSL.hsl.s>=0 && keyHSL.hsl.s < 7){
                if(keyHSL.hsl.l >= inputColor.hsl.l-20 && keyHSL.hsl.l<= inputColor.hsl.l+20){
                    createTile(key,value["name"])
                // console.log("dsa")

                }
            }
        }
        // newColor // conv hex to hsl and check is color == color PRINT

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
// similar(color.getValues(colorr))


// .then(function(json){
//     $table =json
// // localStorage.clear();
// // localStorage.setItem('periodicTable',JSON.stringify(json))
// });

for (const [key, value] of Object.entries(table)){
    console.log()
    div=document.createElement("div")
    // div.className="testCube"
    div.style.backgroundColor="#"+key
    div.style.width="20px"
    div.style.height="20px"
    div.style.float="left"
    // div.setAttribute("value", JSON.stringify(name))
    // div.onmouseover=()=>{
    //     str=""
    //     for (const [key, value] of Object.entries(name)) {
    //         str+=key+": "+value+"\n"
    //     }
    //     document.getElementById("weelColor").innerHTML=str
    // }
    
    document.getElementById("addColorsBlocks").appendChild(div)
}

pages = {"wiki":2,
        "ui":1,
        "picker":0,
        "color":-1,
        "pallet":-2};
page=2;
// document.getElementById("pageContainer").style.transform="translateX(-"+2*document.getElementsByClassName('page')[0].offsetWidth+"px)"
pageChange =(e)=>{
    page = pages[e]
    // console.log(val*document.getElementsByClassName('page')[0].offsetWidth)
    document.getElementById("pageContainer").style.transform="translateX("+page*document.getElementsByClassName('page')[0].offsetWidth+"px)"
}
onresize = (event) => {
    document.getElementById("pageContainer").style.transform="translateX("+page*document.getElementsByClassName('page')[0].offsetWidth+"px)"
};
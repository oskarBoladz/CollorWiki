
pages = {"wiki":0,
        "ui":1,
        "picker":2,
        "color":3,
        "pallet":4};
page=2;
document.getElementById("pageContainer").style.transform="translateX(-"+2*document.getElementsByClassName('page')[0].offsetWidth+"px)"
pageChange =(e)=>{
    page = pages[e]
    // console.log(val*document.getElementsByClassName('page')[0].offsetWidth)
    document.getElementById("pageContainer").style.transform="translateX(-"+page*document.getElementsByClassName('page')[0].offsetWidth+"px)"
}
onresize = (event) => {
    document.getElementById("pageContainer").style.transform="translateX(-"+page*document.getElementsByClassName('page')[0].offsetWidth+"px)"
};
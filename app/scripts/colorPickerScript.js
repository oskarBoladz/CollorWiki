// document.getElementById("rRgbInput").onchange=(event)=>{
//     console.log(this.value,"dsa")
// }
// document.getElementById("gRgbInput").onchange=()=>{
    
// }
// document.getElementById("bRgbInput").onchange=()=>{
    
// }
// let color = new ColorConverter()
document.getElementById("colorPickerInput").oninput=()=>{
    // console.log(document.getElementById("colorPickerInput").value,document.getElementById("colorPickerInput").value.slice(1,7))
    colorconv = color.getValues({"hex":document.getElementById("colorPickerInput").value.slice(1,7)})
    // console.log(colorconv)
    // colorconv = color.getValues({"hex":colorconv})
    similar(colorconv)
}
// changeMainColor=()=>{}
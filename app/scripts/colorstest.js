// import Car from "./modules/colorModule.js"
let color = new ColorConverter()
console.log(color.getValues({"rgb":{"r":200,"g":20,"b":50}}))
console.log(color.getValues({"hsl":{"h":350,"s":81.8182,"l":43.1373}}))
console.log(color.getValues({"hex":"c81432"}))
// console.log(chroma("eb4034").hsl())
// console.log(chroma.hsl(3.9344,0.8206,0.5627).rgb())
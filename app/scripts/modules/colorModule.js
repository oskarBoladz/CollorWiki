
class ColorConverter {
    getValues(color){
      let rgb,hsl,hex;
        if(color.hasOwnProperty("rgb")){
            hsl=chroma.rgb(color.rgb.r,color.rgb.g,color.rgb.b).hsl()
            hex=chroma.rgb(color.rgb.r,color.rgb.g,color.rgb.b).hex()
            rgb=[color.rgb.r,color.rgb.g,color.rgb.b]
            hsl[1]*=100;hsl[2]*=100
        }
        if(color.hasOwnProperty("hex")){
            hex="#"+color.hex
            hsl=chroma(hex).hsl()
            rgb=chroma(hex).rgb()
            hsl[1]*=100;hsl[2]*=100
        }
        if(color.hasOwnProperty("hsl")){
            hsl=[color.hsl.h,color.hsl.s/100,color.hsl.l/100]
            rgb=chroma.hsl(hsl[0],hsl[1],hsl[2]).rgb()
            hex=chroma.hsl(hsl[0],hsl[1],hsl[2]).hex()
            hsl[1]*=100;hsl[2]*=100
        }
        let ans = {}
        ans["rgb"]={"r":rgb[0],"g":rgb[1],"b":rgb[2]}
        ans["hex"]=hex.slice(1)
        
        ans["hsl"]={"h":hsl[0],"s":parseFloat(hsl[1].toFixed(4)),"l":parseFloat(hsl[2].toFixed(4))}
        return ans
    }
  }


//   get speak(){
//     return "dsa";
// }
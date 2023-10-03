import json


f = open('C:\\Users\\oskiw\\Desktop\\CollorWiki\\app\\data\\colors_to_change.json')

data = json.load(f)


for index, value in enumerate(data["values"]):
    print("\""+value[1:len(value)]+"\":{\"name\":{\"Pantone\":\""+data["names"][index]+"\"},\"tags\":[]},")
    
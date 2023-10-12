import json


f = open('C:\\Users\\oskarBoladz\\Desktop\\CollorWiki\\app\\data\\webcolors_toChange.json')

data = json.load(f)
# print(data) ----- NA bazie red gree blu tagi warm cold

for index in data:
    print("\""+data[index][1:7]+"\":{\"name\":{\"Web colors\":\""+index+"\"},\"tags\":[]},")
import json
import colorsys

def hex_to_hsl(hex_color):
    # Convert hex to RGB
    hex_color = hex_color.lstrip('#')
    rgb = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

    # Convert RGB to HSL
    h, l, s = colorsys.rgb_to_hls(rgb[0]/255, rgb[1]/255, rgb[2]/255)
    h = int(h * 360)
    l = int(l * 100)
    s = int(s * 100)
    
    return h #,s ,l

f = open('C:\\Users\\oskarBoladz\\Desktop\\CollorWiki\\app\\data\\colors.json')

data = json.load(f)
# # print(data) ----- NA bazie red gree blu tagi warm cold
# # tabele colors podzielic na 360 innych cusiow
# # for index in data:
# #     print("\""+index[1:7]+"\":{\"name\":{\"Custom\":\""+data[index]+"\"},\"tags\":[]},")
# example_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'a': 5, 'e': 6, 'f': 7, 'b': 8}
# # def find_duplicate_keys(dictionary):
# #     duplicate_keys = []
# #     keys_seen = set()

# #     for key in dictionary:
# #         if key in keys_seen:
# #             if key not in duplicate_keys:
# #                 duplicate_keys.append(key)
# #         else:
# #             keys_seen.add(key)

# #     if len(duplicate_keys) > 0:
# #         print(f"The following keys are duplicated: {', '.join(duplicate_keys)}")
# #     else:
# #         print("No duplicate keys found in the dictionary.")

# # find_duplicate_keys(data)
tablica = []
for key, value in data.items():
    # print(key,hex_to_hsl("#"+key))
    tablica.append([key,hex_to_hsl("#"+key)])
sorted_table = sorted(tablica, key=lambda x: x[1])
for row in sorted_table:
    print(row)
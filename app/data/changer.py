import json


f = open('C:\\Users\\oskarBoladz\\Desktop\\CollorWiki\\app\\data\\jona_colors_to_change.json')

data = json.load(f)
# print(data) ----- NA bazie red gree blu tagi warm cold
# tabele colors podzielic na 360 innych cusiow
# for index in data:
#     print("\""+index[1:7]+"\":{\"name\":{\"Custom\":\""+data[index]+"\"},\"tags\":[]},")
example_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'a': 5, 'e': 6, 'f': 7, 'b': 8}
def find_duplicate_keys(dictionary):
    duplicate_keys = []
    keys_seen = set()

    for key in dictionary:
        if key in keys_seen:
            if key not in duplicate_keys:
                duplicate_keys.append(key)
        else:
            keys_seen.add(key)

    if len(duplicate_keys) > 0:
        print(f"The following keys are duplicated: {', '.join(duplicate_keys)}")
    else:
        print("No duplicate keys found in the dictionary.")

find_duplicate_keys(data)
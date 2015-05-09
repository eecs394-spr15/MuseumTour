import json
from pprint import pprint

with open('tours.json') as data_file:
	data = json.load(data_file)

for tour in data['tours']:
	print tour


# JSON format


# poi1 = {}
# poi1['spots'] = "Mona Lisa"
# poi1['description'] = "Famous painting"
# poi1['link'] = "http://en.wikipedia.org/wiki/Mona_Lisa#/media/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg"

# tour1 = {}

# tour1['tour_name'] = 'test tour'
# tour1['tour_description'] = 'this is the best tour in Hull Museum.'
# tour1['duration'] = 1.0
# tour1['poi'] = poi1
# tour1['id'] = 111
# tour1['type'] = 'scavenger hunt'

# poi2 = {}
# poi2['spot'] = "The scream"
# poi2['description'] = "Famous painting"
# poi2['link'] = "http://en.wikipedia.org/wiki/The_Scream#/media/File:The_Scream.jpg"

# tour2 = {}

# tour2['tour_name'] = 'painting tour'
# tour2['tour_description'] = 'this is a painting tour in Hull Museum.'
# tour2['duration'] = 1.0
# tour2['poi'] = poi2
# tour2['id'] = 222
# tour2['type'] = 'random tour'

# # merge into one json variable
# tours = []
# tours.append(tour1)
# tours.append(tour2)
# final_tour = {}
# final_tour['tours'] = tours

# json_final = json.dumps(final_tour, sort_keys=False)

# data = json.loads(json_final)

# print(json_final)




import requests
from bs4 import BeautifulSoup
import time
import json

guide_url = 'https://www.allaboutbirds.org/guide/browse/shape'
guide_response = requests.get(guide_url)
guide_content = guide_response.content
guide_soup = BeautifulSoup(guide_content, 'html.parser')

# collecting names of all bird shapes
shapes = []
for link in guide_soup.find_all('a', href=lambda href: href and '/guide/browse/shape/' in href):
    shape = link['href'].split('/')[-1]
    shapes.append(shape)

# collecting names of all birds in each shape
birds = set()
for shape in shapes: 
    shape_session = requests.Session()
    shape_response = shape_session.get(f'https://www.allaboutbirds.org/guide/browse/shape/{shape}', headers={'User-Agent': 'Mozilla/5.0'})
    shape_soup = BeautifulSoup(shape_response.content, 'html.parser')
    for a in shape_soup.find_all('a', href=lambda href: href and '/overview' in href):
        href = a['href']
        bird = href.split('/')[-2] 
        birds.add(bird)
print(birds)

# collecting data for every bird
for bird in birds: 
    bird_session = requests.Session()
    bird_response = bird_session.get(f'https://www.allaboutbirds.org/guide/{bird}/id', headers={'User-Agent': 'Mozilla/5.0'})
    bird_soup = BeautifulSoup(bird_response.content, 'html.parser')

    name_element = bird_soup.find('title')
    name_text = name_element.text.strip()
    name = name_text.split('Identification')[0].strip()
    print(name)

    weight_element = bird_soup.find('li', string=lambda text: text and 'Weight:' in text)
    if weight_element == None:
        continue
    weight_text = weight_element.text.strip()
    weight_start = weight_text.index('(') + 1
    weight_end = weight_start
    while weight_end < len(weight_text) and weight_text[weight_end].isdigit():
        weight_end += 1
    weight = weight_text[weight_start:weight_end].strip()

    img_element = bird_soup.find('img', {'data-interchange': True})
    img_url = img_element['data-interchange'].split(',')[0].strip('[]')
    print(name, weight, img_url)

    data = {
        'name': name,
        'weight': weight,
        'image_url': img_url
    }
    with open('bird_data.json', 'a') as f:
        json.dump(data, f)
        f.write('\n')



import os
import json

dir = '../src/markdown-pages'

files = []
for file in os.listdir(dir):
    if file.endswith(".md"):
        files.append(os.path.join(dir, file))


index = {}
index['ricette'] = []

for file in files:
     f = open(file, 'r')
     file_string = f.read()
     f_split = file_string.split('\n')
     title = ""
     slug = ""
     for field in f_split:
         if 'title: ' in field:
             title = field.split('"')[1]
         elif 'slug: ' in field:
             slug = field.split('"')[1]
     index['ricette'].append({'title':title, 'slug':slug})

index_file = 'index.json'

with open(index_file, 'w') as fp:
    json.dump(index, fp,  indent=4)
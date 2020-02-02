#!/usr/bin/env python3

import os
import json
import collections
from fnmatch import fnmatch
from markdown import markdown
from bs4 import BeautifulSoup

BASE_DIR = 'content_src/markdown'
OUTPUT = 'src/assets/articles.json'

result = []

def load():
    files = os.listdir(BASE_DIR)
    articles = [f for f in files if fnmatch(f, '*.md')]
    articles.sort()

    for article in articles:
        with open(os.path.join(BASE_DIR, article)) as f:
            content = f.read()
            title = content.splitlines()[0]
            html = markdown(content)
            soup = BeautifulSoup(html, 'html.parser')
            text = soup.get_text()

            result.append({
                "title": title,
                "html": html,
                "text": text,
            })

def overview():
    print()
    print('IMPORTIERTE INHALTE')
    print('###################')
    print()
    for a in result:
        print('- %s' % a['title'])
    print()

def export():
    with open(OUTPUT, 'w') as output:
        json.dump(result, output, indent=4)


if __name__ == '__main__':
    load()
    overview()
    export()
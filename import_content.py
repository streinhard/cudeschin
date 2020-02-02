#!/usr/bin/env python3

import os
import json
import fnmatch

BASE_DIR = 'content_src/markdown'
OUTPUT = 'src/assets/articles.json'

result = []

def load():
    files = os.listdir(BASE_DIR)
    articles = [f for f in files if fnmatch.fnmatch(f, '*.md')]
    articles.sort()

    for article in articles:
        with open(os.path.join(BASE_DIR, article)) as f:
            content = f.read()
            title = content.splitlines()[0]
            slug = article[3:-3].lower()

            result.append({
                "title": title,
                "slug": slug,
                "content": content,
            })

def overview():
    print()
    print('IMPORTIERTE INHALTE')
    print('###################')
    print()
    for a in result:
        print('- %s' % a['slug'])
    print()

def export():
    with open(OUTPUT, 'w') as output:
        json.dump(result, output, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    load()
    overview()
    export()
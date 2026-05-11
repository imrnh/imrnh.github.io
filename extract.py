import os
import re

src_dir = "original_website_code_for_each_pages"
dest_dir = "src"

for filename in os.listdir(src_dir):
    if filename.endswith(".html"):
        with open(os.path.join(src_dir, filename), "r") as f:
            content = f.read()
        
        # Extract title
        title_match = re.search(r'<title>(.*?)</title>', content)
        title = title_match.group(1) if title_match else "Imran Hossen"

        # Extract content inside <main><div class="container">
        # Using regex with DOTALL to match across newlines
        main_match = re.search(r'<main>\s*<div class="container">(.*?)</div>\s*</main>', content, re.DOTALL)
        
        if main_match:
            inner_content = main_match.group(1).strip()
            
            # Replace absolute asset paths from imrnh.github.io to local /img/ or /css/
            inner_content = inner_content.replace('https://imrnh.github.io/img/', '/img/')
            inner_content = inner_content.replace('https://imrnh.github.io/css/', '/css/')
            
            # Prepare frontmatter
            frontmatter = f"---\nlayout: base.njk\ntitle: {title}\n---\n\n"
            
            # Write to src/ with raw tags
            with open(os.path.join(dest_dir, filename), "w") as out:
                out.write(frontmatter + "{% raw %}\n" + inner_content + "\n{% endraw %}\n")
        else:
            print(f"Could not find main content in {filename}")

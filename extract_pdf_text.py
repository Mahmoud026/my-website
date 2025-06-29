import PyPDF2

pdf_path = 'CS50x.pdf'
txt_path = 'CS50x.txt'

with open(pdf_path, 'rb') as file:
    reader = PyPDF2.PdfReader(file)
    text = ''
    # Extract only the first 2 pages for brevity
    for page in reader.pages[:2]:
        text += page.extract_text() or ''

with open(txt_path, 'w', encoding='utf-8') as out:
    out.write(text)

print(f'Text extracted and saved to {txt_path}') 
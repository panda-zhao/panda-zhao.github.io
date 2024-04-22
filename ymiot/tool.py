import os

# 文件夹路径
folder_path = '/path/to/folder'

# 用于存储文件内容的列表
file_contents = []

# 遍历文件夹中的所有文件
for filename in os.listdir(folder_path):
    # 如果文件是文本文件，则读取其内容并将其添加到列表中
    if filename.endswith('.txt'):
        with open(os.path.join(folder_path, filename), 'r') as f:
            file_contents.append(f.read())

# 打印所有文件的内容
print(file_contents)
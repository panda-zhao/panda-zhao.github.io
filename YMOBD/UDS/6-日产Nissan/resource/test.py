#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：test.py


# 导入os模块
import os
import json

# Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。
# python 最具特色的就是用缩进来写模块。
if True:
    print ("True")
else:
    print ("False")

print('hello world')
# 这是单行注释
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''



# 获取当前文件所在目录的绝对路径
current_path = os.path.abspath(__file__)
# print(current_path) # /Users/panda/Library/CloudStorage/OneDrive-个人/panda-zhao.github.io/YMOBD/UDS/6-日产Nissan-无故障码/resource/test.py

# 获取当前文件所在目录的上一级目录的绝对路径（即根路径）：
root_path = os.path.dirname(current_path)
# print(root_path) # /Users/panda/Library/CloudStorage/OneDrive-个人/panda-zhao.github.io/YMOBD/UDS/6-日产Nissan-无故障码/resource

# 获取根路径下的某个文件的绝对路径
folder_path =  os.path.join(root_path, "AllSys")
print(folder_path)


print('---------- 正文开始 ----------')
# 文件夹路径也可以直接使用文件夹绝对路径
# folder_path = '/Users/panda/Library/CloudStorage/OneDrive-个人/panda-zhao.github.io/YMOBD/UDS/6-日产Nissan-无故障码/resource/AllSys'

# 用于存储文件内容的列表
file_contents = {}

# 遍历文件夹中的所有文件
for filename in os.listdir(folder_path):
    # 如果文件是文本文件，则读取其内容并将其添加到列表中
    if filename.endswith('.txt'):
        with open(os.path.join(folder_path, filename), 'r') as f:
            content = f.read()
            if content.startswith(u'\ufeff'):
              content = content.encode('utf8')[3:].decode('utf8')
              content = json.loads(content)
              for key, value in content.items():
                if value.get("Fox27F") and value['Fox27F'].get("Fox249"):
                  for i in value['Fox27F']['Fox249']:
                    i = i.upper().replace("0X", "0x27000000")
                    if content.get(i) and content[i].get("Fox24C"):
                      if content[i]['Fox24C'].get("Fox1DC") and content[i]['Fox24C'].get("Fox248"):
                        code = content[i]['Fox24C']['Fox1DC'].upper()
                        value = content[i]['Fox24C']['Fox248']
                        file_contents[code] = '0x27AF' + format(int(value), '08x').upper()
                        
with open(f"result.json", mode='w+', encoding="utf8") as f:
  f.write(json.dumps(file_contents, ensure_ascii=False))
print('---------- 执行完成 ----------')


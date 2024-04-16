# -*- coding: utf-8 -*-
# @Time     : 2022/12/1 17:40
# @File     : get_car_data.py
# @Author   : liuhao
# @Email    : 18397728340@163.com
from openpyxl import Workbook
import requests
import re
import json
import os


headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
}

wb = Workbook()
ws = wb.active
ws.append(["品牌id", "品牌名", '车系id', '车系名称', 'logo图片本地地址'])


def main():
    url = "https://www.dongchedi.com/auto/library/x-x-x-x-x-x-x-x-x-x-x"
    item = session.get(url).text
    for i in json.loads(re.findall(r'"brand":(\[.*?\]),', item)[0]):
        if i['info'].get("brand_id"):
            list_url = f"https://www.dongchedi.com/motor/pc/car/brand/get_brand_series_list?brand_id={i['info']['brand_id']}"
            response = session.get(list_url, headers=headers).json()
            response = response['data']
            if response.get("brand_simple_info"):
                image = session.get(response['brand_simple_info']['cover_url'], headers=headers).content
                with open(f"./image/{i['info']['brand_id']}.jpg", "wb") as f:
                    f.write(image)
            else:
                image = session.get(i['info']['image_url'], headers=headers).content
                with open(f"./image/{i['info']['brand_id']}.jpg", "wb") as f:
                    f.write(image)
            for resp in response['category_list'][0]['list']:
                if resp['info'].get("series_name"):
                    ws.append([i['info']['brand_id'], i['info']['brand_name'], resp['info']['series_id'], resp['info']['series_name'], f"./image/{i['info']['brand_id']}.jpg"])


if __name__ == '__main__':
    session = requests.session()
    session.headers.update(headers)
    if not os.path.isdir("./image"):
        os.mkdir("./image")
    main()
    wb.save(f"./汽车数据.xlsx")
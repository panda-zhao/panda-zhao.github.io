#ifndef __YM_UI_H
#define __YM_UI_H

#include <stdint.h>

#define COLOR_TABLE_LEN   (39U)

/* YM_UI 图片像素索引结构 */
typedef struct
{
    uint16_t width;  
    uint16_t height; 
   uint16_t *Color_Tab; // 颜色表指针
    uint8_t ColorIndex[];  
} YM_UI_STRUCT;

/* 颜色表（带时间戳） */
extern const uint16_t Color_Tab_1770114478772[];

extern const YM_UI_STRUCT battery_B_pixel_index;
extern const YM_UI_STRUCT battery_s_pixel_index;

#endif

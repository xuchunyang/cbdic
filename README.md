# 查询《[重編國語辭典修訂本](http://dict.revised.moe.edu.tw/cbdic/index.html)》

## Web

https://cbdic.vercel.app/

## API

https://cbdic.vercel.app/api/get?q=甜

```
$ curl -s 'https://cbdic.vercel.app/api/get?q=%E7%94%9C' | jq
{
  "_id": "5f4defdb33ff4a8b95882f47",
  "heteronyms": [
    {
      "bopomofo": "ㄊㄧㄢˊ",
      "definitions": [
        {
          "def": "味道像糖或蜜的。",
          "example": [
            "如：「這西瓜真甜！」"
          ],
          "type": "形"
        },
        {
          "def": "美好。",
          "example": [
            "如：「甜蜜」、「甜言蜜語」、「她的聲音很甜美。」"
          ],
          "type": "形"
        },
        {
          "def": "安穩、酣熟。",
          "example": [
            "如：「她睡得很甜。」"
          ],
          "quote": [
            "宋．楊萬里〈夜雨不寐〉詩：「更長酒力短，睡甜詩思苦。」"
          ],
          "type": "副"
        }
      ],
      "pinyin": "tián"
    }
  ],
  "non_radical_stroke_count": 6,
  "radical": "甘",
  "stroke_count": 11,
  "title": "甜"
}
```

## Data source

https://github.com/g0v/moedict-data

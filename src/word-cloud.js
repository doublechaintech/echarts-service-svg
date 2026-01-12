const { createCanvas } = require('canvas');
const WordCloud = require('node-wordcloud')();
const fs = require('fs');

const canvas = createCanvas(500, 500);

// Array of words [text: String, weight: Number][]
// The weight of word isn't the absolute size of word, the real size will be automatically calculated based on options.sizeRange
const list = [['word', 150], ['hello', 140], ['world', 130], ['test', 90]];

const wordcloud = WordCloud(canvas, { list });

// you should call draw() to draw the wordcloud manually
wordcloud.draw();

const buffer = canvas.toBuffer();
fs.writeFileSync('wordcloud_2.png', buffer)

// you can use the wordcloud.updateList() to update the word list
// wordcloud.updateList([['word', 150], ['hello', 140], ['world', 130], ['test', 90]]);
// wordcloud.draw();
//
//

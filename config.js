global.owner = ['529984907794'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = '๐ฅ๐๐๐ ๐ข ๐ฟ๐๐๐๐ข๐ฅ\nโ ๐ฟ๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐  ๐๐ ๐๐๐๐๐ก๐๐ฃ๐...\nโ ๐๐ฌ ๐๐ฅ ๐๐๐ฆ๐ข๐ง๐จ\nโ ๏ธSamu330โ ๏ธ '
global.author = 'โฌ๐ค๏ธ๐๐๐๐ข๐ช๐ฏ๐ฏ๐ฌ๐๐ค๏ธ\nโณ  ๐ฅSฮฑอฬณฬฉอออฬฐฬ ฬฎฬฬ mอฬอฬคอฬฃฬฒอฬชฬฬฬฑ ฬฌฬ ฬบฬฬซัฬอฬฬฒออฬฒฬผอฬ ฬชออ Pฬ ฬ อฬฉฬชอฬฉฬฅฬนออฬผerฬชฬฎฬบฬฅฬฬฃอฬฎฬฆฬฅrฬฑฬคออฬคฬฃฬฅออฬฒฬฌัอฬฬอฬปฬช๐ฅ\n\n\n\n\n      ๐บแตaอคnอจdอฌcอคrอฃeอญaอฅtอฎeอค๐บ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

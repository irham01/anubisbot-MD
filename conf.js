const fs = require('fs')
const path = require('path')
const opts = new Object(require('yargs/yargs')(process.argv.slice(2)).exitProcess(false).parse())

global.botpublic = true // Bot Status
global.sesName = opts['test'] ? 'anubisTest' : 'anubisAuth' // Session Folder
global.mongoUser = opts['db'] ? (typeof opts['db'] !== 'string') ? 'mongodb+srv://kannabis:joearmstrong@anubis.l2d7i4o.mongodb.net/?retryWrites=true&w=majority' : opts['db'] : 'mongodb+srv://kannabis:joearmstrong@anubis.l2d7i4o.mongodb.net/?retryWrites=true&w=majority'
global.ownerNum = ['6285601517617'] // owner number
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.thumb = fs.readFileSync('./library/intro.jpg')
global.__root = path.join(__dirname, '/')
global.__temp = path.join(__dirname, '/temp/')
global.lastMsg = {}
global.msg = {
    err: "error ngab! coba hubungi owner",
    nUrl: "bad URL",
    nText: "Invalid param text!",
    nNumber: "Invalid number",
    nMedia: "Invalid media",
    pUrl: "Please enter param url!",
    pQuery: "Please enter param query!",
    pId: "Please enter param id!",
}
global.mess = {
    wait: "Bentar ngab!",
    success: 'Berhasil ngab! cieeee...',
}
global.anuCookie = {
    ig: 'mid=YgQrhAALAAHVEByveN6LoHT2uigp; ig_did=9943A681-BE18-4349-A069-A733B246CB13; ig_nrcb=1; datr=RgYGYsn2bMsSLed5QfICcQgy; ds_user_id=52085673672; shbid="17162,52085673672,1697232442:01f7ccceb6cebd5f5a1e16224244b17337e4156b53fe75d9c4ccd09f693ed3b3c5e233bb"; shbts="1665696442,52085673672,1697232442:01f7fd5b63eb223d21d75512b1e524fedc8d0546bd31aea005300f32b66075a5b94b437d"; csrftoken=D3UnRjNm5Xps3VSUpY3mN8mFWFHhZK5d; sessionid=52085673672%3Ahquf19s6JgPnGy%3A1%3AAYfg_OVCTZp_tpInh97RdIRTKj8Tb5UA2E_EEcojSA; rur="EAG,52085673672,1697306076:01f7fd247a2daa566949f6308888568607d7d358867f71908dfbc65a847eca1afee98468"', // instagram cookies
    joox: '', // joox cookies
    pinterest: '', // pinterest cookies
    soundcloud: 'iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX', //soundcloud client_id
}
global.pingWeb = 'google.com'
global.anuFooter = 'made with ❤️ by nancy' //footer text
global.packname = 'gabut banh maknya bikin stiker!' // exif sticker package name
global.author = '6289653909054 • anubis-bot' //exif sticker author
global.server = false
global.apirnobg = [
    "bru3EGkeVy8QnFMfyhSBjp5U",
    "Wu6eovAy7DeVFz1v2yuzYKJb",
    "1gdCEVhDVAbQHwV8LgWcrMHA",
    "CwTa6J7FhrH32JfxULgAexHc",
    "Swpj4r78BBg6WU6SEHHJ1qLg",
]

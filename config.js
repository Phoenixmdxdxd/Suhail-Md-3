const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "www.youtube.com" ;  
global.video= "www.youtube.com" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://famous-marie-jeanne-hinakai-0a9ffd01.koyeb.app/"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="stephenallison505@gmail.com"
global.location="Lagos,Africa."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/Phoenixmdxdxd/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://wa.me/2348024568393";
global.website =process.env.GURL || "https://wa.me/2348024568393" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/ZVNPsDx/IMG-20241228-WA0135.jpg" || "https://i.ibb.co/T1nw4VL/IMG-20241217-WA0167-1.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑆𝑡𝑒𝑝ℎ𝑒𝑛 𝑁𝑖𝑎 2025 © | 𝐵𝑢𝑖𝑙𝑡 𝑤𝑖𝑡ℎ 𝑐𝑜𝑑𝑒, 𝑑𝑟𝑖𝑣𝑒𝑛 𝑏𝑦 𝑖𝑛𝑛𝑜𝑣𝑎𝑡𝑖𝑜𝑛" 


global.devs = "2348024568393" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348024568393";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/T1nw4VL/IMG-20241217-WA0167-1.jpg" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_34_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXBVZ2Nza0xldmo5b05haXowQW14QlV6UXd2ZC9zM2JBRy84WkJMZVNuTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY1lUTjhncFZTTnVKT2hmZVp0Y3MzUVwiLFxuICBcInBob25lSWRcIjogXCI5NjBlOGZmNC03NGUxLTRhYzktOTExYy00YTBiMzY5ZDQ2MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjE1LFxuICAgICAgNDMsXG4gICAgICA4NyxcbiAgICAgIDEzNCxcbiAgICAgIDIxNyxcbiAgICAgIDE1OCxcbiAgICAgIDIyNCxcbiAgICAgIDE0OCxcbiAgICAgIDEzNSxcbiAgICAgIDIwLFxuICAgICAgMjM3LFxuICAgICAgNTksXG4gICAgICAxNDcsXG4gICAgICAyNDgsXG4gICAgICA1MSxcbiAgICAgIDEzMyxcbiAgICAgIDIyMixcbiAgICAgIDI1NCxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgMTYsXG4gICAgICAxOTUsXG4gICAgICA1MyxcbiAgICAgIDE4MixcbiAgICAgIDIwMSxcbiAgICAgIDY3LFxuICAgICAgMTc5LFxuICAgICAgMjE5LFxuICAgICAgNDksXG4gICAgICAxMTgsXG4gICAgICAxMTQsXG4gICAgICAzOSxcbiAgICAgIDQ0LFxuICAgICAgMTY5LFxuICAgICAgMTE2LFxuICAgICAgMTAwLFxuICAgICAgMjAzLFxuICAgICAgODQsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeTRpcVlERU9iWXRNTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImozM1FYVEtqUXZDWnZkaU5XZW9oOHEvREt0R0RwNUFRSWkvRE9yTFFCRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXo0UWIxdDd6d0pVdkdqd2IxV2dvNEJ2K3dTUk92ZlNsTWg0Z1lQVkRmSFdYY1BNb2ZyUk12YnNVck5aMG9hVnl5WldCQzJpOFlLMmFGK04vNkNmRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2pjdit5V3dvS1pvVGxDTEx6ZUwvM0ZQUDI4Z2ZwTkhXdXFuc2xsUWJWZ3pubEVRNCtVSDR0MHN3WDRyVUFyQ1UvbFgvZlJ4Zmk0dnJ5WkFCVjZiakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI0NTY4MzkzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY5MTkyMzkyOTAwNjExOjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDI0NTY4MzkzOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MTk4NTI1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUEyZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTJmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGVrVkJJUGFneTVqOXptalgzbWJGMXpuYlQvK0VhNkp6LzVvbVlqa25BTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODUxNjkyNTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTk4NTIxNDYwOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUEyZy5qc29uIjogIntcImtleURhdGFcIjpcIjRqczZ3U0FJWjIvTFdtbDBGODdWcjVwYkxlUXJrcGl4aklXQmFwRno0TUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODg1MTY5MjU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzUxOTg1MjUzMTM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "𝑆𝑡𝑒𝑝ℎ𝑒𝑛 𝑁𝑖𝑎 2025 © | 𝐵𝑢𝑖𝑙𝑡 𝑤𝑖𝑡ℎ 𝑐𝑜𝑑𝑒, 𝑑𝑟𝑖𝑣𝑒𝑛 𝑏𝑦 𝑖𝑛𝑛𝑜𝑣𝑎𝑡𝑖𝑜𝑛" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐴 𝐿 𝐿 𝐼 𝑆 𝑂 𝑁",
  packname: process.env.PACK_NAME || "ℙ𝕠𝕚𝕤𝕠𝕟 𝕀𝕧𝕪",
  botname : process.env.BOT_NAME  || "ℙ𝕠𝕚𝕤𝕠𝕟 𝕀𝕧𝕪",
  ownername:process.env.OWNER_NAME|| "𝑆𝑡𝑒𝑝ℎ𝑒𝑛 𝑁𝑖𝑐ℎ𝑜𝑙𝑎𝑠",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

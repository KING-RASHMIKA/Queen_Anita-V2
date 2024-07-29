//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rashbotdatabase_owner:SDq6GvLVBPF1@ep-tiny-firefly-a1x6w4ql.ap-southeast-1.aws.neon.tech/rashbotdatabase?sslmode=require";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "94717775628";
global.owner = process.env.OWNER_NUMBER || "94717775628";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhWUmd1N25vRktjUUl5UzBFbE1Cc0RyUm95V0RscHREVHhGbkNyTWxYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTStnbE0wbEwyV3dxQXJLa01MUVFUY25sQnlDeXNrRDBiOGpZQmRKWmtSaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSUVvblZqWVVTcVBRSExLM05jWlJBSS9ockYxckFGMjhuMVp5eWNSWmxnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMS9pcU9wM2FFbTBSUE11cmdNSGZvTzZWRnlyNmt5VUxGTzI5a0NEU0JnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1HVHdUQURpM1o3M3FReDQwZ1FkRjdqS01WamY5TTlkWUp5d2NsUkxzRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3N0s5ZExETm1YdDFPQVk5MG5Ud1p5bmpVay90dTdyQTFibGVtL2lOV1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUsvb1owbU94V1pVNEEySklLbXZ5Y2ZDUHFaOWZ3SWR0S2hLdTlnV0tuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXpnZ0F1ZUR3ZVdYdXVPMTJOZkxTaHF4YW8vdGJ5WUxrU2dVUjlFTUFEND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhxWUVPR1VKeGcyVDczYVJYRi9ydExUZVFMVGprQ1JqcEVWQjBHc1ZsYVRuZkZvc0FTQmdNbUd1SzN5VUdlWGxramI0N3ZjTjdrcW94THMyQWczTmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgxLCJhZHZTZWNyZXRLZXkiOiJKRkVncEVqTmlJN3QxeDNkU2RHbHh4ZGc3UnRveTRpakdqSkFzSElreVprPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg5Nzg4NTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEzM0UwQTlBRTkyQUU5Q0RFN0NFMTU0OEIyN0ZFM0I3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNjU2NDN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IngtU3Z6ZnBVU3ZLSW9BaEgtQ2sxQmciLCJwaG9uZUlkIjoiNjY4NWRmODQtNjFlZC00N2ViLTk2YTctMjJkZjY3ODAwYWFlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVNFBFYlVDd0hKeUk4ZVNiM0dNYzBlZUpTaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaMXBUbmEzVWwwY0lwWGZKWEJmNkh5Y0M5TUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVdRVzc5RDMiLCJtZSI6eyJpZCI6Ijk0Nzg5Nzg4NTA3OjE0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMy92Y01FRUpuZ25yVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1S1dJck1Md0dkbjZWU0NZWU9GTTA5UTdYeVViTkVSVEx2M3JGTlJBc3hNPSIsImFjY291bnRTaWduYXR1cmUiOiJPU0x1VjFkc3gwVUI4YjNsQ2FZdTdUZTMwdXJtTTJycTZNcU5pU1ZsekpiRkh4VlE5RHFlZ08rUXh6Unorei9Wd0VZSmhYN2g1VEtCOCtVUURNWTNEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGpESWgrdUk3bWpwa3QreHZQeFJ1UUQ2TE1nNHpxdm0zTTFTK2ZDNFhra3pxMCtwMTQwZjZPa3J1N3BrUkxHWnQ0UHh2ckNoYk9DSE80U0NvTXQ2aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4OTc4ODUwNzoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiaWxpS3pDOEJuWitsVWdtR0RoVE5QVU8xOGxHelJFVXk3OTZ4VFVRTE1UIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjY1NjM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUoyRiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "JANITH RASHMIKA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

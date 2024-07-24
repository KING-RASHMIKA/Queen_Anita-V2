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
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rashgaming_user:2s0q0uVCMBSCcAwdywdeDF9nWdvNHt70@dpg-cqgfe5dds78s73ce7qm0-a.singapore-postgres.render.com/rashgaming";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "94717775628";
global.sudo = process.env.SUDO || "94717775628";
global.owner = process.env.OWNER_NUMBER || "94717775628";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVqTE5MM3dYWFVJNnFiaVZuLzRrWGZtVWYwRzZJcS9Ta0pHUDBGaG1rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3lna0lJYjNhdkVlOEliODhVazZsdDJDdE9IYmZIbXV4MW1veGRwUlB4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTVd1STN0bXlzb1h4M0FXNjBpREF2NXk5Mm5YaXQrVktydHorek0vUWxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYbEozSVI3VXRMSkhqQURGWENKQisvT0VJNzlRbVNlcWpKWElSTDR3R1hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKR3dpeEppOVN1d1kyZlVyVVB6aGNpL0NUdVFjTWxOUHZoaEtHT1lxbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxZT05XcTlnNFFGTHJ2RzdaMTQwbElGeGN3K3FBbVEvMkFzeHVoY3FuR289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxlTmRkUzBBelVVdy9ockdsVWE0QWZvTGxqRkVBYmQwZG91YlVaeTgxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzViQTcxakJ3aU54ZmI3cFhlajZCWkdINURDL3RIOHhnaEpablIzSVF5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNjWGs2OUVRdFk0eXJncy9PWGhvOFEwUjVqYjkrLzJhWXhGK1psYjFueVNpcmZWWU5yY3d0MEVXSzk1cUVCVXZOYXloUTZrUEJlU0lyU0pYMWk2b0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IlkzdVNHWmJYb1hTbFVNOXNxVlZuWGdvL3Fhb2h2WmdENmNzYjhwdUNWZVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRwQl9fWnN4Um9pdGRuZUxsclVhZEEiLCJwaG9uZUlkIjoiNDgxZTM0MWMtN2RhYS00MjVjLWJiYTctM2FlOWJmNWI2NzIzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0xQmhCaWFtcEFacnBLYmN5S1VFaU5uQ1FoST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqOTdXWUhLMzBMVDV1eXZNWnZPR0Q2VkZ2Sms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1BKWVAzS1IiLCJtZSI6eyJpZCI6Ijk0NzU4Nzc1NjI4Ojc3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNRzZxTzRHRUxEZmc3VUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmMTdTdUd1Rk9ld0luUjdsTDMwYzhsUjBKNWdLNHQ3YnZXMTNkU0JyaEJJPSIsImFjY291bnRTaWduYXR1cmUiOiJUTjVDRU0zRkZUcFI3SzQ5c1hocTI0NTRXQm9KQVhtOTVPdFMrS0M1SFdsMWZkcFd6Nmw4eURpeWw1OW1XUU91by83NnR1cFVqZ0JSL1hvbVptd3dDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZEw4d2plc3dBRzJLY0JxbUtqNCswUTJBT2xFc3FYMnhXb2dEL2Uzak13UkRVazluRzZJZ0p5eUpRS1ZzL0phR1Q2cDFsTkV6UnpsZ1BncTl3ZkpxQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1ODc3NTYyODo3N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYOWUwcmhyaFRuc0NKMGU1Uzk5SFBKVWRDZVlDdUxlMjcxdGQzVWdhNFFTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODIzMTY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5MdSJ9"
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

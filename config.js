//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU4xSnJra0J5SCtiejJPbDVVRThkSEpmNlpXU3FVWmdtbEExaEd1MWxXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlFQRXJIUEFTUjRqeERpbXRiVDFXTVJpdDdjODdEVGxnQS9RbWNKQklTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSG1NaWxJYmRWUFc3MW51TkI5N3lGOU1Cc2dnTXZERFd5YjZkNUdaU2w0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdWxlZTVDSEsyZ01DVGxQTUtRVktZcFBCWnlqcEM4Njk5cHk5blFoaXhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FWEFjOGdMc0ZVQU8xU0IraFE4RVdCdFlna3E1VmJnQUxrVEl0U1h6MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklqSFBwVjJYbWpLejFGdm1RajltTXBYZXh5aTZQdXNVMWZQOENDQ0tRMWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxSeU5EdW1sbTZDODZpRjhXNlBuVGFhYjBtR2RKZE5pc21rdmVvWnpsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieklPdUF6WC9xc2RxeVdHeWRBSHlpZldNa2VxQ1dsTWRWL0Zpc1MwTCtCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRYaTVXcEJac1dPaHFnczA4QlU3VTdGVXVoS3pwT3JVSGlNTWV4dUswem16SzBtQmY4eU5zdE9weVhGd2VDdS91YmVGeUEybHRzMUVVTmtsbVZqSEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMxLCJhZHZTZWNyZXRLZXkiOiIwMlRKZ1JCYjlBbmxxZ2EyUFByUHF3amd4c3FUb3RxbjAweDRWTlloVG9vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNDEyOTk0NTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzVFRDM4REFCOEMzREFDNEEyMEFGNjhFMUNGODM3NkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM0Njk5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQl9XREpfSndRR1dDV01wM2tYMVhQZyIsInBob25lSWQiOiI5OTRmMjMzOC03NDZhLTQ1ZmItODQxYi0yOTRjMjc1YTNiZTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWI5UnJHbnJyNU9YNWp0cy9LQmFQUjgrYW04PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPWmxvTU9lT2dFRUtYNEZZNnhiNTduVUJEdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2UUc0TFQ1WCIsIm1lIjp7ImlkIjoiMjM0OTA0MTI5OTQ1NTozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJ5Y2UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01xOHA5Y0VFS0w3enJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVPdjhyMFJ4M2FVdkwzaTVXN3ZSUG5ZVkpMRXEyZjR4NjhvTHFyMzg4MFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iks2TkJnYWxFdVI2MW4zQk4rWWVyRnVKMG1IUDNsUWFhZ2ljQXZlQTA0aExpdjM5V1FmY1RaVHdxL0g3S09KWFRxS2JzT2FlekFBdE9hZDVZWFNHRERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnL2Zxb3Z1d0FpbFk0M1RMckNLSE1Tc3lDTkxoVjZhZDZ3cmorVk96U0NQNDhndzJqa0gySENMMHFaV1F1U3lrc2FZalQ3di9ZNlJ4azUrR0dSUjNEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDEyOTk0NTU6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRHIvSzlFY2QybEx5OTR1VnU3MFQ1MkZTU3hLdG4rTWV2S0M2cTkvUE5FIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzQ2OTkwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtHYyJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

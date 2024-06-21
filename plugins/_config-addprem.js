const handler = async (m, {conn, text, usedPrefix, command}) => {
  let who = getTargetUser(m);
  const errorText = `*@tag*`;
  
  if (!who) return m.reply(errorText, null, {mentions: conn.parseMention(errorText)});

  const user = global.db.data.users[who];
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  const name = '@' + who.split`@`[0];

  if (!user) {
    const errorUserNotFound = `*The user ${name} is not found in my database*`;
    return m.reply(errorUserNotFound, null, {mentions: conn.parseMention(errorUserNotFound)});
  }

  const now = Date.now();
  const durations = {
    'addprem2': 60 * 60 * 1000 * txt, // hours
    'userpremium': 60 * 60 * 1000 * txt, // hours
    'addprem': 24 * 60 * 60 * 1000 * txt, // days
    'userpremium2': 24 * 60 * 60 * 1000 * txt, // days
    'addprem3': 7 * 24 * 60 * 60 * 1000 * txt, // weeks
    'userpremium3': 7 * 24 * 60 * 60 * 1000 * txt, // weeks
    'addprem4': 30 * 24 * 60 * 60 * 1000 * txt, // months
    'userpremium4': 30 * 24 * 60 * 60 * 1000 * txt, // months
  };

  const duration = durations[command];
  if (!duration) return;

  if (now < user.premiumTime) user.premiumTime += duration;
  else user.premiumTime = now + duration;

  user.premium = true;

  const formattedTime = await formatTime(user.premiumTime - now);
  const premiumText = `*NEW PREMIUM USER*\n\n*USER : ${name}*\n*DURATION : ${txt}*\n*📉 REMAINING : ${formattedTime}*`;

  m.reply(premiumText, null, {mentions: conn.parseMention(premiumText)});
};

const getTargetUser = (m) => {
  if (m.isGroup) return m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  return m.chat;
};

const formatTime = async (ms) => {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  let timeString = '';
  if (days) timeString += `${days} day${days > 1 ? 's' : ''} `;
  if (hours) timeString += `${hours} hour${hours > 1 ? 's' : ''} `;
  if (minutes) timeString += `${minutes} minute${minutes > 1 ? 's' : ''} `;
  if (seconds) timeString += `${seconds} second${seconds > 1 ? 's' : ''} `;
  return timeString.trim();
};

handler.help = ['addprem [@user] <days>'];
handler.tags = ['owner'];
handler.command = ['addprem2', 'userpremium', 'addprem', 'userpremium2', 'addprem3', 'userpremium3', 'addprem4', 'userpremium4'];
handler.group = true;
handler.rowner = true;

export default handler;

const { Telegraf } = require("telegraf");

const BOT_TOKEN = "8174866733:AAHj3ZZpHVmRG5xJ3qlP6lTjiYPjOrwT4KE";
const CHANNEL_INVITE_LINK = "https://t.me/+ZzIFhnHrUIg0NWNl";

const VIDEO_FILE_ID = "BAACAgUAAxkBAAOkaj9iYK4nW568nvnAa9Binq2pjKEAAoEhAAIzpulVNm7MfmSYd7A8BA";
const APK_FILE_ID   = "BQACAgUAAyEFAASIc9-TAAIuTGo780-00zou3wABOTWGTpYaYiDk8AACCSEAAuZA0FWgkA5WYczGvDwE";

const pendingRequests = new Map();
const bot = new Telegraf(BOT_TOKEN);

// Remove menu button
bot.telegram.deleteMyCommands().catch(() => {});
bot.telegram.setChatMenuButton({ menuButton: { type: "default" } }).catch(() => {});

// ── MSG 1 TEXT ──
const MSG1 = "🔥 WELCOME TO TEAM ARJUN  🔥\n\n📈 What you Will Get :\n✅ High Accuracy Colour Trading Signals\n✅ Instant Replies & Full Support\n✅ Daily Consistent Profit Updates\n✅ Earning Potential ₹10,000 se ₹50,000+ per day\n\n🚀 Zero Excuses — Only Profit Mindset!\nJoin Now And Make Profit Fast 💯\n\n👑 Trusted by Winners — Run by Arjun\n\n— Team EARN WITH ARJUN 🔥";

const MSG1_ENTITIES = [
  { offset: 0,   length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 26,  length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 30,  length: 2, type: "custom_emoji", custom_emoji_id: "5028746137645876535" },
  { offset: 53,  length: 2, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 92,  length: 2, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 125, length: 2, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 159, length: 2, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 208, length: 2, type: "custom_emoji", custom_emoji_id: "5449683594425410231" },
  { offset: 277, length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 281, length: 2, type: "custom_emoji", custom_emoji_id: "5368529160870306132" },
  { offset: 342, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
];

// ── MSG 2 TEXT ──
const MSG2 = "⚡ JAI CLUB GAME PRO HACK ⚡\n\n💯 GURANTEED LOSS RECOVER BY ARJUN KA TOOL 💯\n\n👉 Minimum Deposit - ₹500/₹1000/₹2000\n🔥 Daily Profit Limit\n📈 Profit UpTo ~ ₹50000\n\n🛑 JAI CLUB TOOL INSTALL NOW";

const MSG2_ENTITIES = [
  { offset: 0,   length: 2, type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
  { offset: 25,  length: 2, type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
  { offset: 28,  length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 71,  length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 75,  length: 2, type: "custom_emoji", custom_emoji_id: "5832251986635920010" },
  { offset: 113, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 135, length: 2, type: "custom_emoji", custom_emoji_id: "5028746137645876535" },
  { offset: 160, length: 2, type: "custom_emoji", custom_emoji_id: "5188481279963715781" },
];

// ── MSG 3 TEXT ──
const MSG3 = "🔔 Your request to join TEAM ARJUN has been approved!\n\n✅ Please Verify Yourself\n🚫 Final step pending…\n\n👇 Click VERIFY NOW to activate your access!";

const MSG3_ENTITIES = [
  { offset: 0,   length: 2, type: "custom_emoji", custom_emoji_id: "5458603043203327669" },
  { offset: 55,  length: 2, type: "custom_emoji", custom_emoji_id: "6307555706383898814" },
  { offset: 80,  length: 2, type: "custom_emoji", custom_emoji_id: "6307388675105757993" },
  { offset: 104, length: 2, type: "custom_emoji", custom_emoji_id: "6114077020361070827" },
];

// ── MSG 4 TEXT (after verified) ──
const MSG4 = "✅ You've Been Verified as a Real User\n✉️ Your Request is Now Under Admin Approval\n\n💬 Want to Recover Your Losses Fast?\n👑 DM — @Earn_arjun ❤️";

const MSG4_ENTITIES = [
  { offset: 0,   length: 2, type: "custom_emoji", custom_emoji_id: "6107204505751788130" },
  { offset: 38,  length: 2, type: "custom_emoji", custom_emoji_id: "5253742260054409879" },
  { offset: 83,  length: 2, type: "custom_emoji", custom_emoji_id: "6046412391887935443" },
  { offset: 120, length: 2, type: "custom_emoji", custom_emoji_id: "5805337324967432449" },
  { offset: 131, length: 11, type: "mention" },
  { offset: 143, length: 2, type: "custom_emoji", custom_emoji_id: "6296218646284863141" },
];

// ── JOIN REQUEST HANDLER ──
bot.on("chat_join_request", async (ctx) => {
  const { chat, from } = ctx.chatJoinRequest;
  console.log(`Join request: ${from.first_name} (${from.id})`);
  pendingRequests.set(from.id, chat.id);

  try {
    // MSG 1 — Video + text + 2 buttons
    await ctx.telegram.sendVideo(from.id, VIDEO_FILE_ID, {
      caption: MSG1,
      caption_entities: MSG1_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: "👑 JOIN VIP CHANNEL",    url: "https://t.me/+43EaQismqHFiYjFl" }],
          [{ text: "🏆 GET PROFIT TOOL APK", url: "https://t.me/c/2289295251/11768" }],
        ],
      },
    });

    // MSG 2 — APK + text + 1 button
    await ctx.telegram.sendDocument(from.id, APK_FILE_ID, {
      caption: MSG2,
      caption_entities: MSG2_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: "💵 HOW TO USE", url: "https://t.me/c/2289295251/11745" }],
        ],
      },
    });

    // MSG 3 — Verify message + green VERIFY NOW button
    await ctx.telegram.sendMessage(from.id, MSG3, {
      entities: MSG3_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: "⚠️ VERIFY NOW", callback_data: `verify:${chat.id}` }],
        ],
      },
    });

  } catch (e) {
    console.error(`DM failed for ${from.id}:`, e.description || e.message);
  }
});

// ── VERIFY BUTTON TAPPED ──
bot.action(/^verify:(.+)$/, async (ctx) => {
  const chatId = ctx.match[1];
  const userId = ctx.from.id;
  try {
    await ctx.telegram.approveChatJoinRequest(chatId, userId);
    pendingRequests.delete(userId);
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] }).catch(() => {});
    await ctx.telegram.sendMessage(userId, MSG4, { entities: MSG4_ENTITIES });
    await ctx.answerCbQuery("✅ Verified! Welcome to TEAM ARJUN");
  } catch (e) {
    console.error("Approve failed:", e.description || e.message);
    await ctx.answerCbQuery("Something went wrong. Try again.", { show_alert: true });
  }
});

// ── /start — only respond if pending request ──
bot.start(async (ctx) => {
  const userId = ctx.from.id;
  if (pendingRequests.has(userId)) {
    const chatId = pendingRequests.get(userId);
    try {
      await ctx.telegram.approveChatJoinRequest(chatId, userId);
      pendingRequests.delete(userId);
      await ctx.reply(MSG4, { entities: MSG4_ENTITIES });
    } catch (e) {
      await ctx.reply("✅ Verified! Welcome to TEAM ARJUN");
    }
  }
});

// ── LAUNCH ──
bot.launch({
  allowedUpdates: ["message", "callback_query", "chat_join_request"],
});

console.log("✅ Bot is running 24/7...");
process.once("SIGINT",  () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

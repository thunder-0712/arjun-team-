const { Telegraf } = require("telegraf");

const BOT_TOKEN = "8174866733:AAHj3ZZpHVmRG5xJ3qlP6lTjiYPjOrwT4KE";
const CHANNEL_INVITE_LINK = "https://t.me/+ZzIFhnHrUIg0NWNl";
const CHANNEL_NAME = "TEAM ARJUN";

const VIDEO_FILE_ID = "BAACAgUAAxkBAAOkaj9iYK4nW568nvnAa9Binq2pjKEAAoEhAAIzpulVNm7MfmSYd7A8BA";
const APK_FILE_ID   = "BQACAgUAAyEFAASIc9-TAAIuTGo780-00zou3wABOTWGTpYaYiDk8AACCSEAAuZA0FWgkA5WYczGvDwE";

// Store pending requests: userId -> chatId
const pendingRequests = new Map();

const bot = new Telegraf(BOT_TOKEN);

// ─── REMOVE MENU BUTTON ON STARTUP ───────────────────────────────────────────
bot.telegram.deleteMyCommands();
bot.telegram.setChatMenuButton({ menuButton: { type: "default" } }).catch(() => {});

// ─── JOIN REQUEST ─────────────────────────────────────────────────────────────
bot.on("chat_join_request", async (ctx) => {
  const { chat, from } = ctx.chatJoinRequest;
  console.log(`Join request: ${from.first_name} (${from.id})`);
  pendingRequests.set(from.id, chat.id);

  try {
    // ── MSG 1: Video + caption with premium emojis + 2 buttons ──
    await ctx.telegram.sendVideo(from.id, VIDEO_FILE_ID, {
      caption: "🔥 WELCOME TO TEAM ARJUN  🔥\n\n📈 What you Will Get :\n✅ High Accuracy Colour Trading Signals\n✅ Instant Replies & Full Support\n✅ Daily Consistent Profit Updates\n✅ Earning Potential ₹10,000 se ₹50,000+ per day\n\n🚀 Zero Excuses — Only Profit Mindset!\nJoin Now And Make Profit Fast 💯\n\n👑 Trusted by Winners — Run by Arjun\n\n— Team EARN WITH ARJUN 🔥",
      caption_entities: [
        { offset: 0,  length: 2,  type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
        { offset: 2,  length: 22, type: "bold" },
        { offset: 24, length: 2,  type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
        { offset: 26, length: 1,  type: "bold" },
        { offset: 28, length: 2,  type: "custom_emoji", custom_emoji_id: "5028746137645876535" },
        { offset: 30, length: 20, type: "bold" },
        { offset: 51, length: 1,  type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
        { offset: 52, length: 38, type: "bold" },
        { offset: 91, length: 2,  type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
        { offset: 93, length: 30, type: "bold" },
        { offset: 124,length: 2,  type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
        { offset: 126,length: 22, type: "bold" },
        { offset: 149,length: 2,  type: "custom_emoji", custom_emoji_id: "5832251986635920010" },
        { offset: 152,length: 2,  type: "custom_emoji", custom_emoji_id: "5805337324967432449" },
        { offset: 188,length: 2,  type: "custom_emoji", custom_emoji_id: "5368529160870306132" },
        { offset: 218,length: 2,  type: "custom_emoji", custom_emoji_id: "5188344996356448758" },
        { offset: 232,length: 2,  type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
      ],
      reply_markup: {
        inline_keyboard: [
          [{ text: "👑 JOIN VIP CHANNEL",    url: "https://t.me/+43EaQismqHFiYjFl" }],
          [{ text: "🏆 GET PROFIT TOOL APK", url: "https://t.me/c/2289295251/11768" }],
        ],
      },
    });

    // ── MSG 2: APK + caption with premium emojis + 1 button ──
    await ctx.telegram.sendDocument(from.id, APK_FILE_ID, {
      caption: "⚡ JAI CLUB GAME PRO HACK ⚡\n\n💯 GURANTEED LOSS RECOVER BY ARJUN KA TOOL 💯\n\n👉 Minimum Deposit - ₹500/₹1000/₹2000\n🔥 Daily Profit Limit\n📈 Profit UpTo ~ ₹50000\n\n🛑 JAI CLUB TOOL INSTALL NOW",
      caption_entities: [
        { offset: 0,  length: 2,  type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
        { offset: 2,  length: 22, type: "bold" },
        { offset: 24, length: 2,  type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
        { offset: 28, length: 2,  type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
        { offset: 30, length: 41, type: "bold" },
        { offset: 71, length: 2,  type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
        { offset: 75, length: 2,  type: "custom_emoji", custom_emoji_id: "5832251986635920010" },
        { offset: 78, length: 29, type: "bold" },
        { offset: 108,length: 2,  type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
        { offset: 112,length: 19, type: "bold" },
      ],
      reply_markup: {
        inline_keyboard: [
          [{ text: "💵 HOW TO USE", url: "https://t.me/c/2289295251/11745" }],
        ],
      },
    });

    // ── MSG 3: Verify message + VERIFY NOW button (callback = green) ──
    await ctx.telegram.sendMessage(from.id,
      "🔔 Your request to join TEAM ARJUN has been approved!\n\n✅ Please Verify Yourself\n🚫 Final step pending…\n\n👇 Click VERIFY NOW to activate your access!",
      {
        entities: [
          { offset: 0,  length: 2,  type: "custom_emoji", custom_emoji_id: "5458603043203327669" },
          { offset: 2,  length: 45, type: "bold" },
          { offset: 49, length: 1,  type: "custom_emoji", custom_emoji_id: "6307555706383898814" },
          { offset: 50, length: 24, type: "bold" },
          { offset: 75, length: 2,  type: "custom_emoji", custom_emoji_id: "6307388675105757993" },
          { offset: 77, length: 21, type: "bold" },
          { offset: 99, length: 2,  type: "custom_emoji", custom_emoji_id: "6114077020361070827" },
          { offset: 101,length: 42, type: "bold" },
        ],
        reply_markup: {
          inline_keyboard: [
            [{ text: "⚠️ VERIFY NOW", callback_data: `verify:${chat.id}` }],
          ],
        },
      }
    );

  } catch (e) {
    console.error(`DM failed for ${from.id}:`, e.description || e.message);
  }
});

// ─── VERIFY BUTTON TAPPED ────────────────────────────────────────────────────
bot.action(/^verify:(.+)$/, async (ctx) => {
  const chatId = ctx.match[1];
  const userId = ctx.from.id;

  try {
    await ctx.telegram.approveChatJoinRequest(chatId, userId);
    pendingRequests.delete(userId);

    // Remove verify button
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] }).catch(() => {});

    // Send after-verified message (NO START AGAIN button as per your requirement)
    await ctx.telegram.sendMessage(userId,
      "✅ You've Been Verified as a Real User\n✉️ Your Request is Now Under Admin Approval\n\n💬 Want to Recover Your Losses Fast?\n👑 DM — @Earn_arjun ❤️",
      {
        entities: [
          { offset: 0,   length: 1,  type: "custom_emoji", custom_emoji_id: "6107204505751788130" },
          { offset: 1,   length: 37, type: "bold" },
          { offset: 39,  length: 2,  type: "custom_emoji", custom_emoji_id: "5253742260054409879" },
          { offset: 41,  length: 43, type: "bold" },
          { offset: 85,  length: 2,  type: "custom_emoji", custom_emoji_id: "6046412391887935443" },
          { offset: 87,  length: 35, type: "bold" },
          { offset: 123, length: 2,  type: "custom_emoji", custom_emoji_id: "5805337324967432449" },
          { offset: 125, length: 5,  type: "bold" },
          { offset: 131, length: 11, type: "mention" },
          { offset: 143, length: 2,  type: "custom_emoji", custom_emoji_id: "6296218646284863141" },
        ],
      }
    );

    await ctx.answerCbQuery("✅ Verified! Welcome to " + CHANNEL_NAME);

  } catch (e) {
    console.error("Approve failed:", e.description || e.message);
    await ctx.answerCbQuery("Something went wrong. Try again.", { show_alert: true });
  }
});

// ─── /start — only for people who came from channel request ─────────────────
bot.start(async (ctx) => {
  const userId = ctx.from.id;
  if (pendingRequests.has(userId)) {
    const chatId = pendingRequests.get(userId);
    try {
      await ctx.telegram.approveChatJoinRequest(chatId, userId);
      pendingRequests.delete(userId);
      await ctx.reply(
        "✅ You've Been Verified as a Real User\n✉️ Your Request is Now Under Admin Approval\n\n💬 Want to Recover Your Losses Fast?\n👑 DM — @Earn_arjun ❤️",
        {
          entities: [
            { offset: 0,   length: 1,  type: "custom_emoji", custom_emoji_id: "6107204505751788130" },
            { offset: 1,   length: 37, type: "bold" },
            { offset: 39,  length: 2,  type: "custom_emoji", custom_emoji_id: "5253742260054409879" },
            { offset: 41,  length: 43, type: "bold" },
            { offset: 85,  length: 2,  type: "custom_emoji", custom_emoji_id: "6046412391887935443" },
            { offset: 87,  length: 35, type: "bold" },
            { offset: 123, length: 2,  type: "custom_emoji", custom_emoji_id: "5805337324967432449" },
            { offset: 125, length: 5,  type: "bold" },
            { offset: 131, length: 11, type: "mention" },
            { offset: 143, length: 2,  type: "custom_emoji", custom_emoji_id: "6296218646284863141" },
          ],
        }
      );
    } catch (e) {
      await ctx.reply("✅ Verified! Welcome to " + CHANNEL_NAME);
    }
  }
  // If no pending request — say nothing (don't reply to random /start)
});

// ─── LAUNCH ──────────────────────────────────────────────────────────────────
bot.launch({
  allowedUpdates: ["message", "callback_query", "chat_join_request"],
});

console.log("✅ Bot is running 24/7...");
process.once("SIGINT",  () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

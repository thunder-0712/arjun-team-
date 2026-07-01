const { Telegraf, Markup } = require("telegraf");

// ============================================================
// YOUR BOT CONFIG
// ============================================================
const BOT_TOKEN = "8174866733:AAHj3ZZpHVmRG5xJ3qlP6lTjiYPjOrwT4KE";
const CHANNEL_INVITE_LINK = "https://t.me/+ZzIFhnHrUIg0NWNl"; // e.g. https://t.me/+xxxx
const CHANNEL_NAME = "TEAM ARJUN";

// ============================================================
// FILE IDs
// ============================================================
const VIDEO_FILE_ID = "BAACAgUAAxkBAAOkaj9iYK4nW568nvnAa9Binq2pjKEAAoEhAAIzpulVNm7MfmSYd7A8BA";
const APK_FILE_ID = "BQACAgUAAyEFAASIc9-TAAIuTGo780-00zou3wABOTWGTpYaYiDk8AACCSEAAuZA0FWgkA5WYczGvDwE";

// ============================================================
// MESSAGES WITH PREMIUM EMOJIS
// Each message uses entities array for premium emojis
// ============================================================

// MESSAGE 1 — sent with video
const MSG1_TEXT = "🔥 WELCOME TO TEAM ARJUN  🔥\n\n📈 What you Will Get :\n✅ High Accuracy Colour Trading Signals\n✅ Instant Replies & Full Support\n✅ Daily Consistent Profit Updates\n✅ Earning Potential ₹10,000 se ₹50,000+ per day\n\n🚀 Zero Excuses — Only Profit Mindset!\njoin Now And Make Profit Fast  💯\n\n👑 Trusted by Winners — Run by Arjun\n\n— Team EARN WITH ARJUN 🔥";

const MSG1_ENTITIES = [
  { offset: 0, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 2, length: 24, type: "bold" },
  { offset: 26, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 28, length: 2, type: "bold" },
  { offset: 30, length: 2, type: "custom_emoji", custom_emoji_id: "5028746137645876535" },
  { offset: 32, length: 21, type: "bold" },
  { offset: 53, length: 1, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 54, length: 38, type: "bold" },
];

// MESSAGE 2 — sent with APK
const MSG2_TEXT = "⚡ JAI CLUB GAME PRO HACK ⚡\n\n💯 GURANTEED LOSS RECOVER BY ARJUN KA TOOL 💯\n\n👉  Minimum Deposit - ₹₹500/₹1000/₹2000\n🔥  Daily Profit Limit\n📈  Profit UpTo ~ ₹50000\n\n🛑 JAI CLUB TOOL INSTALL NOW";

const MSG2_ENTITIES = [
  { offset: 0, length: 2, type: "bold" },
  { offset: 0, length: 2, type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
  { offset: 2, length: 24, type: "bold" },
  { offset: 26, length: 2, type: "bold" },
  { offset: 26, length: 2, type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
  { offset: 30, length: 2, type: "bold" },
  { offset: 30, length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 32, length: 41, type: "bold" },
  { offset: 73, length: 2, type: "bold" },
  { offset: 73, length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 77, length: 2, type: "custom_emoji", custom_emoji_id: "5832251986635920010" },
  { offset: 81, length: 29, type: "bold" },
  { offset: 111, length: 5, type: "bold" },
  { offset: 117, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
];

// MESSAGE 3 — verify message
const MSG3_TEXT = "🔔 Your request to join TEAM ARJUN JaiClub Games has been approved!\n\n✅ Please Verify Yourself \n🚫 Final step pending…\n\n👇 Click START now to activate your access!";

const MSG3_ENTITIES = [
  { offset: 0, length: 2, type: "bold" },
  { offset: 0, length: 2, type: "custom_emoji", custom_emoji_id: "5458603043203327669" },
  { offset: 2, length: 67, type: "bold" },
  { offset: 69, length: 1, type: "bold" },
  { offset: 69, length: 1, type: "custom_emoji", custom_emoji_id: "6307555706383898814" },
  { offset: 70, length: 25, type: "bold" },
  { offset: 95, length: 2, type: "bold" },
  { offset: 95, length: 2, type: "custom_emoji", custom_emoji_id: "6307388675105757993" },
  { offset: 97, length: 22, type: "bold" },
  { offset: 119, length: 2, type: "bold" },
  { offset: 119, length: 2, type: "custom_emoji", custom_emoji_id: "6114077020361070827" },
  { offset: 121, length: 41, type: "bold" },
];

// MESSAGE 4 — after verified
const MSG4_TEXT = "✅ You've Been Verified as a Real User\n✉️ Your Request is Now Under Admin Approval\n\n💬 Want to Recover Your Losses Fast?\n👑 DM — @Earn_arjun ❤️";

const MSG4_ENTITIES = [
  { offset: 0, length: 1, type: "custom_emoji", custom_emoji_id: "6107204505751788130" },
  { offset: 38, length: 2, type: "custom_emoji", custom_emoji_id: "5253742260054409879" },
  { offset: 83, length: 2, type: "bold" },
  { offset: 83, length: 2, type: "custom_emoji", custom_emoji_id: "6046412391887935443" },
  { offset: 85, length: 35, type: "bold" },
  { offset: 120, length: 2, type: "bold" },
  { offset: 120, length: 2, type: "custom_emoji", custom_emoji_id: "5805337324967432449" },
  { offset: 122, length: 5, type: "bold" },
  { offset: 128, length: 11, type: "mention" },
  { offset: 139, length: 1, type: "bold" },
  { offset: 140, length: 2, type: "bold" },
  { offset: 140, length: 2, type: "custom_emoji", custom_emoji_id: "6296218646284863141" },
];

// ============================================================
// BUTTON LABELS WITH PREMIUM EMOJIS
// ============================================================
const BTN1_TEXT = "👑 JOIN VIP CHANNEL"; // custom_emoji_id: 5368529160870306132
const BTN2_TEXT = "🏆 GET PROFIT TOOL APK"; // custom_emoji_id: 5188344996356448758
const BTN3_TEXT = "💵 HOW TO USE"; // custom_emoji_id: 5201873447554145566
const BTN_VERIFY_TEXT = "⚠️ VERIFY NOW"; // custom_emoji_id: 6267039884016358504
const BTN_START_TEXT = "🩵 START AGAIN"; // custom_emoji_id: 5384202205203033318

// ============================================================
// BOT LOGIC
// ============================================================
const bot = new Telegraf(BOT_TOKEN);

// Store pending join requests: userId -> chatId
const pendingRequests = new Map();

// ---- JOIN REQUEST HANDLER ----
bot.on("chat_join_request", async (ctx) => {
  const { chat, from } = ctx.chatJoinRequest;
  console.log(`Join request from ${from.first_name} (${from.id})`);

  // Save pending request
  pendingRequests.set(from.id, chat.id);

  try {
    // STEP 1: Send video with Message 1 and 2 buttons
    await ctx.telegram.sendVideo(from.id, VIDEO_FILE_ID, {
      caption: MSG1_TEXT,
      caption_entities: MSG1_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: BTN1_TEXT, url: CHANNEL_INVITE_LINK }],
          [{ text: BTN2_TEXT, url: "https://t.me/c/2289295251/11768" }],
        ],
      },
    });

    // STEP 2: Send APK with Message 2 and 1 button
    await ctx.telegram.sendDocument(from.id, APK_FILE_ID, {
      caption: MSG2_TEXT,
      caption_entities: MSG2_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: BTN3_TEXT, url: "https://t.me/c/2289295251/11745" }],
        ],
      },
    });

    // STEP 3: Send verify message with VERIFY NOW button (green callback)
    await ctx.telegram.sendMessage(from.id, MSG3_TEXT, {
      entities: MSG3_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: BTN_VERIFY_TEXT, callback_data: `verify:${chat.id}` }],
        ],
      },
    });

  } catch (e) {
    console.error(`Could not DM ${from.id}:`, e.description || e.message);
  }
});

// ---- VERIFY BUTTON HANDLER ----
bot.action(/^verify:(.+)$/, async (ctx) => {
  const chatId = ctx.match[1];
  const userId = ctx.from.id;

  try {
    // Approve user into channel
    await ctx.telegram.approveChatJoinRequest(chatId, userId);
    pendingRequests.delete(userId);

    // Edit verify message to remove button
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] });

    // Send after-verified message with START AGAIN button
    await ctx.telegram.sendMessage(userId, MSG4_TEXT, {
      entities: MSG4_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: BTN_START_TEXT, url: `https://t.me/${ctx.botInfo.username}?start=restart` }],
        ],
      },
    });

  } catch (e) {
    console.error("Approve failed:", e.description || e.message);
    await ctx.answerCbQuery("Something went wrong. Please try again.", { show_alert: true });
  }
});

// ---- /start HANDLER ----
bot.start(async (ctx) => {
  const userId = ctx.from.id;

  // If user already has pending request, re-send verify
  if (pendingRequests.has(userId)) {
    const chatId = pendingRequests.get(userId);
    try {
      await ctx.telegram.approveChatJoinRequest(chatId, userId);
      pendingRequests.delete(userId);
      await ctx.reply(MSG4_TEXT, {
        entities: MSG4_ENTITIES,
        reply_markup: {
          inline_keyboard: [
            [{ text: BTN_START_TEXT, url: `https://t.me/${ctx.botInfo.username}?start=restart` }],
          ],
        },
      });
    } catch (e) {
      await ctx.reply("✅ You've been verified! Welcome to " + CHANNEL_NAME);
    }
  } else {
    await ctx.reply(`👋 Welcome! Click the invite link from the ad to join ${CHANNEL_NAME}.`);
  }
});

// ============================================================
// LAUNCH BOT
// ============================================================
bot.launch({
  allowedUpdates: ["message", "callback_query", "chat_join_request"],
});

console.log("✅ Bot is running 24/7...");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

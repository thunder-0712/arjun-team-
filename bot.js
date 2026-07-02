const { Telegraf } = require("telegraf");

const BOT_TOKEN = "8174866733:AAHj3ZZpHVmRG5xJ3qlP6lTjiYPjOrwT4KE";
const VIDEO_FILE_ID = "BAACAgUAAxkBAAOkaj9iYK4nW568nvnAa9Binq2pjKEAAoEhAAIzpulVNm7MfmSYd7A8BA";
const APK_FILE_ID   = "BQACAgUAAyEFAASIc9-TAAIuTGo780-00zou3wABOTWGTpYaYiDk8AACCSEAAuZA0FWgkA5WYczGvDwE";
const WEBAPP_URL    = "https://thunder-0712.github.io/verify/";

const pendingRequests = new Map();
const bot = new Telegraf(BOT_TOKEN);
const API = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function apiCall(method, body) {
  const res = await fetch(`${API}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then(r => r.json());
  if (!res.ok) console.error(`${method} failed:`, res.description);
  return res;
}

// ── REMOVE MENU BUTTON ──────────────────────────────────────────────────────
async function removeMenuButton() {
  await apiCall("deleteMyCommands", {});
  await apiCall("setChatMenuButton", { menu_button: { type: "commands" } });
  console.log("Menu removed ✅");
}

// ── MESSAGES ────────────────────────────────────────────────────────────────
const MSG1 = "🔥 WELCOME TO TEAM ARJUN  🔥\n\n📈 What you Will Get :\n✅ High Accuracy Colour Trading Signals\n✅ Instant Replies & Full Support\n✅ Daily Consistent Profit Updates\n✅ Earning Potential ₹10,000 se ₹50,000+ per day\n\n🚀 Zero Excuses — Only Profit Mindset!\nJoin Now And Make Profit Fast 💯\n\n👑 Trusted by Winners — Run by Arjun\n\n— Team EARN WITH ARJUN 🔥";
const MSG1_ENTITIES = [
  { offset: 0,   length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 26,  length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 30,  length: 2, type: "custom_emoji", custom_emoji_id: "5028746137645876535" },
  { offset: 53,  length: 1, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 92,  length: 1, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 125, length: 1, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 159, length: 1, type: "custom_emoji", custom_emoji_id: "6203755778587760964" },
  { offset: 208, length: 2, type: "custom_emoji", custom_emoji_id: "5449683594425410231" },
  { offset: 277, length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 281, length: 2, type: "custom_emoji", custom_emoji_id: "5368529160870306132" },
  { offset: 342, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
];

const MSG2 = "⚡ JAI CLUB GAME PRO HACK ⚡\n\n💯 GURANTEED LOSS RECOVER BY ARJUN KA TOOL 💯\n\n👉 Minimum Deposit - ₹500/₹1000/₹2000\n🔥 Daily Profit Limit\n📈 Profit UpTo ~ ₹50000\n\n🛑 JAI CLUB TOOL INSTALL NOW";
const MSG2_ENTITIES = [
  { offset: 0,   length: 1, type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
  { offset: 25,  length: 1, type: "custom_emoji", custom_emoji_id: "6111778259374971023" },
  { offset: 28,  length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 71,  length: 2, type: "custom_emoji", custom_emoji_id: "6296586935435530452" },
  { offset: 75,  length: 2, type: "custom_emoji", custom_emoji_id: "5832251986635920010" },
  { offset: 113, length: 2, type: "custom_emoji", custom_emoji_id: "6158991404635790036" },
  { offset: 135, length: 2, type: "custom_emoji", custom_emoji_id: "5028746137645876535" },
  { offset: 160, length: 2, type: "custom_emoji", custom_emoji_id: "5188481279963715781" },
];

const MSG3 = "🔔 Your request to join TEAM ARJUN has been approved!\n\n✅ Please Verify Yourself\n🚫 Final step pending…\n\n👇 Click VERIFY NOW to activate your access!";
const MSG3_ENTITIES = [
  { offset: 0,   length: 2, type: "custom_emoji", custom_emoji_id: "5458603043203327669" },
  { offset: 55,  length: 1, type: "custom_emoji", custom_emoji_id: "6307555706383898814" },
  { offset: 80,  length: 2, type: "custom_emoji", custom_emoji_id: "6307388675105757993" },
  { offset: 104, length: 2, type: "custom_emoji", custom_emoji_id: "6114077020361070827" },
];

const MSG4 = "✅ You've Been Verified as a Real User\n✉️ Your Request is Now Under Admin Approval\n\n💬 Want to Recover Your Losses Fast?\n👑 DM — @Earn_arjun ❤️";
const MSG4_ENTITIES = [
  { offset: 0,   length: 1, type: "custom_emoji", custom_emoji_id: "6107204505751788130" },
  { offset: 38,  length: 2, type: "custom_emoji", custom_emoji_id: "5253742260054409879" },
  { offset: 83,  length: 2, type: "custom_emoji", custom_emoji_id: "6046412391887935443" },
  { offset: 120, length: 2, type: "custom_emoji", custom_emoji_id: "5805337324967432449" },
  { offset: 128, length: 11, type: "mention" },
  { offset: 140, length: 2, type: "custom_emoji", custom_emoji_id: "6296218646284863141" },
];

// ── BUTTON LABELS WITH PREMIUM EMOJIS ───────────────────────────────────────
// BTN1 = 🔵 Blue  → URL button  → JOIN VIP CHANNEL
// BTN2 = 🟢 Green → Web App     → GET PROFIT TOOL APK
// BTN3 = 🔵 Blue  → URL button  → HOW TO USE
// BTN4 = 🔴 Red   → Web App     → VERIFY NOW
// BTN5 = 🔵 Blue  → URL button  → START AGAIN

// ── SEND ALL MESSAGES ────────────────────────────────────────────────────────
async function sendOnboarding(userId, chatId) {

  // MSG1 — Video
  // BTN1 🔵 Blue URL = JOIN VIP CHANNEL (emoji id: 5368529160870306132 = 👑)
  // BTN2 🟢 Green WebApp = GET PROFIT TOOL APK (emoji id: 5188344996356448758 = 🏆)
  await apiCall("sendVideo", {
    chat_id: userId,
    video: VIDEO_FILE_ID,
    caption: MSG1,
    caption_entities: MSG1_ENTITIES,
    reply_markup: {
      inline_keyboard: [
        [{
          text: "👑 JOIN VIP CHANNEL",
          url: "https://t.me/+43EaQismqHFiYjFl"
        }],
        [{
          text: "🏆 GET PROFIT TOOL APK",
          web_app: { url: `${WEBAPP_URL}?action=apk&uid=${userId}&cid=${chatId}` }
        }],
      ],
    },
  });

  // MSG2 — APK
  // BTN3 🔵 Blue URL = HOW TO USE (emoji id: 5201873447554145566 = 💵)
  await apiCall("sendDocument", {
    chat_id: userId,
    document: APK_FILE_ID,
    caption: MSG2,
    caption_entities: MSG2_ENTITIES,
    reply_markup: {
      inline_keyboard: [
        [{
          text: "💵 HOW TO USE",
          url: "https://t.me/c/2289295251/11745"
        }],
      ],
    },
  });

  // MSG3 — Verify
  // BTN4 🔴 Red WebApp = VERIFY NOW (emoji id: 6267039884016358504 = ⚠️)
  await apiCall("sendMessage", {
    chat_id: userId,
    text: MSG3,
    entities: MSG3_ENTITIES,
    reply_markup: {
      inline_keyboard: [
        [{
          text: "⚠️ VERIFY NOW",
          web_app: { url: `${WEBAPP_URL}?action=verify&uid=${userId}&cid=${chatId}` }
        }],
      ],
    },
  });
}

// ── HANDLE WEB APP DATA (when user taps WebApp button) ──────────────────────
bot.on("web_app_data", async (ctx) => {
  const data = ctx.webAppData.data.text();
  console.log("WebApp data received:", data);

  try {
    const params = new URLSearchParams(data);
    const action = params.get("action");
    const userId = parseInt(params.get("uid"));
    const chatId = parseInt(params.get("cid"));

    if (action === "verify") {
      const approveRes = await apiCall("approveChatJoinRequest", {
        chat_id: chatId,
        user_id: userId,
      });

      if (!approveRes.ok) {
        await ctx.reply("Already approved or link expired!");
        return;
      }

      pendingRequests.delete(userId);

      // Send MSG4 + START AGAIN button 🔵 Blue URL
      await apiCall("sendMessage", {
        chat_id: userId,
        text: MSG4,
        entities: MSG4_ENTITIES,
        reply_markup: {
          inline_keyboard: [
            [{
              text: "🩵 START AGAIN",
              url: `https://t.me/Indian_Thunder_bot?start=restart`
            }],
          ],
        },
      });
    }
  } catch (e) {
    console.error("WebApp data error:", e.message);
  }
});

// ── FALLBACK: also handle verify via callback for safety ────────────────────
bot.action(/^VRF:(-?\d+)$/, async (ctx) => {
  const chatId = parseInt(ctx.match[1]);
  const userId = ctx.from.id;
  console.log(`Callback verify: user=${userId} chat=${chatId}`);

  try {
    const approveRes = await apiCall("approveChatJoinRequest", {
      chat_id: chatId,
      user_id: userId,
    });

    if (!approveRes.ok) {
      await ctx.answerCbQuery("Already approved or expired!", { show_alert: true });
      return;
    }

    pendingRequests.delete(userId);
    await ctx.editMessageReplyMarkup({ inline_keyboard: [] }).catch(() => {});

    await apiCall("sendMessage", {
      chat_id: userId,
      text: MSG4,
      entities: MSG4_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: "🩵 START AGAIN", url: `https://t.me/Indian_Thunder_bot?start=restart` }],
        ],
      },
    });

    await ctx.answerCbQuery("✅ Verified! Welcome to TEAM ARJUN");
  } catch (e) {
    console.error("Verify error:", e.message);
    await ctx.answerCbQuery("Error. Try again.", { show_alert: true });
  }
});

// ── JOIN REQUEST ─────────────────────────────────────────────────────────────
bot.on("chat_join_request", async (ctx) => {
  const { chat, from } = ctx.chatJoinRequest;
  console.log(`Join request: ${from.first_name} (${from.id}) → chat ${chat.id}`);
  pendingRequests.set(from.id, chat.id);
  try {
    await sendOnboarding(from.id, chat.id);
  } catch (e) {
    console.error("Onboarding error:", e.message);
  }
});

// ── /start ───────────────────────────────────────────────────────────────────
bot.start(async (ctx) => {
  const userId = ctx.from.id;
  if (pendingRequests.has(userId)) {
    const chatId = pendingRequests.get(userId);
    await apiCall("approveChatJoinRequest", { chat_id: chatId, user_id: userId });
    pendingRequests.delete(userId);
    await apiCall("sendMessage", {
      chat_id: userId,
      text: MSG4,
      entities: MSG4_ENTITIES,
      reply_markup: {
        inline_keyboard: [
          [{ text: "🩵 START AGAIN", url: `https://t.me/Indian_Thunder_bot?start=restart` }],
        ],
      },
    });
  }
});

// ── LAUNCH ───────────────────────────────────────────────────────────────────
bot.launch({
  allowedUpdates: ["message", "callback_query", "chat_join_request", "web_app_data"],
}).then(async () => {
  await removeMenuButton();

  // Register bot as Mini App with BotFather
  await apiCall("setChatMenuButton", {
    menu_button: {
      type: "web_app",
      text: "Open",
      web_app: { url: WEBAPP_URL }
    }
  });

  console.log("✅ Bot is running 24/7...");
});

process.once("SIGINT",  () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

# STRIVE — App Project Document

---

## 1. App Overview

**App name:** STRIVE
**Type:** Habit tracker — web & mobile
**Tagline:** Build the life you intend to live.
**Model:** Monthly subscription
**Price:** $3.60/month · $36/year · $99 lifetime
**Target user:** General audience — anyone who wants to build better habits
**Platforms:** Web app (browser) + Mobile (iOS & Android)

---

## 2. Concept

STRIVE is a clean, minimal, dark-premium habit tracker. No gamification. No clutter. No cutesy design. Just a powerful, honest tool for people who take self-improvement seriously.

Inspired by the gap in the market: most habit trackers are either too childish (Habitica), too complex (Notion), or too expensive (Streaks). STRIVE is the premium alternative — dark, focused, and beautifully simple.

---

## 3. Design Direction

| Element | Decision |
|---|---|
| Aesthetic | Dark, premium, minimal — like a luxury product |
| Background | #0F0F0F (near black) |
| Surface | #1A1A1A |
| Card | #222222 |
| Accent | #C9A84C (gold) |
| Text | #F5F3EE (stone white) |
| Success | #1D9E75 (teal green) |
| Muted | #888780 (ash) |
| Typography | Clean sans-serif, wide letter-spacing, sentence case |
| Icons | Tabler outline icon set |

---

## 4. MVP Features

### Tab 1 — Habits
- Add / remove habits with custom name and emoji icon
- Tap to check off daily habits
- 7-day history dots per habit (visual streak indicator)
- Streak counter per habit
- Add new habit form (name + icon)

### Tab 2 — Stats
- Today's completion percentage
- Best streak across all habits
- Total completions this week
- Weekly day-by-day breakdown (Mon–Sun scores)
- Per-habit completion rate with progress bar

### Tab 3 — Journal
- Daily free-text journal entry
- Save and stack past entries
- Linked to the day's habit performance

### Tab 4 — Reminders
- Per-habit reminder toggle (on/off)
- Custom reminder times
- Morning and evening check-in defaults

---

## 5. Competitive Analysis — Real User Complaints (2026)

### Habitica (3.93/5 recent reviews)
- Overwhelming for non-gamers — RPG mechanics confuse users who just want to track habits
- Buggy & broken streaks — resets incorrectly, app crashes
- Broken premium purchases — users paid $20–$79 for lifetime that never activated
- Community features removed — Guilds and Tavern deleted in 2023
- No undo button — accidental taps can't be reversed

### Streaks (iOS only)
- iPhone only — excludes the majority of smartphone users globally
- Apple Watch sync broken in latest update
- No journal, no stats depth, no AI features

### Finch
- No analytics or streak tracking — users fly blind
- 12-hour wait mechanic — users find it deeply frustrating
- Android version is broken and under-supported
- Premium overpriced for cosmetics ($39.99/yr for pet outfits)
- Moving toward manipulation — pay-to-restore streaks, gambling sounds

### STRIVE's 12 competitive advantages
1. Undo button — accidental taps fixed instantly
2. Cross-platform — Web + iOS + Android, all synced
3. Deep analytics — streaks, trends, weekly scores
4. No gamification — no HP bars, no birds, no RPG nonsense
5. Built-in journal with AI insights
6. No streak anxiety — no pay-to-restore, no guilt mechanics
7. Negative habit tracking — "max 2 coffees today"
8. Flexible scheduling — not every habit needs to be daily
9. AI coach with personalised messages
10. Transparent pricing — simple $3.60/mo, no hidden charges
11. Instant support — no weeks of silence
12. Premium dark UI — the only habit tracker that looks luxury

---

## 6. AI Features (v3)

STRIVE is powered by Claude (claude-sonnet-4-20250514) and knows the user's real-time habit data in every message.

### AI Coach tab
- Full conversation with your personal coach
- Knows your habit completion, streaks, struggles, and patterns
- Quick-ask buttons: "Why am I struggling?", "What to focus on?", "Analyse my habits", "Daily quote"

### Daily opening message
- Loads automatically on app open
- Personalised to your specific habit data that day

### Habits screen AI actions
- Motivate me — instant motivational message
- Today's tip — one actionable habit tip
- Check in — honest assessment of your day's progress

### Journal AI insights
- Write journal entry → tap "AI insights"
- Claude analyses patterns, gives honest specific feedback
- 3–4 sentence response, direct and supportive

### Smart reminders
- AI generates personalised motivational reminder messages
- Based on actual habit patterns, not generic copy
- Feels like a coach texting you, not an app notification

---

---

## 7. Monetisation

**Model:** Freemium → Monthly subscription

| Plan | Price | Features |
|---|---|---|
| Free | $0 | Up to 3 habits, no stats, no journal |
| STRIVE Pro Monthly | $3.60/mo | Unlimited habits, full stats, journal, reminders |
| STRIVE Pro Yearly | $36/yr ($3/mo) | All Pro features, discounted |
| STRIVE Lifetime | $99 one-time | All Pro features, forever |

**Revenue target:**
- 100 subscribers = $360/month
- 500 subscribers = $1,800/month
- 1,000 subscribers = $3,600/month
- 100 lifetime purchases = $9,900 one-time

---

## 8. Tech Stack Options

### Option A — No-code (fastest to launch)
- **Bubble.io** — build full web app with database and payments, no coding needed
- **Glide** — mobile app from a spreadsheet, very fast MVP
- **Stripe** — payments and subscriptions

### Option B — Low-code (more control)
- **React** (web) + **React Native** (mobile)
- **Supabase** — database and user auth (free tier)
- **Stripe** — payments
- **Claude API** — AI-powered journal insights (future feature)

### Option C — Build here in Claude.ai
- Build full interactive prototype in React/HTML
- Export and deploy to **Vercel** (free hosting)
- Add Supabase for data + Stripe for payments

**Recommendation:** Start with Option C — build the full prototype here in Claude.ai, then deploy to Vercel. Fastest path to a live, shareable product.

---

## 9. Launch Plan

### Week 1 — Build MVP
- Finalise all 4 tabs (Habits, Stats, Journal, Reminders)
- Add user accounts (Supabase auth)
- Add data persistence (habits save between sessions)
- Deploy to Vercel at strive.app or strivehabit.com

### Week 2 — Payments & Polish
- Add Stripe subscription ($3.60/mo, $36/yr) and one-time lifetime ($99)
- Build freemium gate (3 habit limit on free plan)
- Polish mobile responsiveness
- Write landing page copy

### Week 3 — Launch
- Post on Product Hunt
- Post on Reddit (r/getmotivated, r/habittracking, r/selfimprovement)
- TikTok / Instagram demo video
- Launch at $3/mo introductory price for first 100 users

### Week 4 — Grow
- Collect feedback from first users
- Fix top 3 complaints
- Add most-requested feature
- Scale ads with subscription revenue

---

## 10. Next Steps to Build Out

- [x] App name — STRIVE
- [x] Design direction — dark premium minimal
- [x] MVP prototype v1 — habits, stats, journal, reminders
- [x] Competitive analysis — 12 advantages identified
- [x] v2 — negative habits, flexible scheduling, undo button
- [x] v3 — full AI coach, smart reminders, journal insights, daily messages
- [x] Build landing page
- [ ] Add persistent data storage
- [x] Add user authentication
- [x] Set up Stripe payments ($3.60/mo, $36/yr, $99 lifetime)
- [x] Deploy to Vercel
- [x] Write App Store description
- [x] Create launch social media content
- [x] Write Product Hunt launch post
- [ ] Launch on Product Hunt
- [ ] Submit to App Store & Google Play
- [x] Write newsletter pitch to productivity blogs
- [x] App Store keyword / ASO strategy

---

## 11. Launch Content

---

### Product Hunt — Launch Post

**Tagline:** The dark, premium habit tracker with a real AI coach.

**Description:**
Hey Product Hunt! 👋

I built STRIVE because every habit tracker I tried was either a children's game (Habitica's RPG system), too limited (Streaks is iPhone-only with no journal), or moving toward manipulation (Finch now charges you to restore streaks).

STRIVE is different. Here's what we built:

🤖 AI coach powered by Claude — knows your real habit data, sends personalised messages, not generic notifications
📉 Negative habit tracking — "max 2 coffees today" — no other app does this well
↩ Undo button — because accidental taps happen
📅 Flexible scheduling — not every habit needs to be daily
📊 Deep analytics — streaks, weekly scores, per-habit trends
📓 Journal with AI insights — write your entry, get honest pattern analysis
🌍 Cross-platform — Web, iOS, Android, all synced

Pricing is simple and honest:
• Free — 3 habits forever
• Pro Monthly — $3.60/mo
• Pro Yearly — $36/yr
• Lifetime — $99 one-time

No pay-to-restore streaks. No gambling mechanics. No HP bars. Just you and your habits.

🔗 strivehabit.com

**Tags:** #productivity #habits #ai #wellness #saas
**Best launch day:** Tuesday or Wednesday at 12:01 AM PST

---

### App Store Description (iOS & Android)

**Subtitle (79 chars):** Dark, premium habit tracker with a real AI coach. No gamification.

**Full description:**

STRIVE — Build the life you intend to live.

The dark, premium habit tracker with a real AI coach. No gamification. No virtual pets. No HP bars. Just you, your habits, and a coach that actually knows you.

— WHY STRIVE —

Most habit trackers are built for dopamine hits, not real progress. They gamify, guilt, and manipulate. STRIVE is the opposite — a focused, premium tool for people who take self-improvement seriously.

— YOUR AI COACH —

STRIVE's AI coach is powered by Claude and reads your real data. It knows which habits you're completing, which you're skipping, your streak history, and your journal entries. Every message is written for you specifically.

• Daily personalised opening message
• Full AI coach conversation — ask anything
• Journal analysis with honest pattern feedback
• Smart reminders that sound like a coach, not a push notification

— FEATURES —

✦ Unlimited habit tracking (Pro)
✦ Negative habit tracking — set limits ("max 2 coffees")
✦ Flexible scheduling — daily, weekdays, weekends, or custom
✦ Undo button — accidental taps fixed instantly
✦ Deep analytics — weekly scores, streaks, per-habit trends
✦ Built-in journal with AI insights
✦ Smart AI reminders
✦ Cross-platform sync — Web, iOS, Android

— PRICING —

Free: 3 habits, basic tracking, no AI
Pro Monthly: $3.60/month
Pro Yearly: $36/year (save 17%)
Lifetime: $99 one-time

No subscription traps. No pay-to-restore streaks. No manipulation.

---

### Instagram Carousel (5 Slides)

Slide 1: "Every habit tracker you've tried failed you. Not because you're lazy. Because they were built for engagement, not progress."

Slide 2: "Habitica charges you to restore your streak. Finch added gambling sounds. Streaks doesn't exist on Android. There had to be a better way."

Slide 3: "STRIVE. Dark. Minimal. AI-powered. A coach that knows your data. No gamification. No guilt. No games."

Slide 4: "🤖 AI coach · 📉 Negative habits · ↩ Undo button · 📅 Flexible scheduling · 📊 Deep analytics · 📓 AI journal insights"

Slide 5: "Free to start. $3.60/mo for everything. $99 to own it forever. strivehabit.com"

Caption: We built the habit tracker we actually wanted to use. No RPGs. No virtual birds. No pay-to-restore streaks. Just you and your habits — with an AI coach that actually reads your data. Free to try. Link in bio.

#habittracker #productivity #selfimprovement #habits #ai #buildinpublic #saas #indiedev #strive

**Best time to post:** Tuesday–Thursday, 6–9pm local time

---

### TikTok / Reels Script (30 seconds)

HOOK (0–3s): "This is why you keep quitting your habit tracker."
PROBLEM (3–12s): "Habitica turns your life into an RPG. Finch gives you a virtual bird. Streaks only works on iPhone. And now they're all charging you to get your streak back."
SOLUTION (12–22s): "So I built STRIVE. Dark, minimal, AI-powered. Your coach reads your actual data — which habits you're nailing, which you're skipping, why you keep failing on Mondays."
DEMO (22–28s): Screen recording — tap habit, show AI message, show stats
CTA (28–30s): "Free to start. $3.60 a month for everything. Link in bio."

---

### Reddit Launch Post

**Post to:** r/getmotivated, r/selfimprovement, r/habittracking, r/productivity

**Title:** I built a habit tracker because every existing one either gamified me to death or started charging me to restore my streak

**Body:** I've tried Habitica (too much RPG), Streaks (iPhone only, no journal), and Finch (liked it until they added gambling sounds and pay-to-restore mechanics). So I built STRIVE — dark, minimal, AI coach built in. The AI reads your actual data. You can track negative habits. There's an undo button. No gamification. Free to start, $3.60/month, $99 lifetime. strivehabit.com — Would love honest feedback.

**Note:** Check each subreddit's self-promotion rules before posting.

---

*Project created with Claude — claude.ai*

---

## 12. Newsletter Pitches & ASO Strategy

---

### Newsletter Pitch — James Clear / 3-2-1 Newsletter (3M+ subscribers)

**Subject:** A tool your readers might love — STRIVE habit tracker

Hi [Name],

I'm a long-time reader of 3-2-1. Atomic Habits changed how I think about systems — it's actually part of why I built STRIVE.

STRIVE is a dark, minimal habit tracker with an AI coach powered by Claude. The coach reads your real habit data and responds to you specifically — not with generic notifications sent to a million users. It also does something no other tracker does well: negative habit tracking. "Max 2 coffees today." "Zero cigarettes." Setting a ceiling, not just a floor.

Free to start. $3.60/month for everything. $99 lifetime.

I think it would resonate with your audience — people who have read Atomic Habits and want a tool that matches how seriously they take their habits.

Happy to offer a free lifetime account for you to try. No pressure either way.

strivehabit.com

[Your name]

**Tone:** Personal, not promotional · **Key angle:** Atomic Habits connection · **Ask:** Free trial, no hard sell

---

### Newsletter Pitch — Indie Hackers

**Subject:** Built in public: STRIVE — dark premium habit tracker with AI coach

Hey Indie Hackers community,

Sharing my build-in-public journey for STRIVE — a habit tracker I built because every existing one frustrated me.

The stack: Claude API for the AI coach, Supabase for auth + database, Stripe for payments ($3.60/mo / $36/yr / $99 lifetime), Vercel for hosting.

What I built that competitors don't have:
— Negative habit tracking ("max 2 coffees today")
— AI coach that reads your actual data, not generic messages
— Undo button (Habitica still doesn't have this in 2026)
— Flexible scheduling — not every habit needs to be daily
— Cross-platform (Streaks is still iPhone only)

Revenue so far: pre-launch. Targeting $1,000 MRR within 90 days.

Happy to answer questions about the build — the Claude API integration especially was interesting to get right.

strivehabit.com

**Tone:** Builder-to-builder, transparent · **Post to:** indiehackers.com/post

---

### Newsletter Pitch — TLDR / Morning Brew / The Hustle

**Subject:** New app pitch — STRIVE habit tracker (AI-powered, dark UI, $3.60/mo)

Hi [Editor name],

Quick pitch for your tools/apps section:

STRIVE is a new habit tracker that does what the big ones don't:
• AI coach powered by Claude — personalised to your data, not generic
• Negative habit tracking — limits on bad habits, not just goals
• Works on Web, iOS, and Android (unlike Streaks)
• No gamification, no pay-to-restore streaks (unlike Finch and Habitica)
• $3.60/month — cheaper than every competitor

The habit tracker market is huge and the top apps are increasingly frustrating users. STRIVE is the clean alternative.

Launching this week. Happy to provide screenshots, demo access, or a quick call.

strivehabit.com / [Your name / email]

**Also send to:** MakeUseOf, AppAdvice, Product Hunt Ship

---

### App Store ASO — Metadata

| Field | Content | Chars |
|---|---|---|
| iOS Title | STRIVE: Habit Tracker & AI | 26 |
| iOS Subtitle | Daily goals, streaks & coach | 29 |
| Google Play Title | STRIVE: Habit Tracker & AI | 26 |
| Google Play Short Desc | Dark premium habit tracker with AI coach. No gamification. | 59 |
| iOS Keyword Field | routine,goals,wellness,morning,journal,self,improvement,mindset,discipline,coach | 80 |

---

### ASO Keyword Targets

**Tier 1 — High volume, build toward (hard to rank at launch)**
- habit tracker
- daily habits
- habit tracker app
- streak tracker
- daily routine tracker

**Tier 2 — Medium volume, reachable within 30–60 days**
- AI habit coach
- habit journal app
- productivity tracker
- self improvement app
- goal tracker daily

**Tier 3 — Low volume, high intent — START HERE at launch**
- habitica alternative
- habit tracker no gamification
- streaks app alternative
- dark habit tracker
- AI productivity coach

---

### ASO Rules

- Start with Tier 3 at launch — easier to rank, users have high download intent
- Google Play indexes full description — use keywords naturally, ~1 per 250 chars
- iOS keyword field: no spaces, no repeats from title/subtitle, commas only
- Get 10+ reviews in first 7 days — offer free Pro codes to early users
- Update app every 2–4 weeks — frequency boosts algorithm ranking
- Use AppTweak free tier to track keyword rankings after launch
- Never keyword stuff — hurts rankings on both stores
- Don't target "habit tracker" alone at launch — too competitive, rank page 10+

---

*Project created with Claude — claude.ai*

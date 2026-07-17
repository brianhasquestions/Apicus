/* ============================================================
   Apicus (apicus.org) - data + interactions (vanilla JS)
   ============================================================ */

"use strict";

/* ---------- icon library (inline SVG, stroke style) ---------- */
const ICONS = {
  seed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M12 20V10"/><path d="M12 10c0-4.5 3.5-7 8-7 0 4.5-3.5 7-8 7Z"/><path d="M12 14c0-3.2-2.7-5.5-6-5.5 0 3.2 2.7 5.5 6 5.5Z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  wing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M8.5 8H4c-1.5 0-2.5-1.5-2-3"/><path d="M15.5 8H20c1.5 0 2.5-1.5 2-3"/><path d="M12 11.5V15"/><path d="M8 21c0-2.2 1.8-4 4-4s4 1.8 4 4"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4"/><path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
  grad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><path d="M22 10v6"/></svg>',
  crowd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17.5" cy="8.5" r="2.5"/><path d="M19 21v-1.5a3.5 3.5 0 0 0-2.5-3.36"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M9 14.5 7 22l5-3 5 3-2-7.5"/><path d="m10 8 1.5 1.5L14.5 6.5"/></svg>',
  bank: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-6 9 6"/><path d="M4 9v11"/><path d="M20 9v11"/><path d="M8 12v5"/><path d="M12 12v5"/><path d="M16 12v5"/><path d="M2 20h20"/></svg>',
  cycle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/><path d="M12 8v4l2.5 2.5"/></svg>'
};

/* ---------- funding source data ---------- */
const SOURCES = [
  {
    id: "bootstrapping",
    name: "Bootstrapping & Customer Revenue",
    tag: "The default everyone forgets is an option",
    color: "var(--forest)",
    icon: "seed",
    check: "$0 – whatever you can sell",
    stage: "Any stage",
    dilution: 0,
    speed: 3,
    repay: "none",
    blurb: "Fund the company with savings, consulting income, and, best of all, paying customers. You keep 100% and answer to no one.",
    overview: [
      "Bootstrapping means growing on your own resources: personal savings, keeping a day job or consulting on the side, and reinvesting every dollar of revenue. Pre-selling (charging customers before the product fully exists via pilots, annual prepay, or LOI-backed deposits) is the most underrated financing tool in existence.",
      "It forces the single best habit a startup can have: building something people pay for, immediately. Companies like Mailchimp, Basecamp, and Zoho reached hundreds of millions in revenue without outside capital.",
      "<strong>Best fit:</strong> software and services with short paths to revenue, niche B2B products, and founders who value control and optionality over blitzscaling."
    ],
    pitfalls: [
      { t: "Market-timing risk", d: "Slow, revenue-paced growth can cost you a land-grab market where a funded competitor scales faster. Bootstrapping fits markets that reward depth, not speed." },
      { t: "Personal financial strain", d: "Draining retirement accounts or running up credit cards turns business risk into life risk. Set a hard personal loss limit before you start." },
      { t: "Underinvestment", d: "Chronic frugality can starve product and marketing. Revenue you don't reinvest is growth you donated to competitors." },
      { t: "Founder burnout", d: "Doing every job with no budget for help is a marathon at sprint pace. Budget for contractors before you think you can afford them." }
    ],
    docs: [
      { n: "Founder equity: post-incorporation checklist (YC)", u: "https://www.ycombinator.com/library", d: "Even with no investors, incorporate properly, file 83(b) elections, and vest founder stock. Future you will thank you." },
      { n: "Incorporate directly with the state", u: "https://corp.delaware.gov", d: "Delaware filings are forms you submit yourself. The 83(b) election is a letter to the IRS. None of this requires a paid service." }
    ],
    contacts: [
      { n: "Indie Hackers", u: "https://www.indiehackers.com", d: "Community of bootstrapped founders sharing revenue numbers and playbooks." },
      { n: "MicroConf", u: "https://microconf.com", d: "The conference and community for self-funded SaaS founders." },
      { n: "Your first 10 customers", u: "", d: "Seriously: pre-sales, pilots, and annual prepay are funding. Ask for money before you ask for feedback." }
    ]
  },
  {
    id: "friends-family",
    name: "Friends & Family",
    tag: "The first outside check for most founders",
    color: "var(--wine)",
    icon: "heart",
    check: "$10k – $150k",
    stage: "Idea → Pre-seed",
    dilution: 8,
    speed: 5,
    repay: "equity or note",
    blurb: "Fast, trust-based capital from people who bet on you, not your metrics. Also the easiest money to mishandle.",
    overview: [
      "Friends and family rounds fund more startups than all VCs combined. The money closes in days, terms are founder-friendly, and the diligence bar is 'we believe in you.'",
      "That trust is exactly why you must treat it more formally, not less. Use a real instrument (a post-money SAFE with a sensible cap, or a promissory note) and put the risk in writing: this money may vanish, and it probably won't come back for 7 to 10 years if it comes back at all.",
      "<strong>Golden rule:</strong> only take money someone can afford to lose completely, and never let anyone invest their emergency fund or retirement savings."
    ],
    pitfalls: [
      { t: "It's still a securities transaction", d: "U.S. securities laws apply to your aunt just like a VC. Most rounds rely on Reg D exemptions. Talk to a lawyer about accredited vs. non-accredited investors before wiring anything." },
      { t: "Handshake deals", d: "Undocumented 'investments' become bitter disputes at Thanksgiving, or during your Series A diligence. Paper everything with a SAFE or note." },
      { t: "Overvaluing the round", d: "A $20M cap on Uncle Joe's SAFE feels generous until real investors balk at it. Set caps a professional would recognize." },
      { t: "Cap table clutter", d: "Fifteen relatives with direct stakes complicate every future round. Keep the group small, or pool them into one entity." },
      { t: "Relationship risk", d: "90% of startups fail. Decide upfront whether this relationship survives a total loss, and say that sentence out loud to them." }
    ],
    docs: [
      { n: "YC Post-money SAFE (Valuation Cap)", u: "https://www.ycombinator.com/documents", d: "The standard instrument: free, short, and battle-tested. Use it even for family." },
      { n: "SAFE User Guide (YC)", u: "https://www.ycombinator.com/documents", d: "Explains the conversion math so everyone understands what they're buying." },
      { n: "SEC: Reg D / accredited investor basics", u: "https://www.investor.gov/introduction-investing/investing-basics/glossary/accredited-investor", d: "Know the rules before taking checks from non-accredited investors." }
    ],
    contacts: [
      { n: "Your own network, with a memo", u: "", d: "Write a 1-page investment memo (what you're building, the terms, the risks) and send it to everyone at once. It keeps terms uniform and expectations honest." },
      { n: "A startup attorney", u: "", d: "One or two hours of counsel on your F&F round is the cheapest legal insurance you'll ever buy." }
    ]
  },
  {
    id: "angels",
    name: "Angel Investors & Syndicates",
    tag: "Experienced operators writing personal checks",
    color: "var(--navy)",
    icon: "wing",
    check: "$25k – $500k",
    stage: "Pre-seed → Seed",
    dilution: 15,
    speed: 3,
    repay: "equity (SAFE)",
    blurb: "Wealthy individuals, often exited founders, investing their own money. The best ones bring their network and scar tissue with the check.",
    overview: [
      "Angels invest personal capital at the riskiest stage, usually via SAFEs, in checks from $5k to $500k. The best angels are former operators in your exact space: their intro list and pattern-matching are worth more than the money.",
      "Syndicates (AngelList SPVs, rolling funds) let one lead angel pool dozens of backers into a single entity. You get $200k+ of capital but only <em>one line on your cap table</em>. Angel groups (organized clubs that meet to hear pitches) move slower but write larger collective checks.",
      "<strong>How it works:</strong> warm intros still dominate, but platforms like AngelList and open application forms have made cold access realistic. Expect 2 to 6 weeks from first meeting to money."
    ],
    pitfalls: [
      { t: "Party-round cap table chaos", d: "Thirty direct $10k checks means thirty signatures for every future consent. Pool small checks through an SPV or syndicate." },
      { t: "Amateur angels", d: "First-time angels can panic in downturns, demand updates weekly, or block clean exits. Reference-check angels like they diligence you." },
      { t: "Advisor-equity grabs", d: "'I'll invest AND advise for 2% extra' is usually a bad trade. Standard advisor grants are 0.1% to 0.5% with vesting; use FAST agreement terms." },
      { t: "Signaling traps", d: "A famous angel who doesn't follow on in your seed can spook other investors. Diversify your angel base." },
      { t: "Slow drips", d: "Raising $25k at a time for eight months is a full-time job that kills the company you're supposed to be building. Set a closing date and enforce it." }
    ],
    docs: [
      { n: "YC Post-money SAFE (all 3 variants)", u: "https://www.ycombinator.com/documents", d: "The default instrument for angel checks: Valuation Cap, Discount, or MFN." },
      { n: "Pro Rata Side Letter (YC)", u: "https://www.ycombinator.com/documents", d: "Grant it deliberately, not by default. Pro rata rights compound across rounds." },
      { n: "FAST Agreement (Founder Institute)", u: "https://fi.co/fast", d: "Standard advisor equity agreement that keeps 'advice for equity' deals sane." }
    ],
    contacts: [
      { n: "AngelList", u: "https://www.angellist.com", d: "Syndicates, rolling funds, and RUVs: the infrastructure layer of angel investing." },
      { n: "Hustle Fund Angel Squad", u: "https://www.hustlefund.vc", d: "Large trained-angel community that co-invests with the fund." },
      { n: "Tech Coast Angels / Golden Seeds / regional groups", u: "https://www.techcoastangels.com", d: "Organized angel groups exist in every major metro. Search '[your city] angel group'." },
      { n: "OpenVC", u: "https://www.openvc.app", d: "Free, filterable list of thousands of investors with stated theses and open contact paths." }
    ]
  },
  {
    id: "vc",
    name: "Venture Capital",
    tag: "Institutional rocket fuel, with strings attached",
    color: "var(--plum)",
    icon: "rocket",
    check: "$500k – $100M+",
    stage: "Seed → Growth",
    dilution: 20,
    speed: 1,
    repay: "equity",
    blurb: "Professional funds investing other people's money for 10x+ returns. The most capital available anywhere, and the most expectations attached.",
    overview: [
      "VCs raise funds from institutions (pensions, endowments, family offices) and must return multiples of that money in about 10 years. That math shapes everything: they need each investment to plausibly return the entire fund, so they exclusively back companies aiming for massive outcomes.",
      "Seed rounds today are typically $1M to $4M on SAFEs; Series A ($8M to $20M) and beyond are priced equity rounds with board seats, protective provisions, and NVCA-style documents.",
      "<strong>Take VC only if</strong> your market is genuinely huge, speed is a competitive weapon, and you're comfortable committing to a sell-or-IPO endgame. VC is a one-way door: once institutional money is in, a comfortable $5M-a-year lifestyle business is no longer an acceptable outcome to your board."
    ],
    pitfalls: [
      { t: "Liquidation preference stacks", d: "Anything beyond a 1x non-participating preference means investors get paid multiples before you see a dollar. In a modest exit, founders with 30% ownership can walk away with nothing." },
      { t: "Dilution + control compounding", d: "20% per round plus option-pool top-ups (usually taken from your side, pre-money) leaves founders as minority owners by Series B. Model every term sheet's post-round cap table." },
      { t: "The growth treadmill", d: "Accepting a $50M valuation means promising a $500M+ exit. Miss growth targets and the next round is a down round with wash-out terms." },
      { t: "Signaling risk", d: "A tier-1 fund's small seed check that doesn't follow on at Series A is a red flag every other investor sees." },
      { t: "Board control drift", d: "Two preferred seats plus one 'independent' the investors pick means founders can be fired from their own company. Negotiate board composition as hard as valuation." },
      { t: "Zombie terms", d: "Full-ratchet anti-dilution, multi-x preferences, and redemption rights show up in desperate markets. A clean deal at a lower price beats a dirty deal at a higher one." }
    ],
    docs: [
      { n: "NVCA Model Legal Documents", u: "https://nvca.org/model-legal-documents/", d: "The industry-standard priced-round docs: term sheet, SPA, charter, IRA, ROFR." },
      { n: "YC Series A term sheet + guide", u: "https://www.ycombinator.com/series_a_term_sheet", d: "A clean, founder-friendly reference term sheet with annotations." },
      { n: "Venture Deals (Feld & Mendelson)", u: "https://www.venturedeals.com", d: "The canonical book on how term sheets actually work. Read it before your first negotiation." }
    ],
    contacts: [
      { n: "OpenVC", u: "https://www.openvc.app", d: "Filterable database of funds by stage, sector, and check size, with cold-outreach etiquette guides." },
      { n: "Crunchbase", u: "https://www.crunchbase.com", d: "Research which funds invest in your space and stage; work backward from their portfolio." },
      { n: "Warm intros via portfolio founders", u: "", d: "The highest-converting path: find a fund's portfolio founder in your network and earn their intro. Investors trust founder referrals over everything." },
      { n: "Y Combinator / demo-day funds", u: "https://www.ycombinator.com/apply", d: "Top accelerators function as VC on-ramps. Demo day compresses a six-month raise into weeks." }
    ]
  },
  {
    id: "strategic",
    name: "Strategic & Corporate Capital",
    tag: "The path most founders never consider",
    color: "var(--rust)",
    icon: "building",
    badge: "Underrated",
    check: "$250k – $50M+",
    stage: "Seed → Growth",
    dilution: 12,
    speed: 1,
    repay: "equity or none",
    blurb: "Corporate venture arms and partnership programs invest for strategic value, not just returns, and bring distribution, pilots, and credibility no VC can.",
    overview: [
      "Large corporations deploy tens of billions per year into startups through two channels. <strong>Corporate venture capital (CVC)</strong>, arms like GV, Salesforce Ventures, M12, Intel Capital, and Qualcomm Ventures, writes equity checks like a VC but with a strategic mandate. <strong>Partnership programs</strong> (accelerators, ISV and marketplace programs, co-development deals) often deliver cash, cloud credits, and revenue with <em>zero equity taken</em>.",
      "The real prize is rarely the check. A CVC investment frequently arrives bundled with a paid pilot, a co-selling agreement, or marketplace distribution: assets that would take years to earn cold. 'Backed by [corporate]' also collapses enterprise-sales trust barriers overnight.",
      "<strong>How to work it:</strong> map corporations adjacent to your product (their customers, their gaps, their announced strategy). Approach the CVC arm and the partnership org in parallel; they're different doors into the same building. Come with a specific integration or pilot proposal, not a generic deck.",
      "<strong>Fit:</strong> B2B products that extend a platform (Salesforce, Microsoft, AWS ecosystems), deep tech corporates can't build fast enough, and industries where credibility is the moat (health, fintech, industrial)."
    ],
    pitfalls: [
      { t: "Right of first refusal (ROFR) on acquisition", d: "A ROFR lets the corporate match any acquisition offer, which means competitors won't bother bidding. This can silently cap your exit. Negotiate it out entirely, or at least down to a simple notice right." },
      { t: "Exclusivity clauses", d: "'You won't partner with our competitors' can lock you out of most of your market. If exclusivity is unavoidable, make it narrow, paid-for, and time-boxed." },
      { t: "Information rights = roadmap leakage", d: "Broad info rights can funnel your metrics and roadmap to a business unit that might compete with you. Scope reporting to high-level financials only." },
      { t: "Champion risk", d: "Corporate strategy shifts and your internal sponsor changes jobs every 18 months. If the deal only makes sense with strategic support, it dies when your champion leaves. Make sure the deal stands alone on its terms." },
      { t: "Glacial timelines", d: "Corporate approval chains run 6 to 12 months. Never let a corporate process be your only path to funding; run it in parallel with other options." },
      { t: "Acquisition signaling", d: "If your corporate investor passes on acquiring you, other acquirers ask why. Manage the narrative early." }
    ],
    docs: [
      { n: "YC Post-money SAFE / NVCA docs", u: "https://www.ycombinator.com/documents", d: "CVCs sign standard instruments. Insist on standard docs and push strategic terms into separate commercial agreements." },
      { n: "Keep commercial + investment docs separate", u: "", d: "Rule of thumb: the equity docs should look like any VC's. Pilots, licenses, and partnerships belong in their own agreements you can renegotiate independently." },
      { n: "Global Corporate Venturing", u: "https://globalventuring.com", d: "News and data on which corporates are actively investing, in what, right now." }
    ],
    contacts: [
      { n: "GV (Alphabet)", u: "https://www.gv.com", d: "Alphabet's venture arm: broad mandate, operates like a top-tier VC." },
      { n: "Salesforce Ventures", u: "https://salesforceventures.com", d: "The template for platform CVC. Invests in companies that extend the Salesforce ecosystem." },
      { n: "M12 (Microsoft)", u: "https://m12.vc", d: "Microsoft's fund: B2B software, AI, and infrastructure. Brings Azure and enterprise co-sell." },
      { n: "Intel Capital", u: "https://www.intelcapital.com", d: "One of the oldest CVCs: semiconductors, AI, and deep tech." },
      { n: "Qualcomm Ventures", u: "https://www.qualcommventures.com", d: "Wireless, IoT, XR, and automotive." },
      { n: "Corporate accelerator & partner programs", u: "", d: "AWS Activate, Microsoft for Startups, NVIDIA Inception, Google for Startups: non-dilutive credits, GTM support, and marketplace access. Apply to all that fit; they're free." }
    ]
  },
  {
    id: "accelerators",
    name: "Accelerators & Incubators",
    tag: "Capital + curriculum + network, for equity",
    color: "var(--ochre)",
    icon: "grad",
    check: "$100k – $500k",
    stage: "Idea → Seed",
    dilution: 7,
    speed: 2,
    repay: "equity",
    blurb: "Fixed-term programs that trade a standard check for a standard equity slice, and compress years of learning and network into three months.",
    overview: [
      "Accelerators run cohort-based programs (usually about 3 months) ending in a demo day in front of hundreds of investors. Y Combinator's standard deal is <strong>$500k</strong>: $125k for 7% on a post-money SAFE, plus $375k on an uncapped MFN SAFE. Techstars and 500 Global run similar structures.",
      "What you're really buying: forced focus, weekly accountability, an alumni network that answers cold messages, and a demo day that compresses a six-month fundraise into two weeks.",
      "<strong>The math:</strong> 7% is expensive if you already have traction and investor access. It's cheap if the brand, network, and fundraising leverage move your next round's valuation by more than 7%. For first-time founders without networks, top programs usually pay for themselves."
    ],
    pitfalls: [
      { t: "The long tail is rough", d: "Outside the top ten programs, quality falls off fast. A no-name accelerator taking 6% for $50k and a coworking desk is usually a bad trade. Ask alumni for their honest ROI." },
      { t: "Demo-day sugar high", d: "Raising on hype at an inflated cap sets a valuation bar your metrics must grow into. The hangover arrives at your next round." },
      { t: "Batch-mode groupthink", d: "Cohorts chase the same metrics, the same investors, the same playbooks. The curriculum is a floor, not a ceiling." },
      { t: "Equity for services", d: "Incubators and venture studios sometimes take 10% to 30% for 'support.' Anything above standard accelerator terms deserves heavy scrutiny." }
    ],
    docs: [
      { n: "YC's standard deal explained", u: "https://www.ycombinator.com/deal", d: "Exactly how the $125k/7% plus $375k MFN SAFE structure works." },
      { n: "YC Startup Library", u: "https://www.ycombinator.com/library", d: "Free essays and videos covering fundraising, product, and growth: the curriculum without the program." },
      { n: "Techstars deal terms", u: "https://www.techstars.com", d: "Compare terms across programs before committing; they are not all equal." }
    ],
    contacts: [
      { n: "Y Combinator", u: "https://www.ycombinator.com/apply", d: "Applications open twice a year. The application itself is a great forcing function even if you don't get in." },
      { n: "Techstars", u: "https://www.techstars.com", d: "City- and corporate-themed programs worldwide." },
      { n: "500 Global", u: "https://500.co", d: "Global reach, strong in emerging markets." },
      { n: "University & city incubators", u: "", d: "Often equity-free: university programs, NSF I-Corps, and city economic-development incubators provide space, mentorship, and small grants." }
    ]
  },
  {
    id: "crowdfunding",
    name: "Crowdfunding",
    tag: "Turn your audience into your investors",
    color: "var(--navy)",
    icon: "crowd",
    check: "$50k – $5M",
    stage: "Pre-seed → Series A",
    dilution: 10,
    speed: 2,
    repay: "equity or product",
    blurb: "Two very different games: rewards campaigns pre-sell your product (0% equity), while Reg CF equity campaigns sell shares to the crowd, up to $5M per year.",
    overview: [
      "<strong>Rewards crowdfunding</strong> (Kickstarter, Indiegogo) is pre-selling: backers pay today for a product you'll ship later. It's non-dilutive market validation, and a great fit for consumer hardware and physical products.",
      "<strong>Equity crowdfunding</strong> (Regulation CF: Wefunder, StartEngine, Republic) lets anyone, not just accredited investors, buy into your company, up to <strong>$5M per 12 months</strong>. Modern platforms pool investors into a single SPV or use a Crowd SAFE, so hundreds of backers appear as one line on your cap table.",
      "The hidden superpower: a successful campaign converts customers into evangelists with a financial stake in telling everyone about you.",
      "<strong>Fit:</strong> consumer products with communities, mission-driven brands, and companies whose users badly want them to exist."
    ],
    pitfalls: [
      { t: "Failure is public", d: "A campaign that raises 30% of its goal is a permanent, googleable signal. Line up 30% to 40% of your target from your own network before launch day." },
      { t: "Fulfillment can eat you alive", d: "Hardware campaigns routinely lose money per unit after shipping, tariffs, and returns. Price with 40%+ margin after ALL fulfillment costs." },
      { t: "Reg CF compliance is real work", d: "Form C filing, financial reviews (audits above certain thresholds), and annual reports. Budget $10k to $30k and real time for compliance." },
      { t: "Marketing spend is the campaign", d: "Successful raises typically spend 10% to 20% of the total on ads and PR. The platform brings infrastructure, not traffic." },
      { t: "VC perception", d: "Some (not all) institutional investors read an equity crowdfund as 'couldn't raise professionally.' A clean SPV structure and strong metrics neutralize this." }
    ],
    docs: [
      { n: "SEC Reg CF overview", u: "https://www.sec.gov/resources-small-businesses/exempt-offerings/regulation-crowdfunding", d: "The official rules: caps, disclosure, and investor limits." },
      { n: "Crowd SAFE (Republic)", u: "https://republic.com", d: "The SAFE variant adapted for crowd investors." },
      { n: "Wefunder founder guide", u: "https://wefunder.com/faq", d: "Practical walkthrough of costs, timelines, and Form C mechanics." }
    ],
    contacts: [
      { n: "Wefunder", u: "https://wefunder.com", d: "Largest Reg CF platform by volume; founder-friendly terms." },
      { n: "StartEngine", u: "https://www.startengine.com", d: "Big retail-investor base; also runs Reg A+ raises up to $75M." },
      { n: "Republic", u: "https://republic.com", d: "Curated deals, inventors of the Crowd SAFE." },
      { n: "Kickstarter / Indiegogo", u: "https://www.kickstarter.com", d: "For rewards campaigns: product pre-sales, no equity." }
    ]
  },
  {
    id: "grants",
    name: "Grants & Competitions",
    tag: "Free money, if you can survive the paperwork",
    color: "var(--forest)",
    icon: "award",
    check: "$25k – $2M",
    stage: "Idea → Seed",
    dilution: 0,
    speed: 1,
    repay: "none",
    blurb: "Government programs like SBIR and STTR award millions in non-dilutive funding for R&D. No equity, no repayment, just milestones and reports.",
    overview: [
      "The U.S. government is the largest seed investor in America. <strong>SBIR/STTR</strong> ('America's Seed Fund') awards about $4B a year across 11 agencies: Phase I grants of $50k to $300k to prove feasibility, Phase II awards up to about $2M to build. No equity. No repayment.",
      "Beyond SBIR: NSF and NIH research grants, DoD programs (AFWERX, DIU), Department of Energy grants, state economic-development funds, and foundation grants for mission-driven companies. Pitch competitions and university programs add $5k to $100k checks with zero strings.",
      "<strong>Fit:</strong> deep tech, biotech, defense, climate, and hardware. Anything with real R&D risk. Software-only companies qualify less often, but state and private programs still apply."
    ],
    pitfalls: [
      { t: "Glacial timelines", d: "Application to award commonly runs 6 to 12 months. Grants are runway extension, not rescue funding. Apply a year before you need the money." },
      { t: "Grant-writing is a skill", d: "Proposals are scored on specific criteria by reviewers with rubrics. First-timers should study funded proposals or hire a grant consultant (typical: a 5% to 10% success fee)." },
      { t: "Scope handcuffs", d: "The money must fund the proposed work. If your product pivots, your grant may not pivot with it." },
      { t: "Reporting overhead", d: "Progress reports, audits, and compliance (especially DoD) consume real founder time. Budget for it." },
      { t: "The Phase II cliff", d: "Many companies become 'SBIR mills,' serially winning grants without ever finding customers. Grants should de-risk a business, not become one." }
    ],
    docs: [
      { n: "SBIR.gov", u: "https://www.sbir.gov", d: "Central portal for all 11 agencies' solicitations, deadlines, and past winners. Study the winners." },
      { n: "NSF America's Seed Fund", u: "https://seedfund.nsf.gov", d: "Up to $2M non-dilutive for deep-tech startups; famously startup-friendly process." },
      { n: "Grants.gov", u: "https://www.grants.gov", d: "Every federal grant opportunity, searchable." }
    ],
    contacts: [
      { n: "Your state's SBDC / APEX accelerator", u: "https://americassbdc.org", d: "Free advisors who help with SBIR applications and state programs. It is literally their job." },
      { n: "AFWERX (Air Force) / DIU", u: "https://afwerx.com", d: "Defense innovation programs with fast contracting paths for dual-use tech." },
      { n: "University tech-transfer offices", u: "", d: "If your tech touches a university, their office knows every relevant grant and often co-applies." },
      { n: "Pitch competitions", u: "", d: "TechCrunch Disrupt, Rice Business Plan Competition, local chambers: small checks, zero dilution, free press." }
    ]
  },
  {
    id: "debt",
    name: "Loans, SBA & Venture Debt",
    tag: "Keep your equity, promise your cash flow",
    color: "var(--wine)",
    icon: "bank",
    check: "$50k – $5M+",
    stage: "Revenue stage",
    dilution: 1,
    speed: 2,
    repay: "principal + interest",
    blurb: "Banks, SBA-guaranteed loans, and venture debt lenders fund you without taking meaningful ownership. But the money must come back, win or lose.",
    overview: [
      "<strong>SBA loans</strong> (7(a) up to $5M, microloans up to $50k) are bank loans partially guaranteed by the government, unlocking credit for companies banks would otherwise decline. Rates are reasonable; paperwork is heavy; personal guarantees are standard.",
      "<strong>Venture debt</strong> (Hercules, TriplePoint, and startup banks) lends to VC-backed startups: typically 20% to 35% of the last equity round, repaid over 3 to 4 years, plus small warrant coverage of roughly 0.5% to 2%. It extends runway between rounds without repricing your equity.",
      "<strong>The core trade:</strong> debt is the cheapest capital that exists when things go well, and the most dangerous when they don't. It amplifies outcomes in both directions.",
      "<strong>Fit:</strong> companies with revenue or fresh equity backing, predictable cash needs (inventory, equipment, bridging to a milestone), and founders certain they can service payments through a bad quarter."
    ],
    pitfalls: [
      { t: "Personal guarantees", d: "SBA loans and many bank loans require them. The business failing can mean losing your house. Know exactly what you're pledging." },
      { t: "Covenants with teeth", d: "Minimum cash balances, revenue floors, and MAC (material adverse change) clauses can put you in default while you still have money in the bank. Negotiate covenant-lite where possible." },
      { t: "Debt plus down round equals death spiral", d: "Venture debt due right when equity markets close is how well-known startups die suddenly. Never let debt maturity land before a realistic next raise." },
      { t: "Warrants add up", d: "Individually small, but warrant coverage across multiple facilities quietly dilutes. Track them on your cap table like any other equity." },
      { t: "It must be repaid", d: "Obvious, and yet: equity forgives failure, debt doesn't. If your revenue is speculative, debt is the wrong instrument." }
    ],
    docs: [
      { n: "SBA loan programs", u: "https://www.sba.gov/funding-programs/loans", d: "Official guide to 7(a), 504, and microloan programs with lender matching." },
      { n: "SBA Lender Match", u: "https://www.sba.gov/funding-programs/loans/lender-match", d: "Free tool connecting you to participating lenders." },
      { n: "Read the venture debt term sheet yourself", u: "", d: "Study interest rate, warrant coverage, covenants, and, most critically, the amortization start date. Every lender's paper differs; the four numbers that matter don't." }
    ],
    contacts: [
      { n: "Community banks & CDFIs", u: "https://www.cdfifund.gov", d: "Community lenders often out-hustle big banks on small-business loans." },
      { n: "Hercules Capital", u: "https://www.htgc.com", d: "One of the largest dedicated venture-debt lenders." },
      { n: "TriplePoint Capital", u: "https://www.triplepointcapital.com", d: "Venture lending across stages." },
      { n: "Silicon Valley Bank (First Citizens)", u: "https://www.svb.com", d: "Startup banking plus venture-debt facilities for funded companies." }
    ]
  },
  {
    id: "rbf",
    name: "Revenue-Based & Alternative Financing",
    tag: "Sell a slice of future revenue, not your company",
    color: "var(--plum)",
    icon: "cycle",
    check: "$10k – $5M",
    stage: "Revenue stage",
    dilution: 0,
    speed: 5,
    repay: "% of revenue",
    blurb: "Trade a fixed fee for cash today, repaid as a percentage of monthly revenue. Zero dilution, fast underwriting, and a real cost hiding in the fee.",
    overview: [
      "<strong>Revenue-based financing</strong> advances you capital (often 3 to 12 months of MRR) repaid as a fixed share of monthly revenue, commonly 5% to 15% of receipts, until you've paid back the advance plus a fee (typically 6% to 15%). Underwriting is data-driven: connect your billing and bank accounts, get an offer in days.",
      "The family also includes <strong>invoice factoring</strong> (sell unpaid B2B invoices at a discount for instant cash), <strong>equipment financing</strong> (the machine is its own collateral), and <strong>merchant cash advances</strong> (the expensive cousin; tread carefully).",
      "<strong>Fit:</strong> SaaS and subscription businesses with predictable MRR, e-commerce with steady sales, and any company bridging a short, well-defined gap. It's speed and zero dilution in exchange for margin."
    ],
    pitfalls: [
      { t: "The fee is not the APR", d: "A '10% fee' repaid in eight months is roughly a 15% to 30% effective annual rate, and much worse the faster you repay. Always compute the effective APR before comparing options." },
      { t: "Revenue share squeezes runway", d: "Handing over 10% of top-line revenue every month cuts the very cash flow you raised to protect. Model it into your burn." },
      { t: "Stacking advances", d: "Taking a second advance to cover the first is the small-business death spiral. If you're stacking, the problem is the business model, not the financing." },
      { t: "Growth-punishing structures", d: "Fixed-fee structures mean growing faster raises your effective APR (you repay the same fee, sooner). Look for caps and prepayment fairness." },
      { t: "MCA fine print", d: "Merchant cash advances can carry triple-digit effective APRs and 'confession of judgment' clauses. Read everything; better, have a lawyer read it." }
    ],
    docs: [
      { n: "Compare offers on effective APR", u: "", d: "Build a one-tab spreadsheet: advance, fee, repayment share, projected months to repay, then the effective annual rate. Compare every offer on that number alone." },
      { n: "FTC guidance on merchant cash advances", u: "https://www.ftc.gov", d: "Know the red flags before signing an MCA." }
    ],
    contacts: [
      { n: "Pipe", u: "https://pipe.com", d: "Trades recurring revenue streams for upfront capital." },
      { n: "Capchase", u: "https://www.capchase.com", d: "Non-dilutive growth capital for SaaS." },
      { n: "Lighter Capital", u: "https://www.lightercapital.com", d: "The RBF pioneer. Up to $4M for tech companies." },
      { n: "Founderpath", u: "https://founderpath.com", d: "RBF for bootstrapped B2B SaaS founders." },
      { n: "Your payment processor", u: "", d: "Stripe Capital, Shopify Capital, and Square Loans make data-driven offers directly inside tools you already use." }
    ]
  }
];

/* CVC pills for the spotlight section */
const CVCS = ["GV (Alphabet)", "Salesforce Ventures", "M12 (Microsoft)", "Intel Capital", "Qualcomm Ventures", "Citi Ventures", "Samsung Ventures", "J&J Innovation (JJDC)", "Comcast Ventures", "AWS Activate*", "NVIDIA Inception*", "Microsoft for Startups*"];

/* ============================================================
   Rendering
   ============================================================ */

const grid = document.getElementById("cardsGrid");

function speedDots(n) {
  let s = '<span class="dot-scale" aria-label="' + n + ' of 5">';
  for (let i = 1; i <= 5; i++) s += `<i class="${i <= n ? "on" : ""}"></i>`;
  return s + "</span>";
}

SOURCES.forEach((src, i) => {
  const card = document.createElement("button");
  card.className = "src-card reveal";
  card.style.setProperty("--sc", src.color);
  card.style.transitionDelay = `${(i % 3) * 0.08}s`;
  card.setAttribute("data-open", src.id);
  card.innerHTML = `
    <div class="src-top">
      <span class="src-icon">${ICONS[src.icon]}</span>
      <div class="src-title">
        <h3>${src.name}</h3>
        <p>${src.stage}</p>
      </div>
      ${src.badge ? `<span class="src-badge">${src.badge}</span>` : ""}
    </div>
    <p class="src-blurb">${src.blurb}</p>
    <div class="src-meta">
      <span class="m">Typical check<strong>${src.check}</strong></span>
      <span class="m">Repayment<strong>${src.repay}</strong></span>
    </div>
    <div class="meter">
      <div class="meter-head"><span>Equity cost</span>${src.dilution === 0 ? '<span class="meter-zero">0% · non-dilutive</span>' : `<b>~${src.dilution}%</b>`}</div>
      <div class="meter-track"><div class="meter-fill" style="--w:${Math.max(src.dilution * 4, 0)}%"></div></div>
    </div>
    <span class="src-cta">Deep dive
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </span>`;
  grid.appendChild(card);
});

/* CVC pills */
const cvcList = document.getElementById("cvcList");
CVCS.forEach(name => {
  const pill = document.createElement("span");
  pill.className = "cvc-pill";
  pill.textContent = name;
  cvcList.appendChild(pill);
});
const note = document.createElement("p");
note.className = "spot-note";
note.textContent = "* equity-free partner programs: credits, go-to-market help, and marketplace access at no cost.";
cvcList.after(note);

/* Dilution bar chart (single-hue magnitude; forest green marks the 0% group) */
const chartData = [...SOURCES]
  .sort((a, b) => b.dilution - a.dilution)
  .map(s => ({ name: s.name.split(" & ")[0].split(",")[0], v: s.dilution }));
const maxV = Math.max(...chartData.map(d => d.v));
const chart = document.getElementById("dilutionChart");
chartData.forEach(d => {
  const row = document.createElement("div");
  row.className = "bar-row" + (d.v === 0 ? " zero" : "");
  row.innerHTML = `
    <span class="bar-name">${d.name}</span>
    <div class="bar-track">
      <div class="bar-fill" style="--w:${d.v === 0 ? 0.8 : (d.v / maxV) * 100}%">
        <span class="bar-val">${d.v === 0 ? "0%" : "~" + d.v + "%"}</span>
      </div>
    </div>`;
  chart.appendChild(row);
});

/* Matrix table */
const repayTag = r => {
  if (r === "none") return '<span class="tag-pill tag-none">none</span>';
  if (r.includes("interest") || r.includes("revenue")) return '<span class="tag-pill tag-debt">' + r + "</span>";
  return '<span class="tag-pill tag-equity">' + r + "</span>";
};

const tbody = document.querySelector("#matrixTable tbody");
SOURCES.forEach(s => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${s.name}</td>
    <td>${s.check}</td>
    <td>${s.dilution === 0 ? '<span class="tag-pill tag-none">0%</span>' : "~" + s.dilution + "%"}</td>
    <td>${speedDots(s.speed)}</td>
    <td>${repayTag(s.repay)}</td>
    <td>${s.stage}</td>`;
  tbody.appendChild(tr);
});

/* ============================================================
   Modal
   ============================================================ */
const backdrop = document.getElementById("modalBackdrop");
const modal = backdrop.querySelector(".modal");
const modalBody = document.getElementById("modalBody");
const modalTabs = document.getElementById("modalTabs");
let activeSrc = null;
let lastFocus = null;

function renderTab(tab) {
  const s = activeSrc;
  if (!s) return;
  let html = "";
  if (tab === "overview") {
    html = s.overview.map(p => `<p>${p}</p>`).join("");
  } else if (tab === "pitfalls") {
    html = s.pitfalls.map(p => `
      <div class="pitfall">
        <span class="pitfall-icon">!</span>
        <div><h5>${p.t}</h5><p>${p.d}</p></div>
      </div>`).join("");
  } else if (tab === "docs") {
    html = s.docs.map(d => d.u
      ? `<a class="res-item" href="${d.u}" target="_blank" rel="noopener"><strong>${d.n}</strong><span>${d.d}</span></a>`
      : `<div class="res-item no-link"><strong>${d.n}</strong><span>${d.d}</span></div>`).join("");
  } else if (tab === "contacts") {
    html = s.contacts.map(c => c.u
      ? `<a class="res-item" href="${c.u}" target="_blank" rel="noopener"><strong>${c.n}</strong><span>${c.d}</span></a>`
      : `<div class="res-item no-link"><strong>${c.n}</strong><span>${c.d}</span></div>`).join("");
  }
  modalBody.innerHTML = html;
  modalBody.scrollTop = 0;
}

function openModal(id) {
  const s = SOURCES.find(x => x.id === id);
  if (!s) return;
  activeSrc = s;
  lastFocus = document.activeElement;
  modal.style.setProperty("--sc", s.color);
  document.getElementById("modalIcon").innerHTML = ICONS[s.icon];
  document.getElementById("modalTitle").textContent = s.name;
  document.getElementById("modalTag").textContent = s.tag;
  document.getElementById("modalStats").innerHTML = `
    <div class="qs"><span>Check size</span><strong>${s.check}</strong></div>
    <div class="qs"><span>Stage</span><strong>${s.stage}</strong></div>
    <div class="qs"><span>Equity cost</span><strong>${s.dilution === 0 ? "0%, none" : "~" + s.dilution + "%"}</strong></div>
    <div class="qs"><span>Repayment</span><strong>${s.repay}</strong></div>`;
  modalTabs.querySelectorAll("button").forEach((b, i) => b.setAttribute("aria-selected", i === 0 ? "true" : "false"));
  renderTab("overview");
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("open"));
  document.body.classList.add("modal-open");
  document.getElementById("modalClose").focus();
}

function closeModal() {
  backdrop.classList.remove("open");
  document.body.classList.remove("modal-open");
  setTimeout(() => { backdrop.hidden = true; }, 300);
  if (lastFocus) lastFocus.focus();
}

document.addEventListener("click", e => {
  const opener = e.target.closest("[data-open]");
  if (opener) { openModal(opener.dataset.open); return; }
  if (e.target === backdrop) closeModal();
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape" && !backdrop.hidden) closeModal(); });

modalTabs.addEventListener("click", e => {
  const btn = e.target.closest("[data-tab]");
  if (!btn) return;
  modalTabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b === btn ? "true" : "false"));
  renderTab(btn.dataset.tab);
});

/* Shared scroll effects (reveals, counters, progress bar, active nav)
   live in site.js, loaded after this file. */

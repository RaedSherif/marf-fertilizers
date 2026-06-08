/* ── marf Website App ── */

// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    nav_about: "About", nav_gallery: "Gallery", nav_product: "Product",
    nav_apply: "How to Apply", nav_foryou: "For You", nav_faq: "FAQ",
    nav_contact: "Contact", nav_order: "Order Now",
    hero_eyebrow: "100% Organic · Chemical-Free · Nigerian Made",
    hero_h1: "Feed your soil.", hero_h2: "Grow with marf.",
    hero_sub: "Premium liquid organic fertilizer trusted by farmers and distributors across Nigeria. Stronger crops, better yields — naturally.",
    hero_cta1: "Order Now →", hero_cta2: "How to Apply",
    stat1_val: "100% Organic", stat1_lbl: "Natural Formula",
    stat2_val: "40%", stat2_lbl: "Better Yields",
    stat3_val: "500+", stat3_lbl: "Farmers Served",
    stat4_val: "All Types", stat4_lbl: "Crop Compatible",
    about_label: "Who We Are",
    about_title: "Growing Nigeria's farms with marf",
    about_desc: "Arafat Agro Allied Services Nig Ltd. is a Nigerian agricultural company helping farmers achieve better harvests using 100% organic, chemical-free liquid fertilizer. We believe every Nigerian farmer deserves safe, effective, and affordable inputs.",
    f1_title: "100% Natural Formula", f1_desc: "Made from natural organic materials. No harmful chemicals — safe for your soil, crops, family, and livestock.",
    f2_title: "Proudly Nigerian", f2_desc: "Formulated specifically for Nigerian soils and climate. We understand your land because we're from here.",
    f3_title: "Delivered to Your Farm", f3_desc: "Order by WhatsApp and we'll arrange delivery straight to your farm gate — anywhere in Nigeria.",
    gallery_label: "Our Farms & Results",
    gallery_title: "See the difference marf makes",
    gallery_subtitle: "Tap any photo slot to replace it with your own farm photos — before and after, harvest results, happy customers.",
    g1: "Hero Farm Photo", g2: "Before Planting", g3: "Growing Crops", g4: "Harvest Results",
    g5: "Happy Farmer", g6: "Crop Close-up", g7: "Farm Work", g8: "Team / Company",
    product_label: "Our Product", product_badge: "Best Seller · Farmer's Choice",
    product_title: "marf Liquid Organic Fertilizer",
    product_subtitle: "One powerful formula that works for every Nigerian crop and every type of soil.",
    product_desc: "A premium liquid fertilizer made from 100% organic materials. Suitable for maize, yam, tomatoes, rice, cassava, vegetables and all crops. Works from the very first application.",
    b1_title: "Stronger germination", b1_desc: "Seeds sprout faster and healthier from day one",
    b2_title: "Up to 40% more yield", b2_desc: "Farmers report significantly larger harvests",
    b3_title: "Improves soil health", b3_desc: "Rebuilds soil biology for long-term fertility",
    b4_title: "Safe for everyone", b4_desc: "No chemicals — safe near children, animals, water",
    apply_label: "Step-by-Step Guide",
    apply_title: "How to apply marf",
    apply_intro: "Simple and easy to use. Just follow these 4 steps and your crops will feel the difference from the very first application.",
    s1_title: "Dilute with Water", s1_desc: "Mix marf with clean water according to the recommended ratio on the bottle label.",
    s2_title: "Apply Early Morning", s2_desc: "Apply during early morning or late evening to avoid midday heat. This ensures maximum absorption.",
    s3_title: "Spray or Pour", s3_desc: "Use a sprayer for foliar application on leaves, or pour gently around the base of the plant for root feeding.",
    s4_title: "Repeat Every 2–3 Weeks", s4_desc: "Apply regularly throughout the growing season for best results. Consistent use means stronger, healthier crops.",
    tips_title: "Important Tips",
    tip1: "Do not apply in direct midday sun — it reduces effectiveness.",
    tip2: "Store in a cool, dry place away from direct sunlight.",
    tip3: "Shake the bottle well before each use to mix the formula.",
    tip4: "For best results, water your crops lightly after application.",
    ap1: "Mixing / Diluting", ap2: "Spraying on Crops", ap3: "Results After Use",
    foryou_label: "Who It's For",
    foryou_title: "Built for farmers. Backed by distributors.",
    foryou_sub: "Whether you grow crops or supply agro-inputs, marf is the right partner for you.",
    far_title: "For Farmers",
    far_desc: "marf Liquid Organic Fertilizer helps you get the most from your land every planting season.",
    far_b1: "Better yields at harvest time", far_b2: "Healthier, stronger crops",
    far_b3: "Improves poor or tired soil", far_b4: "Easy to apply — dilute and spray",
    far_b5: "Safe for your family and animals", far_cta: "Order as a Farmer →",
    dis_title: "For Distributors",
    dis_desc: "Partner with us to bring marf to farmers in your region and grow your agro business.",
    dis_b1: "Competitive wholesale pricing", dis_b2: "High demand — easy to sell",
    dis_b3: "Marketing support provided", dis_b4: "Flexible minimum order quantities",
    dis_b5: "Direct line to our team", dis_cta: "Become a Distributor →",
    test_label: "What Farmers Say",
    test_title: "Real results from real farms",
    test_sub: "Don't take our word for it — hear from farmers and distributors across Nigeria.",
    faq_label: "Questions & Answers",
    faq_title: "Frequently Asked Questions",
    faq_sub: "Everything you need to know about marf Liquid Organic Fertilizer.",
    faq_prompt: "Can't find your answer?",
    faq_wa: "Send us a WhatsApp message",
    faq_q1: "What exactly is marf Liquid Organic Fertilizer?",
    faq_a1: "marf is a premium liquid fertilizer made from 100% natural organic materials. It contains no synthetic chemicals and is safe for your soil, crops, family, and livestock. It works by enriching your soil with organic nutrients that plants absorb quickly and efficiently — resulting in stronger growth and better yields.",
    faq_q2: "Is marf suitable for all types of crops?",
    faq_a2: "Yes! marf works on all Nigerian crops including maize, yam, tomatoes, rice, cassava, pepper, groundnut, vegetables, and more. Whether you grow food crops, cash crops, or vegetables, marf improves germination, growth, and yields across all crop types.",
    faq_q3: "How long before I see results?",
    faq_a3: "Many farmers notice stronger growth within 2–3 weeks of the first application. For maximum results, apply consistently throughout the growing season every 2–3 weeks. Soil health improvements continue to build over multiple seasons of use.",
    faq_q4: "Do you deliver to my state?",
    faq_a4: "Yes, we deliver nationwide across all 36 states in Nigeria. Simply order via WhatsApp with your location and quantity, and we'll arrange farm gate delivery. Delivery time varies by location — we'll confirm the timeline when you order.",
    faq_q5: "Can I use marf with other fertilizers?",
    faq_a5: "marf is designed to work as your primary fertilizer. It can be used alongside other organic inputs, but we recommend avoiding combination with synthetic chemicals. Send us a WhatsApp message if you'd like specific advice for your crops and situation.",
    faq_q6: "How do I become a distributor?",
    faq_a6: "It's easy! Send us a WhatsApp message or fill the contact form selecting 'Distributor / Wholesaler.' Our team will reach out to discuss pricing, minimum order quantities, and how we support distributors with marketing materials. We offer competitive wholesale pricing and high farmer demand.",
    contact_label: "Get In Touch",
    contact_title: "Order now or ask us anything",
    contact_sub: "Send us a WhatsApp message or fill the form below — our team responds quickly.",
    wa_label: "WhatsApp (fastest)",
    wa_reply: "Reply within minutes · 7 days a week",
    co_label: "Company",
    co_delivery: "Delivery",
    co_delivery_desc: "Nationwide · Farm gate delivery",
    co_delivery_sub: "Order on WhatsApp — we arrange the rest",
    f_name: "Your Name", f_phone: "Phone Number",
    f_role: "I am a...", f_role_sel: "Select one",
    f_r1: "Farmer", f_r2: "Distributor / Wholesaler", f_r3: "Other",
    f_state: "State / Location", f_msg: "Message or Order Details",
    f_submit: "Send via WhatsApp →",
    footer_tagline: "100% Organic · Chemical-Free · Nigerian Made",
    footer_copy: "© 2025 Arafat Agro Allied Services Nig Ltd. All rights reserved.",
    footer_cert: "Organic Certified",
  },

  ha: {
    nav_about: "Game da mu", nav_gallery: "Hotuna", nav_product: "Samfuri",
    nav_apply: "Yadda ake amfani", nav_foryou: "Domin ku", nav_faq: "Tambayoyi",
    nav_contact: "Tuntuɓar mu", nav_order: "Yi oda yanzu",
    hero_eyebrow: "100% Halitta · Ba tare da sinadarai · An yi a Najeriya",
    hero_h1: "Ciyar da ƙasarku.", hero_h2: "Girma tare da marf.",
    hero_sub: "Takin ruwa na halitta na musamman da manoma da masu rarrabawa a duk faɗin Najeriya suka amince da shi. Ƙarin girma, ƙarin amfanin gona — ta hanyar halitta.",
    hero_cta1: "Yi oda yanzu →", hero_cta2: "Yadda ake amfani",
    stat1_val: "100% Halitta", stat1_lbl: "Formula na Halitta",
    stat2_val: "40%", stat2_lbl: "Ƙarin Amfanin Gona",
    stat3_val: "500+", stat3_lbl: "Manoman da aka yi wa hidima",
    stat4_val: "Duk Nau'i", stat4_lbl: "Duk Amfanin Gona",
    about_label: "Wanene Mu",
    about_title: "Haɓaka gonakin Najeriya da marf",
    about_desc: "Arafat Agro Allied Services Nig Ltd. kamfani ne na noma na Najeriya da ke taimaka wa manoma samun ƙarin amfanin gona ta amfani da takin ruwa na halitta, ba tare da sinadarai ba. Muna ganin kowane manomi a Najeriya ya cancanci abubuwan shigar da aminci, tasiri, da araha.",
    f1_title: "100% Formula ta Halitta", f1_desc: "An yi ta daga kayan halitta. Babu sinadarai masu cutarwa — lafiya ga ƙasa, amfanin gona, iyali, da dabbobi.",
    f2_title: "Ana alfahari da Najeriya", f2_desc: "An ƙirƙiro shi musamman don ƙasar Najeriya da yanayin ƙasa. Mun fahimci ƙasarku saboda muna nan.",
    f3_title: "Isar da shi zuwa gona", f3_desc: "Yi oda ta WhatsApp kuma za mu shirya isar da shi kai tsaye zuwa ƙofar gona — ko'ina a Najeriya.",
    gallery_label: "Gonakinmu da Sakamako",
    gallery_title: "Duba bambancin da marf ke yi",
    gallery_subtitle: "Duba hotunan gonakin da marf ya ƙara musu ƙarfi — kafin da bayan amfani, sakamakon girbi, da manoman farin ciki.",
    g1: "Babban Hoton Gona", g2: "Kafin Shuka", g3: "Girman Amfanin Gona", g4: "Sakamakon Girbi",
    g5: "Manomi Mai Farin Ciki", g6: "Kusa da Amfanin Gona", g7: "Aiki a Gona", g8: "Ƙungiya / Kamfani",
    product_label: "Samfurinmu", product_badge: "Mafi kyau · Zaɓin Manomi",
    product_title: "marf Takin Ruwa na Halitta",
    product_subtitle: "Wata ƙarfin formula ɗaya da ke aiki don kowane amfanin gona na Najeriya da kowane nau'in ƙasa.",
    product_desc: "Takin ruwa na musamman da aka yi daga kayan halitta 100%. Ya dace don masara, doya, tumatir, shinkafa, rogo, kayan lambu da duk amfanin gona. Yana aiki daga farkon amfani.",
    b1_title: "Ƙarfin tsiro", b1_desc: "Iri suna tsiro da sauri kuma da lafiya daga farkon rana",
    b2_title: "Har zuwa 40% ƙarin girbi", b2_desc: "Manoma sun ba da rahoton girbi da ya fi girma",
    b3_title: "Inganta lafiyar ƙasa", b3_desc: "Gina ilimin halittar ƙasa don haihuwa na dogon lokaci",
    b4_title: "Lafiya ga kowa", b4_desc: "Babu sinadarai — lafiya kusa da yara, dabbobi, ruwa",
    apply_label: "Jagorar Mataki-mataki",
    apply_title: "Yadda ake amfani da marf",
    apply_intro: "Mai sauƙi kuma mai sauƙin amfani. Bi waɗannan matakan 4 kawai kuma amfanin gonarku zai ji bambancin.",
    s1_title: "Narkar da ruwa", s1_desc: "Gauraya takin ruwa na marf da ruwa mai tsafta bisa ga adadin da aka ba da shawarar a kan allunan kwalba.",
    s2_title: "Yi amfani da safe", s2_desc: "Yi amfani da safe ko maraice don gujewa zafin rana. Wannan yana tabbatar da mafi girman sha ta hanyar tushe da ganye.",
    s3_title: "Yi fesa ko zuba", s3_desc: "Yi amfani da na'ura mai fesa don amfani da ganye, ko zuba a hankali a kusa da tushen tsiro don ciyar da tushe.",
    s4_title: "Yi amfani kowane makonni 2–3", s4_desc: "Yi amfani a kai a kai a lokacin girma don mafi kyau sakamako. Amfani da yawa na nufin ƙarfin amfanin gona.",
    tips_title: "Muhimman Shawarwari",
    tip1: "Kada a yi amfani a lokacin zafin rana — yana rage tasiri.",
    tip2: "Ajiye a wurin sanyi, mai bushe nesa da hasken rana.",
    tip3: "Girgiza kwalban da kyau kafin kowace amfani don gauraya formula.",
    tip4: "Don mafi kyau sakamako, ban ruwa a hankali bayan amfani.",
    ap1: "Gauraya / Narkarwa", ap2: "Fesa a Amfanin Gona", ap3: "Sakamakon Bayan Amfani",
    foryou_label: "Domin Wane",
    foryou_title: "An gina shi don manoma. An tallafa shi ta masu rarrabawa.",
    foryou_sub: "Ko kun shuka amfanin gona ko kuna siyar da kayan noma, marf shine abokin tarayya da ya dace.",
    far_title: "Don Manoma",
    far_desc: "Takin ruwa na halitta na marf yana taimaka muku samun mafi amfani daga ƙasarku a kowane lokacin shuka.",
    far_b1: "Ƙarin amfanin gona a lokacin girbi", far_b2: "Ƙarfin amfanin gona mai lafiya",
    far_b3: "Inganta ƙasa mai gajiya ko mara kyau", far_b4: "Mai sauƙin amfani — narkar da fesa",
    far_b5: "Lafiya ga iyalinku da dabbobi", far_cta: "Yi oda a matsayin manomi →",
    dis_title: "Don Masu rarrabawa",
    dis_desc: "Haɗa kai da mu don kawo marf ga manoma a yankinku da haɓaka kasuwancinku na noma.",
    dis_b1: "Farashin jingina mai gasa", dis_b2: "Buƙata mai yawa — mai sauƙin sayarwa",
    dis_b3: "An samar da tallafi na talla", dis_b4: "Adadin oda mafi ƙaranci mai sassauci",
    dis_b5: "Layin kai tsaye zuwa ƙungiyarmu", dis_cta: "Zama mai rarrabawa →",
    test_label: "Abin da Manoma ke Faɗi",
    test_title: "Sakamakon gaske daga gonakin gaske",
    test_sub: "Ku ji daga manoma da masu rarrabawa a duk faɗin Najeriya.",
    faq_label: "Tambayoyi da Amsoshi",
    faq_title: "Tambayoyin da ake yawan yi",
    faq_sub: "Komai da kuka bukata don sanin game da Takin Ruwa na Halitta na marf.",
    faq_prompt: "Ba ku sami amsar ku ba?",
    faq_wa: "Aika mana sakon WhatsApp",
    faq_q1: "Menene takin ruwa na halitta na marf?",
    faq_a1: "marf takin ruwa ne na musamman da aka yi daga kayan halitta 100%. Baya dauke da sinadarai na wucin gadi kuma lafiya ga ƙasarku, amfanin gona, iyali, da dabbobi. Yana aiki ta hanyar wadatar da ƙasarku da abubuwan gina jiki na halitta da tsiro ke sha da sauri.",
    faq_q2: "Shin marf ya dace da duk nau'in amfanin gona?",
    faq_a2: "Ee! marf yana aiki akan duk amfanin gona na Najeriya ciki har da masara, doya, tumatir, shinkafa, rogo, barkono, gyada, kayan lambu, da sauransu. Ko da yake kuna noman amfanin abinci, amfanin kasuwanci, ko kayan lambu, marf yana inganta tsiro, girma, da girbi.",
    faq_q3: "Yaushe zan ga sakamako?",
    faq_a3: "Manoma da yawa suna lura da ƙarfin girma cikin makonni 2–3 bayan amfani na farko. Don mafi kyau sakamako, yi amfani a kai a kai a duk lokacin girma kowane makonni 2–3. Ingancin ƙasa yana ci gaba da haɓaka a cikin lokutan amfani da yawa.",
    faq_q4: "Shin kuna isar da kaya zuwa jihar da nake?",
    faq_a4: "Ee, muna isar da kaya a duk faɗin dukkan jihohi 36 a Najeriya. Yi oda ta WhatsApp tare da wurin da kuke da adadin da kuke bukata, za mu shirya isar da kai tsaye zuwa ƙofar gonarku. Lokacin isar da kaya ya bambanta gwargwadon wuri.",
    faq_q5: "Zan iya amfani da marf tare da sauran takin?",
    faq_a5: "An ƙirƙira marf don aiki a matsayin takin farko. Ana iya amfani da shi tare da sauran kayan halitta, amma muna ba da shawarar guje wa haɗe-haɗe da sinadarai na wucin gadi. Aika mana sakon WhatsApp don shawarar da ta dace da amfanin gonarku.",
    faq_q6: "Ta yaya zan zama mai rarrabawa?",
    faq_a6: "Sauƙi ne! Aika mana sakon WhatsApp ko cike fom ɗin tuntuɓa tare da zaɓar 'Mai rarrabawa / Mai sayarwa da yawa.' Ƙungiyarmu za ta tuntuɓe ku don tattauna farashi, adadin oda mafi ƙaranci, da yadda muke tallafa wa masu rarrabawa.",
    contact_label: "Tuntuɓar mu",
    contact_title: "Yi oda yanzu ko tambaye mu komi",
    contact_sub: "Aika mana sakon WhatsApp ko cike fom ɗin da ke ƙasa — ƙungiyarmu tana amsa da sauri.",
    wa_label: "WhatsApp (mafi sauri)",
    wa_reply: "Amsawa cikin mintoci · Kwana 7 a mako",
    co_label: "Kamfani",
    co_delivery: "Isar da kaya",
    co_delivery_desc: "Ƙasar gaba ɗaya · Isar da ƙofar gona",
    co_delivery_sub: "Yi oda ta WhatsApp — za mu shirya sauran",
    f_name: "Sunanka", f_phone: "Lambar waya",
    f_role: "Ni ne...", f_role_sel: "Zaɓi ɗaya",
    f_r1: "Manomi", f_r2: "Mai rarrabawa / Mai sayarwa da yawa", f_r3: "Wani",
    f_state: "Jiha / Wurin da kuke", f_msg: "Saƙo ko Cikakkun bayanin oda",
    f_submit: "Aika ta WhatsApp →",
    footer_tagline: "100% Halitta · Ba tare da sinadarai · An yi a Najeriya",
    footer_copy: "© 2025 Arafat Agro Allied Services Nig Ltd. Duk haƙƙin mallaka.",
    footer_cert: "Takin halitta da aka tabbatar",
  },

  yo: {
    nav_about: "Nipa wa", nav_gallery: "Aworan", nav_product: "Ọja",
    nav_apply: "Bii o ṣe lo", nav_foryou: "Fun Ọ", nav_faq: "Awọn Ibeere",
    nav_contact: "Kan si wa", nav_order: "Paṣẹ bayi",
    hero_eyebrow: "100% Adayeba · Ko si kemika · Iṣẹ Naijiria",
    hero_h1: "Jẹ ki ilẹ rẹ jẹun.", hero_h2: "Dagba pẹlu marf.",
    hero_sub: "Ajile olomi Organic didi ti awọn agbe ati awọn onipin jakejado Naijiria gbẹkẹle. Irugbin to lagbara, ikore to dara — nipa ti ẹda.",
    hero_cta1: "Paṣẹ bayi →", hero_cta2: "Bii o ṣe lo",
    stat1_val: "100% Adayeba", stat1_lbl: "Formula Adayeba",
    stat2_val: "40%", stat2_lbl: "Ikore to dara si",
    stat3_val: "500+", stat3_lbl: "Awọn Agbe ti a Ṣe iranlọwọ",
    stat4_val: "Gbogbo Iru", stat4_lbl: "Irugbin Gbogbo",
    about_label: "Tani Awa",
    about_title: "Dagbasoke oko Naijiria pẹlu marf",
    about_desc: "Arafat Agro Allied Services Nig Ltd. jẹ ile-iṣẹ ogbin Naijiria ti o n ṣe iranlọwọ fun awọn agbe lati gba ikore to dara si ni lilo ajile olomi Organic 100%, ti ko ni kemika. A gbagbọ pe agbe Naijiria kọọkan yẹ fun awọn ipese to ni aabo, to munadoko, ati ti ifarada.",
    f1_title: "Formula Adayeba 100%", f1_desc: "Ti a ṣe lati awọn ohun elo Organic adayeba. Ko si kemika ipalara — ailewu fun ilẹ, irugbin, idile, ati ẹran.",
    f2_title: "Ti Naijiria ni igberaga", f2_desc: "Ti a ṣẹda ni pataki fun ilẹ ati oju-ọjọ Naijiria. A mọ ilẹ rẹ nitori a wa nibi.",
    f3_title: "Ti a fi ranṣẹ si oko rẹ", f3_desc: "Paṣẹ nipasẹ WhatsApp a si yoo ṣeto ifijiṣẹ taara si ẹnu-ọna oko rẹ — nibikibi ni Naijiria.",
    gallery_label: "Awọn Oko ati Awọn Abajade Wa",
    gallery_title: "Ri iyatọ ti marf n ṣe",
    gallery_subtitle: "Wo awọn fọto ti awọn oko ti marf ti ṣe iranlọwọ fun — ṣaaju ati lẹhin lilo, awọn abajade ikore, awọn agbe ti o nifẹ.",
    g1: "Fọto Oko Akọkọ", g2: "Ṣaaju Gbingbin", g3: "Irugbin ti n Dagba", g4: "Awọn Abajade Ikore",
    g5: "Agbe Ayọ", g6: "Irugbin Nitosi", g7: "Iṣẹ Oko", g8: "Ẹgbẹ / Ile-iṣẹ",
    product_label: "Ọja Wa", product_badge: "Oluwaja to dara julo · Yiyan Agbe",
    product_title: "marf Ajile Olomi Organic",
    product_subtitle: "Formula kan ti o lagbara ti o ṣiṣẹ fun gbogbo irugbin Naijiria ati gbogbo iru ilẹ.",
    product_desc: "Ajile olomi ti o ga julọ ti a ṣe lati awọn ohun elo Organic 100%. Dara fun oka, isu, tomati, iresi, agbalumo, ẹfọ ati gbogbo irugbin. O ṣiṣẹ lati iṣedede akọkọ.",
    b1_title: "Irugbin to lagbara", b1_desc: "Awọn irugbin n dagba ni iyara ati ni ilera lati ọjọ akọkọ",
    b2_title: "To 40% ikore to pọ si", b2_desc: "Awọn agbe ṣe ijabọ awọn ikore to tobi julọ",
    b3_title: "Ilọsiwaju ilera ilẹ", b3_desc: "Tun ilana ẹkọ ilẹ ṣe fun ilora igba pipẹ",
    b4_title: "Ailewu fun gbogbo eniyan", b4_desc: "Ko si kemika — ailewu nitosi awọn ọmọde, ẹran, omi",
    apply_label: "Itọsọna Igbesẹ-si-igbesẹ",
    apply_title: "Bii o ṣe lo marf",
    apply_intro: "Rọrun ati irọrun lati lo. Tẹle awọn igbesẹ 4 wọnyi nikan ati awọn irugbin rẹ yoo rilara iyatọ.",
    s1_title: "Ta pẹlu omi", s1_desc: "Dapọ marf pẹlu omi mimọ ni ibamu si ipin ti a ṣeduro lori aami igo.",
    s2_title: "Lo ni owurọ owurọ", s2_desc: "Lo ni owurọ tete tabi irọlẹ lati yago fun ooru arin ọjọ. Eyi n ṣe iṣeduro gbigba ti o pọ julọ.",
    s3_title: "Fun tabi Da", s3_desc: "Lo ohun elo itanna fun ohun elo foliar lori awọn ewe, tabi da ni irẹlẹ ni ayika ipilẹ ọgbin fun ifunni gbongbo.",
    s4_title: "Tun ṣe Ni gbogbo Ọsẹ 2–3", s4_desc: "Lo ni deede jakejado akoko idagba fun awọn abajade to dara julo. Lilo loorekoore tumọ si awọn irugbin to lagbara.",
    tips_title: "Awọn imọran pataki",
    tip1: "Maṣe lo ni arin ọjọ taara — o dinku ipa.",
    tip2: "Fi pamọ ni ibi ti o tutu, ti o gbẹ jinna si imọlẹ oorun taara.",
    tip3: "Gbọn igo naa daradara ṣaaju lilo kọọkan lati dapọ formula.",
    tip4: "Fun awọn abajade to dara julo, fi omi diẹ fun awọn irugbin rẹ lẹhin lilo.",
    ap1: "Dapọ / Ta", ap2: "Fún sori Irugbin", ap3: "Awọn Abajade Lẹhin Lilo",
    foryou_label: "Fun Tani",
    foryou_title: "Ti a kọ fun awọn agbe. Ti awọn onipin ṣe atilẹyin.",
    foryou_sub: "Boya o gbin irugbin tabi o n pese awọn ipese agro, marf ni alabaṣepọ to tọ fun ọ.",
    far_title: "Fun Awọn Agbe",
    far_desc: "Ajile Olomi marf n ṣe iranlọwọ fun ọ lati gba to pọju lati ilẹ rẹ ni gbogbo akoko gbingbin.",
    far_b1: "Ikore to dara si ni akoko ikore", far_b2: "Awọn irugbin to ni ilera, to lagbara",
    far_b3: "Ilọsiwaju ilẹ ti ko dara tabi ti o rẹ", far_b4: "Irọrun lati lo — ta ati fun",
    far_b5: "Ailewu fun idile ati ẹran rẹ", far_cta: "Paṣẹ bi Agbe →",
    dis_title: "Fun Awọn Onipin",
    dis_desc: "Darapọ mọ wa lati mu marf wá si awọn agbe ni agbegbe rẹ ati dagba iṣowo ogbin rẹ.",
    dis_b1: "Owo iṣowo nla to ni idije", dis_b2: "Ibeere giga — irọrun lati ta",
    dis_b3: "Atilẹyin tita ti a pese", dis_b4: "Awọn oye aṣẹ kekere ti o rọ",
    dis_b5: "Laini taara si ẹgbẹ wa", dis_cta: "Di Onipin →",
    test_label: "Ohun ti Awọn Agbe Sọ",
    test_title: "Awọn abajade gidi lati awọn oko gidi",
    test_sub: "Maṣe gbẹkẹle ọrọ wa — gbọ lọwọ awọn agbe ati awọn onipin jakejado Naijiria.",
    faq_label: "Awọn Ibeere ati Idahun",
    faq_title: "Awọn Ibeere ti a maa n beere",
    faq_sub: "Ohun gbogbo ti o nilo lati mọ nipa marf Ajile Olomi Organic.",
    faq_prompt: "Ko ri idahun rẹ?",
    faq_wa: "Fi ifiranṣẹ WhatsApp ranṣẹ si wa",
    faq_q1: "Kini gangan ni marf Ajile Olomi Organic?",
    faq_a1: "marf jẹ ajile olomi to ga julọ ti a ṣe lati awọn ohun elo Organic adayeba 100%. Ko ni awọn kemika sintetiki ati pe o ni aabo fun ilẹ, irugbin, idile, ati ẹran rẹ. O ṣiṣẹ nipa ṣiṣe ilẹ rẹ olọrọ pẹlu awọn ounjẹ Organic ti awọn ohun ọgbin gba ni iyara.",
    faq_q2: "Ṣe marf dara fun gbogbo iru irugbin?",
    faq_a2: "Bẹẹni! marf ṣiṣẹ lori gbogbo irugbin Naijiria pẹlu oka, isu, tomati, iresi, agbalumo, ata, epa, ẹfọ, ati diẹ sii. Boya o dagba irugbin ounjẹ, irugbin owo, tabi ẹfọ, marf n mu awọn irugbin, idagba, ati ikore dara si.",
    faq_q3: "Bawo ni pẹ to ki n to ri awọn abajade?",
    faq_a3: "Ọpọlọpọ awọn agbe n ṣakiyesi idagba to lagbara laarin ọsẹ 2–3 ti lilo akọkọ. Fun awọn abajade to dara julo, lo ni deede jakejado akoko idagba ni gbogbo ọsẹ 2–3. Awọn ilọsiwaju ilera ilẹ tẹsiwaju lati kọ lori akoko ọpọlọpọ lilo.",
    faq_q4: "Ṣe ẹ n firanṣẹ si ipinlẹ mi?",
    faq_a4: "Bẹẹni, a n fi ranṣẹ ni orilẹ-ede jakejado gbogbo ipinlẹ 36 ni Naijiria. Kan paṣẹ nipasẹ WhatsApp pẹlu ipo ati iye rẹ, a si yoo ṣeto ifijiṣẹ ẹnu-ọna oko.",
    faq_q5: "Ṣe mo le lo marf pẹlu awọn ajile miiran?",
    faq_a5: "marf ni a ṣẹda lati ṣiṣẹ bi ajile akọkọ rẹ. O le lo pẹlu awọn ipese Organic miiran, ṣugbọn a ṣeduro yago fun idapọ pẹlu awọn kemika sintetiki. Fi ifiranṣẹ WhatsApp ranṣẹ si wa fun imọran pato fun irugbin ati ipo rẹ.",
    faq_q6: "Bawo ni emi ṣe le di onipin?",
    faq_a6: "O rọrun! Fi ifiranṣẹ WhatsApp ranṣẹ si wa tabi kun fọọmu olubasọrọ ti o yan 'Onipin / Olutajà Nla.' Ẹgbẹ wa yoo kan si ọ lati jiroro lori idiyele, awọn oye aṣẹ kekere, ati bi a ṣe ṣatilẹyin awọn onipin.",
    contact_label: "Kan si wa",
    contact_title: "Paṣẹ bayi tabi beere ohunkohun",
    contact_sub: "Fi ifiranṣẹ WhatsApp ranṣẹ si wa tabi kun fọọmu ti o wa ni isalẹ — ẹgbẹ wa n dahun ni iyara.",
    wa_label: "WhatsApp (kiakia julo)",
    wa_reply: "Idahun laarin iṣẹju · Ọjọ 7 ni ọsẹ",
    co_label: "Ile-iṣẹ",
    co_delivery: "Ifijiṣẹ",
    co_delivery_desc: "Orilẹ-ede · Ifijiṣẹ ẹnu-ọna oko",
    co_delivery_sub: "Paṣẹ lori WhatsApp — a yoo ṣeto iyokù",
    f_name: "Orukọ rẹ", f_phone: "Nọmba foonu",
    f_role: "Mo jẹ...", f_role_sel: "Yan ọkan",
    f_r1: "Agbe", f_r2: "Onipin / Olutajà Nla", f_r3: "Miran",
    f_state: "Ipinlẹ / Ipo", f_msg: "Ifiranṣẹ tabi Awọn alaye Aṣẹ",
    f_submit: "Fi ranṣẹ nipasẹ WhatsApp →",
    footer_tagline: "100% Adayeba · Ko si kemika · Iṣẹ Naijiria",
    footer_copy: "© 2025 Arafat Agro Allied Services Nig Ltd. Gbogbo ẹtọ ni ipamọ.",
    footer_cert: "Ti fọwọsi Organic",
  },

  ig: {
    nav_about: "Maka anyị", nav_gallery: "Foto", nav_product: "Ngwaahịa",
    nav_apply: "Otu esi etinye ya", nav_foryou: "Maka gị", nav_faq: "Ajụjụ",
    nav_contact: "Kpọtụrụ anyị", nav_order: "Nyefee ugbu a",
    hero_eyebrow: "100% Ọchịchọ · Enweghị kemịkal · Emere na Naịjirịa",
    hero_h1: "Nyefee ala gị nri.", hero_h2: "Tolitere ya na marf.",
    hero_sub: "Ajị mmiri Organic dị elu nke ndị ọrụ ugbo na ndị nkesa n'oge Nigeria tụkwasịrị obi n'ya. Ihe ọkụkụ siri ike, ihe ọ mụrụ dị ọma — n'ụdị nke ya.",
    hero_cta1: "Nyefee ugbu a →", hero_cta2: "Otu esi etinye ya",
    stat1_val: "100% Ọchịchọ", stat1_lbl: "Formula Ọchịchọ",
    stat2_val: "40%", stat2_lbl: "Ihe ọmụmụ ka mma",
    stat3_val: "500+", stat3_lbl: "Ndị ọrụ ugbo e nyere aka",
    stat4_val: "Ụdị niile", stat4_lbl: "Ihe ọkụkụ niile",
    about_label: "Onye anyị bụ",
    about_title: "Ịme ugbo Nigeria ka mụọ na marf",
    about_desc: "Arafat Agro Allied Services Nig Ltd. bụ ụlọ ọrụ ugbo nke Naịjirịa na-enyere ndị ọrụ ugbo aka ịnweta ihe ọmụmụ ka mma site n'iji ajị mmiri Organic 100%, enweghị kemịkal. Anyị kwere na onye ọrụ ugbo ọ bụla nke Naịjirịa kwesịrị inwe ihe ntinye dị mma, dị irè, ma dị ọnụ ahịa mfe.",
    f1_title: "Formula Ọchịchọ 100%", f1_desc: "Emere ya site n'ihe ndị Organic dị n'ụwa. Enweghị kemịkal na-eme ihe ọjọọ — dị mma maka ala, ihe ọkụkụ, ezinụlọ, na ụlọ anụ.",
    f2_title: "Naịjirịa nke ọma", f2_desc: "Etolịtere ya kwa maka ala na ihu igwe Naịjirịa. Anyị ghọtara ala gị n'ihi na anyị si ebe a.",
    f3_title: "Ezitere n'ugbo gị", f3_desc: "Nye ọrụ na WhatsApp anyị ga-ahazi nnyefe ozugbo n'ọnụ ọụzọ ugbo gị — ebe ọ bụla na Naịjirịa.",
    gallery_label: "Ugbo anyị na Nsonaazụ",
    gallery_title: "Hụ ọdịiche marf na-eme",
    gallery_subtitle: "Hụ foto nke ugbo ebe marf enyere aka — tupu na mgbe ntinye, nsonaazụ ịhịa, ndị ọrụ ugbo na-atọ ụtọ.",
    g1: "Foto Ugbo Buru Ibu", g2: "Tupu Ịkụ Osisi", g3: "Ihe ọkụkụ na-eto eto", g4: "Nsonaazụ Ịhịa",
    g5: "Onye ọrụ ugbo na-atọ ụtọ", g6: "Ihe ọkụkụ nso", g7: "Ọrụ Ugbo", g8: "Otu / Ụlọ ọrụ",
    product_label: "Ngwaahịa anyị", product_badge: "Onye Ọrịa kachasị · Nhọrọ Ndị Ọrụ Ugbo",
    product_title: "marf Ajị Mmiri Organic",
    product_subtitle: "Otu formula siri ike na-arụ ọrụ maka ihe ọkụkụ Naịjirịa niile na ụdị ala niile.",
    product_desc: "Ajị mmiri dị elu emere site n'ihe ndị Organic 100%. Dị mma maka ọka, ji, tomato, osikapa, akpụ, akwụkwọ nri na ihe ọkụkụ niile. Na-arụ ọrụ site n'ntinye mbụ.",
    b1_title: "Ọmụmụ siri ike", b1_desc: "Mkpụrụ osisi na-emepụta ngwa ngwa ma dị mma site n'ụbọchị mbụ",
    b2_title: "Ọ ruru 40% ihe ọmụmụ ọzọ", b2_desc: "Ndị ọrụ ugbo na-akọ ihe ọ mụrụ buru ibu karịa",
    b3_title: "Na-eme ka ala dị mma", b3_desc: "Na-eme ka ihe dị ndụ ala dị mma maka ọọzụzụ ogologo oge",
    b4_title: "Dị mma maka onye ọ bụla", b4_desc: "Enweghị kemịkal — dị mma n'akụkụ ụmụ nna, anụ ụlọ, mmiri",
    apply_label: "Nduzi Nzọụkwụ-ka-Nzọụkwụ",
    apply_title: "Otu esi etinye marf",
    apply_intro: "Dị mfe ma dị mfe iji. Soro naanị nzọụkwụ 4 ndị a ihe ọkụkụ gị ga-enwe mmetụta ọdịiche.",
    s1_title: "Gbatie ya na mmiri", s1_desc: "Tụkọ marf na mmiri ọcha dị ka ọnụ ọgụgụ akwadoro dị na akara karama.",
    s2_title: "Tinye n'ọ́gbụ ụtụtụ", s2_desc: "Tinye n'oge ọ́gbụ ụtụtụ ma ọ bụ n'anyasị iji zere ọkụ ehihie. Nke a na-eme ka ọnọdụ wụsara kasị elu.",
    s3_title: "Wụpụo ma ọ bụ Tụba", s3_desc: "Jiri ihe wụpụo maka ntinye foliar n'ákwụkwọ, ma ọ bụ tụba nwayọọ n'gburugburu ntọala osisi.",
    s4_title: "Mee ọzọ Kwa Izu 2–3", s4_desc: "Tinye ya n'oge oge ndoro-ndoro n'oge ịmụ maka ezigbo nsonaazụ. Iji ya ugboro ugboro pụtara ihe ọkụkụ siri ike.",
    tips_title: "Ndụmọdụ Dị Mkpa",
    tip1: "Etinyela ya n'oge ọkụ ehihie ozugbo — ọ na-ebelata arụmọrụ.",
    tip2: "Chekwaa ya n'ọnọdụ oyi, kọọrọ n'anya ọkụ anyanwụ ozugbo.",
    tip3: "Kpọọ karama nke ọma tupu itinye ya ọ bụla iji tụkọ formula.",
    tip4: "Maka nsonaazụ ka mma, kụzie ihe ọkụkụ gị nwayọ mgbe ntinye gasịrị.",
    ap1: "Itụkọ / Ịgbatịe", ap2: "Ịgba Ihe ọkụkụ", ap3: "Nsonaazụ Mgbe Ntinye",
    foryou_label: "Maka Onye",
    foryou_title: "Ewuolere maka ndị ọrụ ugbo. Ndị nkesa kwadoro ya.",
    foryou_sub: "Ma ọ bụ na ị na-akụ ihe ọkụkụ ma ọ bụ na-ebere ngwaahịa ugbo, marf bụ onye mmekọ kwesịrị ịdị maka gị.",
    far_title: "Maka Ndị Ọrụ Ugbo",
    far_desc: "Ajị Mmiri Organic marf na-enyere gị aka ịnweta ihe kachasị nke ala gị n'oge ịkụ osisi ọ bụla.",
    far_b1: "Ihe ọmụmụ ka mma n'oge ịhịa", far_b2: "Ihe ọkụkụ siri ike, dị mma",
    far_b3: "Na-eme ka ala ọjọọ ma ọ bụ gbara ọgbu ka mma", far_b4: "Dị mfe etinye ya — gbatie wụpụo",
    far_b5: "Dị mma maka ezinụlọ na anụ ụlọ gị", far_cta: "Nye ọrụ dị ka Onye Ọrụ Ugbo →",
    dis_title: "Maka Ndị Nkesa",
    dis_desc: "Jikọọ anyị ị ga-eweta marf nye ndị ọrụ ugbo n'mpaghara gị ma tozuo azụmahịa ugbo gị.",
    dis_b1: "Ọnụ ahịa ọnụogụ dị mkpa", dis_b2: "Achọ dị elu — dị mfe ire ya",
    dis_b3: "Nkwado ahịa e nyere", dis_b4: "Obere ọnụ ọgụgụ ịnyocha dị nro",
    dis_b5: "Ahịrị ozugbo gaa n'otu anyị", dis_cta: "Bụrụ Onye Nkesa →",
    test_label: "Ihe Ndị Ọrụ Ugbo Na-ekwu",
    test_title: "Nsonaazụ eziokwu site n'ugbo eziokwu",
    test_sub: "Bụghị ịgụọ okwu anyị — nụ olu ndị ọrụ ugbo na ndị nkesa n'oge Naịjirịa.",
    faq_label: "Ajụjụ na Azịza",
    faq_title: "Ajụjụ A Na-ajụkarị",
    faq_sub: "Ihe niile ị chọrọ ịmara maka marf Ajị Mmiri Organic.",
    faq_prompt: "Enweghị azịza gị?",
    faq_wa: "Zitere anyị ozi WhatsApp",
    faq_q1: "Gịnị bụ marf Ajị Mmiri Organic n'ezie?",
    faq_a1: "marf bụ ajị mmiri dị elu emere site n'ihe ndị Organic adayeba 100%. Enweghị kemịkal sintetiki ma dị mma maka ala, ihe ọkụkụ, ezinụlọ, na ụlọ anụ gị. Ọ na-arụ ọrụ site n'ịme ala gị baa ọgaranya na ihe nri Organic nke osisi na-anọpụ ike ngwa ngwa.",
    faq_q2: "Marf dabara maka ụdị ihe ọkụkụ niile?",
    faq_a2: "Ee! Marf na-arụ ọrụ n'ihe ọkụkụ Naịjirịa niile gụnyere ọka, ji, tomato, osikapa, akpụ, ose, ahịhịa, akwụkwọ nri, na ndị ọzọ. Ma ọ bụ na ị na-akụ ihe oriri, ihe ahịa, ma ọ bụ akwụkwọ nri, marf na-emezi ọmụmụ, eto eto, na ịhịa.",
    faq_q3: "Ogologo oge ole ka ọ ga-ewe ka m hụ nsonaazụ?",
    faq_a3: "Ọtụtụ ndị ọrụ ugbo na-achọpụta eto eto siri ike n'ime izu 2–3 nke ntinye mbụ. Maka nsonaazụ kasị elu, tinye ya n'oge oge ndoro-ndoro n'oge ịmụ kwa izu 2–3. Ọdịmma ala na-aga n'ihu ịkọwa n'oge ọtụtụ ntinye.",
    faq_q4: "Ị na-ezipu ihe n'steeti m?",
    faq_a4: "Ee, anyị na-ezipu ihe n'mba niile steeti 36 nile na Naịjirịa. Naanị nye ọrụ site na WhatsApp na ọnọdụ gị na ọnụ ọgụgụ, anyị ga-ahazi nnyefe ọnụ ọụzọ ugbo.",
    faq_q5: "Enwere m ike iji marf ya na ajị ndị ọzọ?",
    faq_a5: "Etolịtere marf ka ọ rụọ ọrụ dị ka ajị gị bụ isi. Enwere ike iji ya ya na ihe ndị Organic ọzọ, mana anyị na-atụ aro iji zere jikọo ya na kemịkal sintetiki. Zitere anyị ozi WhatsApp maka ndụmọdụ pụrụ iche maka ihe ọkụkụ gị.",
    faq_q6: "Olee otú m ga-esị bụrụ onye nkesa?",
    faq_a6: "Dị mfe! Zitere anyị ozi WhatsApp ma ọ bụ jupụta fọọm kpọtụrụ n'ịhọrọ 'Onye nkesa / Ọnụogụ nnukwu.' Otu anyị ga-akpọtụrụ gị iji tụlee ọnụ ahịa, obere ọnụ ọgụgụ ịnyocha, na otu anyị si akwado ndị nkesa.",
    contact_label: "Kpọtụrụ anyị",
    contact_title: "Nye ọrụ ugbu a ma ọ bụ jụọ anyị ihe ọ bụla",
    contact_sub: "Zitere anyị ozi WhatsApp ma ọ bụ jupụta fọọm dị n'okpuru — otu anyị na-azaghachi ngwa ngwa.",
    wa_label: "WhatsApp (kachasị osi ike)",
    wa_reply: "Ọzaazị n'ime nkeji · Ụbọchị 7 n'izu",
    co_label: "Ụlọ ọrụ",
    co_delivery: "Nnyefe",
    co_delivery_desc: "Mba nile · Nnyefe ọnụ ọụzọ ugbo",
    co_delivery_sub: "Nye ọrụ na WhatsApp — anyị ga-ahazi ihe fọdụrụ",
    f_name: "Aha gị", f_phone: "Nọmba ekwentị",
    f_role: "Abụ m...", f_role_sel: "Họrọ otu",
    f_r1: "Onye ọrụ ugbo", f_r2: "Onye nkesa / Ọnụogụ nnukwu", f_r3: "Nke ọzọ",
    f_state: "Steeti / Ọnọdụ", f_msg: "Ozi ma ọ bụ Nkọwa Ịnyocha",
    f_submit: "Ziga site na WhatsApp →",
    footer_tagline: "100% Ọchịchọ · Enweghị kemịkal · Emere na Naịjirịa",
    footer_copy: "© 2025 Arafat Agro Allied Services Nig Ltd. Ikike niile echekwara.",
    footer_cert: "Akwadoro Organic",
  }
};

// ── Current language ────────────────────────────────────────────────────────
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

// ── Sticky Navbar ───────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── Mobile Menu ─────────────────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    iconOpen.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });
}

// ── FAQ Accordion ───────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Language Switcher ───────────────────────────────────────────────────────
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

// ── Contact Form → WhatsApp ─────────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value.trim();
    const phone   = form.querySelector('[name="phone"]').value.trim();
    const role    = form.querySelector('[name="role"]').value;
    const state   = form.querySelector('[name="state"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    const lines = [
      `Hello marf! I'd like to get in touch.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `I am a: ${role}`,
      `Location: ${state}`,
      ``,
      `Message: ${message}`,
    ];
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/2348022256977?text=${text}`, '_blank');
  });
}

// ── Scroll Reveal ───────────────────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Smooth Scroll for anchor links ─────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initFAQ();
  initLangSwitcher();
  initContactForm();
  initReveal();
  initSmoothScroll();
  applyLang('en');
});

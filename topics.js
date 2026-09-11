/* Lingua Forge Academy — Unit materials (16 themes)
   Professional IELTS-style reading: paragraphs A–D with True/False/Not Given,
   Summary completion (word bank) and Multiple choice tasks.
   Legacy keys kept for app compatibility: reading.text · questions */
window.LF_TOPICS = [
  {
    title: "Introductions & Identity",
    intro: "Names, greetings and the language we use to say who we are.",
    reading: {
      title: "More than a name",
      text: "A name is often the first piece of identity we share with the world, yet it carries far more than sounds. A family may choose a name to honour a grandparent, to mark a religious tradition or simply because they love its meaning. In this sense, every name tells a small story before its owner has said a single word. When we introduce ourselves, we do more than give information: we open a conversation and invite connection. Psychologists who study first meetings note that a confident introduction — eye contact, a clear voice, a genuine smile — shapes how the other person remembers us. The first thirty seconds of any meeting can influence the relationship that follows for weeks. Remembering names is a surprisingly powerful social skill. Repeating a new name immediately, connecting it to a picture or a story, and using it naturally in conversation all help to fix it in memory. People whose names are remembered feel valued, and they return that warmth to the speaker. In a new language, introductions are among the first phrases we learn — and for good reason. Practising them until they feel natural gives a learner a safe way into every new group, from the classroom to the workplace. A name may be given once, but how we share it is practised every day.",
      paras: [
        "A name is often the first piece of identity we share with the world, yet it carries far more than sounds. A family may choose a name to honour a grandparent, to mark a religious tradition or simply because they love its meaning. In this sense, every name tells a small story before its owner has said a single word.",
        "When we introduce ourselves, we do more than give information: we open a conversation and invite connection. Psychologists who study first meetings note that a confident introduction — eye contact, a clear voice, a genuine smile — shapes how the other person remembers us. The first thirty seconds of any meeting can influence the relationship that follows for weeks.",
        "Remembering names is a surprisingly powerful social skill. Repeating a new name immediately, connecting it to a picture or a story, and using it naturally in conversation all help to fix it in memory. People whose names are remembered feel valued, and they return that warmth to the speaker.",
        "In a new language, introductions are among the first phrases we learn — and for good reason. Practising them until they feel natural gives a learner a safe way into every new group, from the classroom to the workplace. A name may be given once, but how we share it is practised every day."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "A name can reflect the culture of the family that chose it.", a: "True" },
            { s: "The first thirty seconds of a meeting have little influence on the relationship that follows.", a: "False" },
            { s: "Repeating a name soon after meeting someone helps to fix it in memory.", a: "True" },
            { s: "People whose names are remembered tend to feel valued.", a: "True" },
            { s: "Children learn to introduce themselves before they start school.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["tradition", "connection", "memory", "group", "smile", "warmth", "courage", "passport"],
          text: [
            "A family may choose a name to honour a grandparent or to mark a religious ____.",
            "A confident introduction opens a conversation and invites ____.",
            "Repeating a new name helps to fix it in ____.",
            "In a new language, introductions give a learner a safe way into every new ____."
          ],
          ans: ["tradition", "connection", "memory", "group"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why does the writer say that every name tells a small story?", opts: ["Because it always reveals the owner's job.", "Because it can reflect family history and culture.", "Because it changes as the person grows.", "Because it is chosen by law at birth."], a: 1 },
            { q: "What is the main purpose of paragraph D?", opts: ["To describe a problem with introductions.", "To criticise schools that teach introductions.", "To explain why introductions matter in a new language.", "To compare two ways of greeting."], a: 2 },
            { q: "Which of the following does the writer NOT mention as part of a confident introduction?", opts: ["Eye contact.", "A clear voice.", "A genuine smile.", "A firm handshake."], a: 3 }
          ]
        }
      ]
    },
    questions: [
      { q: "What can a name reflect?", a: "Family history, culture and the hopes of the people who chose it." },
      { q: "What do we do when we introduce ourselves?", a: "We open a conversation and invite connection." },
      { q: "Why is remembering names important?", a: "It is a social skill that opens doors in new groups." }
    ],
    listening: {
      title: "First day at the language school",
      script: "Marta: Hello, I'm Marta. I'm from Poland and I'm here to improve my English. Ana: Nice to meet you, Marta! I'm Ana. This is my second course here. What do you do? Marta: I'm a nurse. I work nights, so my mornings are free. Ana: That sounds demanding. Is this your first time in London? Marta: Yes, it is. Everyone has been so friendly. Ana: You'll love it here. Let me show you where the classroom is."
    },
    speaking: {
      roleplay: "Introduce yourself to a new classmate. Exchange names, countries, jobs or studies, and one personal fact.",
      discuss: ["What makes a good introduction?", "Why do first impressions matter?", "How do introductions differ across cultures?"]
    },
    writing: {
      prompt: "Write a short self-introduction for your class blog: who you are, where you are from and one thing you are proud of.",
      checklist: ["Greeting and name", "Background (country / job / studies)", "One personal detail", "A friendly closing line"]
    }
  },
  {
    title: "Family & Friends",
    intro: "The people we love, the roles we play and the language of relationships.",
    reading: {
      title: "The family that grows",
      text: "Families today come in many shapes. Some children grow up with two parents, others with one, with grandparents, or with a wider circle of relatives and close friends. Census data in many countries show that the 'typical' family — two parents and their children — is now only one of several common patterns. What matters, researchers argue, is less the structure than the support a child receives. Psychologists who study child development report that children thrive when they feel secure, listened to and valued. A child in a single-parent home can develop just as well as one with two parents if the care is consistent and warm. In this sense, a family is not simply a group of people with the same name; it is a network of trust that gives us a safe place to return to when life becomes difficult. This network often extends beyond blood relatives to include close friends, neighbours and even teachers who act as family. The language we use about family is changing to reflect this reality. Words like 'chosen family' have entered everyday speech, describing the people we deliberately keep close. What remains constant is the function: a family, whatever its shape, is the circle where we are known and accepted.",
      paras: [
        "Families today come in many shapes. Some children grow up with two parents, others with one, with grandparents, or with a wider circle of relatives and close friends. Census data in many countries show that the 'typical' family — two parents and their children — is now only one of several common patterns.",
        "What matters, researchers argue, is less the structure than the support a child receives. Psychologists who study child development report that children thrive when they feel secure, listened to and valued. A child in a single-parent home can develop just as well as one with two parents if the care is consistent and warm.",
        "In this sense, a family is not simply a group of people with the same name; it is a network of trust that gives us a safe place to return to when life becomes difficult. This network often extends beyond blood relatives to include close friends, neighbours and even teachers who act as family.",
        "The language we use about family is changing to reflect this reality. Words like 'chosen family' have entered everyday speech, describing the people we deliberately keep close. What remains constant is the function: a family, whatever its shape, is the circle where we are known and accepted."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "The text says the 'typical' family is still the most common pattern in many countries.", a: "False" },
            { s: "A child in a single-parent home can develop as well as one with two parents if the care is consistent.", a: "True" },
            { s: "The writer believes that a family must always be related by blood.", a: "False" },
            { s: "The phrase 'chosen family' has entered everyday speech.", a: "True" },
            { s: "Most children today prefer to live with their grandparents.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["structure", "valued", "network", "close", "support", "trust", "wealth", "tradition"],
          text: [
            "Researchers argue that what matters is less the ____ than the support a child receives.",
            "Children thrive when they feel secure, listened to and ____.",
            "A family is a ____ of trust that gives us a safe place to return to.",
            "Words like 'chosen family' describe the people we deliberately keep ____."
          ],
          ans: ["structure", "valued", "network", "close"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "According to paragraph B, what helps children develop well?", opts: ["A family's shape matters less than the support it gives.", "Children need two parents to develop well.", "Families are becoming too small.", "Census data are unreliable."], a: 0 },
            { q: "The phrase 'chosen family' describes people who…", opts: ["are related by blood.", "live in the same street.", "we deliberately keep close.", "have the same surname."], a: 2 },
            { q: "What is the main idea of the passage?", opts: ["Families today are weaker than before.", "A family's shape matters less than its support.", "Children should live with both parents.", "Family language is disappearing."], a: 1 }
          ]
        }
      ]
    },
    questions: [
      { q: "What shapes of families does the text mention?", a: "Two parents, one parent, grandparents, or wider circles of relatives and friends." },
      { q: "What matters more than family structure?", a: "Support: feeling secure, listened to and valued." },
      { q: "How does the text define a family?", a: "A network of trust that gives us a safe place to return to." }
    ],
    listening: {
      title: "The family photo",
      script: "Tom: Is this your family, Elena? Elena: Yes — it was taken at my grandmother's eightieth birthday. Tom: Wow, is that your brother next to you? Elena: That's right. He lives in Canada now, so we don't see him often. Tom: And the woman holding the baby? Elena: That's my cousin Sara with her little girl. She lives two streets away, so we meet every Sunday for lunch. Tom: That's lovely. Family really matters, doesn't it?"
    },
    speaking: {
      roleplay: "Show a photo of your family (or draw it) and describe each person: who they are, where they live and what they do.",
      discuss: ["Who is the closest person in your family?", "How have friendships changed your life?", "What does 'family' mean in your culture?"]
    },
    writing: {
      prompt: "Describe a person in your family or a close friend. Explain what they are like and why they matter to you.",
      checklist: ["Who the person is", "Physical and personality description", "A memory together", "Why they matter to you"]
    }
  },
  {
    title: "Daily Life",
    intro: "Routines, habits and the small rituals that shape our days.",
    reading: {
      title: "The power of small routines",
      text: "Our days are built from habits: the alarm clock, the first cup of tea, the same route to work. So regular are these actions that we rarely notice them, yet they quietly decide how much energy we have left for the things that matter. Researchers who study behaviour say these small routines matter more than we think. A stable morning ritual reduces decision-making, freeing mental energy for harder tasks later in the day. Each automatic choice — what to wear, what to eat — is one less decision competing for attention. The key is not to fill every minute with activity, but to build a rhythm that supports what we value. Psychologists call this 'intentional routine': the habit is kept because it serves a purpose, not because it is busy. A routine that does not fit a person's life will not survive the first busy week. The most successful schedules are not the busiest ones; they are the ones we can actually keep. Experts recommend starting with a single anchor habit, such as a fixed wake-up time, and building from there. Small, repeatable changes are what turn good intentions into a working day.",
      paras: [
        "Our days are built from habits: the alarm clock, the first cup of tea, the same route to work. So regular are these actions that we rarely notice them, yet they quietly decide how much energy we have left for the things that matter.",
        "Researchers who study behaviour say these small routines matter more than we think. A stable morning ritual reduces decision-making, freeing mental energy for harder tasks later in the day. Each automatic choice — what to wear, what to eat — is one less decision competing for attention.",
        "The key is not to fill every minute with activity, but to build a rhythm that supports what we value. Psychologists call this 'intentional routine': the habit is kept because it serves a purpose, not because it is busy. A routine that does not fit a person's life will not survive the first busy week.",
        "The most successful schedules are not the busiest ones; they are the ones we can actually keep. Experts recommend starting with a single anchor habit, such as a fixed wake-up time, and building from there. Small, repeatable changes are what turn good intentions into a working day."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Our daily routines are actions we rarely notice.", a: "True" },
            { s: "A stable morning ritual increases the number of decisions we make.", a: "False" },
            { s: "A routine should be kept because it is busy.", a: "False" },
            { s: "Experts suggest starting with a single anchor habit.", a: "True" },
            { s: "Most people prefer to plan their evenings first.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["habits", "energy", "rhythm", "anchor", "attention", "purpose", "week", "traffic"],
          text: [
            "Our days are built from ____ such as the alarm clock and the morning tea.",
            "A stable morning ritual frees mental ____ for harder tasks.",
            "Psychologists call a kept-for-a-reason routine an 'intentional ____'.",
            "Experts recommend starting with a single ____ habit."
          ],
          ans: ["habits", "energy", "rhythm", "anchor"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why do stable morning rituals help?", opts: ["They fill every minute with activity.", "They reduce decision-making.", "They make the day busier.", "They replace sleep."], a: 1 },
            { q: "What does 'intentional routine' mean in paragraph C?", opts: ["A habit kept because it serves a purpose.", "A habit copied from a friend.", "A routine that fills every hour.", "A routine designed for holidays."], a: 0 },
            { q: "What is the writer's main message?", opts: ["Busy schedules are the best schedules.", "Routines should be abandoned.", "Habit research is unreliable.", "Successful schedules are those we can actually keep."], a: 3 }
          ]
        }
      ]
    },
    questions: [
      { q: "What are our days built from, according to the text?", a: "Habits: small routines like the alarm clock or the same route to work." },
      { q: "Why do stable morning rituals help?", a: "They reduce decision-making and free mental energy for harder tasks." },
      { q: "What makes a schedule successful?", a: "Not being busy, but being a rhythm we can actually keep." }
    ],
    listening: {
      title: "A busy weekday",
      script: "Lena: What does your typical day look like? Omar: I'm up at six, I run for half an hour, then breakfast and the commute. I'm at my desk by nine. Lena: That sounds organized! Do you cook dinner too? Omar: Usually. I prepare a big batch on Sunday so I'm not stuck every evening. Lena: Smart. I waste so much time deciding what to eat. Omar: Honestly, routines are what keep me sane."
    },
    speaking: {
      roleplay: "Interview your partner about their daily routine. Ask about morning, work or school, evening and weekends. Find one habit you share.",
      discuss: ["Is your morning routine effective?", "What habit would improve your day?", "Why do routines feel good or boring?"]
    },
    writing: {
      prompt: "Describe a typical day in your life. Use time expressions (first, then, after that, finally) to make the order clear.",
      checklist: ["Time expressions to order events", "Present simple for routines", "One or two unusual details", "A final reflection on your day"]
    }
  },
  {
    title: "Food & Health",
    intro: "Eating well, staying active and talking about food with confidence.",
    reading: {
      title: "Food, mood and energy",
      text: "The link between what we eat and how we feel is stronger than most people imagine. Diets rich in vegetables, whole grains and healthy fats are associated not only with physical health but with steadier energy and better mood. Researchers now study food and mental health together rather than as separate subjects. Part of the explanation lies in the gut, sometimes called the 'second brain'. The bacteria that live in our digestive system produce chemicals that travel to the brain and influence how we feel. A varied diet, high in fibre, feeds these bacteria and supports both digestion and mood. Nutritionists warn against extremes. Quick-fix diets rarely last, because they ask for behaviour that cannot be maintained; a balanced approach — varied meals, sensible portions and the occasional treat — is far more sustainable. The strictest plan is also often the shortest-lived. Eating well is not about perfection; it is about the choices we make most of the time. This is encouraging news, because it means one imperfect meal does not undo a week of good choices. Consistency, not perfection, is what changes health.",
      paras: [
        "The link between what we eat and how we feel is stronger than most people imagine. Diets rich in vegetables, whole grains and healthy fats are associated not only with physical health but with steadier energy and better mood. Researchers now study food and mental health together rather than as separate subjects.",
        "Part of the explanation lies in the gut, sometimes called the 'second brain'. The bacteria that live in our digestive system produce chemicals that travel to the brain and influence how we feel. A varied diet, high in fibre, feeds these bacteria and supports both digestion and mood.",
        "Nutritionists warn against extremes. Quick-fix diets rarely last, because they ask for behaviour that cannot be maintained; a balanced approach — varied meals, sensible portions and the occasional treat — is far more sustainable. The strictest plan is also often the shortest-lived.",
        "Eating well is not about perfection; it is about the choices we make most of the time. This is encouraging news, because it means one imperfect meal does not undo a week of good choices. Consistency, not perfection, is what changes health."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Researchers now study food and mental health together.", a: "True" },
            { s: "The bacteria in our gut have no connection with the brain.", a: "False" },
            { s: "Nutritionists warn against extreme quick-fix diets.", a: "True" },
            { s: "The strictest diet is usually the most popular one.", a: "Not Given" },
            { s: "One imperfect meal undoes a week of good choices.", a: "False" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["gut", "fibre", "balanced", "perfection", "bacteria", "mood", "strict", "energy"],
          text: [
            "Diets rich in vegetables and whole grains are associated with steadier ____ and better mood.",
            "The ____ is sometimes called the 'second brain'.",
            "A varied diet, high in ____, feeds the bacteria that support digestion.",
            "Eating well is about the choices we make most of the time, not ____."
          ],
          ans: ["energy", "gut", "fibre", "perfection"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why is the gut called the 'second brain'?", opts: ["Because it is as large as the brain.", "Because its bacteria affect how we feel.", "Because it controls our thoughts.", "Because it never rests."], a: 1 },
            { q: "Why do quick-fix diets rarely last?", opts: ["They are too expensive.", "They are not advertised.", "They ask for behaviour that cannot be maintained.", "They contain too much fibre."], a: 2 },
            { q: "What is the writer's final message?", opts: ["Consistency matters more than perfection.", "Only the strictest diets work.", "One bad meal ruins everything.", "Mood and food are unrelated."], a: 0 }
          ]
        }
      ]
    },
    questions: [
      { q: "What are balanced diets associated with?", a: "Physical health, steadier energy and better mood." },
      { q: "Why do nutritionists warn against quick-fix diets?", a: "Because they rarely last; a balanced approach is more sustainable." },
      { q: "What does 'eating well' really mean?", a: "The choices we make most of the time, not perfection." }
    ],
    listening: {
      title: "Ordering at a café",
      script: "Waitress: Are you ready to order? Ben: Yes. Could I have the chicken salad, please? And a glass of water. Waitress: Certainly. Anything else? Cara: I'll have the mushroom soup and a green tea. Waitress: The soup comes with bread — would you like wholemeal or white? Cara: Wholemeal, please. Waitress: Great. That won't be long."
    },
    speaking: {
      roleplay: "Order a meal in a café. One of you is the customer, the other the waiter. Ask about ingredients and make polite requests.",
      discuss: ["What is a healthy meal for you?", "Are 'superfoods' really super?", "How can we make healthy food easier to choose?"]
    },
    writing: {
      prompt: "Describe your favourite meal. What is in it, when do you eat it, and why do you love it?",
      checklist: ["Dish and ingredients", "When and where you eat it", "A reason it matters to you", "Descriptive adjectives"]
    }
  },
  {
    title: "Home & Community",
    intro: "Where we live, who we know and how neighbourhoods work.",
    reading: {
      title: "The neighbourhood effect",
      text: "Where we live shapes our daily experience more than we often notice. A neighbourhood with safe streets, parks and nearby shops encourages walking, meeting neighbours and a sense of belonging. The physical design of a place can quietly encourage or discourage social life. Researchers have found that people who feel connected to their local community report lower stress and greater well-being. Feeling that you belong somewhere appears to act as a buffer against the pressures of daily life, much as a good network of friends does. Community is built slowly: a friendly greeting at the door, a helping hand with shopping, a shared celebration. These small acts of care do not appear in statistics, but they accumulate. Each one lowers the distance between neighbours a little more. This matters for how we design cities. Planners now talk about '15-minute neighbourhoods', where work, shops, parks and schools are close enough to reach on foot. When daily needs are nearby, people meet more often — and a street of houses gradually becomes a place people call home.",
      paras: [
        "Where we live shapes our daily experience more than we often notice. A neighbourhood with safe streets, parks and nearby shops encourages walking, meeting neighbours and a sense of belonging. The physical design of a place can quietly encourage or discourage social life.",
        "Researchers have found that people who feel connected to their local community report lower stress and greater well-being. Feeling that you belong somewhere appears to act as a buffer against the pressures of daily life, much as a good network of friends does.",
        "Community is built slowly: a friendly greeting at the door, a helping hand with shopping, a shared celebration. These small acts of care do not appear in statistics, but they accumulate. Each one lowers the distance between neighbours a little more.",
        "This matters for how we design cities. Planners now talk about '15-minute neighbourhoods', where work, shops, parks and schools are close enough to reach on foot. When daily needs are nearby, people meet more often — and a street of houses gradually becomes a place people call home."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "The design of a place can encourage or discourage social life.", a: "True" },
            { s: "People connected to their community report higher levels of stress.", a: "False" },
            { s: "Small acts of care appear in official statistics.", a: "False" },
            { s: "In a '15-minute neighbourhood', daily needs are close enough to reach on foot.", a: "True" },
            { s: "Most new cities are designed as 15-minute neighbourhoods.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["belonging", "stress", "slowly", "design", "greeting", "statistics", "planners", "shopping"],
          text: [
            "Safe streets and nearby parks encourage walking and a sense of ____.",
            "People who feel connected report lower ____ and greater well-being.",
            "Community is built ____ through small acts of care.",
            "____ now talk about '15-minute neighbourhoods'."
          ],
          ans: ["belonging", "stress", "slowly", "planners"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "What can act as a buffer against the pressures of daily life?", opts: ["Living in a tall building.", "Feeling you belong somewhere.", "Owning a car.", "Working from home."], a: 1 },
            { q: "Which of the following is NOT mentioned as a small act of care?", opts: ["A friendly greeting.", "A helping hand with shopping.", "A shared celebration.", "A formal complaint."], a: 3 },
            { q: "What is the main idea of the passage?", opts: ["Cities should be bigger.", "Statistics are the best measure of community.", "Neighbourhoods shape well-being through design and small acts of care.", "Communities grow fastest in large cities."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "What does a good neighbourhood encourage?", a: "Walking, meeting neighbours and a sense of belonging." },
      { q: "What do people who feel connected report?", a: "Lower stress and greater well-being." },
      { q: "How is community built?", a: "Slowly, through small acts of care like greetings and helping hands." }
    ],
    listening: {
      title: "The new neighbours",
      script: "Mrs Park: Oh, hello! You must be the new family. I'm Mrs Park from next door. Daniel: Yes, we moved in on Saturday. Nice to meet you. Mrs Park: Welcome to the street! If you ever need anything, just knock. There's a great bakery two blocks away. Daniel: Thank you, that's kind. Is there a good supermarket nearby? Mrs Park: The one on Green Street is excellent — it stays open late. Daniel: Perfect. We'll find it this weekend."
    },
    speaking: {
      roleplay: "Welcome a new neighbour to your street. Offer useful information about the area and ask about their move.",
      discuss: ["What makes a community strong?", "How can you help a newcomer feel welcome?", "What would improve your own neighbourhood?"]
    },
    writing: {
      prompt: "Describe your neighbourhood or the place where you live. What is there, and what do you like or dislike about it?",
      checklist: ["Location and key places", "Present simple descriptions", "One thing you like", "One thing you would change"]
    }
  },
  {
    title: "School & Learning",
    intro: "How we learn, how schools work and how to study smarter.",
    reading: {
      title: "Learning how to learn",
      text: "Studying harder does not always mean studying better. Cognitive scientists point to a set of techniques that reliably improve memory: testing yourself instead of re-reading, spacing your revision over days rather than cramming, and explaining ideas in your own words. These methods feel harder in the moment, which is precisely why they work. When a task demands effort — retrieving an answer rather than recognising it — the brain strengthens the pathway to that information. Ease during study is often a sign that learning is shallow. Spacing is the quiet hero of this research. Reviewing material after a day, then a week, then a month exploits the way memory naturally fades and rebuilds; each gap makes the next recall stronger. Cramming, by contrast, produces confidence without durability. The most successful learners are not necessarily the most gifted; they are the ones who have learned how to use their study time effectively. This is good news for classrooms: study skills can be taught, practised and improved, just like any other subject.",
      paras: [
        "Studying harder does not always mean studying better. Cognitive scientists point to a set of techniques that reliably improve memory: testing yourself instead of re-reading, spacing your revision over days rather than cramming, and explaining ideas in your own words.",
        "These methods feel harder in the moment, which is precisely why they work. When a task demands effort — retrieving an answer rather than recognising it — the brain strengthens the pathway to that information. Ease during study is often a sign that learning is shallow.",
        "Spacing is the quiet hero of this research. Reviewing material after a day, then a week, then a month exploits the way memory naturally fades and rebuilds; each gap makes the next recall stronger. Cramming, by contrast, produces confidence without durability.",
        "The most successful learners are not necessarily the most gifted; they are the ones who have learned how to use their study time effectively. This is good news for classrooms: study skills can be taught, practised and improved, just like any other subject."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Testing yourself is more reliable than re-reading.", a: "True" },
            { s: "Tasks that demand effort make learning shallow.", a: "False" },
            { s: "Spacing review over time strengthens later recall.", a: "True" },
            { s: "Cramming produces confidence without durability.", a: "True" },
            { s: "Gifted learners never need to plan their study time.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["effort", "spacing", "recall", "retrieving", "confidence", "gifted", "cramming", "pathway"],
          text: [
            "Methods that demand ____ feel harder but work better.",
            "____ revision over days strengthens each later recall.",
            "____, by contrast, produces confidence without durability.",
            "Successful learners know how to use their study time, not just how to be ____."
          ],
          ans: ["effort", "Spacing", "Cramming", "gifted"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why do effortful tasks improve memory?", opts: ["Because they are easier to recognise.", "Because the brain strengthens the pathway to the information.", "Because they take less time.", "Because they are repeated daily."], a: 1 },
            { q: "According to the writer, ease during study often means…", opts: ["the learner is ready for the exam.", "the technique is new.", "the material is too hard.", "the learning is shallow."], a: 3 },
            { q: "What is the main message of paragraph D?", opts: ["Study skills can be taught and improved.", "Gifted students do not need to study.", "Cramming is the best method.", "Classrooms should be abolished."], a: 0 }
          ]
        }
      ]
    },
    questions: [
      { q: "Which techniques reliably improve memory?", a: "Testing yourself, spacing revision over days, and explaining ideas in your own words." },
      { q: "Why do these methods feel harder?", a: "Because they require effort — which is precisely why they work." },
      { q: "What separates the most successful learners?", a: "Knowing how to use study time effectively, not raw talent." }
    ],
    listening: {
      title: "Revision advice",
      script: "Teacher: How's the revision going, Priya? Priya: Honestly, I keep re-reading my notes, but nothing sticks. Teacher: Try covering the page and recalling the key points instead. Priya: That feels harder, though. Teacher: That's the point — if it feels difficult, your brain is actually working. Test yourself today, then again tomorrow. Priya: OK, I'll try it. Thanks!"
    },
    speaking: {
      roleplay: "Two students discuss exam preparation. Give each other study advice using should and why don't you.",
      discuss: ["What is your best study technique?", "Is homework necessary?", "Should schools teach study skills as a subject?"]
    },
    writing: {
      prompt: "Write advice for a younger student about how to study successfully. Give at least three practical tips.",
      checklist: ["Clear introduction", "Three practical tips", "Imperatives and should", "Encouraging conclusion"]
    }
  },
  {
    title: "Hobbies & Free Time",
    intro: "Leisure, creativity and the balance between rest and activity.",
    reading: {
      title: "The hidden value of hobbies",
      text: "Hobbies are often described as a way to relax, but their value goes much deeper. A creative hobby trains patience and problem-solving; a sport builds discipline and social connection; even quiet activities like gardening or photography sharpen observation. Psychologists note that people with active hobbies report higher life satisfaction, partly because hobbies give us a sense of progress that work cannot always provide. A finished painting, a faster run, a well-kept garden: each offers proof of improvement in a way that office tasks rarely do. Hobbies also protect the mind. Research suggests that engaging in varied leisure activities keeps the brain flexible and may slow age-related decline. The effect is strongest when the activity is new and challenging rather than routine and automatic. The best hobby is not the most impressive one, but the one you keep returning to. Pressures to be productive can turn leisure into another task, so the expert advice is simple: choose for enjoyment, not for status, and protect the time you give to it.",
      paras: [
        "Hobbies are often described as a way to relax, but their value goes much deeper. A creative hobby trains patience and problem-solving; a sport builds discipline and social connection; even quiet activities like gardening or photography sharpen observation.",
        "Psychologists note that people with active hobbies report higher life satisfaction, partly because hobbies give us a sense of progress that work cannot always provide. A finished painting, a faster run, a well-kept garden: each offers proof of improvement in a way that office tasks rarely do.",
        "Hobbies also protect the mind. Research suggests that engaging in varied leisure activities keeps the brain flexible and may slow age-related decline. The effect is strongest when the activity is new and challenging rather than routine and automatic.",
        "The best hobby is not the most impressive one, but the one you keep returning to. Pressures to be productive can turn leisure into another task, so the expert advice is simple: choose for enjoyment, not for status, and protect the time you give to it."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "A sport builds discipline and social connection.", a: "True" },
            { s: "Hobbies give people a sense of progress that work cannot always provide.", a: "True" },
            { s: "Varied leisure activities may slow age-related decline.", a: "True" },
            { s: "The most impressive hobby is the best one.", a: "False" },
            { s: "Hobbies always cost a lot of money.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["patience", "progress", "flexible", "enjoyment", "observation", "status", "routine", "satisfaction"],
          text: [
            "A creative hobby trains ____ and problem-solving.",
            "Hobbies give a sense of ____ that work cannot always provide.",
            "Varied leisure activities keep the brain ____.",
            "Experts advise choosing a hobby for ____, not for status."
          ],
          ans: ["patience", "progress", "flexible", "enjoyment"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why do hobbies increase life satisfaction?", opts: ["Because they replace work.", "Because they give a sense of progress.", "Because they are always social.", "Because they cost little."], a: 1 },
            { q: "When is the protective effect of hobbies strongest?", opts: ["When the activity is routine.", "When it is watched on screen.", "When it is new and challenging.", "When it is done alone."], a: 2 },
            { q: "What advice does the writer give in paragraph D?", opts: ["Choose for enjoyment and protect the time you give to it.", "Always turn leisure into work.", "Only choose impressive hobbies.", "Give up hobbies that are difficult."], a: 0 }
          ]
        }
      ]
    },
    questions: [
      { q: "What does a creative hobby train?", a: "Patience and problem-solving." },
      { q: "Why do people with hobbies report higher satisfaction?", a: "Because hobbies give a sense of progress that work cannot always provide." },
      { q: "What is the best hobby?", a: "The one you keep returning to, not the most impressive one." }
    ],
    listening: {
      title: "What do you do for fun?",
      script: "Nina: So what do you do in your free time? Leo: I've got into photography lately. Nothing professional — just my phone and long walks. Nina: Nice! What do you shoot? Leo: Mostly street scenes and light. It makes me look at the city differently. Nina: I should try that. I mostly watch series, to be honest. Leo: That's fine too, as long as you enjoy it. Balance is everything."
    },
    speaking: {
      roleplay: "Tell your partner about a hobby you enjoy: when you started, how often you do it and why you like it.",
      discuss: ["Is free time important for health?", "Do hobbies help learning?", "How much screen time is too much?"]
    },
    writing: {
      prompt: "Describe a hobby you enjoy. Explain what it is, how you do it and why it matters to you.",
      checklist: ["Name of the hobby", "When and how often", "Why you enjoy it", "A final personal comment"]
    }
  },
  {
    title: "Travel & Transport",
    intro: "Getting around, planning journeys and the joy of new places.",
    reading: {
      title: "The journey is part of the trip",
      text: "Travel guides often focus on destinations, but experienced travellers know that the journey itself shapes the experience. A slow train across the mountains, a ferry at dawn, a bus conversation with a stranger — these are the moments people remember long after the postcards fade. Choosing how to travel is also a choice about time and values. Fast options — flights, high-speed rail — save hours that can be spent at the destination. Slower ones tend to cost less, allow more spontaneous stops and leave a smaller environmental footprint. Psychologists who study memory find that unusual moments, not efficient ones, become stories. A delayed flight that turns into a night in an airport hotel is remembered better than a smooth journey. The imperfections of travel often produce the strongest memories. Sometimes the best way to arrive is to enjoy the getting there. Travel writers recommend building in 'wasted time' — a longer route, an unplanned stop — precisely because it is there that encounters happen. The destination gives the trip its purpose; the journey gives it its texture.",
      paras: [
        "Travel guides often focus on destinations, but experienced travellers know that the journey itself shapes the experience. A slow train across the mountains, a ferry at dawn, a bus conversation with a stranger — these are the moments people remember long after the postcards fade.",
        "Choosing how to travel is also a choice about time and values. Fast options — flights, high-speed rail — save hours that can be spent at the destination. Slower ones tend to cost less, allow more spontaneous stops and leave a smaller environmental footprint.",
        "Psychologists who study memory find that unusual moments, not efficient ones, become stories. A delayed flight that turns into a night in an airport hotel is remembered better than a smooth journey. The imperfections of travel often produce the strongest memories.",
        "Sometimes the best way to arrive is to enjoy the getting there. Travel writers recommend building in 'wasted time' — a longer route, an unplanned stop — precisely because it is there that encounters happen. The destination gives the trip its purpose; the journey gives it its texture."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Experienced travellers know that the journey shapes the experience.", a: "True" },
            { s: "Slower travel options always cost more than fast ones.", a: "False" },
            { s: "People remember efficient moments better than unusual ones.", a: "False" },
            { s: "Travel writers recommend building in 'wasted time'.", a: "True" },
            { s: "Most travellers now prefer overnight trains.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["destination", "footprint", "stories", "purpose", "journey", "ferry", "delay", "stops"],
          text: [
            "The ____ itself shapes the experience as much as the destination.",
            "Slower options leave a smaller environmental ____.",
            "Unusual moments, not efficient ones, become ____.",
            "The destination gives the trip its ____; the journey gives it texture."
          ],
          ans: ["journey", "footprint", "stories", "purpose"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Which of the following does the writer mention as a memorable moment?", opts: ["A smooth flight.", "A bus conversation with a stranger.", "A fast internet connection.", "A hotel check-in."], a: 1 },
            { q: "Why might a delayed flight be remembered better than a smooth journey?", opts: ["Because delays are very rare.", "Because airports are relaxing.", "Because delays are efficient.", "Because unusual moments become stories."], a: 3 },
            { q: "What does 'wasted time' mean in paragraph D?", opts: ["Time lost through bad planning.", "Time spent waiting for delayed flights.", "A longer route or unplanned stop that allows encounters.", "Time spent checking maps."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "What do experienced travellers know?", a: "That the journey itself shapes the experience." },
      { q: "Which travel moments do people remember?", a: "Slow trains, ferries at dawn, bus conversations with strangers." },
      { q: "What is the trade-off mentioned?", a: "Fast options save time; slower ones cost less and harm the environment less." }
    ],
    listening: {
      title: "At the station",
      script: "Traveler: Excuse me, when is the next train to Brighton? Attendant: There's one at 10:15 from platform 3. Traveler: And how long does the journey take? Attendant: About an hour. Traveler: Great. Can I buy a ticket here? Attendant: Yes, single or return? Traveler: Return, please. Attendant: That's £18.50. The ticket machine accepts cards too."
    },
    speaking: {
      roleplay: "At a station or airport: ask for train times, platforms, prices and ticket types. Swap roles.",
      discuss: ["Is it better to travel fast or slow?", "What makes a good travel companion?", "How does travel change us?"]
    },
    writing: {
      prompt: "Describe a journey you remember well: where you went, how you travelled and what made it memorable.",
      checklist: ["Destination and transport", "Past simple narration", "Sequence words", "What made it memorable"]
    }
  },
  {
    title: "Shopping & Services",
    intro: "Buying, returning, asking and complaining politely in shops and banks.",
    reading: {
      title: "Shopping in the digital age",
      text: "Few activities have changed as quickly as shopping. A generation ago, buying meant visiting shops, comparing prices on the spot and carrying purchases home. Today most purchases begin online, where reviews, price comparisons and next-day delivery are one click away. Yet digital convenience has a price. Returns and packaging create mountains of waste, and the environmental cost of home delivery is far higher than a trip to the corner shop. Online retailers now admit that easy returns are not as green as they seem. There is also a social cost. High streets that lose their shops lose more than retail: they lose the chance meetings, the local knowledge and the small services that stitch a community together. A town of empty shopfronts feels different on a Saturday morning. This is why many consumers now choose local shops deliberately, valuing personal advice and community life over pure convenience. The pattern is not a return to the past but a new balance: browse and buy online, then buy bread, advice and conversation locally.",
      paras: [
        "Few activities have changed as quickly as shopping. A generation ago, buying meant visiting shops, comparing prices on the spot and carrying purchases home. Today most purchases begin online, where reviews, price comparisons and next-day delivery are one click away.",
        "Yet digital convenience has a price. Returns and packaging create mountains of waste, and the environmental cost of home delivery is far higher than a trip to the corner shop. Online retailers now admit that easy returns are not as green as they seem.",
        "There is also a social cost. High streets that lose their shops lose more than retail: they lose the chance meetings, the local knowledge and the small services that stitch a community together. A town of empty shopfronts feels different on a Saturday morning.",
        "This is why many consumers now choose local shops deliberately, valuing personal advice and community life over pure convenience. The pattern is not a return to the past but a new balance: browse and buy online, then buy bread, advice and conversation locally."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "A generation ago, buying meant visiting shops in person.", a: "True" },
            { s: "Online returns are as green as a trip to the corner shop.", a: "False" },
            { s: "High streets that lose their shops lose local services too.", a: "True" },
            { s: "Consumers who buy locally value personal advice.", a: "True" },
            { s: "Online shopping is cheaper than local shopping in every case.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["reviews", "waste", "advice", "balance", "delivery", "community", "returns", "prices"],
          text: [
            "Today most purchases begin online, where ____ and price comparisons are one click away.",
            "Returns and packaging create mountains of ____.",
            "Shops stitch a ____ together with chance meetings and local knowledge.",
            "Consumers who buy locally value personal ____ and community life."
          ],
          ans: ["reviews", "waste", "community", "advice"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why is the environmental cost of home delivery high?", opts: ["Because deliveries are slow.", "Because packaging and returns create waste.", "Because shops close.", "Because prices rise."], a: 1 },
            { q: "What do high streets lose when shops close?", opts: ["Only retail trade.", "Nothing of value.", "Chance meetings, local knowledge and small services.", "Cheaper housing."], a: 2 },
            { q: "What is the 'new balance' described in paragraph D?", opts: ["Browse online and buy bread, advice and conversation locally.", "Buy everything online for convenience.", "Return to the old high street completely.", "Shop only at weekend markets."], a: 0 }
          ]
        }
      ]
    },
    questions: [
      { q: "How did people buy things a generation ago?", a: "By visiting shops, comparing prices on the spot and carrying purchases home." },
      { q: "What are the costs of digital convenience?", a: "Returns, packaging and the environmental cost of delivery." },
      { q: "Why do some consumers choose local shops?", a: "For personal advice and community life." }
    ],
    listening: {
      title: "Returning a jacket",
      script: "Customer: Hi, I'd like to return this jacket, please. It's too small. Assistant: Of course. Do you have the receipt? Customer: Yes, here it is. I bought it last Tuesday. Assistant: Perfect. Would you like a refund or an exchange? Customer: A refund, please. Assistant: No problem. That will go back on your card within five days. Customer: Great, thank you. Assistant: Thank you — have a nice day!"
    },
    speaking: {
      roleplay: "Return an item to a shop. One of you is the customer, the other the assistant. Ask for a refund or exchange politely.",
      discuss: ["Online or in-store — which do you prefer?", "How do you complain politely?", "Do we buy too much?"]
    },
    writing: {
      prompt: "Write a polite email to a shop explaining that an item was faulty and asking for a refund or replacement.",
      checklist: ["Polite greeting", "What and when you bought", "The problem", "What you want the shop to do"]
    }
  },
  {
    title: "Work & Careers",
    intro: "Jobs, applications, interviews and the changing world of work.",
    reading: {
      title: "The skills that last",
      text: "The world of work changes faster than ever, and specific technical skills can become outdated within years. A job that exists today may be transformed — or replaced — by software before the next generation of students graduates. What lasts, say career advisers, is a core of transferable abilities: clear communication, problem-solving, teamwork and the willingness to learn. These skills travel across industries and survive changes in technology, because they are human rather than mechanical. Employers increasingly hire for attitude and potential, then train for the details. In a survey of large employers, most said they could teach new graduates the technical content of a job, but found it far harder to teach curiosity, reliability and the ability to work with others. The most reliable career strategy is therefore not to memorise one job description, but to keep building skills that work across many roles and industries. Careers are now built like portfolios: a stack of experiences, each adding a transferable layer to the next.",
      paras: [
        "The world of work changes faster than ever, and specific technical skills can become outdated within years. A job that exists today may be transformed — or replaced — by software before the next generation of students graduates.",
        "What lasts, say career advisers, is a core of transferable abilities: clear communication, problem-solving, teamwork and the willingness to learn. These skills travel across industries and survive changes in technology, because they are human rather than mechanical.",
        "Employers increasingly hire for attitude and potential, then train for the details. In a survey of large employers, most said they could teach new graduates the technical content of a job, but found it far harder to teach curiosity, reliability and the ability to work with others.",
        "The most reliable career strategy is therefore not to memorise one job description, but to keep building skills that work across many roles and industries. Careers are now built like portfolios: a stack of experiences, each adding a transferable layer to the next."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Specific technical skills can become outdated within years.", a: "True" },
            { s: "Transferable skills survive changes in technology because they are mechanical.", a: "False" },
            { s: "Most large employers can easily teach curiosity to new graduates.", a: "False" },
            { s: "Employers increasingly hire for attitude and potential.", a: "True" },
            { s: "Most workers now stay in the same job for life.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["technical", "transferable", "potential", "portfolio", "attitude", "teamwork", "curiosity", "reliability"],
          text: [
            "Specific ____ skills can become outdated within years.",
            "What lasts is a core of ____ abilities.",
            "Employers increasingly hire for attitude and ____, then train for the details.",
            "Careers are now built like ____: a stack of experiences."
          ],
          ans: ["technical", "transferable", "potential", "portfolio"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why do transferable skills survive changes in technology?", opts: ["Because they are taught in every school.", "Because they are human rather than mechanical.", "Because they are easy to test.", "Because they are cheap to train."], a: 1 },
            { q: "What did most employers say in the survey?", opts: ["They could teach technical content more easily than curiosity.", "New graduates know everything.", "Technical skills never change.", "Attitude cannot be measured."], a: 0 },
            { q: "What does the writer compare modern careers to?", opts: ["A single fixed role.", "A ladder in one company.", "A portfolio of experiences.", "A technical certificate."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "Why do technical skills become outdated?", a: "Because the world of work changes faster than ever." },
      { q: "Which skills last, according to career advisers?", a: "Communication, problem-solving, teamwork and the willingness to learn." },
      { q: "What is the most reliable career strategy?", a: "Building transferable skills that work across many roles." }
    ],
    listening: {
      title: "The job interview",
      script: "Interviewer: So, tell me about yourself. Alex: I studied marketing and I've spent two years in retail, mostly handling customer complaints. Interviewer: And why do you want this role? Alex: Your company works with sustainable brands, which matches my values. I'd also love more responsibility for planning campaigns. Interviewer: Great. Where do you see yourself in five years? Alex: Leading a small team and developing real expertise in brand strategy."
    },
    speaking: {
      roleplay: "Practise a job interview: introduce yourself, explain your experience and answer 'Where do you see yourself in five years?'",
      discuss: ["What makes a good boss?", "Is money the main reason to work?", "Which skills will matter in the future?"]
    },
    writing: {
      prompt: "Write a short cover letter for a job you would like: introduce yourself, your relevant experience and why you want the role.",
      checklist: ["Which job and why", "Relevant experience", "Personal qualities", "Polite closing"]
    }
  },
  {
    title: "Technology & Media",
    intro: "Devices, news, social media and how technology shapes attention.",
    reading: {
      title: "Attention is the new currency",
      text: "Every scroll, tap and notification competes for something we never get back: attention. Technology companies design products to hold our gaze as long as possible, and the result is that focus has become one of the scarcest resources in modern life. This is not accidental. The business model of much of the internet depends on keeping eyes on the screen, because attention is converted into advertising revenue. The longer we stay, the more data is collected about what holds us — and the more the design adapts to keep us. Researchers advise simple countermeasures: switching off notifications, keeping phones out of the bedroom and scheduling deep-work hours. These changes seem small, but they reclaim attention in blocks, which is the only way deep thinking happens. The goal is not to reject technology, but to use it deliberately rather than be used by it. The same device that interrupts can also connect, create and inform. The difference is who chooses: the person holding the phone, or the notification.",
      paras: [
        "Every scroll, tap and notification competes for something we never get back: attention. Technology companies design products to hold our gaze as long as possible, and the result is that focus has become one of the scarcest resources in modern life.",
        "This is not accidental. The business model of much of the internet depends on keeping eyes on the screen, because attention is converted into advertising revenue. The longer we stay, the more data is collected about what holds us — and the more the design adapts to keep us.",
        "Researchers advise simple countermeasures: switching off notifications, keeping phones out of the bedroom and scheduling deep-work hours. These changes seem small, but they reclaim attention in blocks, which is the only way deep thinking happens.",
        "The goal is not to reject technology, but to use it deliberately rather than be used by it. The same device that interrupts can also connect, create and inform. The difference is who chooses: the person holding the phone, or the notification."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Focus has become one of the scarcest resources in modern life.", a: "True" },
            { s: "Attention is converted into advertising revenue.", a: "True" },
            { s: "Researchers say the only defence is rejecting technology completely.", a: "False" },
            { s: "Keeping phones out of the bedroom is a recommended countermeasure.", a: "True" },
            { s: "Most people schedule deep-work hours every day.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["attention", "revenue", "notifications", "deliberately", "gaze", "bedroom", "interrupts", "design"],
          text: [
            "Technology companies design products to hold our ____ as long as possible.",
            "Attention is converted into advertising ____.",
            "Researchers advise switching off ____ and scheduling deep-work hours.",
            "The goal is to use technology ____ rather than be used by it."
          ],
          ans: ["gaze", "revenue", "notifications", "deliberately"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why do technology companies hold our attention?", opts: ["Because they care about our focus.", "Because attention becomes advertising revenue.", "Because screens are relaxing.", "Because users ask for longer sessions."], a: 1 },
            { q: "According to the writer, what is the only way deep thinking happens?", opts: ["Through constant scrolling.", "By rejecting all devices.", "In blocks of reclaimed attention.", "Through faster notifications."], a: 2 },
            { q: "What is the writer's final message?", opts: ["Use technology deliberately rather than be used by it.", "Reject all digital devices.", "Never switch off notifications.", "Work only at night."], a: 0 }
          ]
        }
      ]
    },
    questions: [
      { q: "What is competing for our attention?", a: "Scrolls, taps and notifications — designed to hold our gaze." },
      { q: "What countermeasures do researchers advise?", a: "Switching off notifications, keeping phones out of the bedroom and scheduling deep-work hours." },
      { q: "What is the goal with technology?", a: "To use it deliberately rather than be used by it." }
    ],
    listening: {
      title: "The digital detox",
      script: "Sam: I did a digital detox last weekend — no phone for 48 hours. Mia: Seriously? How did you survive? Sam: It was strange at first. I kept reaching for my pocket. Then I read an entire book and went for two long walks. Mia: Did you miss anything important? Sam: Not really. I actually felt calmer. Mia: OK, I'm convinced. Maybe I'll try it this weekend."
    },
    speaking: {
      roleplay: "Interview your partner about their phone use: how many hours a day, which apps, and when they switch off.",
      discuss: ["Are we addicted to our phones?", "Is social media good or bad for society?", "Should children have smartphones?"]
    },
    writing: {
      prompt: "Write a paragraph for and against spending less time on screens. Give at least two arguments on each side.",
      checklist: ["Clear introduction", "Arguments for", "Arguments against", "A balanced conclusion"]
    }
  },
  {
    title: "Culture & Society",
    intro: "Traditions, values and the rules that hold groups together.",
    reading: {
      title: "What culture really is",
      text: "Culture is often reduced to food, festivals and famous buildings, but sociologists define it more deeply: the shared values, beliefs and unwritten rules that shape how a group thinks and behaves. What we wear, how we queue and what we find funny are all cultural answers to social questions. Culture is learned, not inherited — a child raised anywhere absorbs the customs around them. Studies of children who move between countries show how quickly they adopt new gestures, timetables and tastes, and how naturally they hold two cultural codes at once. This is why travel can be so revealing: when we meet different ways of living, we see our own habits more clearly. What seemed 'normal' or 'natural' turns out to be one option among many — and that discovery is the beginning of real cultural understanding. Understanding culture, then, begins with noticing, and ends with respect. The anthropologist's advice is to describe before judging: notice what people do, ask why, and only then compare it with your own. In a connected world, this skill is no longer optional.",
      paras: [
        "Culture is often reduced to food, festivals and famous buildings, but sociologists define it more deeply: the shared values, beliefs and unwritten rules that shape how a group thinks and behaves. What we wear, how we queue and what we find funny are all cultural answers to social questions.",
        "Culture is learned, not inherited — a child raised anywhere absorbs the customs around them. Studies of children who move between countries show how quickly they adopt new gestures, timetables and tastes, and how naturally they hold two cultural codes at once.",
        "This is why travel can be so revealing: when we meet different ways of living, we see our own habits more clearly. What seemed 'normal' or 'natural' turns out to be one option among many — and that discovery is the beginning of real cultural understanding.",
        "Understanding culture, then, begins with noticing, and ends with respect. The anthropologist's advice is to describe before judging: notice what people do, ask why, and only then compare it with your own. In a connected world, this skill is no longer optional."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Sociologists define culture as shared values, beliefs and unwritten rules.", a: "True" },
            { s: "Culture is inherited from our parents.", a: "False" },
            { s: "Children who move between countries adopt new customs quickly.", a: "True" },
            { s: "Travel makes our own habits more visible.", a: "True" },
            { s: "Most cultures today are disappearing.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["values", "learned", "habits", "respect", "customs", "food", "judging", "queues"],
          text: [
            "Culture is the shared ____, beliefs and unwritten rules of a group.",
            "Culture is ____, not inherited.",
            "Meeting different ways of living makes our own ____ more visible.",
            "Understanding culture begins with noticing and ends with ____."
          ],
          ans: ["values", "learned", "habits", "respect"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why is culture 'learned, not inherited'?", opts: ["Because children absorb the customs around them.", "Because it is written in our genes.", "Because it never changes.", "Because it is private."], a: 0 },
            { q: "What does travel reveal, according to paragraph C?", opts: ["That all cultures are identical.", "That our own habits are one option among many.", "That foreign customs are wrong.", "That culture cannot change."], a: 1 },
            { q: "What is the anthropologist's advice?", opts: ["To judge before describing.", "To avoid comparing cultures.", "To describe before judging.", "To reject foreign customs."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "How do sociologists define culture?", a: "As shared values, beliefs and unwritten rules that shape behaviour." },
      { q: "Is culture learned or inherited?", a: "Learned — a child absorbs the customs around them." },
      { q: "Why can travel reveal our own culture?", a: "Because seeing different ways of living makes our own habits visible." }
    ],
    listening: {
      title: "Festivals in my country",
      script: "Host: Welcome to the show! Tell us about a festival in your country. Yusuf: We have a spring festival where every family lights a bonfire. Host: And what does it symbolise? Yusuf: It marks the end of winter and the start of new beginnings. People jump over the flames for good luck. Host: Would you say the traditions have changed? Yusuf: A little. The fire is smaller now for safety, but the spirit is the same."
    },
    speaking: {
      roleplay: "Describe a festival or tradition from your culture: when it happens, what people do and what it means.",
      discuss: ["Why do traditions matter?", "How do cultures change?", "What can different cultures teach each other?"]
    },
    writing: {
      prompt: "Describe a tradition or celebration you know well. Explain what happens and why it is important.",
      checklist: ["Name and timing", "What people do", "The meaning behind it", "Personal connection"]
    }
  },
  {
    title: "Environment",
    intro: "The natural world, climate change and what we can do about it.",
    reading: {
      title: "Small actions, big systems",
      text: "It is easy to feel powerless about the environment, yet change often begins with ordinary choices. Transport, food and energy dominate most personal footprints, so everyday decisions — taking the bus, eating less meat, turning down the heating — add up across a population. The mathematics of scale is striking. One household's small change is invisible, but the same change repeated across millions of households moves markets. When consumer habits shift, companies respond by redesigning products and supply chains. Environmental scientists are careful to say that individual action alone will not solve the crisis; governments and industry must act at scale. Systemic change — energy policy, transport networks, industrial emissions — cannot be achieved by shopping choices, however virtuous. But public pressure is exactly what pushes institutions to move, and that pressure begins with informed citizens. Personal action is therefore not the whole solution, but it is the seed of it: the visible commitment that gives governments permission to lead.",
      paras: [
        "It is easy to feel powerless about the environment, yet change often begins with ordinary choices. Transport, food and energy dominate most personal footprints, so everyday decisions — taking the bus, eating less meat, turning down the heating — add up across a population.",
        "The mathematics of scale is striking. One household's small change is invisible, but the same change repeated across millions of households moves markets. When consumer habits shift, companies respond by redesigning products and supply chains.",
        "Environmental scientists are careful to say that individual action alone will not solve the crisis; governments and industry must act at scale. Systemic change — energy policy, transport networks, industrial emissions — cannot be achieved by shopping choices, however virtuous.",
        "But public pressure is exactly what pushes institutions to move, and that pressure begins with informed citizens. Personal action is therefore not the whole solution, but it is the seed of it: the visible commitment that gives governments permission to lead."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Transport, food and energy dominate most personal footprints.", a: "True" },
            { s: "One household's small change is visible in national statistics.", a: "False" },
            { s: "Individual action alone will solve the environmental crisis.", a: "False" },
            { s: "Companies redesign products when consumer habits shift.", a: "True" },
            { s: "Governments usually act faster than citizens do.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["footprints", "markets", "pressure", "citizens", "crisis", "energy", "shopping", "systems"],
          text: [
            "Transport, food and ____ dominate most personal footprints.",
            "The same change repeated across millions of households moves ____.",
            "Public ____ is what pushes institutions to move.",
            "That pressure begins with informed ____."
          ],
          ans: ["energy", "markets", "pressure", "citizens"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "Why do companies redesign products and supply chains?", opts: ["Because laws force them.", "Because consumer habits shift.", "Because materials run out.", "Because scientists ask them."], a: 1 },
            { q: "What cannot be achieved by shopping choices alone?", opts: ["Small personal changes.", "Public discussion.", "Recycling at home.", "Systemic change in energy and transport policy."], a: 3 },
            { q: "What is the writer's overall argument?", opts: ["Only governments can act.", "Only individuals can act.", "Personal action is the seed that gives governments permission to lead.", "The crisis cannot be solved."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "Which areas dominate personal footprints?", a: "Transport, food and energy." },
      { q: "Why isn't individual action enough alone?", a: "Because governments and industry must act at scale." },
      { q: "Where does pressure on institutions begin?", a: "With informed citizens." }
    ],
    listening: {
      title: "The recycling project",
      script: "Grace: How's the school recycling project going? Tom: Pretty well. We've cut paper waste by a third since September. Grace: What was the hardest part? Tom: Getting everyone into the habit. At first, people threw recyclables into the wrong bins. Grace: How did you fix that? Tom: Clear signs and a weekly check. Once people saw the numbers, they got on board."
    },
    speaking: {
      roleplay: "Plan a green initiative for your school or workplace: set a goal, suggest actions and predict the benefits.",
      discuss: ["What can one person really do?", "Should plastic bags be banned?", "Are young people more environmentally aware?"]
    },
    writing: {
      prompt: "Write a proposal for making your school or workplace more environmentally friendly. Suggest three changes.",
      checklist: ["Clear aim", "Three practical changes", "Why each one helps", "Call to action"]
    }
  },
  {
    title: "Science & Innovation",
    intro: "Discoveries, inventions and the way new ideas change our lives.",
    reading: {
      title: "How inventions actually happen",
      text: "Great inventions are rarely single flashes of genius. The light bulb, the internet and the smartphone each built on decades of earlier work, failures and small refinements. The 'eureka' moment, when it comes, is usually the visible tip of a long invisible process. Historians of science describe innovation as a network: ideas travel between laboratories, industries and countries, improving as they go. A discovery in one field quietly becomes a tool in another; an engineer in one city solves a problem that blocks a scientist in another. This is good news for the rest of us. It means creativity is not a mysterious gift given to a few, but a process — of asking questions, testing, failing and trying again — that anyone can learn. The habit of iteration matters more than the size of the first idea. The practical lesson for schools and workplaces is to reward the process, not just the product. Teams that are allowed to fail early and often, and that share partial results, tend to generate more innovation than teams praised only for perfect final reports.",
      paras: [
        "Great inventions are rarely single flashes of genius. The light bulb, the internet and the smartphone each built on decades of earlier work, failures and small refinements. The 'eureka' moment, when it comes, is usually the visible tip of a long invisible process.",
        "Historians of science describe innovation as a network: ideas travel between laboratories, industries and countries, improving as they go. A discovery in one field quietly becomes a tool in another; an engineer in one city solves a problem that blocks a scientist in another.",
        "This is good news for the rest of us. It means creativity is not a mysterious gift given to a few, but a process — of asking questions, testing, failing and trying again — that anyone can learn. The habit of iteration matters more than the size of the first idea.",
        "The practical lesson for schools and workplaces is to reward the process, not just the product. Teams that are allowed to fail early and often, and that share partial results, tend to generate more innovation than teams praised only for perfect final reports."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Great inventions built on decades of earlier work.", a: "True" },
            { s: "Historians describe innovation as a single moment of genius.", a: "False" },
            { s: "A discovery in one field can become a tool in another.", a: "True" },
            { s: "Creativity is a learnable process, not a mysterious gift.", a: "True" },
            { s: "Most successful companies were founded by a single inventor.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["network", "failures", "process", "iteration", "genius", "laboratories", "reward", "product"],
          text: [
            "Inventions built on earlier work, ____ and small refinements.",
            "Innovation is a ____: ideas travel between laboratories and countries.",
            "Creativity is a ____ of asking, testing and trying again.",
            "The habit of ____ matters more than the size of the first idea."
          ],
          ans: ["failures", "network", "process", "iteration"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "What is the 'visible tip' mentioned in paragraph A?", opts: ["The long process of work.", "The eureka moment.", "The first failure.", "The patent document."], a: 1 },
            { q: "Why is innovation described as a network?", opts: ["Because ideas improve as they travel between places.", "Because one person controls it.", "Because it never crosses borders.", "Because it is secret."], a: 0 },
            { q: "What should schools and workplaces reward, according to paragraph D?", opts: ["Only perfect final reports.", "The first idea of each team.", "The process, not just the product.", "The fastest worker."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "How do historians describe innovation?", a: "As a network of ideas that travel and improve between laboratories, industries and countries." },
      { q: "What did great inventions build on?", a: "Decades of earlier work, failures and small refinements." },
      { q: "What is the good news in the text?", a: "Creativity is a learnable process, not a mysterious gift." }
    ],
    listening: {
      title: "The science fair",
      script: "Teacher: So, what are you presenting, Amir? Amir: A water filter made from sand, charcoal and cloth. Teacher: Interesting — how does it work? Amir: Each layer traps different particles. We tested it on muddy water and it came out clear. Teacher: Did anything surprise you? Amir: Yes — it took four attempts to get the layers right. Teacher: That's real science. What would you improve next?"
    },
    speaking: {
      roleplay: "Present a simple invention or idea to your partner: what it is, how it works and who it helps.",
      discuss: ["Which invention changed the world most?", "Can creativity be taught?", "Should science always have practical uses?"]
    },
    writing: {
      prompt: "Describe an invention you would create to solve a daily problem. Explain what it is and how it works.",
      checklist: ["The problem", "Your invention", "How it works", "Who would benefit"]
    }
  },
  {
    title: "Communication",
    intro: "Listening, speaking, writing and the art of being understood.",
    reading: {
      title: "The forgotten half of conversation",
      text: "Most people worry about what to say, but communication experts argue that listening is the more demanding skill. Active listening means giving the speaker your full attention, checking your understanding and responding with genuine interest rather than planning your next point. The evidence is consistent: in business, in teaching and in relationships, people who listen well are trusted faster and understood better. Listening well changes what the other person feels — heard, valued, safe — and that feeling is the foundation of cooperation. Listening is also hard work. It means tolerating silence, resisting the urge to interrupt and holding back the advice that is waiting on the tip of your tongue. Many of us confuse waiting to speak with listening, and it takes deliberate practice to separate them. Good communication, it turns out, is less about brilliant words than about making the other person feel genuinely heard. The simplest technique — summarising what the speaker said before you reply — signals attention better than any clever phrase.",
      paras: [
        "Most people worry about what to say, but communication experts argue that listening is the more demanding skill. Active listening means giving the speaker your full attention, checking your understanding and responding with genuine interest rather than planning your next point.",
        "The evidence is consistent: in business, in teaching and in relationships, people who listen well are trusted faster and understood better. Listening well changes what the other person feels — heard, valued, safe — and that feeling is the foundation of cooperation.",
        "Listening is also hard work. It means tolerating silence, resisting the urge to interrupt and holding back the advice that is waiting on the tip of your tongue. Many of us confuse waiting to speak with listening, and it takes deliberate practice to separate them.",
        "Good communication, it turns out, is less about brilliant words than about making the other person feel genuinely heard. The simplest technique — summarising what the speaker said before you reply — signals attention better than any clever phrase."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "Experts argue that listening is the more demanding skill.", a: "True" },
            { s: "People who listen well are trusted faster.", a: "True" },
            { s: "Listening requires tolerating silence.", a: "True" },
            { s: "Waiting to speak is the same as listening.", a: "False" },
            { s: "Most people prefer written communication to spoken.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["attention", "heard", "interrupt", "summarising", "advice", "silence", "clever", "trusted"],
          text: [
            "Active listening means giving the speaker your full ____.",
            "Listening means tolerating ____ and resisting the urge to interrupt.",
            "It also means holding back the ____ waiting on the tip of your tongue.",
            "____ what the speaker said before you reply signals attention."
          ],
          ans: ["attention", "silence", "advice", "Summarising"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "What is the foundation of cooperation, according to paragraph B?", opts: ["Brilliant vocabulary.", "Feeling heard, valued and safe.", "Fast speaking.", "Formal training."], a: 1 },
            { q: "Why is listening 'hard work'?", opts: ["Because speakers are usually boring.", "Because it requires formal qualifications.", "Because it means tolerating silence and resisting interruption.", "Because it is impossible to practise."], a: 2 },
            { q: "What technique does the writer recommend?", opts: ["Interrupt with advice quickly.", "Summarise what the speaker said before replying.", "Plan your next point while the other speaks.", "Avoid all conversation."], a: 1 }
          ]
        }
      ]
    },
    questions: [
      { q: "What does active listening involve?", a: "Full attention, checking understanding and genuine interest." },
      { q: "What happens to people who listen well?", a: "They are trusted faster and understood better." },
      { q: "What is good communication really about?", a: "Making the other person feel genuinely heard." }
    ],
    listening: {
      title: "Can you repeat that?",
      script: "Kate: Can you repeat that? I didn't catch the name of the file. Dan: Sure — it's 'Quarterly Report' with a capital Q. Kate: Thanks. And is the deadline this Friday? Dan: Yes, by 5 pm. Do you need me to send it over? Kate: Please. And could you also send the notes from the meeting? Dan: Of course, I'll do both right now."
    },
    speaking: {
      roleplay: "Practise active listening: your partner talks for one minute about their week; you summarise and ask one follow-up question.",
      discuss: ["Why is listening harder than speaking?", "What makes a message clear?", "How has digital communication changed conversation?"]
    },
    writing: {
      prompt: "Write a short message to a colleague asking for information. Be clear, polite and specific about what you need.",
      checklist: ["Polite opening", "Specific request", "Deadline or context", "Friendly closing"]
    }
  },
  {
    title: "Goals & Future",
    intro: "Planning, motivation and the difference between dreams and goals.",
    reading: {
      title: "Why goals need a plan",
      text: "A dream becomes a goal the moment it gains a deadline and a plan. Psychologists who study achievement describe a simple loop: set a specific target, break it into small steps, review your progress and adjust. The loop converts hope into action. Vague ambitions like 'learn English' rarely survive contact with real life, while concrete ones — 'pass the B1 exam in June' — give the brain something to organise around. A specific target tells you what to do next Tuesday, not just what you hope for next year. Motivation follows action more often than it leads it, so the secret is to start smaller than you think you should. A five-minute start gets the loop turning; the first small step creates the momentum that planning alone cannot supply. The loop only works if it is honest. Reviewing progress means noticing what failed as well as what worked, and adjusting the plan without abandoning the goal. Flexibility inside a fixed intention is the difference between a plan and a wish.",
      paras: [
        "A dream becomes a goal the moment it gains a deadline and a plan. Psychologists who study achievement describe a simple loop: set a specific target, break it into small steps, review your progress and adjust. The loop converts hope into action.",
        "Vague ambitions like 'learn English' rarely survive contact with real life, while concrete ones — 'pass the B1 exam in June' — give the brain something to organise around. A specific target tells you what to do next Tuesday, not just what you hope for next year.",
        "Motivation follows action more often than it leads it, so the secret is to start smaller than you think you should. A five-minute start gets the loop turning; the first small step creates the momentum that planning alone cannot supply.",
        "The loop only works if it is honest. Reviewing progress means noticing what failed as well as what worked, and adjusting the plan without abandoning the goal. Flexibility inside a fixed intention is the difference between a plan and a wish."
      ],
      tasks: [
        {
          type: "TFNG", range: "Questions 1–5",
          intro: "Do the following statements agree with the information given in the passage?",
          items: [
            { s: "A dream becomes a goal when it gains a deadline and a plan.", a: "True" },
            { s: "Vague ambitions often survive contact with real life.", a: "False" },
            { s: "A specific target tells you what to do next Tuesday.", a: "True" },
            { s: "Motivation usually leads action.", a: "False" },
            { s: "Most people write their goals down every morning.", a: "Not Given" }
          ]
        },
        {
          type: "SUMMARY", range: "Questions 6–9",
          intro: "Complete the summary using the list of words, A–H, below.",
          bank: ["deadline", "plan", "steps", "action", "momentum", "loop", "wish", "flexibility"],
          text: [
            "A dream becomes a goal when it gains a deadline and a ____.",
            "Psychologists describe a simple ____: set a target, break it into steps, review.",
            "Motivation follows ____ more often than it leads it.",
            "A five-minute start creates the ____ that planning alone cannot supply."
          ],
          ans: ["plan", "loop", "action", "momentum"]
        },
        {
          type: "MCQ", range: "Questions 10–12",
          intro: "Choose the correct letter, A, B, C or D.",
          items: [
            { q: "What does the achievement loop do?", opts: ["It converts hope into action.", "It removes deadlines.", "It replaces planning.", "It guarantees success."], a: 0 },
            { q: "Why is starting small recommended?", opts: ["Because big starts are dangerous.", "Because the first small step creates momentum.", "Because small goals are easier to forget.", "Because plans are unnecessary."], a: 1 },
            { q: "What is the difference between a plan and a wish?", opts: ["Plans are always longer.", "Wishes have deadlines.", "Flexibility inside a fixed intention.", "Wishes are always written down."], a: 2 }
          ]
        }
      ]
    },
    questions: [
      { q: "When does a dream become a goal?", a: "When it gains a deadline and a plan." },
      { q: "What is the achievement loop described?", a: "Set a specific target, break it into steps, review progress, adjust." },
      { q: "Why is starting small recommended?", a: "Because motivation follows action more often than it leads it." }
    ],
    listening: {
      title: "New year, new plan",
      script: "Mia: So, any resolutions this year? Leo: Just one — I'm going to get my driving licence. Mia: That's very specific. How? Leo: I've booked lessons twice a week and the theory test in March. Mia: Nice. Last year I said 'get fitter' and nothing happened. Leo: That's why mine has a date. A goal without a date is just a wish."
    },
    speaking: {
      roleplay: "Tell your partner about a goal for this year: what it is, your plan and one possible obstacle.",
      discuss: ["Why do resolutions fail?", "Is ambition always good?", "How do you stay motivated when progress is slow?"]
    },
    writing: {
      prompt: "Describe a goal you want to achieve. Explain why it matters, your plan and how you will know you have succeeded.",
      checklist: ["The goal and why it matters", "A concrete plan", "How you will measure success", "What could get in the way"]
    }
  }
];

/* Lingua Forge Academy — Grammar data (CEFR-progressive)
   Every level has a QUICK one-line explanation and an EXTENDED study paragraph,
   plus form → meaning → use → error → practice. */
window.LF_GRAMMAR = [
  {
    id: "be-have", title: "be & have", range: ["Pre-A1", "A1", "A2"],
    levels: {
      "Pre-A1": {
        quick: "We use am, is or are to say what someone or something is, and have to say what we own.",
        form: "I am / you are / he is · I have / you have",
        use: "We use be to say who or what something is, and have to talk about things we own.",
        more: "Be is the most important verb in English: it joins a person or thing to a description (I am happy), a name (She is Anna) or a place (The book is on the table). It changes its form with the subject: I am, you are, he/she/it is, we/they are. Have shows possession and relationships (I have a brother, She has a car). At this level, learn the forms as fixed chunks with the pronouns — I am, you are, he is — and practise them until they come out automatically.",
        examples: ["I am a student.", "You are my friend.", "She has a cat."],
        error: "Don't say \"I am happy\" as \"I happy\" — always include the verb.",
        practice: ["Complete: She ___ a teacher.", "Complete: They ___ two dogs.", "Make a sentence with be about yourself."]
      },
      "A1": {
        quick: "Use am/is/are for descriptions and states; use have (got) for possession — and turn them into questions and negatives.",
        form: "be: am / is / are (+ not, ?) · have / has got",
        use: "Use be for descriptions and states; use have (got) for possession and relationships.",
        more: "At A1 you start making negatives and questions with be: put not after the verb (He isn't at home) and move the verb before the subject to ask (Are you from Italy?). With have, British English often prefers have got (We've got a new car), where got is only a helper — it disappears in short answers: Have you got a pen? Yes, I have. Remember that has goes with he/she/it and have with I/you/we/they. Short forms (isn't, aren't, 've got) are the norm in speaking and informal writing.",
        examples: ["He isn't at home today.", "Are you from Italy?", "We've got a new car."],
        error: "Use is with he/she/it and are with you/we/they — \"My sister are tall\" is wrong.",
        practice: ["Write the negative: They are at school.", "Ask a question with have got.", "Complete: My parents ___ from Spain."]
      },
      "A2": {
        quick: "For the past, use was/were and had; use used to for past habits that are finished now.",
        form: "Past: was / were · had · used to",
        use: "Use was/were and had for past states and possession; used to describes past habits.",
        more: "In the past, be becomes was (I/he/she/it) and were (you/we/they), and have becomes had for everyone. Questions and negatives reuse the same pattern as the present: Was she tired? They weren't at the party. Used to + base verb describes habits or states that are finished: I used to live in London means I no longer live there. It has no present form — do not say 'use to' in the affirmative or 'I am used to' with the same meaning (be used to + -ing means something is familiar).",
        examples: ["The lesson was interesting.", "They weren't at the party.", "I used to live in London."],
        error: "Don't add did in past be sentences: \"It was\" not \"It did be\".",
        practice: ["Complete with was/were: The children ___ tired.", "Rewrite with used to: I played tennis every day.", "Answer: Were you at home yesterday?"]
      }
    }
  },
  {
    id: "articles", title: "Articles (a, an, the)", range: ["Pre-A1", "A1", "A2", "B1"],
    levels: {
      "Pre-A1": {
        quick: "Use a before consonant sounds, an before vowel sounds, and the when we know which thing we mean.",
        form: "a + consonant · an + vowel · the + specific",
        use: "Use a/an for one thing, the when we know which thing.",
        more: "Articles tell the listener whether something is new or already known. A and an introduce a thing for the first time (I have a book); the points to a specific thing, often one already mentioned or clear from the situation (The dog is big — we can see it). Choose an before vowel sounds (an apple, an hour) and a before consonant sounds (a book, a university). The choice depends on sound, not spelling.",
        examples: ["I have a book.", "She has an apple.", "The dog is big."],
        error: "Use an before vowels: \"an apple\", not \"a apple\".",
        practice: ["Choose: a/an ___ pen, ___ egg.", "Complete: I see ___ cat. ___ cat is black.", "Point to two things in the room and say the article."]
      },
      "A1": {
        quick: "Use a/an for one thing, the for a known or mentioned thing, and no article for general plurals.",
        form: "a/an (one, new) · the (known) · no article (plural general)",
        use: "Use the when both people know what we mean; use no article for general plurals.",
        more: "The is used when both speakers share the same idea of which thing: There is a park near my house (first mention) → The park is very big (both know it now). With plural nouns used generally, English uses no article at all: I like dogs means dogs in general; I like the dogs would mean specific dogs we both know. This 'zero article' for general meaning is a key difference from many other languages and is worth drilling early.",
        examples: ["There is a park near my house.", "The park is very big.", "I like dogs."],
        error: "Don't use the for general ideas: \"I like the dogs\" means specific dogs.",
        practice: ["Fill in: We went to ___ beach. ___ beach was crowded.", "Correct: I love the music.", "Complete: She is ___ teacher and he is ___ engineer."]
      },
      "A2": {
        quick: "Use some in positive sentences and any in questions and negatives; use the for things already mentioned.",
        form: "a/an, the, zero article · some/any with plurals and uncountables",
        use: "Use some in positive and any in questions/negatives; the for something mentioned before.",
        more: "With uncountable nouns (water, bread, advice) and plural nouns, some and any act like 'a plural article'. Some appears in positive sentences (I have some questions) and in polite offers and requests (Would you like some coffee?). Any appears in negatives and most questions (I didn't buy any bread). Uncountable nouns never take a/an — say some bread or a loaf of bread, never 'a bread'. The still marks definiteness: I saw a film. The film was great.",
        examples: ["Would you like some coffee?", "I didn't buy any bread.", "I saw a film. The film was great."],
        error: "Don't use a with uncountable nouns: \"a bread\" is wrong — say \"some bread\".",
        practice: ["Complete: Can I have ___ water, please?", "Choose some/any: I have ___ questions. Do you have ___ questions?", "Correct the mistake: She bought a rice."]
      },
      "B1": {
        quick: "Use the with unique things (the sun); drop the article with institutions used for their purpose (go to school).",
        form: "the + unique (the sun) · zero article + institutions (school, hospital)",
        use: "Choose the for unique things and zero article for institutions used for their purpose.",
        more: "The appears before things that are one of a kind (the Earth, the sun, the sky) and before superlatives (the biggest city). A more advanced pattern is the 'purpose' rule: go to school, be in hospital, go to bed use no article when the place is used for its normal function. Add the and the meaning changes: go to the school = visit the building; be in the hospital = work there or visit. This contrast is a favourite exam question, so practise both patterns side by side.",
        examples: ["The Earth goes round the sun.", "He goes to school by bus.", "I visited the school where my mother teaches."],
        error: "Compare: \"go to school\" (purpose) vs \"go to the school\" (building) — the article changes meaning.",
        practice: ["Complete: She is in ___ hospital (as a patient).", "Choose: We watched ___ moon rise.", "Write two sentences showing school vs the school."]
      }
    }
  },
  {
    id: "plurals-demo", title: "Plurals & this/that", range: ["Pre-A1", "A1", "A2"],
    levels: {
      "Pre-A1": {
        quick: "Add -s to make more than one (cat → cats); use this for things near you and that for things far away.",
        form: "cat → cats · this (near) / that (far)",
        use: "Add -s for more than one; use this for things near you and that for things far away.",
        more: "Most nouns form the plural with -s: one cat, two cats. This points to something close to the speaker and that to something further away — you can accompany them with a gesture to make the meaning clear. This is my book (in my hand) vs That is your pen (on your desk). Plurals must always agree: two books, not 'two book'. At this stage, saying the number before the plural noun is excellent drilling.",
        examples: ["I have two cats.", "This is my book.", "That is your pen."],
        error: "Say \"two books\", not \"two book\".",
        practice: ["Make plural: dog, pen, friend.", "Point to a near object and a far object and name them.", "Complete: ___ is my bag (near me)."]
      },
      "A1": {
        quick: "Most plurals add -s or -es (bus → buses); use these (near) and those (far) for plural things.",
        form: "Regular -s/-es · irregular (child/children) · this/that/these/those",
        use: "Use these/those with plurals: these (near), those (far).",
        more: "Regular plurals add -s (cats), and nouns ending in -s, -sh, -ch or -x add -es (bus → buses, box → boxes). A few common nouns are irregular and must be learned by heart: child → children, man → men, woman → women, foot → feet, tooth → teeth. This and that have plural partners: these (near) and those (far) — These are my friends; Those children are happy. Keep the singular/plural pair consistent: these cats, not 'these cat'.",
        examples: ["These are my friends.", "Those children are happy.", "The buses are late."],
        error: "Don't mix singular and plural forms: \"these cat\" is wrong — \"these cats\".",
        practice: ["Make plural: box, bus, child.", "Complete: ___ shoes (near) are new.", "Correct: That books are interesting."]
      },
      "A2": {
        quick: "Use many with countable nouns and much with uncountable nouns; some/any show quantity.",
        form: "Countable (many) vs uncountable (much) · some/any + quantity",
        use: "Use many with countable nouns and much with uncountable nouns.",
        more: "English divides nouns into countable (students, cars — you can count them) and uncountable (water, money, information — no plural). Many goes with countable plurals (How many students are there?), much with uncountable nouns (How much water do you drink?). In everyday speech, a lot of replaces much in positive sentences, but much is common in negatives and questions (There isn't much time). Uncountable nouns stay singular in form: money is, information is — never 'informations'.",
        examples: ["How many students are there?", "How much water do you drink?", "There isn't much time."],
        error: "Don't say \"many water\" — water is uncountable: \"much water\".",
        practice: ["Choose many/much: ___ people, ___ money.", "Correct: There are much cars here.", "Ask two questions with how many and how much."]
      }
    }
  },
  {
    id: "present-simple", title: "Present simple", range: ["Pre-A1", "A1", "A2", "B1"],
    levels: {
      "Pre-A1": {
        quick: "Use the present simple for things we do regularly or facts: I play, he plays.",
        form: "I play / you play / he plays · I don't play",
        use: "Use it for things we do regularly or facts.",
        more: "The present simple is the tense of habits, routines and general truths: I play football every week; She reads books. In the affirmative, add -s to the verb after he/she/it (plays, reads). The negative uses don't (I don't play) and doesn't (She doesn't play) — the main verb returns to its base form after doesn't. Facts that never change (Water boils at 100 degrees) also use this tense.",
        examples: ["I play football.", "She reads books.", "We don't watch TV."],
        error: "Add -s with he/she/it: \"She plays\", not \"She play\".",
        practice: ["Complete: He ___ (eat) apples.", "Write the negative: I like tea.", "Say one thing you do every day."]
      },
      "A1": {
        quick: "Use the present simple for routines and facts; make questions with do/does and negatives with don't/doesn't.",
        form: "affirmative · negative (don't/doesn't) · questions (do/does)",
        use: "Use the present simple for routines, habits and general truths.",
        more: "Questions move the auxiliary to the front: Do you live in this city? Does she work here? After do/does the main verb has no -s (Does she like coffee?, not 'Does she likes'). Frequency adverbs — usually, sometimes, always, never — sit before the main verb (I usually get up at seven) but after the verb be (She is always late). The present simple also states general truths: The sun rises in the east.",
        examples: ["I usually get up at seven.", "She doesn't like coffee.", "Do you live in this city?"],
        error: "After does, the verb loses -s: \"Does she like\" not \"Does she likes\".",
        practice: ["Write the question: You / play / tennis?", "Correct: Does he works here?", "Write three routines with usually and sometimes."]
      },
      "A2": {
        quick: "Put frequency adverbs (always → never) before the main verb, and use the simple form with state verbs like know and want.",
        form: "Adverbs of frequency (always → never) · state verbs",
        use: "Put frequency adverbs before the main verb; use simple, not continuous, with state verbs like know, want, like.",
        more: "Frequency adverbs answer 'how often': always, usually, often, sometimes, rarely, never. They go before ordinary verbs (She always arrives on time) and after be (They are rarely late). State verbs — know, understand, want, like, believe, seem, belong, need — describe states rather than actions, so they do not normally take the -ing form: I know the answer, not 'I am knowing'. This distinction matters more as you meet the present continuous.",
        examples: ["She always arrives on time.", "I don't understand this question.", "They rarely eat out."],
        error: "Don't say \"I am knowing\" — know is a state verb: \"I know\".",
        practice: ["Place the adverb: I (often) go to the gym.", "Correct: She is wanting a new phone.", "Write two sentences with always and never."]
      },
      "B1": {
        quick: "Choose the present simple for facts and routines, and the present continuous for actions happening now or temporarily.",
        form: "Present simple vs present continuous · stative verbs",
        use: "Choose simple for facts and routines; continuous for actions happening now or temporary situations.",
        more: "The classic contrast: simple = permanent or repeated (I work in London), continuous = in progress or temporary (I'm working from home this week). Some verbs change meaning with the continuous form: see (understand) vs be seeing (meeting), think (believe) vs be thinking (considering), have (possess) vs be having (enjoying an experience). Look, taste, smell and feel usually stay simple when describing qualities (This soup tastes great) but take continuous when describing actions (I'm tasting the soup).",
        examples: ["Water boils at 100 degrees.", "I'm working from home this week.", "She looks tired."],
        error: "Some verbs change meaning with -ing: \"I see\" (understand) vs \"I am seeing\" (meeting).",
        practice: ["Choose: She (works / is working) in London this month.", "Complete: This soup ___ (taste) great.", "Explain the difference between I think and I'm thinking."]
      }
    }
  },
  {
    id: "present-continuous", title: "Present continuous", range: ["A1", "A2", "B1"],
    levels: {
      "A1": {
        quick: "Use am/is/are + verb-ing for actions happening right now: I am reading.",
        form: "am/is/are + verb-ing",
        use: "Use it for actions happening now.",
        more: "The present continuous = be (am/is/are) + the -ing form of the verb. Use it for actions in progress at the moment of speaking: I am reading now, She is cooking dinner. The be verb is essential — 'I reading' is not English. To make negatives, add not after be (We are not listening); to make questions, move be before the subject (Are you sleeping?). Common -ing spellings: stop → stopping (double consonant), make → making (drop -e), play → playing (no change).",
        examples: ["I am reading now.", "She is cooking dinner.", "They are playing outside."],
        error: "Don't forget be: \"I reading\" is wrong — \"I am reading\".",
        practice: ["Complete: He ___ (swim) in the pool.", "Write what you are doing right now.", "Make a negative: We ___ (not listen)."]
      },
      "A2": {
        quick: "Use the present continuous for temporary situations around now, not just this exact moment.",
        form: "Present continuous for now + temporary situations",
        use: "Use it for temporary actions around now, even if not at this exact moment.",
        more: "The continuous also covers temporary situations that surround the present moment: I'm learning Spanish this year (not necessarily right now); She's staying with her cousin (for a while). It can reach into the near future for fixed arrangements: Are you working tomorrow?; We're meeting on Friday. Remember the state-verb rule: verbs like want, know, like, need stay in the simple form even in temporary situations.",
        examples: ["I'm learning Spanish this year.", "She's staying with her cousin.", "Are you working tomorrow?"],
        error: "Don't use continuous with state verbs: \"I'm knowing\" is wrong.",
        practice: ["Complete: This week we ___ (prepare) the school concert.", "Correct: She is wanting a break.", "Ask a question about someone's plans this week."]
      },
      "B1": {
        quick: "Use always + -ing for annoying habits, and the present continuous for fixed future arrangements.",
        form: "Now vs always · continuous with always for irritation · future arrangements",
        use: "Use be + always + -ing for habits that annoy us; present continuous also expresses fixed future arrangements.",
        more: "With always, the continuous changes meaning from 'now' to 'repeatedly, in an annoying way': He's always losing his keys! (a complaint), not a description of the present moment. This special use of always is a hallmark of natural spoken English. The same form expresses future arrangements that are already fixed: We're meeting at six tomorrow. The key contrast is permanent vs temporary: She lives in Rome (permanent) vs She's living in Rome (temporary).",
        examples: ["He's always losing his keys!", "We're meeting at six tomorrow.", "Why are you staring at me?"],
        error: "Don't use continuous for permanent states: \"She is living in Rome\" implies temporary — permanent = simple.",
        practice: ["Rewrite with always to show annoyance: He forgets my name.", "Complete: I ___ (see) the doctor on Friday.", "Explain: She lives in Rome vs She is living in Rome."]
      }
    }
  },
  {
    id: "past-simple", title: "Past simple", range: ["A1", "A2", "B1", "C1"],
    levels: {
      "A1": {
        quick: "Use the past simple for finished actions in the past: regular verbs add -ed, but many common verbs are irregular.",
        form: "regular: -ed · irregular: went, saw, had",
        use: "Use it for finished actions in the past with time words like yesterday, last week.",
        more: "The past simple tells the story of finished actions: I watched a film yesterday. Regular verbs add -ed (watch → watched, play → played; stop → stopped; study → studied). Irregular verbs must be learned in groups: go → went, see → saw, have → had, eat → ate, buy → bought. Time expressions — yesterday, last week, in 2019, two days ago — often accompany this tense. There is no change of form for he/she/it: she went, they went.",
        examples: ["I watched a film yesterday.", "We went to the park.", "She had a sandwich."],
        error: "Learn irregular forms: say \"I went\", not \"I goed\".",
        practice: ["Complete: They ___ (visit) their grandmother.", "Write the past: go, see, eat.", "Say what you did yesterday."]
      },
      "A2": {
        quick: "Make negatives with didn't + base form and questions with did + base form.",
        form: "affirmative · negative (didn't) · questions (did)",
        use: "Use didn't + base form for negatives and did + base form for questions.",
        more: "Once the auxiliary did appears, the main verb returns to the base form: She didn't come (not 'didn't came'); Did you enjoy the trip? (not 'Did you enjoyed'). This is one of the most common errors in English, so the rule is worth automating: did/didn't carries the past meaning, so the main verb stays bare. Short answers use did/didn't alone: Did you see it? Yes, I did.",
        examples: ["She didn't come to class.", "Did you enjoy the trip?", "We didn't have any money."],
        error: "After did, use the base form: \"Did you went\" is wrong — \"Did you go\".",
        practice: ["Write the negative: He found his keys.", "Make a question: They / see / the match?", "Correct: Did she bought a ticket?"]
      },
      "B1": {
        quick: "Use the past continuous for a longer background action and the past simple for the event that interrupts it.",
        form: "Past simple vs past continuous · time clauses (when, while)",
        use: "Use past continuous for a longer background action and past simple for the event that interrupts it.",
        more: "The past continuous (was/were + -ing) sets the scene; the past simple reports the event that happens inside it: I was reading when the phone rang. While usually introduces the longer action (While she was cooking, he set the table), and when can introduce either. Word order changes meaning: When I arrived, they left = they left after I arrived; When I arrived, they were leaving = they were in the middle of leaving. This tense pair is a staple of narrative writing and story-telling.",
        examples: ["I was reading when the phone rang.", "While she was cooking, he set the table.", "We were having dinner when you called."],
        error: "Order matters: \"When I arrived, they left\" (then they left) vs \"When I arrived, they were leaving\" (they were leaving at that moment).",
        practice: ["Combine: I (walk) home / it (start) to rain.", "Choose: When we (see / were seeing) her, she (waited / was waiting) outside.", "Write two sentences about a past interruption."]
      },
      "C1": {
        quick: "In narratives, combine past simple, past continuous and past perfect; use would for repeated past actions.",
        form: "Narrative tenses: past simple, continuous, past perfect, used to/would",
        use: "Past perfect orders events before a past moment; would replaces used to for repeated past actions in narratives.",
        more: "Skilled storytellers orchestrate three tenses: past perfect for the earlier event (By the time we arrived, the film had already started), past continuous for the background, and past simple for the main events. Used to describes past states and habits; would (always followed by the base verb) does the same for repeated actions in a vivid narrative: Every summer, we would visit my grandparents. The past perfect always needs an anchor — a later past moment to look back from; without one, 'She had finished' feels incomplete.",
        examples: ["By the time we arrived, the film had already started.", "Every summer, we would visit my grandparents.", "He had left before I called."],
        error: "Don't use past perfect without a reference point in the past; \"She had finished\" alone is incomplete.",
        practice: ["Rewrite with past perfect: I arrived. She already left.", "Complete: As a child, he ___ (would / read) for hours.", "Write a three-sentence narrative using two past tenses."]
      }
    }
  },
  {
    id: "future-forms", title: "Future forms", range: ["A2", "B1", "B2", "C1", "C2"],
    levels: {
      "A2": {
        quick: "Use going to for intentions and predictions with evidence; will for offers, promises and instant decisions.",
        form: "be going to · will · present continuous for plans",
        use: "Use going to for intentions and predictions with evidence; will for offers, promises and instant decisions.",
        more: "English has several futures with different jobs. Going to expresses a plan decided before speaking (I'm going to study medicine — I've already decided) and a prediction based on visible evidence (Look at those clouds — it's going to rain). Will handles spontaneous decisions made at the moment of speaking (The phone is ringing — I'll answer it), offers (I'll help you) and promises. The present continuous covers fixed arrangements with a time and place (We're meeting at six).",
        examples: ["I'm going to study medicine.", "Look at those clouds — it's going to rain.", "I'll help you with that."],
        error: "Don't use will for a plan made before speaking: \"I will travel next month\" (plan) → \"I'm going to travel\".",
        practice: ["Choose: (Will / Going to) you carry this bag for me? (offer)", "Complete: I ___ (visit) my aunt — I've already booked the train.", "React to news: \"The phone is ringing!\" — what do you say?"]
      },
      "B1": {
        quick: "Use the present continuous for fixed arrangements, going to for intentions, will for predictions — and present tense after when/if.",
        form: "will vs going to vs present continuous · time clauses with when/if/unless",
        use: "Use present continuous for fixed arrangements, going to for intentions, will for predictions and spontaneous decisions.",
        more: "After time conjunctions — when, if, unless, as soon as, before, until — the future is expressed with the present tense: If it rains, we'll stay at home; When she calls, I'll tell her. Never 'when I will arrive'. The three main future forms line up like this: fixed arrangement (present continuous: We're flying to Paris on Friday), intention (going to: I'm going to start a new course), prediction or instant decision (will: I think it'll rain).",
        examples: ["We're flying to Paris on Friday.", "I'm going to start a new course.", "If it rains, we'll stay at home."],
        error: "After when/if, use present, not will: \"When I will arrive\" is wrong.",
        practice: ["Complete: When she ___ (call), I'll tell her.", "Correct: If it will be sunny, we go out.", "Explain the difference between I'm seeing her and I'll see her."]
      },
      "B2": {
        quick: "Use the future continuous for actions in progress at a future moment, and the future perfect for completion before a future point.",
        form: "Future continuous · future perfect · future in the past (was going to)",
        use: "Future continuous describes actions in progress at a future moment; future perfect for completion before a future point.",
        more: "The future continuous (will be + -ing) pictures an action in progress at a future time: This time next week, I'll be lying on a beach. The future perfect (will have + past participle) looks back from a future point at what will be finished by then: By 2030, they will have completed the bridge. Time markers distinguish them: 'this time next week' → continuous; 'by + time' → perfect. Future in the past (was going to) describes an intention that was later abandoned: I was going to call you, but I forgot.",
        examples: ["This time next week, I'll be lying on a beach.", "By 2030, they will have completed the bridge.", "I was going to call you, but I forgot."],
        error: "Don't confuse will be doing (in progress) with will have done (completed): \"By 8pm I'll have finished\" not \"I'll be finished\".",
        practice: ["Complete: By June, I ___ (finish) this course.", "This time tomorrow, we ___ (fly) to Rome.", "Correct: By the time you arrive, I will work for two hours."]
      },
      "C1": {
        quick: "Use the future perfect continuous for duration up to a future point, and be about to for something imminent.",
        form: "Future perfect continuous · be about to · future with likely/bound to",
        use: "Use future perfect continuous for duration up to a future point; be about to for something imminent.",
        more: "The future perfect continuous (will have been + -ing) expresses how long something will have been going on by a future moment: By next year, I will have been teaching for ten years. Be about to + base verb signals something happening very soon: The train is about to leave. Likely to and bound to grade probability — she's bound to succeed (almost certain), he's likely to agree (probable). After conjunctions like before, until and as soon as, use the present, never will.",
        examples: ["By next year, I will have been teaching for ten years.", "The train is about to leave.", "She's bound to succeed."],
        error: "Don't use will with future time clauses after conjunctions like before, until, as soon as.",
        practice: ["Complete: By the end of the month, I ___ (work) here for a year.", "Rewrite: The concert starts very soon — use be about to.", "Correct: As soon as I will get home, I'll email you."]
      },
      "C2": {
        quick: "Grade prediction with may well (probable) or is set to (almost certain); use future in the past to report past plans.",
        form: "Future in the past · modality of prediction (may well, is set to) · narrative future",
        use: "Express near certainty with may well / is set to; future in the past (was to, would) reports past plans and expectations.",
        more: "Advanced speakers calibrate prediction precisely: might (possible) < may well (probable) < is set to (almost certain). Future in the past uses was to, would or was going to to report plans from an earlier viewpoint: She was to become a famous writer (the narrative knew her future before she did). In news and academic register, is set to dominates: The company is set to double its revenue. Overusing will for prediction reads as overconfident — hedge with may well or could.",
        examples: ["The company is set to double its revenue.", "He may well change his mind.", "She was to become a famous writer."],
        error: "Distinguish prediction strength: might (possible) → may well (probable) → is set to (almost certain); don't overstate with will.",
        practice: ["Rewrite with is set to: The government will soon announce the policy.", "Complete: Little did we know, this meeting ___ (would / define) our careers.", "Explain the nuance between He may come and He may well come."]
      }
    }
  },
  {
    id: "comparatives", title: "Comparatives & superlatives", range: ["A1", "A2", "B1", "B2"],
    levels: {
      "A1": {
        quick: "Compare two things with -er/more + than, and three or more with the -est/most.",
        form: "big → bigger · more + adjective · the biggest / the most",
        use: "Use -er/more to compare two things and the -est/most for three or more.",
        more: "Short adjectives take -er/-est (big → bigger → the biggest, happy → happier → the happiest). Long adjectives use more/most (more interesting, the most interesting). Comparisons use than: My bag is bigger than yours. Superlatives always take the: It's the cheapest hotel in town. Never combine both systems — 'more bigger' and 'most happiest' are double comparatives and wrong.",
        examples: ["My bag is bigger than yours.", "This book is more interesting.", "It's the cheapest hotel."],
        error: "Don't double-mark: \"more bigger\" is wrong — \"bigger\".",
        practice: ["Write the comparative: small, happy, expensive.", "Complete: London is ___ (big) than Paris?", "Say one thing that is the most... in your classroom."]
      },
      "A2": {
        quick: "Use as ... as for equality, and much/a lot to strengthen a comparison.",
        form: "than · (not) as ... as · much/a lot + comparative",
        use: "Use as ... as for equality and much/a lot to strengthen a comparison.",
        more: "To say two things are equal, use as + adjective + as: Travelling by train is as fast as flying. The negative form says one is less: It isn't as expensive as I expected. To grade a comparison, put much, a lot, far or a bit before the comparative: This flat is much bigger, It's a bit colder today. After as ... as and than, pronouns take object forms in informal speech: taller than me (more formally, than I am).",
        examples: ["Travelling by train is as fast as flying.", "This flat is much bigger.", "It isn't as expensive as I expected."],
        error: "Don't forget than in comparisons: \"She is taller as me\" is wrong → \"taller than me\".",
        practice: ["Complete: This café is ___ (not / as / good) the other one.", "Add much: The new phone is faster.", "Correct: He is more taller than his brother."]
      },
      "B1": {
        quick: "Use the + comparative, the + comparative for cause and effect, and far/a bit to grade the difference.",
        form: "Comparative structures with the ... the · far/a bit + comparative",
        use: "Use the + comparative, the + comparative for cause and effect; far/a bit to grade the difference.",
        more: "The double comparative shows a proportional connection: The sooner we leave, the better; The more you practise, the easier it gets. Grading words refine the strength of a comparison: far and a lot (a big difference: This version is far more reliable), a bit and slightly (a small difference: It's a bit colder today). Because as ... as takes the base form, watch out for errors like 'as quicker as' — the correct form is as quick as.",
        examples: ["The sooner we leave, the better.", "This version is far more reliable.", "It's a bit colder today."],
        error: "Don't mix structures: \"more better\" and \"more easier\" are non-standard.",
        practice: ["Complete: The more you practise, the ___ you get.", "Rewrite with far: This route is much quicker.", "Write a sentence with the ... the about study habits."]
      },
      "B2": {
        quick: "Quantify comparisons with twice/three times as ... as, and drop repeated words after than (ellipsis).",
        form: "Double comparatives · ellipsis · comparing nouns (twice as ... as)",
        use: "Use twice/three times as ... as to quantify; ellipsis drops repeated words after than.",
        more: "Quantified comparisons multiply the gap: The film was twice as long as I expected; Prices are three times higher than a decade ago. Ellipsis lets you cut repeated words after than: I earn less than I used to (= than I used to earn); She's more confident than ever (= than she has ever been). After as ... as, always use the base adjective: as quick as, never 'as quicker as'. Less + adjective handles decreasing comparisons: less expensive.",
        examples: ["The film was twice as long as I expected.", "I earn less than I used to.", "She's more confident than ever."],
        error: "After as ... as use the base form: \"as quicker as\" is wrong — \"as quick as\".",
        practice: ["Rewrite with twice as ... as: His car goes 200 km/h; mine goes 100 km/h.", "Complete: Prices are higher than ___ (they were before).", "Correct: The test was as easier as the last one."]
      }
    }
  },
  {
    id: "modals", title: "Modals", range: ["A2", "B1", "B2", "C1", "C2"],
    levels: {
      "A2": {
        quick: "Use can for ability and permission, must/mustn't for obligation and prohibition, should for advice.",
        form: "can / can't · must / mustn't · should / shouldn't",
        use: "Use can for ability and permission, must/mustn't for obligation and prohibition, should for advice.",
        more: "Modal verbs add meaning to the main verb and never change form — there is no -s with he/she/it (She can swim, not 'cans') and the main verb follows in the base form without to (I can swim, not 'can to swim'). Can expresses ability (I can swim) and informal permission (Can I leave early?). Must is strong obligation (You must wear a helmet), mustn't strong prohibition (You mustn't run in the corridor). Should softens advice: You should rest.",
        examples: ["I can swim.", "You mustn't run in the corridor.", "You should rest."],
        error: "Modals take the base form without to: \"I can to swim\" is wrong.",
        practice: ["Complete with can/must/should: You ___ wear a helmet.", "Write a rule with mustn't for your classroom.", "Correct: She can to play the guitar."]
      },
      "B1": {
        quick: "Use have to for external obligation, don't have to for absence of obligation, and should have + past participle for regrets.",
        form: "have to / don't have to · need to · should have",
        use: "Use have to for external obligation, don't have to for absence of obligation, should have + past participle for regrets.",
        more: "Have to reports obligation coming from outside (rules, bosses, timetables): I have to finish this report. Its negative, don't have to, means 'not necessary' — the opposite of mustn't (prohibited). Compare: You don't have to come = it's optional; You mustn't come = forbidden. Should have + past participle looks back at a missed opportunity: You should have told me = you didn't, and that was a mistake. Need to behaves like a normal verb: Do I need to book?",
        examples: ["I have to finish this report.", "You don't have to pay now.", "You should have told me."],
        error: "Don't confuse mustn't (prohibited) with don't have to (not necessary): \"You mustn't go\" ≠ \"You don't have to go\".",
        practice: ["Choose: You (mustn't / don't have to) come if you're busy.", "Complete: I ___ (should / study) harder last term.", "Write one rule with must and one with don't have to."]
      },
      "B2": {
        quick: "Deduce the past with must have (certain), can't have (impossible) and could have (possible).",
        form: "may/might · could have · must/can't + have + past participle",
        use: "Use must have for logical deduction, can't have for impossibility, could have for past possibility.",
        more: "Modal perfects (modal + have + past participle) let you deduce what probably happened: He must have left early (I'm sure), She can't have seen us (impossible), We could have won the match (it was possible, but we didn't). The negative of must for deduction is can't have, not 'mustn't have' — mustn't expresses prohibition. May/might have express weaker possibility: They may have missed the bus. This system is the grammar of reasoning and speculation.",
        examples: ["He must have left early.", "She can't have seen us.", "We could have won the match."],
        error: "Don't use must for negative deduction: \"He mustn't have seen us\" → \"He can't have seen us\".",
        practice: ["Complete: The floor is wet — it ___ (must) have rained.", "Correct: He must not have received my message (deduction).", "Choose: She (could have / must have) missed the bus — nobody knows."]
      },
      "C1": {
        quick: "Use needn't have for unnecessary actions that happened, and modal + be + -ing to deduce about now.",
        form: "Modal perfects · needn't have vs didn't need to · modal + progressive (must be doing)",
        use: "Use needn't have for unnecessary actions that happened; modal + be + -ing for deduction about now.",
        more: "Needn't have done and didn't need to look similar but differ in fact: I needn't have booked a table = I booked, but it was unnecessary; I didn't need to book = I didn't book (it wasn't necessary). Modal + be + -ing deduces about the present moment: He must be working late (I conclude from evidence); You might have been injured! combines deduction with past possibility. This layer of modality lets you reason about both time and probability at once.",
        examples: ["I needn't have booked a table.", "He must be working late.", "You might have been injured!"],
        error: "needn't have done (it happened, unnecessary) ≠ didn't need to do (it didn't happen): choose by meaning.",
        practice: ["Choose: I (needn't have / didn't need to) cooked — they brought food.", "Complete: She looks tired; she ___ (must) be overworking.", "Write a sentence with might have + past participle."]
      },
      "C2": {
        quick: "Mix modal perfects for precise certainty, and hedge academic claims with may well or could.",
        form: "Modality of certainty/necessity (will have, would have, should have to) · hedging",
        use: "Use mixed modal perfects to convey precise degrees of certainty, and modal hedging in academic register.",
        more: "At C2, modality is a precision instrument. Will have deduces with confidence (That will have been the postman); would have imagines alternative outcomes (Had the plan succeeded, we would have doubled output); should have to reports future obligation (Workers would have to comply). In academic writing, hedging softens claims: This may well prove significant rather than 'This proves…'. Choosing the right modal is part of register — over-confident will sounds naive; excessive hedging sounds weak.",
        examples: ["That will have been the postman.", "Under the new rules, workers would have to comply.", "This may well prove significant."],
        error: "Avoid over-confident will for prediction without evidence; hedge with may well / could.",
        practice: ["Rewrite with will have: I'm sure that was the reason.", "Complete: Had the plan succeeded, we ___ (would / have) doubled output.", "Hedge the claim: \"This proves the theory.\""]
      }
    }
  },
  {
    id: "present-perfect", title: "Present perfect", range: ["A2", "B1", "B2", "C1"],
    levels: {
      "A2": {
        quick: "Use have/has + past participle for past actions connected to now, with ever, never, just, already, yet.",
        form: "have/has + past participle · ever, never, just, already, yet",
        use: "Use it for past actions connected to now, and life experiences without a past time.",
        more: "The present perfect links the past to the present: I've visited Rome (the experience matters now). Use it for life experiences with ever/never (Have you ever tried sushi?), recent events with just (I've just finished), and unfinished situations with already/yet (She hasn't finished yet). The crucial rule: no finished past time words — 'I have gone yesterday' is wrong; finished time (yesterday, last week, in 2019) requires the past simple.",
        examples: ["I've visited Rome.", "Have you ever tried sushi?", "She hasn't finished yet."],
        error: "Don't use present perfect with finished past time words: \"I have gone yesterday\" → \"I went yesterday\".",
        practice: ["Complete: ___ you ever ___ (see) a whale?", "Put just: I have finished my homework.", "Correct: We have visited the museum last week."]
      },
      "B1": {
        quick: "Use for + a period of time and since + a starting point; choose the past simple when the time is finished.",
        form: "for / since · present perfect vs past simple",
        use: "Use for + duration and since + starting point; choose past simple when the time is finished (yesterday, last year).",
        more: "For measures duration (for five years, for six months); since marks the starting point (since 2020, since we were children). The perfect shows the action continues: I've lived here for five years (I still live here). The past simple shows it is finished: We met two years ago (a completed event). The golden rule: with finished time (ago, yesterday, last year), use the past simple; with unfinished time (for, since, today, this week), use the present perfect.",
        examples: ["I've lived here for five years.", "She's worked here since 2020.", "We met two years ago."],
        error: "Don't mix: \"I have lived here since five years\" → \"for five years\".",
        practice: ["Choose for/since: ___ 2019, ___ six months.", "Complete: He ___ (know) her since they were children.", "Correct: I have bought this car last month."]
      },
      "B2": {
        quick: "Use the present perfect continuous for actions that started in the past and still continue; been = went and returned, gone = still away.",
        form: "Present perfect continuous · been vs gone · with just/how long",
        use: "Use the continuous form for actions that started in the past and still continue; been = went and returned, gone = still away.",
        more: "The present perfect continuous (have been + -ing) emphasises the activity itself and its duration: I've been studying all morning (and I still am); How long have you been waiting? Been vs gone marks presence: She's gone to Paris = she is there now; She's been to Paris = she went and came back. The continuous form often answers how long, while the simple form focuses on results: I've painted the house (finished result) vs I've been painting the house (activity).",
        examples: ["I've been studying all morning.", "She's gone to Paris (she's there now).", "How long have you been waiting?"],
        error: "Don't use gone for return trips: \"I've gone to the shop\" said at home is wrong → \"I've been to the shop\".",
        practice: ["Choose been/gone: He's ___ to Brazil and he's back.", "Complete: They ___ (paint) the house all week.", "Correct: How long do you live here?"]
      },
      "C1": {
        quick: "Use the present perfect to frame recent changes and current relevance; switch to past simple for specific past events.",
        form: "Present perfect in academic/general truths · past simple + present perfect contrast for effect",
        use: "Use present perfect to frame current relevance or recent changes; switch to past simple for specific past events.",
        more: "In academic and news register, the perfect introduces current relevance or recent developments: Recent studies have challenged this view; The company has doubled in size. The past simple then provides the specific details: In 2019, it employed 200 people. This dance between the two tenses creates precise time structure — perfect for the 'change over time' frame, simple for the fixed facts. Keep time references consistent to avoid jumping confusingly between perspectives.",
        examples: ["Recent studies have challenged this view.", "The company has doubled in size.", "In 2019, it employed 200 people."],
        error: "Keep the time reference consistent: don't jump between tenses without a clear time shift.",
        practice: ["Complete: Research ___ (show) that sleep improves memory.", "Rewrite with present perfect: \"The city changed a lot\" (recent changes).", "Write two sentences contrasting a recent change with a past event."]
      }
    }
  },
  {
    id: "conditionals", title: "Conditionals", range: ["B1", "B2", "C1", "C2"],
    levels: {
      "B1": {
        quick: "Zero conditionals state facts (if + present, present); first conditionals talk about real future situations (if + present, will).",
        form: "Zero: if + present, present · First: if + present, will",
        use: "Zero conditionals state facts; first conditionals talk about real, possible future situations.",
        more: "The zero conditional states universal truths: If you heat ice, it melts. The first conditional deals with real possibilities: If it rains, we'll stay at home; Unless you hurry, you'll be late (unless = if not). The pattern never puts will inside the if-clause — 'if it will rain' is a classic error. In the main clause, will, can, must or an imperative are all possible: If she calls, tell her.",
        examples: ["If you heat ice, it melts.", "If it rains, we'll stay at home.", "Unless you hurry, you'll be late."],
        error: "Don't use will in the if-clause: \"If it will rain\" is wrong.",
        practice: ["Complete: If you mix red and white, you ___ (get) pink.", "Complete: If she calls, I ___ (tell) her.", "Rewrite with unless: If you don't study, you'll fail."]
      },
      "B2": {
        quick: "Second conditionals are unreal present/future (if + past, would); third conditionals imagine a different past (if + had, would have).",
        form: "Second: if + past simple, would + base · Third: if + past perfect, would have + pp",
        use: "Second conditionals describe unreal or hypothetical present/future situations; third conditionals regret or imagine different pasts.",
        more: "The second conditional imagines unreal present or future: If I had more time, I'd travel more; What would you do if you won the lottery? Note the past simple in the if-clause does not mean past time — it signals unreality; with be, were is formal and standard in all persons (If I were you). The third conditional rewrites the past: If she had asked, I would have helped. Would never appears in the if-clause — 'if I would have' is non-standard. These are the tenses of dreams, advice and regret.",
        examples: ["If I had more time, I'd travel more.", "If she had asked, I would have helped.", "What would you do if you won the lottery?"],
        error: "Don't use would in the if-clause: \"If I would have\" is non-standard.",
        practice: ["Complete: If I ___ (be) you, I'd accept the offer.", "Complete: If we had left earlier, we ___ (not miss) the train.", "Write a third conditional about a past mistake."]
      },
      "C1": {
        quick: "Mixed conditionals combine a past condition with a present result, or a present condition with a past result.",
        form: "Mixed conditionals (past condition → present result; present condition → past result)",
        use: "Use mixed forms when the time of condition and result differ.",
        more: "Mixed conditionals break the standard patterns when condition and result live in different times. Past condition + present result: If she had studied medicine, she would be a doctor now (the studying is past; being a doctor is now). Present condition + past result: If he were more careful, he wouldn't have crashed. Choose each clause's tense by its own time reference — this is what separates confident users from confused ones. Formal style may use inversion: Were I you, I'd reconsider.",
        examples: ["If she had studied medicine, she would be a doctor now.", "If he were more careful, he wouldn't have crashed.", "Were I you, I'd reconsider."],
        error: "Choose the tense of each clause by its own time: past condition (had + pp) with present result (would + base).",
        practice: ["Complete: If I had taken the job, I ___ (live) in New York now.", "Rewrite with inversion: If I were rich, ...", "Explain the difference between third and mixed conditionals."]
      },
      "C2": {
        quick: "Formal English inverts conditionals (Had I known...), uses were to for remote future, and but for for counterfactual causes.",
        form: "Inverted conditionals · were to · but for / if it weren't for · implicit conditionals",
        use: "Use formal inversion (Had I known...) and were to for remote future possibility; but for expresses a counterfactual cause.",
        more: "Inverted conditionals drop if and move the auxiliary to the front: Had we known earlier, we could have acted (= If we had known...); Were the plan to fail, we'd face delays. Were to pushes a condition into the remote future, making it sound less likely. But for + noun replaces a whole negative condition: But for your support, I'd have given up (= if it weren't for your support). Implicit conditionals hide the condition in other words: Without her help, the project would have failed.",
        examples: ["Had we known earlier, we could have acted.", "Were the plan to fail, we'd face delays.", "But for your support, I'd have given up."],
        error: "In inverted conditionals, drop if and move the auxiliary: \"If I had known\" → \"Had I known\", not \"Had I would know\".",
        practice: ["Rewrite: If I had seen the sign, I wouldn't have turned.", "Complete: ___ (Were) the market to crash, prices would fall.", "Rewrite with but for: Without her help, the project would have failed."]
      }
    }
  },
  {
    id: "passive", title: "Passive voice", range: ["B1", "B2", "C1", "C2"],
    levels: {
      "B1": {
        quick: "Use be + past participle when the action matters more than the doer, or the doer is unknown.",
        form: "be + past participle · by + agent",
        use: "Use the passive when the action matters more than the doer, or the doer is unknown.",
        more: "The passive swaps the focus from the doer to the receiver of the action: English is spoken worldwide; This cheese is made in France. Form it with be (in the right tense) + the past participle: is made (present), was sent (past). The doer, if mentioned, comes after by: The letters were sent by the office. Choose the passive when the doer is unknown, obvious, or unimportant — a favourite in news and instructions.",
        examples: ["This cheese is made in France.", "The letters were sent yesterday.", "English is spoken worldwide."],
        error: "Keep the participle after be: \"The book was wrote\" → \"was written\".",
        practice: ["Rewrite: People grow rice in this region.", "Complete: The window ___ (break) last night.", "Write a passive sentence about how bread is made."]
      },
      "B2": {
        quick: "Form passive with modals (must be done) and the perfect aspect (has been made, had been made).",
        form: "Passive with modal verbs (must be done) · present/past perfect passive (has been made, had been made)",
        use: "Use modal passives for rules and the perfect passive to emphasise completion.",
        more: "The passive combines freely with other grammar: modal + be + past participle expresses rules and possibility (The form must be signed; Tickets can be reserved online). Perfect passives emphasise completion: The results have been published; The task had been completed before the deadline. To build these, chain the forms — has been made, had been made, must be done — each word carrying one piece of meaning: tense, aspect, modality, then the past participle.",
        examples: ["The form must be signed.", "The results have been published.", "The task had been completed before the deadline."],
        error: "After modals use be + pp: \"must be done\", not \"must done\".",
        practice: ["Rewrite: Someone has stolen my bike.", "Complete: All tickets ___ (must / reserve) in advance.", "Correct: The package was delivered yesterday by the courier — rewrite focusing the action."]
      },
      "C1": {
        quick: "Use have/get + object + past participle for services, and passive infinitives like is said to for reported beliefs.",
        form: "Causative have/get something done · passive with reporting verbs (is said to)",
        use: "Use have/get + object + past participle for services; passive infinitive patterns for reported beliefs.",
        more: "The causative says someone does something for you: I'm having my hair cut tomorrow; She got the car repaired. The object order is critical — I have my hair cut (a service) is different from I have cut my hair (you did it yourself). Reporting passives distance the speaker from the claim: He is said to be very wealthy; The minister is reported to have resigned. Both patterns are hallmarks of news English and polite social language.",
        examples: ["I'm having my hair cut tomorrow.", "She got the car repaired.", "He is said to be very wealthy."],
        error: "Order matters in the causative: \"I have my hair cut\" not \"I have cut my hair\" (that means you cut it).",
        practice: ["Rewrite: The dentist will check my teeth (use have).", "Complete: The minister ___ (report) to have resigned.", "Correct: I need to cut my hair — say it with get + pp."]
      },
      "C2": {
        quick: "Use impersonal passives (It is believed that...), passive + infinitive, and passive forms of phrasal verbs.",
        form: "Complex passive: It is believed that ... · passive + infinitive · passive of phrasal verbs",
        use: "Use It is + pp + that to distance claims; passive forms of phrasal verbs keep the particle.",
        more: "The impersonal passive — It is widely believed that the economy will recover — is the default way to report claims without naming the source, essential in academic and journalistic writing. Passive infinitive patterns (is thought to be, is known to have) achieve the same distance with more elegance. Phrasal verbs keep their particles in the passive: The matter was dealt with efficiently; She was taken aback by the news. Dropping the particle changes the verb entirely — 'was dealt' means something different from 'was dealt with'.",
        examples: ["It is widely believed that the economy will recover.", "The matter was dealt with efficiently.", "She was taken aback by the news."],
        error: "Keep phrasal verbs intact in the passive: \"was dealt with\", not \"was dealt\".",
        practice: ["Rewrite: People think the company will merge.", "Complete: The proposal was ___ (put off) until March.", "Write an impersonal passive about a current news topic."]
      }
    }
  },
  {
    id: "reported-speech", title: "Reported speech", range: ["B1", "B2", "C1", "C2"],
    levels: {
      "B1": {
        quick: "Report statements by moving the verb one step back (backshift) and adjusting pronouns and time words.",
        form: "say/tell + clause · backshift one tense",
        use: "Report statements by moving the verb one step back and adjusting pronouns and time words.",
        more: "When reporting what someone said, move the verb one tense back: 'I am tired' → She said she was tired; 'We will help' → They said they would help; 'I have seen the film' → They said they had seen the film. Say and tell both work, but tell needs a person: She told me she was late (never 'told that'). Pronouns, possessives and time words also shift: here → there, today → that day, tomorrow → the next day.",
        examples: ["She said (that) she was tired.", "He told me he would call.", "They said they had seen the film."],
        error: "Don't forget backshift: \"She said she is tired\" (now tired) vs \"said she was tired\" (at that time).",
        practice: ["Report: \"I am hungry.\" → He said he ___.", "Report: \"We will help.\" → They said they ___.", "Correct: She told that she was late."]
      },
      "B2": {
        quick: "Report questions with ask + if/whether (or a question word) in statement word order; report requests with ask/tell + to.",
        form: "Reporting questions (ask + if/whether, wh-word) · reported requests and orders (ask/tell + to)",
        use: "Report questions with statement word order; report requests and orders with infinitive structures.",
        more: "Reported questions keep statement word order — the subject comes before the verb, and there is no question mark: She asked if I liked coffee; He asked where I lived. Yes/no questions use if or whether; wh-questions keep their question word. Requests and orders use ask/tell/order + person + to + base verb: She asked me to close the door; The teacher told us to open our books. Negatives keep not before to: He told me not to wait.",
        examples: ["She asked if I liked coffee.", "He asked where I lived.", "The teacher told us to open our books."],
        error: "Don't keep question word order: \"He asked where did I live\" → \"where I lived\".",
        practice: ["Report: \"Do you smoke?\" → She asked ___.", "Report: \"Please close the door.\" → She asked me ___.", "Correct: They asked what did I want."]
      },
      "C1": {
        quick: "Choose the right pattern after reporting verbs: admit + -ing, suggest + that/-ing, insist on + -ing.",
        form: "Reporting verbs (admit, deny, suggest, insist on) · patterns with -ing and that-clauses",
        use: "Choose the correct pattern after each reporting verb: verb + -ing, verb + that, verb + to-infinitive.",
        more: "Reporting verbs each carry their own grammar. Verb + -ing: admit, deny, suggest, recommend (He admitted making a mistake; She denied breaking it). Verb + that-clause: claim, state, argue (She claimed that the report was wrong). Verb + to-infinitive: offer, agree, refuse (They offered to help). Some take both, but with different meanings or register: He suggested that we wait / suggested waiting — never 'suggested to wait'. Insist on + -ing, but insist + that-clause.",
        examples: ["He admitted making a mistake.", "She suggested that we wait.", "They insisted on paying."],
        error: "Don't mix patterns: \"She suggested to go\" is wrong → \"suggested going\" or \"suggested that we go\".",
        practice: ["Report with deny: \"I didn't break it.\"", "Choose: He recommended (to book / booking) early.", "Correct: She suggested to meet at six."]
      },
      "C2": {
        quick: "Keep the present tense when reporting general truths, and use free indirect style to blend narrator and character voice.",
        form: "Free indirect speech · tense flexibility with present truths · reported speech in academic citation",
        use: "Keep the present tense when reporting general truths; use free indirect style to blend narrator and character voice.",
        more: "Timeless truths do not backshift: He said light travels faster than sound (still true, so present stays). Free indirect speech reports a character's thoughts without quotation marks or reporting verbs, blending their voice into the narrative: She wondered whether she had made the right choice. In academic writing, citation verbs frame evidence: Smith (2020) argues that the data support this view. Choosing present (argues) for live debates and past (argued) for completed research is a subtle register skill.",
        examples: ["He said light travels faster than sound.", "She wondered whether she had made the right choice.", "Smith (2020) argues that the data support this view."],
        error: "Don't backshift timeless truths: \"She said the earth was round\" is acceptable informally, but \"is round\" is more precise.",
        practice: ["Report keeping present: \"Water boils at 100°.\"", "Rewrite in free indirect style: She thought, \"I can't believe this.\"", "Correct the citation: \"The author claims that the results were conclusive\" — is backshift needed?"]
      }
    }
  },
  {
    id: "relative-clauses", title: "Relative clauses", range: ["B1", "B2", "C1", "C2"],
    levels: {
      "B1": {
        quick: "Join ideas with who (people), which/that (things) and where (places).",
        form: "who / which / that · where",
        use: "Use who for people, which/that for things and where for places to join ideas.",
        more: "Relative clauses add information about a noun without starting a new sentence: The man who lives next door is a doctor. Choose the pronoun by the noun's kind: who for people, which or that for things, where for places. That is informal and interchangeable with which for things (the book that/which I told you about). The clause follows its noun immediately: This is the café where we met. In defining clauses, the relative pronoun can often be dropped when it is the object: the book (that) I read.",
        examples: ["The man who lives next door is a doctor.", "This is the book that I told you about.", "That's the café where we met."],
        error: "Use who for people, not which: \"the teacher which\" is wrong.",
        practice: ["Join: I know a girl. She speaks five languages.", "Choose who/which: the film ___ won the award.", "Complete: This is the school ___ I studied."]
      },
      "B2": {
        quick: "Non-defining clauses (with commas) add extra information and can't use that; whose shows possession.",
        form: "Defining vs non-defining · whose · omission of the relative pronoun",
        use: "Non-defining clauses (with commas) add extra information and can't use that or omit the pronoun; whose shows possession.",
        more: "Defining clauses identify which person or thing (no commas, that allowed, pronoun often omitted): The song (that) she wrote is famous. Non-defining clauses add extra, removable information and need commas — and that is not allowed: My brother, who lives in Dublin, is an architect (not 'that lives'). Whose shows possession: That's the artist whose work you admired. Never omit the pronoun in subject position: the man who lives there, not 'the man lives there'.",
        examples: ["My brother, who lives in Dublin, is an architect.", "That's the artist whose work you admired.", "The song (that) she wrote is famous."],
        error: "Don't omit the pronoun in subject position: \"the man ___ lives\" needs who.",
        practice: ["Add commas and relative clause: My sister / she works in Paris.", "Complete: The students ___ exams start tomorrow are nervous.", "Rewrite dropping the pronoun: The film that we saw was long."]
      },
      "C1": {
        quick: "Move prepositions before whom/which in formal style, and use which to comment on a whole clause.",
        form: "Prepositions in relative clauses · which referring to a whole clause",
        use: "Move the preposition before whom/which in formal style; use which to comment on an entire previous clause.",
        more: "Prepositions can end relative clauses informally (the person who I talked to) or move before the relative pronoun in formal English: The client to whom I spoke was satisfied. When which refers to an entire clause, it comments on what was just said: He arrived late, which annoyed everyone. Never repeat the noun after the pronoun — 'the client whom I spoke to him' is a classic slip. With whose + noun, the noun follows directly: the artist whose work (not 'whose the work').",
        examples: ["The client to whom I spoke was satisfied.", "He arrived late, which annoyed everyone.", "The desk (which) she works at is tiny."],
        error: "Don't repeat the preposition: \"the client whom I spoke to him\" is wrong.",
        practice: ["Rewrite formally: The person who I talked to was helpful.", "Join with which: He missed the train. This delayed everything.", "Complete: The topic ___ we discussed yesterday was controversial."]
      },
      "C2": {
        quick: "Use reduced clauses with -ing/-ed participles in compact formal writing, and apposition for elegant definitions.",
        form: "Reduced relative clauses (participles) · apposition · left dislocation for emphasis",
        use: "Use reduced clauses with -ing/-ed participles in compact formal writing.",
        more: "Reduced relative clauses replace who/which + verb with a participle: The results obtained (= which were obtained) suggest a clear trend; The proposal, debated for months, was finally approved. Apposition places a noun phrase directly after another to define it: His latest novel, a masterpiece, won every prize. Keep the participle anchored to its noun — the phrase after a reduced clause must logically describe the noun before it. These structures pack information efficiently, the mark of mature academic prose.",
        examples: ["The results obtained suggest a clear trend.", "The proposal, debated for months, was finally approved.", "His latest novel, a masterpiece, won every prize."],
        error: "Keep the participle next to its noun: \"The results obtained by the team\" not \"the results the team obtained by them\".",
        practice: ["Reduce: The data that was collected was unreliable.", "Rewrite with apposition: Dr Silva, who is the lead author, will speak.", "Combine: The policy was implemented. It was heavily criticised."]
      }
    }
  },
  {
    id: "advanced", title: "Advanced structures", range: ["C1", "C2"],
    levels: {
      "C1": {
        quick: "Invert subject and auxiliary after negative adverbials (Never have I...), and use cleft sentences to focus one element.",
        form: "Inversion after negatives (never, not only, hardly) · cleft sentences (It was X that...)",
        use: "Invert subject and auxiliary after negative adverbials for emphasis; cleft sentences focus one element.",
        more: "Inversion puts the auxiliary before the subject after negative or restrictive adverbials: Never have I seen such a performance; Not only did she pass, she excelled; Hardly had we left when the storm broke. The rest of the verb phrase follows the subject unchanged. Cleft sentences use It was ... that ... to spotlight a single element: It was the cost that worried us (not the time or the location). Both devices add emphasis and sophistication to formal writing and speeches.",
        examples: ["Never have I seen such a performance.", "Not only did she pass, she excelled.", "It was the cost that worried us."],
        error: "After inversion, keep the rest of the verb phrase: \"Hardly had we left when...\" not \"Hardly we had left\".",
        practice: ["Rewrite with inversion: I have never felt so calm.", "Cleft focus the subject: \"My brother broke the vase.\" → It was ___.", "Complete: Not only ___ (did / he) apologise, he offered to pay."]
      },
      "C2": {
        quick: "Nominalise verbs into nouns for formal register, and front known information for cohesion.",
        form: "Nominalisation · ellipsis & substitution · fronting for cohesion",
        use: "Nominalise verbs into nouns for formal register; front information already known for cohesion.",
        more: "Nominalisation turns actions into nouns, compressing sentences and raising the register: The company expanded → The expansion of the company; They implemented the decision → The implementation of the decision. Use it in official and academic contexts, but prefer verbs where clarity matters more than formality. Fronting moves known information to the start for cohesion: The results were surprising. What was most striking was the speed. A that-clause can itself be the subject: That the plan failed was unsurprising. Over-nominalising sounds bureaucratic — match the register to the audience.",
        examples: ["The introduction of new measures led to...", "A lack of funding prevented completion.", "That the plan failed was unsurprising."],
        error: "Avoid over-nominalisation: \"the implementation of the decision\" (formal) vs \"they implemented the decision\" (clearer) — match register to audience.",
        practice: ["Nominalise: \"The company expanded\" → The ___ of the company...", "Front for cohesion: \"The results were surprising. What was most striking was...\"", "Rewrite with a that-clause subject: \"Everyone knows the plan failed.\""]
      }
    }
  }
];

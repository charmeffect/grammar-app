const GRAMMAR = [
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "elementary",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["She {blank} to work every day.", "Look! The children {blank} in the garden.", "Water {blank} at 100 degrees Celsius.", "I {blank} what you mean right now."],
        answers: ["walks", "are playing", "boils", "understand"],
        options: [["walks", "is walking", "has walked", "walked"], ["are playing", "play", "played", "have played"], ["boils", "is boiling", "has boiled", "boiled"], ["understand", "am understanding", "understood", "have understood"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "elementary",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["He usually {blank} coffee in the morning.", "Right now, she {blank} a letter to her friend.", "The sun {blank} in the east.", "They {blank} dinner at the moment."],
        answers: ["drinks", "is writing", "rises", "are having"],
        options: [["drinks", "is drinking", "has drunk", "drank"], ["is writing", "writes", "wrote", "has written"], ["rises", "is rising", "has risen", "rose"], ["are having", "have", "had", "have had"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "elementary",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["My father {blank} as an engineer.", "Be quiet! The baby {blank}.", "The Earth {blank} around the Sun.", "Listen! Someone {blank} at the door."],
        answers: ["works", "is sleeping", "revolves", "is knocking"],
        options: [["works", "is working", "has worked", "worked"], ["is sleeping", "sleeps", "slept", "has slept"], ["revolves", "is revolving", "has revolved", "revolved"], ["is knocking", "knocks", "knocked", "has knocked"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "elementary",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["I {blank} to the gym three times a week.", "She {blank} on a new project this month.", "Cats {blank} mice.", "We {blank} for the bus right now."],
        answers: ["go", "is working", "chase", "are waiting"],
        options: [["go", "am going", "went", "have gone"], ["is working", "works", "worked", "has worked"], ["chase", "are chasing", "chased", "have chased"], ["are waiting", "wait", "waited", "have waited"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "elementary",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["The train {blank} at 9 a.m. every day.", "At the moment, I {blank} a very interesting book.", "Nurses {blank} care of patients.", "Why {blank} you {blank} at me like that?"],
        answers: ["departs", "am reading", "take", "are...looking"],
        options: [["departs", "is departing", "has departed", "departed"], ["am reading", "read", "was reading", "have read"], ["take", "are taking", "took", "have taken"], ["are...looking", "do...look", "did...look", "have...looked"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "middle",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["I {blank} this cake tastes delicious.", "She {blank} her grandmother this weekend.", "He always {blank} about his problems.", "The company {blank} new software this quarter."],
        answers: ["think", "is visiting", "complains", "is developing"],
        options: [["think", "am thinking", "thought", "have thought"], ["is visiting", "visits", "visited", "has visited"], ["complains", "is complaining", "complained", "has complained"], ["is developing", "develops", "developed", "has developed"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "middle",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["This soup {blank} wonderful.", "He {blank} more and more like his father.", "I {blank} you are wrong about this.", "She {blank} increasingly frustrated with her job."],
        answers: ["tastes", "is looking", "believe", "is getting"],
        options: [["tastes", "is tasting", "tasted", "has tasted"], ["is looking", "looks", "looked", "has looked"], ["believe", "am believing", "believed", "have believed"], ["is getting", "gets", "got", "has got"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "middle",
        meaning: "Stative verbs (know, want, like, etc.) are typically not used in continuous form.",
        sentences: ["I {blank} a new car.", "She {blank} to speak to the manager.", "He {blank} the answer to the question.", "They {blank} Italian food."],
        answers: ["want", "wants", "knows", "love"],
        options: [["want", "am wanting", "wanted", "have wanted"], ["wants", "is wanting", "wanted", "has wanted"], ["knows", "is knowing", "knew", "has known"], ["love", "are loving", "loved", "have loved"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "middle",
        meaning: "Use present simple for scheduled events and present continuous for personal arrangements.",
        sentences: ["The conference {blank} on March 15th.", "I {blank} lunch with Sarah tomorrow.", "The flight {blank} at 6:30 p.m.", "We {blank} to the cinema tonight."],
        answers: ["starts", "am having", "leaves", "are going"],
        options: [["starts", "is starting", "will start", "started"], ["am having", "have", "will have", "had"], ["leaves", "is leaving", "will leave", "left"], ["are going", "go", "will go", "went"]]
    },
    {
        rule: "Present Simple vs Present Continuous", category: "tenses", level: "elementary",
        meaning: "Use present simple for habits, routines, and general truths; use present continuous for actions happening now or temporary situations.",
        sentences: ["She never {blank} breakfast.", "I {blank} to music at the moment.", "It often {blank} in London.", "He {blank} a shower right now."],
        answers: ["eats", "am listening", "rains", "is taking"],
        options: [["eats", "is eating", "ate", "has eaten"], ["am listening", "listen", "listened", "have listened"], ["rains", "is raining", "rained", "has rained"], ["is taking", "takes", "took", "has taken"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "elementary",
        meaning: "Use past simple for completed actions; use past continuous for actions in progress at a specific time in the past.",
        sentences: ["I {blank} dinner when the phone rang.", "She {blank} her homework and went to bed.", "While we {blank}, it started to rain.", "He {blank} the letter and put it in the envelope."],
        answers: ["was cooking", "finished", "were walking", "wrote"],
        options: [["was cooking", "cooked", "had cooked", "have cooked"], ["finished", "was finishing", "had finished", "has finished"], ["were walking", "walked", "had walked", "are walking"], ["wrote", "was writing", "had written", "has written"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "elementary",
        meaning: "Use past simple for completed actions; use past continuous for actions in progress at a specific time in the past.",
        sentences: ["At 8 p.m. last night, I {blank} TV.", "She {blank} the door and entered the room.", "They {blank} football when it started snowing.", "He {blank} to the store and bought some milk."],
        answers: ["was watching", "opened", "were playing", "went"],
        options: [["was watching", "watched", "had watched", "have watched"], ["opened", "was opening", "had opened", "has opened"], ["were playing", "played", "had played", "have played"], ["went", "was going", "had gone", "has gone"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "elementary",
        meaning: "Use past simple for completed actions; use past continuous for actions in progress at a specific time in the past.",
        sentences: ["While she {blank} dinner, the doorbell rang.", "I {blank} my old friend at the supermarket yesterday.", "The children {blank} in the park when it got dark.", "He {blank} the window because it was hot."],
        answers: ["was preparing", "met", "were playing", "opened"],
        options: [["was preparing", "prepared", "had prepared", "has prepared"], ["met", "was meeting", "had met", "have met"], ["were playing", "played", "had played", "have played"], ["opened", "was opening", "had opened", "has opened"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "middle",
        meaning: "Use past simple for completed actions; use past continuous for actions in progress at a specific time in the past.",
        sentences: ["I {blank} along the street when I noticed a strange man.", "The accident {blank} while they {blank} to work.", "She {blank} her ankle while she {blank}.", "When the teacher {blank}, the students {blank} notes."],
        answers: ["was walking", "happened...were driving", "twisted...was jogging", "entered...were taking"],
        options: [["was walking", "walked", "had walked", "have walked"], ["happened...were driving", "was happening...drove", "had happened...were driving", "happened...drove"], ["twisted...was jogging", "was twisting...jogged", "had twisted...was jogging", "twisted...jogged"], ["entered...were taking", "was entering...took", "entered...took", "had entered...were taking"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "middle",
        meaning: "Use past simple for completed actions; use past continuous for actions in progress at a specific time in the past.",
        sentences: ["At this time last year, I {blank} in Spain.", "The sun {blank} when we left the house.", "She {blank} a book while her brother {blank} video games.", "When the fire alarm {blank}, everyone {blank} the building."],
        answers: ["was living", "was shining", "was reading...was playing", "rang...left"],
        options: [["was living", "lived", "had lived", "have lived"], ["was shining", "shone", "had shone", "has shone"], ["was reading...was playing", "read...played", "was reading...played", "read...was playing"], ["rang...left", "was ringing...were leaving", "rang...were leaving", "was ringing...left"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "elementary",
        meaning: "Use past simple for completed actions; use past continuous for actions in progress at a specific time in the past.",
        sentences: ["I {blank} to school by bus when I was a child.", "What {blank} you doing at 9 o'clock last night?", "She {blank} the piano when her mother called.", "They {blank} the match 3-1."],
        answers: ["went", "were", "was playing", "won"],
        options: [["went", "was going", "had gone", "have gone"], ["were", "was", "did", "are"], ["was playing", "played", "had played", "has played"], ["won", "were winning", "had won", "have won"]]
    },
    {
        rule: "Past Simple vs Past Continuous", category: "tenses", level: "middle",
        meaning: "When two past actions overlap, the longer background action uses past continuous and the interrupting action uses past simple.",
        sentences: ["Just as I {blank} the house, the phone rang.", "While the teacher {blank}, a student interrupted.", "I {blank} asleep while I {blank} the documentary.", "She {blank} in the garden when she {blank} a strange noise."],
        answers: ["was leaving", "was speaking", "fell...was watching", "was sitting...heard"],
        options: [["was leaving", "left", "had left", "have left"], ["was speaking", "spoke", "had spoken", "has spoken"], ["fell...was watching", "was falling...watched", "fell...watched", "was falling...was watching"], ["was sitting...heard", "sat...was hearing", "was sitting...was hearing", "sat...heard"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use present perfect for experiences or actions with present relevance; use past simple for completed actions at a specific time.",
        sentences: ["I {blank} to Japan twice.", "She {blank} her keys yesterday.", "We {blank} here since 2015.", "He {blank} the project last Friday."],
        answers: ["have been", "lost", "have lived", "completed"],
        options: [["have been", "went", "was", "had been"], ["lost", "has lost", "had lost", "was losing"], ["have lived", "lived", "are living", "were living"], ["completed", "has completed", "had completed", "was completing"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use present perfect for experiences or actions with present relevance; use past simple for completed actions at a specific time.",
        sentences: ["I {blank} to Paris three times in my life.", "She {blank} the report yesterday afternoon.", "They {blank} in this city since 2010.", "We {blank} the movie last weekend."],
        answers: ["have been", "finished", "have lived", "watched"],
        options: [["have been", "went", "had been", "was"], ["finished", "has finished", "have finished", "had finished"], ["have lived", "lived", "are living", "had lived"], ["watched", "have watched", "had watched", "were watching"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use present perfect for experiences or actions with present relevance; use past simple for completed actions at a specific time.",
        sentences: ["{blank} you ever {blank} sushi?", "I {blank} him at the party last Saturday.", "She {blank} three books this year.", "They {blank} to Canada in 2019."],
        answers: ["Have...tried", "saw", "has read", "moved"],
        options: [["Have...tried", "Did...try", "Had...tried", "Were...trying"], ["saw", "have seen", "had seen", "was seeing"], ["has read", "read", "was reading", "had read"], ["moved", "have moved", "had moved", "were moving"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use present perfect for experiences or actions with present relevance; use past simple for completed actions at a specific time.",
        sentences: ["I {blank} never {blank} such a beautiful sunset.", "Columbus {blank} America in 1492.", "She {blank} for this company for ten years.", "He {blank} his first novel when he was 25."],
        answers: ["have...seen", "discovered", "has worked", "published"],
        options: [["have...seen", "had...seen", "did...see", "was...seeing"], ["discovered", "has discovered", "had discovered", "was discovering"], ["has worked", "worked", "is working", "was working"], ["published", "has published", "had published", "was publishing"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use present perfect with 'just', 'already', 'yet'; use past simple with specific time expressions.",
        sentences: ["I have {blank} finished my homework.", "She {blank} to Berlin last summer.", "We haven't received the package {blank}.", "He {blank} his driving test in June."],
        answers: ["just", "went", "yet", "passed"],
        options: [["just", "already", "yet", "still"], ["went", "has gone", "had gone", "was going"], ["yet", "already", "just", "still"], ["passed", "has passed", "had passed", "was passing"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use present perfect for experiences or actions with present relevance; use past simple for completed actions at a specific time.",
        sentences: ["I {blank} my phone. Can you call it?", "She {blank} her degree in 2020.", "They {blank} married for 25 years.", "We {blank} a wonderful time at the beach yesterday."],
        answers: ["have lost", "received", "have been", "had"],
        options: [["have lost", "lost", "had lost", "was losing"], ["received", "has received", "had received", "was receiving"], ["have been", "were", "had been", "are"], ["had", "have had", "had had", "were having"]]
    },
    {
        rule: "Present Perfect vs Past Simple", category: "tenses", level: "high",
        meaning: "Use present perfect for recent events with present relevance; use past simple for completed events.",
        sentences: ["The government {blank} new regulations this week.", "World War II {blank} in 1945.", "Technology {blank} dramatically over the last decade.", "The company {blank} bankrupt in 2008."],
        answers: ["has introduced", "ended", "has changed", "went"],
        options: [["has introduced", "introduced", "had introduced", "was introducing"], ["ended", "has ended", "had ended", "was ending"], ["has changed", "changed", "had changed", "was changing"], ["went", "has gone", "had gone", "was going"]]
    },
    {
        rule: "Present Perfect Continuous", category: "tenses", level: "middle",
        meaning: "Use present perfect continuous for actions that started in the past and continue to the present, emphasizing duration.",
        sentences: ["I {blank} for two hours.", "She {blank} all morning.", "How long {blank} you {blank} here?", "They {blank} tennis since 3 o'clock."],
        answers: ["have been studying", "has been working", "have...been waiting", "have been playing"],
        options: [["have been studying", "studied", "am studying", "was studying"], ["has been working", "worked", "works", "is working"], ["have...been waiting", "are...waiting", "did...wait", "were...waiting"], ["have been playing", "played", "are playing", "were playing"]]
    },
    {
        rule: "Present Perfect Continuous", category: "tenses", level: "middle",
        meaning: "Use present perfect continuous for actions that started in the past and continue to the present, emphasizing duration.",
        sentences: ["It {blank} all day.", "He {blank} on this project for months.", "We {blank} about buying a new house.", "She {blank} French since she was ten."],
        answers: ["has been raining", "has been working", "have been thinking", "has been learning"],
        options: [["has been raining", "rained", "is raining", "was raining"], ["has been working", "worked", "is working", "was working"], ["have been thinking", "thought", "are thinking", "were thinking"], ["has been learning", "learned", "is learning", "was learning"]]
    },
    {
        rule: "Present Perfect Continuous", category: "tenses", level: "middle",
        meaning: "Use present perfect continuous for actions that started in the past and continue to the present, emphasizing duration.",
        sentences: ["Your eyes are red. {blank} you {blank} crying?", "The roads are wet. It {blank}.", "I'm tired because I {blank} all night.", "She's out of breath because she {blank}."],
        answers: ["Have...been", "has been raining", "have been working", "has been running"],
        options: [["Have...been", "Are...", "Were...", "Did..."], ["has been raining", "rained", "is raining", "was raining"], ["have been working", "worked", "am working", "was working"], ["has been running", "ran", "is running", "was running"]]
    },
    {
        rule: "Present Perfect Continuous", category: "tenses", level: "high",
        meaning: "Present perfect continuous emphasizes the ongoing process; present perfect simple emphasizes the completed result.",
        sentences: ["I {blank} three chapters so far.", "I {blank} this book all afternoon.", "She {blank} five emails today.", "She {blank} emails all morning."],
        answers: ["have read", "have been reading", "has written", "has been writing"],
        options: [["have read", "have been reading", "read", "am reading"], ["have been reading", "have read", "read", "am reading"], ["has written", "has been writing", "wrote", "is writing"], ["has been writing", "has written", "wrote", "is writing"]]
    },
    {
        rule: "Past Perfect", category: "tenses", level: "middle",
        meaning: "Use past perfect to show that one action happened before another action in the past.",
        sentences: ["By the time I arrived, she {blank}.", "He told me he {blank} the book.", "After they {blank} dinner, they watched TV.", "I realized I {blank} my wallet at home."],
        answers: ["had left", "had read", "had eaten", "had left"],
        options: [["had left", "left", "has left", "was leaving"], ["had read", "read", "has read", "was reading"], ["had eaten", "ate", "have eaten", "were eating"], ["had left", "left", "have left", "was leaving"]]
    },
    {
        rule: "Past Perfect", category: "tenses", level: "middle",
        meaning: "Use past perfect to show that one action happened before another action in the past.",
        sentences: ["When we got to the cinema, the film {blank}.", "She was angry because he {blank} her birthday.", "They {blank} all the food before we arrived.", "I {blank} never {blank} such a beautiful place before that trip."],
        answers: ["had started", "had forgotten", "had eaten", "had...seen"],
        options: [["had started", "started", "has started", "was starting"], ["had forgotten", "forgot", "has forgotten", "was forgetting"], ["had eaten", "ate", "have eaten", "were eating"], ["had...seen", "have...seen", "did...see", "was...seeing"]]
    },
    {
        rule: "Past Perfect", category: "tenses", level: "middle",
        meaning: "Use past perfect to show that one action happened before another action in the past.",
        sentences: ["She {blank} her homework before she went out.", "The match {blank} by the time we reached the stadium.", "I couldn't enter because I {blank} my key.", "He was tired because he {blank} well the night before."],
        answers: ["had finished", "had ended", "had lost", "hadn't slept"],
        options: [["had finished", "finished", "has finished", "was finishing"], ["had ended", "ended", "has ended", "was ending"], ["had lost", "lost", "has lost", "was losing"], ["hadn't slept", "didn't sleep", "hasn't slept", "wasn't sleeping"]]
    },
    {
        rule: "Past Perfect", category: "tenses", level: "high",
        meaning: "Use past perfect to show that one action happened before another action in the past.",
        sentences: ["The patient {blank} before the ambulance arrived.", "By 2010, the company {blank} into three new markets.", "She didn't recognize him because he {blank} so much weight.", "The students {blank} all the required reading before the semester began."],
        answers: ["had died", "had expanded", "had lost", "had completed"],
        options: [["had died", "died", "has died", "was dying"], ["had expanded", "expanded", "has expanded", "was expanding"], ["had lost", "lost", "has lost", "was losing"], ["had completed", "completed", "have completed", "were completing"]]
    },
    {
        rule: "Past Perfect Continuous", category: "tenses", level: "high",
        meaning: "Use past perfect continuous for an action that was ongoing before another past action, emphasizing duration.",
        sentences: ["She {blank} for two hours before the bus finally came.", "They {blank} the house for a year before they finally sold it.", "I was exhausted because I {blank} all day.", "He {blank} at the company for 20 years before he retired."],
        answers: ["had been waiting", "had been renovating", "had been working", "had been working"],
        options: [["had been waiting", "was waiting", "waited", "has been waiting"], ["had been renovating", "were renovating", "renovated", "have been renovating"], ["had been working", "was working", "worked", "have been working"], ["had been working", "was working", "worked", "has been working"]]
    },
    {
        rule: "Past Perfect Continuous", category: "tenses", level: "high",
        meaning: "Use past perfect continuous for an action that was ongoing before another past action, emphasizing duration.",
        sentences: ["Her eyes were red because she {blank}.", "The ground was wet because it {blank} all night.", "He was out of breath because he {blank}.", "They were tired because they {blank} since dawn."],
        answers: ["had been crying", "had been raining", "had been running", "had been traveling"],
        options: [["had been crying", "was crying", "cried", "has been crying"], ["had been raining", "was raining", "rained", "has been raining"], ["had been running", "was running", "ran", "has been running"], ["had been traveling", "were traveling", "traveled", "have been traveling"]]
    },
    {
        rule: "Future Forms: Will vs Going to", category: "tenses", level: "middle",
        meaning: "Use 'will' for spontaneous decisions and predictions; use 'going to' for plans and evidence-based predictions.",
        sentences: ["I think it {blank} tomorrow.", "Look at those clouds! It {blank} rain.", "I {blank} the doctor at 3pm tomorrow.", "Don't worry, I {blank} you with that."],
        answers: ["will rain", "is going to", "am seeing", "will help"],
        options: [["will rain", "is going to rain", "rains", "is raining"], ["is going to", "will", "is", "was going to"], ["am seeing", "will see", "see", "am going to see"], ["will help", "am helping", "help", "am going to help"]]
    },
    {
        rule: "Future Forms: Will vs Going to", category: "tenses", level: "middle",
        meaning: "Use 'will' for spontaneous decisions and predictions; use 'going to' for plans and evidence-based predictions.",
        sentences: ["She {blank} 30 next month.", "We {blank} to move to a bigger house.", "I'm sure he {blank} the exam.", "They {blank} a new restaurant next week."],
        answers: ["will be", "are going", "will pass", "are opening"],
        options: [["will be", "is going to be", "is", "was"], ["are going", "will", "are", "were going"], ["will pass", "is going to pass", "passes", "is passing"], ["are opening", "will open", "open", "are going to open"]]
    },
    {
        rule: "Future Forms: Will vs Going to", category: "tenses", level: "middle",
        meaning: "Use 'will' for spontaneous decisions and predictions; use 'going to' for plans and evidence-based predictions.",
        sentences: ["The phone is ringing. I {blank} get it.", "We {blank} to visit our grandparents this Sunday.", "I promise I {blank} late again.", "She {blank} to study medicine at university."],
        answers: ["will", "are planning", "won't be", "is going"],
        options: [["will", "am going to", "am", "would"], ["are planning", "will plan", "plan", "were planning"], ["won't be", "am not going to be", "am not being", "wasn't"], ["is going", "will", "is", "was going"]]
    },
    {
        rule: "Future Forms: Will vs Going to", category: "tenses", level: "middle",
        meaning: "Use 'will' for spontaneous decisions and predictions; use 'going to' for plans and evidence-based predictions.",
        sentences: ["Careful! You {blank} to drop those plates!", "I {blank} you a secret if you promise not to tell.", "She {blank} her mother this weekend.", "By this time next year, I {blank} graduated."],
        answers: ["are going", "will tell", "is visiting", "will have"],
        options: [["are going", "will", "are", "were going"], ["will tell", "am going to tell", "tell", "am telling"], ["is visiting", "will visit", "visits", "was visiting"], ["will have", "am going to have", "have", "am having"]]
    },
    {
        rule: "Future Continuous", category: "tenses", level: "high",
        meaning: "Use future continuous for actions that will be in progress at a specific time in the future.",
        sentences: ["This time tomorrow, I {blank} on a beach.", "At 8 p.m. tonight, we {blank} dinner.", "She {blank} for her exams all weekend.", "They {blank} to the conference next week."],
        answers: ["will be lying", "will be having", "will be studying", "will be traveling"],
        options: [["will be lying", "will lie", "am lying", "lie"], ["will be having", "will have", "are having", "have"], ["will be studying", "will study", "is studying", "studies"], ["will be traveling", "will travel", "are traveling", "travel"]]
    },
    {
        rule: "Future Perfect", category: "tenses", level: "high",
        meaning: "Use future perfect for actions that will be completed before a specific time in the future.",
        sentences: ["By next June, I {blank} my degree.", "She {blank} 50 countries by the end of this year.", "By the time you arrive, we {blank} eating.", "They {blank} the bridge by December."],
        answers: ["will have finished", "will have visited", "will have finished", "will have completed"],
        options: [["will have finished", "will finish", "finish", "am finishing"], ["will have visited", "will visit", "visit", "are visiting"], ["will have finished", "will finish", "finish", "are finishing"], ["will have completed", "will complete", "complete", "are completing"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "high",
        meaning: "Use future perfect continuous for actions that will have been ongoing for a period of time before a specific point in the future.",
        sentences: ["By next month, I {blank} here for five years.", "By the time she retires, she {blank} for 40 years.", "Next week, they {blank} on this project for six months.", "By December, he {blank} the piano for ten years."],
        answers: ["will have been working", "will have been teaching", "will have been working", "will have been playing"],
        options: [["will have been working", "will work", "will be working", "am working"], ["will have been teaching", "will teach", "will be teaching", "is teaching"], ["will have been working", "will work", "will be working", "are working"], ["will have been playing", "will play", "will be playing", "is playing"]]
    },
    {
        rule: "Present Simple for Facts and Schedules", category: "tenses", level: "elementary",
        meaning: "Use present simple for scientific facts, general truths, and fixed schedules.",
        sentences: ["The moon {blank} around the Earth.", "The store {blank} at 9 a.m. every day.", "Ice {blank} when you heat it.", "The next train {blank} at 7:45."],
        answers: ["orbits", "opens", "melts", "leaves"],
        options: [["orbits", "is orbiting", "has orbited", "orbited"], ["opens", "is opening", "has opened", "opened"], ["melts", "is melting", "has melted", "melted"], ["leaves", "is leaving", "has left", "left"]]
    },
    {
        rule: "Present Continuous for Future Arrangements", category: "tenses", level: "middle",
        meaning: "Use present continuous for definite future arrangements.",
        sentences: ["I {blank} dinner with John tonight.", "They {blank} to Paris next weekend.", "She {blank} the dentist on Monday.", "We {blank} a party on Saturday."],
        answers: ["am having", "are flying", "is seeing", "are having"],
        options: [["am having", "have", "will have", "had"], ["are flying", "fly", "will fly", "flew"], ["is seeing", "sees", "will see", "saw"], ["are having", "have", "will have", "had"]]
    },
    {
        rule: "Used to vs Would vs Past Simple", category: "tenses", level: "high",
        meaning: "Use 'used to' for past habits and states; 'would' only for past repeated actions (not states); past simple for single past events.",
        sentences: ["I {blank} play football every weekend when I was young.", "She {blank} have long hair when she was a teenager.", "We {blank} go to the same restaurant every Friday.", "He {blank} to be much thinner."],
        answers: ["used to", "used to", "would", "used"],
        options: [["used to", "would", "was", "had"], ["used to", "would", "was", "had"], ["would", "used to", "were", "had"], ["used", "would", "was", "had"]]
    },
    {
        rule: "Used to vs Would vs Past Simple", category: "tenses", level: "high",
        meaning: "Use 'used to' for past habits and states; 'would' only for past repeated actions (not states); past simple for single past events.",
        sentences: ["There {blank} be a cinema on this street.", "My grandfather {blank} tell us stories every evening.", "I {blank} to enjoy roller coasters, but now I'm afraid.", "Every summer, we {blank} visit our cousins in the countryside."],
        answers: ["used to", "would", "used", "would"],
        options: [["used to", "would", "was", "had"], ["would", "used to", "was", "had"], ["used", "would", "was", "had"], ["would", "used to", "were", "had"]]
    },
    {
        rule: "Present Simple: Frequency Adverbs", category: "tenses", level: "elementary",
        meaning: "Frequency adverbs (always, usually, often, sometimes, rarely, never) are used with present simple.",
        sentences: ["She {blank} takes the bus to work.", "I {blank} eat fast food. I prefer healthy meals.", "They {blank} go hiking on weekends.", "He is {blank} late for class."],
        answers: ["usually", "rarely", "often", "always"],
        options: [["usually", "now", "yesterday", "tomorrow"], ["rarely", "always", "usually", "often"], ["often", "never", "rarely", "seldom"], ["always", "never", "rarely", "seldom"]]
    },
    {
        rule: "Past Simple: Irregular Verbs", category: "tenses", level: "elementary",
        meaning: "Many common English verbs have irregular past simple forms that must be memorized.",
        sentences: ["She {blank} a beautiful song at the concert.", "I {blank} a strange noise last night.", "He {blank} the ball over the fence.", "They {blank} the answer to the riddle."],
        answers: ["sang", "heard", "threw", "knew"],
        options: [["sang", "singed", "sung", "singing"], ["heard", "heared", "hear", "hearing"], ["threw", "throwed", "thrown", "throwing"], ["knew", "knowed", "known", "knowing"]]
    },
    {
        rule: "Present Perfect with For and Since", category: "tenses", level: "middle",
        meaning: "Use 'for' with periods of time and 'since' with points in time with present perfect.",
        sentences: ["I have lived here {blank} ten years.", "She has worked there {blank} 2018.", "We have been friends {blank} a long time.", "He has been ill {blank} last Monday."],
        answers: ["for", "since", "for", "since"],
        options: [["for", "since", "during", "while"], ["since", "for", "during", "while"], ["for", "since", "during", "while"], ["since", "for", "during", "while"]]
    },
    {
        rule: "Future in the Past", category: "tenses", level: "high",
        meaning: "Use 'was/were going to' or 'would' to talk about the future as seen from a point in the past.",
        sentences: ["He said he {blank} call me later.", "I thought it {blank} to be easy.", "She knew she {blank} miss the train.", "They believed the project {blank} succeed."],
        answers: ["would", "was going", "would", "would"],
        options: [["would", "will", "is going to", "can"], ["was going", "is going", "will", "has been going"], ["would", "will", "is going to", "can"], ["would", "will", "is going to", "can"]]
    },
    {
        rule: "Narrative Tenses", category: "tenses", level: "high",
        meaning: "In narratives, use past simple for main events, past continuous for background, and past perfect for earlier events.",
        sentences: ["She {blank} out of the window and noticed it {blank}.", "After he {blank} his bags, he called a taxi.", "While they {blank} dinner, the lights went out.", "She suddenly remembered she {blank} to lock the door."],
        answers: ["looked...was raining", "had packed", "were having", "had forgotten"],
        options: [["looked...was raining", "was looking...rained", "looked...rained", "was looking...was raining"], ["had packed", "packed", "was packing", "has packed"], ["were having", "had", "have", "are having"], ["had forgotten", "forgot", "has forgotten", "was forgetting"]]
    },
    {
        rule: "Present Simple in Time Clauses", category: "tenses", level: "middle",
        meaning: "In time clauses (when, after, before, until, as soon as), use present simple for future meaning, not 'will'.",
        sentences: ["I'll call you when I {blank} home.", "Please wait until the doctor {blank} you.", "As soon as she {blank}, we'll leave.", "Before you {blank}, turn off the lights."],
        answers: ["get", "sees", "arrives", "leave"],
        options: [["get", "will get", "am getting", "got"], ["sees", "will see", "is seeing", "saw"], ["arrives", "will arrive", "is arriving", "arrived"], ["leave", "will leave", "are leaving", "left"]]
    },
    {
        rule: "Present Simple in Time Clauses", category: "tenses", level: "middle",
        meaning: "In time clauses (when, after, before, until, as soon as), use present simple for future meaning, not 'will'.",
        sentences: ["After I {blank} this book, I'll lend it to you.", "We won't start until everyone {blank}.", "I'll help you as soon as I {blank} free.", "Call me when you {blank} at the station."],
        answers: ["finish", "arrives", "am", "arrive"],
        options: [["finish", "will finish", "am finishing", "finished"], ["arrives", "will arrive", "is arriving", "arrived"], ["am", "will be", "am being", "was"], ["arrive", "will arrive", "are arriving", "arrived"]]
    },
    {
        rule: "Habitual Past with 'Would'", category: "tenses", level: "high",
        meaning: "'Would' can describe repeated past actions, similar to 'used to', but not past states.",
        sentences: ["Every morning, he {blank} wake up at 5 a.m.", "In summer, the children {blank} play outside until dark.", "She {blank} always bring homemade cookies to class.", "On Sundays, the family {blank} gather for a big meal."],
        answers: ["would", "would", "would", "would"],
        options: [["would", "will", "could", "should"], ["would", "will", "could", "should"], ["would", "will", "could", "should"], ["would", "will", "could", "should"]]
    },
    {
        rule: "Present Perfect with Superlatives", category: "tenses", level: "middle",
        meaning: "Use present perfect with superlative adjectives to describe experiences.",
        sentences: ["It's the best movie I {blank} ever seen.", "She is the kindest person I {blank} ever met.", "This is the hardest exam I {blank} ever taken.", "That was the most delicious meal I {blank} ever had."],
        answers: ["have", "have", "have", "have"],
        options: [["have", "had", "was", "did"], ["have", "had", "was", "did"], ["have", "had", "was", "did"], ["have", "had", "was", "did"]]
    },
    {
        rule: "Past Simple with Time Expressions", category: "tenses", level: "elementary",
        meaning: "Use past simple with specific time expressions: yesterday, last week, in 2020, ago, etc.",
        sentences: ["I {blank} to London last summer.", "She {blank} her first car two years ago.", "They {blank} married in 2015.", "He {blank} the company five years ago."],
        answers: ["traveled", "bought", "got", "founded"],
        options: [["traveled", "have traveled", "had traveled", "was traveling"], ["bought", "has bought", "had bought", "was buying"], ["got", "have got", "had got", "were getting"], ["founded", "has founded", "had founded", "was founding"]]
    },
    {
        rule: "Present Perfect with Adverbs", category: "tenses", level: "middle",
        meaning: "Certain adverbs (just, already, yet, ever, never, recently) commonly occur with present perfect.",
        sentences: ["I have {blank} finished the report.", "Have you {blank} been to Australia?", "She hasn't called {blank}.", "We have {blank} moved to a new office."],
        answers: ["just", "ever", "yet", "recently"],
        options: [["just", "yet", "ever", "never"], ["ever", "never", "yet", "just"], ["yet", "already", "just", "ever"], ["recently", "yet", "ever", "never"]]
    },
    {
        rule: "Present Perfect vs Present Perfect Continuous", category: "tenses", level: "high",
        meaning: "Present perfect emphasizes result; present perfect continuous emphasizes the duration or ongoing nature of the activity.",
        sentences: ["I {blank} three reports today. (result)", "I {blank} reports all day. (ongoing activity)", "She {blank} five laps. (result)", "She {blank} for an hour. (duration)"],
        answers: ["have written", "have been writing", "has swum", "has been swimming"],
        options: [["have written", "have been writing", "wrote", "was writing"], ["have been writing", "have written", "wrote", "was writing"], ["has swum", "has been swimming", "swam", "was swimming"], ["has been swimming", "has swum", "swam", "was swimming"]]
    },
    {
        rule: "Past Perfect vs Past Simple", category: "tenses", level: "high",
        meaning: "Use past perfect to clarify the sequence of two past events; use past simple when the sequence is clear from context.",
        sentences: ["When I arrived, the meeting {blank} already started.", "She {blank} her lunch before the meeting began.", "After they {blank} the contract, they celebrated.", "I {blank} home and went straight to bed."],
        answers: ["had", "had eaten", "had signed", "came"],
        options: [["had", "has", "was", "did"], ["had eaten", "ate", "has eaten", "was eating"], ["had signed", "signed", "have signed", "were signing"], ["came", "had come", "have come", "was coming"]]
    },
    {
        rule: "Future Perfect vs Future Simple", category: "tenses", level: "high",
        meaning: "Use future perfect for actions completed before a future time; use future simple for general future actions.",
        sentences: ["By next year, I {blank} my degree.", "I {blank} you the results tomorrow.", "She {blank} the marathon by noon.", "We {blank} there at 8 o'clock."],
        answers: ["will have completed", "will send", "will have finished", "will be"],
        options: [["will have completed", "will complete", "complete", "am completing"], ["will send", "will have sent", "send", "am sending"], ["will have finished", "will finish", "finish", "is finishing"], ["will be", "will have been", "are", "were"]]
    },
    {
        rule: "Tense Review: Mixed", category: "tenses", level: "high",
        meaning: "Different tenses serve different purposes depending on time frame and aspect.",
        sentences: ["She {blank} English since she was a child.", "Yesterday at 5 p.m., I {blank} home from work.", "By the time you read this, I {blank}.", "He {blank} to the gym every morning before work."],
        answers: ["has been learning", "was driving", "will have left", "goes"],
        options: [["has been learning", "learns", "learned", "was learning"], ["was driving", "drove", "have driven", "am driving"], ["will have left", "leave", "am leaving", "left"], ["goes", "is going", "went", "has gone"]]
    },
    {
        rule: "Tense Review: Mixed", category: "tenses", level: "college",
        meaning: "Different tenses serve different purposes depending on time frame and aspect.",
        sentences: ["The research team {blank} on this problem for over a decade.", "The results {blank} published next month.", "Before the experiment began, they {blank} all the equipment.", "Currently, the scientists {blank} the data."],
        answers: ["has been working", "will be", "had prepared", "are analyzing"],
        options: [["has been working", "worked", "is working", "was working"], ["will be", "are", "were", "have been"], ["had prepared", "prepared", "have prepared", "were preparing"], ["are analyzing", "analyze", "analyzed", "have analyzed"]]
    },
    {
        rule: "Tense Consistency in Writing", category: "tenses", level: "college",
        meaning: "Maintain consistent tense in academic and professional writing unless there is a reason to shift.",
        sentences: ["The study {blank} that exercise improves mood.", "The researchers {blank} 500 participants over five years.", "The findings {blank} with previous research.", "Future studies {blank} to address these limitations."],
        answers: ["shows", "observed", "are consistent", "will need"],
        options: [["shows", "showed", "is showing", "has shown"], ["observed", "observe", "are observing", "have observed"], ["are consistent", "were consistent", "have been consistent", "had been consistent"], ["will need", "needed", "need", "have needed"]]
    },
    {
        rule: "Past Simple: Regular Verbs", category: "tenses", level: "elementary",
        meaning: "Regular verbs form the past simple by adding -ed to the base form.",
        sentences: ["She {blank} her room yesterday.", "They {blank} at the restaurant last night.", "He {blank} the game by two points.", "We {blank} the movie very much."],
        answers: ["cleaned", "arrived", "missed", "enjoyed"],
        options: [["cleaned", "cleans", "is cleaning", "has cleaned"], ["arrived", "arrives", "is arriving", "has arrived"], ["missed", "misses", "is missing", "has missed"], ["enjoyed", "enjoys", "is enjoying", "has enjoyed"]]
    },
    {
        rule: "Past Simple: Irregular Verbs Set 2", category: "tenses", level: "elementary",
        meaning: "Many common English verbs have irregular past simple forms.",
        sentences: ["I {blank} a wonderful dream last night.", "She {blank} her friends at the cafe.", "He {blank} the bus to school.", "They {blank} the house at 7 a.m."],
        answers: ["had", "met", "took", "left"],
        options: [["had", "haved", "has", "having"], ["met", "meeted", "meets", "meeting"], ["took", "taked", "takes", "taking"], ["left", "leaved", "leaves", "leaving"]]
    },
    {
        rule: "Past Simple: Negative Forms", category: "tenses", level: "elementary",
        meaning: "Form negative past simple with 'did not' (didn't) + base form of the verb.",
        sentences: ["I {blank} go to the party last night.", "She {blank} like the food at the restaurant.", "They {blank} finish the project on time.", "He {blank} understand the instructions."],
        answers: ["didn't", "didn't", "didn't", "didn't"],
        options: [["didn't", "doesn't", "isn't", "wasn't"], ["didn't", "doesn't", "isn't", "wasn't"], ["didn't", "doesn't", "isn't", "weren't"], ["didn't", "doesn't", "isn't", "wasn't"]]
    },
    {
        rule: "Past Simple: Questions", category: "tenses", level: "elementary",
        meaning: "Form past simple questions with 'Did' + subject + base form of the verb.",
        sentences: ["{blank} you enjoy the concert?", "{blank} she finish her homework?", "What {blank} you do last weekend?", "Where {blank} they go on holiday?"],
        answers: ["Did", "Did", "did", "did"],
        options: [["Did", "Do", "Does", "Was"], ["Did", "Do", "Does", "Was"], ["did", "do", "does", "was"], ["did", "do", "does", "were"]]
    },
    {
        rule: "Present Perfect: Unfinished Time", category: "tenses", level: "middle",
        meaning: "Use present perfect for actions in unfinished time periods (today, this week, this year).",
        sentences: ["I {blank} two cups of coffee today.", "She {blank} three clients this morning.", "We {blank} a lot of progress this month.", "They {blank} several awards this year."],
        answers: ["have had", "has seen", "have made", "have won"],
        options: [["have had", "had", "am having", "was having"], ["has seen", "saw", "is seeing", "was seeing"], ["have made", "made", "are making", "were making"], ["have won", "won", "are winning", "were winning"]]
    },
    {
        rule: "Going to for Plans", category: "tenses", level: "elementary",
        meaning: "Use 'be going to' for plans and intentions made before the moment of speaking.",
        sentences: ["I {blank} going to study abroad next year.", "She {blank} going to start a new business.", "They {blank} going to renovate their kitchen.", "We {blank} going to visit our relatives."],
        answers: ["am", "is", "are", "are"],
        options: [["am", "is", "are", "was"], ["is", "am", "are", "was"], ["are", "is", "am", "were"], ["are", "is", "am", "were"]]
    },
    {
        rule: "Will for Promises and Offers", category: "tenses", level: "middle",
        meaning: "Use 'will' for promises, offers, requests, and spontaneous decisions.",
        sentences: ["I {blank} always love you.", "She {blank} help you carry those bags.", "We {blank} be there on time, I promise.", "{blank} you open the window, please?"],
        answers: ["will", "will", "will", "Will"],
        options: [["will", "am going to", "would", "shall"], ["will", "is going to", "would", "shall"], ["will", "are going to", "would", "shall"], ["Will", "Are", "Do", "Shall"]]
    },
    {
        rule: "Can/Could: Ability", category: "modals", level: "elementary",
        meaning: "Use 'can' for present ability and 'could' for past ability.",
        sentences: ["She {blank} speak three languages fluently.", "He {blank} swim when he was five.", "I {blank} see the mountains from my window.", "When she was young, she {blank} run very fast."],
        answers: ["can", "could", "can", "could"],
        options: [["can", "could", "is able", "may"], ["could", "can", "was able", "might"], ["can", "could", "may", "might"], ["could", "can", "was able", "might"]]
    },
    {
        rule: "Can/Could: Permission and Requests", category: "modals", level: "elementary",
        meaning: "Use 'can' for informal permission/requests and 'could' for polite requests.",
        sentences: ["{blank} I use your phone?", "{blank} you help me with this?", "{blank} I borrow your pen?", "You {blank} leave early today."],
        answers: ["Can", "Could", "Could", "can"],
        options: [["Can", "Must", "Should", "Shall"], ["Could", "Should", "Must", "Shall"], ["Could", "Must", "Should", "Shall"], ["can", "must", "should", "shall"]]
    },
    {
        rule: "Be Able To", category: "modals", level: "middle",
        meaning: "Use 'be able to' as an alternative to 'can/could', especially in tenses where 'can' cannot be used.",
        sentences: ["I {blank} to finish the project on time.", "She hasn't {blank} to sleep well recently.", "He will {blank} to attend the meeting tomorrow.", "They were {blank} to solve the problem."],
        answers: ["was able", "been able", "be able", "able"],
        options: [["was able", "could", "can", "might"], ["been able", "be able", "able", "being able"], ["be able", "able", "been able", "being able"], ["able", "been able", "be able", "being able"]]
    },
    {
        rule: "Must: Obligation and Deduction", category: "modals", level: "middle",
        meaning: "Use 'must' for strong obligation and logical deduction.",
        sentences: ["You {blank} wear a seatbelt. It's the law.", "She {blank} be tired. She's been working all day.", "Students {blank} submit their essays by Friday.", "He {blank} be the new teacher. He looks very young."],
        answers: ["must", "must", "must", "must"],
        options: [["must", "should", "can", "might"], ["must", "should", "can", "might"], ["must", "should", "can", "might"], ["must", "should", "can", "might"]]
    },
    {
        rule: "Must vs Have to", category: "modals", level: "middle",
        meaning: "'Must' expresses personal obligation or the speaker's authority; 'have to' expresses external obligation.",
        sentences: ["I {blank} to go now or I'll miss my bus.", "You {blank} tell anyone. It's a secret. (personal)", "She {blank} to wear a uniform at work. (rule)", "We {blank} be more careful in the future. (personal)"],
        answers: ["have", "mustn't", "has", "must"],
        options: [["have", "must", "should", "need"], ["mustn't", "don't have to", "shouldn't", "can't"], ["has", "must", "should", "need"], ["must", "have to", "should", "need to"]]
    },
    {
        rule: "Mustn't vs Don't Have To", category: "modals", level: "middle",
        meaning: "'Mustn't' means something is prohibited; 'don't have to' means something is not necessary.",
        sentences: ["You {blank} touch that wire. It's dangerous!", "She {blank} work tomorrow. It's a holiday.", "You {blank} park here. It's illegal.", "I {blank} cook tonight. We're eating out."],
        answers: ["mustn't", "doesn't have to", "mustn't", "don't have to"],
        options: [["mustn't", "don't have to", "shouldn't", "can't"], ["doesn't have to", "mustn't", "shouldn't", "can't"], ["mustn't", "don't have to", "shouldn't", "needn't"], ["don't have to", "mustn't", "shouldn't", "can't"]]
    },
    {
        rule: "Should/Ought to: Advice", category: "modals", level: "elementary",
        meaning: "Use 'should' and 'ought to' to give advice or make recommendations.",
        sentences: ["You {blank} see a doctor about that cough.", "Students {blank} to submit their work on time.", "You {blank} eat more vegetables.", "She {blank} to apologize for her behavior."],
        answers: ["should", "ought", "should", "ought"],
        options: [["should", "must", "can", "will"], ["ought", "should", "must", "had"], ["should", "must", "can", "will"], ["ought", "should", "must", "had"]]
    },
    {
        rule: "Had Better", category: "modals", level: "middle",
        meaning: "Use 'had better' for strong advice with an implied negative consequence.",
        sentences: ["We {blank} better leave now or we'll be late.", "You {blank} better not tell anyone about this.", "She {blank} better study harder if she wants to pass.", "I {blank} better take an umbrella. It looks like rain."],
        answers: ["had", "had", "had", "had"],
        options: [["had", "should", "would", "could"], ["had", "should", "would", "could"], ["had", "should", "would", "could"], ["had", "should", "would", "could"]]
    },
    {
        rule: "May/Might: Possibility", category: "modals", level: "middle",
        meaning: "Use 'may' and 'might' to express possibility. 'Might' is slightly less certain than 'may'.",
        sentences: ["It {blank} rain later today.", "She {blank} be at home. I'm not sure.", "He {blank} have forgotten about the meeting.", "The package {blank} arrive tomorrow."],
        answers: ["might", "may", "might", "could"],
        options: [["might", "must", "should", "will"], ["may", "must", "should", "will"], ["might", "must", "should", "will"], ["could", "must", "should", "will"]]
    },
    {
        rule: "May/Might: Permission", category: "modals", level: "middle",
        meaning: "'May' is used for formal permission. 'Might' is rarely used for permission in modern English.",
        sentences: ["{blank} I sit here?", "You {blank} leave the room now.", "Students {blank} not use phones during the exam.", "{blank} I ask you a question?"],
        answers: ["May", "may", "may", "May"],
        options: [["May", "Might", "Must", "Should"], ["may", "might", "must", "should"], ["may", "might", "must", "should"], ["May", "Might", "Must", "Should"]]
    },
    {
        rule: "Would: Polite Requests and Hypothetical", category: "modals", level: "middle",
        meaning: "Use 'would' for polite requests and hypothetical situations.",
        sentences: ["{blank} you mind closing the door?", "I {blank} rather stay home tonight.", "She {blank} like to travel the world.", "If I had time, I {blank} learn to paint."],
        answers: ["Would", "would", "would", "would"],
        options: [["Would", "Could", "Should", "Must"], ["would", "should", "could", "had"], ["would", "should", "could", "must"], ["would", "should", "could", "must"]]
    },
    {
        rule: "Would/Used to: Past Habits", category: "modals", level: "middle",
        meaning: "Use 'would' and 'used to' for past habits. 'Used to' can also describe past states.",
        sentences: ["When I was young, I {blank} play in the park every day.", "She {blank} to live in London.", "He {blank} to be a teacher before becoming a writer.", "Every Friday, we {blank} order pizza."],
        answers: ["would", "used", "used", "would"],
        options: [["would", "will", "should", "could"], ["used", "would", "was used", "is used"], ["used", "would", "was used", "had used"], ["would", "will", "should", "could"]]
    },
    {
        rule: "Shall: Offers and Suggestions", category: "modals", level: "middle",
        meaning: "Use 'shall' with I/we for offers, suggestions, and asking for advice.",
        sentences: ["{blank} I open the window?", "{blank} we go to the cinema tonight?", "What {blank} we do about this problem?", "{blank} I carry that for you?"],
        answers: ["Shall", "Shall", "shall", "Shall"],
        options: [["Shall", "Will", "Must", "Can"], ["Shall", "Will", "Must", "Can"], ["shall", "will", "must", "can"], ["Shall", "Will", "Must", "Can"]]
    },
    {
        rule: "Need: Modal vs Regular Verb", category: "modals", level: "high",
        meaning: "'Need' can function as a modal verb (needn't) or a regular verb (don't need to).",
        sentences: ["You {blank} worry about it.", "She {blank} to leave early today.", "They {blank} have bothered. It was unnecessary.", "He {blank} to see the manager urgently."],
        answers: ["needn't", "needs", "needn't", "needs"],
        options: [["needn't", "mustn't", "shouldn't", "can't"], ["needs", "need", "needn't", "mustn't"], ["needn't", "mustn't", "shouldn't", "can't"], ["needs", "need", "needn't", "mustn't"]]
    },
    {
        rule: "Modal Perfects: Must Have", category: "modals", level: "high",
        meaning: "Use 'must have + past participle' for logical deductions about the past.",
        sentences: ["She {blank} have been very tired. She fell asleep immediately.", "He {blank} have left his phone at home.", "They {blank} have already heard the news.", "The thief {blank} have entered through the window."],
        answers: ["must", "must", "must", "must"],
        options: [["must", "might", "should", "could"], ["must", "might", "should", "could"], ["must", "might", "should", "could"], ["must", "might", "should", "could"]]
    },
    {
        rule: "Modal Perfects: Should Have", category: "modals", level: "high",
        meaning: "Use 'should have + past participle' to express regret or criticism about a past action.",
        sentences: ["You {blank} have told me earlier.", "She {blank} have studied harder for the exam.", "I {blank} have brought an umbrella.", "They {blank} have left earlier to avoid the traffic."],
        answers: ["should", "should", "should", "should"],
        options: [["should", "must", "would", "could"], ["should", "must", "would", "could"], ["should", "must", "would", "could"], ["should", "must", "would", "could"]]
    },
    {
        rule: "Modal Perfects: Could Have", category: "modals", level: "high",
        meaning: "Use 'could have + past participle' for past possibilities that didn't happen.",
        sentences: ["She {blank} have won the race, but she tripped.", "We {blank} have taken a taxi, but we decided to walk.", "He {blank} have been seriously injured in the accident.", "I {blank} have helped you if you had asked."],
        answers: ["could", "could", "could", "could"],
        options: [["could", "should", "must", "would"], ["could", "should", "must", "would"], ["could", "should", "must", "would"], ["could", "should", "must", "would"]]
    },
    {
        rule: "Modal Perfects: Might Have", category: "modals", level: "high",
        meaning: "Use 'might have + past participle' for uncertain deductions about the past.",
        sentences: ["He {blank} have taken the wrong train.", "She {blank} have misunderstood the instructions.", "They {blank} have gone to a different restaurant.", "The letter {blank} have been lost in the post."],
        answers: ["might", "might", "might", "might"],
        options: [["might", "must", "should", "will"], ["might", "must", "should", "will"], ["might", "must", "should", "will"], ["might", "must", "should", "will"]]
    },
    {
        rule: "Can't Have vs Must Have", category: "modals", level: "high",
        meaning: "Use 'can't have' for something you believe was impossible; 'must have' for something you believe certainly happened.",
        sentences: ["She {blank} have stolen the money. She's completely honest.", "He is soaking wet. He {blank} have been caught in the rain.", "They {blank} have finished already. They only started an hour ago.", "The food is burnt. She {blank} have forgotten about it in the oven."],
        answers: ["can't", "must", "can't", "must"],
        options: [["can't", "mustn't", "shouldn't", "wouldn't"], ["must", "can't", "shouldn't", "wouldn't"], ["can't", "mustn't", "shouldn't", "wouldn't"], ["must", "can't", "shouldn't", "wouldn't"]]
    },
    {
        rule: "Would Rather and Would Prefer", category: "modals", level: "high",
        meaning: "Use 'would rather + base form' and 'would prefer + to-infinitive' to express preferences.",
        sentences: ["I {blank} rather stay home tonight.", "She would {blank} go by train than by car.", "I'd rather you {blank} smoke in here.", "He would {blank} to work from home."],
        answers: ["would", "rather", "didn't", "prefer"],
        options: [["would", "should", "could", "had"], ["rather", "prefer", "better", "sooner"], ["didn't", "don't", "wouldn't", "won't"], ["prefer", "rather", "better", "sooner"]]
    },
    {
        rule: "Dare and Need as Modals", category: "modals", level: "professional",
        meaning: "'Dare' and 'need' can function as modal verbs, especially in negative and question forms.",
        sentences: ["How {blank} you speak to me like that!", "She {blank} not tell her boss the truth.", "I {blank} hardly believe what happened.", "You {blank} not have worried. Everything was fine."],
        answers: ["dare", "dare", "could", "need"],
        options: [["dare", "can", "do", "should"], ["dare", "need", "can", "must"], ["could", "dare", "should", "would"], ["need", "dare", "should", "must"]]
    },
    {
        rule: "Can: Ability vs Permission", category: "modals", level: "elementary",
        meaning: "'Can' expresses both ability and permission. Context determines the meaning.",
        sentences: ["She {blank} play the piano beautifully.", "You {blank} use my computer if you need to.", "{blank} you speak any foreign languages?", "You {blank} go home now. Class is over."],
        answers: ["can", "can", "Can", "can"],
        options: [["can", "may", "must", "should"], ["can", "must", "should", "will"], ["Can", "Must", "Should", "Will"], ["can", "must", "should", "will"]]
    },
    {
        rule: "Could: Past Ability vs Polite Request", category: "modals", level: "middle",
        meaning: "'Could' expresses past general ability or makes polite requests.",
        sentences: ["She {blank} read when she was four.", "I {blank} hear music coming from next door.", "{blank} you pass me the salt, please?", "When I lived in Paris, I {blank} speak French fluently."],
        answers: ["could", "could", "Could", "could"],
        options: [["could", "can", "was able to", "might"], ["could", "can", "was able to", "might"], ["Could", "Can", "Will", "Must"], ["could", "can", "was able to", "might"]]
    },
    {
        rule: "Was Able To vs Could", category: "modals", level: "high",
        meaning: "Use 'was/were able to' for a specific achievement in the past; 'could' for general past ability.",
        sentences: ["After hours of trying, she {blank} to fix the computer.", "As a child, I {blank} climb trees easily.", "Despite the bad weather, we {blank} to reach the summit.", "He {blank} play chess when he was young."],
        answers: ["was able", "could", "were able", "could"],
        options: [["was able", "could", "can", "might"], ["could", "was able", "can", "might"], ["were able", "could", "can", "might"], ["could", "was able", "can", "might"]]
    },
    {
        rule: "Must: Logical Deduction", category: "modals", level: "middle",
        meaning: "Use 'must' to express strong certainty or logical deduction in the present.",
        sentences: ["You've been working all day. You {blank} be exhausted.", "She speaks perfect Japanese. She {blank} have lived there.", "It {blank} be nice to live by the sea.", "There's no answer. They {blank} be out."],
        answers: ["must", "must", "must", "must"],
        options: [["must", "might", "can", "should"], ["must", "might", "can", "should"], ["must", "might", "can", "should"], ["must", "might", "can", "should"]]
    },
    {
        rule: "Modal Verbs in Formal Writing", category: "modals", level: "professional",
        meaning: "In formal and academic writing, modal verbs express hedging, obligation, and certainty with precision.",
        sentences: ["The results {blank} suggest a correlation between the variables.", "Participants {blank} complete the survey within 48 hours.", "This finding {blank} be attributed to sampling error.", "Further research {blank} be conducted to confirm these results."],
        answers: ["may", "must", "could", "should"],
        options: [["may", "must", "will", "shall"], ["must", "may", "might", "could"], ["could", "must", "will", "shall"], ["should", "must", "will", "may"]]
    },
    {
        rule: "Modals of Probability: Present", category: "modals", level: "high",
        meaning: "Modal verbs express different degrees of probability: must (95%), should (75%), may/might/could (50%).",
        sentences: ["She's not answering. She {blank} be in a meeting. (very likely)", "The train {blank} arrive on time. (fairly likely)", "It {blank} snow tonight. (possible)", "He {blank} know the answer. (possible)"],
        answers: ["must", "should", "might", "could"],
        options: [["must", "might", "could", "should"], ["should", "must", "might", "could"], ["might", "must", "should", "will"], ["could", "must", "should", "will"]]
    },
    {
        rule: "Modals of Probability: Past", category: "modals", level: "high",
        meaning: "Modal perfect forms express probability about past events.",
        sentences: ["She {blank} have left already. Her car is gone. (very likely)", "He {blank} have taken the wrong bus. (possible)", "They {blank} have arrived by now. (fairly likely)", "I {blank} have left my keys at the office. (possible)"],
        answers: ["must", "might", "should", "could"],
        options: [["must", "might", "could", "should"], ["might", "must", "should", "will"], ["should", "must", "might", "could"], ["could", "must", "should", "will"]]
    },
    {
        rule: "Didn't Need To vs Needn't Have", category: "modals", level: "professional",
        meaning: "'Didn't need to' means it wasn't necessary (and probably wasn't done); 'needn't have' means it wasn't necessary but was done anyway.",
        sentences: ["I {blank} to buy milk. We already had some. (I didn't buy it)", "She {blank} have cooked so much food. Half of it was wasted. (She did cook)", "He {blank} to work overtime. The project was extended. (He didn't)", "You {blank} have worried. Everything turned out fine. (You did worry)"],
        answers: ["didn't need", "needn't", "didn't need", "needn't"],
        options: [["didn't need", "needn't", "mustn't", "couldn't"], ["needn't", "didn't need", "mustn't", "couldn't"], ["didn't need", "needn't", "mustn't", "couldn't"], ["needn't", "didn't need", "mustn't", "couldn't"]]
    },
    {
        rule: "Be Supposed To", category: "modals", level: "middle",
        meaning: "Use 'be supposed to' for expectations, rules, or things that should happen.",
        sentences: ["You {blank} supposed to be at work by 9 a.m.", "She {blank} supposed to call me yesterday.", "We {blank} supposed to wear formal clothes.", "He {blank} supposed to finish the report today."],
        answers: ["are", "was", "are", "is"],
        options: [["are", "were", "is", "was"], ["was", "is", "are", "were"], ["are", "were", "is", "was"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Be To: Formal Obligation", category: "modals", level: "professional",
        meaning: "'Be to' expresses formal arrangements, orders, or destiny, common in news and formal contexts.",
        sentences: ["The president {blank} to visit France next week.", "All employees {blank} to attend the training session.", "The new law {blank} to take effect in January.", "No one {blank} to leave the building during the drill."],
        answers: ["is", "are", "is", "is"],
        options: [["is", "was", "has", "will"], ["are", "were", "have", "will"], ["is", "was", "has", "will"], ["is", "was", "has", "will"]]
    },
    {
        rule: "Modal + Progressive", category: "modals", level: "high",
        meaning: "Modal verbs can be combined with the progressive form (be + -ing) to talk about actions in progress.",
        sentences: ["She {blank} be sleeping right now. Don't call her.", "He must {blank} working late. His light is still on.", "They could {blank} waiting for us at the station.", "I should {blank} studying, but I'm watching TV instead."],
        answers: ["might", "be", "be", "be"],
        options: [["might", "must", "should", "will"], ["be", "have", "being", "been"], ["be", "have", "being", "been"], ["be", "have", "being", "been"]]
    },
    {
        rule: "Zero Conditional", category: "conditionals", level: "middle",
        meaning: "Use zero conditional (if + present simple, present simple) for general truths and scientific facts.",
        sentences: ["If you {blank} water to 100\u00b0C, it boils.", "If it {blank}, the ground gets wet.", "If you {blank} ice in water, it floats.", "If you {blank} red and blue, you get purple."],
        answers: ["heat", "rains", "put", "mix"],
        options: [["heat", "heated", "will heat", "would heat"], ["rains", "rained", "will rain", "would rain"], ["put", "will put", "would put", "putting"], ["mix", "mixed", "will mix", "would mix"]]
    },
    {
        rule: "Zero Conditional", category: "conditionals", level: "middle",
        meaning: "Use zero conditional for general truths and habitual actions.",
        sentences: ["If I {blank} too much coffee, I can't sleep.", "If plants {blank} enough water, they die.", "Metal {blank} if you heat it.", "If you {blank} hard, you succeed."],
        answers: ["drink", "don't get", "expands", "work"],
        options: [["drink", "drank", "will drink", "would drink"], ["don't get", "didn't get", "won't get", "wouldn't get"], ["expands", "expanded", "will expand", "would expand"], ["work", "worked", "will work", "would work"]]
    },
    {
        rule: "First Conditional", category: "conditionals", level: "middle",
        meaning: "Use first conditional (if + present simple, will + base form) for real, possible future situations.",
        sentences: ["If it {blank} tomorrow, we'll stay home.", "If she {blank} hard, she'll pass the exam.", "I {blank} you if I need help.", "If he {blank} the bus, he'll be late."],
        answers: ["rains", "studies", "will call", "misses"],
        options: [["rains", "rained", "will rain", "would rain"], ["studies", "studied", "will study", "would study"], ["will call", "called", "would call", "call"], ["misses", "missed", "will miss", "would miss"]]
    },
    {
        rule: "First Conditional", category: "conditionals", level: "middle",
        meaning: "Use first conditional for real, possible future situations.",
        sentences: ["If you {blank} now, you'll catch the train.", "I won't go to the party if she {blank} there.", "If they {blank} a taxi, they'll arrive on time.", "We'll miss the flight if we {blank} hurry."],
        answers: ["leave", "isn't", "take", "don't"],
        options: [["leave", "left", "will leave", "would leave"], ["isn't", "wasn't", "won't be", "wouldn't be"], ["take", "took", "will take", "would take"], ["don't", "didn't", "won't", "wouldn't"]]
    },
    {
        rule: "First Conditional: Unless", category: "conditionals", level: "middle",
        meaning: "'Unless' means 'if not' and is used in first conditional sentences.",
        sentences: ["Unless you {blank}, you'll miss the bus.", "I won't go unless you {blank} with me.", "Unless she {blank} soon, we'll leave without her.", "He won't pass unless he {blank} harder."],
        answers: ["hurry", "come", "arrives", "studies"],
        options: [["hurry", "hurried", "will hurry", "would hurry"], ["come", "came", "will come", "would come"], ["arrives", "arrived", "will arrive", "would arrive"], ["studies", "studied", "will study", "would study"]]
    },
    {
        rule: "Second Conditional", category: "conditionals", level: "middle",
        meaning: "Use second conditional (if + past simple, would + base form) for unreal or unlikely present/future situations.",
        sentences: ["If I {blank} rich, I would travel the world.", "She {blank} buy a house if she had enough money.", "If he {blank} harder, he would get better grades.", "If I {blank} you, I would accept the offer."],
        answers: ["were", "would", "studied", "were"],
        options: [["were", "am", "will be", "would be"], ["would", "will", "could", "should"], ["studied", "studies", "would study", "had studied"], ["were", "am", "will be", "had been"]]
    },
    {
        rule: "Second Conditional", category: "conditionals", level: "middle",
        meaning: "Use second conditional for unreal or unlikely present/future situations.",
        sentences: ["If I {blank} fly, I would visit every country.", "What would you do if you {blank} the lottery?", "If there {blank} no exams, students wouldn't study.", "I would learn Japanese if I {blank} more time."],
        answers: ["could", "won", "were", "had"],
        options: [["could", "can", "would", "will"], ["won", "win", "will win", "would win"], ["were", "are", "will be", "would be"], ["had", "have", "will have", "would have"]]
    },
    {
        rule: "Third Conditional", category: "conditionals", level: "high",
        meaning: "Use third conditional (if + past perfect, would have + past participle) for unreal past situations.",
        sentences: ["If I {blank} earlier, I would have caught the train.", "She {blank} have passed if she had studied more.", "If they {blank} the warning, the accident wouldn't have happened.", "If it hadn't rained, we {blank} have gone to the beach."],
        answers: ["had left", "would", "had heeded", "would"],
        options: [["had left", "left", "would leave", "have left"], ["would", "will", "could", "should"], ["had heeded", "heeded", "would heed", "have heeded"], ["would", "will", "could", "should"]]
    },
    {
        rule: "Third Conditional", category: "conditionals", level: "high",
        meaning: "Use third conditional for unreal past situations.",
        sentences: ["If she {blank} the email, she would have known about the change.", "We would have arrived on time if we {blank} left earlier.", "If I {blank} about the sale, I would have bought the laptop.", "He wouldn't have gotten lost if he {blank} a map."],
        answers: ["had read", "had", "had known", "had brought"],
        options: [["had read", "read", "has read", "was reading"], ["had", "have", "would have", "did"], ["had known", "knew", "have known", "was knowing"], ["had brought", "brought", "has brought", "was bringing"]]
    },
    {
        rule: "Mixed Conditional: Past Condition, Present Result", category: "conditionals", level: "high",
        meaning: "Use mixed conditional to connect a past condition with a present result.",
        sentences: ["If I {blank} your advice, I wouldn't be in this mess now.", "If she {blank} harder at school, she would have a better job now.", "If we {blank} that house, we would be living by the sea now.", "If he {blank} to university, he wouldn't be in this position."],
        answers: ["had taken", "had worked", "had bought", "had gone"],
        options: [["had taken", "took", "would take", "take"], ["had worked", "worked", "would work", "works"], ["had bought", "bought", "would buy", "buy"], ["had gone", "went", "would go", "goes"]]
    },
    {
        rule: "Mixed Conditional: Present Condition, Past Result", category: "conditionals", level: "high",
        meaning: "Use mixed conditional to connect a present condition with a past result.",
        sentences: ["If she {blank} more ambitious, she would have applied for the job.", "If I {blank} afraid of flying, I would have visited Australia.", "If he {blank} more patient, he wouldn't have lost his temper.", "If they {blank} better planners, they would have finished on time."],
        answers: ["were", "weren't", "were", "were"],
        options: [["were", "was", "had been", "is"], ["weren't", "wasn't", "hadn't been", "isn't"], ["were", "was", "had been", "is"], ["were", "was", "had been", "are"]]
    },
    {
        rule: "Wish + Past Simple", category: "conditionals", level: "middle",
        meaning: "Use 'wish + past simple' to express wishes about the present that are unlikely or impossible.",
        sentences: ["I wish I {blank} taller.", "She wishes she {blank} speak French.", "I wish it {blank} so cold today.", "He wishes he {blank} more free time."],
        answers: ["were", "could", "weren't", "had"],
        options: [["were", "am", "was", "will be"], ["could", "can", "would", "will"], ["weren't", "isn't", "won't be", "wasn't"], ["had", "has", "will have", "would have"]]
    },
    {
        rule: "Wish + Past Perfect", category: "conditionals", level: "high",
        meaning: "Use 'wish + past perfect' to express regrets about the past.",
        sentences: ["I wish I {blank} harder at school.", "She wishes she {blank} the job offer.", "I wish I {blank} what to say at the time.", "He wishes he {blank} so much money."],
        answers: ["had studied", "had accepted", "had known", "hadn't spent"],
        options: [["had studied", "studied", "have studied", "was studying"], ["had accepted", "accepted", "has accepted", "was accepting"], ["had known", "knew", "have known", "was knowing"], ["hadn't spent", "didn't spend", "hasn't spent", "wasn't spending"]]
    },
    {
        rule: "Wish + Would", category: "conditionals", level: "high",
        meaning: "Use 'wish + would' to express annoyance about something someone else does or to wish for a change.",
        sentences: ["I wish you {blank} stop making so much noise.", "She wishes he {blank} leave his clothes on the floor.", "I wish it {blank} stop raining.", "He wishes they {blank} be more considerate."],
        answers: ["would", "wouldn't", "would", "would"],
        options: [["would", "will", "could", "should"], ["wouldn't", "won't", "couldn't", "shouldn't"], ["would", "will", "could", "should"], ["would", "will", "could", "should"]]
    },
    {
        rule: "If Only", category: "conditionals", level: "high",
        meaning: "'If only' is a stronger form of 'wish' and follows the same grammar patterns.",
        sentences: ["If only I {blank} more money.", "If only she {blank} told me the truth.", "If only it {blank} stop raining.", "If only I {blank} listened to your advice."],
        answers: ["had", "had", "would", "had"],
        options: [["had", "have", "would have", "will have"], ["had", "has", "would have", "will have"], ["would", "will", "could", "should"], ["had", "have", "would have", "did"]]
    },
    {
        rule: "Provided That / As Long As", category: "conditionals", level: "high",
        meaning: "'Provided that' and 'as long as' can replace 'if' in conditional sentences.",
        sentences: ["You can borrow my car {blank} as you drive carefully.", "I'll help you {blank} that you help me in return.", "{blank} as you arrive on time, there won't be a problem.", "The plan will work {blank} that everyone cooperates."],
        answers: ["as long", "provided", "As long", "provided"],
        options: [["as long", "provided", "so long", "on condition"], ["provided", "as long", "so long", "on condition"], ["As long", "Provided", "So long", "On condition"], ["provided", "as long", "so long", "on condition"]]
    },
    {
        rule: "Conditionals with Other Modal Verbs", category: "conditionals", level: "high",
        meaning: "Conditionals can use modals other than 'would' (could, might, should) for different nuances.",
        sentences: ["If you studied harder, you {blank} pass the exam. (ability)", "If it rains, we {blank} have to cancel the picnic. (possibility)", "If he asked nicely, she {blank} help him. (possibility)", "If you see her, you {blank} give her this message. (advice)"],
        answers: ["could", "might", "might", "should"],
        options: [["could", "would", "should", "must"], ["might", "would", "should", "must"], ["might", "would", "should", "must"], ["should", "would", "could", "must"]]
    },
    {
        rule: "Inverted Conditionals", category: "conditionals", level: "professional",
        meaning: "In formal English, conditionals can be inverted without 'if': Had I known... / Were I... / Should you...",
        sentences: ["{blank} I known about the problem, I would have acted sooner.", "{blank} you need any assistance, please don't hesitate to ask.", "{blank} it not for your help, we would have failed.", "{blank} he to arrive late, the meeting would start without him."],
        answers: ["Had", "Should", "Were", "Were"],
        options: [["Had", "Have", "Did", "Would"], ["Should", "Would", "Could", "Did"], ["Were", "Was", "Had", "Would"], ["Were", "Was", "Had", "Would"]]
    },
    {
        rule: "Conditional: Suppose / What If", category: "conditionals", level: "high",
        meaning: "'Suppose' and 'what if' introduce hypothetical situations, similar to 'if'.",
        sentences: ["Suppose you {blank} the lottery, what would you do?", "What if it {blank} tomorrow? Should we have a backup plan?", "Suppose she {blank} to come, would you go alone?", "What if they {blank} arrived on time?"],
        answers: ["won", "rains", "refused", "had"],
        options: [["won", "win", "will win", "would win"], ["rains", "rained", "will rain", "would rain"], ["refused", "refuses", "will refuse", "would refuse"], ["had", "have", "will have", "would have"]]
    },
    {
        rule: "First Conditional with Modals", category: "conditionals", level: "middle",
        meaning: "First conditional can use modals like 'can', 'may', 'might' instead of 'will'.",
        sentences: ["If you finish early, you {blank} leave.", "If it stops raining, we {blank} go for a walk.", "If she gets the promotion, she {blank} move to New York.", "If he passes the test, he {blank} get the job."],
        answers: ["can", "might", "may", "could"],
        options: [["can", "must", "should", "shall"], ["might", "must", "should", "shall"], ["may", "must", "should", "shall"], ["could", "must", "should", "shall"]]
    },
    {
        rule: "Second Conditional with Could/Might", category: "conditionals", level: "high",
        meaning: "Second conditional can use 'could' or 'might' instead of 'would' for less certainty.",
        sentences: ["If I had more time, I {blank} learn to play guitar.", "If we lived closer, we {blank} see each other more often.", "If she spoke Italian, she {blank} get a job in Rome.", "If they invested wisely, they {blank} make a fortune."],
        answers: ["could", "might", "could", "might"],
        options: [["could", "would", "should", "must"], ["might", "would", "should", "must"], ["could", "would", "should", "must"], ["might", "would", "should", "must"]]
    },
    {
        rule: "Unless in Conditionals", category: "conditionals", level: "middle",
        meaning: "'Unless' means 'if...not' and is used in conditional sentences.",
        sentences: ["Unless you study, you {blank} pass the exam.", "She won't come unless you {blank} her.", "Unless it rains, the match {blank} go ahead.", "I won't help unless he {blank} me properly."],
        answers: ["won't", "invite", "will", "asks"],
        options: [["won't", "will", "don't", "can't"], ["invite", "invited", "will invite", "would invite"], ["will", "won't", "would", "wouldn't"], ["asks", "asked", "will ask", "would ask"]]
    },
    {
        rule: "Even If", category: "conditionals", level: "middle",
        meaning: "'Even if' emphasizes that the result will be the same regardless of the condition.",
        sentences: ["Even if it {blank}, we'll still go hiking.", "I wouldn't buy it even if I {blank} the money.", "Even if she {blank} me, I wouldn't tell her.", "Even if they {blank} won, they wouldn't have qualified."],
        answers: ["rains", "had", "asked", "had"],
        options: [["rains", "rained", "will rain", "would rain"], ["had", "have", "will have", "would have"], ["asked", "asks", "will ask", "would ask"], ["had", "have", "would have", "will have"]]
    },
    {
        rule: "Third Conditional: Negative", category: "conditionals", level: "high",
        meaning: "Third conditional negative: If + had not + past participle, would (not) have + past participle.",
        sentences: ["If she {blank} studied, she would have failed.", "If we hadn't left early, we {blank} have missed the flight.", "If he {blank} been wearing a helmet, he would have been seriously hurt.", "If they hadn't invested, they {blank} have made any profit."],
        answers: ["hadn't", "would", "hadn't", "wouldn't"],
        options: [["hadn't", "didn't", "hasn't", "doesn't"], ["would", "could", "might", "should"], ["hadn't", "didn't", "hasn't", "doesn't"], ["wouldn't", "couldn't", "mightn't", "shouldn't"]]
    },
    {
        rule: "Present Simple Passive", category: "passive", level: "middle",
        meaning: "Form: am/is/are + past participle. Used when the action is more important than the doer.",
        sentences: ["English {blank} in many countries.", "The office {blank} every evening.", "These cars {blank} in Germany.", "Rice {blank} in many Asian countries."],
        answers: ["is spoken", "is cleaned", "are made", "is grown"],
        options: [["is spoken", "speaks", "is speaking", "has spoken"], ["is cleaned", "cleans", "is cleaning", "has cleaned"], ["are made", "make", "are making", "have made"], ["is grown", "grows", "is growing", "has grown"]]
    },
    {
        rule: "Past Simple Passive", category: "passive", level: "middle",
        meaning: "Form: was/were + past participle. Used for completed passive actions in the past.",
        sentences: ["The cake {blank} by my grandmother.", "The building {blank} last year.", "The letter {blank} yesterday.", "The thieves {blank} by the police."],
        answers: ["was baked", "was built", "was sent", "were caught"],
        options: [["was baked", "baked", "is baking", "has baked"], ["was built", "built", "has built", "is built"], ["was sent", "sent", "is sent", "has sent"], ["were caught", "caught", "are caught", "have caught"]]
    },
    {
        rule: "Present Continuous Passive", category: "passive", level: "middle",
        meaning: "Form: am/is/are + being + past participle. Used for passive actions happening now.",
        sentences: ["The project {blank} right now.", "A new bridge {blank} across the river.", "The patients {blank} by the nurses.", "The house {blank} at the moment."],
        answers: ["is being discussed", "is being built", "are being treated", "is being painted"],
        options: [["is being discussed", "is discussing", "discusses", "was discussed"], ["is being built", "is building", "builds", "was built"], ["are being treated", "are treating", "treat", "were treated"], ["is being painted", "is painting", "paints", "was painted"]]
    },
    {
        rule: "Past Continuous Passive", category: "passive", level: "high",
        meaning: "Form: was/were + being + past participle. Used for passive actions in progress at a specific past time.",
        sentences: ["The road {blank} when we drove past.", "The suspect {blank} by the detective.", "While the food {blank}, the guests arrived.", "The documents {blank} when the fire broke out."],
        answers: ["was being repaired", "was being questioned", "was being prepared", "were being shredded"],
        options: [["was being repaired", "was repairing", "repaired", "has been repaired"], ["was being questioned", "was questioning", "questioned", "has been questioned"], ["was being prepared", "was preparing", "prepared", "has been prepared"], ["were being shredded", "were shredding", "shredded", "have been shredded"]]
    },
    {
        rule: "Present Perfect Passive", category: "passive", level: "middle",
        meaning: "Form: has/have + been + past participle. Used for passive actions completed at an unspecified time.",
        sentences: ["The report {blank} already.", "Several new laws {blank} this year.", "The suspect {blank} and charged.", "All the tickets {blank}."],
        answers: ["has been submitted", "have been passed", "has been arrested", "have been sold"],
        options: [["has been submitted", "has submitted", "is submitted", "was submitted"], ["have been passed", "have passed", "are passed", "were passed"], ["has been arrested", "has arrested", "is arrested", "was arrested"], ["have been sold", "have sold", "are sold", "were sold"]]
    },
    {
        rule: "Future Simple Passive", category: "passive", level: "middle",
        meaning: "Form: will + be + past participle. Used for passive actions in the future.",
        sentences: ["The report {blank} by next Friday.", "A new hospital {blank} in our town.", "The results {blank} next week.", "All employees {blank} about the changes."],
        answers: ["will be completed", "will be built", "will be announced", "will be informed"],
        options: [["will be completed", "will complete", "is completing", "completes"], ["will be built", "will build", "is building", "builds"], ["will be announced", "will announce", "is announcing", "announces"], ["will be informed", "will inform", "is informing", "informs"]]
    },
    {
        rule: "Modal Passive", category: "passive", level: "high",
        meaning: "Form: modal + be + past participle. Modals can be combined with passive voice.",
        sentences: ["This work {blank} finished by tomorrow.", "The rules {blank} followed at all times.", "The problem {blank} solved with more research.", "Children {blank} left unattended."],
        answers: ["must be", "should be", "could be", "should not be"],
        options: [["must be", "must", "is must", "must being"], ["should be", "should", "is should", "should being"], ["could be", "could", "is could", "could being"], ["should not be", "should not", "is not should", "should not being"]]
    },
    {
        rule: "Passive with Get", category: "passive", level: "high",
        meaning: "'Get + past participle' is an informal alternative to 'be + past participle', often for negative events.",
        sentences: ["He {blank} fired from his job last week.", "I {blank} stuck in traffic for two hours.", "She {blank} injured during the match.", "The cat {blank} hit by a car."],
        answers: ["got", "got", "got", "got"],
        options: [["got", "was", "has", "is"], ["got", "was", "has", "is"], ["got", "was", "has", "is"], ["got", "was", "has", "is"]]
    },
    {
        rule: "Passive: Impersonal Structures", category: "passive", level: "professional",
        meaning: "Impersonal passive with 'it' is used in formal/academic writing: It is said/believed/thought that...",
        sentences: ["It {blank} that the company will merge next year.", "It {blank} that regular exercise improves mood.", "It {blank} that he fled the country.", "It {blank} that over 100 people attended."],
        answers: ["is believed", "is known", "is reported", "is estimated"],
        options: [["is believed", "believes", "believing", "has believed"], ["is known", "knows", "knowing", "has known"], ["is reported", "reports", "reporting", "has reported"], ["is estimated", "estimates", "estimating", "has estimated"]]
    },
    {
        rule: "Passive: Have/Get Something Done", category: "passive", level: "high",
        meaning: "Use 'have/get + object + past participle' when someone else does something for you.",
        sentences: ["I need to {blank} my car repaired.", "She {blank} her hair cut yesterday.", "We're going to {blank} the house painted.", "He {blank} his suit cleaned every month."],
        answers: ["get", "had", "have", "gets"],
        options: [["get", "make", "do", "let"], ["had", "has", "is having", "was having"], ["have", "make", "do", "let"], ["gets", "makes", "does", "lets"]]
    },
    {
        rule: "Passive: Reporting Verbs", category: "passive", level: "professional",
        meaning: "Reporting verbs in passive: Subject + is/was + believed/said/known/thought + to-infinitive.",
        sentences: ["She {blank} believed to be the best candidate.", "He {blank} said to have left the country.", "The painting {blank} thought to be a forgery.", "They {blank} known to be generous donors."],
        answers: ["is", "is", "is", "are"],
        options: [["is", "has", "was", "were"], ["is", "has", "was", "were"], ["is", "has", "was", "were"], ["are", "have", "was", "is"]]
    },
    {
        rule: "Active to Passive Transformation", category: "passive", level: "middle",
        meaning: "To change active to passive: Object becomes subject, verb becomes be + past participle, subject becomes agent with 'by'.",
        sentences: ["The homework was {blank} by all the students.", "A new song is being {blank} by the band.", "The window was {blank} by the storm.", "The meal had been {blank} by the chef."],
        answers: ["completed", "recorded", "broken", "prepared"],
        options: [["completed", "completing", "complete", "completes"], ["recorded", "recording", "record", "records"], ["broken", "breaking", "broke", "breaks"], ["prepared", "preparing", "prepare", "prepares"]]
    },
    {
        rule: "Passive with Two Objects", category: "passive", level: "high",
        meaning: "When an active sentence has two objects, either can become the subject of the passive sentence.",
        sentences: ["I {blank} given a book by my teacher.", "A book {blank} given to me by my teacher.", "She {blank} offered the position.", "The position {blank} offered to her."],
        answers: ["was", "was", "was", "was"],
        options: [["was", "is", "has been", "had been"], ["was", "is", "has been", "had been"], ["was", "is", "has been", "had been"], ["was", "is", "has been", "had been"]]
    },
    {
        rule: "Past Perfect Passive", category: "passive", level: "high",
        meaning: "Form: had + been + past participle. Used for passive actions completed before another past action.",
        sentences: ["The house {blank} decorated before the guests arrived.", "All the invitations {blank} sent out by then.", "The car {blank} serviced the week before the trip.", "The report {blank} written before the deadline."],
        answers: ["had been", "had been", "had been", "had been"],
        options: [["had been", "has been", "was", "were"], ["had been", "has been", "were", "are"], ["had been", "has been", "was", "is"], ["had been", "has been", "was", "is"]]
    },
    {
        rule: "Future Perfect Passive", category: "passive", level: "professional",
        meaning: "Form: will + have + been + past participle. Used for passive actions to be completed before a future time.",
        sentences: ["The bridge {blank} completed by next summer.", "All the data {blank} analyzed by the end of the month.", "The new system {blank} installed by Friday.", "The results {blank} published by then."],
        answers: ["will have been", "will have been", "will have been", "will have been"],
        options: [["will have been", "will be", "has been", "is being"], ["will have been", "will be", "have been", "are being"], ["will have been", "will be", "has been", "is being"], ["will have been", "will be", "have been", "are being"]]
    },
    {
        rule: "Reported Speech: Tense Shift", category: "reported-speech", level: "middle",
        meaning: "When reporting speech, tenses typically shift back: present\u2192past, past\u2192past perfect, will\u2192would.",
        sentences: ["She said she {blank} tired.", "He told me he {blank} come tomorrow.", "They said they {blank} the movie.", "She mentioned she {blank} working there for five years."],
        answers: ["was", "would", "had seen", "had been"],
        options: [["was", "is", "has been", "will be"], ["would", "will", "could", "should"], ["had seen", "saw", "have seen", "see"], ["had been", "has been", "was", "is"]]
    },
    {
        rule: "Reported Speech: Present to Past", category: "reported-speech", level: "middle",
        meaning: "Direct: 'I am tired.' \u2192 Reported: She said she was tired. Present simple \u2192 Past simple.",
        sentences: ["'I like chocolate.' \u2192 She said she {blank} chocolate.", "'We are leaving.' \u2192 They said they {blank} leaving.", "'I don't understand.' \u2192 He said he {blank} understand.", "'She works here.' \u2192 He said she {blank} there."],
        answers: ["liked", "were", "didn't", "worked"],
        options: [["liked", "likes", "is liking", "has liked"], ["were", "are", "have been", "had been"], ["didn't", "doesn't", "hasn't", "hadn't"], ["worked", "works", "is working", "has worked"]]
    },
    {
        rule: "Reported Speech: Past to Past Perfect", category: "reported-speech", level: "high",
        meaning: "Direct: 'I went home.' \u2192 Reported: She said she had gone home. Past simple \u2192 Past perfect.",
        sentences: ["'I saw the film.' \u2192 He said he {blank} the film.", "'We arrived late.' \u2192 They said they {blank} late.", "'I didn't know.' \u2192 She said she {blank} known.", "'He won the game.' \u2192 She said he {blank} the game."],
        answers: ["had seen", "had arrived", "hadn't", "had won"],
        options: [["had seen", "saw", "has seen", "sees"], ["had arrived", "arrived", "have arrived", "arrive"], ["hadn't", "didn't", "hasn't", "doesn't"], ["had won", "won", "has won", "wins"]]
    },
    {
        rule: "Reported Speech: Will to Would", category: "reported-speech", level: "middle",
        meaning: "Direct: 'I will call you.' \u2192 Reported: He said he would call me.",
        sentences: ["'I will help you.' \u2192 She said she {blank} help me.", "'We will be there.' \u2192 They said they {blank} be there.", "'I won't tell anyone.' \u2192 He said he {blank} tell anyone.", "'She will come later.' \u2192 He said she {blank} come later."],
        answers: ["would", "would", "wouldn't", "would"],
        options: [["would", "will", "could", "should"], ["would", "will", "could", "should"], ["wouldn't", "won't", "couldn't", "shouldn't"], ["would", "will", "could", "should"]]
    },
    {
        rule: "Reported Speech: Questions", category: "reported-speech", level: "middle",
        meaning: "Reported questions use statement word order (no inversion) and no question mark.",
        sentences: ["She asked if I {blank} help her.", "He asked where I {blank}.", "They wanted to know what time the train {blank}.", "She asked me whether I {blank} been to Paris."],
        answers: ["could", "lived", "left", "had"],
        options: [["could", "can", "will", "may"], ["lived", "live", "am living", "have lived"], ["left", "leaves", "is leaving", "will leave"], ["had", "have", "has", "am"]]
    },
    {
        rule: "Reported Speech: Commands and Requests", category: "reported-speech", level: "middle",
        meaning: "Report commands with told + object + to-infinitive; report requests with asked + object + to-infinitive.",
        sentences: ["'Close the door.' \u2192 She told me {blank} the door.", "'Please help me.' \u2192 He asked me {blank} him.", "'Don't be late.' \u2192 She told them {blank} late.", "'Could you open the window?' \u2192 He asked me {blank} the window."],
        answers: ["to close", "to help", "not to be", "to open"],
        options: [["to close", "close", "closing", "closed"], ["to help", "help", "helping", "helped"], ["not to be", "don't be", "to not be", "not be"], ["to open", "open", "opening", "opened"]]
    },
    {
        rule: "Reported Speech: Say vs Tell", category: "reported-speech", level: "middle",
        meaning: "'Say' is not followed by an indirect object; 'tell' is always followed by an indirect object.",
        sentences: ["She {blank} that she was tired.", "He {blank} me that he would be late.", "They {blank} they were leaving early.", "She {blank} us to wait outside."],
        answers: ["said", "told", "said", "told"],
        options: [["said", "told", "spoke", "talked"], ["told", "said", "spoke", "talked"], ["said", "told", "spoke", "talked"], ["told", "said", "spoke", "talked"]]
    },
    {
        rule: "Reported Speech: Time and Place Changes", category: "reported-speech", level: "high",
        meaning: "In reported speech, time and place expressions change: today\u2192that day, here\u2192there, now\u2192then, etc.",
        sentences: ["'I'll do it tomorrow.' \u2192 He said he would do it {blank}.", "'I'm leaving now.' \u2192 She said she was leaving {blank}.", "'I was here yesterday.' \u2192 He said he had been {blank} the day before.", "'I'll meet you tonight.' \u2192 She said she would meet me {blank}."],
        answers: ["the next day", "then", "there", "that night"],
        options: [["the next day", "tomorrow", "today", "yesterday"], ["then", "now", "here", "there"], ["there", "here", "then", "now"], ["that night", "tonight", "last night", "the night before"]]
    },
    {
        rule: "Reported Speech: Modals", category: "reported-speech", level: "high",
        meaning: "Some modals change in reported speech: can\u2192could, may\u2192might, must\u2192had to. Could, might, would, should stay the same.",
        sentences: ["'I can swim.' \u2192 She said she {blank} swim.", "'You may leave.' \u2192 He said I {blank} leave.", "'I must go.' \u2192 She said she {blank} go.", "'I might come.' \u2192 He said he {blank} come."],
        answers: ["could", "might", "had to", "might"],
        options: [["could", "can", "would", "should"], ["might", "may", "could", "should"], ["had to", "must", "should", "would"], ["might", "may", "could", "would"]]
    },
    {
        rule: "Reported Speech: Suggestions", category: "reported-speech", level: "high",
        meaning: "Report suggestions with 'suggested + gerund' or 'suggested + that + subject + (should) + base form'.",
        sentences: ["'Let's go to the beach.' \u2192 He suggested {blank} to the beach.", "'Why don't we eat out?' \u2192 She suggested that we {blank} out.", "'How about watching a film?' \u2192 He suggested {blank} a film.", "'Let's take a break.' \u2192 She suggested {blank} a break."],
        answers: ["going", "eat", "watching", "taking"],
        options: [["going", "to go", "go", "went"], ["eat", "ate", "eating", "to eat"], ["watching", "to watch", "watch", "watched"], ["taking", "to take", "take", "took"]]
    },
    {
        rule: "Reported Speech: Promises and Threats", category: "reported-speech", level: "high",
        meaning: "Report promises with 'promised + to-infinitive'; report threats with 'threatened + to-infinitive'.",
        sentences: ["'I'll help you.' \u2192 She {blank} to help me.", "'I'll call the police!' \u2192 He {blank} to call the police.", "'I won't tell anyone.' \u2192 She {blank} not to tell anyone.", "'I'll fire you if you're late again.' \u2192 He {blank} to fire me."],
        answers: ["promised", "threatened", "promised", "threatened"],
        options: [["promised", "threatened", "offered", "refused"], ["threatened", "promised", "offered", "refused"], ["promised", "threatened", "offered", "refused"], ["threatened", "promised", "offered", "refused"]]
    },
    {
        rule: "Reported Speech: Offers", category: "reported-speech", level: "high",
        meaning: "Report offers with 'offered + to-infinitive'.",
        sentences: ["'Shall I carry your bag?' \u2192 He {blank} to carry my bag.", "'I'll pay for dinner.' \u2192 She {blank} to pay for dinner.", "'Would you like me to drive?' \u2192 He {blank} to drive.", "'Can I help you with that?' \u2192 She {blank} to help me."],
        answers: ["offered", "offered", "offered", "offered"],
        options: [["offered", "told", "asked", "suggested"], ["offered", "told", "asked", "suggested"], ["offered", "told", "asked", "suggested"], ["offered", "told", "asked", "suggested"]]
    },
    {
        rule: "Reported Speech: Mixed", category: "reported-speech", level: "college",
        meaning: "In formal contexts, tense shift may not always apply if the reported information is still true.",
        sentences: ["The professor said that water {blank} at 100\u00b0C. (still true)", "She told me she {blank} in London. (she still does)", "He mentioned that he {blank} three languages. (he still does)", "The guide explained that the castle {blank} built in 1250."],
        answers: ["boils", "lives", "speaks", "was"],
        options: [["boils", "boiled", "is boiling", "had boiled"], ["lives", "lived", "is living", "had lived"], ["speaks", "spoke", "is speaking", "had spoken"], ["was", "had been", "is", "has been"]]
    },
    {
        rule: "Reported Speech: Wh- Questions", category: "reported-speech", level: "middle",
        meaning: "Report wh-questions with the question word + statement word order (no auxiliary inversion).",
        sentences: ["'Where do you live?' \u2192 She asked me where I {blank}.", "'What is your name?' \u2192 He asked me what my name {blank}.", "'Why did you leave?' \u2192 She asked me why I {blank} left.", "'How old are you?' \u2192 He asked me how old I {blank}."],
        answers: ["lived", "was", "had", "was"],
        options: [["lived", "live", "am living", "have lived"], ["was", "is", "has been", "will be"], ["had", "have", "has", "did"], ["was", "am", "have been", "will be"]]
    },
    {
        rule: "Reported Speech: Yes/No Questions", category: "reported-speech", level: "middle",
        meaning: "Report yes/no questions with 'if' or 'whether' + statement word order.",
        sentences: ["'Are you coming?' \u2192 She asked {blank} I was coming.", "'Did he pass?' \u2192 I asked {blank} he had passed.", "'Have you finished?' \u2192 She asked me {blank} I had finished.", "'Can you swim?' \u2192 He asked me {blank} I could swim."],
        answers: ["if", "whether", "if", "whether"],
        options: [["if", "that", "what", "how"], ["whether", "that", "what", "how"], ["if", "that", "what", "how"], ["whether", "that", "what", "how"]]
    },
    {
        rule: "Reported Speech: Advise, Warn, Remind", category: "reported-speech", level: "high",
        meaning: "Use specific reporting verbs for different speech acts: advise, warn, remind + object + to-infinitive.",
        sentences: ["'Don't forget to lock the door.' \u2192 She {blank} me to lock the door.", "'Be careful on the road.' \u2192 He {blank} me to be careful.", "'You should see a doctor.' \u2192 She {blank} me to see a doctor.", "'Remember to call your mother.' \u2192 He {blank} me to call my mother."],
        answers: ["reminded", "warned", "advised", "reminded"],
        options: [["reminded", "warned", "advised", "told"], ["warned", "reminded", "advised", "told"], ["advised", "warned", "reminded", "told"], ["reminded", "warned", "advised", "told"]]
    },
    {
        rule: "Indefinite Article: A vs An", category: "articles", level: "elementary",
        meaning: "Use 'a' before consonant sounds and 'an' before vowel sounds.",
        sentences: ["She is {blank} engineer at a tech company.", "He bought {blank} umbrella yesterday.", "I saw {blank} European tourist at the museum.", "She ate {blank} apple for lunch."],
        answers: ["an", "an", "a", "an"],
        options: [["an", "a", "the", "\u2014"], ["an", "a", "the", "\u2014"], ["a", "an", "the", "\u2014"], ["an", "a", "the", "\u2014"]]
    },
    {
        rule: "Definite Article: The", category: "articles", level: "elementary",
        meaning: "Use 'the' when both speaker and listener know which specific thing is being referred to.",
        sentences: ["I saw {blank} moon last night. It was beautiful.", "Can you pass me {blank} salt, please?", "He plays {blank} guitar very well.", "{blank} children are playing in the garden. (specific children)"],
        answers: ["the", "the", "the", "The"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["The", "A", "An", "\u2014"]]
    },
    {
        rule: "Zero Article", category: "articles", level: "middle",
        meaning: "No article is used with uncountable/abstract nouns in general, plural nouns in general, names, and some fixed expressions.",
        sentences: ["{blank} honesty is the best policy.", "{blank} water is essential for life.", "She studies {blank} biology at university.", "I love {blank} music."],
        answers: ["\u2014", "\u2014", "\u2014", "\u2014"],
        options: [["\u2014", "The", "An", "A"], ["\u2014", "The", "An", "A"], ["\u2014", "The", "An", "A"], ["\u2014", "The", "An", "A"]]
    },
    {
        rule: "Articles with Geographic Names", category: "articles", level: "middle",
        meaning: "Use 'the' with rivers, oceans, mountain ranges, deserts, and plural country names. No article with most countries, cities, and single mountains.",
        sentences: ["{blank} Amazon is the longest river in South America.", "{blank} Mount Everest is in Nepal.", "She visited {blank} United Kingdom last year.", "They traveled across {blank} Sahara Desert."],
        answers: ["The", "\u2014", "the", "the"],
        options: [["The", "A", "An", "\u2014"], ["\u2014", "The", "A", "An"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Articles with Institutions", category: "articles", level: "high",
        meaning: "Use no article when referring to the purpose of an institution (school, hospital, prison, church); use 'the' when referring to the building.",
        sentences: ["She goes to {blank} school every day. (as a student)", "He went to {blank} hospital to visit his friend. (visitor)", "They are in {blank} prison. (as prisoners)", "I met her at {blank} church. (the building)"],
        answers: ["\u2014", "the", "\u2014", "the"],
        options: [["\u2014", "the", "a", "an"], ["the", "\u2014", "a", "an"], ["\u2014", "the", "a", "an"], ["the", "\u2014", "a", "an"]]
    },
    {
        rule: "Articles with Meals, Transport, and Communication", category: "articles", level: "middle",
        meaning: "No article with meals (breakfast, lunch, dinner) in general. Use 'by' + no article for transport.",
        sentences: ["We had {blank} breakfast at 8 a.m.", "She goes to work by {blank} bus.", "Let's have {blank} lunch together.", "I'll send it by {blank} email."],
        answers: ["\u2014", "\u2014", "\u2014", "\u2014"],
        options: [["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"]]
    },
    {
        rule: "Articles: First vs Second Mention", category: "articles", level: "middle",
        meaning: "Use 'a/an' for first mention; use 'the' for subsequent mentions.",
        sentences: ["I saw {blank} man and a woman in the park.", "Then {blank} man started talking to the woman.", "She bought {blank} dress online.", "When {blank} dress arrived, it was the wrong size."],
        answers: ["a", "the", "a", "the"],
        options: [["a", "the", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["a", "the", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Articles with Superlatives and Ordinals", category: "articles", level: "middle",
        meaning: "Use 'the' before superlative adjectives and ordinal numbers.",
        sentences: ["She is {blank} tallest girl in the class.", "It was {blank} most beautiful sunset I've ever seen.", "He was {blank} first person to arrive.", "This is {blank} best restaurant in town."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Articles with Unique Nouns", category: "articles", level: "middle",
        meaning: "Use 'the' with nouns that are unique: the sun, the moon, the internet, the weather, etc.",
        sentences: ["{blank} sun rises in the east.", "{blank} internet has changed the world.", "What's {blank} weather like today?", "Neil Armstrong walked on {blank} moon."],
        answers: ["The", "The", "the", "the"],
        options: [["The", "A", "An", "\u2014"], ["The", "A", "An", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Articles in Fixed Expressions", category: "articles", level: "high",
        meaning: "Many expressions have fixed article usage that must be memorized.",
        sentences: ["She goes to work in {blank} morning.", "He came home at {blank} end of the day.", "They are on {blank} holiday this week.", "We had {blank} good time at the party."],
        answers: ["the", "the", "\u2014", "a"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["\u2014", "the", "a", "an"], ["a", "the", "an", "\u2014"]]
    },
    {
        rule: "Articles with Nationalities and Languages", category: "articles", level: "middle",
        meaning: "Use 'the' + adjective for nationality groups. No article before languages.",
        sentences: ["{blank} French are known for their cuisine.", "{blank} Chinese is a tonal language.", "She speaks {blank} English fluently.", "{blank} Japanese are very polite."],
        answers: ["The", "\u2014", "\u2014", "The"],
        options: [["The", "A", "An", "\u2014"], ["\u2014", "The", "A", "An"], ["\u2014", "The", "A", "An"], ["The", "A", "An", "\u2014"]]
    },
    {
        rule: "A/An with Job Titles", category: "articles", level: "elementary",
        meaning: "Use 'a/an' when stating someone's job or profession.",
        sentences: ["She is {blank} teacher.", "He works as {blank} accountant.", "I want to be {blank} astronaut.", "My mother is {blank} nurse."],
        answers: ["a", "an", "an", "a"],
        options: [["a", "the", "an", "\u2014"], ["an", "a", "the", "\u2014"], ["an", "a", "the", "\u2014"], ["a", "the", "an", "\u2014"]]
    },
    {
        rule: "The with Musical Instruments", category: "articles", level: "middle",
        meaning: "Use 'the' before musical instruments when talking about playing them.",
        sentences: ["She plays {blank} piano beautifully.", "He is learning to play {blank} violin.", "Can you play {blank} drums?", "She plays {blank} flute in the orchestra."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Prepositions of Interest and Ability", category: "prepositions", level: "middle",
        meaning: "Fixed preposition combinations with adjectives: interested in, good at, afraid of, etc.",
        sentences: ["I'm interested {blank} learning French.", "She's good {blank} mathematics.", "He's afraid {blank} spiders.", "They're tired {blank} waiting."],
        answers: ["in", "at", "of", "of"],
        options: [["in", "on", "at", "for"], ["at", "in", "on", "for"], ["of", "from", "about", "with"], ["of", "from", "about", "with"]]
    },
    {
        rule: "Prepositions with Verbs: Depend, Rely, Consist", category: "prepositions", level: "middle",
        meaning: "Many verbs require specific prepositions: depend on, rely on, consist of, etc.",
        sentences: ["He depends {blank} his parents for support.", "The team consists {blank} twelve members.", "You can rely {blank} me for help.", "The result depends {blank} many factors."],
        answers: ["on", "of", "on", "on"],
        options: [["on", "in", "at", "for"], ["of", "on", "in", "at"], ["on", "in", "at", "for"], ["on", "in", "at", "for"]]
    },
    {
        rule: "Prepositions of Place: At, In, On", category: "prepositions", level: "elementary",
        meaning: "Use 'at' for specific points, 'in' for enclosed spaces, 'on' for surfaces.",
        sentences: ["We arrived {blank} the airport early.", "She lives {blank} London.", "The book is {blank} the table.", "I'll meet you {blank} the bus stop."],
        answers: ["at", "in", "on", "at"],
        options: [["at", "in", "on", "to"], ["in", "at", "on", "to"], ["on", "in", "at", "to"], ["at", "in", "on", "to"]]
    },
    {
        rule: "Prepositions of Time: At, In, On", category: "prepositions", level: "elementary",
        meaning: "Use 'at' for times, 'in' for months/years/seasons, 'on' for days/dates.",
        sentences: ["The meeting starts {blank} 9 o'clock.", "She was born {blank} March.", "I'll see you {blank} Monday.", "He always jogs {blank} the morning."],
        answers: ["at", "in", "on", "in"],
        options: [["at", "in", "on", "by"], ["in", "at", "on", "by"], ["on", "in", "at", "by"], ["in", "at", "on", "by"]]
    },
    {
        rule: "Prepositions with Verbs: Apologize, Blame, Accuse", category: "prepositions", level: "middle",
        meaning: "Apologize for, blame for/on, accuse of are common verb + preposition combinations.",
        sentences: ["I apologized {blank} being late.", "She blamed him {blank} the accident.", "They accused her {blank} stealing.", "He congratulated me {blank} passing the exam."],
        answers: ["for", "for", "of", "on"],
        options: [["for", "about", "to", "of"], ["for", "on", "at", "about"], ["of", "for", "about", "with"], ["on", "for", "about", "with"]]
    },
    {
        rule: "Prepositions of Movement", category: "prepositions", level: "elementary",
        meaning: "Use specific prepositions for movement: to (destination), into (enter), out of (exit), through (pass), along (follow).",
        sentences: ["She walked {blank} the room.", "He went {blank} the tunnel.", "The cat jumped {blank} the wall.", "They drove {blank} the coast road."],
        answers: ["into", "through", "over", "along"],
        options: [["into", "in", "at", "on"], ["through", "into", "across", "along"], ["over", "into", "through", "across"], ["along", "through", "into", "across"]]
    },
    {
        rule: "Prepositions: By vs Until", category: "prepositions", level: "middle",
        meaning: "'By' means 'no later than'; 'until' means 'up to a specific time'.",
        sentences: ["Please finish the report {blank} Friday.", "I'll wait {blank} you're ready.", "She'll be here {blank} 6 o'clock.", "The store is open {blank} midnight."],
        answers: ["by", "until", "by", "until"],
        options: [["by", "until", "in", "on"], ["until", "by", "in", "on"], ["by", "until", "in", "on"], ["until", "by", "in", "on"]]
    },
    {
        rule: "Prepositions: For vs Since vs During", category: "prepositions", level: "middle",
        meaning: "'For' = duration, 'since' = starting point, 'during' = within a period of time.",
        sentences: ["I've been waiting {blank} two hours.", "She has lived here {blank} 2010.", "We went swimming {blank} the summer.", "He studied {blank} three years."],
        answers: ["for", "since", "during", "for"],
        options: [["for", "since", "during", "while"], ["since", "for", "during", "while"], ["during", "for", "since", "while"], ["for", "since", "during", "while"]]
    },
    {
        rule: "Prepositions with Adjectives: Worried, Excited, Proud", category: "prepositions", level: "middle",
        meaning: "Specific adjectives require specific prepositions: worried about, excited about, proud of, etc.",
        sentences: ["She's worried {blank} the exam.", "I'm excited {blank} the trip.", "They're proud {blank} their daughter.", "He's angry {blank} the delay."],
        answers: ["about", "about", "of", "about"],
        options: [["about", "for", "of", "with"], ["about", "for", "of", "with"], ["of", "about", "for", "with"], ["about", "for", "of", "with"]]
    },
    {
        rule: "Prepositions: In spite of / Despite", category: "prepositions", level: "middle",
        meaning: "'In spite of' and 'despite' are followed by a noun or gerund, not a clause.",
        sentences: ["{blank} the rain, we went for a walk.", "She passed {blank} not studying hard.", "He won {blank} his injury.", "{blank} the heavy traffic, we arrived on time."],
        answers: ["Despite", "despite", "despite", "Despite"],
        options: [["Despite", "Although", "However", "Because"], ["despite", "although", "however", "because"], ["despite", "although", "however", "because"], ["Despite", "Although", "However", "Because"]]
    },
    {
        rule: "Phrasal Prepositions", category: "prepositions", level: "high",
        meaning: "Complex prepositions: according to, in addition to, in terms of, with regard to, etc.",
        sentences: ["{blank} to the report, sales have increased.", "In {blank} to his regular job, he tutors students.", "The project was successful in {blank} of meeting deadlines.", "{blank} regard to your request, we will respond shortly."],
        answers: ["According", "addition", "terms", "With"],
        options: [["According", "Due", "Thanks", "Prior"], ["addition", "spite", "front", "terms"], ["terms", "spite", "front", "addition"], ["With", "In", "On", "By"]]
    },
    {
        rule: "Prepositions after Nouns", category: "prepositions", level: "high",
        meaning: "Certain nouns require specific prepositions: increase in, need for, effect on, solution to.",
        sentences: ["There was an increase {blank} sales.", "There is a need {blank} more research.", "Pollution has a bad effect {blank} health.", "We need to find a solution {blank} this problem."],
        answers: ["in", "for", "on", "to"],
        options: [["in", "of", "on", "for"], ["for", "of", "in", "to"], ["on", "in", "of", "for"], ["to", "for", "of", "in"]]
    },
    {
        rule: "Prepositions: Between vs Among", category: "prepositions", level: "middle",
        meaning: "'Between' for two items or specific, distinct items; 'among' for more than two in a general group.",
        sentences: ["The house is {blank} the bank and the school.", "She distributed the sweets {blank} the children.", "There was a disagreement {blank} the two brothers.", "He found the letter {blank} his papers."],
        answers: ["between", "among", "between", "among"],
        options: [["between", "among", "with", "beside"], ["among", "between", "with", "beside"], ["between", "among", "with", "beside"], ["among", "between", "with", "beside"]]
    },
    {
        rule: "Prepositions: Like vs As", category: "prepositions", level: "high",
        meaning: "'Like' is followed by a noun/pronoun (similar to); 'as' introduces a clause or means 'in the role of'.",
        sentences: ["She looks {blank} her mother.", "He works {blank} a waiter.", "It tastes {blank} chicken.", "{blank} I said, we need to hurry."],
        answers: ["like", "as", "like", "As"],
        options: [["like", "as", "such", "similar"], ["as", "like", "such", "similar"], ["like", "as", "such", "similar"], ["As", "Like", "Such", "Similar"]]
    },
    {
        rule: "Relative Pronouns: Who, Which, That", category: "relative-clauses", level: "middle",
        meaning: "Use 'who/that' for people, 'which/that' for things in defining relative clauses.",
        sentences: ["The woman {blank} lives next door is a doctor.", "The book {blank} I borrowed was excellent.", "The car {blank} he bought is very expensive.", "The teacher {blank} taught us was very kind."],
        answers: ["who", "that", "that", "who"],
        options: [["who", "which", "whom", "whose"], ["that", "who", "whom", "whose"], ["that", "who", "whom", "whose"], ["who", "which", "that", "whose"]]
    },
    {
        rule: "Relative Pronoun: Whose", category: "relative-clauses", level: "middle",
        meaning: "Use 'whose' to show possession in relative clauses.",
        sentences: ["The man {blank} car was stolen called the police.", "I know a girl {blank} father is a famous actor.", "The company {blank} products we use is based in Japan.", "She's the student {blank} essay won the prize."],
        answers: ["whose", "whose", "whose", "whose"],
        options: [["whose", "who", "which", "whom"], ["whose", "who", "which", "whom"], ["whose", "who", "which", "whom"], ["whose", "who", "which", "whom"]]
    },
    {
        rule: "Relative Pronoun: Where, When, Why", category: "relative-clauses", level: "middle",
        meaning: "Use 'where' for places, 'when' for times, and 'why' for reasons in relative clauses.",
        sentences: ["The restaurant {blank} we ate last night was expensive.", "I remember the day {blank} we first met.", "Do you know the reason {blank} she left?", "The hotel {blank} we stayed was right by the beach."],
        answers: ["where", "when", "why", "where"],
        options: [["where", "which", "that", "whose"], ["when", "where", "which", "that"], ["why", "when", "where", "which"], ["where", "which", "that", "whose"]]
    },
    {
        rule: "Relative Pronoun: Whom (Formal)", category: "relative-clauses", level: "high",
        meaning: "Use 'whom' as the object of a verb or preposition in formal English.",
        sentences: ["The woman to {blank} I spoke was very helpful.", "He is someone {blank} I greatly admire.", "The candidate for {blank} we voted won the election.", "The author, {blank} the critics praised, gave a speech."],
        answers: ["whom", "whom", "whom", "whom"],
        options: [["whom", "who", "which", "that"], ["whom", "who", "which", "that"], ["whom", "who", "which", "that"], ["whom", "who", "which", "that"]]
    },
    {
        rule: "Defining vs Non-Defining Relative Clauses", category: "relative-clauses", level: "high",
        meaning: "Defining clauses identify which person/thing (no commas, 'that' possible). Non-defining add extra info (commas, no 'that').",
        sentences: ["The man who lives next door is a doctor. (This is a {blank} clause.)", "My mother, who is 65, still works. (This is a {blank} clause.)", "The book {blank} I lent you was mine. (defining)", "Paris, {blank} is the capital of France, is beautiful. (non-defining)"],
        answers: ["defining", "non-defining", "that", "which"],
        options: [["defining", "non-defining", "main", "dependent"], ["non-defining", "defining", "main", "dependent"], ["that", "which", "who", "whom"], ["which", "that", "who", "whom"]]
    },
    {
        rule: "Non-Defining Relative Clauses", category: "relative-clauses", level: "high",
        meaning: "Non-defining relative clauses add extra information and are set off by commas. Cannot use 'that'.",
        sentences: ["My brother, {blank} lives in Canada, is visiting next week.", "The Eiffel Tower, {blank} was built in 1889, is a famous landmark.", "Our teacher, {blank} name is Mrs. Smith, is retiring.", "Tokyo, {blank} I visited last year, is an amazing city."],
        answers: ["who", "which", "whose", "which"],
        options: [["who", "that", "which", "whom"], ["which", "that", "who", "whom"], ["whose", "who", "which", "that"], ["which", "that", "who", "where"]]
    },
    {
        rule: "Omitting the Relative Pronoun", category: "relative-clauses", level: "high",
        meaning: "In defining relative clauses, the relative pronoun can be omitted when it is the object of the clause.",
        sentences: ["The film {blank} we saw was great. (pronoun can be omitted)", "The man {blank} called you is my uncle. (pronoun cannot be omitted)", "The cake {blank} she made was delicious. (pronoun can be omitted)", "The person {blank} broke the vase must pay for it. (pronoun cannot be omitted)"],
        answers: ["(that)", "who", "(that)", "who"],
        options: [["(that)", "who", "which", "whose"], ["who", "(that)", "which", "whose"], ["(that)", "who", "which", "whose"], ["who", "(that)", "which", "whose"]]
    },
    {
        rule: "Relative Clauses with Prepositions", category: "relative-clauses", level: "professional",
        meaning: "In formal English, prepositions come before the relative pronoun. In informal English, they come at the end.",
        sentences: ["The company for {blank} she works is international.", "The topic about {blank} he spoke was fascinating.", "The person with {blank} I traveled was very friendly.", "The house in {blank} they live is very old."],
        answers: ["which", "which", "whom", "which"],
        options: [["which", "that", "who", "whom"], ["which", "that", "who", "whom"], ["whom", "who", "which", "that"], ["which", "that", "who", "whom"]]
    },
    {
        rule: "Relative Clauses with Quantifiers", category: "relative-clauses", level: "professional",
        meaning: "Quantifiers like 'some of', 'many of', 'both of' can precede 'whom/which' in non-defining clauses.",
        sentences: ["He has two sisters, both of {blank} are doctors.", "She wrote several books, some of {blank} became bestsellers.", "There were many students, most of {blank} passed the exam.", "He has many friends, few of {blank} he trusts completely."],
        answers: ["whom", "which", "whom", "whom"],
        options: [["whom", "who", "which", "that"], ["which", "who", "whom", "that"], ["whom", "who", "which", "that"], ["whom", "who", "which", "that"]]
    },
    {
        rule: "Verbs Followed by Gerund", category: "gerunds-infinitives", level: "middle",
        meaning: "Some verbs are followed by the gerund (-ing): enjoy, avoid, mind, suggest, finish, etc.",
        sentences: ["I enjoy {blank} in the rain.", "He avoided {blank} the difficult question.", "I can't stand {blank} in long queues.", "She suggested {blank} to the cinema."],
        answers: ["walking", "answering", "waiting", "going"],
        options: [["walking", "to walk", "walk", "walked"], ["answering", "to answer", "answer", "answered"], ["waiting", "to wait", "wait", "waited"], ["going", "to go", "go", "gone"]]
    },
    {
        rule: "Verbs Followed by Infinitive", category: "gerunds-infinitives", level: "middle",
        meaning: "Some verbs are followed by the to-infinitive: decide, hope, want, plan, agree, etc.",
        sentences: ["She decided {blank} abroad for her studies.", "They hope {blank} the competition.", "I want {blank} a new language.", "He agreed {blank} me with the project."],
        answers: ["to go", "to win", "to learn", "to help"],
        options: [["to go", "going", "go", "gone"], ["to win", "winning", "win", "won"], ["to learn", "learning", "learn", "learned"], ["to help", "helping", "help", "helped"]]
    },
    {
        rule: "Verbs Followed by Both (No Change in Meaning)", category: "gerunds-infinitives", level: "high",
        meaning: "Some verbs can be followed by either gerund or infinitive with no change in meaning: begin, start, continue, like, love, hate, prefer.",
        sentences: ["She started {blank} the piano at age five.", "I like {blank} early in the morning.", "They continued {blank} despite the rain.", "He loves {blank} in the mountains."],
        answers: ["playing", "to wake", "walking", "hiking"],
        options: [["playing", "to play", "play", "played"], ["to wake", "waking", "wake", "woke"], ["walking", "to walk", "walk", "walked"], ["hiking", "to hike", "hike", "hiked"]]
    },
    {
        rule: "Verbs Followed by Both (Change in Meaning)", category: "gerunds-infinitives", level: "high",
        meaning: "Some verbs change meaning depending on whether they're followed by gerund or infinitive: remember, forget, stop, try, regret.",
        sentences: ["I remember {blank} her at the party. (I have a memory of meeting her)", "I remembered {blank} the door. (I didn't forget to lock it)", "He stopped {blank}. (He quit smoking)", "He stopped {blank} a coffee. (He paused in order to buy coffee)"],
        answers: ["meeting", "to lock", "smoking", "to buy"],
        options: [["meeting", "to meet", "meet", "met"], ["to lock", "locking", "lock", "locked"], ["smoking", "to smoke", "smoke", "smoked"], ["to buy", "buying", "buy", "bought"]]
    },
    {
        rule: "Gerund as Subject", category: "gerunds-infinitives", level: "middle",
        meaning: "Gerunds can function as the subject of a sentence.",
        sentences: ["{blank} is good for your health.", "Is {blank} in public difficult for you?", "{blank} too much sugar is unhealthy.", "{blank} a second language opens many doors."],
        answers: ["Swimming", "speaking", "Eating", "Learning"],
        options: [["Swimming", "To swim", "Swim", "Swam"], ["speaking", "to speak", "speak", "spoke"], ["Eating", "To eat", "Eat", "Ate"], ["Learning", "To learn", "Learn", "Learned"]]
    },
    {
        rule: "Gerund after Prepositions", category: "gerunds-infinitives", level: "middle",
        meaning: "After prepositions, always use the gerund (-ing), never the infinitive.",
        sentences: ["She's interested in {blank} medicine.", "He apologized for {blank} late.", "I'm thinking about {blank} my job.", "They're good at {blank} problems."],
        answers: ["studying", "being", "changing", "solving"],
        options: [["studying", "to study", "study", "studied"], ["being", "to be", "be", "been"], ["changing", "to change", "change", "changed"], ["solving", "to solve", "solve", "solved"]]
    },
    {
        rule: "Infinitive of Purpose", category: "gerunds-infinitives", level: "middle",
        meaning: "Use the to-infinitive to express purpose or reason for an action.",
        sentences: ["I went to the store {blank} some milk.", "She studied hard {blank} the exam.", "He called {blank} the appointment.", "They saved money {blank} a house."],
        answers: ["to buy", "to pass", "to cancel", "to buy"],
        options: [["to buy", "buying", "for buying", "buy"], ["to pass", "passing", "for passing", "pass"], ["to cancel", "canceling", "for canceling", "cancel"], ["to buy", "buying", "for buying", "buy"]]
    },
    {
        rule: "Make, Let, Help + Base Form", category: "gerunds-infinitives", level: "middle",
        meaning: "After 'make', 'let', and sometimes 'help', use the base form (bare infinitive), not the to-infinitive.",
        sentences: ["She made him {blank} his room.", "Let me {blank} you with that.", "The teacher let them {blank} early.", "She helped me {blank} the answer."],
        answers: ["clean", "help", "leave", "find"],
        options: [["clean", "to clean", "cleaning", "cleaned"], ["help", "to help", "helping", "helped"], ["leave", "to leave", "leaving", "left"], ["find", "to find", "finding", "found"]]
    },
    {
        rule: "Adjective + Infinitive", category: "gerunds-infinitives", level: "middle",
        meaning: "Many adjectives are followed by the to-infinitive: happy to, glad to, difficult to, easy to.",
        sentences: ["I'm happy {blank} you.", "This problem is difficult {blank}.", "She was surprised {blank} him there.", "It's important {blank} regular exercise."],
        answers: ["to meet", "to solve", "to see", "to get"],
        options: [["to meet", "meeting", "meet", "met"], ["to solve", "solving", "solve", "solved"], ["to see", "seeing", "see", "saw"], ["to get", "getting", "get", "got"]]
    },
    {
        rule: "Verb + Object + Infinitive", category: "gerunds-infinitives", level: "middle",
        meaning: "Some verbs take object + to-infinitive: ask, tell, want, expect, advise, encourage.",
        sentences: ["She asked me {blank} her.", "I want you {blank} careful.", "He told them {blank} quiet.", "The teacher encouraged us {blank} harder."],
        answers: ["to help", "to be", "to be", "to study"],
        options: [["to help", "helping", "help", "helped"], ["to be", "being", "be", "been"], ["to be", "being", "be", "been"], ["to study", "studying", "study", "studied"]]
    },
    {
        rule: "Comparative Adjectives: -er vs more", category: "comparatives", level: "elementary",
        meaning: "One-syllable adjectives add -er; adjectives with 2+ syllables use 'more'. Two-syllable adjectives ending in -y change to -ier.",
        sentences: ["Tokyo is {blank} than London.", "She is {blank} than her sister.", "This test is {blank} than the last one.", "He is {blank} than his brother."],
        answers: ["more expensive", "taller", "easier", "stronger"],
        options: [["more expensive", "expensiver", "most expensive", "the most expensive"], ["taller", "more tall", "tallest", "most tall"], ["easier", "more easy", "easiest", "most easy"], ["stronger", "more strong", "strongest", "most strong"]]
    },
    {
        rule: "Superlative Adjectives", category: "comparatives", level: "elementary",
        meaning: "One-syllable adjectives add -est; adjectives with 2+ syllables use 'most'. Always use 'the' before superlatives.",
        sentences: ["She is the {blank} student in the class.", "It was the {blank} day of the year.", "He is the {blank} person I know.", "This is the {blank} book I've ever read."],
        answers: ["smartest", "hottest", "most generous", "most interesting"],
        options: [["smartest", "smarter", "most smart", "more smart"], ["hottest", "hotter", "most hot", "more hot"], ["most generous", "generousest", "more generous", "generouser"], ["most interesting", "interestingest", "more interesting", "interestinger"]]
    },
    {
        rule: "Comparative Adverbs", category: "comparatives", level: "middle",
        meaning: "Most adverbs form comparatives with 'more' and superlatives with 'most'. A few short adverbs add -er/-est.",
        sentences: ["He drives {blank} than his brother.", "She speaks {blank} than anyone in the class.", "He works {blank} than his colleagues.", "She runs {blank} than her friends."],
        answers: ["more carefully", "more fluently", "harder", "faster"],
        options: [["more carefully", "carefuller", "most carefully", "carefullier"], ["more fluently", "fluenter", "most fluently", "fluentlier"], ["harder", "more hard", "hardest", "more harder"], ["faster", "more fast", "fastest", "more faster"]]
    },
    {
        rule: "Irregular Comparatives and Superlatives", category: "comparatives", level: "middle",
        meaning: "Some adjectives/adverbs have irregular comparative and superlative forms: good\u2192better\u2192best, bad\u2192worse\u2192worst.",
        sentences: ["Her English is {blank} than mine.", "This is the {blank} movie I've ever seen.", "I feel {blank} today than yesterday.", "He is the {blank} player on the team."],
        answers: ["better", "worst", "worse", "best"],
        options: [["better", "gooder", "more good", "best"], ["worst", "baddest", "most bad", "worse"], ["worse", "badder", "more bad", "worst"], ["best", "goodest", "most good", "better"]]
    },
    {
        rule: "As...As Comparisons", category: "comparatives", level: "middle",
        meaning: "Use 'as + adjective/adverb + as' for equal comparisons. Use 'not as...as' for unequal comparisons.",
        sentences: ["She is {blank} tall as her mother.", "This book isn't {blank} interesting as that one.", "He runs {blank} fast as a professional athlete.", "The exam was not {blank} difficult as I expected."],
        answers: ["as", "as", "as", "as"],
        options: [["as", "so", "more", "very"], ["as", "so", "more", "very"], ["as", "so", "more", "very"], ["as", "so", "more", "very"]]
    },
    {
        rule: "The...the... Comparatives", category: "comparatives", level: "high",
        meaning: "'The + comparative, the + comparative' shows that two things change together.",
        sentences: ["The {blank} you practice, the better you get.", "The {blank} the car, the faster it goes.", "The harder you work, the {blank} you earn.", "The {blank} the weather, the happier I am."],
        answers: ["more", "more powerful", "more", "warmer"],
        options: [["more", "most", "much", "many"], ["more powerful", "powerfuler", "most powerful", "powerful"], ["more", "most", "much", "many"], ["warmer", "more warm", "warmest", "most warm"]]
    },
    {
        rule: "Less and Least", category: "comparatives", level: "middle",
        meaning: "Use 'less' for comparative and 'least' for superlative to express a lower degree.",
        sentences: ["This route is {blank} direct than the highway.", "He is the {blank} experienced member of the team.", "This film was {blank} entertaining than the last one.", "She is the {blank} likely candidate to win."],
        answers: ["less", "least", "less", "least"],
        options: [["less", "least", "fewer", "fewest"], ["least", "less", "fewer", "fewest"], ["less", "least", "fewer", "fewest"], ["least", "less", "fewer", "fewest"]]
    },
    {
        rule: "Modifying Comparatives", category: "comparatives", level: "high",
        meaning: "Comparatives can be modified by: much, far, a lot, a bit, slightly, considerably, etc.",
        sentences: ["She is {blank} older than she looks.", "This exercise is {blank} easier than the last one.", "He drives {blank} more carefully than he used to.", "The new model is {blank} better than the previous one."],
        answers: ["much", "slightly", "far", "considerably"],
        options: [["much", "very", "more", "most"], ["slightly", "very", "more", "most"], ["far", "very", "more", "most"], ["considerably", "very", "more", "most"]]
    },
    {
        rule: "Fewer vs Less", category: "comparatives", level: "middle",
        meaning: "Use 'fewer' with countable nouns and 'less' with uncountable nouns.",
        sentences: ["There are {blank} students in this class than last year.", "I have {blank} free time than before.", "She makes {blank} mistakes than she used to.", "{blank} money was spent this quarter."],
        answers: ["fewer", "less", "fewer", "Less"],
        options: [["fewer", "less", "lesser", "least"], ["less", "fewer", "lesser", "least"], ["fewer", "less", "lesser", "least"], ["Less", "Fewer", "Lesser", "Least"]]
    },
    {
        rule: "Double Comparatives", category: "comparatives", level: "high",
        meaning: "Double comparatives (e.g., 'more and more') show something is increasing or changing.",
        sentences: ["The weather is getting {blank} and colder.", "She is becoming {blank} and more confident.", "The city is growing {blank} and bigger.", "Life is getting {blank} and more expensive."],
        answers: ["colder", "more", "bigger", "more"],
        options: [["colder", "more cold", "coldest", "most cold"], ["more", "most", "much", "many"], ["bigger", "more big", "biggest", "most big"], ["more", "most", "much", "many"]]
    },
    {
        rule: "Subject-Verb Agreement: Collective Nouns", category: "subject-verb-agreement", level: "middle",
        meaning: "Collective nouns (team, family, committee) can take singular or plural verbs depending on meaning.",
        sentences: ["The news {blank} shocking.", "The committee {blank} divided on the issue.", "The team {blank} playing well this season.", "The audience {blank} enjoying the performance."],
        answers: ["was", "was", "is", "is"],
        options: [["was", "were", "are", "have been"], ["was", "were", "are", "have"], ["is", "are", "was", "were"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Subject-Verb Agreement: Neither/Either", category: "subject-verb-agreement", level: "high",
        meaning: "With 'neither...nor' and 'either...or', the verb agrees with the nearest subject.",
        sentences: ["Neither the teacher nor the students {blank} happy.", "Either the manager or her assistants {blank} coming.", "Neither my brothers nor my sister {blank} here.", "Either she or they {blank} responsible."],
        answers: ["were", "are", "is", "are"],
        options: [["were", "was", "is", "has been"], ["are", "is", "was", "has been"], ["is", "are", "were", "have been"], ["are", "is", "was", "has been"]]
    },
    {
        rule: "Subject-Verb Agreement: Everyone/Everybody", category: "subject-verb-agreement", level: "middle",
        meaning: "Indefinite pronouns (everyone, everybody, someone, nobody, each, every) take singular verbs.",
        sentences: ["Everyone in the class {blank} passed the exam.", "Nobody {blank} the answer.", "Each of the students {blank} a textbook.", "Everything {blank} ready for the party."],
        answers: ["has", "knows", "has", "is"],
        options: [["has", "have", "are", "were"], ["knows", "know", "are knowing", "were knowing"], ["has", "have", "are having", "were having"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Subject-Verb Agreement: Uncountable Nouns", category: "subject-verb-agreement", level: "middle",
        meaning: "Uncountable nouns always take singular verbs: information, advice, furniture, news, money, etc.",
        sentences: ["The information {blank} very useful.", "The furniture {blank} expensive.", "His advice {blank} always helpful.", "The equipment {blank} been upgraded."],
        answers: ["is", "is", "is", "has"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["has", "have", "is", "are"]]
    },
    {
        rule: "Subject-Verb Agreement: There is/There are", category: "subject-verb-agreement", level: "elementary",
        meaning: "Use 'there is' with singular/uncountable nouns and 'there are' with plural nouns.",
        sentences: ["There {blank} a book on the table.", "There {blank} many students in the classroom.", "There {blank} some milk in the fridge.", "There {blank} several reasons for this decision."],
        answers: ["is", "are", "is", "are"],
        options: [["is", "are", "was", "were"], ["are", "is", "was", "were"], ["is", "are", "was", "were"], ["are", "is", "was", "were"]]
    },
    {
        rule: "Subject-Verb Agreement: Compound Subjects", category: "subject-verb-agreement", level: "middle",
        meaning: "Compound subjects joined by 'and' usually take plural verbs. Exceptions: when the two items form a single concept.",
        sentences: ["Bread and butter {blank} my favorite breakfast.", "Tom and Jerry {blank} a famous cartoon.", "The manager and the employees {blank} at the meeting.", "Fish and chips {blank} a popular dish in England."],
        answers: ["is", "is", "were", "is"],
        options: [["is", "are", "was", "were"], ["is", "are", "was", "were"], ["were", "was", "is", "are"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Subject-Verb Agreement: Amounts and Distances", category: "subject-verb-agreement", level: "high",
        meaning: "Amounts of money, time periods, and distances take singular verbs when considered as a single unit.",
        sentences: ["Five thousand dollars {blank} a lot of money.", "Three hours {blank} too long to wait.", "Ten miles {blank} a long distance to run.", "Twenty years {blank} a generation."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Subject-Verb Agreement: Prepositional Phrases", category: "subject-verb-agreement", level: "high",
        meaning: "The verb agrees with the subject, not with the noun in a prepositional phrase between them.",
        sentences: ["The list of items {blank} on the table.", "The results of the experiment {blank} surprising.", "The quality of these products {blank} excellent.", "One of my friends {blank} a pilot."],
        answers: ["is", "were", "is", "is"],
        options: [["is", "are", "were", "have been"], ["were", "was", "is", "has been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Subject-Verb Agreement: Relative Clauses", category: "subject-verb-agreement", level: "high",
        meaning: "In relative clauses, the verb agrees with the antecedent of the relative pronoun.",
        sentences: ["She is one of those people who {blank} always happy.", "He is the only one of the students who {blank} passed.", "The books that {blank} on the shelf are mine.", "The boy who {blank} standing there is my nephew."],
        answers: ["are", "has", "are", "is"],
        options: [["are", "is", "was", "has"], ["has", "have", "is", "are"], ["are", "is", "was", "has"], ["is", "are", "was", "has"]]
    },
    {
        rule: "Subject-Verb Agreement: A Number of vs The Number of", category: "subject-verb-agreement", level: "high",
        meaning: "'A number of' takes a plural verb; 'the number of' takes a singular verb.",
        sentences: ["A number of students {blank} absent today.", "The number of complaints {blank} increased.", "A number of issues {blank} been raised.", "The number of participants {blank} still unknown."],
        answers: ["are", "has", "have", "is"],
        options: [["are", "is", "was", "has"], ["has", "have", "is", "are"], ["have", "has", "is", "are"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Reflexive Pronouns", category: "pronouns", level: "elementary",
        meaning: "Reflexive pronouns (myself, yourself, herself, etc.) are used when the subject and object are the same person.",
        sentences: ["She bought {blank} a new dress.", "He hurt {blank} while playing football.", "We enjoyed {blank} at the party.", "I taught {blank} to play guitar."],
        answers: ["herself", "himself", "ourselves", "myself"],
        options: [["herself", "herselves", "her", "hers"], ["himself", "hisself", "him", "his"], ["ourselves", "ourself", "us", "our"], ["myself", "me", "mine", "I"]]
    },
    {
        rule: "Possessive Pronouns vs Possessive Adjectives", category: "pronouns", level: "elementary",
        meaning: "Possessive adjectives (my, your, his, her) come before nouns. Possessive pronouns (mine, yours, his, hers) stand alone.",
        sentences: ["Is this book {blank}?", "The students must do {blank} homework.", "{blank} house is bigger than ours.", "The cat licked {blank} paws."],
        answers: ["yours", "their", "Their", "its"],
        options: [["yours", "your", "you", "you're"], ["their", "they're", "there", "them"], ["Their", "They're", "There", "Them"], ["its", "it's", "it", "their"]]
    },
    {
        rule: "It vs There as Dummy Subjects", category: "pronouns", level: "middle",
        meaning: "'It' is used as a dummy subject for weather, time, and distance. 'There' introduces existence.",
        sentences: ["{blank} is raining outside.", "{blank} are three books on the table.", "{blank} is 10 kilometers to the airport.", "{blank} seems to be a problem."],
        answers: ["It", "There", "It", "There"],
        options: [["It", "There", "This", "That"], ["There", "It", "This", "That"], ["It", "There", "This", "That"], ["There", "It", "This", "That"]]
    },
    {
        rule: "Indefinite Pronouns: Neither, Either, Both", category: "pronouns", level: "middle",
        meaning: "'Neither' = not one and not the other. 'Either' = one or the other. 'Both' = one and the other.",
        sentences: ["{blank} of the options seems suitable.", "You can take {blank} road. They both lead to the town.", "{blank} of the students passed the exam. (They all failed.)", "I'll take {blank} of them. I can't decide on just one."],
        answers: ["Neither", "either", "None", "both"],
        options: [["Neither", "None", "Both", "Either"], ["either", "neither", "both", "each"], ["None", "Neither", "Either", "Both"], ["both", "either", "neither", "none"]]
    },
    {
        rule: "Pronouns: Each Other vs One Another", category: "pronouns", level: "middle",
        meaning: "'Each other' is used for two people; 'one another' is used for more than two, though they are often interchangeable.",
        sentences: ["The two friends helped {blank} with their homework.", "The team members encouraged {blank} before the match.", "They looked at {blank} and smiled.", "All the students respected {blank} in the class."],
        answers: ["each other", "one another", "each other", "one another"],
        options: [["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"], ["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"]]
    },
    {
        rule: "Relative Pronouns Review", category: "pronouns", level: "middle",
        meaning: "Use 'who' for people (subject), 'whom' for people (object), 'which' for things, 'whose' for possession.",
        sentences: ["The person {blank} called you is my neighbor.", "The report {blank} was submitted contained errors.", "The woman {blank} bag was stolen reported it to police.", "The man {blank} I met at the conference was very knowledgeable."],
        answers: ["who", "which", "whose", "whom"],
        options: [["who", "whom", "which", "whose"], ["which", "who", "whom", "whose"], ["whose", "who", "whom", "which"], ["whom", "who", "whose", "which"]]
    },
    {
        rule: "Pronoun-Antecedent Agreement", category: "pronouns", level: "high",
        meaning: "A pronoun must agree in number and gender with the noun it replaces (its antecedent).",
        sentences: ["Every student should bring {blank} own laptop.", "Neither of the men brought {blank} umbrella.", "The company announced {blank} new policy.", "Anyone can express {blank} opinion freely."],
        answers: ["their", "his", "its", "their"],
        options: [["their", "his", "her", "its"], ["his", "their", "its", "her"], ["its", "their", "his", "her"], ["their", "his", "her", "its"]]
    },
    {
        rule: "Object Pronouns", category: "pronouns", level: "elementary",
        meaning: "Object pronouns (me, you, him, her, it, us, them) are used as objects of verbs and prepositions.",
        sentences: ["Can you help {blank}?", "I gave {blank} the book.", "She told {blank} to wait.", "They invited {blank} to the party."],
        answers: ["me", "her", "us", "them"],
        options: [["me", "I", "my", "mine"], ["her", "she", "hers", "herself"], ["us", "we", "our", "ours"], ["them", "they", "their", "theirs"]]
    },
    {
        rule: "Conjunctions: Because, Although, Despite", category: "conjunctions", level: "middle",
        meaning: "'Because' gives a reason (+ clause), 'although' shows contrast (+ clause), 'despite' shows contrast (+ noun/gerund).",
        sentences: ["I went to bed early {blank} I was tired.", "{blank} it was raining, we went for a walk.", "{blank} the bad weather, we enjoyed the trip.", "She passed the exam {blank} she hadn't studied much."],
        answers: ["because", "Although", "Despite", "although"],
        options: [["because", "although", "despite", "however"], ["Although", "Because", "Despite", "So"], ["Despite", "Although", "Because", "However"], ["although", "because", "despite", "however"]]
    },
    {
        rule: "Conjunctions: However, Therefore, Moreover", category: "conjunctions", level: "high",
        meaning: "Conjunctive adverbs connect independent clauses: 'however' (contrast), 'therefore' (result), 'moreover' (addition).",
        sentences: ["She studied hard; {blank}, she failed the exam.", "The evidence was clear; {blank}, the jury found him guilty.", "He is talented; {blank}, he is hardworking.", "The plan was risky; {blank}, they decided to go ahead."],
        answers: ["however", "therefore", "moreover", "nevertheless"],
        options: [["however", "because", "although", "therefore"], ["therefore", "however", "moreover", "nevertheless"], ["moreover", "however", "therefore", "nevertheless"], ["nevertheless", "however", "therefore", "moreover"]]
    },
    {
        rule: "Conjunctions: Until, Unless, While", category: "conjunctions", level: "middle",
        meaning: "'Until' = up to a point in time, 'unless' = if not, 'while' = during the time that.",
        sentences: ["I'll wait {blank} you're ready.", "We won't go {blank} the weather improves.", "{blank} I was cooking, the phone rang.", "Don't leave {blank} I tell you to."],
        answers: ["until", "unless", "While", "until"],
        options: [["until", "unless", "while", "despite"], ["unless", "until", "while", "despite"], ["While", "Until", "Unless", "Despite"], ["until", "unless", "while", "despite"]]
    },
    {
        rule: "Conjunctions: So that, In order to", category: "conjunctions", level: "middle",
        meaning: "'So that' introduces a purpose clause. 'In order to' introduces a purpose infinitive.",
        sentences: ["She whispered {blank} no one would hear.", "He left early {blank} to catch the train.", "I'm saving money {blank} I can buy a car.", "They practiced daily {blank} to improve."],
        answers: ["so that", "in order", "so that", "in order"],
        options: [["so that", "in order", "because", "although"], ["in order", "so that", "because", "although"], ["so that", "in order", "because", "although"], ["in order", "so that", "because", "although"]]
    },
    {
        rule: "Conjunctions: Both...and, Either...or, Neither...nor", category: "conjunctions", level: "middle",
        meaning: "Correlative conjunctions work in pairs to connect balanced elements.",
        sentences: ["{blank} Tom and Jerry came to the party.", "You can have {blank} tea or coffee.", "{blank} the teacher nor the students knew the answer.", "She is {blank} intelligent and hardworking."],
        answers: ["Both", "either", "Neither", "both"],
        options: [["Both", "Either", "Neither", "Not only"], ["either", "neither", "both", "not only"], ["Neither", "Either", "Both", "Not only"], ["both", "either", "neither", "not only"]]
    },
    {
        rule: "Conjunctions: Not only...but also", category: "conjunctions", level: "high",
        meaning: "'Not only...but also' emphasizes two elements. When 'not only' begins a sentence, the clause is inverted.",
        sentences: ["She is {blank} beautiful but also intelligent.", "Not only {blank} he speak French, but he also speaks Chinese.", "{blank} only did she win, but she also broke the record.", "He {blank} only finished the race but also set a new record."],
        answers: ["not only", "does", "Not", "not"],
        options: [["not only", "both", "either", "neither"], ["does", "did", "is", "has"], ["Not", "Both", "Either", "Neither"], ["not", "both", "either", "neither"]]
    },
    {
        rule: "Conjunctions: Whereas, While (Contrast)", category: "conjunctions", level: "high",
        meaning: "'Whereas' and 'while' (in contrast meaning) compare two different facts or situations.",
        sentences: ["She is very outgoing, {blank} her sister is quite shy.", "Tom likes sports, {blank} his brother prefers music.", "{blank} I enjoy cooking, my husband prefers eating out.", "She is patient, {blank} he is quick-tempered."],
        answers: ["whereas", "while", "While", "whereas"],
        options: [["whereas", "because", "although", "despite"], ["while", "because", "although", "despite"], ["While", "Because", "Although", "Despite"], ["whereas", "because", "although", "despite"]]
    },
    {
        rule: "Conjunctions: As soon as, By the time, Once", category: "conjunctions", level: "middle",
        meaning: "Time conjunctions: 'as soon as' = immediately when, 'by the time' = before, 'once' = when/after.",
        sentences: ["I'll call you {blank} I arrive.", "By the time we got there, the show {blank} started.", "{blank} you understand the rules, the game is easy.", "She left {blank} the movie ended."],
        answers: ["as soon as", "had", "Once", "as soon as"],
        options: [["as soon as", "by the time", "once", "although"], ["had", "has", "have", "was"], ["Once", "Although", "Because", "Despite"], ["as soon as", "by the time", "once", "although"]]
    },
    {
        rule: "Much, Many, A lot of", category: "quantifiers", level: "elementary",
        meaning: "'Much' with uncountable nouns (negative/questions), 'many' with countable plural, 'a lot of' with both.",
        sentences: ["There isn't {blank} milk left in the fridge.", "How {blank} books have you read this year?", "She has {blank} of friends.", "I don't have {blank} time today."],
        answers: ["much", "many", "a lot", "much"],
        options: [["much", "many", "few", "several"], ["many", "much", "few", "little"], ["a lot", "much", "many", "few"], ["much", "many", "few", "several"]]
    },
    {
        rule: "Few, A Few, Little, A Little", category: "quantifiers", level: "middle",
        meaning: "'Few/a few' with countable nouns; 'little/a little' with uncountable. 'A few/a little' = some (positive); 'few/little' = not much (negative).",
        sentences: ["We have {blank} time. We need to hurry. (not enough)", "There are {blank} books on the shelf. (some)", "She speaks {blank} French. (some)", "There are {blank} options available. (not many)"],
        answers: ["little", "a few", "a little", "few"],
        options: [["little", "few", "a little", "a few"], ["a few", "a little", "much", "less"], ["a little", "a few", "much", "many"], ["few", "little", "a few", "a little"]]
    },
    {
        rule: "Most, Most of, All, All of", category: "quantifiers", level: "middle",
        meaning: "'Most/all' + noun (general). 'Most of/all of' + the/this/my + noun (specific).",
        sentences: ["{blank} students passed the exam. (in general)", "I've read {blank} of the books on the list.", "She ate {blank} the cake.", "{blank} children like ice cream."],
        answers: ["Most", "most", "all", "All"],
        options: [["Most", "Much", "Every", "Each"], ["most", "much", "every", "each"], ["all", "most", "every", "each"], ["All", "Much", "Every", "Each"]]
    },
    {
        rule: "Each vs Every", category: "quantifiers", level: "middle",
        meaning: "'Each' emphasizes individuals; 'every' emphasizes the group as a whole. Both take singular verbs.",
        sentences: ["{blank} student received a certificate.", "She visits her parents {blank} weekend.", "{blank} of the rooms has its own bathroom.", "I read {blank} single word of the contract."],
        answers: ["Each", "every", "Each", "every"],
        options: [["Each", "Every", "All", "Both"], ["every", "each", "all", "both"], ["Each", "Every", "All", "Both"], ["every", "each", "all", "both"]]
    },
    {
        rule: "Some vs Any", category: "quantifiers", level: "elementary",
        meaning: "'Some' in positive statements and offers/requests. 'Any' in negative statements and questions.",
        sentences: ["I'd like {blank} water, please.", "Do you have {blank} questions?", "There aren't {blank} eggs in the fridge.", "Would you like {blank} coffee?"],
        answers: ["some", "any", "any", "some"],
        options: [["some", "any", "no", "every"], ["any", "some", "no", "every"], ["any", "some", "no", "every"], ["some", "any", "no", "every"]]
    },
    {
        rule: "No, None, None of", category: "quantifiers", level: "middle",
        meaning: "'No' + noun, 'none' stands alone, 'none of' + the/my/this + noun.",
        sentences: ["There are {blank} tickets left.", "{blank} of the students were absent.", "I have {blank} idea what you're talking about.", "{blank} of this makes sense."],
        answers: ["no", "None", "no", "None"],
        options: [["no", "none", "any", "some"], ["None", "No", "Any", "Some"], ["no", "none", "any", "some"], ["None", "No", "Any", "Some"]]
    },
    {
        rule: "Enough vs Too", category: "quantifiers", level: "middle",
        meaning: "'Enough' = sufficient (adjective/adverb + enough; enough + noun). 'Too' = more than needed/wanted.",
        sentences: ["She is old {blank} to drive.", "There are {blank} many people in the room.", "I don't have {blank} money to buy it.", "The coffee is {blank} hot to drink."],
        answers: ["enough", "too", "enough", "too"],
        options: [["enough", "too", "very", "quite"], ["too", "enough", "very", "quite"], ["enough", "too", "very", "quite"], ["too", "enough", "very", "quite"]]
    },
    {
        rule: "Several, A Number of, Plenty of", category: "quantifiers", level: "middle",
        meaning: "'Several' = more than a few. 'A number of' = many. 'Plenty of' = more than enough.",
        sentences: ["I've been there {blank} times.", "{blank} of people attended the event.", "We have {blank} of time. Don't rush.", "She has {blank} years of experience."],
        answers: ["several", "A number", "plenty", "several"],
        options: [["several", "much", "little", "few"], ["A number", "A little", "Much", "Few"], ["plenty", "much", "few", "little"], ["several", "much", "little", "few"]]
    },
    {
        rule: "Word Formation: Noun Suffixes", category: "word-formation", level: "high",
        meaning: "Common noun suffixes: -tion/-sion (action), -ment (result), -ness (quality), -ity (state), -er/-or (person).",
        sentences: ["The {blank} of the project was impressive.", "She handled the situation very {blank}.", "His {blank} to the team was invaluable.", "The {blank} between the two products is significant."],
        answers: ["completion", "professionally", "contribution", "difference"],
        options: [["completion", "complete", "completely", "completing"], ["professionally", "professional", "profession", "professionalize"], ["contribution", "contribute", "contributing", "contributive"], ["difference", "different", "differently", "differentiate"]]
    },
    {
        rule: "Word Formation: Adjective Suffixes", category: "word-formation", level: "high",
        meaning: "Common adjective suffixes: -ful (full of), -less (without), -ous (having quality), -able/-ible (can be), -al (relating to).",
        sentences: ["The view from the top was {blank}.", "It was a {blank} mistake. Nothing was harmed.", "The new policy is very {blank} for the company.", "He gave a very {blank} speech at the conference."],
        answers: ["breathtaking", "harmless", "beneficial", "influential"],
        options: [["breathtaking", "breathtaken", "breathtake", "breathtaker"], ["harmless", "harmful", "harming", "harmed"], ["beneficial", "benefit", "beneficially", "benefiting"], ["influential", "influence", "influencing", "influenced"]]
    },
    {
        rule: "Word Formation: Adverb Formation", category: "word-formation", level: "middle",
        meaning: "Most adverbs are formed by adding -ly to an adjective. Irregular: good\u2192well, fast\u2192fast, hard\u2192hard.",
        sentences: ["She sings {blank}. (beautiful)", "He speaks English {blank}. (fluent)", "The children played {blank} in the garden. (happy)", "She performed {blank} in the exam. (good)"],
        answers: ["beautifully", "fluently", "happily", "well"],
        options: [["beautifully", "beautiful", "beauty", "beautify"], ["fluently", "fluent", "fluence", "fluency"], ["happily", "happy", "happiness", "happier"], ["well", "good", "goodly", "better"]]
    },
    {
        rule: "Word Formation: Negative Prefixes", category: "word-formation", level: "middle",
        meaning: "Common negative prefixes: un-, in-/im-/il-/ir-, dis-, mis-, non-.",
        sentences: ["His behavior was completely {blank}. (accept)", "I {blank} with your decision. (agree)", "It's {blank} to park here. (legal)", "She felt very {blank} about the results. (happy)"],
        answers: ["unacceptable", "disagree", "illegal", "unhappy"],
        options: [["unacceptable", "inacceptable", "disacceptable", "nonacceptable"], ["disagree", "unagree", "misagree", "nonagree"], ["illegal", "unlegal", "dislegal", "nonlegal"], ["unhappy", "inhappy", "dishappy", "nonhappy"]]
    },
    {
        rule: "Word Formation: Verb Suffixes", category: "word-formation", level: "high",
        meaning: "Common verb suffixes: -ize/-ise (make), -ify (make), -en (make), -ate (make).",
        sentences: ["They plan to {blank} the process. (modern)", "We need to {blank} our approach. (simple)", "The company aims to {blank} its workforce. (diverse)", "The new law will {blank} businesses to report emissions. (obligation)"],
        answers: ["modernize", "simplify", "diversify", "obligate"],
        options: [["modernize", "modernise", "modern", "modernity"], ["simplify", "simplize", "simple", "simplicity"], ["diversify", "diversize", "diverse", "diversity"], ["obligate", "obligize", "obligatory", "obligation"]]
    },
    {
        rule: "Word Formation: Compound Nouns", category: "word-formation", level: "middle",
        meaning: "Compound nouns are formed by combining two words: noun+noun, adjective+noun, verb+noun, etc.",
        sentences: ["The {blank} was delayed by two hours.", "She left her {blank} at the office.", "There's a {blank} near the school.", "I need to find a {blank} for tomorrow."],
        answers: ["flight", "handbag", "playground", "babysitter"],
        options: [["flight", "fly", "flying", "flown"], ["handbag", "handsbag", "hand-bags", "hands-bag"], ["playground", "playingground", "play-ground", "plays-ground"], ["babysitter", "baby-sit", "babysiting", "babysited"]]
    },
    {
        rule: "Word Formation: Abstract Nouns from Adjectives", category: "word-formation", level: "college",
        meaning: "Abstract nouns from adjectives: happy\u2192happiness, wise\u2192wisdom, free\u2192freedom, strong\u2192strength.",
        sentences: ["The {blank} of the team impressed everyone. (strong)", "Her {blank} in making decisions is remarkable. (wise)", "They fought for {blank} and equality. (free)", "The {blank} of the situation was overwhelming. (serious)"],
        answers: ["strength", "wisdom", "freedom", "seriousness"],
        options: [["strength", "strong", "strongly", "strengthen"], ["wisdom", "wise", "wisely", "wisen"], ["freedom", "free", "freely", "freeness"], ["seriousness", "serious", "seriously", "seriousity"]]
    },
    {
        rule: "Word Formation: Person Nouns", category: "word-formation", level: "middle",
        meaning: "Nouns for people: -er/-or (doer), -ist (specialist), -ian (profession), -ee (receiver of action).",
        sentences: ["The {blank} painted a beautiful portrait. (art)", "The {blank} was interviewed after the match. (manage)", "The {blank} received the award on stage. (employ)", "The {blank} examined the patient carefully. (physics)"],
        answers: ["artist", "manager", "employee", "physician"],
        options: [["artist", "arter", "artisan", "artful"], ["manager", "managist", "managee", "managerial"], ["employee", "employer", "employst", "employian"], ["physician", "physicist", "physic", "physical"]]
    },
    {
        rule: "Word Order: Adjective Order", category: "word-order", level: "high",
        meaning: "English adjectives follow the order: opinion, size, age, shape, color, origin, material, purpose + noun.",
        sentences: ["She wore a {blank} dress.", "He drives a {blank} car.", "They live in a {blank} house.", "I bought a {blank} table."],
        answers: ["beautiful red silk", "big old German", "lovely little old", "small round wooden"],
        options: [["beautiful red silk", "red beautiful silk", "silk red beautiful", "red silk beautiful"], ["big old German", "old big German", "German big old", "German old big"], ["lovely little old", "old little lovely", "little old lovely", "old lovely little"], ["small round wooden", "wooden round small", "round small wooden", "wooden small round"]]
    },
    {
        rule: "Word Order: Adverb Placement", category: "word-order", level: "middle",
        meaning: "Adverbs of frequency go before the main verb but after 'be'. Adverbs of manner usually go at the end.",
        sentences: ["She {blank} goes to the gym.", "He {blank} late for class.", "They completed the project {blank}.", "I {blank} understood the question."],
        answers: ["always", "is always", "successfully", "completely"],
        options: [["always", "always she", "she always goes", "goes always"], ["is always", "always is", "is he always", "always he is"], ["successfully", "successful", "success", "succeed"], ["completely", "complete", "completion", "completing"]]
    },
    {
        rule: "Word Order: Indirect Questions", category: "word-order", level: "middle",
        meaning: "Indirect questions use statement word order (subject + verb), not question word order.",
        sentences: ["Could you tell me where the station {blank}?", "Do you know what time the bank {blank}?", "I wonder if she {blank} coming to the party.", "Can you tell me how much this {blank}?"],
        answers: ["is", "opens", "is", "costs"],
        options: [["is", "is it", "it is", "does it"], ["opens", "does open", "does it open", "it opens"], ["is", "is she", "she is", "does she"], ["costs", "does cost", "does it cost", "it costs"]]
    },
    {
        rule: "Word Order: Negative Inversion", category: "word-order", level: "professional",
        meaning: "When negative adverbs begin a sentence, the subject and auxiliary verb are inverted.",
        sentences: ["Never {blank} I seen such a beautiful sight.", "Rarely {blank} she make mistakes.", "Not only {blank} he pass the exam, but he got top marks.", "Seldom {blank} we have such good weather."],
        answers: ["have", "does", "did", "do"],
        options: [["have", "had", "has", "do"], ["does", "did", "do", "is"], ["did", "does", "do", "has"], ["do", "did", "does", "have"]]
    },
    {
        rule: "Word Order: So/Neither Inversion", category: "word-order", level: "middle",
        meaning: "'So + auxiliary + subject' for agreement with positive statements. 'Neither + auxiliary + subject' for agreement with negative statements.",
        sentences: ["'I love chocolate.' 'So {blank} I.'", "'She can't swim.' 'Neither {blank} I.'", "'They have been to Paris.' 'So {blank} we.'", "'He doesn't like spiders.' 'Neither {blank} she.'"],
        answers: ["do", "can", "have", "does"],
        options: [["do", "am", "have", "can"], ["can", "do", "am", "have"], ["have", "do", "am", "can"], ["does", "do", "is", "has"]]
    },
    {
        rule: "Present Continuous for Annoying Habits", category: "tenses", level: "middle",
        meaning: "Use present continuous with 'always' to express annoyance about repeated actions.",
        sentences: ["She is always {blank} about her problems.", "He is constantly {blank} his phone in class.", "They are always {blank} noise late at night.", "You are forever {blank} your keys."],
        answers: ["complaining", "checking", "making", "losing"],
        options: [["complaining", "complain", "complained", "complains"], ["checking", "check", "checked", "checks"], ["making", "make", "made", "makes"], ["losing", "lose", "lost", "loses"]]
    },
    {
        rule: "Stative Verbs", category: "tenses", level: "middle",
        meaning: "Stative verbs (know, believe, own, love, etc.) are not normally used in continuous tenses.",
        sentences: ["I {blank} what you mean.", "She {blank} a large house in the country.", "He {blank} in ghosts.", "They {blank} each other very much."],
        answers: ["understand", "owns", "believes", "love"],
        options: [["understand", "am understanding", "understood", "have understood"], ["owns", "is owning", "owned", "has owned"], ["believes", "is believing", "believed", "has believed"], ["love", "are loving", "loved", "have loved"]]
    },
    {
        rule: "Modal Verbs: Deduction about Present", category: "modals", level: "high",
        meaning: "Must = certain, may/might/could = possible, can't = impossible (present deductions).",
        sentences: ["She {blank} be at work. It's Monday. (certain)", "He {blank} be ill. He doesn't look well. (possible)", "They {blank} be French. They're speaking German. (impossible)", "She {blank} be the new manager. I'm not sure. (possible)"],
        answers: ["must", "might", "can't", "could"],
        options: [["must", "might", "can't", "could"], ["might", "must", "can't", "could"], ["can't", "must", "might", "could"], ["could", "must", "can't", "might"]]
    },
    {
        rule: "Conditional: In Case", category: "conditionals", level: "middle",
        meaning: "'In case' = as a precaution / because something might happen. Different from 'if'.",
        sentences: ["Take an umbrella {blank} it rains.", "I'll give you my number {blank} you need to contact me.", "She keeps a spare key {blank} she loses hers.", "Bring some food {blank} you get hungry."],
        answers: ["in case", "in case", "in case", "in case"],
        options: [["in case", "if", "unless", "when"], ["in case", "if", "unless", "when"], ["in case", "if", "unless", "when"], ["in case", "if", "unless", "when"]]
    },
    {
        rule: "Passive Voice: Perfect Forms", category: "passive", level: "high",
        meaning: "Perfect passive forms combine perfect tenses with passive voice.",
        sentences: ["The bridge has {blank} repaired recently.", "The suspect had {blank} arrested before we arrived.", "The book will have {blank} published by December.", "Several errors have {blank} found in the report."],
        answers: ["been", "been", "been", "been"],
        options: [["been", "being", "be", "is"], ["been", "being", "be", "was"], ["been", "being", "be", "is"], ["been", "being", "be", "are"]]
    },
    {
        rule: "Articles: The with Inventions and Species", category: "articles", level: "high",
        meaning: "Use 'the' when referring to inventions and species in general.",
        sentences: ["{blank} telephone was invented by Alexander Graham Bell.", "{blank} blue whale is the largest animal on Earth.", "{blank} computer has revolutionized the way we work.", "{blank} tiger is an endangered species."],
        answers: ["The", "The", "The", "The"],
        options: [["The", "A", "An", "\u2014"], ["The", "A", "An", "\u2014"], ["The", "A", "An", "\u2014"], ["The", "A", "An", "\u2014"]]
    },
    {
        rule: "Prepositions: At the End of Sentences", category: "prepositions", level: "high",
        meaning: "In informal English, prepositions often come at the end of questions and relative clauses.",
        sentences: ["What are you looking {blank}?", "Who are you waiting {blank}?", "Which hotel did you stay {blank}?", "What are you thinking {blank}?"],
        answers: ["for", "for", "at", "about"],
        options: [["for", "at", "to", "of"], ["for", "at", "to", "of"], ["at", "in", "for", "to"], ["about", "of", "for", "at"]]
    },
    {
        rule: "Gerund vs Infinitive: Try", category: "gerunds-infinitives", level: "high",
        meaning: "'Try + gerund' = experiment with something. 'Try + infinitive' = make an effort to do something.",
        sentences: ["Try {blank} the computer. It might work. (experiment)", "I'm trying {blank} healthier. (make an effort)", "Try {blank} olive oil instead of butter. (experiment)", "She tried {blank} him, but his phone was off. (effort)"],
        answers: ["restarting", "to eat", "using", "to call"],
        options: [["restarting", "to restart", "restart", "restarted"], ["to eat", "eating", "eat", "eaten"], ["using", "to use", "use", "used"], ["to call", "calling", "call", "called"]]
    },
    {
        rule: "Farther vs Further", category: "comparatives", level: "high",
        meaning: "'Farther' refers to physical distance. 'Further' refers to additional or abstract degree (also used for distance).",
        sentences: ["The station is {blank} than I thought.", "We need to discuss this {blank}.", "How much {blank} do we have to drive?", "Please contact us if you need {blank} information."],
        answers: ["farther", "further", "farther", "further"],
        options: [["farther", "further", "farthest", "furthest"], ["further", "farther", "furthest", "farthest"], ["farther", "further", "farthest", "furthest"], ["further", "farther", "furthest", "farthest"]]
    },
    {
        rule: "Subject-Verb Agreement: Percentages and Fractions", category: "subject-verb-agreement", level: "professional",
        meaning: "With percentages and fractions, the verb agrees with the noun after 'of'.",
        sentences: ["Fifty percent of the students {blank} passed.", "Half of the cake {blank} been eaten.", "Two-thirds of the work {blank} complete.", "Ninety percent of the water {blank} contaminated."],
        answers: ["have", "has", "is", "was"],
        options: [["have", "has", "is", "was"], ["has", "have", "is", "was"], ["is", "are", "was", "were"], ["was", "were", "is", "are"]]
    },
    {
        rule: "Word Formation: Collocations", category: "word-formation", level: "college",
        meaning: "Certain words naturally go together in English (collocations). Using the right combination sounds natural.",
        sentences: ["She made a {blank} decision about her career.", "They reached a {blank} agreement after hours of talks.", "He paid close {blank} to the details.", "The company experienced {blank} growth last year."],
        answers: ["difficult", "mutual", "attention", "rapid"],
        options: [["difficult", "hard", "strong", "heavy"], ["mutual", "common", "shared", "joint"], ["attention", "focus", "interest", "care"], ["rapid", "fast", "quick", "speedy"]]
    },
    {
        rule: "Reported Speech: Reporting Verbs Patterns", category: "reported-speech", level: "college",
        meaning: "Different reporting verbs follow different patterns: admit + gerund, deny + gerund, agree + infinitive, refuse + infinitive.",
        sentences: ["She admitted {blank} the mistake.", "He denied {blank} involved.", "They agreed {blank} the project.", "She refused {blank} the document."],
        answers: ["making", "being", "to fund", "to sign"],
        options: [["making", "to make", "make", "made"], ["being", "to be", "be", "been"], ["to fund", "funding", "fund", "funded"], ["to sign", "signing", "sign", "signed"]]
    },
    {
        rule: "Present Perfect for News", category: "tenses", level: "middle",
        meaning: "Present perfect is commonly used in news headlines and reports for recent events.",
        sentences: ["Scientists {blank} a new species of fish.", "The president {blank} a new trade agreement.", "Temperatures {blank} dramatically this month.", "A major earthquake {blank} the region."],
        answers: ["have discovered", "has signed", "have risen", "has struck"],
        options: [["have discovered", "discovered", "are discovering", "discover"], ["has signed", "signed", "is signing", "signs"], ["have risen", "rose", "are rising", "rise"], ["has struck", "struck", "is striking", "strikes"]]
    },
    {
        rule: "Past Perfect Continuous", category: "tenses", level: "high",
        meaning: "Use past perfect continuous for actions that were ongoing before another past action, often explaining a visible result.",
        sentences: ["Her hands were dirty because she {blank} in the garden.", "The road was wet because it {blank} all night.", "He was out of breath because he {blank} for an hour.", "They were tired because they {blank} all day."],
        answers: ["had been working", "had been raining", "had been running", "had been traveling"],
        options: [["had been working", "was working", "worked", "has been working"], ["had been raining", "was raining", "rained", "has been raining"], ["had been running", "was running", "ran", "has been running"], ["had been traveling", "were traveling", "traveled", "have been traveling"]]
    },
    {
        rule: "Real Conditional: When vs If", category: "conditionals", level: "middle",
        meaning: "Use 'when' for things that are certain to happen; use 'if' for things that are possible but not certain.",
        sentences: ["{blank} I get home, I'll call you. (certain)", "I'll help you {blank} I have time. (not certain)", "{blank} winter comes, the days get shorter. (certain)", "I'll go to the beach {blank} it's sunny. (not certain)"],
        answers: ["When", "if", "When", "if"],
        options: [["When", "If", "Unless", "Until"], ["if", "when", "unless", "until"], ["When", "If", "Unless", "Until"], ["if", "when", "unless", "until"]]
    },
    {
        rule: "Passive: Born", category: "passive", level: "elementary",
        meaning: "'Be born' is a passive construction. Use 'was/were born' for past.",
        sentences: ["She {blank} born in 1990.", "Where {blank} you born?", "I {blank} born in London.", "Twins {blank} born every day."],
        answers: ["was", "were", "was", "are"],
        options: [["was", "is", "has been", "were"], ["were", "was", "are", "did"], ["was", "am", "have been", "were"], ["are", "is", "was", "were"]]
    },
    {
        rule: "Articles: A/An with Uncountable Nouns", category: "articles", level: "middle",
        meaning: "Some uncountable nouns can use 'a/an' when modified or when they refer to a particular instance.",
        sentences: ["She has {blank} good knowledge of history.", "There was {blank} heavy rain last night.", "He showed {blank} great interest in the project.", "We had {blank} wonderful time at the party."],
        answers: ["a", "a", "a", "a"],
        options: [["a", "the", "an", "\u2014"], ["a", "the", "an", "\u2014"], ["a", "the", "an", "\u2014"], ["a", "the", "an", "\u2014"]]
    },
    {
        rule: "Prepositions with 'Look'", category: "prepositions", level: "middle",
        meaning: "'Look' combines with different prepositions: look at (direct gaze), look for (search), look after (care), look into (investigate).",
        sentences: ["Please look {blank} the children while I'm out.", "I'm looking {blank} my keys. Have you seen them?", "The police are looking {blank} the matter.", "Don't look {blank} the sun directly."],
        answers: ["after", "for", "into", "at"],
        options: [["after", "for", "into", "at"], ["for", "after", "into", "at"], ["into", "after", "for", "at"], ["at", "after", "for", "into"]]
    },
    {
        rule: "Reduced Relative Clauses", category: "relative-clauses", level: "professional",
        meaning: "Defining relative clauses can be reduced: active \u2192 present participle; passive \u2192 past participle.",
        sentences: ["The man {blank} in the corner is my boss. (who is sitting)", "The letter {blank} yesterday contained bad news. (which was received)", "Anyone {blank} to apply should submit a form. (who wishes)", "The bridge {blank} last year is now open. (which was built)"],
        answers: ["sitting", "received", "wishing", "built"],
        options: [["sitting", "sat", "sits", "to sit"], ["received", "receiving", "receives", "to receive"], ["wishing", "wished", "wishes", "to wish"], ["built", "building", "builds", "to build"]]
    },
    {
        rule: "Gerund vs Infinitive: Forget", category: "gerunds-infinitives", level: "high",
        meaning: "'Forget + gerund' = forget a past memory. 'Forget + infinitive' = forget to do something.",
        sentences: ["I'll never forget {blank} the Eiffel Tower for the first time. (memory)", "Don't forget {blank} the door when you leave. (task)", "She forgot {blank} him at the conference. (memory)", "He forgot {blank} the alarm. (task)"],
        answers: ["seeing", "to lock", "meeting", "to set"],
        options: [["seeing", "to see", "see", "seen"], ["to lock", "locking", "lock", "locked"], ["meeting", "to meet", "meet", "met"], ["to set", "setting", "set", "setted"]]
    },
    {
        rule: "Comparative: Same...as", category: "comparatives", level: "middle",
        meaning: "Use 'the same...as' to express equality between two things.",
        sentences: ["My car is the same color {blank} yours.", "She earns the same salary {blank} her colleague.", "This bag is the same {blank} that one.", "He has the same opinion {blank} his father."],
        answers: ["as", "as", "as", "as"],
        options: [["as", "like", "than", "with"], ["as", "like", "than", "with"], ["as", "like", "than", "with"], ["as", "like", "than", "with"]]
    },
    {
        rule: "Whole vs All", category: "quantifiers", level: "middle",
        meaning: "'The whole' + singular countable noun = 'all the' + noun. 'Whole' emphasizes completeness.",
        sentences: ["She ate the {blank} cake.", "I've been waiting the {blank} day.", "{blank} the students were present.", "{blank} of us enjoyed the trip."],
        answers: ["whole", "whole", "All", "All"],
        options: [["whole", "all", "every", "each"], ["whole", "all", "every", "each"], ["All", "Whole", "Every", "Each"], ["All", "Whole", "Every", "Each"]]
    },
    {
        rule: "Demonstrative Pronouns: This, That, These, Those", category: "pronouns", level: "elementary",
        meaning: "'This/these' for nearby things; 'that/those' for distant things. 'This/that' for singular; 'these/those' for plural.",
        sentences: ["{blank} is my book right here.", "Who are {blank} people over there?", "{blank} cookies are delicious! (nearby)", "{blank} was a great movie we saw last night."],
        answers: ["This", "those", "These", "That"],
        options: [["This", "That", "These", "Those"], ["those", "these", "this", "that"], ["These", "Those", "This", "That"], ["That", "This", "Those", "These"]]
    },
    {
        rule: "Conjunctions: As well as", category: "conjunctions", level: "high",
        meaning: "'As well as' means 'in addition to'. The verb agrees with the first subject, not the noun after 'as well as'.",
        sentences: ["The manager, as well as the employees, {blank} attending the event.", "She speaks French as well {blank} German.", "He is smart as well {blank} hardworking.", "{blank} well as being a doctor, she is a published author."],
        answers: ["is", "as", "as", "As"],
        options: [["is", "are", "was", "were"], ["as", "than", "like", "to"], ["as", "than", "like", "to"], ["As", "So", "In", "On"]]
    },
    {
        rule: "Subjunctive Mood", category: "tenses", level: "professional",
        meaning: "The subjunctive mood uses the base form of the verb after certain expressions: it is essential that, I suggest that, etc.",
        sentences: ["It is essential that she {blank} present at the meeting.", "I suggest that he {blank} a lawyer.", "The committee recommended that the project {blank} approved.", "It is important that every student {blank} the assignment."],
        answers: ["be", "consult", "be", "complete"],
        options: [["be", "is", "was", "will be"], ["consult", "consults", "consulted", "consulting"], ["be", "is", "was", "will be"], ["complete", "completes", "completed", "completing"]]
    },
    {
        rule: "Cleft Sentences", category: "word-order", level: "professional",
        meaning: "Cleft sentences use 'it is/was...that/who' or 'what...is/was' to emphasize a particular part of a sentence.",
        sentences: ["It {blank} John who broke the vase.", "What I need {blank} a good rest.", "{blank} was her attitude that annoyed me.", "What they want {blank} more funding."],
        answers: ["was", "is", "It", "is"],
        options: [["was", "is", "were", "are"], ["is", "was", "were", "are"], ["It", "That", "This", "What"], ["is", "was", "were", "are"]]
    },
    {
        rule: "Inversion after Negative Adverbs", category: "word-order", level: "professional",
        meaning: "After negative adverbs at the start of a sentence, invert the subject and auxiliary verb.",
        sentences: ["Not until she spoke {blank} I realize who she was.", "Under no circumstances {blank} you leave the building.", "Not only {blank} she win, but she broke the record.", "Little {blank} he know what was about to happen."],
        answers: ["did", "should", "did", "did"],
        options: [["did", "do", "was", "had"], ["should", "must", "can", "will"], ["did", "does", "had", "was"], ["did", "does", "had", "was"]]
    },
    {
        rule: "Ellipsis and Substitution", category: "word-order", level: "professional",
        meaning: "Ellipsis (omitting words) and substitution (using 'so', 'not', 'do') avoid repetition in English.",
        sentences: ["'Are you coming?' 'I hope {blank}.'", "She can play the piano and {blank} can her sister.", "I haven't finished yet, but I expect to {blank}.", "'Will it rain?' 'I don't think {blank}.'"],
        answers: ["so", "so", "soon", "so"],
        options: [["so", "it", "that", "this"], ["so", "too", "also", "as well"], ["soon", "do", "finish", "so"], ["so", "it", "that", "this"]]
    },
    {
        rule: "Emphasis with Do/Does/Did", category: "tenses", level: "high",
        meaning: "Use 'do/does/did' before the base form of the verb for emphasis in affirmative sentences.",
        sentences: ["I {blank} enjoy the concert, despite what you think.", "She {blank} know the answer, but she was too shy to speak.", "We {blank} try our best, but it wasn't enough.", "He {blank} apologize eventually."],
        answers: ["did", "did", "did", "did"],
        options: [["did", "do", "was", "had"], ["did", "does", "was", "had"], ["did", "do", "were", "had"], ["did", "does", "was", "had"]]
    },
    {
        rule: "Participle Clauses", category: "word-order", level: "professional",
        meaning: "Participle clauses use present (-ing) or past (-ed) participles to combine sentences, making writing more concise.",
        sentences: ["{blank} that it was late, she decided to take a taxi.", "The man, {blank} in 1960, became a famous scientist.", "{blank} hard all day, he fell asleep on the sofa.", "{blank} the door, she entered the room."],
        answers: ["Realizing", "born", "Having worked", "Opening"],
        options: [["Realizing", "Realized", "To realize", "Realize"], ["born", "bearing", "to bear", "bore"], ["Having worked", "Worked", "To work", "Working"], ["Opening", "Opened", "To open", "Open"]]
    },
    {
        rule: "Passive: Agent with 'By'", category: "passive", level: "middle",
        meaning: "In passive sentences, the agent (doer) is introduced with 'by'. The agent is often omitted when unknown or unimportant.",
        sentences: ["The Mona Lisa was painted {blank} Leonardo da Vinci.", "The window was broken {blank} a ball.", "This novel was written {blank} a famous author.", "The research was funded {blank} the government."],
        answers: ["by", "by", "by", "by"],
        options: [["by", "from", "with", "of"], ["by", "from", "with", "of"], ["by", "from", "with", "of"], ["by", "from", "with", "of"]]
    },
    {
        rule: "Reported Speech: Apologies", category: "reported-speech", level: "high",
        meaning: "Report apologies with 'apologized for + gerund'.",
        sentences: ["'I'm sorry I'm late.' \u2192 She apologized {blank} being late.", "'Sorry for the noise.' \u2192 He apologized {blank} the noise.", "'I'm sorry I forgot.' \u2192 She apologized {blank} forgetting.", "'Sorry I didn't call.' \u2192 He apologized for {blank} calling."],
        answers: ["for", "for", "for", "not"],
        options: [["for", "about", "of", "to"], ["for", "about", "of", "to"], ["for", "about", "of", "to"], ["not", "don't", "didn't", "no"]]
    },
    {
        rule: "Prepositions with 'Get'", category: "prepositions", level: "middle",
        meaning: "'Get' combines with many prepositions: get on (board), get off (leave vehicle), get over (recover), get along (have good relationship).",
        sentences: ["She needs to get {blank} her fear of flying.", "Do you get {blank} with your neighbors?", "Please get {blank} the bus at the next stop.", "He got {blank} the car and drove away."],
        answers: ["over", "along", "off", "into"],
        options: [["over", "along", "off", "into"], ["along", "over", "off", "into"], ["off", "over", "along", "into"], ["into", "off", "over", "along"]]
    },
    {
        rule: "Articles: No Article with Abstract Nouns", category: "articles", level: "middle",
        meaning: "Abstract nouns used in a general sense take no article: love, happiness, education, life, etc.",
        sentences: ["{blank} is the most important thing in the world.", "She believes in {blank}.", "He values {blank} above all else.", "I think {blank} is the key to success."],
        answers: ["Love", "justice", "honesty", "education"],
        options: [["Love", "The love", "A love", "An love"], ["justice", "the justice", "a justice", "an justice"], ["honesty", "the honesty", "a honesty", "an honesty"], ["education", "the education", "a education", "an education"]]
    },
    {
        rule: "Quantifiers: Hardly any, Barely any", category: "quantifiers", level: "high",
        meaning: "'Hardly any' and 'barely any' mean almost none. They have negative meaning.",
        sentences: ["There is {blank} any food left in the fridge.", "She has {blank} any experience in this field.", "{blank} any of the students understood the lecture.", "He had {blank} any money left."],
        answers: ["hardly", "hardly", "Hardly", "barely"],
        options: [["hardly", "hard", "harder", "hardest"], ["hardly", "hard", "harder", "hardest"], ["Hardly", "Hard", "Harder", "Hardest"], ["barely", "bare", "barer", "barest"]]
    },
    {
        rule: "Gerund vs Infinitive: Regret", category: "gerunds-infinitives", level: "high",
        meaning: "'Regret + gerund' = regret something in the past. 'Regret + infinitive' = be sorry to (formal announcement).",
        sentences: ["I regret {blank} you that your application was unsuccessful. (formal)", "She regrets {blank} so much money on clothes. (past action)", "We regret {blank} you that the flight has been canceled. (formal)", "He regrets not {blank} harder at school. (past action)"],
        answers: ["to inform", "spending", "to inform", "studying"],
        options: [["to inform", "informing", "inform", "informed"], ["spending", "to spend", "spend", "spent"], ["to inform", "informing", "inform", "informed"], ["studying", "to study", "study", "studied"]]
    },
    {
        rule: "Conditionals: But for", category: "conditionals", level: "professional",
        meaning: "'But for' means 'if it were not for' or 'if it had not been for' and is used in formal contexts.",
        sentences: ["But for your help, I {blank} have failed.", "But for the rain, we {blank} have had a great picnic.", "But for her quick thinking, the accident {blank} have been worse.", "But for the traffic, we {blank} have arrived on time."],
        answers: ["would", "would", "could", "would"],
        options: [["would", "could", "should", "must"], ["would", "could", "should", "must"], ["could", "would", "should", "must"], ["would", "could", "should", "must"]]
    },
    {
        rule: "Word Formation: Prefixes for Size and Degree", category: "word-formation", level: "college",
        meaning: "Prefixes indicating size/degree: over- (too much), under- (not enough), super- (above), hyper- (extremely), micro- (very small).",
        sentences: ["The project was {blank} and went over time. (too ambitious)", "She felt {blank} for the job. (not qualified enough)", "The city has a {blank} modern transport system.", "He tends to {blank} to stressful situations."],
        answers: ["overambitious", "underqualified", "super", "overreact"],
        options: [["overambitious", "underambitious", "superambitious", "hyperambitious"], ["underqualified", "overqualified", "disqualified", "unqualified"], ["super", "over", "under", "hyper"], ["overreact", "underreact", "misreact", "disreact"]]
    },
    {
        rule: "Subject-Verb Agreement: Nouns That Look Plural", category: "subject-verb-agreement", level: "high",
        meaning: "Some nouns ending in -s are singular: news, mathematics, physics, politics, economics, etc.",
        sentences: ["Mathematics {blank} my favorite subject.", "The news {blank} surprising today.", "Physics {blank} a challenging subject.", "Politics {blank} a popular topic of conversation."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Pronouns: One/Ones", category: "pronouns", level: "middle",
        meaning: "'One' replaces a singular countable noun; 'ones' replaces a plural countable noun to avoid repetition.",
        sentences: ["I like the blue shirt, not the red {blank}.", "Which cakes do you want? The chocolate {blank}.", "This computer is better than that {blank}.", "I need new shoes. These {blank} are worn out."],
        answers: ["one", "ones", "one", "ones"],
        options: [["one", "ones", "it", "them"], ["ones", "one", "it", "them"], ["one", "ones", "it", "them"], ["ones", "one", "it", "them"]]
    },
    {
        rule: "Modal Perfect: Would Have", category: "modals", level: "high",
        meaning: "'Would have + past participle' describes something that was possible but didn't happen, often in third conditional.",
        sentences: ["I {blank} have helped if I had known.", "She {blank} have come if she hadn't been ill.", "They {blank} have won if they had practiced more.", "We {blank} have enjoyed the trip more in summer."],
        answers: ["would", "would", "would", "would"],
        options: [["would", "could", "should", "must"], ["would", "could", "should", "must"], ["would", "could", "should", "must"], ["would", "could", "should", "must"]]
    },
    {
        rule: "Present Perfect with This is the First Time", category: "tenses", level: "middle",
        meaning: "Use present perfect with expressions like 'This is the first time...', 'This is the best...I have ever...'.",
        sentences: ["This is the first time I {blank} caviar.", "It's the worst film I {blank} ever seen.", "This is the third time she {blank} late this week.", "That's the most beautiful place I {blank} ever visited."],
        answers: ["have tasted", "have", "has been", "have"],
        options: [["have tasted", "tasted", "taste", "am tasting"], ["have", "had", "was", "did"], ["has been", "was", "is", "had been"], ["have", "had", "was", "did"]]
    },
    {
        rule: "Present Simple for Commentary", category: "tenses", level: "high",
        meaning: "Present simple is used for live commentary in sports and demonstrations.",
        sentences: ["He {blank} the ball and shoots... Goal!", "She {blank} the mixture into the bowl and stirs.", "The defender {blank} the ball away from the striker.", "He {blank} up to the penalty spot and places the ball."],
        answers: ["takes", "pours", "kicks", "walks"],
        options: [["takes", "is taking", "took", "has taken"], ["pours", "is pouring", "poured", "has poured"], ["kicks", "is kicking", "kicked", "has kicked"], ["walks", "is walking", "walked", "has walked"]]
    },
    {
        rule: "Causative: Have/Get Something Done", category: "passive", level: "high",
        meaning: "'Have something done' = arrange for someone to do something for you. 'Get something done' is more informal.",
        sentences: ["I {blank} my hair cut last week.", "We need to {blank} the roof repaired.", "She {blank} her nails done every month.", "He {blank} his car serviced yesterday."],
        answers: ["had", "get", "gets", "had"],
        options: [["had", "got", "made", "let"], ["get", "have", "make", "let"], ["gets", "has", "makes", "lets"], ["had", "got", "made", "let"]]
    },
    {
        rule: "Wish: Present, Past, Future", category: "conditionals", level: "high",
        meaning: "wish + past simple (present regret), wish + past perfect (past regret), wish + would (future change).",
        sentences: ["I wish I {blank} more money. (present)", "I wish I {blank} gone to the party. (past)", "I wish it {blank} stop raining. (future)", "She wishes she {blank} speak Japanese. (present)"],
        answers: ["had", "had", "would", "could"],
        options: [["had", "have", "would have", "will have"], ["had", "have", "would have", "did"], ["would", "will", "could", "should"], ["could", "can", "would", "should"]]
    },
    {
        rule: "Phrasal Verbs: Separable vs Inseparable", category: "prepositions", level: "high",
        meaning: "Separable phrasal verbs can have the object between the verb and particle. Inseparable ones cannot.",
        sentences: ["She {blank} up the baby. (pick - separable)", "I ran {blank} an old friend yesterday. (into - inseparable)", "He turned {blank} the offer. (down - separable)", "We need to look {blank} this issue. (into - inseparable)"],
        answers: ["picked", "into", "down", "into"],
        options: [["picked", "picking", "picks", "pick"], ["into", "in", "on", "at"], ["down", "up", "off", "out"], ["into", "in", "on", "at"]]
    },
    {
        rule: "Future Time Clauses", category: "tenses", level: "middle",
        meaning: "In future time clauses with when, before, after, until, as soon as, use present tense (not will).",
        sentences: ["When she {blank}, tell her I called.", "I'll wait until the rain {blank}.", "After they {blank} dinner, they'll go for a walk.", "As soon as he {blank} up, he checks his phone."],
        answers: ["arrives", "stops", "have", "wakes"],
        options: [["arrives", "will arrive", "arrived", "arriving"], ["stops", "will stop", "stopped", "stopping"], ["have", "will have", "had", "having"], ["wakes", "will wake", "woke", "waking"]]
    },
    {
        rule: "Prepositions: On Time vs In Time", category: "prepositions", level: "middle",
        meaning: "'On time' = punctual, at the scheduled time. 'In time' = with enough time to spare.",
        sentences: ["The train arrived {blank} time.", "We got to the airport just {blank} time.", "Please make sure you're {blank} time for the meeting.", "She finished the project {blank} time for the deadline."],
        answers: ["on", "in", "on", "in"],
        options: [["on", "in", "at", "by"], ["in", "on", "at", "by"], ["on", "in", "at", "by"], ["in", "on", "at", "by"]]
    },
    {
        rule: "Prepositions: At the End / In the End", category: "prepositions", level: "middle",
        meaning: "'At the end' = at the final point of something. 'In the end' = finally, after everything.",
        sentences: ["{blank} the end of the movie, everyone cried.", "They argued for hours, but {blank} the end they agreed.", "{blank} the end of the road, turn left.", "{blank} the end, she decided to stay."],
        answers: ["At", "in", "At", "In"],
        options: [["At", "In", "On", "By"], ["in", "at", "on", "by"], ["At", "In", "On", "By"], ["In", "At", "On", "By"]]
    },
    {
        rule: "Prepositions with Do/Make", category: "prepositions", level: "middle",
        meaning: "'Do' and 'make' collocate with different nouns. Make: a decision, a mistake, progress. Do: homework, business, a favor.",
        sentences: ["Can you do me a {blank}?", "She made a {blank} on the test.", "We need to make a {blank} soon.", "They're doing {blank} with several overseas companies."],
        answers: ["favor", "mistake", "decision", "business"],
        options: [["favor", "mistake", "decision", "business"], ["mistake", "favor", "business", "decision"], ["decision", "business", "favor", "mistake"], ["business", "decision", "mistake", "favor"]]
    },
    {
        rule: "Conjunctions: So vs Such", category: "conjunctions", level: "middle",
        meaning: "'So' + adjective/adverb. 'Such' + (a/an) + noun phrase. Both can be followed by 'that' for result clauses.",
        sentences: ["It was {blank} a beautiful day that we went to the beach.", "She was {blank} tired that she fell asleep immediately.", "They are {blank} kind people.", "He drove {blank} fast that he got a speeding ticket."],
        answers: ["such", "so", "such", "so"],
        options: [["such", "so", "very", "too"], ["so", "such", "very", "too"], ["such", "so", "very", "too"], ["so", "such", "very", "too"]]
    },
    {
        rule: "Conjunctions: Whether...or", category: "conjunctions", level: "high",
        meaning: "'Whether...or' presents two alternatives. It can introduce noun clauses.",
        sentences: ["I don't know {blank} to go or stay.", "She asked me {blank} I liked coffee or tea.", "{blank} you agree or not, the decision has been made.", "I can't decide {blank} to accept the offer."],
        answers: ["whether", "whether", "Whether", "whether"],
        options: [["whether", "if", "that", "which"], ["whether", "if", "that", "which"], ["Whether", "If", "That", "Which"], ["whether", "if", "that", "which"]]
    },
    {
        rule: "Relative Clause: What", category: "relative-clauses", level: "high",
        meaning: "'What' means 'the thing that' and introduces noun clauses. It is not used in relative clauses with an antecedent.",
        sentences: ["{blank} she said surprised everyone.", "I don't understand {blank} you mean.", "He always gets {blank} he wants.", "{blank} happened next was unexpected."],
        answers: ["What", "what", "what", "What"],
        options: [["What", "Which", "That", "Who"], ["what", "which", "that", "who"], ["what", "which", "that", "who"], ["What", "Which", "That", "Who"]]
    },
    {
        rule: "Gerund after Phrasal Verbs", category: "gerunds-infinitives", level: "middle",
        meaning: "When phrasal verbs are followed by another verb, that verb takes the gerund form.",
        sentences: ["He gave up {blank} last year.", "She put off {blank} the report.", "They carried on {blank} despite the rain.", "I'm looking forward to {blank} you."],
        answers: ["smoking", "writing", "working", "seeing"],
        options: [["smoking", "to smoke", "smoke", "smoked"], ["writing", "to write", "write", "written"], ["working", "to work", "work", "worked"], ["seeing", "to see", "see", "seen"]]
    },
    {
        rule: "It + Adjective + To-Infinitive", category: "gerunds-infinitives", level: "middle",
        meaning: "Use 'It is + adjective + to-infinitive' to comment on situations.",
        sentences: ["It's important {blank} on time.", "It was nice {blank} you at the party.", "It's difficult {blank} a new language.", "It's easy {blank} mistakes."],
        answers: ["to be", "to see", "to learn", "to make"],
        options: [["to be", "being", "be", "been"], ["to see", "seeing", "see", "seen"], ["to learn", "learning", "learn", "learned"], ["to make", "making", "make", "made"]]
    },
    {
        rule: "Comparative: Prefer...to", category: "comparatives", level: "middle",
        meaning: "Use 'prefer + noun/gerund + to + noun/gerund' or 'prefer + to-infinitive + rather than + base form'.",
        sentences: ["I prefer tea {blank} coffee.", "She prefers {blank} to driving.", "He prefers to read rather {blank} watch TV.", "They prefer living in the city {blank} the countryside."],
        answers: ["to", "walking", "than", "to"],
        options: [["to", "than", "from", "over"], ["walking", "to walk", "walk", "walked"], ["than", "to", "from", "over"], ["to", "than", "from", "over"]]
    },
    {
        rule: "Subject-Verb Agreement: Titles and Names", category: "subject-verb-agreement", level: "high",
        meaning: "Titles of books, films, and organizations take singular verbs even if they contain plural nouns.",
        sentences: ["The United Nations {blank} founded in 1945.", "'The Chronicles of Narnia' {blank} a great series.", "The Netherlands {blank} a beautiful country.", "'Friends' {blank} a popular TV show."],
        answers: ["was", "is", "is", "is"],
        options: [["was", "were", "are", "have been"], ["is", "are", "was", "were"], ["is", "are", "was", "were"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Pronoun: So and Neither for Agreement", category: "pronouns", level: "middle",
        meaning: "Use 'So + auxiliary + subject' to agree with positive statements and 'Neither + auxiliary + subject' for negative.",
        sentences: ["'I'm hungry.' '{blank} am I.'", "'She can't drive.' '{blank} can he.'", "'We've been to France.' 'So {blank} they.'", "'He doesn't like fish.' 'Neither {blank} I.'"],
        answers: ["So", "Neither", "have", "do"],
        options: [["So", "Neither", "Either", "Nor"], ["Neither", "So", "Either", "Also"], ["have", "do", "are", "did"], ["do", "am", "have", "did"]]
    },
    {
        rule: "Word Formation: -ed vs -ing Adjectives", category: "word-formation", level: "middle",
        meaning: "-ed adjectives describe how people feel. -ing adjectives describe the thing that causes the feeling.",
        sentences: ["The movie was really {blank}. (bore)", "I was {blank} by the news. (shock)", "The lecture was {blank}. (interest)", "She felt {blank} after the long journey. (exhaust)"],
        answers: ["boring", "shocked", "interesting", "exhausted"],
        options: [["boring", "bored", "bore", "bores"], ["shocked", "shocking", "shock", "shocks"], ["interesting", "interested", "interest", "interests"], ["exhausted", "exhausting", "exhaust", "exhausts"]]
    },
    {
        rule: "Articles: Hospital, School, Prison", category: "articles", level: "high",
        meaning: "No article when referring to the function/purpose of the place. Use 'the' when referring to the physical building.",
        sentences: ["He's in {blank} hospital. (He's a patient.)", "She went to {blank} hospital to visit a friend. (visitor)", "The children go to {blank} school by bus. (students)", "There was a fire at {blank} school last night. (the building)"],
        answers: ["\u2014", "the", "\u2014", "the"],
        options: [["\u2014", "the", "a", "an"], ["the", "\u2014", "a", "an"], ["\u2014", "the", "a", "an"], ["the", "\u2014", "a", "an"]]
    },
    {
        rule: "Passive: Verbs with Two Objects", category: "passive", level: "high",
        meaning: "Verbs like give, send, show, tell, offer can have two passive forms because they take two objects.",
        sentences: ["I {blank} given a present. (or: A present was given to me.)", "She {blank} been offered the job. (or: The job has been offered to her.)", "The children {blank} told a story. (or: A story was told to the children.)", "He {blank} shown the way. (or: The way was shown to him.)"],
        answers: ["was", "has", "were", "was"],
        options: [["was", "were", "has", "had"], ["has", "have", "was", "were"], ["were", "was", "have", "had"], ["was", "were", "has", "had"]]
    },
    {
        rule: "Reported Speech: Complex", category: "reported-speech", level: "college",
        meaning: "Complex reported speech may involve multiple tense shifts and reference changes.",
        sentences: ["'I have been waiting since 2 o'clock,' she said. \u2192 She said she {blank} been waiting since 2 o'clock.", "'We will have finished by tomorrow,' they said. \u2192 They said they {blank} have finished by the next day.", "'I had never seen anything like it,' he said. \u2192 He said he {blank} never seen anything like it.", "'I am going to resign next week,' she told me. \u2192 She told me she {blank} going to resign the following week."],
        answers: ["had", "would", "had", "was"],
        options: [["had", "has", "was", "is"], ["would", "will", "could", "should"], ["had", "has", "was", "did"], ["was", "is", "had been", "will be"]]
    },
    {
        rule: "Zero Conditional with Imperative", category: "conditionals", level: "middle",
        meaning: "Zero conditional can use an imperative in the result clause for instructions.",
        sentences: ["If you see a fire, {blank} 911.", "If the light turns red, {blank}.", "If you feel dizzy, {blank} down immediately.", "If the alarm sounds, {blank} the building."],
        answers: ["call", "stop", "lie", "leave"],
        options: [["call", "calling", "to call", "called"], ["stop", "stopping", "to stop", "stopped"], ["lie", "lying", "to lie", "lay"], ["leave", "leaving", "to leave", "left"]]
    },
    {
        rule: "Quantifiers: All, Every, Each", category: "quantifiers", level: "middle",
        meaning: "'All' + plural/uncountable noun; 'every' + singular noun (= whole group); 'each' + singular noun (= individuals).",
        sentences: ["{blank} student must take the exam.", "Not {blank} the answers were correct.", "{blank} person is different.", "She checked {blank} item on the list carefully."],
        answers: ["Every", "all", "Each", "each"],
        options: [["Every", "All", "Each", "Both"], ["all", "every", "each", "both"], ["Each", "Every", "All", "Both"], ["each", "every", "all", "both"]]
    },
    {
        rule: "Prepositions: Verb + Preposition Collocations", category: "prepositions", level: "high",
        meaning: "Many verbs have fixed prepositions: believe in, succeed in, insist on, suffer from, deal with, etc.",
        sentences: ["She succeeded {blank} passing the exam.", "He insisted {blank} paying for dinner.", "Many people suffer {blank} allergies.", "How do you deal {blank} stress?"],
        answers: ["in", "on", "from", "with"],
        options: [["in", "on", "at", "for"], ["on", "in", "at", "for"], ["from", "of", "with", "by"], ["with", "about", "in", "for"]]
    },
    {
        rule: "Passive with Reporting Structures", category: "passive", level: "professional",
        meaning: "Formal academic/news writing uses passive reporting structures: It is reported that... / He is said to...",
        sentences: ["It {blank} reported that the economy is improving.", "The suspect {blank} believed to be armed.", "The painting {blank} thought to be a forgery.", "It {blank} expected that prices will rise."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "has", "was", "has been"], ["is", "has", "was", "has been"], ["is", "has", "was", "has been"], ["is", "has", "was", "has been"]]
    },
    {
        rule: "Gerund vs Infinitive: Mean", category: "gerunds-infinitives", level: "high",
        meaning: "'Mean + gerund' = involve/result in. 'Mean + infinitive' = intend.",
        sentences: ["Taking this job means {blank} to London. (involves)", "I didn't mean {blank} you. (intend)", "Success means {blank} hard. (involves)", "I meant {blank} you earlier. (intended)"],
        answers: ["moving", "to hurt", "working", "to call"],
        options: [["moving", "to move", "move", "moved"], ["to hurt", "hurting", "hurt", "hurted"], ["working", "to work", "work", "worked"], ["to call", "calling", "call", "called"]]
    },
    {
        rule: "Word Formation: Suffixes -ful vs -less", category: "word-formation", level: "middle",
        meaning: "-ful means 'full of' or 'having'; -less means 'without' or 'lacking'.",
        sentences: ["She gave a very {blank} presentation. (power)", "The instructions were {blank}, so I couldn't follow them. (use)", "What a {blank} sunset! (beauty)", "The exercise is {blank}. It doesn't help at all. (point)"],
        answers: ["powerful", "useless", "beautiful", "pointless"],
        options: [["powerful", "powerless", "powering", "powered"], ["useless", "useful", "using", "used"], ["beautiful", "beautyless", "beautied", "beautying"], ["pointless", "pointful", "pointing", "pointed"]]
    },
    {
        rule: "Comparatives: Rather Than", category: "comparatives", level: "high",
        meaning: "'Rather than' compares preferences or choices. It can be followed by a base form or gerund.",
        sentences: ["I'd prefer to walk rather {blank} drive.", "She chose to study abroad rather {blank} stay home.", "{blank} than complaining, try to find a solution.", "He decided to apologize rather {blank} argue."],
        answers: ["than", "than", "Rather", "than"],
        options: [["than", "to", "from", "that"], ["than", "to", "from", "that"], ["Rather", "More", "Better", "Other"], ["than", "to", "from", "that"]]
    },
    {
        rule: "Subject-Verb Agreement: Gerund as Subject", category: "subject-verb-agreement", level: "high",
        meaning: "A gerund phrase as subject always takes a singular verb.",
        sentences: ["Swimming {blank} good exercise.", "Eating too much junk food {blank} unhealthy.", "Reading books {blank} your vocabulary.", "Working from home {blank} its advantages."],
        answers: ["is", "is", "improves", "has"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["improves", "improve", "improved", "improving"], ["has", "have", "had", "having"]]
    },
    {
        rule: "Conjunctions: Hardly...when, No sooner...than", category: "conjunctions", level: "professional",
        meaning: "'Hardly...when' and 'No sooner...than' express that one event happened immediately after another. Both use past perfect + past simple.",
        sentences: ["Hardly {blank} I arrived when it started raining.", "No sooner {blank} she left than the phone rang.", "Hardly had they sat down {blank} the waiter took their order.", "No sooner had he finished {blank} the bell rang."],
        answers: ["had", "had", "when", "than"],
        options: [["had", "have", "did", "was"], ["had", "have", "did", "was"], ["when", "than", "before", "after"], ["than", "when", "before", "after"]]
    },
    {
        rule: "Relative Clauses: Which for Comments", category: "relative-clauses", level: "high",
        meaning: "'Which' can refer to a whole clause or idea in a non-defining relative clause.",
        sentences: ["He passed his exam, {blank} surprised everyone.", "She arrived late, {blank} annoyed her boss.", "They won the match, {blank} was unexpected.", "He apologized, {blank} made her feel better."],
        answers: ["which", "which", "which", "which"],
        options: [["which", "that", "what", "who"], ["which", "that", "what", "who"], ["which", "that", "what", "who"], ["which", "that", "what", "who"]]
    },
    {
        rule: "Articles: Generalizations", category: "articles", level: "college",
        meaning: "Different ways to make generalizations: plural nouns (no article), uncountable nouns (no article), or 'the' + singular noun (formal).",
        sentences: ["{blank} are man's best friend. (general)", "I love {blank}. (general)", "{blank} computer has transformed modern life. (formal/general)", "We import {blank} from many countries. (general)"],
        answers: ["Dogs", "music", "The", "goods"],
        options: [["Dogs", "The dogs", "A dog", "Dog"], ["music", "the music", "a music", "musics"], ["The", "A", "\u2014", "An"], ["goods", "the goods", "a good", "good"]]
    },
    {
        rule: "Prepositions: Above vs Over", category: "prepositions", level: "high",
        meaning: "'Above' = at a higher position (not directly over). 'Over' = directly above, covering, or across.",
        sentences: ["The temperature is {blank} average today.", "She put a blanket {blank} the sleeping child.", "The plane flew {blank} the clouds.", "There's a painting {blank} the fireplace."],
        answers: ["above", "over", "above", "above"],
        options: [["above", "over", "on", "up"], ["over", "above", "on", "up"], ["above", "over", "on", "up"], ["above", "over", "on", "up"]]
    },
    {
        rule: "Modals: Supposed To", category: "modals", level: "middle",
        meaning: "'Be supposed to' indicates what is expected, planned, or required.",
        sentences: ["You {blank} supposed to finish by 5 p.m.", "She isn't {blank} to be here.", "We {blank} supposed to bring our own lunch.", "He {blank} supposed to call an hour ago."],
        answers: ["are", "supposed", "were", "was"],
        options: [["are", "were", "is", "was"], ["supposed", "suppose", "supposing", "supposes"], ["were", "are", "is", "was"], ["was", "is", "were", "are"]]
    },
    {
        rule: "Quantifiers: Deal of / Amount of", category: "quantifiers", level: "high",
        meaning: "'A great deal of' + uncountable. 'A large amount of' + uncountable. 'A large number of' + countable plural.",
        sentences: ["She spent a great deal {blank} money on clothes.", "A large {blank} of research has been done.", "A large {blank} of people attended the event.", "There's a considerable {blank} of evidence."],
        answers: ["of", "amount", "number", "amount"],
        options: [["of", "on", "in", "at"], ["amount", "number", "deal", "quantity"], ["number", "amount", "deal", "quantity"], ["amount", "number", "deal", "quantity"]]
    },
    {
        rule: "Tenses: Past Habits", category: "tenses", level: "middle",
        meaning: "Use 'used to' for past habits and states that no longer exist.",
        sentences: ["I {blank} smoke, but I quit five years ago.", "She {blank} live in Paris before moving to London.", "We {blank} walk to school when we were children.", "There {blank} be a park here before they built the mall."],
        answers: ["used to", "used to", "used to", "used to"],
        options: [["used to", "use to", "using to", "uses to"], ["used to", "use to", "using to", "uses to"], ["used to", "use to", "using to", "uses to"], ["used to", "use to", "using to", "uses to"]]
    },
    {
        rule: "Modals: Ought to", category: "modals", level: "middle",
        meaning: "'Ought to' is similar to 'should' but slightly more formal. Used for moral obligation and expectations.",
        sentences: ["You {blank} to be more careful.", "She {blank} to have arrived by now.", "We {blank} to help those in need.", "They {blank} to know better."],
        answers: ["ought", "ought", "ought", "ought"],
        options: [["ought", "should", "must", "had"], ["ought", "should", "must", "had"], ["ought", "should", "must", "had"], ["ought", "should", "must", "had"]]
    },
    {
        rule: "Conditionals: Unless vs If not", category: "conditionals", level: "middle",
        meaning: "'Unless' means 'if...not' and introduces a negative condition. In most cases, 'unless' = 'if...not'.",
        sentences: ["I won't go {blank} you come with me.", "She'll fail {blank} she studies harder.", "{blank} it rains, we'll have the barbecue outside.", "You can't enter {blank} you have a ticket."],
        answers: ["unless", "unless", "Unless", "unless"],
        options: [["unless", "if", "until", "when"], ["unless", "if", "until", "when"], ["Unless", "If", "Until", "When"], ["unless", "if", "until", "when"]]
    },
    {
        rule: "Passive: Get vs Be", category: "passive", level: "high",
        meaning: "'Get + past participle' is informal and often used for unexpected or negative events. 'Be + past participle' is neutral/formal.",
        sentences: ["He {blank} promoted last month. (neutral)", "She {blank} fired from her job. (informal/unexpected)", "The building {blank} constructed in 1920. (neutral)", "I {blank} bitten by a dog. (informal/unexpected)"],
        answers: ["was", "got", "was", "got"],
        options: [["was", "got", "has", "had"], ["got", "was", "has", "had"], ["was", "got", "has", "had"], ["got", "was", "has", "had"]]
    },
    {
        rule: "Reported Speech: Past Perfect stays the same", category: "reported-speech", level: "high",
        meaning: "Past perfect in direct speech stays as past perfect in reported speech (no further shift).",
        sentences: ["'I had already eaten.' \u2192 She said she {blank} already eaten.", "'We had finished the work.' \u2192 They said they {blank} finished the work.", "'He had left before I arrived.' \u2192 She said he {blank} left before she arrived.", "'I had never been there.' \u2192 He said he {blank} never been there."],
        answers: ["had", "had", "had", "had"],
        options: [["had", "has", "have", "was"], ["had", "has", "have", "were"], ["had", "has", "have", "was"], ["had", "has", "have", "was"]]
    },
    {
        rule: "Articles: Diseases", category: "articles", level: "high",
        meaning: "Most diseases take no article: cancer, diabetes, flu. Some take 'the': the measles, the flu (informal). 'A cold' and 'a headache' take 'a'.",
        sentences: ["She has {blank} cold.", "He was diagnosed with {blank} diabetes.", "The child caught {blank} measles.", "I've got {blank} terrible headache."],
        answers: ["a", "\u2014", "the", "a"],
        options: [["a", "the", "an", "\u2014"], ["\u2014", "the", "a", "an"], ["the", "a", "an", "\u2014"], ["a", "the", "an", "\u2014"]]
    },
    {
        rule: "Prepositions: Beside vs Besides", category: "prepositions", level: "high",
        meaning: "'Beside' means 'next to'. 'Besides' means 'in addition to' or 'apart from'.",
        sentences: ["She sat {blank} me at the concert.", "Who was there {blank} you?", "The hotel is {blank} the river.", "{blank} English, she speaks French and German."],
        answers: ["beside", "besides", "beside", "Besides"],
        options: [["beside", "besides", "behind", "between"], ["besides", "beside", "behind", "between"], ["beside", "besides", "behind", "between"], ["Besides", "Beside", "Behind", "Between"]]
    },
    {
        rule: "Gerund vs Infinitive: Go on", category: "gerunds-infinitives", level: "high",
        meaning: "'Go on + gerund' = continue the same activity. 'Go on + infinitive' = do the next thing.",
        sentences: ["She went on {blank} for another hour. (continued talking)", "After finishing college, he went on {blank} a successful business. (next step)", "The speaker went on {blank} about the economy. (continued)", "After his apology, he went on {blank} the problem. (next step)"],
        answers: ["talking", "to start", "talking", "to explain"],
        options: [["talking", "to talk", "talk", "talked"], ["to start", "starting", "start", "started"], ["talking", "to talk", "talk", "talked"], ["to explain", "explaining", "explain", "explained"]]
    },
    {
        rule: "Comparative: Gradual Change", category: "comparatives", level: "middle",
        meaning: "Use 'comparative and comparative' to show gradual change: bigger and bigger, more and more expensive.",
        sentences: ["The days are getting {blank} and longer.", "The city is becoming {blank} and more crowded.", "She's getting {blank} and better at tennis.", "Life is becoming {blank} and more complex."],
        answers: ["longer", "more", "better", "more"],
        options: [["longer", "more long", "longest", "most long"], ["more", "most", "much", "many"], ["better", "gooder", "best", "more good"], ["more", "most", "much", "many"]]
    },
    {
        rule: "Subject-Verb Agreement: Who/Which/That", category: "subject-verb-agreement", level: "high",
        meaning: "In relative clauses, the verb agrees with the noun that the relative pronoun refers to.",
        sentences: ["It is I who {blank} responsible.", "It is the students who {blank} complaining.", "He is one of the people who {blank} always early.", "She is the only one of the candidates who {blank} all the requirements."],
        answers: ["am", "are", "are", "meets"],
        options: [["am", "is", "are", "was"], ["are", "is", "am", "was"], ["are", "is", "am", "was"], ["meets", "meet", "met", "meeting"]]
    },
    {
        rule: "Pronouns: Such and So", category: "pronouns", level: "high",
        meaning: "'Such' + noun phrase. 'So' + adjective/adverb. Both can introduce result clauses with 'that'.",
        sentences: ["It was {blank} a lovely day.", "She is {blank} intelligent.", "They are {blank} nice people.", "He spoke {blank} quickly that I couldn't understand."],
        answers: ["such", "so", "such", "so"],
        options: [["such", "so", "very", "too"], ["so", "such", "very", "too"], ["such", "so", "very", "too"], ["so", "such", "very", "too"]]
    },
    {
        rule: "Conjunctions: Even though vs Despite", category: "conjunctions", level: "middle",
        meaning: "'Even though' is followed by a clause (subject + verb). 'Despite' is followed by a noun or gerund.",
        sentences: ["{blank} being tired, she continued working.", "She continued working {blank} she was tired.", "{blank} the rain, the match went ahead.", "The match went ahead {blank} it was raining."],
        answers: ["Despite", "even though", "Despite", "even though"],
        options: [["Despite", "Even though", "Because", "Since"], ["even though", "despite", "because", "since"], ["Despite", "Even though", "Because", "Since"], ["even though", "despite", "because", "since"]]
    },
    {
        rule: "Quantifiers: Too Many vs Too Much", category: "quantifiers", level: "elementary",
        meaning: "'Too many' with countable plural nouns. 'Too much' with uncountable nouns. Both mean 'more than is good or necessary'.",
        sentences: ["There are too {blank} cars on the road.", "He drinks too {blank} coffee.", "She has too {blank} responsibilities.", "There's too {blank} noise in here."],
        answers: ["many", "much", "many", "much"],
        options: [["many", "much", "few", "little"], ["much", "many", "little", "few"], ["many", "much", "few", "little"], ["much", "many", "little", "few"]]
    },
    {
        rule: "Word Formation: -ment, -tion, -sion Nouns", category: "word-formation", level: "middle",
        meaning: "Verb to noun: -ment (improve\u2192improvement), -tion (educate\u2192education), -sion (decide\u2192decision).",
        sentences: ["The {blank} of the new manager surprised everyone. (appoint)", "His {blank} to leave was unexpected. (decide)", "There has been a significant {blank} in air quality. (improve)", "The {blank} of the new policy will take months. (implement)"],
        answers: ["appointment", "decision", "improvement", "implementation"],
        options: [["appointment", "appointion", "appointing", "appoints"], ["decision", "decidement", "deciding", "decides"], ["improvement", "improvation", "improving", "improves"], ["implementation", "implemention", "implementing", "implements"]]
    },
    {
        rule: "Relative Clauses: Whoever, Whatever, Wherever", category: "relative-clauses", level: "high",
        meaning: "Compound relative pronouns (whoever, whatever, wherever, etc.) mean 'any person/thing/place that'.",
        sentences: ["{blank} broke this vase will have to pay for it.", "You can sit {blank} you like.", "Take {blank} you need from the cupboard.", "{blank} you go, I'll follow."],
        answers: ["Whoever", "wherever", "whatever", "Wherever"],
        options: [["Whoever", "Whatever", "Wherever", "However"], ["wherever", "whatever", "whoever", "however"], ["whatever", "wherever", "whoever", "however"], ["Wherever", "Whatever", "Whoever", "However"]]
    },
    {
        rule: "Passive: Need + Gerund/Passive Infinitive", category: "passive", level: "high",
        meaning: "'Need + gerund' or 'need + to be + past participle' express that something requires action done to it.",
        sentences: ["The car needs {blank}. (or: needs to be washed)", "The lawn needs {blank}.", "This shirt needs {blank}.", "The house needs {blank}."],
        answers: ["washing", "mowing", "ironing", "painting"],
        options: [["washing", "to wash", "wash", "washed"], ["mowing", "to mow", "mow", "mowed"], ["ironing", "to iron", "iron", "ironed"], ["painting", "to paint", "paint", "painted"]]
    },
    {
        rule: "Modals: Could for Suggestions", category: "modals", level: "middle",
        meaning: "'Could' can be used to make suggestions about possible actions.",
        sentences: ["We {blank} go to the cinema tonight.", "You {blank} try the new restaurant on Main Street.", "She {blank} take a taxi instead of the bus.", "They {blank} always postpone the meeting."],
        answers: ["could", "could", "could", "could"],
        options: [["could", "must", "should", "will"], ["could", "must", "should", "will"], ["could", "must", "should", "will"], ["could", "must", "should", "will"]]
    },
    {
        rule: "Tenses: Will vs Shall", category: "tenses", level: "high",
        meaning: "'Shall' is used with I/we for offers and suggestions in British English. 'Will' is used for all persons in most contexts.",
        sentences: ["{blank} I help you with that?", "{blank} we dance?", "I {blank} be there at 8 o'clock.", "She {blank} arrive soon."],
        answers: ["Shall", "Shall", "will", "will"],
        options: [["Shall", "Will", "Can", "Must"], ["Shall", "Will", "Can", "Must"], ["will", "shall", "can", "must"], ["will", "shall", "can", "must"]]
    },
    {
        rule: "Articles: A/An Based on Sound", category: "articles", level: "elementary",
        meaning: "Use 'an' before vowel sounds (not just vowel letters): an hour, an honest person. Use 'a' before consonant sounds: a university, a European.",
        sentences: ["He is {blank} honest man.", "She attends {blank} university in London.", "It was {blank} honor to meet you.", "He is {blank} European diplomat."],
        answers: ["an", "a", "an", "a"],
        options: [["an", "a", "the", "\u2014"], ["a", "an", "the", "\u2014"], ["an", "a", "the", "\u2014"], ["a", "an", "the", "\u2014"]]
    },
    {
        rule: "Prepositions: At/In/On for Places", category: "prepositions", level: "elementary",
        meaning: "'At' for specific points/addresses; 'in' for enclosed areas/cities/countries; 'on' for surfaces/streets.",
        sentences: ["She lives {blank} Baker Street.", "We met {blank} the airport.", "He works {blank} New York.", "The picture is {blank} the wall."],
        answers: ["on", "at", "in", "on"],
        options: [["on", "in", "at", "by"], ["at", "in", "on", "by"], ["in", "on", "at", "by"], ["on", "in", "at", "by"]]
    },
    {
        rule: "Gerund: Perfect Gerund", category: "gerunds-infinitives", level: "professional",
        meaning: "Use 'having + past participle' (perfect gerund) to emphasize that one action happened before another.",
        sentences: ["He denied {blank} the money. (having stolen)", "She regrets {blank} the opportunity. (having missed)", "{blank} finished the report, she went home. (having)", "He was accused of {blank} the documents. (having forged)"],
        answers: ["having stolen", "having missed", "Having", "having forged"],
        options: [["having stolen", "stealing", "to steal", "stolen"], ["having missed", "missing", "to miss", "missed"], ["Having", "Have", "Had", "To have"], ["having forged", "forging", "to forge", "forged"]]
    },
    {
        rule: "Comparatives: Would Rather...Than", category: "comparatives", level: "high",
        meaning: "'Would rather + base form + than + base form' expresses preference between two actions.",
        sentences: ["I'd rather {blank} at home than go out.", "She would rather {blank} than ride a bicycle.", "He'd rather not {blank} about it.", "They would rather {blank} than fly."],
        answers: ["stay", "walk", "talk", "drive"],
        options: [["stay", "staying", "to stay", "stayed"], ["walk", "walking", "to walk", "walked"], ["talk", "talking", "to talk", "talked"], ["drive", "driving", "to drive", "drove"]]
    },
    {
        rule: "Subject-Verb Agreement: Inverted Sentences", category: "subject-verb-agreement", level: "professional",
        meaning: "In inverted sentences, the verb still agrees with the actual subject, not the word that comes first.",
        sentences: ["Here {blank} the results of the study.", "On the table {blank} a vase of flowers.", "Among the guests {blank} several celebrities.", "Inside the box {blank} a beautiful necklace."],
        answers: ["are", "was", "were", "was"],
        options: [["are", "is", "was", "were"], ["was", "were", "is", "are"], ["were", "was", "is", "are"], ["was", "were", "is", "are"]]
    },
    {
        rule: "Pronouns: Whoever vs Whomever", category: "pronouns", level: "professional",
        meaning: "'Whoever' is used as a subject; 'whomever' is used as an object. In modern English, 'whoever' is often used for both.",
        sentences: ["Give the message to {blank} answers the phone.", "{blank} is responsible must be held accountable.", "Invite {blank} you want to the party.", "The prize goes to {blank} finishes first."],
        answers: ["whoever", "Whoever", "whomever", "whoever"],
        options: [["whoever", "whomever", "whom", "who"], ["Whoever", "Whomever", "Whom", "Who"], ["whomever", "whoever", "whom", "who"], ["whoever", "whomever", "whom", "who"]]
    },
    {
        rule: "Conjunctions: Provided / On Condition That", category: "conjunctions", level: "professional",
        meaning: "'Provided (that)' and 'on condition that' are formal alternatives to 'if', implying a requirement.",
        sentences: ["You can borrow the car {blank} that you return it by tonight.", "I'll lend you the money on {blank} that you pay me back.", "She agreed to help {blank} that she was given credit.", "{blank} you follow the rules, you'll be fine."],
        answers: ["provided", "condition", "provided", "Provided"],
        options: [["provided", "on", "as long", "so long"], ["condition", "provided", "as long", "so long"], ["provided", "on condition", "as long", "so long"], ["Provided", "On condition", "As long", "So long"]]
    },
    {
        rule: "Word Formation: Over- and Under- Prefixes", category: "word-formation", level: "college",
        meaning: "'Over-' means too much/excessively. 'Under-' means not enough/insufficiently.",
        sentences: ["The steak was {blank}. It was almost raw. (not cooked enough)", "Be careful not to {blank} the sauce. (add too much seasoning)", "The project was {blank} and ran out of money. (not funded enough)", "She tends to {blank} when she's nervous. (eat too much)"],
        answers: ["undercooked", "overseasoned", "underfunded", "overeat"],
        options: [["undercooked", "overcooked", "uncooked", "miscooked"], ["overseasoned", "underseasoned", "unseasoned", "misseasoned"], ["underfunded", "overfunded", "unfunded", "misfunded"], ["overeat", "undereat", "uneat", "miseat"]]
    },
    {
        rule: "Quantifiers: Enough", category: "quantifiers", level: "elementary",
        meaning: "'Enough' + noun (before noun) or adjective/adverb + 'enough' (after adjective/adverb).",
        sentences: ["Do we have {blank} chairs for everyone?", "She's old {blank} to make her own decisions.", "There isn't {blank} time to finish.", "He didn't run fast {blank} to win the race."],
        answers: ["enough", "enough", "enough", "enough"],
        options: [["enough", "too", "much", "many"], ["enough", "too", "much", "very"], ["enough", "too", "much", "many"], ["enough", "too", "much", "very"]]
    },
    {
        rule: "Tenses: Be Going To for Evidence", category: "tenses", level: "middle",
        meaning: "Use 'be going to' when there is present evidence for a future event.",
        sentences: ["Look at those dark clouds. It {blank} rain.", "She's feeling dizzy. She {blank} faint.", "The traffic is terrible. We {blank} be late.", "He hasn't studied at all. He {blank} fail the exam."],
        answers: ["is going to", "is going to", "are going to", "is going to"],
        options: [["is going to", "will", "is", "was going to"], ["is going to", "will", "is", "was going to"], ["are going to", "will", "are", "were going to"], ["is going to", "will", "is", "was going to"]]
    },
    {
        rule: "Modals: Shall for Formal Rules", category: "modals", level: "professional",
        meaning: "In legal and formal documents, 'shall' expresses obligation or requirement.",
        sentences: ["The tenant {blank} pay rent on the first of each month.", "Members {blank} not disclose confidential information.", "The company {blank} provide adequate training.", "All participants {blank} comply with the regulations."],
        answers: ["shall", "shall", "shall", "shall"],
        options: [["shall", "will", "must", "should"], ["shall", "will", "must", "should"], ["shall", "will", "must", "should"], ["shall", "will", "must", "should"]]
    },
    {
        rule: "Passive: Ergative Verbs", category: "passive", level: "professional",
        meaning: "Ergative verbs can be used transitively (with object) or intransitively (without object, similar to passive meaning).",
        sentences: ["The door {blank}. (open - no agent needed)", "The ice cream {blank} in the sun. (melt)", "Sales {blank} by 10% last quarter. (increase)", "The branch {blank} in the storm. (break)"],
        answers: ["opened", "melted", "increased", "broke"],
        options: [["opened", "was opened", "opening", "opens"], ["melted", "was melted", "melting", "melts"], ["increased", "were increased", "increasing", "increases"], ["broke", "was broken", "breaking", "breaks"]]
    },
    {
        rule: "Reported Speech: Wish in Reported Speech", category: "reported-speech", level: "professional",
        meaning: "'Wish' in reported speech follows the same tense shift rules as other verbs.",
        sentences: ["'I wish I could come.' \u2192 She said she wished she {blank} come.", "'I wish I had studied harder.' \u2192 He said he wished he {blank} studied harder.", "'I wish it would stop raining.' \u2192 She said she wished it {blank} stop raining.", "'I wish I were taller.' \u2192 He said he wished he {blank} taller."],
        answers: ["could", "had", "would", "were"],
        options: [["could", "can", "would", "should"], ["had", "has", "have", "was"], ["would", "will", "could", "should"], ["were", "was", "is", "had been"]]
    },
    {
        rule: "Articles: Special Cases", category: "articles", level: "professional",
        meaning: "Complex article usage in academic and professional contexts.",
        sentences: ["{blank} research conducted by Dr. Smith yielded promising results.", "In {blank} absence of evidence, we cannot draw conclusions.", "The report was published in {blank} Journal of Medicine.", "{blank} majority of participants agreed with the proposal."],
        answers: ["The", "the", "the", "The"],
        options: [["The", "A", "An", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["The", "A", "An", "\u2014"]]
    },
    {
        rule: "Prepositions: Abstract Uses", category: "prepositions", level: "college",
        meaning: "Prepositions in abstract/idiomatic contexts: in charge of, in favor of, on behalf of, at risk of.",
        sentences: ["Who is {blank} charge of this project?", "She spoke {blank} behalf of the committee.", "I'm not {blank} favor of the proposal.", "The building is {blank} risk of collapsing."],
        answers: ["in", "on", "in", "at"],
        options: [["in", "on", "at", "by"], ["on", "in", "at", "by"], ["in", "on", "at", "by"], ["at", "in", "on", "by"]]
    },
    {
        rule: "Gerund vs Infinitive: Allow/Permit", category: "gerunds-infinitives", level: "high",
        meaning: "'Allow/permit + object + to-infinitive' OR 'allow/permit + gerund' (no object).",
        sentences: ["The teacher allowed us {blank} early.", "Smoking is not {blank} in the building.", "They don't permit {blank} in the library.", "She was allowed {blank} the country."],
        answers: ["to leave", "permitted", "eating", "to leave"],
        options: [["to leave", "leaving", "leave", "left"], ["permitted", "permitting", "permit", "permits"], ["eating", "to eat", "eat", "eaten"], ["to leave", "leaving", "leave", "left"]]
    },
    {
        rule: "Comparatives: By Far", category: "comparatives", level: "high",
        meaning: "'By far' is used to emphasize superlatives: 'by far the best/worst/most...'.",
        sentences: ["She is by {blank} the best singer in the group.", "This is by {blank} the most expensive restaurant in town.", "He is by {blank} the tallest player on the team.", "This was by {blank} the worst day of my life."],
        answers: ["far", "far", "far", "far"],
        options: [["far", "much", "very", "so"], ["far", "much", "very", "so"], ["far", "much", "very", "so"], ["far", "much", "very", "so"]]
    },
    {
        rule: "Subject-Verb Agreement: Either...or with Different Number", category: "subject-verb-agreement", level: "high",
        meaning: "With 'either...or' and 'neither...nor', the verb agrees with the subject closest to it.",
        sentences: ["Either the manager or the employees {blank} to blame.", "Neither the students nor the teacher {blank} satisfied.", "Either she or her parents {blank} going to attend.", "Neither the cats nor the dog {blank} been fed."],
        answers: ["are", "was", "are", "has"],
        options: [["are", "is", "was", "were"], ["was", "were", "is", "are"], ["are", "is", "was", "were"], ["has", "have", "is", "are"]]
    },
    {
        rule: "Present Simple: Third Person -s", category: "tenses", level: "elementary",
        meaning: "Add -s/-es to verbs in third person singular (he, she, it) in present simple.",
        sentences: ["She {blank} to the gym every morning.", "He {blank} his teeth twice a day.", "The bus {blank} at 8:15 a.m.", "My sister {blank} as a nurse."],
        answers: ["goes", "brushes", "arrives", "works"],
        options: [["goes", "go", "going", "gone"], ["brushes", "brush", "brushing", "brushed"], ["arrives", "arrive", "arriving", "arrived"], ["works", "work", "working", "worked"]]
    },
    {
        rule: "Present Simple: Negative", category: "tenses", level: "elementary",
        meaning: "Form negative present simple with 'do not / does not (don't / doesn't)' + base form.",
        sentences: ["I {blank} like spicy food.", "She {blank} speak Italian.", "We {blank} have a car.", "He {blank} know the answer."],
        answers: ["don't", "doesn't", "don't", "doesn't"],
        options: [["don't", "doesn't", "isn't", "wasn't"], ["doesn't", "don't", "isn't", "wasn't"], ["don't", "doesn't", "aren't", "weren't"], ["doesn't", "don't", "isn't", "wasn't"]]
    },
    {
        rule: "Present Simple: Questions", category: "tenses", level: "elementary",
        meaning: "Form present simple questions with 'Do/Does' + subject + base form.",
        sentences: ["{blank} you like coffee?", "{blank} she work here?", "Where {blank} they live?", "What time {blank} the store open?"],
        answers: ["Do", "Does", "do", "does"],
        options: [["Do", "Does", "Is", "Are"], ["Does", "Do", "Is", "Are"], ["do", "does", "is", "are"], ["does", "do", "is", "are"]]
    },
    {
        rule: "Present Continuous: Formation", category: "tenses", level: "elementary",
        meaning: "Form present continuous with am/is/are + verb-ing.",
        sentences: ["I {blank} reading a book right now.", "She {blank} cooking dinner.", "They {blank} waiting for the bus.", "He {blank} sleeping at the moment."],
        answers: ["am", "is", "are", "is"],
        options: [["am", "is", "are", "was"], ["is", "am", "are", "was"], ["are", "am", "is", "were"], ["is", "am", "are", "was"]]
    },
    {
        rule: "Past Simple: Was/Were", category: "tenses", level: "elementary",
        meaning: "Use 'was' with I/he/she/it and 'were' with you/we/they.",
        sentences: ["I {blank} very tired yesterday.", "They {blank} at the party last night.", "She {blank} happy with the results.", "We {blank} in London last summer."],
        answers: ["was", "were", "was", "were"],
        options: [["was", "were", "am", "are"], ["were", "was", "are", "is"], ["was", "were", "is", "am"], ["were", "was", "are", "is"]]
    },
    {
        rule: "Past Simple: Could/Couldn't", category: "tenses", level: "elementary",
        meaning: "'Could' is the past tense of 'can'. Use 'couldn't' for past inability.",
        sentences: ["When she was young, she {blank} dance beautifully.", "I {blank} find my keys this morning.", "He {blank} speak English when he moved to the US.", "They {blank} believe the news."],
        answers: ["could", "couldn't", "couldn't", "couldn't"],
        options: [["could", "couldn't", "can", "can't"], ["couldn't", "could", "can't", "can"], ["couldn't", "could", "can't", "can"], ["couldn't", "could", "can't", "can"]]
    },
    {
        rule: "Present Perfect: Ever/Never", category: "tenses", level: "middle",
        meaning: "Use 'ever' in questions and 'never' in negative statements with present perfect.",
        sentences: ["Have you {blank} been to Australia?", "I have {blank} seen such a beautiful sunset.", "Has she {blank} tried Korean food?", "He has {blank} been late to work."],
        answers: ["ever", "never", "ever", "never"],
        options: [["ever", "never", "already", "yet"], ["never", "ever", "already", "yet"], ["ever", "never", "already", "yet"], ["never", "ever", "already", "yet"]]
    },
    {
        rule: "Present Perfect: Already/Yet/Still", category: "tenses", level: "middle",
        meaning: "'Already' in positive (mid-position), 'yet' in negative/questions (end), 'still' for ongoing situations.",
        sentences: ["I've {blank} finished my homework.", "Have you booked the tickets {blank}?", "She {blank} hasn't replied to my email.", "He's {blank} eaten lunch, so he's not hungry."],
        answers: ["already", "yet", "still", "already"],
        options: [["already", "yet", "still", "just"], ["yet", "already", "still", "just"], ["still", "yet", "already", "just"], ["already", "yet", "still", "just"]]
    },
    {
        rule: "Future: Will for Predictions", category: "tenses", level: "middle",
        meaning: "Use 'will' for predictions based on belief or opinion.",
        sentences: ["I think she {blank} pass the exam.", "He believes the project {blank} succeed.", "Experts predict that temperatures {blank} rise.", "I'm sure you {blank} enjoy the movie."],
        answers: ["will", "will", "will", "will"],
        options: [["will", "is going to", "is", "was"], ["will", "is going to", "is", "was"], ["will", "are going to", "are", "were"], ["will", "are going to", "are", "were"]]
    },
    {
        rule: "Future Continuous", category: "tenses", level: "high",
        meaning: "Use future continuous (will be + -ing) for actions in progress at a specific future time.",
        sentences: ["At this time tomorrow, I {blank} on a plane to Tokyo.", "She {blank} working late tonight.", "They {blank} traveling through Europe next month.", "We {blank} celebrating our anniversary next week."],
        answers: ["will be sitting", "will be", "will be", "will be"],
        options: [["will be sitting", "will sit", "sit", "am sitting"], ["will be", "will", "is", "was"], ["will be", "will", "are", "were"], ["will be", "will", "are", "were"]]
    },
    {
        rule: "Past Simple vs Present Perfect: Time Markers", category: "tenses", level: "middle",
        meaning: "Past simple uses specific time markers (yesterday, last week, in 2020). Present perfect uses unspecified time markers (ever, never, already, yet, recently).",
        sentences: ["I {blank} him at the conference last week.", "She has {blank} visited 20 countries.", "We {blank} to Japan in 2019.", "They have {blank} moved to a new office."],
        answers: ["met", "already", "went", "recently"],
        options: [["met", "have met", "meet", "meeting"], ["already", "yesterday", "last year", "in 2020"], ["went", "have gone", "go", "going"], ["recently", "yesterday", "last month", "in 2021"]]
    },
    {
        rule: "Future Perfect: By + Time", category: "tenses", level: "high",
        meaning: "Future perfect (will have + past participle) describes actions completed before a specific future time, often with 'by'.",
        sentences: ["By next year, she {blank} graduated from university.", "By the time you arrive, we {blank} finished dinner.", "By 2030, scientists {blank} found a cure.", "By Friday, I {blank} completed the project."],
        answers: ["will have", "will have", "will have", "will have"],
        options: [["will have", "will", "have", "had"], ["will have", "will", "have", "had"], ["will have", "will", "have", "had"], ["will have", "will", "have", "had"]]
    },
    {
        rule: "Tense Review: Narrative", category: "tenses", level: "college",
        meaning: "In narratives, use past simple for main events, past continuous for background actions, past perfect for earlier events.",
        sentences: ["When I {blank} up, the sun was shining brightly.", "She {blank} watching TV when the doorbell rang.", "He realized he {blank} forgotten his wallet.", "After they {blank} dinner, they went for a walk."],
        answers: ["woke", "was", "had", "had had"],
        options: [["woke", "was waking", "had woken", "have woken"], ["was", "had been", "is", "has been"], ["had", "has", "was", "did"], ["had had", "had", "have had", "were having"]]
    },
    {
        rule: "Present Perfect: Gone vs Been", category: "tenses", level: "middle",
        meaning: "'Has/have gone to' = went and hasn't returned. 'Has/have been to' = went and came back (experience).",
        sentences: ["She has {blank} to Paris three times. (experience)", "He has {blank} to the store. He'll be back soon.", "I have never {blank} to Africa.", "Where has Tom {blank}? He's not here."],
        answers: ["been", "gone", "been", "gone"],
        options: [["been", "gone", "went", "going"], ["gone", "been", "went", "going"], ["been", "gone", "went", "going"], ["gone", "been", "went", "going"]]
    },
    {
        rule: "Tenses: State vs Action Verbs", category: "tenses", level: "high",
        meaning: "Some verbs have both state and action meanings: think (believe vs considering), have (possess vs experience), see (understand vs meeting).",
        sentences: ["I {blank} you're right. (believe)", "I {blank} about changing my job. (considering)", "She {blank} three cars. (possess)", "She {blank} a wonderful time. (experiencing)"],
        answers: ["think", "am thinking", "has", "is having"],
        options: [["think", "am thinking", "thought", "have thought"], ["am thinking", "think", "thought", "have thought"], ["has", "is having", "had", "was having"], ["is having", "has", "had", "was having"]]
    },
    {
        rule: "Future in Time Clauses", category: "tenses", level: "middle",
        meaning: "Use present tenses (not future) in time clauses starting with when, while, before, after, until, as soon as, once.",
        sentences: ["I'll tell you when I {blank} the results.", "She won't leave until the meeting {blank} over.", "We'll start after everyone {blank}.", "Call me as soon as you {blank} there."],
        answers: ["get", "is", "arrives", "get"],
        options: [["get", "will get", "got", "getting"], ["is", "will be", "was", "being"], ["arrives", "will arrive", "arrived", "arriving"], ["get", "will get", "got", "getting"]]
    },
    {
        rule: "Present Perfect Continuous: Recent Activity", category: "tenses", level: "middle",
        meaning: "Use present perfect continuous to explain a present situation by describing a recent activity.",
        sentences: ["Sorry I'm late. {blank} you been waiting long?", "Your eyes are red. Have you been {blank}?", "The ground is wet. It has been {blank}.", "He's covered in paint. He has been {blank} the fence."],
        answers: ["Have", "crying", "raining", "painting"],
        options: [["Have", "Are", "Were", "Did"], ["crying", "cried", "cry", "cries"], ["raining", "rained", "rain", "rains"], ["painting", "painted", "paint", "paints"]]
    },
    {
        rule: "Can vs May: Permission", category: "modals", level: "middle",
        meaning: "Both 'can' and 'may' are used for permission. 'May' is more formal.",
        sentences: ["{blank} I use your bathroom? (informal)", "Students {blank} not leave until the bell rings. (formal)", "You {blank} borrow my pen if you need one. (informal)", "Passengers {blank} not use electronic devices during takeoff. (formal)"],
        answers: ["Can", "may", "can", "may"],
        options: [["Can", "May", "Must", "Should"], ["may", "can", "must", "should"], ["can", "may", "must", "should"], ["may", "can", "must", "should"]]
    },
    {
        rule: "Must vs Should: Strength of Obligation", category: "modals", level: "middle",
        meaning: "'Must' = strong obligation/necessity. 'Should' = advice/recommendation (weaker than must).",
        sentences: ["You {blank} study if you want to pass. (strong)", "You {blank} see a doctor. You look pale. (advice)", "All passengers {blank} fasten their seatbelts. (strong)", "You {blank} try the new restaurant. It's great. (recommendation)"],
        answers: ["must", "should", "must", "should"],
        options: [["must", "should", "could", "might"], ["should", "must", "could", "might"], ["must", "should", "could", "might"], ["should", "must", "could", "might"]]
    },
    {
        rule: "Could Have: Missed Opportunity", category: "modals", level: "high",
        meaning: "'Could have + past participle' expresses a past possibility or ability that was not used.",
        sentences: ["You {blank} have warned me about the test!", "We {blank} have taken the shortcut, but we didn't know about it.", "She {blank} have become a doctor, but she chose art instead.", "They {blank} have won the game if they'd tried harder."],
        answers: ["could", "could", "could", "could"],
        options: [["could", "should", "would", "must"], ["could", "should", "would", "must"], ["could", "should", "would", "must"], ["could", "should", "would", "must"]]
    },
    {
        rule: "Would: Hypothetical Situations", category: "modals", level: "middle",
        meaning: "'Would' is used for imaginary/hypothetical situations, often in the result clause of second conditionals.",
        sentences: ["If I were president, I {blank} lower taxes.", "She {blank} never say something like that.", "I {blank} love to visit Japan someday.", "What {blank} you do in my situation?"],
        answers: ["would", "would", "would", "would"],
        options: [["would", "will", "could", "should"], ["would", "will", "could", "should"], ["would", "will", "could", "should"], ["would", "will", "could", "should"]]
    },
    {
        rule: "Might vs May: Degree of Certainty", category: "modals", level: "high",
        meaning: "Both express possibility, but 'might' is slightly less certain than 'may'. In past form, 'might have' = less certain.",
        sentences: ["She {blank} come to the party. I asked her. (fairly possible)", "He {blank} come, but I doubt it. (less possible)", "It {blank} have been the wrong address. (fairly possible)", "They {blank} have already left. Who knows? (less possible)"],
        answers: ["may", "might", "may", "might"],
        options: [["may", "might", "must", "can"], ["might", "may", "must", "can"], ["may", "might", "must", "can"], ["might", "may", "must", "can"]]
    },
    {
        rule: "Need: Modal vs Main Verb", category: "modals", level: "high",
        meaning: "As a modal: 'Need I...?' / 'You needn't...' As a main verb: 'Do I need to...?' / 'You don't need to...'",
        sentences: ["{blank} I bring anything to the meeting?", "You {blank} worry about the presentation.", "She {blank} to leave early today.", "They {blank} have hurried. There was plenty of time."],
        answers: ["Do", "needn't", "needs", "needn't"],
        options: [["Do", "Need", "Must", "Shall"], ["needn't", "mustn't", "shouldn't", "can't"], ["needs", "need", "needn't", "mustn't"], ["needn't", "mustn't", "shouldn't", "couldn't"]]
    },
    {
        rule: "Shall: Legal and Formal", category: "modals", level: "professional",
        meaning: "In legal documents and formal rules, 'shall' indicates obligation or requirement.",
        sentences: ["The tenant {blank} maintain the property in good condition.", "No employee {blank} disclose confidential information.", "All disputes {blank} be resolved through arbitration.", "The buyer {blank} pay the full amount within 30 days."],
        answers: ["shall", "shall", "shall", "shall"],
        options: [["shall", "should", "must", "will"], ["shall", "should", "must", "will"], ["shall", "should", "must", "will"], ["shall", "should", "must", "will"]]
    },
    {
        rule: "Be About To", category: "modals", level: "middle",
        meaning: "'Be about to' describes something that will happen very soon.",
        sentences: ["The movie is {blank} to start. Take your seats.", "Hurry! The train is {blank} to leave.", "I was {blank} to call you when you texted me.", "She is {blank} to make a big announcement."],
        answers: ["about", "about", "about", "about"],
        options: [["about", "going", "ready", "due"], ["about", "going", "ready", "due"], ["about", "going", "ready", "due"], ["about", "going", "ready", "due"]]
    },
    {
        rule: "Modal Review: Mixed", category: "modals", level: "college",
        meaning: "Different modals convey different meanings: ability, permission, obligation, possibility, deduction.",
        sentences: ["You {blank} park here. It's a no-parking zone. (prohibition)", "She {blank} be at the office. Her car is there. (deduction)", "We {blank} leave early to catch the flight. (necessity)", "He {blank} speak five languages. (ability)"],
        answers: ["mustn't", "must", "need to", "can"],
        options: [["mustn't", "don't have to", "shouldn't", "can't"], ["must", "might", "could", "should"], ["need to", "should", "might", "could"], ["can", "must", "should", "might"]]
    },
    {
        rule: "Had Better: Warning", category: "modals", level: "middle",
        meaning: "'Had better' gives strong advice with an implied threat or negative consequence if not followed.",
        sentences: ["You'd {blank} hurry or you'll miss the train.", "She'd {blank} not forget the appointment.", "We'd {blank} book tickets in advance.", "He'd {blank} apologize if he knows what's good for him."],
        answers: ["better", "better", "better", "better"],
        options: [["better", "rather", "sooner", "best"], ["better", "rather", "sooner", "best"], ["better", "rather", "sooner", "best"], ["better", "rather", "sooner", "best"]]
    },
    {
        rule: "First Conditional: Variations", category: "conditionals", level: "middle",
        meaning: "First conditional can use various modal verbs in the result clause: can, may, might, should, must.",
        sentences: ["If you pass the test, you {blank} get a certificate.", "If it's sunny, we {blank} go to the park.", "If she calls, {blank} her I'm busy.", "If there's a fire, you {blank} use the stairs."],
        answers: ["will", "can", "tell", "must"],
        options: [["will", "would", "could", "might"], ["can", "could", "would", "might"], ["tell", "told", "telling", "tells"], ["must", "should", "can", "might"]]
    },
    {
        rule: "Second Conditional: Were for All Subjects", category: "conditionals", level: "middle",
        meaning: "In formal English, use 'were' (not 'was') for all subjects in the second conditional.",
        sentences: ["If I {blank} you, I wouldn't worry.", "If she {blank} here, she would know what to do.", "If he {blank} taller, he could reach the shelf.", "If it {blank} warmer, we could swim."],
        answers: ["were", "were", "were", "were"],
        options: [["were", "was", "am", "be"], ["were", "was", "is", "be"], ["were", "was", "is", "be"], ["were", "was", "is", "be"]]
    },
    {
        rule: "Third Conditional: Past Perfect in If-Clause", category: "conditionals", level: "high",
        meaning: "Third conditional always uses past perfect in the if-clause and would have + past participle in the result.",
        sentences: ["If I {blank} known, I would have helped.", "If she {blank} studied, she would have passed.", "If we {blank} left earlier, we wouldn't have missed the plane.", "If he {blank} seen the sign, he would have stopped."],
        answers: ["had", "had", "had", "had"],
        options: [["had", "have", "has", "did"], ["had", "have", "has", "did"], ["had", "have", "has", "did"], ["had", "have", "has", "did"]]
    },
    {
        rule: "Conditional: As if / As though", category: "conditionals", level: "high",
        meaning: "'As if' and 'as though' are followed by past simple for unreal present situations and past perfect for unreal past situations.",
        sentences: ["He talks as if he {blank} everything. (present unreal)", "She looks as though she {blank} crying. (recent past)", "He acts as if he {blank} the boss. (present unreal)", "She spoke as though she {blank} there before. (past unreal)"],
        answers: ["knew", "had been", "were", "had been"],
        options: [["knew", "knows", "knowing", "known"], ["had been", "has been", "is", "was"], ["were", "is", "was", "be"], ["had been", "has been", "was", "were"]]
    },
    {
        rule: "Conditional: If + Should", category: "conditionals", level: "professional",
        meaning: "'If + should' is used for unlikely but possible conditions. It's more formal than simple 'if'.",
        sentences: ["If you {blank} need any help, let me know.", "{blank} you have any questions, please call.", "If she {blank} change her mind, tell me immediately.", "If the package {blank} arrive damaged, contact customer service."],
        answers: ["should", "Should", "should", "should"],
        options: [["should", "would", "could", "might"], ["Should", "Would", "Could", "Might"], ["should", "would", "could", "might"], ["should", "would", "could", "might"]]
    },
    {
        rule: "Conditional: If it weren't for", category: "conditionals", level: "high",
        meaning: "'If it weren't for' (present) and 'if it hadn't been for' (past) express that something prevented a bad outcome.",
        sentences: ["If it {blank} for your help, I'd be lost.", "If it hadn't been {blank} the rain, the picnic would have been perfect.", "If it {blank} for her support, he wouldn't have succeeded.", "If it hadn't {blank} for the warning, more people would have been hurt."],
        answers: ["weren't", "for", "weren't", "been"],
        options: [["weren't", "wasn't", "isn't", "won't be"], ["for", "because", "of", "about"], ["weren't", "wasn't", "isn't", "won't be"], ["been", "be", "being", "was"]]
    },
    {
        rule: "Conditional: Otherwise / Or else", category: "conditionals", level: "middle",
        meaning: "'Otherwise' and 'or else' introduce the negative consequence of not doing something.",
        sentences: ["Study hard; {blank}, you'll fail.", "Take an umbrella; {blank} you'll get wet.", "We need to leave now; {blank} we'll be late.", "Be careful; {blank} you might hurt yourself."],
        answers: ["otherwise", "otherwise", "otherwise", "otherwise"],
        options: [["otherwise", "because", "although", "however"], ["otherwise", "because", "although", "however"], ["otherwise", "because", "although", "however"], ["otherwise", "because", "although", "however"]]
    },
    {
        rule: "Wish: Review", category: "conditionals", level: "high",
        meaning: "Wish + past simple (present), wish + past perfect (past), wish + would (future/annoyance).",
        sentences: ["I wish I {blank} a bigger house. (present)", "I wish I {blank} accepted the offer. (past regret)", "I wish he {blank} stop talking. (annoyance)", "She wishes she {blank} more confident. (present)"],
        answers: ["had", "had", "would", "were"],
        options: [["had", "have", "would have", "will have"], ["had", "have", "would have", "will have"], ["would", "will", "could", "should"], ["were", "was", "is", "had been"]]
    },
    {
        rule: "Passive: Present Simple", category: "passive", level: "middle",
        meaning: "Present simple passive: am/is/are + past participle.",
        sentences: ["Coffee {blank} grown in Brazil.", "These products {blank} sold worldwide.", "The office {blank} cleaned every evening.", "English {blank} taught in most schools."],
        answers: ["is", "are", "is", "is"],
        options: [["is", "are", "was", "were"], ["are", "is", "was", "were"], ["is", "are", "was", "were"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Passive: Past Simple", category: "passive", level: "middle",
        meaning: "Past simple passive: was/were + past participle.",
        sentences: ["The pyramids {blank} built thousands of years ago.", "The documents {blank} signed yesterday.", "The car {blank} stolen last night.", "Several houses {blank} damaged by the storm."],
        answers: ["were", "were", "was", "were"],
        options: [["were", "was", "are", "is"], ["were", "was", "are", "is"], ["was", "were", "is", "are"], ["were", "was", "are", "is"]]
    },
    {
        rule: "Passive: Modal", category: "passive", level: "high",
        meaning: "Modal + be + past participle for passive with modals.",
        sentences: ["Mistakes {blank} be avoided.", "This email {blank} be forwarded to all staff.", "The damage {blank} be repaired within a week.", "Children {blank} be supervised at all times."],
        answers: ["should", "must", "can", "should"],
        options: [["should", "must", "can", "will"], ["must", "should", "can", "will"], ["can", "should", "must", "will"], ["should", "must", "can", "will"]]
    },
    {
        rule: "Passive: Infinitive", category: "passive", level: "professional",
        meaning: "Passive infinitive: to be + past participle. Used after certain verbs and expressions.",
        sentences: ["She wants {blank} promoted.", "The report needs {blank} submitted by Friday.", "He expected {blank} invited to the party.", "The building is about {blank} demolished."],
        answers: ["to be", "to be", "to be", "to be"],
        options: [["to be", "to being", "being", "to been"], ["to be", "to being", "being", "to been"], ["to be", "to being", "being", "to been"], ["to be", "to being", "being", "to been"]]
    },
    {
        rule: "Reported Speech: Present Perfect to Past Perfect", category: "reported-speech", level: "high",
        meaning: "'I have done' \u2192 She said she had done. Present perfect shifts to past perfect in reported speech.",
        sentences: ["'I have finished.' \u2192 She said she {blank} finished.", "'We have been waiting.' \u2192 They said they {blank} been waiting.", "'He has left.' \u2192 She said he {blank} left.", "'I have never seen it.' \u2192 He said he {blank} never seen it."],
        answers: ["had", "had", "had", "had"],
        options: [["had", "has", "have", "was"], ["had", "have", "has", "were"], ["had", "has", "have", "was"], ["had", "has", "have", "was"]]
    },
    {
        rule: "Reported Speech: Can to Could", category: "reported-speech", level: "middle",
        meaning: "'Can' changes to 'could' in reported speech. 'Could' stays as 'could'.",
        sentences: ["'I can swim.' \u2192 She said she {blank} swim.", "'We can help.' \u2192 They said they {blank} help.", "'He can't come.' \u2192 She said he {blank} come.", "'I could hear music.' \u2192 She said she {blank} hear music."],
        answers: ["could", "could", "couldn't", "could"],
        options: [["could", "can", "would", "should"], ["could", "can", "would", "should"], ["couldn't", "can't", "wouldn't", "shouldn't"], ["could", "can", "would", "should"]]
    },
    {
        rule: "Reported Speech: Pronoun Changes", category: "reported-speech", level: "middle",
        meaning: "In reported speech, pronouns change according to the speaker's perspective: I\u2192he/she, you\u2192I/me, we\u2192they, my\u2192his/her.",
        sentences: ["'I love my job.' \u2192 She said {blank} loved her job.", "'You are my best friend.' \u2192 He told me I was {blank} best friend.", "'We will do our best.' \u2192 They said {blank} would do their best.", "'Can you help me?' \u2192 She asked if I could help {blank}."],
        answers: ["she", "his", "they", "her"],
        options: [["she", "I", "he", "they"], ["his", "my", "your", "their"], ["they", "we", "I", "she"], ["her", "me", "him", "them"]]
    },
    {
        rule: "Reported Speech: Exclamations", category: "reported-speech", level: "high",
        meaning: "Report exclamations using 'exclaimed that' or descriptive reporting verbs like 'cried', 'shouted'.",
        sentences: ["'What a beautiful day!' \u2192 She {blank} that it was a beautiful day.", "'How wonderful!' \u2192 He {blank} that it was wonderful.", "'Stop!' \u2192 She {blank} us to stop.", "'Help!' \u2192 He {blank} for help."],
        answers: ["exclaimed", "exclaimed", "told", "called"],
        options: [["exclaimed", "said", "told", "asked"], ["exclaimed", "said", "told", "asked"], ["told", "said", "exclaimed", "asked"], ["called", "said", "told", "asked"]]
    },
    {
        rule: "Articles: Bed, Work, Home", category: "articles", level: "middle",
        meaning: "No article with certain nouns in fixed expressions: go to bed, go to work, go home, be at work, be in bed.",
        sentences: ["It's late. Let's go to {blank}.", "She goes to {blank} by bus.", "I want to go {blank} now.", "He's been in {blank} all day with a cold."],
        answers: ["bed", "work", "home", "bed"],
        options: [["bed", "the bed", "a bed", "beds"], ["work", "the work", "a work", "works"], ["home", "the home", "a home", "homes"], ["bed", "the bed", "a bed", "beds"]]
    },
    {
        rule: "Articles with Continents and Regions", category: "articles", level: "middle",
        meaning: "No article with continents. Use 'the' with regions that include a compass point: the Middle East, the Far East.",
        sentences: ["She has traveled all over {blank}.", "He spent two years in {blank} Middle East.", "{blank} is the largest continent.", "They're moving to {blank} South America."],
        answers: ["Europe", "the", "Asia", "\u2014"],
        options: [["Europe", "the Europe", "an Europe", "a Europe"], ["the", "\u2014", "an", "a"], ["Asia", "The Asia", "An Asia", "A Asia"], ["\u2014", "the", "an", "a"]]
    },
    {
        rule: "Articles: Television, Radio, Internet", category: "articles", level: "middle",
        meaning: "No article with 'television/TV' (medium), but 'the' with radio and internet. 'The television' refers to the physical device.",
        sentences: ["I saw it on {blank}.", "She heard the news on {blank} radio.", "I found the information on {blank} internet.", "Can you turn off {blank} television? (the device)"],
        answers: ["television", "the", "the", "the"],
        options: [["television", "the television", "a television", "an television"], ["the", "\u2014", "a", "an"], ["the", "\u2014", "a", "an"], ["the", "a", "\u2014", "an"]]
    },
    {
        rule: "Articles: The + Adjective for Groups", category: "articles", level: "high",
        meaning: "'The' + adjective refers to a group of people: the rich, the poor, the elderly, the young, the unemployed.",
        sentences: ["{blank} elderly need special care.", "{blank} rich should help the poor.", "The government must support {blank} unemployed.", "{blank} young are the future of our country."],
        answers: ["The", "The", "the", "The"],
        options: [["The", "A", "An", "\u2014"], ["The", "A", "An", "\u2014"], ["the", "a", "an", "\u2014"], ["The", "A", "An", "\u2014"]]
    },
    {
        rule: "Prepositions: Agree with/on/to/about", category: "prepositions", level: "high",
        meaning: "agree with (a person), agree on (a decision), agree to (a plan/proposal), agree about (a topic).",
        sentences: ["I agree {blank} you completely.", "They finally agreed {blank} a date for the meeting.", "She agreed {blank} the terms of the contract.", "We don't agree {blank} politics."],
        answers: ["with", "on", "to", "about"],
        options: [["with", "on", "to", "about"], ["on", "with", "to", "about"], ["to", "with", "on", "about"], ["about", "with", "on", "to"]]
    },
    {
        rule: "Prepositions: Across vs Through", category: "prepositions", level: "middle",
        meaning: "'Across' = from one side to the other (surface). 'Through' = from one side to the other (inside/enclosed).",
        sentences: ["We walked {blank} the park. (inside it)", "The bridge goes {blank} the river.", "She drove {blank} the tunnel.", "He swam {blank} the lake."],
        answers: ["through", "across", "through", "across"],
        options: [["through", "across", "over", "along"], ["across", "through", "over", "along"], ["through", "across", "over", "along"], ["across", "through", "over", "along"]]
    },
    {
        rule: "Prepositions: In the End vs At Last", category: "prepositions", level: "middle",
        meaning: "'In the end' = finally (after considering everything). 'At last' = finally (after a long wait, with relief).",
        sentences: ["We waited for hours, but {blank} last the bus came.", "I considered several options and {blank} the end chose the simplest.", "They searched everywhere and {blank} last found the missing child.", "She was undecided, but {blank} the end she accepted."],
        answers: ["at", "in", "at", "in"],
        options: [["at", "in", "on", "by"], ["in", "at", "on", "by"], ["at", "in", "on", "by"], ["in", "at", "on", "by"]]
    },
    {
        rule: "Prepositions: Made of/from/with", category: "prepositions", level: "middle",
        meaning: "'Made of' = material visible in product. 'Made from' = material changed during production. 'Made with' = one ingredient among several.",
        sentences: ["The table is made {blank} wood.", "Wine is made {blank} grapes.", "This cake was made {blank} fresh ingredients.", "The dress is made {blank} silk."],
        answers: ["of", "from", "with", "of"],
        options: [["of", "from", "with", "by"], ["from", "of", "with", "by"], ["with", "of", "from", "by"], ["of", "from", "with", "by"]]
    },
    {
        rule: "Prepositions: For vs To", category: "prepositions", level: "middle",
        meaning: "'For' indicates purpose/benefit. 'To' indicates direction/recipient. Common confusion: 'to me' (direction) vs 'for me' (benefit).",
        sentences: ["This present is {blank} you.", "She explained the rules {blank} me.", "I bought some flowers {blank} my mother.", "He said hello {blank} everyone."],
        answers: ["for", "to", "for", "to"],
        options: [["for", "to", "at", "with"], ["to", "for", "at", "with"], ["for", "to", "at", "with"], ["to", "for", "at", "with"]]
    },
    {
        rule: "Prepositions: By + Gerund", category: "prepositions", level: "middle",
        meaning: "'By + gerund' explains how something is done (the method or means).",
        sentences: ["You can improve your English by {blank} more.", "She lost weight by {blank} regularly.", "He passed the exam by {blank} every night.", "They solved the problem by {blank} together."],
        answers: ["reading", "exercising", "studying", "working"],
        options: [["reading", "read", "to read", "reads"], ["exercising", "exercise", "to exercise", "exercises"], ["studying", "study", "to study", "studies"], ["working", "work", "to work", "works"]]
    },
    {
        rule: "Relative Clauses: That vs Which", category: "relative-clauses", level: "high",
        meaning: "In defining clauses, 'that' and 'which' are interchangeable for things. In non-defining clauses, only 'which' is used.",
        sentences: ["The car {blank} he bought was red. (defining)", "His new car, {blank} cost a fortune, broke down. (non-defining)", "The house {blank} she lives in is old. (defining)", "London, {blank} is the capital of England, is very expensive. (non-defining)"],
        answers: ["that", "which", "that", "which"],
        options: [["that", "which", "who", "whose"], ["which", "that", "who", "whose"], ["that", "which", "who", "whose"], ["which", "that", "who", "whose"]]
    },
    {
        rule: "Relative Clauses: Whose vs Of Which", category: "relative-clauses", level: "professional",
        meaning: "'Whose' is preferred for people and sometimes things. 'Of which' is a formal alternative for things.",
        sentences: ["The woman {blank} son won the prize was delighted.", "The tree, the branches {blank} which had been cut, looked bare.", "The man {blank} wallet was stolen reported it.", "The company, the products {blank} which are well-known, expanded."],
        answers: ["whose", "of", "whose", "of"],
        options: [["whose", "of which", "who", "whom"], ["of", "whose", "who", "whom"], ["whose", "of which", "who", "whom"], ["of", "whose", "who", "whom"]]
    },
    {
        rule: "Relative Clauses: Why/Where/When", category: "relative-clauses", level: "middle",
        meaning: "'Where' replaces 'in/at which' for places. 'When' replaces 'in/on/at which' for times. 'Why' replaces 'for which' for reasons.",
        sentences: ["This is the park {blank} we first met.", "I'll never forget the day {blank} I graduated.", "Tell me the reason {blank} you're upset.", "The town {blank} I grew up has changed a lot."],
        answers: ["where", "when", "why", "where"],
        options: [["where", "which", "that", "when"], ["when", "where", "which", "that"], ["why", "when", "where", "which"], ["where", "which", "that", "when"]]
    },
    {
        rule: "Gerund after Certain Expressions", category: "gerunds-infinitives", level: "middle",
        meaning: "Use gerund after expressions: be worth, can't help, feel like, it's no use, it's no good.",
        sentences: ["The book is worth {blank}.", "I can't help {blank} when I see that movie.", "I don't feel like {blank} today.", "It's no use {blank} about the past."],
        answers: ["reading", "laughing", "cooking", "worrying"],
        options: [["reading", "to read", "read", "reads"], ["laughing", "to laugh", "laugh", "laughs"], ["cooking", "to cook", "cook", "cooks"], ["worrying", "to worry", "worry", "worries"]]
    },
    {
        rule: "Infinitive after Adjectives", category: "gerunds-infinitives", level: "middle",
        meaning: "Many adjectives are followed by to-infinitive: glad, happy, pleased, surprised, afraid, ready, able.",
        sentences: ["I was surprised {blank} her at the party.", "She's ready {blank} her presentation.", "He was afraid {blank} the truth.", "We're glad {blank} you again."],
        answers: ["to see", "to give", "to tell", "to see"],
        options: [["to see", "seeing", "see", "saw"], ["to give", "giving", "give", "gave"], ["to tell", "telling", "tell", "told"], ["to see", "seeing", "see", "saw"]]
    },
    {
        rule: "Gerund vs Infinitive: Stop", category: "gerunds-infinitives", level: "high",
        meaning: "'Stop + gerund' = quit doing something. 'Stop + infinitive' = stop in order to do something.",
        sentences: ["She stopped {blank}. (She quit smoking.)", "He stopped {blank} a coffee. (He paused to buy it.)", "Please stop {blank} so much noise.", "We stopped {blank} the scenery."],
        answers: ["smoking", "to buy", "making", "to admire"],
        options: [["smoking", "to smoke", "smoke", "smoked"], ["to buy", "buying", "buy", "bought"], ["making", "to make", "make", "made"], ["to admire", "admiring", "admire", "admired"]]
    },
    {
        rule: "Gerund vs Infinitive: Remember", category: "gerunds-infinitives", level: "high",
        meaning: "'Remember + gerund' = recall a past event. 'Remember + infinitive' = remember to do a future task.",
        sentences: ["I remember {blank} you at the party. (past event)", "Remember {blank} the door. (future task)", "Do you remember {blank} this song as a child? (past event)", "I must remember {blank} her a birthday card. (future task)"],
        answers: ["meeting", "to lock", "singing", "to send"],
        options: [["meeting", "to meet", "meet", "met"], ["to lock", "locking", "lock", "locked"], ["singing", "to sing", "sing", "sang"], ["to send", "sending", "send", "sent"]]
    },
    {
        rule: "Too + Adjective + To-Infinitive", category: "gerunds-infinitives", level: "middle",
        meaning: "'Too + adjective + to-infinitive' means 'so adjective that it's not possible to...'.",
        sentences: ["The box is too heavy {blank}.", "She was too tired {blank} the movie.", "He's too young {blank} alone.", "The water is too cold {blank} in."],
        answers: ["to lift", "to watch", "to travel", "to swim"],
        options: [["to lift", "lifting", "lift", "lifted"], ["to watch", "watching", "watch", "watched"], ["to travel", "traveling", "travel", "traveled"], ["to swim", "swimming", "swim", "swam"]]
    },
    {
        rule: "Superlative: In vs Of", category: "comparatives", level: "middle",
        meaning: "Use 'in' with places and groups. Use 'of' with numbers and periods.",
        sentences: ["She's the tallest girl {blank} the class.", "It was the best day {blank} my life.", "He's the fastest runner {blank} the team.", "It was the coldest day {blank} the year."],
        answers: ["in", "of", "in", "of"],
        options: [["in", "of", "at", "on"], ["of", "in", "at", "on"], ["in", "of", "at", "on"], ["of", "in", "at", "on"]]
    },
    {
        rule: "Comparative: No Sooner...Than", category: "comparatives", level: "professional",
        meaning: "'No sooner...than' means 'as soon as' and connects two events that happened in quick succession.",
        sentences: ["No {blank} had I arrived than it started raining.", "No sooner had she finished {blank} the phone rang.", "No sooner had they left {blank} the storm began.", "No sooner had he sat down {blank} someone knocked."],
        answers: ["sooner", "than", "than", "than"],
        options: [["sooner", "later", "longer", "faster"], ["than", "when", "before", "after"], ["than", "when", "before", "after"], ["than", "when", "before", "after"]]
    },
    {
        rule: "Comparative: The More...The More", category: "comparatives", level: "high",
        meaning: "'The more...the more' construction shows two things changing together proportionally.",
        sentences: ["The {blank} you practice, the better you'll play.", "The harder she studied, the {blank} marks she got.", "The {blank} expensive the restaurant, the better the food.", "The older I get, the {blank} I appreciate simple things."],
        answers: ["more", "higher", "more", "more"],
        options: [["more", "most", "much", "many"], ["higher", "more high", "highest", "most high"], ["more", "most", "much", "many"], ["more", "most", "much", "many"]]
    },
    {
        rule: "Subject-Verb Agreement: Pair Nouns", category: "subject-verb-agreement", level: "middle",
        meaning: "Pair nouns (scissors, trousers, glasses) take plural verbs. With 'a pair of', the verb is singular.",
        sentences: ["My scissors {blank} blunt.", "A pair of jeans {blank} on the bed.", "These trousers {blank} too tight.", "Where {blank} my glasses?"],
        answers: ["are", "is", "are", "are"],
        options: [["are", "is", "was", "has"], ["is", "are", "was", "were"], ["are", "is", "was", "has"], ["are", "is", "was", "has"]]
    },
    {
        rule: "Subject-Verb Agreement: Expressions of Quantity", category: "subject-verb-agreement", level: "high",
        meaning: "With 'a lot of', 'most of', 'some of', the verb agrees with the noun after 'of'.",
        sentences: ["A lot of money {blank} been spent.", "Most of the students {blank} arrived.", "Some of the food {blank} been eaten.", "A lot of people {blank} waiting outside."],
        answers: ["has", "have", "has", "are"],
        options: [["has", "have", "is", "are"], ["have", "has", "are", "is"], ["has", "have", "is", "are"], ["are", "is", "has", "have"]]
    },
    {
        rule: "Subject-Verb Agreement: None", category: "subject-verb-agreement", level: "high",
        meaning: "'None' can take either singular or plural verbs. Traditionally singular, but plural is common with countable nouns.",
        sentences: ["None of the information {blank} accurate.", "None of the students {blank} absent.", "None of this {blank} sense.", "None of the books {blank} been returned."],
        answers: ["is", "were", "makes", "have"],
        options: [["is", "are", "were", "have"], ["were", "was", "is", "has"], ["makes", "make", "made", "making"], ["have", "has", "is", "was"]]
    },
    {
        rule: "Pronouns: It's vs Its", category: "pronouns", level: "elementary",
        meaning: "'It's' = it is / it has. 'Its' = possessive form of 'it'.",
        sentences: ["{blank} raining outside.", "The dog wagged {blank} tail.", "I think {blank} going to be a great day.", "{blank} been a long time since we met."],
        answers: ["It's", "its", "it's", "It's"],
        options: [["It's", "Its", "It", "Is"], ["its", "it's", "it", "is"], ["it's", "its", "it", "is"], ["It's", "Its", "It", "Is"]]
    },
    {
        rule: "Pronouns: Who vs Whom", category: "pronouns", level: "high",
        meaning: "'Who' = subject pronoun. 'Whom' = object pronoun. 'Whom' is used after prepositions and as the object of a verb.",
        sentences: ["{blank} is responsible for this?", "To {blank} should I address the letter?", "{blank} did you invite to the party?", "The person {blank} you spoke to is my manager."],
        answers: ["Who", "whom", "Whom", "whom"],
        options: [["Who", "Whom", "Whose", "Which"], ["whom", "who", "whose", "which"], ["Whom", "Who", "Whose", "Which"], ["whom", "who", "whose", "which"]]
    },
    {
        rule: "Pronouns: Anything, Something, Nothing", category: "pronouns", level: "elementary",
        meaning: "'Something' in positive statements, 'anything' in negatives and questions, 'nothing' = not anything.",
        sentences: ["Is there {blank} I can help you with?", "I have {blank} important to tell you.", "There's {blank} wrong with the computer. It works fine.", "Would you like {blank} to drink?"],
        answers: ["anything", "something", "nothing", "something"],
        options: [["anything", "something", "nothing", "everything"], ["something", "anything", "nothing", "everything"], ["nothing", "anything", "something", "everything"], ["something", "anything", "nothing", "everything"]]
    },
    {
        rule: "Conjunctions: Therefore vs However", category: "conjunctions", level: "high",
        meaning: "'Therefore' = as a result (cause\u2192effect). 'However' = but/despite that (contrast).",
        sentences: ["It was raining; {blank}, we stayed inside.", "He studied hard; {blank}, he failed.", "She's very qualified; {blank}, she got the job.", "The food was expensive; {blank}, it was delicious."],
        answers: ["therefore", "however", "therefore", "however"],
        options: [["therefore", "however", "moreover", "nevertheless"], ["however", "therefore", "moreover", "furthermore"], ["therefore", "however", "moreover", "nevertheless"], ["however", "therefore", "moreover", "furthermore"]]
    },
    {
        rule: "Conjunctions: In order to / So as to", category: "conjunctions", level: "middle",
        meaning: "'In order to' and 'so as to' express purpose. The negative forms are 'in order not to' and 'so as not to'.",
        sentences: ["He woke up early {blank} to catch the train.", "She spoke quietly so as {blank} to wake the baby.", "They worked overtime in {blank} to meet the deadline.", "I wrote it down so {blank} not to forget."],
        answers: ["in order", "not", "order", "as"],
        options: [["in order", "so as", "because", "although"], ["not", "to", "so", "for"], ["order", "that", "as", "for"], ["as", "that", "order", "for"]]
    },
    {
        rule: "Conjunctions: Nor", category: "conjunctions", level: "high",
        meaning: "'Nor' follows 'neither' or a negative clause. After 'nor' at the start of a clause, use inverted word order.",
        sentences: ["She didn't call, nor did she {blank} a message.", "Neither the food {blank} the service was satisfactory.", "I can't swim, {blank} can my brother.", "He has no money, nor {blank} he have any prospects."],
        answers: ["send", "nor", "nor", "does"],
        options: [["send", "sends", "sent", "sending"], ["nor", "or", "and", "but"], ["nor", "or", "and", "but"], ["does", "did", "do", "has"]]
    },
    {
        rule: "Quantifiers: Both vs All", category: "quantifiers", level: "middle",
        meaning: "'Both' refers to two items. 'All' refers to three or more. Both take plural verbs.",
        sentences: ["{blank} of the twins are musicians.", "I've read {blank} of the books on the list. (many books)", "{blank} roads lead to the town. (two roads)", "She invited {blank} her colleagues. (everyone)"],
        answers: ["Both", "all", "Both", "all"],
        options: [["Both", "All", "Each", "Every"], ["all", "both", "each", "every"], ["Both", "All", "Each", "Every"], ["all", "both", "each", "every"]]
    },
    {
        rule: "Quantifiers: Another vs Other vs Others", category: "quantifiers", level: "middle",
        meaning: "'Another' + singular = one more. 'Other' + plural = additional ones. 'Others' = other people/things (pronoun).",
        sentences: ["Can I have {blank} cup of coffee?", "There are {blank} options available.", "Some people agreed; {blank} disagreed.", "I'll need {blank} two days to finish."],
        answers: ["another", "other", "others", "another"],
        options: [["another", "other", "others", "the other"], ["other", "another", "others", "the other"], ["others", "another", "other", "the other"], ["another", "other", "others", "the other"]]
    },
    {
        rule: "Quantifiers: Either vs Neither (pronoun)", category: "quantifiers", level: "middle",
        meaning: "'Either' = one or the other (of two). 'Neither' = not one and not the other (of two).",
        sentences: ["{blank} of the answers is correct. (both wrong)", "You can sit on {blank} side of the table.", "I've tried {blank} restaurant, and both are good.", "{blank} of the shirts fits me properly."],
        answers: ["Neither", "either", "either", "Neither"],
        options: [["Neither", "Either", "Both", "None"], ["either", "neither", "both", "none"], ["either", "neither", "both", "none"], ["Neither", "Either", "Both", "None"]]
    },
    {
        rule: "Word Formation: -able vs -ible", category: "word-formation", level: "high",
        meaning: "-able is added to complete words (enjoy\u2192enjoyable). -ible is added to Latin roots (vis\u2192visible). Both mean 'can be'.",
        sentences: ["The food was barely {blank}. (eat)", "His handwriting is almost {blank}. (read + not)", "The difference is hardly {blank}. (notice)", "The damage is {blank}. (reverse + not)"],
        answers: ["edible", "illegible", "noticeable", "irreversible"],
        options: [["edible", "eatable", "eatible", "edable"], ["illegible", "unreadable", "irreadable", "dislegible"], ["noticeable", "noticible", "unnoticeable", "noticable"], ["irreversible", "unreversable", "irreversable", "unreversible"]]
    },
    {
        rule: "Word Formation: Noun from Verb", category: "word-formation", level: "middle",
        meaning: "Common patterns: verb + -tion/-sion (create\u2192creation), verb + -ment (develop\u2192development), verb + -ance/-ence (appear\u2192appearance).",
        sentences: ["The {blank} of the new building took two years. (construct)", "Her {blank} at the meeting was unexpected. (appear)", "The {blank} of renewable energy is crucial. (develop)", "We need your {blank} by Friday. (confirm)"],
        answers: ["construction", "appearance", "development", "confirmation"],
        options: [["construction", "constructment", "constructer", "constructness"], ["appearance", "appearition", "appearing", "appearer"], ["development", "develoption", "developer", "developness"], ["confirmation", "confirment", "confirmer", "confirmness"]]
    },
    {
        rule: "Word Formation: Adjective from Noun", category: "word-formation", level: "middle",
        meaning: "Common patterns: noun + -ful (hope\u2192hopeful), noun + -ous (danger\u2192dangerous), noun + -al (nation\u2192national), noun + -ive (act\u2192active).",
        sentences: ["The situation is extremely {blank}. (danger)", "He gave a very {blank} speech. (emotion)", "The results were very {blank}. (success)", "She is a very {blank} person. (create)"],
        answers: ["dangerous", "emotional", "successful", "creative"],
        options: [["dangerous", "dangered", "dangering", "dangerful"], ["emotional", "emotioned", "emotioning", "emotionful"], ["successful", "successed", "successing", "successive"], ["creative", "created", "creating", "createful"]]
    },
    {
        rule: "Tenses: Present Perfect for Duration", category: "tenses", level: "middle",
        meaning: "Use present perfect with 'for' (duration) and 'since' (starting point) for actions continuing to the present.",
        sentences: ["I have known her {blank} ten years.", "She has been a teacher {blank} 2015.", "We have lived here {blank} a long time.", "He has worked there {blank} he graduated."],
        answers: ["for", "since", "for", "since"],
        options: [["for", "since", "during", "from"], ["since", "for", "during", "from"], ["for", "since", "during", "from"], ["since", "for", "during", "from"]]
    },
    {
        rule: "Modals: May I vs Can I", category: "modals", level: "elementary",
        meaning: "'May I?' is formal/polite for asking permission. 'Can I?' is informal.",
        sentences: ["{blank} I ask you a question? (formal)", "Mom, {blank} I go out to play? (informal)", "{blank} I have your attention, please? (formal)", "{blank} I borrow your charger? (informal)"],
        answers: ["May", "can", "May", "Can"],
        options: [["May", "Can", "Must", "Should"], ["can", "may", "must", "should"], ["May", "Can", "Must", "Should"], ["Can", "May", "Must", "Should"]]
    },
    {
        rule: "Conditionals: As long as", category: "conditionals", level: "middle",
        meaning: "'As long as' means 'on the condition that' and can replace 'if' in conditional sentences.",
        sentences: ["You can go out as long as you {blank} back by 10.", "I'll lend you the money as long as you {blank} me back.", "As long as you {blank} hard, you'll succeed.", "We'll go camping as long as the weather {blank} fine."],
        answers: ["come", "pay", "work", "is"],
        options: [["come", "came", "will come", "would come"], ["pay", "paid", "will pay", "would pay"], ["work", "worked", "will work", "would work"], ["is", "was", "will be", "would be"]]
    },
    {
        rule: "Passive: Past Participle as Adjective", category: "passive", level: "middle",
        meaning: "Past participles can function as adjectives: broken window, written report, closed door, etc.",
        sentences: ["The {blank} window needs to be replaced.", "There was a {blank} letter on the desk.", "Please use the {blank} entrance.", "The {blank} goods were returned."],
        answers: ["broken", "handwritten", "designated", "damaged"],
        options: [["broken", "breaking", "broke", "break"], ["handwritten", "handwriting", "handwrite", "handwrote"], ["designated", "designating", "designate", "design"], ["damaged", "damaging", "damage", "damages"]]
    },
    {
        rule: "Reported Speech: Suggest/Recommend", category: "reported-speech", level: "high",
        meaning: "Report suggestions with 'suggest + gerund' or 'suggest + that + subject + (should) + base form'.",
        sentences: ["He suggested {blank} a taxi.", "She recommended that we {blank} early.", "The doctor suggested {blank} more water.", "He recommended that she {blank} the course."],
        answers: ["taking", "leave", "drinking", "take"],
        options: [["taking", "to take", "take", "took"], ["leave", "left", "leaving", "to leave"], ["drinking", "to drink", "drink", "drank"], ["take", "took", "taking", "to take"]]
    },
    {
        rule: "Articles: Double Article Errors", category: "articles", level: "middle",
        meaning: "Common article errors to avoid: using 'the' with possessives, using articles with already-determined nouns.",
        sentences: ["I love {blank} my new car. (no 'the' before possessive)", "She is {blank} doctor. (need article before job)", "I went to {blank} Italy last summer. (no article with most countries)", "He plays {blank} football every Sunday. (no article with sports)"],
        answers: ["\u2014", "a", "\u2014", "\u2014"],
        options: [["\u2014", "the", "a", "an"], ["a", "the", "an", "\u2014"], ["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"]]
    },
    {
        rule: "Prepositions: Think of/about", category: "prepositions", level: "middle",
        meaning: "'Think of' = have an idea/opinion. 'Think about' = consider/reflect on something.",
        sentences: ["What do you think {blank} the new policy?", "I'm thinking {blank} changing my job.", "Can you think {blank} a good restaurant?", "She thought {blank} his offer carefully."],
        answers: ["of", "about", "of", "about"],
        options: [["of", "about", "on", "for"], ["about", "of", "on", "for"], ["of", "about", "on", "for"], ["about", "of", "on", "for"]]
    },
    {
        rule: "Relative Clauses: All of whom/which", category: "relative-clauses", level: "professional",
        meaning: "'All of whom/which', 'some of whom/which', 'none of whom/which' are used in non-defining relative clauses.",
        sentences: ["She has three brothers, all of {blank} are married.", "He owns several cars, some of {blank} are vintage.", "I invited 20 people, none of {blank} came.", "There are 50 employees, most of {blank} are women."],
        answers: ["whom", "which", "whom", "whom"],
        options: [["whom", "who", "which", "that"], ["which", "whom", "who", "that"], ["whom", "who", "which", "that"], ["whom", "who", "which", "that"]]
    },
    {
        rule: "Gerund: After Preposition + Verb", category: "gerunds-infinitives", level: "middle",
        meaning: "After a preposition, always use the gerund form of the verb.",
        sentences: ["He's interested in {blank} a new skill.", "She left without {blank} goodbye.", "Thank you for {blank} me.", "I'm tired of {blank} the same thing every day."],
        answers: ["learning", "saying", "helping", "doing"],
        options: [["learning", "to learn", "learn", "learned"], ["saying", "to say", "say", "said"], ["helping", "to help", "help", "helped"], ["doing", "to do", "do", "done"]]
    },
    {
        rule: "Comparatives: Prefer + to vs Rather Than", category: "comparatives", level: "high",
        meaning: "'Prefer + noun/gerund + to + noun/gerund'. 'Would rather + base form + than + base form'.",
        sentences: ["I prefer coffee {blank} tea.", "She'd rather walk {blank} take the bus.", "He prefers swimming {blank} running.", "They'd rather stay home {blank} go out."],
        answers: ["to", "than", "to", "than"],
        options: [["to", "than", "from", "over"], ["than", "to", "from", "over"], ["to", "than", "from", "over"], ["than", "to", "from", "over"]]
    },
    {
        rule: "Subject-Verb Agreement: Here/There + Verb", category: "subject-verb-agreement", level: "middle",
        meaning: "In sentences beginning with 'here' or 'there', the verb agrees with the subject that follows it.",
        sentences: ["Here {blank} the keys you were looking for.", "There {blank} a problem with the computer.", "Here {blank} your order.", "There {blank} several options to consider."],
        answers: ["are", "is", "is", "are"],
        options: [["are", "is", "was", "has"], ["is", "are", "was", "were"], ["is", "are", "was", "were"], ["are", "is", "was", "has"]]
    },
    {
        rule: "Pronouns: Emphatic Pronouns", category: "pronouns", level: "middle",
        meaning: "Reflexive pronouns used for emphasis (emphatic pronouns) are placed after the noun/pronoun they emphasize.",
        sentences: ["The president {blank} opened the ceremony.", "I {blank} couldn't believe it.", "She made the cake {blank}.", "The children {blank} organized the event."],
        answers: ["himself", "myself", "herself", "themselves"],
        options: [["himself", "him", "his", "he"], ["myself", "me", "my", "I"], ["herself", "her", "hers", "she"], ["themselves", "them", "their", "they"]]
    },
    {
        rule: "Conjunctions: As a result / Consequently", category: "conjunctions", level: "high",
        meaning: "'As a result' and 'consequently' introduce the result or consequence of a previous statement.",
        sentences: ["The roads were icy; {blank}, there were many accidents.", "He didn't study; {blank}, he failed the exam.", "The company cut costs; {blank}, many employees lost their jobs.", "She trained hard; {blank}, she won the championship."],
        answers: ["as a result", "consequently", "as a result", "consequently"],
        options: [["as a result", "however", "although", "despite"], ["consequently", "however", "although", "despite"], ["as a result", "however", "although", "despite"], ["consequently", "however", "although", "despite"]]
    },
    {
        rule: "Quantifiers: The Whole / The Entire", category: "quantifiers", level: "middle",
        meaning: "'The whole' and 'the entire' both mean 'all of' and are followed by a singular noun.",
        sentences: ["I spent the {blank} day studying.", "She read the {blank} book in one sitting.", "The {blank} team agreed with the decision.", "We searched the {blank} house but couldn't find the keys."],
        answers: ["whole", "entire", "whole", "entire"],
        options: [["whole", "all", "every", "each"], ["entire", "all", "every", "each"], ["whole", "all", "every", "each"], ["entire", "all", "every", "each"]]
    },
    {
        rule: "Word Formation: -ly Adverbs (Exceptions)", category: "word-formation", level: "high",
        meaning: "Not all -ly words are adverbs (friendly, lovely = adjectives). Some adverbs have the same form as adjectives (fast, hard, early).",
        sentences: ["He drives very {blank}. (careful)", "She speaks English {blank}. (fluent)", "They arrived {blank}. (late)", "He works {blank}. (hard)"],
        answers: ["carefully", "fluently", "late", "hard"],
        options: [["carefully", "careful", "careless", "caring"], ["fluently", "fluent", "fluence", "fluency"], ["late", "lately", "later", "latest"], ["hard", "hardly", "harder", "hardest"]]
    },
    {
        rule: "Tenses: Present Simple in Conditionals", category: "tenses", level: "middle",
        meaning: "In first conditional and time clauses about the future, use present simple (not will) in the if/when clause.",
        sentences: ["If he {blank} tonight, tell him I called.", "When the meeting {blank}, we'll have coffee.", "I'll lend you my notes if you {blank} them.", "Before she {blank}, she always checks the weather."],
        answers: ["calls", "finishes", "need", "travels"],
        options: [["calls", "will call", "called", "calling"], ["finishes", "will finish", "finished", "finishing"], ["need", "will need", "needed", "needing"], ["travels", "will travel", "traveled", "traveling"]]
    },
    {
        rule: "Modals: Review of Deduction", category: "modals", level: "college",
        meaning: "Scale of certainty for deduction: must (99%), should/ought to (80%), may/might/could (50%), can't/couldn't (1%).",
        sentences: ["She's carrying an umbrella. It {blank} be raining. (99%)", "He's been studying all week. He {blank} pass. (80%)", "I'm not sure where she is. She {blank} be at work. (50%)", "He's at home. He {blank} be at the office. (1%)"],
        answers: ["must", "should", "might", "can't"],
        options: [["must", "might", "should", "can't"], ["should", "must", "might", "can't"], ["might", "must", "should", "can't"], ["can't", "must", "might", "should"]]
    },
    {
        rule: "Conditionals: Real vs Unreal", category: "conditionals", level: "middle",
        meaning: "First conditional = real/possible situation. Second conditional = unreal/imaginary situation.",
        sentences: ["If I {blank} enough money, I'll buy a car. (real - I might save enough)", "If I {blank} enough money, I'd buy a yacht. (unreal - I don't have it)", "If she {blank} the exam, she'll be happy. (real - she might pass)", "If she {blank} fly, she'd visit every country. (unreal - impossible)"],
        answers: ["save", "had", "passes", "could"],
        options: [["save", "saved", "will save", "would save"], ["had", "have", "will have", "saving"], ["passes", "passed", "will pass", "would pass"], ["could", "can", "will", "would"]]
    },
    {
        rule: "Passive: Changing Focus", category: "passive", level: "middle",
        meaning: "Use passive voice to change the focus of a sentence from the doer to the action or receiver.",
        sentences: ["The Mona Lisa {blank} painted by Leonardo da Vinci.", "A new hospital {blank} being built in our area.", "The suspect {blank} arrested yesterday.", "Our flight {blank} been canceled."],
        answers: ["was", "is", "was", "has"],
        options: [["was", "is", "has", "had"], ["is", "was", "has", "had"], ["was", "is", "has", "had"], ["has", "is", "was", "had"]]
    },
    {
        rule: "Reported Speech: General Review", category: "reported-speech", level: "middle",
        meaning: "In reported speech, shift tenses back, change pronouns, and adjust time/place expressions.",
        sentences: ["'I am working.' \u2192 He said he {blank} working.", "'They will come.' \u2192 She said they {blank} come.", "'We can help.' \u2192 They said they {blank} help.", "'I don't know.' \u2192 He said he {blank} know."],
        answers: ["was", "would", "could", "didn't"],
        options: [["was", "is", "has been", "will be"], ["would", "will", "could", "should"], ["could", "can", "would", "should"], ["didn't", "doesn't", "hasn't", "won't"]]
    },
    {
        rule: "Articles: The with Musical Instruments", category: "articles", level: "middle",
        meaning: "In British English, use 'the' when talking about playing a musical instrument. In American English, the article is sometimes omitted.",
        sentences: ["My daughter plays {blank} cello.", "Can he play {blank} saxophone?", "She's learning {blank} drums.", "He plays {blank} bass guitar in a band."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Prepositions: Confused Pairs", category: "prepositions", level: "high",
        meaning: "Common confusing preposition pairs: to/for, at/in, by/until, between/among, etc.",
        sentences: ["She's been married {blank} him for 20 years.", "The ceremony will start {blank} noon.", "I'll have it done {blank} Monday. (no later than)", "The secret stayed {blank} the three of us."],
        answers: ["to", "at", "by", "among"],
        options: [["to", "with", "for", "by"], ["at", "in", "on", "by"], ["by", "until", "in", "on"], ["among", "between", "within", "inside"]]
    },
    {
        rule: "Relative Clauses: Non-Defining Practice", category: "relative-clauses", level: "high",
        meaning: "Non-defining relative clauses are separated by commas and give extra, non-essential information.",
        sentences: ["My boss, {blank} has been here for 20 years, is retiring.", "The Nile, {blank} is the longest river in Africa, flows north.", "Dr. Smith, {blank} research was groundbreaking, won the Nobel Prize.", "The cafe, {blank} we often go, is closing down."],
        answers: ["who", "which", "whose", "where"],
        options: [["who", "that", "which", "whose"], ["which", "that", "who", "whose"], ["whose", "who", "which", "that"], ["where", "which", "that", "who"]]
    },
    {
        rule: "Gerund vs Infinitive: Avoid vs Refuse", category: "gerunds-infinitives", level: "middle",
        meaning: "'Avoid' is followed by gerund. 'Refuse' is followed by infinitive.",
        sentences: ["She avoids {blank} in public.", "He refused {blank} the document.", "I try to avoid {blank} late.", "They refused {blank} the offer."],
        answers: ["speaking", "to sign", "being", "to accept"],
        options: [["speaking", "to speak", "speak", "spoke"], ["to sign", "signing", "sign", "signed"], ["being", "to be", "be", "been"], ["to accept", "accepting", "accept", "accepted"]]
    },
    {
        rule: "Comparatives: Intensifiers", category: "comparatives", level: "high",
        meaning: "Intensifiers with comparatives: much/far/a lot + comparative, a bit/slightly + comparative, even/still + comparative.",
        sentences: ["This exam was {blank} harder than the last one.", "She's {blank} taller than her sister.", "The second movie was {blank} better than the first.", "He's {blank} more experienced than the other candidates."],
        answers: ["much", "slightly", "far", "considerably"],
        options: [["much", "very", "more", "most"], ["slightly", "very", "more", "most"], ["far", "very", "more", "most"], ["considerably", "very", "more", "most"]]
    },
    {
        rule: "Subject-Verb Agreement: Complex Subjects", category: "subject-verb-agreement", level: "professional",
        meaning: "When a subject is complex (containing phrases, clauses, or multiple elements), identify the main subject to determine verb agreement.",
        sentences: ["The impact of rising costs on small businesses {blank} significant.", "What the students need {blank} more practice.", "The number of tourists visiting the city {blank} increased.", "Working long hours without breaks {blank} unhealthy."],
        answers: ["is", "is", "has", "is"],
        options: [["is", "are", "were", "have"], ["is", "are", "were", "have"], ["has", "have", "is", "are"], ["is", "are", "were", "have"]]
    },
    {
        rule: "Pronouns: Review of Possessives", category: "pronouns", level: "elementary",
        meaning: "Possessive adjectives: my, your, his, her, its, our, their + noun. Possessive pronouns: mine, yours, his, hers, its, ours, theirs (stand alone).",
        sentences: ["That's not my book. It's {blank}.", "She forgot {blank} umbrella at home.", "The dog chased {blank} tail.", "Is this phone {blank}? (belonging to you)"],
        answers: ["yours", "her", "its", "yours"],
        options: [["yours", "your", "you", "you're"], ["her", "hers", "she", "she's"], ["its", "it's", "it", "their"], ["yours", "your", "you", "you're"]]
    },
    {
        rule: "Conjunctions: Linking Contrast", category: "conjunctions", level: "middle",
        meaning: "Words for contrast: but, however, although, despite, in spite of, on the other hand, nevertheless.",
        sentences: ["He's very smart, {blank} he's lazy.", "She studied hard. {blank}, she didn't pass.", "{blank} the traffic, we arrived on time.", "{blank} she's young, she's very mature."],
        answers: ["but", "However", "Despite", "Although"],
        options: [["but", "because", "so", "and"], ["However", "Because", "Therefore", "Moreover"], ["Despite", "Although", "Because", "However"], ["Although", "Despite", "Because", "However"]]
    },
    {
        rule: "Quantifiers: Much vs Very", category: "quantifiers", level: "middle",
        meaning: "'Much' modifies comparatives and 'too'. 'Very' modifies adjectives and adverbs in their base form.",
        sentences: ["She is {blank} intelligent.", "This is {blank} better than the other one.", "I'm {blank} tired to continue.", "He's {blank} more experienced than his colleagues."],
        answers: ["very", "much", "too", "much"],
        options: [["very", "much", "too", "so"], ["much", "very", "too", "so"], ["too", "very", "much", "so"], ["much", "very", "too", "so"]]
    },
    {
        rule: "Word Formation: Collocations with Make/Do", category: "word-formation", level: "middle",
        meaning: "'Make' collocations: make a decision, make a mistake, make progress, make an effort. 'Do' collocations: do homework, do research, do business, do a favor.",
        sentences: ["She needs to {blank} a decision soon.", "He always {blank} his homework on time.", "Let's {blank} some research on this topic.", "I think you've {blank} the right choice."],
        answers: ["make", "does", "do", "made"],
        options: [["make", "do", "take", "get"], ["does", "makes", "takes", "gets"], ["do", "make", "take", "get"], ["made", "did", "took", "got"]]
    },
    {
        rule: "Present Perfect: Change Over Time", category: "tenses", level: "middle",
        meaning: "Use present perfect to describe changes over time, often with comparatives.",
        sentences: ["House prices {blank} risen dramatically.", "Her English {blank} improved a lot.", "The city {blank} changed since I last visited.", "He {blank} grown much taller."],
        answers: ["have", "has", "has", "has"],
        options: [["have", "has", "had", "are"], ["has", "have", "had", "is"], ["has", "have", "had", "is"], ["has", "have", "had", "is"]]
    },
    {
        rule: "Modals: Should Have Done", category: "modals", level: "high",
        meaning: "'Should have + past participle' expresses regret or criticism about the past.",
        sentences: ["You {blank} have called me earlier.", "She {blank} have checked the weather forecast.", "They {blank} have booked the tickets in advance.", "I {blank} have listened to your advice."],
        answers: ["should", "should", "should", "should"],
        options: [["should", "could", "would", "must"], ["should", "could", "would", "must"], ["should", "could", "would", "must"], ["should", "could", "would", "must"]]
    },
    {
        rule: "Conditionals: Wish Review", category: "conditionals", level: "college",
        meaning: "Comprehensive review of wish structures for different time references.",
        sentences: ["I wish I {blank} speak Chinese. (present ability)", "She wishes she {blank} worked harder at school. (past regret)", "I wish they {blank} stop arguing. (irritation about ongoing behavior)", "He wishes he {blank} taller. (present state)"],
        answers: ["could", "had", "would", "were"],
        options: [["could", "can", "would", "should"], ["had", "have", "would", "did"], ["would", "will", "could", "should"], ["were", "was", "is", "am"]]
    },
    {
        rule: "Passive: Academic Writing", category: "passive", level: "professional",
        meaning: "Passive voice is commonly used in academic and scientific writing to maintain objectivity.",
        sentences: ["The experiment {blank} conducted over six months.", "Data {blank} collected from 1,000 participants.", "The results {blank} analyzed using statistical software.", "Further research {blank} recommended."],
        answers: ["was", "were", "were", "is"],
        options: [["was", "is", "has", "had"], ["were", "was", "is", "are"], ["were", "was", "is", "are"], ["is", "was", "are", "were"]]
    },
    {
        rule: "Reported Speech: Reporting Verbs", category: "reported-speech", level: "college",
        meaning: "Different reporting verbs take different patterns: claim + that, insist + on + gerund, encourage + object + infinitive.",
        sentences: ["She {blank} that she was innocent.", "He {blank} on paying for dinner.", "The teacher {blank} us to read more.", "They {blank} having any involvement."],
        answers: ["claimed", "insisted", "encouraged", "denied"],
        options: [["claimed", "insisted", "encouraged", "denied"], ["insisted", "claimed", "encouraged", "denied"], ["encouraged", "claimed", "insisted", "denied"], ["denied", "claimed", "insisted", "encouraged"]]
    },
    {
        rule: "Articles: Definite Article with Superlatives", category: "articles", level: "middle",
        meaning: "Always use 'the' before superlative adjectives.",
        sentences: ["She is {blank} most talented singer I know.", "This is {blank} best pizza in town.", "It was {blank} worst storm in decades.", "He is {blank} youngest member of the team."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Prepositions: On behalf of / In terms of", category: "prepositions", level: "professional",
        meaning: "Complex prepositions used in formal and professional contexts.",
        sentences: ["I'm writing {blank} behalf of the committee.", "The project is successful {blank} terms of revenue.", "{blank} spite of the challenges, they persevered.", "He acted {blank} accordance with the rules."],
        answers: ["on", "in", "In", "in"],
        options: [["on", "in", "at", "by"], ["in", "on", "at", "by"], ["In", "On", "At", "By"], ["in", "on", "at", "by"]]
    },
    {
        rule: "Relative Clauses: Formal Preposition Placement", category: "relative-clauses", level: "professional",
        meaning: "In formal writing, prepositions go before the relative pronoun; in informal speech, they go at the end.",
        sentences: ["The woman {blank} whom I was speaking is the director. (formal)", "This is the topic {blank} which we will focus. (formal)", "The school {blank} which I attended is closing. (formal)", "The person {blank} whom you should speak is Mrs. Jones. (formal)"],
        answers: ["to", "on", "which", "to"],
        options: [["to", "with", "for", "about"], ["on", "in", "at", "for"], ["which", "that", "who", "where"], ["to", "with", "for", "about"]]
    },
    {
        rule: "Gerund vs Infinitive: Advise", category: "gerunds-infinitives", level: "high",
        meaning: "'Advise + object + to-infinitive' or 'advise + gerund' (without object).",
        sentences: ["I advised her {blank} a lawyer.", "He advised {blank} the terms carefully.", "She was advised {blank} rest.", "They advised {blank} early."],
        answers: ["to see", "reading", "to", "arriving"],
        options: [["to see", "seeing", "see", "seen"], ["reading", "to read", "read", "reads"], ["to", "for", "about", "on"], ["arriving", "to arrive", "arrive", "arrived"]]
    },
    {
        rule: "Comparatives: Not as...as", category: "comparatives", level: "middle",
        meaning: "'Not as...as' expresses that one thing is less than another. Equivalent to 'less...than'.",
        sentences: ["English is not as {blank} as Chinese.", "He's not as {blank} as his brother.", "This hotel isn't as {blank} as the last one.", "The movie wasn't as {blank} as I expected."],
        answers: ["difficult", "tall", "comfortable", "good"],
        options: [["difficult", "more difficult", "most difficult", "difficulty"], ["tall", "taller", "tallest", "tallness"], ["comfortable", "more comfortable", "most comfortable", "comfortably"], ["good", "better", "best", "well"]]
    },
    {
        rule: "Subject-Verb Agreement: Collective Noun Review", category: "subject-verb-agreement", level: "high",
        meaning: "British English often uses plural verbs with collective nouns (the team are); American English prefers singular (the team is).",
        sentences: ["The government {blank} announced new measures.", "The family {blank} divided on the issue.", "The jury {blank} reached a verdict.", "The staff {blank} been informed of the changes."],
        answers: ["has", "is", "has", "have"],
        options: [["has", "have", "is", "are"], ["is", "are", "was", "were"], ["has", "have", "is", "are"], ["have", "has", "is", "are"]]
    },
    {
        rule: "Pronouns: Impersonal You/One", category: "pronouns", level: "high",
        meaning: "'You' (informal) and 'one' (formal) are used as impersonal pronouns to talk about people in general.",
        sentences: ["In England, {blank} drives on the left.", "How does {blank} apply for a visa? (formal)", "{blank} can never be too careful.", "If {blank} wants to succeed, one must work hard. (formal)"],
        answers: ["one", "one", "You", "one"],
        options: [["one", "you", "they", "we"], ["one", "you", "they", "we"], ["You", "One", "They", "We"], ["one", "you", "they", "we"]]
    },
    {
        rule: "Conjunctions: Whether or Not", category: "conjunctions", level: "middle",
        meaning: "'Whether or not' emphasizes that something will happen regardless of the condition.",
        sentences: ["I'm going {blank} or not you come with me.", "She'll finish the project, {blank} or not she gets help.", "{blank} or not it rains, the event will proceed.", "He decided to go {blank} it was cold."],
        answers: ["whether", "whether", "Whether", "even though"],
        options: [["whether", "if", "unless", "until"], ["whether", "if", "unless", "until"], ["Whether", "If", "Unless", "Until"], ["even though", "although", "whether", "unless"]]
    },
    {
        rule: "Quantifiers: Plenty of", category: "quantifiers", level: "elementary",
        meaning: "'Plenty of' means 'more than enough' and can be used with both countable and uncountable nouns.",
        sentences: ["We have {blank} of time. No need to rush.", "There are {blank} of seats available.", "She has {blank} of experience for this role.", "Don't worry, there's {blank} of food for everyone."],
        answers: ["plenty", "plenty", "plenty", "plenty"],
        options: [["plenty", "many", "much", "few"], ["plenty", "many", "much", "few"], ["plenty", "many", "much", "little"], ["plenty", "many", "much", "little"]]
    },
    {
        rule: "Word Formation: Prefixes re-, pre-, post-", category: "word-formation", level: "middle",
        meaning: "re- = again (rewrite, rebuild). pre- = before (preview, preschool). post- = after (postwar, postgraduate).",
        sentences: ["We need to {blank} the schedule. (arrange again)", "The students attended a {blank} course before university. (before)", "She's doing {blank} research at Harvard. (after graduation)", "Can you {blank} this email to include the attachment? (send again)"],
        answers: ["rearrange", "pre-university", "postdoctoral", "resend"],
        options: [["rearrange", "prearrange", "postarrange", "disarrange"], ["pre-university", "post-university", "re-university", "un-university"], ["postdoctoral", "predoctoral", "redoctoral", "undoctoral"], ["resend", "presend", "postsend", "unsend"]]
    },
    {
        rule: "Tenses: Time Clause Review", category: "tenses", level: "middle",
        meaning: "In time clauses about the future, use present tenses (not will/would).",
        sentences: ["Once you {blank} 18, you can vote.", "I won't leave until she {blank} back.", "As soon as the rain {blank}, we'll go out.", "After he {blank} university, he plans to travel."],
        answers: ["turn", "comes", "stops", "finishes"],
        options: [["turn", "will turn", "turned", "turning"], ["comes", "will come", "came", "coming"], ["stops", "will stop", "stopped", "stopping"], ["finishes", "will finish", "finished", "finishing"]]
    },
    {
        rule: "Modals: Can't Have Done", category: "modals", level: "high",
        meaning: "'Can't have + past participle' expresses disbelief that something happened in the past.",
        sentences: ["She {blank} have said that. She's too polite.", "He {blank} have run a marathon. He hates running.", "They {blank} have finished already. It usually takes hours.", "You {blank} have seen him. He's in another country."],
        answers: ["can't", "can't", "can't", "can't"],
        options: [["can't", "mustn't", "shouldn't", "wouldn't"], ["can't", "mustn't", "shouldn't", "wouldn't"], ["can't", "mustn't", "shouldn't", "wouldn't"], ["can't", "mustn't", "shouldn't", "wouldn't"]]
    },
    {
        rule: "Conditionals: Unless + Negative Meaning", category: "conditionals", level: "middle",
        meaning: "'Unless' already has a negative meaning, so don't use 'not' with 'unless' (unless = if...not).",
        sentences: ["Unless you {blank} now, you'll miss the bus.", "The game will be canceled unless the weather {blank}.", "She won't come unless you {blank} her.", "We'll stay here unless it {blank} raining."],
        answers: ["leave", "improves", "invite", "stops"],
        options: [["leave", "don't leave", "won't leave", "left"], ["improves", "doesn't improve", "won't improve", "improved"], ["invite", "don't invite", "won't invite", "invited"], ["stops", "doesn't stop", "won't stop", "stopped"]]
    },
    {
        rule: "Passive: With Phrasal Verbs", category: "passive", level: "high",
        meaning: "Phrasal verbs can be used in passive voice. The particle stays with the verb.",
        sentences: ["The meeting was {blank} off until next week.", "The children are well {blank} after.", "The problem must be {blank} into immediately.", "The old building is being {blank} down."],
        answers: ["put", "looked", "looked", "torn"],
        options: [["put", "called", "set", "turned"], ["looked", "taken", "cared", "watched"], ["looked", "checked", "searched", "dealt"], ["torn", "pulled", "knocked", "broken"]]
    },
    {
        rule: "Reported Speech: Past Modals Unchanged", category: "reported-speech", level: "high",
        meaning: "Past modals (could, might, would, should) don't change in reported speech.",
        sentences: ["'I could help.' \u2192 She said she {blank} help.", "'You should try harder.' \u2192 He said I {blank} try harder.", "'We might be late.' \u2192 They said they {blank} be late.", "'I would love to come.' \u2192 She said she {blank} love to come."],
        answers: ["could", "should", "might", "would"],
        options: [["could", "can", "would", "should"], ["should", "must", "could", "would"], ["might", "may", "could", "would"], ["would", "will", "could", "should"]]
    },
    {
        rule: "Articles: Zero Article with Meals", category: "articles", level: "elementary",
        meaning: "Don't use articles with meal names when referring to the meal in general.",
        sentences: ["What time is {blank}?", "I had {blank} at a nice restaurant.", "She skips {blank} every morning.", "Let's have {blank} together."],
        answers: ["lunch", "dinner", "breakfast", "lunch"],
        options: [["lunch", "the lunch", "a lunch", "an lunch"], ["dinner", "the dinner", "a dinner", "an dinner"], ["breakfast", "the breakfast", "a breakfast", "an breakfast"], ["lunch", "the lunch", "a lunch", "an lunch"]]
    },
    {
        rule: "Prepositions: To vs For (Purpose)", category: "prepositions", level: "middle",
        meaning: "'To' + infinitive for purpose of action. 'For' + noun/gerund for purpose of an object.",
        sentences: ["I went to the store {blank} buy some milk.", "This knife is used {blank} cutting bread.", "She called {blank} ask a question.", "What is this tool {blank}?"],
        answers: ["to", "for", "to", "for"],
        options: [["to", "for", "so", "because"], ["for", "to", "so", "because"], ["to", "for", "so", "because"], ["for", "to", "so", "because"]]
    },
    {
        rule: "Relative Clauses: That after Superlatives", category: "relative-clauses", level: "middle",
        meaning: "After superlatives and ordinals, 'that' is preferred over 'which/who' in defining relative clauses.",
        sentences: ["This is the best cake {blank} I've ever tasted.", "She's the first person {blank} I called.", "It was the worst movie {blank} I've ever seen.", "He's the tallest man {blank} I know."],
        answers: ["that", "that", "that", "that"],
        options: [["that", "which", "who", "whom"], ["that", "who", "which", "whom"], ["that", "which", "who", "whom"], ["that", "who", "which", "whom"]]
    },
    {
        rule: "Gerund: Possessive + Gerund", category: "gerunds-infinitives", level: "professional",
        meaning: "In formal English, use a possessive form before a gerund: 'his arriving' (formal) vs 'him arriving' (informal).",
        sentences: ["I appreciate {blank} helping me. (formal)", "Do you mind {blank} opening the window?", "{blank} being late caused problems. (formal)", "She was upset about {blank} leaving. (formal)"],
        answers: ["your", "my", "His", "their"],
        options: [["your", "you", "yours", "yourself"], ["my", "me", "mine", "myself"], ["His", "Him", "He", "Himself"], ["their", "them", "theirs", "themselves"]]
    },
    {
        rule: "Comparatives: Similar To / Different From", category: "comparatives", level: "middle",
        meaning: "'Similar to' and 'different from' (not 'different than' in British English) compare things.",
        sentences: ["Her dress is similar {blank} mine.", "This book is very different {blank} the movie.", "His opinion is similar {blank} hers.", "The two brothers are quite different {blank} each other."],
        answers: ["to", "from", "to", "from"],
        options: [["to", "from", "with", "than"], ["from", "to", "with", "than"], ["to", "from", "with", "than"], ["from", "to", "with", "than"]]
    },
    {
        rule: "Subject-Verb Agreement: Each/Every", category: "subject-verb-agreement", level: "middle",
        meaning: "'Each' and 'every' are always followed by singular nouns and singular verbs.",
        sentences: ["Each student {blank} a different answer.", "Every window {blank} been cleaned.", "Each of the candidates {blank} qualified.", "Every member of the team {blank} a role."],
        answers: ["has", "has", "is", "has"],
        options: [["has", "have", "are", "were"], ["has", "have", "is", "are"], ["is", "are", "has", "have"], ["has", "have", "is", "are"]]
    },
    {
        rule: "Pronouns: Indefinite Pronouns + Singular/Plural", category: "pronouns", level: "high",
        meaning: "Indefinite pronouns (everyone, someone, anyone, no one) are grammatically singular but often take plural pronouns in informal English.",
        sentences: ["Everyone should bring {blank} own lunch.", "Someone left {blank} umbrella here.", "If anyone calls, tell {blank} I'm busy.", "Nobody finished {blank} assignment on time."],
        answers: ["their", "their", "them", "their"],
        options: [["their", "his", "her", "its"], ["their", "his", "her", "its"], ["them", "him", "her", "it"], ["their", "his", "her", "its"]]
    },
    {
        rule: "Conjunctions: On the other hand", category: "conjunctions", level: "high",
        meaning: "'On the other hand' introduces a contrasting point, often used after 'on the one hand'.",
        sentences: ["The job pays well. On the {blank} hand, the hours are long.", "On the one hand, it's convenient. On the {blank} hand, it's expensive.", "The car is fast. On the {blank} hand, it uses a lot of fuel.", "He's very talented. On the {blank} hand, he lacks experience."],
        answers: ["other", "other", "other", "other"],
        options: [["other", "one", "first", "second"], ["other", "one", "first", "second"], ["other", "one", "first", "second"], ["other", "one", "first", "second"]]
    },
    {
        rule: "Quantifiers: Any vs Some in Offers", category: "quantifiers", level: "middle",
        meaning: "Use 'some' (not 'any') in offers and requests to be more polite or when expecting a positive answer.",
        sentences: ["Would you like {blank} coffee?", "Can I have {blank} water, please?", "Could you lend me {blank} money?", "Shall I get you {blank} tea?"],
        answers: ["some", "some", "some", "some"],
        options: [["some", "any", "no", "every"], ["some", "any", "no", "every"], ["some", "any", "no", "every"], ["some", "any", "no", "every"]]
    },
    {
        rule: "Word Formation: -ness Suffix", category: "word-formation", level: "middle",
        meaning: "Add -ness to adjectives to form abstract nouns: happy\u2192happiness, sad\u2192sadness, dark\u2192darkness.",
        sentences: ["Her {blank} was contagious. Everyone started smiling. (happy)", "The {blank} of the night made it hard to see. (dark)", "He couldn't hide his {blank} about the trip. (excited)", "The {blank} of the situation became apparent. (serious)"],
        answers: ["happiness", "darkness", "excitement", "seriousness"],
        options: [["happiness", "happily", "happier", "happiest"], ["darkness", "darkly", "darker", "darkest"], ["excitement", "excitedly", "excitable", "exciting"], ["seriousness", "seriously", "serious", "seriousity"]]
    },
    {
        rule: "Present Simple vs Present Continuous: Advanced", category: "tenses", level: "high",
        meaning: "Some verbs change meaning between simple and continuous: think (opinion vs process), have (possess vs experience), see (understand vs meeting).",
        sentences: ["I {blank} she is right. (opinion)", "I {blank} of moving to Canada. (process)", "She {blank} a large collection of stamps. (possess)", "She {blank} lunch with the director today. (arranged meeting)"],
        answers: ["think", "am thinking", "has", "is having"],
        options: [["think", "am thinking", "thought", "have thought"], ["am thinking", "think", "thought", "have thought"], ["has", "is having", "had", "was having"], ["is having", "has", "had", "was having"]]
    },
    {
        rule: "Past Continuous: Background Description", category: "tenses", level: "middle",
        meaning: "Past continuous sets the scene/background in narratives.",
        sentences: ["The sun {blank} and the birds were singing.", "People {blank} along the street as usual.", "It {blank} dark and the wind was howling.", "Children {blank} and laughing in the playground."],
        answers: ["was shining", "were walking", "was getting", "were playing"],
        options: [["was shining", "shone", "is shining", "has shone"], ["were walking", "walked", "are walking", "have walked"], ["was getting", "got", "is getting", "has got"], ["were playing", "played", "are playing", "have played"]]
    },
    {
        rule: "Present Perfect: Unfinished Actions", category: "tenses", level: "middle",
        meaning: "Present perfect describes actions that started in the past and continue to the present.",
        sentences: ["She {blank} here for five years.", "I {blank} this car since 2018.", "They {blank} married for 20 years.", "He {blank} at this school since September."],
        answers: ["has worked", "have had", "have been", "has been"],
        options: [["has worked", "worked", "is working", "was working"], ["have had", "had", "am having", "was having"], ["have been", "were", "are", "had been"], ["has been", "was", "is", "had been"]]
    },
    {
        rule: "Past Perfect: Reported Events", category: "tenses", level: "high",
        meaning: "Past perfect is commonly used in reported speech to shift present perfect and past simple back.",
        sentences: ["She said she {blank} never been to Rome.", "He explained that he {blank} the job the previous year.", "They told us they {blank} already eaten.", "I mentioned that I {blank} the film before."],
        answers: ["had", "had left", "had", "had seen"],
        options: [["had", "has", "have", "was"], ["had left", "left", "has left", "was leaving"], ["had", "have", "has", "were"], ["had seen", "saw", "have seen", "was seeing"]]
    },
    {
        rule: "Future: Present Simple for Timetables", category: "tenses", level: "middle",
        meaning: "Use present simple for scheduled events based on timetables.",
        sentences: ["The train {blank} at 9:15 tomorrow.", "The show {blank} at 8 p.m.", "Our flight {blank} at 6 a.m. next Monday.", "The exam {blank} on June 15th."],
        answers: ["departs", "starts", "leaves", "is"],
        options: [["departs", "will depart", "is departing", "departed"], ["starts", "will start", "is starting", "started"], ["leaves", "will leave", "is leaving", "left"], ["is", "will be", "is being", "was"]]
    },
    {
        rule: "Tenses: Present Perfect with Just", category: "tenses", level: "middle",
        meaning: "'Just' with present perfect means 'a very short time ago'.",
        sentences: ["I've {blank} arrived. Give me a minute.", "She's {blank} left. You just missed her.", "We've {blank} finished the meeting.", "He's {blank} called. He wants to talk to you."],
        answers: ["just", "just", "just", "just"],
        options: [["just", "already", "yet", "still"], ["just", "already", "yet", "still"], ["just", "already", "yet", "still"], ["just", "already", "yet", "still"]]
    },
    {
        rule: "Tenses: Past Simple Irregular Set 3", category: "tenses", level: "elementary",
        meaning: "Irregular past tense forms must be memorized.",
        sentences: ["She {blank} the answer immediately.", "He {blank} the ball to his teammate.", "I {blank} a strange noise outside.", "They {blank} us at the train station."],
        answers: ["knew", "passed", "heard", "met"],
        options: [["knew", "knowed", "known", "knowing"], ["passed", "past", "passing", "pasted"], ["heard", "heared", "hear", "hearing"], ["met", "meeted", "meet", "meeting"]]
    },
    {
        rule: "Tenses: Will for Facts About the Future", category: "tenses", level: "middle",
        meaning: "Use 'will' for facts or things we know about the future.",
        sentences: ["She {blank} be 30 next month.", "Tomorrow {blank} be Wednesday.", "The sun {blank} set at 7:45 p.m. today.", "Next year {blank} be a leap year."],
        answers: ["will", "will", "will", "will"],
        options: [["will", "is going to", "is", "would"], ["will", "is going to", "is", "would"], ["will", "is going to", "is", "would"], ["will", "is going to", "is", "would"]]
    },
    {
        rule: "Tenses: Be Used To vs Get Used To", category: "tenses", level: "high",
        meaning: "'Be used to + gerund' = accustomed to. 'Get used to + gerund' = become accustomed to.",
        sentences: ["I {blank} used to waking up early now.", "She can't {blank} used to the cold weather.", "He {blank} used to living alone.", "They are {blank} used to the new system."],
        answers: ["am", "get", "is", "getting"],
        options: [["am", "have", "was", "get"], ["get", "be", "have", "was"], ["is", "has", "was", "gets"], ["getting", "got", "been", "get"]]
    },
    {
        rule: "Tenses: Past Simple Negative with Irregular Verbs", category: "tenses", level: "elementary",
        meaning: "Negative past simple uses 'didn't' + base form, even with irregular verbs.",
        sentences: ["I {blank} see her at the party.", "She {blank} eat breakfast this morning.", "They {blank} know about the meeting.", "He {blank} come to school yesterday."],
        answers: ["didn't", "didn't", "didn't", "didn't"],
        options: [["didn't", "don't", "doesn't", "wasn't"], ["didn't", "don't", "doesn't", "wasn't"], ["didn't", "don't", "doesn't", "weren't"], ["didn't", "don't", "doesn't", "wasn't"]]
    },
    {
        rule: "Tenses: Future Continuous vs Future Simple", category: "tenses", level: "high",
        meaning: "Future continuous = action in progress at a future time. Future simple = simple future action.",
        sentences: ["I {blank} studying at this time tomorrow.", "I {blank} call you when I arrive.", "She {blank} flying over the Atlantic at midnight.", "He {blank} finish the report by 5."],
        answers: ["will be", "will", "will be", "will"],
        options: [["will be", "will", "am", "was"], ["will", "will be", "am", "was"], ["will be", "will", "is", "was"], ["will", "will be", "is", "was"]]
    },
    {
        rule: "Tenses: Going to for Intentions", category: "tenses", level: "elementary",
        meaning: "Use 'going to' for plans and intentions decided before speaking.",
        sentences: ["I {blank} going to study law at university.", "She {blank} going to visit her parents next week.", "They {blank} going to move house.", "He {blank} going to start his own business."],
        answers: ["am", "is", "are", "is"],
        options: [["am", "is", "are", "was"], ["is", "am", "are", "was"], ["are", "is", "am", "were"], ["is", "am", "are", "was"]]
    },
    {
        rule: "Modals: Must for Deduction", category: "modals", level: "middle",
        meaning: "Use 'must' when you are almost certain something is true based on evidence.",
        sentences: ["You've been driving all day. You {blank} be exhausted.", "That restaurant is always full. The food {blank} be good.", "She's been sneezing all day. She {blank} have a cold.", "He got the highest score. He {blank} be very smart."],
        answers: ["must", "must", "must", "must"],
        options: [["must", "might", "could", "should"], ["must", "might", "could", "should"], ["must", "might", "could", "should"], ["must", "might", "could", "should"]]
    },
    {
        rule: "Modals: Can't for Negative Deduction", category: "modals", level: "middle",
        meaning: "Use 'can't' when you are almost certain something is NOT true.",
        sentences: ["He {blank} be the thief. He was with me all evening.", "That {blank} be true. It's impossible.", "She {blank} be 40. She looks so young.", "They {blank} have left already. Their car is still here."],
        answers: ["can't", "can't", "can't", "can't"],
        options: [["can't", "mustn't", "shouldn't", "won't"], ["can't", "mustn't", "shouldn't", "won't"], ["can't", "mustn't", "shouldn't", "won't"], ["can't", "mustn't", "shouldn't", "won't"]]
    },
    {
        rule: "Modals: Should for Expectations", category: "modals", level: "middle",
        meaning: "Use 'should' when something is expected or likely.",
        sentences: ["The letter {blank} arrive tomorrow. I posted it two days ago.", "She {blank} be here soon. She left an hour ago.", "The cake {blank} be ready in 30 minutes.", "He's very well prepared. He {blank} pass easily."],
        answers: ["should", "should", "should", "should"],
        options: [["should", "must", "can", "will"], ["should", "must", "can", "will"], ["should", "must", "can", "will"], ["should", "must", "can", "will"]]
    },
    {
        rule: "Modals: May/Might for Future Possibility", category: "modals", level: "middle",
        meaning: "Use 'may' or 'might' when something is possible but not certain in the future.",
        sentences: ["I {blank} go to the gym later. I haven't decided.", "We {blank} take a holiday in August.", "She {blank} change her mind about the job.", "It {blank} snow tonight, according to the forecast."],
        answers: ["might", "may", "might", "may"],
        options: [["might", "must", "will", "shall"], ["may", "must", "will", "shall"], ["might", "must", "will", "shall"], ["may", "must", "will", "shall"]]
    },
    {
        rule: "Modals: Could for General Possibility", category: "modals", level: "middle",
        meaning: "Use 'could' for things that are generally possible.",
        sentences: ["This {blank} be the solution to our problem.", "Anything {blank} happen in this game.", "She {blank} be anywhere by now.", "The meeting {blank} last several hours."],
        answers: ["could", "could", "could", "could"],
        options: [["could", "must", "should", "will"], ["could", "must", "should", "will"], ["could", "must", "should", "will"], ["could", "must", "should", "will"]]
    },
    {
        rule: "Modals: Would for Past Habits", category: "modals", level: "middle",
        meaning: "Use 'would' for repeated past actions (not states). Similar to 'used to' but can't describe past states.",
        sentences: ["Every summer, we {blank} go camping by the lake.", "She {blank} always make pancakes on Sundays.", "After school, they {blank} play football for hours.", "He {blank} often tell us stories about the war."],
        answers: ["would", "would", "would", "would"],
        options: [["would", "will", "should", "could"], ["would", "will", "should", "could"], ["would", "will", "should", "could"], ["would", "will", "should", "could"]]
    },
    {
        rule: "Modals: Be Allowed To", category: "modals", level: "middle",
        meaning: "'Be allowed to' is an alternative to 'may/can' for permission, used in all tenses.",
        sentences: ["We {blank} allowed to leave early on Fridays.", "She wasn't {blank} to use her phone in class.", "Will visitors be {blank} to enter the building?", "They haven't been {blank} to see the patient yet."],
        answers: ["are", "allowed", "allowed", "allowed"],
        options: [["are", "were", "is", "was"], ["allowed", "allowing", "allow", "allows"], ["allowed", "allowing", "allow", "allows"], ["allowed", "allowing", "allow", "allows"]]
    },
    {
        rule: "Modals: Must Have for Past Certainty", category: "modals", level: "high",
        meaning: "'Must have + past participle' = you are almost certain something happened in the past.",
        sentences: ["She's not here. She {blank} have gone home.", "The cake is all gone. Someone {blank} have eaten it.", "He looks very tan. He {blank} have been on holiday.", "They're very tired. They {blank} have worked late."],
        answers: ["must", "must", "must", "must"],
        options: [["must", "might", "could", "should"], ["must", "might", "could", "should"], ["must", "might", "could", "should"], ["must", "might", "could", "should"]]
    },
    {
        rule: "First Conditional: Advice", category: "conditionals", level: "middle",
        meaning: "First conditional can give practical advice about real possible situations.",
        sentences: ["If you eat too much sugar, you {blank} gain weight.", "If she doesn't rest, she {blank} get worse.", "If you don't water the plants, they {blank} die.", "If he keeps spending like that, he {blank} run out of money."],
        answers: ["will", "will", "will", "will"],
        options: [["will", "would", "might", "could"], ["will", "would", "might", "could"], ["will", "would", "might", "could"], ["will", "would", "might", "could"]]
    },
    {
        rule: "Second Conditional: Imaginary", category: "conditionals", level: "middle",
        meaning: "Second conditional for imaginary present situations.",
        sentences: ["If I {blank} a bird, I would fly to the mountains.", "If she {blank} the president, she would change education policy.", "If we {blank} invisible, what would we do?", "If he {blank} more time, he would learn to paint."],
        answers: ["were", "were", "were", "had"],
        options: [["were", "am", "was", "will be"], ["were", "is", "was", "will be"], ["were", "are", "was", "will be"], ["had", "has", "have", "will have"]]
    },
    {
        rule: "Third Conditional: Regret", category: "conditionals", level: "high",
        meaning: "Third conditional often expresses regret about past actions or situations.",
        sentences: ["If I {blank} harder, I would have gotten into Harvard.", "If she {blank} taken that job, she would be rich now.", "If we {blank} booked earlier, we'd have gotten better seats.", "If they {blank} invested wisely, they wouldn't have lost money."],
        answers: ["had studied", "had", "had", "had"],
        options: [["had studied", "studied", "have studied", "would study"], ["had", "has", "have", "would have"], ["had", "have", "has", "would have"], ["had", "have", "has", "would have"]]
    },
    {
        rule: "Conditional: Only if", category: "conditionals", level: "high",
        meaning: "'Only if' is more restrictive than 'if', emphasizing a single condition.",
        sentences: ["I'll go {blank} if you come with me.", "He'll accept {blank} if they increase the salary.", "She'll forgive him {blank} if he apologizes sincerely.", "We'll succeed {blank} if everyone works together."],
        answers: ["only", "only", "only", "only"],
        options: [["only", "even", "unless", "until"], ["only", "even", "unless", "until"], ["only", "even", "unless", "until"], ["only", "even", "unless", "until"]]
    },
    {
        rule: "Conditional: What if + Past", category: "conditionals", level: "high",
        meaning: "'What if' + past simple suggests hypothetical or worried scenarios about the present/future.",
        sentences: ["What if he {blank} find out?", "What if they {blank} like the present?", "What if I {blank} the exam?", "What if she {blank} to come?"],
        answers: ["were to", "don't", "fail", "refuses"],
        options: [["were to", "will", "is going to", "would"], ["don't", "won't", "didn't", "wouldn't"], ["fail", "will fail", "failed", "would fail"], ["refuses", "will refuse", "refused", "would refuse"]]
    },
    {
        rule: "Conditional: Supposing", category: "conditionals", level: "high",
        meaning: "'Supposing' = 'imagine that' and can introduce hypothetical situations like 'if'.",
        sentences: ["Supposing you {blank} a million dollars, what would you do?", "Supposing she {blank} to help, what then?", "Supposing it {blank} on our wedding day, do we have a backup plan?", "Supposing they {blank} offered you the job, would you take it?"],
        answers: ["won", "refused", "rains", "had"],
        options: [["won", "win", "will win", "would win"], ["refused", "refuses", "will refuse", "would refuse"], ["rains", "rained", "will rain", "would rain"], ["had", "have", "will have", "would have"]]
    },
    {
        rule: "Passive: Present Perfect", category: "passive", level: "middle",
        meaning: "Present perfect passive: has/have + been + past participle.",
        sentences: ["The email {blank} been sent.", "Several changes {blank} been made.", "The deadline {blank} been extended.", "New rules {blank} been introduced."],
        answers: ["has", "have", "has", "have"],
        options: [["has", "have", "is", "are"], ["have", "has", "are", "is"], ["has", "have", "is", "are"], ["have", "has", "are", "is"]]
    },
    {
        rule: "Passive: Causative Have", category: "passive", level: "high",
        meaning: "'Have something done' = pay/arrange for someone else to do it for you.",
        sentences: ["I need to have my car {blank}.", "She had her portrait {blank} by a famous artist.", "We're having our house {blank}.", "He had his watch {blank} last week."],
        answers: ["repaired", "painted", "renovated", "fixed"],
        options: [["repaired", "repairing", "repair", "repairs"], ["painted", "painting", "paint", "paints"], ["renovated", "renovating", "renovate", "renovates"], ["fixed", "fixing", "fix", "fixes"]]
    },
    {
        rule: "Passive: Supposed To Be", category: "passive", level: "middle",
        meaning: "'Be supposed to' in passive means something is expected or believed.",
        sentences: ["The project {blank} supposed to be finished by now.", "This restaurant {blank} supposed to be very good.", "You {blank} supposed to be at work.", "The weather {blank} supposed to improve tomorrow."],
        answers: ["was", "is", "are", "is"],
        options: [["was", "is", "are", "were"], ["is", "was", "are", "were"], ["are", "is", "was", "were"], ["is", "was", "are", "were"]]
    },
    {
        rule: "Passive: It is said that", category: "passive", level: "professional",
        meaning: "Impersonal passive constructions for reporting: It is said/believed/thought/reported that...",
        sentences: ["It {blank} believed that the company will expand.", "It {blank} reported that the storm caused significant damage.", "It {blank} thought that he is the best candidate.", "It {blank} estimated that the project will cost $5 million."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "was", "has", "had"], ["is", "was", "has", "had"], ["is", "was", "has", "had"], ["is", "was", "has", "had"]]
    },
    {
        rule: "Passive: Subject + Passive Reporting Verb", category: "passive", level: "professional",
        meaning: "Subject + is/was + said/believed/thought + to-infinitive (active infinitive or perfect infinitive).",
        sentences: ["He {blank} said to be the richest man in town.", "She {blank} believed to have left the country.", "They {blank} thought to be planning a merger.", "The artifact {blank} known to date back 5,000 years."],
        answers: ["is", "is", "are", "is"],
        options: [["is", "was", "has", "had"], ["is", "was", "has", "had"], ["are", "were", "have", "had"], ["is", "was", "has", "had"]]
    },
    {
        rule: "Reported Speech: Future to Conditional", category: "reported-speech", level: "middle",
        meaning: "'Will' becomes 'would', 'shall' becomes 'should/would' in reported speech.",
        sentences: ["'I'll be late.' \u2192 She said she {blank} be late.", "'We shall overcome.' \u2192 They said they {blank} overcome.", "'I won't tell.' \u2192 He said he {blank} tell.", "'It'll be fine.' \u2192 She said it {blank} be fine."],
        answers: ["would", "would", "wouldn't", "would"],
        options: [["would", "will", "could", "should"], ["would", "shall", "could", "should"], ["wouldn't", "won't", "couldn't", "shouldn't"], ["would", "will", "could", "should"]]
    },
    {
        rule: "Reported Speech: Present Continuous to Past Continuous", category: "reported-speech", level: "middle",
        meaning: "'Am/is/are + -ing' becomes 'was/were + -ing' in reported speech.",
        sentences: ["'I am working.' \u2192 He said he {blank} working.", "'They are leaving.' \u2192 She said they {blank} leaving.", "'She is sleeping.' \u2192 He said she {blank} sleeping.", "'We are having fun.' \u2192 They said they {blank} having fun."],
        answers: ["was", "were", "was", "were"],
        options: [["was", "is", "am", "are"], ["were", "are", "was", "is"], ["was", "is", "am", "are"], ["were", "are", "was", "is"]]
    },
    {
        rule: "Reported Speech: Imperative", category: "reported-speech", level: "middle",
        meaning: "Report imperatives with 'told/asked/ordered + object + to-infinitive'. Negative: '+ not to-infinitive'.",
        sentences: ["'Sit down.' \u2192 The teacher told us {blank} down.", "'Don't touch that.' \u2192 She told him {blank} touch that.", "'Please wait.' \u2192 He asked us {blank}.", "'Stop talking.' \u2192 The teacher ordered them {blank} talking."],
        answers: ["to sit", "not to", "to wait", "to stop"],
        options: [["to sit", "sit", "sitting", "sat"], ["not to", "don't", "to not", "didn't"], ["to wait", "wait", "waiting", "waited"], ["to stop", "stop", "stopping", "stopped"]]
    },
    {
        rule: "Reported Speech: Here/There Changes", category: "reported-speech", level: "high",
        meaning: "Place references change in reported speech: here\u2192there, this\u2192that, these\u2192those.",
        sentences: ["'I live here.' \u2192 She said she lived {blank}.", "'I'll take this one.' \u2192 He said he would take {blank} one.", "'These are mine.' \u2192 She said {blank} were hers.", "'Come here.' \u2192 She told me to go {blank}."],
        answers: ["there", "that", "those", "there"],
        options: [["there", "here", "then", "that"], ["that", "this", "the", "a"], ["those", "these", "the", "that"], ["there", "here", "then", "that"]]
    },
    {
        rule: "Reported Speech: Questions with Ask", category: "reported-speech", level: "middle",
        meaning: "Report questions using 'asked' + if/whether (yes/no) or 'asked' + wh-word (wh-questions). Use statement word order.",
        sentences: ["'Do you like music?' \u2192 She asked {blank} I liked music.", "'Where is the station?' \u2192 He asked {blank} the station was.", "'When did you arrive?' \u2192 She asked {blank} I had arrived.", "'Have you been here before?' \u2192 He asked {blank} I had been there before."],
        answers: ["if", "where", "when", "if"],
        options: [["if", "that", "what", "how"], ["where", "if", "that", "what"], ["when", "if", "that", "what"], ["if", "that", "what", "how"]]
    },
    {
        rule: "Articles: No Article with Sports", category: "articles", level: "elementary",
        meaning: "Don't use articles before the names of sports and games.",
        sentences: ["She plays {blank} tennis every weekend.", "He's good at {blank} chess.", "We enjoy watching {blank} football.", "They play {blank} basketball after school."],
        answers: ["\u2014", "\u2014", "\u2014", "\u2014"],
        options: [["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"], ["\u2014", "the", "a", "an"]]
    },
    {
        rule: "Articles: Newspapers and Organizations", category: "articles", level: "middle",
        meaning: "Use 'the' with newspapers, organizations, and institutions: the BBC, the Times, the United Nations.",
        sentences: ["I read it in {blank} Times this morning.", "She works for {blank} United Nations.", "{blank} BBC reported the story first.", "He's a member of {blank} European Parliament."],
        answers: ["the", "the", "The", "the"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["The", "A", "An", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Articles: Last/Next without The", category: "articles", level: "middle",
        meaning: "Don't use 'the' with last/next + time word when referring to the most recent or coming one relative to now.",
        sentences: ["I saw her {blank} week.", "We're leaving {blank} Friday.", "She graduated {blank} year.", "The meeting is {blank} Monday."],
        answers: ["last", "next", "last", "next"],
        options: [["last", "the last", "a last", "in last"], ["next", "the next", "a next", "in next"], ["last", "the last", "a last", "in last"], ["next", "the next", "a next", "in next"]]
    },
    {
        rule: "Articles: The with Same", category: "articles", level: "middle",
        meaning: "Always use 'the' before 'same'.",
        sentences: ["We go to {blank} same school.", "She wore {blank} same dress twice.", "They have {blank} same opinion.", "He made {blank} same mistake again."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Prepositions: At night / In the morning", category: "prepositions", level: "elementary",
        meaning: "Use 'at' with night. Use 'in' with morning, afternoon, evening.",
        sentences: ["I like reading {blank} night.", "She jogs {blank} the morning.", "We usually eat out {blank} the evening.", "He works best {blank} night."],
        answers: ["at", "in", "in", "at"],
        options: [["at", "in", "on", "during"], ["in", "at", "on", "during"], ["in", "at", "on", "during"], ["at", "in", "on", "during"]]
    },
    {
        rule: "Prepositions: On + Days", category: "prepositions", level: "elementary",
        meaning: "Use 'on' with days of the week and specific dates.",
        sentences: ["I have a meeting {blank} Monday.", "Her birthday is {blank} March 15th.", "We always go shopping {blank} Saturdays.", "The event is {blank} Christmas Day."],
        answers: ["on", "on", "on", "on"],
        options: [["on", "in", "at", "by"], ["on", "in", "at", "by"], ["on", "in", "at", "by"], ["on", "in", "at", "by"]]
    },
    {
        rule: "Prepositions: Responsible for / Aware of", category: "prepositions", level: "middle",
        meaning: "Fixed adjective + preposition combinations: responsible for, aware of, capable of, keen on.",
        sentences: ["She is responsible {blank} the budget.", "Are you aware {blank} the risks?", "He's not capable {blank} such behavior.", "I'm keen {blank} learning more."],
        answers: ["for", "of", "of", "on"],
        options: [["for", "of", "on", "about"], ["of", "for", "on", "about"], ["of", "for", "on", "about"], ["on", "of", "for", "about"]]
    },
    {
        rule: "Prepositions: Look forward to", category: "prepositions", level: "middle",
        meaning: "'Look forward to' is followed by a noun or gerund (not an infinitive). 'To' here is a preposition.",
        sentences: ["I look forward to {blank} from you.", "She's looking forward to {blank} her family.", "We look forward to {blank} you soon.", "He's looking forward to {blank} vacation."],
        answers: ["hearing", "seeing", "meeting", "his"],
        options: [["hearing", "hear", "heard", "hears"], ["seeing", "see", "saw", "sees"], ["meeting", "meet", "met", "meets"], ["his", "him", "he", "he's"]]
    },
    {
        rule: "Prepositions: Verb + Preposition Set 2", category: "prepositions", level: "high",
        meaning: "More verb + preposition collocations: apply for, cope with, refer to, result in.",
        sentences: ["She applied {blank} the position last week.", "How do you cope {blank} stress?", "Please refer {blank} page 10 of the manual.", "The mistake resulted {blank} a significant loss."],
        answers: ["for", "with", "to", "in"],
        options: [["for", "to", "with", "about"], ["with", "for", "to", "about"], ["to", "for", "with", "about"], ["in", "to", "for", "with"]]
    },
    {
        rule: "Relative Clauses: Who vs That for People", category: "relative-clauses", level: "middle",
        meaning: "Both 'who' and 'that' can be used for people in defining relative clauses. 'Who' is more formal.",
        sentences: ["The man {blank} helped me was very kind.", "Do you know the girl {blank} won the prize?", "The doctor {blank} treated her is very experienced.", "Is there anyone {blank} speaks Japanese?"],
        answers: ["who", "that", "who", "that"],
        options: [["who", "which", "whom", "whose"], ["that", "which", "whom", "whose"], ["who", "which", "whom", "whose"], ["that", "which", "whom", "whose"]]
    },
    {
        rule: "Relative Clauses: Defining vs Non-Defining", category: "relative-clauses", level: "high",
        meaning: "Defining clauses identify which noun; non-defining clauses add extra information (with commas).",
        sentences: ["My sister {blank} lives in Paris is visiting. (I have several sisters \u2014 defining)", "My sister, {blank} lives in Paris, is visiting. (I have one sister \u2014 non-defining)", "The car {blank} I bought is blue. (defining)", "His car, {blank} is brand new, broke down. (non-defining)"],
        answers: ["who", "who", "that", "which"],
        options: [["who", "which", "that", "whose"], ["who", "that", "which", "whose"], ["that", "which", "who", "whose"], ["which", "that", "who", "whose"]]
    },
    {
        rule: "Relative Clauses: Where for Places", category: "relative-clauses", level: "middle",
        meaning: "'Where' replaces 'in/at which' in relative clauses referring to places.",
        sentences: ["The house {blank} I grew up has been demolished.", "Is this the shop {blank} you bought your dress?", "The city {blank} she was born is very small.", "I know a place {blank} we can eat cheaply."],
        answers: ["where", "where", "where", "where"],
        options: [["where", "which", "that", "who"], ["where", "which", "that", "who"], ["where", "which", "that", "who"], ["where", "which", "that", "who"]]
    },
    {
        rule: "Verb + Gerund: Practice Set", category: "gerunds-infinitives", level: "middle",
        meaning: "Verbs followed by gerund: admit, deny, avoid, consider, delay, enjoy, finish, imagine, keep, miss, practice, suggest.",
        sentences: ["He denied {blank} the vase.", "She keeps {blank} the same mistake.", "I miss {blank} near the beach.", "He finished {blank} the book last night."],
        answers: ["breaking", "making", "living", "reading"],
        options: [["breaking", "to break", "break", "broke"], ["making", "to make", "make", "made"], ["living", "to live", "live", "lived"], ["reading", "to read", "read", "reads"]]
    },
    {
        rule: "Verb + Infinitive: Practice Set", category: "gerunds-infinitives", level: "middle",
        meaning: "Verbs followed by infinitive: afford, agree, appear, choose, decide, expect, fail, hope, learn, manage, offer, plan, promise, seem, tend, want.",
        sentences: ["She can't afford {blank} a new car.", "He managed {blank} the problem.", "They offered {blank} us move.", "I hope {blank} you again soon."],
        answers: ["to buy", "to solve", "to help", "to see"],
        options: [["to buy", "buying", "buy", "bought"], ["to solve", "solving", "solve", "solved"], ["to help", "helping", "help", "helped"], ["to see", "seeing", "see", "saw"]]
    },
    {
        rule: "Gerund vs Infinitive: Like/Love/Hate", category: "gerunds-infinitives", level: "middle",
        meaning: "'Like/love/hate' can be followed by either gerund or infinitive with little difference in meaning.",
        sentences: ["I like {blank} early in the morning.", "She loves {blank} to music.", "He hates {blank} in queues.", "They like {blank} to new places."],
        answers: ["running", "listening", "waiting", "traveling"],
        options: [["running", "to run", "run", "ran"], ["listening", "to listen", "listen", "listened"], ["waiting", "to wait", "wait", "waited"], ["traveling", "to travel", "travel", "traveled"]]
    },
    {
        rule: "Gerund: Common Errors", category: "gerunds-infinitives", level: "middle",
        meaning: "Common errors include using infinitive instead of gerund after prepositions and certain verbs.",
        sentences: ["He's interested in {blank} abroad. (NOT: to study)", "She suggested {blank} early. (NOT: to leave)", "I don't mind {blank}. (NOT: to wait)", "Thank you for {blank} me. (NOT: to invite)"],
        answers: ["studying", "leaving", "waiting", "inviting"],
        options: [["studying", "to study", "study", "studied"], ["leaving", "to leave", "leave", "left"], ["waiting", "to wait", "wait", "waited"], ["inviting", "to invite", "invite", "invited"]]
    },
    {
        rule: "Comparative: Adjective Spelling Rules", category: "comparatives", level: "elementary",
        meaning: "One-syllable adjectives ending in -e add -r (nice\u2192nicer). Adjectives ending in consonant-vowel-consonant double the consonant (big\u2192bigger).",
        sentences: ["This room is {blank} than the other one. (large)", "It's getting {blank} outside. (hot)", "She's {blank} than her brother. (thin)", "He's a {blank} worker than I expected. (hard)"],
        answers: ["larger", "hotter", "thinner", "harder"],
        options: [["larger", "more large", "largest", "most large"], ["hotter", "more hot", "hottest", "most hot"], ["thinner", "more thin", "thinnest", "most thin"], ["harder", "more hard", "hardest", "most hard"]]
    },
    {
        rule: "Superlative: Formation", category: "comparatives", level: "elementary",
        meaning: "One-syllable: the + adjective + -est. Two syllables ending in -y: the + adjective (-iest). 2+ syllables: the most + adjective.",
        sentences: ["Mount Everest is the {blank} mountain in the world. (high)", "She's the {blank} person I know. (friendly)", "This is the {blank} building in the city. (modern)", "He's the {blank} runner on the team. (fast)"],
        answers: ["highest", "friendliest", "most modern", "fastest"],
        options: [["highest", "most high", "higher", "more high"], ["friendliest", "most friendly", "friendlier", "more friendly"], ["most modern", "modernest", "moderner", "more modern"], ["fastest", "most fast", "faster", "more fast"]]
    },
    {
        rule: "Comparative: Irregular Forms Review", category: "comparatives", level: "middle",
        meaning: "Irregular comparatives: good\u2192better, bad\u2192worse, far\u2192further/farther, little\u2192less, much/many\u2192more.",
        sentences: ["My marks are {blank} than last year.", "The weather is getting {blank}.", "I need {blank} information.", "She has {blank} experience than the other applicants."],
        answers: ["better", "worse", "more", "more"],
        options: [["better", "gooder", "best", "more good"], ["worse", "badder", "worst", "more bad"], ["more", "much", "most", "many"], ["more", "much", "most", "many"]]
    },
    {
        rule: "Subject-Verb Agreement: Verbs After Long Subjects", category: "subject-verb-agreement", level: "college",
        meaning: "The verb must agree with the main subject, even when separated by phrases.",
        sentences: ["The captain of the two teams {blank} the toss.", "A collection of rare stamps {blank} been donated.", "The effects of the new policy {blank} yet to be seen.", "The price of these apartments {blank} risen sharply."],
        answers: ["calls", "has", "are", "has"],
        options: [["calls", "call", "calling", "called"], ["has", "have", "is", "are"], ["are", "is", "has", "have"], ["has", "have", "is", "are"]]
    },
    {
        rule: "Subject-Verb Agreement: As well as", category: "subject-verb-agreement", level: "high",
        meaning: "'As well as' does not create a compound subject. The verb agrees with the first subject.",
        sentences: ["The teacher, as well as the students, {blank} present.", "She, as well as her friends, {blank} invited.", "The CEO, as well as the directors, {blank} attending.", "The house, as well as the garden, {blank} beautiful."],
        answers: ["was", "was", "is", "is"],
        options: [["was", "were", "are", "have been"], ["was", "were", "are", "have been"], ["is", "are", "was", "were"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Subject-Verb Agreement: Together with / Along with", category: "subject-verb-agreement", level: "high",
        meaning: "'Together with' and 'along with' don't change the number of the subject. Verb agrees with the main subject.",
        sentences: ["The professor, together with her assistants, {blank} conducting the study.", "The manager, along with his team, {blank} responsible.", "The bride, together with her bridesmaids, {blank} ready.", "The book, along with the notes, {blank} on the desk."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "are", "was", "were"], ["is", "are", "was", "were"], ["is", "are", "was", "were"], ["is", "are", "was", "were"]]
    },
    {
        rule: "Pronouns: Subject vs Object", category: "pronouns", level: "elementary",
        meaning: "Subject pronouns (I, he, she, we, they) are subjects. Object pronouns (me, him, her, us, them) are objects.",
        sentences: ["{blank} and I went to the cinema.", "The teacher gave {blank} the homework.", "Between you and {blank}, I think he's wrong.", "She told {blank} to be quiet."],
        answers: ["He", "us", "me", "them"],
        options: [["He", "Him", "His", "Himself"], ["us", "we", "our", "ours"], ["me", "I", "my", "mine"], ["them", "they", "their", "theirs"]]
    },
    {
        rule: "Pronouns: Myself vs Me", category: "pronouns", level: "middle",
        meaning: "Use 'myself' only when the subject is 'I' (reflexive/emphatic). Don't use 'myself' instead of 'me' as an object.",
        sentences: ["Please send the report to {blank}. (NOT myself)", "I hurt {blank} while cooking. (reflexive)", "The manager and {blank} will attend the meeting. (NOT myself)", "I {blank} saw the accident. (emphatic)"],
        answers: ["me", "myself", "I", "myself"],
        options: [["me", "myself", "I", "mine"], ["myself", "me", "I", "mine"], ["I", "myself", "me", "mine"], ["myself", "me", "I", "mine"]]
    },
    {
        rule: "Conjunctions: Since (Reason)", category: "conjunctions", level: "middle",
        meaning: "'Since' can mean 'because' when giving a reason. More formal than 'because'.",
        sentences: ["{blank} you're here, could you help me?", "{blank} it was late, we decided to take a taxi.", "I'll drive, {blank} you don't have a license.", "She didn't go out, {blank} she was feeling unwell."],
        answers: ["Since", "Since", "since", "since"],
        options: [["Since", "Although", "Despite", "However"], ["Since", "Although", "Despite", "However"], ["since", "although", "despite", "however"], ["since", "although", "despite", "however"]]
    },
    {
        rule: "Conjunctions: Though vs Although vs Even though", category: "conjunctions", level: "high",
        meaning: "All three mean 'despite the fact that'. 'Even though' is the strongest. 'Though' can come at the end of a sentence.",
        sentences: ["{blank} he's 80, he still runs every day. (strong emphasis)", "She went out, {blank} it was raining.", "The exam was difficult. I passed, {blank}. (end of sentence)", "He accepted the job {blank} the salary was low."],
        answers: ["Even though", "although", "though", "although"],
        options: [["Even though", "Although", "Though", "Despite"], ["although", "even though", "though", "despite"], ["though", "even though", "although", "despite"], ["although", "even though", "though", "despite"]]
    },
    {
        rule: "Conjunctions: Purpose: So That", category: "conjunctions", level: "middle",
        meaning: "'So that' + subject + can/will/would expresses purpose.",
        sentences: ["She saved money {blank} that she could buy a car.", "Speak louder {blank} that everyone can hear you.", "He left early {blank} that he wouldn't be late.", "I'll write it down {blank} that I don't forget."],
        answers: ["so", "so", "so", "so"],
        options: [["so", "such", "too", "very"], ["so", "such", "too", "very"], ["so", "such", "too", "very"], ["so", "such", "too", "very"]]
    },
    {
        rule: "Quantifiers: A Little vs Little", category: "quantifiers", level: "middle",
        meaning: "'A little' = some, enough (positive). 'Little' = not much, not enough (negative).",
        sentences: ["There's {blank} milk left. We can have coffee. (enough)", "There's {blank} hope of finding survivors. (not enough)", "She speaks {blank} French. Enough to get by. (some)", "He has {blank} patience with children. (not enough)"],
        answers: ["a little", "little", "a little", "little"],
        options: [["a little", "little", "few", "a few"], ["little", "a little", "few", "a few"], ["a little", "little", "few", "a few"], ["little", "a little", "few", "a few"]]
    },
    {
        rule: "Quantifiers: A Few vs Few", category: "quantifiers", level: "middle",
        meaning: "'A few' = some, enough (positive). 'Few' = not many, not enough (negative).",
        sentences: ["I have {blank} friends in this city. I'm not lonely. (some)", "She has {blank} friends here. She feels lonely. (not many)", "There are {blank} options available. Let's look at them. (some)", "There are {blank} tickets left. We should hurry. (not many)"],
        answers: ["a few", "few", "a few", "few"],
        options: [["a few", "few", "a little", "little"], ["few", "a few", "little", "a little"], ["a few", "few", "a little", "little"], ["few", "a few", "little", "a little"]]
    },
    {
        rule: "Quantifiers: Each of / Every", category: "quantifiers", level: "middle",
        meaning: "'Each of' + the/these/my + plural noun. 'Every' + singular noun (no 'of' without 'one').",
        sentences: ["{blank} of the students received a certificate.", "She checked {blank} room in the house.", "{blank} one of us has a role to play.", "{blank} child deserves a good education."],
        answers: ["Each", "every", "Every", "Every"],
        options: [["Each", "Every", "All", "Both"], ["every", "each", "all", "both"], ["Every", "Each", "All", "Both"], ["Every", "Each", "All", "Both"]]
    },
    {
        rule: "Word Formation: -tion vs -sion", category: "word-formation", level: "middle",
        meaning: "-tion is more common (information, education). -sion often follows -d, -de, -se, -t sounds (decision, permission, admission).",
        sentences: ["She made a difficult {blank}. (decide)", "The school provides an excellent {blank}. (educate)", "You need {blank} to enter. (permit)", "His {blank} was very clear. (explain)"],
        answers: ["decision", "education", "permission", "explanation"],
        options: [["decision", "decidion", "deciding", "decidement"], ["education", "educasion", "educating", "educament"], ["permission", "permition", "permitting", "permitement"], ["explanation", "explansion", "explaining", "explainment"]]
    },
    {
        rule: "Word Formation: Un- vs In-/Im-", category: "word-formation", level: "high",
        meaning: "Un- is the most common negative prefix (unhappy). In-/im-/il-/ir- are used with Latin-origin words (impossible, illegal, irregular).",
        sentences: ["His answer was {blank}. (correct\u2192not correct)", "The task seemed {blank}. (possible\u2192not possible)", "Her handwriting is {blank}. (legible\u2192not legible)", "His behavior was {blank}. (responsible\u2192not responsible)"],
        answers: ["incorrect", "impossible", "illegible", "irresponsible"],
        options: [["incorrect", "uncorrect", "discorrect", "miscorrect"], ["impossible", "unpossible", "dispossible", "mispossible"], ["illegible", "unlegible", "dislegible", "mislegible"], ["irresponsible", "unresponsible", "disresponsible", "misresponsible"]]
    },
    {
        rule: "Word Formation: -ous Adjectives", category: "word-formation", level: "middle",
        meaning: "The suffix -ous turns nouns into adjectives meaning 'having the quality of': danger\u2192dangerous, fame\u2192famous.",
        sentences: ["The journey was extremely {blank}. (danger)", "She is a very {blank} actress. (fame)", "The experiment produced {blank} results. (mystery)", "He made a {blank} decision. (courage)"],
        answers: ["dangerous", "famous", "mysterious", "courageous"],
        options: [["dangerous", "dangered", "dangering", "dangerly"], ["famous", "famed", "faming", "famely"], ["mysterious", "mysteried", "mysterying", "mysterly"], ["courageous", "couraged", "couraging", "couragely"]]
    },
    {
        rule: "Word Formation: Abstract Nouns with -ity", category: "word-formation", level: "high",
        meaning: "The suffix -ity turns adjectives into abstract nouns: creative\u2192creativity, possible\u2192possibility, complex\u2192complexity.",
        sentences: ["She showed great {blank} in solving the problem. (creative)", "There's a {blank} of rain tomorrow. (possible)", "The {blank} of the issue surprised everyone. (complex)", "He questioned the {blank} of the data. (reliable)"],
        answers: ["creativity", "possibility", "complexity", "reliability"],
        options: [["creativity", "creativeness", "creating", "createness"], ["possibility", "possibleness", "possibilition", "possibletion"], ["complexity", "complexness", "complexion", "complexment"], ["reliability", "reliableness", "reliation", "reliament"]]
    },
    {
        rule: "Word Order: Question Tags", category: "word-order", level: "middle",
        meaning: "Question tags use the opposite auxiliary: positive statement \u2192 negative tag, and vice versa.",
        sentences: ["She's coming, {blank} she?", "You don't like it, {blank} you?", "He can swim, {blank} he?", "They haven't left, {blank} they?"],
        answers: ["isn't", "do", "can't", "have"],
        options: [["isn't", "is", "doesn't", "does"], ["do", "don't", "are", "aren't"], ["can't", "can", "doesn't", "does"], ["have", "haven't", "do", "don't"]]
    },
    {
        rule: "Word Order: Enough", category: "word-order", level: "middle",
        meaning: "'Enough' comes after adjectives/adverbs but before nouns.",
        sentences: ["Is the room big {blank}?", "We don't have {blank} chairs.", "He didn't run fast {blank} to win.", "There's {blank} food for everyone."],
        answers: ["enough", "enough", "enough", "enough"],
        options: [["enough", "too", "very", "quite"], ["enough", "too", "very", "quite"], ["enough", "too", "very", "quite"], ["enough", "too", "very", "quite"]]
    },
    {
        rule: "Tenses: Past Simple vs Past Perfect", category: "tenses", level: "high",
        meaning: "Use past perfect when the earlier event needs to be emphasized; use past simple when the sequence is clear from context (with after, before, etc.).",
        sentences: ["After he {blank} his homework, he watched TV.", "She {blank} him before they started working together.", "By the time I got to the station, the train {blank}.", "When they arrived, everyone {blank} already."],
        answers: ["had done", "had met", "had left", "had left"],
        options: [["had done", "did", "has done", "does"], ["had met", "met", "has met", "meets"], ["had left", "left", "has left", "leaves"], ["had left", "left", "has left", "leaves"]]
    },
    {
        rule: "Modals: Prohibition", category: "modals", level: "elementary",
        meaning: "'Mustn't' expresses prohibition (something is not allowed). 'Can't' also expresses prohibition.",
        sentences: ["You {blank} smoke in the hospital.", "Students {blank} use phones during exams.", "You {blank} park on a double yellow line.", "Visitors {blank} feed the animals."],
        answers: ["mustn't", "can't", "mustn't", "mustn't"],
        options: [["mustn't", "don't have to", "shouldn't", "needn't"], ["can't", "don't have to", "shouldn't", "needn't"], ["mustn't", "don't have to", "shouldn't", "needn't"], ["mustn't", "don't have to", "shouldn't", "needn't"]]
    },
    {
        rule: "Conditionals: Type 1 with Imperative", category: "conditionals", level: "middle",
        meaning: "First conditional can use an imperative in the result clause.",
        sentences: ["If you see John, {blank} him I said hello.", "If it gets too hot, {blank} the window.", "If you need help, {blank} me.", "If the phone rings, {blank} answer it."],
        answers: ["tell", "open", "call", "don't"],
        options: [["tell", "told", "telling", "tells"], ["open", "opened", "opening", "opens"], ["call", "called", "calling", "calls"], ["don't", "didn't", "won't", "can't"]]
    },
    {
        rule: "Passive: Common Mistakes", category: "passive", level: "middle",
        meaning: "Common passive errors: using 'been' without 'have', confusing -ed and -ing forms, using active where passive is needed.",
        sentences: ["The letter was {blank} yesterday. (send)", "The cake has been {blank}. (eat)", "English is {blank} all over the world. (speak)", "The movie will be {blank} next month. (release)"],
        answers: ["sent", "eaten", "spoken", "released"],
        options: [["sent", "sended", "sending", "send"], ["eaten", "ate", "eating", "eat"], ["spoken", "spoke", "speaking", "speak"], ["released", "releasing", "release", "releases"]]
    },
    {
        rule: "Reported Speech: Say without Object", category: "reported-speech", level: "middle",
        meaning: "'Say' doesn't take an indirect object. Use 'say (that)...' or 'say to someone...' (informal).",
        sentences: ["She {blank} she was tired.", "He {blank} that he'd be late.", "They {blank} the food was delicious.", "I {blank} I didn't agree."],
        answers: ["said", "said", "said", "said"],
        options: [["said", "told", "spoke", "talked"], ["said", "told", "spoke", "talked"], ["said", "told", "spoke", "talked"], ["said", "told", "spoke", "talked"]]
    },
    {
        rule: "Articles: Common Errors", category: "articles", level: "middle",
        meaning: "Common article errors: missing 'a/an' before singular countable nouns, unnecessary 'the' before general plural nouns.",
        sentences: ["She is {blank} very good student. (need article)", "I love {blank} dogs. (general, no article)", "He plays {blank} guitar beautifully. (instrument, need the)", "We had {blank} dinner at 7. (meal, no article)"],
        answers: ["a", "\u2014", "the", "\u2014"],
        options: [["a", "the", "an", "\u2014"], ["\u2014", "the", "a", "an"], ["the", "a", "an", "\u2014"], ["\u2014", "the", "a", "an"]]
    },
    {
        rule: "Prepositions: Common Errors", category: "prepositions", level: "middle",
        meaning: "Common preposition errors: married to (not with), arrive at/in (not to), listen to (not at), depend on (not of).",
        sentences: ["She got married {blank} her college sweetheart.", "We arrived {blank} the hotel at midnight.", "I enjoy listening {blank} classical music.", "It depends {blank} the weather."],
        answers: ["to", "at", "to", "on"],
        options: [["to", "with", "for", "by"], ["at", "to", "in", "on"], ["to", "at", "for", "of"], ["on", "of", "in", "at"]]
    },
    {
        rule: "Gerund: Subject Complement", category: "gerunds-infinitives", level: "middle",
        meaning: "Gerunds can function as subject complements after 'is/was'.",
        sentences: ["Her favorite hobby is {blank}.", "The hardest part was {blank} the instructions.", "His biggest fear is {blank} in public.", "The best thing about the job is {blank} new people."],
        answers: ["painting", "understanding", "speaking", "meeting"],
        options: [["painting", "to paint", "paint", "painted"], ["understanding", "to understand", "understand", "understood"], ["speaking", "to speak", "speak", "spoke"], ["meeting", "to meet", "meet", "met"]]
    },
    {
        rule: "Comparatives: Common Mistakes", category: "comparatives", level: "middle",
        meaning: "Common errors: double comparatives (more better), wrong form (more easy instead of easier), missing 'the' with superlatives.",
        sentences: ["This is {blank} than the previous version. (correct form)", "She is {blank} student in the class.", "He speaks English {blank} than his brother.", "This is {blank} restaurant in town."],
        answers: ["better", "the best", "better", "the most expensive"],
        options: [["better", "more better", "more good", "gooder"], ["the best", "best", "the most good", "the goodest"], ["better", "more better", "more good", "gooder"], ["the most expensive", "most expensive", "the expensivest", "more expensive"]]
    },
    {
        rule: "SVA: Neither/Either Review", category: "subject-verb-agreement", level: "high",
        meaning: "'Neither' (without 'nor') and 'either' (without 'or') take singular verbs when used as pronouns.",
        sentences: ["{blank} of the options is suitable.", "I've tried both restaurants. {blank} was particularly good.", "{blank} of the candidates has enough experience.", "Have you read either book? {blank} is quite long."],
        answers: ["Neither", "Neither", "Neither", "Neither"],
        options: [["Neither", "None", "Both", "Either"], ["Neither", "None", "Both", "Either"], ["Neither", "None", "Both", "Either"], ["Neither", "None", "Both", "Either"]]
    },
    {
        rule: "Pronouns: One Another vs Each Other", category: "pronouns", level: "middle",
        meaning: "Traditionally, 'each other' = two people, 'one another' = more than two. In practice, they're often interchangeable.",
        sentences: ["The couple looked at {blank} and smiled.", "The team members helped {blank} prepare.", "They've known {blank} since childhood.", "All the neighbors greet {blank} warmly."],
        answers: ["each other", "one another", "each other", "one another"],
        options: [["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"], ["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"]]
    },
    {
        rule: "Conjunctions: Due to / Because of", category: "conjunctions", level: "middle",
        meaning: "'Due to' and 'because of' are followed by nouns or gerunds. 'Due to' is more formal.",
        sentences: ["The game was canceled {blank} to the rain.", "She succeeded {blank} of her hard work.", "The delay was {blank} to a technical problem.", "He missed the meeting {blank} of traffic."],
        answers: ["due", "because", "due", "because"],
        options: [["due", "because", "owing", "thanks"], ["because", "due", "owing", "thanks"], ["due", "because", "owing", "thanks"], ["because", "due", "owing", "thanks"]]
    },
    {
        rule: "Quantifiers: Too vs Very", category: "quantifiers", level: "elementary",
        meaning: "'Very' = to a great degree (neutral). 'Too' = more than is good/wanted/needed (negative implication).",
        sentences: ["This coffee is {blank} hot to drink. (can't drink it)", "She is {blank} intelligent. (positive)", "The music is {blank} loud. I can't concentrate. (negative)", "He's a {blank} talented musician. (positive)"],
        answers: ["too", "very", "too", "very"],
        options: [["too", "very", "so", "quite"], ["very", "too", "so", "quite"], ["too", "very", "so", "quite"], ["very", "too", "so", "quite"]]
    },
    {
        rule: "Word Formation: Over- Prefix", category: "word-formation", level: "middle",
        meaning: "The prefix 'over-' means 'too much': overwork, overcook, overreact, overestimate.",
        sentences: ["Don't {blank} the pasta or it'll be mushy.", "She tends to {blank} when she's stressed.", "They {blank} the number of guests who would attend.", "He's been {blank} lately. He needs a break."],
        answers: ["overcook", "overreact", "overestimated", "overworking"],
        options: [["overcook", "undercook", "miscook", "recook"], ["overreact", "underreact", "misreact", "react"], ["overestimated", "underestimated", "misestimated", "reestimated"], ["overworking", "underworking", "misworking", "reworking"]]
    },
    {
        rule: "Tenses: Have Been vs Have Gone", category: "tenses", level: "middle",
        meaning: "'Have been' = visited and returned. 'Have gone' = left and not returned yet.",
        sentences: ["She has {blank} to the store. She'll be back soon. (not returned)", "I have {blank} to Japan three times. (returned each time)", "Where has he {blank}? He's not in his office. (not returned)", "Have you ever {blank} to Australia? (experience)"],
        answers: ["gone", "been", "gone", "been"],
        options: [["gone", "been", "went", "going"], ["been", "gone", "went", "going"], ["gone", "been", "went", "going"], ["been", "gone", "went", "going"]]
    },
    {
        rule: "Modals: Overview of All Modals", category: "modals", level: "college",
        meaning: "Comprehensive understanding of all modal verbs and their functions.",
        sentences: ["She {blank} speak four languages. (ability)", "You {blank} see a doctor. (advice)", "I {blank} be late today. (possibility)", "You {blank} not park here. (prohibition)"],
        answers: ["can", "should", "might", "must"],
        options: [["can", "should", "might", "must"], ["should", "can", "might", "must"], ["might", "should", "can", "must"], ["must", "should", "might", "can"]]
    },
    {
        rule: "Conditionals: Mixed Types Review", category: "conditionals", level: "college",
        meaning: "In real communication, conditional types are often mixed depending on meaning.",
        sentences: ["If it {blank}, we usually stay indoors. (zero)", "If it {blank}, we'll stay indoors. (first)", "If it {blank} every day, I would move somewhere dry. (second)", "If it {blank} yesterday, the match would have been canceled. (third)"],
        answers: ["rains", "rains", "rained", "had rained"],
        options: [["rains", "rained", "will rain", "would rain"], ["rains", "rained", "will rain", "would rain"], ["rained", "rains", "will rain", "would rain"], ["had rained", "rained", "rains", "will rain"]]
    },
    {
        rule: "Passive: Choosing Active vs Passive", category: "passive", level: "college",
        meaning: "Choose passive when the agent is unknown, unimportant, or obvious; or when the action/object is more important than the doer.",
        sentences: ["Penicillin {blank} discovered in 1928. (agent unimportant in context)", "Someone {blank} my phone! (prefer active when agent matters)", "The results {blank} be announced tomorrow.", "Thousands of trees {blank} planted every year."],
        answers: ["was", "stole", "will", "are"],
        options: [["was", "is", "has", "had"], ["stole", "was stolen", "is stealing", "has stolen"], ["will", "are", "have", "should"], ["are", "is", "was", "were"]]
    },
    {
        rule: "Articles: Advanced Review", category: "articles", level: "college",
        meaning: "Article usage depends on whether the noun is countable/uncountable, specific/general, first/second mention.",
        sentences: ["Can you give me {blank} piece of advice?", "She applied to {blank} University of Oxford.", "I need to buy {blank} new laptop.", "They adopted {blank} puppy from the shelter."],
        answers: ["a", "the", "a", "a"],
        options: [["a", "the", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["a", "the", "an", "\u2014"], ["a", "the", "an", "\u2014"]]
    },
    {
        rule: "Prepositions: Advanced Collocations", category: "prepositions", level: "college",
        meaning: "Advanced verb + preposition collocations used in academic and professional contexts.",
        sentences: ["The report accounts {blank} all expenses.", "She attributes her success {blank} hard work.", "The law prohibits employees {blank} striking.", "He refrained {blank} making any comments."],
        answers: ["for", "to", "from", "from"],
        options: [["for", "to", "of", "about"], ["to", "for", "of", "about"], ["from", "of", "for", "about"], ["from", "of", "for", "about"]]
    },
    {
        rule: "Relative Clauses: Advanced", category: "relative-clauses", level: "college",
        meaning: "Advanced relative clause structures including reduced clauses and clauses with quantifiers.",
        sentences: ["The students, many of {blank} were international, excelled.", "She has two children, the older of {blank} is a doctor.", "The company, {blank} headquarters are in London, is expanding.", "The candidates, all of {blank} were qualified, were interviewed."],
        answers: ["whom", "whom", "whose", "whom"],
        options: [["whom", "who", "which", "that"], ["whom", "who", "which", "that"], ["whose", "who", "which", "that"], ["whom", "who", "which", "that"]]
    },
    {
        rule: "Gerund vs Infinitive: Advanced", category: "gerunds-infinitives", level: "college",
        meaning: "Some verbs take either gerund or infinitive with a change in meaning: try, go on, come, mean.",
        sentences: ["She went on {blank} for another hour. (continued)", "She went on {blank} the Nobel Prize. (did something next)", "He came {blank} the old photos while cleaning. (found by chance)", "This means {blank} a lot of overtime. (involves)"],
        answers: ["talking", "to win", "across", "working"],
        options: [["talking", "to talk", "talk", "talked"], ["to win", "winning", "win", "won"], ["across", "to", "into", "for"], ["working", "to work", "work", "worked"]]
    },
    {
        rule: "Comparatives: Advanced Structures", category: "comparatives", level: "college",
        meaning: "Advanced comparative structures used in formal writing and speech.",
        sentences: ["The more she practiced, the {blank} she became.", "His work is {blank} than satisfactory.", "This problem is {blank} more complex than we thought.", "She is {blank} the most qualified candidate."],
        answers: ["better", "more", "far", "by far"],
        options: [["better", "good", "best", "well"], ["more", "much", "most", "very"], ["far", "very", "much", "so"], ["by far", "very", "much", "so"]]
    },
    {
        rule: "SVA: Advanced Review", category: "subject-verb-agreement", level: "college",
        meaning: "Complex subject-verb agreement in academic and professional writing.",
        sentences: ["The data {blank} inconclusive. (traditionally plural, now often singular)", "A series of events {blank} led to the crisis.", "The majority of the population {blank} in favor.", "A variety of options {blank} available."],
        answers: ["are", "has", "is", "are"],
        options: [["are", "is", "was", "were"], ["has", "have", "is", "are"], ["is", "are", "was", "were"], ["are", "is", "was", "were"]]
    },
    {
        rule: "Tenses: Present Continuous for Temporary", category: "tenses", level: "middle",
        meaning: "Present continuous describes temporary situations, even if not happening at this exact moment.",
        sentences: ["She's {blank} with friends until she finds an apartment.", "I'm {blank} a fascinating book at the moment.", "He's {blank} French this semester.", "They're {blank} in a hotel while their house is renovated."],
        answers: ["staying", "reading", "studying", "staying"],
        options: [["staying", "stays", "stayed", "stay"], ["reading", "reads", "read", "to read"], ["studying", "studies", "studied", "study"], ["staying", "stays", "stayed", "stay"]]
    },
    {
        rule: "Tenses: Will vs Going to Review", category: "tenses", level: "middle",
        meaning: "Comprehensive review of will (spontaneous, promise, prediction) vs going to (plan, evidence-based prediction).",
        sentences: ["I {blank} have the pasta, please. (spontaneous decision)", "She {blank} to start a new job next month. (plan)", "Look out! That vase {blank} to fall! (evidence)", "I promise I {blank} be there on time. (promise)"],
        answers: ["will", "is going", "is going", "will"],
        options: [["will", "am going to", "am", "would"], ["is going", "will", "is", "was going"], ["is going", "will", "is", "was going"], ["will", "am going to", "am", "would"]]
    },
    {
        rule: "Modals: Permission Hierarchy", category: "modals", level: "middle",
        meaning: "Permission modals from informal to formal: can \u2192 could \u2192 may \u2192 might (rarely used for permission).",
        sentences: ["{blank} I sit here? (informal)", "I wonder if I {blank} ask you something. (very polite)", "Employees {blank} not use the main entrance. (formal rule)", "You {blank} use the pool during opening hours. (general permission)"],
        answers: ["Can", "could", "may", "can"],
        options: [["Can", "May", "Must", "Should"], ["could", "can", "may", "must"], ["may", "can", "must", "should"], ["can", "may", "must", "should"]]
    },
    {
        rule: "Passive: Fixed Passive Expressions", category: "passive", level: "high",
        meaning: "Some expressions are always passive: be born, be married, be based, be made of, be known for.",
        sentences: ["She was {blank} in 1995.", "The company is {blank} in New York.", "This watch is {blank} of gold.", "He is {blank} for his generosity."],
        answers: ["born", "based", "made", "known"],
        options: [["born", "bearing", "bore", "bears"], ["based", "basing", "base", "bases"], ["made", "making", "make", "makes"], ["known", "knowing", "know", "knows"]]
    },
    {
        rule: "Conditionals: What If Present", category: "conditionals", level: "middle",
        meaning: "'What if' + present simple expresses a real future possibility that concerns the speaker.",
        sentences: ["What if the train {blank} late?", "What if it {blank} during the picnic?", "What if she {blank} say yes?", "What if they {blank} find out?"],
        answers: ["is", "rains", "doesn't", "don't"],
        options: [["is", "was", "will be", "would be"], ["rains", "rained", "will rain", "would rain"], ["doesn't", "didn't", "won't", "wouldn't"], ["don't", "didn't", "won't", "wouldn't"]]
    },
    {
        rule: "Reported Speech: Tell vs Say Review", category: "reported-speech", level: "middle",
        meaning: "'Tell' needs an object (tell someone). 'Say' does not take an object directly.",
        sentences: ["She {blank} me she would be late.", "He {blank} that he was sorry.", "They {blank} us to wait outside.", "I {blank} I disagreed with the plan."],
        answers: ["told", "said", "told", "said"],
        options: [["told", "said", "spoke", "talked"], ["said", "told", "spoke", "talked"], ["told", "said", "spoke", "talked"], ["said", "told", "spoke", "talked"]]
    },
    {
        rule: "Articles: A vs The with Context", category: "articles", level: "middle",
        meaning: "Use 'a/an' for new or non-specific information. Use 'the' for shared knowledge or previously mentioned items.",
        sentences: ["I bought {blank} new phone yesterday.", "Can you turn off {blank} light? (we both know which one)", "She works in {blank} bank. (not specific)", "He opened {blank} door and walked in. (contextually known)"],
        answers: ["a", "the", "a", "the"],
        options: [["a", "the", "an", "\u2014"], ["the", "a", "an", "\u2014"], ["a", "the", "an", "\u2014"], ["the", "a", "an", "\u2014"]]
    },
    {
        rule: "Prepositions: At/In/On Review", category: "prepositions", level: "elementary",
        meaning: "Comprehensive review of basic preposition usage for time and place.",
        sentences: ["She was born {blank} 1990.", "The meeting is {blank} Tuesday.", "I'll see you {blank} noon.", "They live {blank} a small village."],
        answers: ["in", "on", "at", "in"],
        options: [["in", "on", "at", "by"], ["on", "in", "at", "by"], ["at", "in", "on", "by"], ["in", "on", "at", "by"]]
    },
    {
        rule: "Gerund: After Mind", category: "gerunds-infinitives", level: "middle",
        meaning: "'Mind' is followed by gerund. 'Do you mind + gerund?' = Is it OK if...?",
        sentences: ["Do you mind {blank} the window?", "I don't mind {blank} a bit longer.", "Would you mind {blank} me with this?", "She doesn't mind {blank} overtime."],
        answers: ["opening", "waiting", "helping", "working"],
        options: [["opening", "to open", "open", "opened"], ["waiting", "to wait", "wait", "waited"], ["helping", "to help", "help", "helped"], ["working", "to work", "work", "worked"]]
    },
    {
        rule: "Comparatives: Much/Far/A Lot + Comparative", category: "comparatives", level: "middle",
        meaning: "Modifiers like 'much', 'far', and 'a lot' intensify comparatives (but NOT 'very').",
        sentences: ["She's {blank} more experienced than him.", "This test was {blank} harder than the last one.", "He's {blank} taller than I expected.", "The new office is {blank} bigger."],
        answers: ["much", "far", "a lot", "much"],
        options: [["much", "very", "more", "most"], ["far", "very", "more", "most"], ["a lot", "very", "more", "most"], ["much", "very", "more", "most"]]
    },
    {
        rule: "SVA: There + Be", category: "subject-verb-agreement", level: "elementary",
        meaning: "After 'there', use 'is/was' for singular and 'are/were' for plural.",
        sentences: ["There {blank} a cat on the roof.", "There {blank} some children in the park.", "There {blank} not enough time.", "There {blank} many reasons to celebrate."],
        answers: ["is", "are", "is", "are"],
        options: [["is", "are", "was", "were"], ["are", "is", "were", "was"], ["is", "are", "was", "were"], ["are", "is", "were", "was"]]
    },
    {
        rule: "Pronouns: Something/Anything/Nothing + Adjective", category: "pronouns", level: "middle",
        meaning: "Adjectives come AFTER indefinite pronouns like something, anything, nothing, someone, etc.",
        sentences: ["Is there anything {blank} I can do?", "I want to tell you something {blank}.", "There's nothing {blank} with the car.", "Have you heard anything {blank} from them?"],
        answers: ["else", "important", "wrong", "new"],
        options: [["else", "other", "more", "different"], ["important", "importantly", "importance", "importanting"], ["wrong", "wrongly", "wrongness", "wronging"], ["new", "newly", "newness", "newer"]]
    },
    {
        rule: "Conjunctions: As vs While vs When", category: "conjunctions", level: "middle",
        meaning: "'As', 'while', and 'when' can all mean 'at the same time as', but have subtle differences.",
        sentences: ["{blank} I was walking home, I saw an accident.", "She listened to music {blank} she worked.", "I met her {blank} I was studying abroad.", "{blank} the years went by, they grew apart."],
        answers: ["While", "while", "when", "As"],
        options: [["While", "Because", "Although", "Despite"], ["while", "because", "although", "despite"], ["when", "while", "as", "because"], ["As", "While", "When", "Because"]]
    },
    {
        rule: "Quantifiers: How much vs How many", category: "quantifiers", level: "elementary",
        meaning: "'How much' + uncountable noun. 'How many' + countable plural noun.",
        sentences: ["How {blank} money do you have?", "How {blank} students are in the class?", "How {blank} water should I drink daily?", "How {blank} languages do you speak?"],
        answers: ["much", "many", "much", "many"],
        options: [["much", "many", "few", "little"], ["many", "much", "little", "few"], ["much", "many", "few", "little"], ["many", "much", "little", "few"]]
    },
    {
        rule: "Word Formation: -ment Suffix", category: "word-formation", level: "middle",
        meaning: "Add -ment to verbs to form nouns: develop\u2192development, agree\u2192agreement, manage\u2192management.",
        sentences: ["The {blank} of the project took longer than expected. (develop)", "We need to reach an {blank} soon. (agree)", "The {blank} approved the budget. (manage)", "Her {blank} in the role was impressive. (achieve)"],
        answers: ["development", "agreement", "management", "achievement"],
        options: [["development", "develoption", "developer", "developness"], ["agreement", "agreation", "agreer", "agreeness"], ["management", "managetion", "manager", "manageness"], ["achievement", "achievetion", "achiever", "achieveness"]]
    },
    {
        rule: "Future Perfect", category: "tenses", level: "high",
        meaning: "Use the future perfect (will have + past participle) to describe an action that will be completed before a specific time in the future.",
        sentences: ["By next June, I {blank} here for ten years.", "She {blank} the book by the time you arrive.", "They {blank} the project before the deadline.", "By midnight, we {blank} over 500 miles."],
        answers: ["will have worked", "will have finished", "will have completed", "will have driven"],
        options: [["will have worked", "will work", "will be working", "have worked"], ["will have finished", "will finish", "finishes", "has finished"], ["will have completed", "will complete", "complete", "have completed"], ["will have driven", "will drive", "are driving", "have driven"]]
    },
    {
        rule: "Future Perfect", category: "tenses", level: "high",
        meaning: "Use the future perfect to talk about something that will already be done before a point in the future.",
        sentences: ["By the end of this year, he {blank} three marathons.", "I {blank} dinner by the time you get home.", "The train {blank} by the time we reach the station.", "By 2030, scientists {blank} a cure for the disease."],
        answers: ["will have run", "will have cooked", "will have left", "will have found"],
        options: [["will have run", "will run", "is running", "has run"], ["will have cooked", "will cook", "am cooking", "have cooked"], ["will have left", "will leave", "leaves", "has left"], ["will have found", "will find", "find", "have found"]]
    },
    {
        rule: "Future Continuous", category: "tenses", level: "middle",
        meaning: "Use the future continuous (will be + -ing) to describe an action that will be in progress at a specific time in the future.",
        sentences: ["This time tomorrow, I {blank} on the beach.", "At 8 pm tonight, she {blank} for her exam.", "Don't call at noon; they {blank} lunch.", "Next week, we {blank} through Europe."],
        answers: ["will be lying", "will be studying", "will be having", "will be travelling"],
        options: [["will be lying", "will lie", "am lying", "have lain"], ["will be studying", "will study", "studies", "has studied"], ["will be having", "will have", "have", "are having"], ["will be travelling", "will travel", "travel", "are travelling"]]
    },
    {
        rule: "Future Continuous", category: "tenses", level: "middle",
        meaning: "The future continuous describes ongoing actions at a specific future time or planned future events.",
        sentences: ["At this time next month, I {blank} in my new apartment.", "She {blank} the presentation when you arrive.", "They {blank} the new system all week.", "He {blank} clients in Tokyo next Monday."],
        answers: ["will be living", "will be giving", "will be testing", "will be meeting"],
        options: [["will be living", "will live", "live", "am living"], ["will be giving", "will give", "gives", "is giving"], ["will be testing", "will test", "test", "are testing"], ["will be meeting", "will meet", "meets", "is meeting"]]
    },
    {
        rule: "Past Perfect Continuous", category: "tenses", level: "high",
        meaning: "Use the past perfect continuous (had been + -ing) to show the duration of an action that was happening before another past action.",
        sentences: ["She {blank} for two hours before the rain stopped.", "They {blank} for the bus for 30 minutes when it finally arrived.", "I {blank} all day, so I was exhausted.", "He {blank} at the company for years before he got promoted."],
        answers: ["had been running", "had been waiting", "had been working", "had been working"],
        options: [["had been running", "was running", "has been running", "ran"], ["had been waiting", "were waiting", "have been waiting", "waited"], ["had been working", "was working", "have been working", "worked"], ["had been working", "was working", "has been working", "worked"]]
    },
    {
        rule: "Past Perfect Continuous", category: "tenses", level: "high",
        meaning: "The past perfect continuous emphasises the duration of a past activity before another past event.",
        sentences: ["We {blank} for hours before we found the restaurant.", "She looked tired because she {blank} since dawn.", "The ground was wet because it {blank}.", "He {blank} so hard that he fell asleep at his desk."],
        answers: ["had been driving", "had been working", "had been raining", "had been studying"],
        options: [["had been driving", "were driving", "drove", "have been driving"], ["had been working", "was working", "worked", "has been working"], ["had been raining", "was raining", "rained", "has been raining"], ["had been studying", "was studying", "studied", "has been studying"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "college",
        meaning: "Use the future perfect continuous (will have been + -ing) to emphasise the duration of an activity up to a point in the future.",
        sentences: ["By next month, I {blank} at this company for five years.", "She {blank} for six hours by the time the marathon ends.", "By December, they {blank} on the project for a year.", "He {blank} for three hours by the time you arrive."],
        answers: ["will have been working", "will have been running", "will have been working", "will have been driving"],
        options: [["will have been working", "will work", "will be working", "have been working"], ["will have been running", "will run", "will be running", "has been running"], ["will have been working", "will work", "will be working", "have been working"], ["will have been driving", "will drive", "will be driving", "has been driving"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "college",
        meaning: "The future perfect continuous stresses the duration of an ongoing action before a specified future time.",
        sentences: ["By the end of July, we {blank} in this house for twenty years.", "She {blank} English for ten years by next spring.", "By midnight, the surgeons {blank} for twelve hours.", "I {blank} this book for a month by the time I finish it."],
        answers: ["will have been living", "will have been studying", "will have been operating", "will have been reading"],
        options: [["will have been living", "will live", "will be living", "have been living"], ["will have been studying", "will study", "will be studying", "has been studying"], ["will have been operating", "will operate", "will be operating", "have been operating"], ["will have been reading", "will read", "will be reading", "have been reading"]]
    },
    {
        rule: "Should Have Done", category: "modals", level: "middle",
        meaning: "Use 'should have + past participle' to express regret or criticism about a past action that didn't happen.",
        sentences: ["You {blank} earlier. Now you're late.", "She {blank} him the truth from the beginning.", "We {blank} more carefully before signing the contract.", "They {blank} the hotel in advance."],
        answers: ["should have left", "should have told", "should have read", "should have booked"],
        options: [["should have left", "must have left", "could have left", "would have left"], ["should have told", "must have told", "could have told", "would have told"], ["should have read", "must have read", "could have read", "would have read"], ["should have booked", "must have booked", "could have booked", "would have booked"]]
    },
    {
        rule: "Could Have Done", category: "modals", level: "middle",
        meaning: "Use 'could have + past participle' to talk about a past possibility that didn't happen.",
        sentences: ["You {blank} me! I was waiting for hours.", "She {blank} the exam, but she didn't study.", "We {blank} the earlier train if we had hurried.", "He {blank} a doctor, but he chose to be an artist."],
        answers: ["could have called", "could have passed", "could have caught", "could have become"],
        options: [["could have called", "should have called", "must have called", "would have called"], ["could have passed", "should have passed", "must have passed", "would have passed"], ["could have caught", "should have caught", "must have caught", "would have caught"], ["could have become", "should have become", "must have become", "would have become"]]
    },
    {
        rule: "Must Have Done", category: "modals", level: "high",
        meaning: "Use 'must have + past participle' to make a strong deduction about a past event.",
        sentences: ["She {blank} the bus. She's never this late.", "He's soaking wet. It {blank} outside.", "They look exhausted. They {blank} all night.", "The door is open. Someone {blank} to lock it."],
        answers: ["must have missed", "must have been raining", "must have been working", "must have forgotten"],
        options: [["must have missed", "should have missed", "could have missed", "might have missed"], ["must have been raining", "should have been raining", "could have been raining", "might have been raining"], ["must have been working", "should have been working", "could have been working", "might have been working"], ["must have forgotten", "should have forgotten", "could have forgotten", "might have forgotten"]]
    },
    {
        rule: "Might Have Been Doing", category: "modals", level: "college",
        meaning: "Use 'might have been + -ing' to speculate about an ongoing action in the past.",
        sentences: ["She {blank} when you called; that's why she didn't answer.", "They {blank} about the same thing at that moment.", "He {blank} to music, so he didn't hear the doorbell.", "We {blank} in the wrong direction the whole time."],
        answers: ["might have been sleeping", "might have been thinking", "might have been listening", "might have been driving"],
        options: [["might have been sleeping", "must have been sleeping", "should have been sleeping", "could have slept"], ["might have been thinking", "must have been thinking", "should have been thinking", "could have thought"], ["might have been listening", "must have been listening", "should have been listening", "could have listened"], ["might have been driving", "must have been driving", "should have been driving", "could have driven"]]
    },
    {
        rule: "Mixed Conditionals (Past/Present)", category: "conditionals", level: "college",
        meaning: "Mix the third and second conditional to show a past cause with a present result: If + past perfect, would + base form.",
        sentences: ["If I {blank} harder at school, I would have a better job now.", "If she {blank} that course, she would be a qualified nurse today.", "If we {blank} to that city, we wouldn't be living here now.", "If he {blank} the lottery, he would be rich today."],
        answers: ["had studied", "had taken", "had moved", "had won"],
        options: [["had studied", "studied", "have studied", "would study"], ["had taken", "took", "has taken", "would take"], ["had moved", "moved", "have moved", "would move"], ["had won", "won", "has won", "would win"]]
    },
    {
        rule: "Mixed Conditionals (Present/Past)", category: "conditionals", level: "college",
        meaning: "Mix the second and third conditional to show a present cause with a past result: If + past simple, would have + past participle.",
        sentences: ["If I {blank} taller, I would have been accepted into the basketball team.", "If she {blank} more patient, she wouldn't have lost her temper yesterday.", "If he {blank} braver, he would have asked her out.", "If they {blank} richer, they would have bought that house last year."],
        answers: ["were", "were", "were", "were"],
        options: [["were", "had been", "would be", "am"], ["were", "had been", "would be", "is"], ["were", "had been", "would be", "is"], ["were", "had been", "would be", "are"]]
    },
    {
        rule: "Mixed Conditionals (Past/Present)", category: "conditionals", level: "professional",
        meaning: "A past unreal condition can produce a present unreal result.",
        sentences: ["If I {blank} the job offer, I would be living in New York now.", "If she {blank} to the doctor earlier, she wouldn't still be ill.", "If they {blank} their money wisely, they wouldn't be broke now.", "If he {blank} his passport, he would be on the plane right now."],
        answers: ["had accepted", "had gone", "had invested", "hadn't lost"],
        options: [["had accepted", "accepted", "would accept", "have accepted"], ["had gone", "went", "would go", "has gone"], ["had invested", "invested", "would invest", "have invested"], ["hadn't lost", "didn't lose", "wouldn't lose", "hasn't lost"]]
    },
    {
        rule: "Causative: Have Something Done", category: "passive", level: "high",
        meaning: "Use 'have + object + past participle' when you arrange for someone else to do something for you.",
        sentences: ["I need to {blank} my car repaired.", "She {blank} her hair cut yesterday.", "We should {blank} the house painted before winter.", "They are {blank} a new kitchen installed next week."],
        answers: ["have", "had", "have", "having"],
        options: [["have", "get", "make", "let"], ["had", "has", "having", "have"], ["have", "had", "having", "has"], ["having", "had", "have", "has"]]
    },
    {
        rule: "Causative: Get Something Done", category: "passive", level: "high",
        meaning: "Use 'get + object + past participle' as an informal alternative to 'have something done'.",
        sentences: ["I need to {blank} this document translated.", "She {blank} her phone fixed last week.", "We must {blank} these forms signed by Friday.", "He wants to {blank} his suit dry-cleaned."],
        answers: ["get", "got", "get", "get"],
        options: [["get", "have", "make", "let"], ["got", "get", "gotten", "gets"], ["get", "got", "getting", "gets"], ["get", "got", "getting", "gets"]]
    },
    {
        rule: "Causative: Have Someone Do vs Get Someone To Do", category: "passive", level: "college",
        meaning: "Use 'have + person + base form' or 'get + person + to-infinitive' to say you cause someone to do something.",
        sentences: ["I'll {blank} my assistant send you the files.", "She {blank} her brother to help her move.", "The manager {blank} the team work overtime.", "Can you {blank} someone to fix the printer?"],
        answers: ["have", "got", "had", "get"],
        options: [["have", "get", "make", "let"], ["got", "had", "made", "let"], ["had", "got", "let", "made"], ["get", "have", "make", "let"]]
    },
    {
        rule: "Cleft Sentences with It", category: "word-order", level: "college",
        meaning: "Use 'It is/was... that/who' to emphasise a particular part of a sentence.",
        sentences: ["{blank} John who broke the window.", "{blank} in Paris that we first met.", "{blank} the manager who made the final decision.", "{blank} her kindness that impressed me most."],
        answers: ["It was", "It was", "It was", "It was"],
        options: [["It was", "There was", "That was", "What was"], ["It was", "There was", "That was", "What was"], ["It was", "There was", "That was", "What was"], ["It was", "There was", "That was", "What was"]]
    },
    {
        rule: "Cleft Sentences with What", category: "word-order", level: "college",
        meaning: "Use 'What + clause + is/was' to focus attention on a particular element.",
        sentences: ["{blank} I need is a good night's sleep.", "{blank} she said surprised everyone.", "{blank} bothers me is his attitude.", "{blank} happened next was truly remarkable."],
        answers: ["What", "What", "What", "What"],
        options: [["What", "It", "That", "Which"], ["What", "It", "That", "Which"], ["What", "It", "That", "Which"], ["What", "It", "That", "Which"]]
    },
    {
        rule: "Cleft Sentences with All and The thing", category: "word-order", level: "professional",
        meaning: "Use 'All + clause + is/was' or 'The thing + clause + is/was' to emphasise something specific.",
        sentences: ["{blank} I want is some peace and quiet.", "{blank} that matters is that you're safe.", "The thing I like {blank} about her is her honesty.", "{blank} you need to do is sign the form."],
        answers: ["All", "All", "most", "All"],
        options: [["All", "What", "It", "The"], ["All", "What", "It", "The"], ["most", "best", "more", "least"], ["All", "What", "It", "The"]]
    },
    {
        rule: "Inversion with Negative Adverbials", category: "word-order", level: "professional",
        meaning: "After negative adverbials at the start of a sentence, use inverted word order (auxiliary + subject).",
        sentences: ["Never {blank} I seen such a beautiful sunset.", "Not only {blank} she win the race, but she also broke the record.", "Hardly {blank} we sat down when the phone rang.", "Seldom {blank} he arrive on time."],
        answers: ["have", "did", "had", "does"],
        options: [["have", "had", "did", "do"], ["did", "has", "had", "does"], ["had", "have", "did", "do"], ["does", "did", "has", "had"]]
    },
    {
        rule: "Inversion with Negative Adverbials", category: "word-order", level: "professional",
        meaning: "Place a negative adverbial at the beginning and invert subject and auxiliary for emphasis.",
        sentences: ["At no time {blank} the suspect leave the building.", "Under no circumstances {blank} you touch that button.", "On no account {blank} this door be left open.", "In no way {blank} I responsible for the error."],
        answers: ["did", "should", "should", "am"],
        options: [["did", "does", "has", "was"], ["should", "could", "would", "might"], ["should", "could", "would", "might"], ["am", "was", "have", "do"]]
    },
    {
        rule: "Inversion with Only", category: "word-order", level: "professional",
        meaning: "When 'only + adverbial' starts a sentence, use inverted word order.",
        sentences: ["Only after the meeting {blank} she realise her mistake.", "Only when he apologised {blank} she forgive him.", "Only by working hard {blank} you succeed.", "Only then {blank} I understand the problem."],
        answers: ["did", "did", "can", "did"],
        options: [["did", "has", "was", "had"], ["did", "has", "was", "had"], ["can", "did", "has", "was"], ["did", "has", "was", "had"]]
    },
    {
        rule: "Inversion with So/Such", category: "word-order", level: "professional",
        meaning: "Use 'So + adjective/adverb + auxiliary + subject + that' for emphatic inversion.",
        sentences: ["So tired {blank} she that she fell asleep immediately.", "So quickly {blank} he run that nobody could catch him.", "Such {blank} the confusion that the event was cancelled.", "So beautiful {blank} the scenery that we stopped to take photos."],
        answers: ["was", "did", "was", "was"],
        options: [["was", "is", "did", "had"], ["did", "was", "is", "had"], ["was", "is", "did", "had"], ["was", "is", "did", "had"]]
    },
    {
        rule: "Wish + Past Simple", category: "conditionals", level: "middle",
        meaning: "Use 'wish + past simple' to express a wish about a present situation you want to be different.",
        sentences: ["I wish I {blank} taller.", "She wishes she {blank} a car.", "We wish it {blank} raining.", "He wishes he {blank} more free time."],
        answers: ["were", "had", "weren't", "had"],
        options: [["were", "am", "was being", "would be"], ["had", "has", "is having", "would have"], ["weren't", "isn't", "doesn't", "won't be"], ["had", "has", "is having", "would have"]]
    },
    {
        rule: "Wish + Past Perfect", category: "conditionals", level: "high",
        meaning: "Use 'wish + past perfect' to express regret about a past situation.",
        sentences: ["I wish I {blank} to the party last night.", "She wishes she {blank} harder for the exam.", "We wish we {blank} that house when it was cheap.", "He wishes he {blank} that rude comment."],
        answers: ["had gone", "had studied", "had bought", "hadn't made"],
        options: [["had gone", "went", "have gone", "would go"], ["had studied", "studied", "has studied", "would study"], ["had bought", "bought", "have bought", "would buy"], ["hadn't made", "didn't make", "hasn't made", "wouldn't make"]]
    },
    {
        rule: "Wish + Would", category: "conditionals", level: "high",
        meaning: "Use 'wish + would + base form' to express annoyance about something or to wish for a change in someone's behaviour.",
        sentences: ["I wish you {blank} making that noise.", "She wishes it {blank} raining.", "We wish they {blank} so much noise at night.", "He wishes his neighbours {blank} their dog barking."],
        answers: ["would stop", "would stop", "wouldn't make", "would stop"],
        options: [["would stop", "stopped", "had stopped", "will stop"], ["would stop", "stopped", "had stopped", "will stop"], ["wouldn't make", "didn't make", "hadn't made", "won't make"], ["would stop", "stopped", "had stopped", "will stop"]]
    },
    {
        rule: "If Only", category: "conditionals", level: "high",
        meaning: "Use 'if only' as a stronger form of 'wish' to express regret or strong desire for change.",
        sentences: ["If only I {blank} the answer.", "If only she {blank} me earlier.", "If only we {blank} more time.", "If only they {blank} to our advice."],
        answers: ["knew", "had told", "had", "had listened"],
        options: [["knew", "know", "had known", "would know"], ["had told", "told", "has told", "would tell"], ["had", "have", "had had", "would have"], ["had listened", "listened", "have listened", "would listen"]]
    },
    {
        rule: "Subjunctive Mood", category: "word-order", level: "professional",
        meaning: "Use the base form of the verb after verbs/expressions of demand, suggestion, or necessity (e.g., insist, suggest, recommend, it is essential).",
        sentences: ["The doctor recommended that she {blank} more rest.", "It is essential that every student {blank} the exam.", "The committee insisted that he {blank} the report.", "I suggest that she {blank} a lawyer immediately."],
        answers: ["get", "take", "rewrite", "consult"],
        options: [["get", "gets", "got", "getting"], ["take", "takes", "took", "taking"], ["rewrite", "rewrites", "rewrote", "rewriting"], ["consult", "consults", "consulted", "consulting"]]
    },
    {
        rule: "Subjunctive: It is important that", category: "word-order", level: "professional",
        meaning: "After expressions like 'it is important/vital/crucial that', use the subjunctive (base form).",
        sentences: ["It is vital that the report {blank} submitted on time.", "It is important that everyone {blank} present at the meeting.", "It is crucial that the data {blank} accurate.", "It is necessary that she {blank} before noon."],
        answers: ["be", "be", "be", "leave"],
        options: [["be", "is", "was", "were"], ["be", "is", "are", "were"], ["be", "is", "was", "were"], ["leave", "leaves", "left", "leaving"]]
    },
    {
        rule: "Complex Preposition Patterns: In spite of / Despite", category: "prepositions", level: "middle",
        meaning: "Use 'in spite of' or 'despite' + noun/gerund to show contrast. Do not use 'of' after 'despite'.",
        sentences: ["{blank} the bad weather, we went for a walk.", "She passed the exam {blank} not studying much.", "{blank} his age, he is very fit.", "They enjoyed the trip {blank} the delays."],
        answers: ["In spite of", "despite", "Despite", "in spite of"],
        options: [["In spite of", "Although", "However", "Even"], ["despite", "although", "however", "even"], ["Despite", "Although", "However", "Even"], ["in spite of", "although", "however", "even"]]
    },
    {
        rule: "Complex Preposition Patterns: Owing to / Due to", category: "prepositions", level: "high",
        meaning: "Use 'owing to' or 'due to' + noun/gerund to express cause or reason.",
        sentences: ["The match was cancelled {blank} heavy rain.", "{blank} his hard work, he got promoted.", "The delay was {blank} a technical fault.", "The flight was diverted {blank} fog."],
        answers: ["owing to", "Owing to", "due to", "owing to"],
        options: [["owing to", "because", "since", "although"], ["Owing to", "Because", "Since", "Although"], ["due to", "because", "since", "although"], ["owing to", "because", "since", "although"]]
    },
    {
        rule: "Complex Preposition Patterns: Regardless of / Irrespective of", category: "prepositions", level: "college",
        meaning: "Use 'regardless of' or 'irrespective of' to mean 'without being affected by'.",
        sentences: ["We will proceed {blank} the cost.", "Everyone is welcome, {blank} their background.", "The rule applies to all employees, {blank} their position.", "{blank} the outcome, I'm proud of what we achieved."],
        answers: ["regardless of", "regardless of", "irrespective of", "Regardless of"],
        options: [["regardless of", "despite of", "although of", "however of"], ["regardless of", "despite of", "although of", "however of"], ["irrespective of", "despite of", "although of", "however of"], ["Regardless of", "Despite of", "Although of", "However of"]]
    },
    {
        rule: "Complex Preposition Patterns: On behalf of / In terms of", category: "prepositions", level: "college",
        meaning: "Use 'on behalf of' to mean 'representing someone' and 'in terms of' to mean 'regarding'.",
        sentences: ["I'm writing {blank} my client.", "The project was a success {blank} profit.", "She accepted the award {blank} the whole team.", "{blank} quality, this product is the best."],
        answers: ["on behalf of", "in terms of", "on behalf of", "In terms of"],
        options: [["on behalf of", "in terms of", "in case of", "by means of"], ["in terms of", "on behalf of", "in case of", "by means of"], ["on behalf of", "in terms of", "in case of", "by means of"], ["In terms of", "On behalf of", "In case of", "By means of"]]
    },
    {
        rule: "Discourse Markers: Addition", category: "conjunctions", level: "high",
        meaning: "Use discourse markers like 'furthermore', 'moreover', 'in addition' to add information in formal writing.",
        sentences: ["The hotel was expensive. {blank}, the service was terrible.", "She is talented. {blank}, she is extremely hardworking.", "The plan is risky. {blank}, it would cost too much.", "He speaks French fluently. {blank}, he can also speak German."],
        answers: ["Furthermore", "Moreover", "In addition", "Furthermore"],
        options: [["Furthermore", "However", "Therefore", "Meanwhile"], ["Moreover", "However", "Therefore", "Meanwhile"], ["In addition", "However", "Therefore", "Meanwhile"], ["Furthermore", "However", "Therefore", "Meanwhile"]]
    },
    {
        rule: "Discourse Markers: Contrast", category: "conjunctions", level: "high",
        meaning: "Use markers like 'nevertheless', 'nonetheless', 'on the other hand' to show contrast.",
        sentences: ["The job is stressful. {blank}, I find it rewarding.", "He is not the most experienced candidate. {blank}, he has great potential.", "The weather was awful. {blank}, we had a wonderful time.", "She's very young. {blank}, she shows remarkable maturity."],
        answers: ["Nevertheless", "On the other hand", "Nonetheless", "Nevertheless"],
        options: [["Nevertheless", "Moreover", "Therefore", "Meanwhile"], ["On the other hand", "Moreover", "Therefore", "Meanwhile"], ["Nonetheless", "Moreover", "Therefore", "Meanwhile"], ["Nevertheless", "Moreover", "Therefore", "Meanwhile"]]
    },
    {
        rule: "Discourse Markers: Cause and Result", category: "conjunctions", level: "high",
        meaning: "Use 'consequently', 'as a result', 'hence', 'therefore' to show cause and effect.",
        sentences: ["He didn't study. {blank}, he failed the exam.", "The company lost money. {blank}, several employees were laid off.", "Traffic was heavy. {blank}, we arrived late.", "She trained hard every day. {blank}, she won the gold medal."],
        answers: ["Consequently", "As a result", "Hence", "Therefore"],
        options: [["Consequently", "However", "Moreover", "Meanwhile"], ["As a result", "However", "Moreover", "Meanwhile"], ["Hence", "However", "Moreover", "Meanwhile"], ["Therefore", "However", "Moreover", "Meanwhile"]]
    },
    {
        rule: "Discourse Markers: Concession", category: "conjunctions", level: "college",
        meaning: "Use 'admittedly', 'granted', 'even so' to acknowledge a point before presenting a counter-argument.",
        sentences: ["{blank}, the task was difficult, but we should have tried harder.", "{blank}, he made a mistake, but he doesn't deserve to be fired.", "The hotel was basic. {blank}, it was clean and comfortable.", "The plan has risks. {blank}, I think we should go ahead."],
        answers: ["Admittedly", "Granted", "Even so", "Even so"],
        options: [["Admittedly", "However", "Therefore", "Meanwhile"], ["Granted", "However", "Therefore", "Meanwhile"], ["Even so", "However", "Therefore", "Meanwhile"], ["Even so", "However", "Therefore", "Meanwhile"]]
    },
    {
        rule: "Tag Questions: Positive to Negative", category: "word-order", level: "middle",
        meaning: "After a positive statement, use a negative tag question.",
        sentences: ["She is a doctor, {blank}?", "You have finished, {blank}?", "They were late, {blank}?", "He can swim, {blank}?"],
        answers: ["isn't she", "haven't you", "weren't they", "can't he"],
        options: [["isn't she", "is she", "wasn't she", "doesn't she"], ["haven't you", "have you", "don't you", "didn't you"], ["weren't they", "were they", "didn't they", "aren't they"], ["can't he", "can he", "doesn't he", "didn't he"]]
    },
    {
        rule: "Tag Questions: Negative to Positive", category: "word-order", level: "middle",
        meaning: "After a negative statement, use a positive tag question.",
        sentences: ["You don't like coffee, {blank}?", "She hasn't arrived, {blank}?", "They won't come, {blank}?", "He couldn't help, {blank}?"],
        answers: ["do you", "has she", "will they", "could he"],
        options: [["do you", "don't you", "did you", "didn't you"], ["has she", "hasn't she", "did she", "didn't she"], ["will they", "won't they", "did they", "didn't they"], ["could he", "couldn't he", "did he", "didn't he"]]
    },
    {
        rule: "Tag Questions: Special Cases", category: "word-order", level: "high",
        meaning: "Some tag questions have special rules: 'I am' uses 'aren't I', imperatives use 'will you', 'Let's' uses 'shall we'.",
        sentences: ["I'm right, {blank}?", "Open the window, {blank}?", "Let's go for a walk, {blank}?", "Nobody called, {blank}?"],
        answers: ["aren't I", "will you", "shall we", "did they"],
        options: [["aren't I", "am I not", "am I", "isn't it"], ["will you", "do you", "can you", "shall you"], ["shall we", "will we", "do we", "can we"], ["did they", "didn't they", "do they", "don't they"]]
    },
    {
        rule: "Ellipsis: So do I / Neither do I", category: "word-order", level: "middle",
        meaning: "Use 'So + auxiliary + subject' to agree with a positive statement; 'Neither/Nor + auxiliary + subject' for a negative one.",
        sentences: ["I love pizza. — So {blank} I.", "She can't swim. — Neither {blank} he.", "They have been to Japan. — So {blank} we.", "He won't be there. — Nor {blank} she."],
        answers: ["do", "can", "have", "will"],
        options: [["do", "am", "have", "did"], ["can", "does", "is", "has"], ["have", "do", "are", "did"], ["will", "does", "is", "has"]]
    },
    {
        rule: "Ellipsis and Substitution", category: "word-order", level: "college",
        meaning: "Use 'so', 'not', or 'do so' to avoid repeating information already mentioned.",
        sentences: ["Will it rain tomorrow? — I hope {blank}.", "Is she coming to the party? — I think {blank}.", "You should apply for the job. If you do {blank}, you might get it.", "Are they going to win? — I'm afraid {blank}."],
        answers: ["not", "so", "so", "not"],
        options: [["not", "so", "it", "that"], ["so", "not", "it", "that"], ["so", "not", "it", "that"], ["not", "so", "it", "that"]]
    },
    {
        rule: "Nominalisation: Verb to Noun", category: "word-formation", level: "professional",
        meaning: "Nominalisation is the process of turning verbs or adjectives into nouns, common in formal and academic writing.",
        sentences: ["The {blank} of the new policy caused controversy. (introduce)", "There has been a significant {blank} in sales. (reduce)", "The {blank} of the evidence led to a new trial. (discover)", "The {blank} of the factory resulted in job losses. (close)"],
        answers: ["introduction", "reduction", "discovery", "closure"],
        options: [["introduction", "introducing", "introduced", "introducer"], ["reduction", "reducing", "reduced", "reducer"], ["discovery", "discovering", "discovered", "discoverer"], ["closure", "closing", "closed", "closer"]]
    },
    {
        rule: "Nominalisation: Adjective to Noun", category: "word-formation", level: "professional",
        meaning: "Convert adjectives to nouns for more formal expression.",
        sentences: ["The {blank} of the situation became apparent. (serious)", "There is growing {blank} about climate change. (aware)", "The {blank} of the new design impressed the clients. (elegant)", "Job {blank} is a major concern for workers. (secure)"],
        answers: ["seriousness", "awareness", "elegance", "security"],
        options: [["seriousness", "seriously", "seriousity", "seriousen"], ["awareness", "awarely", "awareity", "awaren"], ["elegance", "elegantly", "elegantity", "elegantion"], ["security", "securely", "secureness", "securion"]]
    },
    {
        rule: "Advanced Relative Clauses: Non-defining", category: "relative-clauses", level: "high",
        meaning: "Non-defining relative clauses add extra information and are separated by commas. Do not use 'that' in non-defining clauses.",
        sentences: ["My brother, {blank} lives in London, is a doctor.", "The Eiffel Tower, {blank} was built in 1889, is in Paris.", "Her latest novel, {blank} I read last week, is excellent.", "The CEO, {blank} wife is a senator, resigned today."],
        answers: ["who", "which", "which", "whose"],
        options: [["who", "that", "which", "whom"], ["which", "that", "who", "what"], ["which", "that", "who", "what"], ["whose", "who", "which", "whom"]]
    },
    {
        rule: "Advanced Relative Clauses: Reduced", category: "relative-clauses", level: "college",
        meaning: "Reduce relative clauses by removing the relative pronoun and auxiliary, using a participle instead.",
        sentences: ["The man {blank} at the bus stop is my uncle.", "The letter {blank} yesterday contained good news.", "Students {blank} to attend must register online.", "Anyone {blank} in the position should apply now."],
        answers: ["standing", "received", "wishing", "interested"],
        options: [["standing", "who standing", "stood", "stands"], ["received", "which received", "receiving", "receives"], ["wishing", "who wishing", "wished", "wishes"], ["interested", "who interested", "interesting", "interests"]]
    },
    {
        rule: "Advanced Relative Clauses: Where, When, Why", category: "relative-clauses", level: "middle",
        meaning: "Use 'where' for places, 'when' for times, and 'why' for reasons in relative clauses.",
        sentences: ["That's the restaurant {blank} we had dinner.", "I remember the day {blank} we first met.", "Do you know the reason {blank} she left?", "This is the town {blank} I grew up."],
        answers: ["where", "when", "why", "where"],
        options: [["where", "which", "that", "when"], ["when", "where", "which", "that"], ["why", "which", "that", "when"], ["where", "which", "that", "when"]]
    },
    {
        rule: "Participle Clauses: Present Participle", category: "gerunds-infinitives", level: "college",
        meaning: "Use present participle clauses (-ing) to replace relative clauses or to show simultaneous actions.",
        sentences: ["{blank} the door, she noticed a strange smell.", "{blank} that it was late, we decided to leave.", "The girl {blank} by the window is my sister.", "{blank} no money, he couldn't buy lunch."],
        answers: ["Opening", "Realising", "sitting", "Having"],
        options: [["Opening", "Opened", "To open", "Open"], ["Realising", "Realised", "To realise", "Realise"], ["sitting", "sat", "to sit", "sit"], ["Having", "Had", "To have", "Have"]]
    },
    {
        rule: "Participle Clauses: Past Participle", category: "gerunds-infinitives", level: "college",
        meaning: "Use past participle clauses to replace passive relative clauses.",
        sentences: ["{blank} in 1905, the building is a historic landmark.", "{blank} by the news, she sat down in shock.", "The goods {blank} to the wrong address were returned.", "{blank} properly, the medicine is very effective."],
        answers: ["Built", "Shocked", "delivered", "Taken"],
        options: [["Built", "Building", "To build", "Build"], ["Shocked", "Shocking", "To shock", "Shock"], ["delivered", "delivering", "to deliver", "deliver"], ["Taken", "Taking", "To take", "Take"]]
    },
    {
        rule: "Participle Clauses: Perfect Participle", category: "gerunds-infinitives", level: "professional",
        meaning: "Use 'having + past participle' to show that one action was completed before another.",
        sentences: ["{blank} finished her homework, she went out to play.", "{blank} read the report, he made his decision.", "{blank} lived in Japan for years, she speaks fluent Japanese.", "{blank} completed the training, they were ready for the mission."],
        answers: ["Having", "Having", "Having", "Having"],
        options: [["Having", "Have", "Had", "Has"], ["Having", "Have", "Had", "Has"], ["Having", "Have", "Had", "Has"], ["Having", "Have", "Had", "Has"]]
    },
    {
        rule: "Advanced Passive: It is said that", category: "passive", level: "college",
        meaning: "Use 'It is said/believed/reported that...' to report opinions or facts without naming the source.",
        sentences: ["It {blank} that the company is planning to merge.", "It {blank} that the painting is worth millions.", "It {blank} that the bridge was built by the Romans.", "It {blank} that the CEO will resign next month."],
        answers: ["is reported", "is believed", "is thought", "is rumoured"],
        options: [["is reported", "reports", "was reporting", "has reported"], ["is believed", "believes", "was believing", "has believed"], ["is thought", "thinks", "was thinking", "has thought"], ["is rumoured", "rumours", "was rumouring", "has rumoured"]]
    },
    {
        rule: "Advanced Passive: Subject + is believed to", category: "passive", level: "college",
        meaning: "Use 'Subject + is said/believed/thought + to-infinitive' as a personal passive construction.",
        sentences: ["She {blank} to be the richest woman in the country.", "The suspect {blank} to have left the country.", "The ruins {blank} to date back to the 3rd century.", "He {blank} to be working on a new album."],
        answers: ["is believed", "is thought", "are said", "is reported"],
        options: [["is believed", "believes", "was believing", "has believed"], ["is thought", "thinks", "was thinking", "has thought"], ["are said", "say", "was saying", "have said"], ["is reported", "reports", "was reporting", "has reported"]]
    },
    {
        rule: "Advanced Passive: Have something done (negative experience)", category: "passive", level: "high",
        meaning: "Use 'have + object + past participle' also for negative experiences (things done to you unexpectedly).",
        sentences: ["She {blank} her purse stolen on the bus.", "We {blank} our flight cancelled due to the storm.", "He {blank} his car broken into last night.", "They {blank} their house flooded during the hurricane."],
        answers: ["had", "had", "had", "had"],
        options: [["had", "got", "was", "has"], ["had", "got", "were", "have"], ["had", "got", "was", "has"], ["had", "got", "were", "have"]]
    },
    {
        rule: "Formal vs Informal Register: Phrasal Verbs", category: "word-formation", level: "professional",
        meaning: "In formal writing, replace phrasal verbs with their single-word equivalents.",
        sentences: ["The meeting was {blank} until next week. (put off / postponed)", "We need to {blank} this matter immediately. (look into / investigate)", "The company plans to {blank} 500 new staff. (take on / recruit)", "The manager decided to {blank} the proposal. (turn down / reject)"],
        answers: ["postponed", "investigate", "recruit", "reject"],
        options: [["postponed", "put off", "delayed off", "held off"], ["investigate", "look into", "search into", "check into"], ["recruit", "take on", "bring on", "get on"], ["reject", "turn down", "push down", "throw down"]]
    },
    {
        rule: "Formal vs Informal Register: Connectors", category: "conjunctions", level: "professional",
        meaning: "Choose formal connectors for academic/professional writing instead of informal ones.",
        sentences: ["The experiment failed. {blank}, the team tried again. (But / However)", "The results were promising; {blank}, further research is needed. (though / nevertheless)", "Costs have risen sharply. {blank}, profits have declined. (So / Consequently)", "The drug is effective. {blank}, it has some side effects. (But / Nonetheless)"],
        answers: ["However", "nevertheless", "Consequently", "Nonetheless"],
        options: [["However", "But", "So", "And"], ["nevertheless", "though", "so", "and"], ["Consequently", "So", "But", "And"], ["Nonetheless", "But", "So", "And"]]
    },
    {
        rule: "Determiners: Each vs Every", category: "quantifiers", level: "middle",
        meaning: "'Each' emphasises individuals in a group; 'every' emphasises the whole group. 'Each' can be used with two; 'every' needs three or more.",
        sentences: ["{blank} student must submit their own assignment.", "She wore a ring on {blank} finger.", "{blank} child in the school received a prize.", "There are shops on {blank} side of the street."],
        answers: ["Every", "each", "Every", "each"],
        options: [["Every", "Each", "All", "Any"], ["each", "every", "all", "any"], ["Every", "Each", "All", "Any"], ["each", "every", "all", "any"]]
    },
    {
        rule: "Determiners: All vs Whole", category: "quantifiers", level: "middle",
        meaning: "'All' is used before plural nouns and uncountable nouns; 'whole' is used after articles with singular countable nouns.",
        sentences: ["{blank} the students passed the exam.", "She ate the {blank} cake by herself.", "{blank} day I felt tired.", "He spent the {blank} afternoon reading."],
        answers: ["All", "whole", "All", "whole"],
        options: [["All", "Whole", "Every", "Each"], ["whole", "all", "every", "each"], ["All", "Whole", "Every", "Each"], ["whole", "all", "every", "each"]]
    },
    {
        rule: "Determiners: Either, Neither, Both", category: "quantifiers", level: "middle",
        meaning: "'Either' means one of two; 'neither' means not one and not the other; 'both' means the two together.",
        sentences: ["{blank} of the answers is correct. Choose one.", "{blank} of the restaurants was any good.", "{blank} candidates were well qualified.", "You can take {blank} road; they both lead to the town."],
        answers: ["Either", "Neither", "Both", "either"],
        options: [["Either", "Neither", "Both", "Any"], ["Neither", "Either", "Both", "None"], ["Both", "Either", "Neither", "All"], ["either", "neither", "both", "any"]]
    },
    {
        rule: "Determiners: None vs No", category: "quantifiers", level: "high",
        meaning: "'No' is a determiner used before a noun; 'none' is a pronoun used alone or with 'of'.",
        sentences: ["There are {blank} tickets left.", "{blank} of the students failed the test.", "I have {blank} idea what you mean.", "{blank} of this makes sense."],
        answers: ["no", "None", "no", "None"],
        options: [["no", "none", "not", "neither"], ["None", "No", "Not", "Neither"], ["no", "none", "not", "neither"], ["None", "No", "Not", "Neither"]]
    },
    {
        rule: "Determiners: Little vs A little, Few vs A few", category: "quantifiers", level: "middle",
        meaning: "'A little/a few' means 'some' (positive); 'little/few' means 'almost none' (negative).",
        sentences: ["There is {blank} milk left; we should buy more.", "I have {blank} friends in this city, so I'm not lonely.", "{blank} people understand quantum physics.", "Could I have {blank} water, please?"],
        answers: ["little", "a few", "Few", "a little"],
        options: [["little", "a little", "few", "a few"], ["a few", "few", "a little", "little"], ["Few", "A few", "Little", "A little"], ["a little", "little", "a few", "few"]]
    },
    {
        rule: "Complex Noun Phrases", category: "word-order", level: "professional",
        meaning: "In formal writing, use complex noun phrases with pre-modifiers and post-modifiers instead of multiple clauses.",
        sentences: ["The {blank} published report recommends changes.", "The evidence {blank} at the trial was inconclusive.", "A {blank} designed experiment yielded better results.", "The proposal {blank} by the committee was accepted."],
        answers: ["recently", "presented", "carefully", "submitted"],
        options: [["recently", "recent", "recenting", "recented"], ["presented", "presenting", "to present", "presents"], ["carefully", "careful", "carefulling", "carefulled"], ["submitted", "submitting", "to submit", "submits"]]
    },
    {
        rule: "Fronting: Object Fronting", category: "word-order", level: "professional",
        meaning: "Move the object to the front of the sentence for emphasis or contrast.",
        sentences: ["{blank} I really can't stand.", "This problem {blank} must solve immediately.", "The last piece of cake {blank} already eaten.", "That kind of behaviour {blank} will not tolerate."],
        answers: ["Spiders", "we", "he had", "I"],
        options: [["Spiders", "The spiders", "A spider", "Spider"], ["we", "you", "I", "they"], ["he had", "he has", "was", "is"], ["I", "we", "he", "they"]]
    },
    {
        rule: "Fronting: Adverbial Fronting", category: "word-order", level: "college",
        meaning: "Move adverbials to the front for focus. Some require subject-verb inversion.",
        sentences: ["{blank} the hill stood an old castle.", "{blank} came the bus at last.", "In the corner of the room {blank} a large piano.", "{blank} the trees we could see a lake."],
        answers: ["On top of", "Here", "stood", "Through"],
        options: [["On top of", "At top of", "In top of", "Over top of"], ["Here", "There", "Then", "Now"], ["stood", "standing", "stands", "was stand"], ["Through", "Between", "Among", "Along"]]
    },
    {
        rule: "Emphasis with Do/Does/Did", category: "word-order", level: "middle",
        meaning: "Use 'do/does/did' before the main verb to add emphasis in positive sentences.",
        sentences: ["I {blank} enjoy the film, despite what you think.", "She {blank} try her best, but she still failed.", "We {blank} want to help, honestly.", "He {blank} apologise, but she didn't accept it."],
        answers: ["do", "did", "do", "did"],
        options: [["do", "did", "does", "done"], ["did", "do", "does", "done"], ["do", "did", "does", "done"], ["did", "do", "does", "done"]]
    },
    {
        rule: "Emphasis: The very / The only / It is...that", category: "word-order", level: "high",
        meaning: "Use 'the very', 'the only', or cleft structures for emphasis.",
        sentences: ["You are {blank} person who can help.", "That is the {blank} thing I wanted to hear.", "It {blank} the noise that woke me up.", "She is the {blank} one who knows the truth."],
        answers: ["the only", "very", "was", "only"],
        options: [["the only", "only the", "the one", "one the"], ["very", "only", "just", "mere"], ["was", "is", "were", "has"], ["only", "very", "just", "mere"]]
    },
    {
        rule: "Reported Speech: Tense Changes", category: "reported-speech", level: "middle",
        meaning: "When reporting speech, shift tenses back: present simple becomes past simple, present perfect becomes past perfect, etc.",
        sentences: ["She said she {blank} tired.", "He told me he {blank} the movie.", "They said they {blank} to the party.", "She mentioned she {blank} there before."],
        answers: ["was", "had seen", "were going", "had been"],
        options: [["was", "is", "has been", "will be"], ["had seen", "has seen", "saw", "sees"], ["were going", "are going", "go", "went"], ["had been", "has been", "was", "is"]]
    },
    {
        rule: "Reported Speech: Reporting Verbs", category: "reported-speech", level: "high",
        meaning: "Different reporting verbs follow different patterns: verb + to-infinitive, verb + gerund, verb + that-clause.",
        sentences: ["She {blank} to help us.", "He {blank} stealing the money.", "They {blank} that the project would be delayed.", "She {blank} me not to worry."],
        answers: ["offered", "denied", "announced", "told"],
        options: [["offered", "suggested", "denied", "announced"], ["denied", "offered", "promised", "told"], ["announced", "denied", "offered", "promised"], ["told", "said", "announced", "denied"]]
    },
    {
        rule: "Reported Speech: Questions", category: "reported-speech", level: "middle",
        meaning: "When reporting questions, use statement word order (no inversion) and do not use question marks.",
        sentences: ["She asked me where I {blank}.", "He wanted to know if I {blank} free.", "They asked us when we {blank} arrive.", "She asked whether I {blank} help."],
        answers: ["lived", "was", "would", "could"],
        options: [["lived", "live", "am living", "have lived"], ["was", "am", "will be", "have been"], ["would", "will", "do", "can"], ["could", "can", "will", "do"]]
    },
    {
        rule: "Articles: Zero Article", category: "articles", level: "high",
        meaning: "Use no article with plural countable nouns and uncountable nouns when speaking in general.",
        sentences: ["{blank} are essential for good health.", "{blank} is more precious than gold.", "I love {blank} in general.", "{blank} can be dangerous if not stored properly."],
        answers: ["Vitamins", "Water", "music", "Chemicals"],
        options: [["Vitamins", "The vitamins", "A vitamin", "Some vitamins"], ["Water", "The water", "A water", "Some water"], ["music", "the music", "a music", "some music"], ["Chemicals", "The chemicals", "A chemical", "Some chemicals"]]
    },
    {
        rule: "Articles: The with Unique Nouns", category: "articles", level: "middle",
        meaning: "Use 'the' with things that are unique or known to both speaker and listener.",
        sentences: ["{blank} sun rises in the east.", "Can you pass me {blank} salt, please?", "She is {blank} tallest girl in the class.", "I went to {blank} bank on the corner."],
        answers: ["The", "the", "the", "the"],
        options: [["The", "A", "An", "No article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Articles: A/An with Jobs and Descriptions", category: "articles", level: "elementary",
        meaning: "Use 'a/an' when describing someone's job, nationality or character for the first time.",
        sentences: ["She is {blank} engineer.", "He is {blank} honest man.", "I want to be {blank} doctor.", "She works as {blank} architect."],
        answers: ["an", "an", "a", "an"],
        options: [["an", "a", "the", "no article"], ["an", "a", "the", "no article"], ["a", "an", "the", "no article"], ["an", "a", "the", "no article"]]
    },
    {
        rule: "Gerund vs Infinitive: Verbs with Different Meanings", category: "gerunds-infinitives", level: "high",
        meaning: "Some verbs change meaning depending on whether they are followed by a gerund or an infinitive.",
        sentences: ["I stopped {blank} because it was bad for my health.", "I stopped {blank} at the beautiful view.", "She remembered {blank} the door before she left.", "She remembered {blank} him at a party years ago."],
        answers: ["smoking", "to look", "to lock", "meeting"],
        options: [["smoking", "to smoke", "smoke", "smoked"], ["to look", "looking", "look", "looked"], ["to lock", "locking", "lock", "locked"], ["meeting", "to meet", "meet", "met"]]
    },
    {
        rule: "Gerund vs Infinitive: Try, Regret, Mean", category: "gerunds-infinitives", level: "high",
        meaning: "'Try + gerund' means experiment; 'try + infinitive' means make an effort. 'Regret + gerund' means regret something done; 'regret + infinitive' is formal for bad news.",
        sentences: ["Try {blank} the computer. It might work.", "I tried {blank} her, but her phone was off.", "I regret {blank} you that the position has been filled.", "He regrets {blank} school so young."],
        answers: ["restarting", "to call", "to inform", "leaving"],
        options: [["restarting", "to restart", "restart", "restarted"], ["to call", "calling", "call", "called"], ["to inform", "informing", "inform", "informed"], ["leaving", "to leave", "leave", "left"]]
    },
    {
        rule: "Subject-Verb Agreement: Collective Nouns", category: "subject-verb-agreement", level: "high",
        meaning: "Collective nouns (team, committee, family) can take singular or plural verbs depending on whether the group acts as one unit or as individuals.",
        sentences: ["The team {blank} playing well this season.", "The committee {blank} unable to reach a decision.", "My family {blank} all over the country.", "The staff {blank} been informed of the changes."],
        answers: ["is", "were", "live", "have"],
        options: [["is", "are", "were", "have"], ["were", "was", "is", "has"], ["live", "lives", "is living", "has lived"], ["have", "has", "is", "was"]]
    },
    {
        rule: "Subject-Verb Agreement: Expressions of Quantity", category: "subject-verb-agreement", level: "high",
        meaning: "With expressions like 'a number of' (plural verb) vs 'the number of' (singular verb).",
        sentences: ["A number of students {blank} absent today.", "The number of complaints {blank} increased.", "A lot of time {blank} wasted on this.", "A lot of people {blank} waiting outside."],
        answers: ["are", "has", "was", "are"],
        options: [["are", "is", "has", "was"], ["has", "have", "are", "is"], ["was", "were", "are", "have"], ["are", "is", "has", "was"]]
    },
    {
        rule: "Comparatives: The...the...", category: "comparatives", level: "middle",
        meaning: "Use 'the + comparative, the + comparative' to show that two things change together.",
        sentences: ["The harder you work, the {blank} you will earn.", "The sooner we leave, the {blank} we will arrive.", "The more you practise, the {blank} you get.", "The older I get, the {blank} I become."],
        answers: ["more", "earlier", "better", "wiser"],
        options: [["more", "most", "much", "many"], ["earlier", "earliest", "early", "soon"], ["better", "best", "good", "well"], ["wiser", "wisest", "wise", "more wise"]]
    },
    {
        rule: "Comparatives: As...as", category: "comparatives", level: "elementary",
        meaning: "Use 'as + adjective/adverb + as' for equal comparisons and 'not as...as' for unequal ones.",
        sentences: ["She is {blank} tall as her mother.", "This book isn't {blank} interesting as that one.", "He can run {blank} fast as his brother.", "The test wasn't {blank} difficult as I expected."],
        answers: ["as", "as", "as", "as"],
        options: [["as", "so", "more", "like"], ["as", "so", "more", "like"], ["as", "so", "more", "like"], ["as", "so", "more", "like"]]
    },
    {
        rule: "Pronouns: Reflexive Pronouns", category: "pronouns", level: "elementary",
        meaning: "Use reflexive pronouns (myself, yourself, etc.) when the subject and object are the same person.",
        sentences: ["She hurt {blank} while cooking.", "We enjoyed {blank} at the party.", "He taught {blank} to play guitar.", "I cut {blank} with a knife."],
        answers: ["herself", "ourselves", "himself", "myself"],
        options: [["herself", "her", "she", "hers"], ["ourselves", "us", "we", "ours"], ["himself", "him", "he", "his"], ["myself", "me", "I", "mine"]]
    },
    {
        rule: "Pronouns: Relative Pronouns Who vs Whom", category: "pronouns", level: "college",
        meaning: "Use 'who' as the subject of a relative clause and 'whom' as the object, especially in formal English.",
        sentences: ["The woman {blank} called you is my aunt.", "The man {blank} I spoke to was very helpful.", "The applicant {blank} the company hired was experienced.", "The teacher {blank} inspired me has retired."],
        answers: ["who", "whom", "whom", "who"],
        options: [["who", "whom", "which", "that"], ["whom", "who", "which", "that"], ["whom", "who", "which", "that"], ["who", "whom", "which", "that"]]
    },
    {
        rule: "Pronouns: It vs There", category: "pronouns", level: "middle",
        meaning: "Use 'it' for weather, time, and distance; use 'there' to say that something exists.",
        sentences: ["{blank} is raining heavily.", "{blank} are three books on the table.", "{blank} is a long way to the station.", "{blank} seems to be a problem."],
        answers: ["It", "There", "It", "There"],
        options: [["It", "There", "That", "This"], ["There", "It", "That", "This"], ["It", "There", "That", "This"], ["There", "It", "That", "This"]]
    },
    {
        rule: "Pronouns: One / Ones", category: "pronouns", level: "middle",
        meaning: "Use 'one' or 'ones' to replace a noun that has already been mentioned.",
        sentences: ["I'd like a coffee — a large {blank}, please.", "These shoes are nice, but I prefer the red {blank}.", "Which dress do you want? The {blank} with the flowers.", "I need a pen. Can you lend me {blank}?"],
        answers: ["one", "ones", "one", "one"],
        options: [["one", "ones", "it", "them"], ["ones", "one", "them", "it"], ["one", "ones", "it", "them"], ["one", "ones", "it", "them"]]
    },
    {
        rule: "Prepositions of Time: At, On, In", category: "prepositions", level: "elementary",
        meaning: "Use 'at' for specific times, 'on' for days and dates, 'in' for months, years, and longer periods.",
        sentences: ["The meeting is {blank} 3 o'clock.", "She was born {blank} March 15th.", "We usually go on holiday {blank} August.", "I'll see you {blank} Monday."],
        answers: ["at", "on", "in", "on"],
        options: [["at", "on", "in", "by"], ["on", "at", "in", "by"], ["in", "at", "on", "by"], ["on", "at", "in", "by"]]
    },
    {
        rule: "Prepositions of Place: At, On, In", category: "prepositions", level: "elementary",
        meaning: "Use 'at' for a point or place, 'on' for surfaces, 'in' for enclosed spaces.",
        sentences: ["She is waiting {blank} the bus stop.", "The book is {blank} the table.", "He lives {blank} a small apartment.", "We met {blank} the entrance."],
        answers: ["at", "on", "in", "at"],
        options: [["at", "on", "in", "by"], ["on", "at", "in", "by"], ["in", "at", "on", "by"], ["at", "on", "in", "by"]]
    },
    {
        rule: "Prepositions: By, Until, By the time", category: "prepositions", level: "high",
        meaning: "'By' means 'not later than'; 'until' means 'up to a certain time'; 'by the time' introduces a clause.",
        sentences: ["Please finish the report {blank} Friday.", "I will wait here {blank} you come back.", "{blank} the time we arrived, the show had started.", "She worked {blank} midnight every night."],
        answers: ["by", "until", "By", "until"],
        options: [["by", "until", "before", "since"], ["until", "by", "before", "since"], ["By", "Until", "Before", "Since"], ["until", "by", "before", "since"]]
    },
    {
        rule: "Conjunctions: Although / Even though / Though", category: "conjunctions", level: "middle",
        meaning: "Use 'although', 'even though', or 'though' to introduce a contrasting idea within a sentence.",
        sentences: ["{blank} it was raining, we went for a walk.", "She passed the exam {blank} she didn't study much.", "The food was good, {blank} a bit expensive.", "{blank} he is rich, he lives simply."],
        answers: ["Although", "even though", "though", "Even though"],
        options: [["Although", "Despite", "However", "But"], ["even though", "despite", "however", "but"], ["though", "despite", "however", "but"], ["Even though", "Despite", "However", "But"]]
    },
    {
        rule: "Conjunctions: So that / In order that", category: "conjunctions", level: "high",
        meaning: "Use 'so that' or 'in order that' to express purpose, followed by a clause.",
        sentences: ["I left early {blank} I could catch the train.", "She spoke slowly {blank} everyone could understand.", "He saved money {blank} he could buy a car.", "We whispered {blank} we wouldn't wake the baby."],
        answers: ["so that", "so that", "in order that", "so that"],
        options: [["so that", "in case", "because", "although"], ["so that", "in case", "because", "although"], ["in order that", "in case", "because", "although"], ["so that", "in case", "because", "although"]]
    },
    {
        rule: "Conjunctions: As long as / Provided that", category: "conjunctions", level: "high",
        meaning: "Use 'as long as' or 'provided that' to express a condition.",
        sentences: ["You can go out {blank} you finish your homework.", "I'll lend you the car {blank} you drive carefully.", "The event will proceed {blank} the weather is good.", "You can stay {blank} you follow the rules."],
        answers: ["as long as", "provided that", "provided that", "as long as"],
        options: [["as long as", "unless", "although", "whereas"], ["provided that", "unless", "although", "whereas"], ["provided that", "unless", "although", "whereas"], ["as long as", "unless", "although", "whereas"]]
    },
    {
        rule: "Conjunctions: Whereas / While (Contrast)", category: "conjunctions", level: "college",
        meaning: "Use 'whereas' or 'while' to contrast two facts or ideas.",
        sentences: ["She is outgoing, {blank} her sister is shy.", "The north is cold, {blank} the south is warm.", "{blank} I enjoy cooking, my husband prefers eating out.", "Some people love winter, {blank} others prefer summer."],
        answers: ["whereas", "whereas", "While", "while"],
        options: [["whereas", "because", "so", "unless"], ["whereas", "because", "so", "unless"], ["While", "Because", "So", "Unless"], ["while", "because", "so", "unless"]]
    },
    {
        rule: "Passive: Present Continuous Passive", category: "passive", level: "middle",
        meaning: "Form the present continuous passive with 'is/are being + past participle'.",
        sentences: ["The road {blank} at the moment.", "New offices {blank} in the city centre.", "The patients {blank} by a specialist.", "Dinner {blank} right now."],
        answers: ["is being repaired", "are being built", "are being treated", "is being prepared"],
        options: [["is being repaired", "is repairing", "has been repaired", "was repaired"], ["are being built", "are building", "have been built", "were built"], ["are being treated", "are treating", "have been treated", "were treated"], ["is being prepared", "is preparing", "has been prepared", "was prepared"]]
    },
    {
        rule: "Passive: Past Perfect Passive", category: "passive", level: "high",
        meaning: "Form the past perfect passive with 'had been + past participle'.",
        sentences: ["The house {blank} before we moved in.", "All the tickets {blank} by the time I called.", "The report {blank} before the meeting started.", "The car {blank} before the accident."],
        answers: ["had been renovated", "had been sold", "had been completed", "had been serviced"],
        options: [["had been renovated", "was renovated", "has been renovated", "is renovated"], ["had been sold", "were sold", "have been sold", "are sold"], ["had been completed", "was completed", "has been completed", "is completed"], ["had been serviced", "was serviced", "has been serviced", "is serviced"]]
    },
    {
        rule: "Passive: Modal Passive", category: "passive", level: "middle",
        meaning: "Form modal passives with 'modal + be + past participle'.",
        sentences: ["This problem {blank} easily.", "The project {blank} by next month.", "The rules {blank} at all times.", "The letter {blank} immediately."],
        answers: ["can be solved", "must be finished", "should be followed", "should be sent"],
        options: [["can be solved", "can solve", "is solving", "has solved"], ["must be finished", "must finish", "is finishing", "has finished"], ["should be followed", "should follow", "is following", "has followed"], ["should be sent", "should send", "is sending", "has sent"]]
    },
    {
        rule: "Word Formation: Prefixes (un-, dis-, mis-, re-)", category: "word-formation", level: "middle",
        meaning: "Add prefixes to change the meaning of words: 'un-' and 'dis-' for negation, 'mis-' for wrong, 're-' for again.",
        sentences: ["I {blank} with your opinion. (agree)", "She was {blank} about the results. (happy)", "He {blank} the instructions and got lost. (read)", "I need to {blank} this essay. It's full of errors. (write)"],
        answers: ["disagree", "unhappy", "misread", "rewrite"],
        options: [["disagree", "unagree", "misagree", "reagree"], ["unhappy", "dishappy", "mishappy", "rehappy"], ["misread", "unread", "disread", "reread"], ["rewrite", "unwrite", "diswrite", "miswrite"]]
    },
    {
        rule: "Word Formation: Suffixes (-ness, -ment, -tion, -ity)", category: "word-formation", level: "middle",
        meaning: "Add suffixes to form nouns from adjectives or verbs.",
        sentences: ["Her {blank} was evident to everyone. (kind)", "The {blank} of the system took months. (develop)", "There was great {blank} among the fans. (excite)", "His {blank} to detail is impressive. (attentive)"],
        answers: ["kindness", "development", "excitement", "attentiveness"],
        options: [["kindness", "kindity", "kindment", "kindtion"], ["development", "developness", "developity", "develoption"], ["excitement", "exciteness", "excitity", "excittion"], ["attentiveness", "attentivity", "attentivement", "attentivion"]]
    },
    {
        rule: "Word Formation: Adjective Suffixes (-ful, -less, -ous, -ive)", category: "word-formation", level: "middle",
        meaning: "Add suffixes to form adjectives: '-ful' means full of, '-less' means without, '-ous' means having the quality of, '-ive' means tending to.",
        sentences: ["She is very {blank} of other people's feelings. (thought)", "The {blank} dog wandered the streets alone. (home)", "The volcano eruption was extremely {blank}. (danger)", "He gave a very {blank} speech. (persuade)"],
        answers: ["thoughtful", "homeless", "dangerous", "persuasive"],
        options: [["thoughtful", "thoughtless", "thoughtous", "thoughtive"], ["homeless", "homeful", "homeous", "homeive"], ["dangerous", "dangerful", "dangerless", "dangerive"], ["persuasive", "persuadeful", "persuadeless", "persuadeous"]]
    },
    {
        rule: "Conditional: Unless", category: "conditionals", level: "middle",
        meaning: "'Unless' means 'if not'. Use it in conditional sentences to express a negative condition.",
        sentences: ["You will fail {blank} you study harder.", "We'll go to the beach {blank} it rains.", "{blank} you hurry, you'll miss the bus.", "She won't come {blank} you invite her."],
        answers: ["unless", "unless", "Unless", "unless"],
        options: [["unless", "if", "when", "although"], ["unless", "if", "when", "although"], ["Unless", "If", "When", "Although"], ["unless", "if", "when", "although"]]
    },
    {
        rule: "Conditional: Supposing / What if", category: "conditionals", level: "high",
        meaning: "'Supposing' and 'what if' can be used instead of 'if' to introduce a hypothetical situation.",
        sentences: ["{blank} you won the lottery, what would you do?", "{blank} it rains — should we cancel?", "{blank} you could live anywhere, where would you go?", "{blank} they don't agree — what's our plan B?"],
        answers: ["Supposing", "What if", "Supposing", "What if"],
        options: [["Supposing", "Although", "Because", "Unless"], ["What if", "Although", "Because", "Unless"], ["Supposing", "Although", "Because", "Unless"], ["What if", "Although", "Because", "Unless"]]
    },
    {
        rule: "Reported Speech: Commands and Requests", category: "reported-speech", level: "middle",
        meaning: "Report commands with 'told + object + to-infinitive'. Report requests with 'asked + object + to-infinitive'.",
        sentences: ["She {blank} me to close the door.", "The teacher {blank} us not to talk.", "He {blank} her to lend him some money.", "The boss {blank} them to finish the report."],
        answers: ["told", "told", "asked", "ordered"],
        options: [["told", "said", "spoke", "talked"], ["told", "said", "spoke", "talked"], ["asked", "said", "spoke", "talked"], ["ordered", "said", "spoke", "talked"]]
    },
    {
        rule: "Reported Speech: Suggest and Recommend", category: "reported-speech", level: "high",
        meaning: "Report suggestions with 'suggested + gerund' or 'suggested that + subject + (should) + base form'.",
        sentences: ["She suggested {blank} to the cinema.", "He recommended that I {blank} the course.", "The guide suggested {blank} early to avoid crowds.", "She recommended that we {blank} a lawyer."],
        answers: ["going", "take", "arriving", "consult"],
        options: [["going", "to go", "go", "went"], ["take", "took", "taking", "to take"], ["arriving", "to arrive", "arrive", "arrived"], ["consult", "consulted", "consulting", "to consult"]]
    },
    {
        rule: "Comparatives: Much / Far / A lot + Comparative", category: "comparatives", level: "middle",
        meaning: "Use 'much', 'far', or 'a lot' before comparatives to emphasise a big difference.",
        sentences: ["This hotel is {blank} more expensive than the last one.", "She is {blank} better at maths than me.", "The second film was {blank} worse than the first.", "Living in the city is {blank} more convenient."],
        answers: ["much", "far", "a lot", "much"],
        options: [["much", "very", "too", "so"], ["far", "very", "too", "so"], ["a lot", "very", "too", "so"], ["much", "very", "too", "so"]]
    },
    {
        rule: "Comparatives: Superlative Structures", category: "comparatives", level: "middle",
        meaning: "Use 'the + superlative + noun + in/of' to compare one thing with a group.",
        sentences: ["She is the {blank} student in the class.", "This is the {blank} building in the city.", "He is one of the {blank} actors of his generation.", "That was the {blank} day of my life."],
        answers: ["smartest", "tallest", "most talented", "happiest"],
        options: [["smartest", "smarter", "smart", "more smart"], ["tallest", "taller", "tall", "more tall"], ["most talented", "more talented", "talented", "talentedest"], ["happiest", "happier", "happy", "more happy"]]
    },
    {
        rule: "Word Order: Adverbs of Frequency", category: "word-order", level: "elementary",
        meaning: "Place adverbs of frequency (always, usually, often, sometimes, rarely, never) before the main verb but after 'be'.",
        sentences: ["She {blank} late for work.", "I {blank} drink coffee in the evening.", "They {blank} go to the gym on Saturdays.", "He {blank} forgets his keys."],
        answers: ["is never", "rarely", "usually", "always"],
        options: [["is never", "never is", "never does", "doesn't never"], ["rarely", "rare", "rarer", "rarest"], ["usually", "usual", "more usual", "most usual"], ["always", "all ways", "every time", "all time"]]
    },
    {
        rule: "Word Order: Adjective Order", category: "word-order", level: "high",
        meaning: "When using multiple adjectives, follow the order: opinion, size, age, shape, colour, origin, material, purpose.",
        sentences: ["She wore a {blank} dress.", "He bought a {blank} table.", "I found a {blank} coin.", "They live in a {blank} house."],
        answers: ["beautiful long red", "large old wooden", "small round gold", "lovely big old"],
        options: [["beautiful long red", "red long beautiful", "long beautiful red", "red beautiful long"], ["large old wooden", "wooden old large", "old large wooden", "old wooden large"], ["small round gold", "gold round small", "round small gold", "gold small round"], ["lovely big old", "old big lovely", "big old lovely", "old lovely big"]]
    },
    {
        rule: "Gerund after Prepositions", category: "gerunds-infinitives", level: "middle",
        meaning: "After a preposition, always use the gerund (-ing form), never the infinitive.",
        sentences: ["I'm interested in {blank} about other cultures.", "She's good at {blank} problems.", "He left without {blank} goodbye.", "We look forward to {blank} you."],
        answers: ["learning", "solving", "saying", "seeing"],
        options: [["learning", "learn", "to learn", "learned"], ["solving", "solve", "to solve", "solved"], ["saying", "say", "to say", "said"], ["seeing", "see", "to see", "seen"]]
    },
    {
        rule: "Infinitive of Purpose", category: "gerunds-infinitives", level: "elementary",
        meaning: "Use 'to + infinitive' to express the purpose of an action.",
        sentences: ["I went to the shop {blank} some milk.", "She called {blank} about the meeting.", "He studies hard {blank} good grades.", "We saved money {blank} a new car."],
        answers: ["to buy", "to ask", "to get", "to buy"],
        options: [["to buy", "for buying", "buying", "bought"], ["to ask", "for asking", "asking", "asked"], ["to get", "for getting", "getting", "got"], ["to buy", "for buying", "buying", "bought"]]
    },
    {
        rule: "Subject-Verb Agreement: Either...or / Neither...nor", category: "subject-verb-agreement", level: "high",
        meaning: "With 'either...or' and 'neither...nor', the verb agrees with the nearest subject.",
        sentences: ["Either the teacher or the students {blank} responsible.", "Neither the students nor the teacher {blank} the answer.", "Either my brothers or my sister {blank} coming.", "Neither the cat nor the dogs {blank} in the house."],
        answers: ["are", "knows", "is", "are"],
        options: [["are", "is", "has", "was"], ["knows", "know", "has known", "have known"], ["is", "are", "has", "have"], ["are", "is", "has", "was"]]
    },
    {
        rule: "Subject-Verb Agreement: Uncountable Nouns", category: "subject-verb-agreement", level: "middle",
        meaning: "Uncountable nouns always take a singular verb.",
        sentences: ["The news {blank} very exciting.", "The furniture in the room {blank} old.", "Mathematics {blank} my favourite subject.", "The information {blank} incorrect."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "are", "were", "have"], ["is", "are", "were", "have"], ["is", "are", "were", "have"], ["is", "are", "were", "have"]]
    },
    {
        rule: "Prepositions: Dependent Prepositions with Adjectives", category: "prepositions", level: "middle",
        meaning: "Certain adjectives are followed by specific prepositions.",
        sentences: ["She is afraid {blank} spiders.", "I am interested {blank} art.", "He is good {blank} maths.", "We are worried {blank} the results."],
        answers: ["of", "in", "at", "about"],
        options: [["of", "from", "about", "with"], ["in", "of", "at", "with"], ["at", "in", "of", "with"], ["about", "of", "at", "with"]]
    },
    {
        rule: "Prepositions: Dependent Prepositions with Verbs", category: "prepositions", level: "middle",
        meaning: "Certain verbs are followed by specific prepositions.",
        sentences: ["I apologise {blank} the inconvenience.", "She insisted {blank} paying the bill.", "We rely {blank} public transport.", "He succeeded {blank} passing the exam."],
        answers: ["for", "on", "on", "in"],
        options: [["for", "about", "of", "with"], ["on", "for", "about", "with"], ["on", "for", "about", "with"], ["in", "for", "about", "with"]]
    },
    {
        rule: "Quantifiers: Much, Many, A lot of", category: "quantifiers", level: "elementary",
        meaning: "Use 'much' with uncountable nouns in questions and negatives, 'many' with countable nouns, 'a lot of' with both.",
        sentences: ["How {blank} money do you have?", "There aren't {blank} people here today.", "She has {blank} friends at school.", "We don't have {blank} time."],
        answers: ["much", "many", "a lot of", "much"],
        options: [["much", "many", "a lot", "few"], ["many", "much", "a lot", "little"], ["a lot of", "much", "many", "few"], ["much", "many", "a lot", "few"]]
    },
    {
        rule: "Quantifiers: Some vs Any", category: "quantifiers", level: "elementary",
        meaning: "Use 'some' in positive sentences and offers; 'any' in questions and negatives.",
        sentences: ["Would you like {blank} coffee?", "I don't have {blank} money.", "There are {blank} books on the shelf.", "Is there {blank} milk in the fridge?"],
        answers: ["some", "any", "some", "any"],
        options: [["some", "any", "no", "every"], ["any", "some", "no", "every"], ["some", "any", "no", "every"], ["any", "some", "no", "every"]]
    },
    {
        rule: "Quantifiers: Enough", category: "quantifiers", level: "elementary",
        meaning: "'Enough' comes after adjectives and adverbs but before nouns.",
        sentences: ["He isn't old {blank} to drive.", "We have {blank} food for everyone.", "She didn't run fast {blank} to win.", "Is there {blank} space in the car?"],
        answers: ["enough", "enough", "enough", "enough"],
        options: [["enough", "too", "very", "much"], ["enough", "too", "very", "much"], ["enough", "too", "very", "much"], ["enough", "too", "very", "much"]]
    },
    {
        rule: "Quantifiers: Too vs Enough", category: "quantifiers", level: "elementary",
        meaning: "'Too' means more than needed (negative); 'enough' means sufficient.",
        sentences: ["This coffee is {blank} hot to drink.", "She is {blank} to reach the top shelf.", "The box is {blank} heavy for me to carry.", "Are you strong {blank} to lift this?"],
        answers: ["too", "tall enough", "too", "enough"],
        options: [["too", "enough", "very", "so"], ["tall enough", "too tall", "very tall", "so tall"], ["too", "enough", "very", "so"], ["enough", "too", "very", "so"]]
    },
    {
        rule: "Articles: The with Geographical Names", category: "articles", level: "middle",
        meaning: "Use 'the' with rivers, oceans, mountain ranges, deserts, and plural countries. Don't use 'the' with individual mountains, lakes, or most countries.",
        sentences: ["{blank} Thames flows through London.", "She climbed {blank} Mount Everest.", "They sailed across {blank} Pacific Ocean.", "I visited {blank} Lake Geneva."],
        answers: ["The", "no article", "the", "no article"],
        options: [["The", "A", "An", "No article"], ["no article", "the", "a", "an"], ["the", "a", "an", "no article"], ["no article", "the", "a", "an"]]
    },
    {
        rule: "Articles: The with Institutions", category: "articles", level: "high",
        meaning: "Don't use 'the' when talking about the general purpose of institutions (school, hospital, church). Use 'the' when referring to the building.",
        sentences: ["She goes to {blank} every Sunday.", "He was taken to {blank} after the accident.", "The children are at {blank} until 3 o'clock.", "I went to {blank} to visit my friend."],
        answers: ["church", "hospital", "school", "the hospital"],
        options: [["church", "the church", "a church", "churches"], ["hospital", "the hospital", "a hospital", "hospitals"], ["school", "the school", "a school", "schools"], ["the hospital", "hospital", "a hospital", "hospitals"]]
    },
    {
        rule: "Conditionals: First Conditional", category: "conditionals", level: "elementary",
        meaning: "Use 'if + present simple, will + base form' for real/possible future situations.",
        sentences: ["If it {blank}, we will stay at home.", "I will call you if I {blank} time.", "If she {blank} hard, she will pass the exam.", "We will go to the park if the weather {blank} nice."],
        answers: ["rains", "have", "studies", "is"],
        options: [["rains", "will rain", "rained", "is raining"], ["have", "will have", "had", "am having"], ["studies", "will study", "studied", "is studying"], ["is", "will be", "was", "is being"]]
    },
    {
        rule: "Conditionals: Second Conditional", category: "conditionals", level: "middle",
        meaning: "Use 'if + past simple, would + base form' for unreal or hypothetical present/future situations.",
        sentences: ["If I {blank} rich, I would travel the world.", "She would be happier if she {blank} a different job.", "If I {blank} you, I'd apologise.", "What would you do if you {blank} the lottery?"],
        answers: ["were", "had", "were", "won"],
        options: [["were", "am", "would be", "will be"], ["had", "has", "would have", "will have"], ["were", "am", "would be", "will be"], ["won", "win", "would win", "will win"]]
    },
    {
        rule: "Conditionals: Third Conditional", category: "conditionals", level: "high",
        meaning: "Use 'if + past perfect, would have + past participle' for unreal past situations.",
        sentences: ["If I {blank} earlier, I wouldn't have missed the train.", "She would have passed if she {blank} harder.", "If they {blank} us, we would have come.", "We wouldn't have got lost if we {blank} a map."],
        answers: ["had left", "had studied", "had invited", "had brought"],
        options: [["had left", "left", "would leave", "have left"], ["had studied", "studied", "would study", "has studied"], ["had invited", "invited", "would invite", "have invited"], ["had brought", "brought", "would bring", "have brought"]]
    },
    {
        rule: "Passive: Future Passive", category: "passive", level: "middle",
        meaning: "Form the future passive with 'will be + past participle'.",
        sentences: ["The results {blank} next week.", "A new hospital {blank} in our town.", "All employees {blank} by email.", "The winners {blank} at the ceremony."],
        answers: ["will be announced", "will be built", "will be notified", "will be honoured"],
        options: [["will be announced", "will announce", "are announcing", "have announced"], ["will be built", "will build", "are building", "have built"], ["will be notified", "will notify", "are notifying", "have notified"], ["will be honoured", "will honour", "are honouring", "have honoured"]]
    },
    {
        rule: "Passive: Present Perfect Passive", category: "passive", level: "middle",
        meaning: "Form the present perfect passive with 'has/have been + past participle'.",
        sentences: ["The report {blank} already.", "Several new laws {blank} this year.", "The package {blank} to the wrong address.", "Two new teachers {blank} for next term."],
        answers: ["has been submitted", "have been passed", "has been sent", "have been hired"],
        options: [["has been submitted", "has submitted", "was submitted", "is submitted"], ["have been passed", "have passed", "were passed", "are passed"], ["has been sent", "has sent", "was sent", "is sent"], ["have been hired", "have hired", "were hired", "are hired"]]
    },
    {
        rule: "Gerund as Subject", category: "gerunds-infinitives", level: "middle",
        meaning: "Use the gerund (-ing form) as the subject of a sentence.",
        sentences: ["{blank} is good for your health.", "{blank} in public can be nerve-wracking.", "{blank} too much sugar is unhealthy.", "{blank} a new language takes time."],
        answers: ["Swimming", "Speaking", "Eating", "Learning"],
        options: [["Swimming", "To swim", "Swim", "Swam"], ["Speaking", "To speak", "Speak", "Spoke"], ["Eating", "To eat", "Eat", "Ate"], ["Learning", "To learn", "Learn", "Learnt"]]
    },
    {
        rule: "Gerund vs Infinitive: Verbs Followed by Gerund", category: "gerunds-infinitives", level: "middle",
        meaning: "Some verbs are always followed by the gerund: enjoy, avoid, mind, suggest, finish, deny, keep, consider.",
        sentences: ["I enjoy {blank} in the morning.", "She avoided {blank} him.", "Do you mind {blank} the window?", "He denied {blank} the money."],
        answers: ["running", "meeting", "opening", "taking"],
        options: [["running", "to run", "run", "ran"], ["meeting", "to meet", "meet", "met"], ["opening", "to open", "open", "opened"], ["taking", "to take", "take", "took"]]
    },
    {
        rule: "Gerund vs Infinitive: Verbs Followed by Infinitive", category: "gerunds-infinitives", level: "middle",
        meaning: "Some verbs are always followed by the infinitive: want, decide, hope, promise, plan, refuse, agree, afford.",
        sentences: ["She wants {blank} abroad.", "They decided {blank} the house.", "I hope {blank} you soon.", "He promised {blank} on time."],
        answers: ["to travel", "to sell", "to see", "to arrive"],
        options: [["to travel", "travelling", "travel", "travelled"], ["to sell", "selling", "sell", "sold"], ["to see", "seeing", "see", "saw"], ["to arrive", "arriving", "arrive", "arrived"]]
    },
    {
        rule: "Pronouns: Possessive vs Possessive Adjective", category: "pronouns", level: "elementary",
        meaning: "Possessive adjectives (my, your, his) come before nouns. Possessive pronouns (mine, yours, his) replace noun phrases.",
        sentences: ["This is {blank} book.", "That car is {blank}.", "Is this {blank} coat?", "The idea was {blank}."],
        answers: ["my", "mine", "your", "hers"],
        options: [["my", "mine", "me", "I"], ["mine", "my", "me", "I"], ["your", "yours", "you", "yourself"], ["hers", "her", "she", "herself"]]
    },
    {
        rule: "Pronouns: Indefinite Pronouns", category: "pronouns", level: "middle",
        meaning: "Use 'someone/anyone/no one/everyone' for people and 'something/anything/nothing/everything' for things.",
        sentences: ["{blank} called while you were out.", "Is {blank} wrong? You look upset.", "I've looked everywhere but I can't find it {blank}.", "{blank} is ready for the presentation."],
        answers: ["Someone", "something", "anywhere", "Everything"],
        options: [["Someone", "Anyone", "No one", "Everyone"], ["something", "anything", "nothing", "everything"], ["anywhere", "somewhere", "nowhere", "everywhere"], ["Everything", "Something", "Anything", "Nothing"]]
    },
    {
        rule: "Reported Speech: Modal Changes", category: "reported-speech", level: "high",
        meaning: "When reporting speech, modals change: can → could, will → would, may → might. Must can stay or become 'had to'.",
        sentences: ["She said she {blank} help us.", "He said he {blank} be late.", "They told us they {blank} come to the party.", "She said she {blank} finish the report by Friday."],
        answers: ["could", "might", "would", "had to"],
        options: [["could", "can", "may", "should"], ["might", "may", "can", "should"], ["would", "will", "can", "may"], ["had to", "must", "can", "will"]]
    },
    {
        rule: "Reported Speech: Time and Place Changes", category: "reported-speech", level: "middle",
        meaning: "When reporting speech, change time and place references: today → that day, here → there, tomorrow → the next day, yesterday → the day before.",
        sentences: ["She said she would come {blank}.", "He said he had been there {blank}.", "They said they were leaving {blank}.", "She said she had arrived {blank}."],
        answers: ["the next day", "the day before", "that day", "the previous week"],
        options: [["the next day", "tomorrow", "today", "yesterday"], ["the day before", "yesterday", "today", "tomorrow"], ["that day", "today", "tomorrow", "yesterday"], ["the previous week", "last week", "this week", "next week"]]
    },
    {
        rule: "Word Formation: Negative Prefixes (il-, im-, in-, ir-)", category: "word-formation", level: "middle",
        meaning: "Use 'il-' before 'l', 'im-' before 'b/m/p', 'ir-' before 'r', and 'in-' elsewhere to make adjectives negative.",
        sentences: ["It would be {blank} to park here. (legal)", "That's completely {blank}! (possible)", "His handwriting is {blank}. (legible)", "The damage was {blank}. (reversible)"],
        answers: ["illegal", "impossible", "illegible", "irreversible"],
        options: [["illegal", "inlegal", "unlegal", "imlegal"], ["impossible", "inpossible", "unpossible", "irpossible"], ["illegible", "inlegible", "unlegible", "imlegible"], ["irreversible", "inreversible", "unreversible", "imreversible"]]
    },
    {
        rule: "Word Formation: Compound Adjectives", category: "word-formation", level: "high",
        meaning: "Compound adjectives are formed by combining words with a hyphen: well-known, good-looking, time-consuming.",
        sentences: ["She is a {blank} author. (well / know)", "That was a {blank} decision. (last / minute)", "It's a {blank} journey from here. (three / hour)", "He lives in a {blank} house. (four / bedroom)"],
        answers: ["well-known", "last-minute", "three-hour", "four-bedroom"],
        options: [["well-known", "well-knew", "well-knowing", "good-known"], ["last-minute", "last-moment", "latest-minute", "late-minute"], ["three-hour", "three-hours", "third-hour", "three-hourly"], ["four-bedroom", "four-bedrooms", "fourth-bedroom", "four-bedroomed"]]
    },
    {
        rule: "Conditionals: Zero Conditional", category: "conditionals", level: "elementary",
        meaning: "Use 'if + present simple, present simple' for general truths and scientific facts.",
        sentences: ["If you heat water to 100°C, it {blank}.", "If you mix red and blue, you {blank} purple.", "Plants die if they {blank} enough water.", "If you press this button, the machine {blank}."],
        answers: ["boils", "get", "don't get", "starts"],
        options: [["boils", "will boil", "is boiling", "boiled"], ["get", "will get", "are getting", "got"], ["don't get", "won't get", "aren't getting", "didn't get"], ["starts", "will start", "is starting", "started"]]
    },
    {
        rule: "Tenses: Used to vs Would", category: "tenses", level: "middle",
        meaning: "Use 'used to' for past habits and states; 'would' only for past repeated actions, not states.",
        sentences: ["I {blank} live in the countryside as a child.", "Every summer, we {blank} go to the beach.", "She {blank} have long hair when she was young.", "My grandfather {blank} tell us stories every night."],
        answers: ["used to", "would", "used to", "would"],
        options: [["used to", "would", "was used to", "got used to"], ["would", "used to", "was used to", "got used to"], ["used to", "would", "was used to", "got used to"], ["would", "used to", "was used to", "got used to"]]
    },
    {
        rule: "Tenses: Be used to vs Get used to", category: "tenses", level: "high",
        meaning: "'Be used to + gerund' means be accustomed to; 'get used to + gerund' means become accustomed to.",
        sentences: ["I {blank} waking up early. I've done it for years.", "She is gradually {blank} the new climate.", "He {blank} working long hours in his previous job.", "It took me a while to {blank} driving on the left."],
        answers: ["am used to", "getting used to", "was used to", "get used to"],
        options: [["am used to", "used to", "get used to", "got used to"], ["getting used to", "used to", "got used to", "being used to"], ["was used to", "used to", "got used to", "got use to"], ["get used to", "used to", "be used to", "got use to"]]
    },
    {
        rule: "Tenses: Present Perfect Continuous", category: "tenses", level: "middle",
        meaning: "Use the present perfect continuous (have been + -ing) to emphasise the duration of an action that started in the past and continues to the present.",
        sentences: ["I {blank} for two hours.", "She {blank} all morning.", "They {blank} here since 2015.", "He {blank} very hard lately."],
        answers: ["have been waiting", "has been studying", "have been living", "has been working"],
        options: [["have been waiting", "have waited", "am waiting", "wait"], ["has been studying", "has studied", "is studying", "studies"], ["have been living", "have lived", "are living", "live"], ["has been working", "has worked", "is working", "works"]]
    },
    {
        rule: "Tenses: Present Perfect Simple vs Continuous", category: "tenses", level: "high",
        meaning: "Use present perfect simple for completed actions or results; use present perfect continuous for ongoing actions or to emphasise duration.",
        sentences: ["I {blank} three emails this morning.", "She {blank} since 6 a.m.", "They {blank} the project.", "We {blank} about this for ages."],
        answers: ["have written", "has been working", "have finished", "have been talking"],
        options: [["have written", "have been writing", "wrote", "was writing"], ["has been working", "has worked", "worked", "was working"], ["have finished", "have been finishing", "finished", "were finishing"], ["have been talking", "have talked", "talked", "were talking"]]
    },
    {
        rule: "Tenses: Past Continuous vs Past Simple", category: "tenses", level: "middle",
        meaning: "Use the past continuous for actions in progress at a specific past time; use the past simple for completed actions that interrupted them.",
        sentences: ["While I {blank}, the phone rang.", "She {blank} when she heard the news.", "It {blank} when we left the house.", "They {blank} dinner when the guests arrived."],
        answers: ["was cooking", "was studying", "was raining", "were having"],
        options: [["was cooking", "cooked", "have cooked", "am cooking"], ["was studying", "studied", "has studied", "is studying"], ["was raining", "rained", "has rained", "is raining"], ["were having", "had", "have had", "are having"]]
    },
    {
        rule: "Tenses: Past Perfect vs Past Simple", category: "tenses", level: "high",
        meaning: "Use the past perfect (had + past participle) for an action completed before another past action.",
        sentences: ["When I arrived, the meeting {blank}.", "She {blank} before I could say goodbye.", "They {blank} dinner by the time we got there.", "He realised he {blank} his wallet at home."],
        answers: ["had already started", "had left", "had finished", "had left"],
        options: [["had already started", "already started", "has already started", "starts"], ["had left", "left", "has left", "leaves"], ["had finished", "finished", "have finished", "finish"], ["had left", "left", "has left", "leaves"]]
    },
    {
        rule: "Prepositions: For vs Since vs Ago", category: "prepositions", level: "middle",
        meaning: "'For' indicates duration, 'since' indicates a starting point, 'ago' indicates how far in the past.",
        sentences: ["I have lived here {blank} ten years.", "She has worked here {blank} 2018.", "We met three years {blank}.", "He has been waiting {blank} two hours."],
        answers: ["for", "since", "ago", "for"],
        options: [["for", "since", "ago", "during"], ["since", "for", "ago", "during"], ["ago", "for", "since", "during"], ["for", "since", "ago", "during"]]
    },
    {
        rule: "Prepositions: During vs While", category: "prepositions", level: "middle",
        meaning: "'During' is a preposition followed by a noun; 'while' is a conjunction followed by a clause.",
        sentences: ["I fell asleep {blank} the movie.", "She called {blank} I was cooking.", "It rained {blank} the night.", "He read a book {blank} he was waiting."],
        answers: ["during", "while", "during", "while"],
        options: [["during", "while", "for", "when"], ["while", "during", "for", "when"], ["during", "while", "for", "when"], ["while", "during", "for", "when"]]
    },
    {
        rule: "Subject-Verb Agreement: There is / There are", category: "subject-verb-agreement", level: "elementary",
        meaning: "Use 'there is' with singular nouns and 'there are' with plural nouns.",
        sentences: ["{blank} a book on the table.", "{blank} many people in the park.", "{blank} some milk in the fridge.", "{blank} several reasons for the delay."],
        answers: ["There is", "There are", "There is", "There are"],
        options: [["There is", "There are", "It is", "It has"], ["There are", "There is", "It is", "It has"], ["There is", "There are", "It is", "It has"], ["There are", "There is", "It is", "It has"]]
    },
    {
        rule: "Subject-Verb Agreement: Every, Each, No", category: "subject-verb-agreement", level: "middle",
        meaning: "'Every', 'each', and 'no' + singular noun take a singular verb.",
        sentences: ["Every student {blank} to attend the meeting.", "Each of the rooms {blank} a balcony.", "No student {blank} allowed to leave early.", "Every one of the boxes {blank} been checked."],
        answers: ["needs", "has", "is", "has"],
        options: [["needs", "need", "are needing", "have needed"], ["has", "have", "is having", "are having"], ["is", "are", "were", "have been"], ["has", "have", "is", "are"]]
    },
    {
        rule: "Comparatives: Less and Fewer", category: "comparatives", level: "middle",
        meaning: "Use 'fewer' with countable nouns and 'less' with uncountable nouns.",
        sentences: ["There are {blank} students this year than last.", "We need to use {blank} energy.", "She made {blank} mistakes than usual.", "I have {blank} time than I thought."],
        answers: ["fewer", "less", "fewer", "less"],
        options: [["fewer", "less", "lesser", "least"], ["less", "fewer", "lesser", "least"], ["fewer", "less", "lesser", "least"], ["less", "fewer", "lesser", "least"]]
    },
    {
        rule: "Comparatives: Gradable vs Non-gradable Adjectives", category: "comparatives", level: "college",
        meaning: "Use 'very' with gradable adjectives (big, cold) and 'absolutely' with non-gradable/extreme adjectives (enormous, freezing).",
        sentences: ["The weather is {blank} cold.", "The view from the top was {blank} stunning.", "The test was {blank} difficult.", "The food was {blank} delicious."],
        answers: ["very", "absolutely", "extremely", "absolutely"],
        options: [["very", "absolutely", "totally", "utterly"], ["absolutely", "very", "quite", "rather"], ["extremely", "absolutely", "totally", "utterly"], ["absolutely", "very", "quite", "rather"]]
    },
    {
        rule: "Relative Clauses: Defining vs Non-defining", category: "relative-clauses", level: "middle",
        meaning: "Defining relative clauses identify the noun (no commas); non-defining clauses give extra information (with commas).",
        sentences: ["The woman {blank} lives next door is a teacher.", "My car, {blank} I bought last year, has broken down.", "The book {blank} you lent me was excellent.", "London, {blank} is the capital of England, is very busy."],
        answers: ["who", "which", "that", "which"],
        options: [["who", "which", "whom", "whose"], ["which", "that", "who", "whom"], ["that", "which", "who", "whom"], ["which", "that", "who", "whom"]]
    },
    {
        rule: "Relative Clauses: Whose", category: "relative-clauses", level: "middle",
        meaning: "Use 'whose' to show possession in relative clauses.",
        sentences: ["The man {blank} car was stolen reported it to the police.", "I know a girl {blank} father is an astronaut.", "The company {blank} products we use has gone bankrupt.", "That's the author {blank} books I love."],
        answers: ["whose", "whose", "whose", "whose"],
        options: [["whose", "who's", "which", "that"], ["whose", "who's", "which", "that"], ["whose", "who's", "which", "that"], ["whose", "who's", "which", "that"]]
    },
    {
        rule: "Relative Clauses: Preposition + Whom/Which", category: "relative-clauses", level: "college",
        meaning: "In formal English, place the preposition before 'whom' or 'which' in relative clauses.",
        sentences: ["The person {blank} I was speaking is the manager.", "The house {blank} they live is very old.", "The topic {blank} he was referring was complex.", "The colleague {blank} I worked is now retired."],
        answers: ["to whom", "in which", "to which", "with whom"],
        options: [["to whom", "who to", "that", "whom"], ["in which", "which in", "that", "where"], ["to which", "which to", "that", "where"], ["with whom", "whom with", "that", "who"]]
    },
    {
        rule: "Pronouns: Reciprocal Pronouns", category: "pronouns", level: "middle",
        meaning: "Use 'each other' for two people and 'one another' for more than two (though they are often interchangeable).",
        sentences: ["The two sisters help {blank} with homework.", "All the team members support {blank}.", "They looked at {blank} and smiled.", "The students corrected {blank}'s essays."],
        answers: ["each other", "one another", "each other", "each other"],
        options: [["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"], ["each other", "one another", "themselves", "them"], ["each other", "one another", "their own", "them"]]
    },
    {
        rule: "Pronouns: Demonstrative Pronouns", category: "pronouns", level: "elementary",
        meaning: "Use 'this/these' for things near and 'that/those' for things far away.",
        sentences: ["{blank} is my book right here.", "{blank} are nice shoes you're wearing.", "Who are {blank} people over there?", "{blank} was a great movie we saw last week."],
        answers: ["This", "These", "those", "That"],
        options: [["This", "That", "These", "Those"], ["These", "Those", "This", "That"], ["those", "these", "this", "that"], ["That", "This", "These", "Those"]]
    },
    {
        rule: "Word Order: Position of Enough", category: "word-order", level: "elementary",
        meaning: "'Enough' comes before nouns but after adjectives and adverbs.",
        sentences: ["We don't have {blank} to finish.", "The coffee isn't hot {blank}.", "Is there {blank} for everyone?", "She runs fast {blank} to win."],
        answers: ["enough time", "enough", "enough food", "enough"],
        options: [["enough time", "time enough", "time of enough", "enough of time"], ["enough", "too", "very", "quite"], ["enough food", "food enough", "food of enough", "enough of food"], ["enough", "too", "very", "quite"]]
    },
    {
        rule: "Inversion: Nor/Neither", category: "word-order", level: "college",
        meaning: "After 'nor' or 'neither' at the start of a clause, invert the subject and auxiliary.",
        sentences: ["He doesn't like fish, {blank} does she.", "She can't swim. {blank} can her brother.", "I haven't seen it, {blank} has he.", "They won't come, {blank} will we."],
        answers: ["nor", "Neither", "nor", "nor"],
        options: [["nor", "or", "and", "but"], ["Neither", "Either", "Also", "Both"], ["nor", "or", "and", "but"], ["nor", "or", "and", "but"]]
    },
    {
        rule: "Inversion: Not until", category: "word-order", level: "professional",
        meaning: "When 'not until' is placed at the beginning of a sentence, use inverted word order.",
        sentences: ["Not until I got home {blank} I realise I had lost my keys.", "Not until the last minute {blank} she decide to come.", "Not until he spoke {blank} I recognise him.", "Not until the results came out {blank} we know the truth."],
        answers: ["did", "did", "did", "did"],
        options: [["did", "do", "had", "was"], ["did", "do", "had", "was"], ["did", "do", "had", "was"], ["did", "do", "had", "was"]]
    },
    {
        rule: "Inversion: Little", category: "word-order", level: "professional",
        meaning: "'Little' at the start of a sentence with inverted word order means 'not at all'.",
        sentences: ["Little {blank} he know what was about to happen.", "Little {blank} we realise how difficult the task would be.", "Little {blank} they suspect the truth.", "Little {blank} she imagine that she would win."],
        answers: ["did", "did", "did", "did"],
        options: [["did", "does", "had", "was"], ["did", "does", "had", "was"], ["did", "does", "had", "was"], ["did", "does", "had", "was"]]
    },
    {
        rule: "Wish: I wish + would (complaints)", category: "conditionals", level: "middle",
        meaning: "Use 'I wish + someone + would' to complain about someone's behaviour or express desire for change.",
        sentences: ["I wish he {blank} leaving his clothes on the floor.", "I wish they {blank} so loudly.", "I wish it {blank} raining.", "I wish you {blank} to me more."],
        answers: ["would stop", "wouldn't talk", "would stop", "would listen"],
        options: [["would stop", "stopped", "had stopped", "stops"], ["wouldn't talk", "didn't talk", "hadn't talked", "don't talk"], ["would stop", "stopped", "had stopped", "stops"], ["would listen", "listened", "had listened", "listen"]]
    },
    {
        rule: "If Only + Past Perfect (Deep Regret)", category: "conditionals", level: "high",
        meaning: "Use 'if only + past perfect' to express deep regret about a past action.",
        sentences: ["If only I {blank} what I know now.", "If only she {blank} to me.", "If only we {blank} that opportunity.", "If only they {blank} sooner."],
        answers: ["had known", "had listened", "hadn't missed", "had started"],
        options: [["had known", "knew", "know", "would know"], ["had listened", "listened", "listens", "would listen"], ["hadn't missed", "didn't miss", "don't miss", "wouldn't miss"], ["had started", "started", "start", "would start"]]
    },
    {
        rule: "Emphasis: It is/was...who/that (Cleft)", category: "word-order", level: "college",
        meaning: "Use cleft sentences starting with 'It is/was' to put emphasis on different parts of the sentence.",
        sentences: ["It was {blank} who told me the news.", "It is {blank} that I find most challenging.", "It was in {blank} that the Olympics were held.", "It was {blank} that caused the problem."],
        answers: ["Sarah", "maths", "2012", "the delay"],
        options: [["Sarah", "she", "her", "hers"], ["maths", "math", "a math", "the math"], ["2012", "the 2012", "a 2012", "at 2012"], ["the delay", "a delay", "delay", "delaying"]]
    },
    {
        rule: "Emphasis: What-cleft", category: "word-order", level: "college",
        meaning: "Use 'What + clause + be' to put special emphasis on the focused element.",
        sentences: ["What I {blank} is a good rest.", "What she {blank} was his arrogance.", "What we {blank} is more practice.", "What {blank} me was the ending."],
        answers: ["need", "hated", "need", "surprised"],
        options: [["need", "needing", "needed", "needs"], ["hated", "hating", "hate", "hates"], ["need", "needing", "needed", "needs"], ["surprised", "surprising", "surprises", "surprise"]]
    },
    {
        rule: "Advanced Passive: Need + -ing / Need to be done", category: "passive", level: "high",
        meaning: "'Need + gerund' has a passive meaning: 'The car needs washing' means 'The car needs to be washed'.",
        sentences: ["The garden needs {blank}.", "These windows need {blank}.", "Your hair needs {blank}.", "The report needs {blank} before Friday."],
        answers: ["watering", "cleaning", "cutting", "finishing"],
        options: [["watering", "to water", "water", "watered"], ["cleaning", "to clean", "clean", "cleaned"], ["cutting", "to cut", "cut", "cutted"], ["finishing", "to finish", "finish", "finished"]]
    },
    {
        rule: "Passive: Get Passive", category: "passive", level: "middle",
        meaning: "Use 'get + past participle' as an informal alternative to 'be + past participle', especially for unexpected events.",
        sentences: ["He {blank} fired from his job.", "She {blank} injured in the accident.", "They {blank} married in June.", "I {blank} stuck in traffic."],
        answers: ["got", "got", "got", "got"],
        options: [["got", "was", "has", "had"], ["got", "was", "has", "had"], ["got", "were", "have", "had"], ["got", "was", "has", "had"]]
    },
    {
        rule: "Modals: Needn't have vs Didn't need to", category: "modals", level: "college",
        meaning: "'Needn't have done' means you did it but it was unnecessary. 'Didn't need to do' means it wasn't necessary (and you probably didn't do it).",
        sentences: ["You {blank} bought so much food — there's plenty already.", "She {blank} to go to the bank because she had enough cash.", "We {blank} have hurried. The meeting was delayed.", "He {blank} to work today because it was a holiday."],
        answers: ["needn't have", "didn't need", "needn't", "didn't need"],
        options: [["needn't have", "didn't need to have", "mustn't have", "shouldn't have"], ["didn't need", "needn't have", "mustn't", "shouldn't"], ["needn't", "didn't need to", "mustn't", "shouldn't"], ["didn't need", "needn't have", "mustn't", "shouldn't"]]
    },
    {
        rule: "Modals: May/Might for Present Speculation", category: "modals", level: "middle",
        meaning: "Use 'may' or 'might' to speculate about present situations when you are not certain.",
        sentences: ["She {blank} be at home — I'm not sure.", "He {blank} know the answer, but I doubt it.", "They {blank} be having dinner right now.", "It {blank} rain later, according to the forecast."],
        answers: ["may", "might", "might", "may"],
        options: [["may", "must", "should", "will"], ["might", "must", "should", "will"], ["might", "must", "should", "will"], ["may", "must", "should", "will"]]
    },
    {
        rule: "Modals: Shall for Offers and Suggestions", category: "modals", level: "elementary",
        meaning: "Use 'shall' in questions with 'I' and 'we' to make offers and suggestions.",
        sentences: ["{blank} I open the window?", "{blank} we go for a walk?", "{blank} I carry that for you?", "{blank} we order pizza tonight?"],
        answers: ["Shall", "Shall", "Shall", "Shall"],
        options: [["Shall", "Will", "Do", "Can"], ["Shall", "Will", "Do", "Can"], ["Shall", "Will", "Do", "Can"], ["Shall", "Will", "Do", "Can"]]
    },
    {
        rule: "Tenses: Going to vs Will", category: "tenses", level: "elementary",
        meaning: "Use 'going to' for plans and intentions; use 'will' for spontaneous decisions, promises, and predictions.",
        sentences: ["I {blank} visit my grandparents this weekend.", "It's hot in here. I {blank} open the window.", "Look at those clouds! It {blank} rain.", "Don't worry, I {blank} help you."],
        answers: ["am going to", "will", "is going to", "will"],
        options: [["am going to", "will", "am about to", "shall"], ["will", "am going to", "am about to", "shall"], ["is going to", "will", "is about to", "shall"], ["will", "am going to", "am about to", "shall"]]
    },
    {
        rule: "Tenses: Present Continuous for Future Arrangements", category: "tenses", level: "middle",
        meaning: "Use the present continuous to talk about fixed future arrangements.",
        sentences: ["I {blank} the dentist tomorrow at 3.", "We {blank} dinner with the Smiths on Saturday.", "She {blank} to New York next week.", "They {blank} house next month."],
        answers: ["am seeing", "are having", "is flying", "are moving"],
        options: [["am seeing", "see", "will see", "going to see"], ["are having", "have", "will have", "going to have"], ["is flying", "flies", "will fly", "going to fly"], ["are moving", "move", "will move", "going to move"]]
    },
    {
        rule: "Prepositions: About vs On (Topic)", category: "prepositions", level: "middle",
        meaning: "Both 'about' and 'on' can mean 'regarding a topic'. 'On' is more formal and suggests a detailed treatment.",
        sentences: ["She wrote a book {blank} climate change.", "We had a discussion {blank} the project.", "He gave a lecture {blank} quantum physics.", "I read an article {blank} healthy eating."],
        answers: ["on", "about", "on", "about"],
        options: [["on", "about", "for", "of"], ["about", "on", "for", "of"], ["on", "about", "for", "of"], ["about", "on", "for", "of"]]
    },
    {
        rule: "Prepositions: In charge of / In favour of / In need of", category: "prepositions", level: "high",
        meaning: "These are fixed prepositional phrases using 'in...of'.",
        sentences: ["She is {blank} the marketing department.", "Are you {blank} the new proposal?", "The building is {blank} repair.", "He is {blank} finding a solution."],
        answers: ["in charge of", "in favour of", "in need of", "in charge of"],
        options: [["in charge of", "in favour of", "in need of", "in case of"], ["in favour of", "in charge of", "in need of", "in case of"], ["in need of", "in charge of", "in favour of", "in case of"], ["in charge of", "in favour of", "in need of", "in case of"]]
    },
    {
        rule: "Articles: A/An with Abstract Nouns", category: "articles", level: "college",
        meaning: "Use 'a/an' with abstract nouns when modified by an adjective to express a particular type or instance.",
        sentences: ["She has {blank} deep understanding of the subject.", "He showed {blank} remarkable courage.", "There was {blank} sudden silence in the room.", "The city has {blank} rich history."],
        answers: ["a", "a", "a", "a"],
        options: [["a", "the", "an", "no article"], ["a", "the", "an", "no article"], ["a", "the", "an", "no article"], ["a", "the", "an", "no article"]]
    },
    {
        rule: "Articles: No Article with Meals, Sports, Languages", category: "articles", level: "middle",
        meaning: "Generally, don't use articles with meals, sports, and languages when used in a general sense.",
        sentences: ["We had {blank} dinner at 7.", "She plays {blank} tennis every weekend.", "He speaks {blank} French fluently.", "What did you have for {blank} breakfast?"],
        answers: ["no article", "no article", "no article", "no article"],
        options: [["no article", "a", "the", "an"], ["no article", "a", "the", "an"], ["no article", "a", "the", "an"], ["no article", "a", "the", "an"]]
    },
    {
        rule: "Conjunctions: Not only...but also", category: "conjunctions", level: "high",
        meaning: "'Not only...but also' is used to emphasise two related facts or qualities.",
        sentences: ["She is {blank} beautiful but also intelligent.", "He {blank} only speaks English but also French.", "The restaurant is not only cheap {blank} also excellent.", "{blank} did she win the race, but she also set a record."],
        answers: ["not only", "not", "but", "Not only"],
        options: [["not only", "both", "either", "neither"], ["not", "both", "either", "neither"], ["but", "and", "or", "nor"], ["Not only", "Both", "Either", "Neither"]]
    },
    {
        rule: "Conjunctions: In case", category: "conjunctions", level: "middle",
        meaning: "'In case' means 'because something might happen'. It's different from 'if'.",
        sentences: ["Take an umbrella {blank} it rains.", "I'll give you my number {blank} you need to contact me.", "She took a snack {blank} she got hungry later.", "Write it down {blank} you forget."],
        answers: ["in case", "in case", "in case", "in case"],
        options: [["in case", "if", "unless", "although"], ["in case", "if", "unless", "although"], ["in case", "if", "unless", "although"], ["in case", "if", "unless", "although"]]
    },
    {
        rule: "Conjunctions: No sooner...than / Hardly...when", category: "conjunctions", level: "professional",
        meaning: "'No sooner...than' and 'hardly...when' describe one action happening immediately after another.",
        sentences: ["No sooner {blank} I arrived than it started to rain.", "Hardly {blank} she finished speaking when the lights went out.", "No sooner had they sat down {blank} the waiter appeared.", "Hardly had I closed my eyes {blank} the alarm went off."],
        answers: ["had", "had", "than", "when"],
        options: [["had", "have", "did", "was"], ["had", "have", "did", "was"], ["than", "when", "that", "before"], ["when", "than", "that", "before"]]
    },
    {
        rule: "Subject-Verb Agreement: As well as / Together with", category: "subject-verb-agreement", level: "college",
        meaning: "Phrases like 'as well as', 'together with', 'along with' do not affect the verb. The verb agrees with the first subject.",
        sentences: ["The manager, as well as the staff, {blank} attending.", "My mother, together with my sisters, {blank} coming.", "The teacher, along with the students, {blank} going on the trip.", "The president, as well as his advisors, {blank} the proposal."],
        answers: ["is", "is", "is", "supports"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["supports", "support", "are supporting", "have supported"]]
    },
    {
        rule: "Subject-Verb Agreement: Inverted Sentences", category: "subject-verb-agreement", level: "professional",
        meaning: "In inverted sentences, the verb must still agree with the true subject that follows it.",
        sentences: ["Here {blank} the results of the test.", "On the table {blank} a pile of books.", "Among the guests {blank} several celebrities.", "Under the bed {blank} a pair of shoes."],
        answers: ["are", "was", "were", "was"],
        options: [["are", "is", "was", "has"], ["was", "were", "are", "is"], ["were", "was", "is", "has"], ["was", "were", "are", "is"]]
    },
    {
        rule: "Comparatives: Comparative + and + Comparative", category: "comparatives", level: "elementary",
        meaning: "Use 'comparative + and + comparative' to show something is changing or increasing.",
        sentences: ["The days are getting {blank}.", "Her English is getting {blank}.", "The traffic is becoming {blank}.", "It's getting {blank} to find a parking space."],
        answers: ["longer and longer", "better and better", "worse and worse", "harder and harder"],
        options: [["longer and longer", "more long", "the longest", "long and long"], ["better and better", "more good", "the best", "good and good"], ["worse and worse", "more bad", "the worst", "bad and bad"], ["harder and harder", "more hard", "the hardest", "hard and hard"]]
    },
    {
        rule: "Pronouns: Emphatic Pronouns", category: "pronouns", level: "middle",
        meaning: "Use reflexive pronouns as emphatic pronouns to emphasise the subject.",
        sentences: ["The president {blank} opened the ceremony.", "I'll do it {blank}.", "She {blank} told me the news.", "The children made the cake {blank}."],
        answers: ["himself", "myself", "herself", "themselves"],
        options: [["himself", "his", "him", "he"], ["myself", "my", "me", "I"], ["herself", "her", "she", "hers"], ["themselves", "their", "them", "they"]]
    },
    {
        rule: "Pronouns: What vs Which", category: "pronouns", level: "middle",
        meaning: "Use 'what' when the range of options is unknown or unlimited; use 'which' when choosing from a limited set.",
        sentences: ["{blank} colour do you want — red or blue?", "{blank} time does the film start?", "{blank} of these two shirts do you prefer?", "{blank} is the capital of Peru?"],
        answers: ["Which", "What", "Which", "What"],
        options: [["Which", "What", "Who", "That"], ["What", "Which", "Who", "That"], ["Which", "What", "Who", "That"], ["What", "Which", "Who", "That"]]
    },
    {
        rule: "Word Formation: Abstract Noun from Verb (-ance/-ence)", category: "word-formation", level: "high",
        meaning: "Form abstract nouns from verbs using '-ance' or '-ence'.",
        sentences: ["His {blank} at the meeting was expected. (attend)", "The {blank} of the two cultures was fascinating. (differ)", "She made a {blank} on stage despite her fear. (appear)", "I have no {blank} in his abilities. (confide)"],
        answers: ["attendance", "difference", "appearance", "confidence"],
        options: [["attendance", "attendence", "attending", "attendness"], ["difference", "differance", "differing", "differness"], ["appearance", "appearence", "appearing", "appearness"], ["confidence", "confidance", "confiding", "confidness"]]
    },
    {
        rule: "Word Formation: Person Nouns (-er, -or, -ist, -ian)", category: "word-formation", level: "middle",
        meaning: "Form nouns for people using suffixes: '-er', '-or', '-ist', '-ian'.",
        sentences: ["She is a talented {blank}. (music)", "The {blank} of the company retired. (found)", "He works as an {blank}. (electric)", "The {blank} examined the patient. (therapy)"],
        answers: ["musician", "founder", "electrician", "therapist"],
        options: [["musician", "musicer", "musicor", "musicist"], ["founder", "foundor", "foundist", "foundian"], ["electrician", "electricer", "electricor", "electricist"], ["therapist", "theraper", "therapor", "therapian"]]
    },
    {
        rule: "Conditional: As if / As though", category: "conditionals", level: "high",
        meaning: "Use 'as if / as though + past simple' for present unreal situations, and 'as if + past perfect' for past unreal situations.",
        sentences: ["He talks as if he {blank} everything.", "She looked as though she {blank} crying.", "He spends money as if he {blank} a millionaire.", "They acted as though nothing {blank}."],
        answers: ["knew", "had been", "were", "had happened"],
        options: [["knew", "knows", "has known", "is knowing"], ["had been", "was", "is", "has been"], ["were", "is", "has been", "was being"], ["had happened", "happened", "happens", "has happened"]]
    },
    {
        rule: "Conditional: But for", category: "conditionals", level: "professional",
        meaning: "'But for' means 'if it were not for' (present) or 'if it had not been for' (past).",
        sentences: ["But for your help, I {blank} have succeeded.", "But for the traffic, we {blank} have arrived on time.", "But for his injury, he {blank} be playing today.", "But for the rain, the event {blank} have been perfect."],
        answers: ["wouldn't", "would", "would", "would"],
        options: [["wouldn't", "couldn't", "shouldn't", "didn't"], ["would", "wouldn't", "couldn't", "shouldn't"], ["would", "wouldn't", "couldn't", "shouldn't"], ["would", "wouldn't", "couldn't", "shouldn't"]]
    },
    {
        rule: "Passive: Reporting Structures Passive", category: "passive", level: "professional",
        meaning: "Use passive reporting structures to distance the writer from the claim: 'It is claimed/argued/suggested that...'",
        sentences: ["It {blank} that exercise improves mental health.", "It {blank} that the building dates back to the 12th century.", "It {blank} that the new drug could cure the disease.", "It {blank} that more research is needed."],
        answers: ["is claimed", "is believed", "has been suggested", "is argued"],
        options: [["is claimed", "claims", "was claiming", "has claimed"], ["is believed", "believes", "was believing", "has believed"], ["has been suggested", "suggests", "was suggesting", "is suggesting"], ["is argued", "argues", "was arguing", "has argued"]]
    },
    {
        rule: "Passive: Born (Passive Only)", category: "passive", level: "elementary",
        meaning: "'Born' is always used in the passive: 'I was born', never 'I born' or 'I have born'.",
        sentences: ["She {blank} in 1990.", "Where {blank} you born?", "The baby {blank} at midnight.", "Mozart {blank} in Salzburg, Austria."],
        answers: ["was born", "were", "was born", "was born"],
        options: [["was born", "born", "is born", "has born"], ["were", "was", "are", "did"], ["was born", "born", "is born", "has born"], ["was born", "born", "is born", "has born"]]
    },
    {
        rule: "Gerund vs Infinitive: Like, Love, Hate, Prefer", category: "gerunds-infinitives", level: "middle",
        meaning: "After 'like', 'love', 'hate', and 'prefer', you can use either a gerund or an infinitive with little change in meaning.",
        sentences: ["I love {blank} to music.", "She prefers {blank} at home.", "He hates {blank} up early.", "We like {blank} in the park."],
        answers: ["listening", "to stay", "getting", "walking"],
        options: [["listening", "listen", "listened", "listens"], ["to stay", "stay", "stayed", "stays"], ["getting", "get", "got", "gets"], ["walking", "walk", "walked", "walks"]]
    },
    {
        rule: "Modals: Had better", category: "modals", level: "middle",
        meaning: "Use 'had better + base form' to give strong advice or warnings. It implies a negative consequence.",
        sentences: ["You {blank} hurry or you'll miss the bus.", "She {blank} see a doctor about that cough.", "We {blank} not be late for the meeting.", "They {blank} start studying if they want to pass."],
        answers: ["had better", "had better", "had better", "had better"],
        options: [["had better", "would better", "have better", "should better"], ["had better", "would better", "have better", "should better"], ["had better", "would better", "have better", "should better"], ["had better", "would better", "have better", "should better"]]
    },
    {
        rule: "Modals: Be supposed to", category: "modals", level: "middle",
        meaning: "Use 'be supposed to' to talk about expectations, rules, or what is generally believed.",
        sentences: ["You {blank} to wear a uniform.", "We {blank} to be there by 9.", "She {blank} to be very talented.", "This medicine {blank} to help with headaches."],
        answers: ["are supposed", "are supposed", "is supposed", "is supposed"],
        options: [["are supposed", "supposed", "have supposed", "were supposed"], ["are supposed", "supposed", "have supposed", "were supposed"], ["is supposed", "supposed", "has supposed", "was supposed"], ["is supposed", "supposed", "has supposed", "was supposed"]]
    },
    {
        rule: "Modals: Be bound to / Be likely to", category: "modals", level: "high",
        meaning: "'Be bound to' means something is certain to happen; 'be likely to' means something will probably happen.",
        sentences: ["She is {blank} to succeed. She's very talented.", "The weather is {blank} to improve tomorrow.", "He is {blank} to be late. He always is.", "Prices are {blank} to rise next year."],
        answers: ["bound", "likely", "bound", "likely"],
        options: [["bound", "likely", "able", "supposed"], ["likely", "bound", "able", "supposed"], ["bound", "likely", "able", "supposed"], ["likely", "bound", "able", "supposed"]]
    },
    {
        rule: "Tenses: Future in the Past", category: "tenses", level: "college",
        meaning: "Use 'was going to', 'was about to', or 'would' to talk about the future as seen from a past perspective.",
        sentences: ["I {blank} call you, but I forgot.", "She {blank} leave when the phone rang.", "He said he {blank} help us.", "We {blank} move to Spain, but changed our minds."],
        answers: ["was going to", "was about to", "would", "were going to"],
        options: [["was going to", "am going to", "will", "have been going to"], ["was about to", "is about to", "will", "has been about to"], ["would", "will", "is going to", "has"], ["were going to", "are going to", "will", "have been going to"]]
    },
    {
        rule: "Tenses: Narrative Tenses", category: "tenses", level: "high",
        meaning: "In storytelling, use past simple for main events, past continuous for background, and past perfect for earlier events.",
        sentences: ["The sun {blank} as we set off on our journey.", "We {blank} for about an hour when we saw the sign.", "She {blank} the letter and put it in the drawer.", "By the time he arrived, everyone {blank}."],
        answers: ["was shining", "had been walking", "read", "had left"],
        options: [["was shining", "shone", "has been shining", "had shone"], ["had been walking", "were walking", "walked", "have walked"], ["read", "was reading", "had read", "has read"], ["had left", "left", "were leaving", "have left"]]
    },
    {
        rule: "Word Formation: Adverbs from Adjectives", category: "word-formation", level: "elementary",
        meaning: "Most adverbs are formed by adding '-ly' to an adjective. Some have irregular forms.",
        sentences: ["She sings {blank}. (beautiful)", "He ran {blank} to catch the bus. (quick)", "The children played {blank} in the garden. (happy)", "She speaks English {blank}. (good)"],
        answers: ["beautifully", "quickly", "happily", "well"],
        options: [["beautifully", "beautifuly", "beautiful", "beautifuler"], ["quickly", "quickily", "quick", "quicklier"], ["happily", "happyly", "happy", "happier"], ["well", "goodly", "good", "gooder"]]
    },
    {
        rule: "Word Formation: Verb Suffixes (-ise/-ize, -fy, -en)", category: "word-formation", level: "high",
        meaning: "Form verbs from adjectives or nouns using '-ise/-ize', '-fy', or '-en'.",
        sentences: ["We need to {blank} our approach. (modern)", "Can you {blank} the meaning of this word? (clear)", "They want to {blank} the road. (wide)", "The news will {blank} everyone. (horror)"],
        answers: ["modernise", "clarify", "widen", "horrify"],
        options: [["modernise", "modernfy", "modernen", "moderning"], ["clarify", "clarize", "claren", "claring"], ["widen", "widize", "widify", "widing"], ["horrify", "horrize", "horren", "horring"]]
    },
    {
        rule: "Prepositions: At the end vs In the end", category: "prepositions", level: "high",
        meaning: "'At the end (of)' refers to a physical or temporal endpoint. 'In the end' means 'finally' or 'after everything'.",
        sentences: ["There is a garden {blank} of the road.", "{blank}, we decided to stay at home.", "He thanked everyone {blank} of his speech.", "{blank}, everything worked out fine."],
        answers: ["at the end", "In the end", "at the end", "In the end"],
        options: [["at the end", "in the end", "by the end", "on the end"], ["In the end", "At the end", "By the end", "On the end"], ["at the end", "in the end", "by the end", "on the end"], ["In the end", "At the end", "By the end", "On the end"]]
    },
    {
        rule: "Prepositions: Make vs Do", category: "prepositions", level: "middle",
        meaning: "'Make' is used with creation and production (make a cake, make a decision). 'Do' is used with tasks and activities (do homework, do the dishes).",
        sentences: ["She {blank} a mistake on the test.", "Can you {blank} the washing up?", "He {blank} a complaint to the manager.", "I need to {blank} some research."],
        answers: ["made", "do", "made", "do"],
        options: [["made", "did", "done", "makes"], ["do", "make", "done", "made"], ["made", "did", "done", "makes"], ["do", "make", "done", "made"]]
    },
    {
        rule: "Quantifiers: Several, a number of, plenty of", category: "quantifiers", level: "middle",
        meaning: "'Several' means 'more than two but not very many'. 'A number of' means 'some'. 'Plenty of' means 'more than enough'.",
        sentences: ["{blank} students complained about the exam.", "There is {blank} food for everyone.", "I've visited that country {blank} times.", "A {blank} of issues need to be addressed."],
        answers: ["Several", "plenty of", "several", "number"],
        options: [["Several", "Much", "Little", "Less"], ["plenty of", "much of", "little of", "less of"], ["several", "much", "little", "less"], ["number", "amount", "plenty", "lot"]]
    },
    {
        rule: "Quantifiers: Most vs Most of", category: "quantifiers", level: "high",
        meaning: "Use 'most + noun' for general statements. Use 'most of + the/these/my + noun' for specific groups.",
        sentences: ["{blank} people enjoy music.", "{blank} the students passed the exam.", "{blank} children like sweets.", "{blank} my friends live nearby."],
        answers: ["Most", "Most of", "Most", "Most of"],
        options: [["Most", "Most of", "The most", "Almost"], ["Most of", "Most", "The most", "Almost"], ["Most", "Most of", "The most", "Almost"], ["Most of", "Most", "The most", "Almost"]]
    },
    {
        rule: "Articles: The with Superlatives", category: "articles", level: "elementary",
        meaning: "Always use 'the' before superlative adjectives.",
        sentences: ["She is {blank} best singer in the choir.", "This is {blank} most interesting book I've ever read.", "Mount Everest is {blank} highest mountain in the world.", "That was {blank} worst meal I've ever had."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Conditionals: Providing / On condition that", category: "conditionals", level: "college",
        meaning: "'Providing (that)' and 'on condition that' are formal alternatives to 'if'.",
        sentences: ["You can borrow the car {blank} you bring it back by 6.", "I'll agree to the deal {blank} the price is reduced.", "{blank} you follow the rules, you can stay.", "She accepted the job {blank} she could work from home."],
        answers: ["providing", "on condition that", "Providing", "on condition that"],
        options: [["providing", "unless", "although", "whereas"], ["on condition that", "unless", "although", "whereas"], ["Providing", "Unless", "Although", "Whereas"], ["on condition that", "unless", "although", "whereas"]]
    },
    {
        rule: "Conditionals: Should (formal first conditional)", category: "conditionals", level: "professional",
        meaning: "In formal English, 'should' can replace 'if' in first conditional sentences: 'Should you need help, contact us.'",
        sentences: ["{blank} you have any questions, please contact us.", "{blank} the situation change, we will notify you.", "{blank} you require further assistance, do not hesitate to call.", "{blank} there be any problems, please report them immediately."],
        answers: ["Should", "Should", "Should", "Should"],
        options: [["Should", "If", "Would", "Could"], ["Should", "If", "Would", "Could"], ["Should", "If", "Would", "Could"], ["Should", "If", "Would", "Could"]]
    },
    {
        rule: "Passive: Double Object Passive", category: "passive", level: "college",
        meaning: "Verbs with two objects (give, send, offer, show) can form two types of passive sentence.",
        sentences: ["I {blank} a present by my parents.", "She {blank} the news by her colleague.", "The students {blank} a new textbook.", "We {blank} a discount by the manager."],
        answers: ["was given", "was told", "were given", "were offered"],
        options: [["was given", "gave", "has given", "is giving"], ["was told", "told", "has told", "is telling"], ["were given", "gave", "have given", "are giving"], ["were offered", "offered", "have offered", "are offering"]]
    },
    {
        rule: "Passive: Passive with Infinitive", category: "passive", level: "professional",
        meaning: "Use passive with infinitive for expectations and demands: 'be expected to', 'be required to', 'be allowed to'.",
        sentences: ["Students are {blank} to wear uniforms.", "He was {blank} to attend the meeting.", "They are {blank} to arrive by 9 a.m.", "We were not {blank} to use phones."],
        answers: ["required", "expected", "expected", "allowed"],
        options: [["required", "requiring", "require", "requires"], ["expected", "expecting", "expect", "expects"], ["expected", "expecting", "expect", "expects"], ["allowed", "allowing", "allow", "allows"]]
    },
    {
        rule: "Gerund vs Infinitive: Go + -ing", category: "gerunds-infinitives", level: "elementary",
        meaning: "Use 'go + gerund' for sports and outdoor activities: go swimming, go shopping, go hiking.",
        sentences: ["Let's go {blank} this weekend.", "She goes {blank} every morning.", "We went {blank} in the Alps last summer.", "They go {blank} every Saturday."],
        answers: ["camping", "jogging", "hiking", "shopping"],
        options: [["camping", "to camp", "camp", "camped"], ["jogging", "to jog", "jog", "jogged"], ["hiking", "to hike", "hike", "hiked"], ["shopping", "to shop", "shop", "shopped"]]
    },
    {
        rule: "Subject-Verb Agreement: Percentages and Fractions", category: "subject-verb-agreement", level: "college",
        meaning: "With percentages and fractions, the verb agrees with the noun that follows 'of'.",
        sentences: ["Fifty percent of the cake {blank} eaten.", "Two-thirds of the students {blank} passed.", "Half of the work {blank} done.", "A quarter of the employees {blank} absent."],
        answers: ["was", "have", "is", "were"],
        options: [["was", "were", "are", "have been"], ["have", "has", "is", "was"], ["is", "are", "were", "have been"], ["were", "was", "is", "has been"]]
    },
    {
        rule: "Subject-Verb Agreement: Distances, Sums, Periods", category: "subject-verb-agreement", level: "high",
        meaning: "Expressions of distance, money, and time take a singular verb when considered as one unit.",
        sentences: ["Ten miles {blank} a long way to walk.", "Five hundred pounds {blank} too much for that.", "Three years {blank} a long time to wait.", "Twenty dollars {blank} enough for lunch."],
        answers: ["is", "is", "is", "is"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Comparatives: Rather / Somewhat / Slightly", category: "comparatives", level: "high",
        meaning: "Use 'rather', 'somewhat', or 'slightly' before comparatives to show a small difference.",
        sentences: ["This version is {blank} better than the last.", "The situation is {blank} more complicated than expected.", "He's {blank} older than his wife.", "The second test was {blank} harder."],
        answers: ["slightly", "somewhat", "rather", "slightly"],
        options: [["slightly", "very", "much", "too"], ["somewhat", "very", "much", "too"], ["rather", "very", "much", "too"], ["slightly", "very", "much", "too"]]
    },
    {
        rule: "Relative Clauses: What (Free Relative)", category: "relative-clauses", level: "high",
        meaning: "'What' can be used as a free relative pronoun meaning 'the thing(s) that'.",
        sentences: ["{blank} he said made everyone laugh.", "I don't understand {blank} you mean.", "She did {blank} she could to help.", "Tell me {blank} happened."],
        answers: ["What", "what", "what", "what"],
        options: [["What", "That", "Which", "Who"], ["what", "that", "which", "who"], ["what", "that", "which", "who"], ["what", "that", "which", "who"]]
    },
    {
        rule: "Relative Clauses: All that / Everything that", category: "relative-clauses", level: "middle",
        meaning: "After 'all', 'everything', 'nothing', 'something', and 'anything', use 'that' (not 'which').",
        sentences: ["That's all {blank} I know.", "Everything {blank} happened was unexpected.", "There's nothing {blank} we can do.", "Is there anything {blank} you need?"],
        answers: ["that", "that", "that", "that"],
        options: [["that", "which", "what", "who"], ["that", "which", "what", "who"], ["that", "which", "what", "who"], ["that", "which", "what", "who"]]
    },
    {
        rule: "Pronouns: Such as Subject", category: "pronouns", level: "professional",
        meaning: "'Such' can be used as a pronoun in formal English meaning 'of the type mentioned'.",
        sentences: ["The damage was great and {blank} that it could not be repaired.", "His behaviour was {blank} that he was asked to leave.", "The views were {blank} that words could not describe them.", "Her talent is {blank} that she will surely succeed."],
        answers: ["such", "such", "such", "such"],
        options: [["such", "so", "very", "too"], ["such", "so", "very", "too"], ["such", "so", "very", "too"], ["such", "so", "very", "too"]]
    },
    {
        rule: "Pronouns: So vs Such", category: "pronouns", level: "middle",
        meaning: "Use 'so + adjective/adverb' and 'such + a/an + adjective + noun'.",
        sentences: ["It was {blank} a beautiful day.", "She is {blank} kind.", "He drove {blank} fast that he got a fine.", "It was {blank} nice weather."],
        answers: ["such", "so", "so", "such"],
        options: [["such", "so", "very", "too"], ["so", "such", "very", "too"], ["so", "such", "very", "too"], ["such", "so", "very", "too"]]
    },
    {
        rule: "Word Formation: Over- and Under- Prefixes", category: "word-formation", level: "high",
        meaning: "Use 'over-' to mean 'too much' and 'under-' to mean 'not enough'.",
        sentences: ["The steak is {blank}. I asked for medium rare. (cook)", "Teachers in this country are {blank}. (pay)", "She tends to {blank} her abilities. (estimate)", "The city is {blank} and noisy. (populate)"],
        answers: ["overcooked", "underpaid", "underestimate", "overpopulated"],
        options: [["overcooked", "undercooked", "miscooked", "recooked"], ["underpaid", "overpaid", "mispaid", "repaid"], ["underestimate", "overestimate", "misestimate", "reestimate"], ["overpopulated", "underpopulated", "mispopulated", "repopulated"]]
    },
    {
        rule: "Word Formation: -able/-ible Adjective Suffixes", category: "word-formation", level: "middle",
        meaning: "Use '-able' or '-ible' to form adjectives meaning 'able to be' or 'worthy of being'.",
        sentences: ["The situation is quite {blank}. (manage)", "This water is not {blank}. (drink)", "The task seemed {blank} at first. (impossibility → adjective)", "Your handwriting is barely {blank}. (read)"],
        answers: ["manageable", "drinkable", "impossible", "readable"],
        options: [["manageable", "manageible", "manageful", "managive"], ["drinkable", "drinkible", "drinkful", "drinkive"], ["impossible", "impossable", "impossful", "impossive"], ["readable", "readible", "readful", "readive"]]
    },
    {
        rule: "Tenses: Historical Present", category: "tenses", level: "college",
        meaning: "Use the present simple to narrate past events vividly, especially in storytelling or sports commentary.",
        sentences: ["So I'm standing there, and this man {blank} up to me.", "She {blank} the ball and scores the winning goal.", "Napoleon {blank} Egypt in 1798.", "Then he {blank} and tells me the whole story."],
        answers: ["walks", "takes", "invades", "sits down"],
        options: [["walks", "walked", "was walking", "had walked"], ["takes", "took", "was taking", "had taken"], ["invades", "invaded", "was invading", "had invaded"], ["sits down", "sat down", "was sitting down", "had sat down"]]
    },
    {
        rule: "Tenses: Stative Verbs", category: "tenses", level: "middle",
        meaning: "Stative verbs (know, believe, like, own, belong) describe states and are not usually used in continuous forms.",
        sentences: ["I {blank} what you mean.", "She {blank} that bag since last year.", "He {blank} in this company.", "This book {blank} to me."],
        answers: ["understand", "has owned", "believes", "belongs"],
        options: [["understand", "am understanding", "was understanding", "have understood"], ["has owned", "is owning", "was owning", "owns"], ["believes", "is believing", "was believing", "has been believing"], ["belongs", "is belonging", "was belonging", "has been belonging"]]
    },
    {
        rule: "Conditionals: Implied Conditionals", category: "conditionals", level: "professional",
        meaning: "Conditional meaning can be expressed without 'if' using 'otherwise', 'or', or inversion.",
        sentences: ["Study hard, {blank} you will fail.", "I would have helped, but I {blank} there.", "{blank} I known earlier, I would have told you.", "Take a taxi; {blank} you'll be late."],
        answers: ["otherwise", "wasn't", "Had", "otherwise"],
        options: [["otherwise", "because", "although", "unless"], ["wasn't", "weren't", "am not", "haven't been"], ["Had", "Have", "Should", "Would"], ["otherwise", "because", "although", "unless"]]
    },
    {
        rule: "Conditionals: Were to", category: "conditionals", level: "professional",
        meaning: "Use 'were to + infinitive' in formal/hypothetical conditionals to make the situation sound more unlikely.",
        sentences: ["If I {blank} to win the lottery, I'd quit my job.", "If she {blank} to find out, she'd be furious.", "If they {blank} to offer me the job, I'd accept.", "If the president {blank} to resign, there would be chaos."],
        answers: ["were", "were", "were", "were"],
        options: [["were", "was", "would", "had"], ["were", "was", "would", "had"], ["were", "was", "would", "had"], ["were", "was", "would", "had"]]
    },
    {
        rule: "Prepositions: By means of / By way of", category: "prepositions", level: "professional",
        meaning: "'By means of' means 'using' or 'through the use of'. 'By way of' means 'as a form of' or 'via'.",
        sentences: ["They escaped {blank} a secret tunnel.", "He introduced himself {blank} a handshake.", "The message was sent {blank} encrypted email.", "She apologised {blank} a gift."],
        answers: ["by means of", "by way of", "by means of", "by way of"],
        options: [["by means of", "by way of", "in case of", "on behalf of"], ["by way of", "by means of", "in case of", "on behalf of"], ["by means of", "by way of", "in case of", "on behalf of"], ["by way of", "by means of", "in case of", "on behalf of"]]
    },
    {
        rule: "Prepositions: With regard to / With respect to", category: "prepositions", level: "professional",
        meaning: "'With regard to' and 'with respect to' are formal ways to say 'about' or 'concerning'.",
        sentences: ["{blank} your application, we regret to inform you it has been rejected.", "I am writing {blank} the recent changes in policy.", "There are concerns {blank} the safety of the building.", "{blank} your request, we will process it shortly."],
        answers: ["With regard to", "with respect to", "with regard to", "With respect to"],
        options: [["With regard to", "According to", "Due to", "In spite of"], ["with respect to", "according to", "due to", "in spite of"], ["with regard to", "according to", "due to", "in spite of"], ["With respect to", "According to", "Due to", "In spite of"]]
    },
    {
        rule: "Conjunctions: Lest", category: "conjunctions", level: "professional",
        meaning: "'Lest' is a very formal conjunction meaning 'for fear that' or 'in order that...not'. It is followed by the subjunctive.",
        sentences: ["He whispered {blank} anyone hear him.", "She studied hard {blank} she fail.", "They fled the country {blank} they be arrested.", "Write it down {blank} you forget."],
        answers: ["lest", "lest", "lest", "lest"],
        options: [["lest", "unless", "although", "so that"], ["lest", "unless", "although", "so that"], ["lest", "unless", "although", "so that"], ["lest", "unless", "although", "so that"]]
    },
    {
        rule: "Conjunctions: Inasmuch as / Insofar as", category: "conjunctions", level: "professional",
        meaning: "'Inasmuch as' means 'to the extent that' or 'since'. 'Insofar as' means 'to the extent or degree that'.",
        sentences: ["The law is fair, {blank} it treats everyone equally.", "The policy succeeded, {blank} it reduced costs.", "{blank} I can tell, the report is accurate.", "The project was a success, {blank} it met all objectives."],
        answers: ["inasmuch as", "insofar as", "Insofar as", "inasmuch as"],
        options: [["inasmuch as", "unless", "although", "whereas"], ["insofar as", "unless", "although", "whereas"], ["Insofar as", "Unless", "Although", "Whereas"], ["inasmuch as", "unless", "although", "whereas"]]
    },
    {
        rule: "Articles: The with Musical Instruments", category: "articles", level: "middle",
        meaning: "Use 'the' before musical instruments when talking about playing them.",
        sentences: ["She plays {blank} piano beautifully.", "He is learning to play {blank} guitar.", "I can play {blank} violin.", "She started playing {blank} drums at age 10."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Articles: The with Decades, Centuries", category: "articles", level: "middle",
        meaning: "Use 'the' when referring to decades and centuries.",
        sentences: ["She grew up in {blank} 1980s.", "The Renaissance began in {blank} 14th century.", "Life was different in {blank} 1950s.", "This building dates from {blank} 19th century."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Quantifiers: Hardly any / Scarcely any", category: "quantifiers", level: "high",
        meaning: "'Hardly any' and 'scarcely any' mean 'almost none'.",
        sentences: ["There's {blank} milk left in the fridge.", "She has {blank} free time these days.", "{blank} students attended the lecture.", "There was {blank} traffic on the road."],
        answers: ["hardly any", "scarcely any", "Hardly any", "hardly any"],
        options: [["hardly any", "hardly no", "hard any", "hard no"], ["scarcely any", "scarcely no", "scarce any", "scarce no"], ["Hardly any", "Hardly no", "Hard any", "Hard no"], ["hardly any", "hardly no", "hard any", "hard no"]]
    },
    {
        rule: "Quantifiers: A great deal of / A large amount of", category: "quantifiers", level: "high",
        meaning: "Use 'a great deal of' and 'a large amount of' with uncountable nouns to mean 'a lot of'.",
        sentences: ["There is {blank} work to be done.", "A {blank} of money was spent on the project.", "She has {blank} of experience in this field.", "A large {blank} of research has been conducted."],
        answers: ["a great deal of", "great deal", "a great deal", "amount"],
        options: [["a great deal of", "a great number of", "a large number of", "many"], ["great deal", "large number", "great number", "many"], ["a great deal", "a great number", "a large number", "many"], ["amount", "number", "deal", "count"]]
    },
    {
        rule: "Reported Speech: Reporting with Passive", category: "reported-speech", level: "professional",
        meaning: "Use passive reporting for impersonal or formal contexts: 'It is reported that...' or 'He is said to...'",
        sentences: ["The company {blank} said to be in financial trouble.", "It is {blank} that the minister will resign.", "She is {blank} to have won the award.", "The criminals are {blank} to be hiding abroad."],
        answers: ["is", "reported", "believed", "thought"],
        options: [["is", "has", "was", "been"], ["reported", "reporting", "report", "reports"], ["believed", "believing", "believe", "believes"], ["thought", "thinking", "think", "thinks"]]
    },
    {
        rule: "Reported Speech: Suggest / Advise / Warn", category: "reported-speech", level: "high",
        meaning: "'Suggest' is followed by a gerund or a that-clause. 'Advise' takes an object + infinitive. 'Warn' takes object + not + infinitive.",
        sentences: ["She suggested {blank} a taxi.", "The doctor advised me {blank} more exercise.", "He warned us {blank} that road.", "They suggested that we {blank} early."],
        answers: ["taking", "to take", "not to take", "leave"],
        options: [["taking", "to take", "take", "took"], ["to take", "taking", "take", "took"], ["not to take", "not taking", "to not take", "don't take"], ["leave", "to leave", "leaving", "left"]]
    },
    {
        rule: "Comparatives: By far the", category: "comparatives", level: "high",
        meaning: "Use 'by far' before superlatives to show that something is much more than anything else.",
        sentences: ["This is {blank} the best restaurant in town.", "She is {blank} the tallest in the class.", "That was {blank} the worst experience of my life.", "He is {blank} the most experienced candidate."],
        answers: ["by far", "by far", "by far", "by far"],
        options: [["by far", "so far", "far", "as far as"], ["by far", "so far", "far", "as far as"], ["by far", "so far", "far", "as far as"], ["by far", "so far", "far", "as far as"]]
    },
    {
        rule: "Comparatives: Not nearly as...as / Nothing like as...as", category: "comparatives", level: "college",
        meaning: "'Not nearly as...as' and 'nothing like as...as' mean there is a very big difference between two things.",
        sentences: ["This film is {blank} good as the original.", "She's {blank} talented as her sister.", "The exam was {blank} difficult as I feared.", "This restaurant is {blank} as expensive as the last one."],
        answers: ["not nearly as", "nothing like as", "not nearly as", "nothing like"],
        options: [["not nearly as", "not so", "less", "least"], ["nothing like as", "not so", "less", "least"], ["not nearly as", "not so", "less", "least"], ["nothing like", "not so", "less", "least"]]
    },
    {
        rule: "Pronouns: Whatever, Whenever, Wherever", category: "pronouns", level: "middle",
        meaning: "Use 'whatever', 'whenever', 'wherever' to mean 'it doesn't matter what/when/where'.",
        sentences: ["You can sit {blank} you like.", "{blank} you do, don't be late.", "Call me {blank} you need help.", "I'll eat {blank} you cook."],
        answers: ["wherever", "Whatever", "whenever", "whatever"],
        options: [["wherever", "whatever", "whenever", "however"], ["Whatever", "Wherever", "Whenever", "However"], ["whenever", "wherever", "whatever", "however"], ["whatever", "wherever", "whenever", "however"]]
    },
    {
        rule: "Pronouns: One (Impersonal)", category: "pronouns", level: "professional",
        meaning: "Use 'one' as a formal, impersonal pronoun to mean 'people in general'.",
        sentences: ["{blank} should always tell the truth.", "If {blank} were to judge by appearances, one would be mistaken.", "{blank} cannot simply ignore the rules.", "{blank} must be careful with such sensitive matters."],
        answers: ["One", "one", "One", "One"],
        options: [["One", "You", "They", "We"], ["one", "you", "they", "we"], ["One", "You", "They", "We"], ["One", "You", "They", "We"]]
    },
    {
        rule: "Tenses: About to / On the verge of / On the point of", category: "tenses", level: "high",
        meaning: "Use 'be about to', 'be on the verge of', or 'be on the point of' to describe imminent future actions.",
        sentences: ["The plane is {blank} take off.", "She was {blank} the verge of tears.", "We are {blank} the point of signing the contract.", "He was {blank} to leave when the phone rang."],
        answers: ["about to", "on", "on", "about"],
        options: [["about to", "going to", "likely to", "bound to"], ["on", "at", "in", "by"], ["on", "at", "in", "by"], ["about", "going", "likely", "bound"]]
    },
    {
        rule: "Tenses: Present Simple for Timetables", category: "tenses", level: "elementary",
        meaning: "Use the present simple for fixed timetables, schedules, and programmes.",
        sentences: ["The train {blank} at 9:30 tomorrow morning.", "The film {blank} at 7 pm.", "School {blank} on Monday.", "Our flight {blank} at 6 a.m."],
        answers: ["leaves", "starts", "begins", "departs"],
        options: [["leaves", "is leaving", "will leave", "is going to leave"], ["starts", "is starting", "will start", "is going to start"], ["begins", "is beginning", "will begin", "is going to begin"], ["departs", "is departing", "will depart", "is going to depart"]]
    },
    {
        rule: "Prepositions: Despite / In spite of vs Although", category: "prepositions", level: "high",
        meaning: "'Despite' and 'in spite of' are prepositions (+ noun/gerund). 'Although' is a conjunction (+ clause).",
        sentences: ["{blank} the rain, we went out.", "{blank} it was raining, we went out.", "She succeeded {blank} many obstacles.", "He kept going {blank} he was tired."],
        answers: ["Despite", "Although", "despite", "although"],
        options: [["Despite", "Although", "However", "But"], ["Although", "Despite", "However", "But"], ["despite", "although", "however", "but"], ["although", "despite", "however", "but"]]
    },
    {
        rule: "Prepositions: According to / In accordance with", category: "prepositions", level: "college",
        meaning: "'According to' reports what someone says. 'In accordance with' means 'following' rules or regulations.",
        sentences: ["{blank} the weather forecast, it will rain.", "The work was done {blank} the regulations.", "{blank} the report, sales have increased.", "Everything must be done {blank} the law."],
        answers: ["According to", "in accordance with", "According to", "in accordance with"],
        options: [["According to", "In accordance with", "Owing to", "Due to"], ["in accordance with", "according to", "owing to", "due to"], ["According to", "In accordance with", "Owing to", "Due to"], ["in accordance with", "according to", "owing to", "due to"]]
    },
    {
        rule: "Conjunctions: Whether...or", category: "conjunctions", level: "middle",
        meaning: "Use 'whether...or' to present two alternatives.",
        sentences: ["I don't know {blank} to go or stay.", "{blank} you like it or not, we're going.", "She can't decide {blank} to study law or medicine.", "It will happen {blank} we are ready or not."],
        answers: ["whether", "Whether", "whether", "whether"],
        options: [["whether", "if", "that", "which"], ["Whether", "If", "That", "Which"], ["whether", "if", "that", "which"], ["whether", "if", "that", "which"]]
    },
    {
        rule: "Conjunctions: Both...and / Either...or / Neither...nor", category: "conjunctions", level: "middle",
        meaning: "These correlative conjunctions connect parallel structures.",
        sentences: ["{blank} the food and the service were excellent.", "You can have {blank} tea or coffee.", "{blank} John nor Sarah could attend.", "She speaks {blank} French and German."],
        answers: ["Both", "either", "Neither", "both"],
        options: [["Both", "Either", "Neither", "Whether"], ["either", "both", "neither", "whether"], ["Neither", "Either", "Both", "Whether"], ["both", "either", "neither", "whether"]]
    },
    {
        rule: "Articles: A/An with Uncountable Nouns (specific types)", category: "articles", level: "college",
        meaning: "Some uncountable nouns can take 'a/an' when referring to a specific type or serving.",
        sentences: ["I'd like {blank} coffee, please.", "She has {blank} good knowledge of history.", "It was {blank} heavy rain.", "He showed {blank} great interest in the topic."],
        answers: ["a", "a", "a", "a"],
        options: [["a", "the", "an", "no article"], ["a", "the", "an", "no article"], ["a", "the", "an", "no article"], ["a", "the", "an", "no article"]]
    },
    {
        rule: "Modals: Ought to", category: "modals", level: "middle",
        meaning: "'Ought to' is similar to 'should' and is used for advice, moral obligation, and expectations.",
        sentences: ["You {blank} to apologise for your behaviour.", "She {blank} to be here by now.", "We {blank} to help those in need.", "They {blank} to have arrived hours ago."],
        answers: ["ought", "ought", "ought", "ought"],
        options: [["ought", "should", "must", "would"], ["ought", "should", "must", "would"], ["ought", "should", "must", "would"], ["ought", "should", "must", "would"]]
    },
    {
        rule: "Modals: Would for Past Habits", category: "modals", level: "high",
        meaning: "Use 'would' to describe repeated actions or habits in the past (not states).",
        sentences: ["When I was a child, I {blank} spend hours reading.", "Every Sunday, she {blank} bake a cake.", "He {blank} always sit in the same chair.", "In summer, we {blank} swim in the river."],
        answers: ["would", "would", "would", "would"],
        options: [["would", "will", "should", "could"], ["would", "will", "should", "could"], ["would", "will", "should", "could"], ["would", "will", "should", "could"]]
    },
    {
        rule: "Subject-Verb Agreement: Relative Clauses", category: "subject-verb-agreement", level: "college",
        meaning: "In relative clauses, the verb agrees with the noun the relative pronoun refers to.",
        sentences: ["She is one of those people who {blank} always late.", "He is the only one of the students who {blank} the answer.", "Those are the books that {blank} on sale.", "This is one of the issues that {blank} to be resolved."],
        answers: ["are", "knows", "are", "need"],
        options: [["are", "is", "was", "has been"], ["knows", "know", "has known", "have known"], ["are", "is", "was", "has been"], ["need", "needs", "has needed", "is needing"]]
    },
    {
        rule: "Subject-Verb Agreement: What-clauses", category: "subject-verb-agreement", level: "professional",
        meaning: "A 'what-clause' as subject usually takes a singular verb, unless the complement is clearly plural.",
        sentences: ["What we need {blank} more time.", "What concerns me {blank} the lack of safety.", "What {blank} needed are better facilities.", "What {blank} important is your health."],
        answers: ["is", "is", "are", "is"],
        options: [["is", "are", "were", "have been"], ["is", "are", "were", "have been"], ["are", "is", "was", "has been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Comparatives: No sooner...than (comparative structures)", category: "comparatives", level: "college",
        meaning: "'No less than' means 'as much as' (emphasising amount). 'No more than' means 'only'.",
        sentences: ["No fewer than 500 people {blank} the event.", "The project cost no less {blank} a million dollars.", "No more {blank} ten people attended.", "She earns no less {blank} her male colleagues."],
        answers: ["attended", "than", "than", "than"],
        options: [["attended", "attending", "attends", "attend"], ["than", "then", "that", "as"], ["than", "then", "that", "as"], ["than", "then", "that", "as"]]
    },
    {
        rule: "Word Formation: Self- Prefix", category: "word-formation", level: "middle",
        meaning: "The prefix 'self-' is used with adjectives and nouns to mean 'of or by oneself'.",
        sentences: ["She is a {blank} person who doesn't need others' approval. (confident)", "The book is a {blank} manual. (help)", "He is quite {blank} and prefers being alone. (sufficient)", "That was a rather {blank} comment. (serve)"],
        answers: ["self-confident", "self-help", "self-sufficient", "self-serving"],
        options: [["self-confident", "selfconfident", "confident-self", "own-confident"], ["self-help", "selfhelp", "help-self", "own-help"], ["self-sufficient", "selfsufficient", "sufficient-self", "own-sufficient"], ["self-serving", "selfserving", "serving-self", "own-serving"]]
    },
    {
        rule: "Relative Clauses: Of which / Of whom", category: "relative-clauses", level: "professional",
        meaning: "In formal English, use 'of which' for things and 'of whom' for people after quantifiers or superlatives.",
        sentences: ["There were 50 applicants, most {blank} were qualified.", "She has two brothers, both {blank} are doctors.", "He wrote several novels, the best {blank} was published in 2010.", "The company has 200 employees, many {blank} work remotely."],
        answers: ["of whom", "of whom", "of which", "of whom"],
        options: [["of whom", "of which", "of that", "of who"], ["of whom", "of which", "of that", "of who"], ["of which", "of whom", "of that", "of who"], ["of whom", "of which", "of that", "of who"]]
    },
    {
        rule: "Passive: Passive Gerund and Infinitive", category: "passive", level: "professional",
        meaning: "The passive gerund is 'being + past participle'. The passive infinitive is 'to be + past participle'.",
        sentences: ["She hates {blank} told what to do.", "He expects {blank} promoted next year.", "Nobody likes {blank} criticised.", "The building needs {blank} repaired."],
        answers: ["being", "to be", "being", "to be"],
        options: [["being", "been", "be", "to be"], ["to be", "being", "been", "be"], ["being", "been", "be", "to be"], ["to be", "being", "been", "be"]]
    },
    {
        rule: "Gerund vs Infinitive: Forget + Gerund vs Infinitive", category: "gerunds-infinitives", level: "high",
        meaning: "'Forget + gerund' means forget something you did. 'Forget + infinitive' means forget something you should do.",
        sentences: ["I'll never forget {blank} her for the first time.", "Don't forget {blank} the lights before you leave.", "She forgot {blank} the email and had to be reminded.", "He'll never forget {blank} his first goal."],
        answers: ["meeting", "to turn off", "to send", "scoring"],
        options: [["meeting", "to meet", "meet", "met"], ["to turn off", "turning off", "turn off", "turned off"], ["to send", "sending", "send", "sent"], ["scoring", "to score", "score", "scored"]]
    },
    {
        rule: "Tenses: Present Perfect with Just, Already, Yet", category: "tenses", level: "elementary",
        meaning: "Use 'just' for very recent actions, 'already' for sooner than expected, 'yet' in questions and negatives.",
        sentences: ["I have {blank} finished my homework.", "She has {blank} eaten, so she's not hungry.", "Have you done your homework {blank}?", "They haven't arrived {blank}."],
        answers: ["just", "already", "yet", "yet"],
        options: [["just", "already", "yet", "still"], ["already", "just", "yet", "still"], ["yet", "just", "already", "still"], ["yet", "just", "already", "still"]]
    },
    {
        rule: "Tenses: Present Perfect with For and Since", category: "tenses", level: "elementary",
        meaning: "Use 'for' with a period of time and 'since' with a point in time in present perfect sentences.",
        sentences: ["I have lived here {blank} five years.", "She has been a teacher {blank} 2015.", "We have known each other {blank} childhood.", "He has worked here {blank} six months."],
        answers: ["for", "since", "since", "for"],
        options: [["for", "since", "ago", "from"], ["since", "for", "ago", "from"], ["since", "for", "ago", "from"], ["for", "since", "ago", "from"]]
    },
    {
        rule: "Prepositions: Look forward to + Gerund", category: "prepositions", level: "middle",
        meaning: "After 'look forward to', use the gerund, not the infinitive. 'To' here is a preposition, not part of an infinitive.",
        sentences: ["I look forward to {blank} from you.", "She's looking forward to {blank} her grandparents.", "We look forward to {blank} with you.", "They are looking forward to {blank} the new restaurant."],
        answers: ["hearing", "visiting", "working", "trying"],
        options: [["hearing", "hear", "to hear", "heard"], ["visiting", "visit", "to visit", "visited"], ["working", "work", "to work", "worked"], ["trying", "try", "to try", "tried"]]
    },
    {
        rule: "Modals: May vs Can (Permission)", category: "modals", level: "elementary",
        meaning: "'May' is more formal than 'can' for asking permission.",
        sentences: ["{blank} I use your phone?", "You {blank} leave the room now.", "{blank} I sit here?", "Students {blank} not use calculators in the exam."],
        answers: ["May", "may", "May", "may"],
        options: [["May", "Can", "Should", "Must"], ["may", "can", "should", "must"], ["May", "Can", "Should", "Must"], ["may", "can", "should", "must"]]
    },
    {
        rule: "Word Order: So + Adjective + That", category: "word-order", level: "middle",
        meaning: "Use 'so + adjective + that' to express cause and result.",
        sentences: ["She was {blank} tired that she fell asleep immediately.", "The film was {blank} boring that we left early.", "He spoke {blank} quickly that I couldn't understand him.", "The weather was {blank} bad that the event was cancelled."],
        answers: ["so", "so", "so", "so"],
        options: [["so", "such", "too", "very"], ["so", "such", "too", "very"], ["so", "such", "too", "very"], ["so", "such", "too", "very"]]
    },
    {
        rule: "Word Order: Such + Noun + That", category: "word-order", level: "middle",
        meaning: "Use 'such + (a/an) + adjective + noun + that' for emphasis. Use 'such' with nouns, 'so' with adjectives alone.",
        sentences: ["It was {blank} a good film that we watched it twice.", "She is {blank} a kind person that everyone loves her.", "They had {blank} a wonderful time that they didn't want to leave.", "It was {blank} terrible weather that we stayed indoors."],
        answers: ["such", "such", "such", "such"],
        options: [["such", "so", "too", "very"], ["such", "so", "too", "very"], ["such", "so", "too", "very"], ["such", "so", "too", "very"]]
    },
    {
        rule: "Inversion: Had I known (Third Conditional Inversion)", category: "conditionals", level: "professional",
        meaning: "In formal English, omit 'if' and invert the subject and 'had' in third conditional sentences.",
        sentences: ["{blank} I known about the problem, I would have helped.", "{blank} she arrived earlier, she would have seen the show.", "{blank} they invested more, they would have made a profit.", "{blank} we left sooner, we wouldn't have missed the flight."],
        answers: ["Had", "Had", "Had", "Had"],
        options: [["Had", "Have", "If", "Should"], ["Had", "Have", "If", "Should"], ["Had", "Have", "If", "Should"], ["Had", "Have", "If", "Should"]]
    },
    {
        rule: "Passive: It + Passive + That-clause (Impersonal)", category: "passive", level: "college",
        meaning: "Use impersonal passive structures to report general opinions or beliefs without stating the source.",
        sentences: ["It {blank} expected that the economy will recover.", "It {blank} known that smoking causes cancer.", "It {blank} agreed that changes were necessary.", "It {blank} understood that the meeting was cancelled."],
        answers: ["is", "is", "was", "was"],
        options: [["is", "has", "will", "can"], ["is", "has", "will", "can"], ["was", "had", "would", "could"], ["was", "had", "would", "could"]]
    },
    {
        rule: "Gerund: Possessive + Gerund (Formal)", category: "gerunds-infinitives", level: "professional",
        meaning: "In formal English, use a possessive (his, her, John's) before a gerund, not an object pronoun.",
        sentences: ["I appreciate {blank} helping us with the project.", "She objects to {blank} being promoted before her.", "{blank} arriving late caused problems.", "We were surprised by {blank} leaving so early."],
        answers: ["your", "his", "His", "her"],
        options: [["your", "you", "yours", "yourself"], ["his", "him", "he", "himself"], ["His", "Him", "He", "Himself"], ["her", "she", "hers", "herself"]]
    },
    {
        rule: "Tenses: Will be doing vs Will do", category: "tenses", level: "middle",
        meaning: "Use 'will be doing' to describe an action in progress at a future time; use 'will do' for decisions, promises, and predictions.",
        sentences: ["This time next week, I {blank} on a beach.", "I promise I {blank} my best.", "At 10 tomorrow, they {blank} the conference.", "Don't worry, I {blank} you."],
        answers: ["will be lying", "will do", "will be attending", "will help"],
        options: [["will be lying", "will lie", "am lying", "lie"], ["will do", "will be doing", "am doing", "do"], ["will be attending", "will attend", "attend", "are attending"], ["will help", "will be helping", "am helping", "help"]]
    },
    {
        rule: "Comparatives: Like vs As", category: "comparatives", level: "high",
        meaning: "'Like' is a preposition followed by a noun or pronoun. 'As' is a conjunction followed by a clause.",
        sentences: ["She sings {blank} an angel.", "He works {blank} a volunteer at the hospital.", "Do it {blank} I showed you.", "She looks {blank} her mother."],
        answers: ["like", "as", "as", "like"],
        options: [["like", "as", "than", "so"], ["as", "like", "than", "so"], ["as", "like", "than", "so"], ["like", "as", "than", "so"]]
    },
    {
        rule: "Pronouns: It as Empty Subject", category: "pronouns", level: "college",
        meaning: "Use 'it' as an empty (dummy) subject in certain constructions, especially with adjectives and infinitives.",
        sentences: ["{blank} is important to eat healthily.", "{blank} seems that he was right.", "{blank} is no use crying over spilt milk.", "{blank} takes courage to speak up."],
        answers: ["It", "It", "It", "It"],
        options: [["It", "There", "That", "This"], ["It", "There", "That", "This"], ["It", "There", "That", "This"], ["It", "There", "That", "This"]]
    },
    {
        rule: "Pronouns: Those who / Anyone who", category: "pronouns", level: "high",
        meaning: "Use 'those who' and 'anyone who' to refer to people in general who fit a description.",
        sentences: ["{blank} who wish to apply should do so by Friday.", "{blank} who is interested can sign up.", "{blank} who break the rules will be punished.", "{blank} who has a ticket may enter."],
        answers: ["Those", "Anyone", "Those", "Anyone"],
        options: [["Those", "These", "They", "Them"], ["Anyone", "Someone", "Everyone", "No one"], ["Those", "These", "They", "Them"], ["Anyone", "Someone", "Everyone", "No one"]]
    },
    {
        rule: "Word Formation: -ment vs -tion Noun Suffixes", category: "word-formation", level: "high",
        meaning: "Some verbs form nouns with '-ment' (develop → development), others with '-tion/-sion' (create → creation).",
        sentences: ["The {blank} of the new law was widely discussed. (introduce)", "She expressed her {blank} at the decision. (disappoint)", "The {blank} process takes about a week. (apply)", "His {blank} to the cause was admirable. (commit)"],
        answers: ["introduction", "disappointment", "application", "commitment"],
        options: [["introduction", "introducment", "introduceness", "introducion"], ["disappointment", "disappointing", "disappointion", "disappointness"], ["application", "applicament", "applicaness", "applicion"], ["commitment", "commition", "commitness", "committation"]]
    },
    {
        rule: "Word Formation: -ly Adverb Exceptions", category: "word-formation", level: "college",
        meaning: "Not all words ending in '-ly' are adverbs (friendly, lovely, lonely are adjectives). Some adverbs don't end in '-ly' (fast, hard, well).",
        sentences: ["She drives very {blank}.", "He is a {blank} person who loves meeting people.", "The team worked {blank} to finish on time.", "She gave me a {blank} smile."],
        answers: ["fast", "friendly", "hard", "lovely"],
        options: [["fast", "fastly", "faster", "fastest"], ["friendly", "friendlily", "friendlier", "friendliest"], ["hard", "hardly", "harder", "hardest"], ["lovely", "lovelily", "lovelier", "loveliest"]]
    },
    {
        rule: "Conditionals: In case vs If", category: "conditionals", level: "high",
        meaning: "'In case' means 'because something might happen' (precaution). 'If' means 'on condition that'. They are not interchangeable.",
        sentences: ["Take some cash {blank} the card machine doesn't work.", "I'll cook dinner {blank} you're hungry.", "I'll bring an umbrella {blank} it rains.", "{blank} you see him, tell him I called."],
        answers: ["in case", "if", "in case", "If"],
        options: [["in case", "if", "unless", "although"], ["if", "in case", "unless", "although"], ["in case", "if", "unless", "although"], ["If", "In case", "Unless", "Although"]]
    },
    {
        rule: "Passive: Passive with By vs With", category: "passive", level: "middle",
        meaning: "Use 'by' for the agent (who does the action) and 'with' for the instrument (what is used).",
        sentences: ["The letter was written {blank} Jane.", "The cake was cut {blank} a sharp knife.", "The building was designed {blank} a famous architect.", "The door was locked {blank} a key."],
        answers: ["by", "with", "by", "with"],
        options: [["by", "with", "from", "in"], ["with", "by", "from", "in"], ["by", "with", "from", "in"], ["with", "by", "from", "in"]]
    },
    {
        rule: "Gerund vs Infinitive: Allow, Permit, Advise", category: "gerunds-infinitives", level: "high",
        meaning: "These verbs take a gerund without an object, but an infinitive with an object.",
        sentences: ["The school doesn't allow {blank} on the premises.", "They don't allow students {blank} during class.", "I wouldn't advise {blank} alone at night.", "The doctor advised her {blank} more rest."],
        answers: ["smoking", "to eat", "walking", "to get"],
        options: [["smoking", "to smoke", "smoke", "smoked"], ["to eat", "eating", "eat", "ate"], ["walking", "to walk", "walk", "walked"], ["to get", "getting", "get", "got"]]
    },
    {
        rule: "Subject-Verb Agreement: Singular Nouns Ending in -s", category: "subject-verb-agreement", level: "middle",
        meaning: "Some nouns ending in '-s' are actually singular: news, physics, economics, mathematics.",
        sentences: ["{blank} is my favourite subject.", "The {blank} is on at 9 o'clock.", "{blank} is a social science.", "The {blank} was good: everyone survived."],
        answers: ["Physics", "news", "Economics", "news"],
        options: [["Physics", "Physic", "The physics", "A physics"], ["news", "new", "the new", "a new"], ["Economics", "Economic", "The economics", "An economics"], ["news", "new", "the new", "a new"]]
    },
    {
        rule: "Comparatives: Would rather...than", category: "comparatives", level: "middle",
        meaning: "Use 'would rather + base form + than + base form' to express a preference.",
        sentences: ["I'd rather {blank} at home than go out.", "She'd rather {blank} than take the bus.", "He'd rather {blank} than play video games.", "We'd rather {blank} early than be late."],
        answers: ["stay", "walk", "read", "arrive"],
        options: [["stay", "staying", "to stay", "stayed"], ["walk", "walking", "to walk", "walked"], ["read", "reading", "to read", "readed"], ["arrive", "arriving", "to arrive", "arrived"]]
    },
    {
        rule: "Quantifiers: Each of / Every one of", category: "quantifiers", level: "high",
        meaning: "'Each of' and 'every one of' are followed by a plural noun but take a singular verb.",
        sentences: ["Each of the rooms {blank} a private bathroom.", "Every one of the students {blank} passed.", "Each of them {blank} given a certificate.", "Every one of us {blank} responsible."],
        answers: ["has", "has", "was", "is"],
        options: [["has", "have", "are", "were"], ["has", "have", "are", "were"], ["was", "were", "are", "have been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Articles: The with Inventions and Species", category: "articles", level: "college",
        meaning: "Use 'the' + singular noun to talk about inventions and species in general.",
        sentences: ["{blank} telephone was invented by Alexander Graham Bell.", "{blank} computer has changed our lives.", "{blank} tiger is an endangered species.", "{blank} wheel was one of the most important inventions."],
        answers: ["The", "The", "The", "The"],
        options: [["The", "A", "An", "No article"], ["The", "A", "An", "No article"], ["The", "A", "An", "No article"], ["The", "A", "An", "No article"]]
    },
    {
        rule: "Conjunctions: So as to / In order to", category: "conjunctions", level: "middle",
        meaning: "Use 'so as to' or 'in order to' + infinitive to express purpose. Use 'so as not to' or 'in order not to' for negative purpose.",
        sentences: ["She left early {blank} catch the train.", "He studied hard {blank} pass the exam.", "I whispered {blank} not to wake the baby.", "They arrived early {blank} get good seats."],
        answers: ["in order to", "so as to", "so as", "in order to"],
        options: [["in order to", "for to", "because to", "although to"], ["so as to", "for to", "because to", "although to"], ["so as", "for", "because", "although"], ["in order to", "for to", "because to", "although to"]]
    },
    {
        rule: "Conjunctions: Even if / Even though", category: "conjunctions", level: "high",
        meaning: "'Even if' refers to a hypothetical situation (conditional). 'Even though' refers to a real situation (concession).",
        sentences: ["I'll go {blank} it rains.", "{blank} she was tired, she kept working.", "He wouldn't change his mind {blank} you asked him.", "{blank} I had the money, I wouldn't buy it."],
        answers: ["even if", "Even though", "even if", "Even if"],
        options: [["even if", "even though", "although", "unless"], ["Even though", "Even if", "Although", "Unless"], ["even if", "even though", "although", "unless"], ["Even if", "Even though", "Although", "Unless"]]
    },
    {
        rule: "Reported Speech: Introductory Verbs with That-clause", category: "reported-speech", level: "high",
        meaning: "Verbs like 'admit', 'claim', 'explain', 'mention', 'promise' are followed by a that-clause.",
        sentences: ["He admitted that he {blank} a mistake.", "She claimed that she {blank} nothing about it.", "They explained that the delay {blank} unavoidable.", "He promised that he {blank} on time."],
        answers: ["had made", "knew", "was", "would be"],
        options: [["had made", "has made", "makes", "is making"], ["knew", "knows", "has known", "is knowing"], ["was", "is", "has been", "will be"], ["would be", "will be", "is", "has been"]]
    },
    {
        rule: "Tenses: Past Simple vs Present Perfect (time expressions)", category: "tenses", level: "middle",
        meaning: "Use past simple with finished time (yesterday, last week, in 2010). Use present perfect with unfinished time (today, this week, ever).",
        sentences: ["I {blank} to Paris last summer.", "She has {blank} three books this month.", "We {blank} there in 2015.", "Have you ever {blank} sushi?"],
        answers: ["went", "read", "went", "tried"],
        options: [["went", "have gone", "go", "am going"], ["read", "readed", "reads", "reading"], ["went", "have gone", "go", "are going"], ["tried", "try", "trying", "tries"]]
    },
    {
        rule: "Prepositions: At, In, On (Transport)", category: "prepositions", level: "elementary",
        meaning: "Use 'on' for public transport (bus, train, plane) and bikes. Use 'in' for cars and taxis.",
        sentences: ["I go to work {blank} the bus.", "She arrived {blank} a taxi.", "They were {blank} the plane for 12 hours.", "He came {blank} his bicycle."],
        answers: ["on", "in", "on", "on"],
        options: [["on", "in", "at", "by"], ["in", "on", "at", "by"], ["on", "in", "at", "by"], ["on", "in", "at", "by"]]
    },
    {
        rule: "Prepositions: Across vs Through vs Along", category: "prepositions", level: "middle",
        meaning: "'Across' means from one side to the other (surface). 'Through' means from one side to the other (enclosed space). 'Along' means following a line.",
        sentences: ["She walked {blank} the bridge.", "They drove {blank} the tunnel.", "We strolled {blank} the riverbank.", "The cat ran {blank} the road."],
        answers: ["across", "through", "along", "across"],
        options: [["across", "through", "along", "over"], ["through", "across", "along", "over"], ["along", "across", "through", "over"], ["across", "through", "along", "over"]]
    },
    {
        rule: "Modals: Will vs Shall (First Person)", category: "modals", level: "middle",
        meaning: "In modern English, 'will' is used for all persons. 'Shall' is mainly used with 'I/we' for offers and suggestions.",
        sentences: ["I {blank} be there at 5.", "{blank} we dance?", "I think it {blank} rain tomorrow.", "{blank} I help you with that?"],
        answers: ["will", "Shall", "will", "Shall"],
        options: [["will", "shall", "should", "would"], ["Shall", "Will", "Should", "Would"], ["will", "shall", "should", "would"], ["Shall", "Will", "Should", "Would"]]
    },
    {
        rule: "Word Formation: Abstract Nouns with -dom, -hood, -ship", category: "word-formation", level: "high",
        meaning: "Use '-dom', '-hood', and '-ship' to form abstract nouns from other words.",
        sentences: ["She values her {blank} above all else. (free)", "The {blank} of his town was a happy time. (child)", "Their {blank} has lasted for years. (friend)", "He achieved {blank} status in the art world. (star)"],
        answers: ["freedom", "childhood", "friendship", "stardom"],
        options: [["freedom", "freeship", "freehood", "freeness"], ["childhood", "childship", "childdom", "childness"], ["friendship", "frienddom", "friendhood", "friendness"], ["stardom", "starship", "starhood", "starness"]]
    },
    {
        rule: "Tenses: Present Perfect vs Past Simple (British vs American)", category: "tenses", level: "college",
        meaning: "British English prefers present perfect with just, already, yet; American English often uses past simple.",
        sentences: ["I've just {blank} lunch. (British)", "I just {blank} lunch. (American)", "Have you {blank} the report yet? (British)", "Did you {blank} the report yet? (American)"],
        answers: ["had", "had", "finished", "finish"],
        options: [["had", "have", "having", "has"], ["had", "have", "having", "has"], ["finished", "finish", "finishing", "finishes"], ["finish", "finished", "finishing", "finishes"]]
    },
    {
        rule: "Conditionals: If it weren't for / If it hadn't been for", category: "conditionals", level: "college",
        meaning: "'If it weren't for' (present unreal) and 'if it hadn't been for' (past unreal) introduce the reason something is/was possible.",
        sentences: ["If it {blank} for your help, I'd be lost.", "If it {blank} for the rain, we would have gone.", "If it {blank} for her dedication, the project would have failed.", "If it {blank} for the traffic, we'd be on time."],
        answers: ["weren't", "hadn't been", "hadn't been", "weren't"],
        options: [["weren't", "wasn't", "isn't", "hadn't been"], ["hadn't been", "weren't", "wasn't", "isn't"], ["hadn't been", "weren't", "wasn't", "isn't"], ["weren't", "wasn't", "isn't", "hadn't been"]]
    },
    {
        rule: "Passive: Supposed to (Passive Expectation)", category: "passive", level: "middle",
        meaning: "'Be supposed to' in passive form describes what is expected or what should happen.",
        sentences: ["You {blank} supposed to be here at 9.", "She {blank} supposed to submit the report yesterday.", "We {blank} supposed to wear uniforms.", "He {blank} supposed to call me back."],
        answers: ["are", "was", "are", "was"],
        options: [["are", "is", "were", "have"], ["was", "is", "are", "has"], ["are", "is", "were", "have"], ["was", "is", "are", "has"]]
    },
    {
        rule: "Gerund: Verb + Object + From + Gerund", category: "gerunds-infinitives", level: "college",
        meaning: "Some verbs follow the pattern 'verb + object + from + gerund': prevent, stop, discourage, prohibit.",
        sentences: ["The rain prevented us {blank} going out.", "Nothing can stop him {blank} trying.", "The high price discouraged people {blank} buying it.", "The rules prohibit visitors {blank} taking photos."],
        answers: ["from", "from", "from", "from"],
        options: [["from", "to", "of", "for"], ["from", "to", "of", "for"], ["from", "to", "of", "for"], ["from", "to", "of", "for"]]
    },
    {
        rule: "Word Order: Inversion after Here, There, Up, Down", category: "word-order", level: "college",
        meaning: "When 'here', 'there', 'up', 'down', etc. start a sentence, invert the subject and verb (only with noun subjects, not pronouns).",
        sentences: ["Here {blank} the bus!", "Down {blank} the rain.", "There {blank} the bell.", "Up {blank} the balloon into the sky."],
        answers: ["comes", "came", "goes", "went"],
        options: [["comes", "come", "coming", "came"], ["came", "come", "coming", "comes"], ["goes", "go", "going", "went"], ["went", "go", "going", "goes"]]
    },
    {
        rule: "Articles: A/An vs One", category: "articles", level: "high",
        meaning: "'A/an' introduces an unspecified item; 'one' emphasises the number or makes a contrast.",
        sentences: ["I'd like {blank} coffee, please.", "I have {blank} sister and two brothers.", "She ate {blank} apple, not two.", "{blank} day, I will travel the world."],
        answers: ["a", "one", "one", "One"],
        options: [["a", "one", "the", "an"], ["one", "a", "the", "an"], ["one", "a", "the", "an"], ["One", "A", "The", "An"]]
    },
    {
        rule: "Quantifiers: Whole vs Entire", category: "quantifiers", level: "middle",
        meaning: "'Whole' and 'entire' both mean 'complete' but 'whole' follows the article while 'entire' can precede it in some styles.",
        sentences: ["She read the {blank} book in one day.", "The {blank} team was disappointed.", "He spent the {blank} afternoon sleeping.", "We searched the {blank} building."],
        answers: ["whole", "entire", "whole", "entire"],
        options: [["whole", "entire", "all", "every"], ["entire", "whole", "all", "every"], ["whole", "entire", "all", "every"], ["entire", "whole", "all", "every"]]
    },
    {
        rule: "Subject-Verb Agreement: Plural-looking Singular Nouns (People, Police)", category: "subject-verb-agreement", level: "high",
        meaning: "'People', 'police', and 'cattle' are plural nouns and take plural verbs. 'Everyone' and 'everybody' are singular.",
        sentences: ["The police {blank} investigating the case.", "People {blank} very kind here.", "Everybody {blank} welcome to attend.", "The cattle {blank} grazing in the field."],
        answers: ["are", "are", "is", "are"],
        options: [["are", "is", "was", "has"], ["are", "is", "was", "has"], ["is", "are", "were", "have"], ["are", "is", "was", "has"]]
    },
    {
        rule: "Comparatives: The same as / Similar to / Different from", category: "comparatives", level: "middle",
        meaning: "Use 'the same as' (not 'the same like'), 'similar to', and 'different from' (not 'different than' in British English).",
        sentences: ["Your bag is the same {blank} mine.", "This product is similar {blank} the original.", "Her opinion is different {blank} mine.", "Your answer is the same {blank} hers."],
        answers: ["as", "to", "from", "as"],
        options: [["as", "like", "to", "from"], ["to", "as", "like", "from"], ["from", "to", "as", "than"], ["as", "like", "to", "from"]]
    },
    {
        rule: "Pronouns: Dummy There", category: "pronouns", level: "high",
        meaning: "Use 'there' as a dummy subject to introduce new information about what exists or happens.",
        sentences: ["{blank} appears to be a problem.", "{blank} seems to be no solution.", "{blank} is likely to be a delay.", "{blank} happened to be a doctor on the plane."],
        answers: ["There", "There", "There", "There"],
        options: [["There", "It", "That", "This"], ["There", "It", "That", "This"], ["There", "It", "That", "This"], ["There", "It", "That", "This"]]
    },
    {
        rule: "Word Formation: Cross- and Multi- Prefixes", category: "word-formation", level: "college",
        meaning: "'Cross-' means involving different groups. 'Multi-' means many.",
        sentences: ["This is a {blank} study involving several countries. (culture → adjective)", "She speaks multiple languages; she's {blank}. (language → adjective)", "The project requires {blank} cooperation. (department → adjective)", "It's a {blank} task that requires various abilities. (facet → adjective)"],
        answers: ["cross-cultural", "multilingual", "cross-departmental", "multifaceted"],
        options: [["cross-cultural", "multicultural", "intercultural", "overcultural"], ["multilingual", "cross-lingual", "interlingual", "overlingual"], ["cross-departmental", "multidepartmental", "interdepartmental", "overdepartmental"], ["multifaceted", "cross-faceted", "interfaceted", "overfaceted"]]
    },
    {
        rule: "Modals: Could have been doing", category: "modals", level: "professional",
        meaning: "Use 'could have been doing' to speculate about a continuous action in the past.",
        sentences: ["She {blank} sleeping when you called.", "They {blank} watching TV instead of studying.", "He {blank} working late, which is why he missed dinner.", "We {blank} driving too fast without realising it."],
        answers: ["could have been", "could have been", "could have been", "could have been"],
        options: [["could have been", "must have been", "should have been", "would have been"], ["could have been", "must have been", "should have been", "would have been"], ["could have been", "must have been", "should have been", "would have been"], ["could have been", "must have been", "should have been", "would have been"]]
    },
    {
        rule: "Modals: Should have been doing", category: "modals", level: "professional",
        meaning: "Use 'should have been doing' to criticise someone for not doing something continuous in the past.",
        sentences: ["You {blank} studying instead of playing games.", "She {blank} paying attention during the lecture.", "They {blank} working on the report, not chatting.", "He {blank} practising for the concert."],
        answers: ["should have been", "should have been", "should have been", "should have been"],
        options: [["should have been", "must have been", "could have been", "would have been"], ["should have been", "must have been", "could have been", "would have been"], ["should have been", "must have been", "could have been", "would have been"], ["should have been", "must have been", "could have been", "would have been"]]
    },
    {
        rule: "Tenses: Would have done (Hypothetical Past)", category: "tenses", level: "college",
        meaning: "Use 'would have + past participle' to talk about what you intended to do but didn't, or unreal past situations.",
        sentences: ["I {blank} helped, but nobody asked me.", "She {blank} come, but she was ill.", "We {blank} won if we had played better.", "He {blank} told you, but he forgot."],
        answers: ["would have", "would have", "would have", "would have"],
        options: [["would have", "will have", "could have", "should have"], ["would have", "will have", "could have", "should have"], ["would have", "will have", "could have", "should have"], ["would have", "will have", "could have", "should have"]]
    },
    {
        rule: "Prepositions: As a result of / As a consequence of", category: "prepositions", level: "college",
        meaning: "'As a result of' and 'as a consequence of' are formal ways to express cause.",
        sentences: ["{blank} the accident, the road was closed.", "She lost her job {blank} the restructuring.", "{blank} poor planning, the event was cancelled.", "He was injured {blank} the explosion."],
        answers: ["As a result of", "as a consequence of", "As a result of", "as a result of"],
        options: [["As a result of", "Despite", "Although", "In spite of"], ["as a consequence of", "despite", "although", "in spite of"], ["As a result of", "Despite", "Although", "In spite of"], ["as a result of", "despite", "although", "in spite of"]]
    },
    {
        rule: "Prepositions: With a view to + Gerund", category: "prepositions", level: "professional",
        meaning: "'With a view to + gerund' means 'with the intention of'.",
        sentences: ["He studied law {blank} becoming a barrister.", "She moved to London {blank} finding a better job.", "They invested in the company {blank} making a profit.", "We hired a consultant {blank} improving efficiency."],
        answers: ["with a view to", "with a view to", "with a view to", "with a view to"],
        options: [["with a view to", "in order to", "so as to", "for the sake of"], ["with a view to", "in order to", "so as to", "for the sake of"], ["with a view to", "in order to", "so as to", "for the sake of"], ["with a view to", "in order to", "so as to", "for the sake of"]]
    },
    {
        rule: "Conjunctions: Not so much...as / Not so much...but", category: "conjunctions", level: "professional",
        meaning: "Use 'not so much...as/but rather' to express correction or refinement of an idea.",
        sentences: ["The problem is not so much the cost {blank} the quality.", "She was not so much angry {blank} disappointed.", "It's not so much that I disagree, {blank} that I need more information.", "He's not so much lazy {blank} unmotivated."],
        answers: ["as", "as", "but rather", "as"],
        options: [["as", "than", "but", "like"], ["as", "than", "but", "like"], ["but rather", "as", "than", "like"], ["as", "than", "but", "like"]]
    },
    {
        rule: "Conjunctions: The moment / The instant / The minute", category: "conjunctions", level: "high",
        meaning: "'The moment', 'the instant', and 'the minute' can be used as time conjunctions meaning 'as soon as'.",
        sentences: ["I knew something was wrong {blank} I saw her face.", "{blank} she heard the news, she burst into tears.", "He recognised me {blank} he saw me.", "Call me {blank} you arrive."],
        answers: ["the moment", "The instant", "the minute", "the moment"],
        options: [["the moment", "the time", "the hour", "the while"], ["The instant", "The time", "The hour", "The while"], ["the minute", "the time", "the hour", "the while"], ["the moment", "the time", "the hour", "the while"]]
    },
    {
        rule: "Relative Clauses: Which Referring to a Clause", category: "relative-clauses", level: "high",
        meaning: "'Which' can refer to the whole previous clause, not just a single noun.",
        sentences: ["He passed the exam, {blank} surprised everyone.", "She arrived late, {blank} made the teacher angry.", "They cancelled the event, {blank} was disappointing.", "He apologised, {blank} I thought was nice."],
        answers: ["which", "which", "which", "which"],
        options: [["which", "that", "what", "who"], ["which", "that", "what", "who"], ["which", "that", "what", "who"], ["which", "that", "what", "who"]]
    },
    {
        rule: "Pronouns: Other / Another / The other", category: "pronouns", level: "middle",
        meaning: "'Another' means one more or a different one. 'The other' refers to the remaining one of two. 'Others' refers to additional ones.",
        sentences: ["Can I have {blank} cup of tea?", "I have two brothers. One is a doctor; {blank} is a teacher.", "Some people like coffee; {blank} prefer tea.", "Let's meet {blank} time."],
        answers: ["another", "the other", "others", "another"],
        options: [["another", "the other", "other", "others"], ["the other", "another", "other", "others"], ["others", "another", "the other", "other"], ["another", "the other", "other", "others"]]
    },
    {
        rule: "Tenses: Habitual Past with 'Used to'", category: "tenses", level: "elementary",
        meaning: "Use 'used to + base form' to talk about past habits or states that are no longer true.",
        sentences: ["I {blank} play tennis when I was young.", "She {blank} live in New York.", "We {blank} walk to school every day.", "There {blank} be a cinema on this street."],
        answers: ["used to", "used to", "used to", "used to"],
        options: [["used to", "use to", "was used to", "am used to"], ["used to", "use to", "was used to", "am used to"], ["used to", "use to", "was used to", "am used to"], ["used to", "use to", "was used to", "am used to"]]
    },
    {
        rule: "Articles: The with Ordinal Numbers", category: "articles", level: "elementary",
        meaning: "Use 'the' with ordinal numbers (first, second, third, etc.).",
        sentences: ["She won {blank} first prize.", "This is {blank} third time I've asked.", "He was {blank} last person to arrive.", "It was {blank} second attempt that succeeded."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Quantifiers: Plenty of vs A lot of", category: "quantifiers", level: "elementary",
        meaning: "'Plenty of' means 'more than enough'. 'A lot of' means 'a large amount/number'.",
        sentences: ["Don't worry, there's {blank} time.", "We have {blank} food for the party.", "She has {blank} experience in this area.", "There are {blank} reasons to be cheerful."],
        answers: ["plenty of", "a lot of", "plenty of", "a lot of"],
        options: [["plenty of", "a lot of", "many of", "few of"], ["a lot of", "plenty of", "many of", "few of"], ["plenty of", "a lot of", "many of", "few of"], ["a lot of", "plenty of", "many of", "few of"]]
    },
    {
        rule: "Conjunctions: Once / Now that", category: "conjunctions", level: "middle",
        meaning: "'Once' means 'as soon as' or 'after'. 'Now that' means 'because of the fact that (something has changed)'.",
        sentences: ["{blank} you've finished, you can go.", "{blank} we're all here, let's start.", "{blank} you try it, you'll love it.", "{blank} she's retired, she has more free time."],
        answers: ["Once", "Now that", "Once", "Now that"],
        options: [["Once", "Now that", "Unless", "Although"], ["Now that", "Once", "Unless", "Although"], ["Once", "Now that", "Unless", "Although"], ["Now that", "Once", "Unless", "Although"]]
    },
    {
        rule: "Word Formation: -ise/-ize vs -ify", category: "word-formation", level: "college",
        meaning: "Some verbs are formed with '-ise/-ize' (organise, realise), others with '-ify' (simplify, classify).",
        sentences: ["We need to {blank} the process. (simple → verb)", "The government wants to {blank} the industry. (private → verb)", "Can you {blank} the data by date? (class → verb)", "They plan to {blank} the old factory. (modern → verb)"],
        answers: ["simplify", "privatise", "classify", "modernise"],
        options: [["simplify", "simplise", "simplen", "simpling"], ["privatise", "privatify", "privaten", "privating"], ["classify", "classise", "classen", "classing"], ["modernise", "modernify", "modernen", "moderning"]]
    },
    {
        rule: "Modals: Be to + Infinitive", category: "modals", level: "professional",
        meaning: "'Be to + infinitive' is used in formal English for arrangements, instructions, and formal plans.",
        sentences: ["The president {blank} to visit the factory tomorrow.", "You {blank} to report to the office at 8 a.m.", "The agreement {blank} to be signed next week.", "No one {blank} to leave the building until further notice."],
        answers: ["is", "are", "is", "is"],
        options: [["is", "has", "will", "can"], ["are", "have", "will", "can"], ["is", "has", "will", "can"], ["is", "has", "will", "can"]]
    },
    {
        rule: "Passive: Past Continuous Passive", category: "passive", level: "high",
        meaning: "Form the past continuous passive with 'was/were being + past participle'.",
        sentences: ["The house {blank} when we visited.", "The patients {blank} by a nurse.", "A new road {blank} near our village.", "The documents {blank} when the fire started."],
        answers: ["was being renovated", "were being looked after", "was being built", "were being processed"],
        options: [["was being renovated", "was renovating", "had been renovated", "renovated"], ["were being looked after", "were looking after", "had been looked after", "looked after"], ["was being built", "was building", "had been built", "built"], ["were being processed", "were processing", "had been processed", "processed"]]
    },
    {
        rule: "Pronouns: Whoever / Whichever / Whatever", category: "pronouns", level: "college",
        meaning: "Use 'whoever' (any person), 'whichever' (any one from a group), 'whatever' (anything) as pronouns or determiners.",
        sentences: ["{blank} finds the treasure can keep it.", "You can choose {blank} colour you prefer.", "{blank} you decide, I'll support you.", "Give this letter to {blank} is in charge."],
        answers: ["Whoever", "whichever", "Whatever", "whoever"],
        options: [["Whoever", "Whatever", "Whichever", "However"], ["whichever", "whatever", "whoever", "however"], ["Whatever", "Whoever", "Whichever", "However"], ["whoever", "whatever", "whichever", "however"]]
    },
    {
        rule: "Tenses: Present Simple with Time Clauses", category: "tenses", level: "middle",
        meaning: "In time clauses (after when, before, after, until, as soon as), use present simple for future meaning, not 'will'.",
        sentences: ["I'll call you when I {blank} home.", "We'll wait until she {blank}.", "Before you {blank}, please check everything.", "As soon as the meeting {blank}, I'll let you know."],
        answers: ["get", "arrives", "leave", "finishes"],
        options: [["get", "will get", "am getting", "got"], ["arrives", "will arrive", "is arriving", "arrived"], ["leave", "will leave", "are leaving", "left"], ["finishes", "will finish", "is finishing", "finished"]]
    },
    {
        rule: "Comparatives: Prefer...to / Prefer...rather than", category: "comparatives", level: "high",
        meaning: "Use 'prefer + noun/gerund + to + noun/gerund' or 'prefer + to-infinitive + rather than + base form'.",
        sentences: ["I prefer tea {blank} coffee.", "She prefers walking {blank} driving.", "He prefers to work {blank} than sit idle.", "They prefer {blank} stay at home to going out."],
        answers: ["to", "to", "rather", "to"],
        options: [["to", "than", "over", "from"], ["to", "than", "over", "from"], ["rather", "more", "better", "sooner"], ["to", "than", "over", "from"]]
    },
    {
        rule: "Future Perfect with By the time", category: "tenses", level: "college",
        meaning: "Use the future perfect with 'by the time + present simple' to describe an action completed before another future event.",
        sentences: ["By the time you read this, I {blank}.", "By the time we get there, the shop {blank}.", "By the time he retires, he {blank} for 40 years.", "By the time they finish, it {blank} dark."],
        answers: ["will have left", "will have closed", "will have worked", "will have got"],
        options: [["will have left", "will leave", "am leaving", "have left"], ["will have closed", "will close", "closes", "has closed"], ["will have worked", "will work", "works", "has worked"], ["will have got", "will get", "gets", "has got"]]
    },
    {
        rule: "Tenses: Present Perfect with Superlatives", category: "tenses", level: "middle",
        meaning: "Use the present perfect after superlatives and 'first/second/only' time expressions.",
        sentences: ["This is the best film I have ever {blank}.", "It's the first time she has {blank} abroad.", "That was the worst meal I've ever {blank}.", "It's the most beautiful place I have ever {blank}."],
        answers: ["seen", "been", "eaten", "visited"],
        options: [["seen", "saw", "see", "seeing"], ["been", "was", "gone", "going"], ["eaten", "ate", "eat", "eating"], ["visited", "visit", "visiting", "visits"]]
    },
    {
        rule: "Tenses: Present Perfect with This is the first time", category: "tenses", level: "middle",
        meaning: "Use 'This is the first/second time + present perfect' to describe a current experience count.",
        sentences: ["This is the first time I {blank} sushi.", "It's the third time he {blank} that mistake.", "This is the best holiday we {blank}.", "It's the second time she {blank} promoted."],
        answers: ["have tried", "has made", "have ever had", "has been"],
        options: [["have tried", "tried", "try", "am trying"], ["has made", "made", "makes", "is making"], ["have ever had", "ever had", "have", "are having"], ["has been", "was", "is", "is being"]]
    },
    {
        rule: "Modals: Would rather someone did", category: "modals", level: "college",
        meaning: "Use 'would rather + subject + past simple' when you want someone else to do (or not do) something.",
        sentences: ["I'd rather you {blank} that again.", "She'd rather he {blank} so late.", "We'd rather they {blank} us first.", "He'd rather she {blank} the truth."],
        answers: ["didn't do", "didn't come", "asked", "told"],
        options: [["didn't do", "don't do", "won't do", "haven't done"], ["didn't come", "doesn't come", "won't come", "hasn't come"], ["asked", "ask", "will ask", "have asked"], ["told", "tells", "will tell", "has told"]]
    },
    {
        rule: "Modals: Can't have been doing", category: "modals", level: "professional",
        meaning: "Use 'can't have been doing' to express disbelief about a continuous action in the past.",
        sentences: ["He {blank} sleeping — the music was too loud.", "She {blank} working — the office was empty.", "They {blank} paying attention — they missed everything.", "You {blank} trying very hard — the results are poor."],
        answers: ["can't have been", "can't have been", "can't have been", "can't have been"],
        options: [["can't have been", "must have been", "could have been", "might have been"], ["can't have been", "must have been", "could have been", "might have been"], ["can't have been", "must have been", "could have been", "might have been"], ["can't have been", "must have been", "could have been", "might have been"]]
    },
    {
        rule: "Passive: Future Perfect Passive", category: "passive", level: "professional",
        meaning: "Form the future perfect passive with 'will have been + past participle'.",
        sentences: ["By next year, the building {blank}.", "The report {blank} by the time you arrive.", "All orders {blank} by Friday.", "The repairs {blank} before winter."],
        answers: ["will have been completed", "will have been finished", "will have been processed", "will have been done"],
        options: [["will have been completed", "will be completing", "will complete", "has been completed"], ["will have been finished", "will be finishing", "will finish", "has been finished"], ["will have been processed", "will be processing", "will process", "has been processed"], ["will have been done", "will be doing", "will do", "has been done"]]
    },
    {
        rule: "Passive: Make + Passive", category: "passive", level: "high",
        meaning: "In the passive of 'make + object + base form', the infinitive changes to 'to-infinitive': 'He was made to do it.'",
        sentences: ["She was made {blank} the whole report again.", "They were made {blank} for two hours.", "He was made {blank} his mistake.", "We were made {blank} up early every day."],
        answers: ["to rewrite", "to wait", "to admit", "to get"],
        options: [["to rewrite", "rewrite", "rewriting", "rewrites"], ["to wait", "wait", "waiting", "waits"], ["to admit", "admit", "admitting", "admits"], ["to get", "get", "getting", "gets"]]
    },
    {
        rule: "Prepositions: For the sake of / For fear of", category: "prepositions", level: "professional",
        meaning: "'For the sake of' means 'in order to benefit or help'. 'For fear of' means 'because of worry about'.",
        sentences: ["She did it {blank} her children.", "He didn't speak {blank} saying the wrong thing.", "They moved {blank} a quieter life.", "She kept quiet {blank} causing trouble."],
        answers: ["for the sake of", "for fear of", "for the sake of", "for fear of"],
        options: [["for the sake of", "for fear of", "in case of", "on account of"], ["for fear of", "for the sake of", "in case of", "on account of"], ["for the sake of", "for fear of", "in case of", "on account of"], ["for fear of", "for the sake of", "in case of", "on account of"]]
    },
    {
        rule: "Prepositions: At the expense of / At the risk of", category: "prepositions", level: "professional",
        meaning: "'At the expense of' means 'causing harm to'. 'At the risk of' means 'with the possibility of suffering'.",
        sentences: ["He succeeded {blank} his health.", "{blank} sounding rude, I must disagree.", "She pursued her career {blank} her personal life.", "They continued {blank} losing everything."],
        answers: ["at the expense of", "At the risk of", "at the expense of", "at the risk of"],
        options: [["at the expense of", "at the risk of", "for the sake of", "in case of"], ["At the risk of", "At the expense of", "For the sake of", "In case of"], ["at the expense of", "at the risk of", "for the sake of", "in case of"], ["at the risk of", "at the expense of", "for the sake of", "in case of"]]
    },
    {
        rule: "Conjunctions: Whereas / While (Formal Contrast)", category: "conjunctions", level: "professional",
        meaning: "'Whereas' and 'while' are used in formal writing to contrast two facts or ideas directly.",
        sentences: ["The north is industrial, {blank} the south is agricultural.", "{blank} some people prefer tea, others prefer coffee.", "She is outgoing, {blank} her brother is introverted.", "{blank} the first plan failed, the second one succeeded."],
        answers: ["whereas", "While", "whereas", "Whereas"],
        options: [["whereas", "because", "unless", "although"], ["While", "Because", "Unless", "Although"], ["whereas", "because", "unless", "although"], ["Whereas", "Because", "Unless", "Although"]]
    },
    {
        rule: "Conjunctions: By the time / Until / By", category: "conjunctions", level: "middle",
        meaning: "'By the time' introduces a clause and refers to 'before that moment'. 'Until' means 'up to a point'.",
        sentences: ["{blank} the time I arrived, the party was over.", "Wait here {blank} I come back.", "She won't leave {blank} she finishes.", "{blank} the time you read this, I will have gone."],
        answers: ["By", "until", "until", "By"],
        options: [["By", "Until", "Before", "Since"], ["until", "by", "before", "since"], ["until", "by", "before", "since"], ["By", "Until", "Before", "Since"]]
    },
    {
        rule: "Articles: The with Nationalities", category: "articles", level: "middle",
        meaning: "Use 'the' + nationality adjective (ending in -sh, -ch, -se, -ss) to refer to the people of a country as a group.",
        sentences: ["{blank} French are known for their cuisine.", "{blank} Chinese invented paper.", "{blank} British drink a lot of tea.", "{blank} Japanese are known for their politeness."],
        answers: ["The", "The", "The", "The"],
        options: [["The", "A", "An", "No article"], ["The", "A", "An", "No article"], ["The", "A", "An", "No article"], ["The", "A", "An", "No article"]]
    },
    {
        rule: "Articles: The with Media and Communication", category: "articles", level: "middle",
        meaning: "Use 'the' with 'radio' but not with 'television/TV' (when referring to the medium, not the device).",
        sentences: ["I heard it on {blank} radio.", "She watches {blank} TV every evening.", "The news was on {blank} radio this morning.", "What's on {blank} television tonight?"],
        answers: ["the", "no article", "the", "no article"],
        options: [["the", "a", "an", "no article"], ["no article", "the", "a", "an"], ["the", "a", "an", "no article"], ["no article", "the", "a", "an"]]
    },
    {
        rule: "Quantifiers: The majority of / The minority of", category: "quantifiers", level: "high",
        meaning: "'The majority of' means 'most of' and usually takes a plural verb. 'The minority of' means 'the smaller number'.",
        sentences: ["The majority of students {blank} the exam.", "The minority of voters {blank} against the proposal.", "The majority of the work {blank} already done.", "A minority of people {blank} against the changes."],
        answers: ["passed", "voted", "is", "are"],
        options: [["passed", "passes", "is passing", "has passed"], ["voted", "votes", "is voting", "has voted"], ["is", "are", "were", "have been"], ["are", "is", "was", "has been"]]
    },
    {
        rule: "Quantifiers: No fewer than / No less than", category: "quantifiers", level: "professional",
        meaning: "'No fewer than' (with countable) and 'no less than' (with uncountable) emphasise that the amount is surprisingly large.",
        sentences: ["No fewer than 200 people {blank} the protest.", "The project cost no less {blank} $5 million.", "No fewer than three attempts {blank} made.", "She waited no less {blank} four hours."],
        answers: ["attended", "than", "were", "than"],
        options: [["attended", "attending", "attends", "attend"], ["than", "then", "that", "as"], ["were", "was", "is", "are"], ["than", "then", "that", "as"]]
    },
    {
        rule: "Relative Clauses: Whatever / Whichever in Relative Clauses", category: "relative-clauses", level: "college",
        meaning: "Use 'whatever' and 'whichever' in free relative clauses meaning 'anything that' or 'any one that'.",
        sentences: ["Take {blank} you need from the supply room.", "{blank} path you choose will be challenging.", "You can invite {blank} you like.", "I'll accept {blank} decision you make."],
        answers: ["whatever", "Whichever", "whoever", "whatever"],
        options: [["whatever", "whichever", "whoever", "however"], ["Whichever", "Whatever", "Whoever", "However"], ["whoever", "whatever", "whichever", "however"], ["whatever", "whichever", "whoever", "however"]]
    },
    {
        rule: "Relative Clauses: Whereby", category: "relative-clauses", level: "professional",
        meaning: "'Whereby' is a formal relative adverb meaning 'by which' or 'through which'.",
        sentences: ["They created a system {blank} complaints could be resolved quickly.", "There is a procedure {blank} employees can request leave.", "We need a mechanism {blank} feedback can be collected.", "The agreement includes a clause {blank} either party can withdraw."],
        answers: ["whereby", "whereby", "whereby", "whereby"],
        options: [["whereby", "where", "which", "that"], ["whereby", "where", "which", "that"], ["whereby", "where", "which", "that"], ["whereby", "where", "which", "that"]]
    },
    {
        rule: "Pronouns: Each other vs One another (formal distinction)", category: "pronouns", level: "college",
        meaning: "Traditionally, 'each other' is for two people and 'one another' for more than two, though they are often interchangeable in modern English.",
        sentences: ["The twins always help {blank}.", "All five team members respect {blank}.", "The couple looked at {blank} lovingly.", "The students corrected {blank}'s work."],
        answers: ["each other", "one another", "each other", "one another"],
        options: [["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"], ["each other", "one another", "themselves", "them"], ["one another", "each other", "themselves", "them"]]
    },
    {
        rule: "Pronouns: All / Everything / Everybody", category: "pronouns", level: "middle",
        meaning: "'All' can be a pronoun or determiner. 'Everything' is a pronoun for things. 'Everybody' is a pronoun for people (singular verb).",
        sentences: ["{blank} is ready for the meeting.", "I've lost {blank} I owned.", "{blank} the food was delicious.", "{blank} wants to be happy."],
        answers: ["Everything", "everything", "All", "Everybody"],
        options: [["Everything", "All", "Everybody", "Anyone"], ["everything", "all", "everybody", "anyone"], ["All", "Everything", "Everybody", "Anyone"], ["Everybody", "Everything", "All", "Anyone"]]
    },
    {
        rule: "Subject-Verb Agreement: Pair Nouns (trousers, scissors)", category: "subject-verb-agreement", level: "middle",
        meaning: "Nouns that come in pairs (trousers, scissors, glasses) take a plural verb. Use 'a pair of' for singular.",
        sentences: ["These trousers {blank} too long.", "My glasses {blank} broken.", "A pair of scissors {blank} on the table.", "Your jeans {blank} in the wash."],
        answers: ["are", "are", "is", "are"],
        options: [["are", "is", "was", "has"], ["are", "is", "was", "has"], ["is", "are", "were", "have"], ["are", "is", "was", "has"]]
    },
    {
        rule: "Subject-Verb Agreement: Titles and Names", category: "subject-verb-agreement", level: "college",
        meaning: "Titles of books, films, and organisations take a singular verb even if they look plural.",
        sentences: ["'The Chronicles of Narnia' {blank} a famous series.", "'The United Nations' {blank} founded in 1945.", "'Star Wars' {blank} one of the most popular films ever.", "'The Times' {blank} a respected newspaper."],
        answers: ["is", "was", "is", "is"],
        options: [["is", "are", "were", "have been"], ["was", "were", "is", "are"], ["is", "are", "were", "have been"], ["is", "are", "were", "have been"]]
    },
    {
        rule: "Comparatives: Older/Elder", category: "comparatives", level: "high",
        meaning: "'Older' is the standard comparative of 'old'. 'Elder' is used only for family members and only before a noun.",
        sentences: ["My {blank} brother is a pilot.", "She is {blank} than me by two years.", "He is the {blank} member of the team.", "My {blank} sister lives abroad."],
        answers: ["elder", "older", "oldest", "elder"],
        options: [["elder", "older", "eldest", "oldest"], ["older", "elder", "eldest", "oldest"], ["oldest", "eldest", "older", "elder"], ["elder", "older", "eldest", "oldest"]]
    },
    {
        rule: "Comparatives: Further vs Farther", category: "comparatives", level: "college",
        meaning: "'Farther' refers to physical distance. 'Further' can mean additional or physical distance.",
        sentences: ["We need to discuss this {blank}.", "The airport is {blank} than I thought.", "For {blank} information, contact the office.", "How much {blank} is it to the hotel?"],
        answers: ["further", "farther", "further", "farther"],
        options: [["further", "farther", "farthest", "furthest"], ["farther", "further", "farthest", "furthest"], ["further", "farther", "farthest", "furthest"], ["farther", "further", "farthest", "furthest"]]
    },
    {
        rule: "Word Formation: -ward(s) Suffix", category: "word-formation", level: "middle",
        meaning: "The suffix '-ward(s)' indicates direction: forward, backward, upward, downward, etc.",
        sentences: ["She moved {blank} to get a better view.", "The river flows {blank} to the sea.", "He glanced {blank} at the tall building.", "The economy has been moving {blank} recently."],
        answers: ["forward", "downward", "upward", "backward"],
        options: [["forward", "backward", "upward", "downward"], ["downward", "upward", "forward", "backward"], ["upward", "downward", "forward", "backward"], ["backward", "forward", "upward", "downward"]]
    },
    {
        rule: "Word Formation: Co- and Counter- Prefixes", category: "word-formation", level: "college",
        meaning: "'Co-' means together or jointly. 'Counter-' means against or opposite.",
        sentences: ["She is the {blank} of the company. (found)", "The government launched a {blank} against terrorism. (attack)", "He is my {blank} on this project. (author)", "She made a {blank} to his argument. (argue)"],
        answers: ["co-founder", "counterattack", "co-author", "counterargument"],
        options: [["co-founder", "counterfounded", "refounded", "unfounded"], ["counterattack", "co-attack", "reattack", "unattack"], ["co-author", "counterauthor", "reauthor", "unauthor"], ["counterargument", "co-argument", "reargument", "unargument"]]
    },
    {
        rule: "Gerund vs Infinitive: Make, Let, Help", category: "gerunds-infinitives", level: "middle",
        meaning: "'Make' and 'let' are followed by object + base form (no 'to'). 'Help' can take 'to' or base form.",
        sentences: ["She made me {blank} the whole thing again.", "Let me {blank} you with that.", "They didn't let us {blank} the building.", "Can you help me {blank} this box?"],
        answers: ["do", "help", "enter", "carry"],
        options: [["do", "to do", "doing", "did"], ["help", "to help", "helping", "helped"], ["enter", "to enter", "entering", "entered"], ["carry", "to carry", "carrying", "carried"]]
    },
    {
        rule: "Gerund vs Infinitive: Verbs of Perception", category: "gerunds-infinitives", level: "high",
        meaning: "After verbs of perception (see, hear, watch, feel), use base form for a complete action and -ing for an action in progress.",
        sentences: ["I saw her {blank} the street.", "I heard him {blank} in the shower.", "We watched the sun {blank} over the horizon.", "She felt something {blank} her leg."],
        answers: ["cross", "singing", "set", "touch"],
        options: [["cross", "crossing", "to cross", "crossed"], ["singing", "sing", "to sing", "sang"], ["set", "setting", "to set", "setted"], ["touch", "touching", "to touch", "touched"]]
    },
    {
        rule: "Conditionals: Only if", category: "conditionals", level: "high",
        meaning: "'Only if' is a strong conditional that means 'exclusively under this condition'. When it starts a sentence, the main clause inverts.",
        sentences: ["You can go {blank} you finish your work.", "{blank} if I had known, I would have helped.", "She agreed, but {blank} if we paid in advance.", "I'll come, but {blank} if you promise to be there."],
        answers: ["only if", "Only", "only", "only"],
        options: [["only if", "unless", "even if", "as long as"], ["Only", "Unless", "Even", "As long as"], ["only", "unless", "even", "as long as"], ["only", "unless", "even", "as long as"]]
    },
    {
        rule: "Conditionals: Otherwise", category: "conditionals", level: "middle",
        meaning: "'Otherwise' means 'if not' and is used to state what will happen if a condition is not met.",
        sentences: ["Hurry up; {blank}, we'll be late.", "You should book in advance; {blank}, there won't be any seats.", "Take a coat; {blank}, you'll be cold.", "Be careful; {blank}, you might hurt yourself."],
        answers: ["otherwise", "otherwise", "otherwise", "otherwise"],
        options: [["otherwise", "however", "moreover", "therefore"], ["otherwise", "however", "moreover", "therefore"], ["otherwise", "however", "moreover", "therefore"], ["otherwise", "however", "moreover", "therefore"]]
    },
    {
        rule: "Passive: Passive Infinitive (to be done)", category: "passive", level: "high",
        meaning: "The passive infinitive is 'to be + past participle' and follows verbs like want, need, expect, hope.",
        sentences: ["She wants {blank} promoted.", "The car needs {blank} repaired.", "I expect {blank} informed of any changes.", "They hope {blank} selected for the team."],
        answers: ["to be", "to be", "to be", "to be"],
        options: [["to be", "being", "been", "be"], ["to be", "being", "been", "be"], ["to be", "being", "been", "be"], ["to be", "being", "been", "be"]]
    },
    {
        rule: "Passive: Let + Passive (Be allowed to)", category: "passive", level: "middle",
        meaning: "'Let' has no passive form. Use 'be allowed to' instead in the passive.",
        sentences: ["She was {blank} leave early.", "Students are not {blank} use phones.", "He was {blank} keep the prize.", "We were {blank} enter the building."],
        answers: ["allowed to", "allowed to", "allowed to", "allowed to"],
        options: [["allowed to", "let to", "made to", "got to"], ["allowed to", "let to", "made to", "got to"], ["allowed to", "let to", "made to", "got to"], ["allowed to", "let to", "made to", "got to"]]
    },
    {
        rule: "Prepositions: In the event of", category: "prepositions", level: "professional",
        meaning: "'In the event of' is a formal expression meaning 'if something happens'.",
        sentences: ["{blank} a fire, use the emergency exits.", "{blank} an emergency, call 999.", "{blank} a delay, we will notify all passengers.", "{blank} failure, the system will restart automatically."],
        answers: ["In the event of", "In the event of", "In the event of", "In the event of"],
        options: [["In the event of", "In case of", "Due to", "As a result of"], ["In the event of", "In case of", "Due to", "As a result of"], ["In the event of", "In case of", "Due to", "As a result of"], ["In the event of", "In case of", "Due to", "As a result of"]]
    },
    {
        rule: "Prepositions: Prior to / Subsequent to", category: "prepositions", level: "professional",
        meaning: "'Prior to' means 'before' and 'subsequent to' means 'after' in formal English.",
        sentences: ["{blank} the meeting, please review the agenda.", "{blank} the investigation, new evidence emerged.", "All documents must be submitted {blank} the deadline.", "{blank} the merger, the company expanded rapidly."],
        answers: ["Prior to", "Subsequent to", "prior to", "Subsequent to"],
        options: [["Prior to", "Subsequent to", "Due to", "Owing to"], ["Subsequent to", "Prior to", "Due to", "Owing to"], ["prior to", "subsequent to", "due to", "owing to"], ["Subsequent to", "Prior to", "Due to", "Owing to"]]
    },
    {
        rule: "Conjunctions: As soon as / No sooner than", category: "conjunctions", level: "middle",
        meaning: "'As soon as' connects two events that happen close together in time.",
        sentences: ["I'll call you {blank} I arrive.", "{blank} she heard the news, she called her mother.", "He left {blank} the meeting ended.", "{blank} the door opened, the dog ran out."],
        answers: ["as soon as", "As soon as", "as soon as", "As soon as"],
        options: [["as soon as", "until", "before", "unless"], ["As soon as", "Until", "Before", "Unless"], ["as soon as", "until", "before", "unless"], ["As soon as", "Until", "Before", "Unless"]]
    },
    {
        rule: "Conjunctions: Much as / As much as", category: "conjunctions", level: "professional",
        meaning: "'Much as' at the beginning of a clause means 'although' or 'even though'.",
        sentences: ["{blank} I'd like to help, I simply don't have time.", "{blank} she admired his work, she couldn't agree with his methods.", "{blank} I hate to admit it, you were right.", "{blank} we love the house, we can't afford it."],
        answers: ["Much as", "Much as", "Much as", "Much as"],
        options: [["Much as", "Although", "Because", "Since"], ["Much as", "Although", "Because", "Since"], ["Much as", "Although", "Because", "Since"], ["Much as", "Although", "Because", "Since"]]
    },
    {
        rule: "Articles: The vs No Article with Institutions (Hospital, School, Prison)", category: "articles", level: "high",
        meaning: "Use no article when referring to the purpose of the institution (as student, patient, prisoner). Use 'the' when referring to the building.",
        sentences: ["He was sent to {blank} for robbery.", "She goes to {blank} every day. She's a student.", "I went to {blank} prison to visit my uncle.", "He was taken to {blank} hospital after the accident."],
        answers: ["prison", "school", "the", "no article"],
        options: [["prison", "the prison", "a prison", "prisons"], ["school", "the school", "a school", "schools"], ["the", "no article", "a", "some"], ["no article", "the", "a", "some"]]
    },
    {
        rule: "Articles: The with Comparative + of two", category: "articles", level: "college",
        meaning: "Use 'the + comparative' when comparing two specific things: 'the taller of the two'.",
        sentences: ["She is {blank} smarter of the two sisters.", "This is {blank} cheaper of the two options.", "He chose {blank} better of the two offers.", "I prefer {blank} smaller of the two rooms."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Quantifiers: Every other / Every few", category: "quantifiers", level: "middle",
        meaning: "'Every other' means 'alternate'. 'Every few' means 'once in a small number of'.",
        sentences: ["She visits us {blank} weekend.", "Buses run {blank} ten minutes.", "We have a meeting {blank} other Tuesday.", "I check my phone {blank} few minutes."],
        answers: ["every other", "every", "every", "every"],
        options: [["every other", "each other", "another", "other"], ["every", "each", "another", "other"], ["every", "each", "another", "other"], ["every", "each", "another", "other"]]
    },
    {
        rule: "Quantifiers: Any (with singular for emphasis)", category: "quantifiers", level: "high",
        meaning: "'Any' + singular countable noun means 'it doesn't matter which one'.",
        sentences: ["{blank} student could answer that question.", "You can sit in {blank} seat you like.", "{blank} doctor would give you the same advice.", "Take {blank} book from the shelf."],
        answers: ["Any", "any", "Any", "any"],
        options: [["Any", "Every", "Each", "All"], ["any", "every", "each", "all"], ["Any", "Every", "Each", "All"], ["any", "every", "each", "all"]]
    },
    {
        rule: "Reported Speech: Promises and Threats", category: "reported-speech", level: "middle",
        meaning: "Report promises with 'promised + to-infinitive'. Report threats with 'threatened + to-infinitive'.",
        sentences: ["She {blank} to be on time.", "He {blank} to call the police.", "They {blank} to help us move.", "The company {blank} to sue if we didn't pay."],
        answers: ["promised", "threatened", "promised", "threatened"],
        options: [["promised", "threatened", "offered", "refused"], ["threatened", "promised", "offered", "refused"], ["promised", "threatened", "offered", "refused"], ["threatened", "promised", "offered", "refused"]]
    },
    {
        rule: "Reported Speech: Reporting Verbs with Prepositions", category: "reported-speech", level: "college",
        meaning: "Some reporting verbs require prepositions: 'apologise for', 'insist on', 'accuse of', 'blame for'.",
        sentences: ["She apologised {blank} being late.", "He insisted {blank} paying the bill.", "They accused him {blank} lying.", "She blamed me {blank} the mistake."],
        answers: ["for", "on", "of", "for"],
        options: [["for", "of", "on", "about"], ["on", "for", "of", "about"], ["of", "for", "on", "about"], ["for", "of", "on", "about"]]
    },
    {
        rule: "Comparatives: Modifiers with Superlatives (easily, by far)", category: "comparatives", level: "high",
        meaning: "Use modifiers like 'easily', 'by far', 'much', 'quite' before superlatives for emphasis.",
        sentences: ["She is {blank} the best player on the team.", "This is {blank} the most difficult exam I've taken.", "He is {blank} the youngest person to win the award.", "That was {blank} the worst decision ever made."],
        answers: ["easily", "quite", "by far", "much"],
        options: [["easily", "very", "so", "too"], ["quite", "very", "so", "too"], ["by far", "very", "so", "too"], ["much", "very", "so", "too"]]
    },
    {
        rule: "Comparatives: No less...than", category: "comparatives", level: "professional",
        meaning: "'No less...than' is used to emphasise that something is surprisingly significant or important.",
        sentences: ["The invitation came from no less a person {blank} the president.", "She was commended by no less {blank} the CEO himself.", "No less {blank} fifty applications were received.", "The project was backed by no less {blank} three government agencies."],
        answers: ["than", "than", "than", "than"],
        options: [["than", "then", "that", "as"], ["than", "then", "that", "as"], ["than", "then", "that", "as"], ["than", "then", "that", "as"]]
    },
    {
        rule: "Tenses: Would + Always (Past Irritation)", category: "tenses", level: "high",
        meaning: "Use 'would always' to describe an annoying past habit.",
        sentences: ["He {blank} always leave the door open.", "She {blank} always interrupt me during meetings.", "They {blank} always arrive late to class.", "He {blank} always forget to lock the door."],
        answers: ["would", "would", "would", "would"],
        options: [["would", "will", "should", "could"], ["would", "will", "should", "could"], ["would", "will", "should", "could"], ["would", "will", "should", "could"]]
    },
    {
        rule: "Tenses: Be about to", category: "tenses", level: "middle",
        meaning: "Use 'be about to + base form' to describe something that is going to happen very soon.",
        sentences: ["Hurry! The film is {blank} to start.", "I was {blank} to call you when you arrived.", "She's {blank} to make an important announcement.", "The train is {blank} to depart."],
        answers: ["about", "about", "about", "about"],
        options: [["about", "going", "due", "bound"], ["about", "going", "due", "bound"], ["about", "going", "due", "bound"], ["about", "going", "due", "bound"]]
    },
    {
        rule: "Pronouns: Former and Latter", category: "pronouns", level: "college",
        meaning: "'The former' refers to the first of two things mentioned; 'the latter' refers to the second.",
        sentences: ["I was offered tea or coffee; I chose {blank}.", "She studied French and German. The {blank} was easier for her.", "Between reading and sports, I prefer the {blank}.", "Both options are good, but I lean towards the {blank}."],
        answers: ["the latter", "former", "latter", "former"],
        options: [["the latter", "the former", "the last", "the first"], ["former", "latter", "first", "last"], ["latter", "former", "first", "last"], ["former", "latter", "first", "last"]]
    },
    {
        rule: "Pronouns: Do so / Do it / Do that", category: "pronouns", level: "high",
        meaning: "'Do so' is formal substitution for a previously mentioned action. 'Do it/that' is more informal.",
        sentences: ["She asked me to resign, and I refused to {blank}.", "He cleaned the kitchen. He does {blank} every day.", "They told us to wait, and we did {blank}.", "She promised to help, and she did {blank}."],
        answers: ["do so", "so", "so", "so"],
        options: [["do so", "do it", "do that", "do this"], ["so", "it", "that", "this"], ["so", "it", "that", "this"], ["so", "it", "that", "this"]]
    },
    {
        rule: "Word Formation: Anti- and Pro- Prefixes", category: "word-formation", level: "middle",
        meaning: "'Anti-' means against; 'pro-' means in favour of.",
        sentences: ["She is very {blank} and avoids all forms of conflict. (war → opposed to)", "The {blank} movement gained support. (democracy → in favour of)", "He took an {blank} before the surgery. (biotic → preventing bacteria)", "The group is strongly {blank}. (government → in favour of)"],
        answers: ["anti-war", "pro-democracy", "antibiotic", "pro-government"],
        options: [["anti-war", "pro-war", "counter-war", "non-war"], ["pro-democracy", "anti-democracy", "counter-democracy", "non-democracy"], ["antibiotic", "probiotic", "counterbiotic", "nonbiotic"], ["pro-government", "anti-government", "counter-government", "non-government"]]
    },
    {
        rule: "Word Formation: Compound Nouns (noun + noun)", category: "word-formation", level: "elementary",
        meaning: "Compound nouns are made by combining two nouns. The first noun modifies the second.",
        sentences: ["She caught the {blank} to work.", "Please fill in this {blank}.", "There's a {blank} on the corner of the street.", "Don't forget to bring your {blank}."],
        answers: ["bus", "application form", "bus stop", "toothbrush"],
        options: [["bus", "car", "train", "taxi"], ["application form", "form application", "apply form", "forming apply"], ["bus stop", "stop bus", "bus station", "station bus"], ["toothbrush", "brush tooth", "teeth brush", "brushing teeth"]]
    },
    {
        rule: "Inversion: Were + Subject (Second Conditional Inversion)", category: "conditionals", level: "professional",
        meaning: "In formal English, omit 'if' and invert 'were' and the subject in second conditional sentences.",
        sentences: ["{blank} I you, I would accept the offer.", "{blank} she in charge, things would be different.", "{blank} it not for the traffic, I would be on time.", "{blank} he here, he would know what to do."],
        answers: ["Were", "Were", "Were", "Were"],
        options: [["Were", "If", "Should", "Had"], ["Were", "If", "Should", "Had"], ["Were", "If", "Should", "Had"], ["Were", "If", "Should", "Had"]]
    },
    {
        rule: "Passive: Ergative Verbs (Active with Passive Meaning)", category: "passive", level: "college",
        meaning: "Some verbs (open, close, break, change, start) can be used with an active form but passive meaning.",
        sentences: ["The door {blank} suddenly.", "The glass {blank} when I touched it.", "The meeting {blank} at 3 o'clock.", "The weather {blank} dramatically overnight."],
        answers: ["opened", "broke", "starts", "changed"],
        options: [["opened", "was opened", "has opened", "is opening"], ["broke", "was broken", "has broken", "is breaking"], ["starts", "is started", "has started", "was started"], ["changed", "was changed", "has changed", "is changing"]]
    },
    {
        rule: "Gerund vs Infinitive: Too + Adjective + To", category: "gerunds-infinitives", level: "elementary",
        meaning: "Use 'too + adjective + to-infinitive' to express that something is excessive for a purpose.",
        sentences: ["The box is too heavy {blank}.", "She was too tired {blank}.", "He's too young {blank} a car.", "The soup is too hot {blank}."],
        answers: ["to lift", "to continue", "to drive", "to eat"],
        options: [["to lift", "lifting", "lift", "for lifting"], ["to continue", "continuing", "continue", "for continuing"], ["to drive", "driving", "drive", "for driving"], ["to eat", "eating", "eat", "for eating"]]
    },
    {
        rule: "Subject-Verb Agreement: Compound Subjects with Or", category: "subject-verb-agreement", level: "high",
        meaning: "When subjects are joined by 'or', the verb agrees with the nearest subject.",
        sentences: ["My parents or my sister {blank} going to pick me up.", "The cat or the dogs {blank} making that noise.", "Either the manager or the workers {blank} at fault.", "Neither the students nor the teacher {blank} present."],
        answers: ["is", "are", "are", "was"],
        options: [["is", "are", "were", "have been"], ["are", "is", "was", "has been"], ["are", "is", "was", "has been"], ["was", "were", "is", "are"]]
    },
    {
        rule: "Relative Clauses: Omitting the Relative Pronoun", category: "relative-clauses", level: "middle",
        meaning: "In defining relative clauses, you can omit 'who', 'which', or 'that' when they are the object of the clause.",
        sentences: ["The film {blank} we saw last night was excellent.", "The woman {blank} I met at the party is a lawyer.", "The book {blank} you recommended was fascinating.", "The hotel {blank} we stayed at was very comfortable."],
        answers: ["that", "whom", "that", "that"],
        options: [["that", "which", "who", "no pronoun needed"], ["whom", "who", "that", "no pronoun needed"], ["that", "which", "who", "no pronoun needed"], ["that", "which", "who", "no pronoun needed"]]
    },
    {
        rule: "Prepositions: On behalf of / On the grounds of", category: "prepositions", level: "professional",
        meaning: "'On behalf of' means 'representing someone'. 'On the grounds of' means 'because of (a reason)'.",
        sentences: ["I'm speaking {blank} the entire department.", "He was dismissed {blank} misconduct.", "She accepted the award {blank} the team.", "The application was rejected {blank} insufficient evidence."],
        answers: ["on behalf of", "on the grounds of", "on behalf of", "on the grounds of"],
        options: [["on behalf of", "on the grounds of", "in terms of", "by means of"], ["on the grounds of", "on behalf of", "in terms of", "by means of"], ["on behalf of", "on the grounds of", "in terms of", "by means of"], ["on the grounds of", "on behalf of", "in terms of", "by means of"]]
    },
    {
        rule: "Modals: Be due to", category: "modals", level: "middle",
        meaning: "'Be due to + infinitive' describes something that is scheduled or expected to happen.",
        sentences: ["The train is {blank} arrive at 3 o'clock.", "She is {blank} to give a presentation tomorrow.", "The results are {blank} to be announced next week.", "The flight was {blank} to depart at noon."],
        answers: ["due to", "due", "due", "due"],
        options: [["due to", "about to", "likely to", "bound to"], ["due", "about", "likely", "bound"], ["due", "about", "likely", "bound"], ["due", "about", "likely", "bound"]]
    },
    {
        rule: "Modals: It's time + Past Simple", category: "modals", level: "college",
        meaning: "Use 'it's (high/about) time + subject + past simple' to say something should happen now or should have happened already.",
        sentences: ["It's time we {blank} going.", "It's about time she {blank} the truth.", "It's high time you {blank} a decision.", "It's time they {blank} a better offer."],
        answers: ["got", "told", "made", "made"],
        options: [["got", "get", "are getting", "will get"], ["told", "tell", "is telling", "will tell"], ["made", "make", "are making", "will make"], ["made", "make", "are making", "will make"]]
    },
    {
        rule: "Articles: The with Public Places (cinema, theatre)", category: "articles", level: "elementary",
        meaning: "In British English, use 'the' with 'cinema', 'theatre', 'radio'. American English may omit 'the'.",
        sentences: ["Shall we go to {blank} cinema tonight?", "I love going to {blank} theatre.", "Did you hear it on {blank} radio?", "Let's go to {blank} supermarket."],
        answers: ["the", "the", "the", "the"],
        options: [["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"], ["the", "a", "an", "no article"]]
    },
    {
        rule: "Word Order: Position of Only", category: "word-order", level: "high",
        meaning: "The position of 'only' in a sentence changes the meaning. Place it next to the word it modifies.",
        sentences: ["{blank} John passed the exam. (Nobody else passed.)", "John only {blank} the exam. (He didn't do anything else.)", "John passed {blank} the exam. (He passed one exam, not others.)", "I {blank} only wanted to help."],
        answers: ["Only", "passed", "only", "had"],
        options: [["Only", "Just", "Merely", "Simply"], ["passed", "took", "sat", "wrote"], ["only", "just", "merely", "simply"], ["had", "have", "has", "was"]]
    },
    {
        rule: "Tenses: Present Perfect with Already in Questions", category: "tenses", level: "middle",
        meaning: "Use 'already' in questions to express surprise that something happened sooner than expected.",
        sentences: ["Have you {blank} finished your homework?", "Has she {blank} left the office?", "Have they {blank} decided?", "Has he {blank} eaten lunch?"],
        answers: ["already", "already", "already", "already"],
        options: [["already", "yet", "still", "just"], ["already", "yet", "still", "just"], ["already", "yet", "still", "just"], ["already", "yet", "still", "just"]]
    },
    {
        rule: "Prepositions: Above vs Over / Below vs Under", category: "prepositions", level: "middle",
        meaning: "'Above' and 'over' both mean higher than, but 'over' implies directly above or covering. 'Below' and 'under' follow the same pattern.",
        sentences: ["The temperature is {blank} zero.", "She put a blanket {blank} the sleeping child.", "The plane flew {blank} the clouds.", "The shop is {blank} the apartment."],
        answers: ["below", "over", "above", "below"],
        options: [["below", "under", "above", "over"], ["over", "above", "below", "under"], ["above", "over", "below", "under"], ["below", "under", "above", "over"]]
    },
    {
        rule: "Conjunctions: Seeing that / Given that", category: "conjunctions", level: "college",
        meaning: "'Seeing that' and 'given that' mean 'because' or 'considering that'.",
        sentences: ["{blank} it's raining, we should stay inside.", "{blank} you're here, can you help me?", "{blank} the circumstances, we had no choice.", "{blank} she's the most experienced, she should lead."],
        answers: ["Given that", "Seeing that", "Given", "Seeing that"],
        options: [["Given that", "Although", "Unless", "Whereas"], ["Seeing that", "Although", "Unless", "Whereas"], ["Given", "Although", "Unless", "Whereas"], ["Seeing that", "Although", "Unless", "Whereas"]]
    },
    {
        rule: "Subject-Verb Agreement: Here is/are", category: "subject-verb-agreement", level: "elementary",
        meaning: "After 'here is/are', the verb agrees with the subject that follows.",
        sentences: ["Here {blank} your coffee.", "Here {blank} the documents you requested.", "Here {blank} the book I promised you.", "Here {blank} the results of the test."],
        answers: ["is", "are", "is", "are"],
        options: [["is", "are", "were", "have"], ["are", "is", "was", "has"], ["is", "are", "were", "have"], ["are", "is", "was", "has"]]
    },
    {
        rule: "Comparatives: Twice as...as / Three times as...as", category: "comparatives", level: "middle",
        meaning: "Use 'twice/three times as + adjective + as' to express multiples.",
        sentences: ["This house is {blank} as big as our old one.", "He earns {blank} as much as I do.", "The new model is {blank} as fast as the previous one.", "She is {blank} as old as her daughter."],
        answers: ["twice", "three times", "twice", "twice"],
        options: [["twice", "double", "two time", "two times"], ["three times", "triple", "three time", "thrice"], ["twice", "double", "two time", "two times"], ["twice", "double", "two time", "two times"]]
    },
    {
        rule: "Inversion: No sooner...than", category: "word-order", level: "professional",
        meaning: "When 'no sooner' starts a sentence, invert the subject and auxiliary. 'No sooner had...than' describes immediate sequence.",
        sentences: ["No sooner {blank} I arrived than the meeting started.", "No sooner {blank} they left than it began to snow.", "No sooner {blank} she finished than the phone rang.", "No sooner {blank} we sat down than the food was served."],
        answers: ["had", "had", "had", "had"],
        options: [["had", "have", "did", "was"], ["had", "have", "did", "were"], ["had", "have", "did", "was"], ["had", "have", "did", "were"]]
    },
    {
        rule: "Word Order: Though at End of Clause", category: "word-order", level: "high",
        meaning: "'Though' can come at the end of a sentence or clause as an adverb meaning 'however'.",
        sentences: ["The food was good. It was expensive, {blank}.", "He's nice enough. He can be a bit boring, {blank}.", "I didn't win. I enjoyed the experience, {blank}.", "She said she'd come. I doubt she will, {blank}."],
        answers: ["though", "though", "though", "though"],
        options: [["though", "although", "but", "however"], ["though", "although", "but", "however"], ["though", "although", "but", "however"], ["though", "although", "but", "however"]]
    },
    {
        rule: "Prepositions: In the long run / In the short term", category: "prepositions", level: "college",
        meaning: "'In the long run' means 'eventually, over a long period'. 'In the short term' means 'for the near future'.",
        sentences: ["This investment will pay off {blank}.", "{blank}, there may be some disruption.", "Education is beneficial {blank}.", "{blank}, the changes may seem difficult."],
        answers: ["in the long run", "In the short term", "in the long run", "In the short term"],
        options: [["in the long run", "in the short term", "in time", "in the end"], ["In the short term", "In the long run", "In time", "In the end"], ["in the long run", "in the short term", "in time", "in the end"], ["In the short term", "In the long run", "In time", "In the end"]]
    },
    {
        rule: "Prepositions: In the process of / On the brink of", category: "prepositions", level: "professional",
        meaning: "'In the process of' means 'currently doing'. 'On the brink of' means 'very close to'.",
        sentences: ["We are {blank} moving to a new office.", "The country was {blank} a financial crisis.", "She is {blank} finishing her degree.", "The company was {blank} bankruptcy."],
        answers: ["in the process of", "on the brink of", "in the process of", "on the brink of"],
        options: [["in the process of", "on the brink of", "in terms of", "on behalf of"], ["on the brink of", "in the process of", "in terms of", "on behalf of"], ["in the process of", "on the brink of", "in terms of", "on behalf of"], ["on the brink of", "in the process of", "in terms of", "on behalf of"]]
    },
    {
        rule: "Articles: No Article with Home, Work, Bed", category: "articles", level: "elementary",
        meaning: "Don't use articles with 'home', 'work', and 'bed' when they refer to their primary purpose.",
        sentences: ["I'm going {blank} now.", "She left {blank} at 8 o'clock.", "The children are in {blank}.", "He went to {blank} early."],
        answers: ["home", "work", "bed", "bed"],
        options: [["home", "the home", "a home", "to home"], ["work", "the work", "a work", "to work"], ["bed", "the bed", "a bed", "to bed"], ["bed", "the bed", "a bed", "to bed"]]
    },
    {
        rule: "Quantifiers: A large number of / A small number of", category: "quantifiers", level: "middle",
        meaning: "'A large/small number of' is used with countable nouns and takes a plural verb.",
        sentences: ["A large number of people {blank} at the concert.", "A small number of employees {blank} the new policy.", "A growing number of students {blank} studying abroad.", "A significant number of voters {blank} undecided."],
        answers: ["were", "oppose", "are", "remain"],
        options: [["were", "was", "is", "has"], ["oppose", "opposes", "is opposing", "has opposed"], ["are", "is", "was", "has"], ["remain", "remains", "is remaining", "has remained"]]
    },
    {
        rule: "Conjunctions: For (formal because)", category: "conjunctions", level: "professional",
        meaning: "In formal English, 'for' can be used as a conjunction meaning 'because'. It introduces a reason.",
        sentences: ["He must have left, {blank} his car is gone.", "She was happy, {blank} she had passed the exam.", "We stayed indoors, {blank} it was raining heavily.", "He was respected by all, {blank} he was fair and honest."],
        answers: ["for", "for", "for", "for"],
        options: [["for", "because", "since", "as"], ["for", "because", "since", "as"], ["for", "because", "since", "as"], ["for", "because", "since", "as"]]
    },
    {
        rule: "Conjunctions: So long as", category: "conjunctions", level: "middle",
        meaning: "'So long as' means 'on condition that' or 'provided that'.",
        sentences: ["You can borrow my car {blank} you return it by tonight.", "I don't mind {blank} you're quiet.", "She can stay {blank} she follows the rules.", "Everything will be fine {blank} we stick to the plan."],
        answers: ["so long as", "so long as", "so long as", "so long as"],
        options: [["so long as", "unless", "although", "whereas"], ["so long as", "unless", "although", "whereas"], ["so long as", "unless", "although", "whereas"], ["so long as", "unless", "although", "whereas"]]
    },
    {
        rule: "Relative Clauses: That vs Which (Defining)", category: "relative-clauses", level: "middle",
        meaning: "In defining relative clauses, 'that' and 'which' are often interchangeable for things. 'That' is more common in spoken English.",
        sentences: ["The car {blank} is parked outside is mine.", "Where is the book {blank} I bought yesterday?", "The house {blank} we visited was beautiful.", "The movie {blank} won the award was brilliant."],
        answers: ["that", "that", "that", "that"],
        options: [["that", "which", "who", "whom"], ["that", "which", "who", "whom"], ["that", "which", "who", "whom"], ["that", "which", "who", "whom"]]
    },
    {
        rule: "Pronouns: There + Modal Verbs", category: "pronouns", level: "high",
        meaning: "'There' can be combined with modal verbs: 'there must be', 'there might be', 'there should be'.",
        sentences: ["There {blank} be a reason for his absence.", "There {blank} be a better way to do this.", "There {blank} be some food left in the fridge.", "There {blank} be more staff on duty."],
        answers: ["must", "should", "might", "ought to"],
        options: [["must", "should", "might", "could"], ["should", "must", "might", "could"], ["might", "must", "should", "could"], ["ought to", "must", "should", "could"]]
    },
    {
        rule: "Tenses: Past Simple for Unreal Present (after wish, if only, it's time)", category: "tenses", level: "high",
        meaning: "The past simple is used after 'wish', 'if only', and 'it's time' to refer to an unreal present situation.",
        sentences: ["I wish I {blank} the answer.", "If only he {blank} here right now.", "It's time we {blank} for dinner.", "I wish it {blank} so cold."],
        answers: ["knew", "were", "left", "weren't"],
        options: [["knew", "know", "had known", "will know"], ["were", "is", "was being", "will be"], ["left", "leave", "are leaving", "will leave"], ["weren't", "isn't", "wasn't being", "won't be"]]
    },
    {
        rule: "Modals: Might as well", category: "modals", level: "middle",
        meaning: "'Might as well' means there is no better alternative or there is no reason not to.",
        sentences: ["We {blank} as well stay — the rain won't stop.", "You {blank} as well tell me the truth.", "She {blank} as well have gone home; there's nothing to do.", "We've come this far. We {blank} as well finish."],
        answers: ["might", "might", "might", "might"],
        options: [["might", "should", "could", "would"], ["might", "should", "could", "would"], ["might", "should", "could", "would"], ["might", "should", "could", "would"]]
    },
    {
        rule: "Word Formation: -ful vs -less", category: "word-formation", level: "elementary",
        meaning: "'-ful' means 'full of' or 'having'. '-less' means 'without'.",
        sentences: ["Be {blank} when crossing the road. (care)", "The poor dog was {blank} and alone. (home)", "She gave a {blank} performance. (wonder)", "The task seemed {blank} and impossible. (hope)"],
        answers: ["careful", "homeless", "wonderful", "hopeless"],
        options: [["careful", "careless", "caring", "cared"], ["homeless", "homeful", "homing", "homed"], ["wonderful", "wonderless", "wondering", "wondered"], ["hopeless", "hopeful", "hoping", "hoped"]]
    },
    {
        rule: "Subject-Verb Agreement: Gerund as Subject", category: "subject-verb-agreement", level: "middle",
        meaning: "When a gerund (-ing form) is the subject of a sentence, it takes a singular verb.",
        sentences: ["{blank} is good exercise.", "{blank} taxes is everyone's responsibility.", "{blank} late to meetings is unprofessional.", "{blank} and jogging are both good for you."],
        answers: ["Swimming", "Paying", "Arriving", "Walking"],
        options: [["Swimming", "Swim", "Swims", "To swim"], ["Paying", "Pay", "Pays", "To pay"], ["Arriving", "Arrive", "Arrives", "To arrive"], ["Walking", "Walk", "Walks", "To walk"]]
    },
    {
        rule: "Comparatives: Quite vs Rather", category: "comparatives", level: "college",
        meaning: "'Quite' can mean 'fairly' or 'completely' (depending on the adjective). 'Rather' suggests more than expected.",
        sentences: ["The film was {blank} good, better than I expected.", "It's {blank} cold for June, don't you think?", "She was {blank} pleased with the result.", "The restaurant was {blank} expensive."],
        answers: ["quite", "rather", "quite", "rather"],
        options: [["quite", "rather", "very", "so"], ["rather", "quite", "very", "so"], ["quite", "rather", "very", "so"], ["rather", "quite", "very", "so"]]
    },

    // ===== Reflexive Pronouns =====
    {
        rule: "Reflexive Pronouns", category: "pronouns", level: "elementary",
        meaning: "Use reflexive pronouns (myself, yourself, etc.) when the subject and object are the same person.",
        sentences: ["She taught {blank} to play the piano.", "I cut {blank} while cooking.", "They enjoyed {blank} at the party.", "He introduced {blank} to the group."],
        answers: ["herself", "myself", "themselves", "himself"],
        options: [["herself", "her", "she", "hers"], ["myself", "me", "I", "mine"], ["themselves", "them", "they", "theirs"], ["himself", "him", "he", "his"]]
    },
    {
        rule: "Reflexive Pronouns", category: "pronouns", level: "elementary",
        meaning: "Use reflexive pronouns (myself, yourself, etc.) when the subject and object are the same person.",
        sentences: ["We prepared {blank} for the exam.", "You should be proud of {blank}.", "The cat cleaned {blank} after eating.", "I told {blank} to stay calm."],
        answers: ["ourselves", "yourself", "itself", "myself"],
        options: [["ourselves", "us", "we", "ours"], ["yourself", "you", "yours", "your"], ["itself", "it", "its", "that"], ["myself", "me", "I", "mine"]]
    },
    {
        rule: "Reflexive Pronouns", category: "pronouns", level: "elementary",
        meaning: "Use reflexive pronouns (myself, yourself, etc.) when the subject and object are the same person.",
        sentences: ["Did you hurt {blank}?", "She looked at {blank} in the mirror.", "The children dressed {blank} for school.", "He blamed {blank} for the mistake."],
        answers: ["yourself", "herself", "themselves", "himself"],
        options: [["yourself", "you", "yours", "your"], ["herself", "her", "she", "hers"], ["themselves", "them", "they", "theirs"], ["himself", "him", "he", "his"]]
    },
    {
        rule: "Reflexive Pronouns", category: "pronouns", level: "middle",
        meaning: "Reflexive pronouns can also be used for emphasis (emphatic use) to mean 'without help'.",
        sentences: ["I fixed the car {blank}.", "She {blank} admitted it was wrong.", "The president {blank} came to the opening.", "We built this house {blank}."],
        answers: ["myself", "herself", "himself", "ourselves"],
        options: [["myself", "me", "I", "mine"], ["herself", "her", "she", "hers"], ["himself", "him", "he", "his"], ["ourselves", "us", "we", "ours"]]
    },
    {
        rule: "Reflexive Pronouns", category: "pronouns", level: "middle",
        meaning: "Use reflexive pronouns after certain verbs and prepositions when referring back to the subject.",
        sentences: ["Help {blank} to some cake.", "She kept the secret to {blank}.", "They found {blank} lost in the forest.", "I bought {blank} a new laptop."],
        answers: ["yourself", "herself", "themselves", "myself"],
        options: [["yourself", "you", "yours", "your"], ["herself", "her", "she", "hers"], ["themselves", "them", "they", "theirs"], ["myself", "me", "I", "mine"]]
    },

    // ===== Reduced Relative Clauses =====
    {
        rule: "Reduced Relative Clauses", category: "relative-clauses", level: "high",
        meaning: "A relative clause can be reduced by removing the relative pronoun and the be-verb, leaving a participle.",
        sentences: ["The man {blank} at the door is my uncle.", "The book {blank} on the table is mine.", "The students {blank} in the lab are seniors.", "The letter {blank} yesterday contained good news."],
        answers: ["standing", "lying", "working", "received"],
        options: [["standing", "who standing", "stood", "stands"], ["lying", "which lying", "lay", "lies"], ["working", "who working", "worked", "works"], ["received", "which received", "receiving", "receives"]]
    },
    {
        rule: "Reduced Relative Clauses", category: "relative-clauses", level: "high",
        meaning: "Active relative clauses reduce to present participles; passive relative clauses reduce to past participles.",
        sentences: ["The car {blank} in the garage belongs to Tom.", "Anyone {blank} to join should sign up.", "The food {blank} at the restaurant was delicious.", "The woman {blank} the red hat is my teacher."],
        answers: ["parked", "wishing", "served", "wearing"],
        options: [["parked", "parking", "parks", "park"], ["wishing", "wished", "wishes", "wish"], ["served", "serving", "serves", "serve"], ["wearing", "worn", "wears", "wear"]]
    },
    {
        rule: "Reduced Relative Clauses", category: "relative-clauses", level: "high",
        meaning: "Reduced relative clauses make sentences more concise by removing the relative pronoun and auxiliary verb.",
        sentences: ["The packages {blank} to your address will arrive tomorrow.", "People {blank} near airports often complain about noise.", "The results {blank} in the study were surprising.", "The road {blank} to the village is dangerous."],
        answers: ["sent", "living", "obtained", "leading"],
        options: [["sent", "sending", "sends", "send"], ["living", "lived", "lives", "live"], ["obtained", "obtaining", "obtains", "obtain"], ["leading", "led", "leads", "lead"]]
    },
    {
        rule: "Reduced Relative Clauses", category: "relative-clauses", level: "college",
        meaning: "Reduced relative clauses with past participles imply passive meaning; those with present participles imply active meaning.",
        sentences: ["The theory {blank} by Einstein changed physics.", "Employees {blank} overtime will receive a bonus.", "The bridge {blank} in 1920 is still in use.", "The passengers {blank} for the delayed flight were frustrated."],
        answers: ["proposed", "working", "built", "waiting"],
        options: [["proposed", "proposing", "proposes", "propose"], ["working", "worked", "works", "work"], ["built", "building", "builds", "build"], ["waiting", "waited", "waits", "wait"]]
    },
    {
        rule: "Reduced Relative Clauses", category: "relative-clauses", level: "college",
        meaning: "Reduced relative clauses are common in formal and academic writing to make sentences more concise.",
        sentences: ["The data {blank} from the survey indicate a trend.", "Candidates {blank} the minimum requirements will be interviewed.", "The policy {blank} last year has been effective.", "The scientist {blank} the research won a Nobel Prize."],
        answers: ["collected", "meeting", "introduced", "conducting"],
        options: [["collected", "collecting", "collects", "collect"], ["meeting", "met", "meets", "meet"], ["introduced", "introducing", "introduces", "introduce"], ["conducting", "conducted", "conducts", "conduct"]]
    },

    // ===== Be able to =====
    {
        rule: "Be able to", category: "modals", level: "elementary",
        meaning: "'Be able to' is used as an alternative to 'can' to express ability, especially in tenses where 'can' cannot be used.",
        sentences: ["She {blank} speak three languages.", "I {blank} finish the project by Friday.", "They {blank} find the solution yesterday.", "He {blank} swim since he was five."],
        answers: ["is able to", "will be able to", "were able to", "has been able to"],
        options: [["is able to", "are able to", "was able to", "been able to"], ["will be able to", "is able to", "was able to", "able to"], ["were able to", "are able to", "is able to", "will be able to"], ["has been able to", "is able to", "was able to", "will be able to"]]
    },
    {
        rule: "Be able to", category: "modals", level: "elementary",
        meaning: "'Be able to' can be used in all tenses, unlike 'can' which only has present and past forms.",
        sentences: ["We {blank} see the mountains from here.", "She {blank} attend the meeting tomorrow.", "I {blank} to sleep because of the noise last night.", "They {blank} solve the puzzle yet."],
        answers: ["are able to", "will be able to", "wasn't able", "haven't been able to"],
        options: [["are able to", "is able to", "was able to", "were able to"], ["will be able to", "is able to", "was able to", "are able to"], ["wasn't able", "isn't able", "aren't able", "won't be able"], ["haven't been able to", "wasn't able to", "isn't able to", "aren't able to"]]
    },
    {
        rule: "Be able to", category: "modals", level: "elementary",
        meaning: "'Be able to' expresses ability or possibility and changes form based on tense and subject.",
        sentences: ["The baby {blank} walk yet.", "Will you {blank} come to the party?", "He {blank} run fast when he was young.", "I {blank} help you after lunch."],
        answers: ["isn't able to", "be able to", "was able to", "will be able to"],
        options: [["isn't able to", "aren't able to", "wasn't able to", "won't be able to"], ["be able to", "able to", "been able to", "being able to"], ["was able to", "is able to", "are able to", "will be able to"], ["will be able to", "am able to", "was able to", "were able to"]]
    },
    {
        rule: "Be able to", category: "modals", level: "middle",
        meaning: "'Be able to' is often preferred over 'can' when combined with other modals or in perfect tenses.",
        sentences: ["You should {blank} complete this by Monday.", "She might {blank} join us later.", "Having {blank} travel changed her life.", "I would like to {blank} play guitar."],
        answers: ["be able to", "be able to", "been able to", "be able to"],
        options: [["be able to", "can", "able to", "been able to"], ["be able to", "can", "able to", "been able to"], ["been able to", "be able to", "able to", "being able to"], ["be able to", "can", "able to", "been able to"]]
    },
    {
        rule: "Be able to", category: "modals", level: "middle",
        meaning: "'Was/were able to' often implies success in a specific past situation, while 'could' refers to general past ability.",
        sentences: ["Fortunately, the firefighters {blank} rescue everyone.", "After hours of trying, we {blank} fix the engine.", "She {blank} pass the test because she studied hard.", "Despite the fog, the pilot {blank} land safely."],
        answers: ["were able to", "were able to", "was able to", "was able to"],
        options: [["were able to", "could", "can", "are able to"], ["were able to", "could", "can", "are able to"], ["was able to", "could", "can", "is able to"], ["was able to", "could", "can", "is able to"]]
    },

    // ===== Present Continuous for Future =====
    {
        rule: "Present Continuous for Future", category: "tenses", level: "elementary",
        meaning: "Use the present continuous to talk about fixed future arrangements and plans.",
        sentences: ["I {blank} dinner with Sarah tonight.", "They {blank} to Paris next week.", "She {blank} the dentist tomorrow morning.", "We {blank} a party on Saturday."],
        answers: ["am having", "are flying", "is visiting", "are having"],
        options: [["am having", "have", "will have", "had"], ["are flying", "fly", "will fly", "flew"], ["is visiting", "visits", "will visit", "visited"], ["are having", "have", "will have", "had"]]
    },
    {
        rule: "Present Continuous for Future", category: "tenses", level: "elementary",
        meaning: "The present continuous for future is used when a definite time and arrangement have been made.",
        sentences: ["He {blank} his driving test next Monday.", "We {blank} our grandparents this weekend.", "She {blank} a new job next month.", "They {blank} married in June."],
        answers: ["is taking", "are visiting", "is starting", "are getting"],
        options: [["is taking", "takes", "will take", "took"], ["are visiting", "visit", "will visit", "visited"], ["is starting", "starts", "will start", "started"], ["are getting", "get", "will get", "got"]]
    },
    {
        rule: "Present Continuous for Future", category: "tenses", level: "elementary",
        meaning: "Use the present continuous for future plans that are already arranged or confirmed.",
        sentences: ["What {blank} you doing this evening?", "I {blank} the doctor at 3 o'clock.", "She {blank} to a conference tomorrow.", "We {blank} out for dinner tonight."],
        answers: ["are", "am seeing", "is going", "are eating"],
        options: [["are", "do", "will", "did"], ["am seeing", "see", "will see", "saw"], ["is going", "goes", "will go", "went"], ["are eating", "eat", "will eat", "ate"]]
    },
    {
        rule: "Present Continuous for Future", category: "tenses", level: "middle",
        meaning: "The present continuous for future implies a personal arrangement, unlike 'will' which can express decisions or predictions.",
        sentences: ["I {blank} my hair cut tomorrow.", "The team {blank} at 7 AM for the match.", "She {blank} her thesis next week.", "We {blank} the apartment at the end of the month."],
        answers: ["am getting", "are meeting", "is presenting", "are leaving"],
        options: [["am getting", "get", "will get", "got"], ["are meeting", "meet", "will meet", "met"], ["is presenting", "presents", "will present", "presented"], ["are leaving", "leave", "will leave", "left"]]
    },
    {
        rule: "Present Continuous for Future", category: "tenses", level: "middle",
        meaning: "Use present continuous for future when there is evidence of a plan, such as a ticket, reservation, or appointment.",
        sentences: ["He {blank} to London on the 9 o'clock train.", "I {blank} lunch with my boss — it's in my calendar.", "They {blank} into their new house on Friday.", "She {blank} a workshop this Saturday — she already registered."],
        answers: ["is travelling", "am having", "are moving", "is attending"],
        options: [["is travelling", "travels", "will travel", "travelled"], ["am having", "have", "will have", "had"], ["are moving", "move", "will move", "moved"], ["is attending", "attends", "will attend", "attended"]]
    },

    // ===== Fronting/Inversion =====
    {
        rule: "Fronting/Inversion", category: "word-order", level: "college",
        meaning: "After negative or restrictive adverbials at the start of a sentence, the subject and auxiliary verb are inverted.",
        sentences: ["Never {blank} such a beautiful sunset.", "Rarely {blank} on time.", "Not only {blank} the exam, but she got the highest score.", "Seldom {blank} so moved by a film."],
        answers: ["have I seen", "does he arrive", "did she pass", "have I been"],
        options: [["have I seen", "I have seen", "I saw", "did I see"], ["does he arrive", "he arrives", "he does arrive", "he arrived"], ["did she pass", "she passed", "she did pass", "has she passed"], ["have I been", "I have been", "I was", "was I"]]
    },
    {
        rule: "Fronting/Inversion", category: "word-order", level: "college",
        meaning: "Inversion occurs after negative expressions like 'hardly', 'scarcely', 'no sooner' placed at the beginning of a sentence.",
        sentences: ["Hardly {blank} when the phone rang.", "No sooner {blank} than it started raining.", "Scarcely {blank} the news when she fainted.", "At no time {blank} about the plan."],
        answers: ["had I sat down", "had we left", "had he heard", "were they told"],
        options: [["had I sat down", "I had sat down", "I sat down", "did I sit down"], ["had we left", "we had left", "we left", "did we leave"], ["had he heard", "he had heard", "he heard", "did he hear"], ["were they told", "they were told", "they told", "did they tell"]]
    },
    {
        rule: "Fronting/Inversion", category: "word-order", level: "college",
        meaning: "Inversion can also follow 'only + time expression' at the beginning of a sentence.",
        sentences: ["Only after the meeting {blank} the truth.", "Only when she left {blank} how much she meant to me.", "Only by working hard {blank} succeed.", "Only then {blank} the mistake."],
        answers: ["did I learn", "did I realize", "can you", "did he notice"],
        options: [["did I learn", "I learned", "I did learn", "have I learned"], ["did I realize", "I realized", "I did realize", "have I realized"], ["can you", "you can", "you could", "could you"], ["did he notice", "he noticed", "he did notice", "has he noticed"]]
    },
    {
        rule: "Fronting/Inversion", category: "word-order", level: "professional",
        meaning: "Inversion is used in formal or literary contexts with expressions like 'under no circumstances', 'in no way', 'on no account'.",
        sentences: ["Under no circumstances {blank} this building.", "In no way {blank} responsible for the accident.", "On no account {blank} the emergency exit.", "Not until midnight {blank} home."],
        answers: ["should you leave", "was she", "must you block", "did they arrive"],
        options: [["should you leave", "you should leave", "you leave", "do you leave"], ["was she", "she was", "she is", "is she"], ["must you block", "you must block", "you block", "do you block"], ["did they arrive", "they arrived", "they did arrive", "have they arrived"]]
    },
    {
        rule: "Fronting/Inversion", category: "word-order", level: "professional",
        meaning: "In formal English, 'so' and 'such' at the beginning of a clause trigger inversion for emphasis.",
        sentences: ["So beautiful {blank} that everyone stared.", "Such {blank} that we couldn't see anything.", "Little {blank} about the consequences.", "Nowhere {blank} a better restaurant."],
        answers: ["was she", "was the fog", "did they care", "will you find"],
        options: [["was she", "she was", "she is", "is she"], ["was the fog", "the fog was", "the fog is", "is the fog"], ["did they care", "they cared", "they did care", "have they cared"], ["will you find", "you will find", "you find", "do you find"]]
    },

    // ===== Zero Conditional =====
    {
        rule: "Zero Conditional", category: "conditionals", level: "elementary",
        meaning: "Use the zero conditional (if + present simple, present simple) for general truths and scientific facts.",
        sentences: ["If you heat water to 100°C, it {blank}.", "If it rains, the ground {blank} wet.", "If you mix red and blue, you {blank} purple.", "If you don't water plants, they {blank}."],
        answers: ["boils", "gets", "get", "die"],
        options: [["boils", "will boil", "boiled", "is boiling"], ["gets", "will get", "got", "is getting"], ["get", "will get", "got", "are getting"], ["die", "will die", "died", "are dying"]]
    },
    {
        rule: "Zero Conditional", category: "conditionals", level: "elementary",
        meaning: "The zero conditional describes things that are always true — cause and effect relationships.",
        sentences: ["If you touch fire, you {blank} burned.", "If the temperature drops below 0°C, water {blank}.", "If you press this button, the machine {blank}.", "If babies are hungry, they {blank}."],
        answers: ["get", "freezes", "starts", "cry"],
        options: [["get", "will get", "got", "are getting"], ["freezes", "will freeze", "froze", "is freezing"], ["starts", "will start", "started", "is starting"], ["cry", "will cry", "cried", "are crying"]]
    },
    {
        rule: "Zero Conditional", category: "conditionals", level: "elementary",
        meaning: "In zero conditionals, 'when' can often replace 'if' because the result is always true.",
        sentences: ["When the sun sets, it {blank} dark.", "When you exercise, your heart rate {blank}.", "When ice melts, it {blank} water.", "When you cut an onion, your eyes {blank}."],
        answers: ["gets", "increases", "becomes", "water"],
        options: [["gets", "will get", "got", "is getting"], ["increases", "will increase", "increased", "is increasing"], ["becomes", "will become", "became", "is becoming"], ["water", "will water", "watered", "are watering"]]
    },
    {
        rule: "Zero Conditional", category: "conditionals", level: "middle",
        meaning: "The zero conditional uses present simple in both clauses and states facts, habits, or instructions.",
        sentences: ["If you {blank} the homework, the teacher gets angry.", "Metal {blank} if you heat it.", "If the alarm goes off, everyone {blank} the building.", "If you {blank} enough sleep, you feel tired."],
        answers: ["don't do", "expands", "leaves", "don't get"],
        options: [["don't do", "won't do", "didn't do", "aren't doing"], ["expands", "will expand", "expanded", "is expanding"], ["leaves", "will leave", "left", "is leaving"], ["don't get", "won't get", "didn't get", "aren't getting"]]
    },
    {
        rule: "Zero Conditional", category: "conditionals", level: "middle",
        meaning: "Zero conditionals can use imperative forms in the main clause for instructions.",
        sentences: ["If you see a fire, {blank} 911.", "If the light turns red, {blank}.", "If you feel dizzy, {blank} down.", "If someone calls, {blank} a message."],
        answers: ["call", "stop", "sit", "take"],
        options: [["call", "calling", "calls", "called"], ["stop", "stopping", "stops", "stopped"], ["sit", "sitting", "sits", "sat"], ["take", "taking", "takes", "took"]]
    },

    // ===== Provided that / As long as / In case =====
    {
        rule: "Provided that / As long as / In case", category: "conditionals", level: "middle",
        meaning: "'Provided that' and 'as long as' mean 'only if'. 'In case' means 'because something might happen'.",
        sentences: ["You can go out {blank} you finish your homework.", "Take an umbrella {blank} it rains.", "I'll lend you the car {blank} you drive carefully.", "We'll have the picnic {blank} the weather is nice."],
        answers: ["as long as", "in case", "provided that", "as long as"],
        options: [["as long as", "in case", "unless", "although"], ["in case", "as long as", "provided that", "unless"], ["provided that", "in case", "unless", "although"], ["as long as", "in case", "unless", "although"]]
    },
    {
        rule: "Provided that / As long as / In case", category: "conditionals", level: "middle",
        meaning: "'In case' is used for precautions — doing something to prepare for a possible future event.",
        sentences: ["I'll take some water {blank} we get thirsty.", "Write it down {blank} you forget.", "She brought a map {blank} they got lost.", "Keep the receipt {blank} you need to return it."],
        answers: ["in case", "in case", "in case", "in case"],
        options: [["in case", "as long as", "provided that", "unless"], ["in case", "as long as", "provided that", "so that"], ["in case", "as long as", "provided that", "unless"], ["in case", "as long as", "provided that", "so that"]]
    },
    {
        rule: "Provided that / As long as / In case", category: "conditionals", level: "high",
        meaning: "'Provided that' is more formal than 'as long as' and is common in written and official contexts.",
        sentences: ["The event will proceed {blank} enough tickets are sold.", "You may use the equipment {blank} you follow the safety rules.", "The loan will be approved {blank} you meet the requirements.", "Employees may work remotely {blank} productivity is maintained."],
        answers: ["provided that", "as long as", "provided that", "as long as"],
        options: [["provided that", "in case", "unless", "although"], ["as long as", "in case", "unless", "although"], ["provided that", "in case", "unless", "although"], ["as long as", "in case", "unless", "although"]]
    },
    {
        rule: "Provided that / As long as / In case", category: "conditionals", level: "high",
        meaning: "'In case' is followed by a present tense for future meaning; it differs from 'if' because it implies preparation.",
        sentences: ["I'll leave my phone on {blank} you need to reach me.", "She always carries cash {blank} her card doesn't work.", "{blank} there is a fire, use the emergency exit.", "Take your passport {blank} they ask for ID."],
        answers: ["in case", "in case", "In case", "in case"],
        options: [["in case", "as long as", "provided that", "unless"], ["in case", "as long as", "provided that", "unless"], ["In case", "As long as", "Provided that", "Unless"], ["in case", "as long as", "provided that", "unless"]]
    },
    {
        rule: "Provided that / As long as / In case", category: "conditionals", level: "high",
        meaning: "'As long as' expresses a condition that must be met; 'provided that' adds a formal tone to the same meaning.",
        sentences: ["You can borrow it {blank} you return it by Monday.", "The contract is valid {blank} both parties sign.", "I don't mind waiting {blank} it's not too long.", "{blank} you agree to the terms, we can proceed."],
        answers: ["as long as", "provided that", "as long as", "Provided that"],
        options: [["as long as", "in case", "unless", "although"], ["provided that", "in case", "unless", "although"], ["as long as", "in case", "unless", "although"], ["Provided that", "In case", "Unless", "Although"]]
    },

    // ===== Reported Commands =====
    {
        rule: "Reported Commands", category: "reported-speech", level: "middle",
        meaning: "Reported commands use 'told + object + (not) to + infinitive'.",
        sentences: ["The teacher told the students {blank} quiet.", "Mum told me {blank} my room.", "The doctor told him {blank} smoking.", "She told the children {blank} outside."],
        answers: ["to be", "to clean", "to stop", "not to play"],
        options: [["to be", "be", "being", "been"], ["to clean", "clean", "cleaning", "cleaned"], ["to stop", "stop", "stopping", "stopped"], ["not to play", "to not play", "don't play", "not play"]]
    },
    {
        rule: "Reported Commands", category: "reported-speech", level: "middle",
        meaning: "Use 'asked + object + (not) to + infinitive' to report polite requests.",
        sentences: ["He asked me {blank} him with the project.", "She asked us {blank} so much noise.", "The librarian asked them {blank} quietly.", "I asked her {blank} the door."],
        answers: ["to help", "not to make", "to speak", "to close"],
        options: [["to help", "help", "helping", "helped"], ["not to make", "to not make", "don't make", "not make"], ["to speak", "speak", "speaking", "spoken"], ["to close", "close", "closing", "closed"]]
    },
    {
        rule: "Reported Commands", category: "reported-speech", level: "middle",
        meaning: "Reported commands use reporting verbs like 'told', 'ordered', 'asked', 'warned', 'advised' followed by object + to-infinitive.",
        sentences: ["The officer ordered the driver {blank} the car.", "The coach warned the players {blank} the rules.", "My parents advised me {blank} harder.", "The manager instructed the staff {blank} uniforms."],
        answers: ["to stop", "not to break", "to study", "to wear"],
        options: [["to stop", "stop", "stopping", "stopped"], ["not to break", "to not break", "don't break", "not break"], ["to study", "study", "studying", "studied"], ["to wear", "wear", "wearing", "worn"]]
    },
    {
        rule: "Reported Commands", category: "reported-speech", level: "high",
        meaning: "Different reporting verbs convey different levels of authority: 'ordered' is stronger than 'asked', 'warned' implies danger.",
        sentences: ["The captain ordered the crew {blank} the ship.", "She begged her friend {blank} the secret.", "The sign warned visitors {blank} the animals.", "He reminded me {blank} the keys."],
        answers: ["to abandon", "not to tell", "not to feed", "to bring"],
        options: [["to abandon", "abandon", "abandoning", "abandoned"], ["not to tell", "to not tell", "don't tell", "not tell"], ["not to feed", "to not feed", "don't feed", "not feed"], ["to bring", "bring", "bringing", "brought"]]
    },
    {
        rule: "Reported Commands", category: "reported-speech", level: "high",
        meaning: "When reporting commands, the tense of the reporting verb changes but the infinitive stays the same.",
        sentences: ["The guide urged tourists {blank} plenty of water.", "She encouraged him {blank} for the competition.", "The teacher forbade the students {blank} during the exam.", "He persuaded her {blank} the job offer."],
        answers: ["to carry", "to apply", "to talk", "to accept"],
        options: [["to carry", "carry", "carrying", "carried"], ["to apply", "apply", "applying", "applied"], ["to talk", "talk", "talking", "talked"], ["to accept", "accept", "accepting", "accepted"]]
    },

    // ===== Reciprocal Pronouns =====
    {
        rule: "Reciprocal Pronouns", category: "pronouns", level: "elementary",
        meaning: "'Each other' and 'one another' are reciprocal pronouns used when two or more people do the same thing to the other.",
        sentences: ["Tom and Sarah love {blank}.", "The two teams congratulated {blank}.", "We should help {blank}.", "The twins look like {blank}."],
        answers: ["each other", "each other", "each other", "each other"],
        options: [["each other", "themselves", "ourselves", "one another"], ["each other", "themselves", "ourselves", "one another"], ["each other", "ourselves", "themselves", "one another"], ["each other", "themselves", "ourselves", "one another"]]
    },
    {
        rule: "Reciprocal Pronouns", category: "pronouns", level: "elementary",
        meaning: "'Each other' is typically used for two people; 'one another' is used for more than two, though they are often interchangeable.",
        sentences: ["All the students in the class respect {blank}.", "My sister and I write to {blank} every week.", "The members of the team support {blank}.", "The couple smiled at {blank}."],
        answers: ["one another", "each other", "one another", "each other"],
        options: [["one another", "each other", "themselves", "ourselves"], ["each other", "one another", "themselves", "ourselves"], ["one another", "each other", "themselves", "ourselves"], ["each other", "one another", "themselves", "ourselves"]]
    },
    {
        rule: "Reciprocal Pronouns", category: "pronouns", level: "elementary",
        meaning: "Reciprocal pronouns show that an action is done mutually between people.",
        sentences: ["The children were talking to {blank}.", "Do you and your neighbor wave at {blank}?", "The dogs were chasing {blank} in the park.", "We always buy {blank} birthday gifts."],
        answers: ["each other", "each other", "each other", "each other"],
        options: [["each other", "themselves", "ourselves", "one another"], ["each other", "yourselves", "themselves", "one another"], ["each other", "themselves", "ourselves", "one another"], ["each other", "ourselves", "themselves", "one another"]]
    },
    {
        rule: "Reciprocal Pronouns", category: "pronouns", level: "middle",
        meaning: "Reciprocal pronouns can be used with possessives: 'each other's' and 'one another's'.",
        sentences: ["They often borrow {blank} books.", "The colleagues respect {blank} opinions.", "We read {blank} essays and gave feedback.", "The neighbors look after {blank} houses when on holiday."],
        answers: ["each other's", "one another's", "each other's", "each other's"],
        options: [["each other's", "their", "themselves'", "one another's"], ["one another's", "their", "themselves'", "each other's"], ["each other's", "our", "ourselves'", "one another's"], ["each other's", "their", "themselves'", "one another's"]]
    },
    {
        rule: "Reciprocal Pronouns", category: "pronouns", level: "middle",
        meaning: "Do not confuse reciprocal pronouns (each other) with reflexive pronouns (themselves). Reciprocal = mutual action; reflexive = action on oneself.",
        sentences: ["They introduced {blank} to the audience.", "They introduced {blank} at the conference.", "The players blamed {blank} for the loss.", "The players blamed {blank} for poor performance."],
        answers: ["themselves", "each other", "each other", "themselves"],
        options: [["themselves", "each other", "one another", "them"], ["each other", "themselves", "one another", "them"], ["each other", "themselves", "one another", "them"], ["themselves", "each other", "one another", "them"]]
    },

    // ===== Indefinite Pronouns =====
    {
        rule: "Indefinite Pronouns", category: "pronouns", level: "elementary",
        meaning: "Indefinite pronouns (someone, anyone, everyone, no one, something, anything, everything, nothing) refer to non-specific people or things.",
        sentences: ["{blank} left their bag in the classroom.", "Is {blank} home?", "I have {blank} to tell you.", "{blank} is perfect."],
        answers: ["Someone", "anyone", "something", "Nobody"],
        options: [["Someone", "Anyone", "Everyone", "No one"], ["anyone", "someone", "everyone", "no one"], ["something", "anything", "everything", "nothing"], ["Nobody", "Somebody", "Anybody", "Everybody"]]
    },
    {
        rule: "Indefinite Pronouns", category: "pronouns", level: "elementary",
        meaning: "Use 'some-' words in positive sentences and offers; use 'any-' words in questions and negatives.",
        sentences: ["There is {blank} at the door.", "I don't know {blank} here.", "Would you like {blank} to drink?", "She didn't say {blank}."],
        answers: ["someone", "anyone", "something", "anything"],
        options: [["someone", "anyone", "no one", "everyone"], ["anyone", "someone", "no one", "everyone"], ["something", "anything", "nothing", "everything"], ["anything", "something", "nothing", "everything"]]
    },
    {
        rule: "Indefinite Pronouns", category: "pronouns", level: "elementary",
        meaning: "Indefinite pronouns take singular verbs even when they refer to multiple people.",
        sentences: ["Everyone {blank} ready for the trip.", "Something {blank} wrong with the car.", "Nobody {blank} the answer.", "Everything {blank} fine."],
        answers: ["is", "is", "knows", "is"],
        options: [["is", "are", "were", "been"], ["is", "are", "were", "been"], ["knows", "know", "knew", "known"], ["is", "are", "were", "been"]]
    },
    {
        rule: "Indefinite Pronouns", category: "pronouns", level: "middle",
        meaning: "'Every-' pronouns refer to all members of a group. 'No-' pronouns mean 'not any'.",
        sentences: ["{blank} enjoyed the concert.", "There is {blank} we can do about it.", "{blank} was closed on the holiday.", "{blank} volunteered to help, so the teacher was disappointed."],
        answers: ["Everyone", "nothing", "Everything", "No one"],
        options: [["Everyone", "Someone", "Anyone", "No one"], ["nothing", "something", "anything", "everything"], ["Everything", "Something", "Anything", "Nothing"], ["No one", "Someone", "Anyone", "Everyone"]]
    },
    {
        rule: "Indefinite Pronouns", category: "pronouns", level: "middle",
        meaning: "Indefinite pronouns can be modified by adjectives that come after the pronoun.",
        sentences: ["Is there {blank} interesting on TV tonight?", "I need {blank} strong to carry this box.", "She said {blank} important during the meeting.", "There's {blank} wrong with being cautious."],
        answers: ["anything", "someone", "something", "nothing"],
        options: [["anything", "something", "nothing", "everything"], ["someone", "anyone", "no one", "everyone"], ["something", "anything", "nothing", "everything"], ["nothing", "something", "anything", "everything"]]
    },

    // ===== Participle Clauses =====
    {
        rule: "Participle Clauses", category: "word-order", level: "high",
        meaning: "Present participle clauses (-ing) can replace adverbial clauses to show reason, time, or result.",
        sentences: ["{blank} tired, she went to bed early.", "{blank} the door, he noticed a package on the step.", "{blank} no money, we stayed home.", "{blank} loudly, the baby woke the whole house."],
        answers: ["Feeling", "Opening", "Having", "Crying"],
        options: [["Feeling", "Felt", "To feel", "Feel"], ["Opening", "Opened", "To open", "Open"], ["Having", "Had", "To have", "Have"], ["Crying", "Cried", "To cry", "Cry"]]
    },
    {
        rule: "Participle Clauses", category: "word-order", level: "high",
        meaning: "Past participle clauses imply passive meaning and can replace passive relative or adverbial clauses.",
        sentences: ["{blank} in 1990, the building is now a museum.", "{blank} of the danger, they turned back.", "{blank} by her success, he worked even harder.", "The vase, {blank} during the move, was irreplaceable."],
        answers: ["Built", "Warned", "Inspired", "broken"],
        options: [["Built", "Building", "To build", "Build"], ["Warned", "Warning", "To warn", "Warn"], ["Inspired", "Inspiring", "To inspire", "Inspire"], ["broken", "breaking", "to break", "break"]]
    },
    {
        rule: "Participle Clauses", category: "word-order", level: "high",
        meaning: "Perfect participle clauses (having + past participle) show that one action was completed before another.",
        sentences: ["{blank} finished the report, she submitted it.", "{blank} lived abroad, he understood different cultures.", "{blank} eaten lunch, they went for a walk.", "{blank} lost his keys, he couldn't get in."],
        answers: ["Having", "Having", "Having", "Having"],
        options: [["Having", "Have", "Had", "Has"], ["Having", "Have", "Had", "Has"], ["Having", "Have", "Had", "Has"], ["Having", "Have", "Had", "Has"]]
    },
    {
        rule: "Participle Clauses", category: "word-order", level: "college",
        meaning: "Participle clauses are common in formal writing and reduce clause length while maintaining meaning.",
        sentences: ["The report, {blank} last week, contained errors.", "{blank} carefully, the instructions are easy to follow.", "The passengers, {blank} for hours, grew impatient.", "{blank} from above, the city looks tiny."],
        answers: ["published", "Read", "waiting", "Seen"],
        options: [["published", "publishing", "to publish", "publish"], ["Read", "Reading", "To read", "Reads"], ["waiting", "waited", "to wait", "wait"], ["Seen", "Seeing", "To see", "See"]]
    },
    {
        rule: "Participle Clauses", category: "word-order", level: "college",
        meaning: "The subject of the participle clause must be the same as the subject of the main clause to avoid dangling modifiers.",
        sentences: ["{blank} down the street, I saw an old friend.", "{blank} in France, she speaks fluent French.", "{blank} by heavy rain, the match was postponed.", "The children, {blank} with excitement, ran to the playground."],
        answers: ["Walking", "Raised", "Delayed", "filled"],
        options: [["Walking", "Walked", "To walk", "Walk"], ["Raised", "Raising", "To raise", "Raise"], ["Delayed", "Delaying", "To delay", "Delay"], ["filled", "filling", "to fill", "fill"]]
    },

    // ===== Subjunctive =====
    {
        rule: "Subjunctive", category: "modals", level: "college",
        meaning: "The subjunctive uses the base form of the verb after verbs of demand, suggestion, or recommendation (e.g., suggest, recommend, insist, demand).",
        sentences: ["The doctor recommended that she {blank} more rest.", "I suggest that he {blank} the meeting.", "They demanded that the company {blank} them.", "It is essential that every student {blank} the exam."],
        answers: ["get", "attend", "reimburse", "take"],
        options: [["get", "gets", "got", "getting"], ["attend", "attends", "attended", "attending"], ["reimburse", "reimburses", "reimbursed", "reimbursing"], ["take", "takes", "took", "taking"]]
    },
    {
        rule: "Subjunctive", category: "modals", level: "college",
        meaning: "The subjunctive 'were' is used in hypothetical or unreal situations, regardless of the subject.",
        sentences: ["If I {blank} you, I would apologize.", "She wishes she {blank} taller.", "He acts as if he {blank} the boss.", "I wish it {blank} sunny today."],
        answers: ["were", "were", "were", "were"],
        options: [["were", "was", "am", "is"], ["were", "was", "is", "be"], ["were", "was", "is", "be"], ["were", "was", "is", "be"]]
    },
    {
        rule: "Subjunctive", category: "modals", level: "college",
        meaning: "After 'it is important/necessary/vital that', the subjunctive base form is used.",
        sentences: ["It is important that she {blank} on time.", "It is necessary that he {blank} a visa.", "It is vital that the project {blank} completed.", "It is crucial that everyone {blank} the rules."],
        answers: ["arrive", "obtain", "be", "follow"],
        options: [["arrive", "arrives", "arrived", "arriving"], ["obtain", "obtains", "obtained", "obtaining"], ["be", "is", "was", "being"], ["follow", "follows", "followed", "following"]]
    },
    {
        rule: "Subjunctive", category: "modals", level: "professional",
        meaning: "The negative subjunctive uses 'not + base form' without 'do'.",
        sentences: ["The committee requested that he {blank} the information.", "I insist that she {blank} punished.", "They proposed that the meeting {blank} postponed.", "It is essential that this {blank} happen again."],
        answers: ["not disclose", "not be", "not be", "not"],
        options: [["not disclose", "doesn't disclose", "not discloses", "didn't disclose"], ["not be", "is not", "not is", "doesn't be"], ["not be", "is not", "not is", "doesn't be"], ["not", "doesn't", "not does", "didn't"]]
    },
    {
        rule: "Subjunctive", category: "modals", level: "professional",
        meaning: "The subjunctive is common in formal, legal, and academic English after specific verbs and expressions.",
        sentences: ["The board moved that the resolution {blank} adopted.", "The judge ordered that the defendant {blank} released.", "We propose that the amendment {blank} included.", "Regulations require that each applicant {blank} a background check."],
        answers: ["be", "be", "be", "undergo"],
        options: [["be", "is", "was", "being"], ["be", "is", "was", "being"], ["be", "is", "was", "being"], ["undergo", "undergoes", "underwent", "undergoing"]]
    },

    // ===== Ellipsis =====
    {
        rule: "Ellipsis", category: "word-order", level: "high",
        meaning: "Ellipsis means leaving out words that are understood from context to avoid repetition.",
        sentences: ["I can play the guitar, but my brother {blank}.", "She has been to Paris, but I {blank}.", "He wanted to come, but he wasn't able {blank}.", "Are you coming tonight? I hope {blank}."],
        answers: ["can't", "haven't", "to", "so"],
        options: [["can't", "doesn't", "isn't", "won't"], ["haven't", "didn't", "don't", "wasn't"], ["to", "so", "not", "it"], ["so", "to", "not", "it"]]
    },
    {
        rule: "Ellipsis", category: "word-order", level: "high",
        meaning: "After auxiliary verbs, the main verb can be omitted when it is understood from context.",
        sentences: ["She doesn't like coffee, but I {blank}.", "They haven't finished, but we {blank}.", "He won't help, but she {blank}.", "I can't swim, but my sister {blank}."],
        answers: ["do", "have", "will", "can"],
        options: [["do", "like", "am", "does"], ["have", "did", "are", "do"], ["will", "does", "is", "has"], ["can", "does", "is", "has"]]
    },
    {
        rule: "Ellipsis", category: "word-order", level: "high",
        meaning: "'So' and 'not' can replace entire clauses after verbs like think, hope, believe, expect, and be afraid.",
        sentences: ["Is it going to rain? I think {blank}.", "Will they win? I hope {blank}.", "Is the store open? I believe {blank}.", "Are we late? I'm afraid {blank}."],
        answers: ["so", "so", "so", "so"],
        options: [["so", "not", "it", "yes"], ["so", "not", "it", "yes"], ["so", "not", "it", "yes"], ["so", "not", "it", "yes"]]
    },
    {
        rule: "Ellipsis", category: "word-order", level: "college",
        meaning: "In comparative clauses, repeated elements are often omitted after 'than' or 'as'.",
        sentences: ["She speaks French better than I {blank}.", "He earns more than she {blank}.", "They work as hard as we {blank}.", "I arrived earlier than they {blank}."],
        answers: ["do", "does", "do", "did"],
        options: [["do", "speak", "am", "can"], ["does", "earns", "is", "can"], ["do", "work", "are", "can"], ["did", "arrived", "were", "had"]]
    },
    {
        rule: "Ellipsis", category: "word-order", level: "college",
        meaning: "In formal English, 'so' replaces a positive clause and 'not' replaces a negative clause after certain verbs.",
        sentences: ["Will the project be finished on time? I certainly hope {blank}.", "Did she pass the exam? It appears {blank}.", "Is he coming? It seems {blank}.", "Will it be cancelled? I hope {blank}."],
        answers: ["so", "so", "so", "not"],
        options: [["so", "not", "it", "yes"], ["so", "not", "it", "yes"], ["so", "not", "it", "yes"], ["not", "so", "it", "no"]]
    },

    // ===== Ought to / Had better =====
    {
        rule: "Ought to / Had better", category: "modals", level: "middle",
        meaning: "'Ought to' expresses moral obligation or advice, similar to 'should'. 'Had better' gives strong advice with a warning of consequences.",
        sentences: ["You {blank} apologize to her.", "We {blank} leave now, or we'll miss the train.", "He {blank} be more careful with money.", "You {blank} not be late again, or you'll be fired."],
        answers: ["ought to", "had better", "ought to", "had better"],
        options: [["ought to", "had better", "must", "would"], ["had better", "ought to", "must", "would"], ["ought to", "had better", "must", "would"], ["had better", "ought to", "must", "would"]]
    },
    {
        rule: "Ought to / Had better", category: "modals", level: "middle",
        meaning: "'Had better' (often contracted to 'd better') implies a negative consequence if the advice is not followed.",
        sentences: ["You {blank} study harder, or you'll fail.", "She {blank} see a doctor about that cough.", "We {blank} book tickets in advance.", "I {blank} go home before it gets dark."],
        answers: ["'d better", "ought to", "had better", "'d better"],
        options: [["'d better", "ought to", "should", "must"], ["ought to", "had better", "should", "must"], ["had better", "ought to", "should", "must"], ["'d better", "ought to", "should", "must"]]
    },
    {
        rule: "Ought to / Had better", category: "modals", level: "middle",
        meaning: "'Ought to' can express expectation or probability, similar to 'should' when making predictions.",
        sentences: ["The train {blank} arrive at 6.", "It {blank} be a nice day tomorrow.", "She {blank} pass — she studied very hard.", "The letter {blank} arrive by Friday."],
        answers: ["ought to", "ought to", "ought to", "ought to"],
        options: [["ought to", "had better", "must", "would"], ["ought to", "had better", "must", "would"], ["ought to", "had better", "must", "would"], ["ought to", "had better", "must", "would"]]
    },
    {
        rule: "Ought to / Had better", category: "modals", level: "high",
        meaning: "The negative forms are 'ought not to' (oughtn't to) and 'had better not' ('d better not).",
        sentences: ["You {blank} eat so much junk food.", "We {blank} mention this to anyone.", "She {blank} drive in this weather.", "They {blank} ignore the warning."],
        answers: ["ought not to", "had better not", "had better not", "ought not to"],
        options: [["ought not to", "had better not", "must not", "would not"], ["had better not", "ought not to", "must not", "would not"], ["had better not", "ought not to", "must not", "would not"], ["ought not to", "had better not", "must not", "would not"]]
    },
    {
        rule: "Ought to / Had better", category: "modals", level: "high",
        meaning: "'Had better' is stronger than 'should' and 'ought to'. It is used for specific situations, not general advice.",
        sentences: ["You {blank} hurry — the bus is leaving in two minutes!", "The sky is dark. We {blank} take an umbrella.", "She {blank} lock the door at night for safety.", "I {blank} finish this report before the deadline."],
        answers: ["had better", "had better", "ought to", "had better"],
        options: [["had better", "ought to", "should", "must"], ["had better", "ought to", "should", "must"], ["ought to", "had better", "should", "must"], ["had better", "ought to", "should", "must"]]
    },

    // ===== Future Perfect Continuous =====
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "high",
        meaning: "The future perfect continuous (will have been + -ing) describes an action that will have been in progress for a duration of time before a specific point in the future.",
        sentences: ["By next year, I {blank} here for ten years.", "By 6 PM, she {blank} for three hours.", "By the time you arrive, we {blank} for an hour.", "Next month, they {blank} on this project for a year."],
        answers: ["will have been working", "will have been studying", "will have been waiting", "will have been working"],
        options: [["will have been working", "will work", "will be working", "have been working"], ["will have been studying", "will study", "will be studying", "has been studying"], ["will have been waiting", "will wait", "will be waiting", "have been waiting"], ["will have been working", "will work", "will be working", "have been working"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "high",
        meaning: "Use the future perfect continuous to emphasize the duration of an activity up to a future point.",
        sentences: ["By December, he {blank} English for five years.", "By the time the concert starts, we {blank} in line for two hours.", "She {blank} at the university for 20 years by next spring.", "By midnight, I {blank} this book for six hours."],
        answers: ["will have been learning", "will have been standing", "will have been teaching", "will have been reading"],
        options: [["will have been learning", "will learn", "will be learning", "has been learning"], ["will have been standing", "will stand", "will be standing", "have been standing"], ["will have been teaching", "will teach", "will be teaching", "has been teaching"], ["will have been reading", "will read", "will be reading", "has been reading"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "high",
        meaning: "The future perfect continuous often uses 'by' or 'by the time' to indicate the future reference point.",
        sentences: ["By next week, they {blank} for a month.", "By the time he retires, he {blank} for 40 years.", "By tomorrow evening, I {blank} all day.", "By Friday, she {blank} on the essay for a week."],
        answers: ["will have been travelling", "will have been working", "will have been cooking", "will have been working"],
        options: [["will have been travelling", "will travel", "will be travelling", "have been travelling"], ["will have been working", "will work", "will be working", "has been working"], ["will have been cooking", "will cook", "will be cooking", "have been cooking"], ["will have been working", "will work", "will be working", "has been working"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "college",
        meaning: "The future perfect continuous cannot be used with stative verbs; use the future perfect simple instead.",
        sentences: ["By June, I {blank} this car for five years.", "By next month, she {blank} at the company for a decade.", "By graduation, he {blank} over 200 books.", "By tonight, they {blank} since 6 AM."],
        answers: ["will have had", "will have been working", "will have read", "will have been driving"],
        options: [["will have had", "will have been having", "will be having", "have had"], ["will have been working", "will have worked", "will be working", "has been working"], ["will have read", "will have been reading", "will be reading", "has read"], ["will have been driving", "will have driven", "will be driving", "have been driving"]]
    },
    {
        rule: "Future Perfect Continuous", category: "tenses", level: "college",
        meaning: "Distinguish between future perfect (completed action) and future perfect continuous (ongoing action with emphasis on duration).",
        sentences: ["By 5 PM, I {blank} this report. (completion)", "By 5 PM, I {blank} on this report for four hours. (duration)", "By next year, she {blank} three marathons. (completion)", "By next year, she {blank} for two years. (duration)"],
        answers: ["will have finished", "will have been working", "will have run", "will have been training"],
        options: [["will have finished", "will have been finishing", "will finish", "will be finishing"], ["will have been working", "will have worked", "will work", "will be working"], ["will have run", "will have been running", "will run", "will be running"], ["will have been training", "will have trained", "will train", "will be training"]]
    }
];

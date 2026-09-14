/* Lingua Forge Academy — Italian section (window.IT)
   Content grounded in real series: Nuovissimo Progetto Italiano (Edilingua A1–C2),
   Nuovo Espresso (Alma Edizioni), Chiaro!, Via del Corso, Al dente, plus the
   classic grammar practice books and popular YouTube/site resources. All content
   here is our own teaching material organised in the same proven sequence. */
window.IT = {
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  /* ---- coursebook series (flip format) ---- */
  books: [
    {
      title: 'Nuovo Espresso', subtitle: 'Corso di lingua italiana · Principianti',
      band: ['A1', 'A2'], c1: '#2e9e4f', c2: '#146b34', age: 'Adulti',
      series: 'Nuovo Espresso (Alma Edizioni) — coursebook A1–C2',
      intro: 'Everyday Italian: greetings, family, city, food, travel and daily routines. Six thematic units with two lessons each.',
      units: [
        { title: 'Saluti e presentazioni', bigQ: 'Come ti chiami e da dove vieni?', lessons: [
          { stage: 'Percorso 1', title: 'Ciao! Come stai?', aim: 'Salutare, presentarsi e chiedere come sta una persona.', vocab: [0, 1, 3, 6, 7, 8], grammar: { id: 'articoli', lv: 'A1' }, reading: 0, listen: 0, speaking: 'Saluta un compagno e presentati: nome, città e un fatto personale.', writing: 'Scrivi 4 frasi per presentarti (nome, città, lingua, hobby).' },
          { stage: 'Percorso 2', title: 'La famiglia', aim: 'Parlare della famiglia con gli aggettivi possessivi.', vocab: [10, 11, 12, 13, 14, 15], grammar: { id: 'possessivi', lv: 'A1' }, reading: 1, listen: 1, speaking: 'Descrivi la tua famiglia: chi è, dove vive, cosa fa.', writing: 'Descrivi una persona della tua famiglia in 5 frasi.' } ] },
        { title: 'A casa e in città', bigQ: 'Dove abiti e cosa c\u2019è nella tua città?', lessons: [
          { stage: 'Percorso 1', title: 'La mia casa', aim: 'Descrivere la casa e i mobili con c\u2019è / ci sono.', vocab: [16, 17, 18, 19, 20, 21], grammar: { id: 'ce-ci-sono', lv: 'A1' }, reading: 2, listen: 2, speaking: 'Descrivi la tua casa in 5 frasi.', writing: 'Scrivi un annuncio per affittare la tua casa.' },
          { stage: 'Percorso 2', title: 'In giro per la città', aim: 'Chiedere e dare indicazioni in città.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'preposizioni', lv: 'A1' }, reading: 2, listen: 3, speaking: 'Chiedi e dai indicazioni per arrivare al mercato.', writing: 'Scrivi un messaggio con le indicazioni per la tua casa.' } ] },
        { title: 'Al ristorante', bigQ: 'Cosa mangi stasera?', lessons: [
          { stage: 'Percorso 1', title: 'La colazione italiana', aim: 'Parlare di cibo e ordini con il presente.', vocab: [22, 23, 24, 25, 26, 27], grammar: { id: 'presente', lv: 'A1' }, reading: 3, listen: 4, speaking: 'Ordina la colazione in un bar.', writing: 'Scrivi la lista della spesa per una settimana.' },
          { stage: 'Percorso 2', title: 'Al ristorante', aim: 'Ordinare un pasto e chiedere il conto.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'imperativo', lv: 'A2' }, reading: 3, listen: 4, speaking: 'Al ristorante: ordina, chiedi informazioni e il conto.', writing: 'Scrivi una recensione di un ristorante.' } ] },
        { title: 'In viaggio', bigQ: 'Come si viaggia in Italia?', lessons: [
          { stage: 'Percorso 1', title: 'Alla stazione', aim: 'Comprare biglietti e chiedere orari.', vocab: [12, 13, 14, 15, 16, 17], grammar: { id: 'futuro', lv: 'A2' }, reading: 4, listen: 5, speaking: 'Alla stazione: chiedi orari e compra un biglietto.', writing: 'Scrivi un programma per una giornata a Roma.' },
          { stage: 'Percorso 2', title: 'Al mare', aim: 'Raccontare una vacanza al passato prossimo.', vocab: [18, 19, 20, 21, 26, 27], grammar: { id: 'passato-prossimo', lv: 'A2' }, reading: 4, listen: 5, speaking: 'Racconta la tua ultima vacanza.', writing: 'Scrivi una cartolina dalla vacanza.' } ] },
        { title: 'Lavoro e studio', bigQ: 'Cosa fai nella vita?', lessons: [
          { stage: 'Percorso 1', title: 'Il mio lavoro', aim: 'Parlare del lavoro e dell\u2019orario.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'essere-avere', lv: 'A1' }, reading: 5, listen: 6, speaking: 'Intervista un compagno sul suo lavoro.', writing: 'Scrivi una breve presentazione del tuo lavoro.' },
          { stage: 'Percorso 2', title: 'Un nuovo lavoro', aim: 'Descrivere una giornata di lavoro all\u2019imperfetto.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'imperfetto', lv: 'A2' }, reading: 5, listen: 6, speaking: 'Descrivi la tua prima giornata di lavoro.', writing: 'Scrivi un racconto della tua giornata tipo.' } ] },
        { title: 'Tempo libero', bigQ: 'Cosa fai nel tempo libero?', lessons: [
          { stage: 'Percorso 1', title: 'Hobby e passioni', aim: 'Parlare di hobby con verbi riflessivi.', vocab: [12, 13, 14, 15, 16, 17], grammar: { id: 'presente', lv: 'A2' }, reading: 6, listen: 7, speaking: 'Parla del tuo hobby preferito.', writing: 'Scrivi un paragrafo sul tuo tempo libero.' },
          { stage: 'Percorso 2', title: 'Un fine settimana', aim: 'Proporre e organizzare un\u2019uscita.', vocab: [18, 19, 20, 21, 22, 23], grammar: { id: 'condizionale', lv: 'B1' }, reading: 6, listen: 7, speaking: 'Proponi un programma per il fine settimana.', writing: 'Scrivi un messaggio per invitare un amico.' } ] }
      ]
    },
    {
      title: 'Progetto Italiano', subtitle: 'Corso di lingua e civiltà · Intermedio',
      band: ['B1', 'B2'], c1: '#b02a2a', c2: '#7c1c1c', age: 'Adulti',
      series: 'Nuovissimo Progetto Italiano (Edilingua) — coursebook A1–C2',
      intro: 'Express yourself: study, work, health, society, technology and stories. Six thematic units, two lessons each, IELTS-style reading practice.',
      units: [
        { title: 'Studio e formazione', bigQ: 'Qual è il valore dello studio?', lessons: [
          { stage: 'Percorso 1', title: 'A scuola oggi', aim: 'Discutere di scuola e formazione al presente.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'presente', lv: 'B1' }, reading: 0, listen: 0, speaking: 'Discuti: l\u2019università serve sempre?', writing: 'Scrivi un paragrafo sulla tua esperienza di studio.' },
          { stage: 'Percorso 2', title: 'La classe di italiano', aim: 'Raccontare esperienze passate di studio.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'imperfetto', lv: 'B1' }, reading: 0, listen: 1, speaking: 'Racconta come hai imparato l\u2019italiano.', writing: 'Scrivi una lettera al tuo insegnante.' } ] },
        { title: 'Il mondo del lavoro', bigQ: 'Che cosa rende buono un lavoro?', lessons: [
          { stage: 'Percorso 1', title: 'Colloquio di lavoro', aim: 'Fare un colloquio con il condizionale.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'condizionale', lv: 'B1' }, reading: 1, listen: 2, speaking: 'Simula un colloquio di lavoro.', writing: 'Scrivi una lettera di motivazione.' },
          { stage: 'Percorso 2', title: 'Cambiare carriera', aim: 'Parlare di scelte passate e future.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'passato-prossimo', lv: 'B1' }, reading: 1, listen: 2, speaking: 'Discuti i pro e i contro di cambiare lavoro.', writing: 'Scrivi un CV breve e chiaro.' } ] },
        { title: 'Salute e benessere', bigQ: 'Come stiamo bene?', lessons: [
          { stage: 'Percorso 1', title: 'Dal medico', aim: 'Descrivere sintomi e consigli con l\u2019imperativo.', vocab: [12, 13, 14, 15, 16, 17], grammar: { id: 'imperativo', lv: 'B1' }, reading: 2, listen: 3, speaking: 'Dal medico: descrivi i tuoi sintomi.', writing: 'Scrivi consigli per una vita sana.' },
          { stage: 'Percorso 2', title: 'Mens sana', aim: 'Discutere di benessere con il congiuntivo.', vocab: [18, 19, 20, 21, 22, 23], grammar: { id: 'congiuntivo', lv: 'B1' }, reading: 2, listen: 3, speaking: 'Discuti: cosa rende felici le persone?', writing: 'Scrivi un articolo breve sul benessere.' } ] },
        { title: 'Società e ambiente', bigQ: 'Che mondo vogliamo?', lessons: [
          { stage: 'Percorso 1', title: 'La città ideale', aim: 'Proporre idee con il condizionale e il congiuntivo.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'condizionale', lv: 'B2' }, reading: 3, listen: 4, speaking: 'Progetta la città ideale in gruppo.', writing: 'Scrivi una proposta per la tua città.' },
          { stage: 'Percorso 2', title: 'Ambiente e futuro', aim: 'Parlare di ambiente al futuro e al condizionale.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'futuro', lv: 'B1' }, reading: 3, listen: 4, speaking: 'Discuti: cosa farà la tua città per l\u2019ambiente?', writing: 'Scrivi un discorso per la Giornata della Terra.' } ] },
        { title: 'Tecnologia e media', bigQ: 'La tecnologia ci libera o ci imprigiona?', lessons: [
          { stage: 'Percorso 1', title: 'Vita digitale', aim: 'Descrivere abitudini digitali con i pronomi.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'pronomi', lv: 'B1' }, reading: 4, listen: 5, speaking: 'Intervista un compagno sul suo uso del telefono.', writing: 'Scrivi un commento su un post.' },
          { stage: 'Percorso 2', title: 'Notizie e social', aim: 'Discutere notizie con il congiuntivo.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'congiuntivo', lv: 'B2' }, reading: 4, listen: 5, speaking: 'Discuti: i social sono buoni o cattivi?', writing: 'Scrivi un breve articolo di attualità.' } ] },
        { title: 'Storie e cinema', bigQ: 'Perché le storie ci affascinano?', lessons: [
          { stage: 'Percorso 1', title: 'Al cinema', aim: 'Raccontare trame con i tempi del passato.', vocab: [12, 13, 14, 15, 16, 17], grammar: { id: 'passato-prossimo', lv: 'B2' }, reading: 5, listen: 6, speaking: 'Racconta la trama del tuo film preferito.', writing: 'Scrivi una recensione di un film.' },
          { stage: 'Percorso 2', title: 'Il mio libro', aim: 'Discutere di lettura con il discorso indiretto.', vocab: [18, 19, 20, 21, 22, 23], grammar: { id: 'discorso-indiretto', lv: 'B2' }, reading: 5, listen: 6, speaking: 'Discuti il tuo libro preferito con un compagno.', writing: 'Scrivi un riassunto di un capitolo.' } ] }
      ]
    },
    {
      title: 'Padronanza', subtitle: 'Corso avanzato di lingua e cultura',
      band: ['C1', 'C2'], c1: '#7a3fb0', c2: '#4c2472', age: 'Adulti',
      series: 'Ispirato a Grammatica avanzata della lingua italiana (Alma Edizioni) e C1–C2 coursebooks',
      intro: 'Mastery: culture, economics, science, communication, emotions and debate. Six thematic units with two demanding lessons each.',
      units: [
        { title: 'Cultura e arte', bigQ: 'Che cos\u2019è la cultura?', lessons: [
          { stage: 'Percorso 1', title: 'Identità culturale', aim: 'Discutere di identità con il congiuntivo.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'congiuntivo', lv: 'C1' }, reading: 6, listen: 6, speaking: 'Discuti: cosa definisce la tua identità?', writing: 'Scrivi un saggio breve sull\u2019identità.' },
          { stage: 'Percorso 2', title: 'Arte e memoria', aim: 'Analizzare il passato con le strutture avanzate.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'periodo-ipotetico', lv: 'C1' }, reading: 6, listen: 6, speaking: 'Presenta un\u2019opera d\u2019arte che ami.', writing: 'Scrivi l\u2019analisi di un\u2019opera.' } ] },
        { title: 'Economia e attualità', bigQ: 'Come funziona il mondo moderno?', lessons: [
          { stage: 'Percorso 1', title: 'Globalizzazione', aim: 'Discutere economia con il periodo ipotetico.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'periodo-ipotetico', lv: 'C1' }, reading: 7, listen: 7, speaking: 'Dibattito: la globalizzazione è un bene?', writing: 'Scrivi un articolo di opinione.' },
          { stage: 'Percorso 2', title: 'Lavoro del futuro', aim: 'Esprimere ipotesi con il congiuntivo passato.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'congiuntivo', lv: 'C2' }, reading: 7, listen: 7, speaking: 'Discuti come sarà il lavoro tra 20 anni.', writing: 'Scrivi un testo argomentativo.' } ] },
        { title: 'Scienza e innovazione', bigQ: 'A chi appartiene la scienza?', lessons: [
          { stage: 'Percorso 1', title: 'Scoperte recenti', aim: 'Riferire scoperte con il passivo.', vocab: [12, 13, 14, 15, 16, 17], grammar: { id: 'passivo', lv: 'C1' }, reading: 0, listen: 0, speaking: 'Presenta una scoperta scientifica recente.', writing: 'Scrivi un riassunto di un articolo scientifico.' },
          { stage: 'Percorso 2', title: 'Etica e scienza', aim: 'Discutere etica con strutture impersonali.', vocab: [18, 19, 20, 21, 22, 23], grammar: { id: 'passivo', lv: 'C2' }, reading: 0, listen: 0, speaking: 'Dibattito: tutto ciò che è possibile è giusto?', writing: 'Scrivi un saggio sull\u2019etica della scienza.' } ] },
        { title: 'Lingua e comunicazione', bigQ: 'Cosa significa comunicare?', lessons: [
          { stage: 'Percorso 1', title: 'Potere delle parole', aim: 'Analizzare la comunicazione con il discorso indiretto.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'discorso-indiretto', lv: 'C1' }, reading: 1, listen: 1, speaking: 'Discuti: le parole possono cambiare il mondo?', writing: 'Scrivi un discorso retorico.' },
          { stage: 'Percorso 2', title: 'L\u2019arte di convincere', aim: 'Usare la persuasione con sfumature lessicali.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'discorso-indiretto', lv: 'C2' }, reading: 1, listen: 1, speaking: 'Convinci un compagno di una tua idea.', writing: 'Scrivi un discorso persuasivo.' } ] },
        { title: 'Emozioni e relazioni', bigQ: 'Come parliamo dei sentimenti?', lessons: [
          { stage: 'Percorso 1', title: 'Lessico delle emozioni', aim: 'Descrivere emozioni con precisione lessicale.', vocab: [12, 13, 14, 15, 16, 17], grammar: { id: 'congiuntivo', lv: 'C1' }, reading: 2, listen: 2, speaking: 'Racconta un momento emotivo importante.', writing: 'Scrivi un racconto personale.' },
          { stage: 'Percorso 2', title: 'Relazioni umane', aim: 'Discutere relazioni con il periodo ipotetico.', vocab: [18, 19, 20, 21, 22, 23], grammar: { id: 'periodo-ipotetico', lv: 'C2' }, reading: 2, listen: 2, speaking: 'Discuti: cosa rende forte una relazione?', writing: 'Scrivi una lettera a un amico.' } ] },
        { title: 'Prospettive e dibattito', bigQ: 'Qual è il futuro dell\u2019umanità?', lessons: [
          { stage: 'Percorso 1', title: 'Futuro e ipotesi', aim: 'Costruire ipotesi complesse in italiano.', vocab: [0, 1, 2, 3, 4, 5], grammar: { id: 'periodo-ipotetico', lv: 'C1' }, reading: 3, listen: 3, speaking: 'Dibattito: cosa aspettarsi dal futuro?', writing: 'Scrivi un saggio speculativo.' },
          { stage: 'Percorso 2', title: 'Il mondo che vogliamo', aim: 'Sintetizzare e argomentare al livello C2.', vocab: [6, 7, 8, 9, 10, 11], grammar: { id: 'congiuntivo', lv: 'C2' }, reading: 3, listen: 3, speaking: 'Sintesi finale: progetta un futuro ideale.', writing: 'Scrivi un discorso finale di sintesi.' } ] }
      ]
    }
  ],
  /* ---- grammar: the classic teaching sequence for Italian ---- */
  grammar: [
    { id: 'articoli', title: 'Articoli determinativi e indeterminativi', part: 'A', range: ['A1', 'A2'], levels: {
      A1: { quick: 'The article agrees with the noun: il/lo/la/l\u2019 (the), un/uno/una (a/an).', more: 'Italian has two sets of articles. Determinativi (il, lo, la, l\u2019, i, gli, le) refer to something specific: il libro che vedi. Indeterminativi (un, uno, una) introduce something new: c\u2019è un libro sul tavolo. Use lo before z, s+consonant, gn, ps: lo zaino, lo studente. Use l\u2019 before a vowel: l\u2019amico. Remember that nouns are masculine (il) or feminine (la), and the article reveals the gender.', form: 'il / lo / la / l\u2019 / i / gli / le  ·  un / uno / una', use: 'Usiamo gli articoli per indicare persone, cose o concetti specifici o nuovi. (We use articles for specific or new people, things and ideas.)', examples: ['il gatto e la casa (the cat and the house)', 'uno zaino e un libro (a backpack and a book)', 'l\u2019amica di Anna (Anna\u2019s friend)'], error: 'Lo studente, NOT il studente — use lo before s+consonant.' },
      A2: { quick: 'Articoli articolati: preposizione + articolo form one word (del, alla, nello…).', more: 'When a simple preposition (di, a, da, in, con, su) meets an article, they fuse: di + il = del, a + la = alla, in + lo = nello, su + gli = sugli. These are essential for place and origin: vengo da + la = vengo dalla città. Only con can stay separate (con il or col). Practice the full table: del, dello, della, dei, degli, delle; al, allo, alla, ai, agli, alle; dal…; nel…; sul…', form: 'di+il=del · a+il=al · da+il=dal · in+il=nel · su+il=sul (ecc.)', use: 'Le preposizioni articolate indicano origine, luogo, tempo e mezzo. (Articulated prepositions show origin, place, time and means.)', examples: ['vado al mare (I go to the sea)', 'vengo dalla Francia (I come from France)', 'il libro è nello zaino (the book is in the backpack)'], error: 'Vado a il mare is wrong — always write al mare.' }
    } },
    { id: 'nomi', title: 'Sostantivi: genere e numero', part: 'A', range: ['A1', 'A2'], levels: {
      A1: { quick: 'Nouns are masculine (-o) or feminine (-a); the ending usually changes in the plural (-i / -e).', more: 'Most Italian nouns end in -o (masculine) or -a (feminine): ragazzo → ragazzi, ragazza → ragazze. Nouns in -e can be either gender: il padre, la madre; plural -i. Words ending in -zione, -tà, -tù are almost always feminine: la lezione, la città, la virtù. Gender is a property of the word, not the meaning — you learn it with the article.', form: '-o → -i (m.) · -a → -e (f.) · -e → -i (m./f.)', use: 'Il genere e il numero dei nomi si vedono dalle desinenze. (Gender and number show in the endings.)', examples: ['il libro, i libri (book, books)', 'la casa, le case (house, houses)', 'il padre, i padri (father, fathers)'], error: 'Le citta → le città: words in -à keep the accent and never change.' },
      A2: { quick: 'Irregular plurals: -co/-go → -chi/-ghi or -ci/-gi; words in -cia/-gia lose the i (la spiaggia → le spiagge).', more: 'Plurals of nouns in -co and -go depend on stress: amico → amici (light) but cuoco → cuochi (heavy). Words ending in -cia/-gia drop the i when the preceding letter is a consonant: la spiaggia → le spiagge, but la camicia → le camicie. Invariable nouns (città, film, caffè, re) stay the same. Learn these patterns through examples rather than rules.', form: '-co/-go → -ci/-ghi or -chi/-ghi · -cia/-gia → -ce/-ge', use: 'Molti plurali sono irregolari e vanno imparati con la pratica. (Many plurals are irregular and are learned through practice.)', examples: ['l\u2019amico, gli amici (friend, friends)', 'le spiagge del sud (the beaches of the south)', 'due caffè, un film (two coffees, a film)'], error: 'le camicie, NOT le camice — the i stays after a vowel.' }
    } },
    { id: 'essere-avere', title: 'Essere e avere', part: 'A', range: ['A1'], levels: {
      A1: { quick: 'Essere = to be, avere = to have — the two verbs that unlock everything else.', more: 'Essere (io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono) is used for identity, origin, description and profession: io sono Anna, sono di Baku, sono insegnante. Avere (io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno) expresses possession, age, hunger and thirst: ho 20 anni, ho fame. Both are irregular and are also the auxiliaries for compound tenses.', form: 'essere: sono, sei, è, siamo, siete, sono · avere: ho, hai, ha, abbiamo, avete, hanno', use: 'Usiamo essere per identità e descrizioni, avere per possesso, età e sensazioni. (We use essere for identity, avere for possession, age and feelings.)', examples: ['Sono Anna e sono di Baku. (I\u2019m Anna and I\u2019m from Baku.)', 'Ho 20 anni e ho fame. (I\u2019m 20 and I\u2019m hungry.)', 'Mia sorella è molto intelligente. (My sister is very intelligent.)'], error: 'Ho 20 anni, NOT sono 20 anni — age uses avere.' }
    } },
    { id: 'presente', title: 'Presente indicativo', part: 'A', range: ['A1', 'A2', 'B1'], levels: {
      A1: { quick: 'Three conjugations: -are (parlare), -ere (vedere), -ire (dormire): io parlo, tu parli…', more: 'The present works for habits, current actions and general truths. Pattern: -are → parlo, parli, parla, parliamo, parlate, parlano; -ere → vedo, vedi, vede…; -ire → dormo, dormi, dorme… (some -ire verbs add -isc-: capisco, capisci, capisce). There are important irregulars: andare, fare, bere, uscire, venire, sapere, volere, potere, dovere.', form: 'parl-are: parlo, parli, parla, parliamo, parlate, parlano', use: 'Il presente indica abitudini, azioni attuali e verità generali. (The present shows habits, current actions and general truths.)', examples: ['Parlo italiano ogni giorno. (I speak Italian every day.)', 'Mangiamo la pizza il sabato. (We eat pizza on Saturdays.)', 'Capisco tutto, ma parlo poco. (I understand everything but I speak little.)'], error: 'Io parlare → io parlo: never use the infinitive after the subject.' },
      A2: { quick: 'Reflexive verbs (mi alzo, ti alzi…) and modal verbs + infinitive (posso, voglio, devo).', more: 'Reflexives describe actions on yourself: mi alzo (I get up), ti chiami (you are called), si chiama (he/she is called). Modals (potere, volere, dovere) are followed by the infinitive: posso venire, voglio imparare, devo studiare. Verbs like piacere work differently: mi piace la pizza — the thing liked is the subject.', form: 'mi alzo · ti alzi · si alza …  +  posso/voglio/devo + infinito', use: 'I verbi riflessivi e i modali sono molto comuni nella vita quotidiana. (Reflexives and modals are very common in daily life.)', examples: ['Mi alzo alle sette. (I get up at seven.)', 'Voglio imparare l\u2019italiano. (I want to learn Italian.)', 'Mi piace il gelato. (I like ice-cream.)'], error: 'Mi piace la pizza, NOT mi piaccio la pizza — pizza is the subject.' },
      B1: { quick: 'Trapassato prossimo (avevo parlato) anchors an action before another past event.', more: 'The past perfect places an event before another past event: quando sono arrivato, avevo già mangiato (when I arrived, I had already eaten). It uses the imperfect of essere/avere + past participle. It is the natural tense for narration and explanation: Non sono uscito perché avevo perso le chiavi.', form: 'avere/essere (imperfetto) + participio passato', use: 'Il trapassato esprime un\u2019azione anteriore a un\u2019altra nel passato. (The past perfect shows an action before another past action.)', examples: ['Avevo già visto quel film. (I had already seen that film.)', 'Era partito quando l\u2019ho chiamato. (He had left when I called him.)', 'Non capivo perché non avevo studiato. (I didn\u2019t understand because I hadn\u2019t studied.)'], error: 'Ero partito, NOT ho partito — essere with verbs of movement.' }
    } },
    { id: 'ce-ci-sono', title: 'C\u2019è e ci sono', part: 'A', range: ['A1', 'A2'], levels: {
      A1: { quick: 'C\u2019è = there is (singular), ci sono = there are (plural).', more: 'C\u2019è and ci sono announce the existence or presence of something: c\u2019è un parco qui (there is a park here); ci sono due negozi (there are two shops). The negative uses non c\u2019è / non ci sono. It is one of the first structures for describing places: Nella mia camera c\u2019è un letto e ci sono due finestre.', form: 'c\u2019è + singolare · ci sono + plurale · non c\u2019è / non ci sono', use: 'C\u2019è e ci sono presentano la presenza o l\u2019esistenza di qualcosa. (C\u2019è/ci sono present the presence or existence of something.)', examples: ['C\u2019è un gatto in giardino. (There is a cat in the garden.)', 'Ci sono tre camere in casa. (There are three rooms in the house.)', 'Non c\u2019è zucchero. (There is no sugar.)'], error: 'C\u2019è due libri → ci sono due libri — plural takes ci sono.' },
      A2: { quick: 'C\u2019è / ci sono change to c\u2019era, c\u2019erano in the past (imperfect).', more: 'To describe a scene in the past, use the imperfect: c\u2019era una volta (once upon a time), c\u2019erano molte persone (there were many people). The future is ci sarà / ci saranno. C\u2019è also fuses with pronouns: c\u2019è la possibilità → c\u2019è… (stay simple in A2: just the tense changes).', form: 'c\u2019era / c\u2019erano (passato) · ci sarà / ci saranno (futuro)', use: 'I tempi passati di c\u2019è servono per descrivere scene e situazioni. (Past forms of c\u2019è describe scenes and situations.)', examples: ['C\u2019era una volta un re. (Once upon a time there was a king.)', 'C\u2019erano molte persone alla festa. (There were many people at the party.)', 'Domani ci sarà il sole. (Tomorrow it will be sunny.)'], error: 'C\u2019erano molta gente → c\u2019era molta gente — gente is singular.' }
    } },
    { id: 'possessivi', title: 'Aggettivi possessivi', part: 'A', range: ['A1', 'A2'], levels: {
      A1: { quick: 'il mio, il tuo, il suo… — the possessive agrees with the object, not the owner.', more: 'Possessives in Italian usually come with the article: il mio libro, la mia casa, i miei amici, le mie amiche. They agree in gender and number with the thing owned (il mio libro — the book is masculine singular), not with the owner. Note the exception: singular family nouns drop the article (mia madre, mio padre), except loro: la loro madre.', form: 'il mio / la mia / i miei / le mie (+ tuo, suo, nostro, vostro, loro)', use: 'I possessivi indicano a chi appartiene una cosa e concordano con essa. (Possessives show ownership and agree with the object.)', examples: ['Il mio telefono è nuovo. (My phone is new.)', 'Mia madre è insegnante. (My mother is a teacher.)', 'I nostri amici arrivano domani. (Our friends arrive tomorrow.)'], error: 'Mio il libro → il mio libro: article comes first (except family nouns).' },
      A2: { quick: 'Proprio vs suo: proprio refers back to the subject; suo is used for his/her/its in formal contexts too.', more: 'When the owner is the subject of the sentence, Italian often prefers proprio: Maria parla dei propri figli (of her own children). Suo/sua can be ambiguous (his or her), so proprio removes ambiguity. In formal letters, Lei (you formal) takes suo: La ringrazio per la sua attenzione.', form: 'il proprio (sogg.) vs il suo (lui/lei) · il suo (Lei formale)', use: 'Proprio evita ambiguità quando il possessore è il soggetto. (Proprio avoids ambiguity when the owner is the subject.)', examples: ['Ognuno fa i propri compiti. (Everyone does their own homework.)', 'Anna parla dei suoi viaggi. (Anna talks about her trips.)', 'Grazie per la sua email. (Thank you for your email.)'], error: 'Mio proprio → proprio: don\u2019t double the possessive.' }
    } },
    { id: 'preposizioni', title: 'Preposizioni semplici e articolate', part: 'A', range: ['A1', 'A2', 'B1'], levels: {
      A1: { quick: 'di, a, da, in, con, su, per, tra/fra — the eight simple prepositions.', more: 'Italian has eight simple prepositions: di (of, from), a (to, at), da (from, by), in (in), con (with), su (on), per (for, by), tra/fra (between). Each has several uses: di = possession and material (il libro di Anna), a = place and time (vado a casa, alle otto), da = origin and host (vengo da Roma, vado dal medico), in = inside places and countries (in Italia, in cucina), con = company and means (con gli amici), su = surface and topic (sul tavolo).', form: 'di · a · da · in · con · su · per · tra/fra', use: 'Le preposizioni semplici indicano luogo, tempo, origine, mezzo e scopo. (Simple prepositions show place, time, origin, means and purpose.)', examples: ['Vengo da Baku. (I come from Baku.)', 'Il libro è sul tavolo. (The book is on the table.)', 'Parlo con un amico. (I\u2019m talking with a friend.)'], error: 'Vado a Italia → vado in Italia — countries use in.' },
      B1: { quick: 'Preposition + time: a (months? no — a is for times of day and dates), in (months, years, seasons), di (nights), per (duration).', more: 'Time prepositions follow patterns: a is used with specific times (alle 8), di with parts of the day (di mattina, di sera), in with months, years and seasons (in gennaio, in 2025, in estate), per for duration (per due ore), fa for distance in the past (due anni fa). Un’ora fa, nel pomeriggio, a mezzogiorno — these fixed phrases are worth learning as chunks.', form: 'alle 8 · di mattina · in gennaio · per due ore · due anni fa', use: 'Con il tempo ogni preposizione ha usi fissi da imparare. (With time, each preposition has fixed uses to learn.)', examples: ['Ci vediamo alle cinque. (See you at five.)', 'Parto in estate. (I leave in summer.)', 'Ho studiato per tre ore. (I studied for three hours.)'], error: 'In estate, NOT alla estate — never fuse a with seasons; in works alone.' }
    } },
    { id: 'passato-prossimo', title: 'Passato prossimo', part: 'B', range: ['A2', 'B1', 'B2'], levels: {
      A2: { quick: 'Present perfect = avere/essere (present) + past participle: ho mangiato, sono andato.', more: 'The passato prossimo narrates completed past actions: ieri ho mangiato la pizza. It is formed with the present of avere (for most verbs) or essere (movement, reflexive, state verbs: sono andato, mi sono alzato) + the past participle. With essere, the participle agrees with the subject: sono andata (for a woman). Common irregular participles: fatto, detto, visto, venuto, stato, preso, scritto, letto.', form: 'avere/essere (presente) + participio passato', use: 'Il passato prossimo esprime azioni concluse nel passato. (The passato prossimo expresses completed past actions.)', examples: ['Ieri ho comprato un libro. (Yesterday I bought a book.)', 'Siamo andati al mare. (We went to the sea.)', 'Hai visto quel film? (Did you see that film?)'], error: 'Sono andato, NOT ho andato — movement verbs take essere.' },
      B1: { quick: 'Avere + transitive, essere + intransitive; agreement with essere: sono arrivati (m. pl.).', more: 'The choice of auxiliary follows the verb: avere for verbs with a direct object (ho mangiato la mela), essere for movement and change of state (sono partito, è cresciuto) and all reflexives (mi sono svegliato). With essere the participle agrees: Maria è andata, i ragazzi sono usciti. With avere there is no agreement: Maria ha mangiato. Object pronouns place before: l\u2019ho visto (I saw him/it).', form: 'ho mangiato · sono partito/a · mi sono svegliato/a · l\u2019ho visto', use: 'La scelta dell\u2019ausiliare dipende dal tipo di verbo. (The auxiliary depends on the verb type.)', examples: ['L\u2019ho vista ieri. (I saw her yesterday.)', 'Sono usciti alle dieci. (They went out at ten.)', 'Hai già mangiato? (Have you already eaten?)'], error: 'Mi sono svegliato, NOT mi ho svegliato — reflexives always use essere.' },
      B2: { quick: 'Passato remoto: literary/narrative past (parlai, presi); common in stories and southern speech.', more: 'The passato remoto narrates events in a distant or finished time, typical of literature and history: Dante nacque a Firenze. Regular pattern: -are → parlai, parlò; -ere → presi, prese (many irregular: feci, vidi, venni, dissi); -ire → dormii, dormì. In speech it often alternates with the passato prossimo; learners at B2 should recognise it and use it in formal narration.', form: 'parlai, parlò · presi, prese · dormii, dormì', use: 'Il passato remoto è il tempo della narrazione e della storia. (The passato remoto is the tense of narration and history.)', examples: ['Dante nacque a Firenze. (Dante was born in Florence.)', 'Nel 2010 partii per l\u2019Italia. (In 2010 I left for Italy.)', 'Scrissi la lettera e la spedii. (I wrote the letter and sent it.)'], error: 'Nacque, NOT naseva: irregular verbs keep their own forms — learn them by heart.' }
    } },
    { id: 'imperfetto', title: 'Imperfetto', part: 'B', range: ['A2', 'B1'], levels: {
      A2: { quick: 'Imperfect: continuous or repeated past (parlavo, vedevo, dormivo) — descriptions and habits.', more: 'The imperfect describes the past as a background: continuous states, repeated habits and descriptions. Da bambino giocavo in giardino (I used to play in the garden); mentre leggevo, il telefono suonò (while I was reading…). Endings are regular: -avo, -avi, -ava, -avamo, -avate, -avano; -evo…; -ivo…. Only essere is irregular: ero, eri, era…', form: 'parlavo, parlavi, parlava, parlavamo, parlavate, parlavano', use: 'L\u2019imperfetto descrive abitudini e situazioni nel passato. (The imperfect describes habits and situations in the past.)', examples: ['Quando ero piccolo, giocavo al calcio. (When I was little, I played football.)', 'Mentre mangiavo, è arrivato Marco. (While I was eating, Marco arrived.)', 'Era una bella giornata. (It was a beautiful day.)'], error: 'Action vs background: È uscito quando pioveva — imperfect for the scene, passato prossimo for the event.' },
      B1: { quick: 'Imperfect vs passato prossimo: background (imperfect) vs event (passato prossimo).', more: 'The two past tenses work as a pair. The imperfect sets the scene (durative, habitual, descriptive), the passato prossimo reports the events that interrupt or follow: Stavo dormendo quando suonò il telefono. With mental states (credevo, sapevo, volevo, pensavo) the imperfect is used: credevo che fosse facile. In courtesy, the imperfect softens requests: volevo chiederle una cosa.', form: 'mentre + imperfetto, + passato prossimo · credevo che…', use: 'Imperfetto = sfondo, passato prossimo = evento. (Imperfect = background, passato prossimo = event.)', examples: ['Stavo leggendo quando mi hai chiamato. (I was reading when you called me.)', 'Pensavo che fosse a casa. (I thought he was at home.)', 'Volevo chiederti un favore. (I wanted to ask you a favour.)'], error: 'Stavo dormendo, NOT stavo dormito — progressive aspect uses the imperfect, not the participle.' }
    } },
    { id: 'futuro', title: 'Futuro semplice e anteriore', part: 'B', range: ['A2', 'B1'], levels: {
      A2: { quick: 'Future: parlerò, vedrò, dormirò — plans, predictions and promises.', more: 'The future simple expresses plans, predictions and promises: domani andrò a Roma, farà caldo. Endings: -erò, -erai, -erà, -eremo, -erete, -eranno (parlare → parlerò; vedere → vedrò); -ire verbs: dormirò. Irregulars: andrò, verrò, farò, sarò, avrò, potrò, dovrò, vorrò. In modern Italian, the present often replaces the future for near plans: domani vado a Roma.', form: 'parlerò, parlerai, parlerà, parleremo, parlerete, parleranno', use: 'Il futuro esprime piani, previsioni e promesse. (The future expresses plans, predictions and promises.)', examples: ['Domani andrò in palestra. (Tomorrow I\u2019ll go to the gym.)', 'Pioverà nel pomeriggio. (It will rain in the afternoon.)', 'Verrò alla festa! (I\u2019ll come to the party!)'], error: 'Se pioverà → se piove: after se, Italian uses the present, not the future.' },
      B1: { quick: 'Futuro anteriore (avrò finito): a future action completed before another future one.', more: 'The future perfect describes an action that will be finished before another future moment: Quando arriverai, avrò già finito (when you arrive, I will have already finished). It is formed with the future of avere/essere + participle: avrò finito, sarò partito. It is common with temporal conjunctions: appena, quando, dopo che. It also expresses a hypothesis: avrà avuto fame (he must have been hungry).', form: 'avrò / sarò + participio passato', use: 'Il futuro anteriore indica un\u2019azione futura conclusa prima di un\u2019altra. (The future perfect shows a future action completed before another.)', examples: ['Appena avrò finito, ti chiamo. (As soon as I\u2019ve finished, I\u2019ll call you.)', 'Quando sarete arrivati, partiremo. (When you\u2019ve arrived, we\u2019ll leave.)', 'Avrà perso il treno. (He must have missed the train.)'], error: 'Sarò partito, NOT avrò partito — movement verbs use essere in every compound tense.' }
    } },
    { id: 'pronomi', title: 'Pronomi diretti e indiretti', part: 'C', range: ['A2', 'B1', 'B2'], levels: {
      A2: { quick: 'Direct pronouns: mi, ti, lo, la, ci, vi, li, le — before the verb (lo vedo).', more: 'Direct object pronouns replace the object: vedo il film → lo vedo; vedo Maria → la vedo. They stand before the verb (except infinitives: voglio vederlo) and in the passato prossimo the participle agrees: l\u2019ho vista (Maria). Mi, ti, ci, vi are identical for direct/indirect. Negative: non lo so. Imperative attaches: guardalo!', form: 'mi, ti, lo, la, ci, vi, li, le + verbo · l\u2019ho vista', use: 'I pronomi diretti sostituiscono il complemento oggetto. (Direct pronouns replace the object.)', examples: ['Lo vedo ogni giorno. (I see him every day.)', 'La pizza? La mangio stasera. (The pizza? I\u2019ll eat it tonight.)', 'Non l\u2019ho ancora visto. (I haven\u2019t seen it yet.)'], error: 'L\u2019ho vista (Maria), NOT l\u2019ho visto — agreement with the direct object pronoun.' },
      B1: { quick: 'Indirect pronouns: mi, ti, gli, le, ci, vi, loro/gli — replace a (chi)? answers: gli parlo, le scrivo.', more: 'Indirect pronouns replace prepositional objects (a chi?): parlo a Marco → gli parlo; scrivo a Maria → le scrivo. In the plural, standard Italian says a loro (parlo a loro), though colloquial gli covers both. They combine with lo/la/li/le: glielo dico (I say it to him/her). With fare/lasciare + infinitive: mi fa ridere, ti lascio dormire.', form: 'mi, ti, gli, le, ci, vi, gli/a loro + verbo · glielo, gliela…', use: 'I pronomi indiretti sostituiscono il complemento di termine. (Indirect pronouns replace the to-whom complement.)', examples: ['Le ho scritto una lettera. (I wrote her a letter.)', 'Glielo dico domani. (I\u2019ll tell it to him tomorrow.)', 'Quel film mi fa ridere. (That film makes me laugh.)'], error: 'Gli parlo a lei → le parlo: don\u2019t double the pronoun with the full phrase.' },
      B2: { quick: 'Pronomi combinati (me lo, te la, glieli) and stressed forms (a me, a te, con lui).', more: 'Combined pronouns join indirect + direct: mi + lo = me lo, ti + la = te la, gli/le + li = glieli: Me lo dai? (will you give it to me?). Stressed pronouns (a me, a te, a lui/lei, con noi…) add emphasis or follow prepositions: Parla con me, questo è per te. Ci also means us / there: ci vediamo, ci vado. Ne replaces di + noun: ne parlo, ne ho due.', form: 'me lo, te la, glieli, ce lo, ve lo · a me, con te, per noi · ne', use: 'I pronomi combinati uniscono due pronomi in una sola parola. (Combined pronouns fuse two pronouns into one word.)', examples: ['Me lo presti? (Will you lend it to me?)', 'Te l\u2019ho detto! (I told you so!)', 'Ne ho comprati due. (I bought two of them.)'], error: 'Mi lo dai → me lo dai: mi becomes me before lo/la/li/le.' }
    } },
    { id: 'imperativo', title: 'Imperativo', part: 'C', range: ['A2', 'B1'], levels: {
      A2: { quick: 'Imperative: tu parla!, voi parlate!, noi parliamo! — orders, advice and invitations.', more: 'The imperative gives orders, advice and invitations. Tu forms: -are → parla (drop the -re); -ere → vedi; -ire → dormi. Noi and voi look like the present: parliamo!, parlate!. Negative tu adds non + infinitive: non parlare! (never non parla). With pronouns: guardalo!, dammelo! (they attach to the verb). Formal Lei uses the subjunctive: parli!, signori, si accomodino!', form: 'parla! / vedi! / dormi! · parliamo! · parlate! · non parlare! · Lei parli!', use: 'L\u2019imperativo esprime ordini, consigli e inviti. (The imperative expresses orders, advice and invitations.)', examples: ['Parla più piano, per favore! (Speak more slowly, please!)', 'Non fumare qui! (Don\u2019t smoke here!)', 'Dammi una mano! (Give me a hand!)'], error: 'Non parla! → non parlare! — the negative tu takes the infinitive.' },
      B1: { quick: 'Pronouns with imperative: attaccano — parlale!, scrivici!, andare via → vattene!', more: 'With the imperative, object pronouns attach to the verb: parlagli! (talk to him!), scrivile! (write to her!), alzati! (get up!), sedetevi! (sit down!). With noi and voi the final -e drops in -are verbs before pronouns: parliamone (let\u2019s talk about it), aiutateci. Tu: va\u2019/va, sta\u2019/sta, di\u2019, fa\u2019, dai — irregulars lose the vowel. Formal commands with Lei use the congiuntivo: mi dica, si accomodi.', form: 'parlale! · alzati! · parliamone! · mi dica (Lei) · va\u2019 via!', use: 'Con l\u2019imperativo i pronomi si attaccano al verbo. (With the imperative, pronouns attach to the verb.)', examples: ['Alzati e vieni qui! (Get up and come here!)', 'Scrivici quando arrivi! (Write to us when you arrive!)', 'Mi dica, signora. (Tell me, madam.)'], error: 'Ti alza! → alzati! — reflexive pronouns attach and follow the imperative.' }
    } },
    { id: 'condizionale', title: 'Condizionale presente e passato', part: 'D', range: ['B1', 'B2'], levels: {
      B1: { quick: 'Conditional present: parlerei, vedrei, dormirei — would, polite requests and advice.', more: 'The conditional present has many uses: politeness (vorrei un caffè — I would like a coffee), advice (dovresti riposare — you should rest), possibility (potrei venire), and reported intentions (ha detto che verrebbe). Endings: -erei, -eresti, -erebbe, -eremmo, -ereste, -erebbero (parlerei); -irei (dormirei). Irregulars follow the future stem: andrei, verrei, farei, sarei, avrei, potrei, dovrei, vorrei.', form: 'parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero', use: 'Il condizionale esprime cortesia, consigli, desideri e possibilità. (The conditional shows politeness, advice, wishes and possibility.)', examples: ['Vorrei un caffè, per favore. (I would like a coffee, please.)', 'Dovresti dormire di più. (You should sleep more.)', 'Verrei volentieri, ma non posso. (I\u2019d gladly come, but I can\u2019t.)'], error: 'Vorrei, NOT voglio — direct requests become rude without the conditional.' },
      B2: { quick: 'Conditional past (avrei parlato, sarei andato): would have — regret, unfulfilled past, reported future.', more: 'The conditional past expresses actions that would have happened but didn\u2019t: avrei parlato, sarei andato. It is the tense of regret and reproach: Avrei dovuto studiare di più (I should have studied more); potevi dirmelo! It also reports future from a past point: Ha detto che sarebbe arrivato alle 8. In hypotheses it follows the subjunctive: Se avessi saputo, sarei venuto.', form: 'avrei / sarei + participio passato', use: 'Il condizionale passato esprime rimpianti e azioni non realizzate. (The conditional past expresses regret and unrealised actions.)', examples: ['Avrei voluto conoscerti prima. (I would have liked to meet you earlier.)', 'Se avessi tempo, viaggerei di più. (If I had time, I\u2019d travel more.)', 'Avrebbe dovuto chiamare. (He should have called.)'], error: 'Se avrei → se avessi: after se, use the subjunctive, never the conditional.' }
    } },
    { id: 'congiuntivo', title: 'Congiuntivo presente e passato', part: 'D', range: ['B1', 'B2', 'C1', 'C2'], levels: {
      B1: { quick: 'Subjunctive: che io parli — used after opinions, wishes, doubts and emotions (penso che, spero che).', more: 'The subjunctive appears in subordinate clauses after verbs and expressions of opinion, desire, doubt and emotion: penso che sia giusto, spero che venga, dubito che capisca. Present endings: -are → parli, parli, parli, parliamo, parliate, parlino; -ere → veda; -ire → dorma (capisca). It follows certain conjunctions: benché, sebbene, affinché, prima che. Many speakers simplify in speech, but written Italian requires it.', form: 'che io parli · che tu veda · che lui dorma · che noi parliamo · che voi parliate · che loro parlino', use: 'Il congiuntivo esprime opinioni, desideri, dubbi ed emozioni. (The subjunctive expresses opinions, wishes, doubts and emotions.)', examples: ['Penso che sia una buona idea. (I think it\u2019s a good idea.)', 'Spero che tu venga alla festa. (I hope you come to the party.)', 'È possibile che piova. (It\u2019s possible that it will rain.)'], error: 'Penso che è → penso che sia: after opinione + che, the subjunctive is required.' },
      B2: { quick: 'Congiuntivo imperfetto (parlassi) and trapassato (avessi parlato) for hypothetical and past situations.', more: 'The imperfect subjunctive (parlassi, vedessi, dormissi) appears in wishes and unreal situations: vorrei che tu parlassi più piano; se avessi tempo (if I had time). The past perfect subjunctive (avessi parlato, fossi andato) refers to unreal past: se fossi stato in te (if I had been you). These are the core of the periodo ipotetico. It follows impersonal expressions: è meglio che, è giusto che.', form: 'parlassi · vedessi · dormissi · avessi parlato · fossi andato', use: 'Il congiuntivo imperfetto e trapassato costruiscono ipotesi e desideri. (Imperfect and past-perfect subjunctives build hypotheses and wishes.)', examples: ['Vorrei che tu venissi con me. (I\u2019d like you to come with me.)', 'Se avessi soldi, comprerei una casa. (If I had money, I\u2019d buy a house.)', 'Se fossi stato lì, ti avrei aiutato. (If I had been there, I\u2019d have helped you.)'], error: 'Se avevo tempo → se avessi tempo: hypotheses need the subjunctive, not the indicative.' },
      C1: { quick: 'Consecutive and concessive clauses (tanto che, sebbene, malgrado) push the subjunctive to full range.', more: 'At C1 the subjunctive governs concession and result: sebbene piova (even though it rains), per quanto sia difficile (however difficult it is), affinché tu capisca (so that you understand). Distinguish che + indicative (fact) from che + subjunctive (opinion/doubt): so che viene (I know he\u2019s coming) vs credo che venga. Verb patterns like è importante che, è naturale che, è un peccato che all take the subjunctive.', form: 'sebbene + congiuntivo · per quanto + congiuntivo · affinché + congiuntivo', use: 'Il congiuntivo governa concessione, scopo e conseguenza. (The subjunctive governs concession, purpose and result.)', examples: ['Sebbene sia stanco, esco. (Even though I\u2019m tired, I\u2019m going out.)', 'Ti spiego perché lo faccia. (I explain why I do it.)', 'È un peccato che tu non possa venire. (It\u2019s a pity you can\u2019t come.)'], error: 'Non è vero che + subjunctive after negation: non è vero che sia facile — but è vero che è facile (indicative after positive).' },
      C2: { quick: 'Full subjunctive system with perfect mastery: concordance of tenses across complex sentences.', more: 'At C2 you control the whole sequence of tenses (concordanza dei tempi): when the main clause is past, the subordinate shifts accordingly — pensavo che fosse vero, credevo che avessi ragione, non immaginavo che saresti arrivato. Express stylistic nuances: the subjunctive in relative clauses (cerco una casa che abbia un giardino), with superlatives (il più bel film che abbia visto), and in free indirect speech in literary style.', form: 'pensavo che fosse · credevo che avessi · il più bel film che abbia visto', use: 'Al livello C2 si padroneggia la concordanza dei tempi del congiuntivo. (At C2 you master the full sequence of subjunctive tenses.)', examples: ['Non immaginavo che saresti venuto. (I didn\u2019t imagine you would come.)', 'È la cosa più strana che abbia mai sentito. (It\u2019s the strangest thing I\u2019ve ever heard.)', 'Che io sappia, non è ancora arrivato. (As far as I know, he hasn\u2019t arrived yet.)'], error: 'Concordance: Non credevo che venisse, NOT non credevo che viene — shift the tense when the main verb is past.' }
    } },
    { id: 'periodo-ipotetico', title: 'Periodo ipotetico', part: 'D', range: ['B2', 'C1'], levels: {
      B2: { quick: 'Three types: real (se + presente), possible (se + congiuntivo imperfetto, + condizionale), unreal past (se + congiuntivo trapassato, + condizionale passato).', more: 'The periodo ipotetico expresses conditions and their results in three degrees. Real: Se piove, resto a casa (if it rains, I stay home). Possible: Se avessi tempo, viaggerei (if I had time, I would travel). Unreal past: Se fossi stato ricco, avrei comprato una villa (if I had been rich, I would have bought a villa). Only type 1 uses the indicative; types 2 and 3 use the subjunctive + conditional.', form: 'se + pres. + pres. · se + cong. imperf. + cond. pres. · se + cong. trapass. + cond. pass.', use: 'Il periodo ipotetico esprime condizioni reali, possibili o irreali. (The hypothetical period expresses real, possible or unreal conditions.)', examples: ['Se studi, impari. (If you study, you learn.)', 'Se avessi più tempo, imparerei il pianoforte. (If I had more time, I\u2019d learn piano.)', 'Se fossi andato prima, avresti visto tutto. (If you\u2019d gone earlier, you\u2019d have seen everything.)'], error: 'Se avrei → se avessi: the conditional never follows se directly.' },
      C1: { quick: 'Implicit forms: infinitive and gerund replace the explicit clause (Senza fretta, si lavora meglio).', more: 'Advanced Italian condenses conditions: with the infinitive (A lavorare così, finirai presto — working like that, you\u2019ll finish soon), with the gerund (Continuando così, avrai successo), and with prepositional phrases (senza + infinito: senza allenarti, non migliorerai). These implicit periods are typical of formal speech and writing, giving the sentence economy and elegance.', form: 'a/in + infinito · gerundio · senza + infinito', use: 'Le forme implicite rendono il periodo ipotetico più elegante. (Implicit forms make the hypothetical period more elegant.)', examples: ['A parlare così, nessuno ti capirà. (Talking like that, nobody will understand you.)', 'Continuando ad allenarti, vincerai. (By keeping training, you\u2019ll win.)', 'Senza carta, non avremmo potuto scrivere. (Without paper, we couldn\u2019t have written.)'], error: 'Use the gerund with the same subject only: Continuando io… → continuando (io)… — never two subjects.' },
      C2: { quick: 'Mixed periods and modal nuance: se + trapassato + condizionale passato with modals (se avessi potuto, avrei dovuto farlo prima).', more: 'At C2 you master mixed and modal-heavy periods: Se avessi potuto, sarei venuto prima (if I had been able, I would have come earlier); Se non avessi dovuto lavorare, avrei accettato (if I hadn\u2019t had to work, I would have accepted). The nuance between se + imperfect and se + pluperfect expresses probability: se vincessi… (if I won — possible), se avessi vinto… (if I had won — impossible now). Advanced texts alternate explicit and implicit periods for rhythm: Se la situazione migliora, investiremo; migliorando la situazione, investiremo. The conditional past also conveys reproach in hypotheses: avresti potuto dirmelo! (you could have told me!).', form: 'se avessi potuto, sarei venuto · se non avessi dovuto…, avrei… · (implicito) migliorando…, investiremo', use: 'Al livello C2 si padroneggiano periodi misti e sfumature modali. (At C2 you master mixed periods and modal nuance.)', examples: ['Se avessi saputo, ti avrei aspettato. (If I had known, I would have waited for you.)', 'Se non avesse piovuto, saremmo andati al mare. (If it hadn\u2019t rained, we would have gone to the sea.)', 'Avreste dovuto avvisarci prima! (You should have warned us earlier!)'], error: 'Se avessi potuto, sarei venuto — never se + conditional even in mixed periods: avrei restato after se is always wrong.' }
    } },
    { id: 'discorso-indiretto', title: 'Discorso indiretto', part: 'E', range: ['B2', 'C1', 'C2'], levels: {
      B2: { quick: 'Report speech: shift tenses and pronouns — Ha detto che era stanco (he said he was tired).', more: 'In indirect speech the reporter relays someone\u2019s words: Marco ha detto: \u201cSono stanco\u201d → Marco ha detto che era stanco. Tenses shift back: present → imperfect (sono → era), passato prossimo → trapassato (ho finito → aveva finito), future → conditional (verrò → sarebbe venuto). Personal pronouns, possessives, time and place words adjust: qui → lì, oggi → quel giorno, domani → il giorno dopo.', form: 'dice che è · ha detto che era · aveva detto che sarebbe stato', use: 'Il discorso indiretto riferisce parole altrui con i tempi adeguati. (Indirect speech reports others\u2019 words with adjusted tenses.)', examples: ['Dice che è stanco. (He says he is tired.)', 'Ha detto che sarebbe venuto. (He said he would come.)', 'Chiese dove fossi. (He asked where I was.)'], error: 'Ha detto che è venuto domani → che sarebbe venuto il giorno dopo — shift time words too.' },
      C1: { quick: 'Reported questions and commands: chiese se…, disse di + infinito.', more: 'Yes/no questions use se: Mi chiese se fossi italiano. Wh-questions keep the question word: Voleva sapere dove abitassi. Commands become di + infinitive: Mi disse di chiudere la porta. The subjunctive appears after the main verb of asking/wanting: Chiesero che tutti partecipassero. Reported speech with the imperative (negative) keeps non: Mi disse di non fumare.', form: 'chiese se + cong. · chiese dove + cong. · disse di + infinito', use: 'Le domande e gli ordini riferiti seguono strutture precise. (Reported questions and commands follow precise structures.)', examples: ['Mi ha chiesto se avessi fame. (He asked me if I was hungry.)', 'Mi ha detto di venire alle otto. (He told me to come at eight.)', 'Voleva sapere perché fossi triste. (He wanted to know why I was sad.)'], error: 'Mi ha chiesto se ero → se fossi: after a past main verb, questions use the subjunctive.' },
      C2: { quick: 'Full tense concordance in long reported chains; literary free indirect style (discorso indiretto libero).', more: 'At C2 you handle complex chains: Mi aveva detto che, quando fosse arrivato, avrebbe chiamato (he had told me that when he arrived he would call). The sequence of tenses runs across multiple clauses. The literary discorso indiretto libero mixes narration and reported thought without markers: Anna era stanca. Perché era dovuta partire così presto? — the question is hers, the grammar reports it. This style characterises 20th-century Italian fiction.', form: 'aveva detto che … sarebbe … · (libro) lei pensava. Era davvero finita?', use: 'Al livello C2 si dominano catene complesse e lo stile libero. (At C2 you master complex chains and the free style.)', examples: ['Mi aveva assicurato che sarebbe arrivato in tempo. (He had assured me he would arrive on time.)', 'Pensò che non avrebbe mai più visto quel mare. (He thought he would never see that sea again.)', 'Domandò a se stesso se ne fosse valsa la pena. (He asked himself if it had been worth it.)'], error: 'Concordance across clauses: sarebbe arrivato, not sarà arrivato, when the reporting verb is past.' }
    } },
    { id: 'passivo', title: 'Passivo e si impersonale', part: 'E', range: ['B2', 'C1'], levels: {
      B2: { quick: 'Passive: essere + past participle, with the agent after da — La pizza è fatta da Marco.', more: 'The passive turns the object into the subject: Marco fa la pizza → La pizza è fatta (da Marco). It is built with essere (in any tense) + past participle, agreeing with the new subject: è fatta, fu scritta, sarà pubblicato. It is frequent in formal language, news and descriptions of processes. The agent (by + person) uses da: la lettera è scritta da Anna.', form: 'essere + participio passato (+ da + agente)', use: 'Il passivo mette al centro l\u2019azione, non chi la compie. (The passive centres the action, not the doer.)', examples: ['Il film è stato girato a Roma. (The film was shot in Rome.)', 'La casa è venduta da un\u2019agenzia. (The house is sold by an agency.)', 'Verranno pubblicati nuovi dati. (New data will be published.)'], error: 'La pizza è fatta, NOT la pizza è fa — the participle always agrees with the subject.' },
      C1: { quick: 'Si passivante and impersonal si: si vende, si parla — general statements and processes.', more: 'The impersonal si makes general statements: si parla italiano (Italian is spoken), si vende casa (house for sale), si mangia bene qui (one eats well here). With a plural object the verb becomes plural: si vendono case. The si passivante is common in signs, recipes and official texts. The impersonal reflexive (ci si) appears in formal Italian: ci si alza presto. Agentless passive is often replaced by si: i biglietti si comprano qui.', form: 'si + verbo (3a pers.) · si vendono case · ci si + verbo', use: 'Il si impersonale esprime affermazioni generali e processi. (The impersonal si expresses general statements and processes.)', examples: ['Si parla italiano in tutta Italia. (Italian is spoken all over Italy.)', 'Qui si mangia molto bene. (One eats very well here.)', 'Si vendono appartamenti. (Apartments for sale.)'], error: 'Si vendono, NOT si vende with plural: agreement applies (case → case plural).' },
      C2: { quick: 'Passive with modals and causation: può essere fatto, si può dire, farsi + infinito (si è fatto costruire una casa).', more: 'At C2 the passive becomes a precision tool. With modals: il progetto può essere terminato, deve essere firmato. The causative farsi + infinitive marks agency through others: si è fatto costruire una casa (he had a house built), mi sono fatto tagliare i capelli. The si impersonale extends to double-si structures avoided in speech but elegant in writing: quando si è stanchi, si lavora male (when one is tired, one works badly). Contrast active/passive choice for emphasis: la legge è stata approvata (focus on the law), il governo ha approvato la legge (focus on the government).', form: 'può essere fatto · deve essere firmato · si è fatto costruire · quando si è stanchi, si lavora male', use: 'Al livello C2 il passivo diventa uno strumento di precisione stilistica. (At C2 the passive becomes a stylistic precision tool.)', examples: ['La riforma può essere approvata entro l\u2019anno. (The reform can be passed by year\u2019s end.)', 'Si è fatto costruire una villa in Toscana. (He had a villa built in Tuscany.)', 'Quando si è stressati, si prendono decisioni peggiori. (When one is stressed, one makes worse decisions.)'], error: 'Si è fatto costruire, NOT si è costruito una casa da un architetto — farsi + infinito expresses the causative.' }
    } }
  ],
  /* ---- vocabulary: 30 words per level (A1–C2), each with picture, IPA, POS, category ---- */
  vocab: {
    A1: [
      { word: 'ciao', en: 'hello / bye', pic: '👋', ipa: '/ˈtʃao/', pos: 'interiez.', cat: 'Saluti', example: 'Ciao, come stai? (Hi, how are you?)' },
      { word: 'buongiorno', en: 'good morning', pic: '🌅', ipa: '/bwɔnˈdʒorno/', pos: 'sost.', cat: 'Saluti', example: 'Buongiorno, signora! (Good morning, madam!)' },
      { word: 'buonasera', en: 'good evening', pic: '🌆', ipa: '/bwɔnaˈsera/', pos: 'sost.', cat: 'Saluti', example: 'Buonasera, prego, si accomodi. (Good evening, please, come in.)' },
      { word: 'arrivederci', en: 'goodbye', pic: '🤝', ipa: '/arriveˈdertʃi/', pos: 'interiez.', cat: 'Saluti', example: 'Arrivederci e grazie! (Goodbye and thank you!)' },
      { word: 'grazie', en: 'thank you', pic: '🙏', ipa: '/ˈgrattsje/', pos: 'interiez.', cat: 'Saluti', example: 'Grazie mille per il regalo! (Thank you so much for the gift!)' },
      { word: 'prego', en: 'you\u2019re welcome', pic: '😊', ipa: '/ˈprɛgo/', pos: 'interiez.', cat: 'Saluti', example: 'Prego, si figuri! (You\u2019re welcome, don\u2019t mention it!)' },
      { word: 'sì', en: 'yes', pic: '✅', ipa: '/si/', pos: 'avv.', cat: 'Saluti', example: 'Sì, vengo con te. (Yes, I\u2019m coming with you.)' },
      { word: 'no', en: 'no', pic: '❌', ipa: '/nɔ/', pos: 'avv.', cat: 'Saluti', example: 'No, grazie, non ne voglio. (No thanks, I don\u2019t want any.)' },
      { word: 'scusa', en: 'sorry / excuse me', pic: '🙇', ipa: '/ˈskuza/', pos: 'interiez.', cat: 'Saluti', example: 'Scusa, dov\u2019è la stazione? (Excuse me, where\u2019s the station?)' },
      { word: 'famiglia', en: 'family', pic: '👨‍👩‍👧', ipa: '/faˈmiʎʎa/', pos: 'sost.', cat: 'Famiglia', example: 'La mia famiglia è grande. (My family is big.)' },
      { word: 'madre', en: 'mother', pic: '👩', ipa: '/ˈmadre/', pos: 'sost.', cat: 'Famiglia', example: 'Mia madre è insegnante. (My mother is a teacher.)' },
      { word: 'padre', en: 'father', pic: '👨', ipa: '/ˈpadre/', pos: 'sost.', cat: 'Famiglia', example: 'Mio padre lavora in banca. (My father works in a bank.)' },
      { word: 'fratello', en: 'brother', pic: '👦', ipa: '/fraˈtɛllo/', pos: 'sost.', cat: 'Famiglia', example: 'Mio fratello ha 10 anni. (My brother is 10.)' },
      { word: 'sorella', en: 'sister', pic: '👧', ipa: '/soˈrɛlla/', pos: 'sost.', cat: 'Famiglia', example: 'La mia sorella abita a Roma. (My sister lives in Rome.)' },
      { word: 'amico', en: 'friend', pic: '🤝', ipa: '/aˈmiko/', pos: 'sost.', cat: 'Famiglia', example: 'Marco è il mio miglior amico. (Marco is my best friend.)' },
      { word: 'casa', en: 'house / home', pic: '🏠', ipa: '/ˈkasa/', pos: 'sost.', cat: 'Casa', example: 'Vivo in una casa grande. (I live in a big house.)' },
      { word: 'camera', en: 'bedroom / room', pic: '🛏️', ipa: '/ˈkamera/', pos: 'sost.', cat: 'Casa', example: 'La mia camera è piccola ma luminosa. (My room is small but bright.)' },
      { word: 'cucina', en: 'kitchen', pic: '🍳', ipa: '/kuˈtʃina/', pos: 'sost.', cat: 'Casa', example: 'La cucina è in fondo al corridoio. (The kitchen is at the end of the hall.)' },
      { word: 'letto', en: 'bed', pic: '🛌', ipa: '/ˈlɛtto/', pos: 'sost.', cat: 'Casa', example: 'Il gatto dorme sul letto. (The cat sleeps on the bed.)' },
      { word: 'acqua', en: 'water', pic: '💧', ipa: '/ˈakkwa/', pos: 'sost.', cat: 'Cibo', example: 'Un bicchiere d\u2019acqua, per favore. (A glass of water, please.)' },
      { word: 'pane', en: 'bread', pic: '🍞', ipa: '/ˈpane/', pos: 'sost.', cat: 'Cibo', example: 'Compro il pane fresco ogni mattina. (I buy fresh bread every morning.)' },
      { word: 'mela', en: 'apple', pic: '🍎', ipa: '/ˈmela/', pos: 'sost.', cat: 'Cibo', example: 'Una mela al giorno fa bene. (An apple a day is good for you.)' },
      { word: 'caffè', en: 'coffee', pic: '☕', ipa: '/kafˈfɛ/', pos: 'sost.', cat: 'Cibo', example: 'Prendo un caffè al bar. (I\u2019ll have a coffee at the bar.)' },
      { word: 'latte', en: 'milk', pic: '🥛', ipa: '/ˈlatte/', pos: 'sost.', cat: 'Cibo', example: 'Il latte è nel frigo. (The milk is in the fridge.)' },
      { word: 'numero', en: 'number', pic: '🔢', ipa: '/ˈnumero/', pos: 'sost.', cat: 'Numeri', example: 'Qual è il tuo numero? (What\u2019s your number?)' },
      { word: 'uno', en: 'one', pic: '1️⃣', ipa: '/ˈuno/', pos: 'num.', cat: 'Numeri', example: 'Uno, due, tre, via! (One, two, three, go!)' },
      { word: 'due', en: 'two', pic: '2️⃣', ipa: '/ˈdue/', pos: 'num.', cat: 'Numeri', example: 'Ho due fratelli. (I have two brothers.)' },
      { word: 'tre', en: 'three', pic: '3️⃣', ipa: '/tre/', pos: 'num.', cat: 'Numeri', example: 'Tre caffè, per favore! (Three coffees, please!)' },
      { word: 'oggi', en: 'today', pic: '📅', ipa: '/ˈɔddʒi/', pos: 'avv.', cat: 'Tempo', example: 'Oggi fa bel tempo. (Today the weather is nice.)' },
      { word: 'domani', en: 'tomorrow', pic: '⏭️', ipa: '/doˈmani/', pos: 'avv.', cat: 'Tempo', example: 'Domani vado al mare. (Tomorrow I\u2019m going to the sea.)' }
    ],
    A2: [
      { word: 'città', en: 'city', pic: '🏙️', ipa: '/tʃitˈta/', pos: 'sost.', cat: 'Città', example: 'Roma è una città antica. (Rome is an ancient city.)' },
      { word: 'strada', en: 'street', pic: '🛣️', ipa: '/ˈstrada/', pos: 'sost.', cat: 'Città', example: 'Questa strada è molto trafficata. (This street is very busy.)' },
      { word: 'piazza', en: 'square', pic: '⛲', ipa: '/ˈpjattsa/', pos: 'sost.', cat: 'Città', example: 'La piazza è piena di turisti. (The square is full of tourists.)' },
      { word: 'negozio', en: 'shop', pic: '🏪', ipa: '/neˈgɔttsjo/', pos: 'sost.', cat: 'Città', example: 'Il negozio chiude alle otto. (The shop closes at eight.)' },
      { word: 'mercato', en: 'market', pic: '🧺', ipa: '/merˈkato/', pos: 'sost.', cat: 'Città', example: 'Al mercato compro la frutta. (At the market I buy fruit.)' },
      { word: 'ristorante', en: 'restaurant', pic: '🍽️', ipa: '/ristoˈrante/', pos: 'sost.', cat: 'Cibo', example: 'Ceniamo in un ristorante tipico. (We\u2019ll have dinner in a typical restaurant.)' },
      { word: 'colazione', en: 'breakfast', pic: '🥐', ipa: '/kolatˈtsjone/', pos: 'sost.', cat: 'Cibo', example: 'La colazione è servita dalle 7. (Breakfast is served from 7.)' },
      { word: 'pranzo', en: 'lunch', pic: '🍝', ipa: '/ˈprandzo/', pos: 'sost.', cat: 'Cibo', example: 'A pranzo mangiamo pasta. (We eat pasta for lunch.)' },
      { word: 'cena', en: 'dinner', pic: '🍷', ipa: '/ˈtʃena/', pos: 'sost.', cat: 'Cibo', example: 'La cena è pronta! (Dinner is ready!)' },
      { word: 'conto', en: 'the bill', pic: '🧾', ipa: '/ˈkonto/', pos: 'sost.', cat: 'Cibo', example: 'Il conto, per favore! (The bill, please!)' },
      { word: 'treno', en: 'train', pic: '🚆', ipa: '/ˈtrɛno/', pos: 'sost.', cat: 'Viaggi', example: 'Il treno per Milano parte alle 9. (The train to Milan leaves at 9.)' },
      { word: 'biglietto', en: 'ticket', pic: '🎫', ipa: '/biʎˈʎɛtto/', pos: 'sost.', cat: 'Viaggi', example: 'Un biglietto di andata e ritorno. (A return ticket.)' },
      { word: 'stazione', en: 'station', pic: '🚉', ipa: '/statˈtsjone/', pos: 'sost.', cat: 'Viaggi', example: 'Ti aspetto alla stazione. (I\u2019ll wait for you at the station.)' },
      { word: 'aeroporto', en: 'airport', pic: '✈️', ipa: '/aeroˈpɔrto/', pos: 'sost.', cat: 'Viaggi', example: 'L\u2019aeroporto è lontano dal centro. (The airport is far from the centre.)' },
      { word: 'valigia', en: 'suitcase', pic: '🧳', ipa: '/vaˈlidʒa/', pos: 'sost.', cat: 'Viaggi', example: 'La valigia è troppo pesante! (The suitcase is too heavy!)' },
      { word: 'mare', en: 'sea', pic: '🌊', ipa: '/ˈmare/', pos: 'sost.', cat: 'Viaggi', example: 'D\u2019estate vado al mare. (In summer I go to the sea.)' },
      { word: 'spiaggia', en: 'beach', pic: '🏖️', ipa: '/ˈspjaddʒa/', pos: 'sost.', cat: 'Viaggi', example: 'La spiaggia è affollata oggi. (The beach is crowded today.)' },
      { word: 'lavoro', en: 'work / job', pic: '💼', ipa: '/laˈvɔro/', pos: 'sost.', cat: 'Lavoro', example: 'Cerco un nuovo lavoro. (I\u2019m looking for a new job.)' },
      { word: 'ufficio', en: 'office', pic: '🏢', ipa: '/ufˈfitʃo/', pos: 'sost.', cat: 'Lavoro', example: 'L\u2019ufficio è al terzo piano. (The office is on the third floor.)' },
      { word: 'medico', en: 'doctor', pic: '🩺', ipa: '/ˈmɛdiko/', pos: 'sost.', cat: 'Lavoro', example: 'Devo andare dal medico. (I have to go to the doctor.)' },
      { word: 'giorno', en: 'day', pic: '📆', ipa: '/ˈdʒorno/', pos: 'sost.', cat: 'Tempo', example: 'Che giorno è oggi? (What day is it today?)' },
      { word: 'settimana', en: 'week', pic: '🗓️', ipa: '/settiˈmana/', pos: 'sost.', cat: 'Tempo', example: 'La settimana prossima parto. (Next week I\u2019m leaving.)' },
      { word: 'mese', en: 'month', pic: '📅', ipa: '/ˈmese/', pos: 'sost.', cat: 'Tempo', example: 'Il mese scorso ero in vacanza. (Last month I was on holiday.)' },
      { word: 'ora', en: 'hour / time', pic: '⏰', ipa: '/ˈora/', pos: 'sost.', cat: 'Tempo', example: 'Che ora è? Sono le tre. (What time is it? It\u2019s three.)' },
      { word: 'soldi', en: 'money', pic: '💶', ipa: '/ˈsoldi/', pos: 'sost.', cat: 'Negozio', example: 'Non ho abbastanza soldi. (I don\u2019t have enough money.)' },
      { word: 'prezzo', en: 'price', pic: '🏷️', ipa: '/ˈprɛttso/', pos: 'sost.', cat: 'Negozio', example: 'Il prezzo è troppo alto. (The price is too high.)' },
      { word: 'comprare', en: 'to buy', pic: '🛒', ipa: '/komˈprare/', pos: 'verbo', cat: 'Negozio', example: 'Compro il pane ogni giorno. (I buy bread every day.)' },
      { word: 'pagare', en: 'to pay', pic: '💳', ipa: '/paˈgare/', pos: 'verbo', cat: 'Negozio', example: 'Pago con la carta. (I\u2019ll pay by card.)' },
      { word: 'carta', en: 'card / paper', pic: '💳', ipa: '/ˈkarta/', pos: 'sost.', cat: 'Negozio', example: 'Accettate la carta? (Do you accept cards?)' },
      { word: 'chiave', en: 'key', pic: '🔑', ipa: '/ˈkjave/', pos: 'sost.', cat: 'Casa', example: 'Ho perso le chiavi di casa! (I lost my house keys!)' }
    ],
    B1: [
      { word: 'scuola', en: 'school', pic: '🏫', ipa: '/ˈskwɔla/', pos: 'sost.', cat: 'Scuola', example: 'La scuola inizia alle otto. (School starts at eight.)' },
      { word: 'studente', en: 'student', pic: '🎓', ipa: '/stuˈdɛnte/', pos: 'sost.', cat: 'Scuola', example: 'Sono studente di medicina. (I\u2019m a medical student.)' },
      { word: 'insegnante', en: 'teacher', pic: '👩‍🏫', ipa: '/inseɲˈɲante/', pos: 'sost.', cat: 'Scuola', example: 'La mia insegnante è molto brava. (My teacher is very good.)' },
      { word: 'libro', en: 'book', pic: '📕', ipa: '/ˈlibro/', pos: 'sost.', cat: 'Scuola', example: 'Sto leggendo un libro in italiano. (I\u2019m reading a book in Italian.)' },
      { word: 'lezione', en: 'lesson', pic: '📖', ipa: '/letˈtsjone/', pos: 'sost.', cat: 'Scuola', example: 'La lezione di oggi è facile. (Today\u2019s lesson is easy.)' },
      { word: 'esame', en: 'exam', pic: '📝', ipa: '/eˈzame/', pos: 'sost.', cat: 'Scuola', example: 'Ho l\u2019esame di storia domani. (I have my history exam tomorrow.)' },
      { word: 'domanda', en: 'question', pic: '❓', ipa: '/doˈmanda/', pos: 'sost.', cat: 'Scuola', example: 'Ho una domanda da fare. (I have a question to ask.)' },
      { word: 'risposta', en: 'answer', pic: '💬', ipa: '/risˈpɔsta/', pos: 'sost.', cat: 'Scuola', example: 'La tua risposta è corretta. (Your answer is correct.)' },
      { word: 'azienda', en: 'company', pic: '🏢', ipa: '/atˈtsjɛnda/', pos: 'sost.', cat: 'Lavoro', example: 'Lavoro in una piccola azienda. (I work in a small company.)' },
      { word: 'riunione', en: 'meeting', pic: '📋', ipa: '/riuˈnjone/', pos: 'sost.', cat: 'Lavoro', example: 'La riunione è alle dieci. (The meeting is at ten.)' },
      { word: 'progetto', en: 'project', pic: '🗂️', ipa: '/proˈdʒɛtto/', pos: 'sost.', cat: 'Lavoro', example: 'Il progetto finisce a giugno. (The project ends in June.)' },
      { word: 'contratto', en: 'contract', pic: '📄', ipa: '/konˈtratto/', pos: 'sost.', cat: 'Lavoro', example: 'Ho firmato il contratto oggi. (I signed the contract today.)' },
      { word: 'stipendio', en: 'salary', pic: '💰', ipa: '/stiˈpɛndjo/', pos: 'sost.', cat: 'Lavoro', example: 'Lo stipendio arriva alla fine del mese. (The salary arrives at the end of the month.)' },
      { word: 'tempo libero', en: 'free time', pic: '🕰️', ipa: '/ˈtɛmpo ˈlibɛro/', pos: 'sost.', cat: 'Tempo libero', example: 'Nel tempo libero leggo e cammino. (In my free time I read and walk.)' },
      { word: 'viaggio', en: 'trip / journey', pic: '🧭', ipa: '/ˈvjaddʒo/', pos: 'sost.', cat: 'Tempo libero', example: 'Il viaggio in treno dura tre ore. (The train journey takes three hours.)' },
      { word: 'fotografia', en: 'photography', pic: '📷', ipa: '/fotograˈfia/', pos: 'sost.', cat: 'Tempo libero', example: 'La fotografia è la mia passione. (Photography is my passion.)' },
      { word: 'musica', en: 'music', pic: '🎵', ipa: '/ˈmuzika/', pos: 'sost.', cat: 'Tempo libero', example: 'Ascolto la musica classica. (I listen to classical music.)' },
      { word: 'film', en: 'film', pic: '🎬', ipa: '/film/', pos: 'sost.', cat: 'Tempo libero', example: 'Ieri ho visto un film italiano. (Yesterday I watched an Italian film.)' },
      { word: 'squadra', en: 'team', pic: '⚽', ipa: '/ˈskwadra/', pos: 'sost.', cat: 'Tempo libero', example: 'La nostra squadra ha vinto! (Our team won!)' },
      { word: 'felice', en: 'happy', pic: '😄', ipa: '/feˈlitʃe/', pos: 'agg.', cat: 'Emozioni', example: 'Oggi sono molto felice. (Today I\u2019m very happy.)' },
      { word: 'triste', en: 'sad', pic: '😢', ipa: '/ˈtriste/', pos: 'agg.', cat: 'Emozioni', example: 'Perché sei triste? (Why are you sad?)' },
      { word: 'stanco', en: 'tired', pic: '😴', ipa: '/ˈstanko/', pos: 'agg.', cat: 'Emozioni', example: 'Sono stanco dopo il lavoro. (I\u2019m tired after work.)' },
      { word: 'arrabbiato', en: 'angry', pic: '😠', ipa: '/arrabˈbjato/', pos: 'agg.', cat: 'Emozioni', example: 'È arrabbiato con me. (He\u2019s angry with me.)' },
      { word: 'paura', en: 'fear', pic: '😨', ipa: '/paˈura/', pos: 'sost.', cat: 'Emozioni', example: 'Ho paura dei ragni. (I\u2019m afraid of spiders.)' },
      { word: 'speranza', en: 'hope', pic: '🌈', ipa: '/speˈrantsa/', pos: 'sost.', cat: 'Emozioni', example: 'C\u2019è sempre speranza. (There is always hope.)' },
      { word: 'decisione', en: 'decision', pic: '⚖️', ipa: '/detʃiˈzjone/', pos: 'sost.', cat: 'Emozioni', example: 'È una decisione importante. (It\u2019s an important decision.)' },
      { word: 'possibilità', en: 'possibility', pic: '🤔', ipa: '/possibiliˈta/', pos: 'sost.', cat: 'Emozioni', example: 'C\u2019è la possibilità di partire. (There\u2019s the possibility of leaving.)' },
      { word: 'notizia', en: 'news', pic: '📰', ipa: '/noˈtittsja/', pos: 'sost.', cat: 'Media', example: 'Ho una bella notizia! (I have good news!)' },
      { word: 'giornale', en: 'newspaper', pic: '🗞️', ipa: '/dʒorˈnale/', pos: 'sost.', cat: 'Media', example: 'Leggo il giornale la mattina. (I read the newspaper in the morning.)' },
      { word: 'telefono', en: 'telephone', pic: '📱', ipa: '/teˈlɛfono/', pos: 'sost.', cat: 'Media', example: 'Il telefono squilla. (The phone is ringing.)' }
    ],
    B2: [
      { word: 'natura', en: 'nature', pic: '🌿', ipa: '/naˈtura/', pos: 'sost.', cat: 'Natura', example: 'Amo la natura e le montagne. (I love nature and the mountains.)' },
      { word: 'ambiente', en: 'environment', pic: '🌍', ipa: '/amˈbjɛnte/', pos: 'sost.', cat: 'Natura', example: 'Dobbiamo proteggere l\u2019ambiente. (We must protect the environment.)' },
      { word: 'inquinamento', en: 'pollution', pic: '🏭', ipa: '/inkwinamenˈto/', pos: 'sost.', cat: 'Natura', example: 'L\u2019inquinamento dell\u2019aria è un problema. (Air pollution is a problem.)' },
      { word: 'riscaldamento', en: 'global warming / heating', pic: '🌡️', ipa: '/riskaldamenˈto/', pos: 'sost.', cat: 'Natura', example: 'Il riscaldamento globale preoccupa tutti. (Global warming worries everyone.)' },
      { word: 'energia', en: 'energy', pic: '⚡', ipa: '/enerˈdʒia/', pos: 'sost.', cat: 'Natura', example: 'Usiamo energia solare. (We use solar energy.)' },
      { word: 'risorsa', en: 'resource', pic: '🧰', ipa: '/riˈsɔrsa/', pos: 'sost.', cat: 'Natura', example: 'L\u2019acqua è una risorsa preziosa. (Water is a precious resource.)' },
      { word: 'società', en: 'society', pic: '🏘️', ipa: '/sotʃeˈta/', pos: 'sost.', cat: 'Cultura', example: 'La società italiana è cambiata. (Italian society has changed.)' },
      { word: 'governo', en: 'government', pic: '🏛️', ipa: '/goˈvɛrno/', pos: 'sost.', cat: 'Cultura', example: 'Il governo ha approvato la legge. (The government passed the law.)' },
      { word: 'legge', en: 'law', pic: '⚖️', ipa: '/ˈlɛdʒe/', pos: 'sost.', cat: 'Cultura', example: 'La legge protegge i cittadini. (The law protects citizens.)' },
      { word: 'diritto', en: 'right', pic: '✊', ipa: '/diˈritto/', pos: 'sost.', cat: 'Cultura', example: 'Tutti hanno diritto all\u2019istruzione. (Everyone has the right to education.)' },
      { word: 'cittadino', en: 'citizen', pic: '🧑‍🤝‍🧑', ipa: '/tʃittaˈdino/', pos: 'sost.', cat: 'Cultura', example: 'Ogni cittadino deve votare. (Every citizen must vote.)' },
      { word: 'opinione', en: 'opinion', pic: '💭', ipa: '/opinˈjone/', pos: 'sost.', cat: 'Cultura', example: 'La mia opinione è diversa. (My opinion is different.)' },
      { word: 'dibattito', en: 'debate', pic: '🗣️', ipa: '/dibatˈtito/', pos: 'sost.', cat: 'Cultura', example: 'Il dibattito è stato acceso. (The debate was heated.)' },
      { word: 'tecnologia', en: 'technology', pic: '💻', ipa: '/teknoloˈdʒia/', pos: 'sost.', cat: 'Tecnologia', example: 'La tecnologia cambia la vita. (Technology changes life.)' },
      { word: 'computer', en: 'computer', pic: '🖥️', ipa: '/komˈpjutɛr/', pos: 'sost.', cat: 'Tecnologia', example: 'Spengo il computer la sera. (I switch off the computer in the evening.)' },
      { word: 'internet', en: 'internet', pic: '🌐', ipa: '/inˈtɛrnet/', pos: 'sost.', cat: 'Tecnologia', example: 'Cerco le informazioni su internet. (I search for information on the internet.)' },
      { word: 'applicazione', en: 'app', pic: '📲', ipa: '/applikatˈtsjone/', pos: 'sost.', cat: 'Tecnologia', example: 'Uso un\u2019applicazione per imparare. (I use an app to learn.)' },
      { word: 'dati', en: 'data', pic: '📊', ipa: '/ˈdati/', pos: 'sost.', cat: 'Tecnologia', example: 'I dati mostrano un aumento. (The data show an increase.)' },
      { word: 'rete', en: 'network', pic: '🕸️', ipa: '/ˈrete/', pos: 'sost.', cat: 'Tecnologia', example: 'La rete Wi-Fi non funziona. (The Wi-Fi network isn\u2019t working.)' },
      { word: 'ricerca', en: 'research', pic: '🔬', ipa: '/riˈtʃɛrka/', pos: 'sost.', cat: 'Scienza', example: 'La ricerca scientifica è fondamentale. (Scientific research is fundamental.)' },
      { word: 'esperimento', en: 'experiment', pic: '🧪', ipa: '/esperiˈmɛnto/', pos: 'sost.', cat: 'Scienza', example: 'L\u2019esperimento è riuscito. (The experiment succeeded.)' },
      { word: 'scoperta', en: 'discovery', pic: '💡', ipa: '/skoˈpɛrta/', pos: 'sost.', cat: 'Scienza', example: 'È stata una grande scoperta. (It was a great discovery.)' },
      { word: 'crescita', en: 'growth', pic: '📈', ipa: '/ˈkreʃʃita/', pos: 'sost.', cat: 'Scienza', example: 'La crescita economica rallenta. (Economic growth is slowing.)' },
      { word: 'sviluppo', en: 'development', pic: '🛠️', ipa: '/zviˈluppo/', pos: 'sost.', cat: 'Scienza', example: 'Lo sviluppo sostenibile è necessario. (Sustainable development is necessary.)' },
      { word: 'sfida', en: 'challenge', pic: '🧗', ipa: '/ˈsfida/', pos: 'sost.', cat: 'Scienza', example: 'Imparare una lingua è una sfida. (Learning a language is a challenge.)' },
      { word: 'obiettivo', en: 'goal', pic: '🎯', ipa: '/objetˈtivo/', pos: 'sost.', cat: 'Scienza', example: 'Il mio obiettivo è parlare bene. (My goal is to speak well.)' },
      { word: 'miglioramento', en: 'improvement', pic: '📈', ipa: '/miʎʎoramenˈto/', pos: 'sost.', cat: 'Scienza', example: 'Ogni giorno vedo un miglioramento. (Every day I see an improvement.)' },
      { word: 'successo', en: 'success', pic: '🏆', ipa: '/sukˈtʃɛsso/', pos: 'sost.', cat: 'Scienza', example: 'Il progetto è stato un successo. (The project was a success.)' },
      { word: 'qualità', en: 'quality', pic: '⭐', ipa: '/kwaliˈta/', pos: 'sost.', cat: 'Scienza', example: 'La qualità della vita è alta. (The quality of life is high.)' },
      { word: 'responsabilità', en: 'responsibility', pic: '🤲', ipa: '/responsabiliˈta/', pos: 'sost.', cat: 'Scienza', example: 'Ho molte responsabilità. (I have many responsibilities.)' }
    ],
    C1: [
      { word: 'conoscenza', en: 'knowledge', pic: '🧠', ipa: '/konoʃˈʃɛntsa/', pos: 'sost.', cat: 'Cultura', example: 'La conoscenza si costruisce con la pratica. (Knowledge is built through practice.)' },
      { word: 'esperienza', en: 'experience', pic: '🎭', ipa: '/esperiˈɛntsa/', pos: 'sost.', cat: 'Cultura', example: 'L\u2019esperienza insegna più dei libri. (Experience teaches more than books.)' },
      { word: 'cultura', en: 'culture', pic: '🏛️', ipa: '/kulˈtura/', pos: 'sost.', cat: 'Cultura', example: 'La cultura italiana è ricchissima. (Italian culture is extremely rich.)' },
      { word: 'letteratura', en: 'literature', pic: '📚', ipa: '/letteratuˈra/', pos: 'sost.', cat: 'Cultura', example: 'Amo la letteratura del Novecento. (I love 20th-century literature.)' },
      { word: 'arte', en: 'art', pic: '🎨', ipa: '/ˈarte/', pos: 'sost.', cat: 'Cultura', example: 'L\u2019arte racconta la storia. (Art tells history.)' },
      { word: 'storia', en: 'history', pic: '🏺', ipa: '/ˈstɔria/', pos: 'sost.', cat: 'Cultura', example: 'La storia di Roma è affascinante. (The history of Rome is fascinating.)' },
      { word: 'memoria', en: 'memory', pic: '🧠', ipa: '/meˈmɔria/', pos: 'sost.', cat: 'Cultura', example: 'Ho un bellissimo ricordo di quel viaggio. (I have a beautiful memory of that trip.)' },
      { word: 'identità', en: 'identity', pic: '🪪', ipa: '/identiˈta/', pos: 'sost.', cat: 'Cultura', example: 'La lingua fa parte dell\u2019identità. (Language is part of identity.)' },
      { word: 'equilibrio', en: 'balance', pic: '⚖️', ipa: '/ekwiˈlibrjo/', pos: 'sost.', cat: 'Cultura', example: 'Cerco un equilibrio tra lavoro e vita. (I seek a balance between work and life.)' },
      { word: 'benessere', en: 'well-being', pic: '🌸', ipa: '/benesˈsɛre/', pos: 'sost.', cat: 'Emozioni', example: 'Il benessere è più del denaro. (Well-being is more than money.)' },
      { word: 'fiducia', en: 'trust', pic: '🤝', ipa: '/fiˈdutʃa/', pos: 'sost.', cat: 'Emozioni', example: 'Ho piena fiducia in te. (I have full trust in you.)' },
      { word: 'dubbio', en: 'doubt', pic: '🤨', ipa: '/ˈdubbjo/', pos: 'sost.', cat: 'Emozioni', example: 'Ho qualche dubbio sulla decisione. (I have some doubt about the decision.)' },
      { word: 'sorpresa', en: 'surprise', pic: '🎁', ipa: '/sorˈpresa/', pos: 'sost.', cat: 'Emozioni', example: 'Che bella sorpresa! (What a lovely surprise!)' },
      { word: 'gratitudine', en: 'gratitude', pic: '🙏', ipa: '/gratiˈtudine/', pos: 'sost.', cat: 'Emozioni', example: 'Ti devo un sentimento di gratitudine. (I owe you a feeling of gratitude.)' },
      { word: 'economia', en: 'economy', pic: '💹', ipa: '/ekonoˈmia/', pos: 'sost.', cat: 'Economia', example: 'L\u2019economia italiana cresce piano. (The Italian economy grows slowly.)' },
      { word: 'mercato', en: 'market', pic: '📉', ipa: '/merˈkato/', pos: 'sost.', cat: 'Economia', example: 'Il mercato del lavoro è competitivo. (The job market is competitive.)' },
      { word: 'investimento', en: 'investment', pic: '💼', ipa: '/investimenˈto/', pos: 'sost.', cat: 'Economia', example: 'L\u2019istruzione è un investimento. (Education is an investment.)' },
      { word: 'profitto', en: 'profit', pic: '💶', ipa: '/proˈfitto/', pos: 'sost.', cat: 'Economia', example: 'L\u2019azienda ha chiuso con un profitto. (The company closed with a profit.)' },
      { word: 'concorrenza', en: 'competition', pic: '🏁', ipa: '/konkorˈrɛntsa/', pos: 'sost.', cat: 'Economia', example: 'La concorrenza è forte nel settore. (Competition is strong in the sector.)' },
      { word: 'innovazione', en: 'innovation', pic: '🚀', ipa: '/innovatˈtsjone/', pos: 'sost.', cat: 'Scienza', example: 'L\u2019innovazione nasce dai problemi. (Innovation is born from problems.)' },
      { word: 'sostenibilità', en: 'sustainability', pic: '♻️', ipa: '/sostenibiliˈta/', pos: 'sost.', cat: 'Scienza', example: 'La sostenibilità è una scelta di oggi. (Sustainability is today\u2019s choice.)' },
      { word: 'strategia', en: 'strategy', pic: '🧩', ipa: '/strateˈdʒia/', pos: 'sost.', cat: 'Scienza', example: 'Serve una strategia chiara. (A clear strategy is needed.)' },
      { word: 'analisi', en: 'analysis', pic: '🔎', ipa: '/aˈnalizi/', pos: 'sost.', cat: 'Scienza', example: 'L\u2019analisi dei dati è complessa. (The data analysis is complex.)' },
      { word: 'ipotesi', en: 'hypothesis', pic: '🔮', ipa: '/iˈpɔtezi/', pos: 'sost.', cat: 'Scienza', example: 'La mia ipotesi è confermata. (My hypothesis is confirmed.)' },
      { word: 'fenomeno', en: 'phenomenon', pic: '🌊', ipa: '/feˈnɔmeno/', pos: 'sost.', cat: 'Scienza', example: 'È un fenomeno interessante. (It\u2019s an interesting phenomenon.)' },
      { word: 'complessità', en: 'complexity', pic: '🌀', ipa: '/komplessiˈta/', pos: 'sost.', cat: 'Scienza', example: 'La complessità richiede pazienza. (Complexity requires patience.)' },
      { word: 'valore', en: 'value', pic: '💎', ipa: '/vaˈlore/', pos: 'sost.', cat: 'Scienza', example: 'I valori della famiglia contano. (Family values matter.)' },
      { word: 'scelta', en: 'choice', pic: '✅', ipa: '/ˈʃɛlta/', pos: 'sost.', cat: 'Scienza', example: 'È una scelta difficile. (It\u2019s a difficult choice.)' },
      { word: 'coerenza', en: 'consistency', pic: '📐', ipa: '/koeˈrɛntsa/', pos: 'sost.', cat: 'Scienza', example: 'La coerenza tra parole e fatti è rara. (Consistency between words and deeds is rare.)' },
      { word: 'prospettiva', en: 'perspective', pic: '👁️', ipa: '/prospetˈtiva/', pos: 'sost.', cat: 'Scienza', example: 'Guardo le cose da un\u2019altra prospettiva. (I see things from another perspective.)' }
    ],
    C2: [
      { word: 'sfumatura', en: 'nuance', pic: '🎨', ipa: '/sfumaˈtura/', pos: 'sost.', cat: 'Cultura', example: 'La lingua è piena di sfumature. (Language is full of nuances.)' },
      { word: 'ambiguità', en: 'ambiguity', pic: '🌫️', ipa: '/ambiɡwiˈta/', pos: 'sost.', cat: 'Cultura', example: 'L\u2019ambiguità può essere voluta. (Ambiguity can be intentional.)' },
      { word: 'ironia', en: 'irony', pic: '🙃', ipa: '/iroˈnia/', pos: 'sost.', cat: 'Cultura', example: 'L\u2019ironia è tipica degli italiani. (Irony is typical of Italians.)' },
      { word: 'sarcasmo', en: 'sarcasm', pic: '😏', ipa: '/sarˈkazzmo/', pos: 'sost.', cat: 'Cultura', example: 'Il sarcasmo ferisce più delle parole. (Sarcasm hurts more than words.)' },
      { word: 'eloquenza', en: 'eloquence', pic: '🗣️', ipa: '/elokˈwɛntsa/', pos: 'sost.', cat: 'Cultura', example: 'La sua eloquenza ha convinto tutti. (His eloquence convinced everyone.)' },
      { word: 'persuasione', en: 'persuasion', pic: '🧲', ipa: '/persuaˈzjone/', pos: 'sost.', cat: 'Cultura', example: 'La persuasione richiede ascolto. (Persuasion requires listening.)' },
      { word: 'critica', en: 'critique', pic: '📝', ipa: '/ˈkritika/', pos: 'sost.', cat: 'Cultura', example: 'La critica costruttiva aiuta a crescere. (Constructive critique helps you grow.)' },
      { word: 'interpretazione', en: 'interpretation', pic: '🔍', ipa: '/interpretatˈtsjone/', pos: 'sost.', cat: 'Cultura', example: 'Ogni testo ha molte interpretazioni. (Every text has many interpretations.)' },
      { word: 'convinzione', en: 'conviction', pic: '🧭', ipa: '/konvinˈtsjone/', pos: 'sost.', cat: 'Cultura', example: 'Parla con convinzione. (He speaks with conviction.)' },
      { word: 'intuito', en: 'intuition', pic: '🔮', ipa: '/inˈtuito/', pos: 'sost.', cat: 'Cultura', example: 'Il suo intuito non sbaglia mai. (His intuition never fails.)' },
      { word: 'saggezza', en: 'wisdom', pic: '🦉', ipa: '/sadˈdʒɛttsa/', pos: 'sost.', cat: 'Cultura', example: 'La saggezza arriva con l\u2019esperienza. (Wisdom comes with experience.)' },
      { word: 'consapevolezza', en: 'awareness', pic: '💡', ipa: '/konsapevolˈɛttsa/', pos: 'sost.', cat: 'Cultura', example: 'La consapevolezza è il primo passo. (Awareness is the first step.)' },
      { word: 'libertà', en: 'freedom', pic: '🕊️', ipa: '/liberˈta/', pos: 'sost.', cat: 'Cultura', example: 'La libertà va difesa ogni giorno. (Freedom must be defended every day.)' },
      { word: 'giustizia', en: 'justice', pic: '⚖️', ipa: '/dʒusˈtittsja/', pos: 'sost.', cat: 'Cultura', example: 'La giustizia è lenta ma arriva. (Justice is slow but it comes.)' },
      { word: 'verità', en: 'truth', pic: '✨', ipa: '/veriˈta/', pos: 'sost.', cat: 'Cultura', example: 'La verità è spesso semplice. (The truth is often simple.)' },
      { word: 'etica', en: 'ethics', pic: '📜', ipa: '/ˈɛtika/', pos: 'sost.', cat: 'Cultura', example: 'L\u2019etica guida le nostre scelte. (Ethics guides our choices.)' },
      { word: 'integrità', en: 'integrity', pic: '🛡️', ipa: '/inteɡriˈta/', pos: 'sost.', cat: 'Cultura', example: 'L\u2019integrità è rara nel mondo. (Integrity is rare in the world.)' },
      { word: 'autenticità', en: 'authenticity', pic: '💠', ipa: '/autentitʃiˈta/', pos: 'sost.', cat: 'Cultura', example: 'Cerco l\u2019autenticità nelle persone. (I look for authenticity in people.)' },
      { word: 'empatia', en: 'empathy', pic: '💞', ipa: '/empaˈtia/', pos: 'sost.', cat: 'Emozioni', example: 'L\u2019empatia si impara ascoltando. (Empathy is learned by listening.)' },
      { word: 'resilienza', en: 'resilience', pic: '🌱', ipa: '/reziliˈɛntsa/', pos: 'sost.', cat: 'Emozioni', example: 'La resilienza si vede nelle difficoltà. (Resilience shows in difficulty.)' },
      { word: 'determinazione', en: 'determination', pic: '🎯', ipa: '/determinatˈtsjone/', pos: 'sost.', cat: 'Emozioni', example: 'Con determinazione tutto è possibile. (With determination everything is possible.)' },
      { word: 'umiltà', en: 'humility', pic: '🌿', ipa: '/umilˈta/', pos: 'sost.', cat: 'Emozioni', example: 'L\u2019umiltà apre molte porte. (Humility opens many doors.)' },
      { word: 'meraviglia', en: 'wonder', pic: '🌟', ipa: '/meraˈviʎʎa/', pos: 'sost.', cat: 'Emozioni', example: 'La meraviglia di un tramonto. (The wonder of a sunset.)' },
      { word: 'malinconia', en: 'melancholy', pic: '🌧️', ipa: '/malinkoˈnia/', pos: 'sost.', cat: 'Emozioni', example: 'La malinconia dell\u2019autunno. (The melancholy of autumn.)' },
      { word: 'nostalgia', en: 'nostalgia', pic: '🕰️', ipa: '/nostalˈdʒia/', pos: 'sost.', cat: 'Emozioni', example: 'Ho nostalgia del mio paese. (I\u2019m nostalgic for my country.)' },
      { word: 'armonia', en: 'harmony', pic: '🎶', ipa: '/arˈmɔnia/', pos: 'sost.', cat: 'Emozioni', example: 'Viviamo in armonia con la natura. (We live in harmony with nature.)' },
      { word: 'caos', en: 'chaos', pic: '🌪️', ipa: '/ˈkaos/', pos: 'sost.', cat: 'Emozioni', example: 'Dal caos nasce l\u2019ordine. (From chaos comes order.)' },
      { word: 'ordine', en: 'order', pic: '🗂️', ipa: '/ˈordine/', pos: 'sost.', cat: 'Emozioni', example: 'L\u2019ordine aiuta la mente. (Order helps the mind.)' },
      { word: 'ritmo', en: 'rhythm', pic: '🥁', ipa: '/ˈritmo/', pos: 'sost.', cat: 'Emozioni', example: 'La musica ha un ritmo contagioso. (The music has a contagious rhythm.)' },
      { word: 'eleganza', en: 'elegance', pic: '🦢', ipa: '/eleˈɡantsa/', pos: 'sost.', cat: 'Emozioni', example: 'Si veste con eleganza naturale. (She dresses with natural elegance.)' }
    ]
  },
  /* ---- reading: IELTS-style passages in Italian ---- */
  topics: [
    {
      title: 'Il caffè e la vita italiana', level: 'A2', intro: 'Una tradizione quotidiana.',
      reading: {
        title: 'Un rito chiamato caffè',
        text: 'In Italia il caffè non è solo una bevanda: è un rito sociale. Ogni mattina milioni di persone entrano al bar, dicono "un caffè" e lo bevono in piedi al banco, spesso con gli amici o i colleghi. Il prezzo al banco è più basso del tavolo, e questo è un dettaglio molto italiano. Il caffè si beve a tutte le ore, ma mai dopo i pasti: gli italiani preferiscono l\u2019espresso come pausa, non come digestivo. Al Nord si usa il cappuccino solo al mattino. In questo modo, il bar diventa un punto di incontro: si parla, si ride, si legge il giornale. Il caffè italiano è espresso, corto e forte, e la sua preparazione è un\u2019arte. Per questo l\u2019Italia ha insegnato al mondo il rituale del caffè.',
        paras: [
          'In Italia il caffè non è solo una bevanda: è un rito sociale. Ogni mattina milioni di persone entrano al bar, dicono "un caffè" e lo bevono in piedi al banco, spesso con gli amici o i colleghi. Il prezzo al banco è più basso del tavolo, e questo è un dettaglio molto italiano.',
          'Il caffè si beve a tutte le ore, ma mai dopo i pasti: gli italiani preferiscono l\u2019espresso come pausa, non come digestivo. Al Nord si usa il cappuccino solo al mattino.',
          'In questo modo, il bar diventa un punto di incontro: si parla, si ride, si legge il giornale. Le persone si fermano per cinque minuti, ma quelle conversazioni creano una comunità.',
          'Il caffè italiano è espresso, corto e forte, e la sua preparazione è un\u2019arte. Per questo l\u2019Italia ha insegnato al mondo il rituale del caffè.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'In Italia il caffè è un rito sociale.', a: 'Vero' },
            { s: 'Il caffè al tavolo costa meno del caffè al banco.', a: 'Falso' },
            { s: 'Al Nord il cappuccino si beve solo al mattino.', a: 'Vero' },
            { s: 'Gli italiani bevono il caffè dopo ogni pasto.', a: 'Falso' },
            { s: 'Il bar italiano serve anche panini caldi.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['banco', 'rituale', 'espresso', 'pausa', 'giornale', 'comunità', 'tavolo', 'cappuccino'], text: [
            'In Italia il caffè è un ____ sociale.', 'Gli italiani lo bevono in piedi al ____.', 'Il bar è un punto di incontro e crea ____.', 'Il caffè italiano è ____, corto e forte.' ], ans: ['rituale', 'banco', 'comunità', 'espresso'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Perché gli italiani bevono il caffè al banco?', opts: ['Perché è più economico.', 'Perché è più buono.', 'Perché non hanno tempo.', 'Perché è più caldo.'], a: 0 },
            { q: 'Cosa NON si beve dopo i pasti?', opts: ['L\u2019acqua.', 'Il vino.', 'L\u2019espresso come pausa.', 'Il tè.'], a: 2 },
            { q: 'Qual è il messaggio principale del testo?', opts: ['Il caffè italiano è il migliore del mondo.', 'Il caffè è parte della vita sociale italiana.', 'Il caffè costa troppo.', 'Il bar è solo per gli anziani.'], a: 1 } ]
        }
      ]
    }
  },
    {
      title: 'La famiglia italiana', level: 'A2', intro: 'I legami che uniscono.',
      reading: {
        title: 'La famiglia: il cuore dell\u2019Italia',
        text: 'In Italia la famiglia è sempre stata il centro della vita sociale. I pranzi della domenica riuniscono genitori, figli, nonni e nipoti intorno a un tavolo pieno di cibo. Molti giovani, per i costi alti, restano a casa con i genitori più a lungo che in altri paesi, e i nonni aiutano spesso con i nipoti. La parola "famiglia" però non indica solo i parenti: indica anche la rete di persone che ci sostengono. Negli ultimi anni la società italiana è cambiata: le famiglie sono più piccole, e nascono nuove forme di convivenza. Tuttavia, il valore dei legami forti rimane centrale. Lo studio dei rapporti familiari mostra che chi ha una rete familiare solida si sente più sicuro e felice. Forse è per questo che, in Italia, a tavola si risolvono molti problemi.',
        paras: [
          'In Italia la famiglia è sempre stata il centro della vita sociale. I pranzi della domenica riuniscono genitori, figli, nonni e nipoti intorno a un tavolo pieno di cibo.',
          'Molti giovani, per i costi alti, restano a casa con i genitori più a lungo che in altri paesi, e i nonni aiutano spesso con i nipoti. La parola "famiglia" però non indica solo i parenti: indica anche la rete di persone che ci sostengono.',
          'Negli ultimi anni la società italiana è cambiata: le famiglie sono più piccole, e nascono nuove forme di convivenza. Tuttavia, il valore dei legami forti rimane centrale.',
          'Lo studio dei rapporti familiari mostra che chi ha una rete familiare solida si sente più sicuro e felice. Forse è per questo che, in Italia, a tavola si risolvono molti problemi.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'I pranzi della domenica riuniscono la famiglia.', a: 'Vero' },
            { s: 'Tutti i giovani italiani escono di casa a 18 anni.', a: 'Falso' },
            { s: 'I nonni aiutano spesso con i nipoti.', a: 'Vero' },
            { s: 'Le famiglie italiane stanno diventando più piccole.', a: 'Vero' },
            { s: 'In Italia il divorzio è illegale.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['domenica', 'parenti', 'piccole', 'rete', 'tavolo', 'sicuro', 'valore', 'giovani'], text: [
            'I pranzi della ____ riuniscono la famiglia.', 'La famiglia indica anche la ____ di persone che ci sostengono.', 'Le famiglie oggi sono più ____.', 'Chi ha una rete solida si sente più ____.' ], ans: ['domenica', 'rete', 'piccole', 'sicuro'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Perché molti giovani restano a casa con i genitori?', opts: ['Per i costi alti.', 'Perché non studiano.', 'Perché non lavorano.', 'Perché amano il cibo.'], a: 0 },
            { q: 'Secondo il testo, la parola "famiglia" indica anche…', opts: ['la casa di famiglia.', 'la rete di persone che ci sostengono.', 'il cognome.', 'il paese di origine.'], a: 1 },
            { q: 'Qual è la conclusione del testo?', opts: ['La famiglia sta scomparendo.', 'I legami forti rendono più felici.', 'I pranzi sono troppo lunghi.', 'I nonni lavorano troppo.'], a: 1 } ]
        }
      ]
    }
  },
    {
      title: 'Roma, la città eterna', level: 'B1', intro: 'Storia e modernità insieme.',
      reading: {
        title: 'La città eterna',
        text: 'Roma unisce duemila anni di storia in una sola città. Nel centro si incontrano il Colosseo, i Fori Imperiali e il Pantheon, mentre a pochi chilometri la vita moderna scorre tra uffici, università e startup. Questa convivenza è la forza e la sfida di Roma: preservare il passato e costruire il futuro. Il turismo porta milioni di visitatori ogni anno, ma crea anche problemi come il traffico e i costi delle abitazioni. Gli archeologi ricordano che sotto la città moderna esiste un\u2019intera Roma sotterranea, ancora da scoprire. Molte istituzioni lavorano per bilanciare conservazione e innovazione, restaurando i monumenti e migliorando i servizi. La città, però, non è solo storia: è anche un laboratorio di idee, dove giovani artisti e imprenditori sperimentano nuove forme di cultura e lavoro.',
        paras: [
          'Roma unisce duemila anni di storia in una sola città. Nel centro si incontrano il Colosseo, i Fori Imperiali e il Pantheon, mentre a pochi chilometri la vita moderna scorre tra uffici, università e startup. Questa convivenza è la forza e la sfida di Roma: preservare il passato e costruire il futuro.',
          'Il turismo porta milioni di visitatori ogni anno, ma crea anche problemi come il traffico e i costi delle abitazioni. Gli archeologi ricordano che sotto la città moderna esiste un\u2019intera Roma sotterranea, ancora da scoprire.',
          'Molte istituzioni lavorano per bilanciare conservazione e innovazione, restaurando i monumenti e migliorando i servizi. I progetti di restauro coinvolgono spesso giovani professionisti.',
          'La città, però, non è solo storia: è anche un laboratorio di idee, dove giovani artisti e imprenditori sperimentano nuove forme di cultura e lavoro.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'Roma unisce storia antica e vita moderna.', a: 'Vero' },
            { s: 'Il turismo crea solo vantaggi per la città.', a: 'Falso' },
            { s: 'Esiste una Roma sotterranea ancora da scoprire.', a: 'Vero' },
            { s: 'Le istituzioni bilanciano conservazione e innovazione.', a: 'Vero' },
            { s: 'Roma è la capitale economica d\u2019Italia.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['storia', 'turismo', 'traffico', 'sotterranea', 'restauro', 'innovazione', 'artisti', 'passato'], text: [
            'Roma unisce duemila anni di ____ in una sola città.', 'Il ____ porta milioni di visitatori.', 'Sotto la città esiste una Roma ____.', 'La città è anche un laboratorio di idee per ____ e imprenditori.' ], ans: ['storia', 'turismo', 'sotterranea', 'artisti'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Quali problemi crea il turismo secondo il testo?', opts: ['Il traffico e i costi delle abitazioni.', 'La chiusura dei musei.', 'La fine della storia.', 'L\u2019inquinamento acustico solo.'], a: 0 },
            { q: 'Cosa cercano di fare le istituzioni?', opts: ['Chiudere i monumenti.', 'Bilanciare conservazione e innovazione.', 'Aumentare il traffico.', 'Vendere la città sotterranea.'], a: 1 },
            { q: 'Qual è il ruolo di Roma nel testo?', opts: ['Solo un museo a cielo aperto.', 'Anche un laboratorio di idee.', 'Una città senza futuro.', 'Un piccolo paese.'], a: 1 } ]
        }
      ]
    }
  },
    {
      title: 'La cucina italiana', level: 'B1', intro: 'Semplicità e territorio.',
      reading: {
        title: 'La dieta che ha conquistato il mondo',
        text: 'La cucina italiana è famosa in tutto il mondo, ma la sua forza è la semplicità: pochi ingredienti, di qualità, preparati con cura. Ogni regione ha i suoi piatti, legati al territorio e alle stagioni: in Emilia la pasta, in Sicilia il pesce, in Puglia l\u2019olio e il pane. Questa varietà nasce dalla storia: l\u2019Italia è stata divisa per secoli, e ogni zona ha sviluppato una propria tradizione. Negli ultimi decenni la cucina italiana è diventata anche un modello culturale: il concetto di dieta mediterranea è riconosciuto come patrimonio dell\u2019umanità. Tuttavia, gli esperti ricordano che la vera cucina italiana è quella di casa, fatta di ricette tramandate di generazione in generazione. Mangiare bene, per gli italiani, significa condividere: la tavola è il luogo dove le persone si incontrano e si raccontano.',
        paras: [
          'La cucina italiana è famosa in tutto il mondo, ma la sua forza è la semplicità: pochi ingredienti, di qualità, preparati con cura. Ogni regione ha i suoi piatti, legati al territorio e alle stagioni.',
          'In Emilia si fa la pasta, in Sicilia il pesce, in Puglia l\u2019olio e il pane. Questa varietà nasce dalla storia: l\u2019Italia è stata divisa per secoli, e ogni zona ha sviluppato una propria tradizione.',
          'Negli ultimi decenni la cucina italiana è diventata anche un modello culturale: il concetto di dieta mediterranea è riconosciuto come patrimonio dell\u2019umanità. Tuttavia, gli esperti ricordano che la vera cucina italiana è quella di casa.',
          'Mangiare bene, per gli italiani, significa condividere: la tavola è il luogo dove le persone si incontrano e si raccontano. Le ricette si tramandano di generazione in generazione.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'La forza della cucina italiana è la semplicità.', a: 'Vero' },
            { s: 'Ogni regione italiana ha gli stessi piatti.', a: 'Falso' },
            { s: 'La dieta mediterranea è patrimonio dell\u2019umanità.', a: 'Vero' },
            { s: 'La vera cucina italiana è quella di casa.', a: 'Vero' },
            { s: 'Gli italiani mangiano solo pasta.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['semplicità', 'territorio', 'stagioni', 'varietà', 'mediterranea', 'casa', 'condividere', 'tavola'], text: [
            'La forza della cucina italiana è la ____.', 'Ogni regione ha piatti legati al ____.', 'La dieta ____ è patrimonio dell\u2019umanità.', 'Mangiare bene significa ____.' ], ans: ['semplicità', 'territorio', 'mediterranea', 'condividere'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Perché ogni regione ha piatti diversi?', opts: ['Perché l\u2019Italia è stata divisa per secoli.', 'Perché i cuochi non viaggiano.', 'Perché il cibo è importato.', 'Perché le stagioni non cambiano.'], a: 0 },
            { q: 'Dove si trova la vera cucina italiana secondo gli esperti?', opts: ['Nei ristoranti di lusso.', 'A casa, nelle ricette di famiglia.', 'Nei fast food.', 'Solo in Emilia.'], a: 1 },
            { q: 'Cosa significa mangiare bene per gli italiani?', opts: ['Mangiare tanto.', 'Mangiare velocemente.', 'Condividere a tavola.', 'Mangiare solo dolci.'], a: 2 } ]
        }
      ]
    }
  },
    {
      title: 'Il lavoro in Italia', level: 'B1', intro: 'Cambiamenti e opportunità.',
      reading: {
        title: 'Il mondo del lavoro che cambia',
        text: 'Il mondo del lavoro italiano sta cambiando rapidamente. Il lavoro a distanza, prima raro, è diventato comune dopo la pandemia, e molte aziende offrono orari flessibili. I settori digitali crescono, mentre alcune professioni tradizionali si trasformano. I giovani cercano un equilibrio tra vita e lavoro, e molti scelgono di aprire piccole imprese creative. Gli esperti del mercato dicono che le competenze più richieste non sono solo tecniche: servono capacità di comunicare, lavorare in gruppo e imparare cose nuove. Le università italiane stanno adattando i corsi, e crescono i programmi di formazione professionale. Tuttavia, restano problemi storici: la disoccupazione giovanile è ancora alta in alcune regioni del Sud. Le soluzioni richiedono tempo, investimenti e collaborazione tra scuole, aziende e istituzioni.',
        paras: [
          'Il mondo del lavoro italiano sta cambiando rapidamente. Il lavoro a distanza, prima raro, è diventato comune dopo la pandemia, e molte aziende offrono orari flessibili.',
          'I settori digitali crescono, mentre alcune professioni tradizionali si trasformano. I giovani cercano un equilibrio tra vita e lavoro, e molti scelgono di aprire piccole imprese creative.',
          'Gli esperti del mercato dicono che le competenze più richieste non sono solo tecniche: servono capacità di comunicare, lavorare in gruppo e imparare cose nuove. Le università stanno adattando i corsi.',
          'Tuttavia, restano problemi storici: la disoccupazione giovanile è ancora alta in alcune regioni del Sud. Le soluzioni richiedono tempo, investimenti e collaborazione tra scuole, aziende e istituzioni.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'Il lavoro a distanza è diventato comune dopo la pandemia.', a: 'Vero' },
            { s: 'Le competenze tecniche sono le uniche richieste.', a: 'Falso' },
            { s: 'Molti giovani aprono piccole imprese creative.', a: 'Vero' },
            { s: 'La disoccupazione giovanile è alta in alcune regioni del Sud.', a: 'Vero' },
            { s: 'Gli stipendi italiani sono i più alti d\u2019Europa.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['distanza', 'flessibili', 'equilibrio', 'competenze', 'disoccupazione', 'formazione', 'collaborazione', 'giovani'], text: [
            'Il lavoro a ____ è diventato comune.', 'Molte aziende offrono orari ____.', 'Le ____ più richieste non sono solo tecniche.', 'La ____ giovanile è alta in alcune regioni.' ], ans: ['distanza', 'flessibili', 'competenze', 'disoccupazione'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Cosa cercano i giovani nel lavoro?', opts: ['Solo lo stipendio.', 'Un equilibrio tra vita e lavoro.', 'Il posto fisso.', 'Lavorare al Nord.'], a: 1 },
            { q: 'Quali competenze servono secondo gli esperti?', opts: ['Solo tecniche.', 'Comunicare, lavorare in gruppo e imparare.', 'Solo lingue.', 'Solo informatica.'], a: 1 },
            { q: 'Cosa richiedono le soluzioni ai problemi del lavoro?', opts: ['Tempo, investimenti e collaborazione.', 'Solo nuove leggi.', 'Chiudere le università.', 'Tornare al passato.'], a: 0 } ]
        }
      ]
    }
  },
    {
      title: 'Tecnologia e vita quotidiana', level: 'B2', intro: 'Libertà o dipendenza?',
      reading: {
        title: 'La tecnologia ci libera o ci imprigiona?',
        text: 'Ogni scroll, notifica e messaggio compete per qualcosa che non torna mai indietro: l\u2019attenzione. Le aziende tecnologiche progettano prodotti per tenere i nostri occhi sullo schermo il più a lungo possibile, perché l\u2019attenzione si trasforma in pubblicità e guadagni. Non è un caso: è un modello di business. I ricercatori suggeriscono contromisure semplici: spegnere le notifiche, tenere il telefono fuori dalla camera da letto e dedicare ore al lavoro profondo. Questi cambiamenti sembrano piccoli, ma restituiscono l\u2019attenzione a blocchi, ed è l\u2019unico modo in cui il pensiero profondo accade. L\u2019obiettivo non è rifiutare la tecnologia, ma usarla in modo consapevole. Lo stesso dispositivo che interrompe può anche connettere, creare e informare. La differenza è chi sceglie: la persona che tiene il telefono, o la notifica.',
        paras: [
          'Ogni scroll, notifica e messaggio compete per qualcosa che non torna mai indietro: l\u2019attenzione. Le aziende tecnologiche progettano prodotti per tenere i nostri occhi sullo schermo il più a lungo possibile, perché l\u2019attenzione si trasforma in pubblicità e guadagni.',
          'Non è un caso: è un modello di business. Più tempo restiamo sull\u2019app, più dati vengono raccolti su ciò che ci trattiene — e più il design si adatta a tenerci.',
          'I ricercatori suggeriscono contromisure semplici: spegnere le notifiche, tenere il telefono fuori dalla camera da letto e dedicare ore al lavoro profondo. Questi cambiamenti sembrano piccoli, ma restituiscono l\u2019attenzione a blocchi, ed è l\u2019unico modo in cui il pensiero profondo accade.',
          'L\u2019obiettivo non è rifiutare la tecnologia, ma usarla in modo consapevole. Lo stesso dispositivo che interrompe può anche connettere, creare e informare. La differenza è chi sceglie: la persona che tiene il telefono, o la notifica.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'L\u2019attenzione si trasforma in pubblicità e guadagni.', a: 'Vero' },
            { s: 'Il design delle app tiene gli utenti più a lungo.', a: 'Vero' },
            { s: 'L\u2019unica soluzione è rifiutare la tecnologia.', a: 'Falso' },
            { s: 'Spegnere le notifiche è una contromisura consigliata.', a: 'Vero' },
            { s: 'La maggior parte delle persone spegne il telefono di notte.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['attenzione', 'business', 'notifiche', 'blocchi', 'consapevole', 'schermo', 'dispositivo', 'camera'], text: [
            'Le aziende competono per la nostra ____.', 'È un modello di ____.', 'Spegnere le ____ è una contromisura.', 'L\u2019obiettivo è usare la tecnologia in modo ____.' ], ans: ['attenzione', 'business', 'notifiche', 'consapevole'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Perché le aziende tengono gli occhi sullo schermo?', opts: ['Perché amano i video.', 'Perché l\u2019attenzione diventa guadagni.', 'Perché gli utenti lo chiedono.', 'Perché è gratis.'], a: 1 },
            { q: 'Qual è l\u2019unico modo in cui accade il pensiero profondo?', opts: ['Con più notifiche.', 'A blocchi di attenzione restituita.', 'Con lo scroll continuo.', 'Di notte.'], a: 1 },
            { q: 'Qual è il messaggio finale?', opts: ['Rifiutare ogni dispositivo.', 'Usare la tecnologia in modo consapevole.', 'Non usare mai internet.', 'Comprare un telefono nuovo.'], a: 1 } ]
        }
      ]
    }
  },
    {
      title: 'L\u2019ambiente', level: 'B2', intro: 'Scelte piccole, effetti grandi.',
      reading: {
        title: 'Piccole azioni, grandi sistemi',
        text: 'È facile sentirsi impotenti di fronte all\u2019ambiente, eppure il cambiamento comincia spesso da scelte ordinarie. Trasporti, cibo ed energia dominano la nostra impronta personale, quindi decisioni quotidiane — prendere l\u2019autobus, mangiare meno carne, abbassare il riscaldamento — si sommano su tutta la popolazione. La matematica della scala è sorprendente: il piccolo cambiamento di una famiglia è invisibile, ma lo stesso cambiamento ripetuto da milioni di famiglie muove i mercati. Quando i consumatori cambiano abitudini, le aziende ridisegnano prodotti e filiere. Gli scienziati dell\u2019ambiente sono chiari: l\u2019azione individuale da sola non risolve la crisi; governi e industria devono agire su larga scala. Ma la pressione pubblica è ciò che spinge le istituzioni a muoversi, e quella pressione comincia con cittadini informati. L\u2019azione personale non è tutta la soluzione, ma ne è il seme.',
        paras: [
          'È facile sentirsi impotenti di fronte all\u2019ambiente, eppure il cambiamento comincia spesso da scelte ordinarie. Trasporti, cibo ed energia dominano la nostra impronta personale, quindi decisioni quotidiane — prendere l\u2019autobus, mangiare meno carne, abbassare il riscaldamento — si sommano su tutta la popolazione.',
          'La matematica della scala è sorprendente: il piccolo cambiamento di una famiglia è invisibile, ma lo stesso cambiamento ripetuto da milioni di famiglie muove i mercati. Quando i consumatori cambiano abitudini, le aziende ridisegnano prodotti e filiere.',
          'Gli scienziati dell\u2019ambiente sono chiari: l\u2019azione individuale da sola non risolve la crisi; governi e industria devono agire su larga scala.',
          'Ma la pressione pubblica è ciò che spinge le istituzioni a muoversi, e quella pressione comincia con cittadini informati. L\u2019azione personale non è tutta la soluzione, ma ne è il seme.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'Trasporti, cibo ed energia dominano l\u2019impronta personale.', a: 'Vero' },
            { s: 'Il cambiamento di una famiglia è visibile nelle statistiche.', a: 'Falso' },
            { s: 'L\u2019azione individuale da sola risolve la crisi.', a: 'Falso' },
            { s: 'Le aziende ridisegnano i prodotti quando cambiano i consumatori.', a: 'Vero' },
            { s: 'I governi agiscono sempre prima dei cittadini.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['energia', 'mercati', 'pressione', 'cittadini', 'crisi', 'abitudini', 'consumatori', 'seme'], text: [
            'Trasporti, cibo ed ____ dominano l\u2019impronta personale.', 'Il cambiamento ripetuto muove i ____.', 'La ____ pubblica spinge le istituzioni.', 'L\u2019azione personale è il ____ della soluzione.' ], ans: ['energia', 'mercati', 'pressione', 'seme'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Perché le aziende ridisegnano i prodotti?', opts: ['Perché cambiano i consumatori.', 'Per legge.', 'Perché finiscono i materiali.', 'Perché lo chiedono gli scienziati.'], a: 0 },
            { q: 'Cosa non si risolve con le scelte di acquisto?', opts: ['Il riciclo a casa.', 'La discussione pubblica.', 'Il cambiamento sistemico di energia e trasporti.', 'Le piccole azioni.'], a: 2 },
            { q: 'Qual è l\u2019argomento finale dell\u2019autore?', opts: ['Solo i governi possono agire.', 'Solo gli individui possono agire.', 'L\u2019azione personale è il seme che dà permesso ai governi.', 'La crisi è impossibile da risolvere.'], a: 2 } ]
        }
      ]
    }
  },
    {
      title: 'L\u2019italiano nel mondo', level: 'C1', intro: 'Una lingua che viaggia.',
      reading: {
        title: 'La lingua della bellezza',
        text: 'L\u2019italiano è parlato da circa 65 milioni di persone come lingua madre, ma la sua influenza va molto oltre. È la lingua della musica classica, dell\u2019opera e della moda; parole come allegro, aria e soprano sono entrate nelle lingue del mondo intero. Negli ultimi anni l\u2019italiano è anche diventato popolare come lingua di studio: le università italiane attirano studenti internazionali, e i corsi di lingua crescono in tutto il mondo. Questa diffusione non è solo culturale ma anche economica: le imprese italiane del design, del cibo e del turismo cercano professionisti che parlino la loro lingua. Tuttavia, la lingua si evolve: l\u2019italiano contemporaneo assorbe parole inglesi e nuove espressioni, e i linguisti discutono su quanto sia giusto proteggere la tradizione. La vitalità di una lingua, dicono gli esperti, non si misura con la purezza, ma con la capacità di rinnovarsi restando se stessa.',
        paras: [
          'L\u2019italiano è parlato da circa 65 milioni di persone come lingua madre, ma la sua influenza va molto oltre. È la lingua della musica classica, dell\u2019opera e della moda; parole come allegro, aria e soprano sono entrate nelle lingue del mondo intero.',
          'Negli ultimi anni l\u2019italiano è anche diventato popolare come lingua di studio: le università italiane attirano studenti internazionali, e i corsi di lingua crescono in tutto il mondo.',
          'Questa diffusione non è solo culturale ma anche economica: le imprese italiane del design, del cibo e del turismo cercano professionisti che parlino la loro lingua.',
          'Tuttavia, la lingua si evolve: l\u2019italiano contemporaneo assorbe parole inglesi e nuove espressioni, e i linguisti discutono su quanto sia giusto proteggere la tradizione. La vitalità di una lingua, dicono gli esperti, non si misura con la purezza, ma con la capacità di rinnovarsi restando se stessa.'
        ],
        tasks: [
          { type: 'TFNG', range: 'Domande 1–5', intro: 'Secondo il testo, le affermazioni sono Vero, Falso o Non indicato?', items: [
            { s: 'L\u2019italiano è la lingua dell\u2019opera e della moda.', a: 'Vero' },
            { s: 'Le università italiane attirano studenti internazionali.', a: 'Vero' },
            { s: 'L\u2019italiano contemporaneo non cambia mai.', a: 'Falso' },
            { s: 'Le imprese italiane cercano professionisti che parlino l\u2019italiano.', a: 'Vero' },
            { s: 'L\u2019italiano è la lingua più parlata al mondo.', a: 'Non indicato' } ] },
          { type: 'SUMMARY', range: 'Domande 6–9', intro: 'Completa il riassunto con le parole A–H.', bank: ['madre', 'opera', 'studio', 'economica', 'evolve', 'inglesi', 'rinnovarsi', 'tradizione'], text: [
            'L\u2019italiano è lingua ____ per circa 65 milioni di persone.', 'È la lingua dell\u2019____ e della moda.', 'La diffusione è culturale ma anche ____.', 'La vitalità di una lingua è la capacità di ____.' ], ans: ['madre', 'opera', 'economica', 'rinnovarsi'] },
          { type: 'MCQ', range: 'Domande 10–12', intro: 'Scegli la risposta corretta, A, B, C o D.', items: [
            { q: 'Quali parole italiane sono entrate nelle lingue del mondo?', opts: ['allegro, aria, soprano', 'computer, internet, software', 'caffè solo', 'pizza, spaghetti, mozzarella solo'], a: 0 },
            { q: 'Perché le imprese cercano persone che parlino italiano?', opts: ['Per il design, il cibo e il turismo.', 'Solo per il turismo.', 'Per la musica.', 'Per i tribunali.'], a: 0 },
            { q: 'Secondo gli esperti, come si misura la vitalità di una lingua?', opts: ['Con la purezza.', 'Con la capacità di rinnovarsi restando se stessa.', 'Con il numero di dialetti.', 'Con la letteratura antica.'], a: 1 } ]
        }
      ]
    }
  }
],
  /* ---- researched resources: books, channels, sites ---- */
  resources: {
    books: [
      { name: 'Nuovissimo Progetto Italiano 1–4', who: 'Telis Marin · Edilingua', lvl: 'A1–C2', note: 'The most complete course series: coursebook, workbook, interactive platform (i-d-e-e.it), videos and tests. The model for our three-book structure.' },
      { name: 'Nuovo Espresso 1–5', who: 'Alma Edizioni', lvl: 'A1–C2', note: 'Modern coursebook loved worldwide; fully in Italian from day one, with audio, video and online subscription.' },
      { name: 'Chiaro! 1–3', who: 'Alma Edizioni', lvl: 'A1–B1', note: 'Clear, communicative coursebook with a strong focus on speaking and everyday situations.' },
      { name: 'Via del Corso A1–B2', who: 'Edilingua', lvl: 'A1–B2', note: 'Narrative-driven course: each unit follows a story, ideal for teens and young adults.' },
      { name: 'Al dente 1–3', who: 'Difusion / CLE', lvl: 'A1–B1', note: 'Visual, task-based coursebook with digital resources and authentic materials.' },
      { name: 'Nuova grammatica pratica della lingua italiana', who: 'Susanna Nocchi · Alma Edizioni', lvl: 'A1–B2', note: 'The Italian answer to Grammar in Use: theory on the left, exercises on the right, answer key included.' },
      { name: 'Grammatica avanzata della lingua italiana', who: 'Alma Edizioni', lvl: 'B2–C2', note: 'Advanced grammar with explanations in Italian and CELI/CILS exam practice.' },
      { name: 'Via della Grammatica', who: 'Edilingua', lvl: 'A1–B2', note: 'Grammar with short explanations, many exercises and thematic vocabulary boxes.' }
    ],
    channels: [
      { name: 'Learn Italian with Lucrezia', who: 'Lucrezia Oddone (DITALS)', lvl: 'A1–B2+', note: 'Grammar lessons, vlogs and live Saturday study groups with subtitles. The most trusted teacher-channel for Italian.' },
      { name: 'Italy Made Easy', who: 'Manu Venditti', lvl: 'A1–C1', note: 'Clear video lessons in English + Italian, downloadable resources and structured courses.' },
      { name: 'Italiano Automatico', who: 'Alberto Arrighini', lvl: 'A2–B2', note: 'Comprehensible input: real conversations and stories to absorb the language naturally.' },
      { name: 'LearnAmo', who: 'Graziana e Rocco', lvl: 'A1–B2', note: 'Short, lively grammar and vocabulary videos with subtitles and exercises.' },
      { name: 'Podcast Italiano', who: 'Davide Gemmano', lvl: 'B1–C1', note: 'Podcast with transcriptions; episodes on culture, language and current topics for intermediate+ learners.' },
      { name: 'Weilà Tom', who: 'Tom (Italiano con Tom)', lvl: 'A2–B1', note: 'Entertaining videos that mix Italian with English, great for beginner-intermediate students.' }
    ],
    sites: [
      { name: 'One World Italiano', lvl: 'A1–C2', note: 'Free grammar lessons, exercises and culture articles — a complete online reference.' },
      { name: 'Rai Scuola / RaiPlay', lvl: 'B1–C2', note: 'Authentic Italian TV: news, documentaries and series with real language from everyday life.' },
      { name: 'Alma Edizioni', lvl: 'A1–C2', note: 'Publisher with free samples, teacher resources, podcasts and the Nuovo Espresso platform.' },
      { name: 'Edilingua / i-d-e-e.it', lvl: 'A1–C2', note: 'Publisher platform with interactive workbooks, e-books, games and the Progetto Italiano series.' },
      { name: 'Loescher', lvl: 'A2–C2', note: 'Free Italian grammar exercises and vocabulary activities for school and adult learners.' },
      { name: 'WordReference / Treccani', lvl: 'A1–C2', note: 'The best dictionaries: WordReference for bilingual lookups, Treccani for the authoritative Italian dictionary.' }
    ]
  }
};

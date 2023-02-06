const names = ['Family', 'Dear guests', 'Fellow workers', 'Lovely human beings', 'Subjects', 'Brothers and Sisters', 'Sentient AIs'];
const adj = ['terrible', 'devastating', 'unexpected', 'passionate', 'sad', 'confusing', 'happy', 'strange', 'uncertain', 'false', 'unlucky'];
const verb = ['eliminating', 'reducing', 'decimating', 'cutting', 'destroying', 'freeing', 'resetting'];
const phrase = ['I take full responsibility', 'Leaderships is sad about this', 'Our investors are crying right now', 'The cat is under the table', 'We will survive', 'I believe in our company and long term vision', 'This minor setback won\'t stop us', 'Please, leave your badges at the front-office'];
const bossName = ['Andy', 'Mark', 'Sundar', 'Elon', 'Jeff', 'Patrick', 'Draymond', 'Lebron', 'Steph', 'Mohammed', 'Exa Dark Sideræl'];
const title = ['TecnoKing', 'CEO', 'Boss', 'Owner of the World', 'Visionary', 'Chief ChatGPT Prompter', 'Your Father', 'Lord of the Rings', 'Supreme Guardian of the Galaxy', 'Servant of the People', 'Disruptor']

const generateLayoffStatement = () => {
  let randNames = names[Math.floor(Math.random() * names.length)];
  let randAdj = adj[Math.floor(Math.random() * adj.length)];
  let randVerb = verb[Math.floor(Math.random() * verb.length)];
  let randPhrase = phrase[Math.floor(Math.random() * phrase.length)];
  let randBossName = bossName[Math.floor(Math.random() * bossName.length)];
  let randTitle = title[Math.floor(Math.random() * title.length)];
  console.log(`${randNames}, I have ${randAdj} news to share. Today we're ${randVerb} about ${Math.floor(Math.random() * 100)}% of our team and letting go ${Math.floor(Math.random() * 100000)} of our employess. ${randPhrase}.`);
  console.log(`- ${randBossName}, ${randTitle}`)
}

generateLayoffStatement();
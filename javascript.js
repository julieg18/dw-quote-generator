let dwQuotes = [
  "Pain is a gift. Without the capacity for pain we can't feel the hurt we inflict.", 
  "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things but vice versa the bad things don't necessarily spoil the good things and make them unimportant.",
  "You're so thick! You're Mr. Thick Thick Thickety Thickface from Thicktown, Thickania. And so is your dad!",
  "Everybody knows that everybody dies. And nobody knows it like the Doctor. But I think all the skies in the world might just turn dark if he ever, for one moment accepts it.", 
  "We all change when you think about it. We're all different people through our lives and that's okay. That's good. You've got to keep moving as long as you remember all the people that you used to be.",
  "We're all capable of the most incredible change. We can evolve while still staying true to who we are. We can honour who we've been and choose who we want to be next.",
  "We're all stories in the end. Just make it a good one.",
  "Some people live more in 20 years than others do in 80. It's not the time that matters, it's the person.",
  "Geronimo!",
  "Allonsy!",
  "Fantastic!",
  "When you fire that first shot, no matter how right you feel, you have no idea who's going to die! You don't know whose children are going to scream and burn! How many hearts will be broken! How many lives shattered! How much blood will spill until everybody does what they were always going to do from the beginning: sit down and talk!",
  "Love, it's not a emotion. Love is a promise.",
  "Fear doesn't have to make you cruel or cowardly. Fear can make you kind.",
  "Exterminate!",
  "The universe is big. It's vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.",
  "You want weapons? We're in a library! Books! The best weapons in the world!",
  "Amy Pond, there’s something you’d better understand about me because it’s important, and one day your life may depend on it: I am definitely a mad man with a box!",
  "When you’re a kid, they tell you it’s all… Grow up, get a job, get married, get a house, have a kid, and that’s it. But the truth is, the world is so much stranger than that. It’s so much darker. And so much madder. And so much better.",
  "Do what I do. Hold tight and pretend it’s a plan!",
  "In 900 years of time and space, I’ve never met anyone who wasn’t important",
  "Never ignore coincidence. Unless, of course, you’re busy. In which case, always ignore coincidence.",
  "There’s a lot of things you need to get across this universe. Warp drive… wormhole refractors… You know the thing you need most of all? You need a hand to hold.",
  "I am and always will be the optimist. The hoper of far-flung hopes and the dreamer of improbable dreams.",
  "Everybody knows that everybody dies. But not every day. Not today. Some days are special. Some days are so, so blessed. Some days, nobody dies at all. Now and then, every once in a very long while, every day in a million days, when the wind stands fair and the Doctor comes to call, everybody lives.",
  "Letting it get to you. You know what that’s called? Being alive. Best thing there is. Being alive right now is all that counts.",
  "Always take a banana to a party, Rose. Bananas are good.",
  "You don’t just give up. You don’t just let things happen. You make a stand! You say no! You have the guts to do what’s right, even when everyone else just runs away.",
  "This is one corner… of one country, in one continent, on one planet that’s a corner of a galaxy that’s a corner of a universe that is forever growing and shrinking and creating and destroying and never remaining the same for a single millisecond. And there is so much, so much to see.",
  "Rose, before I go, I just want to tell you: you were fantastic. Absolutely fantastic. And you know what? So was I.",
  "You know, the very powerful and the very stupid have one thing in common: they don't alter their views to fit the facts; they alter the facts to fit their views.",
  "The day you lose someone isn't the worst. It's all the days they stay dead.",
  "Hardly anything is evil, but most things are hungry. Hunger looks very like evil from the wrong end of the cutlery or do you think your bacon sandwich loves you back?",
  "Never be cruel, never be cowardly. Hate is always foolish and love is always wise. Always try to be nice, but never fail to be kind. Laugh hard, run fast, be kind. Doctor, I let you go.",
  "Courage isn't just a matter of not being frightened, you know. It's being afraid and doing what you have to do anyway.",
  "You're always going to be afraid, even if you learn to hide it. Fear is like a constant companion. A constant companion, always there. But that's okay, becuase fear can bring us together.",
  "I am not a good man! And I'm not a bad man. I am not a hero. And I'm definitely not a president. And, no, I'm not a officer. Do you know what I am? I am an idiot, with a box and a screwdriver.",
  "Never trust a hug. It's just a way of hiding your face.",
  "Sometimes the only choices you have are bad ones, but you still have to choose.",
  "Everything ends and it's always sad. But everything begins again too. And that's always happy. Be happy.",
  "I'm just a traveler. Sometimes I see things need fixin'. I do what I can.",
  "I'm the Doctor. I work in a shop now. I am here to help. Look, they gave me a badge with my name on it in case I forget who I am. Very thoughtful as that does happen."
]
    
let dwAuthors = [
  "- The 12th Doctor", 
  "- The 11th Doctor", 
  "- 10th Doctor", 
  "- River Song", 
  "- The 11th Doctor", 
  "- The 13th Doctor", 
  "- The 11th Doctor", 
  "- The 10th Doctor", 
  "- The 11th Doctor", 
  "- The 10th Doctor", 
  "- The 9th Doctor", 
  "- The 12th Doctor", 
  "- The 12th Doctor", 
  "- Clara Oswald",
  "- Dalek",
  "- The 11th Doctor",
  "- The 10th Doctor",
  "- The 11th Doctor",
  "- Elton Pope",
  "- The 11th Doctor",
  "- The 11th Doctor",
  "- The 11th Doctor",
  "- The 10th Doctor",
  "- The 11th Doctor",
  "- River Song",
  "- The 11th Doctor",
  "- The 10th Doctor",
  "- Rose Tyler",
  "- The 11th Doctor",
  "- The 9th Doctor",
  "- The 4th Doctor",
  "- The 12th Doctor",
  "- The 12th Doctor",
  "- The 12th Doctor",
  "- The 3rd Doctor",
  "- Clara Oswald",
  "- The 12th Doctor",
  "- The 12th Doctor",
  "- The 12th Doctor",
  "- The 12th Doctor",
  "- The 13th Doctor",
  "- The 11th Doctor"
]
    
function newQuote() {
  let randomNumber = Math.floor(Math.random() * (dwQuotes.length))
  document.getElementById("text").innerHTML = dwQuotes[randomNumber]
  document.getElementById("author").innerHTML = dwAuthors[randomNumber]
}
    
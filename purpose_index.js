console.log('JavaScript file is connected and running.');
//  data of values
const values = [
    { name: "Accountability", description: "You take responsibility for your actions and their consequences, and you respect others who do the same." },
    { name: "Awareness", description: "You take pride in your conscious awareness of what exists or is happening around you – as well as within you." },
    { name: "Balance", description: "You want everything in your life to be in the right proportion to everything else; no one thing dominates your life." },
    { name: "Beauty", description: "You make time to enjoy everything you perceive with your senses that makes you feel an inexplicable surge of happiness." },
    { name: "Boldness", description: "Those who are bold aren’t necessarily fearless; they’re just good at giving the impression that they are." },
    { name: "Calmness", description: "Think of the stillness of a lake’s surface when nothing disturbs it." },
    { name: "Cleanliness", description: "Essentially, this is the absence of any filth or contaminant — and you work to maintain it." },
    { name: "Closeness", description: "This word implies intimacy or a strong personal bond, especially between people." },
    { name: "Commitment", description: "Commitment is the difference between a goal and a daydream; it involves decisive action." },
    { name: "Compassion", description: "When someone has hurt you, you value sympathy and forgiveness more than the chance to punish them." },
    { name: "Confidence", description: "You have unshakable faith in your own powers or rightness of purpose or a strong desire to feel that faith." },
    { name: "Connection", description: "Without a deep, personal connection, you can’t feel attracted to someone." },
    { name: "Consciousness", description: "Living intentionally means living consciously, but you may be seeking consciousness on a higher level." },
    { name: "Contentment", description: "Contentment is a mental or emotional state of satisfaction wrapped in peacefulness." },
    { name: "Cooperation", description: "You value your ability to work toward a common goal as part of a team; meaningful collaboration is central to your mission." },
    { name: "Courage", description: "Courage is the ability to do what needs to be done in spite of fear." },
    { name: "Creativity", description: "Creativity uses the imagination to create new things and find new solutions to problems." },
    { name: "Decisiveness", description: "You place a high value on your capacity for making decisions quickly and effectively." },
    { name: "Determination", description: "Determination is a firmness of purpose in spite of challenges in the relentless pursuit of a goal." },
    { name: "Dependability", description: "Others can count on you to do everything possible to keep your commitments, and you want the same from them." },
    { name: "Dignity", description: "You feel strongly that people should be treated in a way that show’s respect for them as fully conscious equals." },
    { name: "Diligence", description: "Someone who is diligent is persistent and careful in his work or other efforts." },
    { name: "Discipline", description: "Think of this as a set of expectations for yourself or others and the means used to enforce them." },
    { name: "Discovery", description: "This is the act of finding out or learning something new through exploration or experimentation." },
    { name: "Diversity", description: "You’re committed to exposing yourself to and appreciating the diversity of cultures, experiences, and beliefs in the world." },
    { name: "Duty", description: "Think of the moral or legal obligations that bind you or someone else — and your commitment to seeing those obligations are met." },
    { name: "Education", description: "Consider this the process of learning through study, exploration, instruction, experimentation, or recreation." },
    { name: "Effectiveness", description: "Something is effective if it succeeds in producing the desired result." },
    { name: "Empathy", description: "You feel what others feel, and you probably consider this empathic value as an essential part of your identity." },
    { name: "Encouragement", description: "You cherish the ability to give hope to others and build up their confidence." },
    { name: "Excellence", description: "To excel is to be outstanding in something or to have an exceptional degree of some knowledge or ability." },
    { name: "Experience", description: "This can be a felt encounter with something or the foundation of your superior knowledge and understanding of something." },
    { name: "Expertise", description: "You embrace the title of expert in your field because you excel in your knowledge or skill" },
    { name: "Exploration", description: "If you enjoy traveling in or through new places to learn about them, you have the heart of an explorer." },
    { name: "Fairness", description: "With your strong sense of justice, you insist on equal pay for the same amount and quality of work." },
    { name: "Faith", description: "Faith is complete trust in someone or something, and it stands apart from both fanaticism and complacency." },
    { name: "Flexibility", description: "You place a high value on your ability to bend easily without breaking — physically, mentally, or emotionally." },
    { name: "Focus", description: "You pride yourself on your ability to focus on something (or someone) to the exclusion of everything else." },
    { name: "Freedom", description: "Freedom is the ability to do what you must without interference from external or internal forces." },
    { name: "Frugality", description: "You take pride in the way you handle your finances and in your avoidance of waste and unnecessary expenditure." },
    { name: "Fun", description: "You look for ways to delight or amuse others to enhance their enjoyment of life — and your own; making time for fun is a priority." },
    { name: "Generosity", description: "You enjoy giving of yourself and of your time and other resources to others, and you want to pass along this value to your children." },
    { name: "Gratitude", description: "It’s vitally important to you to show thankfulness and express your appreciation for the good things in your life." },
    { name: "Growth", description: "You invest a considerable amount of your time and energy in your own personal development and in that of others." },
    { name: "Happiness", description: "Experiencing and sharing joy, satisfaction, and contentment are high priorities for you." },
    { name: "Health", description: "You prioritize a wholesome diet and an effective fitness regimen. You also recognize the value of self-care to your well-being." },
    { name: "Honesty", description: "You place a high value on truthfulness in others, and you’ve made sacrifices to develop or preserve this quality in yourself." },
    { name: "Hopefulness", description: "You pride yourself on your optimism or sanguine perspective on the future." },
    { name: "Humility", description: "Humble people base their self-worth on what they know to be true about themselves, and this makes them immune to the opinions of others." },
    { name: "Humor", description: "You prioritize laughter for yourself and seek to bring more of it to others." },
    { name: "Integrity", description: "Integrity is when your actions and words are in congruence with your beliefs." },
    { name: "Intimacy", description: "Intimacy can refer to close relationships or to activities that bring two people closer together." },
    { name: "Intuition", description: "Gut-level directions and insights are your 24-7 copilot (or maybe even your pilot)." },
    { name: "Kindness", description: "You treat people exactly as you would want to be treated, and your kindness attracts others." },
    { name: "Leadership", description: "The motto, “Throw me to the wolves, and I’ll return leading the pack” resonates strongly with you." },
    { name: "Learning", description: "You find opportunities for learning everywhere you go, and you can’t imagine your education ending before you do." },
    { name: "Love", description: "To show and to experience love in its fullness is inseparable from your will to live and your sense of self." },
    { name: "Loyalty", description: "You expect the people close to you to be unwavering in their faithfulness, just as you are to them; loyalty is love put to the test." },
    { name: "Mindfulness", description: "Living in the present moment and enjoying all the good things in it — with intention and gratitude — is vital to you." },
    { name: "Moderation", description: "You enjoy all good things in modest or measured amounts — all the better to savor them and leave more for others." },
    { name: "Motivation", description: "You breathe in motivation throughout the day and keep the fire in you stoked and ready; you also love to motivate others." },
    { name: "Openness", description: "You leave your eyes, your mind, and your heart open to new people, new knowledge, and new experiences." },
    { name: "Optimism", description: "You believe your tendency to focus on blessings and expect more of them is more in alignment with the truth than pessimism." },
    { name: "Organization", description: "You value order — keeping everything in its place and making it easier to keep your spaces clean, clutter-free, and calming." },
    { name: "Originality", description: "You love the novelty and buzz of new ideas, adventures, and artistic expressions; you breathe originality into each new creation." },
    { name: "Passion", description: "You feel fully alive and electric about your life, your purpose, your relationships, and the work you do." },
    { name: "Peacefulness", description: "Life is too short to spend it in turmoil; let there be calm, forgiveness, and harmony within you and in your relationships." },
    { name: "Persuasiveness", description: "You value the power of communicating effectively and persuading others to do things or to share your perspective." },
    { name: "Professionalism", description: "Professionalism is kindness in a business suit; you treat your customers, coworkers, and other contacts as equals." },
    { name: "Reason (or Logic)", description: "Dismantling poorly-constructed arguments and countering them with effective reasoning is your Legoland." },
    { name: "Resilience", description: "Your life motto could be “Use it,” because no pain or mistake is ever wasted — and you never give up." },
    { name: "Respect", description: "Whether it’s authority, accomplishments, or service, you feel compelled to honor it with a certain degree of deference." },
    { name: "Sacrifice", description: "You know that real love involves sacrifice — giving up something good for something better or to serve someone else." },
    { name: "Security", description: "You want to feel free or safe from danger or the threat of violence to you or to those you care about." },
    { name: "Sensitivity", description: "Your greater susceptibility to pain comes with a greater receptivity to beauty and inspiration." },
    { name: "Sensuality", description: "You’ll try anything once and some things on a daily basis, if possible — just to enjoy the sense experience." },
    { name: "Serenity", description: "You value your peace of mind so much, you prioritize words and actions that help you preserve it." },
    { name: "Significance", description: "It’s not enough for you to get stuff done; that stuff has to have deep personal meaning or it has to contribute to a meaningful goal." },
    { name: "Simplicity", description: "You like to keep things simple and to expel things from your life that make you feel cluttered inside or tied down by a million threads." },
    { name: "Sincerity", description: "You’re drawn to genuine people, even if they’re not always nice; you admire their authenticity and work to emulate it." },
    { name: "Spirituality", description: "You believe not only in the existence of spirits but also their power and your ability to connect with others through your own." },
    { name: "Stability", description: "You need to feel that each step will meet solid, level ground; you hate uncertainty and imbalance and look for ways to correct both." },
    { name: "Strength", description: "You cultivate bodily strength as well as inner fortitude, and you recognize and admire it in others." },
    { name: "Structure", description: "The best stories (and buildings, etc.) have a solid, reliable structure, and you appreciate this when you see it." },
    { name: "Success", description: "Essentially this word means you’ve obtained the results you wanted — ideally without doing something you’ll regret." },
    { name: "Support", description: "You want to feel supported by others, and to be the kind of person others can count on for support when they need it." },
    { name: "Sympathy", description: "Rather than rush to judgment, you put yourself in the other person’s shoes and try to see the situation from their perspective." },
    { name: "Thoughtfulness", description: "You put thought into the gifts you give and the actions you take for others, and you appreciate it when others do the same." },
    { name: "Thrift", description: "You spend as little as you can on everything from food to clothing to that new (to you) used car — regardless of your income." },
    { name: "Timeliness", description: "You value other people’s time and expect them to return the favor by being punctual and finishing things in a timely manner." },
    { name: "Trust", description: "You want people to know they can count on you to keep their secrets and have their backs, and you want to be able to expect the same." },
    { name: "Understanding", description: "When you truly know someone or something, you comprehend them with your heart as well as your mind." },
    { name: "Uniqueness", description: "You delight in your own uniqueness, and you enjoy helping others appreciate how they are unique and why it matters." },
    { name: "Usefulness", description: "You value utility in the things you hold onto. You also strive to make yourself useful when the situation calls for it." },
    { name: "Virtue", description: "You appreciate virtue when you see it in others, and you work at cultivating it in yourself." },
    { name: "Vision", description: "You see things most others miss, and you pursue things most others consider impossible." },
    { name: "Warmth", description: "Warm and messy trumps cold and immaculate every time; it’s all about the people." },
    { name: "Wealth", description: "You want to never have to wonder, “Do I have enough in the bank?” Wealth means living your life without being limited by money." },
    { name: "Wisdom", description: "True and profound insights into people and things are a defining characteristic for you — or one you greatly admire in others." },
    { name: "Worthiness", description: "You feel renewed when someone or something reminds you of your worth." },

  ];
  
  let selectedValues = [];
  let currentComparison = [];
  
  document.addEventListener("DOMContentLoaded", () => {
    // Initialize Stage 1 with values
    const valuesList = document.getElementById("values-list");
    values.forEach((value, index) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `value-${index}`;
      checkbox.value = value.name;
      
      const label = document.createElement('label');
      label.setAttribute('for', `value-${index}`);
      //label.innerText = value.name;
      
     /* valuesList.appendChild(checkbox);
      valuesList.appendChild(label); */

      // Create span with title (tooltip)
      const span = document.createElement('span');
      span.title = value.description;  // Tooltip
      span.innerText = value.name;     // Displayed text

      // Append the checkbox and label
      valuesList.appendChild(checkbox);
      valuesList.appendChild(label);
      label.appendChild(span);

    });
  });
  
  // Move to Stage 2 (Cull to 15)
  function goToStage2() {
    selectedValues = Array.from(document.querySelectorAll('#values-list input:checked'))
      .map(input => input.value);
    
    if (selectedValues.length > 0) {
      document.getElementById('stage-1').classList.add('hidden');
      document.getElementById('stage-2').classList.remove('hidden');
  
      const stage2List = document.getElementById("stage2-list");
      stage2List.innerHTML = ''; // Clear previous values
      selectedValues.forEach(value => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `stage2-${value}`;
        checkbox.value = value;
  
        const label = document.createElement('label');
        label.setAttribute('for', `stage2-${value}`);
        label.innerText = value;

      /*      // Create span with title (tooltip)
        const span = document.createElement('span');
        span.title = value.description;  // Tooltip
        span.innerText = value.name;     // Displayed text

        // Append the checkbox and label
    */
        stage2List.appendChild(checkbox);
        stage2List.appendChild(label);
        //label.appendChild(span);


      });
    } else {
      alert("Please select at least one value.");
    }
  }
  
  // Move to Stage 3 (Cull to 10)
  function goToStage3() {
    selectedValues = Array.from(document.querySelectorAll('#stage2-list input:checked'))
      .map(input => input.value);
    
    if (selectedValues.length === 15) {
      document.getElementById('stage-2').classList.add('hidden');
      document.getElementById('stage-3').classList.remove('hidden');
  
      const stage3List = document.getElementById("stage3-list");
      stage3List.innerHTML = ''; // Clear previous values
      selectedValues.forEach(value => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `stage3-${value}`;
        checkbox.value = value;
  
        const label = document.createElement('label');
        label.setAttribute('for', `stage3-${value}`);
        label.innerText = value;
/*
        // Create span with title (tooltip)
        const span = document.createElement('span');
        span.title = value.description;  // Tooltip
        span.innerText = value.name;     // Displayed text
*/
        // Append the checkbox and label
  
        stage3List.appendChild(checkbox);
        stage3List.appendChild(label);
 //       label.appendChild(span);

      });
    } else {
      alert("Please select exactly 15 values.");
    }
  }
  
  // Move to Stage 4 (Flashcard Ranking)
  function goToStage4() {
    finalValues = Array.from(document.querySelectorAll('#stage3-list input:checked'))
      .map(input => input.value);
  
    if (finalValues.length === 10) {
      document.getElementById('stage-3').classList.add('hidden');
      document.getElementById('stage-4').classList.remove('hidden');
  
      startRanking();
    } else {
      alert("Please select exactly 10 values.");
    }
  }
  
  let finalValues = [];  // Array to store the final selected 10 values
  let comparisonIndex = 0;  // Tracks the current comparison index for flashcards
  let comparisons = [];  // Stores the pairs of values to compare
  
  // Function to generate all pair combinations (pairs for comparison)
  function generatePairs(values) {
    let pairs = [];
    for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        pairs.push([values[i], values[j]]);
      }
    }
    return pairs;
  }
  
  // Function to display the flashcard comparison
  function displayFlashcard() {
    const pair = comparisons[comparisonIndex];
    document.getElementById('value1').innerText = pair[0];
    document.getElementById('value2').innerText = pair[1];
  }
  
  // Function to start ranking (called in goToStage4())
  function startRanking() {
    // Generate all pairs from the finalValues (10 values)
    comparisons = generatePairs(finalValues);
  
    // Show the first pair for comparison
    displayFlashcard();
  }
  
  // Handle user choice (which value is chosen)
  function chooseValue(choice) {
    const pair = comparisons[comparisonIndex];
  
    // Move the preferred value closer to the top of the ranking
    if (choice === 1) {
      // Move first value above second
      moveUpInRanking(pair[0], pair[1]);
    } else {
      // Move second value above first
      moveUpInRanking(pair[1], pair[0]);
    }
  
    // Move to the next comparison
    comparisonIndex++;
  
    // If there are more comparisons left, display the next pair
    if (comparisonIndex < comparisons.length) {
      displayFlashcard();
    } else {
      // All comparisons done, show the final ranking
      showFinalRanking();
    }
  }
  
  // Move a value higher in the ranking based on the comparison
  function moveUpInRanking(winner, loser) {
    const winnerIndex = finalValues.indexOf(winner);
    const loserIndex = finalValues.indexOf(loser);
  
    if (winnerIndex > loserIndex) {
      // Swap the winner and loser positions
      finalValues.splice(winnerIndex, 1);  // Remove winner
      finalValues.splice(loserIndex, 0, winner);  // Reinsert winner above loser
    }
  }
  
  // Display the final ranking after all comparisons are completed
  function showFinalRanking() {
    document.getElementById('stage-4').classList.add('hidden');
    document.getElementById('stage-5').classList.remove('hidden');
  
    const rankingList = document.getElementById('final-ranking');
    rankingList.innerHTML = '';
  
    finalValues.forEach((value, index) => {
      const li = document.createElement('li');
      li.innerText = `${index + 1}. ${value}`;
      rankingList.appendChild(li);
    });
  }
  
  // Sample values for testing (replace with actual selected values in the flow)
  finalValues = [
    "Accountability", "Awareness", "Balance", "Beauty", "Boldness",
    "Compassion", "Creativity", "Curiosity", "Discipline", "Empathy"
  ];
  
  // Start ranking process by generating comparisons and displaying the first one
  document.addEventListener("DOMContentLoaded", () => {
    startRanking();
  });
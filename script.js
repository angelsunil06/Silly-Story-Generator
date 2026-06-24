const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const names = [
  "Aarav",
  "Maya",
  "Rohan",
  "Anika",
  "Daniel"
];

const places = [
  "the town library",
  "a small bakery",
  "the neighborhood park",
  "the weekend book fair",
  "the old music hall"
];

const events = [
  "accidentally joined a storytelling contest",
  "was asked to judge a cupcake decorating competition",
  "ended up helping a group of children rehearse a play",
  "mistakenly became the leader of a picnic game",
  "was invited to sing in front of a very cheerful audience"
];

const endings = [
  "Everyone laughed, and the day turned into a memory worth keeping.",
  "By sunset, there were smiles, applause, and a story to tell for weeks.",
  "It was not the peaceful plan they had in mind, but it became the best part of the day.",
  "What started as an ordinary outing became a wonderfully unexpected adventure.",
  "In the end, they went home smiling, still surprised by how the day had unfolded."
];

function generateStory() {
  let name;

  if (customName.value.trim() !== "") {
    name = customName.value.trim();
  } else {
    name = randomValueFromArray(names);
  }

  const place = randomValueFromArray(places);
  const event = randomValueFromArray(events);
  const ending = randomValueFromArray(endings);

  const newStory = `${name} visited ${place} expecting a calm and ordinary day, but instead ${event}. ${ending}`;

  story.textContent = newStory;
}

randomize.addEventListener("click", generateStory);
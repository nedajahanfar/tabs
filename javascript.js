const poetData = {
  sylvia: {
    name: "Sylvia Plath",
    description: "A trailblazing poet known for her confessional style, exploring themes of identity and despair.",
    famousLine: "\"I am afraid to be alone with my own mind.\"",
    death: "Sylvia Plath tragically took her own life in 1963."
  },
  virginia: {
    name: "Virginia Woolf",
    description: "A modernist writer who profoundly influenced literature with her stream-of-consciousness technique.",
    famousLine: "\"A woman must have money and a room of her own if she is to write fiction.\"",
    death: "Virginia Woolf died by suicide in 1941, drowning herself in the River Ouse."
  },
  gustave: {
    name: "Gustave Flaubert",
    description: "A French novelist known for his meticulous style and masterpiece.",
    famousLine: "\"Do not read, as children do, for amusement, or, as the ambitious do, for instruction. No, read to live.\"",
    death: "Gustave Flaubert passed away from a stroke in 1880."
  },
  madeline: {
    name: "Madeline Miller",
    description: "A contemporary author known for reimagining Greek myths with emotional depth and modern resonance.",
    famousLine: "\"But in a solitary life, there are rare moments when another soul dips near yours, as stars once a year brush the earth.\"",
    death: "Madeline Miller is alive."
  }
};

const options = document.querySelectorAll(".options li");
const contentDiv = document.querySelector(".content");

options.forEach(option =>
{
  option.addEventListener("click", () =>{
    options.forEach(item => item.classList.remove("active"));
    option.classList.add("active");

    const key = option.innerHTML;
    const poet = poetData[key];

    contentDiv.innerHTML = `
          <p>${poet.name}: ${poet.description}</p>
    <div>
      <p class="poet">${poet.famousLine}</p>
    </div>
    <p>${poet.death}</p>
        `;

  })
}
)
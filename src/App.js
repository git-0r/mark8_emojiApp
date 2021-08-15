import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐶": "Dog Face",
    "🐕": "Dog",
    "🦮": "Guide Dog",
    "🐩": "Poodle",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐱": "Cat Face",
    "🐈": "Cat",
    "🦁": "Lion",
    "🐯": "Tiger Face",
    "🐅": "Tiger",
    "🐆": "Leopard",
    "🐴": "Horse Face",
    "🐎": "Horse",
    "🦄": "Unicorn",
    "🦓": "Zebra",
    "🦌": "Deer",
    "🦬": "Bison",
    "🐮": "Cow Face",
    "🐂": "Ox",
    "🐃": "Water Buffalo",
    "🐄": "Cow",
    "🐷": "Pig Face",
    "🐖": "Pig",
    "🐗": "Boar",
    "🐽": "Pig Nose",
    "🐏": "Ram",
    "🐑": "Ewe",
    "🐐": "Goat",
    "🐪": "Camel",
    "🐫": "Two-Hump Camel",
    "🦙": "Llama",
    "🦒": "Giraffe",
    "🐘": "Elephant"
  };

  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("meaning will appear here..");

  const emojiDictionaryKeys = Object.keys(emojiDictionary);

  function changeHandler(e) {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("sorry buddy, even i don't know what that means LOL.");
    }
  }

  function addEmoji(key) {
    setMeaning(emojiDictionary[key]);
  }

  return (
    <div className="App">
      <h1>
        What does this emoji mean?
        <span role="img" aria-label="thinking-face">
          🤔
        </span>
      </h1>
      <h2>use this app to find the meaning of an emoji</h2>
      <input
        onChange={changeHandler}
        placeholder="Enter emoji to search"
        value={emoji}
      />
      <p className="emoji">{emoji}</p>
      <p>{meaning}</p>
      {emojiDictionaryKeys.map((key) => (
        <span className="emoji" onClick={() => addEmoji(key)}>
          {key}
        </span>
      ))}
    </div>
  );
}

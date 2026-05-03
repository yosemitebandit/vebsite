+++
title = "anki-castellano"
date = 2026-04-24
location = "Barcelona"
draft = true

[extra]
thumbnail = "projects/anki-castellano/anki-castellano-icon.png"

+++

I'm making [Anki](https://apps.ankiweb.net) flashcards to study Castellano.
I add images but I'm reading now that the images should actually be on the "back"
and the card's "front" should be text-only with just the cloze deletion.
So that will be an update for future anki decks.

The pipeline to generate an anki deck:

0. An LLM generates a Castellano wordlist based on a topic.
In the prompt I hardcode for intermediate difficulty -- so words more like "remorse" and less like "house."
The LLM is also prompted to create a cloze deletion-style sentence for the word and the translation to English.
I'm using some recent version of gemini flash for this and that's very cheap.
1. I use another LLM call to create corresponding images for each word.
The prompt was another piece generated in the previous text-only call.
This is relatively expensive, single digit cents per image. I use gemini as well.
The images are optional but very fun to include.
2. A script creates the Anki deck itself.
For now I'm just making enitre new decks when I want to add cards to my study practice.

Some example cards:

![puá](puá.png "puá")

---

![reflejo](reflejo.png "reflejo")

---

![silbato](silbato.png "silbato")

---

I added the decks to ankiweb here: `<tbd>`

And the code for all this: [github.com/yosemitebandit/anki-castellano](github.com/yosemitebandit/anki-castellano)

Would be cool if..
- support Castellano -> languages other than English
- support Catalan (what's next) -> English
- it was truly Cloze style (one card for multiple fill-in-the-blanks throughout a sentence)
- audio

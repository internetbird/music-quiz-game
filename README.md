# Music Quiz Game

A Jeopardy-style group quiz about music — Classical, Pop, Rock, and Israeli Music — for a "guide" to host on a laptop or projector while a room full of teams answers on paper. Built to be educational (every answer comes with a "Did you know?" fact) as well as fun.

## Running it

No install, no build step. Just **double-click `index.html`** and it opens in your browser. Everything (data, audio, styling) is local, so it works with no internet connection once the page is open.

If your browser refuses to play the local audio files for any reason, run a tiny local server from this folder instead and open the printed address:

```bash
npx serve .
```

or, with Python installed:

```bash
python -m http.server 8000
```

## Language

The game is in Hebrew by default (right-to-left layout). Click the pill button in the corner (**EN** / **עב**) at any time — including mid-question — to switch between Hebrew and English; the choice is remembered for next time. All questions, facts, and UI text are fully translated in both languages.

## How to host a game

1. **Setup** — pick which music style(s) to play (Classical, Pop, Rock, Israeli Music — mix and match; at least one is required) and enter 2–6 team names.
2. **Board** — click a tile to open a question. Each selected genre contributes its own round; a "Who's That Musician?" photo round (one column per selected genre) always plays last, before the Final Encore.
3. Read the question aloud (and play the audio clip for classical's Name That Tune, or show the photo for a musician-ID question). Teams write down their answer letter on paper. Optionally start the 30-second timer.
4. Click **Reveal Answer** — the correct choice is highlighted along with a fact. Tap each team that got it right to award points (tap again to undo).
5. **Back to Board**, repeat until the round is done, then **Finish Round**.
6. After the last round, play the **Final Encore**: each team secretly writes a wager (up to their current score), you enter the wagers, reveal the question, then mark each team Correct/Incorrect to apply the wager.
7. **Show Final Results** for the podium.

Progress (including which genres were selected) autosaves to the browser's local storage, so an accidental refresh won't lose the game — a "Resume Game" option appears on the setup screen.

## Content by genre

- **Classical** (2 rounds, unchanged) — Name That Tune (real audio clips), Music Theory & Terms, Composers & History, Meet the Orchestra.
- **Pop / Rock / Israeli Music** (1 round each) — Songs & Charts, Artists & Bands, and Culture & Facts categories. These are text-only trivia (chart records, band history, cultural facts) — no audio and no song lyrics, since unlike the public-domain classical works, these songs are still under copyright.
- **Who's That Musician?** — always-included photo round: a musician's photo is shown and teams identify who it is. Only genres you selected appear as columns.

## Editing or adding content

All content lives in [`data.js`](data.js) as plain JavaScript objects. Text fields are bilingual `{ he, en }` objects; everything else is shared across languages. Each trivia question looks like:

```js
{
  points: 100,
  type: "text",            // "text" | "audio" | "photo"
  audio: "audio/....ogg",  // only for type: "audio"
  image: "images/....jpg", // only for type: "photo" (prompt is auto-generated: "Who is this musician?")
  prompt: { he: "...", en: "..." },   // omit for type: "photo"
  options: { he: ["...", "...", "...", "..."], en: ["...", "...", "...", "..."] },
  answerIndex: 0,           // index of the correct option
  fact: { he: "...", en: "..." }
}
```

`window.QUIZ_DATA.genres` holds one entry per music style (`classical`, `pop`, `rock`, `israeli`), each with a `name`, `icon`, and a `rounds` array (same shape as before: `{ name, categories: [{ icon, name, questions: [...] }] }`). Add a new genre by adding a new key here — it will automatically appear as a checkbox on the setup screen (see `GENRE_ORDER` in `app.js` to control its position) as long as you also add a matching entry to `window.QUIZ_DATA.musicianPhotos`. `window.QUIZ_DATA.musicianPhotos` holds the 4 photo questions per genre used by the always-on "Who's That Musician?" round. The `finalEncore` object is a single wager question, unrelated to genre selection. All static UI labels (buttons, headings, etc.) live in `window.STRINGS` in the same file — add a key there in both `he` and `en` if you introduce new UI text.

## Adding your own audio or photos

Drop an audio file (mp3/ogg/opus/wav all work) into `audio/`, then reference it from a question's `audio` field, e.g. `audio/my-clip.mp3`. Drop a photo into `images/musicians/` and reference it from a `musicianPhotos` entry's `image` field the same way. For copyright reasons, stick to public-domain or Creative-Commons-licensed media (see the credits below for how the bundled files were sourced) — never use copyrighted song audio or lyrics.

## Audio credits

The bundled clips are public-domain / Creative-Commons-licensed recordings from [Wikimedia Commons](https://commons.wikimedia.org):

| File | Piece | Source |
|---|---|---|
| `fur-elise.ogg` | Beethoven — Für Elise | commons.wikimedia.org/wiki/File:FurElise.ogg |
| `vivaldi-spring.ogg` | Vivaldi — The Four Seasons, "Spring", mvt. 1 (John Harrison, violin) | commons.wikimedia.org/wiki/File:01_-_Vivaldi_Spring_mvt_1_Allegro_-_John_Harrison_violin.ogg |
| `toccata-fugue-bach.ogg` | Bach — Toccata and Fugue in D minor, BWV 565 | commons.wikimedia.org/wiki/File:Toccata_et_Fugue_BWV565.ogg |
| `eine-kleine-nachtmusik.ogg` | Mozart — Eine kleine Nachtmusik, mvt. 1 | commons.wikimedia.org/wiki/File:Mozart_-_Eine_kleine_Nachtmusik_-_1._Allegro.ogg |
| `sugar-plum-fairy.ogg` | Tchaikovsky — Dance of the Sugar Plum Fairy | commons.wikimedia.org/wiki/File:Tchaikovsky_-_Dance_of_the_Sugar_Plum_Fairy_-_The_Nutcracker.ogg |
| `clair-de-lune.opus` | Debussy — Clair de Lune | commons.wikimedia.org/wiki/File:Clair_de_Lune_by_Claude_Debussy_(1905,_piano_solo).opus |
| `beethoven-symphony5.ogg` | Beethoven — Symphony No. 5, mvt. 1 | commons.wikimedia.org/wiki/File:Ludwig_van_Beethoven_-_symphony_no._5_in_c_minor,_op._67_-_i._allegro_con_brio.ogg |
| `mountain-king.ogg` | Grieg — In the Hall of the Mountain King | commons.wikimedia.org/wiki/File:Musopen_-_In_the_Hall_Of_The_Mountain_King.ogg |

Check each file's page on Wikimedia Commons for full performer credit and license terms if you plan to redistribute this project publicly.

## Photo credits

The musician photos are public-domain or Creative-Commons-licensed images from [Wikimedia Commons](https://commons.wikimedia.org):

| File | Subject | License / credit |
|---|---|---|
| `classical-beethoven.jpg` | Ludwig van Beethoven (1820 portrait by Joseph Karl Stieler) | Public domain |
| `classical-mozart.jpg` | Wolfgang Amadeus Mozart (1780–81 portrait by della Croce) | Public domain |
| `classical-bach.jpg` | Johann Sebastian Bach | Public domain |
| `classical-tchaikovsky.jpg` | Pyotr Ilyich Tchaikovsky | Public domain |
| `pop-michael-jackson.jpg` | Michael Jackson, 1984 | Public domain (US government work) |
| `pop-beyonce.jpg` | Beyoncé | CC BY 2.0 — Alex Johnson |
| `pop-elton-john.jpg` | Elton John, 2008 | CC BY-SA 2.0 — Richard Mushet |
| `pop-madonna.jpg` | Madonna, 1987 | Public domain (US) — Tom Lynn |
| `rock-beatles.jpg` | The Beatles, 1964 | Public domain (US) — UPI/Library of Congress |
| `rock-freddie-mercury.jpg` | Freddie Mercury, live 1979 | CC BY-SA 3.0/2.5 — Uwe Matezki |
| `rock-david-bowie.jpg` | David Bowie, 1975 | Public domain (US) — RCA Records |
| `rock-jimi-hendrix.jpg` | Jimi Hendrix, 1967 | Public domain (Sweden) |
| `israeli-netta.jpg` | Netta Barzilai, Eurovision 2018 | CC BY-SA 4.0 — Wouter van Vliet/EuroVisionary |
| `israeli-idan-raichel.jpg` | Idan Raichel | Free-use, credit: Idan Raichel Project |
| `israeli-dana-international.jpg` | Dana International, 2019 | CC BY-SA 4.0 |
| `israeli-noa-kirel.jpg` | Noa Kirel, Eurovision 2023 | CC BY-SA 4.0 — Michael Doherty |

As with the audio, check each file's Wikimedia Commons page for full attribution details before redistributing this project publicly — several licenses (CC BY, CC BY-SA) require crediting the photographer.

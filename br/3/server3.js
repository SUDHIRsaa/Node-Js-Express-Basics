const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = 3000;

// In-memory knowledge base
let knowledgeBase = [];

// Create axios instance with headers (to avoid 403)
const axiosInstance = axios.create({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
  },
});

/**
 * Fetch top N movies and their cast
 */
async function buildKnowledgeBase(N) {
  knowledgeBase = []; // reset

  // IMDb Top 250 page
  const url = "https://www.imdb.com/chart/top/";
  const { data } = await axiosInstance.get(url);
  const $ = cheerio.load(data);

  // Extract top N movies
  const movies = $(".ipc-metadata-list-summary-item")
    .slice(0, N)
    .map((i, el) => {
      const title = $(el).find('a[data-testid="title-link"]').text().trim();
      const href = $(el).find('a[data-testid="title-link"]').attr("href");
      if (!href) return null; // safety check
      const movieUrl = "https://www.imdb.com" + href.split("?")[0];
      return { title, movieUrl };
    })
    .get()
    .filter(Boolean); // remove nulls

  // Fetch cast for each movie
  for (const movie of movies) {
    try {
      const { data: moviePage } = await axiosInstance.get(movie.movieUrl);
      const $$ = cheerio.load(moviePage);

      // Collect cast names (IMDb cast section selector updated)
     // Collect cast names
const cast = [];
$$('a[data-testid="title-cast-item__actor"]')
  .slice(0, 20) // get up to 20 actors
  .each((i, el) => {
    const name = $$(el).text().trim();
    if (name) cast.push(name);
  });

console.log(`✅ Cast for ${movie.title}:`, cast); // <-- Debug log


      knowledgeBase.push({ title: movie.title, cast });
    } catch (err) {
      console.error(`Error fetching cast for ${movie.title}:`, err.message);
    }
  }
}

/**
 * Query by actor
 */
function queryByActor(actorName, M) {
  const results = [];
  for (const movie of knowledgeBase) {
    if (movie.cast.some((c) => c.toLowerCase() === actorName.toLowerCase())) {
      results.push(movie.title);
    }
  }
  return results.slice(0, M);
}

// -------------------- ROUTES --------------------

// Build knowledge base
app.get("/build/:n", async (req, res) => {
  const N = parseInt(req.params.n, 10);
  if (isNaN(N) || N <= 0) {
    return res.status(400).json({ error: "Invalid N" });
  }
  await buildKnowledgeBase(N);
  res.json({ message: `Knowledge base built for top ${N} movies.` });
});

// Query endpoint
app.get("/query", (req, res) => {
  const { actor, m } = req.query;
  const M = parseInt(m, 10);

  if (!actor || isNaN(M)) {
    return res.status(400).json({ error: "Actor and M are required." });
  }

  const results = queryByActor(actor, M);
  res.json({ actor, topMovies: results });
});

// ------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

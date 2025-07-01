export default async function handler(req, res) {
  try {
    const response = await fetch("https://fruity-proxy.vercel.app/api/fruits", {
      headers: {
        "x-api-key": "fruit-api-challenge-2025",
        "User-Agent": "Mozilla/5.0",
        Origin: "https://fruity-proxy.vercel.app",
      },
    });

    console.log("response status", response.status);

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); // or your GitHub Pages domain
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

export default async function handler(req, res) {
  try {
    const response = await fetch("https://fruity-proxy.vercel.app/api/fruits", {
      method: "GET",
      headers: {
        "x-api-key": "fruit-api-challenge-2025",
        // Do NOT include Origin or User-Agent here
      },
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); // or restrict this to your GitHub Pages domain
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

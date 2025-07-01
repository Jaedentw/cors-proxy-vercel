export default async function handler(req, res) {
  const allowedOrigin = "https://jaedentws.github.io"; // <-- Update this if needed

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  console.log("REQ", req);
  console.log("RES", res);
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  try {
    const response = await fetch("https://fruity-proxy.vercel.app/fruit/all", {
      method: "GET",
      headers: {
        "x-api-key": "fruit-api-challenge-2025",
      },
    });
    console.log("RESPONSE HERE", response);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", errorText);
      return res.status(500).json({ error: "Upstream API failed" });
    }
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const makeRes = await fetch(
      "https://hook.us2.make.com/ut56g3v42kkg1gs74vbyqevgthplqj",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    if (!makeRes.ok) {
      const text = await makeRes.text();
      console.error("Make response:", text);
      return res.status(500).json({ error: "Make webhook failed" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

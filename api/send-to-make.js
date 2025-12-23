export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const makeResponse = await fetch(
      "https://hook.us2.make.com/ut56g3v42kkg1gs74vbyqevgthplqj",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const text = await makeResponse.text();

    if (!makeResponse.ok) {
      console.error("Make error:", text);
      return res.status(500).json({
        error: "Make webhook failed",
        details: text,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server crashed" });
  }
}

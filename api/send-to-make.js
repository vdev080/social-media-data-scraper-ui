export const config = {
  runtime: "nodejs18.x",
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    if (!makeResponse.ok) {
      const text = await makeResponse.text();
      console.error("Make error:", text);
      return res.status(500).json({ error: "Make webhook failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

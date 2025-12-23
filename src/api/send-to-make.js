export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://hook.us2.make.com/ut56g3v42kkg1gs74vbyqevgthplqj",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    if (!response.ok) {
      throw new Error("Make webhook failed");
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Make error:", error);
    return res.status(500).json({ error: "Failed to send data to Make" });
  }
}

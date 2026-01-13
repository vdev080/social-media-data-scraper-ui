export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await fetch("https://vdev0800.app.n8n.cloud/webhook-test/f03d83a6-ec7d-4b3a-8cf5-27a2e7af5c51", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "n8n webhook failed" });
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { system, prompt } = req.body;
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(200).json({ text: 'Error: API key not found in environment' });
    }
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: system || 'You are STRIVE, a premium AI habit coach.',
        messages: [{ role: 'user', content: prompt || 'Hello' }]
      })
    });
    const data = await response.json();
    if (data.content && data.content.length > 0) {
      return res.status(200).json({ text: data.content[0].text });
    }
    return res.status(200).json({ text: 'API error: ' + JSON.stringify(data) });
  } catch (error) {
    return res.status(500).json({ text: 'Fetch error: ' + error.message });
  }
}
}
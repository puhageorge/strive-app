export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { system, prompt } = req.body;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
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
    if (data.error) {
      return res.status(200).json({ text: 'Error: ' + data.error.message });
    }
    return res.status(200).json({ text: JSON.stringify(data) });
  } catch (error) {
    return res.status(500).json({ text: 'Error: ' + error.message });
  }
}
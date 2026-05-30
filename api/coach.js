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
        system: system,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    console.log('Anthropic response:', JSON.stringify(data));
    const text = data?.content?.[0]?.text || data?.error?.message || 'No response';
    res.status(200).json({ text });
  } catch (error) {
    console.error('Coach error:', error);
    res.status(500).json({ text: 'Connection error: ' + error.message });
  }
}
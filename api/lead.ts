export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  try {
    // body 그대로 getform으로 전달하기 위해 raw로 받기
    const chunks: Uint8Array[] = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

    const gf = await fetch('https://damobabo.getform.com/nmvo3', {
      method: 'POST',
      body,
      headers: {
        // form submit 그대로 전달
        'content-type': req.headers['content-type'] || 'application/octet-stream',
      },
    });

    if (!gf.ok) {
      return res.status(500).json({ ok: false, message: 'Getform failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, message: 'Server error' });
  }
}

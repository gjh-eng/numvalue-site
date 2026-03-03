import type { VercelRequest, VercelResponse } from '@vercel/node';

const GETFORM_ENDPOINT = 'https://getform.io/f/nmvo3';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  try {
    const { company, name, email, phone, message } = req.body || {};

    // 최소 검증
    if (!company || !name || !email || !phone) {
      return res.status(400).json({ ok: false, message: 'Missing required fields' });
    }

    // Getform에 가장 잘 먹히는 방식: x-www-form-urlencoded
    const body = new URLSearchParams();
    body.append('company', String(company));
    body.append('name', String(name));
    body.append('email', String(email));
    body.append('phone', String(phone));
    body.append('message', String(message ?? ''));

    const r = await fetch(GETFORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => '');
      return res.status(502).json({ ok: false, message: 'Getform failed', detail: text });
    }

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ ok: false, message: e?.message || 'Server error' });
  }
}

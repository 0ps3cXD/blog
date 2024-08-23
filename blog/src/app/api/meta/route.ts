import fetch from 'node-fetch';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const event = req.body;

    if (event.event === 'invitee.created') {
      const invitee = event.payload;

      const eventData = {
        event_name: 'Lead',
        event_time: Math.floor(new Date().getTime() / 1000),
        user_data: {
          email: sha256(invitee.email),
        },
        custom_data: {
          event_id: invitee.event.id,
          value: 0,
          currency: 'EUR',
        },
        action_source: 'website',
      };

      const response = await fetch(`https://graph.facebook.com/v13.0/1051403233002980/events?access_token=EAAP5V1KMgxMBOZCh61WDE1NLN07ayLqyLb6rIfIf9L41zclFMo64MIUAnz3adiOfGLpiZAtLzlqiLwrKnagsdGa0xyfUIiD9uJn81cwyjQLgl2MR7vAZAJT1LDxrVqTMKh6UBbF7xSY6s4OD4ukWFs5UZB6cLUOKkCa6xxOKdcvaWJfZBpeVpLhGcSXzL7e8zZAgZDZD`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [eventData],
        }),
      });

      const result = await response.json();
      console.log('Meta Conversion API Response:', result);

      res.status(200).json({ status: 'success' });
    } else {
      res.status(200).json({ status: 'ignored' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// Hilfsfunktion, um E-Mail zu hashen (SHA256)
import crypto from 'crypto';

function sha256(data: any) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

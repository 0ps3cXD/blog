import fetch from 'node-fetch';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const event = req.body;

    // Überprüfe, ob es sich um das richtige Ereignis handelt
    if (event.event === 'invitee.created') {
      const invitee = event.payload;

      // Beispiel: Umwandeln der Daten in das Format, das die Meta Conversion API erwartet
      const eventData = {
        event_name: 'Lead',
        event_time: Math.floor(new Date().getTime() / 1000), // Zeitstempel in Sekunden
        user_data: {
          email: sha256(invitee.email), // E-Mail des Teilnehmers, gehasht mit SHA256
        },
        custom_data: {
          event_id: invitee.event.id, // ID des Events
          value: 0, // Du kannst hier den Wert der Conversion angeben, falls vorhanden
          currency: 'EUR', // Währung der Conversion
        },
        action_source: 'website',
      };

      // Sende die Daten an die Meta Conversion API
      const response = await fetch(`https://graph.facebook.com/v13.0/YOUR_PIXEL_ID/events?access_token=YOUR_ACCESS_TOKEN`, {
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

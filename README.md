# Karam Azmy Technologies Landingpage

## Kontaktformular per SMTP

Das Kontaktformular sendet serverseitig über `/api/contact`. Dafür müssen im Deployment folgende Umgebungsvariablen gesetzt werden:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postfach@example.com
SMTP_PASS=change-me
CONTACT_MAIL_TO=info@katechnologies.de
CONTACT_MAIL_FROM="Karam Azmy Technologies <postfach@example.com>"
```

Hinweise:

- `SMTP_SECURE=true` wird typischerweise für Port `465` genutzt.
- `SMTP_SECURE=false` wird typischerweise für Port `587` mit STARTTLS genutzt.
- `CONTACT_MAIL_FROM` sollte zu einem Postfach passen, das der SMTP-Server versenden darf.
- Die Antwortadresse der Anfrage wird als `replyTo` gesetzt.
- Echte Zugangsdaten nur im Hosting/Deployment setzen, nicht ins Repository schreiben.

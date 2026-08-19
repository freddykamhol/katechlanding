# KA Technologies Landingpage

## Kontaktformular per SMTP

Das Kontaktformular sendet serverseitig über `/api/contact`. Dafür müssen im Deployment folgende Umgebungsvariablen gesetzt werden:

```env
SMTP_HOST=mail.katechnologies.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REQUIRE_TLS=true
SMTP_USER=info@katechnologies.de
SMTP_PASS=IM_HOSTING_ALS_SECRET_SETZEN
CONTACT_MAIL_TO=info@katechnologies.de
CONTACT_MAIL_FROM="KA Technologies <info@katechnologies.de>"
```

Hinweise:

- `SMTP_SECURE=true` wird typischerweise für Port `465` genutzt.
- `SMTP_SECURE=false` wird typischerweise für Port `587` mit STARTTLS genutzt.
- `CONTACT_MAIL_FROM` sollte zu einem Postfach passen, das der SMTP-Server versenden darf.
- `SMTP_PASS` muss als geheimes Deployment-Environment-Variable gesetzt werden und darf nicht committed werden.
- Die Antwortadresse der Anfrage wird als `replyTo` gesetzt.
- Echte Zugangsdaten nur im Hosting/Deployment setzen, nicht ins Repository schreiben.

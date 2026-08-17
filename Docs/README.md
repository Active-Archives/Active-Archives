# Active Archive

**MMO that doesn't steal your life**

Browser based idle mmo game. Players run gathering activities, either single player (gathering) or multiplayer (raids) to earn materials. They then can spend those materials and gold for crafting and upgrades. Players can also trade material on a player driven market for other materials or gold. Built with industry standard stack.

---

## Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | Vite / React |
| **Backend** | C# ASP.NET |
| **Database** | PostgreSQL (Supabase) |
| **Real Time pub/sub** | Redis |
| **Infra** | Github Actions |
| **Hosting** | Render |
| **Authentication** | Clerk |

---

## Documentation

| Document | Description |
| --- | --- |
| [Vision & Spec](docs/spec.md) | What we're building and what's out of scope |
| [Requirements](docs/Srs.md) | Technical Requirements |
| [Data Schema](docs/schema.md) | The database model |
| [API Contract](docs/api-contract.md) | Endpoints and shapes |

---

## Running On Local

### Frontend

Prerequisite: `npm` is available on your PATH.

```bash
cd src/ActiveArchive.Web
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

---

## Team

- Ermin D.
- Ben W.
- Logan L.
- Jacob Y.
- Kirk in our hearts

TODO: Add roles

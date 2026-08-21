# Coding Standards

## Standards Priorities

| Priority | Category | Examples |
| --- | --- | --- |
| P0 | Safety & Integrity | Security, no hardcoded secrets, input validation |
| P1 | Quality & Correctness | Clean builds, passing tests, no analyzer warnings |
| P2 | Consistency & Governance | Naming conventions, folder structure, API conventions |
| P3 | Delivery & Flow | Incremental commits, PR hygiene, documentation |

## Language Settings

- **C# 14** (.NET 10)
- **Nullable reference types:** Enabled
- **Implicit usings:** Enabled

## Naming — C#

| Element | Convention | Example |
| --- | --- | --- |
| Namespaces | PascalCase | `ActiveArchive.Features.Gathering` |
| Classes | PascalCase noun | `PlayerService`, `MarketOrder` |
| Interfaces | IPascalCase | `IPlayerRepository`, `IMarketService` |
| Methods | PascalCase verb | `GetInventory`, `StartActivity` |
| Async methods | +Async suffix | `GetInventoryAsync`, `StartActivityAsync` |
| Properties | PascalCase | `PlayerId`, `GoldBalance` |
| Private fields | _camelCase | `_playerRepository`, `_goldBalance` |
| Parameters | camelCase | `playerId`, `activityType` |
| Local variables | camelCase | `rewardAmount`, `currentTier` |
| Constants | PascalCase |  `BonusRunCount` |

## Naming — React/Frontend

| Element | Convention | Example |
| --- | --- | --- |
| Components | PascalCase noun | `InventoryPanel`, `MarketListing` |
| Hooks | camelCase + use prefix | `useInventory`, `usePlayerStats` |
| Functions | camelCase verb | `handleCollect`, `fetchMarketOrders` |
| Variables | camelCase | `playerGold`, `activeActivity` |
| Files (components) | PascalCase | `InventoryPanel.tsx` |
| Files (hooks/utils) | camelCase | `useInventory.ts`, `formatGold.ts` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_BONUS_RUNS`, `BASE_ENERGY_COST` |

## Naming — Database

| Element | Convention | Example |
| --- | --- | --- |
| Tables | snake_case plural | `players`, `market_orders` |
| Columns | snake_case | `player_id`, `offer_qty` |
| Primary keys | `id` | `id` |
| Foreign keys | `{table_singular}_id` | `player_id`, `material_id` |
| Timestamps | snake_case + `_at` | `created_at`, `last_reset` |
| Booleans | snake_case + `is_` prefix | `is_active`, `is_filled` |

## Naming — API

| Element | Convention | Example |
| --- | --- | --- |
| Paths | lowercase, plural nouns | `/players`, `/market-orders` |
| Path parameters | camelCase | `/players/{playerId}` |
| HTTP reads | GET | `GET /players/{playerId}/inventory` |
| HTTP creates | POST | `POST /market/list` |
| HTTP updates | PATCH | `PATCH /players/{playerId}` |
| HTTP deletes | DELETE | `DELETE /market/{listingId}` |
| Error response | `{ "error": "message" }` | `{ "error": "insufficient materials" }` |
| Success response | `{ }` or array | `[ { "item": "ore", "quantity": 30 } ]` |

## File & Folder Structure

Features are organized as vertical slices — one folder per feature containing all layers (frontend, backend, data access) for that feature.

### Backend (C#)

```
ActiveArchive/
├── Features/
│   ├── ActivitiesStage/
│   │   ├── Gathering/
│   │   │   ├── Activities/
│   │   │   │   ├── Mining/
│   │   │   │   ├── Hunting/
│   │   │   │   ├── Fishing/
│   │   │   │   └── Foraging/
│   │   │   └── Models/
│   │   └── Raiding/
│   │       ├── Raids/
│   │       ├── Dungeons/
│   │       └── Models/
│   ├── CenterStage/
│   │   ├── CenterStage.cs
│   │   ├── Market/
│   │   ├── Upgrades/
│   │   └── Crafting/
│   ├── ChatStage/
│   │   ├── Main/
│   │   ├── Dm/
│   │   └── Leaderboard/
│   └── PlayerStage/
│       ├── Profile/
│       ├── Character/
│       ├── Inventory/
│       └── Quests/
├── Shared/
│   ├── Database/
│   │   └── AppDbContext.cs
│   ├── Models/
│   │   └── Player.cs
│   └── Middleware/
│       └── ErrorHandlingMiddleware.cs
└── Program.cs
```
### When does code go in shared/ vs features/?

- **features/** — code that belongs to ONE feature only. If it's only used by gathering, it lives in gathering.
- **shared/** — code used by TWO OR MORE features. The moment a second feature needs it, move it to shared.

Never put something in shared/ preemptively. Start in the feature folder; promote to shared only when a second feature needs it.

### Frontend (React)

```
frontend/
├── src/
│   ├── features/
│   │   ├── activitiesStage/
│   │   │   ├── gathering/
│   │   │   │   ├── activities/
│   │   │   │   │   ├── mining/
│   │   │   │   │   ├── hunting/
│   │   │   │   │   ├── fishing/
│   │   │   │   │   └── foraging/
│   │   │   │   └── models/
│   │   │   └── raiding/
│   │   │       ├── raids/
│   │   │       ├── dungeons/
│   │   │       └── models/
│   │   ├── centerStage/
│   │   │   ├── CenterStage.tsx
│   │   │   ├── market/
│   │   │   ├── upgrades/
│   │   │   └── crafting/
│   │   ├── chatStage/
│   │   │   ├── ChatStage.tsx
│   │   │   ├── main/
│   │   │   ├── dm/
│   │   │   └── leaderboard/
│   │   └── playerStage/
│   │       ├── PlayerStage.tsx
│   │       ├── profile/
│   │       ├── character/
│   │       ├── inventory/
│   │       └── quests/
│   ├── shared/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
│   └── App.tsx
└── index.html
```

### Tests (C#)

```
ActiveArchive.Tests/
├── Features/
│   ├── ActivitiesStage/
│   │   ├── Gathering/
│   │   │   ├── Activities/
│   │   │   │   ├── Mining/
│   │   │   │   ├── Hunting/
│   │   │   │   ├── Fishing/
│   │   │   │   └── Foraging/
│   │   │   └── GatheringServiceTests.cs
│   │   └── Raiding/
│   │       ├── Raids/
│   │       └── Dungeons/
│   ├── CenterStage/
│   │   ├── Market/
│   │   ├── Upgrades/
│   │   └── Crafting/
│   ├── ChatStage/
│   │   ├── Main/
│   │   ├── Dm/
│   │   └── Leaderboard/
│   └── PlayerStage/
│       ├── Profile/
│       ├── Character/
│       ├── Inventory/
│       └── Quests/
└── SanityTests.cs
```

## Async Rules

- All async methods must be suffixed with `Async` (e.g. `GetInventoryAsync`)
- Never use `.Result` or `.Wait()` — always `await`
- Always pass `CancellationToken` through the call chain
- Use `async/await` all the way — never mix blocking and async calls

## Error Handling

- Catch specific exceptions, never catch `Exception` as a blanket
- Validate inputs at the start of a method before doing any work
- Never swallow exceptions silently
- Return `{ "error": "message" }` 
- Economy operations (market, upgrades, crafting) must fail completely or succeed completely

## Dependency Injection

- Constructor injection only — never property or method injection
- Define an interface before implementing a service (`IGatheringService` before `GatheringService`)
- Never use `new` for classes with external dependencies inside business logic
- No static classes for business logic or anything that needs to be tested
- All services registered in `Program.cs`

| Lifetime | Use For | Example |
| --- | --- | --- |
| Singleton | Stateless shared services | `IPlayerService` |
| Scoped | Per-request state | `AppDbContext` |
| Transient | Lightweight, stateful | Activity handlers |

## Logging

Use structured logging with named PascalCase parameters:

```csharp
_logger.LogInformation("Player {PlayerId} collected {Quantity} {Item} from {Activity}", playerId, quantity, item, activity);
_logger.LogError("Market transaction failed for Player {PlayerId} on Listing {ListingId}", playerId, listingId);
```

| Level | Use For |
| --- | --- |
| `Debug` | Internal state during development |
| `Information` | Normal game events (activity started, item sold, upgrade purchased) |
| `Warning` | Unexpected but handled (listing already gone, insufficient materials) |
| `Error` | Failures requiring attention (DB write failed, transaction rolled back) |

- Never log secrets, tokens, or connection strings
- Always include `PlayerId` in log context for any game event
- Never log full request bodies — they may contain sensitive data
## Testing

- Framework: xUnit only
- Test naming: `MethodName_Scenario_ExpectedBehaviour`
- Structure: Arrange → Act → Assert
- Every feature service must have at least one test
- Tests live in `ActiveArchive.Tests/` mirroring the feature folder structure
- Every PR must keep existing tests passing 

```csharp
[Fact]
public void CollectRewards_ValidActivity_ReturnsRewards()
{
    // Arrange
    var service = new GatheringService(...);

    // Act
    var result = service.CollectRewards(playerId: 1, activity: "mining");

    // Assert
    Assert.NotEmpty(result.Rewards);
}
```

Sanity test must always exist in `SanityTests.cs` so CI has something to run before real tests are written.

## Git & Branch Conventions

**Branch naming:** `{base}-{name}-{feature_name}-AA-{ticket#}`

Examples:
- `main-Logan-gathering_mining-AA-12`
- `main-Ben-market_listings-AA-15`
- `prod-Jacob-gathering_hotfix-AA-20`

**Commit messages:**
- Present tense, imperative: `Add gathering reward logic` not `Added` or `Adding`
- Short and specific — describe what changed, not why
- Reference the Linear ticket: `Add gathering reward logic [AA-12]`

**PR rules:**
- 1 approval required before merge to `main`
- CI must pass before merge to `main` or `prod`
- Update from `main` locally and resolve conflicts before opening a PR
- No self-merging

## Secrets

- `.env` is gitignored
- `.env.example` is committed with placeholder values only
- Real values shared privately via DM
- Never hardcode a connection string, API key, or token in any file
- All config read from environment variables at runtime

## Code Review Checklist

- [ ] Follows naming conventions (C#, React, DB, API)
- [ ] Files in correct feature folder
- [ ] No logic in controllers — delegates to service
- [ ] Async methods suffixed with `Async`
- [ ] No `.Result` or `.Wait()`
- [ ] Inputs validated at boundaries
- [ ] Errors returned as `{ "error": "message" }` with 4xx status
- [ ] Economy operations are atomic (all or nothing)
- [ ] No hardcoded secrets or connection strings
- [ ] Existing tests still pass
- [ ] New feature has at least one test
- [ ] `.env` not committed
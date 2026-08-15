# System Vision

## Problem
Currently Massively Multiplayer Online games (MMOs), like World of Warcraft or Destiny 2, require huge amounts of time investment and can easily take over a player's life due to the amount of time needed to level up, acquire gear, and remain relevant in the game's economy.

## Purpose
Active Archive aims to deliver MMO-like mechanics without requiring players to drown themselves in content or constantly check in, letting players engage on their own schedule and still make meaningful progress.

## Who Benefits
Active Archive benefits people who enjoy MMO mechanics and the grind, but who do not want to sink all of their free time into a game.
# System Goals

- Create an MMORPG game for users to connect with one another.
  - The service must provide an always-online game for users to complete various tasks in either singleplayer or multiplayer methods.
- Allow users to perform a multitude of singleplayer actions to advance their character.
  - The game must offer a series of "minigames" for users to gather materials to further advance their character through crafting and upgrading mechanics.
  - Users should be able to join these singleplayer experiences within one second.
  - Users shall always be able to participate in gathering activities regardless of their current energy.
  - Energy shall increase the amount of materials and experience earned from gathering activities rather than preventing access to those activities.
- Connect users to one another to communicate and perform a variety of multiplayer activities.
  - The system must allow users to connect to one another to communicate, trade, and perform multiplayer activities such as raids or dungeons in order to progress.
- Maintain complete audit logs of user interactions.
  - The system must record all major user interactions, including quests, level-ups, trades, messages, crafting, upgrades, and gathering activities, in an immutable audit trail.
- Prioritize system usability over quantity of features.
  - The interface must minimize the number of steps required to begin or resume gameplay.

---

# Scenarios

## Scenario 1: User Gathers Materials

**Actors:**
- User
- Active Archives System

**Preconditions:**
- User is logged in.
- User has selected a gathering activity.
- The user meets the requirements for the selected activity.

**Flow:**
1. The user logs into Active Archives.
2. The user navigates to the **Gather** interface.
3. The system displays available gathering activities, requirements, energy status, and potential reward modifiers.
4. The user selects a gathering activity.
5. The system verifies that the user meets the activity requirements.
6. The system determines whether the user currently has available energy.
7. If the user has energy, the system applies the applicable energy-based reward modifier.
8. The user enters the gathering activity.
9. The user completes the gathering minigame.
10. The system calculates the user's rewards based on the activity, character progression, performance, energy state, and applicable modifiers.
11. The system awards the user randomized materials and experience points.
12. If applicable, the system consumes the configured amount of energy.
13. The system records the gathering activity, energy state, and rewards in the audit log.
14. The user is returned to the main interface.

**Alternative Flows:**
- If the user has no energy, the system still allows the gathering activity to begin.
- If the user has no energy, the system provides the base material and experience rewards without the energy-based bonus.
- If the user has insufficient energy for the full energy bonus, the system applies the appropriate reduced bonus according to the game's energy rules.
- If the user fails to complete the activity within the allotted time, the system awards reduced experience and applicable rewards.
- If the user disconnects during the activity, the system handles the activity according to the game's disconnect and reconnection rules.

**Postconditions:**
- The gathering activity has been completed.
- The user's inventory has been updated with earned materials.
- The user's experience has been updated.
- Any applicable energy-based reward modifier has been applied.
- The activity has been recorded in the audit log.
- The user is not prevented from gathering solely because they have no energy.

---

## Scenario 2: User Crafts an Item

**Actors:**
- User
- Active Archives System

**Preconditions:**
- User is logged in.
- User has the required crafting materials.
- User has unlocked the required crafting recipe.

**Flow:**
1. The user navigates to the **Crafting** interface.
2. The system displays available crafting recipes.
3. The user selects an item to craft.
4. The system displays the required materials and crafting requirements.
5. The user confirms the crafting operation.
6. The system verifies that the user possesses the required materials.
7. The system consumes the required materials.
8. The system creates the crafted item.
9. The system adds the item to the user's inventory.
10. The system records the crafting operation in the audit log.

**Alternative Flows:**
- If the user lacks the required materials, the system prevents crafting and displays the missing materials.
- If the user cancels the operation, no materials are consumed and no item is created.

**Postconditions:**
- Required materials have been removed from the user's inventory.
- The crafted item has been added to the user's inventory.
- The crafting operation has been recorded.

---

## Scenario 3: User Upgrades a Gathering Activity

**Actors:**
- User
- Active Archives System

**Preconditions:**
- User is logged in.
- User has unlocked the gathering activity.
- User has the required upgrade materials and/or currency.

**Flow:**
1. The user navigates to the **Upgrades** interface.
2. The user selects a gathering activity.
3. The system displays the activity's current tier and available upgrades.
4. The user selects an upgrade.
5. The system displays the cost and benefits of the upgrade.
6. The user confirms the upgrade.
7. The system verifies that the user meets all requirements.
8. The system consumes the required materials and/or currency.
9. The system applies the upgrade.
10. The system updates the activity's statistics.
11. The system records the upgrade in the audit log.

**Alternative Flows:**
- If the user does not meet the requirements, the system prevents the upgrade.
- If the user cancels the upgrade, no resources are consumed.

**Postconditions:**
- The selected activity has been upgraded.
- The user's resources have been updated.
- The upgrade is recorded in the audit log.

---

## Scenario 4: User Places an Item for Sale

**Actors:**
- User
- Active Archives System

**Preconditions:**
- User is logged in.
- User possesses the item they wish to sell.
- The item is tradeable.

**Flow:**
1. The user navigates to the **Trade** interface.
2. The user selects **Trade New Item**.
3. The system opens the trade creation interface.
4. The user selects an item from their inventory.
5. The user specifies the currency or item they want in exchange.
6. The system displays the proposed trade.
7. The user confirms the trade listing.
8. The system verifies that the user still possesses the item.
9. The system removes or reserves the item from the user's available inventory.
10. The system publishes the trade listing.
11. The system records the listing creation in the audit log.

**Alternative Flows:**
- The user cancels the listing before confirming it.
- The item is no longer available when the user attempts to post the listing.
- The item is not tradeable.

**Postconditions:**
- The trade listing is available to other users.
- The listed item is no longer freely usable by the seller.
- The listing creation is recorded in the audit log.

---

## Scenario 5: User Purchases an Item Through Trading

**Actors:**
- User
- Seller
- Active Archives System

**Preconditions:**
- User is logged in.
- A valid trade listing exists.
- The user possesses the required currency or requested item.

**Flow:**
1. The user navigates to the **Trade** interface.
2. The system displays available trade listings.
3. The user selects a listing.
4. The system displays the item and requested payment.
5. The user confirms the purchase.
6. The system verifies that the listing and payment are still valid.
7. The system transfers the requested payment from the buyer.
8. The system transfers the listed item to the buyer.
9. The system transfers the payment to the seller.
10. The system updates both users' inventories.
11. The system records the transaction in the audit log.

**Alternative Flows:**
- The listing has already been purchased or removed.
- The buyer no longer possesses the required payment.
- The transaction fails validation and neither party loses resources.

**Postconditions:**
- The buyer owns the purchased item.
- The seller has received the agreed payment.
- The completed trade has been recorded.

---

## Scenario 6: User Completes a Quest

**Actors:**
- User
- Active Archives System

**Preconditions:**
- User is logged in.
- The user has access to the quest.

**Flow:**
1. The user opens the **Quest** interface.
2. The system displays available and active quests.
3. The user selects a quest.
4. The system displays the quest objectives and rewards.
5. The user completes the required objectives through gameplay.
6. The system tracks the user's progress.
7. Once all objectives are completed, the system marks the quest as complete.
8. The user claims the quest rewards.
9. The system grants the specified rewards.
10. The system records quest completion in the audit log.

**Alternative Flows:**
- The user has not completed all objectives.
- The quest has expired.
- The user does not meet the requirements to begin the quest.

**Postconditions:**
- The quest is marked as completed.
- The user receives the associated rewards.
- Quest completion is recorded.

---

## Scenario 7: User Participates in a Multiplayer Raid

**Actors:**
- User
- Other Users
- Active Archives System

**Preconditions:**
- User is logged in.
- User meets the raid's level and progression requirements.
- The raid is currently available.

**Flow:**
1. The user navigates to the **Raids** interface.
2. The system displays available raids and their requirements.
3. The user selects a raid.
4. The user joins the raid queue.
5. The system matches the user with other eligible players.
6. The system creates a multiplayer raid instance.
7. Players participate in the raid.
8. The system processes player actions and raid progression.
9. The raid is completed or failed.
10. The system distributes appropriate rewards.
11. The system records the raid and major player interactions in the audit log.

**Alternative Flows:**
- The user leaves the queue before matchmaking.
- The system cannot find an eligible group.
- A player disconnects during the raid.
- The raid fails.

**Postconditions:**
- The raid instance is closed.
- Players receive the appropriate rewards.
- Raid participation is recorded.

---

## Scenario 8: User Uses the Weekly Activity Bonus

**Actors:**
- User
- Active Archives System

**Preconditions:**
- User is logged in.
- The user has access to the selected activity.

**Flow:**
1. The user starts an eligible activity.
2. The system checks the user's weekly activity completion count.
3. If the user has completed fewer than three bonus-eligible runs for that activity during the current week, the system applies the increased reward modifier.
4. The user completes the activity.
5. The system grants the increased reward.
6. The system increments the user's weekly completion count.
7. Once three bonus runs have been completed, subsequent runs provide the standard reward.
8. At the beginning of the next weekly period, the system resets the bonus counters.

**Alternative Flows:**
- The user has already completed three bonus runs.
- The user has no energy. The activity remains available, but any applicable energy-based reward bonus is reduced or unavailable.
- The user fails the activity and receives the applicable reduced reward.

**Postconditions:**
- The user's weekly activity count is updated.
- The appropriate reward multiplier has been applied.

---

# Functional Requirements

## FR-1: User Authentication and Accounts

1. The system shall allow users to create and authenticate accounts.
2. The system shall require authentication before users can access gameplay that modifies persistent character data.
3. The system shall maintain persistent character information for each user.
4. The system shall save character progression, inventory, currency, quests, upgrades, and other persistent gameplay data.
5. The system shall prevent unauthorized users from accessing another user's character data.

## FR-2: Gathering Activities

1. The system shall provide singleplayer gathering activities.
2. The system shall allow users to start an available gathering activity without entering a matchmaking queue.
3. The system shall allow users to start gathering activities regardless of their current energy.
4. The system shall not use energy as a hard requirement for participating in gathering activities.
5. The system shall apply an energy-based reward modifier when the user has available energy.
6. Energy shall primarily affect the quantity of materials and experience earned from gathering activities.
7. Users with no energy shall still receive base materials and experience from completed gathering activities.
8. Users with no energy shall receive fewer materials and/or experience than users receiving the full energy-based reward modifier.
9. The system shall provide randomized rewards upon successful completion.
10. The system shall calculate rewards based on the activity's tier, character progression, performance, energy state, and applicable player upgrades or modifiers.
11. The system shall award experience for completed gathering activities.
12. The system shall support multiple gathering activities, including mining, hunting, fishing, gathering, and farming.
13. The system shall support additional gathering activities being added in the future.

## FR-3: Energy System

1. The system shall maintain an energy value for each character.
2. Energy shall function as a reward multiplier or reward modifier rather than a hard gameplay gate for gathering activities.
3. The system shall increase the amount of materials and/or experience earned from applicable gathering activities when energy is available.
4. The system shall allow users to continue participating in gathering activities when their energy reaches zero.
5. The system shall provide base gathering rewards when the user has no energy.
6. The system shall provide reduced gathering rewards when the user has no energy compared with the applicable fully energized reward state.
7. The system shall provide a mechanism for users to recover energy.
8. The system shall display the user's current and maximum energy.
9. The system shall clearly display how the user's current energy affects potential gathering rewards.
10. The system shall clearly communicate the difference between base rewards and energy-enhanced rewards.
11. The system shall prevent energy from being consumed multiple times due to duplicate requests.
12. The system shall ensure that energy cannot be manipulated client-side to obtain unauthorized rewards.
13. Energy recovery and energy consumption rules shall be configurable for future game balancing.

## FR-4: Crafting

1. The system shall provide a crafting interface.
2. The system shall provide crafting recipes.
3. The system shall identify the materials required for each recipe.
4. The system shall verify that the user possesses the required materials before crafting.
5. The system shall consume required materials when crafting succeeds.
6. The system shall add the resulting item to the user's inventory.
7. The system shall prevent crafting when requirements are not met.
8. The system shall support crafting materials into higher-tier materials or usable items.
9. The system shall support gear and potion crafting.

## FR-5: Upgrades

1. The system shall provide upgrades for character and activity progression.
2. The system shall support gathering activity tier upgrades.
3. The system shall support activity speed upgrades.
4. The system shall support energy-related upgrades.
5. The system shall support reward-related upgrades.
6. The system shall display the requirements and benefits of an upgrade before confirmation.
7. The system shall verify upgrade requirements before applying an upgrade.
8. The system shall consume the appropriate resources when an upgrade succeeds.
9. The system shall persist all completed upgrades.
10. Energy-related upgrades may modify energy capacity, recovery rate, energy efficiency, or energy-based reward bonuses without preventing users from gathering when energy is depleted.

## FR-6: Multiplayer Activities

1. The system shall allow users to participate in multiplayer activities.
2. The system shall provide a matchmaking queue for raids and dungeons.
3. The system shall verify that users meet the requirements for a multiplayer activity.
4. The system shall match eligible players into multiplayer groups.
5. The system shall support multiple dungeon and raid instances.
6. The system shall support progression-based unlocking of additional multiplayer activities.
7. The system shall distribute rewards after multiplayer activities are completed.
8. The system shall handle player disconnections during multiplayer activities.

## FR-7: Trading

1. The system shall allow users to create trade listings.
2. The system shall allow users to specify items or currency requested in exchange.
3. The system shall prevent users from listing items they do not own.
4. The system shall prevent non-tradeable items from being listed.
5. The system shall reserve or otherwise protect listed items from being simultaneously used in another transaction.
6. The system shall allow other users to view available listings.
7. The system shall allow users to purchase valid listings.
8. The system shall transfer traded items and currency atomically.
9. The system shall prevent duplicate or partially completed trades.
10. The system shall record completed trades in the audit log.

## FR-8: Questing

1. The system shall provide quests to users.
2. The system shall provide quest objectives.
3. The system shall track progress toward quest objectives.
4. The system shall provide rewards for completed quests.
5. The system shall support quests involving gathering, crafting, trading, raids, and other gameplay activities.
6. The system shall prevent users from claiming a quest reward more than once.
7. The system shall persist quest progress.

## FR-9: Weekly and Daily Systems

1. The system shall track activity completions for each user.
2. The system shall provide increased rewards for the first three eligible runs of an activity each week.
3. The system shall provide standard rewards after the weekly bonus limit has been reached.
4. The system shall maintain separate bonus counters for applicable activities or activity systems.
5. The system shall reset weekly bonus counters at the beginning of each weekly period.
6. Unused weekly bonus opportunities shall not roll over to the following week.
7. The system shall support daily and weekly progression systems in future gameplay features.
8. Weekly and daily rewards shall be independent of the user's energy state unless explicitly configured otherwise.
9. A user shall not be prevented from completing an eligible activity because their energy is depleted.

## FR-10: Character Progression

1. The system shall maintain character experience and levels.
2. The system shall award experience from eligible activities.
3. The system shall allow gathering activities to award experience regardless of the user's current energy.
4. The system may apply an energy-based modifier to gathering experience.
5. The system shall unlock gameplay content based on character progression where applicable.
6. The system shall support character classes and associated progression mechanics.
7. The system shall support character perks.
8. The system shall support character equipment and gear.

## FR-11: Modifiers

1. The system shall support temporary gameplay modifiers.
2. Modifiers shall be capable of changing activity rewards, duration, energy costs, or other gameplay values.
3. The system shall display active modifiers to the user.
4. The system shall track modifier duration.
5. The system shall remove expired modifiers automatically.
6. The system shall support modifiers obtained through crafted items, consumables, gear, or other gameplay systems.
7. Reward modifiers shall be capable of increasing or decreasing material quantities and experience gained.
8. Energy shall be treated as one possible source of gathering reward modification rather than a requirement for participation.

## FR-12: User Communication

1. The system shall allow authenticated users to communicate with other users.
2. The system shall support communication between users participating in multiplayer activities.
3. The system shall associate messages with the sending user.
4. The system shall provide appropriate controls for handling unauthorized or invalid communication requests.

## FR-13: Inventory and Items

1. The system shall maintain an inventory for each user.
2. The system shall add items to inventories when rewards are earned.
3. The system shall remove items when they are consumed, crafted, traded, or otherwise used.
4. The system shall distinguish between different item types and tiers.
5. The system shall prevent users from possessing invalid quantities of items.
6. The system shall persist inventory changes.
7. Gathering reward quantities shall be calculated server-side based on the activity, player progression, energy state, and applicable modifiers.

## FR-14: Audit Logging

1. The system shall record major user interactions in an audit log.
2. The audit log shall include events such as quests, level-ups, trades, crafting, upgrades, gathering activities, and multiplayer activities.
3. Each audit record shall include the relevant user, event type, timestamp, and event information.
4. Gathering audit records shall include the user's relevant energy state and reward modifiers when applicable.
5. Audit records shall be immutable after creation.
6. The system shall prevent normal users from modifying or deleting audit records.
7. The system shall maintain audit records independently of client-side state.
8. The system shall record important transactions in a manner that allows them to be reconstructed for investigation or debugging.

## FR-15: User Interface

1. The system shall provide a consistent interface across gameplay systems.
2. The system shall minimize the number of actions required to start common activities.
3. The system shall clearly display relevant activity requirements before the user begins an activity.
4. The system shall provide clear feedback when an action succeeds or fails.
5. The system shall display relevant character information such as level, energy, inventory, and currency.
6. The system shall allow users to quickly return to the primary gameplay interface.
7. The system shall prioritize usability and clarity over unnecessary features.
8. Gathering activities shall remain visually available and selectable when the user's energy is depleted.
9. The gathering interface shall clearly communicate the expected difference between base rewards and energy-enhanced rewards.
10. The interface shall avoid presenting zero energy as a hard error when the user attempts to gather.

---

# Non-Functional Requirements

## NFR-1: Availability

1. The game service shall be available 24 hours a day, 7 days a week, excluding scheduled maintenance.
2. The system shall target at least **99.9% monthly availability** for core online gameplay services.
3. Scheduled maintenance shall be communicated to users in advance when practical.
4. A failure of a non-critical service shall not unnecessarily prevent users from accessing unrelated gameplay features.

## NFR-2: Performance

1. The system shall allow a user to enter an available singleplayer gathering activity within **1 second** under normal operating conditions.
2. Standard user-interface actions shall receive a server response within **2 seconds** under normal operating conditions.
3. The system shall process gameplay transactions without unnecessary delays.
4. The system shall provide matchmaking results within a reasonable period based on the current player population.
5. The system shall maintain responsive gameplay during simultaneous activity from multiple users.

## NFR-3: Scalability

1. The system shall support increasing numbers of concurrent users without requiring fundamental changes to the game's architecture.
2. The system shall be capable of scaling gameplay services independently where appropriate.
3. Multiplayer services shall support additional raid and dungeon instances as the number of concurrent users increases.
4. The database architecture shall support growth in user accounts, inventories, transactions, quests, and audit records.

## NFR-4: Reliability and Data Integrity

1. The system shall prevent loss of persistent player progression during normal operation.
2. Transactions involving player items or currency shall be atomic.
3. The system shall prevent duplicate rewards caused by repeated requests.
4. The system shall prevent users from creating or receiving invalid items or currency through client-side manipulation.
5. The system shall maintain consistent inventory and currency states following interrupted transactions.
6. Persistent player data shall be backed up regularly.
7. The system shall provide mechanisms for recovering from service failures.
8. Energy-related reward calculations shall be performed atomically with the gathering reward transaction.
9. A failed gathering transaction shall not incorrectly consume energy or grant duplicate rewards.

## NFR-5: Security

1. The system shall authenticate users before allowing access to protected account data.
2. The system shall authorize actions based on the authenticated user's permissions.
3. The system shall validate important gameplay actions on the server rather than relying solely on the client.
4. The system shall protect user credentials and sensitive account information.
5. The system shall prevent users from modifying another user's inventory, currency, character, or progression.
6. The system shall protect trade transactions from manipulation or duplication.
7. Administrative access shall be restricted to authorized personnel.
8. Audit logs shall be protected from unauthorized modification or deletion.
9. The server shall determine the user's available energy and applicable reward multiplier rather than trusting values supplied by the client.
10. Users shall not be able to manipulate their energy state to receive increased gathering rewards.

## NFR-6: Auditability

1. Major gameplay events shall be recorded consistently.
2. Audit records shall contain sufficient information to determine who performed an action, what occurred, and when it occurred.
3. Audit records shall be immutable.
4. Audit data shall be retained according to the system's defined retention policy.
5. The system shall allow authorized administrators to search and inspect audit records.
6. Gathering audit records shall contain sufficient information to reconstruct the base reward, energy modifier, and final reward granted.

## NFR-7: Usability

1. A new user shall be able to understand the basic gameplay loop without requiring extensive external documentation.
2. Common activities shall require a minimal number of navigation steps.
3. The interface shall clearly distinguish available, unavailable, and locked activities.
4. The system shall clearly communicate why an action cannot be performed.
5. Important information such as energy costs, rewards, requirements, and upgrade costs shall be visible before confirmation.
6. The interface shall use consistent terminology across gathering, crafting, upgrading, trading, and questing.
7. The system shall minimize unnecessary menus and interactions.
8. The gathering interface shall clearly communicate that energy affects rewards rather than access to gathering.
9. The interface shall show the user the expected base reward and, where practical, the additional reward gained from having energy available.
10. Depleted energy shall not be presented as preventing the user from continuing normal gathering gameplay.

## NFR-8: Maintainability

1. The system shall use modular components for major gameplay systems.
2. Gathering, crafting, upgrading, trading, questing, and multiplayer activities should be independently maintainable where practical.
3. New activities shall be addable without requiring substantial changes to unrelated gameplay systems.
4. Game balance values such as energy costs, reward rates, activity durations, and upgrade costs should be configurable without requiring changes to core application logic.
5. Energy reward modifiers should be configurable independently from gathering activity availability.
6. The system shall maintain documentation for major system components and interfaces.

## NFR-9: Extensibility

1. The system shall support the addition of new gathering activities.
2. The system shall support the addition of new crafting recipes.
3. The system shall support additional upgrade types.
4. The system shall support additional dungeons and raids.
5. The system shall support additional classes, perks, gear, quests, and modifiers.
6. New gameplay content should be deployable without requiring existing user progression to be reset.
7. New reward systems should be capable of integrating with the energy-based gathering reward modifier without requiring changes to the fundamental gathering flow.

## NFR-10: Compatibility

1. The game shall provide a consistent experience across supported client platforms.
2. The system shall maintain compatibility between clients and server versions where practical.
3. Server-side gameplay rules shall remain authoritative regardless of the client platform.
4. The system shall gracefully handle outdated clients by notifying users when an update is required.

## NFR-11: Recoverability

1. The system shall recover gracefully from temporary network failures where possible.
2. Users shall be able to reconnect to an interrupted multiplayer session when technically feasible.
3. Failed transactions shall not partially consume user resources.
4. The system shall maintain backups of persistent user data.
5. Recovery procedures shall be tested periodically.
6. Interrupted gathering transactions shall not result in duplicated materials, duplicated experience, or unintended energy consumption.

## NFR-12: Fairness and Game Balance

1. The system shall apply the same gameplay rules to users under equivalent conditions.
2. Client-side modifications shall not allow users to bypass activity requirements, upgrade costs, or trading restrictions.
3. Client-side modifications shall not allow users to manipulate energy to obtain unauthorized reward bonuses.
4. Randomized rewards shall be generated server-side or in a manner that prevents user manipulation.
5. Weekly and daily reward limits shall be enforced by the server.
6. The system shall prevent users from duplicating items, currency, rewards, or progression through repeated requests or transaction exploits.
7. Energy shall not prevent a user from participating in gathering activities.
8. Energy shall primarily provide an optimization/reward advantage by increasing material and/or experience gains.
9. Users who have depleted their energy shall continue to receive meaningful base rewards from gathering activities.
10. The reward difference between energized and non-energized gathering shall be configurable for game balance.
11. The system shall avoid making energy depletion equivalent to a complete gameplay stop for gathering-focused progression.

# Constraints

## Regulatory and Privacy Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **RP CON-1: Secure storage of user login information** | FR-1, NFR-5 |
| **RP CON-2: Privacy of user chats** | FR-12 |
| **RP CON-3: Secure storage of user payment information (OPTIONAL)** | N/A |
| **RP CON-4: User rights to delete stored payment information (OPTIONAL)** | N/A |

These constraints detail how user data will be handled.

## Organizational Policy Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **ORG CON-1: The software will pass all tests before being pushed to main** | All |
| **ORG CON-1: The software will be validated in main before being pushed to production** | All |
| **ORG CON-3: All merges to main must be done through a reviewed pull request** | All |
| **ORG CON-4: All issues will be tracked through Linear** | All |
| **ORG CON-5: Version control will be handles through Github with frequent commits** | All |

These constraints detail how organizational policy will be followed.

## Authentication and Access Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **AA CON-1: Users will be required to have an authenticated account** | FR-1, FR-15, NFR-5 |
| **AA CON-2: Users will be able to enter the game at any point in time** | NFR-1, NFR-3, NFR-7 |

These constraints detail how authentication and software access will be handled. 

## Interoperability Requirements

**Persistent Data Storage**

The following user data will be securely stored in a PostgreSQL database hosted on Supabase:
* User Login Information
* Player Progression (Including gathering activity levels and unlocked dungeons)
* Player Gear
* Player Currency
* Player Energy
* Concurrent marketplace listings

**Marketplace Transactions**

Marketplace transactions will be atomic and will support data rollback in the event of failure. If failure occurs, players will retain all items and currency or marketplace listings they had prior to the failure. Audit logs also will store all information relating to marketplace transactions.

* Supporting Functional Requirements: All functional requirements, NFR-4, NFR-5, NFR-6, NFR-11

These requirements detail how data will be managed and how it will flow throughout the application.

## Platform Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **P CON-1: The software will be run within a web browser** | NFR-1 through NFR-11 |
| **P CON-2: The software will be available as often as possible** | NFR-1, NFR-3, NFR-4, NFR-10, NFR-11 |
| **P CON-3: The software will be available on a variety of devices** | FR-15, NFR-1, NFR-3, NFR-4, NFR-7, NFR-10, NFR-11 |
| **P CON-4: The software will perform well on a variety of devices** | NFR-2 |

These constraints detail how the platform will be handled.

## Operational Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **OP CON-1: The software passes all tests and reviews** | All functional requirements |
| **OP CON-2: The software will not become compromised if new bugs/issues are discovered** | All functional requirements, NFR-1 |
| **OP CON-3: The software will maintain a high quality of functionality with many users connected at once** | NFR-1, NFR-2, NFR-3 |

## Data Integrity Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **DI CON-1: Persistent data will maintain physical and logical independence** | All functional requirements, NFR-4, NFR-5 |
| **DI CON-2: Persistent data will only change through atomic transactions** | All functional requirements, NFR-4, NFR-5 |

# Traceability

## Goal to Functional Requirements Traceability

| Goal | Supporting Functional Requirements |
| --- | --- |
| **G-1: Create an MMORPG game for users to connect with one another.** | FR-1, FR-6, FR-10, FR-12, FR-13 |
| **G-2: Allow users to perform singleplayer actions to advance their character.** | FR-2, FR-3, FR-4, FR-5, FR-8, FR-9, FR-10, FR-11, FR-13 |
| **G-3: Connect users for communication and multiplayer activities.** | FR-6, FR-7, FR-12, FR-13 |
| **G-4: Maintain audit logs of major user interactions.** | FR-14 |
| **G-5: Prioritize usability over quantity of features.** | FR-15 |

These mappings reflect the current system goals, including singleplayer progression, multiplayer interaction, auditability, and usability.

## Scenario to Functional Requirement Traceability

| Scenario | Supporting Functional Requirements |
| --- | --- |
| **SC-1: User Gathers Materials** | FR-2, FR-3, FR-9, FR-10, FR-11, FR-13, FR-14, FR-15 |
| **SC-2: User Crafts an Item** | FR-4, FR-13, FR-14, FR-15 |
| **SC-3: User Upgrades Gathering Activity** | FR-5, FR-13, FR-14, FR-15 |
| **SC-4: User Places an Item for Sale** | FR-7, FR-13, FR-14, FR-15 |
| **SC-5: User Purchases an Item Through Trading** | FR-7, FR-13, FR-14 |
| **SC-6: User Completes a Quest** | FR-8, FR-10, FR-13, FR-14, FR-15 |
| **SC-7: User Participates in a Multiplayer Raid** | FR-6, FR-10, FR-12, FR-13, FR-14 |
| **SC-8: User Uses the Weekly Activity Bonus** | FR-2, FR-3, FR-9, FR-11, FR-13 |

The scenarios cover the main gameplay flows currently defined in the SRS.

## Functional Requirement Coverage Summary

| Capability Area | Requirement Coverage |
| --- | --- |
| Accounts and persistent data | FR-1 |
| Gathering and energy | FR-2, FR-3 |
| Crafting | FR-4 |
| Upgrades | FR-5 |
| Multiplayer activities | FR-6 |
| Trading | FR-7 |
| Questing | FR-8 |
| Weekly and daily systems | FR-9 |
| Character progression | FR-10 |
| Modifiers | FR-11 |
| User communication | FR-12 |
| Inventory and items | FR-13 |
| Audit logging | FR-14 |
| User interface | FR-15 |

All major functional areas defined in the current SRS are represented by at least one functional requirement.

## Non-Functional Requirement Traceability

| Non-Functional Requirement | Related Functional Requirements |
| --- | --- |
| **NFR-1: Availability** | All online gameplay systems |
| **NFR-2: Performance** | FR-2, FR-6, FR-7, FR-15 |
| **NFR-3: Scalability** | FR-1, FR-6, FR-7, FR-12, FR-13, FR-14 |
| **NFR-4: Reliability and Data Integrity** | FR-2 through FR-14 |
| **NFR-5: Security** | FR-1, FR-2, FR-3, FR-7, FR-13, FR-14 |
| **NFR-6: Auditability** | FR-14 |
| **NFR-7: Usability** | FR-2, FR-3, FR-4, FR-5, FR-8, FR-15 |
| **NFR-8: Maintainability** | FR-1 through FR-15 |
| **NFR-9: Extensibility** | FR-2, FR-4, FR-5, FR-6, FR-8, FR-10, FR-11 |
| **NFR-10: Compatibility** | FR-1 through FR-15 |
| **NFR-11: Recoverability** | FR-2, FR-6, FR-7, FR-13 |
| **NFR-12: Fairness and Game Balance** | FR-2, FR-3, FR-5, FR-7, FR-9, FR-11, FR-13 |

The non-functional requirements define the quality expectations that apply to the functional systems, including performance, reliability, security, usability, and fairness.

## Traceability Observations

- FR-1 through FR-15 are the current functional requirement identifiers.
- Energy affects rewards rather than preventing gameplay when depleted.
- Exact balance values such as reward rates, energy recovery, loot probabilities, and upgrade costs remain configurable design decisions.
- Additional content may be added through the existing systems without requiring new core functionality.

# Validation Approach

## Functional Requirement Validation

| Validation Approach | Functional Requirement |
| --- | --- |
| **User accounts will be tested in a real-world scenario** | FR-1 |
| **Gathering activities will be smoke tested and have automated test cases** | FR-2 |
| **Energy will be smoke tested, have automated tests, and will support asynchronous operations** | FR-3 |
| **Crafting will be smoke tested and have automated tests** | FR-4 |
| **Upgrades will be smoke tested and have automated tests** | FR-5 |
| **Multiplayer activities will be smoke tested and have automated tests that include matchmaking** | FR-6 |
| **Trading will be smoke tested and have automated tests** | FR-7 |
| **Questing will be smoke tested and have automated tests** | FR-8 |
| **Weekly and Daily Systems will be smoke tested and have automated tests, and will support asynchronous operations** | FR-9 |
| **Character Progression will be smoke tested and have automated tests** | FR-10 |
| **Modifiers will be smoke tested and have automated tests, and will support asynchronous operations** | FR-11 |
| **User communication will be smoke tested and have automated tests** | FR-12 |
| **Inventory and Items will be smoke tested and have automated tests** | FR-13 |
| **Audit Logging will be smoke tested and have automated tests** | FR-14 |
| **User Interface will be smoke tested** | FR-15 |

## Non-Functional Requirement Validation

| Validation Approach | Non-Functional Requirement |
| --- | --- |
| **Availability will be validated with logs and statistics from the chosen hosting platform** | NFR-1 |
| **Performance will be validated with logs to track timings of individual operations** | NFR-2 |
| **Scalability will be validated with high load testing** | NFR-3 |
| **Reliability and Data Integrity will be validated with transaction and audit logs for all data operations** | NFR-4 |
| **Security will be validated with strict privacy rules** | NFR-5 |
| **Auditability will be validated with immutable logs for all important operations** | NFR-6 |
| **Usability will be validated with well-designed gameplay tutorials and user interface** | NFR-7 |
| **Maintainability will be validated with modularly designed and well documented components** | NFR-8 |
| **Extensibility will be validated with newly added modular components that utilize pre-existing core features** | NFR-9 |
| **Compatability will be validated with server-side data rules/handling** | NFR-10 |
| **Recoverability will be validated with data backups along with audits/logs** | NFR-11 |
| **Fairness and Game Balance will be validated with equal terms of play for all users** | NFR-12 |

# System Environment

## User Context
Players can access the game from most modern browser and begin playing after creating an account. No prior experience with the game is required, and players can engage in short or extended sessions on their own schedule.

## Physical and Operational Conditions
The game runs on most modern web browser across desktop and mobile, with no special hardware or software beyond an internet connection. It is cloud-hosted and always available.

## External Systems and Services
The game relies on Clerk for authentication, a PostgreSQL database (hosted on SupaBase) for persistent data, Render for deployment, and Redis for real-time chat and messaging.

## Summary
Active Archive is a browser-based game accessible to users of any experience level, running on most modern browser with only an internet connection. It depends on several managed external services to handle authentication, data persistence, deployment, and real-time features.
# Stakeholders

## Key Stakeholders

## Other relevant stakeholders

# Scope and Boundaries

## Included in Scope

- User authentication and persistent player accounts.
- Character progression, including levels, experience, classes, perks, and gear.
- Inventory, items, materials, currency, and persistent player state.
- Singleplayer activities, including mining, hunting, fishing, gathering, and farming.
- An energy system that modifies rewards without blocking participation.
- Randomized rewards and experience.
- Crafting and refining, including gear and potion crafting.
- Activity upgrades for tier, speed, energy, and rewards.
- Gameplay modifiers.
- Player-to-player trading.
- Questing.
- Weekly and daily progression systems.
- Multiplayer dungeons and raids with matchmaking and progression requirements.
- User communication.
- Audit logging of major gameplay events.
- A consistent user interface for supported gameplay systems.
- Server-authoritative validation of gameplay actions and persistent state.

These features are directly represented in the current Functional Requirements.

## Excluded from Scope

- A real-money shop or payment-processing system.
- Native mobile or console applications unless later selected as supported platforms.
- Features that exist only as suggestions and have not been added to the Functional Requirements.
- Exact balance values, including:
  - Drop rates
  - Experience rates
  - Energy recovery rates
  - Reward multipliers
  - Crafting costs
  - Upgrade costs
  - Loot tables
  - Modifier values
- Specific future content such as additional activities, quests, raids, classes, perks, or items until those are formally defined.

## Boundaries

- **Client Boundary:** The client displays game state and sends player actions but is not authoritative for rewards, inventory, currency, energy, progression, trades, or other persistent data.
- **Server Boundary:** The server validates gameplay actions, calculates outcomes, updates persistent state, and manages multiplayer systems.
- **Persistence Boundary:** Persistent storage maintains account, character, inventory, progression, quest, trade, and audit data.
- **Multiplayer Boundary:** Gathering is primarily singleplayer, while raids and dungeons use matchmaking and multiplayer sessions.
- **Trading Boundary:** Trade transactions must be validated and completed atomically.
- **Energy Boundary:** Energy changes reward rates but does NOT prevent the user from doing anything when depleted.
- **Audit Boundary:** Major gameplay events are recorded and cannot be modified by normal users.
- **Content Boundary:** The system defines how gameplay content operates, while exact balance values and future content remain configurable or subject to later design decisions.

# Initial Assumptions

## Users

- Users are expected to have a persistent account and a unique player identity.
- Users are assumed to have a stable internet connection during normal gameplay.
- Users are expected to understand basic MMORPG concepts such as characters, levels, inventories, quests, equipment, and multiplayer activities.
- Users may play for short or extended sessions, so the system should support both quick activities and longer gameplay sessions.
- Users may participate in both singleplayer and multiplayer content during the same play session.
- Users may disconnect unexpectedly and reconnect later without intentionally abandoning their character progression.
- Users are assumed to interact with the game through a supported client rather than directly with backend services.

## Environment

- The game is assumed to operate as an online service with a continuously available backend.
- The system is assumed to use a client-server architecture in which the server is authoritative over persistent gameplay state.
- The game is assumed to operate across multiple geographic regions or locations as the user population grows.
- Network latency and temporary connectivity problems are expected to occur during normal operation.
- The system is assumed to have access to persistent database storage for user accounts, characters, inventories, transactions, quests, and audit records.
- Multiplayer activities are assumed to require real-time or near-real-time communication between clients and game servers.
- The system is assumed to have monitoring and logging infrastructure available for detecting operational failures.

## Constraints

- Game balance values such as energy recovery, reward multipliers, activity durations, upgrade costs, and reward probabilities are assumed to change during development and operation.
- Gameplay rules must be enforced server-side because the client cannot be considered trusted.
- Persistent player transactions must be designed to tolerate duplicate requests and interrupted network connections.
- The system is assumed to have finite computing, storage, and network resources and therefore must scale resources as the player population increases.
- Audit records are assumed to require substantially longer retention than ordinary gameplay session data.
- The system may need to comply with applicable privacy, security, and data-retention requirements depending on the jurisdictions in which it operates.
- The initial implementation is assumed to prioritize core gameplay functionality over large-scale content variety.

## System Usage

- The majority of gameplay interactions are assumed to consist of gathering, crafting, upgrading, questing, trading, and multiplayer activities.
- Gathering activities are assumed to be relatively short-lived compared with multiplayer raids or dungeons.
- Users are assumed to perform multiple gathering activities during a single session.
- Users are assumed to frequently transition between gameplay systems, such as gathering materials, crafting an item, upgrading an activity, and returning to gathering.
- Energy is assumed to be primarily a resource-management and reward-optimization mechanic rather than an access-control mechanic.
- Users are assumed to understand that depleted energy reduces potential rewards but does not prevent gathering.
- Multiplayer activities are assumed to have a smaller number of participants per instance than the total number of concurrently connected users.
- Trading is assumed to involve persistent items and/or currency whose ownership must be tracked by the server.
- The number of audit events generated by active users is assumed to be significantly greater than the number of account-management events.
- Game content such as activities, recipes, quests, upgrades, modifiers, and raids is assumed to be added or modified over time.
- Weekly and daily systems are assumed to use a consistent server-defined time reference rather than the user's local device clock.
- Randomized rewards are assumed to be generated using server-controlled game logic.
- The system is assumed to support multiple simultaneous users performing the same activity without those users affecting one another unless the activity is explicitly multiplayer.

## Architectural Assumptions

- The server is assumed to be authoritative over all persistent gameplay state.
- Clients are assumed to submit gameplay actions rather than directly modifying persistent gameplay data.
- All client-provided gameplay state is assumed to be untrusted.
- The system is assumed to use idempotent or otherwise protected transactions to prevent duplicate rewards, items, currency, or energy consumption.
- Game configuration values such as reward rates, energy modifiers, recipe costs, and activity requirements are assumed to be configurable without requiring changes to core application logic.
- Gameplay state and immutable audit history are assumed to be treated as separate concerns.
- Server time is assumed to be authoritative for energy regeneration, weekly resets, modifier expiration, and other time-dependent mechanics.
- A user's persistent state is assumed to have a single authoritative version, with concurrent operations coordinated to prevent inconsistent inventory, currency, energy, or progression states.
- The initial release is assumed to contain a limited set of gameplay content while maintaining an architecture capable of supporting additional content in the future.
- Real-time synchronization is assumed to be necessary primarily for multiplayer gameplay and communication rather than menus or other non-real-time interfaces.

# Risk Analysis

| Risk | Likelihood | Impact | Risk Level | Mitigation |
|---|---|---|---|---|
| Server failure prevents users from accessing the game | Medium | High | High | Use redundant services, health monitoring, automated recovery, backups, and defined disaster recovery procedures. |
| Database failure causes loss or corruption of player progression | Low | Critical | High | Use database replication, regular backups, transaction integrity controls, and tested recovery procedures. |
| Duplicate requests cause duplicated items, currency, experience, or rewards | Medium | High | High | Use idempotent transactions, unique transaction identifiers, server-side validation, and atomic database operations. |
| Users manipulate client-side data to gain unauthorized rewards | High | High | High | Treat the client as untrusted and perform all important gameplay calculations and validation on the server. |
| Energy manipulation allows users to receive unintended reward bonuses | Medium | High | High | Store authoritative energy values on the server and calculate energy-based rewards server-side. |
| Gathering rewards become unbalanced between energized and non-energized users | Medium | Medium | Medium | Make reward multipliers configurable and monitor player progression and economy data for balance issues. |
| Players exploit randomized reward mechanics | Medium | High | High | Generate rewards server-side and validate reward generation and distribution through authoritative game logic. |
| Trading exploits allow item or currency duplication | Medium | Critical | High | Use atomic transactions, item reservation, transaction identifiers, and server-side ownership validation. |
| Concurrent trades attempt to use the same item | Medium | High | High | Reserve listed items and prevent concurrent transactions from modifying the same inventory item. |
| Multiplayer matchmaking cannot find suitable players | Medium | Medium | Medium | Use flexible matchmaking rules, queue monitoring, and allow the system to expand matchmaking criteria when appropriate. |
| Player disconnects during a multiplayer activity | High | Medium | Medium | Implement reconnection handling, temporary session persistence, and defined rules for abandoned players. |
| Network latency negatively affects multiplayer gameplay | Medium | High | High | Use authoritative servers, efficient network protocols, latency monitoring, interpolation where appropriate, and regional server infrastructure. |
| High concurrent player counts overload game services | Medium | High | High | Design services for horizontal scaling, use load balancing, monitor resource utilization, and independently scale multiplayer services. |
| Audit logs grow beyond expected storage capacity | Medium | Medium | Medium | Estimate audit-event volume, use scalable storage, define retention policies, and archive older records where appropriate. |
| Audit records are modified or deleted without authorization | Low | Critical | High | Use append-only or immutable storage, restrict administrative permissions, and separate audit storage from normal gameplay data. |
| Audit records do not contain enough information to reconstruct an event | Medium | High | High | Define a standardized audit event schema containing actor, timestamp, event type, relevant state, transaction identifiers, and resulting changes. |
| Weekly reset occurs incorrectly because of inconsistent time zones | Medium | Medium | Medium | Use server-defined UTC timestamps and centralized scheduling for daily and weekly systems. |
| Game configuration changes unintentionally disrupt player progression | Medium | High | High | Validate configuration changes, maintain versioned configurations, test balance changes, and provide rollback mechanisms. |
| New gameplay content requires significant changes to existing systems | Medium | Medium | Medium | Use modular gameplay systems, configurable content, reusable reward systems, and well-defined service interfaces. |
| Poor usability causes users to abandon gameplay | Medium | High | High | Conduct usability testing, minimize navigation steps, provide clear feedback, and prioritize the primary gameplay loop. |
| Users misunderstand the purpose of energy | Medium | Medium | Medium | Clearly communicate that energy affects gathering rewards rather than access to gathering activities. |
| Authentication vulnerabilities expose user accounts | Low | Critical | High | Use secure authentication mechanisms, protect credentials, enforce authorization, and follow established security practices. |
| Unauthorized users access another player's data | Low | Critical | High | Enforce server-side authorization for every protected operation and test access controls. |
| Chat or communication features are abused | Medium | Medium | Medium | Implement authentication, permissions, reporting mechanisms, rate limits, and moderation capabilities. |
| Bugs cause unintended progression or economy inflation | Medium | High | High | Use automated testing, server-side validation, audit logs, monitoring, and mechanisms for investigating and correcting abnormal transactions. |
| Insufficient monitoring delays detection of production problems | Medium | High | High | Implement centralized monitoring, metrics, alerts, error tracking, and operational dashboards. |
| Backups cannot successfully restore player data | Low | Critical | High | Perform regular restoration tests rather than relying only on successful backup creation. |
| A failed transaction partially consumes resources | Medium | Critical | High | Use atomic transactions and rollback mechanisms for inventory, currency, energy, and reward operations. |
| Increased content complexity makes the system difficult to maintain | Medium | Medium | Medium | Maintain modular architecture, documentation, configuration-driven gameplay values, and automated regression testing. |
| Development resources are insufficient to implement the full planned MMORPG scope | High | High | High | Prioritize the core gameplay loop, define a minimum viable feature set, and defer non-essential systems until core functionality is stable. |
| Requirements change significantly during development | Medium | Medium | Medium | Maintain traceability between goals, scenarios, and requirements and use controlled requirement changes. |
| Testing a large number of interacting gameplay systems becomes difficult | High | High | High | Establish automated unit, integration, transaction, security, and gameplay tests and use representative end-to-end scenarios. |
| Third-party services become unavailable or change their APIs | Medium | Medium | Medium | Minimize unnecessary dependencies, isolate integrations behind interfaces, and provide fallback or replacement strategies where practical. |
| The game economy becomes dominated by a small number of highly active users | Medium | High | High | Monitor resource generation, trading activity, reward rates, and progression patterns and adjust configurable game-balance parameters as needed. |
| Players discover optimal strategies that make some gameplay systems irrelevant | Medium | Medium | Medium | Monitor player behavior and progression data and periodically rebalance rewards, upgrades, activities, and modifiers. |
| The system becomes unavailable during scheduled maintenance or deployments | Medium | Medium | Medium | Use deployment procedures that minimize downtime, communicate maintenance windows, and support rollback of failed releases. |
| Inadequate privacy controls expose unnecessary user information | Low | High | High | Minimize collected personal data, restrict access to sensitive information, and establish appropriate retention and deletion policies. |

# Obstacles

## Technical

- Designing a scalable architecture capable of supporting persistent MMORPG gameplay and increasing numbers of concurrent users.
- Maintaining authoritative server-side control over player progression, inventory, currency, energy, and rewards.
- Preventing item, currency, experience, and reward duplication caused by concurrent or repeated requests.
- Implementing atomic transactions across systems such as trading, crafting, gathering, and upgrades.
- Maintaining the required one-second entry time for gathering activities under normal operating conditions.
- Supporting real-time multiplayer gameplay while maintaining acceptable latency and server performance.
- Implementing reliable matchmaking for raids and dungeons when the active player population is small.
- Handling player disconnections without causing lost progression, duplicated rewards, or unfair outcomes.
- Maintaining immutable audit records while managing potentially large volumes of gameplay events.
- Designing systems that allow new activities, recipes, quests, upgrades, and multiplayer content to be added without major architectural changes.
- Preventing client-side manipulation of gameplay values such as energy, rewards, inventory, and character progression.
- Maintaining consistent game state when multiple actions occur simultaneously.
- Testing interactions between numerous gameplay systems, including energy, modifiers, upgrades, crafting, quests, and trading.
- Maintaining database performance as the number of users, transactions, and audit records increases.

## Organizational

- Limited development resources may make it difficult to implement the full MMORPG feature set within the available schedule.
- Requirements may change as gameplay systems are tested and feedback is collected.
- The project may lack sufficient resources for extensive multiplayer infrastructure and operational monitoring.
- Maintaining consistent documentation across a large number of interconnected requirements and systems may become difficult.
- Balancing the scope of the initial release against the long-term vision may require significant prioritization.
- Coordination between developers responsible for client, server, database, multiplayer, and user-interface systems may become challenging.
- Changes to game balance may require coordination between technical and gameplay-design responsibilities.
- Limited testing resources may restrict the amount of load, security, usability, and multiplayer testing that can be performed before release.

## Environmental

- Internet connectivity may vary significantly between users and geographic regions.
- Network latency and packet loss may negatively affect multiplayer gameplay.
- Temporary outages or failures of hosting infrastructure may affect game availability.
- The number of concurrent users may fluctuate significantly depending on time of day, events, updates, or player activity.
- External infrastructure or third-party services may experience outages or performance problems.
- Storage requirements may increase significantly as player accounts, transactions, and immutable audit records accumulate.
- Hardware and infrastructure limitations may restrict the number of simultaneous multiplayer instances.
- Changes in hosting costs or available infrastructure may affect the system's scalability strategy.
- Differences between supported client platforms may create compatibility and performance challenges.

## Human

- Users may misunderstand game mechanics, particularly the distinction between energy availability and gathering access.
- Users may attempt to exploit unintended interactions between game systems.
- Players may discover strategies that negatively affect game balance or make certain gameplay systems unnecessary.
- Users may intentionally attempt to manipulate the client or network communication to gain unauthorized rewards.
- Players may disconnect unexpectedly during important transactions or multiplayer activities.
- Users may make mistakes when trading items, crafting, upgrading, or purchasing items.
- Players may experience frustration if matchmaking takes too long or if multiplayer groups frequently fail.
- Users may have different levels of familiarity with MMORPG mechanics, requiring clear and accessible interfaces.
- Players may attempt to abuse communication systems through spam, harassment, or other inappropriate behavior.
- Administrators may make configuration or moderation mistakes that unintentionally affect player progression or system behavior.

## Operational

- Maintaining 99.9% availability may require significant monitoring, redundancy, maintenance, and recovery infrastructure.
- Scheduled maintenance and deployments may temporarily interrupt gameplay.
- Database backups may succeed without guaranteeing that data can actually be restored correctly.
- Monitoring systems may fail to detect subtle gameplay or economy problems before they affect many users.
- Large volumes of audit logs may increase storage, maintenance, and data-management requirements.
- Emergency fixes may introduce additional defects if they are deployed without sufficient testing.
- Game-balance changes may unintentionally affect player progression or the in-game economy.
- Recovering from item duplication, currency inflation, or other economy-related exploits may require investigation using audit records.
- Supporting new gameplay content while maintaining existing player progression may increase operational complexity.
- Multiplayer capacity may need to be increased quickly during major events or content releases.
- Incident response procedures may be insufficient if failures involving player data, transactions, authentication, or multiplayer services occur.
- Long-term maintenance may become increasingly difficult if technical debt accumulates as new features are added.

# Goal Conflicts and Tradeoffs

- **Usability vs. Feature Quantity**
  - Adding more gameplay systems can increase the depth of the MMORPG but may make the interface more complicated.
  - The system should prioritize a clear and efficient core gameplay loop over adding unnecessary features.

- **Accessibility vs. Progression Balance**
  - Allowing users to gather without energy ensures that users can always make progress.
  - However, providing unrestricted gathering may reduce the importance of energy as a progression mechanic.
  - Energy should therefore provide meaningful reward advantages without preventing participation.

- **Reward Availability vs. Game Economy**
  - Allowing users to continuously gather materials can increase the amount of resources entering the economy.
  - Excessive resource generation could cause inflation and reduce the value of crafted or traded items.
  - Gathering rewards must therefore be balanced to maintain a healthy in-game economy.

- **Performance vs. Auditability**
  - Recording detailed information about every major gameplay interaction improves accountability and debugging.
  - However, extensive audit logging increases storage requirements and may introduce additional processing overhead.
  - Audit records should contain enough information to reconstruct important events without unnecessarily recording irrelevant data.

- **Security vs. Performance**
  - Server-side validation provides stronger protection against cheating and manipulation.
  - Performing additional validation and transaction checks can increase server processing time.
  - Security-critical operations should remain server-authoritative while performance-sensitive operations should be optimized where possible.

- **Consistency vs. Availability**
  - Strong consistency is important for inventory, currency, energy, trading, and progression.
  - However, enforcing strict consistency across all services can make the system less tolerant of temporary failures.
  - Critical player transactions should prioritize consistency, while non-critical systems may use more resilient approaches when appropriate.

- **Scalability vs. Architectural Complexity**
  - Designing the system for large numbers of concurrent users improves long-term scalability.
  - Highly distributed or independently scalable services can increase development, deployment, monitoring, and maintenance complexity.
  - The initial architecture should support reasonable growth without introducing unnecessary complexity before it is required.

- **Real-Time Multiplayer vs. Infrastructure Cost**
  - Real-time multiplayer gameplay provides a more interactive experience.
  - Supporting large numbers of simultaneous multiplayer sessions requires additional server capacity and networking infrastructure.
  - Real-time communication should be prioritized for gameplay systems that require it rather than for every system in the application.

- **Content Extensibility vs. Development Simplicity**
  - Highly configurable systems make it easier to add new activities, recipes, quests, upgrades, and raids.
  - Excessive abstraction can make the system harder to understand and maintain.
  - Extensibility should focus on gameplay systems that are expected to receive frequent new content.

- **Player Freedom vs. Abuse Prevention**
  - Giving users freedom to trade, communicate, gather, and participate in activities improves the player experience.
  - Greater freedom also creates additional opportunities for exploits, fraud, spam, and abusive behavior.
  - Server-side validation, permissions, transaction controls, and moderation mechanisms should protect the system without unnecessarily restricting legitimate gameplay.

- **Fast Gameplay vs. Transaction Safety**
  - Users should be able to begin activities quickly and receive responsive feedback.
  - Important operations such as trading, crafting, upgrading, and claiming rewards require validation and atomic transactions.
  - The system should optimize transaction processing without removing safeguards necessary to protect player data and the game economy.

- **Energy Management vs. Player Retention**
  - Energy systems can encourage players to manage their resources and return to the game later.
  - Completely preventing gameplay when energy is depleted may frustrate users and discourage continued play.
  - The system should use energy as a reward optimization mechanic so that depleted users can continue making meaningful progress.

- **Game Balance vs. Player Progression**
  - Increasing reward rates and progression speed can make the game feel more rewarding.
  - Excessively fast progression can reduce long-term engagement and diminish the value of upgrades and high-level content.
  - Reward rates, energy bonuses, weekly bonuses, and upgrade costs should remain configurable so they can be adjusted based on observed player behavior.

- **Reliability vs. Development Cost**
  - High availability, backups, redundancy, and disaster recovery improve reliability.
  - These capabilities require additional infrastructure, development time, and operational resources.
  - Critical player data and transactions should receive the highest reliability guarantees, while less critical systems may use simpler recovery strategies.

- **Privacy vs. Auditability**
  - Detailed audit records provide valuable information for investigating exploits, disputes, and system failures.
  - Collecting excessive user information can increase privacy and data-management risks.
  - Audit records should contain the minimum information necessary to investigate gameplay events and should follow appropriate access and retention policies.

- **Rapid Development vs. Long-Term Maintainability**
  - Implementing features quickly can help validate the game's core concept.
  - Rapid development without sufficient structure can create technical debt that makes future features more difficult to implement.
  - The project should prioritize a modular architecture and automated testing for systems that are expected to evolve frequently.

- **Automation vs. Administrative Control**
  - Automated systems can handle rewards, weekly resets, matchmaking, configuration, and other repetitive operations efficiently.
  - Excessive automation can make unexpected behavior more difficult to correct.
  - Critical automated systems should provide monitoring, audit trails, administrative controls, and safe rollback or correction mechanisms.
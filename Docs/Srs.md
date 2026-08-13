# System Vision

## Problem

## Purpose

## Who Benefits

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

## Organizational Policy Constraints

## Authentication and Access Constraints

## Interoperability Requirements

## Platform Constraints

## Operational Constraints

## Data Integreity Constraints

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
| **SC-3: User Upgrades a Gathering Activity** | FR-5, FR-13, FR-14, FR-15 |
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
- Energy affects gathering rewards rather than preventing gathering when depleted.
- Exact balance values such as reward rates, energy recovery, loot probabilities, and upgrade costs remain configurable design decisions.
- Additional content may be added through the existing systems without requiring new core functionality.

# Validation Approach

## Functional Requirement Validation

## Non-Functional Requirement Validation

# System Environment

## User Context

## Physical and Operational Conditions

## External Systems and Services

## Summary

# Stakeholders

## Key Stakeholders

## Other relevant stakeholders

# Scope and Boundaries

## Included in Scope

- User authentication and persistent player accounts.
- Character progression, including levels, experience, classes, perks, and gear.
- Inventory, items, materials, currency, and persistent player state.
- Singleplayer gathering activities, including mining, hunting, fishing, gathering, and farming.
- An energy system that modifies gathering rewards without blocking participation.
- Randomized gathering rewards and experience.
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

## Environment

## Constraints

## System Usage

# Risk Analysis

# Obstacles

## Technical

## Organizational

## Environmental

## Human

## Operational

# Goal Conflicts and Tradeoffs
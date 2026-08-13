# System Vision

## Problem

## Purpose

## Who Benefits

# System Goals

## Scenarios

## Functional Requirements

## Scenario Requirements Mapping

# Non-Functional Requirements

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
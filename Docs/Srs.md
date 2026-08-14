# System Vision

## Problem
Currently Massively Multiplayer Online games (MMOs), like World of Warcraft or Destiny 2, require huge amounts of time investment and can easily take over a player's life due to the amount of time needed to level up, acquire gear, and remain relevant in the game's economy.

## Purpose
Active Archive aims to deliver MMO-like mechanics without requiring players to drown themselves in content or constantly check in, letting players engage on their own schedule and still make meaningful progress.

## Who Benefits
Active Archive benefits people who enjoy MMO mechanics and the grind, but who do not want to sink all of their free time into a game.
# System Goals

## Scenarios

## Functional Requirements

## Scenario Requirements Mapping

# Non-Functional Requirements

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

## Scenario to Functional Requirement Traceability

## Functional Requirement Coverage Summary

## Non-Functional Requirement Traceability

## Traceability Observations

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

## Excluded from Scope

## Boundaries

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

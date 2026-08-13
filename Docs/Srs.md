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
| **ORG CON-1: The software will be built around all documentation to the best ability** | All |
| **CON-2: ** |  |
| **CON-3: ** |  |
| **CON-4: ** |  |
| **CON-5: ** |  |

These constraints detail how organizational policy will be followed.

## Authentication and Access Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **AA CON-1: Users will be required to have an authenticated account** | FR-1, FR-15, NFR-5 |
| **AA CON-2: Users will be able to enter the game at any point in time** | NFR-1, NFR-3, NFR-7 |
| **CON-3: ** |  |
| **CON-4: ** |  |
| **CON-5: ** |  |

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

* Supporting Functional Requirements: 

**Marketplace Transactions**

Marketplace transactions will be atomic and will support data rollback in the event of failure. If failure occurs, players will retain all items and currency or marketplace listings they had prior to the failure. Audit logs also will store all information relating to marketplace transactions.

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
| **OP CON-1: ** |  |
| **CON-2: ** |  |
| **CON-3: ** |  |
| **CON-4: ** |  |
| **CON-5: ** |  |

## Data Integreity Constraints

| Constraint | Supporting Functional Requirements |
| --- | --- |
| **DI CON-1: ** |  |
| **CON-2: ** |  |
| **CON-3: ** |  |
| **CON-4: ** |  |
| **CON-5: ** |  |

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
| ** ** | FR-1 |
| ** ** | FR-2 |
| ** ** | FR-3 |
| ** ** | FR-4 |
| ** ** | FR-5 |
| ** ** | FR-6 |
| ** ** | FR-7 |
| ** ** | FR-8 |
| ** ** | FR-9 |
| ** ** | FR-10 |
| ** ** | FR-11 |
| ** ** | FR-12 |
| ** ** | FR-13 |
| ** ** | FR-14 |
| ** ** | FR-15 |

## Non-Functional Requirement Validation

| Validation Approach | Non-Functional Requirement |
| --- | --- |
| ** ** | FR-1 |
| ** ** | FR-2 |
| ** ** | FR-3 |
| ** ** | FR-4 |
| ** ** | FR-5 |
| ** ** | FR-6 |
| ** ** | FR-7 |
| ** ** | FR-8 |
| ** ** | FR-9 |
| ** ** | FR-10 |
| ** ** | FR-11 |
| ** ** | FR-12 |
| ** ** | FR-13 |
| ** ** | FR-14 |
| ** ** | FR-15 |

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

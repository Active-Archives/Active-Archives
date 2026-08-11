# System Vision

## Problem

## Purpose

## Who Benefits

# System Goals

- Create an MMORPG game for users to connect with one another
    - The service must provide an always online game for users to complete various tasks in either singleplayer or multiplayer methods.
- Allow users to perform a multitude of singleplayer actions to advance their character
    - The game must offer a series of "minigames" for users to gather materials to further advance their user character through crafting and upgrading mechanics. users should be able to join these singleplayer experiences within a second.
- Connection to other users to communicate and perform a variety of multiplayer activities
    - The system must allow users to connect to one another to communicate, trade, and perform multiplayer activities such as "raids" or "dungeons" in order to progress.
- Maintain complete audit logs of user interactions
    - The system must record all user major interactions (quests, levelups, trades, messages) in an immutable audit trail.
- Prioritize system usability over quantity of features
    - The interface must minimize required steps to pick up the game at any point in time.

## Scenarios
**Scenario 1**: User gathers for materials
- Actors:
    - User
- Preconditions:
    - User must be logged in
    - User has clicked on "gather" option
- Flow:
    - The user logs into Active Archives.
    - The user navigates to the "gather" interface.
    - The user enters whichever "gather" instance they would like to partake in.
    - The user plays the gather minigame.
    - System rewards user with randomized items depending on level and gather instance.
    - System rewards user with experience points for specified gathering instance.
- Alternative flow:
    - The user fails to complete the event in time.
    - System rewards user with 90% less experience.
- Post conditions:
    - The user is returned to the main UI.

**Scenario 2**: User places item for sale
- Actors:
    - User
- Preconditions:
    - User must be logged in
    - User has item they are selling
- Flow:
    - The user logs into Active Archives.
    - The user navigates to the "trade" interface.
    - The user clicks the "trade new item" button.
    - System opens a new UI.
    - The user inputs an item to trade.
    - The user sets the item / currency they are seeking to aquire.
    - The user posts the item.
- Altenative flow:
    - The user decides not to sell the item.
    - The user closes out of the UI.
    - The item is not posted.
- Post conditions:
    - The user is returned to the main UI.

## Functional Requirements

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

## Scenario to Functional Requirement Traceability

## Functional Requirement Coverage Summary

## Non-Functional Requirement Traceability

## Traceability Observations

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
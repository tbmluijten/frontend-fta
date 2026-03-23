----
description: Guidelines for Feature-Based Architecture and KISS Logic Separation
alwaysApply: true
---

# Architecture & Logic Separation Principles

## 1. Feature-Based Directory Structure

Organize the project by domain (Feature) rather than by technical type (Hook/Component/Type). This keeps related logic together and makes the codebase "scannable."

- **`components/ui/`**: Atomic, stateless building blocks (Buttons, Inputs, Badges). No business logic.
- **`components/layout/`**: Shared page-level shells used across variants (e.g. `PageShell`). Not variant-specific chrome.
- **`features/[feature-name]/`**: Domain-specific logic. Includes its own `api/`, `hooks/`, `components/`, and `types/`.
- **`app/`**: Next.js routing layer. Keep these files "thin"—only layouts and page definitions.

### Thank-you scaffold (this repository)

This project implements **simple thank-you pages** with a **small set of components**. A full **`features/`** tree (with per-feature `api/`, `hooks/`, etc.) is **not required** here.

- Use **`src/components/thank-you-type-1/`** and **`src/components/thank-you-type-2/`** for variant-specific UI and their `layout/` (e.g. `Type1PageLayout`, sticky nav per variant).
- Introduce **`features/`** only if the product grows beyond this scaffold and needs heavier domain separation.

The generic bullets above remain **guidance for larger apps**; they are **not mandatory** for this repo’s current scope.

## 2. The "Brain & Beauty" Pattern (KISS Logic)

To maintain clarity and scale, hide complex logic from high-level components and pages.

- **The Page (The Shell):** Only handles routing, URL params, and high-level layout.
- **The Container/Section (The Brain):** Usually found in `features/` or as a "smart" component in `layout/`. This is where data fetching (Hooks) and state management live.
- **The Presenter (The Beauty):** Small, focused components that receive data via props. They don't know where the data comes from; they only know how to render it.

## 3. Component Hierarchy Rules

Follow the "Context via Folder" rule strictly to avoid redundant naming.

- **Rule:** Do NOT repeat the parent's name in a child component.
- **Naming:** If a component is only relevant to its parent, place it in a subfolder named after its role.

**Example:**

```text
navigation-bar/
  navigation-bar.component.tsx  <-- Parent
  user-profile/
    user-profile.component.tsx  <-- Child (NOT NavigationBarUserProfile)
    avatar/
      avatar.component.tsx      <-- Grandchild (NOT UserProfileAvatar)
```

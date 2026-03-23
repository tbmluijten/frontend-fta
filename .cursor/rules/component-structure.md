---
description: Component folder structure and naming conventions
alwaysApply: true
---

# Component Structure & Naming

## Avoid Redundant Parent Names in Child Components

When a component is a child of a parent component, do **not** repeat the parent name in the child component or file name. The folder hierarchy already provides the context.

**Structure:** Place child components in a subfolder named after their role. The component file uses that role name, not the parent + role.

**Example:**

```
sidebar/
  sidebar.component.tsx        ← Parent component
  menu-item/
    menu-item.component.tsx     ← Child: "MenuItem" (not "SidebarMenuItem")
```

**Wrong:** `sidebar-menu-item.component.tsx` inside `sidebar/` — redundant, because "sidebar" is already implied by the parent folder.

**Right:** `menu-item/menu-item.component.tsx` inside `sidebar/` — the component is `MenuItem`; the path `sidebar/menu-item` makes the context clear.

Apply this pattern to all layout, section, and feature components with nested subcomponents.

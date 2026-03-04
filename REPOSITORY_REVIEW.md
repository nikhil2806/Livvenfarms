# Repository Review: Livven Farms

## Scope reviewed
- Project structure and deliverables
- HTML/CSS/JS code quality
- Runtime/developer experience
- Documentation consistency

## High-level assessment
This repository currently behaves like a **static website project** with one utility Python server script, while the README describes a significantly broader full-stack application (Node/Express/MySQL/API).

## What is working well
1. **Simple deployability**: Static assets can be served immediately (`index.html`, `styles.css`, `script.js`, images).
2. **Clear site sections**: Home, about, accommodation, activities, gallery, FAQ, and contact are present.
3. **FAQ interaction**: JavaScript FAQ toggle logic is straightforward and understandable.

## Key issues found

### 1) Critical HTML structure problems in `index.html`
- `index.html` includes **multiple embedded `<!DOCTYPE html>` + `<html>...</html>` documents** inside the first document.
- There are **duplicate `#calendar` elements**, which can create unpredictable behavior when selecting by ID.
- The document contains backend-oriented event form and endpoint calls (`/events`) that are not supported by files in this repository.

**Impact**: Browser parsing becomes inconsistent, accessibility and maintainability degrade, and calendar features may fail unpredictably.

### 2) Asset filename mismatches likely to break images on case-sensitive hosts
- `index.html` references `room1.jpg` and `room2.jpg`, but the repository contains `Room1.jpg` and `Room2.jpg`.

**Impact**: Images can load on case-insensitive systems but fail in Linux production environments.

### 3) Missing script include for existing behavior
- `script.js` contains FAQ logic, but `index.html` does not include `<script src="script.js"></script>`.

**Impact**: FAQ accordion behavior may never execute.

### 4) README/project mismatch
- README claims Node.js/Express/MySQL backend and API endpoints, but repository includes only static files and `serve_website.py`.
- README appears unfinished/truncated and currently over-promises implemented functionality.

**Impact**: Confuses contributors/users and raises onboarding/support overhead.

### 5) Missing developer tooling
- No dependency manifest (`package.json`/`requirements.txt`) for the documented stack.
- No linting/formatting/test configuration.

**Impact**: Harder to validate quality and prevent regressions.

## Recommended priorities

### Immediate (P0)
1. Normalize `index.html` into one valid HTML document.
2. Ensure IDs are unique (`#calendar` only once).
3. Fix image filenames or references (`Room1.jpg`/`Room2.jpg` consistency).
4. Include `script.js` in HTML if FAQ interaction is required.

### Near-term (P1)
1. Align README with actual implementation status.
2. If backend is intended, add a minimal API service scaffold and documented run steps.
3. Add basic checks (HTML validation, JS linting).

### Medium-term (P2)
1. Improve responsive layout for cards and gallery on small screens.
2. Add accessibility pass (landmarks, heading hierarchy, keyboard/focus states, contrast).
3. Add CI to run checks on pull requests.

## Suggested next milestone
A practical next milestone is to ship a **clean static v1**:
- one valid HTML page,
- working FAQ behavior,
- stable image links,
- accurate README,
- optional calendar embedded in a single section.

Then, if needed, incrementally add backend booking APIs in a separate versioned milestone.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TNYRevamped is a full-stack job marketplace platform built with **Laravel 11** (backend) + **Vue 3 + Inertia.js** (frontend). It connects job seekers and employers with features like vacancy management, applications, bidding, and an admin dashboard.

## Commands

### Development
```bash
composer run dev    # Starts Laravel server, queue worker, log watcher, and Vite dev server concurrently
```

### Build
```bash
npm run build       # Vite production build
php artisan migrate # Run pending migrations
```

### Testing
```bash
./vendor/bin/phpunit                          # Run all tests
./vendor/bin/phpunit tests/Feature/FooTest.php # Run a single test file
```

### Code Formatting
```bash
./vendor/bin/pint   # Laravel PHP code formatter
```

## Architecture

### Request Flow
All web routes go through **Inertia.js**: Laravel renders the root Blade template ([resources/views/app.blade.php](resources/views/app.blade.php)), which boots the Vue 3 app ([resources/js/app.ts](resources/js/app.ts)). Inertia resolves page components from `resources/js/Pages/`. Shared data (auth state, flash messages) is injected via `HandleInertiaRequests` middleware.

### Auth System
Two separate auth guards:
- **`web`** (session-based) — for the frontend UI. Custom middleware `AuthView` and `UserAuthenticate` protect web routes.
- **`api`** (Laravel Passport OAuth2) — for API endpoints. Admin-only routes require `auth:api,scope:admin`.

Two user types exist in the DB via `user_type` field: `admin` and regular users (further typed as `employer` or `job-seeker`). The `Admin` model uses Passport tokens; the `User` model handles web sessions.

### Route Organization
Routes are split across multiple files included from [routes/web.php](routes/web.php) and [routes/api.php](routes/api.php):
- [routes/employer/employer-routes.php](routes/employer/employer-routes.php) — employer dashboard + vacancy management
- [routes/job-seeker.php](routes/job-seeker.php) — job seeker profile and actions
- [routes/bids.php](routes/bids.php) — bidding between employers and job seekers
- [routes/applications-routes.php](routes/applications-routes.php) — application CRUD
- [routes/content.php](routes/content.php) — hero/content management (admin)

### Service Layer
Business logic lives in `app/Services/`, not controllers. Key services:
- `AuthService`, `EmployerService`, `JobSeekerService` — core domain logic
- `ApplicationsService`, `VacanciesService`, `BidsService` — marketplace operations
- `Cloudinary` — image/file uploads (all media goes through Cloudinary)
- `GoogleDrive` — Google Drive integration
- `ExportService` — CSV data exports

### Frontend Structure
- `resources/js/Pages/` — Inertia page components (one per route)
- `resources/js/Components/` — reusable Vue components
- `resources/js/router/` — Vue Router config (used alongside Inertia for client-side navigation)
- `resources/js/state/` — shared frontend state
- `resources/js/types/` + `resources/js/interface/` — TypeScript definitions
- Path alias `@/` maps to `resources/js/`

### Database
SQLite by default (development). Migrations are in `database/migrations/` (39 total including Passport OAuth tables). Session, queue, and cache all use the database driver.

### Key Models & Relationships
- `User` → has one `Employer` or `JobSeeker` (polymorphic profile)
- `Employer` → has many `Vacancy`, many `Bid`
- `JobSeeker` → has many `Application`, many `Bid`
- `Vacancy` → belongs to `Employer`, has many `Application`, has many `Language`
- `Bid` — pivot between `Employer` and `JobSeeker`

### Deployment
Configured for Heroku via `Procfile`: web runs Apache+PHP, release phase runs migrations, worker processes the queue.

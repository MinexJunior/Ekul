# 🏢 እኩል | Ekul — Fair Shares, Peaceful Homes
> **An Integrated Web and Mobile Platform for Ethiopian Apartment Area Management**  
> *Billing for rent, water, electricity, and parking; vehicle gate fees; staff cuts; owner income settlement; and tenant move-in / move-out.*

---

## 🌟 Executive Summary

In Ethiopian cities, apartment areas and condominium compounds are vibrant mini-communities. Multiple families live across blocks belonging to different owners, sharing common gates, guards, parking lots, water pumps, and compound lighting. Managing these shared finances with notebooks, phone calculators, and disorganized chat groups causes frequent misunderstandings, delays, and friction.

**Ekul (እኩል, "equal")** resolves this by providing a unified, transparent platform built around an append-only financial ledger. Every family understands their exact bill, property owners follow their income and building-specific deductions, guards and cashiers receive fair and auditable cuts, and the estate administrator closes each period with complete mathematical reconciliation.

---

## 🏛️ The Three Portals & Gate Console

Ekul provides dedicated interfaces tailored for each stakeholder in the apartment community:

### 1. 👨‍👩‍👧 Family Portal (Tenant)
* **Transparent Monthly Bill**: Itemized breakdown of house rent, private electricity meter usage, water share, resident parking, and compound security/cleaning fees.
* **Payment Submission & Receipts**: Instant transfer instructions for **Telebirr** and **Commercial Bank of Ethiopia (CBE)** with payment code registration and confirmation status.
* **Registered Vehicles**: Register family cars for automatic, free gate entry.
* **Free Houses Directory**: Browse vacant units listed by the administrator across the compound.

### 2. 🏢 Owner Portal (Property Owners)
* **Owned Units Portfolio**: Real-time view of owned units across blocks, floors, and current tenant occupancy.
* **Period Settlement Statement**: Transparent income report:
  $$\text{Net Payout} = \text{Gross Rent} - \text{Admin Fee (3\%)} - \text{Building Repairs/Faults} + \text{Share of Common Pool}$$
* **Building Abnormality Log**: Verification of maintenance tickets (e.g. water pump repair) charged strictly to that specific building.

### 3. 🛡️ Admin Portal (Estate Administrator)
* **Tenant Lifecycle Management**: Streamlined move-in wizard (contracts, deposits, starting meters, parking slots) and move-out closing (final meter readings, damage deductions, deposit refund).
* **Meters & Abnormality Fund**: Tracks building utility usage and charges repair tickets to responsible owners.
* **Settlement Engine & Audit Proof**: Automatically proves that 100% of collected estate inflows equal the sum of utility payments, staff cuts, staff salaries, contractor repairs, admin management fees, and owner payouts.
* **Free Houses Management**: Post and unlist vacant apartments with photos, rent, floor, and room numbers.

### 4. 🚗 Gate Console (Security Guards & Cashiers)
* **Fast Touch Interface**: High-contrast, large-button design optimized for outdoor mobile use.
* **Gate Tariffs**: Automatic fee calculation for visitor parking (hourly & overnight) and service vehicles (taxis, minibuses, delivery trucks, moving trucks).
* **Cashier Shift Closing**: Audits physical cash in hand against expected ledger receipts to eliminate missing cash.
* **Printable / Digital Ticket**: Generates instant entry and exit receipts.

### 5. 🧮 Communal Bill Splitter (Legacy Tool Preserved)
* Fast, database-free expense division with weighted shares, ground-floor pump exemptions, student half-shares, and bilingual Telegram group templates.

---

## 💰 Financial Model & Calculation Rules

Ekul enforces clear, community-tested business rules:
* **Rule BR-01 to BR-03**: Rent belongs directly to the unit owner minus agreed deductions.
* **Rule BR-07**: Staff cuts (e.g., 10% parking attendant cut, 10% guard gate cut, 5% cashier cut) are deducted from vehicle income before the common pool is split.
* **Rule BR-09**: Net common pool (parking, gate fees, service charges minus staff cuts, salaries, and common utilities) is shared equally among owners by default.
* **Rule BR-10**: Building repairs and utility leaks are charged strictly to the owners of that building.
* **Rule BR-14**: Every transaction is recorded in an immutable, append-only ledger.

---

## 🇪🇹 Bilingual Support & Local Context

Ekul features complete, first-class bilingual support in both **English** and **Amharic (አማርኛ)** across all portals, receipts, alerts, and statements. It respects local Ethiopian apartment terminology and integrates payment instructions for Telebirr and CBE.

---

## 🛠️ How to Run Locally

Ekul is currently built with vanilla web technologies and runs directly in any modern browser without heavy compilation:

1. Double-click `index.html` to open in Google Chrome, Microsoft Edge, Safari, or Firefox.
2. Or serve it using Python's built-in HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## 🚀 GitHub Repository & Renaming Guide

To rename your existing GitHub repository and update your local git configuration:

1. **On GitHub**:
   * Navigate to your repository settings (`MinexJunior/apartment_expense_spiltter`).
   * In **General** > **Repository name**, change it to `ekul`.

2. **On your computer**:
   ```bash
   # Update the remote URL
   git remote set-url origin https://github.com/MinexJunior/ekul.git
   
   # Check status and verify
   git status
   git add .
   git commit -m "feat: transform into Ekul apartment area management platform"
   git push origin main
   ```

---

## 🗺️ Roadmap (Stage 2 & Stage 3)

* **Stage 2 (Full-Stack Backend)**: Scaffolding Node.js + Express + TypeScript API with PostgreSQL (Prisma ORM) and Redis BullMQ for automated monthly billing and Telegram Bot alerts.
* **Stage 3 (Mobile Application)**: React Native / Expo mobile application for tenants and gate cashiers with offline synchronization.
* **Stage 4**: Direct Telebirr and CBE API payment confirmations.

---

**Ekul (እኩል)** &copy; 2026. Made with dedication for fair, peaceful, and harmonious urban living in Ethiopia.

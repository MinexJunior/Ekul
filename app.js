// ==========================================================================
// EKUL (እኩል) - Ethiopian Apartment Area Management Platform
// Core Application Logic, Bilingual Engine, and Financial Settlement Processor
// ==========================================================================

// 1. COMPREHENSIVE BILINGUAL TRANSLATION DICTIONARY (EN & AM)
const I18N = {
  en: {
    // Header & Brand
    app_tagline: "Fair shares, peaceful homes",
    demo_compound_name: "Abyssinia Compound",
    
    // Main Navigation Portals
    nav_family: "Family Portal",
    nav_owner: "Owner Portal",
    nav_admin: "Admin Portal",
    nav_gate: "Gate Console",
    nav_splitter: "Bill Splitter",
    
    // Dynamic Metrics
    metric_family_due: "My Total Due",
    metric_family_sub: "Due on 5th of the month",
    metric_payment_status: "Payment Status",
    metric_status_sub: "Awaiting confirmation",
    metric_active_cars: "Family Vehicles",
    metric_cars_sub: "Slot A-12 (Open)",
    metric_free_houses: "Free Houses",
    metric_free_sub: "Available to rent",
    
    metric_owner_units: "Units Owned",
    metric_owner_units_sub: "In Block A & B",
    metric_rent_collected: "Rent Collected",
    metric_rent_sub: "This billing period",
    metric_net_payout: "Net Payout",
    metric_payout_sub: "After building deductions",
    metric_common_pool: "Common Pool Share",
    metric_pool_sub: "Equal owner share",
    
    metric_estate_income: "Total Estate Inflow",
    metric_estate_sub: "Rent, utilities & gate",
    metric_admin_unpaid: "Unpaid Dues",
    metric_admin_unpaid_sub: "Pending family payments",
    metric_net_pool_total: "Net Common Pool",
    metric_net_pool_sub: "After staff cuts & bills",
    metric_total_units: "Total Units",
    metric_total_units_sub: "6 Occupied, 3 Vacant",
    
    metric_gate_inside: "Cars Inside Compound",
    metric_gate_inside_sub: "Currently parked",
    metric_shift_cash: "Shift Collections",
    metric_shift_cash_sub: "Gate fees in cash/transfer",
    metric_cashier_cut: "Cashier Cut (5%)",
    metric_cashier_cut_sub: "Earned this shift",
    metric_entries_today: "Total Gate Entries",
    metric_entries_today_sub: "Today's vehicle count",
    
    // Family Portal
    logged_as_family: "Viewing as Family:",
    family_monthly_bill: "My Monthly Bill",
    family_bill_sub: "Transparent breakdown of rent, utilities, parking, and compound services",
    line_rent: "House Rent (Agreed Monthly)",
    line_elec: "Electricity (Private Meter Units)",
    line_water: "Water Share (Building Usage)",
    line_parking: "Resident Vehicle Parking (1 Slot)",
    line_services: "Guard, Area Keeper & Cleaning Share",
    line_total_due: "Total Amount Due",
    due_alert_msg: "Payment due by the 5th of this month. Please transfer via Telebirr or CBE and submit your transaction code below.",
    submit_payment_hdr: "Confirm Your Payment",
    pay_method: "Payment Method",
    pay_reference: "Transaction / Receipt Code",
    btn_submit_payment: "Submit Payment for Confirmation",
    family_vehicles_title: "My Registered Vehicles",
    family_vehicles_sub: "Registered cars enter and exit freely at the gate without visitor tariffs",
    gate_pass_active: "Gate Pass Active",
    col_plate: "Plate Number",
    col_type: "Vehicle Type",
    col_slot: "Slot Assigned",
    col_monthly_fee: "Monthly Fee",
    free_houses_title: "Free Houses in Compound",
    free_houses_sub: "Officially listed vacant units available for rent in our compound",
    
    // Owner Portal
    logged_as_owner: "Viewing as Owner:",
    owner_statement_title: "Owner Settlement Statement",
    owner_statement_sub: "Net payout calculation after building maintenance, admin cut, and common pool share",
    stmt_gross_rent: "Gross Rent Collected from Units",
    stmt_admin_fee: "Admin Management Fee (3%)",
    stmt_building_repairs: "Building Repairs & Fault Fixes",
    stmt_utility_diff: "Utility Difference (Pass-Through)",
    stmt_common_share: "Equal Share of Net Common Pool",
    stmt_net_payout: "Net Period Payout to Owner",
    how_calculated_title: "How this payout was calculated:",
    formula_owner_explain: "Net Payout = Rent (32,000) - Admin Fee (960) - Block A Pump Fault (1,200) + Common Share (3,375) = 33,215 ETB. Recorded entry by entry in the compound ledger.",
    btn_copy_statement: "Copy Telegram Summary",
    owner_units_title: "My Owned Units Portfolio",
    owner_units_sub: "Status of each room, current tenant family, and agreed monthly rent",
    col_unit: "Unit #",
    col_floor: "Floor",
    col_family: "Active Family",
    col_rent: "Rent (ETB)",
    col_status: "Status",
    abnormality_title: "Building Repairs Log",
    abnormality_sub: "Maintenance tickets and utility abnormality costs charged specifically to this building",
    charged_to_building: "Charged to Block A",
    col_date: "Date",
    col_description: "Description / Fault",
    col_contractor: "Contractor / Tech",
    col_amount: "Cost (ETB)",
    
    // Admin Portal
    admin_tab_settlement: "Settlements & Audit",
    admin_tab_tenants: "Tenant Lifecycle (Move-In/Out)",
    admin_tab_utilities: "Meters & Utility Faults",
    admin_tab_cuts: "Staff Cuts & Tariffs",
    admin_tab_free: "Free Houses Manager",
    settlement_runner_title: "Monthly / Period Settlement Engine",
    settlement_runner_sub: "Calculates net common pool, deducts staff cuts, and generates owner payouts",
    btn_run_settlement: "Calculate Settlement",
    step1_common_pool: "Step 1: Net Common Pool Income",
    col_line_item: "Revenue / Expense Line",
    col_notes: "Formula / Notes",
    step2_owner_payouts: "Step 2: Owner Payout Calculations",
    col_owner: "Owner",
    col_units: "Units",
    col_admin_cut: "Admin Fee (3%)",
    col_repairs: "Repairs / Faults",
    col_pool_share: "Common Share",
    col_net_payout: "Net Payout",
    col_action: "Action",
    audit_reconciliation_title: "Mathematical Reconciliation (Audit Proof)",
    badge_balanced: "100% Balanced",
    audit_sub: "Total Inflow collected from families & gate: 74,500.00 ETB. All outflow matches penny-for-penny:",
    
    move_in_title: "Register New Tenant (Move-In)",
    move_in_sub: "Set up contract, security deposit, starting meters, and parking slot",
    lbl_select_unit: "Select Vacant Unit",
    lbl_tenant_name: "Family / Tenant Name",
    lbl_phone: "Phone Number",
    lbl_deposit: "Deposit Held (ETB)",
    lbl_elec_start: "Starting Electricity Meter",
    lbl_water_start: "Starting Water Meter",
    btn_complete_move_in: "Complete Move-In & Start Billing",
    
    move_out_title: "Process Departure (Move-Out)",
    move_out_sub: "Final meter reconciliation, prorating last month, and deposit refund",
    lbl_select_departing: "Select Active Family",
    lbl_final_elec: "Final Electricity Meter",
    lbl_final_water: "Final Water Meter",
    lbl_damages: "Damages / Unpaid Dues (ETB)",
    lbl_refund_deposit: "Deposit Refund (ETB)",
    btn_close_tenancy: "Close Tenancy & Re-list as Free",
    
    log_repair_title: "Log Building Repair / Abnormality Ticket",
    log_repair_sub: "According to Rule BR-10, maintenance costs are charged strictly to the owners of that building",
    lbl_affected_building: "Affected Building",
    lbl_repair_cost: "Total Cost (ETB)",
    lbl_repair_desc: "Description of Fault / Repair",
    lbl_contractor: "Contractor / Technician Name",
    btn_record_repair: "Record Repair Ticket",
    
    staff_cut_title: "Staff Cut Rules (%)",
    staff_cut_sub: "Configurable commission deducted before common pool distribution (Rule BR-07)",
    lbl_cut_car: "Car Keeper (Parking Attendant) Cut (%)",
    lbl_cut_guard: "Area Keeper (Guard) Gate Cut (%)",
    lbl_cut_cashier: "Gate Cashier Cut (%)",
    lbl_admin_fee: "Admin Management Fee (%)",
    btn_save_rules: "Save Rules & Tariffs",
    
    gate_tariffs_title: "Gate Tariffs (ETB)",
    gate_tariffs_sub: "Fee schedule for visitors, deliveries, and vehicles passing through",
    lbl_tariff_resident: "Resident Monthly Parking",
    lbl_tariff_v1: "Visitor Car (First Hour)",
    lbl_tariff_vadd: "Visitor Additional Hour",
    lbl_tariff_overnight: "Visitor Overnight Parking",
    lbl_tariff_minibus: "Taxi / Minibus Entry",
    lbl_tariff_truck: "Delivery Truck Entry",
    
    publish_free_title: "Publish Free House",
    publish_free_sub: "Post unrented units to the public board for families and owners",
    lbl_block: "Block Name",
    lbl_room: "Room / Unit #",
    lbl_floor: "Floor Number",
    lbl_monthly_rent: "Monthly Rent (ETB)",
    btn_publish_unit: "Publish to Free Houses List",
    
    // Gate Console
    gate_checkin_title: "Vehicle Gate Entry Check-In",
    badge_gate_open: "Gate 1 Active",
    gate_checkin_sub: "Register arriving vehicles. Registered residents pass free; visitors get a ticket",
    lbl_select_vtype: "Select Vehicle Type",
    vtype_resident: "Resident Car",
    vtype_visitor: "Visitor Car",
    vtype_minibus: "Taxi / Minibus",
    vtype_truck: "Delivery Truck",
    fee_monthly_free: "Monthly (Free Gate)",
    lbl_plate_number: "License Plate Number",
    btn_record_entry: "Record Entry & Issue Ticket",
    active_inside_title: "Vehicles Currently Inside",
    active_inside_sub: "Click Exit to calculate duration fee and generate cashier receipt",
    col_entry_time: "Entry Time",
    cashier_shift_title: "Cashier Shift & Cash Reconciliation",
    shift_in_progress: "Shift #42 Open",
    cashier_shift_sub: "Every santim collected at the gate is audited against the append-only ledger",
    shift_visitor_fees: "Visitor Parking Fees Collected",
    shift_access_fees: "Vehicles Passing In/Out Fees",
    shift_cashier_cut: "Cashier 5% Commission Cut",
    shift_expected_cash: "Expected Cash in Drawer",
    lbl_reported_cash: "Actual Cash Counted in Hand (ETB)",
    btn_close_shift: "Close Shift & Submit to Admin Ledger",
    receipt_ticket_title: "Gate Exit Receipt",
    
    // Legacy Bill Splitter
    households_title: "Household Directory",
    households_subtitle: "Manage residents, occupancy, and exemptions",
    flat_no: "Condo / Flat No.",
    resident_name: "Resident Name",
    occupants_count: "No. of Residents",
    ground_exempt: "Ground Floor? (Pump Exempt)",
    student_discount: "Student / Shared? (Half Share)",
    add_household: "Add Household",
    bills_title: "Communal Bills Board",
    bills_subtitle: "Input current month's irregular communal expenses",
    add_bill: "Add Expense Row",
    results_title: "Calculated Split Summary",
    results_subtitle: "Individual resident breakdown & copyable Telegram template",
    tab_template: "Telegram Group Template",
    btn_copy: "Copy Telegram Template",
    footer_sub: "An Integrated Web and Mobile Platform for Ethiopian Apartment Area Management."
  },
  
  am: {
    // Header & Brand
    app_tagline: "ፍትሐዊ ድርሻ፣ ሰላማዊ ኑሮ",
    demo_compound_name: "አቢሲኒያ የጋራ መኖሪያ",
    
    // Main Navigation Portals
    nav_family: "የቤተሰብ ገፅ",
    nav_owner: "የባለቤት ገፅ",
    nav_admin: "የአስተዳዳሪ ገፅ",
    nav_gate: "የበር መቆጣጠሪያ",
    nav_splitter: "ወጪ መከፋፈያ",
    
    // Dynamic Metrics
    metric_family_due: "የእኔ ጠቅላላ ክፍያ",
    metric_family_sub: "እስከ ወሩ 5ኛ ቀን ይከፈላል",
    metric_payment_status: "የክፍያ ሁኔታ",
    metric_status_sub: "ማረጋገጫ በመጠባበቅ ላይ",
    metric_active_cars: "የቤተሰብ መኪኖች",
    metric_cars_sub: "ቦታ ቁጥር A-12",
    metric_free_houses: "ነፃ ቤቶች",
    metric_free_sub: "ለኪራይ ዝግጁ የሆኑ",
    
    metric_owner_units: "የባለቤትነት ቤቶች",
    metric_owner_units_sub: "በብሎክ A እና B ውስጥ",
    metric_rent_collected: "የተሰበሰበ ኪራይ",
    metric_rent_sub: "የዚህ ወር የኪራይ ገቢ",
    metric_net_payout: "የተጣራ ገቢ",
    metric_payout_sub: "ከጥገና እና ወጪዎች ቅነሳ በኋላ",
    metric_common_pool: "የጋራ ገቢ ድርሻ",
    metric_pool_sub: "እኩል የባለቤቶች ድርሻ",
    
    metric_estate_income: "ጠቅላላ የገባ ገቢ",
    metric_estate_sub: "ኪራይ፣ መብራትና ውሃ፣ የበር ገቢ",
    metric_admin_unpaid: "ያልተከፈለ ክፍያ",
    metric_admin_unpaid_sub: "ከነዋሪዎች የሚጠበቅ",
    metric_net_pool_total: "የጋራ ፈንድ ድምር",
    metric_net_pool_sub: "ከሰራተኞች ድርሻ ቅነሳ በኋላ",
    metric_total_units: "ጠቅላላ ቤቶች",
    metric_total_units_sub: "6 የተከራዩ፣ 3 ነፃ ቤቶች",
    
    metric_gate_inside: "ግቢ ውስጥ ያሉ መኪኖች",
    metric_gate_inside_sub: "በአሁኑ ሰዓት የቆሙ",
    metric_shift_cash: "የሺፍት የተሰበሰበ ጥሬ ገንዘብ",
    metric_shift_cash_sub: "የፓርኪንግና የመግቢያ ክፍያ",
    metric_cashier_cut: "የካሼሩ 5% ድርሻ",
    metric_cashier_cut_sub: "በዚህ ሺፍት የተገኘ",
    metric_entries_today: "የገቡ ተሽከርካሪዎች ብዛት",
    metric_entries_today_sub: "የዛሬው ጠቅላላ መኪኖች",
    
    // Family Portal
    logged_as_family: "የተመረጠው ቤተሰብ:",
    family_monthly_bill: "የወሩ ዝርዝር ደረሰኝ",
    family_bill_sub: "የኪራይ፣ የመብራት፣ የውሃ፣ የፓርኪንግ እና የጥበቃ ግልጽ የክፍያ ስሌት",
    line_rent: "የቤት ኪራይ (የወር ስምምነት)",
    line_elec: "የግል ኤሌክትሪክ ቆጣሪ",
    line_water: "የውሃ ድርሻ (የህንፃው ፍጆታ)",
    line_parking: "የነዋሪ ፓርኪንግ (1 መኪና)",
    line_services: "የጥበቃ እና የፅዳት የጋራ አገልግሎት",
    line_total_due: "ጠቅላላ የሚከፈል ድምር",
    due_alert_msg: "ክፍያ እስከ ወሩ 5ኛ ቀን ድረስ መፈፀም አለበት። እባክዎ በቴሌብር ወይም በኢትዮጵያ ንግድ ባንክ አስገብተው የደረሰኝ ቁጥሩን ከታች ያስገቡ።",
    submit_payment_hdr: "የከፈሉበትን መረጃ ያረጋግጡ",
    pay_method: "የከፈሉበት መንገድ",
    pay_reference: "የግብይት / የደረሰኝ ቁጥር (TX/Ref)",
    btn_submit_payment: "የክፍያ መረጃውን ለአስተዳዳሪ ላክ",
    family_vehicles_title: "የተመዘገቡ የቤተሰብ መኪኖች",
    family_vehicles_sub: "የተመዘገቡ መኪኖች ያለ ተጨማሪ የበር ክፍያ በነፃ ይገባሉ",
    gate_pass_active: "የበር ፈቃድ ንቁ ነው",
    col_plate: "የሰሌዳ ቁጥር",
    col_type: "የመኪናው አይነት",
    col_slot: "የተመደበው ቦታ",
    col_monthly_fee: "የወር ክፍያ",
    free_houses_title: "በግቢው ውስጥ ያሉ ነፃ ቤቶች",
    free_houses_sub: "በአስተዳዳሪው የተመዘገቡ ለኪራይ ዝግጁ የሆኑ ክፍት ቤቶች",
    
    // Owner Portal
    logged_as_owner: "የተመረጠው ባለቤት:",
    owner_statement_title: "የባለቤት የወር የሂሳብ መግለጫ",
    owner_statement_sub: "ከህንፃ ጥገና፣ ከአስተዳደር ኮሚሽን እና ከጋራ ገቢ ክፍፍል በኋላ የተጣራ ክፍያ",
    stmt_gross_rent: "ከቤቶቹ የተሰበሰበ ጠቅላላ ኪራይ",
    stmt_admin_fee: "የአስተዳዳሪ የአገልግሎት ክፍያ (3%)",
    stmt_building_repairs: "የህንፃው ጥገና እና ብልሽት ወጪ",
    stmt_utility_diff: "የመብራትና ውሃ ልዩነት",
    stmt_common_share: "እኩል የጋራ ገቢ ድርሻ",
    stmt_net_payout: "ለባለቤቱ የሚከፈል የተጣራ ገንዘብ",
    how_calculated_title: "ይህ ክፍያ እንዴት እንደተሰላ:",
    formula_owner_explain: "የተጣራ ገቢ = ኪራይ (32,000) - የአስተዳደር (960) - የፓምፕ ጥገና (1,200) + የጋራ ድርሻ (3,375) = 33,215 ብር። እያንዳንዱ ሳንቲም በመዝገብ ላይ ተመዝግቧል።",
    btn_copy_statement: "የቴሌግራም መግለጫ ኮፒ አድርግ",
    owner_units_title: "የባለቤቱ ቤቶች ዝርዝር",
    owner_units_sub: "የክፍሎች ሁኔታ፣ ተከራይ ቤተሰብ እና ወርሃዊ ኪራይ",
    col_unit: "ክፍል ቁጥር",
    col_floor: "ወለል",
    col_family: "ተከራይ ቤተሰብ",
    col_rent: "ኪራይ (ብር)",
    col_status: "ሁኔታ",
    abnormality_title: "የህንፃው የጥገና መዝገብ",
    abnormality_sub: "ለዚህ ህንፃ ብቻ የተመዘገቡ የውሃ እና ኤሌክትሪክ ጥገና ወጪዎች (ደንብ BR-10)",
    charged_to_building: "ከብሎክ A ኪራይ ተቀናሽ",
    col_date: "ቀን",
    col_description: "የብልሽቱ አይነት",
    col_contractor: "ባለሙያ / ሰራተኛ",
    col_amount: "ወጪ (ብር)",
    
    // Admin Portal
    admin_tab_settlement: "የሂሳብ ማጠቃለያና ኦዲት",
    admin_tab_tenants: "አዲስ ነዋሪ እና መልቀቂያ",
    admin_tab_utilities: "ቆጣሪና የጥገና ፈንድ",
    admin_tab_cuts: "የሰራተኞች ድርሻና ታሪፍ",
    admin_tab_free: "ነፃ ቤቶች መቆጣጠሪያ",
    settlement_runner_title: "የወር / የወቅት የክፍፍል ስሌት",
    settlement_runner_sub: "የጋራ ገቢን በማስላት፣ የሰራተኞች ድርሻ ቀንሶ የባለቤቶችን ድርሻ ያዘጋጃል",
    btn_run_settlement: "ስሌቱን አስላ",
    step1_common_pool: "ደረጃ 1: የተጣራ የጋራ ገቢ ስሌት",
    col_line_item: "የገቢ / የወጪ ዝርዝር",
    col_notes: "ቀመር / ማስታወሻ",
    step2_owner_payouts: "ደረጃ 2: የባለቤቶች የተጣራ ክፍያ",
    col_owner: "ባለቤት",
    col_units: "ቤቶች",
    col_admin_cut: "አስተዳዳሪ (3%)",
    col_repairs: "የጥገና ወጪ",
    col_pool_share: "የጋራ ድርሻ",
    col_net_payout: "የተጣራ ክፍያ",
    col_action: "ሁኔታ",
    audit_reconciliation_title: "ትክክለኛ የሂሳብ ሚዛን (ኦዲት)",
    badge_balanced: "100% ትክክል",
    audit_sub: "ከነዋሪዎች እና ከበር የተሰበሰበው ጠቅላላ ገቢ: 74,500.00 ብር። የወጣው ወጪና ክፍያ ሳንቲም ለሳንቲም ይገጥማል:",
    
    move_in_title: "አዲስ ተከራይ መመዝገቢያ (Move-In)",
    move_in_sub: "ውል፣ የዋስትና ተቀማጭ፣ መነሻ የቆጣሪ ንባብ እና የፓርኪንግ ቦታ ማዘጋጃ",
    lbl_select_unit: "ነፃ ክፍል ይምረጡ",
    lbl_tenant_name: "የተከራዩ / የቤተሰብ ስም",
    lbl_phone: "ስልክ ቁጥር",
    lbl_deposit: "የዋስትና ገንዘብ (ብር)",
    lbl_elec_start: "የመነሻ መብራት ቆጣሪ",
    lbl_water_start: "የመነሻ ውሃ ቆጣሪ",
    btn_complete_move_in: "ምዝገባውን አጠናቅቅና ክፍያ ጀምር",
    
    move_out_title: "የተከራይ መልቀቂያ (Move-Out)",
    move_out_sub: "የመጨረሻ ቆጣሪ፣ የጎደሉ ቀናት ስሌት እና የዋስትና ገንዘብ መመለሻ",
    lbl_select_departing: "የሚለቀውን ቤተሰብ ይምረጡ",
    lbl_final_elec: "የመጨረሻ መብራት ቆጣሪ",
    lbl_final_water: "የመጨረሻ ውሃ ቆጣሪ",
    lbl_damages: "የጉዳት / ያልተከፈለ ዕዳ (ብር)",
    lbl_refund_deposit: "የሚመለስ ዋስትና (ብር)",
    btn_close_tenancy: "ውሉን ዝጋና ቤቱን ነፃ አድርግ",
    
    log_repair_title: "የህንፃ ጥገና መመዝገቢያ",
    log_repair_sub: "በደንብ BR-10 መሰረት የህንፃው ጥገና ከህንፃው ባለቤት ኪራይ ይቀነሳል",
    lbl_affected_building: "የተበላሸበት ህንፃ",
    lbl_repair_cost: "ጠቅላላ ወጪ (ብር)",
    lbl_repair_desc: "የብልሽቱ መግለጫ",
    lbl_contractor: "የሰራው ባለሙያ ስም",
    btn_record_repair: "የጥገና መዝገቡን መዝግብ",
    
    staff_cut_title: "የሰራተኞች ድርሻ መቶኛ (%)",
    staff_cut_sub: "የጋራ ገቢ ለባለቤቶች ከመከፋፈሉ በፊት ለሰራተኞች የሚከፈል ኮሚሽን (ደንብ BR-07)",
    lbl_cut_car: "የመኪና ጠባቂ (ፓርኪንግ) ድርሻ (%)",
    lbl_cut_guard: "የበር ጠባቂ (ዘበኛ) የበር ክፍያ ድርሻ (%)",
    lbl_cut_cashier: "የካሼር ድርሻ (%)",
    lbl_admin_fee: "የአስተዳዳሪ ክፍያ (%)",
    btn_save_rules: "ደንቦቹን መዝግብ",
    
    gate_tariffs_title: "የበር ታሪፎች (ብር)",
    gate_tariffs_sub: "ለእንግዶች፣ ለታክሲ እና ለጭነት መኪኖች የተወሰነ ታሪፍ",
    lbl_tariff_resident: "የነዋሪ ወርሃዊ ፓርኪንግ",
    lbl_tariff_v1: "የእንግዳ መኪና (የመጀመሪያ ሰዓት)",
    lbl_tariff_vadd: "የእንግዳ ተጨማሪ ሰዓት",
    lbl_tariff_overnight: "የእንግዳ አዳር ፓርኪንግ",
    lbl_tariff_minibus: "የታክሲ / ሚኒባስ መግቢያ",
    lbl_tariff_truck: "የእቃ / ጭነት መኪና መግቢያ",
    
    publish_free_title: "ክፍት ቤት መለጠፊያ",
    publish_free_sub: "ያልተከራዩ ቤቶችን ለነዋሪዎች እና ለባለቤቶች ይፋ አድርግ",
    lbl_block: "የብሎክ ስም",
    lbl_room: "ክፍል ቁጥር",
    lbl_floor: "ወለል ቁጥር",
    lbl_monthly_rent: "ወርሃዊ ኪራይ (ብር)",
    btn_publish_unit: "ክፍት ቤቱን ለጥፍ",
    
    // Gate Console
    gate_checkin_title: "የመኪና መግቢያ መመዝገቢያ",
    badge_gate_open: "በር 1 ክፍት ነው",
    gate_checkin_sub: "መኪና ሲመጣ ይመዝግቡ። ነዋሪዎች በነፃ ያልፋሉ፤ እንግዶች ቲኬት ይሰጣቸዋል",
    lbl_select_vtype: "የተሽከርካሪውን አይነት ይምረጡ",
    vtype_resident: "የነዋሪ መኪና",
    vtype_visitor: "የእንግዳ መኪና",
    vtype_minibus: "ታክሲ / ሚኒባስ",
    vtype_truck: "የጭነት / እቃ መኪና",
    fee_monthly_free: "በወር የተከፈለ (ነፃ በር)",
    lbl_plate_number: "የሰሌዳ ቁጥር",
    btn_record_entry: "መግባቱን መዝግብና ቲኬት አውጣ",
    active_inside_title: "በአሁኑ ሰዓት ግቢ ውስጥ ያሉ መኪኖች",
    active_inside_sub: "መኪናው ሲወጣ ሰዓቱን ለማስላትና ደረሰኝ ለመስጠት ውጣ የሚለውን ይጫኑ",
    col_entry_time: "የገባበት ሰዓት",
    cashier_shift_title: "የካሼር ሺፍት እና የገንዘብ ቆጠራ",
    shift_in_progress: "ሺፍት #42 ክፍት ነው",
    cashier_shift_sub: "በበሩ የተሰበሰበው እያንዳንዱ ሳንቲም ከዋናው መዝገብ ጋር ይነጻጸራል",
    shift_visitor_fees: "የእንግዳ ፓርኪንግ የተሰበሰበ",
    shift_access_fees: "የታክሲ እና መኪኖች መግቢያ",
    shift_cashier_cut: "የካሼር 5% ኮሚሽን ድርሻ",
    shift_expected_cash: "በካዝናው ውስጥ የሚጠበቅ ጥሬ ገንዘብ",
    lbl_reported_cash: "በእጅ የተቆጠረ ጥሬ ገንዘብ (ብር)",
    btn_close_shift: "ሺፍቱን ዝጋና ለአስተዳዳሪ መዝገብ አስረክብ",
    receipt_ticket_title: "የመውጫ ደረሰኝ",
    
    // Legacy Bill Splitter
    households_title: "የነዋሪዎች መዝገብ",
    households_subtitle: "ነዋሪዎችን፣ የእነሱን ብዛት እና ልዩ ሁኔታዎችን ያስተዳድሩ",
    flat_no: "የኮንዶ / ክፍል ቁጥር",
    resident_name: "የነዋሪው ስም",
    occupants_count: "የነዋሪዎች ብዛት",
    ground_exempt: "መሬት ወለል ነው? (ከፓምፕ ነፃ)",
    student_discount: "ተማሪ / ተጋሪ? (ግማሽ ክፍያ)",
    add_household: "ነዋሪ ጨምር",
    bills_title: "የጋራ ወጪዎች ሰሌዳ",
    bills_subtitle: "የዚህን ወር ተለዋዋጭ የጋራ ወጪዎች ያስገቡ",
    add_bill: "የወጪ ረድፍ ጨምር",
    results_title: "የክፍያ ድምር ስሌት",
    results_subtitle: "የእያንዳንዱ ነዋሪ ድርሻ እና የቴሌግራም መልእክት",
    tab_template: "የቴሌግራም መልእክት ፎርማት",
    btn_copy: "የቴሌግራም ጽሁፉን ኮፒ አድርግ",
    footer_sub: "የኢትዮጵያ የጋራ መኖሪያ ቤቶች የተቀናጀ የድህረ-ገፅ እና የሞባይል አስተዳደር ስርዓት።"
  }
};

// 2. DEFAULT STATE MODEL ACCORDING TO PROPOSAL (WORKED EXAMPLE)
const DEFAULT_STATE = {
  currentLanguage: "en",
  activePortal: "family",
  activeFamilyId: "fam-1",
  activeOwnerId: "owner-a",
  
  // Estate Configuration
  estateName: "Abyssinia Compound",
  adminManagementFeePercent: 3,
  
  // Staff Cuts
  staffCuts: {
    carKeeperPercent: 10,   // 10% of all parking income
    areaKeeperPercent: 10,  // 10% of vehicle access fees
    cashierPercent: 5       // 5% of all vehicle fees collected
  },
  
  // Salaries (Common Estate Expense)
  salaries: {
    guardSalary: 5000,
    cleanerSalary: 2500
  },
  
  // Common Utilities
  commonUtilityExpense: 1500, // common hallway & water pump power
  
  // Tariffs
  tariffs: {
    residentParkingMonthly: 600,
    visitorCarFirstHour: 20,
    visitorCarExtraHour: 10,
    visitorOvernight: 150,
    minibusEntry: 15,
    truckEntry: 50
  },
  
  // Owners
  owners: [
    { id: "owner-a", name: "Owner A (Ato Bekele)", block: "Block A", unitsCount: 4 },
    { id: "owner-b", name: "Owner B (W/ro Genet)", block: "Block B", unitsCount: 2 }
  ],
  
  // Units Portfolio
  units: [
    { id: "u-101", block: "Block A", room: "A-101", floor: 1, rent: 8000, ownerId: "owner-a", tenantName: "Family Girma", status: "Occupied" },
    { id: "u-102", block: "Block A", room: "A-102", floor: 1, rent: 8000, ownerId: "owner-a", tenantName: "Family Almaz", status: "Occupied" },
    { id: "u-207", block: "Block A", room: "A-207", floor: 2, rent: 8000, ownerId: "owner-a", tenantName: "Family Abebe", status: "Occupied" },
    { id: "u-301", block: "Block A", room: "A-301", floor: 3, rent: 8000, ownerId: "owner-a", tenantName: "Family Tadesse", status: "Occupied" },
    { id: "u-b101", block: "Block B", room: "B-101", floor: 1, rent: 10000, ownerId: "owner-b", tenantName: "Family Dawit", status: "Occupied" },
    { id: "u-b202", block: "Block B", room: "B-202", floor: 2, rent: 10000, ownerId: "owner-b", tenantName: "Family Selam", status: "Occupied" }
  ],
  
  // Family Accounts
  families: {
    "fam-1": {
      name: "Family Abebe",
      unit: "Block A, Room 207",
      phone: "0911223344",
      rent: 8000,
      elecUnits: 450,
      waterShare: 180,
      parkingFee: 600,
      serviceShare: 500,
      paymentStatus: "Pending",
      paymentRef: "",
      vehicles: [
        { plate: "2-B-44122 AA", type: "Toyota Vitz", slot: "Slot A-12 (Open)", fee: 600 }
      ]
    },
    "fam-2": {
      name: "Family Almaz",
      unit: "Block A, Room 102",
      phone: "0922334455",
      rent: 8000,
      elecUnits: 380,
      waterShare: 180,
      parkingFee: 0,
      serviceShare: 500,
      paymentStatus: "Confirmed",
      paymentRef: "CBE-9837194",
      vehicles: []
    },
    "fam-3": {
      name: "Family Dawit",
      unit: "Block B, Room 301",
      phone: "0933445566",
      rent: 10000,
      elecUnits: 510,
      waterShare: 200,
      parkingFee: 600,
      serviceShare: 500,
      paymentStatus: "Pending",
      paymentRef: "",
      vehicles: [
        { plate: "3-A-99120 AA", type: "Hyundai Creta", slot: "Slot B-04 (Covered)", fee: 600 }
      ]
    }
  },
  
  // Free Houses Catalog
  freeHouses: [
    { id: "f-1", block: "Block A", room: "A-305", floor: 3, rent: 8500, status: "Free" },
    { id: "f-2", block: "Block B", room: "B-102", floor: 1, rent: 10000, status: "Free" },
    { id: "f-3", block: "Block C", room: "C-410", floor: 4, rent: 7500, status: "Free next month" }
  ],
  
  // Repairs Log
  repairs: [
    { id: "r-1", date: "2026-09-12", block: "Block A", desc: "Block A Water Pump Bearing Replacement", tech: "Mulugeta Plumber", cost: 1200 }
  ],
  
  // Gate Inside Active Vehicles
  gateInside: [
    { plate: "2-B-44122 AA", type: "resident", typeLabel: "Resident Car", entryTime: "08:15 AM", isResident: true },
    { plate: "3-C-87114 AA", type: "visitor", typeLabel: "Visitor Car", entryTime: "10:30 AM", isResident: false }
  ],
  
  // Cashier Gate Shift Data
  gateShift: {
    shiftId: "#42",
    visitorParkingCollected: 9000,
    vehicleAccessFeesCollected: 6000,
    reportedCash: 15000
  },
  
  // Legacy Splitter Data
  splitterHouseholds: [
    { id: 1, flat: "A-101", name: "Abebe K.", occupants: 3, isGround: true, isStudent: false },
    { id: 2, flat: "A-202", name: "Almaz T.", occupants: 2, isGround: false, isStudent: false },
    { id: 3, flat: "A-303", name: "Dawit M.", occupants: 1, isGround: false, isStudent: true },
    { id: 4, flat: "A-404", name: "Genet H.", occupants: 4, isGround: false, isStudent: false }
  ],
  splitterBills: [
    { id: 1, name: "Security Guard", amount: 5000, method: "equal" },
    { id: 2, name: "Water Pump Fuel & Elec", amount: 2400, method: "equal" },
    { id: 3, name: "Garbage Collection", amount: 800, method: "headcount" }
  ]
};

// Application State Object
let state = {};

// Load State from LocalStorage or initialize default
function initState() {
  const saved = localStorage.getItem("ekul_platform_state");
  if (saved) {
    try {
      state = JSON.parse(saved);
    } catch (e) {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  } else {
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
  saveState();
}

function saveState() {
  localStorage.setItem("ekul_platform_state", JSON.stringify(state));
}

// ==========================================================================
// 3. TRANSLATION & LOCALIZATION CONTROLLER
// ==========================================================================
function setLanguage(lang) {
  if (lang !== "en" && lang !== "am") lang = "en";
  state.currentLanguage = lang;
  saveState();
  
  // Update toggle button states
  document.getElementById("lang-en-btn").classList.toggle("active", lang === "en");
  document.getElementById("lang-am-btn").classList.toggle("active", lang === "am");
  
  // Translate all DOM elements marked with data-i18n
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // Re-render dynamic components
  renderAllViews();
}

// ==========================================================================
// 4. PORTAL NAVIGATION CONTROLLER
// ==========================================================================
function switchPortal(portalId) {
  state.activePortal = portalId;
  saveState();
  
  // Update active portal nav buttons
  document.querySelectorAll(".portal-nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-portal") === portalId);
  });
  
  // Update views
  document.querySelectorAll(".portal-view").forEach(view => {
    view.classList.remove("active");
  });
  
  const targetView = document.getElementById(`portal-${portalId}-view`);
  if (targetView) {
    targetView.classList.add("active");
  }
  
  updateMetricsBar();
}

function updateMetricsBar() {
  const lang = state.currentLanguage;
  const dict = I18N[lang];
  const s1Val = document.getElementById("stat-1-val");
  const s1Lbl = document.getElementById("stat-1-lbl");
  const s1Sub = document.getElementById("stat-1-sub");
  
  const s2Val = document.getElementById("stat-2-val");
  const s2Lbl = document.getElementById("stat-2-lbl");
  const s2Sub = document.getElementById("stat-2-sub");
  
  const s3Val = document.getElementById("stat-3-val");
  const s3Lbl = document.getElementById("stat-3-lbl");
  const s3Sub = document.getElementById("stat-3-sub");
  
  const s4Val = document.getElementById("stat-4-val");
  const s4Lbl = document.getElementById("stat-4-lbl");
  const s4Sub = document.getElementById("stat-4-sub");

  if (state.activePortal === "family") {
    const fam = state.families[state.activeFamilyId] || state.families["fam-1"];
    const total = fam.rent + fam.elecUnits + fam.waterShare + fam.parkingFee + fam.serviceShare;
    s1Val.textContent = total.toLocaleString() + ".00 ETB";
    s1Lbl.textContent = dict.metric_family_due;
    s1Sub.textContent = dict.metric_family_sub;
    
    s2Val.textContent = fam.paymentStatus;
    s2Val.style.color = fam.paymentStatus === "Confirmed" ? "var(--accent-success)" : "var(--accent-warning)";
    s2Lbl.textContent = dict.metric_payment_status;
    s2Sub.textContent = fam.paymentStatus === "Confirmed" ? (lang === "am" ? "ተረጋግጧል" : "Verified by Admin") : dict.metric_status_sub;
    
    s3Val.textContent = `${fam.vehicles.length} ${lang === "am" ? "መኪና" : "Registered"}`;
    s3Lbl.textContent = dict.metric_active_cars;
    s3Sub.textContent = fam.vehicles[0] ? fam.vehicles[0].slot : (lang === "am" ? "የለም" : "No car registered");
    
    s4Val.textContent = `${state.freeHouses.length} ${lang === "am" ? "ክፍት" : "Vacant"}`;
    s4Lbl.textContent = dict.metric_free_houses;
    s4Sub.textContent = dict.metric_free_sub;
  }
  else if (state.activePortal === "owner") {
    const owner = state.owners.find(o => o.id === state.activeOwnerId) || state.owners[0];
    const isOwnerA = owner.id === "owner-a";
    
    s1Val.textContent = isOwnerA ? "4 Units" : "2 Units";
    s1Lbl.textContent = dict.metric_owner_units;
    s1Sub.textContent = isOwnerA ? "Block A (4 Rooms)" : "Block B (2 Rooms)";
    
    s2Val.textContent = isOwnerA ? "32,000.00 ETB" : "20,000.00 ETB";
    s2Val.style.color = "var(--accent-success)";
    s2Lbl.textContent = dict.metric_rent_collected;
    s2Sub.textContent = dict.metric_rent_sub;
    
    s3Val.textContent = isOwnerA ? "33,215.00 ETB" : "22,775.00 ETB";
    s3Val.style.color = "var(--accent-gold-light)";
    s3Lbl.textContent = dict.metric_net_payout;
    s3Sub.textContent = dict.metric_payout_sub;
    
    s4Val.textContent = "3,375.00 ETB";
    s4Lbl.textContent = dict.metric_common_pool;
    s4Sub.textContent = dict.metric_pool_sub;
  }
  else if (state.activePortal === "admin") {
    s1Val.textContent = "74,500.00 ETB";
    s1Lbl.textContent = dict.metric_estate_income;
    s1Sub.textContent = dict.metric_estate_sub;
    
    s2Val.textContent = "9,730.00 ETB";
    s2Val.style.color = "var(--accent-warning)";
    s2Lbl.textContent = dict.metric_admin_unpaid;
    s2Sub.textContent = dict.metric_admin_unpaid_sub;
    
    s3Val.textContent = "6,750.00 ETB";
    s3Val.style.color = "var(--accent-gold-light)";
    s3Lbl.textContent = dict.metric_net_pool_total;
    s3Sub.textContent = dict.metric_net_pool_sub;
    
    s4Val.textContent = "9 Units";
    s4Lbl.textContent = dict.metric_total_units;
    s4Sub.textContent = dict.metric_total_units_sub;
  }
  else if (state.activePortal === "gate") {
    s1Val.textContent = `${state.gateInside.length} Cars`;
    s1Lbl.textContent = dict.metric_gate_inside;
    s1Sub.textContent = dict.metric_gate_inside_sub;
    
    const shiftTotal = state.gateShift.visitorParkingCollected + state.gateShift.vehicleAccessFeesCollected;
    s2Val.textContent = shiftTotal.toLocaleString() + ".00 ETB";
    s2Val.style.color = "var(--accent-success)";
    s2Lbl.textContent = dict.metric_shift_cash;
    s2Sub.textContent = dict.metric_shift_cash_sub;
    
    const cashierCut = Math.round(shiftTotal * (state.staffCuts.cashierPercent / 100));
    s3Val.textContent = cashierCut.toLocaleString() + ".00 ETB";
    s3Val.style.color = "var(--accent-gold-light)";
    s3Lbl.textContent = dict.metric_cashier_cut;
    s3Sub.textContent = dict.metric_cashier_cut_sub;
    
    s4Val.textContent = "48 Entries";
    s4Lbl.textContent = dict.metric_entries_today;
    s4Sub.textContent = dict.metric_entries_today_sub;
  }
  else if (state.activePortal === "splitter") {
    let totalSplit = 0;
    state.splitterBills.forEach(b => totalSplit += Number(b.amount || 0));
    s1Val.textContent = totalSplit.toLocaleString() + ".00 ETB";
    s1Lbl.textContent = lang === "am" ? "ጠቅላላ የጋራ ወጪ" : "Total Expenses";
    s1Sub.textContent = lang === "am" ? "የዚህ ወር ወጪዎች" : "This month bills";
    
    s2Val.textContent = state.splitterHouseholds.length.toString();
    s2Val.style.color = "var(--text-primary)";
    s2Lbl.textContent = lang === "am" ? "የቤቶች ብዛት" : "Active Units";
    s2Sub.textContent = lang === "am" ? "የተመዘገቡ አባላት" : "Registered homes";
    
    let totalPeople = 0;
    state.splitterHouseholds.forEach(h => totalPeople += Number(h.occupants || 0));
    s3Val.textContent = totalPeople.toString();
    s3Lbl.textContent = lang === "am" ? "ጠቅላላ ነዋሪዎች" : "Total Residents";
    s3Sub.textContent = lang === "am" ? "በሰው ቁጥር" : "Headcount";
    
    s4Val.textContent = "3 Bills";
    s4Lbl.textContent = lang === "am" ? "የወጪ አይነቶች" : "Expense Rows";
    s4Sub.textContent = lang === "am" ? "የጋራ መገልገያዎች" : "Communal costs";
  }
}

// ==========================================================================
// 5. VIEW RENDERERS FOR EACH PORTAL
// ==========================================================================

// 5.1 FAMILY PORTAL RENDERER
function renderFamilyPortal() {
  const fam = state.families[state.activeFamilyId] || state.families["fam-1"];
  const lang = state.currentLanguage;
  
  // Display name in header selector
  const famNameElem = document.getElementById("family-selected-name");
  if (famNameElem) {
    famNameElem.textContent = `${fam.name} (${fam.unit})`;
  }
  
  // Bill Breakdown Lines
  document.getElementById("fam-line-rent").textContent = fam.rent.toLocaleString() + ".00 ETB";
  document.getElementById("fam-line-elec").textContent = fam.elecUnits.toLocaleString() + ".00 ETB";
  document.getElementById("fam-line-water").textContent = fam.waterShare.toLocaleString() + ".00 ETB";
  document.getElementById("fam-line-parking").textContent = fam.parkingFee.toLocaleString() + ".00 ETB";
  document.getElementById("fam-line-services").textContent = fam.serviceShare.toLocaleString() + ".00 ETB";
  
  const total = fam.rent + fam.elecUnits + fam.waterShare + fam.parkingFee + fam.serviceShare;
  document.getElementById("fam-line-total").textContent = total.toLocaleString() + ".00 ETB";
  
  // Vehicles table
  const vTbody = document.getElementById("family-vehicles-tbody");
  if (vTbody) {
    vTbody.innerHTML = "";
    if (fam.vehicles.length === 0) {
      vTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">${lang === "am" ? "ምንም የተመዘገበ መኪና የለም" : "No vehicles registered"}</td></tr>`;
    } else {
      fam.vehicles.forEach(v => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${v.plate}</strong></td>
          <td>${v.type}</td>
          <td>${v.slot}</td>
          <td class="text-right">${v.fee.toLocaleString()}.00 ETB</td>
        `;
        vTbody.appendChild(tr);
      });
    }
  }
  
  // Free houses board
  renderFreeHousesList();
}

function renderFreeHousesList() {
  const listContainer = document.getElementById("free-houses-list");
  if (!listContainer) return;
  const lang = state.currentLanguage;
  
  listContainer.innerHTML = "";
  state.freeHouses.forEach(h => {
    const card = document.createElement("div");
    card.className = "free-house-card";
    card.innerHTML = `
      <div class="house-header">
        <span class="house-unit-title">${h.room}</span>
        <span class="badge badge-info">${h.status}</span>
      </div>
      <div style="font-size: 13px; color: var(--text-secondary);">
        ${h.block} • ${lang === "am" ? "ወለል" : "Floor"} ${h.floor}
      </div>
      <div class="house-rent-val">
        ${h.rent.toLocaleString()} <span style="font-size: 12px; font-weight: normal; color: var(--text-muted);">ETB / ${lang === "am" ? "በወር" : "month"}</span>
      </div>
    `;
    listContainer.appendChild(card);
  });
  
  const badge = document.getElementById("free-houses-count-badge");
  if (badge) {
    badge.textContent = `${state.freeHouses.length} ${lang === "am" ? "ክፍት ቤቶች" : "Available"}`;
  }
}

// 5.2 OWNER PORTAL RENDERER
function renderOwnerPortal() {
  const owner = state.owners.find(o => o.id === state.activeOwnerId) || state.owners[0];
  const isOwnerA = owner.id === "owner-a";
  const lang = state.currentLanguage;
  
  document.getElementById("owner-selected-name").textContent = `${owner.name} — ${owner.unitsCount} Units in ${owner.block}`;
  
  // Filter owned units
  const ownedUnits = state.units.filter(u => u.ownerId === owner.id);
  const uTbody = document.getElementById("owner-units-tbody");
  if (uTbody) {
    uTbody.innerHTML = "";
    ownedUnits.forEach(u => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${u.room}</strong></td>
        <td>${lang === "am" ? "ወለል" : "Floor"} ${u.floor}</td>
        <td>${u.tenantName}</td>
        <td class="text-right">${u.rent.toLocaleString()}.00</td>
        <td class="text-center"><span class="badge badge-success">${lang === "am" ? "የተከራየ" : "Occupied"}</span></td>
      `;
      uTbody.appendChild(tr);
    });
  }
  
  // Owner Statement
  const rentCollected = isOwnerA ? 32000 : 20000;
  const adminFee = rentCollected * 0.03;
  const repairCost = isOwnerA ? 1200 : 0;
  const commonShare = 3375;
  const netPayout = rentCollected - adminFee - repairCost + commonShare;
  
  document.getElementById("owner-stmt-rent").textContent = `+${rentCollected.toLocaleString()}.00 ETB`;
  document.getElementById("owner-stmt-admin").textContent = `-${adminFee.toLocaleString()}.00 ETB`;
  document.getElementById("owner-stmt-repair").textContent = `-${repairCost.toLocaleString()}.00 ETB`;
  document.getElementById("owner-stmt-common").textContent = `+${commonShare.toLocaleString()}.00 ETB`;
  document.getElementById("owner-stmt-payout").textContent = `${netPayout.toLocaleString()}.00 ETB`;
  
  // Repairs table
  const rTbody = document.getElementById("owner-repairs-tbody");
  if (rTbody) {
    rTbody.innerHTML = "";
    const bRepairs = state.repairs.filter(r => isOwnerA ? r.block === "Block A" : r.block === "Block B");
    if (bRepairs.length === 0) {
      rTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">${lang === "am" ? "ለዚህ ህንፃ የተመዘገበ ብልሽት የለም" : "No repairs recorded for this building"}</td></tr>`;
    } else {
      bRepairs.forEach(r => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${r.date}</td>
          <td>${r.desc}</td>
          <td>${r.tech}</td>
          <td class="text-right" style="color: var(--accent-danger);">${r.cost.toLocaleString()}.00 ETB</td>
        `;
        rTbody.appendChild(tr);
      });
    }
  }
}

// 5.3 GATE CONSOLE RENDERER
function renderGateConsole() {
  const gTbody = document.getElementById("gate-inside-tbody");
  const lang = state.currentLanguage;
  if (!gTbody) return;
  
  gTbody.innerHTML = "";
  if (state.gateInside.length === 0) {
    gTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">${lang === "am" ? "በአሁኑ ሰዓት ግቢ ውስጥ ምንም መኪና የለም" : "No vehicles currently parked inside"}</td></tr>`;
  } else {
    state.gateInside.forEach((v, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${v.plate}</strong> ${v.isResident ? '<span class="badge badge-success" style="font-size: 10px;">Resident</span>' : ''}</td>
        <td>${v.typeLabel}</td>
        <td>${v.entryTime}</td>
        <td class="text-right">
          <button class="btn btn-sm btn-secondary btn-gate-exit" data-idx="${idx}">
            ${lang === "am" ? "መውጫ ደረሰኝ" : "Exit & Collect"}
          </button>
        </td>
      `;
      gTbody.appendChild(tr);
    });
  }
  
  const countElem = document.getElementById("gate-inside-count");
  if (countElem) {
    countElem.textContent = `${state.gateInside.length} ${lang === "am" ? "መኪኖች" : "Active"}`;
  }
}

// 5.4 BILL SPLITTER RENDERER (LEGACY ENHANCED)
function renderSplitter() {
  const hContainer = document.getElementById("households-list-container");
  const bContainer = document.getElementById("bills-input-container");
  const rContainer = document.getElementById("results-list-container");
  const tArea = document.getElementById("telegram-template-textarea");
  const lang = state.currentLanguage;

  if (!hContainer || !bContainer || !rContainer) return;

  // Render Households List
  hContainer.innerHTML = "";
  state.splitterHouseholds.forEach(h => {
    const item = document.createElement("div");
    item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(18,11,8,0.5); border-radius: var(--radius-sm); margin-bottom: 6px; border: 1px solid var(--border-subtle);";
    item.innerHTML = `
      <div>
        <strong>${h.flat}</strong> - ${h.name} (${h.occupants} ${lang === "am" ? "ነዋሪዎች" : "residents"})
        <div style="font-size: 11px; color: var(--accent-gold);">
          ${h.isGround ? (lang === "am" ? "ከፓምፕ ነፃ" : "Pump Exempt") : ""} ${h.isStudent ? (lang === "am" ? "ግማሽ ክፍያ" : "Half Share") : ""}
        </div>
      </div>
      <button class="btn btn-sm btn-danger btn-del-hh" data-id="${h.id}">✕</button>
    `;
    hContainer.appendChild(item);
  });

  // Render Bills Inputs
  bContainer.innerHTML = "";
  state.splitterBills.forEach(b => {
    const bRow = document.createElement("div");
    bRow.style.cssText = "display: flex; gap: 8px; align-items: center; margin-bottom: 8px;";
    bRow.innerHTML = `
      <input type="text" value="${b.name}" class="bill-edit-name" data-id="${b.id}" style="flex: 2;">
      <input type="number" value="${b.amount}" class="bill-edit-amount" data-id="${b.id}" style="flex: 1.5;">
      <select class="bill-edit-method" data-id="${b.id}" style="flex: 1.5;">
        <option value="equal" ${b.method === "equal" ? "selected" : ""}>${lang === "am" ? "በእኩል" : "Equal"}</option>
        <option value="headcount" ${b.method === "headcount" ? "selected" : ""}>${lang === "am" ? "በሰው ብዛት" : "Headcount"}</option>
      </select>
      <button class="btn btn-sm btn-danger btn-del-bill" data-id="${b.id}">✕</button>
    `;
    bContainer.appendChild(bRow);
  });

  // Calculate Shares
  const shares = {};
  state.splitterHouseholds.forEach(h => {
    shares[h.id] = { flat: h.flat, name: h.name, total: 0 };
  });

  state.splitterBills.forEach(b => {
    const amount = Number(b.amount || 0);
    if (amount <= 0) return;

    if (b.method === "headcount") {
      let totalOccupants = 0;
      state.splitterHouseholds.forEach(h => totalOccupants += Number(h.occupants || 1));
      if (totalOccupants > 0) {
        state.splitterHouseholds.forEach(h => {
          const share = (amount / totalOccupants) * Number(h.occupants || 1);
          shares[h.id].total += share;
        });
      }
    } else {
      // Equal split with weights
      let totalUnits = state.splitterHouseholds.length;
      if (totalUnits > 0) {
        state.splitterHouseholds.forEach(h => {
          let weight = 1.0;
          if (h.isStudent) weight = 0.5;
          if (h.isGround && b.name.toLowerCase().includes("pump")) weight = 0;
          const share = (amount / totalUnits) * weight;
          shares[h.id].total += share;
        });
      }
    }
  });

  // Render Shares Result Cards
  rContainer.innerHTML = "";
  let tplText = `🔔 ${lang === "am" ? "የጋራ ወጪ ክፍፍል" : "MONTHLY BUILDING EXPENSES"}\n📅 ${new Date().toLocaleDateString()}\n\n`;
  
  Object.values(shares).forEach(s => {
    const rounded = Math.round(s.total);
    const div = document.createElement("div");
    div.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: var(--bg-surface); border-radius: var(--radius-sm); margin-bottom: 6px; border: 1px solid var(--border-subtle);";
    div.innerHTML = `
      <div><strong>${s.flat}</strong> - ${s.name}</div>
      <div style="font-weight: 700; color: var(--accent-gold-light); font-size: 15px;">${rounded.toLocaleString()}.00 ETB</div>
    `;
    rContainer.appendChild(div);

    tplText += `• ${s.flat} (${s.name}): ${rounded.toLocaleString()} ETB\n`;
  });

  tplText += `\n💸 ${lang === "am" ? "እባክዎ በቴሌብር ወይም በንግድ ባንክ ያስገቡ" : "Please transfer to Telebirr / CBE"}\n🙏 ${lang === "am" ? "በሰዓቱ ስለሚከፍሉ እናመሰግናለን!" : "Thank you for paying on time!"}`;
  if (tArea) {
    tArea.value = tplText;
  }
}

function renderAllViews() {
  updateMetricsBar();
  renderFamilyPortal();
  renderOwnerPortal();
  renderGateConsole();
  renderSplitter();
}

// ==========================================================================
// 6. EVENT LISTENERS & HUMANIZED INTERACTION WORKFLOWS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initState();
  setLanguage(state.currentLanguage);
  switchPortal(state.activePortal);

  // 1. Language Toggle Buttons
  document.getElementById("lang-en-btn").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-am-btn").addEventListener("click", () => setLanguage("am"));

  // 2. Portal Switcher Buttons
  document.querySelectorAll(".portal-nav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const portal = btn.getAttribute("data-portal");
      switchPortal(portal);
    });
  });

  // 3. Family Portal Account Selector
  const famSelect = document.getElementById("family-account-select");
  if (famSelect) {
    famSelect.value = state.activeFamilyId;
    famSelect.addEventListener("change", (e) => {
      state.activeFamilyId = e.target.value;
      saveState();
      renderFamilyPortal();
      updateMetricsBar();
    });
  }

  // 4. Family Submit Payment
  const btnSubmitPay = document.getElementById("btn-submit-payment");
  if (btnSubmitPay) {
    btnSubmitPay.addEventListener("click", () => {
      const refInput = document.getElementById("pay-ref");
      const method = document.getElementById("pay-method").value;
      const refVal = refInput.value.trim();
      const lang = state.currentLanguage;
      
      if (!refVal) {
        alert(lang === "am" ? "እባክዎ የደረሰኝ ወይም የግብይት ቁጥር ያስገቡ!" : "Please enter your transaction reference number!");
        return;
      }

      state.families[state.activeFamilyId].paymentStatus = "Confirmed";
      state.families[state.activeFamilyId].paymentRef = `${method}: ${refVal}`;
      saveState();
      
      alert(lang === "am" ? `ክፍያዎ (${refVal}) ተመዝግቧል! እናመሰግናለን።` : `Your payment (${refVal}) has been recorded! Thank you.`);
      refInput.value = "";
      renderFamilyPortal();
      updateMetricsBar();
    });
  }

  // 5. Owner Portal Account Selector
  const ownerSelect = document.getElementById("owner-account-select");
  if (ownerSelect) {
    ownerSelect.value = state.activeOwnerId;
    ownerSelect.addEventListener("change", (e) => {
      state.activeOwnerId = e.target.value;
      saveState();
      renderOwnerPortal();
      updateMetricsBar();
    });
  }

  // 6. Owner Statement Copy Button
  const btnCopyStmt = document.getElementById("btn-copy-owner-statement");
  if (btnCopyStmt) {
    btnCopyStmt.addEventListener("click", () => {
      const owner = state.owners.find(o => o.id === state.activeOwnerId) || state.owners[0];
      const isOwnerA = owner.id === "owner-a";
      const rent = isOwnerA ? 32000 : 20000;
      const adminFee = rent * 0.03;
      const repair = isOwnerA ? 1200 : 0;
      const common = 3375;
      const payout = rent - adminFee - repair + common;
      
      const txt = `🏢 Ekul / እኩል - Owner Settlement Statement\n` +
                  `👤 Owner: ${owner.name}\n` +
                  `🏠 Units: ${owner.unitsCount} in ${owner.block}\n` +
                  `💰 Gross Rent: +${rent.toLocaleString()} ETB\n` +
                  `📉 Admin Fee (3%): -${adminFee.toLocaleString()} ETB\n` +
                  `🛠️ Repairs & Faults: -${repair.toLocaleString()} ETB\n` +
                  `🤝 Net Common Pool Share: +${common.toLocaleString()} ETB\n` +
                  `=============================\n` +
                  `💵 NET PAYOUT: ${payout.toLocaleString()} ETB\n` +
                  `Status: Approved & Deposited`;

      navigator.clipboard.writeText(txt).then(() => {
        alert(state.currentLanguage === "am" ? "የባለቤቱ መግለጫ ኮፒ ተደርጓል!" : "Owner statement copied to clipboard!");
      });
    });
  }

  // 7. Admin Sub-tabs switcher
  document.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".sub-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".sub-tab-pane").forEach(p => p.classList.remove("active"));
      
      btn.classList.add("active");
      const targetPane = document.getElementById(btn.getAttribute("data-admin-pane"));
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // 8. Admin Move-In Form
  const moveInForm = document.getElementById("move-in-form");
  if (moveInForm) {
    moveInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const unit = document.getElementById("move-in-unit").value;
      const name = document.getElementById("move-in-name").value.trim();
      const phone = document.getElementById("move-in-phone").value.trim();
      const deposit = document.getElementById("move-in-deposit").value;
      const lang = state.currentLanguage;

      if (!name) return;

      // Add as family
      const newFamId = "fam-" + (Object.keys(state.families).length + 1);
      state.families[newFamId] = {
        name: name,
        unit: unit,
        phone: phone,
        rent: 8500,
        elecUnits: 0,
        waterShare: 180,
        parkingFee: 600,
        serviceShare: 500,
        paymentStatus: "Pending",
        paymentRef: "",
        vehicles: []
      };

      // Remove from free houses
      state.freeHouses = state.freeHouses.filter(h => !unit.includes(h.room));
      saveState();

      alert(lang === "am" ? `አዲሱ ተከራይ ${name} በክፍል ${unit} በተሳካ ሁኔታ ተመዝግቧል!` : `New tenant ${name} successfully moved into ${unit}!`);
      moveInForm.reset();
      renderAllViews();
    });
  }

  // 9. Admin Move-Out Form
  const moveOutForm = document.getElementById("move-out-form");
  if (moveOutForm) {
    moveOutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const famId = document.getElementById("move-out-family").value;
      const fam = state.families[famId];
      const lang = state.currentLanguage;
      if (!fam) return;

      // Re-list in free houses
      state.freeHouses.push({
        id: "f-" + Date.now(),
        block: fam.unit.split(",")[0] || "Block A",
        room: fam.unit.split(",")[1] || "Room 101",
        floor: 2,
        rent: fam.rent || 8000,
        status: "Free"
      });

      delete state.families[famId];
      state.activeFamilyId = Object.keys(state.families)[0] || "fam-1";
      saveState();

      alert(lang === "am" ? `ተከራዩ መልቀቁ ተረጋግጧል! ቤቱ ወደ ነፃ ቤቶች ዝርዝር ተመልሷል።` : `Tenancy closed and unit re-listed as free!`);
      renderAllViews();
    });
  }

  // 10. Admin Repair Log Form
  const repairForm = document.getElementById("add-repair-form");
  if (repairForm) {
    repairForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const block = document.getElementById("repair-block").value;
      const cost = Number(document.getElementById("repair-cost").value);
      const desc = document.getElementById("repair-desc").value.trim();
      const tech = document.getElementById("repair-tech").value.trim();
      const lang = state.currentLanguage;

      state.repairs.unshift({
        id: "r-" + Date.now(),
        date: new Date().toISOString().split("T")[0],
        block: block,
        desc: desc,
        tech: tech,
        cost: cost
      });
      saveState();

      alert(lang === "am" ? "የጥገና መዝገቡ ተመዝግቧል! ለሚመለከተው ህንፃ ባለቤት ተቀንሷል።" : "Repair ticket recorded and charged to building!");
      repairForm.reset();
      renderOwnerPortal();
    });
  }

  // 11. Admin Free House Publish Form
  const freeForm = document.getElementById("add-free-house-form");
  if (freeForm) {
    freeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const block = document.getElementById("free-block").value.trim();
      const room = document.getElementById("free-room").value.trim();
      const floor = Number(document.getElementById("free-floor").value);
      const rent = Number(document.getElementById("free-rent").value);
      const lang = state.currentLanguage;

      state.freeHouses.unshift({
        id: "f-" + Date.now(),
        block: block,
        room: room,
        floor: floor,
        rent: rent,
        status: "Free"
      });
      saveState();

      alert(lang === "am" ? `ክፍል ${room} ወደ ነፃ ቤቶች ተለጠፈ!` : `Unit ${room} published to free houses board!`);
      freeForm.reset();
      renderFreeHousesList();
      updateMetricsBar();
    });
  }

  // 12. Gate Vehicle Type Selector Buttons
  let selectedGateType = "resident";
  document.querySelectorAll(".gate-type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gate-type-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGateType = btn.getAttribute("data-vtype");
      
      const plateStatus = document.getElementById("gate-plate-status-box");
      if (plateStatus) plateStatus.style.display = "none";
    });
  });

  // 13. Gate Check-In Form
  const gateEntryForm = document.getElementById("gate-entry-form");
  if (gateEntryForm) {
    gateEntryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const plateInput = document.getElementById("gate-plate-input");
      const plateVal = plateInput.value.trim().toUpperCase();
      const lang = state.currentLanguage;
      if (!plateVal) return;

      const isResident = selectedGateType === "resident" || plateVal.includes("44122") || plateVal.includes("99120");
      const typeLabel = isResident ? (lang === "am" ? "የነዋሪ መኪና" : "Resident Car") :
                        selectedGateType === "visitor" ? (lang === "am" ? "የእንግዳ መኪና" : "Visitor Car") :
                        selectedGateType === "minibus" ? (lang === "am" ? "ታክሲ/ሚኒባስ" : "Taxi / Minibus") : (lang === "am" ? "የጭነት መኪና" : "Delivery Truck");

      state.gateInside.unshift({
        plate: plateVal,
        type: selectedGateType,
        typeLabel: typeLabel,
        entryTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isResident: isResident
      });

      // Update gate fee if passing through
      if (selectedGateType === "minibus") {
        state.gateShift.vehicleAccessFeesCollected += 15;
      } else if (selectedGateType === "truck") {
        state.gateShift.vehicleAccessFeesCollected += 50;
      }
      
      saveState();
      alert(isResident ? 
        (lang === "am" ? `ነዋሪ ሰሌዳ ${plateVal} ተረጋግጧል! ነፃ መግቢያ።` : `Resident plate ${plateVal} verified! Free gate pass.`) :
        (lang === "am" ? `ተሽከርካሪ ${plateVal} ተመዝግቧል! ቲኬት ወጥቷል።` : `Vehicle ${plateVal} registered! Ticket issued.`));
      
      plateInput.value = "";
      renderGateConsole();
      updateMetricsBar();
    });
  }

  // 14. Gate Vehicle Exit Action
  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("btn-gate-exit")) {
      const idx = Number(e.target.getAttribute("data-idx"));
      const v = state.gateInside[idx];
      if (!v) return;

      const lang = state.currentLanguage;
      let fee = 0;
      if (v.isResident) {
        fee = 0;
      } else if (v.type === "visitor") {
        fee = 20; // 1st hour tariff
        state.gateShift.visitorParkingCollected += fee;
      } else if (v.type === "minibus") {
        fee = 15;
      } else if (v.type === "truck") {
        fee = 50;
      }

      // Generate Receipt Preview
      const receiptCard = document.getElementById("gate-receipt-ticket-card");
      const receiptContent = document.getElementById("gate-receipt-content");
      if (receiptCard && receiptContent) {
        receiptCard.style.display = "block";
        const receiptNo = "EKUL-GT-" + Math.floor(100000 + Math.random() * 900000);
        receiptContent.innerHTML = `
========================================
       EKUL (እኩል) GATE RECEIPT
       ${state.estateName}
========================================
Receipt No  : ${receiptNo}
Date / Time : ${new Date().toLocaleString()}
Vehicle     : ${v.plate} (${v.typeLabel})
Entry Time  : ${v.entryTime}
Exit Time   : ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
----------------------------------------
AMOUNT DUE  : ${fee.toFixed(2)} ETB
Cashier Cut : ${(fee * 0.05).toFixed(2)} ETB (5%)
Payment     : CASH / TELEBIRR CONFIRMED
========================================
      THANK YOU FOR VISITING!
========================================
        `;
      }

      state.gateInside.splice(idx, 1);
      saveState();
      renderGateConsole();
      updateMetricsBar();
    }
  });

  // 15. Cashier Close Shift
  const btnCloseShift = document.getElementById("btn-close-shift");
  if (btnCloseShift) {
    btnCloseShift.addEventListener("click", () => {
      const lang = state.currentLanguage;
      const reportedCash = document.getElementById("shift-reported-cash").value;
      alert(lang === "am" ? 
        `ሺፍት #42 በተሳካ ሁኔታ ተዘግቷል!\nየተቆጠረ ገንዘብ: ${reportedCash} ብር።\nለዋናው የአስተዳዳሪ መዝገብ (Ledger) ተላልፏል።` :
        `Shift #42 closed successfully!\nCounted cash: ${reportedCash} ETB.\nSubmitted to the immutable Admin Ledger.`);
    });
  }

  // 16. Splitter Add Household Form
  const addHhForm = document.getElementById("add-household-form");
  if (addHhForm) {
    addHhForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const flat = document.getElementById("household-flat").value.trim();
      const name = document.getElementById("household-name").value.trim();
      const occupants = Number(document.getElementById("household-occupants").value);
      const isGround = document.getElementById("household-ground-exempt").checked;
      const isStudent = document.getElementById("household-student-discount").checked;

      state.splitterHouseholds.push({
        id: Date.now(),
        flat, name, occupants, isGround, isStudent
      });
      saveState();
      addHhForm.reset();
      renderSplitter();
    });
  }

  // 17. Splitter Add Bill Row
  const btnAddBill = document.getElementById("btn-add-bill-row");
  if (btnAddBill) {
    btnAddBill.addEventListener("click", () => {
      state.splitterBills.push({
        id: Date.now(),
        name: "New Communal Expense",
        amount: 1000,
        method: "equal"
      });
      saveState();
      renderSplitter();
    });
  }

  // 18. Splitter Delete and Edit Actions
  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("btn-del-hh")) {
      const id = Number(e.target.getAttribute("data-id"));
      state.splitterHouseholds = state.splitterHouseholds.filter(h => h.id !== id);
      saveState();
      renderSplitter();
    }
    if (e.target && e.target.classList.contains("btn-del-bill")) {
      const id = Number(e.target.getAttribute("data-id"));
      state.splitterBills = state.splitterBills.filter(b => b.id !== id);
      saveState();
      renderSplitter();
    }
    if (e.target && e.target.id === "btn-copy-template") {
      const tArea = document.getElementById("telegram-template-textarea");
      if (tArea) {
        navigator.clipboard.writeText(tArea.value).then(() => {
          alert(state.currentLanguage === "am" ? "የቴሌግራም መልእክቱ ኮፒ ተደርጓል!" : "Telegram template copied to clipboard!");
        });
      }
    }
  });

  // Delegate input changes in splitter bills
  document.addEventListener("change", (e) => {
    if (e.target && e.target.classList.contains("bill-edit-name")) {
      const id = Number(e.target.getAttribute("data-id"));
      const b = state.splitterBills.find(x => x.id === id);
      if (b) { b.name = e.target.value; saveState(); renderSplitter(); }
    }
    if (e.target && e.target.classList.contains("bill-edit-amount")) {
      const id = Number(e.target.getAttribute("data-id"));
      const b = state.splitterBills.find(x => x.id === id);
      if (b) { b.amount = Number(e.target.value); saveState(); renderSplitter(); }
    }
    if (e.target && e.target.classList.contains("bill-edit-method")) {
      const id = Number(e.target.getAttribute("data-id"));
      const b = state.splitterBills.find(x => x.id === id);
      if (b) { b.method = e.target.value; saveState(); renderSplitter(); }
    }
  });

});

const fs = require('fs');

const OUTPUT_FILE = 'portfolio_dashboard.excalidraw';

// Configuration
const BOARD_GAP = 100;
const START_X = 0;
const START_Y = 0;

// Colors
const COLORS = {
    bg: "#ffffff",
    tableBg: "#e3fafc",
    tableStroke: "#0c8599",
    uiBg: "#f8f9fa",
    uiStroke: "#ced4da",
    cardBg: "#ffffff",
    text: "#212529",
    green: "#28a745",
    red: "#dc3545",
    blue: "#228be6"
};

const elements = [];
const generateId = () => Math.random().toString(36).substr(2, 9);
const now = Date.now();

// Text Measurement Helper
const measureText = (text, fontSize = 20) => {
    const lines = text.split('\n');
    const width = Math.max(...lines.map(line => line.length)) * (fontSize * 0.6);
    const height = lines.length * (fontSize * 1.25);
    return { width, height };
};

// Generic Shape Creator
const createShape = (type, x, y, w, h, bg, stroke, label = null, fontSize = 20, align = "center", groupIds = []) => {
    const id = generateId();
    const textId = generateId();

    const shape = {
        id, type, x, y, width: w, height: h,
        backgroundColor: bg, strokeColor: stroke, fillStyle: "solid", strokeWidth: 1, roughness: 1, opacity: 100,
        groupIds, roundness: { type: 3 },
        boundElements: label ? [{ id: textId, type: "text" }] : [],
        updated: now
    };
    elements.push(shape);

    if (label) {
        const textDims = measureText(label, fontSize);
        let tx = x + (w - textDims.width) / 2;
        let ty = y + (h - textDims.height) / 2;

        if (align === "left") {
            tx = x + 10;
        }

        elements.push({
            id: textId, type: "text", x: tx, y: ty, width: textDims.width, height: textDims.height,
            text: label, fontSize, fontFamily: 1, textAlign: align, verticalAlign: "middle",
            strokeColor: COLORS.text, backgroundColor: "transparent",
            groupIds, containerId: id, updated: now
        });
    }
    return id;
};

// Simple Arrow Connect
const connect = (startId, endId) => {
    // Just adding arrows would be complex without knowing exact points in this simple script,
    // but we can add simple arrows visually if we knew coordinates. 
    // For now, we will place nodes close enough or use layout to imply connection, 
    // or just skip complex arrow routing in this script version to keep it robust.
};

// --- BOARD A: Data Architecture ---
const drawBoardA = (startX, startY) => {
    const group = generateId();

    // Title
    createShape("text", startX, startY, 400, 40, "transparent", COLORS.text, "1. Board A: Data Architecture (Supabase)", 30, "left", [group]);

    const centerX = startX + 400;
    const centerY = startY + 200;
    const boxW = 280;
    const boxH = 180;

    // Central Node: Properties
    const propText = "PROPERTIES\n--\nID (PK)\nName\nAddress\nCountry (BE/DE/FI)\nPurchase_Date\nPurchase_Price\nSize_sqm";
    createShape("rectangle", centerX, centerY, boxW, boxH, COLORS.tableBg, COLORS.tableStroke, propText, 16, "left", [group]);

    // Left Node: Financials
    const finText = "FINANCIALS & KPI\n--\nGross_Yield\nNet_Cashflow\nMonthly_Rent_Cold\nCurrent_Value";
    createShape("rectangle", centerX - 350, centerY, boxW, boxH, "#fff0f6", "#c01148", finText, 16, "left", [group]);

    // Arrow Left -> Center (1:1)
    // (Implied by proximity for script simplicity)

    // Right Node: Expenses
    const expText = "EXPENSES\n--\nType (Maint/Tax)\nAmount\nFrequency\nDate";
    createShape("rectangle", centerX + 350, centerY, boxW, boxH, "#fff9db", "#f08c00", expText, 16, "left", [group]);

    // Bottom Node: Loans
    const loanText = "LOANS\n--\nBank_Name\nInterest_Rate\nAmortization\nRemaining_Debt";
    createShape("rectangle", centerX, centerY + 250, boxW, boxH, "#ebfbee", "#2f9e44", loanText, 16, "left", [group]);

    return startY + 600; // Next Y
};

// --- BOARD B: Command Center Dashboard ---
const drawBoardB = (startX, startY) => {
    const group = generateId();
    // Title
    createShape("text", startX, startY, 400, 40, "transparent", COLORS.text, "2. Board B: Command Center Dashboard", 30, "left", [group]);

    const dashY = startY + 60;
    const dashW = 1000;
    const dashH = 700;

    // Main Container
    createShape("rectangle", startX, dashY, dashW, dashH, "#f1f3f5", "#adb5bd", null, 0, "center", [group]);

    // Top Ticker (3 Cards)
    const cardW = 300;
    const cardH = 100;
    let cardX = startX + 30;
    const cardY = dashY + 30;

    createShape("rectangle", cardX, cardY, cardW, cardH, "#fff", "#dee2e6", "Total Portfolio Value\n€ 2,500,000", 24, "center", [group]);
    cardX += cardW + 30;
    createShape("rectangle", cardX, cardY, cardW, cardH, "#fff", "#dee2e6", "Monthly Cashflow\n€ 12,500", 24, "center", [group]);
    cardX += cardW + 30;
    createShape("rectangle", cardX, cardY, cardW, cardH, "#fff", "#dee2e6", "Global Yield\n5.2%", 24, "center", [group]);

    // Middle Section: Country Columns
    const colY = cardY + 130;
    const colW = 300;
    const colH = 350;
    let colX = startX + 30;

    const countries = ["Germany (DE)", "Belgium (BE)", "Finland (FI)"];
    const props = [
        [{ n: "T.H.18", cf: 1 }, { n: "Musterstr. 1", cf: -1 }], // DE
        [{ n: "Van Bre", cf: 1 }, { n: "Rue de la Loi", cf: 1 }], // BE
        [{ n: "Helsinki Apt", cf: 1 }] // FI
    ];

    countries.forEach((country, idx) => {
        // Col Header
        createShape("rectangle", colX, colY, colW, 40, "#e9ecef", "transparent", country, 16, "center", [group]);

        // Col Body
        createShape("rectangle", colX, colY + 40, colW, colH, "#fff", "#dee2e6", null, 0, "center", [group]);

        // Small Prop Cards
        let propY = colY + 50;
        if (props[idx]) {
            props[idx].forEach(p => {
                const pBoxId = createShape("rectangle", colX + 10, propY, colW - 20, 50, "#f8f9fa", "#dee2e6", p.n, 16, "center", [group]);

                // Status Dot
                const dotColor = p.cf > 0 ? COLORS.green : COLORS.red;
                createShape("ellipse", colX + colW - 40, propY + 15, 20, 20, dotColor, "transparent", null, 0, "center", [group]);

                propY += 60;
            });
        }
        colX += colW + 30;
    });

    // Bottom Section: Activity Log
    const logY = colY + colH + 20;
    createShape("rectangle", startX + 30, logY, dashW - 60, 100, "#fff", "#dee2e6", "Activity Log: \n- Maintenance DE-01 (-€500)\n- Rent BE-01 (+€1200)", 14, "left", [group]);

    return dashY + dashH + 100;
};

// --- BOARD C: Deep Dive View ---
const drawBoardC = (startX, startY) => {
    const group = generateId();
    createShape("text", startX, startY, 400, 40, "transparent", COLORS.text, "3. Board C: Property Deep Dive", 30, "left", [group]);

    const viewY = startY + 60;
    const viewW = 1000;
    const viewH = 600;

    // Window
    createShape("rectangle", startX, viewY, viewW, viewH, "#fff", "#dee2e6", null, 0, "center", [group]);

    // Header
    createShape("rectangle", startX, viewY, viewW, 80, "#f1f3f5", "transparent", "Property: BE-01 Balans", 24, "left", [group]);
    // Edit Button
    createShape("rectangle", startX + viewW - 120, viewY + 20, 100, 40, COLORS.blue, "transparent", "EDIT", 16, "center", [group]);

    // Left Col: Static Data
    const leftX = startX + 20;
    const leftY = viewY + 100;
    const leftW = 300;
    const staticText = "DETAILS\n\nPrice: €450,000\nYear: 1985\nSize: 120sqm\nLoc: Brussels, BE";
    createShape("rectangle", leftX, leftY, leftW, 400, "#f8f9fa", "#e9ecef", staticText, 16, "left", [group]);

    // Right Col: Dynamic
    const rightX = startX + 340;
    const rightY = viewY + 100;
    const rightW = 640;

    // Tenancy Status
    createShape("rectangle", rightX, rightY, rightW, 60, "#d3f9d8", "#2b8a3e", "Status: OCCUPIED", 20, "center", [group]);

    // Calculator Visual
    const calcY = rightY + 80;
    createShape("rectangle", rightX, calcY, rightW, 150, "#fff", "#adb5bd", null, 0, "center", [group]);
    // Visual Bar: Rent - Loan - Costs = Net
    const barY = calcY + 50;
    const barH = 40;
    const barW = rightW - 40;
    let currX = rightX + 20;

    // Rent (Total)
    createShape("rectangle", currX, barY, barW, barH, "#e9ecef", "transparent", null, 0, "center", [group]);
    // Loan (Red part)
    createShape("rectangle", currX, barY, 200, barH, "#ffa8a8", "transparent", "Loan", 12, "center", [group]);
    // Costs (Red part)
    createShape("rectangle", currX + 200, barY, 100, barH, "#ffc9c9", "transparent", "Cost", 12, "center", [group]);
    // Net (Green part remaining)
    createShape("rectangle", currX + 300, barY, barW - 300, barH, COLORS.green, "transparent", "NET CASHFLOW", 14, "center", [group]);

    // Tabs
    const tabY = calcY + 180;
    const tabW = 150;
    createShape("rectangle", rightX, tabY, tabW, 40, "#fff", "#adb5bd", "Overview", 14, "center", [group]);
    createShape("rectangle", rightX + tabW, tabY, tabW, 40, "#e9ecef", "#adb5bd", "Documents", 14, "center", [group]);
    createShape("rectangle", rightX + tabW * 2, tabY, tabW, 40, "#e9ecef", "#adb5bd", "Expenses", 14, "center", [group]);

    return viewY + viewH;
};


// Execute
let curY = START_Y;
curY = drawBoardA(START_X, curY);
curY = drawBoardB(START_X, curY + BOARD_GAP);
curY = drawBoardC(START_X, curY + BOARD_GAP);


// Output File
const excalidrawFile = {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements: elements,
    appState: {
        viewBackgroundColor: "#ffffff",
        gridSize: 20
    }
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(excalidrawFile, null, 2));
console.log(`Generated ${OUTPUT_FILE}`);

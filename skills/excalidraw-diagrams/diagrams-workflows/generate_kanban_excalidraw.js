const fs = require('fs');

const OUTPUT_FILE = 'immo_kanban_board.excalidraw';

// Configuration
const COL_WIDTH = 300;
const COL_GAP = 50;
const START_X = 50;
const START_Y = 100;
const TITLE_HEIGHT = 60;
const CARD_HEIGHT = 100;
const CARD_GAP = 20;

// Colors
const COLORS = {
    bg: "#ffffff",
    colBg: "#f8f9fa",
    cardBg: "#ffffff",
    cardStroke: "#ced4da",
    text: "#212529",
    titleText: "#495057",
    yellowFlag: "#ffc107",
    green: "#28a745",
    red: "#dc3545"
};

const phases = [
    {
        title: "Phase A: Sourcing",
        items: [
            { text: "Input: New Exposé PDF", type: "input" },
            { text: "Auto: Hotzone Check", type: "process" },
            { text: "Auto: Demand Check", type: "process" },
            { text: "Decision: Worth pursuing?", type: "decision" }
        ]
    },
    {
        title: "Phase B: Analysis (KI)",
        items: [
            { text: "KI: Analyze Condition", type: "process" },
            { text: "User: Set Reno Standard", type: "process" },
            { text: "KI: Flag Missing Infos\n(Yellow Flags)", type: "warning" }
        ]
    },
    {
        title: "Phase C: Viewing",
        items: [
            { text: "On-Site Checkup", type: "process" },
            { text: "Verify Yellow Flags", type: "action" },
            { text: "Estimate Reno Costs", type: "process" }
        ]
    },
    {
        title: "Phase D: Offer",
        items: [
            { text: "Finalize Invest Costs", type: "process" },
            { text: "Calc Target Price", type: "process" },
            { text: "Send Offer to Broker", type: "action" },
            { text: "Offer Accepted?", type: "decision" }
        ]
    },
    {
        title: "Phase E: Financing",
        items: [
            { text: "Send Exposé to Bank", type: "process" },
            { text: "Check Interest Rate", type: "process" },
            { text: "Notary Appointment", type: "event" }
        ]
    },
    {
        title: "Phase F: Execution/Exit",
        items: [
            { text: "Manage Contractors", type: "process" },
            { text: "Track Progress", type: "process" },
            { text: "Sale Complete", type: "finish" }
        ]
    }
];

const elements = [];

// Helper to create IDs
const generateId = () => Math.random().toString(36).substr(2, 9);
const now = Date.now();

// Rough text measurement (Virgil font approx)
const measureText = (text, fontSize = 20) => {
    const lines = text.split('\n');
    const width = Math.max(...lines.map(line => line.length)) * (fontSize * 0.6); // approx width
    const height = lines.length * (fontSize * 1.25);
    return { width, height };
};

let currentX = START_X;

// 1. Create Layout
phases.forEach((phase, colIndex) => {
    const colX = currentX;
    const colY = START_Y;
    const colHeight = TITLE_HEIGHT + (phase.items.length * (CARD_HEIGHT + CARD_GAP)) + 40;
    const colId = generateId();

    // Column Background
    elements.push({
        id: colId,
        type: "rectangle",
        x: colX,
        y: colY,
        width: COL_WIDTH,
        height: colHeight,
        backgroundColor: COLORS.colBg,
        strokeColor: "transparent",
        fillStyle: "solid",
        strokeWidth: 1,
        roughness: 0,
        roundness: { type: 3 },
        opacity: 100,
        groupIds: [],
        frameId: null,
        roundness: { type: 3 },
        seed: Math.floor(Math.random() * 100000),
        version: 1,
        versionNonce: 0,
        isDeleted: false,
        boundElements: null,
        updated: now,
        link: null,
        locked: false,
    });

    // Column Title
    const titleDims = measureText(phase.title, 20);
    elements.push({
        id: generateId(),
        type: "text",
        x: colX + 20,
        y: colY + 15,
        width: titleDims.width,
        height: titleDims.height,
        text: phase.title,
        fontSize: 20,
        fontFamily: 1, // Virgil
        textAlign: "left",
        verticalAlign: "top",
        baseline: 18,
        strokeColor: COLORS.titleText,
        backgroundColor: "transparent",
        fillStyle: "hachure",
        strokeWidth: 1,
        roughness: 1,
        opacity: 100,
        groupIds: [],
        frameId: null,
        roundness: null,
        seed: Math.floor(Math.random() * 100000),
        version: 1,
        versionNonce: 0,
        isDeleted: false,
        boundElements: null,
        updated: now,
        link: null,
        locked: false,
    });

    // Items
    let currentY = colY + TITLE_HEIGHT;

    phase.items.forEach((item, itemIndex) => {
        const cardId = generateId();
        const textId = generateId();
        const groupId = generateId(); // Group card and text together

        const isDecision = item.type === 'decision';

        // Calculate precise text Layout
        const fontSize = 16;
        const textDims = measureText(item.text, fontSize);

        // Center text in card
        const cardWidth = COL_WIDTH - 40;
        const textX = colX + 20 + (cardWidth - textDims.width) / 2;
        const textY = currentY + (CARD_HEIGHT - textDims.height) / 2;

        // Card Shape
        const shape = {
            id: cardId,
            type: isDecision ? "diamond" : "rectangle",
            x: colX + 20,
            y: currentY,
            width: cardWidth,
            height: CARD_HEIGHT,
            backgroundColor: COLORS.cardBg,
            strokeColor: COLORS.cardStroke,
            fillStyle: "solid",
            strokeWidth: 1,
            roughness: 1,
            opacity: 100,
            groupIds: [groupId], // Use Grouping
            roundness: { type: 3 },
            seed: Math.floor(Math.random() * 100000),
            version: 1,
            versionNonce: 0,
            isDeleted: false,
            // Bind text to this container
            boundElements: [{ id: textId, type: "text" }],
            updated: now,
            link: null,
            locked: false,
        };
        elements.push(shape);

        // Card Text
        elements.push({
            id: textId,
            type: "text",
            x: textX,
            y: textY,
            width: textDims.width,
            height: textDims.height,
            text: item.text,
            fontSize: fontSize,
            fontFamily: 1,
            textAlign: "center",
            verticalAlign: "middle",
            baseline: fontSize * 0.9,
            strokeColor: COLORS.text,
            backgroundColor: "transparent",
            fillStyle: "hachure",
            strokeWidth: 1,
            roughness: 1,
            opacity: 100,
            groupIds: [groupId], // Use Grouping
            frameId: null,
            roundness: null,
            seed: Math.floor(Math.random() * 100000),
            version: 1,
            versionNonce: 0,
            isDeleted: false,
            // Reference container
            containerId: cardId,
            updated: now,
            link: null,
            locked: false,
        });

        // Special Icons (Yellow Flags)
        if (item.type === 'warning') {
            const flagId = generateId();
            const flagGroup = generateId();

            elements.push({
                id: flagId,
                type: "ellipse",
                x: colX + COL_WIDTH - 50,
                y: currentY + 10,
                width: 20,
                height: 20,
                backgroundColor: COLORS.yellowFlag,
                fillStyle: "solid",
                strokeColor: "#e0a800",
                strokeWidth: 1,
                roughness: 1,
                opacity: 100,
                groupIds: [groupId], // Add to main card group
                roundness: { type: 2 },
                seed: Math.floor(Math.random() * 100000),
                version: 1,
                versionNonce: 0,
                isDeleted: false,
                updated: now,
            });
        }

        currentY += CARD_HEIGHT + CARD_GAP;
    });

    currentX += COL_WIDTH + COL_GAP;
});


// --- NEW SECTION: MOCKUPS & DETAILS ---
const MOCKUP_START_Y = START_Y + 1200; // Position below the main board
const MOCKUP_START_X = START_X;

// 1. Detailed Object Card Mockup
const drawObjectCardMockup = (x, y) => {
    const cardW = 300;
    const cardH = 400;
    const groupId = generateId();

    // Card Container
    elements.push({
        id: generateId(), type: "rectangle", x: x, y: y, width: cardW, height: cardH,
        backgroundColor: "#ffffff", strokeColor: "#000000", fillStyle: "solid", strokeWidth: 1, roughness: 1, roundness: { type: 3 },
        groupIds: [groupId]
    });

    // Image Placeholder
    elements.push({
        id: generateId(), type: "rectangle", x: x + 20, y: y + 20, width: cardW - 40, height: 150,
        backgroundColor: "#e9ecef", strokeColor: "transparent", fillStyle: "solid", roughness: 0,
        groupIds: [groupId]
    });
    // "Image" X
    elements.push({
        id: generateId(), type: "line", x: x + 20, y: y + 20, width: cardW - 40, height: 150, points: [[0, 0], [cardW - 40, 150]], strokeColor: "#adb5bd", groupId: [groupId]
    });
    elements.push({
        id: generateId(), type: "line", x: x + 20, y: y + 170, width: cardW - 40, height: 150, points: [[0, 0], [-(cardW - 40), -150]], strokeColor: "#adb5bd", groupId: [groupId]
    });

    // Address / Title
    elements.push({
        id: generateId(), type: "text", x: x + 20, y: y + 180, width: 200, height: 25,
        text: "Musterstraße 123", fontSize: 20, fontFamily: 1, strokeColor: "#000000", groupIds: [groupId]
    });

    // Badges
    elements.push({
        id: generateId(), type: "rectangle", x: x + 20, y: y + 210, width: 120, height: 25,
        backgroundColor: "#ffe8cc", strokeColor: "transparent", fillStyle: "solid", roundness: { type: 3 }, groupIds: [groupId]
    });
    elements.push({
        id: generateId(), type: "text", x: x + 25, y: y + 215, width: 110, height: 15,
        text: "Besichtigung", fontSize: 12, fontFamily: 1, strokeColor: "#d9480f", groupIds: [groupId]
    });

    // Progress Bar
    elements.push({
        id: generateId(), type: "rectangle", x: x + 20, y: y + 250, width: cardW - 40, height: 10,
        backgroundColor: "#e9ecef", strokeColor: "transparent", fillStyle: "solid", roundness: { type: 3 }, groupIds: [groupId]
    });
    elements.push({ // Fill
        id: generateId(), type: "rectangle", x: x + 20, y: y + 250, width: (cardW - 40) * 0.4, height: 10,
        backgroundColor: COLORS.green, strokeColor: "transparent", fillStyle: "solid", roundness: { type: 3 }, groupIds: [groupId]
    });
    elements.push({
        id: generateId(), type: "text", x: x + 20, y: y + 265, width: 100, height: 15,
        text: "Progress: 40%", fontSize: 12, fontFamily: 1, strokeColor: "#868e96", groupIds: [groupId]
    });

    // Yellow Flag Icon
    elements.push({
        id: generateId(), type: "text", x: x + cardW - 40, y: y + 180, width: 20, height: 20,
        text: "⚠️", fontSize: 24, fontFamily: 1, groupIds: [groupId]
    });

    // Label for the mockup
    elements.push({
        id: generateId(), type: "text", x: x, y: y - 40, width: 200, height: 30,
        text: "Mockup 1: Objekt-Karte", fontSize: 20, fontFamily: 1, strokeColor: COLORS.titleText
    });
};

// 2. Scoring System Matrix
const drawScoringMatrix = (x, y) => {
    const w = 400;
    const h = 300;
    const groupId = generateId();

    // Container
    elements.push({
        id: generateId(), type: "rectangle", x: x, y: y, width: w, height: h,
        backgroundColor: "#fff", strokeColor: "#000", fillStyle: "solid", strokeWidth: 1, roughness: 1, groupIds: [groupId]
    });

    // Title
    elements.push({
        id: generateId(), type: "text", x: x + 20, y: y + 20, width: 200, height: 30,
        text: "Scoring: Property Variables", fontSize: 20, fontFamily: 1, strokeColor: "#000", groupIds: [groupId]
    });

    // Simple Table Rows
    const rows = [
        { label: "Windows", score: "⭐⭐⭐ (3/5)" },
        { label: "Floors", score: "⭐⭐⭐⭐⭐ (5/5)" },
        { label: "Electric", score: "⚠️ Critical Check" },
        { label: "Heating", score: "❓ Unknown" },
        { label: "Location", score: "🟢 Hotzone A" }
    ];

    let rowY = y + 60;
    rows.forEach(row => {
        elements.push({
            id: generateId(), type: "text", x: x + 20, y: rowY, width: 150, height: 20,
            text: row.label, fontSize: 16, fontFamily: 1, strokeColor: "#333", groupIds: [groupId]
        });
        elements.push({
            id: generateId(), type: "text", x: x + 200, y: rowY, width: 150, height: 20,
            text: row.score, fontSize: 16, fontFamily: 1, strokeColor: "#333", groupIds: [groupId]
        });
        rowY += 40;
    });

    // Label
    elements.push({
        id: generateId(), type: "text", x: x, y: y - 40, width: 200, height: 30,
        text: "Mockup 2: Scoring Logic", fontSize: 20, fontFamily: 1, strokeColor: COLORS.titleText
    });
};

// 3. Dashboard Sidebar
const drawDashboardSidebar = (x, y) => {
    const w = 200;
    const h = 400;
    const groupId = generateId();

    // Sidebar Bg
    elements.push({
        id: generateId(), type: "rectangle", x: x, y: y, width: w, height: h,
        backgroundColor: "#343a40", strokeColor: "transparent", fillStyle: "solid", roughness: 0, groupIds: [groupId]
    });

    // Menu Items
    const items = ["Dashboard", "Pipeline", "Tasks", "Settings"];
    let itemY = y + 40;
    items.forEach(item => {
        elements.push({
            id: generateId(), type: "text", x: x + 20, y: itemY, width: 100, height: 20,
            text: item, fontSize: 16, fontFamily: 1, strokeColor: "#f8f9fa", groupIds: [groupId]
        });
        itemY += 40;
    });

    // Stats Section
    itemY += 20;
    elements.push({
        id: generateId(), type: "line", x: x + 10, y: itemY, width: w - 20, height: 1, points: [[0, 0], [w - 20, 0]], strokeColor: "#495057", groupIds: [groupId]
    });
    itemY += 20;

    const stats = [
        { label: "Sourcing", val: "12" },
        { label: "Viewing", val: "3" },
        { label: "Offer", val: "1" },
        { label: "Exit", val: "0" }
    ];

    stats.forEach(stat => {
        elements.push({
            id: generateId(), type: "text", x: x + 20, y: itemY, width: 100, height: 15,
            text: stat.label, fontSize: 14, fontFamily: 1, strokeColor: "#adb5bd", groupIds: [groupId]
        });
        elements.push({
            id: generateId(), type: "rectangle", x: x + 120, y: itemY - 5, width: 30, height: 20,
            backgroundColor: "#495057", strokeColor: "transparent", fillStyle: "solid", roundness: { type: 3 }, groupIds: [groupId]
        });
        elements.push({
            id: generateId(), type: "text", x: x + 128, y: itemY - 2, width: 20, height: 15,
            text: stat.val, fontSize: 14, fontFamily: 1, strokeColor: "#fff", groupIds: [groupId]
        });
        itemY += 35;
    });

    // Label
    elements.push({
        id: generateId(), type: "text", x: x, y: y - 40, width: 200, height: 30,
        text: "Mockup 3: Dashboard Nav", fontSize: 20, fontFamily: 1, strokeColor: COLORS.titleText
    });
};

// Draw the new sections
drawObjectCardMockup(MOCKUP_START_X, MOCKUP_START_Y);
drawScoringMatrix(MOCKUP_START_X + 400, MOCKUP_START_Y);
drawDashboardSidebar(MOCKUP_START_X + 900, MOCKUP_START_Y);

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

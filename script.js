/* =========================================================
   GAME DATA
========================================================= */

const desserts = [
    {
        id: "carrot",
        name: "Carrot Cake",
        icon: "🥕",
        rarity: "Common",
        price: 20,
        minValue: 10,
        maxValue: 36,
        packMin: 2,
        packMax: 6,
        packPrice: 100,
        minStock: 5,
        maxStock: 30
    },

    {
        id: "pumpkin",
        name: "Pumpkin Pie",
        icon: "🥧",
        rarity: "Common",
        price: 150,
        minValue: 25,
        maxValue: 300,
        packMin: 2,
        packMax: 6,
        packPrice: 200,
        minStock: 1,
        maxStock: 7
    },

    {
        id: "apple",
        name: "Apple Pie",
        icon: "🥧",
        rarity: "Common",
        price: 500,
        minValue: 270,
        maxValue: 1500,
        packMin: 2,
        packMax: 7,
        packPrice: 800,
        minStock: 1,
        maxStock: 8
    },

    {
        id: "lollipop",
        name: "Lolipop",
        icon: "🍭",
        rarity: "Common",
        price: 700,
        minValue: 400,
        maxValue: 5000,
        packMin: 1,
        packMax: 30,
        packPrice: 2000,
        minStock: 10,
        maxStock: 30
    },

    {
        id: "mochi",
        name: "Mochi",
        icon: "🍡",
        rarity: "Uncommon",
        price: 1000,
        minValue: 500,
        maxValue: 3000,
        packMin: 2,
        packMax: 10,
        packPrice: 4000,
        minStock: 3,
        maxStock: 12
    },

    {
        id: "dubai",
        name: "Dubai Chocolate",
        icon: "🍫",
        rarity: "Uncommon",
        price: 5000,
        minValue: 2500,
        maxValue: 7000,
        packMin: 2,
        packMax: 5,
        packPrice: 10000,
        minStock: 2,
        maxStock: 5
    },

    {
        id: "cheesecake",
        name: "Cheesecake",
        icon: "🍰",
        rarity: "Uncommon",
        price: 7000,
        minValue: 5000,
        maxValue: 11000,
        packMin: 2,
        packMax: 7,
        packPrice: 15000,
        minStock: 1,
        maxStock: 6
    },

    {
        id: "macaroons",
        name: "Macaroons",
        icon: "🍪",
        rarity: "Rare",
        price: 15000,
        minValue: 17000,
        maxValue: 72000,
        packMin: 5,
        packMax: 30,
        packPrice: 100000,
        minStock: 1,
        maxStock: 3
    },

    {
        id: "flan",
        name: "Chocolate Flan",
        icon: "🍮",
        rarity: "Rare",
        price: 50000,
        minValue: 29000,
        maxValue: 80000,
        packMin: 2,
        packMax: 8,
        packPrice: 100000,
        minStock: 2,
        maxStock: 6
    },

    {
        id: "gypsy",
        name: "Gypsy Arm",
        icon: "🍰",
        rarity: "Rare",
        price: 100000,
        minValue: 55000,
        maxValue: 200000,
        packMin: 2,
        packMax: 20,
        packPrice: 210000,
        minStock: 4,
        maxStock: 10
    },

    {
        id: "beignets",
        name: "Beignets",
        icon: "🍩",
        rarity: "Legendary",
        price: 300000,
        minValue: 10000,
        maxValue: 50000,
        packMin: 20,
        packMax: 50,
        packPrice: 310000,
        minStock: 5,
        maxStock: 20
    },

    {
        id: "icecream",
        name: "Cookies & Cream Ice Cream",
        icon: "🍨",
        rarity: "Legendary",
        price: 400000,
        minValue: 100000,
        maxValue: 1000000,
        packMin: 2,
        packMax: 20,
        packPrice: 600000,
        minStock: 2,
        maxStock: 6
    },

    {
        id: "churros",
        name: "Churros",
        icon: "🥨",
        rarity: "Legendary",
        price: 1000000,
        minValue: 500000,
        maxValue: 3000000,
        packMin: 2,
        packMax: 7,
        packPrice: 2000000,
        minStock: 2,
        maxStock: 20
    },

    {
        id: "crepes",
        name: "Crepes",
        icon: "🥞",
        rarity: "Mythic",
        price: 5000000,
        minValue: 2500000,
        maxValue: 10000000,
        packMin: 2,
        packMax: 10,
        packPrice: 10000000,
        minStock: 2,
        maxStock: 20
    },

    {
        id: "popcorn",
        name: "Popcorn",
        icon: "🍿",
        rarity: "Mythic",
        price: 10000000,
        minValue: 6000000,
        maxValue: 15000000,
        packMin: 2,
        packMax: 14,
        packPrice: 20000000,
        minStock: 5,
        maxStock: 10
    },

    {
        id: "strawberry-short-cake",
        name: "Strawberry Short Cake",
        icon: "🍓",
        rarity: "Mythic",
        price: 50000000,
        minValue: 45000000,
        maxValue: 55000000,
        packMin: 5,
        packMax: 20,
        packPrice: 200000000,
        minStock: 1,
        maxStock: 5
    }
];

/* =========================================================
   GAME STATE
========================================================= */

let money = 1000;

let inventory = [];

let pantry = [];

let goodsStock = {};

let packStock = {};

let signedIn = false;

let username = "";

let redeemedCodes = [];

/* =========================================================
   SOUNDTRACK
========================================================= */

const songs = [
    {
        name: "Classic Easter",
        artist: "AXS Music"
    },
    {
        name: "Gymnopédie No. 1",
        artist: "Erik Satie"
    },
    {
        name: "Wedding Cocktail",
        artist: "AXS Music"
    },
    {
        name: "Do I Clench My Fists?",
        artist: "Ridgeclub"
    },
    {
        name: "Tropical Breeze",
        artist: "The Puahia Street Players"
    },
    {
        name: "Beginning Of The Dream",
        artist: "AZALI"
    },
    {
        name: "Orchestral Practice",
        artist: "AZALI"
    },
    {
        name: "Rematch",
        artist: "AZALI"
    },
    {
        name: "Gold",
        artist: "Koven"
    }
];

let currentSongIndex = 0;
let musicPlaying = false;
let audio = null;

const audioSources = {
    "Classic Easter": "",
    "Gymnopédie No. 1": "",
    "Wedding Cocktail": "",
    "Do I Clench My Fists?": "",
    "Tropical Breeze": "",
    "Beginning Of The Dream": "",
    "Orchestral Practice": "",
    "Rematch": "",
    "Gold": ""
};

/* =========================================================
   UTILITIES
========================================================= */

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function formatMoney(value) {
    return Math.floor(value).toLocaleString();
}

function getDessert(id) {
    return desserts.find(d => d.id === id);
}

function getValue(item) {
    return Math.floor(item.value * item.multiplier);
}

function showToast(message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

/* =========================================================
   MUTATIONS
========================================================= */

function createDessert(id) {

    const dessert = getDessert(id);

    let value = randomFloat(
        dessert.minValue,
        dessert.maxValue
    );

    let mutation = "Normal";
    let multiplier = 1;

    const deliciousRoll = Math.random();

    if (deliciousRoll < 0.00002) {

        mutation = "Delicious";
        multiplier = 150;

    } else {

        const bigRoll = Math.random();

        if (bigRoll < 0.01) {

            mutation = "Big";
            multiplier = 10;
        }
    }

    return {
        uid: Date.now() + Math.random(),
        id: id,
        value: value,
        mutation: mutation,
        multiplier: multiplier
    };
}

/* =========================================================
   STOCK
========================================================= */

function resetGoodsStock() {

    goodsStock = {};

    desserts.forEach(dessert => {

        goodsStock[dessert.id] = randomInt(
            dessert.minStock,
            dessert.maxStock
        );
    });

    renderGoods();
}

function resetPackStock() {

    packStock = {};

    desserts.forEach(dessert => {

        packStock[dessert.id] = true;
    });

    renderPacks();
}

/* =========================================================
   BUY SINGLE
========================================================= */

function buyDessert(id) {

    const dessert = getDessert(id);

    if (!dessert) return;

    if (goodsStock[id] <= 0) {

        showToast("That dessert is out of stock!");
        return;
    }

    if (money < dessert.price) {

        showToast("You don't have enough money!");
        return;
    }

    money -= dessert.price;

    goodsStock[id]--;

    inventory.push(createDessert(id));

    updateMoney();

    renderGoods();
    renderInventory();
    renderSell();

    showToast(`Bought 1 ${dessert.name}!`);
}

/* =========================================================
   BUY PACK
========================================================= */

function buyPack(id) {

    const dessert = getDessert(id);

    if (!dessert) return;

    if (!packStock[id]) {

        showToast("This pack is out of stock!");
        return;
    }

    if (money < dessert.packPrice) {

        showToast("You don't have enough money!");
        return;
    }

    money -= dessert.packPrice;

    const amount = randomInt(
        dessert.packMin,
        dessert.packMax
    );

    for (let i = 0; i < amount; i++) {

        inventory.push(
            createDessert(id)
        );
    }

    packStock[id] = false;

    updateMoney();

    renderPacks();
    renderInventory();
    renderSell();

    showToast(
        `Bought a ${dessert.name} pack! Got ${amount}!`
    );
}

/* =========================================================
   MONEY
========================================================= */

function updateMoney() {

    const moneyDisplay =
        document.getElementById("moneyDisplay");

    if (moneyDisplay) {

        moneyDisplay.textContent =
            "$" + formatMoney(money);
    }
}

/* =========================================================
   GOODS MERCHANT
========================================================= */

function renderGoods() {

    const container =
        document.getElementById("goodsList");

    if (!container) return;

    container.innerHTML = "";

    desserts.forEach(dessert => {

        const stock =
            goodsStock[dessert.id] ?? 0;

        const card =
            document.createElement("div");

        card.className = "dessert-card";

        card.innerHTML = `
            <div class="dessert-icon">
                ${dessert.icon}
            </div>

            <div class="dessert-name">
                ${dessert.name}
            </div>

            <div class="rarity ${dessert.rarity.toLowerCase()}">
                ${dessert.rarity}
            </div>

            <div class="dessert-info">
                Sell value:
                $${formatMoney(dessert.minValue)}
                -
                $${formatMoney(dessert.maxValue)}
            </div>

            <div class="price">
                Buy:
                $${formatMoney(dessert.price)}
            </div>

            <div class="stock">
                Stock: ${stock}
            </div>

            <button
                class="primary"
                onclick="buyDessert('${dessert.id}')"
                ${stock <= 0 ? "disabled" : ""}
            >
                Buy
            </button>
        `;

        container.appendChild(card);
    });
}

/* =========================================================
   PACK MERCHANT
========================================================= */

function renderPacks() {

    const container =
        document.getElementById("packList");

    if (!container) return;

    container.innerHTML = "";

    desserts.forEach(dessert => {

        const available =
            packStock[dessert.id];

        const card =
            document.createElement("div");

        card.className = "dessert-card";

        card.innerHTML = `
            <div class="dessert-icon">
                ${dessert.icon}
            </div>

            <div class="dessert-name">
                ${dessert.name} Pack
            </div>

            <div class="rarity ${dessert.rarity.toLowerCase()}">
                ${dessert.rarity}
            </div>

            <div class="dessert-info">
                Contains:
                ${dessert.packMin}
                -
                ${dessert.packMax}
            </div>

            <div class="price">
                $${formatMoney(dessert.packPrice)}
            </div>

            <div class="stock">
                ${available ? "In Stock" : "Sold Out"}
            </div>

            <button
                class="primary"
                onclick="buyPack('${dessert.id}')"
                ${!available ? "disabled" : ""}
            >
                Buy Pack
            </button>
        `;

        container.appendChild(card);
    });
}

/* =========================================================
   INVENTORY
========================================================= */

function renderInventory() {

    const container =
        document.getElementById("inventoryList");

    if (!container) return;

    container.innerHTML = "";

    if (inventory.length === 0) {

        container.innerHTML =
            `<div class="empty">
                Your inventory is empty.
            </div>`;

        return;
    }

    inventory.forEach(item => {

        const dessert =
            getDessert(item.id);

        if (!dessert) return;

        const row =
            document.createElement("div");

        row.className = "inventory-item";

        row.innerHTML = `
            <div class="inventory-left">

                <div class="inventory-icon">
                    ${dessert.icon}
                </div>

                <div>

                    <div class="dessert-name">
                        ${dessert.name}
                    </div>

                    <div class="${dessert.rarity.toLowerCase()}">
                        ${dessert.rarity}
                    </div>

                    <div>
                        ${item.mutation}
                    </div>

                    <div>
                        Value:
                        $${formatMoney(getValue(item))}
                    </div>

                </div>

            </div>

            <div class="inventory-actions">

                <button
                    class="secondary"
                    onclick="sellItem('${item.uid}')"
                >
                    Sell
                </button>

                <button
                    class="secondary"
                    onclick="sendToPantry('${item.uid}')"
                >
                    Pantry
                </button>

            </div>
        `;

        container.appendChild(row);
    });
}

/* =========================================================
   SELL
========================================================= */

function renderSell() {

    const container =
        document.getElementById("sellList");

    if (!container) return;

    container.innerHTML = "";

    if (inventory.length === 0) {

        container.innerHTML =
            `<div class="empty">
                Nothing to sell.
            </div>`;

        return;
    }

    inventory.forEach(item => {

        const dessert =
            getDessert(item.id);

        if (!dessert) return;

        const row =
            document.createElement("div");

        row.className = "inventory-item";

        row.innerHTML = `
            <div class="inventory-left">

                <div class="inventory-icon">
                    ${dessert.icon}
                </div>

                <div>

                    <strong>
                        ${dessert.name}
                    </strong>

                    <div>
                        ${item.mutation}
                    </div>

                    <div>
                        $${formatMoney(getValue(item))}
                    </div>

                </div>

            </div>

            <button
                class="primary"
                onclick="sellItem('${item.uid}')"
            >
                Sell
            </button>
        `;

        container.appendChild(row);
    });
}

function sellItem(uid) {

    const index =
        inventory.findIndex(
            item => String(item.uid) === String(uid)
        );

    if (index === -1) return;

    const item =
        inventory[index];

    const value =
        getValue(item);

    const dessert =
        getDessert(item.id);

    money += value;

    inventory.splice(index, 1);

    updateMoney();

    renderInventory();
    renderSell();

    showToast(
        `Sold ${dessert.name} for $${formatMoney(value)}!`
    );
}

/* =========================================================
   PANTRY
========================================================= */

function sendToPantry(uid) {

    const index =
        inventory.findIndex(
            item => String(item.uid) === String(uid)
        );

    if (index === -1) return;

    const item =
        inventory[index];

    inventory.splice(index, 1);

    pantry.push(item);

    renderInventory();
    renderSell();
    renderPantry();

    showToast("Moved to pantry!");
}

function removeFromPantry(uid) {

    const index =
        pantry.findIndex(
            item => String(item.uid) === String(uid)
        );

    if (index === -1) return;

    const item =
        pantry[index];

    pantry.splice(index, 1);

    inventory.push(item);

    renderInventory();
    renderSell();
    renderPantry();

    showToast("Moved to inventory!");
}

function renderPantry() {

    const container =
        document.getElementById("pantryList");

    if (!container) return;

    container.innerHTML = "";

    if (pantry.length === 0) {

        container.innerHTML =
            `<div class="empty">
                Your pantry is empty.
            </div>`;

        return;
    }

    pantry.forEach(item => {

        const dessert =
            getDessert(item.id);

        if (!dessert) return;

        const card =
            document.createElement("div");

        card.className = "pantry-item";

        card.innerHTML = `
            <div class="inventory-left">

                <div class="inventory-icon">
                    ${dessert.icon}
                </div>

                <div>

                    <strong>
                        ${dessert.name}
                    </strong>

                    <div class="${dessert.rarity.toLowerCase()}">
                        ${dessert.rarity}
                    </div>

                    <div>
                        ${item.mutation}
                    </div>

                    <div>
                        Value:
                        $${formatMoney(getValue(item))}
                    </div>

                </div>

            </div>

            <br>

            <button
                class="secondary"
                onclick="removeFromPantry('${item.uid}')"
            >
                Return to Inventory
            </button>
        `;

        container.appendChild(card);
    });
}

/* =========================================================
   TABS
========================================================= */

function showTab(tabName) {

    document.querySelectorAll(".tab")
        .forEach(tab => {
            tab.classList.remove("active");
        });

    document.querySelectorAll("nav button")
        .forEach(button => {
            button.classList.remove("active");
        });

    const tab =
        document.getElementById(tabName);

    if (tab) {
        tab.classList.add("active");
    }

    const button =
        document.querySelector(
            `nav button[data-tab="${tabName}"]`
        );

    if (button) {
        button.classList.add("active");
    }
}

/* =========================================================
   CODES
========================================================= */

function redeemCode() {

    const input =
        document.getElementById("codeInput");

    if (!input) return;

    const code =
        input.value.trim().toUpperCase();

    if (!code) {

        showToast("Enter a code.");
        return;
    }

    if (redeemedCodes.includes(code)) {

        showToast("You already redeemed that code!");
        return;
    }

    if (code === "NEWGAMEWHATDIS") {

        for (let i = 0; i < 5; i++) {

            inventory.push(
                createDessert("lollipop")
            );
        }

        redeemedCodes.push(code);

        renderInventory();
        renderSell();

        showToast("You got 5 Lolipops!");

        input.value = "";

        return;
    }

    showToast("Invalid code.");
}

/* =========================================================
   SETTINGS
========================================================= */

function setVolume(value) {

    if (audio) {

        audio.volume =
            Number(value) / 100;
    }
}

/* =========================================================
   COLORBLIND
========================================================= */

function setColorblindMode(mode) {

    const root =
        document.documentElement;

    if (mode === "normal") {

        root.style.setProperty(
            "--bg",
            "#fff7ed"
        );

        root.style.setProperty(
            "--text",
            "#2b1b12"
        );

        root.style.setProperty(
            "--accent",
            "#ff8c42"
        );

    } else if (mode === "protanopia") {

        root.style.setProperty(
            "--bg",
            "#fff9e6"
        );

        root.style.setProperty(
            "--text",
            "#2a2417"
        );

        root.style.setProperty(
            "--accent",
            "#0066cc"
        );

    } else if (mode === "deuteranopia") {

        root.style.setProperty(
            "--bg",
            "#f5f8e8"
        );

        root.style.setProperty(
            "--text",
            "#1f2716"
        );

        root.style.setProperty(
            "--accent",
            "#0057b8"
        );

    } else if (mode === "tritanopia") {

        root.style.setProperty(
            "--bg",
            "#f8f0ff"
        );

        root.style.setProperty(
            "--text",
            "#21162c"
        );

        root.style.setProperty(
            "--accent",
            "#d10070"
        );
    }
}

/* =========================================================
   COLORS
========================================================= */

function changeBackground(color) {

    document.documentElement
        .style.setProperty(
            "--bg",
            color
        );
}

function changeTextColor(color) {

    document.documentElement
        .style.setProperty(
            "--text",
            color
        );
}

/* =========================================================
   SOUNDTRACK UI
========================================================= */

function renderSongs() {

    const list =
        document.getElementById("songList");

    if (!list) return;

    list.innerHTML = "";

    songs.forEach((song, index) => {

        const row =
            document.createElement("div");

        row.className = "song";

        row.innerHTML = `
            <span>
                🎵 ${song.name}
                —
                ${song.artist}
            </span>

            <button onclick="selectSong(${index})">
                Play
            </button>
        `;

        list.appendChild(row);
    });
}

function selectSong(index) {

    currentSongIndex = index;

    const currentSong =
        document.getElementById("currentSong");

    if (currentSong) {

        currentSong.textContent =
            songs[index].name;
    }

    if (musicPlaying) {

        playCurrentSong();
    }
}

function toggleMusic() {

    musicPlaying = !musicPlaying;

    const button =
        document.getElementById("musicToggle");

    if (musicPlaying) {

        if (button) {
            button.textContent = "⏸ Pause";
        }

        playCurrentSong();

    } else {

        if (button) {
            button.textContent = "▶ Play";
        }

        if (audio) {
            audio.pause();
        }
    }
}

function playCurrentSong() {

    const song =
        songs[currentSongIndex];

    const source =
        audioSources[song.name];

    const currentSong =
        document.getElementById("currentSong");

    if (currentSong) {

        currentSong.textContent =
            song.name;
    }

    if (!source) {

        showToast(
            `${song.name} selected. Add its authorized audio file to play it.`
        );

        return;
    }

    if (audio) {
        audio.pause();
    }

    audio =
        new Audio(source);

    const volume =
        document.getElementById("musicVolume");

    if (volume) {

        audio.volume =
            Number(volume.value) / 100;
    }

    audio.play();

    audio.onended = () => {

        nextSong();
    };
}

function nextSong() {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {

        currentSongIndex = 0;
    }

    const currentSong =
        document.getElementById("currentSong");

    if (currentSong) {

        currentSong.textContent =
            songs[currentSongIndex].name;
    }

    if (musicPlaying) {

        playCurrentSong();
    }
}

function previousSong() {

    currentSongIndex--;

    if (currentSongIndex < 0) {

        currentSongIndex =
            songs.length - 1;
    }

    const currentSong =
        document.getElementById("currentSong");

    if (currentSong) {

        currentSong.textContent =
            songs[currentSongIndex].name;
    }

    if (musicPlaying) {

        playCurrentSong();
    }
}

function shuffleSongs() {

    currentSongIndex =
        randomInt(
            0,
            songs.length - 1
        );

    const currentSong =
        document.getElementById("currentSong");

    if (currentSong) {

        currentSong.textContent =
            songs[currentSongIndex].name;
    }

    if (musicPlaying) {

        playCurrentSong();
    }
}

function addCustomSong() {

    if (!signedIn) {

        showToast(
            "You must sign in to add a custom song."
        );

        return;
    }

    const input =
        document.getElementById("songIdInput");

    if (!input) return;

    const id =
        input.value.trim();

    if (!id) {

        showToast("Enter a song ID.");
        return;
    }

    songs.push({
        name: "Custom Song " + id,
        artist: "Custom",
        id: id
    });

    renderSongs();

    input.value = "";

    showToast("Custom song added!");
}

/* =========================================================
   ACCOUNT
========================================================= */

function signIn() {

    const emailInput =
        document.getElementById("loginEmail");

    const nameInput =
        document.getElementById("loginName");

    if (!emailInput || !nameInput) return;

    const email =
        emailInput.value.trim();

    const name =
        nameInput.value.trim();

    if (!email || !name) {

        showToast(
            "Enter your username and email."
        );

        return;
    }

    signedIn = true;

    username = name;

    const accountStatus =
        document.getElementById("accountStatus");

    if (accountStatus) {

        accountStatus.textContent =
            `✅ Signed in as ${username}`;
    }

    showToast("Signed in!");
}

/* =========================================================
   SUGGESTIONS
========================================================= */

function sendSuggestion() {

    if (!signedIn) {

        showToast(
            "You must sign in first."
        );

        return;
    }

    const input =
        document.getElementById("suggestionInput");

    if (!input) return;

    const message =
        input.value.trim();

    if (!message) {

        showToast(
            "Write something first."
        );

        return;
    }

    const subject =
        encodeURIComponent(
            "Cakes & Candies Suggestion"
        );

    const body =
        encodeURIComponent(
            `From: ${username}\n\n${message}`
        );

    window.location.href =
        `mailto:franklyndavid770@gmail.com?subject=${subject}&body=${body}`;

    input.value = "";
}

/* =========================================================
   STOCK TIMER
========================================================= */

function getNextFiveMinuteTimestamp() {

    const now =
        new Date();

    const next =
        new Date(now);

    next.setSeconds(0);
    next.setMilliseconds(0);

    const minutes =
        next.getMinutes();

    const nextMultiple =
        Math.ceil(
            (minutes + 0.0001) / 5
        ) * 5;

    next.setMinutes(
        nextMultiple
    );

    if (
        next.getTime() <= now.getTime()
    ) {

        next.setMinutes(
            next.getMinutes() + 5
        );
    }

    return next;
}

let nextStockReset =
    getNextFiveMinuteTimestamp();

function updateStockTimer() {

    const now =
        new Date();

    let difference =
        nextStockReset.getTime()
        - now.getTime();

    if (difference <= 0) {

        resetGoodsStock();
        resetPackStock();

        nextStockReset =
            getNextFiveMinuteTimestamp();

        difference =
            nextStockReset.getTime()
            - now.getTime();
    }

    const totalSeconds =
        Math.max(
            0,
            Math.floor(
                difference / 1000
            )
        );

    const minutes =
        Math.floor(
            totalSeconds / 60
        );

    const seconds =
        totalSeconds % 60;

    const formatted =
        String(minutes).padStart(2, "0")
        + ":"
        + String(seconds).padStart(2, "0");

    const goodsTimer =
        document.getElementById("goodsTimer");

    const packsTimer =
        document.getElementById("packsTimer");

    if (goodsTimer) {

        goodsTimer.textContent =
            formatted;
    }

    if (packsTimer) {

        packsTimer.textContent =
            formatted;
    }
}

/* =========================================================
   LOCAL SAVE
========================================================= */

function saveGame() {

    const saveData = {
        money,
        inventory,
        pantry,
        signedIn,
        username,
        redeemedCodes
    };

    localStorage.setItem(
        "cakesAndCandiesSave",
        JSON.stringify(saveData)
    );
}

function loadGame() {

    const saved =
        localStorage.getItem(
            "cakesAndCandiesSave"
        );

    if (!saved) return;

    try {

        const data =
            JSON.parse(saved);

        money =
            data.money ?? 1000;

        inventory =
            data.inventory ?? [];

        pantry =
            data.pantry ?? [];

        signedIn =
            data.signedIn ?? false;

        username =
            data.username ?? "";

        redeemedCodes =
            data.redeemedCodes ?? [];

        if (signedIn) {

            const accountStatus =
                document.getElementById(
                    "accountStatus"
                );

            if (accountStatus) {

                accountStatus.textContent =
                    `✅ Signed in as ${username}`;
            }
        }

    } catch (error) {

        console.log(
            "Save could not be loaded."
        );
    }
}

/* =========================================================
   INITIALIZE
========================================================= */

function initGame() {

    loadGame();

    resetGoodsStock();
    resetPackStock();

    renderInventory();
    renderPantry();
    renderSell();
    renderSongs();

    updateMoney();

    updateStockTimer();
}

/* =========================================================
   AUTO SAVE
========================================================= */

setInterval(() => {

    saveGame();

}, 5000);

setInterval(() => {

    updateStockTimer();

}, 1000);

/* =========================================================
   START
========================================================= */

initGame();

/* =========================================================
   CAKES & CANDIES
   MAIN GAME JAVASCRIPT
========================================================= */

/* =========================================================
   DESSERT DATA
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


/*
    Add authorized audio files/URLs here later.

    Example:

    "Classic Easter": "music/classic-easter.mp3"
*/

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
   RANDOM FUNCTIONS
========================================================= */

function randomInt(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}


function randomFloat(min, max) {

    return Math.random() * (max - min) + min;
}


/* =========================================================
   GENERAL HELPERS
========================================================= */

function getDessert(id) {

    return desserts.find(
        dessert => dessert.id === id
    );
}


function formatMoney(value) {

    return Math.floor(value).toLocaleString();
}


function getValue(item) {

    return Math.floor(
        item.value * item.multiplier
    );
}


function showToast(message) {

    const toast =
        document.getElementById("toast");

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

    if (!dessert) {
        return null;
    }

    let value = randomFloat(
        dessert.minValue,
        dessert.maxValue
    );

    let mutation = "Normal";

    let multiplier = 1;


    /*
        DELICIOUS
        0.002% chance

        0.002% = 0.00002
    */

    if (Math.random() < 0.00002) {

        mutation = "Delicious";

        multiplier = 150;

    }

    /*
        BIG
        1% chance
    */

    else if (Math.random() < 0.01) {

        mutation = "Big";

        multiplier = 10;
    }


    return {

        uid:
            Date.now() +
            Math.random(),

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

        goodsStock[dessert.id] =
            randomInt(
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
   BUY ONE DESSERT
========================================================= */

function buyDessert(id) {

    const dessert =
        getDessert(id);

    if (!dessert) return;


    if (goodsStock[id] <= 0) {

        showToast(
            "That dessert is out of stock!"
        );

        return;
    }


    if (money < dessert.price) {

        showToast(
            "You don't have enough money!"
        );

        return;
    }


    money -= dessert.price;

    goodsStock[id]--;


    const item =
        createDessert(id);

    if (item) {

        inventory.push(item);
    }


    updateMoney();

    renderGoods();

    renderInventory();

    renderSell();

    saveGame();


    showToast(
        `Bought 1 ${dessert.name}!`
    );
}


/* =========================================================
   BUY PACK
========================================================= */

function buyPack(id) {

    const dessert =
        getDessert(id);

    if (!dessert) return;


    if (!packStock[id]) {

        showToast(
            "This pack is out of stock!"
        );

        return;
    }


    if (money < dessert.packPrice) {

        showToast(
            "You don't have enough money!"
        );

        return;
    }


    money -= dessert.packPrice;


    const amount =
        randomInt(
            dessert.packMin,
            dessert.packMax
        );


    for (let i = 0; i < amount; i++) {

        const item =
            createDessert(id);

        if (item) {

            inventory.push(item);
        }
    }


    /*
        Each pack can only be purchased
        once per stock rotation.
    */

    packStock[id] = false;


    updateMoney();

    renderPacks();

    renderInventory();

    renderSell();

    saveGame();


    showToast(
        `Pack opened! You received ${amount} ${dessert.name}${amount === 1 ? "" : "s"}!`
    );
}


/* =========================================================
   SELL
========================================================= */

function sellItem(uid) {

    const index =
        inventory.findIndex(
            item => item.uid === uid
        );


    if (index === -1) return;


    const item =
        inventory[index];

    const dessert =
        getDessert(item.id);


    const sellValue =
        getValue(item);


    money += sellValue;


    inventory.splice(index, 1);


    pantry =
        pantry.filter(
            itemUid => itemUid !== uid
        );


    updateMoney();

    renderInventory();

    renderSell();

    renderPantry();

    saveGame();


    showToast(
        `Sold ${dessert.name} for $${formatMoney(sellValue)}!`
    );
}


/* =========================================================
   PANTRY
========================================================= */

function togglePantry(uid) {

    const index =
        pantry.indexOf(uid);


    if (index >= 0) {

        pantry.splice(index, 1);

    } else {

        if (pantry.length >= 10) {

            showToast(
                "Your Pantry is full! Maximum: 10"
            );

            return;
        }

        pantry.push(uid);
    }


    renderInventory();

    renderPantry();

    saveGame();
}


/* =========================================================
   RENDER GOODS MERCHANT
========================================================= */

function renderGoods() {

    const grid =
        document.getElementById(
            "goodsGrid"
        );

    if (!grid) return;


    grid.innerHTML = "";


    desserts.forEach(dessert => {

        const stock =
            goodsStock[dessert.id] || 0;


        const rarityClass =
            dessert.rarity.toLowerCase();


        const card =
            document.createElement("div");


        card.className =
            "dessert-card";


        card.innerHTML = `

            <div class="dessert-icon">
                ${dessert.icon}
            </div>

            <div class="dessert-name">
                ${dessert.name}
            </div>

            <div class="rarity ${rarityClass}">
                ${dessert.rarity}
            </div>

            <div class="price">
                Buy:
                $${formatMoney(dessert.price)}
            </div>

            <div class="value">
                Value:
                $${formatMoney(dessert.minValue)}
                -
                $${formatMoney(dessert.maxValue)}
            </div>

            <div class="stock">
                Stock:
                ${stock}
            </div>

            <div class="buy-row">

                <button
                    class="buy-btn"
                    ${stock <= 0 ? "disabled" : ""}
                    onclick="buyDessert('${dessert.id}')"
                >
                    Buy 1
                </button>

            </div>
        `;


        grid.appendChild(card);

    });
}


/* =========================================================
   RENDER PACK MERCHANT
========================================================= */

function renderPacks() {

    const container =
        document.getElementById(
            "packsGrid"
        );

    if (!container) return;


    container.innerHTML = "";


    desserts.forEach(dessert => {

        const available =
            packStock[dessert.id] !== false;


        const rarityClass =
            dessert.rarity.toLowerCase();


        const card =
            document.createElement("div");


        card.className =
            "pack-card";


        card.innerHTML = `

            <div class="pack-title">
                ${dessert.icon}
                ${dessert.name} Pack
            </div>

            <div class="rarity ${rarityClass}">
                ${dessert.rarity}
            </div>

            <div class="pack-description">
                Receive between
                <strong>${dessert.packMin}</strong>
                and
                <strong>${dessert.packMax}</strong>
                desserts.
            </div>

            <div class="pack-contents">
                Possible amount:
                ${dessert.packMin}
                -
                ${dessert.packMax}
            </div>

            <div class="pack-price">
                Pack Price:
                $${formatMoney(dessert.packPrice)}
            </div>

            <button
                class="pack-btn"
                ${available ? "" : "disabled"}
                onclick="buyPack('${dessert.id}')"
            >
                ${available ? "Buy Pack" : "Sold Out"}
            </button>
        `;


        container.appendChild(card);

    });
}


/* =========================================================
   RENDER INVENTORY
========================================================= */

function renderInventory() {

    const container =
        document.getElementById(
            "inventoryList"
        );

    if (!container) return;


    container.innerHTML = "";


    if (inventory.length === 0) {

        container.innerHTML = `
            <div class="empty">
                Your inventory is empty.
            </div>
        `;

        return;
    }


    inventory.forEach(item => {

        const dessert =
            getDessert(item.id);


        if (!dessert) return;


        const favorite =
            pantry.includes(item.uid);


        const card =
            document.createElement("div");


        card.className =
            "inventory-card";


        card.innerHTML = `

            <div class="inventory-left">

                <div class="inventory-icon">
                    ${dessert.icon}
                </div>

                <div>

                    <div class="inventory-name">
                        ${dessert.name}
                    </div>

                    <div>
                        Value:
                        $${formatMoney(
                            getValue(item)
                        )}
                    </div>

                    <span class="mutation">
                        ${item.mutation}
                        ×${item.multiplier}
                    </span>

                </div>

            </div>

            <div>

                <button
                    class="favorite-btn"
                    onclick="togglePantry(${item.uid})"
                >
                    ${
                        favorite
                        ? "⭐ Remove"
                        : "☆ Pantry"
                    }
                </button>

            </div>
        `;


        container.appendChild(card);

    });
}


/* =========================================================
   RENDER PANTRY
========================================================= */

function renderPantry() {

    const container =
        document.getElementById(
            "pantryList"
        );

    const count =
        document.getElementById(
            "pantryCount"
        );


    if (!container) return;


    if (count) {

        count.textContent =
            pantry.length;
    }


    container.innerHTML = "";


    const items =
        inventory.filter(
            item => pantry.includes(item.uid)
        );


    if (items.length === 0) {

        container.innerHTML = `
            <div class="empty">
                Your Pantry is empty.
            </div>
        `;

        return;
    }


    items.forEach(item => {

        const dessert =
            getDessert(item.id);


        if (!dessert) return;


        const card =
            document.createElement("div");


        card.className =
            "inventory-card";


        card.innerHTML = `

            <div class="inventory-left">

                <div class="inventory-icon">
                    ${dessert.icon}
                </div>

                <div>

                    <div class="inventory-name">
                        ${dessert.name}
                    </div>

                    <div>
                        ${item.mutation}
                        —
                        $${formatMoney(
                            getValue(item)
                        )}
                    </div>

                </div>

            </div>

            <button
                class="favorite-btn"
                onclick="togglePantry(${item.uid})"
            >
                Remove
            </button>
        `;


        container.appendChild(card);

    });
}


/* =========================================================
   RENDER SELL PAGE
========================================================= */

function renderSell() {

    const container =
        document.getElementById(
            "sellList"
        );

    if (!container) return;


    container.innerHTML = "";


    if (inventory.length === 0) {

        container.innerHTML = `
            <div class="empty">
                Nothing to sell.
            </div>
        `;

        return;
    }


    inventory.forEach(item => {

        const dessert =
            getDessert(item.id);


        if (!dessert) return;


        const card =
            document.createElement("div");


        card.className =
            "inventory-card";


        card.innerHTML = `

            <div class="inventory-left">

                <div class="inventory-icon">
                    ${dessert.icon}
                </div>

                <div>

                    <div class="inventory-name">
                        ${dessert.name}
                    </div>

                    <div>
                        ${item.mutation}
                    </div>

                    <div>
                        Sell for:
                        <strong>
                            $${formatMoney(
                                getValue(item)
                            )}
                        </strong>
                    </div>

                </div>

            </div>

            <button
                class="sell-btn"
                onclick="sellItem(${item.uid})"
            >
                Sell
            </button>
        `;


        container.appendChild(card);

    });
}


/* =========================================================
   MONEY
========================================================= */

function updateMoney() {

    const element =
        document.getElementById(
            "money"
        );

    if (!element) return;


    element.textContent =
        formatMoney(money);
}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove(
                "active"
            );

        });


    document
        .querySelectorAll(".nav button")
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    const selectedPage =
        document.getElementById(page);


    if (selectedPage) {

        selectedPage.classList.add(
            "active"
        );
    }


    const navButton =
        document.getElementById(
            "nav-" + page
        );


    if (navButton) {

        navButton.classList.add(
            "active"
        );
    }


    if (page === "inventory") {
        renderInventory();
    }


    if (page === "pantry") {
        renderPantry();
    }


    if (page === "sell") {
        renderSell();
    }
}


/* =========================================================
   SETTINGS
========================================================= */

function openSettings() {

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );


    if (overlay) {

        overlay.classList.add(
            "show"
        );
    }
}


function closeSettings() {

    const overlay =
        document.getElementById(
            "settingsOverlay"
        );


    if (overlay) {

        overlay.classList.remove(
            "show"
        );
    }
}


/* =========================================================
   CODE SYSTEM
========================================================= */

function redeemCode() {

    const input =
        document.getElementById(
            "codeInput"
        );


    if (!input) return;


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (code === "NEWGAMEWHATDIS") {


        if (
            redeemedCodes.includes(code)
        ) {

            showToast(
                "You already redeemed this code!"
            );

            return;
        }


        /*
            Give exactly 5 Lolipops.
        */

        for (let i = 0; i < 5; i++) {

            inventory.push(
                createDessert("lollipop")
            );
        }


        redeemedCodes.push(code);


        renderInventory();

        renderSell();

        saveGame();


        showToast(
            "🎉 You received 5 Lolipops!"
        );

    }

    else {

        showToast(
            "Invalid code."
        );
    }


    input.value = "";
}


/* =========================================================
   VOLUME
========================================================= */

function changeMusicVolume(value) {

    const volumeText =
        document.getElementById(
            "musicVolumeText"
        );


    if (volumeText) {

        volumeText.textContent =
            value + "%";
    }


    if (audio) {

        audio.volume =
            Number(value) / 100;
    }
}


/* =========================================================
   COLORBLIND MODE
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
    }


    else if (mode === "protanopia") {

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
    }


    else if (mode === "deuteranopia") {

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
    }


    else if (mode === "tritanopia") {

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


    saveSettings();
}


/* =========================================================
   CUSTOM COLORS
========================================================= */

function changeBackground(color) {

    document.documentElement
        .style.setProperty(
            "--bg",
            color
        );

    saveSettings();
}


function changeTextColor(color) {

    document.documentElement
        .style.setProperty(
            "--text",
            color
        );

    saveSettings();
}


/* =========================================================
   SOUNDTRACK LIST
========================================================= */

function renderSongs() {

    const list =
        document.getElementById(
            "songList"
        );


    if (!list) return;


    list.innerHTML = "";


    songs.forEach((song, index) => {

        const row =
            document.createElement("div");


        row.className =
            "song";


        row.innerHTML = `

            <span>
                🎵
                ${song.name}
                —
                ${song.artist}
            </span>

            <button
                onclick="selectSong(${index})"
            >
                Play
            </button>
        `;


        list.appendChild(row);

    });
}


/* =========================================================
   SELECT SONG
========================================================= */

function selectSong(index) {

    if (
        index < 0 ||
        index >= songs.length
    ) {
        return;
    }


    currentSongIndex = index;


    const element =
        document.getElementById(
            "currentSong"
        );


    if (element) {

        element.textContent =
            songs[index].name;
    }


    if (musicPlaying) {

        playCurrentSong();
    }
}


/* =========================================================
   PLAY / PAUSE
========================================================= */

function toggleMusic() {

    const button =
        document.getElementById(
            "musicToggle"
        );


    if (musicPlaying) {

        musicPlaying = false;


        if (button) {

            button.textContent =
                "▶ Play";
        }


        if (audio) {

            audio.pause();
        }


        return;
    }


    musicPlaying = true;


    if (button) {

        button.textContent =
            "⏸ Pause";
    }


    playCurrentSong();
}


/* =========================================================
   PLAY CURRENT SONG
========================================================= */

function playCurrentSong() {

    const song =
        songs[currentSongIndex];


    const element =
        document.getElementById(
            "currentSong"
        );


    if (element) {

        element.textContent =
            song.name;
    }


    const source =
        audioSources[song.name];


    /*
        No audio file has been assigned yet.
    */

    if (!source) {

        showToast(
            `${song.name} is selected. Add an authorized audio file to play it.`
        );

        return;
    }


    if (audio) {

        audio.pause();
    }


    audio =
        new Audio(source);


    const volume =
        document.getElementById(
            "musicVolume"
        );


    if (volume) {

        audio.volume =
            Number(volume.value) / 100;
    }


    audio.play().catch(() => {

        showToast(
            "The browser blocked automatic audio playback."
        );

    });


    audio.onended = () => {

        nextSong();

    };
}


/* =========================================================
   NEXT SONG
========================================================= */

function nextSong() {

    currentSongIndex++;


    if (
        currentSongIndex >= songs.length
    ) {

        currentSongIndex = 0;
    }


    const element =
        document.getElementById(
            "currentSong"
        );


    if (element) {

        element.textContent =
            songs[currentSongIndex].name;
    }


    if (musicPlaying) {

        playCurrentSong();
    }
}


/* =========================================================
   PREVIOUS SONG
========================================================= */

function previousSong() {

    currentSongIndex--;


    if (currentSongIndex < 0) {

        currentSongIndex =
            songs.length - 1;
    }


    const element =
        document.getElementById(
            "currentSong"
        );


    if (element) {

        element.textContent =
            songs[currentSongIndex].name;
    }


    if (musicPlaying) {

        playCurrentSong();
    }
}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleSongs() {

    currentSongIndex =
        randomInt(
            0,
            songs.length - 1
        );


    const element =
        document.getElementById(
            "currentSong"
        );


    if (element) {

        element.textContent =
            songs[currentSongIndex].name;
    }


    if (musicPlaying) {

        playCurrentSong();
    }
}


/* =========================================================
   CUSTOM SONG ID
========================================================= */

function addCustomSong() {

    if (!signedIn) {

        showToast(
            "You must sign in to add a custom song."
        );

        return;
    }


    const input =
        document.getElementById(
            "songIdInput"
        );


    if (!input) return;


    const id =
        input.value.trim();


    if (!id) {

        showToast(
            "Enter a song ID."
        );

        return;
    }


    songs.push({

        name:
            "Custom Song " + id,

        artist:
            "Custom",

        id: id
    });


    renderSongs();


    input.value = "";


    showToast(
        "Custom song added!"
    );
}


/* =========================================================
   SIGN IN
========================================================= */

function signIn() {

    const email =
        document.getElementById(
            "loginEmail"
        )?.value.trim();


    const name =
        document.getElementById(
            "loginName"
        )?.value.trim();


    if (!email || !name) {

        showToast(
            "Enter your username and email."
        );

        return;
    }


    signedIn = true;

    username = name;


    const status =
        document.getElementById(
            "accountStatus"
        );


    if (status) {

        status.textContent =
            `✅ Signed in as ${username}`;
    }


    saveGame();


    showToast(
        "Signed in!"
    );
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
        document.getElementById(
            "suggestionInput"
        );


    if (!input) return;


    const message =
        input.value.trim();


    if (!message) {

        showToast(
            "Write something first."
        );

        return;
    }


    /*
        Temporary email solution.

        This opens the user's email application.

        A true automatic system will need
        a secure backend/email service.
    */

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
   5-MINUTE STOCK SYSTEM
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
        next.getTime() <=
        now.getTime()
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
        -
        now.getTime();


    if (difference <= 0) {

        resetGoodsStock();

        resetPackStock();


        nextStockReset =
            getNextFiveMinuteTimestamp();


        difference =
            nextStockReset.getTime()
            -
            now.getTime();
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
        String(minutes)
            .padStart(2, "0")
        +
        ":"
        +
        String(seconds)
            .padStart(2, "0");


    const goodsTimer =
        document.getElementById(
            "goodsTimer"
        );


    const packsTimer =
        document.getElementById(
            "packsTimer"
        );


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
   SAVE GAME
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


/* =========================================================
   LOAD GAME
========================================================= */

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

            const status =
                document.getElementById(
                    "accountStatus"
                );


            if (status) {

                status.textContent =
                    `✅ Signed in as ${username}`;
            }
        }

    }

    catch (error) {

        console.error(
            "Save could not be loaded.",
            error
        );
    }
}


/* =========================================================
   SETTINGS SAVE
========================================================= */

function saveSettings() {

    const settings = {

        background:
            getComputedStyle(
                document.documentElement
            ).getPropertyValue("--bg"),

        text:
            getComputedStyle(
                document.documentElement
            ).getPropertyValue("--text"),

        musicVolume:
            document.getElementById(
                "musicVolume"
            )?.value ?? 70,

        colorblindMode:
            document.getElementById(
                "colorblindMode"
            )?.value ?? "normal"
    };


    localStorage.setItem(
        "cakesAndCandiesSettings",
        JSON.stringify(settings)
    );
}


/* =========================================================
   LOAD SETTINGS
========================================================= */

function loadSettings() {

    const saved =
        localStorage.getItem(
            "cakesAndCandiesSettings"
        );


    if (!saved) return;


    try {

        const settings =
            JSON.parse(saved);


        if (settings.background) {

            document.documentElement
                .style.setProperty(
                    "--bg",
                    settings.background
                );
        }


        if (settings.text) {

            document.documentElement
                .style.setProperty(
                    "--text",
                    settings.text
                );
        }


        const volume =
            document.getElementById(
                "musicVolume"
            );


        if (
            volume &&
            settings.musicVolume
        ) {

            volume.value =
                settings.musicVolume;

            changeMusicVolume(
                settings.musicVolume
            );
        }


        const colorblind =
            document.getElementById(
                "colorblindMode"
            );


        if (
            colorblind &&
            settings.colorblindMode
        ) {

            colorblind.value =
                settings.colorblindMode;
        }

    }

    catch (error) {

        console.error(
            "Settings could not be loaded.",
            error
        );
    }
}


/* =========================================================
   INITIALIZE GAME
========================================================= */

function initGame() {

    loadGame();

    loadSettings();


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
   AUTOMATIC SAVING
========================================================= */

setInterval(() => {

    saveGame();

}, 5000);


/* =========================================================
   STOCK TIMER
========================================================= */

setInterval(() => {

    updateStockTimer();

}, 1000);


/* =========================================================
   START GAME
========================================================= */

initGame();
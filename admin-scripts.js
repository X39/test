document.addEventListener('DOMContentLoaded', () => {
    const peopleList = document.getElementById('people-list');
    const addPersonButton = document.getElementById('add-person');
    const modPacksList = document.getElementById('mod-packs-list');
    const addModPackButton = document.getElementById('add-mod-pack');
    const serversList = document.getElementById('servers-list');
    const addServerButton = document.getElementById('add-server');
    const terrainsList = document.getElementById('terrains-list');
    const addTerrainButton = document.getElementById('add-terrain');
    const dialogs = document.getElementById('dialogs');

    // Mock data arrays
    const people = [];
    const modPacks = [];
    const servers = [];
    const terrains = [];

    // Handle people management actions
    addPersonButton.addEventListener('click', () => {
        const personItem = document.createElement('div');
        personItem.classList.add('person-item');
        personItem.innerHTML = `
            <h3>New Person</h3>
            <p>Details about the person</p>
        `;
        peopleList.appendChild(personItem);
        people.push({ name: 'New Person', details: 'Details about the person' });
    });

    // Handle mod-packs, servers, and terrains management actions
    addModPackButton.addEventListener('click', () => {
        const modPackItem = document.createElement('div');
        modPackItem.classList.add('mod-pack-item');
        modPackItem.innerHTML = `
            <h3>New Mod-Pack</h3>
            <p>Details about the mod-pack</p>
        `;
        modPacksList.appendChild(modPackItem);
        modPacks.push({ name: 'New Mod-Pack', details: 'Details about the mod-pack' });
    });

    addServerButton.addEventListener('click', () => {
        const serverItem = document.createElement('div');
        serverItem.classList.add('server-item');
        serverItem.innerHTML = `
            <h3>New Server</h3>
            <p>Details about the server</p>
        `;
        serversList.appendChild(serverItem);
        servers.push({ name: 'New Server', details: 'Details about the server' });
    });

    addTerrainButton.addEventListener('click', () => {
        const terrainItem = document.createElement('div');
        terrainItem.classList.add('terrain-item');
        terrainItem.innerHTML = `
            <h3>New Terrain</h3>
            <p>Details about the terrain</p>
        `;
        terrainsList.appendChild(terrainItem);
        terrains.push({ name: 'New Terrain', details: 'Details about the terrain' });
    });

    // Handle dialogs for adding, removing, and modifying items
    function showDialog(content) {
        const dialog = document.createElement('div');
        dialog.classList.add('dialog');
        dialog.innerHTML = content;
        dialogs.appendChild(dialog);
        dialogs.style.display = 'block';
    }

    function hideDialog() {
        dialogs.innerHTML = '';
        dialogs.style.display = 'none';
    }

    // Add animations and playful interactions
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header.style.animation = 'fadeIn 1s ease-in-out';
    footer.style.animation = 'fadeIn 1s ease-in-out';

    peopleList.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('person-item')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });

    peopleList.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('person-item')) {
            e.target.style.transform = 'scale(1)';
        }
    });

    modPacksList.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('mod-pack-item')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });

    modPacksList.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('mod-pack-item')) {
            e.target.style.transform = 'scale(1)';
        }
    });

    serversList.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('server-item')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });

    serversList.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('server-item')) {
            e.target.style.transform = 'scale(1)';
        }
    });

    terrainsList.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('terrain-item')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });

    terrainsList.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('terrain-item')) {
            e.target.style.transform = 'scale(1)';
        }
    });
});

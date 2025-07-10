const modules = [
    {
        name: 'Pf2e RPG Numbers',
        description: 'A module that started to just show damage numbers when you attack but now does other cool things too',
        image: 'fa-solid fa-dragon',
        link: 'https://github.com/ChasarooniZ/pf2e-rpg-numbers'
    },
    { name: 'PF2e Item Activations', description: 'Adds actions based on items activations to your character.', image: 'fa-solid fa-wand-magic-sparkles', link: 'https://github.com/ChasarooniZ/pf2e-item-activations' },
    { name: 'REDY: Reactive Dynamic Token Rings', description: 'Adds some reaction for dynamic token rings', image: 'fa-brands fa-react', link: 'https://github.com/ChasarooniZ/PF2e-Reactive-Token-Ring' },
    { name: 'PF2e: Rules Lawyer', description: 'A module that shows the Rules Lawyer Every +1 matters for Modifiers matter, when they do be', image: 'fa-solid fa-gavel', link: 'https://github.com/ChasarooniZ/Pf2e-Rules-Lawyer' },
    { name: 'PF2e Usage Updater', description: 'This simple module exists to update item uses of the party for items that can only by used every X', image: 'fa-solid fa-stopwatch', link: 'https://github.com/ChasarooniZ/pf2e-usage-updater' },
    { name: 'SETT: Some Extra Token (ring) Types', description: 'Adds options for dynamic token rings', image: 'fa-solid fa-ring', link: 'https://github.com/ChasarooniZ/More-Dynamic-Token-Rings' },
    { name: 'PF2e Abomination Vaults: Expanded', description: 'This is an adaptation of the expansion written by Taylor Hodgskiss for abomination vaults.', image: 'fa-solid fa-ghost', link: 'https://github.com/ChasarooniZ/abomination-vaults-expanded' },
    {
        name: 'Abomination Vaults Addons (PF2e)',
        description: 'A group of helpful additions and changes to Abomination Vaults',
        image: 'fa-solid fa-plus',
        link: 'https://github.com/ChasarooniZ/Abomination-Vault-Addons'
    },
    {
        name: 'Ready for the Stage - Theatre Inserts Extension',
        description: 'Some helpful macros to control certain parts of theatre inserts',
        image: 'fa-solid fa-masks-theater',
        link: 'https://github.com/ChasarooniZ/ready-for-the-stage'
    },
    {
        name: 'Genga',
        description: 'System Agnostic Anime Animations',
        image: 'fa-solid fa-otter',
        link: 'https://foundryvtt.com/packages/genga'
    },
    {
        name: 'PF2e Hero Action Deck (Unofficial)',
        description: 'Unofficial Implementation of Pf2e Hero Action Cards as a Deck for fvtt',
        image: 'fa-solid fa-money-check',
        link: 'https://foundryvtt.com/packages/pf2e-hero-deck-unofficial'
    },
    {
        name: 'Fist of the Ruby Phoenix: Addons',
        description: 'Small addons of actors, animations, maps and tips for Fists of the Ruby Phoenix',
        image: 'fa-solid fa-feather',
        link: 'https://foundryvtt.com/packages/fist-of-the-ruby-phoenix-addons'
    },
    {
        name: 'O is for Objection!',
        description: 'Create a Phoenix Wright style objection',
        image: 'fa-solid fa-gavel',
        link: 'https://foundryvtt.com/packages/objection'
    },
    {
        name: 'RHYM: Reliably Harness Your Music',
        description: 'Music Management Module',
        image: 'fa-solid fa-music',
        link: 'https://foundryvtt.com/packages/rhym'
    },
    {
        name: 'Depruner: Automatically Remove Chat Messages',
        description: 'Automatically deletes the oldest Chat Message after you exceed your limit. Should help performance drastically.',
        image: 'fa-solid fa-trash-arrow-up',
        link: 'https://foundryvtt.com/packages/depruner-chat-message-remover'
    },
    // {
    //     name: 'Module 2',
    //     description: 'Description of Module 2',
    //     image: 'module2.jpg',
    //     link: '#'
    // },
    // Add more modules as needed
];

function displayModules(modules) {
    const container = document.getElementById('moduleContainer');
    container.innerHTML = '';
    //modules.sort(compare)
    modules.sort((a, b) => a.name.localeCompare(b.name)).forEach(module => {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module';
        moduleDiv.innerHTML = `
            <div class="module-image">
                <i class="${module.image}"></i>
            </div>
            <div class="module-content">
                <h4><a href="${module.link}">${module.name}</a></h4>
                <p>${module.description}</p>
            </div>
        `;
        container.appendChild(moduleDiv);
    });
}

document.getElementById('moduleSearch').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredModules = modules.filter(module =>
        module.name.toLowerCase().includes(searchTerm) ||
        module.description.toLowerCase().includes(searchTerm)
    );
    displayModules(filteredModules);
});

displayModules(modules);

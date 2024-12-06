const modules = [
    { name: 'Pf2e RPG Numbers', description: 'A module that started to just show damage numbers when you attack but now does other cool things too', image: 'module1.jpg', link: 'https://github.com/ChasarooniZ/pf2e-rpg-numbers' },
    { name: 'PF2e Item Activations', description: 'Adds actions based on items activations to your character.', image: 'module2.jpg', link: 'https://github.com/ChasarooniZ/pf2e-item-activations' },
    { name: 'REDY: Reactive Dynamic Token Rings', description: 'Adds some reaction for dynamic token rings', image: 'module2.jpg', link: 'https://github.com/ChasarooniZ/PF2e-Reactive-Token-Ring' },
    { name: 'PF2e: Rules Lawyer', description: 'A module that shows the Rules Lawyer Every +1 matters for Modifiers matter, when they do be', image: 'module2.jpg', link: 'https://github.com/ChasarooniZ/Pf2e-Rules-Lawyer' },
    { name: 'PF2e Usage Updater', description: 'This simple module exists to update item uses of the party for items that can only by used every X', image: 'module2.jpg', link: 'https://github.com/ChasarooniZ/pf2e-usage-updater' },
    { name: 'SETT: Some Extra Token (ring) Types', description: 'Adds options for dynamic token rings', image: 'module2.jpg', link: 'https://github.com/ChasarooniZ/More-Dynamic-Token-Rings' },
    { name: 'Module 2', description: 'Description of Module 2', image: 'module2.jpg', link: '#' },
    // Add more modules as needed
];

function displayModules(modules) {
    const container = document.getElementById('moduleContainer');
    container.innerHTML = '';
    modules.forEach(module => {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module';
        moduleDiv.innerHTML = `
            <h2><a href="${module.link}">${module.name}</a></h2>
            <img src="${module.image}" alt="${module.name}">
            <p>${module.description}</p>
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

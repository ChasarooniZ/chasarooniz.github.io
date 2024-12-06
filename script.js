const modules = [
    { name: 'Module 1', description: 'Description of Module 1', image: 'module1.jpg' },
    { name: 'Module 2', description: 'Description of Module 2', image: 'module2.jpg' },
    // Add more modules as needed
];

function displayModules(modules) {
    const container = document.getElementById('moduleContainer');
    container.innerHTML = '';
    modules.forEach(module => {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module';
        moduleDiv.innerHTML = `
            <h2>${module.name}</h2>
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

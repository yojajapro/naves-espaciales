fetch("https://ll.thespacedevs.com/2.2.0/astronaut/?limit=10")
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById("listaAstronautas");
    
    data.people.forEach(p => {
        const card = document.createElement("div");
        card.className = "astronauta-card";
        const avatarUrl = `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 90)}.jpg`;
        card.innerHTML = `
            <img src="${avatarUrl}" alt="Foto de ${p.name}">
            <h3>${p.name}</h3>
            <p>Nave: ${p.craft}</p>
        `;
        lista.appendChild(card);
    });
});

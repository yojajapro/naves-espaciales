fetch("https://ll.thespacedevs.com/2.2.0/astronaut/?limit=10")
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById("listaAstronautas");

    if (!data || !data.results) {
      lista.innerHTML = "<p>No se encontraron astronautas.</p>";
      return;
    }

    data.results.forEach(p => {
      const card = document.createElement("div");
      card.className = "astronauta-card";

      const avatarUrl = p.profile_image || `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 90)}.jpg`;

      card.innerHTML = `
        <img src="${avatarUrl}" alt="Foto de ${p.name}">
        <h3>${p.name}</h3>
        <p>Agencia: ${p.agency?.name || "Desconocida"}</p>
      `;

      lista.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error al obtener los datos de los astronautas:", error);
    const lista = document.getElementById("listaAstronautas");
    lista.innerHTML = "<p>Error al cargar los astronautas. Intenta más tarde.</p>";
  });

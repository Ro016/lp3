const filmes = [
    {
      titulo: "Homem de Ferro",
      imagem: "hf.jpg",
      sinopse: "Tony Stark constrói uma armadura para escapar do cativeiro e vira um super-herói."
    },
    {
      titulo: "Capitão América: O Primeiro Vingador",
      imagem: "c1.jpg",
      sinopse: "Steve Rogers se transforma no Capitão América para lutar na Segunda Guerra Mundial."
    },
    {
      titulo: "Thor",
      imagem: "th1.jpg",
      sinopse: "O deus do trovão é banido para a Terra e aprende a ser digno de seu poder."
    }
  ];
  
  const container = document.getElementById('filmes');
  
  filmes.forEach(filme => {
    const div = document.createElement('div');
    div.className = 'filme';
    div.innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}">
      <h3>${filme.titulo}</h3>
      <p>${filme.sinopse}</p>
    `;
    container.appendChild(div);
  });
  
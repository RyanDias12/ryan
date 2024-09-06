function pesquisar() {
  // Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena na variável section
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhuma línguagem foi encontrada</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia que armazenará o conteúdo HTML gerado dinamicamente
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Inicia um loop para percorrer cada item do array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      resultados += `

    <div class="i tem-resultado">

      <!-- Exibe o título do item atual -->
      <h2>${dado.titulo}</h2>

      <!-- Exibe a descrição do item atual -->
      <p class="descricao-meta">${dado.descricao}</p>

      <!-- Cria um link com o atributo target="_blank" para abrir em nova aba -->
      <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>
  `;
    }
    // Concatena o conteúdo HTML para cada item no array 'dados', incluindo o título, a descrição e o link
  }

  // Insere o conteúdo HTML gerado dinamicamente dentro do elemento selecionado (section)
  section.innerHTML = resultados;
}

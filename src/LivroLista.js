import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ContrleLivros';
import ControleEditora from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.codigo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivros();

  useEffect(() => {
    const obterLivros = async () => {
      const livros = controleLivro.obterLivros();
      setLivros(livros);
      setCarregado(true);
    };

    obterLivros();
  }, []);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Código</th>
            <th>Editora</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {carregado &&
            livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;

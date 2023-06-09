import Livro from '../modelo/Livro';

let livros: Array<Livro> = [
  { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1'] },
  { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 2'] },
  { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor 3'] },
];

class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = livros.reduce((maxCodigo, livro) => {
      return livro.codigo > maxCodigo ? livro.codigo : maxCodigo;
    }, 0);

    livro.codigo = codigoMaisAlto + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;

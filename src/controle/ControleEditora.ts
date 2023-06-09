import Editora from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' },
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditora;

class Personagem {
  constructor(nome, descricaoCurta, descricaoCompleta, url){
    this.nome = nome
    this.descricao_curta = descricaoCurta
    this.descricao_completa = descricaoCompleta
    this.url_imagem = url
  }

  getObjeto(){
    const retorno = {
      nome: this.nome,
      descricao_curta: this.descricao_curta,
      descricao_completa: this.descricao_completa,
      url_imagem: this.url_imagem
    }
    return retorno
  }
}

export default Personagem
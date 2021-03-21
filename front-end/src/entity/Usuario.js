class Usuario {
  constructor(nome, usuario, senha, tipo){
    this.nome = nome
    this.usuario = usuario
    this.senha = senha
    this.tipo = tipo
  }


  getObj(){
    const obj = {
      nome: this.nome,
      usuario: this.usuario,
      senha: this.senha,
      tipo: this.tipo
    }
    return obj
  }
}

export default Usuario
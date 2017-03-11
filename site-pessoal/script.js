var pessoa = {
	nome: 'Vanessa Araújo',
	cargo: 'Técnica em Informática',
	foto: 'foto.jpg'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;
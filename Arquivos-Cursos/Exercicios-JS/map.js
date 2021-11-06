/* 
  Exercicio referentes ao Bootcamp Impulso React Web Developer pela Digital Innovation One.
  MAP : Caracteristicas:
      - uma coleção de arrays no formato [ chave, valor];
      - pode ser interado por um loop for ...of
    Map.set = adiciona, informa a chave e o valor
    Map.get = checa um valor - acessa
    Map.delete = deleta 
  
    # Diferença - Map vs Objeto 
      - Maps podem ter chaves de qualquer tipo;
      - Maps possuem a propriedade length;
      - Maps são mais fáceis de interar;
      - Utilizado quando o valor da chaves é desconhecido
      - Os valores tem o memso tipo
*/  
/*  
  // Coleções Chaveadas - map e set
    Atividade 1: Maps
    - Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
    - Crie uma função getAdmins que recebe um Map;
    - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
    - Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuarios que são administradores.

*/
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));

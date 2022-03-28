function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);  //Set só retorna valores únicos(sem repetir valores)
    return mySet
}

function valoresUnicos2(arr){
    const mySet = new Set(arr);  //Set só retorna valores únicos(sem repetir valores)
    
    return [...mySet];
}

console.log(getAdmins(usuarios));
console.log('\n');
console.log(valoresUnicos(meuArray));
console.log('\n');
console.log(valoresUnicos2(meuArray));
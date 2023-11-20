// name, age, username, img, phone, email, company, address

//address tendrá estos datos como valor: 
// usuario.address.street
// usuario.address.suite
// usuario.address.city

const listaUsuarios = document.getElementById('listaUsuarios')

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if(!response.ok) {
            throw new Error ('Ha ocurrido un error 1Ha habido un error de solicitud');
        }   return response.json();
    })

    .then((usuarios) => {

        usuarios.forEach((usuario) => {

            usuario.foto = `assets/img/${usuario.id}.jpeg` //JPEG, NO JPG
            usuario.edad = Math.floor(Math.random() *30) + 20;

            // console.log(usuario.address);

            const { street, suite, city } = usuario.address;
            usuario.address = `${street}, ${suite}, ${city}`

            const usuarioDetalles = {...usuario, address: usuario.addressDetalles};

            listaUsuarios.innerHTML += `
            <div class="bloque-grande">

                <div class="bloque-pequeñu">

                    <ul>
                    <li><strong>Nombre</strong>: ${usuario.name}</li>
                    <li><strong>Edad</strong>: ${usuario.edad}</li>
                    <li><strong>Username</strong>: ${usuario.username}</li>
                    <li><strong>Teléfono</strong>: ${usuario.phone}</li>
                    <li><strong>Correo</strong>: ${usuario.email}</li>
                    </ul>

                    <img class="foto-usuario" src="${usuario.foto}" alt="Foto de usuario">
                    
                </div>

                <li><strong>Compañía</strong>: ${usuarioDetalles.company.name}</li>
                <li><strong>Dirección</strong>: ${usuarioDetalles.address}</li>

            </div>
            `
        });

    })

    .catch ((error) => {
        listaUsuarios.innerText = ('No se ha podido obtener la información')
    });

console.log('https://jsonplaceholder.typicode.com/users')
import {Testimonio} from '../models/Testimonios.js';

const guardarTestimonio = async(req, res) => {

    // Validar
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre es obligatorio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo es obligatorio'});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje no puede ir vacio'});
    }

    if(errores.length > 0) {
        // Consultar testimonios existentes
        const testimonios = await Testimonio.findAll();
        // Mostrar la vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        });
    } else {
        // Almacenarlo en DB
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimonios');
        } catch (error) {
            console.log(error)
        }

    }
}

export {
    guardarTestimonio
}
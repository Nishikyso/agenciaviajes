import { Viaje } from "../models/Viaje.js";
import { Testimonio } from "../models/Testimonios.js";	

const paginaInicio = async (req, res) => {
    // Consultar 3 viajes del modelo Viaje
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonio.findAll({ limit: 3 }));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pageName: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
};

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pageName: 'Nosotros'
    });
};    

const paginaViajes = async (req, res) => {
    // Consultar DB
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pageName: 'Próximos Viajes',
        viajes
    });
};

const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug } });
        res.render('viaje', {
            pageName: 'Información del viaje',
            viaje
        })

    } catch (error) {
        
    }
};

const paginaTestimonios = async (req, res) => {
    try {
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
            pageName: 'Testimonios',
            testimonios
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaContacto = (req, res) => {
    res.render('contacto');
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaContacto,
    paginaDetalleViaje
}
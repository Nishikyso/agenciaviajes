import express from "express";

import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimonios, 
    paginaContacto, 
    paginaDetalleViaje 
} from "../controllers/paginasController.js";

import {
    guardarTestimonio
} from "../controllers/testimonioController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimonios', paginaTestimonios);
router.post('/testimonios', guardarTestimonio);

router.get('/contacto', paginaContacto);

export default router;
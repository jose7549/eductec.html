const programasData = {
    software: {
        titulo: "Desarrollo de Software e IA",
        imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
        descripcion: "Formación en desarrollo Full-Stack, bases de datos SQL/NoSQL, APIs REST, arquitecturas Cloud e integración de IA Generativa.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación como Profesional Técnico.",
        matricula: "S/ 100.00",
        pension: "S/ 280.00 mensuales",
        temario: [
            "Ciclo I: Algoritmos & HTML5/CSS3",
            "Ciclo II: JavaScript & Bases SQL",
            "Ciclo III: React & Node.js Back-End",
            "Ciclo IV: Cloud, DevOps & IA"
        ]
    },
    administracion: {
        titulo: "Administración de Empresas",
        imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        descripcion: "Gestión corporativa moderna, finanzas, marketing digital, dirección de talento humano y logística internacional.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación como Profesional Técnico.",
        matricula: "S/ 100.00",
        pension: "S/ 250.00 mensuales",
        temario: [
            "Ciclo I: Gestión Empresarial",
            "Ciclo II: Marketing & Branding",
            "Ciclo III: Finanzas Corporativas",
            "Ciclo IV: Logística & Negocios"
        ]
    },
    redes: {
        titulo: "Redes y Telecomunicaciones",
        imagen: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        descripcion: "Diseño y gestión de redes empresariales, enrutamiento Cisco, switches, fibra óptica, Linux/Windows y VoIP.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación como Profesional Técnico.",
        matricula: "S/ 100.00",
        pension: "S/ 270.00 mensuales",
        temario: [
            "Ciclo I: Infraestructura de Redes",
            "Ciclo II: Enrutamiento Cisco CCNA",
            "Ciclo III: Linux & Windows Server",
            "Ciclo IV: Firewalls & Ciberseguridad"
        ]
    },
    ciberseguridad: {
        titulo: "Ciberseguridad y Hacking Ético",
        imagen: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        descripcion: "Protección de datos corporativos, pruebas de Pentesting, detección de vulnerabilidades y análisis forense digital.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación como Especialista.",
        matricula: "S/ 100.00",
        pension: "S/ 290.00 mensuales",
        temario: [
            "Ciclo I: Fundamentos & Linux",
            "Ciclo II: Pentesting Web Hacking",
            "Ciclo III: Análisis Vulnerabilidades",
            "Ciclo IV: Forense & ISO 27001"
        ]
    },
    diseno: {
        titulo: "Diseño Gráfico y UX/UI",
        imagen: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        descripcion: "Branding visual, diseño publicitario, experiencia de usuario (UX) e interfaces modernas (UI) con Figma y Adobe.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación como Diseñador Digital.",
        matricula: "S/ 100.00",
        pension: "S/ 260.00 mensuales",
        temario: [
            "Ciclo I: Teoría del Color & Diseño",
            "Ciclo II: Adobe Illustrator & Photoshop",
            "Ciclo III: Prototipado Figma UX/UI",
            "Ciclo IV: Diseño Web Responsive"
        ]
    },
    marketing: {
        titulo: "Marketing Digital y E-Commerce",
        imagen: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        descripcion: "Campañas Meta/Google Ads, optimización SEO, copywriting persuasivo y montaje de tiendas virtuales E-Commerce.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación en Marketing Digital.",
        matricula: "S/ 100.00",
        pension: "S/ 250.00 mensuales",
        temario: [
            "Ciclo I: Redes Sociales & Marketing",
            "Ciclo II: Estrategias SEO & Copy",
            "Ciclo III: Meta Ads & Google Ads",
            "Ciclo IV: Analítica GA4 & E-Commerce"
        ]
    },
    datos: {
        titulo: "Ciencia de Datos y Big Data",
        imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        descripcion: "Procesamiento de datos con Python, consultas SQL avanzadas, dashboards PowerBI y modelos de Machine Learning.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación como Analista de Datos.",
        matricula: "S/ 100.00",
        pension: "S/ 280.00 mensuales",
        temario: [
            "Ciclo I: Python para Datos",
            "Ciclo II: Consultas SQL Avanzadas",
            "Ciclo III: Dashboards PowerBI",
            "Ciclo IV: Machine Learning & Cloud"
        ]
    },
    contabilidad: {
        titulo: "Contabilidad y Finanzas Digitales",
        imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        descripcion: "Gestión tributaria, análisis financiero, auditoría interna, presupuestos y sistemas ERP con facturación electrónica.",
        duracion: "3 Años (6 Ciclos)",
        certificacion: "Título a Nombre de la Nación en Contabilidad.",
        matricula: "S/ 100.00",
        pension: "S/ 240.00 mensuales",
        temario: [
            "Ciclo I: Contabilidad General",
            "Ciclo II: Declaración Tributaria",
            "Ciclo III: Costos y Presupuestos",
            "Ciclo IV: ERP & Facturación Digital"
        ]
    }
};

const programasAvanzadosData = {
    prog_cloud: {
        titulo: "Arquitectura Cloud & Microservicios",
        imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        descripcion: "Orquestación de contenedores con Kubernetes, Terraform y arquitecturas serverless en AWS y Google Cloud.",
        duracion: "1 Año (2 Semestres)",
        certificacion: "Certificación Especialista Cloud.",
        matricula: "S/ 120.00",
        pension: "S/ 380.00 mensuales",
        modulos: [
            "Módulo I: Docker & Kubernetes",
            "Módulo II: Terraform & Serverless",
            "Módulo III: CI/CD & DevOps Multicloud"
        ]
    },
    prog_pentest: {
        titulo: "Pentesting & Red Teaming Avanzado",
        imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        descripcion: "Simulación de ciberataques, desarrollo de exploits, penetración en Active Directory y evasión de antivirus.",
        duracion: "1 Año (2 Semestres)",
        certificacion: "Certificación Ciberseguridad Ofensiva.",
        matricula: "S/ 120.00",
        pension: "S/ 390.00 mensuales",
        modulos: [
            "Módulo I: Exploitation & Buffer Overflow",
            "Módulo II: Active Directory Hacking",
            "Módulo III: Red Team & Evasión Antivirus"
        ]
    },
    prog_ai: {
        titulo: "Ingeniería de IA & Modelos LLM",
        imagen: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
        descripcion: "Fine-tuning de LLMs, arquitecturas RAG con bases vectoriales y creación de agentes autónomos.",
        duracion: "1 Año (2 Semestres)",
        certificacion: "Certificación Especialista IA.",
        matricula: "S/ 150.00",
        pension: "S/ 420.00 mensuales",
        modulos: [
            "Módulo I: Deep Learning & PyTorch",
            "Módulo II: Fine-Tuning LLMs & RAG",
            "Módulo III: Agentes Autónomos IA"
        ]
    }
};

const pilaresInicioData = {
    calidad: {
        titulo: "Educación de Calidad y Titulación Oficial",
        imagen: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
        subtitulo: "Programa Acreditado de Alta Exigencia Académica",
        descripcion: "Nuestra propuesta académica se basa en estándares tecnológicos globales. Mantenemos convenios de actualización de contenidos directamente con la industria.",
        cardsInfo: [
            { titulo: "Acreditación Ministerial", desc: "Títulos profesionales respaldados por el Ministerio de Educación.", color: "bg-card-blue" },
            { titulo: "Plana Docente Experta", desc: "Aprende de especialistas con más de 8 años de experiencia.", color: "bg-card-orange" },
            { titulo: "Certificados Modulares", desc: "Certificación oficial al culminar cada año académico.", color: "bg-card-yellow" },
            { titulo: "Infraestructura Moderna", desc: "Servidores y laboratorios totalmente equipados.", color: "bg-card-purple" }
        ]
    },
    oportunidades: {
        titulo: "Bolsa de Trabajo & Convenios Corporativos",
        imagen: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
        subtitulo: "Conexión Directa con las Mejores Empresas",
        descripcion: "Impulsamos tu inserción laboral. Desde el segundo ciclo accedes a postulaciones en empresas aliadas para tus prácticas preprofesionales.",
        cardsInfo: [
            { titulo: "Prácticas Desde 2do Ciclo", desc: "Comienza a laborar mientras avanzas tu carrera.", color: "bg-card-orange" },
            { titulo: "Asesoría de CV y LinkedIn", desc: "Optimiza tu perfil para impactar a los reclutadores.", color: "bg-card-blue" },
            { titulo: "Ferias de Empleo Tech", desc: "Encuentros virtuales exclusivos con líderes de RRHH.", color: "bg-card-yellow" },
            { titulo: "Red de Egresados", desc: "Conéctate con nuestra comunidad activa de egresados.", color: "bg-card-purple" }
        ]
    },
    flexible: {
        titulo: "Modalidad 100% Flexible a tu Ritmo",
        imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        subtitulo: "Estudia sin Interrumpir tu Trabajo",
        descripcion: "Diseñado para personas que trabajan. Accede a las clases grabadas y laboratorios cuando lo desees desde cualquier dispositivo.",
        cardsInfo: [
            { titulo: "Campus Virtual 24/7", desc: "Clases grabadas en Full HD y material descargable.", color: "bg-card-yellow" },
            { titulo: "Laboratorios Cloud", desc: "Practica desde tu navegador sin computadoras potentes.", color: "bg-card-purple" },
            { titulo: "Evaluación Continua", desc: "Proyectos prácticos en lugar de exámenes memorísticos.", color: "bg-card-blue" },
            { titulo: "Acompañamiento", desc: "Seguimiento constante de tutores académicos.", color: "bg-card-orange" }
        ]
    },
    soporte: {
        titulo: "Soporte Técnico y Mentorería 1 a 1",
        imagen: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        subtitulo: "Acompañamiento Constante en tu Aprendizaje",
        descripcion: "Resuelve dudas de programación y proyectos. Cuentas con atención personalizada en todo momento.",
        cardsInfo: [
            { titulo: "Sesiones Mentoreadas 1 a 1", desc: "Reuniones privadas para resolver bloqueos de código.", color: "bg-card-purple" },
            { titulo: "Comunidad en Discord", desc: "Servidor exclusivo con soporte en vivo las 24 horas.", color: "bg-card-blue" },
            { titulo: "Feedback de Código", desc: "Revisiones detalladas de tus proyectos línea por línea.", color: "bg-card-orange" },
            { titulo: "Talleres Semanales", desc: "Masterclasses de nivelación en nuevas tecnologías.", color: "bg-card-yellow" }
        ]
    }
};

function actualizarMenuActivo(idLinkActivo) {
    const ids = ['nav-inicio', 'nav-beneficios', 'nav-carreras', 'nav-avanzados', 'nav-contacto'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === idLinkActivo) {
                el.classList.add('active', 'text-white');
                el.classList.remove('text-white-50');
            } else {
                el.classList.remove('active', 'text-white');
                el.classList.add('text-white-50');
            }
        }
    });
}

function ocultarTodasLasVistas() {
    ['vista-principal', 'vista-pilar-individual', 'vista-cursos-completo', 'vista-detalle-curso', 
     'vista-beneficios-completa', 'vista-programas-avanzados', 'vista-detalle-programa', 
     'vista-contacto-completa', 'vista-suscripcion'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('d-none');
    });
}

function cambiarVista(idVista, hashUrl) {
    ocultarTodasLasVistas();
    const el = document.getElementById(idVista);
    if (el) el.classList.remove('d-none');
    if (window.location.hash !== hashUrl) {
        history.pushState({ vista: idVista, hash: hashUrl }, "", hashUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverPaginaAnterior() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        mostrarInicio();
    }
}

function mostrarInicio() {
    actualizarMenuActivo('nav-inicio');
    cambiarVista('vista-principal', '#inicio');
}

function abrirPilarIndependiente(key) {
    const p = pilaresInicioData[key];
    if (!p) return;

    actualizarMenuActivo('nav-inicio');

    let cardsHtml = p.cardsInfo.map(card => `
        <div class="col-md-6">
            <div class="card p-4 ${card.color} border-2 rounded-4 h-100 shadow-sm text-center">
                <div class="section-header-box mx-auto mb-2">
                    <i class="fas fa-check-circle"></i>
                    <h4 class="fs-6 mb-0">${card.titulo}</h4>
                </div>
                <p class="text-dark small fw-semibold mt-2 mb-0">${card.desc}</p>
            </div>
        </div>
    `).join('');

    let claseColorCard = key === 'oportunidades' ? 'bg-card-orange' : (key === 'flexible' ? 'bg-card-yellow' : (key === 'soporte' ? 'bg-card-purple' : 'bg-card-blue'));

    document.getElementById('contenido-pilar-dinamico').innerHTML = `
        <div class="mb-3">
            <button type="button" class="btn btn-volver-custom" onclick="volverPaginaAnterior()" title="Volver">
                <i class="fas fa-arrow-left"></i>
            </button>
        </div>

        <div class="box-header-negra mb-4 text-center">
            <span class="badge-pilar-header">INFORMACIÓN INSTITUCIONAL</span>
            <h1 class="titulo-destacado-main">${p.titulo}</h1>
            <p class="subtitulo-destacado-main mb-0">${p.subtitulo}</p>
        </div>

        <div class="${claseColorCard} p-4 p-md-5 rounded-4 shadow border-2 mb-4">
            <div class="row g-4 align-items-center mb-4">
                <div class="col-lg-7">
                    <div class="section-header-box">
                        <i class="fas fa-book-open"></i>
                        <h4>Detalles del Pilar Académico</h4>
                    </div>
                    <div class="sub-box-info-texto mb-3">
                        <p class="text-dark fs-5 fw-semibold lh-base mb-0">${p.descripcion}</p>
                    </div>
                </div>
                <div class="col-lg-5 text-center">
                    <img src="${p.imagen}" class="img-fluid rounded-4 shadow border-2" style="max-height: 250px; width: 100%; object-fit: cover;" alt="${p.titulo}">
                </div>
            </div>

            <div class="text-center mb-3">
                <div class="section-header-box mx-auto">
                    <i class="fas fa-star"></i>
                    <h4>Puntos Clave</h4>
                </div>
            </div>
            <div class="row g-4">${cardsHtml}</div>
        </div>
    `;

    cambiarVista('vista-pilar-individual', '#pilar-' + key);
}

function abrirDetalleCurso(cursoKey) {
    actualizarMenuActivo('nav-carreras');
    const c = programasData[cursoKey] || programasData.software;
    
    let temarioHtml = c.temario.map(t => `
        <div class="item-ciclo-malla d-flex align-items-center gap-3">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; min-width: 32px;">
                <i class="fas fa-check fs-7"></i>
            </div>
            <span class="fs-6 text-dark fw-semibold">${t}</span>
        </div>
    `).join('');

    document.getElementById('contenido-curso-dinamico').innerHTML = `
        <div class="mb-3">
            <button type="button" class="btn btn-volver-custom" onclick="volverPaginaAnterior()" title="Volver">
                <i class="fas fa-arrow-left"></i>
            </button>
        </div>

        <div class="box-header-negra mb-4 text-center">
            <span class="badge-pilar-header">CARRERA TÉCNICA PROFESIONAL</span>
            <h1 class="titulo-destacado-main">${c.titulo}</h1>
            <p class="subtitulo-destacado-main mb-0">Formación de Alta Demanda Corporativa</p>
        </div>

        <div class="bg-card-blue p-4 p-md-5 rounded-4 border-2 shadow">
            
            <div class="bg-card-yellow p-4 rounded-4 border-2 mb-4">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-7">
                        <div class="section-header-box">
                            <i class="fas fa-graduation-cap"></i>
                            <h4>Perfil Profesional</h4>
                        </div>
                        
                        <div class="sub-box-info-texto mb-3">
                            <p class="text-dark fs-6 fw-semibold lh-base mb-0">${c.descripcion}</p>
                        </div>
                        
                        <div class="sub-box-duracion">
                            <div class="mb-1 text-dark fw-bold">
                                <i class="fas fa-clock me-2"></i>Duración: <span class="badge bg-dark text-white px-2 py-1 fs-6">${c.duracion}</span>
                            </div>
                            <div class="text-dark fw-bold">
                                <i class="fas fa-award text-success me-2"></i>Certificación: <span class="text-primary">${c.certificacion}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center">
                        <img src="${c.imagen}" class="img-fluid rounded-4 shadow border-2" style="max-height: 250px; width: 100%; object-fit: cover;" alt="${c.titulo}">
                    </div>
                </div>
            </div>

            <div class="row g-4 align-items-stretch">
                <div class="col-lg-7">
                    <div class="bg-card-purple p-4 rounded-4 border-2 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div class="section-header-box">
                                <i class="fas fa-list-alt"></i>
                                <h4>Malla Curricular Detallada</h4>
                            </div>
                            <div class="sub-box-malla mt-3">
                                ${temarioHtml}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="bg-card-orange p-4 rounded-4 border-2 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div class="section-header-box w-100 justify-content-center">
                                <i class="fas fa-tag"></i>
                                <h4>Planes de Estudio & Promociones</h4>
                            </div>
                            
                            <div class="box-precio-azul-ejecutivo mb-4 text-center">
                                <div class="text-matricula fs-6 mb-1">Matrícula Única: ${c.matricula}</div>
                                <hr class="my-2 border-secondary opacity-50">
                                <div class="text-pension">${c.pension}</div>
                            </div>
                        </div>

                        <div class="d-grid gap-3 justify-content-end d-flex flex-column mt-3">
                            <button type="button" class="btn btn-primary-educatech py-3 fs-6 fw-bold rounded-3 shadow w-100" onclick="abrirModalMembresias()">
                                <i class="fas fa-gift me-2"></i> Ver Planes y Prueba Gratuita
                            </button>
                            <button type="button" class="btn btn-accent-educatech py-3 fs-6 fw-bold rounded-3 shadow w-100" onclick="abrirInscripcion('${cursoKey}')">
                                Inscribirse Ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    cambiarVista('vista-detalle-curso', '#curso-' + cursoKey);
}

// ==========================================
// MODAL DE PLANES Y MEMBRESÍAS PROFESIONAL
// ==========================================
function abrirModalMembresias() {
    let modalHtml = `
    <div class="modal fade" id="modalMembresiasOficial" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                <div class="modal-header bg-white border-bottom py-3 px-4">
                    <div>
                        <h5 class="modal-title fw-bold text-dark mb-0 fs-5"><i class="fas fa-crown text-warning me-2"></i>Planes y Suscripciones Educativas</h5>
                        <p class="text-muted small mb-0">Selecciona el nivel que mejor se adapte a tus metas profesionales.</p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4 p-md-5 bg-light">
                    
                    <div class="row g-4 align-items-stretch mb-4">
                        <!-- PLAN BÁSICO -->
                        <div class="col-md-4">
                            <div class="plan-pricing-card h-100">
                                <span class="text-muted fw-bold small text-uppercase">Prueba 14 Días</span>
                                <h4 class="fw-bold text-dark mt-1">Plan Básico</h4>
                                <div class="my-3">
                                    <span class="fs-2 fw-bold text-dark">S/ 0.00</span>
                                    <span class="text-muted small">/ 14 días</span>
                                </div>
                                <p class="text-muted small mb-4">Ideal para explorar la plataforma y evaluar los primeros contenidos del ciclo.</p>
                                <ul class="list-unstyled small mb-4 d-flex flex-column gap-2 text-secondary flex-grow-1">
                                    <li><i class="fas fa-check text-primary me-2"></i>Acceso al Módulo I completo</li>
                                    <li><i class="fas fa-check text-primary me-2"></i>Soporte comunitarios en Discord</li>
                                    <li><i class="fas fa-check text-primary me-2"></i>Evaluaciones de prueba en vivo</li>
                                </ul>
                                <button type="button" class="btn btn-outline-primary w-100 py-2.5 fw-bold rounded-3 mt-auto" data-bs-dismiss="modal" onclick="abrirPasarelaPagoDirecto('Plan Básico Gratuito', '0.00')">Empezar Prueba Gratis</button>
                            </div>
                        </div>

                        <!-- PLAN INTERMEDIO -->
                        <div class="col-md-4">
                            <div class="plan-pricing-card popular h-100">
                                <span class="plan-badge-top">Recomendado</span>
                                <span class="text-primary fw-bold small text-uppercase">Suscripción Estándar</span>
                                <h4 class="fw-bold text-dark mt-1">Plan Intermedio</h4>
                                <div class="my-3">
                                    <span class="fs-2 fw-bold text-primary">S/ 12.00</span>
                                    <span class="text-muted small"> / $3.00 mes</span>
                                </div>
                                <p class="text-muted small mb-4">Para estudiantes que desean avanzar a ritmo constante en los ciclos I, II y III.</p>
                                <ul class="list-unstyled small mb-4 d-flex flex-column gap-2 text-secondary flex-grow-1">
                                    <li><i class="fas fa-check text-primary me-2"></i>Acceso a Ciclos I, II y III</li>
                                    <li><i class="fas fa-check text-primary me-2"></i>Certificados modulares por ciclo</li>
                                    <li><i class="fas fa-check text-primary me-2"></i>Laboratorios interactivos Cloud</li>
                                    <li><i class="fas fa-check text-primary me-2"></i>Tutorías grupales semanales</li>
                                </ul>
                                <button type="button" class="btn btn-primary w-100 py-2.5 fw-bold rounded-3 mt-auto shadow-sm" data-bs-dismiss="modal" onclick="abrirPasarelaPagoDirecto('Plan Intermedio', '12.00')">Seleccionar Plan</button>
                            </div>
                        </div>

                        <!-- PLAN PRO / PLUS -->
                        <div class="col-md-4">
                            <div class="plan-pricing-card h-100">
                                <span class="text-warning fw-bold small text-uppercase"><i class="fas fa-star me-1"></i>Acceso Total</span>
                                <h4 class="fw-bold text-dark mt-1">Plan Plus / Pro</h4>
                                <div class="my-3">
                                    <span class="fs-2 fw-bold text-dark">S/ 16.00</span>
                                    <span class="text-muted small"> / $4.50 mes</span>
                                </div>
                                <p class="text-muted small mb-4">Desbloquea todos los 6 ciclos completos, proyectos prácticos y mentorías 1 a 1.</p>
                                <ul class="list-unstyled small mb-4 d-flex flex-column gap-2 text-secondary flex-grow-1">
                                    <li><i class="fas fa-check text-success me-2"></i>Acceso Ilimitado Ciclos I al VI</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Titulación Oficial a la Nación</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Mentorías 1 a 1 privadas con profesores</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Bolsa de trabajo exclusiva</li>
                                </ul>
                                <button type="button" class="btn btn-dark w-100 py-2.5 fw-bold rounded-3 mt-auto" data-bs-dismiss="modal" onclick="abrirPasarelaPagoDirecto('Plan Plus Pro', '16.00')">Obtener Plan Pro</button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-4 border">
                        <div class="row align-items-center g-3">
                            <div class="col-md-8">
                                <h6 class="fw-bold text-dark mb-1"><i class="fas fa-percentage text-success me-2"></i>Pase Anual Promocional - Ahorra un 30%</h6>
                                <p class="text-muted small mb-0">Acceso a toda la carrera por 12 meses en un solo pago sin mensualidades adicionales.</p>
                            </div>
                            <div class="col-md-4 text-md-end">
                                <button type="button" class="btn btn-success px-4 py-2.5 fw-bold rounded-3 text-white shadow-sm" data-bs-dismiss="modal" onclick="abrirPasarelaPagoDirecto('Pase Anual Completo', '280.00')">Pagar Anual (S/ 280.00)</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>`;

    let modalExistente = document.getElementById('modalMembresiasOficial');
    if (modalExistente) modalExistente.remove();

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    new bootstrap.Modal(document.getElementById('modalMembresiasOficial')).show();
}

// ==========================================
// PASARELA DE PAGO INTERACTIVA CÓDIGO 2026
// ==========================================
let montoPlanSeleccionado = "100.00";
let nombrePlanSeleccionado = "Matrícula General";

function abrirPasarelaPagoDirecto(nombrePlan, monto) {
    nombrePlanSeleccionado = nombrePlan;
    montoPlanSeleccionado = monto;
    
    let pasarelaHtml = `
    <div class="modal fade" id="modalPasarelaOficialTech" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
                
                <div class="modal-header bg-white border-bottom py-3 px-4">
                    <div class="d-flex align-items-center gap-2">
                        <div class="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px;">
                            <i class="fas fa-lock fs-6"></i>
                        </div>
                        <h5 class="modal-title fw-bold text-dark fs-6 mb-0">Checkout Seguro - EducaTech</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body p-4 p-md-5 bg-white">
                    <div class="row g-4">
                        
                        <!-- COLUMNA IZQUIERDA: RESUMEN -->
                        <div class="col-md-5 border-end pe-md-4">
                            <h6 class="fw-bold text-dark mb-3">Resumen de la Orden</h6>
                            
                            <div class="p-3 bg-light rounded-3 mb-3 border">
                                <span class="badge bg-primary-subtle text-primary fw-bold mb-1">Seleccionado</span>
                                <h6 class="fw-bold text-dark mb-1">${nombrePlanSeleccionado}</h6>
                                <p class="text-muted small mb-0">Acceso inmediato tras confirmación.</p>
                            </div>

                            <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                                <span class="text-secondary small">Subtotal:</span>
                                <span class="fw-semibold text-dark small">S/ ${montoPlanSeleccionado}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                                <span class="text-secondary small">Impuestos (IGV 18%):</span>
                                <span class="fw-semibold text-dark small">Incluido</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center py-3">
                                <span class="fw-bold text-dark">Total a Pagar:</span>
                                <span class="fw-bold fs-4 text-primary">S/ ${montoPlanSeleccionado}</span>
                            </div>

                            <div class="p-3 bg-primary-subtle rounded-3 text-primary small d-flex gap-2 align-items-center mt-2">
                                <i class="fas fa-shield-alt fs-5"></i>
                                <span>Encriptación de 256 bits garantizada para tus datos financieros.</span>
                            </div>
                        </div>

                        <!-- COLUMNA DERECHA: MÉTODOS Y FORMULARIOS -->
                        <div class="col-md-7 ps-md-4">
                            <h6 class="fw-bold text-dark mb-3">Selecciona tu Método de Pago</h6>
                            
                            <div class="d-flex flex-column gap-2 mb-4">
                                <div class="checkout-method-card active" id="btn-metodo-tarjeta" onclick="seleccionarMetodoCheckout('tarjeta', this)">
                                    <div class="method-radio"></div>
                                    <i class="far fa-credit-card fs-5 text-primary"></i>
                                    <div class="flex-grow-1">
                                        <div class="fw-bold text-dark small">Tarjeta Crédito / Débito</div>
                                        <div class="text-muted fs-7">Visa, Mastercard, Amex</div>
                                    </div>
                                </div>

                                <div class="checkout-method-card" id="btn-metodo-paypal" onclick="seleccionarMetodoCheckout('paypal', this)">
                                    <div class="method-radio"></div>
                                    <i class="fab fa-paypal fs-5 text-info"></i>
                                    <div class="flex-grow-1">
                                        <div class="fw-bold text-dark small">PayPal</div>
                                        <div class="text-muted fs-7">Saldo o tarjeta asociada</div>
                                    </div>
                                </div>

                                <div class="checkout-method-card" id="btn-metodo-playstore" onclick="seleccionarMetodoCheckout('playstore', this)">
                                    <div class="method-radio"></div>
                                    <i class="fab fa-google-play fs-5 text-success"></i>
                                    <div class="flex-grow-1">
                                        <div class="fw-bold text-dark small">Google Play Billing</div>
                                        <div class="text-muted fs-7">Facturación Android vinculada</div>
                                    </div>
                                </div>

                                <div class="checkout-method-card" id="btn-metodo-pagoefectivo" onclick="seleccionarMetodoCheckout('pagoefectivo', this)">
                                    <div class="method-radio"></div>
                                    <i class="fas fa-barcode fs-5 text-warning"></i>
                                    <div class="flex-grow-1">
                                        <div class="fw-bold text-dark small">PagoEfectivo / CIP</div>
                                        <div class="text-muted fs-7">BCP, BBVA, Interbank, Yape</div>
                                    </div>
                                </div>
                            </div>

                            <div id="alertaCheckoutContenedor"></div>

                            <!-- FORMULARIO 1: TARJETA DE CRÉDITO / DÉBITO -->
                            <div id="formCheckoutTarjeta" class="checkout-form-panel">
                                <div class="mb-3">
                                    <label class="form-label small fw-semibold text-dark">Número de Tarjeta</label>
                                    <div class="input-group">
                                        <span class="input-group-text bg-light border-end-0"><i class="far fa-credit-card text-muted"></i></span>
                                        <input type="text" class="form-control border-start-0" placeholder="1234 5678 9101 1121" maxlength="19">
                                    </div>
                                </div>
                                <div class="row g-2 mb-3">
                                    <div class="col-6">
                                        <label class="form-label small fw-semibold text-dark">Expiración (MM/AA)</label>
                                        <input type="text" class="form-control" placeholder="08/28" maxlength="5">
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label small fw-semibold text-dark">CVC / CVV</label>
                                        <input type="password" class="form-control" placeholder="123" maxlength="4">
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="form-label small fw-semibold text-dark">Titular de la Tarjeta</label>
                                    <input type="text" class="form-control" placeholder="Nombre completo">
                                </div>
                                <button type="button" class="btn btn-primary w-100 py-3 fw-bold rounded-3 shadow-sm" onclick="procesarPagoExitosoFinal()">Completar Pago S/ ${montoPlanSeleccionado}</button>
                            </div>

                            <!-- FORMULARIO 2: PAYPAL -->
                            <div id="formCheckoutPaypal" class="checkout-form-panel d-none text-center py-2">
                                <i class="fab fa-paypal text-info fa-3x mb-2"></i>
                                <h6 class="fw-bold text-dark">Inicia sesión en PayPal</h6>
                                <p class="text-muted small mb-3">Ingresa tu correo para ser redirigido a la ventana de confirmación oficial.</p>
                                <div class="mb-3 text-start">
                                    <label class="form-label small fw-semibold text-dark">Correo Electrónico de PayPal</label>
                                    <input type="email" class="form-control" placeholder="usuario@paypal.com">
                                </div>
                                <button type="button" class="btn btn-info text-white w-100 py-3 fw-bold rounded-3 shadow-sm" onclick="procesarPagoExitosoFinal()"><i class="fab fa-paypal me-2"></i>Pagar con PayPal</button>
                            </div>

                            <!-- FORMULARIO 3: GOOGLE PLAY BILLING -->
                            <div id="formCheckoutPlaystore" class="checkout-form-panel d-none text-center py-2">
                                <i class="fab fa-google-play text-success fa-3x mb-2"></i>
                                <h6 class="fw-bold text-dark">Google Play Store Checkout</h6>
                                <p class="text-muted small mb-3">Confirma tu correo para autenticar la compra con tu saldo o métodos de Google.</p>
                                <div class="mb-3 text-start">
                                    <label class="form-label small fw-semibold text-dark">Cuenta de Google Play</label>
                                    <input type="email" class="form-control" placeholder="usuario@gmail.com">
                                </div>
                                <button type="button" class="btn btn-success w-100 py-3 fw-bold rounded-3 shadow-sm text-white" onclick="procesarPagoExitosoFinal()"><i class="fab fa-google-play me-2"></i>Pagar con 1-Tap Google Play</button>
                            </div>

                            <!-- FORMULARIO 4: PAGOEFECTIVO -->
                            <div id="formCheckoutPagoefectivo" class="checkout-form-panel d-none text-center py-2">
                                <div class="p-3 bg-light rounded-3 border mb-3">
                                    <i class="fas fa-barcode fs-2 text-warning mb-2"></i>
                                    <h6 class="fw-bold text-dark mb-1">Código de Pago CIP</h6>
                                    <span class="badge bg-dark fs-6 px-3 py-2 text-warning fw-mono">CIP-9821034</span>
                                    <p class="text-muted small mt-2 mb-0">Paga desde tu Banca Móvil o Agente Autorizado.</p>
                                </div>
                                <button type="button" class="btn btn-warning w-100 py-3 fw-bold rounded-3 shadow-sm text-dark" onclick="procesarPagoExitosoFinal()"><i class="fas fa-check-circle me-2"></i>Confirmar Pago Realizado</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    let modalAnt = document.getElementById('modalPasarelaOficialTech');
    if (modalAnt) modalAnt.remove();

    document.body.insertAdjacentHTML('beforeend', pasarelaHtml);
    new bootstrap.Modal(document.getElementById('modalPasarelaOficialTech')).show();
}

function seleccionarMetodoCheckout(metodo, btnElement) {
    document.querySelectorAll('.checkout-method-card').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    const fTarjeta = document.getElementById('formCheckoutTarjeta');
    const fPaypal = document.getElementById('formCheckoutPaypal');
    const fPlaystore = document.getElementById('formCheckoutPlaystore');
    const fPagoefectivo = document.getElementById('formCheckoutPagoefectivo');

    if (fTarjeta) fTarjeta.classList.add('d-none');
    if (fPaypal) fPaypal.classList.add('d-none');
    if (fPlaystore) fPlaystore.classList.add('d-none');
    if (fPagoefectivo) fPagoefectivo.classList.add('d-none');

    if (metodo === 'tarjeta' && fTarjeta) fTarjeta.classList.remove('d-none');
    if (metodo === 'paypal' && fPaypal) fPaypal.classList.remove('d-none');
    if (metodo === 'playstore' && fPlaystore) fPlaystore.classList.remove('d-none');
    if (metodo === 'pagoefectivo' && fPagoefectivo) fPagoefectivo.classList.remove('d-none');
}

function procesarPagoExitosoFinal() {
    const contenedor = document.getElementById('alertaCheckoutContenedor');
    contenedor.innerHTML = `
        <div class="alert alert-info d-flex align-items-center gap-2 mb-3" role="alert">
            <div class="spinner-border spinner-border-sm text-info" role="status"></div>
            <div class="small fw-semibold">Procesando pago con pasarela...</div>
        </div>
    `;

    setTimeout(() => {
        contenedor.innerHTML = `
            <div class="alert alert-success fw-semibold text-center mb-3 small" role="alert">
                <i class="fas fa-check-circle me-1"></i> ¡Pago procesado con éxito!
            </div>
        `;
        setTimeout(() => {
            const modalEl = document.getElementById('modalPasarelaOficialTech');
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) modalInstance.hide();
            mostrarInicio();
        }, 1500);
    }, 1200);
}

function verCursosCompletos() {
    actualizarMenuActivo('nav-carreras');
    const contenedor = document.getElementById('contenedor-8-cursos-grid');
    contenedor.innerHTML = "";

    const estilosColores = ['bg-card-blue', 'bg-card-orange', 'bg-card-yellow', 'bg-card-purple'];
    let index = 0;

    for (let key in programasData) {
        const c = programasData[key];
        const colorClase = estilosColores[index % estilosColores.length];
        index++;

        contenedor.innerHTML += `
            <div class="col-md-4">
                <div class="card card-carrera-item h-100 ${colorClase} overflow-hidden text-center">
                    <img src="${c.imagen}" class="card-img-top" alt="${c.titulo}">
                    <div class="card-body d-flex flex-column p-4">
                        <span class="badge bg-dark text-warning mb-2 align-self-center fw-bold px-3 py-1">${c.duracion}</span>
                        <h4 class="fw-bold text-dark fs-5 mb-2">${c.titulo}</h4>
                        
                        <div class="sub-box-info-texto mb-3 flex-grow-1">
                            <p class="text-dark small mb-0 fw-semibold">${c.descripcion}</p>
                        </div>
                        
                        <div class="box-precio-azul-ejecutivo py-2 px-3 mb-3 text-center">
                            <div class="small fw-bold text-warning mb-0">Matrícula: ${c.matricula}</div>
                            <div class="fw-bold fs-5 text-white">${c.pension}</div>
                        </div>

                        <div class="d-flex gap-2 mt-auto justify-content-center">
                            <button type="button" class="btn btn-primary-educatech btn-sm w-50 py-2 fw-semibold rounded-3 shadow-sm" onclick="abrirDetalleCurso('${key}')">Ver Temario</button>
                            <button type="button" class="btn btn-accent-educatech btn-sm w-50 py-2 fw-semibold rounded-3 shadow-sm" onclick="abrirInscripcion('${key}')">Inscríbete</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    cambiarVista('vista-cursos-completo', '#carreras');
}

function abrirDetallePrograma(key) {
    actualizarMenuActivo('nav-avanzados');
    const prog = programasAvanzadosData[key] || programasAvanzadosData.prog_cloud;
    
    let modulosHtml = prog.modulos.map(m => `
        <div class="item-ciclo-malla d-flex align-items-center gap-3">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; min-width: 32px;">
                <i class="fas fa-check fs-7"></i>
            </div>
            <span class="fs-6 text-dark fw-semibold">${m}</span>
        </div>
    `).join('');

    document.getElementById('contenido-programa-dinamico').innerHTML = `
        <div class="mb-3">
            <button type="button" class="btn btn-volver-custom" onclick="volverPaginaAnterior()" title="Volver">
                <i class="fas fa-arrow-left"></i>
            </button>
        </div>

        <div class="box-header-negra mb-4 text-center">
            <span class="badge-pilar-header">ESPECIALIZACIÓN AVANZADA</span>
            <h1 class="titulo-destacado-main">${prog.titulo}</h1>
            <p class="subtitulo-destacado-main mb-0">Programa de Alto Nivel con Laboratorios en Vivo</p>
        </div>

        <div class="bg-card-purple p-4 p-md-5 rounded-4 border-2 shadow">
            
            <div class="bg-card-blue p-4 rounded-4 border-2 mb-4">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-7">
                        <div class="section-header-box">
                            <i class="fas fa-rocket"></i>
                            <h4>Alcance del Programa</h4>
                        </div>
                        
                        <div class="sub-box-info-texto mb-3">
                            <p class="text-dark fs-6 fw-semibold lh-base mb-0">${prog.descripcion}</p>
                        </div>
                        
                        <div class="sub-box-duracion">
                            <div class="mb-1 text-dark fw-bold"><i class="fas fa-clock me-2"></i>Duración: ${prog.duracion}</div>
                            <div class="text-dark fw-bold"><i class="fas fa-award text-success me-2"></i>Certificación: ${prog.certificacion}</div>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center">
                        <img src="${prog.imagen}" class="img-fluid rounded-4 shadow border-2" style="max-height: 250px; width: 100%; object-fit: cover;" alt="${prog.titulo}">
                    </div>
                </div>
            </div>

            <div class="row g-4 align-items-stretch">
                <div class="col-lg-7">
                    <div class="bg-card-yellow p-4 rounded-4 border-2 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div class="section-header-box">
                                <i class="fas fa-layer-group"></i>
                                <h4>Módulos Especializados</h4>
                            </div>
                            <div class="sub-box-malla mt-3">${modulosHtml}</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="bg-card-orange p-4 rounded-4 border-2 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <div class="section-header-box w-100 justify-content-center">
                                <i class="fas fa-coins"></i>
                                <h4>Inversión & Planes</h4>
                            </div>
                            
                            <div class="box-precio-azul-ejecutivo mb-4 text-center">
                                <div class="text-matricula fs-6 mb-1">Matrícula: ${prog.matricula}</div>
                                <hr class="my-2 border-secondary opacity-50">
                                <div class="text-pension">${prog.pension}</div>
                            </div>
                        </div>

                        <div class="d-grid gap-3 justify-content-end d-flex flex-column mt-3">
                            <button type="button" class="btn btn-primary-educatech py-3 fs-6 fw-bold rounded-3 shadow w-100" onclick="abrirModalMembresias()">
                                <i class="fas fa-gift me-2"></i> Ver Planes y Prueba Gratuita
                            </button>
                            <button type="button" class="btn btn-accent-educatech py-3 fs-6 fw-bold rounded-3 shadow w-100" onclick="abrirInscripcion('${key}')">
                                Postular al Programa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    cambiarVista('vista-detalle-programa', '#programa-' + key);
}

function verPaginaBeneficios() {
    actualizarMenuActivo('nav-beneficios');
    cambiarVista('vista-beneficios-completa', '#beneficios');
}

function verProgramasAvanzados() {
    actualizarMenuActivo('nav-avanzados');
    const contenedor = document.getElementById('contenedor-programas-avanzados-grid');
    contenedor.innerHTML = "";

    const estilosColores = ['bg-card-blue', 'bg-card-orange', 'bg-card-yellow', 'bg-card-purple'];
    let index = 0;

    for (let key in programasAvanzadosData) {
        const prog = programasAvanzadosData[key];
        const colorClase = estilosColores[index % estilosColores.length];
        index++;

        contenedor.innerHTML += `
            <div class="col-md-4">
                <div class="card card-carrera-item h-100 ${colorClase} overflow-hidden text-center">
                    <img src="${prog.imagen}" class="card-img-top" alt="${prog.titulo}">
                    <div class="card-body d-flex flex-column p-4">
                        <span class="badge bg-dark text-warning mb-2 align-self-center fw-bold px-3 py-1">${prog.duracion}</span>
                        <h4 class="fw-bold text-dark fs-5 mb-2">${prog.titulo}</h4>
                        
                        <div class="sub-box-info-texto mb-3 flex-grow-1">
                            <p class="text-dark small mb-0 fw-semibold">${prog.descripcion}</p>
                        </div>
                        
                        <div class="box-precio-azul-ejecutivo py-2 px-3 mb-3 text-center">
                            <div class="small fw-bold text-warning mb-0">Matrícula: ${prog.matricula}</div>
                            <div class="fw-bold fs-5 text-white">${prog.pension}</div>
                        </div>

                        <button type="button" class="btn btn-primary-educatech btn-sm w-100 py-2 fw-semibold rounded-3 shadow-sm mt-auto" onclick="abrirDetallePrograma('${key}')">Ver Malla Curricular</button>
                    </div>
                </div>
            </div>
        `;
    }
    cambiarVista('vista-programas-avanzados', '#especializaciones');
}

function verPaginaContacto() {
    actualizarMenuActivo('nav-contacto');
    cambiarVista('vista-contacto-completa', '#contacto');
}

function abrirInscripcion(opcionKey) {
    actualizarMenuActivo('');
    const select = document.getElementById('programaPago');
    if (select) {
        select.innerHTML = "";
        for (let k in programasData) select.innerHTML += `<option value="${k}">Carrera: ${programasData[k].titulo}</option>`;
        for (let k in programasAvanzadosData) select.innerHTML += `<option value="${k}">Especialización: ${programasAvanzadosData[k].titulo}</option>`;
        if (opcionKey && (programasData[opcionKey] || programasAvanzadosData[opcionKey])) select.value = opcionKey;
    }
    cambiarVista('vista-suscripcion', '#matricula');
}

function guardarRegistro(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    document.getElementById('mensajeAlerta').innerHTML = `
        <div class="alert alert-success rounded-3 shadow-sm py-2 small mb-3 fw-bold">
            <i class="fas fa-check-circle me-1"></i> ¡Registro exitoso, <strong>${nombre}</strong>! Un asesor se comunicará contigo.
        </div>
    `;
    e.target.reset();
}

function procesarRutaActual() {
    const hash = window.location.hash;
    if (hash === '#carreras') {
        verCursosCompletos();
    } else if (hash.startsWith('#curso-')) {
        abrirDetalleCurso(hash.replace('#curso-', ''));
    } else if (hash.startsWith('#pilar-')) {
        abrirPilarIndependiente(hash.replace('#pilar-', ''));
    } else if (hash === '#beneficios') {
        verPaginaBeneficios();
    } else if (hash === '#especializaciones') {
        verProgramasAvanzados();
    } else if (hash.startsWith('#programa-')) {
        abrirDetallePrograma(hash.replace('#programa-', ''));
    } else if (hash === '#contacto') {
        verPaginaContacto();
    } else if (hash === '#matricula') {
        abrirInscripcion('general');
    } else {
        mostrarInicio();
    }
}

window.addEventListener('popstate', procesarRutaActual);
window.addEventListener('DOMContentLoaded', procesarRutaActual);
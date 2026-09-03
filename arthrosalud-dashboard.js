const MODULOS = [
  { id:'admision', nombre:'Admisión', icono:'🧑‍💼', color:'#fde9d0', activo:true,
    kpis:[['24','Pacientes hoy'],['5','En espera'],['3','Nuevas citas']],
    columnas:['Paciente','DNI','Médico','Hora','Estado'],
    filas:[
      ['María Torres','45871203','Dr. Salazar','09:00','ok'],
      ['Jorge Ramírez','40012398','Dra. Vidal','09:30','pendiente'],
      ['Lucía Peña','38891122','Dr. Salazar','10:15','pendiente'],
      ['Carlos Díaz','41234567','Dra. Vidal','11:00','ok'],
    ], estados:['Atendido','En espera','En espera','Atendido']},

  { id:'caja', nombre:'Caja', icono:'💵', color:'#e6f4ea', activo:true,
    kpis:[['S/ 8,420','Ingresos hoy'],['12','Transacciones'],['S/ 60','Pendiente cobro']],
    columnas:['N° Comprobante','Paciente','Concepto','Monto','Estado'],
    filas:[
      ['B001-0231','María Torres','Consulta','S/ 80.00','ok'],
      ['B001-0232','Jorge Ramírez','Rayos X','S/ 120.00','ok'],
      ['B001-0233','Lucía Peña','Terapia','S/ 60.00','pendiente'],
    ], estados:['Pagado','Pagado','Pendiente']},

  { id:'farmacia', nombre:'Farmacia', icono:'💊', color:'#fde3e3', activo:true,
    kpis:[['312','Ítems en stock'],['14','Stock bajo'],['S/ 2,100','Ventas hoy']],
    columnas:['Producto','Lote','Stock','Vencimiento','Estado'],
    filas:[
      ['Paracetamol 500mg','L-2201','120','12/2027','ok'],
      ['Ibuprofeno 400mg','L-1187','8','06/2026','alerta'],
      ['Venda elástica 10cm','L-0932','45','—','ok'],
    ], estados:['Óptimo','Stock bajo','Óptimo']},

  { id:'logistica', nombre:'Logística', icono:'📦', color:'#e6f0fb', activo:true,
    kpis:[['18','Órdenes activas'],['4','En tránsito'],['2','Retrasadas']],
    columnas:['Orden','Proveedor','Ítems','Fecha','Estado'],
    filas:[
      ['OC-0451','MedSupply SAC','24','28/08/2026','ok'],
      ['OC-0452','FarmaDistrib','10','30/08/2026','pendiente'],
      ['OC-0453','Insumos Perú','36','25/08/2026','alerta'],
    ], estados:['Recibido','En tránsito','Retrasado']},

  { id:'quirurgico', nombre:'Centro Quirúrgico', icono:'🏥', color:'#e6f0fb', activo:true,
    kpis:[['3','Cirugías hoy'],['1','En sala'],['5','Programadas semana']],
    columnas:['Paciente','Procedimiento','Cirujano','Hora','Estado'],
    filas:[
      ['Ana Fuentes','Artroscopia rodilla','Dr. Salazar','08:00','ok'],
      ['Pedro León','Reemplazo de cadera','Dra. Vidal','11:30','pendiente'],
    ], estados:['Completada','Programada']},

  { id:'prequirurgico', nombre:'Centro Pre Quirúrgico', icono:'🫀', color:'#fdeecb', activo:true,
    kpis:[['5','Evaluaciones hoy'],['2','Aptos'],['1','Observado']],
    columnas:['Paciente','Cirugía prevista','Evaluación','Fecha','Estado'],
    filas:[
      ['Ana Fuentes','Artroscopia rodilla','Cardiológica','27/08/2026','ok'],
      ['Pedro León','Reemplazo cadera','Anestesiológica','28/08/2026','pendiente'],
    ], estados:['Apto','En evaluación']},

  { id:'facturacion', nombre:'Facturación', icono:'🧾', color:'#fdeecb', activo:true,
    kpis:[['S/ 15,300','Facturado hoy'],['9','Por facturar'],['1','Con observación']],
    columnas:['N° Factura','Paciente','Total','Fecha','Estado'],
    filas:[
      ['F001-1123','María Torres','S/ 80.00','01/09/2026','ok'],
      ['F001-1124','Jorge Ramírez','S/ 120.00','01/09/2026','pendiente'],
    ], estados:['Emitida','Pendiente']},

  { id:'emergencia', nombre:'Emergencia', icono:'🚑', color:'#fde3e3', activo:true,
    kpis:[['4','Casos activos'],['1','Crítico'],['12','Atendidos hoy']],
    columnas:['Paciente','Triaje','Motivo','Hora ingreso','Estado'],
    filas:[
      ['Rosa Campos','Rojo','Fractura expuesta','07:40','alerta'],
      ['Iván Cortez','Amarillo','Esguince','08:10','pendiente'],
      ['Nadia Ruiz','Verde','Dolor lumbar','08:50','ok'],
    ], estados:['Crítico','En observación','Estable']},

  { id:'sig', nombre:'Sig', icono:'📊', color:'#e6f0fb', activo:true,
    kpis:[['6','Reportes disponibles'],['3','Indicadores en rojo'],['92%','Cumplimiento']],
    columnas:['Indicador','Área','Valor actual','Meta','Estado'],
    filas:[
      ['Tiempo de espera','Admisión','18 min','15 min','pendiente'],
      ['Ocupación de camas','Hospitalización','78%','85%','ok'],
      ['Rotación de stock','Farmacia','1.2x','1.5x','alerta'],
    ], estados:['Sobre meta','En meta','Bajo meta']},

  { id:'seguridad', nombre:'Seguridad', icono:'🔒', color:'#e9e9f5', activo:true,
    kpis:[['8','Usuarios activos'],['4','Roles configurados'],['0','Alertas críticas']],
    columnas:['Usuario','Rol','Último acceso','Estado'],
    filas:[['AMACEDO','Administrador','Hoy, 08:42','ok'],['MROJAS','Admisión','Ayer, 17:20','ok'],['JQUISPE','Farmacia','01/09/2026','pendiente']], estados:['Activo','Activo','Revisar']},
  { id:'honorarios', nombre:'Honorarios', icono:'🔒', color:'#e9e9f5', activo:true,
    kpis:[['S/ 42,800','Por liquidar'],['18','Profesionales'],['3','Pendientes de revisión']],
    columnas:['Profesional','Especialidad','Periodo','Estado'],
    filas:[['Dr. Salazar','Traumatología','Agosto 2026','ok'],['Dra. Vidal','Ortopedia','Agosto 2026','pendiente'],['Dr. Paredes','Anestesiología','Agosto 2026','ok']], estados:['Liquidado','En revisión','Liquidado']},

  { id:'hospitalizacion', nombre:'Hospitalización', icono:'🛏️', color:'#e6f0fb', activo:true,
    kpis:[['22','Camas ocupadas'],['6','Camas libres'],['2','Altas hoy']],
    columnas:['Paciente','Habitación','Médico tratante','Días internado','Estado'],
    filas:[
      ['Pedro León','304-B','Dra. Vidal','1','pendiente'],
      ['Rosa Campos','108-A','Dr. Salazar','3','alerta'],
    ], estados:['Estable','En observación']},

  { id:'laboratorio', nombre:'Laboratorio', icono:'🧪', color:'#e6f4ea', activo:true,
    kpis:[['31','Muestras hoy'],['4','Resultados críticos'],['27','Entregados']],
    columnas:['Paciente','Examen','Muestra tomada','Resultado','Estado'],
    filas:[
      ['María Torres','Hemograma completo','08:15','Disponible','ok'],
      ['Nadia Ruiz','Perfil lipídico','08:40','En proceso','pendiente'],
      ['Iván Cortez','Radiografía / análisis','09:00','Valor crítico','alerta'],
    ], estados:['Entregado','En proceso','Requiere revisión']},
];

// Menús internos reales del módulo Admisión (submódulos)
const MENU_ADMISION = [
  { nombre:'Ficheros', items:[
    {t:'Consultorios'}, {t:'Especialidades'}, {t:'Kit Farmacia'}, {t:'Iafas'},
    {t:'Profesional Asistencial'}, {t:'Turnos'}, {t:'Tarifario'}
  ]},
  { nombre:'Pacientes', items:[
    {t:'Historia Clínica'}, {t:'Admisión'}, {t:'Consulta Atenciones'}, {t:'Consultar Hce'},
    {t:'Call Center'}, {t:'Atenciones', acento:true}, {t:'Órdenes De Internamiento', acento:true},
    {t:'Sustento Carta Garantia', acento:true}, {t:'Interconsultas Y Recitas', acento:true}
  ]},
  { nombre:'Citas', items:[
    {t:'Agenda'}, {t:'Agenda Médica'}, {t:'Programación', acento:true}, {t:'Citas Por Paciente', acento:true},
    {t:'Citados Por Módulo', acento:true}
  ]},
  { nombre:'Ex. Auxiliar', items:[
    {t:'Imagenologia'}, {t:'Órdenes'}, {t:'Laboratorio'}, {t:'Consulta Descanso Medicos'}
  ]},
  { nombre:'Farmacia', items:[
    {t:'Stock', acento:true}, {t:'Registro Y Pago', acento:true}, {t:'Recetas De Tópico/consultorio', acento:true},
    {t:'Venta Sin Admisión', acento:true}, {t:'Consulta Atenciones'}, {t:'Atender Kit De Farmacia'}
  ]},
  { nombre:'Caja', items:[] },
  { nombre:'Documentos', items:[
    {t:'Consentimientos Informados'}
  ]},
];

const MENU_CAJA = [
  { nombre:'Caja', items:[
    {t:'Registros'}, {t:'Apertura'}, {t:'Cierre'}
  ]},
  { nombre:'Comprobante', items:[
    {t:'Comprobantes'}
  ]},
  { nombre:'Consumo', items:[
    {t:'Pago'}, {t:'Registrar'}, {t:'Registro Y Pago'}, {t:'Nota De Crédito'}, {t:'Venta Sin Admisión'}
  ]},
  { nombre:'Ficheros', items:[
    {t:'Medios De Pago'}, {t:'Cajas'}, {t:'Tipo Comprobante'}, {t:'Series De Comprobantes'},
    {t:'Tarjetas'}, {t:'Concepto Nota De Crédito'}, {t:'Tipo De Cambio'}
  ]}
];

const MENU_LOGISTICA = [
  { nombre:'Procesos', items:[
    {t:'Requerimientos'}, {t:'Órdenes De Compra'}, {t:'Recepciones'}
  ]},
  { nombre:'Almacén', items:[
    {t:'Inventario'}, {t:'Saldo Inicial'}
  ]},
  { nombre:'Ficheros', items:[
    {t:'Productos'}, {t:'Tipos Familias Subfamilias'}, {t:'Proveedores'},
    {t:'Centros De Costo'}, {t:'Almacenes'}, {t:'Partidas Presupuestales'}, {t:'Distribución Recurrente'}
  ]},
  { nombre:'Reportes', items:[
    {t:'Stock Y Kardex'}, {t:'Movimientos'}
  ]}
];

const MENU_QUIRURGICO = [
  { nombre:'Ficheros', items:[] },
  { nombre:'Documentos', items:[
    {t:'Consentimientos Informados'}
  ]},
  { nombre:'Procesos', items:[
    {t:'Programación De Salas'}, {t:'Atención Centro Quirúrgico'}
  ]}
];

const MENU_PREQUIRURGICO = [
  { nombre:'Historia Clínica', items:[] },
  { nombre:'Cardiología', items:[
    {t:'Riesgo Cardiológico'}
  ]},
  { nombre:'Anestesiología', items:[
    {t:'Pre Anestesia'}
  ]},
  { nombre:'Documentos', items:[
    {t:'Consentimientos Informados'}
  ]}
];

const MENU_FACTURACION = [
  { nombre:'Procesos', items:[
    {t:'Atenciones'}, {t:'Liquidación'}, {t:'Lotes'}
  ]}
];

const MENU_SIG = [
  { nombre:'Auditoría/producción', items:[] },
  { nombre:'Admisión/consultorios', items:[] },
  { nombre:'Producción', items:[
    {t:'Producción Ambulatoria Por Producto'}, {t:'Revisión De Exámenes Auxiliares'},
    {t:'Reporte De Atenciones'}, {t:'Evaluación De Proveedores (Admin)'}, {t:'Facturas No Pagadas'},
    {t:'Citas Atendidas Y Anuladas'}, {t:'Reporte De Deserción'}, {t:'Evaluación De Proveedores'}
  ]},
  { nombre:'Centro Quirúrgico', items:[
    {t:'Programación De Salas'}
  ]}
];

const MENU_LABORATORIO = [
  { nombre:'Laboratorio', items:[
    {t:'Orden Laboratorio'}
  ]},
  { nombre:'Patología', items:[
    {t:'Patología'}
  ]}
];

const MENU_HONORARIOS = [
  { nombre:'Ficheros', items:[
    {t:'Honorarios'}
  ]},
  { nombre:'Procesar', items:[
    {t:'Tipo Servicio'}, {t:'Excepciones'}
  ]}
];

const MENU_EMERGENCIA = [
  { nombre:'Documentos', items:[
    {t:'Consentimientos Informados'}
  ]},
  { nombre:'Proceso', items:[
    {t:'Atenciones'}, {t:'H.C.'}, {t:'Hospitalización'}, {t:'Consultar Hce'}
  ]}
];

const MENU_HOSPITALIZACION = [
  { nombre:'Ficheros', items:[
    {t:'Items Limpieza De Habitaciones'}, {t:'Estados De Paciente'}, {t:'Procedencias'},
    {t:'Tipos De Hospitalización'}, {t:'Destinos'}, {t:'Tipos De Habitación'},
    {t:'Pisos'}, {t:'Habitaciones'}
  ]},
  { nombre:'Reportes', items:[] },
  { nombre:'Documentos', items:[
    {t:'Consentimientos Informados'}
  ]},
  { nombre:'Hospitalización', items:[
    {t:'Hospitalización'}
  ]}
];

const CRUD_FICHEROS = {
  'Consultorios': {
    descripcion:'Gestiona los ambientes disponibles para la atención médica.',
    columnas:['ID','Descripción','Activo'],
    campos:[['id','ID','number',true],['descripcion','Descripción','text'],['codigoIpress','Código Ipress','text'],['activo','Estado','select'],['modulo','Módulo (Llamar Por Tv)','text']],
    filas:[
      {id:'2',descripcion:'CONSULTORIO 3 LINCE',codigoIpress:'',activo:'ACTIVO',modulo:''}, {id:'4',descripcion:'SOTANO PINILLOS BOX 1',codigoIpress:'',activo:'ACTIVO',modulo:''},
      {id:'5',descripcion:'SOTANO PINILLOS BOX 2',codigoIpress:'',activo:'ACTIVO',modulo:''}, {id:'6',descripcion:'SOTANO PINILLOS BOX 3',codigoIpress:'',activo:'ACTIVO',modulo:''},
      {id:'7',descripcion:'SOTANO PINILLOS BOX 4',codigoIpress:'',activo:'ACTIVO',modulo:''}, {id:'8',descripcion:'SOTANO PINILLOS BOX 5',codigoIpress:'',activo:'ACTIVO',modulo:''},
      {id:'9',descripcion:'SOTANO PINILLOS BOX 6',codigoIpress:'',activo:'ACTIVO',modulo:''}, {id:'10',descripcion:'SOTANO PINILLOS BOX 7',codigoIpress:'',activo:'ACTIVO',modulo:''},
      {id:'11',descripcion:'1ER PISO PINILLOS BOX 1',codigoIpress:'',activo:'ACTIVO',modulo:''}, {id:'12',descripcion:'1ER PISO PINILLOS BOX 2',codigoIpress:'',activo:'ACTIVO',modulo:''}
    ]
  },
  'Especialidades': {
    descripcion:'Administra las especialidades clínicas disponibles en el sistema.',
    columnas:['ID','Descripción','Estado'],
    campos:[['id','ID','number'],['descripcion','Descripción','text'],['activo','Estado','select']],
    filas:[
      {id:'26',descripcion:'OBSTETRICIA',activo:'INACTIVO'}, {id:'1',descripcion:'PEDIATRÍA',activo:'INACTIVO'},
      {id:'4',descripcion:'REUMATOLOGÍA',activo:'INACTIVO'}, {id:'6',descripcion:'ONCOLOGÍA',activo:'INACTIVO'},
      {id:'7',descripcion:'NUTRICIÓN',activo:'INACTIVO'}, {id:'8',descripcion:'PATOLOGÍA',activo:'INACTIVO'},
      {id:'10',descripcion:'RADIOLOGÍA - ECOGRAFÍA',activo:'INACTIVO'}, {id:'11',descripcion:'CIRUGÍA GENERAL',activo:'INACTIVO'},
      {id:'12',descripcion:'OFTALMOLOGÍA',activo:'INACTIVO'}, {id:'13',descripcion:'UROLOGÍA',activo:'INACTIVO'}
    ]
  },
  'Kit Farmacia': {
    descripcion:'Configura los kits e insumos asociados a cada tipo de atención.',
    columnas:['Código','Descripción','Uso','Activo'],
    campos:[['id','Código','text'],['descripcion','Descripción','text'],['uso','Uso','select'],['activo','Estado','select']],
    filas:[
      {id:'000001',descripcion:'KIT_1',uso:'QUIROFANO',activo:'ACTIVO'}, {id:'000002',descripcion:'KIT 2',uso:'QUIROFANO',activo:'ACTIVO'},
      {id:'000003',descripcion:'RETIRO DE PUNTOS',uso:'CONSULTORIO',activo:'ACTIVO'}, {id:'000006',descripcion:'POST OPERADO',uso:'CONSULTORIO',activo:'ACTIVO'},
      {id:'000005',descripcion:'INFILTRACION',uso:'CONSULTORIO',activo:'ACTIVO'}, {id:'000008',descripcion:'CURACIÓN',uso:'CONSULTORIO',activo:'ACTIVO'},
      {id:'000004',descripcion:'ARTROCENTESIS',uso:'CONSULTORIO',activo:'ACTIVO'}, {id:'000007',descripcion:'COLOCACION DE YESO',uso:'CONSULTORIO',activo:'ACTIVO'},
      {id:'000009',descripcion:'KIT 3',uso:'QUIROFANO',activo:'ACTIVO'}, {id:'000010',descripcion:'PRUEBAAS',uso:'CONSULTORIO',activo:'INACTIVO'}
    ]
  }
};

let ROL_ACTUAL = 'Administrador';
const MODULOS_USUARIO = ['admision','caja','emergencia','hospitalizacion'];
const modulosVisibles = () => ROL_ACTUAL === 'Administrador' ? MODULOS : MODULOS.filter(m=>MODULOS_USUARIO.includes(m.id));

const contenido = document.getElementById('contenido');
const listaNav = document.getElementById('lista-nav');
const barraEstado = document.getElementById('barra-estado');

function iniciales(nombre){ return nombre; }

function renderNav(activoId){
  listaNav.innerHTML = `<div class="nav-item ${activoId === null ? 'activo' : ''}" data-inicio="true"><span class="punto"></span>Inicio</div><h2>Módulos</h2>` + modulosVisibles().map(m => `
    <div class="nav-item ${m.id===activoId?'activo':''}" data-id="${m.id}">
      <span class="punto"></span>${m.nombre}
    </div>
  `).join('');
  listaNav.querySelectorAll('.nav-item').forEach(el=>{
    el.addEventListener('click', ()=>{
      if(el.dataset.inicio) renderGridModulos(); else irAModulo(el.dataset.id);
      cerrarMenuMovil();
    });
  });
}

function cerrarMenuMovil(){
  document.querySelector('nav.sidebar').classList.remove('abierto');
  document.getElementById('btn-menu-movil').setAttribute('aria-expanded','false');
}

document.getElementById('btn-menu-movil').addEventListener('click', e=>{
  e.stopPropagation();
  const sidebar = document.querySelector('nav.sidebar');
  const abierto = sidebar.classList.toggle('abierto');
  e.currentTarget.setAttribute('aria-expanded', abierto);
});

function renderGridModulos(){
  const disponibles = modulosVisibles();
  renderNav(null);
  const esAdmin = ROL_ACTUAL === 'Administrador';
  const kpis = esAdmin ? [['24','Pacientes atendidos hoy'],[formatoMoneda(totalIngresosCaja()),'Ingresos del día'],['4','Casos activos en emergencia'],['22 / 28','Camas ocupadas']] : [['5','Pacientes en espera'],['12','Citas programadas hoy'],['6','Camas disponibles'],[formatoMoneda(totalIngresosCaja()),'Cobrado en el turno']];
  const acciones = esAdmin ? [{icono:'🧑‍💼',titulo:'Admitir paciente',detalle:'Registrar un nuevo ingreso',id:'admision'},{icono:'💵',titulo:'Registrar cobro',detalle:'Nueva transacción en caja',id:'caja'},{icono:'🚑',titulo:'Nuevo caso de emergencia',detalle:'Ingresar paciente a triaje',id:'emergencia'},{icono:'📦',titulo:'Nueva orden de compra',detalle:'Solicitar insumos a proveedor',id:'logistica'}] : [{icono:'🧑‍💼',titulo:'Admitir paciente',detalle:'Registrar un nuevo ingreso',id:'admision'},{icono:'💵',titulo:'Registrar cobro',detalle:'Nueva transacción en caja',id:'caja'},{icono:'🚑',titulo:'Registrar emergencia',detalle:'Ingresar paciente a triaje',id:'emergencia'}];
  const pendientes = esAdmin ? [['critico','Caso crítico en Emergencia:','Rosa Campos, triaje rojo','Emergencia'],['','Stock bajo:','Ibuprofeno 400mg requiere reposición','Farmacia'],['','Orden retrasada:','OC-0453 pendiente de recepción','Logística']] : [['critico','Caso crítico en Emergencia:','Rosa Campos, triaje rojo','Emergencia'],['','Paciente en espera:','Jorge Ramírez tiene cita a las 09:30','Admisión'],['','Cobro pendiente:','Lucía Peña, terapia','Caja']];
  contenido.innerHTML = `
    <div class="inicio">
      <div class="inicio-cabecera"><p class="inicio-fecha">Miércoles, 2 de Setiembre</p><h2>Buenas tardes, ${esAdmin ? 'Administrador' : 'María'}</h2><p>${esAdmin ? 'Esto es lo que necesita tu atención hoy en ArthroSalud.' : 'Estos son tus pendientes de recepción para el turno de hoy.'}</p></div>
      <div class="aviso-rol">👋 Estás viendo ArthroSalud como <b>${esAdmin ? 'Administrador' : 'Recepción'}</b>. Solo se muestran los módulos y acciones de tu área.</div>
      <div class="inicio-kpis">${kpis.map(([valor,etiqueta])=>`<div class="inicio-kpi"><strong>${valor}</strong><span>${etiqueta}</span></div>`).join('')}</div>
      <section class="inicio-seccion"><div class="inicio-seccion-titulo"><h3>Acciones rápidas</h3></div><div class="acciones-rapidas">${acciones.map(a=>`<button class="accion-rapida" data-accion="${a.id}"><span class="accion-icono">${a.icono}</span><span><strong>${a.titulo}</strong><small>${a.detalle}</small></span></button>`).join('')}</div></section>
      <section class="inicio-seccion"><div class="inicio-seccion-titulo"><h3>Requiere tu atención</h3><span>${pendientes.length} pendientes</span></div><div class="pendientes">${pendientes.map(([clase,titulo,detalle,etiqueta])=>`<div class="pendiente"><span class="pendiente-punto ${clase}"></span><span>${titulo} <b>${detalle}</b></span><span class="etiqueta-pendiente">${etiqueta} &nbsp;→</span></div>`).join('')}</div></section>
    </div>
  `;
  contenido.querySelectorAll('.accion-rapida').forEach(el=>el.addEventListener('click', ()=>irAModulo(el.dataset.accion)));
  barraEstado.textContent = 'No tienes notificaciones pendientes';
}

function renderMenuInterno(m, menus){
  return `
    <div class="navbar-interna" id="navbar-interna">
      ${menus.map((menu,i)=>`
        <div class="menu-superior" data-idx="${i}">
          <button type="button">${menu.nombre}${menu.items.length ? ' <span class="flecha">▾</span>' : ''}</button>
          ${menu.items.length ? `<div class="submenu">
            ${menu.items.map(it=>`
              <a href="#" class="${it.acento?'acento':''}" data-seccion="${it.t}">${it.t}</a>
            `).join('')}
          </div>` : ''}
        </div>
      `).join('')}
    </div>
    <div class="vista-seccion" id="vista-seccion">${m.id === 'caja' ? renderResumenCaja(m) : m.id === 'farmacia' ? renderResumenFarmacia(m) : m.id === 'logistica' ? renderResumenLogistica(m) : m.id === 'prequirurgico' ? renderResumenPrequirurgico(m) : m.id === 'facturacion' ? renderResumenFacturacion(m) : m.id === 'sig' ? renderResumenSig(m) : m.id === 'laboratorio' ? renderResumenLaboratorio(m) : m.id === 'honorarios' ? renderResumenHonorarios(m) : renderResumenAdmision(m)}</div>
  `;
}

function renderResumenCaja(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen de Caja</h3><p class="admision-resumen-intro">Control de pagos, comprobantes y operaciones del turno.</p><div class="admision-kpis"><div class="admision-kpi"><strong>${formatoMoneda(totalIngresosCaja())}</strong><span>Ingresos del día</span></div><div class="admision-kpi"><strong>${MOVIMIENTOS_CAJA.filter(x=>x.estado!=='Anulado' && String(x.concepto).indexOf('Nota Credito')!==0).length}</strong><span>Transacciones</span></div><div class="admision-kpi"><strong>${formatoMoneda(totalPendienteCobro())}</strong><span>Pendiente de cobro</span></div><div class="admision-kpi"><strong>${REGISTROS_CAJAS.filter(r=>r.estado==='ABIERTO').length}</strong><span>Cajas abiertas</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Últimos movimientos</h4><span>Hoy</span></div>${MOVIMIENTOS_CAJA.slice(-3).reverse().map(x=>`<div class="admision-fila"><span class="admision-hora">${x.fecha.split(' ')[1]||''}</span><div><b>${x.paciente}</b><small>${x.concepto} · ${x.comprobante}</small></div><span class="admision-estado">${x.estado}</span></div>`).join('')}</section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Requiere atención</h4><span>${MOVIMIENTOS_CAJA.filter(x=>x.estado==='Pendiente').length} pendientes</span></div>${MOVIMIENTOS_CAJA.filter(x=>x.estado==='Pendiente').slice(0,2).map(x=>`<div class="admision-alerta"><span class="admision-alerta-punto critico"></span><div><strong>Cobro pendiente</strong><small>${x.paciente} · ${x.concepto} · ${formatoMoneda(x.monto)}</small></div></div>`).join('')}<div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Cierre de caja próximo</strong><small>Caja principal · faltan 45 minutos</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Registrar">Registrar pago</button><button class="admision-acceso" data-seccion="Registro Y Pago">Registro y pago</button><button class="admision-acceso" data-seccion="Nota De Crédito">Nota de crédito</button><button class="admision-acceso" data-seccion="Apertura">Aperturar caja</button></div></div>`;
}

function renderResumenLogistica(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen de Logística</h3><p class="admision-resumen-intro">Control de compras, almacenes e inventario de la clínica.</p><div class="admision-kpis"><div class="admision-kpi"><strong>18</strong><span>Órdenes activas</span></div><div class="admision-kpi"><strong>4</strong><span>En tránsito</span></div><div class="admision-kpi"><strong>2</strong><span>Retrasadas</span></div><div class="admision-kpi"><strong>312</strong><span>Ítems inventariados</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Órdenes recientes</h4><span>Hoy</span></div><div class="admision-fila"><span class="admision-hora">OC-0453</span><div><b>Insumos Perú</b><small>36 ítems · recepción pendiente</small></div><span class="admision-estado pendiente">Retrasada</span></div><div class="admision-fila"><span class="admision-hora">OC-0452</span><div><b>FarmaDistrib</b><small>10 ítems · llegada 30/08/2026</small></div><span class="admision-estado pendiente">En tránsito</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Alertas de inventario</h4><span>2 alertas</span></div><div class="admision-alerta"><span class="admision-alerta-punto critico"></span><div><strong>Stock bajo</strong><small>Ibuprofeno 400mg · quedan 8 unidades</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Recepción retrasada</strong><small>OC-0453 · Insumos Perú</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Inventario">Ver inventario</button><button class="admision-acceso" data-seccion="Órdenes De Compra">Órdenes de compra</button><button class="admision-acceso" data-seccion="Proveedores">Proveedores</button></div></div>`;
}

function renderResumenPrequirurgico(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen Pre Quirúrgico</h3><p class="admision-resumen-intro">Seguimiento de evaluaciones y aptitud de pacientes para cirugía.</p><div class="admision-kpis"><div class="admision-kpi"><strong>5</strong><span>Evaluaciones de hoy</span></div><div class="admision-kpi"><strong>2</strong><span>Pacientes aptos</span></div><div class="admision-kpi"><strong>1</strong><span>Observados</span></div><div class="admision-kpi"><strong>3</strong><span>Cirugías próximas</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Evaluaciones pendientes</h4><span>Hoy</span></div><div class="admision-fila"><span class="admision-hora">09:30</span><div><b>Pedro León</b><small>Reemplazo de cadera · Pre anestesia</small></div><span class="admision-estado pendiente">Pendiente</span></div><div class="admision-fila"><span class="admision-hora">10:15</span><div><b>Rosa Campos</b><small>Cirugía prevista · Riesgo cardiológico</small></div><span class="admision-estado pendiente">En revisión</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Accesos rápidos</h4><span>Preoperatorio</span></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Riesgo Cardiológico</strong><small>Revisar evaluaciones cardiovasculares</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Pre Anestesia</strong><small>Completar evaluaciones pendientes</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Riesgo Cardiológico">Riesgo cardiológico</button><button class="admision-acceso" data-seccion="Pre Anestesia">Pre anestesia</button></div></div>`;
}

function renderResumenHonorarios(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen de Honorarios</h3><p class="admision-resumen-intro">Seguimiento de liquidaciones y pagos de profesionales.</p><div class="admision-kpis"><div class="admision-kpi"><strong>S/ 42,800</strong><span>Por liquidar</span></div><div class="admision-kpi"><strong>18</strong><span>Profesionales</span></div><div class="admision-kpi"><strong>3</strong><span>Pendientes de revisión</span></div><div class="admision-kpi"><strong>12</strong><span>Servicios configurados</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Liquidaciones pendientes</h4><span>Agosto 2026</span></div><div class="admision-fila"><span class="admision-hora">Dra. Vidal</span><div><b>Ortopedia</b><small>64 atenciones · S/ 9,850</small></div><span class="admision-estado pendiente">Revisar</span></div><div class="admision-fila"><span class="admision-hora">Dr. Salazar</span><div><b>Traumatología</b><small>86 atenciones · S/ 12,400</small></div><span class="admision-estado pendiente">Por liquidar</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Accesos rápidos</h4><span>Honorarios</span></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Tipo de servicio</strong><small>Revisar tarifas configuradas</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Excepciones</strong><small>Validar reglas especiales</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Honorarios">Ver honorarios</button><button class="admision-acceso" data-seccion="Tipo Servicio">Tipos de servicio</button><button class="admision-acceso" data-seccion="Excepciones">Excepciones</button></div></div>`;
}

function renderResumenLaboratorio(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen de Laboratorio</h3><p class="admision-resumen-intro">Seguimiento de órdenes, muestras y resultados de laboratorio y patología.</p><div class="admision-kpis"><div class="admision-kpi"><strong>31</strong><span>Muestras de hoy</span></div><div class="admision-kpi"><strong>4</strong><span>Resultados críticos</span></div><div class="admision-kpi"><strong>27</strong><span>Resultados entregados</span></div><div class="admision-kpi"><strong>6</strong><span>Órdenes pendientes</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Órdenes pendientes</h4><span>Hoy</span></div><div class="admision-fila"><span class="admision-hora">09:00</span><div><b>Iván Cortez</b><small>Radiografía / análisis · LAB-2403</small></div><span class="admision-estado pendiente">En revisión</span></div><div class="admision-fila"><span class="admision-hora">09:15</span><div><b>Nadia Ruiz</b><small>Perfil lipídico · LAB-2402</small></div><span class="admision-estado pendiente">En proceso</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Accesos rápidos</h4><span>Laboratorio</span></div><div class="admision-alerta"><span class="admision-alerta-punto critico"></span><div><strong>Resultado crítico</strong><small>Revisar valores de Iván Cortez</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Patología pendiente</strong><small>2 muestras en análisis</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Orden Laboratorio">Órdenes de laboratorio</button><button class="admision-acceso" data-seccion="Patología">Patología</button></div></div>`;
}

function renderResumenSig(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen SIG</h3><p class="admision-resumen-intro">Indicadores de producción, auditoría y desempeño de la clínica.</p><div class="admision-kpis"><div class="admision-kpi"><strong>6</strong><span>Reportes disponibles</span></div><div class="admision-kpi"><strong>3</strong><span>Indicadores en rojo</span></div><div class="admision-kpi"><strong>92%</strong><span>Cumplimiento general</span></div><div class="admision-kpi"><strong>248</strong><span>Atenciones evaluadas</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Indicadores destacados</h4><span>Periodo actual</span></div><div class="admision-fila"><span class="admision-hora">92%</span><div><b>Cumplimiento de proveedores</b><small>Evaluación operativa consolidada</small></div><span class="admision-estado">Bueno</span></div><div class="admision-fila"><span class="admision-hora">4</span><div><b>Exámenes pendientes</b><small>Revisión de exámenes auxiliares</small></div><span class="admision-estado pendiente">Revisar</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Accesos rápidos</h4><span>Reportes SIG</span></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Reporte de atenciones</strong><small>Consulta producción por módulo</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Programación de salas</strong><small>Audita la actividad quirúrgica</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Reporte De Atenciones">Atenciones</button><button class="admision-acceso" data-seccion="Programación De Salas">Programación de salas</button></div></div>`;
}

function renderResumenFacturacion(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen de Facturación</h3><p class="admision-resumen-intro">Seguimiento de atenciones, liquidaciones y lotes de comprobantes.</p><div class="admision-kpis"><div class="admision-kpi"><strong>S/ 15,300</strong><span>Facturado hoy</span></div><div class="admision-kpi"><strong>9</strong><span>Atenciones por facturar</span></div><div class="admision-kpi"><strong>1</strong><span>Liquidación pendiente</span></div><div class="admision-kpi"><strong>2</strong><span>Lotes activos</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Atenciones pendientes</h4><span>Hoy</span></div><div class="admision-fila"><span class="admision-hora">ATE-2401</span><div><b>María Torres</b><small>Consulta · S/ 80.00</small></div><span class="admision-estado pendiente">Por facturar</span></div><div class="admision-fila"><span class="admision-hora">ATE-2403</span><div><b>Lucía Peña</b><small>Terapia · S/ 60.00</small></div><span class="admision-estado pendiente">Por facturar</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Procesos recientes</h4><span>Facturación</span></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Liquidación de agosto</strong><small>Requiere revisión antes del cierre</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Lote F001-1123</strong><small>878 comprobantes disponibles</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Atenciones">Ver atenciones</button><button class="admision-acceso" data-seccion="Liquidación">Liquidaciones</button><button class="admision-acceso" data-seccion="Lotes">Lotes</button></div></div>`;
}

function renderResumenFarmacia(m){
  return `<div class="admision-resumen"><div class="migaja">Módulo <b>${m.nombre}</b></div><h3>Resumen de Farmacia</h3><p class="admision-resumen-intro">Control de stock, recetas y entregas de los servicios.</p><div class="admision-kpis"><div class="admision-kpi"><strong>312</strong><span>Ítems en stock</span></div><div class="admision-kpi"><strong>14</strong><span>Stock bajo</span></div><div class="admision-kpi"><strong>8</strong><span>Recetas pendientes</span></div><div class="admision-kpi"><strong>S/ 2,100</strong><span>Ventas del día</span></div></div><div class="admision-columnas"><section class="admision-bloque"><div class="admision-bloque-header"><h4>Solicitudes pendientes</h4><span>Hoy</span></div><div class="admision-fila"><span class="admision-hora">09:20</span><div><b>Centro Quirúrgico</b><small>Kit 1 · KIT-0251</small></div><span class="admision-estado pendiente">Pendiente</span></div><div class="admision-fila"><span class="admision-hora">09:35</span><div><b>Consultorio 3</b><small>Paracetamol · REC-1042</small></div><span class="admision-estado pendiente">Pendiente</span></div></section><section class="admision-bloque"><div class="admision-bloque-header"><h4>Alertas de inventario</h4><span>2 alertas</span></div><div class="admision-alerta"><span class="admision-alerta-punto critico"></span><div><strong>Stock bajo</strong><small>Ibuprofeno 400mg · quedan 8 unidades</small></div></div><div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Próximo vencimiento</strong><small>Lote L-1187 · junio 2026</small></div></div></section></div><div class="admision-accesos"><button class="admision-acceso" data-seccion="Registro Y Pago">Registrar pago</button><button class="admision-acceso" data-seccion="Recetas De Tópico/consultorio">Ver recetas</button><button class="admision-acceso" data-seccion="Atender Kit De Farmacia">Atender kits</button></div></div>`;
}

function renderResumenAdmision(m){
  return `
    <div class="admision-resumen">
      <div class="migaja">Módulo <b>${m.nombre}</b></div>
      <h3>Resumen de Admisión</h3>
      <p class="admision-resumen-intro">Vista general de la operación para el turno de hoy.</p>
      <div class="admision-kpis">
        <div class="admision-kpi"><strong>24</strong><span>Pacientes atendidos</span></div>
        <div class="admision-kpi"><strong>5</strong><span>Pacientes en espera</span></div>
        <div class="admision-kpi"><strong>18 min</strong><span>Tiempo promedio de espera</span></div>
        <div class="admision-kpi"><strong>92%</strong><span>Historias completas</span></div>
      </div>
      <div class="admision-columnas">
        <section class="admision-bloque"><div class="admision-bloque-header"><h4>Próximas citas</h4><span>Hoy</span></div>
          <div class="admision-fila"><span class="admision-hora">09:00</span><div><b>María Torres</b><small>Dr. Salazar · Consulta</small></div><span class="admision-estado">Atendido</span></div>
          <div class="admision-fila"><span class="admision-hora">09:30</span><div><b>Jorge Ramírez</b><small>Dra. Vidal · Rayos X</small></div><span class="admision-estado pendiente">En espera</span></div>
          <div class="admision-fila"><span class="admision-hora">10:15</span><div><b>Lucía Peña</b><small>Dr. Salazar · Terapia</small></div><span class="admision-estado pendiente">En espera</span></div>
        </section>
        <section class="admision-bloque"><div class="admision-bloque-header"><h4>Requiere atención</h4><span>3 pendientes</span></div>
          <div class="admision-alerta"><span class="admision-alerta-punto critico"></span><div><strong>Historia incompleta</strong><small>Rosa Campos · falta información de contacto</small></div></div>
          <div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Paciente en espera</strong><small>Jorge Ramírez · 12 minutos esperando</small></div></div>
          <div class="admision-alerta"><span class="admision-alerta-punto"></span><div><strong>Documento pendiente</strong><small>Lucía Peña · validar cobertura IAFAS</small></div></div>
        </section>
      </div>
      <div class="admision-accesos"><button class="admision-acceso" data-seccion="Historia Clínica">Historia Clínica</button><button class="admision-acceso" data-seccion="Agenda">Agenda de citas</button><button class="admision-acceso" data-seccion="Consultorios">Consultorios</button><button class="admision-acceso" data-seccion="Especialidades">Especialidades</button></div>
    </div>
  `;
}

function renderFarmaciaSeccion(seccion, menuPadre){
  const vista = document.getElementById('vista-seccion');
  const encabezado = `<div class="caja-titulo"><div><h3>${seccion}</h3><p>Gestiona las operaciones de farmacia del turno actual.</p></div></div>`;
  const acciones = ()=>vista.querySelectorAll('[data-farmacia-accion]').forEach(boton=>boton.addEventListener('click', ()=>{
    barraEstado.textContent = `${boton.dataset.farmaciaAccion} realizado correctamente (demo).`;
    boton.disabled = true;
    boton.textContent = 'Procesado';
  }));

  if(seccion === 'Registro Y Pago'){
    vista.innerHTML = `<div class="caja-vista"><div class="migaja">Farmacia <b>/ ${seccion}</b></div>${encabezado}<form class="caja-form-panel" id="form-farmacia-pago"><div class="caja-form-grid"><div class="caja-campo col-6"><label for="farmacia-paciente">Paciente</label><input id="farmacia-paciente" type="text" placeholder="Buscar paciente" required></div><div class="caja-campo col-6"><label for="farmacia-receta">N° receta</label><input id="farmacia-receta" type="text" placeholder="REC-0000" required></div><div class="caja-campo col-6"><label for="farmacia-medio">Medio de pago</label><select id="farmacia-medio"><option>Efectivo</option><option>Tarjeta</option><option>Transferencia</option></select></div><div class="caja-campo col-6"><label for="farmacia-monto">Monto</label><input id="farmacia-monto" type="number" min="0" step="0.01" placeholder="S/ 0.00" required></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario">Registrar pago</button></div></form><div class="caja-form-panel" style="margin-top:16px"><h4 class="caja-seccion-titulo">Últimos pagos</h4><div class="caja-tabla-wrap"><table class="caja-tabla" style="min-width:0"><thead><tr><th>RECETA</th><th>PACIENTE</th><th>MONTO</th><th>ESTADO</th></tr></thead><tbody><tr><td>REC-1042</td><td>María Torres</td><td>S/ 80.00</td><td><span class="crud-status">Pagado</span></td></tr><tr><td>REC-1041</td><td>Jorge Ramírez</td><td>S/ 45.00</td><td><span class="crud-status">Pagado</span></td></tr></tbody></table></div></div></div>`;
    document.getElementById('form-farmacia-pago').addEventListener('submit', e=>{e.preventDefault();barraEstado.textContent='Pago de farmacia registrado correctamente (demo).';e.currentTarget.reset();});
    return;
  }

  if(seccion === 'Venta Sin Admisión'){
    vista.innerHTML = `<div class="caja-vista"><div class="migaja">Farmacia <b>/ ${seccion}</b></div>${encabezado}<form class="caja-form-panel" id="form-venta-farmacia"><div class="caja-form-grid"><div class="caja-campo col-6"><label for="venta-documento">Documento del cliente</label><input id="venta-documento" type="text" placeholder="DNI o RUC" required></div><div class="caja-campo col-6"><label for="venta-producto">Producto</label><select id="venta-producto"><option>Paracetamol 500mg</option><option>Ibuprofeno 400mg</option><option>Venda elástica 10cm</option></select></div><div class="caja-campo col-6"><label for="venta-cantidad">Cantidad</label><input id="venta-cantidad" type="number" min="1" value="1" required></div><div class="caja-campo col-6"><label for="venta-pago">Medio de pago</label><select id="venta-pago"><option>Efectivo</option><option>Tarjeta</option><option>Transferencia</option></select></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario">Emitir venta</button></div></form></div>`;
    document.getElementById('form-venta-farmacia').addEventListener('submit', e=>{e.preventDefault();barraEstado.textContent='Venta sin admisión emitida correctamente (demo).';e.currentTarget.reset();});
    return;
  }

  const configuraciones = {
    'Stock': {descripcion:'Consulta existencias, lotes y fechas de vencimiento de los productos.', columnas:['PRODUCTO','LOTE','STOCK','VENCIMIENTO','ESTADO'], filas:[['Paracetamol 500mg','L-2201','120','12/2027','Óptimo'],['Ibuprofeno 400mg','L-1187','8','06/2026','Stock bajo'],['Venda elástica 10cm','L-0932','45','—','Óptimo']]},
    'Recetas De Tópico/consultorio': {descripcion:'Dispensa recetas solicitadas por tópico y consultorios.', columnas:['RECETA','PACIENTE','CONSULTORIO','PRODUCTOS','ESTADO'], filas:[['REC-1042','María Torres','Consultorio 3','Paracetamol, venda','Pendiente'],['REC-1041','Jorge Ramírez','Tópico','Ibuprofeno','Atendida']]},
    'Consulta Atenciones': {descripcion:'Consulta las atenciones y productos entregados a cada paciente.', columnas:['FECHA','PACIENTE','ATENCIÓN','PRODUCTO','CANTIDAD'], filas:[['02/09/2026','María Torres','Consulta','Paracetamol 500mg','2'],['02/09/2026','Lucía Peña','Terapia','Venda elástica 10cm','1']]},
    'Atender Kit De Farmacia': {descripcion:'Prepara y confirma los kits solicitados por los servicios.', columnas:['SOLICITUD','SERVICIO','KIT','HORA','ESTADO'], filas:[['KIT-0251','Centro Quirúrgico','Kit 1','09:20','Pendiente'],['KIT-0250','Consultorio 3','Retiro de puntos','08:55','Atendido']]}
  }[seccion];
  const filas = configuraciones.filas.map(fila=>`<tr>${fila.slice(0,-1).map(c=>`<td>${c}</td>`).join('')}<td><span class="crud-status ${fila[fila.length-1] === 'Pendiente' ? 'inactivo' : ''}">${fila[fila.length-1]}</span>${fila[fila.length-1] === 'Pendiente' ? `<button class="btn-secundario" data-farmacia-accion="${seccion === 'Atender Kit De Farmacia' ? 'Kit atendido' : 'Receta atendida'}" style="margin-left:8px;padding:5px 8px;font-size:11px">Atender</button>` : ''}</td></tr>`).join('');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Farmacia <b>/ ${seccion}</b></div>${encabezado}<div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-farmacia">Filtrar todos los campos</label><input id="buscar-farmacia" type="search" placeholder="Buscar paciente, receta o producto..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-farmacia"><thead><tr>${configuraciones.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-farmacia').addEventListener('input', e=>document.querySelectorAll('#tabla-farmacia tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  acciones();
}

function renderLogisticaSeccion(seccion, menuPadre){
  const configuraciones = {
    'Requerimientos': ['REQUERIMIENTO','ÁREA SOLICITANTE','FECHA','ESTADO', [['REQ-031','Centro Quirúrgico','02/09/2026','Pendiente'],['REQ-030','Farmacia','01/09/2026','Atendido']]],
    'Órdenes De Compra': ['ORDEN','PROVEEDOR','FECHA','TOTAL','ESTADO', [['OC-0453','Insumos Perú','25/08/2026','S/ 3,420','Retrasada'],['OC-0452','FarmaDistrib','30/08/2026','S/ 1,850','En tránsito']]],
    'Recepciones': ['RECEPCIÓN','ORDEN','ALMACÉN','FECHA','ESTADO', [['REC-0181','OC-0451','Central','28/08/2026','Completada'],['REC-0180','OC-0450','Central','26/08/2026','Observada']]],
    'Inventario': ['PRODUCTO','ALMACÉN','STOCK','LOTE','ESTADO', [['Paracetamol 500mg','Central','120','L-2201','Disponible'],['Ibuprofeno 400mg','Central','8','L-1187','Stock bajo']]],
    'Saldo Inicial': ['ALMACÉN','PERIODO','RESPONSABLE','ESTADO', [['Central','Septiembre 2026','AMACEDO','Registrado'],['Farmacia','Septiembre 2026','MROJAS','Pendiente']]],
    'Productos': ['CÓDIGO','DESCRIPCIÓN','FAMILIA','UNIDAD','ESTADO', [['PR-0001','Paracetamol 500mg','Medicamentos','Unidad','Activo'],['PR-0002','Venda elástica 10cm','Material médico','Unidad','Activo']]],
    'Tipos Familias Subfamilias': ['TIPO','FAMILIA','SUBFAMILIA','ESTADO', [['Medicamento','Analgésicos','Analgésicos no opioides','Activo'],['Material','Curaciones','Vendas','Activo']]],
    'Proveedores': ['RUC','RAZÓN SOCIAL','CONTACTO','TELÉFONO','ESTADO', [['20123456781','MedSupply SAC','ventas@medsupply.pe','01 555 0142','Activo'],['20456789123','FarmaDistrib','compras@farmadistrib.pe','01 555 0188','Activo']]],
    'Centros De Costo': ['CÓDIGO','DESCRIPCIÓN','RESPONSABLE','ESTADO', [['CC-001','Centro Quirúrgico','Dr. Salazar','Activo'],['CC-002','Farmacia','MROJAS','Activo']]],
    'Almacenes': ['CÓDIGO','DESCRIPCIÓN','UBICACIÓN','RESPONSABLE','ESTADO', [['ALM-001','Almacén Central','Lince','AMACEDO','Activo'],['ALM-002','Farmacia','Lince','MROJAS','Activo']]],
    'Partidas Presupuestales': ['CÓDIGO','DESCRIPCIÓN','PERIODO','MONTO','ESTADO', [['P-2026-01','Medicamentos','2026','S/ 45,000','Activo'],['P-2026-02','Material médico','2026','S/ 28,000','Activo']]],
    'Distribución Recurrente': ['CÓDIGO','ÁREA','FRECUENCIA','ÚLTIMA EJECUCIÓN','ESTADO', [['DR-001','Farmacia','Mensual','01/09/2026','Activa'],['DR-002','Centro Quirúrgico','Semanal','29/08/2026','Activa']]],
    'Stock Y Kardex': ['PRODUCTO','LOTE','ALMACÉN','ENTRADAS','SALIDAS','SALDO', [['Paracetamol 500mg','L-2201','Central','150','30','120'],['Ibuprofeno 400mg','L-1187','Central','40','32','8']]],
    'Movimientos': ['FECHA','TIPO','PRODUCTO','ALMACÉN','CANTIDAD', [['02/09/2026','Salida','Paracetamol 500mg','Central','2'],['01/09/2026','Ingreso','Venda elástica 10cm','Central','45']]]
  }[seccion] || ['DESCRIPCIÓN','ESTADO', [['Sin registros','Pendiente']]];
  const columnas = configuraciones.slice(0, -1);
  const filas = configuraciones[configuraciones.length - 1];
  const filasHtml = filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  const esReporte = menuPadre === 'Reportes';
  const accion = esReporte ? 'Exportar reporte' : 'Agregar registro';
  const vista = document.getElementById('vista-seccion');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Logística <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${esReporte ? 'Consulta y exporta información consolidada de logística.' : 'Gestiona la información operativa de logística.'}</p></div><button class="btn-secundario" id="btn-accion-logistica">${accion}</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-logistica">Filtrar todos los campos</label><input id="buscar-logistica" type="search" placeholder="Buscar en ${seccion.toLowerCase()}..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-logistica"><thead><tr>${columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filasHtml}</tbody></table></div></div></div>`;
  document.getElementById('buscar-logistica').addEventListener('input', e=>document.querySelectorAll('#tabla-logistica tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-logistica').addEventListener('click', e=>{barraEstado.textContent=`${accion} preparado correctamente (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Logística › ${menuPadre} › ${seccion}`;
}

function renderQuirurgicoSeccion(seccion, menuPadre){
  const datos = {
    'Programación De Salas': {descripcion:'Organiza las salas y procedimientos quirúrgicos programados.', columnas:['SALA','PACIENTE','PROCEDIMIENTO','CIRUJANO','HORA','ESTADO'], filas:[['Sala 1','Ana Fuentes','Artroscopia de rodilla','Dr. Salazar','08:00','Confirmada'],['Sala 2','Pedro León','Reemplazo de cadera','Dra. Vidal','11:30','Programada']]},
    'Atención Centro Quirúrgico': {descripcion:'Registra el seguimiento de los pacientes y atenciones del centro quirúrgico.', columnas:['PACIENTE','SALA','PROCEDIMIENTO','INGRESO','ESTADO'], filas:[['Ana Fuentes','Sala 1','Artroscopia de rodilla','07:45','En sala'],['Pedro León','Sala 2','Reemplazo de cadera','11:00','Pendiente']]},
    'Consentimientos Informados': {descripcion:'Consulta y gestiona los consentimientos asociados a cada procedimiento.', columnas:['PACIENTE','PROCEDIMIENTO','DOCUMENTO','FECHA','ESTADO'], filas:[['Ana Fuentes','Artroscopia de rodilla','Consentimiento quirúrgico','02/09/2026','Firmado'],['Pedro León','Reemplazo de cadera','Consentimiento quirúrgico','02/09/2026','Pendiente']]}
  }[seccion];
  const vista = document.getElementById('vista-seccion');
  const filas = datos.filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Centro Quirúrgico <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${datos.descripcion}</p></div><button class="btn-secundario" id="btn-accion-quirurgico">Agregar registro</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-quirurgico">Filtrar todos los campos</label><input id="buscar-quirurgico" type="search" placeholder="Buscar paciente, sala o procedimiento..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-quirurgico"><thead><tr>${datos.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-quirurgico').addEventListener('input', e=>document.querySelectorAll('#tabla-quirurgico tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-quirurgico').addEventListener('click', e=>{barraEstado.textContent=`Registro de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Centro Quirúrgico › ${menuPadre} › ${seccion}`;
}

function renderPrequirurgicoSeccion(seccion, menuPadre){
  const datos = {
    'Riesgo Cardiológico': {descripcion:'Evalúa el riesgo cardiovascular de los pacientes antes de una cirugía.', columnas:['PACIENTE','EDAD','PROCEDIMIENTO','RIESGO','FECHA','ESTADO'], filas:[['Ana Fuentes','42','Artroscopia de rodilla','Bajo','02/09/2026','Apto'],['Pedro León','67','Reemplazo de cadera','Moderado','02/09/2026','Pendiente']]},
    'Pre Anestesia': {descripcion:'Registra la evaluación preanestésica y la condición del paciente.', columnas:['PACIENTE','CIRUGÍA','ANESTESIÓLOGO','EVALUACIÓN','FECHA','ESTADO'], filas:[['Ana Fuentes','Artroscopia de rodilla','Dra. Vidal','Completa','02/09/2026','Apto'],['Pedro León','Reemplazo de cadera','Dr. Paredes','En revisión','02/09/2026','Observado']]},
    'Consentimientos Informados': {descripcion:'Consulta los documentos requeridos para la evaluación prequirúrgica.', columnas:['PACIENTE','PROCEDIMIENTO','DOCUMENTO','FECHA','ESTADO'], filas:[['Ana Fuentes','Artroscopia de rodilla','Consentimiento quirúrgico','02/09/2026','Firmado'],['Pedro León','Reemplazo de cadera','Consentimiento quirúrgico','02/09/2026','Pendiente']]}
  }[seccion];
  const vista = document.getElementById('vista-seccion');
  const filas = datos.filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Centro Pre Quirúrgico <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${datos.descripcion}</p></div><button class="btn-secundario" id="btn-accion-prequirurgico">Agregar registro</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-prequirurgico">Filtrar todos los campos</label><input id="buscar-prequirurgico" type="search" placeholder="Buscar paciente o procedimiento..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-prequirurgico"><thead><tr>${datos.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-prequirurgico').addEventListener('input', e=>document.querySelectorAll('#tabla-prequirurgico tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-prequirurgico').addEventListener('click', e=>{barraEstado.textContent=`Registro de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Centro Pre Quirúrgico › ${menuPadre} › ${seccion}`;
}

function renderFacturacionSeccion(seccion, menuPadre){
  const datos = {
    'Atenciones': {descripcion:'Consulta las atenciones pendientes de facturación.', columnas:['ATENCIÓN','PACIENTE','SERVICIO','FECHA','IMPORTE','ESTADO'], filas:[['ATE-2401','María Torres','Consulta','02/09/2026','S/ 80.00','Por facturar'],['ATE-2402','Jorge Ramírez','Rayos X','02/09/2026','S/ 120.00','Facturada']]},
    'Liquidación': {descripcion:'Gestiona la liquidación de servicios y comprobantes emitidos.', columnas:['LIQUIDACIÓN','PERIODO','ATENCIONES','TOTAL','FECHA','ESTADO'], filas:[['LIQ-2026-08','Agosto 2026','248','S/ 15,300','01/09/2026','Pendiente'],['LIQ-2026-07','Julio 2026','221','S/ 13,840','01/08/2026','Cerrada']]},
    'Lotes': {descripcion:'Administra los lotes de comprobantes disponibles para facturación.', columnas:['SERIE','LOTE','DESDE','HASTA','DISPONIBLES','ESTADO'], filas:[['F001','1123','0001','1000','878','Activo'],['B001','0232','0001','0500','268','Activo']]}
  }[seccion];
  const vista = document.getElementById('vista-seccion');
  const filas = datos.filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Facturación <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${datos.descripcion}</p></div><button class="btn-secundario" id="btn-accion-facturacion">Agregar registro</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-facturacion">Filtrar todos los campos</label><input id="buscar-facturacion" type="search" placeholder="Buscar en ${seccion.toLowerCase()}..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-facturacion"><thead><tr>${datos.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-facturacion').addEventListener('input', e=>document.querySelectorAll('#tabla-facturacion tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-facturacion').addEventListener('click', e=>{barraEstado.textContent=`Registro de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Facturación › ${menuPadre} › ${seccion}`;
}

function renderSigSeccion(seccion, menuPadre){
  const reportes = {
    'Programación De Salas':['SALA','FECHA','PROCEDIMIENTO','RESPONSABLE','ESTADO',[['Sala 1','02/09/2026','Artroscopia de rodilla','Dr. Salazar','Programada'],['Sala 2','02/09/2026','Reemplazo de cadera','Dra. Vidal','Confirmada']]],
    'Producción Ambulatoria Por Producto':['PRODUCTO','ÁREA','ATENCIONES','INGRESO','PERIODO',[['Consulta traumatológica','Consultorios','148','S/ 11,840','Agosto 2026'],['Terapia física','Rehabilitación','96','S/ 5,760','Agosto 2026']]],
    'Revisión De Exámenes Auxiliares':['EXAMEN','ÁREA','SOLICITADOS','ATENDIDOS','PENDIENTES',[['Radiografía','Imagenología','42','38','4'],['Laboratorio clínico','Laboratorio','65','61','4']]],
    'Reporte De Atenciones':['FECHA','MÓDULO','ATENCIONES','ATENDIDAS','PENDIENTES',[['02/09/2026','Admisión','24','19','5'],['02/09/2026','Centro Quirúrgico','3','2','1']]],
    'Evaluación De Proveedores (Admin)':['PROVEEDOR','ENTREGAS','A TIEMPO','CALIFICACIÓN','ESTADO',[['MedSupply SAC','12','11','92%','Bueno'],['FarmaDistrib','8','6','75%','Revisar']]],
    'Facturas No Pagadas':['FACTURA','PROVEEDOR','EMISIÓN','VENCIMIENTO','IMPORTE',[['F001-1124','MedSupply SAC','01/08/2026','31/08/2026','S/ 1,240.00'],['F001-1118','FarmaDistrib','25/08/2026','24/09/2026','S/ 860.00']]],
    'Citas Atendidas Y Anuladas':['FECHA','MÓDULO','PROGRAMADAS','ATENDIDAS','ANULADAS',[['02/09/2026','Consultorios','32','27','5'],['01/09/2026','Centro Quirúrgico','8','7','1']]],
    'Reporte De Deserción':['PACIENTE','MÓDULO','CITA','MOTIVO','FECHA',[['Jorge Ramírez','Consultorios','09:30','No se presentó','02/09/2026'],['Lucía Peña','Terapia','10:15','Anulación','02/09/2026']]],
    'Evaluación De Proveedores':['PROVEEDOR','SERVICIO','CUMPLIMIENTO','OBSERVACIONES','ESTADO',[['Insumos Perú','Material médico','88%','Entrega parcial','Observado'],['MedSupply SAC','Medicamentos','96%','Sin incidencias','Aprobado']]]
  }[seccion];
  const columnas=reportes.slice(0,-1), filas=reportes[reportes.length-1], vista=document.getElementById('vista-seccion');
  vista.innerHTML=`<div class="caja-vista"><div class="migaja">SIG <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>Consulta y exporta información consolidada del sistema.</p></div><button class="btn-secundario" id="btn-accion-sig">Exportar reporte</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-sig">Filtrar todos los campos</label><input id="buscar-sig" type="search" placeholder="Buscar en ${seccion.toLowerCase()}..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-sig"><thead><tr>${columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div></div>`;
  document.getElementById('buscar-sig').addEventListener('input',e=>document.querySelectorAll('#tabla-sig tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-sig').addEventListener('click',e=>{barraEstado.textContent=`Reporte de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`SIG › ${menuPadre} › ${seccion}`;
}

function renderLaboratorioSeccion(seccion, menuPadre){
  const datos = {
    'Orden Laboratorio': {descripcion:'Registra y consulta las órdenes de exámenes de laboratorio.', columnas:['ORDEN','PACIENTE','EXAMEN','FECHA','PRIORIDAD','ESTADO'], filas:[['LAB-2401','María Torres','Hemograma completo','02/09/2026','Normal','Disponible'],['LAB-2402','Nadia Ruiz','Perfil lipídico','02/09/2026','Normal','En proceso'],['LAB-2403','Iván Cortez','Radiografía / análisis','02/09/2026','Urgente','Requiere revisión']]},
    'Patología': {descripcion:'Gestiona las solicitudes y resultados de estudios de patología.', columnas:['SOLICITUD','PACIENTE','ESTUDIO','MUESTRA','FECHA','ESTADO'], filas:[['PAT-081','Ana Fuentes','Biopsia de tejido','Recepcionada','02/09/2026','En análisis'],['PAT-080','Pedro León','Estudio histopatológico','Procesada','01/09/2026','Resultado listo']]}
  }[seccion];
  const vista=document.getElementById('vista-seccion');
  const filas=datos.filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  vista.innerHTML=`<div class="caja-vista"><div class="migaja">Laboratorio <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${datos.descripcion}</p></div><button class="btn-secundario" id="btn-accion-laboratorio">Agregar registro</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-laboratorio">Filtrar todos los campos</label><input id="buscar-laboratorio" type="search" placeholder="Buscar paciente, examen u orden..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-laboratorio"><thead><tr>${datos.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-laboratorio').addEventListener('input',e=>document.querySelectorAll('#tabla-laboratorio tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-laboratorio').addEventListener('click',e=>{barraEstado.textContent=`Registro de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Laboratorio › ${menuPadre} › ${seccion}`;
}

function renderHonorariosSeccion(seccion, menuPadre){
  const datos = {
    'Honorarios': {descripcion:'Gestiona los honorarios de los profesionales de la clínica.', columnas:['PROFESIONAL','ESPECIALIDAD','PERIODO','ATENCIONES','IMPORTE','ESTADO'], filas:[['Dr. Salazar','Traumatología','Agosto 2026','86','S/ 12,400','Por liquidar'],['Dra. Vidal','Ortopedia','Agosto 2026','64','S/ 9,850','Revisar'],['Dr. Paredes','Anestesiología','Agosto 2026','42','S/ 7,200','Liquidado']]},
    'Tipo Servicio': {descripcion:'Configura los servicios considerados para el cálculo de honorarios.', columnas:['CÓDIGO','SERVICIO','ESPECIALIDAD','TARIFA','ESTADO'], filas:[['TS-001','Consulta especializada','Traumatología','S/ 80.00','Activo'],['TS-002','Procedimiento quirúrgico','Ortopedia','S/ 450.00','Activo'],['TS-003','Evaluación preanestésica','Anestesiología','S/ 120.00','Activo']]},
    'Excepciones': {descripcion:'Administra las reglas especiales aplicadas a la liquidación de honorarios.', columnas:['CÓDIGO','PROFESIONAL','MOTIVO','PERIODO','VALOR','ESTADO'], filas:[['EX-001','Dra. Vidal','Tarifa preferencial','Agosto 2026','10%','Activa'],['EX-002','Dr. Paredes','Guardia adicional','Agosto 2026','S/ 300.00','Pendiente']]}
  }[seccion];
  const vista=document.getElementById('vista-seccion');
  const filas=datos.filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  vista.innerHTML=`<div class="caja-vista"><div class="migaja">Honorarios <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${datos.descripcion}</p></div><button class="btn-secundario" id="btn-accion-honorarios">Agregar registro</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-honorarios">Filtrar todos los campos</label><input id="buscar-honorarios" type="search" placeholder="Buscar profesional, servicio o periodo..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-honorarios"><thead><tr>${datos.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-honorarios').addEventListener('input',e=>document.querySelectorAll('#tabla-honorarios tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-honorarios').addEventListener('click',e=>{barraEstado.textContent=`Registro de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Honorarios › ${menuPadre} › ${seccion}`;
}

function renderEmergenciaSeccion(seccion, menuPadre){
  const datos = {
    'Atenciones': {descripcion:'Registra y consulta las atenciones de los pacientes ingresados por emergencia.', columnas:['ATENCIÓN','PACIENTE','TRIAJE','MOTIVO','HORA INGRESO','ESTADO'], filas:[['EM-2401','Rosa Campos','Rojo','Fractura expuesta','07:40','Crítico'],['EM-2402','Iván Cortez','Amarillo','Esguince','08:10','En observación'],['EM-2403','Nadia Ruiz','Verde','Dolor lumbar','08:50','Estable']]},
    'H.C.': {descripcion:'Consulta la historia clínica asociada a los pacientes atendidos en emergencia.', columnas:['PACIENTE','N° HISTORIA','ÚLTIMA ATENCIÓN','MÉDICO','ESTADO'], filas:[['Rosa Campos','HC-4587','02/09/2026','Dr. Salazar','Actualizada'],['Iván Cortez','HC-4012','02/09/2026','Dra. Vidal','Actualizada']]},
    'Hospitalización': {descripcion:'Gestiona las solicitudes de hospitalización generadas desde emergencia.', columnas:['SOLICITUD','PACIENTE','SERVICIO','HORA','HABITACIÓN','ESTADO'], filas:[['SOL-081','Rosa Campos','Traumatología','08:20','Por asignar','Pendiente'],['SOL-080','Pedro León','Ortopedia','07:55','304-B','Admitido']]},
    'Consultar Hce': {descripcion:'Consulta el historial de atenciones y documentos clínicos del paciente.', columnas:['PACIENTE','N° HISTORIA','ATENCIONES','ÚLTIMA CONSULTA','ESTADO'], filas:[['Rosa Campos','HC-4587','12','02/09/2026','Disponible'],['Nadia Ruiz','HC-3889','7','01/09/2026','Disponible']]},
    'Consentimientos Informados': {descripcion:'Consulta y gestiona los consentimientos asociados a la atención de emergencia.', columnas:['PACIENTE','DOCUMENTO','FECHA','RESPONSABLE','ESTADO'], filas:[['Rosa Campos','Consentimiento de atención','02/09/2026','Familiar autorizado','Firmado'],['Iván Cortez','Consentimiento de atención','02/09/2026','Paciente','Pendiente']]}
  }[seccion];
  const vista = document.getElementById('vista-seccion');
  const filas = datos.filas.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Emergencia <b>/ ${menuPadre} / ${seccion}</b></div><div class="caja-titulo"><div><h3>${seccion}</h3><p>${datos.descripcion}</p></div><button class="btn-secundario" id="btn-accion-emergencia">Agregar registro</button></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="buscar-emergencia">Filtrar todos los campos</label><input id="buscar-emergencia" type="search" placeholder="Buscar paciente o atención..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-emergencia"><thead><tr>${datos.columnas.map(col=>`<th>${col}</th>`).join('')}</tr></thead><tbody>${filas}</tbody></table></div></div></div>`;
  document.getElementById('buscar-emergencia').addEventListener('input', e=>document.querySelectorAll('#tabla-emergencia tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('btn-accion-emergencia').addEventListener('click', e=>{barraEstado.textContent=`Registro de ${seccion} preparado (demo).`;e.currentTarget.disabled=true;});
  barraEstado.textContent=`Emergencia › ${menuPadre} › ${seccion}`;
}

function activarMenuInterno(){
  const menus = document.querySelectorAll('#navbar-interna .menu-superior');
  menus.forEach(menu=>{
    const boton = menu.querySelector('button');
    boton.addEventListener('click', (e)=>{
      e.stopPropagation();
      const yaAbierto = menu.classList.contains('abierto');
      menus.forEach(x=>x.classList.remove('abierto'));
      if(!yaAbierto) menu.classList.add('abierto');
    });
  });
  document.addEventListener('click', ()=> menus.forEach(x=>x.classList.remove('abierto')));

  document.querySelectorAll('#navbar-interna .submenu a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const seccion = a.dataset.seccion;
      const menuPadre = a.closest('.menu-superior').querySelector('button').textContent.trim().replace('▾','').trim();
      if(menuPadre === 'Caja' && ['Registros','Apertura','Cierre'].includes(seccion)){
        renderCajaSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Consumo' && ['Pago','Registrar'].includes(seccion)){
        renderPagoConsumo(menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Consumo' && seccion === 'Registro Y Pago'){
        renderRegistroYPago(menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Consumo' && seccion === 'Nota De Crédito'){
        renderNotaCredito(menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Consumo' && seccion === 'Venta Sin Admisión'){
        renderVentaSinAdmision(menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Pacientes' && seccion === 'Historia Clínica'){
        renderHistoriaClinica(menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Ficheros' && CRUD_FICHEROS[seccion]){
        renderCrudFichero(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Comprobante' && seccion === 'Comprobantes' && document.querySelector('.panel-header h2').textContent.includes('Caja')){
        renderComprobantesCaja(menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Farmacia' && ['Stock','Registro Y Pago','Recetas De Tópico/consultorio','Venta Sin Admisión','Consulta Atenciones','Atender Kit De Farmacia'].includes(seccion)){
        renderFarmaciaSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(document.querySelector('.panel-header h2').textContent.includes('Emergencia') && ((menuPadre === 'Documentos' && seccion === 'Consentimientos Informados') || (menuPadre === 'Proceso' && ['Atenciones','H.C.','Hospitalización','Consultar Hce'].includes(seccion)))){
        renderEmergenciaSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(((menuPadre === 'Documentos' && seccion === 'Consentimientos Informados') || (menuPadre === 'Procesos' && ['Programación De Salas','Atención Centro Quirúrgico'].includes(seccion))) && document.querySelector('.panel-header h2').textContent.includes('Centro Quirúrgico')){
        renderQuirurgicoSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if((menuPadre === 'Cardiología' && seccion === 'Riesgo Cardiológico') || (menuPadre === 'Anestesiología' && seccion === 'Pre Anestesia') || (menuPadre === 'Documentos' && seccion === 'Consentimientos Informados' && document.querySelector('.panel-header h2').textContent.includes('Centro Pre Quirúrgico'))){
        renderPrequirurgicoSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Procesos' && ['Atenciones','Liquidación','Lotes'].includes(seccion) && document.querySelector('.panel-header h2').textContent.includes('Facturación')){
        renderFacturacionSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(document.querySelector('.panel-header h2').textContent.includes('Sig') && ['Programación De Salas','Producción Ambulatoria Por Producto','Revisión De Exámenes Auxiliares','Reporte De Atenciones','Evaluación De Proveedores (Admin)','Facturas No Pagadas','Citas Atendidas Y Anuladas','Reporte De Deserción','Evaluación De Proveedores'].includes(seccion)){
        renderSigSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if((menuPadre === 'Laboratorio' && seccion === 'Orden Laboratorio') || (menuPadre === 'Patología' && seccion === 'Patología')){
        renderLaboratorioSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if((menuPadre === 'Ficheros' && seccion === 'Honorarios') || (menuPadre === 'Procesar' && ['Tipo Servicio','Excepciones'].includes(seccion))){
        renderHonorariosSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      if(menuPadre === 'Procesos' || menuPadre === 'Almacén' || menuPadre === 'Ficheros' || menuPadre === 'Reportes'){
        renderLogisticaSeccion(seccion, menuPadre);
        document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
        return;
      }
      document.getElementById('vista-seccion').innerHTML = `
        <div class="migaja"><b>${menuPadre}</b> / ${seccion}</div>
        <h3>${seccion}</h3>
        <div class="panel-detalle">
          <div class="panel-body">
            <div class="vacio">
              <div class="icono-vacio">🗂️</div>
              <p>Esta es una vista de demostración para <b>${seccion}</b>.<br>Aquí se mostraría el contenido real de esta sección.</p>
            </div>
          </div>
        </div>
      `;
      const modulo = document.querySelector('.panel-header h2').textContent.replace(/^[^\s]+\s+/, '').trim();
      barraEstado.textContent = `${modulo} › ${menuPadre} › ${seccion}`;
      document.querySelectorAll('#navbar-interna .menu-superior').forEach(x=>x.classList.remove('abierto'));
    });
  });
  document.querySelectorAll('.admision-acceso').forEach(boton=>boton.addEventListener('click', ()=>{
    const opcion = document.querySelector(`#navbar-interna a[data-seccion="${boton.dataset.seccion}"]`);
    if(opcion) opcion.click();
  }));
}

function formatoMoneda(monto){ return 'S/ ' + Number(monto).toFixed(2); }

function mostrarToast(mensaje, tipo='exito'){
  const contenedor = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast ' + tipo;
  toast.textContent = mensaje;
  contenedor.appendChild(toast);
  setTimeout(()=>toast.remove(), 3200);
}

const PACIENTES_REGISTRO = [
  {nombre:'María Torres',dni:'45871203',medico:'Dr. Salazar'},
  {nombre:'Jorge Ramírez',dni:'40012398',medico:'Dra. Vidal'},
  {nombre:'Lucía Peña',dni:'38891122',medico:'Dr. Salazar'},
  {nombre:'Carlos Díaz',dni:'41234567',medico:'Dra. Vidal'},
  {nombre:'Rosa Campos',dni:'32548712',medico:'Dr. Salazar'},
  {nombre:'Iván Cortez',dni:'46789012',medico:'Dra. Vidal'},
  {nombre:'Nadia Ruiz',dni:'48901234',medico:'Dr. Salazar'},
  {nombre:'Ana Fuentes',dni:'41567890',medico:'Dra. Vidal'},
  {nombre:'Pedro León',dni:'39876543',medico:'Dr. Salazar'},
];

const CONCEPTOS_COBRO = [
  {concepto:'Consulta General',monto:80},
  {concepto:'Consulta Especializada',monto:120},
  {concepto:'Rayos X',monto:150},
  {concepto:'Terapia Física',monto:60},
  {concepto:'Laboratorio',monto:45},
  {concepto:'Farmacia',monto:0},
  {concepto:'Procedimiento Quirúrgico',monto:450},
  {concepto:'Ecografía',monto:100},
  {concepto:'Infiltración',monto:200},
];

let CAJA_ACTUAL = { abierta:false, id:null, caja:'', monto:0, observacion:'', fecha:'', usuario:'AMACEDO' };
let REGISTROS_CAJAS = [
  {id:'522',caja:'PINILLOS',fecha:'02/09/2026 08:10',usuario:'JFLORES',monto:0,estado:'ABIERTO'},
  {id:'521',caja:'ADMISION LINCE 1',fecha:'02/09/2026 07:12',usuario:'IHUAMAN',monto:0,estado:'ABIERTO'}
];

let MOVIMIENTOS_CAJA = [
  {id:'MOV-001',fecha:'02/09/2026 08:15',paciente:'María Torres',dni:'45871203',concepto:'Consulta General',monto:80,medioPago:'Efectivo',comprobante:'B001-0231',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-002',fecha:'02/09/2026 08:28',paciente:'Jorge Ramírez',dni:'40012398',concepto:'Rayos X',monto:150,medioPago:'Tarjeta',comprobante:'B001-0232',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-003',fecha:'02/09/2026 08:42',paciente:'Lucía Peña',dni:'38891122',concepto:'Terapia Física',monto:60,medioPago:'Efectivo',comprobante:'B001-0233',estado:'Pendiente',usuario:'AMACEDO'},
  {id:'MOV-004',fecha:'02/09/2026 09:05',paciente:'Carlos Díaz',dni:'41234567',concepto:'Consulta Especializada',monto:120,medioPago:'Transferencia',comprobante:'B001-0234',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-005',fecha:'02/09/2026 09:20',paciente:'Rosa Campos',dni:'32548712',concepto:'Laboratorio',monto:45,medioPago:'Efectivo',comprobante:'B001-0235',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-006',fecha:'02/09/2026 09:35',paciente:'Iván Cortez',dni:'46789012',concepto:'Ecografía',monto:100,medioPago:'Efectivo',comprobante:'B001-0236',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-007',fecha:'02/09/2026 09:48',paciente:'Nadia Ruiz',dni:'48901234',concepto:'Infiltración',monto:200,medioPago:'Tarjeta',comprobante:'B001-0237',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-008',fecha:'02/09/2026 10:02',paciente:'Ana Fuentes',dni:'41567890',concepto:'Consulta General',monto:80,medioPago:'Efectivo',comprobante:'B001-0238',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-009',fecha:'02/09/2026 10:15',paciente:'Pedro León',dni:'39876543',concepto:'Procedimiento Quirúrgico',monto:450,medioPago:'Transferencia',comprobante:'B001-0239',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-010',fecha:'02/09/2026 10:30',paciente:'María Torres',dni:'45871203',concepto:'Farmacia',monto:35,medioPago:'Efectivo',comprobante:'B001-0240',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-011',fecha:'02/09/2026 10:45',paciente:'Jorge Ramírez',dni:'40012398',concepto:'Consulta General',monto:80,medioPago:'Efectivo',comprobante:'B001-0241',estado:'Pagado',usuario:'AMACEDO'},
  {id:'MOV-012',fecha:'02/09/2026 11:00',paciente:'Lucía Peña',dni:'38891122',concepto:'Laboratorio',monto:45,medioPago:'Tarjeta',comprobante:'B001-0242',estado:'Pagado',usuario:'AMACEDO'},
];
let contadorMOV = 13;

function totalIngresosCaja(){ return MOVIMIENTOS_CAJA.filter(m=>m.estado==='Pagado' && String(m.concepto).indexOf('Nota Credito')!==0).reduce((total,movimiento)=>total + movimiento.monto, 0); }
function totalPendienteCobro(){ return MOVIMIENTOS_CAJA.filter(m=>m.estado==='Pendiente').reduce((total,movimiento)=>total + movimiento.monto, 0); }
function ingresosPorMedio(){
  const ingresos = MOVIMIENTOS_CAJA.filter(m=>m.estado==='Pagado' && String(m.concepto).indexOf('Nota Credito')!==0);
  const medios = {};
  ingresos.forEach(m=>{ medios[m.medioPago] = (medios[m.medioPago] || 0) + m.monto; });
  return medios;
}

function generarComprobante(){
  const num = String(240 + contadorMOV).padStart(4,'0');
  return 'B001-' + num;
}

function generarIdMovimiento(){
  return 'MOV-' + String(contadorMOV++).padStart(3,'0');
}

function buscarPacienteCaja(query){
  const q = query.toLowerCase().trim();
  if(!q) return [];
  return PACIENTES_REGISTRO.filter(p=>p.nombre.toLowerCase().includes(q) || p.dni.includes(q));
}

function renderCajaSeccion(seccion, menuPadre){
  const vista=document.getElementById('vista-seccion');
  if(seccion === 'Registros'){
    const filasRegistros=REGISTROS_CAJAS.map(registro=>`<tr><td>${registro.id}</td><td>${registro.caja}</td><td>${registro.fecha}</td><td>${registro.usuario}</td><td>S/ ${registro.monto.toFixed(2)}</td><td>${registro.cierre || '—'}</td><td>${registro.usuarioCierre || '—'}</td><td>${registro.montoCierre === undefined ? '—' : `S/ ${registro.montoCierre.toFixed(2)}`}</td><td><span class="crud-status">${registro.estado}</span></td><td><button class="btn-icono" title="Ver registro" aria-label="Ver registro">⌕</button></td></tr>`).join('');
    vista.innerHTML=`<div class="caja-vista"><div class="migaja">Caja <b>/ ${seccion}</b></div><div class="caja-titulo"><div><h3>Aperturas y cierres de Caja</h3><p>Consulta el historial de movimientos y el estado de cada caja.</p></div><div class="crud-actions"><button class="btn-secundario" id="btn-resumen-caja">▣ Resumen</button><button class="btn-secundario" id="btn-detalle-caja">▣ Detalle</button></div></div><div class="caja-form-panel"><div class="caja-form-grid"><div class="caja-campo col-6"><label for="fecha-desde">Desde</label><input id="fecha-desde" type="date" value="2026-09-02"></div><div class="caja-campo col-6"><label for="fecha-hasta">Hasta</label><input id="fecha-hasta" type="date" value="2026-09-02"></div><div class="caja-campo col-12"><label for="filtro-registros">Filtrar todos los campos</label><input id="filtro-registros" type="search" placeholder="Buscar caja, usuario o estado..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-cajas"><thead><tr><th>ID</th><th>CAJA</th><th>APERTURA</th><th>USUARIO APERTURA</th><th>MONTO APERTURA S/.</th><th>CIERRE</th><th>USUARIO CIERRE</th><th>MONTO CIERRE S/.</th><th>ESTADO</th><th>ACCIÓN</th></tr></thead><tbody>${filasRegistros}</tbody></table></div></div></div>`;
    document.getElementById('filtro-registros').addEventListener('input',e=>document.querySelectorAll('#tabla-cajas tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  } else if(seccion === 'Apertura'){
    vista.innerHTML=`<div class="caja-vista"><div class="migaja">Caja <b>/ Apertura</b></div><div class="caja-titulo"><div><h3>Apertura de Caja</h3><p>Inicia un turno para registrar operaciones en una caja.</p></div></div><form class="caja-form-panel" id="form-apertura"><p class="caja-seccion-titulo">Apertura de Caja</p><div class="caja-form-grid"><div class="caja-campo col-6"><label for="caja-apertura">Caja</label><select id="caja-apertura"><option>PINILLOS</option><option>ADMISION LINCE 1</option></select></div><div class="caja-campo col-6"><label for="monto-apertura">Monto Apertura</label><input id="monto-apertura" type="number" min="0" value="0"></div><div class="caja-campo col-12"><label for="observacion-apertura">Observación</label><input id="observacion-apertura" type="text" placeholder="Escribe una observación (opcional)"></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario">Aperturar</button></div></form></div>`;
    document.getElementById('form-apertura').addEventListener('submit',e=>{e.preventDefault();const formulario=e.currentTarget;const boton=formulario.querySelector('button[type="submit"]');if(boton.disabled)return;const id=String(Math.max(0,...REGISTROS_CAJAS.map(registro=>Number(registro.id)||0))+1);CAJA_ACTUAL={abierta:true,id,caja:document.getElementById('caja-apertura').value,monto:Number(document.getElementById('monto-apertura').value)||0,observacion:document.getElementById('observacion-apertura').value.trim(),fecha:'02/09/2026 10:00',usuario:'AMACEDO'};REGISTROS_CAJAS.unshift({id,caja:CAJA_ACTUAL.caja,fecha:CAJA_ACTUAL.fecha,usuario:CAJA_ACTUAL.usuario,monto:CAJA_ACTUAL.monto,estado:'ABIERTO'});boton.disabled=true;boton.textContent='Caja aperturada';formulario.insertAdjacentHTML('afterbegin','<div class="caja-confirmacion"><span>✓</span><div><strong>Caja aperturada correctamente</strong><span>Ya puedes registrar pagos y consumos en este turno.</span></div></div>');barraEstado.textContent=`Caja ${CAJA_ACTUAL.caja} aperturada correctamente (demo).`;});
  } else {
    vista.innerHTML=CAJA_ACTUAL.abierta ? `<div class="caja-vista"><div class="migaja">Caja <b>/ Cierre</b></div><div class="caja-titulo"><div><h3>Cierre de Caja</h3><p>Revisa los ingresos del turno antes de cerrar la caja.</p></div></div><div class="caja-form-panel"><div class="caja-info">● Caja abierta: ${CAJA_ACTUAL.caja} · Apertura ${CAJA_ACTUAL.fecha} · Usuario ${CAJA_ACTUAL.usuario}</div><div class="caja-datos"><div class="caja-dato"><span>Importe de apertura</span><strong>S/ ${CAJA_ACTUAL.monto.toFixed(2)}</strong></div><div class="caja-dato"><span>Ingresos del turno</span><strong>S/ ${totalIngresosCaja().toFixed(2)}</strong></div><div class="caja-dato"><span>Estado</span><strong>Abierta</strong></div></div><h4 class="caja-seccion-titulo">Ingresos por medio</h4><div class="caja-tabla-wrap"><table class="caja-tabla" style="min-width:0"><thead><tr><th>MEDIO</th><th>CANTIDAD</th><th>MONTO</th><th>DÓLAR</th></tr></thead><tbody>${Object.keys(ingresosPorMedio()).map(medio=>`<tr><td>${medio}</td><td>${MOVIMIENTOS_CAJA.filter(m=>m.estado==='Pagado' && String(m.concepto).indexOf('Nota Credito')!==0 && m.medioPago===medio).length}</td><td>S/ ${ingresosPorMedio()[medio].toFixed(2)}</td><td>$ 0.00</td></tr>`).join('')}<tr><td><strong>TOTAL</strong></td><td>${MOVIMIENTOS_CAJA.filter(m=>m.estado==='Pagado' && String(m.concepto).indexOf('Nota Credito')!==0).length}</td><td><strong>S/ ${totalIngresosCaja().toFixed(2)}</strong></td><td><strong>$ 0.00</strong></td></tr></tbody></table></div><div class="caja-form-grid" style="margin-top:18px"><div class="caja-campo col-12"><label for="observacion-cierre">Observaciones</label><input id="observacion-cierre" type="text" value="${CAJA_ACTUAL.observacion}" placeholder="Observaciones del cierre"></div></div><div class="caja-form-actions"><button class="btn-primario" id="btn-cerrar-caja">Cerrar caja</button></div></div></div>` : `<div class="caja-vista"><div class="migaja">Caja <b>/ Cierre</b></div><div class="caja-form-panel caja-vacio"><div class="caja-vacio-icono">✓</div><h4>No tienes una caja aperturada</h4><p>Para consultar ingresos y realizar el cierre, primero debes aperturar una caja.</p><button class="btn-primario" id="ir-apertura">Ir a Apertura</button></div></div>`;
    if(CAJA_ACTUAL.abierta) document.getElementById('btn-cerrar-caja').addEventListener('click',()=>{const registro=REGISTROS_CAJAS.find(item=>item.id===CAJA_ACTUAL.id);if(registro){registro.estado='CERRADO';registro.cierre='02/09/2026 18:00';registro.usuarioCierre=CAJA_ACTUAL.usuario;registro.montoCierre=totalIngresosCaja();}CAJA_ACTUAL.abierta=false;renderCajaSeccion('Cierre',menuPadre);barraEstado.textContent=`Caja ${CAJA_ACTUAL.caja} cerrada correctamente (demo).`;}); else document.getElementById('ir-apertura').addEventListener('click',()=>renderCajaSeccion('Apertura',menuPadre));
  }
  barraEstado.textContent=`Caja › ${seccion}`;
}

function renderPagoConsumo(menuPadre){
  const vista = document.getElementById('vista-seccion');
  if(!CAJA_ACTUAL.abierta){
    vista.innerHTML = `<div class="caja-vista"><div class="migaja">Caja <b>/ Consumo</b></div><div class="caja-form-panel caja-vacio"><div class="caja-vacio-icono">⚠</div><h4>No hay caja abierta</h4><p>No puedes registrar pagos sin una caja aperturada. Apertura una caja primero.</p><button class="btn-primario" id="ir-apertura-consumo">Ir a Apertura</button></div></div>`;
    document.getElementById('ir-apertura-consumo').addEventListener('click',()=>renderCajaSeccion('Apertura',menuPadre));
    barraEstado.textContent='Caja > Consumo (requiere apertura)';
    return;
  }
  const conceptosOpts = CONCEPTOS_COBRO.map(c=>`<option data-monto="${c.monto}">${c.concepto}</option>`).join('');
  vista.innerHTML = `<div class="caja-vista"><div class="migaja">Caja <b>/ ${menuPadre} / Pago</b></div><div class="caja-titulo"><div><h3>Registrar Pago</h3><p>Registra el cobro de un servicio o producto al paciente.</p></div></div><div class="caja-info">● Caja abierta: ${CAJA_ACTUAL.caja} · Turno ${CAJA_ACTUAL.fecha} · ${CAJA_ACTUAL.usuario}</div><form class="caja-form-panel" id="form-pago-consumo"><div class="caja-form-grid"><div class="caja-campo col-6 paciente-busqueda-wrap"><label for="pago-paciente">Paciente *</label><input id="pago-paciente" type="text" placeholder="Buscar por nombre o DNI..." autocomplete="off" required><div class="paciente-busqueda-lista" id="lista-pacientes-pago"></div><input id="pago-paciente-dni" type="hidden"><span class="campo-mensaje">Selecciona un paciente de la lista</span></div><div class="caja-campo col-6"><label for="pago-concepto">Concepto *</label><select id="pago-concepto" required><option value="">Seleccionar concepto</option>${conceptosOpts}</select><span class="campo-mensaje">Selecciona un concepto</span></div><div class="caja-campo col-4"><label for="pago-monto">Monto (S/) *</label><input id="pago-monto" type="number" min="0.01" step="0.01" placeholder="0.00" required><span class="campo-mensaje">El monto debe ser mayor a 0</span></div><div class="caja-campo col-4"><label for="pago-medio">Medio de pago *</label><select id="pago-medio" required><option value="">Seleccionar</option><option>Efectivo</option><option>Tarjeta</option><option>Transferencia</option></select><span class="campo-mensaje">Selecciona un medio de pago</span></div><div class="caja-campo col-4"><label for="pago-comprobante">Tipo comprobante *</label><select id="pago-comprobante" required><option value="">Seleccionar</option><option>Boleta</option><option>Factura</option><option>Sin comprobante</option></select><span class="campo-mensaje">Selecciona tipo de comprobante</span></div><div class="caja-campo col-6" id="wrap-monto-recibido" style="display:none"><label for="pago-recibido">Monto recibido (S/)</label><input id="pago-recibido" type="number" min="0" step="0.01" placeholder="0.00"></div><div class="caja-campo col-6" id="wrap-vuelto" style="display:none"></div><div class="caja-campo col-12"><label for="pago-observacion">Observacion</label><input id="pago-observacion" type="text" placeholder="Nota opcional sobre el pago"></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario" id="btn-registrar-pago" disabled>Registrar Pago</button></div></form><div class="caja-form-panel" style="margin-top:16px"><h4 class="caja-seccion-titulo">Ultimos movimientos</h4><div class="caja-form-grid" style="padding:0 0 10px"><div class="caja-campo col-12"><label for="buscar-movimientos">Filtrar movimientos</label><input id="buscar-movimientos" type="search" placeholder="Buscar por paciente, concepto o comprobante..."></div></div><div class="caja-tabla-wrap"><table class="caja-tabla" id="tabla-movimientos" style="min-width:0"><thead><tr><th>ID</th><th>HORA</th><th>PACIENTE</th><th>CONCEPTO</th><th>MONTO</th><th>MEDIO</th><th>COMPROBANTE</th><th>ESTADO</th></tr></thead><tbody id="tbody-movimientos">${renderFilasMovimientos()}</tbody></table></div></div></div>`;
  activarPagoConsumo(menuPadre);
  barraEstado.textContent = 'Caja > Consumo > Pago';
}

function renderFilasMovimientos(filtro){
  const q = (filtro||'').toLowerCase().trim();
  const filtrados = MOVIMIENTOS_CAJA.filter(m=>!q || m.paciente.toLowerCase().includes(q) || m.concepto.toLowerCase().includes(q) || m.comprobante.toLowerCase().includes(q));
  return filtrados.slice().reverse().slice(0,15).map(m=>`<tr><td>${m.id}</td><td>${m.fecha.split(' ')[1]||'--'}</td><td>${m.paciente}</td><td>${m.concepto}</td><td>${formatoMoneda(m.monto)}</td><td>${m.medioPago}</td><td>${m.comprobante}</td><td><span class="crud-status ${m.estado==='Anulado'?'inactivo':''}">${m.estado}</span></td></tr>`).join('');
}

function activarPagoConsumo(){
  const inputPaciente = document.getElementById('pago-paciente');
  const listaPacientes = document.getElementById('lista-pacientes-pago');
  const inputDNI = document.getElementById('pago-paciente-dni');
  const selectConcepto = document.getElementById('pago-concepto');
  const inputMonto = document.getElementById('pago-monto');
  const selectMedio = document.getElementById('pago-medio');
  const selectComprobante = document.getElementById('pago-comprobante');
  const inputRecibido = document.getElementById('pago-recibido');
  const wrapRecibido = document.getElementById('wrap-monto-recibido');
  const wrapVuelto = document.getElementById('wrap-vuelto');
  const btnRegistrar = document.getElementById('btn-registrar-pago');
  const form = document.getElementById('form-pago-consumo');

  function validarCampo(input, condicion){
    const wrap = input.closest('.caja-campo');
    if(condicion){ wrap.classList.remove('campo-invalido'); return true; }
    wrap.classList.add('campo-invalido'); return false;
  }

  function verificarFormulario(){
    const pv = inputDNI.value !== '';
    const cv = selectConcepto.value !== '';
    const mv = inputMonto.value !== '' && Number(inputMonto.value) > 0;
    const mdv = selectMedio.value !== '';
    const cv2 = selectComprobante.value !== '';
    let vv = true;
    if(selectMedio.value === 'Efectivo' && inputRecibido.value !== ''){
      vv = Number(inputRecibido.value) >= Number(inputMonto.value);
    }
    btnRegistrar.disabled = !(pv && cv && mv && mdv && cv2 && vv);
  }

  inputPaciente.addEventListener('input', function(){
    const query = this.value.trim();
    inputDNI.value = '';
    if(query.length < 2){ listaPacientes.classList.remove('mostrar'); verificarFormulario(); return; }
    const resultados = buscarPacienteCaja(query);
    if(!resultados.length){ listaPacientes.classList.remove('mostrar'); verificarFormulario(); return; }
    listaPacientes.innerHTML = resultados.map(p=>`<div class="paciente-busqueda-item" data-nombre="${p.nombre}" data-dni="${p.dni}"><b>${p.nombre}</b> <span class="pb-dni">DNI: ${p.dni}</span></div>`).join('');
    listaPacientes.classList.add('mostrar');
    listaPacientes.querySelectorAll('.paciente-busqueda-item').forEach(function(item){
      item.addEventListener('click', function(){
        inputPaciente.value = item.dataset.nombre;
        inputDNI.value = item.dataset.dni;
        listaPacientes.classList.remove('mostrar');
        validarCampo(inputPaciente, true);
        verificarFormulario();
      });
    });
  });
  inputPaciente.addEventListener('blur', function(){ setTimeout(function(){ listaPacientes.classList.remove('mostrar'); }, 200); });

  selectConcepto.addEventListener('change', function(){
    const opt = this.selectedOptions[0];
    if(opt && opt.dataset.monto && Number(opt.dataset.monto) > 0){ inputMonto.value = opt.dataset.monto; }
    validarCampo(this, this.value!=='');
    verificarFormulario();
  });

  inputMonto.addEventListener('input', function(){
    validarCampo(this, this.value!=='' && Number(this.value)>0);
    calcularVuelto();
    verificarFormulario();
  });

  selectMedio.addEventListener('change', function(){
    wrapRecibido.style.display = this.value==='Efectivo' ? '' : 'none';
    wrapVuelto.style.display = this.value==='Efectivo' ? '' : 'none';
    validarCampo(this, this.value!=='');
    verificarFormulario();
  });

  selectComprobante.addEventListener('change', function(){
    validarCampo(this, this.value!=='');
    verificarFormulario();
  });

  inputRecibido.addEventListener('input', function(){
    calcularVuelto();
    verificarFormulario();
  });

  function calcularVuelto(){
    if(selectMedio.value !== 'Efectivo' || !inputRecibido.value || !inputMonto.value){ wrapVuelto.innerHTML = ''; return; }
    var recibido = Number(inputRecibido.value);
    var monto = Number(inputMonto.value);
    var vuelto = recibido - monto;
    if(vuelto < 0){
      wrapVuelto.innerHTML = '<div class="pago-vuelto negativo">Monto insuficiente: falta ' + formatoMoneda(Math.abs(vuelto)) + '</div>';
    } else {
      wrapVuelto.innerHTML = '<div class="pago-vuelto">Vuelto: ' + formatoMoneda(vuelto) + '</div>';
    }
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var pv = validarCampo(inputPaciente, inputDNI.value!=='');
    var cv = validarCampo(selectConcepto, selectConcepto.value!=='');
    var mv = validarCampo(inputMonto, inputMonto.value!=='' && Number(inputMonto.value)>0);
    var mdv = validarCampo(selectMedio, selectMedio.value!=='');
    var cv2 = validarCampo(selectComprobante, selectComprobante.value!=='');
    if(!(pv && cv && mv && mdv && cv2)) return;

    var nroComprobante = selectComprobante.value === 'Sin comprobante' ? '--' : generarComprobante();
    var nuevoMovimiento = {
      id: generarIdMovimiento(),
      fecha: '02/09/2026 ' + new Date().toLocaleTimeString('es-PE',{hour:'2-digit',minute:'2-digit'}),
      paciente: inputPaciente.value.trim(),
      dni: inputDNI.value,
      concepto: selectConcepto.value,
      monto: Number(inputMonto.value),
      medioPago: selectMedio.value,
      comprobante: nroComprobante,
      estado: 'Pagado',
      usuario: CAJA_ACTUAL.usuario
    };
    MOVIMIENTOS_CAJA.push(nuevoMovimiento);
    var tbody = document.getElementById('tbody-movimientos');
    if(tbody) tbody.innerHTML = renderFilasMovimientos();
    form.reset();
    inputDNI.value = '';
    wrapRecibido.style.display = 'none';
    wrapVuelto.style.display = 'none';
    document.querySelectorAll('#form-pago-consumo .campo-invalido').forEach(function(el){ el.classList.remove('campo-invalido'); });
    btnRegistrar.disabled = true;
    mostrarToast('Pago registrado: ' + formatoMoneda(nuevoMovimiento.monto) + ' -- ' + nuevoMovimiento.paciente + ' (' + nroComprobante + ')');
    barraEstado.textContent = 'Pago ' + nuevoMovimiento.id + ' registrado correctamente';
  });

  var buscarMov = document.getElementById('buscar-movimientos');
  if(buscarMov) buscarMov.addEventListener('input', function(){
    var tbody = document.getElementById('tbody-movimientos');
    if(tbody) tbody.innerHTML = renderFilasMovimientos(this.value);
  });
}

function renderRegistroYPago(menuPadre){
  var vista = document.getElementById('vista-seccion');
  if(!CAJA_ACTUAL.abierta){
    vista.innerHTML = '<div class="caja-vista"><div class="migaja">Caja <b>/ Consumo</b></div><div class="caja-form-panel caja-vacio"><div class="caja-vacio-icono">⚠</div><h4>No hay caja abierta</h4><p>Apertura una caja primero para registrar pagos.</p><button class="btn-primario" id="ir-apertura-ryp">Ir a Apertura</button></div></div>';
    document.getElementById('ir-apertura-ryp').addEventListener('click',function(){ renderCajaSeccion('Apertura',menuPadre); });
    barraEstado.textContent='Caja > Registro Y Pago (requiere apertura)';
    return;
  }
  var conceptosOpts = CONCEPTOS_COBRO.map(function(c){ return '<option data-monto="'+c.monto+'">'+c.concepto+'</option>'; }).join('');
  vista.innerHTML = '<div class="caja-vista"><div class="migaja">Caja <b>/ '+menuPadre+' / Registro Y Pago</b></div><div class="caja-titulo"><div><h3>Registro y Pago</h3><p>Registra el servicio y confirma el cobro en un solo paso.</p></div></div><div class="caja-info">● Caja abierta: '+CAJA_ACTUAL.caja+'</div><form class="caja-form-panel" id="form-ryp"><p class="caja-seccion-titulo">Datos del servicio</p><div class="caja-form-grid"><div class="caja-campo col-6 paciente-busqueda-wrap"><label for="ryp-paciente">Paciente *</label><input id="ryp-paciente" type="text" placeholder="Buscar por nombre o DNI..." autocomplete="off" required><div class="paciente-busqueda-lista" id="lista-pacientes-ryp"></div><input id="ryp-paciente-dni" type="hidden"><span class="campo-mensaje">Selecciona un paciente de la lista</span></div><div class="caja-campo col-6"><label for="ryp-concepto">Concepto *</label><select id="ryp-concepto" required><option value="">Seleccionar</option>'+conceptosOpts+'</select><span class="campo-mensaje">Selecciona un concepto</span></div><div class="caja-campo col-6"><label for="ryp-monto">Monto (S/) *</label><input id="ryp-monto" type="number" min="0.01" step="0.01" placeholder="0.00" required><span class="campo-mensaje">El monto debe ser mayor a 0</span></div><div class="caja-campo col-6"><label for="ryp-medio">Medio de pago *</label><select id="ryp-medio" required><option value="">Seleccionar</option><option>Efectivo</option><option>Tarjeta</option><option>Transferencia</option></select><span class="campo-mensaje">Selecciona un medio de pago</span></div><div class="caja-campo col-6" id="wrap-ryp-recibido" style="display:none"><label for="ryp-recibido">Monto recibido (S/)</label><input id="ryp-recibido" type="number" min="0" step="0.01" placeholder="0.00"></div><div class="caja-campo col-6" id="wrap-ryp-vuelto" style="display:none"></div><div class="caja-campo col-6"><label for="ryp-comprobante">Tipo comprobante *</label><select id="ryp-comprobante" required><option value="">Seleccionar</option><option>Boleta</option><option>Factura</option><option>Sin comprobante</option></select><span class="campo-mensaje">Selecciona tipo de comprobante</span></div><div class="caja-campo col-12"><label for="ryp-observacion">Observacion</label><input id="ryp-observacion" type="text" placeholder="Nota opcional"></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario" id="btn-ryp" disabled>Registrar y Cobrar</button></div></form></div>';
  var form = document.getElementById('form-ryp');
  var btnRYP = document.getElementById('btn-ryp');
  var wrapRecibido = document.getElementById('wrap-ryp-recibido');
  var wrapVuelto = document.getElementById('wrap-ryp-vuelto');
  var inputPaciente = document.getElementById('ryp-paciente');
  var listaP = document.getElementById('lista-pacientes-ryp');
  var inputDNI = document.getElementById('ryp-paciente-dni');

  function verificarRYP(){
    var pac = inputDNI.value !== '';
    var con = document.getElementById('ryp-concepto').value !== '';
    var mon = document.getElementById('ryp-monto').value !== '' && Number(document.getElementById('ryp-monto').value) > 0;
    var med = document.getElementById('ryp-medio').value !== '';
    var com = document.getElementById('ryp-comprobante').value !== '';
    var vu = true;
    if(document.getElementById('ryp-medio').value === 'Efectivo' && document.getElementById('ryp-recibido').value !== ''){
      vu = Number(document.getElementById('ryp-recibido').value) >= Number(document.getElementById('ryp-monto').value);
    }
    btnRYP.disabled = !(pac && con && mon && med && com && vu);
  }
  function validar(input, ok){
    var w = input.closest('.caja-campo');
    if(ok){ w.classList.remove('campo-invalido'); return true; }
    w.classList.add('campo-invalido'); return false;
  }

  inputPaciente.addEventListener('input', function(){
    var q = this.value.trim();
    inputDNI.value = '';
    if(q.length < 2){ listaP.classList.remove('mostrar'); verificarRYP(); return; }
    var res = buscarPacienteCaja(q);
    if(!res.length){ listaP.classList.remove('mostrar'); verificarRYP(); return; }
    listaP.innerHTML = res.map(function(p){ return '<div class="paciente-busqueda-item" data-nombre="'+p.nombre+'" data-dni="'+p.dni+'"><b>'+p.nombre+'</b> <span class="pb-dni">DNI: '+p.dni+'</span></div>'; }).join('');
    listaP.classList.add('mostrar');
    listaP.querySelectorAll('.paciente-busqueda-item').forEach(function(item){
      item.addEventListener('click', function(){
        inputPaciente.value = item.dataset.nombre;
        inputDNI.value = item.dataset.dni;
        listaP.classList.remove('mostrar');
        validar(inputPaciente, true);
        verificarRYP();
      });
    });
  });
  inputPaciente.addEventListener('blur', function(){ setTimeout(function(){ listaP.classList.remove('mostrar'); }, 200); });

  document.getElementById('ryp-concepto').addEventListener('change', function(){
    var opt = this.selectedOptions[0];
    if(opt && opt.dataset.monto && Number(opt.dataset.monto) > 0) document.getElementById('ryp-monto').value = opt.dataset.monto;
    validar(this, this.value!==''); verificarRYP();
  });
  document.getElementById('ryp-monto').addEventListener('input', function(){
    validar(this, this.value!=='' && Number(this.value)>0);
    if(document.getElementById('ryp-medio').value==='Efectivo' && document.getElementById('ryp-recibido').value){
      var v = Number(document.getElementById('ryp-recibido').value) - Number(this.value);
      wrapVuelto.innerHTML = v < 0 ? '<div class="pago-vuelto negativo">Falta '+formatoMoneda(Math.abs(v))+'</div>' : '<div class="pago-vuelto">Vuelto: '+formatoMoneda(v)+'</div>';
    }
    verificarRYP();
  });
  document.getElementById('ryp-medio').addEventListener('change', function(){
    wrapRecibido.style.display = this.value==='Efectivo' ? '' : 'none';
    wrapVuelto.style.display = this.value==='Efectivo' ? '' : 'none';
    validar(this, this.value!==''); verificarRYP();
  });
  document.getElementById('ryp-comprobante').addEventListener('change', function(){ validar(this, this.value!==''); verificarRYP(); });
  document.getElementById('ryp-recibido').addEventListener('input', function(){
    var monto = Number(document.getElementById('ryp-monto').value)||0;
    var v = Number(this.value) - monto;
    wrapVuelto.innerHTML = v < 0 ? '<div class="pago-vuelto negativo">Falta '+formatoMoneda(Math.abs(v))+'</div>' : '<div class="pago-vuelto">Vuelto: '+formatoMoneda(v)+'</div>';
    verificarRYP();
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var pac = validar(inputPaciente, inputDNI.value!=='');
    var con = validar(document.getElementById('ryp-concepto'), document.getElementById('ryp-concepto').value!=='');
    var mon = validar(document.getElementById('ryp-monto'), document.getElementById('ryp-monto').value!=='' && Number(document.getElementById('ryp-monto').value)>0);
    var med = validar(document.getElementById('ryp-medio'), document.getElementById('ryp-medio').value!=='');
    var com = validar(document.getElementById('ryp-comprobante'), document.getElementById('ryp-comprobante').value!=='');
    if(!(pac && con && mon && med && com)) return;
    var nroComprobante = document.getElementById('ryp-comprobante').value === 'Sin comprobante' ? '--' : generarComprobante();
    var nuevo = {
      id: generarIdMovimiento(),
      fecha: '02/09/2026 ' + new Date().toLocaleTimeString('es-PE',{hour:'2-digit',minute:'2-digit'}),
      paciente: inputPaciente.value.trim(),
      dni: inputDNI.value,
      concepto: document.getElementById('ryp-concepto').value,
      monto: Number(document.getElementById('ryp-monto').value),
      medioPago: document.getElementById('ryp-medio').value,
      comprobante: nroComprobante,
      estado: 'Pagado',
      usuario: CAJA_ACTUAL.usuario
    };
    MOVIMIENTOS_CAJA.push(nuevo);
    mostrarToast('Servicio registrado y cobrado: ' + formatoMoneda(nuevo.monto) + ' -- ' + nuevo.paciente + ' (' + nroComprobante + ')');
    barraEstado.textContent = nuevo.id + ' registrado y cobrado correctamente';
    form.reset();
    inputDNI.value = '';
    wrapRecibido.style.display = 'none';
    wrapVuelto.style.display = 'none';
    document.querySelectorAll('#form-ryp .campo-invalido').forEach(function(el){ el.classList.remove('campo-invalido'); });
    btnRYP.disabled = true;
  });
  barraEstado.textContent = 'Caja > Registro Y Pago';
}

function renderVentaSinAdmision(menuPadre){
  var vista = document.getElementById('vista-seccion');
  if(!CAJA_ACTUAL.abierta){
    vista.innerHTML = '<div class="caja-vista"><div class="migaja">Caja <b>/ Consumo</b></div><div class="caja-form-panel caja-vacio"><div class="caja-vacio-icono">⚠</div><h4>No hay caja abierta</h4><p>Apertura una caja primero para registrar ventas.</p><button class="btn-primario" id="ir-apertura-vsa">Ir a Apertura</button></div></div>';
    document.getElementById('ir-apertura-vsa').addEventListener('click',function(){ renderCajaSeccion('Apertura',menuPadre); });
    return;
  }
  vista.innerHTML = '<div class="caja-vista"><div class="migaja">Caja <b>/ '+menuPadre+' / Venta Sin Admision</b></div><div class="caja-titulo"><div><h3>Venta Sin Admision</h3><p>Registra una venta directa a un cliente que no ha sido admitido en consulta.</p></div></div><div class="caja-info">● Caja abierta: '+CAJA_ACTUAL.caja+'</div><form class="caja-form-panel" id="form-vsa"><div class="caja-form-grid"><div class="caja-campo col-6"><label for="vsa-documento">Documento del cliente *</label><input id="vsa-documento" type="text" placeholder="DNI o RUC" required><span class="campo-mensaje">Ingresa DNI (8 digitos) o RUC (11 digitos)</span></div><div class="caja-campo col-6"><label for="vsa-nombre">Nombre del cliente *</label><input id="vsa-nombre" type="text" placeholder="Razon social o nombre" required><span class="campo-mensaje">Ingresa el nombre del cliente</span></div><div class="caja-campo col-6"><label for="vsa-producto">Producto *</label><select id="vsa-producto" required><option value="">Seleccionar</option><option>Paracetamol 500mg</option><option>Ibuprofeno 400mg</option><option>Venda elastica 10cm</option><option>Jeringa 5ml</option><option>Gasa esteril</option></select><span class="campo-mensaje">Selecciona un producto</span></div><div class="caja-campo col-3"><label for="vsa-cantidad">Cantidad *</label><input id="vsa-cantidad" type="number" min="1" value="1" required></div><div class="caja-campo col-3"><label for="vsa-precio">Precio unit. (S/) *</label><input id="vsa-precio" type="number" min="0.01" step="0.01" value="0" required></div><div class="caja-campo col-6"><label for="vsa-medio">Medio de pago *</label><select id="vsa-medio" required><option value="">Seleccionar</option><option>Efectivo</option><option>Tarjeta</option><option>Transferencia</option></select></div><div class="caja-campo col-6"><label>Total</label><div style="padding:10px;background:var(--gris-100);border:1px solid var(--gris-300);border-radius:7px;font-size:14px;font-weight:700;color:var(--azul-700)" id="vsa-total">S/ 0.00</div></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario" id="btn-vsa" disabled>Emitir Venta</button></div></form></div>';
  var form = document.getElementById('form-vsa');
  var btnVSA = document.getElementById('btn-vsa');
  var inputDoc = document.getElementById('vsa-documento');
  var inputNombre = document.getElementById('vsa-nombre');
  var inputProd = document.getElementById('vsa-producto');
  var inputCant = document.getElementById('vsa-cantidad');
  var inputPrec = document.getElementById('vsa-precio');
  var inputMedio = document.getElementById('vsa-medio');
  var divTotal = document.getElementById('vsa-total');

  function calcTotal(){
    var total = (Number(inputCant.value)||0) * (Number(inputPrec.value)||0);
    divTotal.textContent = formatoMoneda(total);
    return total;
  }
  function verificar(){
    var doc = inputDoc.value.trim();
    var docValido = /^\d{8}$/.test(doc) || /^\d{11}$/.test(doc);
    btnVSA.disabled = !(docValido && inputNombre.value.trim() && inputProd.value && Number(inputCant.value)>0 && Number(inputPrec.value)>0 && inputMedio.value);
  }

  inputDoc.addEventListener('input', function(){
    var v = /^\d{8}$/.test(this.value) || /^\d{11}$/.test(this.value);
    var w = this.closest('.caja-campo');
    if(this.value && !v) w.classList.add('campo-invalido'); else w.classList.remove('campo-invalido');
    verificar();
  });
  inputNombre.addEventListener('input', verificar);
  inputProd.addEventListener('change', verificar);
  inputCant.addEventListener('input', function(){ calcTotal(); verificar(); });
  inputPrec.addEventListener('input', function(){ calcTotal(); verificar(); });
  inputMedio.addEventListener('change', verificar);

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var total = calcTotal();
    var nroComprobante = generarComprobante();
    var nuevo = {
      id: generarIdMovimiento(),
      fecha: '02/09/2026 ' + new Date().toLocaleTimeString('es-PE',{hour:'2-digit',minute:'2-digit'}),
      paciente: inputNombre.value.trim(),
      dni: inputDoc.value,
      concepto: 'Farmacia',
      monto: total,
      medioPago: inputMedio.value,
      comprobante: nroComprobante,
      estado: 'Pagado',
      usuario: CAJA_ACTUAL.usuario
    };
    MOVIMIENTOS_CAJA.push(nuevo);
    mostrarToast('Venta sin admision emitida: ' + formatoMoneda(total) + ' -- ' + nuevo.paciente + ' (' + nroComprobante + ')');
    form.reset();
    divTotal.textContent = 'S/ 0.00';
    btnVSA.disabled = true;
    barraEstado.textContent = nuevo.id + ' venta emitida correctamente';
  });
  barraEstado.textContent = 'Caja > Venta Sin Admision';
}

function renderNotaCredito(menuPadre){
  var vista = document.getElementById('vista-seccion');
  if(!CAJA_ACTUAL.abierta){
    vista.innerHTML = '<div class="caja-vista"><div class="migaja">Caja <b>/ Consumo</b></div><div class="caja-form-panel caja-vacio"><div class="caja-vacio-icono">⚠</div><h4>No hay caja abierta</h4><p>Apertura una caja primero.</p><button class="btn-primario" id="ir-apertura-nc">Ir a Apertura</button></div></div>';
    document.getElementById('ir-apertura-nc').addEventListener('click',function(){ renderCajaSeccion('Apertura',menuPadre); });
    return;
  }
  var pagosRegistrados = MOVIMIENTOS_CAJA.filter(function(m){ return m.estado === 'Pagado'; });
  var opcionesPagos = pagosRegistrados.map(function(m){ return '<option value="'+m.id+'">'+m.id+' - '+m.paciente+' - '+formatoMoneda(m.monto)+' ('+m.concepto+')</option>'; }).join('');
  vista.innerHTML = '<div class="caja-vista"><div class="migaja">Caja <b>/ '+menuPadre+' / Nota De Credito</b></div><div class="caja-titulo"><div><h3>Nota de Credito</h3><p>Anula un pago registrado y emite una nota de credito asociada.</p></div></div><div class="caja-info">● Caja abierta: '+CAJA_ACTUAL.caja+'</div><form class="caja-form-panel" id="form-nota-credito"><div class="caja-form-grid"><div class="caja-campo col-12"><label for="nc-comprobante">Comprobante a anular *</label><select id="nc-comprobante" required><option value="">Seleccionar comprobante</option>'+opcionesPagos+'</select><span class="campo-mensaje">Selecciona el comprobante que deseas anular</span></div><div class="caja-campo col-12" id="nc-detalle-pago" style="display:none"></div><div class="caja-campo col-12"><label for="nc-motivo">Motivo de anulacion *</label><textarea id="nc-motivo" rows="3" style="width:100%;padding:10px;border:1px solid #cbd8e4;border-radius:7px;font-size:12px;resize:vertical" placeholder="Describe el motivo de la anulacion..." required></textarea><span class="campo-mensaje">El motivo es obligatorio</span></div></div><div class="caja-form-actions"><button type="submit" class="btn-primario" id="btn-nc" disabled>Emitir Nota de Credito</button></div></form></div>';

  var form = document.getElementById('form-nota-credito');
  var selectComprobante = document.getElementById('nc-comprobante');
  var textareaMotivo = document.getElementById('nc-motivo');
  var btnNC = document.getElementById('btn-nc');
  var divDetalle = document.getElementById('nc-detalle-pago');

  selectComprobante.addEventListener('change', function(){
    var w = this.closest('.caja-campo');
    if(this.value){ w.classList.remove('campo-invalido'); } else { w.classList.add('campo-invalido'); }
    if(this.value){
      var pago = MOVIMIENTOS_CAJA.find(function(m){ return m.id === selectComprobante.value; });
      if(pago){
        divDetalle.style.display = '';
        divDetalle.innerHTML = '<div class="pago-resumen"><div class="pago-resumen-item"><span>Paciente</span><strong>'+pago.paciente+'</strong></div><div class="pago-resumen-item"><span>Monto</span><strong>'+formatoMoneda(pago.monto)+'</strong></div><div class="pago-resumen-item"><span>Concepto</span><strong>'+pago.concepto+'</strong></div></div>';
      }
    } else {
      divDetalle.style.display = 'none';
    }
    btnNC.disabled = !(selectComprobante.value && textareaMotivo.value.trim());
  });

  textareaMotivo.addEventListener('input', function(){
    var w = this.closest('.caja-campo');
    if(this.value.trim()) w.classList.remove('campo-invalido'); else w.classList.add('campo-invalido');
    btnNC.disabled = !(selectComprobante.value && textareaMotivo.value.trim());
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!selectComprobante.value || !textareaMotivo.value.trim()) return;
    var pago = MOVIMIENTOS_CAJA.find(function(m){ return m.id === selectComprobante.value; });
    if(!pago) return;
    pago.estado = 'Anulado';
    var nc = {
      id: generarIdMovimiento(),
      fecha: '02/09/2026 ' + new Date().toLocaleTimeString('es-PE',{hour:'2-digit',minute:'2-digit'}),
      paciente: pago.paciente,
      dni: pago.dni,
      concepto: 'Nota Credito - ' + pago.concepto,
      monto: pago.monto * -1,
      medioPago: pago.medioPago,
      comprobante: 'NC-' + generarComprobante(),
      estado: 'Pagado',
      usuario: CAJA_ACTUAL.usuario
    };
    MOVIMIENTOS_CAJA.push(nc);
    mostrarToast('Nota de credito emitida: ' + formatoMoneda(pago.monto) + ' -- ' + pago.paciente + ' (comprobante original: ' + pago.comprobante + ')', 'info');
    barraEstado.textContent = nc.id + ' nota de credito emitida correctamente';
    form.reset();
    divDetalle.style.display = 'none';
    btnNC.disabled = true;
    document.querySelectorAll('#form-nota-credito .campo-invalido').forEach(function(el){ el.classList.remove('campo-invalido'); });
  });
  barraEstado.textContent = 'Caja > Nota De Credito';
}

function renderComprobantesCaja(menuPadre){
  const comprobantes=[
    ['AMBULATORIO','CONSULTA','20605508384','MEDICAL ASSISTEM S.A.C.','20100210909','LA POSITIVA SEGUROS Y REASEGUROS S.A.','COLQUE MANUELO TERESA','11482','F002-00010853','2026-09-03','2026-10-18','45','475','75.86','13.65','89.51','MCACERES','EMITIDO','PENDIENTE','01'],
    ['AMBULATORIO','CONSULTA','20605508384','MEDICAL ASSISTEM S.A.C.','20100210909','LA POSITIVA SEGUROS Y REASEGUROS S.A.','PEREZ COLQUE LUZ KATTY','11483','F002-00010852','2026-09-03','2026-10-18','45','475','75.86','13.65','89.51','MCACERES','EMITIDO','PENDIENTE','01'],
    ['AMBULATORIO','CONSULTA','20605508384','MEDICAL ASSISTEM S.A.C.','72353398','LA POSITIVA SEGUROS Y REASEGUROS S.A.','MONTELLANOS MURILLO DIEGO ALONSO','12250','B002-00014627','2026-09-03','—','—','523','169.49','30.51','200.00','IHUAMAN','EMITIDO','PENDIENTE','03']
  ];
  const columnas=['TIPO CUENTA','TIPO ATENCIÓN','RUC EMISOR','RAZÓN SOCIAL EMISOR','N° DOCUMENTO','CLIENTE','PACIENTE','CUENTA','COMPROBANTE','FECHA EMISIÓN','FECHA VENCIMIENTO','DÍAS CRÉDITO','CIERRE CAJA','BASE','IGV','TOTAL','USUARIO','ESTADO','ESTADO SUNAT','TIPO COMPROBANTE'];
  const vista=document.getElementById('vista-seccion');
  vista.innerHTML=`<div class="caja-vista comprobantes-vista"><div class="migaja">Caja <b>/ ${menuPadre} / Comprobantes</b></div><div class="caja-titulo"><div><h3>Comprobantes Emitidos</h3><p>Consulta los comprobantes emitidos por caja y estado SUNAT.</p></div></div><div class="caja-form-panel comprobantes-filtros"><div class="caja-form-grid"><div class="caja-campo col-3"><label for="comprobante-desde">Desde</label><input id="comprobante-desde" type="date" value="2026-09-03"></div><div class="caja-campo col-3"><label for="comprobante-hasta">Hasta</label><input id="comprobante-hasta" type="date" value="2026-09-03"></div><div class="caja-campo col-3"><label for="comprobante-estado">Estado</label><select id="comprobante-estado"><option>Todos</option><option>Emitido</option><option>Anulado</option></select></div><div class="caja-campo col-3"><label for="comprobante-sunat">Estado SUNAT</label><select id="comprobante-sunat"><option>Todos</option><option>Pendiente</option><option>Aceptado</option></select></div><div class="caja-campo col-12"><label for="buscar-comprobante">Buscar comprobante, cliente o paciente</label><input id="buscar-comprobante" type="search" placeholder="Buscar por N° comprobante, cliente, RUC/DNI o cuenta..."></div></div><div class="caja-form-actions"><button class="btn-secundario" id="limpiar-comprobantes">Limpiar filtros</button><button class="btn-primario" id="consultar-comprobantes">🔎 Consultar</button><button class="btn-secundario" id="exportar-comprobantes">▣ Exportar Excel</button></div><div class="crud-count" id="contador-comprobantes">1–${comprobantes.length} de 19 comprobantes</div></div><div class="caja-form-panel comprobantes-tabla-panel"><div class="caja-tabla-wrap"><table class="caja-tabla comprobantes-tabla" id="tabla-comprobantes"><thead><tr>${columnas.map(col=>`<th>${col}</th>`).join('')}<th>IMPRIMIR</th></tr></thead><tbody>${comprobantes.map(fila=>`<tr>${fila.map(c=>`<td>${c}</td>`).join('')}<td><button class="btn-icono" title="Imprimir comprobante" aria-label="Imprimir comprobante">▣</button></td></tr>`).join('')}</tbody></table></div></div></div>`;
  const buscar=document.getElementById('buscar-comprobante');
  buscar.addEventListener('input',e=>document.querySelectorAll('#tabla-comprobantes tbody tr').forEach(fila=>fila.style.display=fila.textContent.toLowerCase().includes(e.target.value.toLowerCase())?'':'none'));
  document.getElementById('limpiar-comprobantes').addEventListener('click',()=>{buscar.value='';document.getElementById('comprobante-estado').value='Todos';document.getElementById('comprobante-sunat').value='Todos';document.querySelectorAll('#tabla-comprobantes tbody tr').forEach(fila=>fila.style.display='');barraEstado.textContent='Filtros de comprobantes limpiados (demo).';});
  document.getElementById('consultar-comprobantes').addEventListener('click',()=>{barraEstado.textContent='Consulta de comprobantes realizada correctamente (demo).';});
  document.getElementById('exportar-comprobantes').addEventListener('click',()=>{barraEstado.textContent='Exportación Excel de comprobantes preparada (demo).';});
  barraEstado.textContent='Caja › Comprobante › Comprobantes';
}

function renderHistoriaClinica(menuPadre){
  const vista = document.getElementById('vista-seccion');
  vista.innerHTML = `
    <div class="historia-shell">
      <div class="migaja">Admisión <b>/ ${menuPadre} / Historia Clínica</b></div>
      <div class="historia-heading"><h3>Historia</h3><button class="btn-volver" id="volver-pacientes">← Volver</button></div>
      <div class="historia-panel">
        <div class="historia-tools"><button class="btn-icono" title="Nuevo registro" aria-label="Nuevo registro">▱</button><button class="btn-icono" title="Imprimir historia" aria-label="Imprimir historia">▣</button><button class="btn-icono" title="Ver historia" aria-label="Ver historia">◉</button><input class="historia-search" id="buscar-paciente" type="search" placeholder="Buscar paciente"></div>
        <div class="historia-tabs"><button class="historia-tab activo" data-tab="generales">Datos Generales</button><button class="historia-tab" data-tab="observacion">Observación</button></div>
        <form id="form-historia">
          <div class="historia-tab-panel" data-panel="generales">
            <fieldset class="historia-fieldset"><legend>Datos Personales</legend><div class="historia-grid">
              <div class="historia-field col-2"><label for="tipo-documento">Tipo de documento</label><select id="tipo-documento"><option>Seleccionar</option><option>DNI</option><option>CE</option><option>Pasaporte</option></select></div>
              <div class="historia-field col-4"><label for="numero-documento">N° documento (Enter para buscar la persona)</label><input id="numero-documento" type="text"></div>
              <div class="historia-field col-2"><label for="estado-civil">Estado civil</label><select id="estado-civil"><option>Seleccionar</option><option>Soltero(a)</option><option>Casado(a)</option><option>Viudo(a)</option></select></div>
              <div class="historia-field col-2"><label for="genero">Género</label><select id="genero"><option>Seleccionar</option><option>Femenino</option><option>Masculino</option></select></div>
              <div class="historia-field col-2"><label for="fecha-nacimiento">Fecha de Nacimiento</label><input id="fecha-nacimiento" type="date"></div>
              <div class="historia-field col-3"><label for="apellido-paterno">Apellido Paterno</label><input id="apellido-paterno" type="text"></div>
              <div class="historia-field col-4"><label for="apellido-materno">Apellido Materno</label><input id="apellido-materno" type="text"></div>
              <div class="historia-field col-5"><label for="nombres">Nombre(s)</label><input id="nombres" type="text"></div>
            </div></fieldset>
            <div class="historia-grid"><fieldset class="historia-fieldset col-6"><legend>Historia</legend><div class="historia-grid"><div class="historia-field col-4"><label for="numero-historia">Historia</label><input id="numero-historia" type="text" readonly></div><div class="historia-field col-4"><label for="referencia">N° Referencia</label><input id="referencia" type="text" readonly></div><div class="historia-field col-4"><label for="iafas">IAFAS</label><select id="iafas"><option>Seleccionar</option><option>SIS</option><option>Particular</option></select></div></div></fieldset><fieldset class="historia-fieldset col-6"><legend>Médico Tratante</legend><div class="historia-field"><label for="medico">Médico</label><select id="medico"><option>Seleccionar</option><option>Dr. Salazar</option><option>Dra. Vidal</option></select></div></fieldset></div>
            <div class="historia-grid"><fieldset class="historia-fieldset col-6"><legend>Canal de Captación</legend><div class="historia-field"><label for="canal">Canal</label><select id="canal"><option>Seleccionar</option><option>Web</option><option>Referido</option><option>Call Center</option></select></div></fieldset><fieldset class="historia-fieldset col-6"><legend>Contactos</legend><button type="button" class="btn-secundario" id="agregar-contacto">＋ Agregar</button><div id="contactos-lista"></div></fieldset></div>
            <fieldset class="historia-fieldset"><legend>Dirección</legend><div class="historia-grid"><div class="historia-field col-2"><label for="pais">País</label><select id="pais"><option>PERÚ</option></select></div><div class="historia-field col-2"><label for="departamento">Departamento</label><select id="departamento"><option>LIMA</option></select></div><div class="historia-field col-2"><label for="provincia">Provincia</label><select id="provincia"><option>LIMA</option></select></div><div class="historia-field col-2"><label for="distrito">Distrito</label><select id="distrito"><option>Seleccionar</option></select></div><div class="historia-field col-12"><label for="direccion">Vía y Número</label><input id="direccion" type="text"></div></div></fieldset>
          </div>
          <div class="historia-tab-panel" data-panel="observacion" hidden><fieldset class="historia-fieldset"><legend>Observación</legend><button type="button" class="btn-secundario" id="agregar-observacion">＋ Agregar</button><div class="observaciones-lista" id="observaciones-lista"><p class="observacion-vacia">No hay observaciones registradas.</p></div></fieldset></div>
          <div class="historia-footer"><button type="button" class="btn-secundario" id="cancelar-historia">Cancelar</button><button type="submit" class="btn-primario">Guardar</button></div>
        </form>
      </div>
    </div>
  `;
  document.getElementById('volver-pacientes').addEventListener('click', ()=>{ vista.innerHTML='<div class="migaja"><b>Pacientes</b></div><h3>Selecciona una opción del menú para ver su contenido</h3>'; });
  document.querySelectorAll('.historia-tab').forEach(tab=>tab.addEventListener('click', ()=>{ document.querySelectorAll('.historia-tab').forEach(x=>x.classList.toggle('activo',x===tab)); document.querySelectorAll('.historia-tab-panel').forEach(panel=>panel.hidden=panel.dataset.panel!==tab.dataset.tab); }));
  document.getElementById('agregar-contacto').addEventListener('click', ()=>{ document.getElementById('contactos-lista').innerHTML='<input class="historia-field" style="width:100%;margin-top:10px;padding:9px;border:1px solid #cbd8e4;border-radius:6px" placeholder="Teléfono o correo">'; });
  document.getElementById('agregar-observacion').addEventListener('click', ()=>{
    const lista=document.getElementById('observaciones-lista');
    if(lista.querySelector('.observacion-vacia')) lista.innerHTML='';
    const item=document.createElement('div');
    item.className='observacion-item';
    item.innerHTML='<input type="date" value="2026-09-02"><input type="text" placeholder="Escribe una observación"><button type="button" class="btn-icono" aria-label="Eliminar observación">×</button>';
    item.querySelector('button').addEventListener('click', ()=>{ item.remove(); if(!lista.children.length) lista.innerHTML='<p class="observacion-vacia">No hay observaciones registradas.</p>'; });
    lista.appendChild(item);
    item.querySelector('input[type="text"]').focus();
  });
  document.getElementById('form-historia').addEventListener('submit', e=>{ e.preventDefault(); barraEstado.textContent='Historia clínica guardada correctamente (demo).'; });
  document.getElementById('cancelar-historia').addEventListener('click', ()=>document.getElementById('form-historia').reset());
  document.getElementById('buscar-paciente').addEventListener('input', e=>{ barraEstado.textContent=e.target.value ? `Buscando paciente: ${e.target.value}` : `Admisión › ${menuPadre} › Historia Clínica`; });
  barraEstado.textContent=`Admisión › ${menuPadre} › Historia Clínica`;
}

function renderCrudFichero(seccion, menuPadre){
  const config = CRUD_FICHEROS[seccion];
  let paginaActual = 1;
  const porPagina = 10;
  const vista = document.getElementById('vista-seccion');
  const renderTabla = (busqueda='')=>{
    const consulta = busqueda.trim().toLowerCase();
    const resultados = config.filas.filter(fila => Object.values(fila).join(' ').toLowerCase().includes(consulta));
    const totalPaginas = Math.max(1, Math.ceil(resultados.length / porPagina));
    paginaActual = Math.min(paginaActual, totalPaginas);
    const inicio = (paginaActual - 1) * porPagina;
    const visibles = resultados.slice(inicio, inicio + porPagina);
    const filas = visibles.length ? visibles.map((fila, indice)=>`
      <tr>
        <td class="crud-code">${fila.id}</td>
        <td>${fila.descripcion}</td>
        ${fila.uso ? `<td>${fila.uso}</td>` : ''}
        <td><span class="crud-status ${fila.activo === 'INACTIVO' ? 'inactivo' : ''}">${fila.activo}</span></td>
        <td><button class="btn-icono btn-editar" data-index="${config.filas.indexOf(fila)}" title="Editar registro" aria-label="Editar registro">✎</button></td>
      </tr>
    `).join('') : `<tr><td colspan="${config.columnas.length + 1}" class="sin-resultados">No se encontraron registros con ese filtro.</td></tr>`;
    const paginas = Array.from({length:totalPaginas}, (_,i)=>`<button class="pagina ${paginaActual === i+1 ? 'actual' : ''}" data-page="${i+1}">${i+1}</button>`).join('');
    vista.innerHTML = `
      <div class="crud-shell">
        <div class="migaja">Admisión <b>/ Ficheros</b> / ${seccion}</div>
        <div class="crud-heading">
          <div><h3>${seccion}</h3><p>${config.descripcion}</p></div>
          <div class="crud-actions"><button class="btn-secundario" id="btn-agregar">＋ Agregar</button><button class="btn-icono" id="btn-exportar" title="Exportar registros" aria-label="Exportar registros">▣</button></div>
        </div>
        <div class="crud-panel">
          <div class="crud-toolbar"><div class="filtro"><label for="filtro-crud">Filtrar (todos los campos)</label><input id="filtro-crud" type="search" placeholder="Escribe para buscar..." value="${busqueda}"></div><span class="crud-count">${resultados.length} registros</span></div>
          <div class="crud-table-wrap"><table class="crud-table"><thead><tr>${config.columnas.map(c=>`<th>${c}</th>`).join('')}<th>Editar</th></tr></thead><tbody>${filas}</tbody></table></div>
          <div class="crud-footer"><span class="crud-count">Mostrando ${visibles.length ? inicio + 1 : 0}-${Math.min(inicio + visibles.length, resultados.length)} de ${resultados.length}</span><div class="paginacion"><button class="pagina" id="pagina-anterior" ${paginaActual === 1 ? 'disabled' : ''}>‹</button>${paginas}<button class="pagina" id="pagina-siguiente" ${paginaActual === totalPaginas ? 'disabled' : ''}>›</button></div></div>
        </div>
      </div>
    `;
    document.getElementById('filtro-crud').addEventListener('input', e=>{ paginaActual=1; renderTabla(e.target.value); });
    document.getElementById('btn-agregar').addEventListener('click', ()=>abrirModalCrud(seccion, null, renderTabla));
    document.getElementById('btn-exportar').addEventListener('click', ()=>{ barraEstado.textContent=`Exportación de ${seccion} preparada (demo).`; });
    document.querySelectorAll('.btn-editar').forEach(btn=>btn.addEventListener('click', ()=>abrirModalCrud(seccion, Number(btn.dataset.index), renderTabla)));
    document.querySelectorAll('.pagina[data-page]').forEach(btn=>btn.addEventListener('click', ()=>{ paginaActual=Number(btn.dataset.page); renderTabla(document.getElementById('filtro-crud').value); }));
    document.getElementById('pagina-anterior').addEventListener('click', ()=>{ paginaActual--; renderTabla(document.getElementById('filtro-crud').value); });
    document.getElementById('pagina-siguiente').addEventListener('click', ()=>{ paginaActual++; renderTabla(document.getElementById('filtro-crud').value); });
  };
  renderTabla();
  barraEstado.textContent = `Admisión › Ficheros › ${seccion}`;
}

function abrirModalCrud(seccion, indice, alGuardar){
  const config = CRUD_FICHEROS[seccion];
  const siguienteId = String(Math.max(0, ...config.filas.map(fila=>Number(fila.id) || 0)) + 1);
  const existente = indice === null ? {id:seccion === 'Consultorios' ? siguienteId : '',descripcion:'',codigoIpress:'',uso:'CONSULTORIO',activo:'ACTIVO',modulo:''} : config.filas[indice];
  const campos = config.campos.map(([clave, etiqueta, tipo, oculto])=>{
    if(oculto) return `<input id="campo-${clave}" type="hidden" value="${existente[clave] || ''}">`;
    if(tipo === 'select'){
      const opciones = clave === 'uso' ? ['CONSULTORIO','QUIROFANO'] : ['ACTIVO','INACTIVO'];
      return `<div class="campo"><label for="campo-${clave}">${etiqueta}</label><select id="campo-${clave}">${opciones.map(op=>`<option ${existente[clave] === op ? 'selected' : ''}>${op}</option>`).join('')}</select></div>`;
    }
    return `<div class="campo"><label for="campo-${clave}">${etiqueta}</label><input id="campo-${clave}" type="${tipo}" value="${existente[clave]}" required></div>`;
  }).join('');
  const modal = document.createElement('div');
  modal.className='modal-backdrop';
  modal.innerHTML=`<div class="modal" role="dialog" aria-modal="true" aria-labelledby="titulo-modal"><div class="modal-header"><h4 id="titulo-modal">${indice === null ? 'Agregar' : 'Editar'} ${seccion}</h4><button class="btn-icono" id="cerrar-modal" aria-label="Cerrar">×</button></div><form id="form-crud"><div class="modal-body">${campos}</div><div class="modal-actions">${indice === null ? '' : '<button type="button" class="btn-peligro" id="eliminar-registro">Eliminar</button>'}<button type="button" class="btn-secundario" id="cancelar-modal">Cancelar</button><button type="submit" class="btn-primario">Guardar cambios</button></div></form></div>`;
  document.body.appendChild(modal);
  const cerrar=()=>modal.remove();
  modal.querySelector('#cerrar-modal').addEventListener('click', cerrar);
  modal.querySelector('#cancelar-modal').addEventListener('click', cerrar);
  modal.addEventListener('click', e=>{ if(e.target === modal) cerrar(); });
  if(indice !== null) modal.querySelector('#eliminar-registro').addEventListener('click', ()=>{
    if(!confirm(`¿Eliminar el registro ${existente.descripcion || existente.id}?`)) return;
    config.filas.splice(indice, 1);
    cerrar();
    alGuardar();
    barraEstado.textContent=`Registro eliminado de ${seccion} (demo).`;
  });
  modal.querySelector('#form-crud').addEventListener('submit', e=>{
    e.preventDefault();
    const registro={};
    config.campos.forEach(([clave])=>registro[clave]=modal.querySelector(`#campo-${clave}`).value.trim());
    if(indice === null) config.filas.unshift(registro); else config.filas[indice]=registro;
    cerrar();
    alGuardar();
    barraEstado.textContent=`${seccion} actualizado correctamente (demo).`;
  });
  const primerCampo = modal.querySelector('input:not([type="hidden"]), select');
  if(primerCampo) primerCampo.focus();
}

function renderDetalle(m){
  renderNav(m.id);

  if(m.id === 'admision' || m.id === 'caja' || m.id === 'emergencia' || m.id === 'hospitalizacion' || m.id === 'farmacia' || m.id === 'logistica' || m.id === 'quirurgico' || m.id === 'prequirurgico' || m.id === 'facturacion' || m.id === 'sig' || m.id === 'laboratorio' || m.id === 'honorarios'){
    const menus = m.id === 'caja' ? MENU_CAJA : m.id === 'emergencia' ? MENU_EMERGENCIA : m.id === 'hospitalizacion' ? MENU_HOSPITALIZACION : m.id === 'logistica' ? MENU_LOGISTICA : m.id === 'quirurgico' ? MENU_QUIRURGICO : m.id === 'prequirurgico' ? MENU_PREQUIRURGICO : m.id === 'facturacion' ? MENU_FACTURACION : m.id === 'sig' ? MENU_SIG : m.id === 'laboratorio' ? MENU_LABORATORIO : m.id === 'honorarios' ? MENU_HONORARIOS : MENU_ADMISION;
    contenido.innerHTML = `
      <div class="panel-detalle">
        <div class="panel-header">
          <h2>${m.icono}&nbsp; ${m.nombre}</h2>
          <button class="btn-volver" id="btn-volver">← Volver a Módulos</button>
        </div>
        ${renderMenuInterno(m, menus)}
      </div>
    `;
    document.getElementById('btn-volver').addEventListener('click', renderGridModulos);
    activarMenuInterno();
    barraEstado.textContent = `Viendo módulo: ${m.nombre}`;
    return;
  }

  const filasHtml = m.filas.map((fila, i)=>{
    const celdas = fila.slice(0,-1).map(c=>`<td>${c}</td>`).join('');
    const claseEstado = fila[fila.length-1];
    const textoEstado = m.estados[i];
    return `<tr>${celdas}<td><span class="estado ${claseEstado}">${textoEstado}</span></td></tr>`;
  }).join('');

  contenido.innerHTML = `
    <div class="panel-detalle">
      <div class="panel-header">
        <h2>${m.icono}&nbsp; ${m.nombre}</h2>
        <button class="btn-volver" id="btn-volver">← Volver a Módulos</button>
      </div>
      <div class="panel-body">
        <div class="kpis">
          ${m.kpis.map(([v,l])=>`<div class="kpi"><div class="valor">${v}</div><div class="etiqueta">${l}</div></div>`).join('')}
        </div>
        <div class="toolbar">
          <input type="text" id="buscador" placeholder="Buscar en ${m.nombre.toLowerCase()}...">
          <button class="btn-primario" id="btn-nuevo">+ Nuevo registro</button>
        </div>
        <table class="datos" id="tabla-datos">
          <thead><tr>${m.columnas.map(c=>`<th>${c}</th>`).join('')}</tr></thead>
          <tbody>${filasHtml}</tbody>
        </table>
      </div>
    </div>
  `;

  document.getElementById('btn-volver').addEventListener('click', renderGridModulos);
  document.getElementById('btn-nuevo').addEventListener('click', ()=>{
    barraEstado.textContent = `Formulario de nuevo registro para ${m.nombre} (demo).`;
  });
  document.getElementById('buscador').addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#tabla-datos tbody tr').forEach(tr=>{
      tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
  barraEstado.textContent = `Viendo módulo: ${m.nombre}`;
}

function irAModulo(id){
  const m = MODULOS.find(x=>x.id===id);
  if(!m || !m.activo || !modulosVisibles().some(x=>x.id===id)) return;
  renderDetalle(m);
}

document.getElementById('btn-perfil').addEventListener('click', e=>{
  e.stopPropagation();
  const perfil = document.getElementById('perfil');
  const abierto = perfil.classList.toggle('abierto');
  document.getElementById('btn-perfil').setAttribute('aria-expanded', abierto);
});
document.querySelectorAll('.opcion-perfil').forEach(opcion=>opcion.addEventListener('click', ()=>{
  ROL_ACTUAL = opcion.dataset.rol;
  document.querySelectorAll('.opcion-perfil').forEach(x=>x.classList.toggle('seleccionado', x === opcion));
  document.getElementById('perfil').classList.remove('abierto');
  document.getElementById('btn-perfil').setAttribute('aria-expanded','false');
  renderGridModulos();
  barraEstado.textContent = `Perfil cambiado a ${ROL_ACTUAL}`;
}));
document.addEventListener('click', ()=>document.getElementById('perfil').classList.remove('abierto'));

renderGridModulos();

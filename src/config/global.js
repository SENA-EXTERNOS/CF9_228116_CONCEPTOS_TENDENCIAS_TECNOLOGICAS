export default {
  global: {
    componenteFormativo: 'Conceptos de Tendencias Tecnológicas',
    descripcionCurso:
      'Las pequeñas y grandes compañías necesitan adquirir hardware y software. Con la tecnología en evolución continua y la llegada al mercado de nuevos productos y soluciones, ¿cómo podemos estar seguros de escoger la mejor tecnología para nuestras necesidades específicas? La respuesta no siempre es simple. Al final hay un número de factores a considerar en el proceso de adquisición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicios de Tecnología de la Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto, tipos y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistemas integrados y arquitectura',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tendencias tecnológicas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Hardware</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y tipos de <em>hardware</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características del <em>hardware</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto y tipos de <em>software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características del <em>software</em>',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Red',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Concepto de red y tipos de redes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Clasificación de redes',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Estadística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipo de datos estadísticos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Gráficos estadísticos',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Análisis de datos',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Redes de computadoras',
      referencia:
        'Duarte, L. [Arduino]. (2019, 25 de marzo). Redes de Computadoras [Video]. You Tube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GqIFy_0di_Q',
    },
    {
      tema: 'Tipos de variables',
      referencia: 'Migallón, V. (2020, 17 de julio) Tipos de variables [Blog].',
      tipo: 'Ejercicio con Educaplay',
      link:
        'https://www.educaplay.com/learning-resources/699293-tipos_de_variables.html',
    },
    {
      tema: 'El <em>software</em> y el <em>hardware</em>…',
      referencia:
        'Lifeder Educación. (2022, 11 de marzo). El Software y Hardware. [Video]. You Tube.',
      tipo: 'Video',
      link: 'https://youtu.be/_eg31SXhr2g',
    },
    {
      tema: 'CURSO de REDES 2020 desde las Bases',
      referencia:
        'Curso de Redes Fundamentos (2019, 12 de septiembre). Curso de Redes desde las Bases. [Video]. You Tube.',
      tipo: 'Video',
      link: 'https://youtu.be/0v-lV3tC528',
    },
  ],
  glosario: [
    {
      termino: 'Almacenar',
      significado: 'el segundo paso del ciclo de ejecución del CPU.',
    },
    {
      termino: 'Amenaza',
      significado: 'cualquier cosa que pueda causar daño.',
    },
    {
      termino: 'Ancho de banda',
      significado:
        'la cantidad de datos que se pueden transmitir a través de una red en cualquier momento.',
    },
    {
      termino: 'Código máquina',
      significado:
        'el nivel más bajo de lenguaje de computadoras. El código máquina incluye las cadenas 1 y 0 que la computadora puede entender.',
    },
    {
      termino: 'Compatible',
      significado:
        'describe la capacidad de un tipo de <em>hardware</em>, <em>software</em> o archivo de datos para trabajar con otro',
    },
    {
      termino: 'Datagrama',
      significado:
        'término usado para designar los paquetes de datos cuando viajan por internet.',
    },
    {
      termino: 'Dispositivo',
      significado:
        'cualquier componente electrónico que esté conectado a una computadora.',
    },
    {
      termino: '<em>Gigabit Ethernet</em>',
      significado:
        'la mejora más nueva a la tecnología de <em>Ethernet</em>; capaz de transferir 10 GB de datos por segundo.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'un lenguaje para escribir programas de nivel más alto que el código de máquina. Los lenguajes de programación utilizan variaciones del inglés básico.',
    },
    {
      termino: 'Soporte técnico',
      significado:
        'asistencia técnica que el usuario recibe por parte del proveedor de un equipo de computación o telecomunicación que se usa para el desarrollo de cualquier actividad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alkhatib, Hasan. (2022). IEEE Computer Society 2022 Report. IEEE. Obtenido de',
      link: 'https://ieeecs-media.computer.org/assets/pdf/2022Report.pdf',
    },
    {
      referencia:
        'Editorial Grudemi (2018). Población estadística. Obtenido de: Enciclopedia Económica',
      link: 'https://enciclopediaeconomica.com/poblacion-estadistica/',
    },
    {
      referencia:
        'bootpootin.tech. (20 de Febrero de 2021). What is Information System? Bootpootin, 1. Obtenido de',
      link:
        'https://bootpoot.tech/what-is-information-system-definition-characteristics-and-types-of-information-system/',
    },
    {
      referencia:
        'Piaggio F. (26 de Abril de 2019) Redes Informáticas.. Obtenido de',
      link:
        'https://www.ionos.es/digitalguide/servidores/know-how/los-tipos-de-redes-mas-conocidos/',
    },
    {
      referencia:
        'Schmidt, A. L. (2022). Integration Architecture The Definitive Guide. LeanIX GmbH. Obtenido de',
      link: 'https://www.leanix.net/en/wiki/ea/integration-architecture',
    },
    {
      referencia:
        'Spacey, J. (04 de Marzo de 2018). 31 Types of Information Technology Services. Simplicable, 1. Obtenido de',
      link: 'https://simplicable.com/new/information-technology-services',
    },
    {
      referencia:
        'Wikimedia Foundation, I. (Agosto 2022). Wikipedia The Free Encyclopedia. Obtenido de',
      link: 'https://es.wikipedia.org/wiki/Difusi%C3%B3n_amplia',
    },
    {
      referencia:
        'Whatisccna.blogspot. (2010). Network Concepts and Classification. What is CCNA?, 1. Obtenido de',
      link:
        'http://whatisccna.blogspot.com/2010/12/network-concepts-and-classification.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

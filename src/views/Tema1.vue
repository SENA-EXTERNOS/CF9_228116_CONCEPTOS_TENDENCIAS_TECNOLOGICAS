<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios de Tecnología de la Información
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto, tipos y características
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 Los sistemas de información son combinaciones de #[em hardware], #[em software] y redes de telecomunicaciones que las personas construyen y usan para recopilar, crear y distribuir datos útiles, generalmente en entornos organizacionales (Bootpoot, 2021). A continuación se describirán sus principales elementos:

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img01.svg")
      .col-lg-7(data-aos="fade-left")
        .h5.mb-2 ¿Qué abarca la tecnología de la información (TI)?
        p El departamento de TI dentro de una empresa asegura que los sistemas de información, las redes, los datos y las aplicaciones de la organización se conecten y funcionen correctamente. El equipo de TI maneja tres áreas principales:
        .BG01.p-4
          p 1.	Implementa y mantiene aplicaciones comerciales, servicios e infraestructura (servidores, redes, almacenamiento).
          p 2. Supervisa, optimiza y soluciona problemas del rendimiento de las aplicaciones, los servicios y la infraestructura.
          p.mb-0 3.	Supervisa la seguridad y el gobierno de las aplicaciones, los servicios y la infraestructura”. (John, Spacey, 2018).
    
    p A continuación exploraremos los tipos de sistemas de información más utilizados:

    .row.justify-content-center.mb-4
      .col-xl-3.col-md-6.mb-xl-0.mb-4(data-aos="fade-right")
        .BG02.p-4
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/tema1/img02.svg")
          .h4 Sistema de Procesamiento de Transacciones (TPS)
          p Este sistema procesa los datos resultantes de las transacciones comerciales. 
          p Proporciona transacciones para actualizar registros y generar informes; realiza la función de mantenimiento de tiendas y organizaciones de dicho sector.
          p.mb-0 La transacción se realiza de dos maneras: procesamiento por lotes y procesamiento de transacciones en línea. Ejemplo: sistema de facturación, sistema de nómina y sistema de control de inventarios.
      .col-xl-3.col-md-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-4
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/tema1/img03.svg")
          .h4 Sistema de Información Gerencial (MIS)
          p El sistema está diseñado para tomar datos sin procesar y tramitar disponibles a través de un sistema de procesamiento de transacciones y convertirlos en un formulario resumido y agregado para el gerente, generalmente en un formato de informe. Tiende a ser utilizado por mandos intermedios y supervisores operativos con el fin de reportar su gestión a los altos mandos,
          p.mb-0 A su vez, produce diferentes tipos de informes como: informe resumido, informe a pedido, informes ad hoc e informe de excepción. Ejemplo: sistemas de gestión de ventas y sistema de gestión de recursos humanos.
      .col-xl-3.col-md-6.mb-xl-0.mb-4(data-aos="flip-up")
        .BG02.p-4
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/tema1/img04.svg")
          .h4 Sistema de Apoyo a la Decisión (DSS)
          p Este tipo de sistema proporciona información, datos, modelos y herramientas de manipulación de datos para ayudar a tomar la decisión en situaciones semiestructurada y no estructurada.
          p.mb-0 Así mismo, comprende herramientas y técnicas para ayudar a recopilar información relevante y analizar las opciones y alternativas. El usuario final está más involucrado en la creación de DSS que en un MIS. Ejemplo: sistemas de planificación financiera, sistemas de gestión de préstamos bancarios.
      .col-xl-3.col-md-6(data-aos="fade-left")
        .BG02.p-4
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/tema1/img05.svg")
          .h4 Sistema de Expertos
          p Este tipo de sistema incluye experiencias para ayudar a los gerentes a diagnosticar o resolver problemas. Estos sistemas utilizan los principios de la investigación en inteligencia artificial y ayudan, por ejemplo, a superar incertidumbres en la toma de decisiones a la hora de realizar las planeaciones estratégicas.
          p.mb-0 Es un proceso que se basa en el conocimiento y lo utiliza sobre un área específica  a fin de actuar como un consultor experto para los usuarios.
 
    p.mb-5 Ahora revisaremos las características de los servicios de tecnología de la información (TI):

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img06.png")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small.mb-0(numero="1" titulo="Disponibilidad/ accesibilidad") Esta característica plantea que la información debe ser de fácil acceso. Si se encuentra guardada en un libro, solo está disponible, mas es de fácil acceso si el libro se tiene a la mano. Un buen ejemplo de disponibilidad es un directorio telefónico porque cada hogar tiene uno para su área local. Es probablemente el primer lugar donde se busca un número local, pero nadie mantiene las guías telefónicas de todo el país, de ahí que para la consulta de números de otras zonas es posible que se tenga que llamar a un número de consulta del directorio. 
          p.text-small.mb-0(numero="2" titulo="Precisión") Permite describir una información lo suficientemente precisa para el uso que se le va a dar. Obtener datos que sean 100 % precisos por lo general no es realista, pues es probable que sea demasiado costoso producirlos a tiempo: el grado de precisión depende de las circunstancias. En los niveles operativos es posible que la información sea ajustada al centavo más cercano, ya que si sucede un error no previsto se puede generar alguna pérdida a la organización. 
          p.text-small.mb-0(numero="3" titulo="Fiabilidad u objetividad") La confiabilidad se ocupa de que sea veraz la información o de que esta se presente de manera objetiva. Solo puede usar el material con confianza si está seguro de su confiabilidad y objetividad.
          p.text-small.mb-0(numero="4" titulo="Pertinencia/ Adecuación") La información debe ser relevante según el propósito para el cual se requiere. Lo que es importante para un gerente puede no serlo para otro. El usuario se sentirá frustrado si la información contiene datos irrelevantes para una tarea específica.
          p.text-small.mb-0(numero="5" titulo="Completitud") En esta característica puede observarse que la información contenga todos los detalles requeridos por el usuario. De lo contrario, puede no ser útil como base para tomar una decisión. 

    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-4(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.text-small.mb-0(numero="6" titulo="Nivel de detalle/ Concisión") La información debe estar de una forma que sea lo suficientemente breve para permitir su examen y uso. Para alcanzar este nivel no debe haber detalles superfluos.
          p.text-small.mb-0(numero="7" titulo="Presentación") Es importante para el usuario. Se trata de una característica en la cual la información se puede entender de modo más fácil si es estéticamente agradable, si tiene una sinergia clara entre el texto, los gráficos, las imágenes y demás apoyos visuales. 
          p.text-small.mb-0(numero="8" titulo="Tiempo") La información debe estar a tiempo para el propósito que se requiere. Esta característica muestra que la información recibida tarde será irrelevante. 
          p.text-small.mb-0(numero="9" titulo="Valor de la información") Característica en la cual la importancia relativa de la información para la toma de decisiones puede aumentar o disminuir su valor para una compañía. 
          p.text-small.mb-0(numero="10" titulo="Costo de la información") La información debe estar disponible dentro de los niveles de costos establecidos, los cuales pueden variar según la situación. Si los costos son demasiado altos para obtener información, una organización puede decidir la búsqueda de información un poco menos completa en otro lugar (Bootpoot, 2021). 
      .col-lg-5.col-10(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img07.png")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Sistemas integrados y arquitectura
    
    .bloque-texto-g.color-primario.img-inv.p-3.p-sm-4.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img08.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Los procesos de transformación empresarial a nivel global exigen que la información se comparta de manera rápida y eficiente entre muchos #[em software], tareas y aplicaciones a larga y corta distancia. Una investigación interna realizada por la empresa LeanIX  indica que las grandes organizaciones, con más de mil millones de euros de ingresos anuales, tienen un promedio de 650 aplicaciones implementadas al mismo tiempo. El 10 % de las empresas más grandes tienen un promedio de 3.400 aplicaciones multifuncionales e interdisciplinares.<br><br>
    
    p.mb-5 Muchas veces estas aplicaciones o sistemas de #[em software] no se crean para funcionar entre sí sin la ayuda de otro  #[em software] de integración específico. En estos casos es imperativo contar con un sistema de arquitectura de integración fuerte, el cual detallaremos en el siguiente apartado.
    .h4 ¿Qué es la arquitectura de integración (IA)?

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img09.png")
      .col-lg-8(data-aos="fade-left")
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 Es una parte importante del panorama de TI de cada empresa que simplifica la integración de numerosos componentes de TI y le permite rastrear los flujos de datos entre aplicaciones. La arquitectura de integración cambia con los avances en la utilidad multiplataforma y otros paradigmas de desarrollo para nuevos tipos de operaciones digitales. El #[em software] de integración rompe los hilos y permite que varias aplicaciones de #[em software] se comuniquen entre sí. Se parte de lo siguiente:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.mb-4(data-aos="flip-up")
          .col-auto.BG05.p-1
            p.mt-4.mb-0 1
          .col.BG03.p-3
            p.mb-0 Para interconectar las diferentes aplicaciones en sinergia se utilizan interfaces de programación de aplicaciones (API) que están especialmente diseñadas para permitir este tipo de integración.
        .row.mb-4(data-aos="flip-up")
          .col-auto.BG05.p-1
            p.mt-4.mb-0 2
          .col.BG04.p-3
            p.mb-0 Dicha arquitectura le permite procesar estos objetos de aplicaciones y datos dentro de su arquitectura de TI mientras proporciona y usa interfaces.
        .row.mb-4(data-aos="flip-up")
          .col-auto.BG05.p-1
            p.mt-4.mb-0 3
          .col.BG03.p-3
            p.mb-0 La arquitectura de integración permite procesar estos objetos de aplicaciones y datos dentro de su arquitectura de TI mientras usa interfaces.
        .row.mb-4(data-aos="flip-up")
          .col-auto.BG05.p-1
            p.mt-4.mb-0 4
          .col.BG04.p-3
            p.mb-0 El #[em software] comercial no suele estar diseñado para comunicarse entre sí. Las integraciones de aplicaciones ayudan a agilizar procesos como la nómina y la contabilidad; y, dado que las empresas definitivamente necesitan aplicaciones CRM, aplicaciones de nómina, aplicaciones de recursos humanos, sistemas ERP, entre otras, es imperativo que puedan trabajar juntas.
        .row.mb-4(data-aos="flip-up")
          .col-auto.BG05.p-1
            p.mt-4.mb-0 5
          .col.BG03.p-3
            p.mb-0 Casi todas las aplicaciones se construyen a partir de componentes separados y se ejecutan en diferentes sistemas. Si no pueden comunicarse entre sí, producirán ineficiencias en la calidad de los datos, redundancias, silos y disminuirán la satisfacción del usuario final. Por lo tanto, las integraciones son un primer paso importante para la eficiencia y el crecimiento empresarial.
    
    .h4 ¿Cuáles son las principales ventajas de la arquitectura de integración (AI)?

    p La AI proporciona muchos beneficios para las grandes empresas. De este punto nos centraremos en las cuatro ventajas principales:

    .BG06.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Reducción de costos
            p El costo de operar diferentes sistemas suele ser muy alto debido al mantenimiento, las actualizaciones y las expansiones. 
            p.mb-0 La arquitectura de integración garantiza que los diversos productos y servicios estén todos coordinados y proporciona una descripción general de las conexiones entre las respectivas aplicaciones para que se puedan evitar errores costosos cuando las actualizaciones afectan a varios sistemas a la vez.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img10.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Mejora de la satisfacción del cliente
            p Al reducir la necesidad de cargas de trabajo manual, las empresas liberan tiempo que luego se puede utilizar para centrarse en el cliente. En el mundo actual: digital, altamente competitivo y en rápido movimiento, las necesidades de los clientes juegan un papel central en el éxito empresarial. Tan pronto como las empresas ya no cumplen con los requisitos de los clientes, se busca inmediatamente una opción. 
            p.mb-0 Por lo tanto, el tiempo ganado debe invertirse en el análisis de las necesidades del cliente y en la posterior implementación de soluciones, de modo que la satisfacción del cliente aumente significativamente como resultado.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img11.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Mejor gestión y análisis de aplicaciones
            p Realizar diferentes análisis para cada aplicación no solo requiere mucho tiempo, sino que a menudo es de poca utilidad. Una gran cantidad de aplicaciones dentro del entorno empresarial causará complicaciones, lo que hace que sea mucho más difícil analizar el panorama general.
            p Especialmente en las grandes empresas es fundamental obtener una visión general de la aplicación y sus enlaces. Sin embargo, es casi imposible obtener una imagen clara si no existe una arquitectura de integración inteligente. Esta falta de análisis adecuado puede causar rezago frente a la competencia.
            p.mb-0 Con Integración de la arquitectura se puede obtener una comprensión general de qué tan bien le está yendo a la empresa, de tal manera que sea posible tomar decisiones informadas sobre el desarrollo futuro.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img12.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Mayor productividad en la empresa
            p.mb-0 El flujo de trabajos manuales repetidos y ―a menudo― redundantes conducen a una asignación ineficiente del tiempo de trabajo, lo que hace que se pierdan de vista los próximos proyectos más sostenibles. Este tipo de flujo de trabajo ocurre principalmente en situaciones con diferentes sistemas y aplicaciones que no ofrecen integraciones adecuadas entre sí y, por lo tanto, deben procesarse de modo manual. Además de la gran cantidad de tiempo requerido, estos flujos de trabajo también son propensos a errores, lo que puede generar problemas graves tan pronto como se produce el primer error. 
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img13.png")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Mayor productividad en la empresa
            p.mb-0 La arquitectura de integración garantiza que la productividad aumente de forma ostensible con el reemplazo, por procesos automatizados, del flujo de trabajos repetitivos propensos a errores. Si se implementa una integración cuidadosa, la tasa de error de tales integraciones se reduce a casi cero, de manera que así se minimiza el riesgo de fallas importantes entre dos o más sistemas. En general, las integraciones ahorran tiempo y reducen la propensión a errores, lo que conduce a una mayor productividad, pues los empleados ahora pueden usar sus capacidades de trabajo de una manera más específica (Andreas Schmidt LL.M, 2022).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img14.png")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Tendencias tecnológicas

    p Existen numerosos ejemplos de tecnologías superiores que nunca se adoptaron porque otras llegaron a tiempo o les fue mejor en el mercado. El libro El dilema del innovador y sus secuelas, del autor Christensen, C, describe mejor el proceso de innovación y disrupción, haciendo hincapié en ¿cuál es el futuro de la tecnología?
    p.mb-5 Veremos en la siguiente infografía, partiendo de la obra mencionada, esos temas que comandarán la tecnología en los tiempos venideros:

    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/tema1/img15.svg")
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-botones.p-4
        p.mb-0 Conocer el entorno global del uso y la importancia de la tecnología nos obliga a retroceder un poco e indagar desde la raíz algunos conceptos básicos con el fin de obtener una adecuada apropiación del tema. Es por esto que vale la pena definir en un primer momento lo que es un computador, y luego detallar los elementos que lo componen.

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2.BG07.p-5(data-aos="fade-right")
        .BG08.p-4
          p Un computador se define como un dispositivo electrónico que procesa datos y los convierte en información útil para las personas. Está diseñado para ser utilizado por un usuario o persona y ubicado encima o debajo de un escritorio o mesa. Su uso y aplicabilidad ha abarcado varios entornos: el hogar, la educación, las pequeñas y grandes empresas, la industria, el gobierno, entre otros campos de la vida cotidiana.
          p.mb-0 Desde esta perspectiva, ahondaremos en lo que son el #[em hardware], el #[em software] y sus principales características y componentes.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img16.png")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

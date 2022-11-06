<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Red
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Concepto de red y tipo de redes
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img01.png")
      .col-lg-8.BG09.p-4.w-img01(data-aos="fade-left")
        p Una red es una serie de puntos o nodos interconectados por líneas de comunicación. Los nodos pueden ser dispositivos dedicados a una sola función, como una computadora utilizada para la aplicación del cliente o un enrutador utilizado para conectar redes. El propósito completo de cualquier red es permitir que dos puntos finales: redes, servidores, enrutadores, entre otros, se comuniquen entre sí y transfieran datos.
        p.mb-0 Las redes pueden dividirse según su tamaño y la forma en la que se conectan los equipos.
    
    p En un primer momento, exploraremos la clasificación de las redes según el tamaño:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .row.align-items-center.BG13.py-md-4.py-3(titulo="LAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img02.jpg")
        .col-lg-6
          p #[b LAN] #[em Local Area Network]
          p.mb-0 Permite la conexión de dispositivos en espacios relativamente reducidos. Es la más utilizada en el proceso de intercambio de datos, pues por su naturaleza se aplica desde la empresa más pequeña hasta la más grande. Su principal característica es que permite la interconexión de múltiples nodos (unidades de almacenamiento, impresoras y otros dispositivos), aunque no estén conectados físicamente a los ordenadores. La principal desventaja es que los nodos que se pueden conectar son limitados.
      .row.align-items-center.BG13.py-md-4.py-3(titulo="WAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img03.jpg")
        .col-lg-6
          p #[b WAN] #[em Wide Area Network]
          p Propicia la conexión de dispositivos con diferentes localizaciones y muy distantes geográficamente. Este tipo de red cubre distancias de entre 100 y 1.000 kilómetros y brinda conectividad a varias ciudades, incluso a un país entero.
          p.mb-0 Las redes más conocidas de este tipo son las líneas telefónicas y los satélites. Las redes WAN pueden ser implementadas por organizaciones y darles un uso privado o público según la necesidad establecida. 
      .row.align-items-center.BG13.py-md-4.py-3(titulo="MAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img04.jpg")
        .col-lg-6
          p #[b MAN] #[em Metropolitan Area Network]
          p En cuanto a la cobertura geográfica, MAN tienen un mayor alcance que la red LAN y menor que la red WAN; es por esta razón que se implementan generalmente en ámbitos más reducidos como ciudades y pueblos. 
          p.mb-0 El principal medio conductor que se emplea en la transferencia de información es la fibra óptica, lo que permite no solo una conexión más rápida, sino también tasas de errores y latencia ―suma de retardos temporales de una red― más bajas que otras redes. Además, son más estables y resistentes a las interferencias radioeléctricas.
      .row.align-items-center.BG13.py-md-4.py-3(titulo="WLAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img05.jpg")
        .col-lg-6
          p #[b WLAN] #[em Wireless Local Network]
          p.mb-0 A diferencia de las otras redes, el intercambio de información se realiza a través de ondas de radio. Su principal inconveniente es la inseguridad, ya que cualquier persona con una terminal inalámbrica puede conectarse a otro punto de acceso privado si este carece de las medidas de seguridad apropiadas.
      .row.align-items-center.BG13.py-md-4.py-3(titulo="WMAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img06.jpg")
        .col-lg-6
          p #[b WMAN] #[em Wireless Metropolitan Network]
          p Es la versión inalámbrica de las redes de área metropolitana convencionales. La principal diferencia con las MAN es que su alcance es mucho mayor. 
          p.mb-0 Esta tecnología está presente en estándares de comunicación como el WiMAX (Interoperabilidad Mundial para Acceso con Microondas, por sus siglas en inglés).
      .row.align-items-center.BG13.py-md-4.py-3(titulo="WWAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img07.jpg")
        .col-lg-6
          p #[b WWAN] #[em Wireless Wide Area Network]
          p.mb-0 Tiene un alcance geográfico mucho más amplio que el que ofrece la red WMAN. En vez de usar tecnologías de comunicaciones móviles como WiMAX, UMTS, GPRS, EDGE, CDMA2000, GSM, CDPD, Mobitex, HSPA y 3G utiliza sistemas como el Wifi y el LMDS (Sistema de Distribución Local Multipunto, por sus siglas en inglés).
      .row.align-items-center.BG13.py-md-4.py-3(titulo="SAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img08.jpg")
        .col-lg-6
          p #[b SAN] #[em Storage Area Network]
          p Es un tipo de red muy utilizado por empresas de mayor tamaño porque permite conectar varias unidades de almacenamiento a las redes LAN. Se usa en los ordenadores centrales encargados de procesar gran cantidad de datos.
          p.mb-0 Estas redes también son consideradas secundarias, pues su función principal es servir de contingencia de los servicios de almacenamiento de datos.
      .row.align-items-center.BG13.py-md-4.py-3(titulo="PAN")
        .col-lg-5.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img09.jpg")
        .col-lg-6
          p #[b PAN] #[em Personal Área Network]
          p.mb-0 Conecta los dispositivos cercanos al usuario en un entorno reducido: ordenadores, puntos de acceso a internet y teléfonos móviles. Este tipo de red se implementa en hogares o empresas muy pequeñas.

    p Ahora revisaremos la división según la manera en que se conectan los equipos:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center.BG13.py-md-4.py-3(titulo="Topología de bus")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img10.svg")
        .col-lg-6
          .h4 Topología de bus
          p Tiene un único medio de comunicaciones que conecta a todos los equipos. Es un cable troncal que alinea todos los dispositivos a la red.
      .row.justify-content-around.align-items-center.BG13.py-md-4.py-3(titulo="Topología estrella")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img11.svg")
        .col-lg-6
          .h4 Topología estrella
          p En esta configuración los segmentos de los elementos de conexión (cable y fibra óptica) de cada equipo o dispositivo  de la red están conectados a un componente centralizado o concentrador (dispositivo que conecta varios equipos juntos). 
          p.mb-0 Las señales se transmiten desde el equipo y a través del concentrador hacia todos los equipos de la red.
      .row.justify-content-around.align-items-center.BG13.py-md-4.py-3(titulo="Topología en anillo")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img12.svg")
        .col-lg-6
          .h4 Topología en anillo
          p Cada computador está conectado únicamente a otros dos nodos (anterior y posterior) de tal forma que la cadena se cierra formando un anillo. 
          p.mb-0 En esta categoría la información para por cada uno de los nodos, partiendo de que cada uno de estos la envía y la recibe.
      .row.justify-content-around.align-items-center.BG13.py-md-4.py-3(titulo="Topología en malla")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img13.svg")
        .col-lg-6
          .h4 Topología en malla
          p Forma de conexión en donde cada equipo o nodo está conectado al resto por un cable distinto. 
          p Gracias a los múltiples caminos que ofrece a través de los distintos dispositivos es posible orientar el tráfico por trayectorias alternativas en caso de que algún nodo esté averiado u ocupado.
          p.mb-0 Una red con topología en malla ofrece una redundancia y fiabilidad superiores. Aunque la facilidad de solución de problemas y el aumento de la confiabilidad son ventajas muy interesantes, al utilizar mucho cableado estas redes resultan caras de instalar.
      .row.justify-content-around.align-items-center.BG13.py-md-4.py-3(titulo="Topología árbol")
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src="@/assets/curso/tema4/img14.svg")
        .col-lg-6
          .h4 Topología árbol
          p Es aquella que combina características de la topología estrella con la de bus aplicando las funcionalidades de las dos. 
          p El nodo de interconexión trabaja en modo difusión, pues la información se propaga hacia todas las estaciones y las ramificaciones se extienden a partir de un punto raíz, como la de estrella, a tantas derivaciones como sea posible y según las características del árbol.
          p.mb-0 Una similitud con la topología de estrella es que los nodos del árbol están conectados a un concentrador central o hub que controla el tráfico de la red. Pero no todos los nodos se conectan directamente al concentrador central, la mayoría de los dispositivos se conectan a un concentrador secundario que, a su vez, se conecta al concentrador central.

    .row.justify-content-center.align-items-center
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-secundario.p-3.mb-5
          p Algunos tipos de #[em software] están especializados en tareas estadísticas, así facilitan la presentación de datos con el fin de realizar análisis e informes que sirven para construir conclusiones y, desde ese conocimiento, tomar decisiones.
          p.mb-0 Por ejemplo: estadísticamente qué #[em hardware] tiene mejor desempeño, o qué #[em software] tiene mayor aceptación en determinada población teniendo en cuenta cuál sería su aplicabilidad en el entorno.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img15.jpg")

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-secundario.p-4
        p.mb-0 Sin embargo, un gran #[em software] estadístico no lo hace por sí solo una gran herramienta: los conocimientos de quien lo opere son fundamentales. Partiendo de lo anterior, daremos paso a algunos conceptos importantes desde la estadística, los cuáles apoyarán el qué hacer a la hora de trabajar con redes y dispositivos pertenecientes a la tecnología de la información y las comunicaciones.  

</template>

<script>
export default {
  name: 'Tema4',
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

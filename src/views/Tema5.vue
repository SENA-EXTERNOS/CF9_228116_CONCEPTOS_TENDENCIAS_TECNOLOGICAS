<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Estadística
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Concepto
    
    p La estadística es la ciencia o rama de la matemática que se encarga de recopilar, organizar y analizar datos para estudiar algún fenómeno o circunstancia específica. 

    .row.justify-content-end.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 #[b Población]: conjunto de individuos sobre el que se va a estudiar la característica.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 #[b Individuo]: cada uno de los elementos u objetos que componen la población y a los que se les realizará el estudio.
          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 #[b Muestra]: conjunto representativo de la población analizada.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 #[b Dato o variable]: cada uno de los valores obtenidos por cada individuo. Son las respuestas obtenidas durante el estudio.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img01.svg")
    
    p Desde el punto de vista estadístico, las variables son un factor central dentro de estos análisis, por ende, es importante conocer cuáles existen y sus funciones específicas. 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img02.svg')
          .BGR14.p-3(x="31.5%" y="32%" numero="1")
            p.mb-0 Permiten categorizar a un individuo de la población por medio de una cualidad o característica.
          .BGR14.p-3(x="31.5%" y="81%" numero="2")
            p.mb-0 Permiten cuantificar el resultado de un proceso y adquieren valores numéricos.
          .BGR14.p-3(x="66.25%" y="9%" numero="3")
            p.mb-0 Adquieren valores que se expresan como atributos o cualidades del individuo. Ejemplo: sexo (masculino, femenino); deportes que se practican: patinaje, voleibol, fútbol, entre otros.
          .BGR14.p-3(x="66.5%" y="32%" numero="4")
            p.mb-0 Describen atributos o cualidades de un individuo y se ordenan según su jerarquía. Ejemplo: calificación (malo, regular, bueno, excelente); fases de una larva: huevo, larva, pupa y adulto; niveles de un curso: básico, intermedio y avanzado.
          .BGR14.p-3(x="66.25%" y="65%" numero="5")
            p.mb-0 Son aquellas variables cuyos valores se expresan con números enteros y son limitados. Ejemplo: cantidad de personas que vieron una película, cantidad de sucursales que tienen las empresas, cantidad de estudiantes que hay en cada carrera, entre otros.
          .BGR14.p-3(x="66.5%" y="88%" numero="6")
            p.mb-0 Se expresan con números reales, ilimitados porque pueden ser intermedios. Manejan escala de valores o pertenecen a rangos. Ejemplo: la altura de los árboles de una reserva ecológica, cuyos valores pueden ser 7,34 metros y 10,15 metros; la altura de los rascacielos de una ciudad, entre otros.

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Gráficos estadísticos

    p Nos adentraremos en este momento en los tipos de gráficos estadísticos según la clase de información que se quiera analizar e interpretar.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center.py-md-4.py-3(titulo="Gráfico de dispersión")
        .col-lg-3.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema5/img03.svg")
        .col-lg-6
          .h4 Gráfico de dispersión
          p.mb-0 Muestra la relación que hay entre dos variables cuantitativas sobre un mismo grupo de individuos.
      .row.justify-content-around.align-items-center.py-md-4.py-3(titulo="Gráfico de barras")
        .col-lg-3.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema5/img04.svg")
        .col-lg-6
          .h4 Gráfico de barras
          p.mb-0 A cada valor del eje X le corresponde un valor del eje Y que determina el alto de una columna. Son muy valiosos para comparar magnitudes; por ejemplo, se puede representar el número de habitantes de una ciudad según el rango de edad.
      .row.justify-content-around.align-items-center.py-md-4.py-3(titulo="Gráfico circular")
        .col-lg-3.col-10.mb-lg-0.mb-4
          img(src="@/assets/curso/tema5/img05.svg")
        .col-lg-6
          .h4 Gráfico circular
          p.mb-0 También llamado gráfico de torta. Muestra la distribución de determinada población o grupo en diferentes partes. Es una herramienta valiosa para los casos en los que se conoce el absoluto y lo que interesa es conocer la forma en la que este se repartió en varias partes. Por ejemplo, se puede representar el porcentaje de votos que sacó cada partido político en una elección, porcentajes de ventas en ocho  meses continuos, etc.

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Análisis de datos

    p Para el análisis de los datos estadísticos revisaremos en este apartado las cuatro etapas a seguir; estas se  basan en la aplicación de herramientas y técnicas estadísticas que permitirán obtener información exacta de análisis de los datos con el objetivo de lograr el resultado esperado, realizar conclusiones y tomar decisiones acertadas.
    p.mb-5 Detallemos, entonces, las etapas, herramientas y técnicas estadísticas:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-2
          img(src="@/assets/curso/temas/line.svg")
        .row.justify-content-center.mb-4
          .col-2
            img(src="@/assets/curso/tema5/img06.svg")
          .col
            .h5 1. Recolección de información
            p #[b a]. Elección y definición de la muestra
            p #[b b]. Determinación del tipo de encuesta
            p #[b c]. Planeación y diseño del cuestionario
            p #[b d]. Aplicación del cuestionario
      .col-lg-6.col-10(data-aos="fade-left")
        figure.mb-2
          img(src="@/assets/curso/temas/line.svg")
        .row.justify-content-center.mb-4
          .col-2
            img(src="@/assets/curso/tema5/img07.svg")
          .col
            .h5 3. Análisis de la información
            p #[b a]. Cálculo de porcentajes
            p #[b b]. Cálculo de parámetros
            p #[b c]. Parámetros de posición
            p #[b d]. Parámetros de dispersión
            p #[b e]. Correlación de información

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-2
          img(src="@/assets/curso/temas/line.svg")
        .row.justify-content-center.mb-4
          .col-2
            img(src="@/assets/curso/tema5/img08.svg")
          .col
            .h5 2. Organización de la información
            p #[b a]. Confección de tablas de frecuencias
            p #[b b]. Selección del tipo de gráfico y confección de gráficos
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        figure.mb-2
          img(src="@/assets/curso/temas/line.svg")
        .row.justify-content-center.mb-4
          .col-2
            img(src="@/assets/curso/tema5/img09.svg")
          .col
            .h5 4. Interpretación de resultados
            p #[b a].	Establecimiento de predicciones
            p #[b b].	Test o prueba de causa - efecto

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-secundario.p-4
        p.mb-0 Estimado aprendiz: hemos llegado al final del componente formativo. Esperamos que continúe recorriendo este camino lleno de aprendizajes. Recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en el que encontrará la síntesis del tema abordado, una actividad didáctica y material complementario, entre otros recursos.

</template>

<script>
export default {
  name: 'Tema5',
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

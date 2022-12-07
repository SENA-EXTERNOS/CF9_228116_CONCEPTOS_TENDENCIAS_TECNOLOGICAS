<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Software]
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto y tipos de #[em software]
    
    .bloque-texto-g.color-primario.img-inv.p-3.p-sm-4.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p Entendida la parte externa del computador, es hora de adentrarnos en sus componentes internos o #[em software], el cual puede definirse como la parte lógica e intangible de un computador; el conjunto de instrucciones que se conocen como programas y que permiten direccionar el equipo para que realice tareas específicas.<br><br>
        p.mb-0 Estas instrucciones o programas le indican a los componentes físicos de la máquina lo que deben hacer; sin las instrucciones no podría llevar a cabo nada. En palabras sencillas, #[b el #[em software] es lo que permite que el #[em hardware] funcione]. Es decir, son las rutinas lógicas, digitales e intangibles (que no se pueden tocar) del equipo informático o móvil.

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Característica del #[em software]

    p Un #[em software] de excelente calidad debe tener estos aspectos como parte de su programación: 

    .BG12.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 #[b Corrección]: que cumpla con su objetivo.
            li 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 #[b Usabilidad]: que sea fácil de aprender.
            li 
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 #[b Flexibilidad]: que pueda ser modificado por los desarrolladores.
            li 
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 #[b Seguridad]: que sea resistente a los ataques externos.
            li 
              .lista-ol--cuadro__vineta
                span 5
              p.mb-0 #[b Portabilidad]: que pueda ser utilizado en diversos equipos.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema3/img02.svg")

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.color-green.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 Todos convivimos diariamente con ejemplos de #[em software]. Pero ¿cómo se realiza la comunicación o el envío de la información desde los dispositivos? Para comprender esto, es necesario profundizar sobre las redes, sus tipos y particularidades.

</template>

<script>
export default {
  name: 'Tema3',
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

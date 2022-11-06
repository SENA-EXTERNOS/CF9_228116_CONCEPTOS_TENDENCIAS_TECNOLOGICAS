<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Hardware]
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto y tipos de #[em hardware]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4.px-0(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.png")
      .col-lg-8.BG09.p-4.w-img01(data-aos="fade-left")
        .h5 Compuesto por aquellos elementos tangibles o periféricos que unidos conforman la computadora o un sistema informático. Es decir, representa los componentes físicos de la máquina que necesita su sistema para poder funcionar de manera correcta.
        p.mb-0 Dado que los componentes físicos de un sistema informático o computacional pueden variar, una delimitación del concepto o definición de #[em hardware] propone su comprensión a partir de las siguientes categorías:        
    
    .row.justify-content-center.mb-4
      .col-md-6.col-10.mb-md-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img02.svg' alt='AvatarTop')
          .tarjeta.color-secundario.BGRS10.p-4
            p.text-white.ms-4.mb-0 #[b Principal]: es aquel básico o elemental para el funcionamiento mismo del sistema.
      .col-md-6.col-10.mb-md-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.color-secundario.BGRS10.p-4
            p.text-white.ms-4.mb-0 #[b Complementario]: vendría siendo todo aquel destinado a cumplir con funciones específicas y secundarias, y que solo serían llevadas a cabo si el principal se encuentra funcionando correctamente.

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Características del #[em hardware]

    p Las características fundamentales del #[em hardware] son:

    .BG11.p-2
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Cables, gabinetes, cajas o periféricos de todo tipo y cualquier otro elemento electrónico físico tangible involucrado a la computadora o sistema informático.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Pueden ser táctiles con las manos y el cuerpo.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Son todos los componentes externos e internos de la computadora que permiten la ejecución de programas, sistemas o aplicaciones.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Son componentes electrónicos, eléctricos, electromecánicos y mecánicos.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Pueden tener sobre un mismo componente físico electrónico más de una funcionalidad de entrada o salida de información.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Funcionan con corriente regulada, lo cual permite protegerlos de sobrecargas de voltaje.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Requieren de mantenimiento preventivo y correctivo para prolongar su vida útil y mantener la calidad de la función direccionada a ejecutar.
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Necesita actualización a través de programas o aplicaciones que propicien su óptimo funcionamiento y rendimiento.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img04.svg")

</template>

<script>
export default {
  name: 'Tema2',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-contenido
      h5 Implementación de Infraestructura de Tecnologías de la Información y las Comunicaciones
      p.mb-0 Conceptos de tendencias tecnológicas

    p.mb-5 A partir del componente formativo podemos deducir que la apropiación de la terminología para controlar el proceso de adquisición de los equipos tecnológicos permite ampliar las habilidades y destrezas para la toma de decisiones según la normativa.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

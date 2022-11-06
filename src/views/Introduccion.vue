<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-primario.bloque-intro.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p.mb-0 Estimado aprendiz: en este componente formativo se abordará lo relacionado con las Tecnologías de la Información (TI) transitando por los conceptos básicos de #[em hardware] y software, los cuales han adquirido una acogida significativa en cuanto a su evolución y características de configuración. Son estos factores puntos vitales a la hora de adquirirlos en el mercado informático, que apunta a una acelerada transformación digital.
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-secundario.p-4
        p.mb-0 Mediante estas bases del conocimiento comprenderemos con mayor claridad las temáticas sobre la seguridad de la información, sistemas integrados, redes, topologías y tendencias tecnológicas. Estudiaremos casos reales que eventualmente podríamos encontrar en el entorno laboral con el fin de evitar malas inversiones o mayores costos de operatividad por prácticas erradas en la gestión y falta de conocimiento en los procesos de adquisición.

    p Explore con atención el siguiente video que le mostrará lo que se debe tener presente a la hora de adquirir equipos de #[em software] y #[em hardware].

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

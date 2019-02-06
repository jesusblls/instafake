<template>
  <q-page class="flex felx-center row q-ma-xs">
    <q-card v-for="image in images" :key="image" class="bigger q-ma-md offset-md-3 col-md-6 col-sm-12">
      <q-card-media>
        <img :src="image.path">
      </q-card-media>
      <q-card-title class="relative-position">
        <div class="ellipsis">{{image.title}}</div>
        <div slot="right" class="row items-center">
          <q-icon name="fas fa-user"/>Alguien
        </div>
      </q-card-title>
      <q-card-main>
        <p class="text-faded">{{image.description}}</p>
      </q-card-main>
    </q-card>

    <q-btn round color="secondary" icon="fas fa-plus" class="fixed-bottom-right q-mr-sm q-mb-sm"/>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      images: null
    };
  },
  created: function() {
    this.db.ref("/").once("value", snapshot => this.cargarBase(snapshot.val()));
  },
  methods: {
    cargarBase(datos) {
      this.images = [];
      for (let key in datos.image) {
        this.images.push({
          title: datos.image[key].title,
          description: datos.image[key].description,
          filename: datos.image[key].filename,
          path:
            "https://res.cloudinary.com/jesusblls/image/upload/insta/" +
            datos.image[key].filename +
            ".jpg",
          originalname: datos.image[key].originalname,
          mimetype: datos.image[key].mimetype,
          size: datos.image[key].size,
          created_at: datos.image[key].created_at,
          key: key
        });
      }
      console.log(this.images);
    }
  }
};
</script>

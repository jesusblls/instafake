<template>
  <q-page class="flex felx-center row q-ma-xs">
    <q-card
      v-for="image in images"
      :key="image"
      class="bigger q-ma-md offset-md-3 col-md-6 col-sm-12"
    >
      <q-card-media>
        <img :src="image.path">
      </q-card-media>
      <q-card-title class="relative-position">
        <div class="ellipsis">{{image.title}}</div>
        <div slot="right" class="row items-center">
          <q-icon style="font-size:1rem" class="q-mr-md" name="fas fa-user"/>Alguien
        </div>
      </q-card-title>
      <q-card-main>
        <p class="text-faded">{{image.description}}</p>
      </q-card-main>
    </q-card>

    <q-btn
      round
      color="secondary"
      @click="opened = true"
      icon="fas fa-plus"
      class="fixed-bottom-right q-mr-sm q-mb-sm"
    />

    <q-modal class="text-center" v-model="opened" minimized ref="modalRef">
      <div style="padding: 50px">
        <div class="q-display-1 q-mb-md">Upload image</div>
        <form action="http://ej-photo.herokuapp.com/upload" method="post" enctype="multipart/form-data">
          <q-input required name="title" v-model="title" float-label="Title"/>
          <q-input required name="description" v-model="description" float-label="Description"/>
          <input class="q-mt-lg" type="file" ref="file" name="image">
          <br>
          <q-btn color="red" class="q-mt-md" v-close-overlay label="Close"/>
          <q-btn type="submit" v-close-overlay required class="q-mt-md q-ml-sm" color="green" @click="upload()">Upload</q-btn>
        </form>
      </div>
    </q-modal>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      file: "",
      title: null,
      description: null,
      images: null,
      opened: false
    };
  },
  created: function() {
    this.db.ref("/").on("value", snapshot => this.cargarBase(snapshot.val()));
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
      this.images.reverse()
    },
    upload() {
      this.file=this.$refs.file.files[0];
      console.log(this.title);
      console.log(this.description);
      console.log(this.file);
    }
  }
};
</script>

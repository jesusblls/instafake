<template>
  <q-page class="flex felx-center row q-ma-xs">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <form action="/upload" method="POST">
          <div class="input-group q-mb-md">
            <div class="custom-file">
              <input type="file" name="image">
            </div>
          </div>
          <q-field label="Title">
            <q-input v-model="title"/>
          </q-field>
          <q-field label="Description">
            <q-input v-model="description"/>
          </q-field>
          <div class="form-group">
            <button type="submit" class="btn btn-success btn-block">Upload</button>
          </div>
        </form>
      </div>
    </div>
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
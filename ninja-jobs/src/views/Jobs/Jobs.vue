<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <!-- Se envia al arcjivo del nombre con los parametros (estos estan como en el bucle) -->
      <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    Loading Jobs...
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    //Devuelve un objeto json con info en el
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      //mete en la variable jobs
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style>
.job h2 {
  text-align: center;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background-color: #ddd;
}

.job a {
  text-decoration: none;
}
</style>

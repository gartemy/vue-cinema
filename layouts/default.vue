<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

#app {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #ffffff;
  background-color: #1A2B41;
  position: relative;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 10px;
}

</style>

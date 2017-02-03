<template lang="html">
  <div class="loading load">
		<div class="loader">Loading...</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.load .loader,
.load .loader:before,
.load .loader:after {
  border-radius: 50%;
}
.load .loader:before,
.load .loader:after {
  position: absolute;
  content: '';
}
.load .loader:before {
  width: 5.2em;
  height: 10.2em;
  background: #fff;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  transform-origin: 5.2em 5.1em;
  animation: load 1.2s infinite ease .3s;
}
.load .loader {
  font-size: 11px;
  text-indent: -99999em;
  margin: 5em auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em #8ba4fb;
}
.load .loader:after {
  width: 5.2em;
  height: 10.2em;
  background: #fff;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 5.1em;
  transform-origin: 0px 5.1em;
  animation: load 1.2s infinite ease;
}
@keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

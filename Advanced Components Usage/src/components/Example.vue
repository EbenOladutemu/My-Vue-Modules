<template>
  <section>
    <div>
      <p>{{welcome}}</p>
      <slot name="eben"></slot>
      <p><slot name="secondName">My name is Dipupo</slot></p>
    </div>
    <div>
      <slot></slot>
      <slot name="glory"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props:['welcome']
}
</script>

<style scoped>
  div {
    padding: 20px;
    margin: 20px auto;
    box-shadow: 1px 1px 1px 1px grey;
    text-align: center
  }
  p{
    color: rgb(14, 179, 102)
  } 
</style>
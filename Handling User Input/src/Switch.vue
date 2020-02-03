<template>
    <div>
        <div
                id="on"
                @click="switched(true)"
                :class="{active: state}">On</div>
        <div
                id="off"
                @click="switched(false)"
                :class="{active: !state}">Off</div>
    </div>
</template>

<script>
    export default {
        props:['state'],
        methods:{
            switched(){
                this.state = false
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>
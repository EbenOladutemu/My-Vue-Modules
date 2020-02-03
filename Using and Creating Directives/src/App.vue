<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">Directives</h1>
                <h4>Built-in</h4>
                <button class="btn btn-danger" v-text="'Hey Guys'"></button>
                <p v-for="(phone, i) in phones" :key="phone">{{i}} {{phone}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h4>Custom</h4>
                <p v-changecolor:backgroundColor.delayed="'red'" :style="{'font-size': '20px'}">This should be my color</p>
                <p v-change-here:backgroundColor.delayed.alternate="'red'" :style="{'font-size': '20px'}">This should be my other color</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                phones: ['Samsung', 'Huawei', 'Xiaomi', 'Infinix']
            }
        },
        directives:{
            changeHere: {
                bind(el, binding){
                    var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = 2000;
                    }
                    else{
                        delay
                    }
                    if(binding.modifiers['alternate']){
                        let mainColor = 'green';
                        let secondColor = 'blue';
                        let currentColor = binding.value;

                        setTimeout(()=>{
                            setInterval(()=>{
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'backgroundColor'){
                                    el.style.backgroundColor = currentColor
                                }
                                else{
                                    el.style.color = currentColor
                                }
                            }, 1000)
                        }, delay);
                    }
                    else{
                        setTimeout(()=>{
                        if(binding.arg == 'backgroundColor'){
                            el.style.backgroundColor = binding.value
                        }
                        else{
                            el.style.color = binding.value
                        }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>

<template>
    <div>
        <div v-bind:key="superhero.id" v-for="superhero in superheros">
            <p>
                {{superhero.name}}: {{superhero.skill}}
<!--                <span v-if="superhero.hired">HIRED!</span>-->
                {{superhero.hired ? 'hired!' :''}}
                <button v-if="!superhero.hired" v-on:click="hireHero(superhero.id)" class="del">Hire me</button>
            </p>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        data() {
            return {
                superheros: [
                   {
                        id: 1,
                        name: "baba",
                        skill: "sleep",
                        hired: false
                    }, {
                        id: 2,
                        name: "zulcsimano",
                        skill: "coding",
                        hired: false
                    },
                ]
            }
        },
        methods: {
            hireHero(id) {
                this.superheros.map(x => {
                    if (x.id === id) {
                        x.hired = "true"
                    }
                })

            }
        },
        // created() {
        //     axios.get('https://superheroapi.com/api/10159848231293327/')
        //     .then(res => this.superheros = res.data)
        //     .catch(err => console.log(err))
        // }
    }
</script>

<style scoped>

</style>
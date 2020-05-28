<template>
    <div>
        <form @submit="searchSuperhero">
            <input type="text" v-model="title" name="title" placeholder="Search...">
            <input type="submit" name="Submit" class="btn">
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchSuperhero",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            searchSuperhero(e) {
                e.preventDefault();
                console.log("submitoltál")
        //         const newTodo = {
        //             id: v4(),
        //             title: this.title,
        //             completed: false
        //         }
        //         this.$emit('add-todo', newTodo);
        //         this.title ='';
            }
        }
    }

</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="submit"] {
        flex: 2;
    }
</style>
<template>

    <ul class="message-history">

        <li v-for="message in messages">
            {{message.message}}
        </li>

    </ul>

</template>

<script>

    export default {
        data(){
            return {
                messages: []
            }
        },
        mounted(){
            this.$parent.chat.order('time', 'descending').limit(10).watch()
                .subscribe( allMessages => {
                    this.messages = [...allMessages]
                }, error => console.log(error)
            )
        }
    }

</script>

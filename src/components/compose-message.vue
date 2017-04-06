<template>

    <section class="compose-message">

        <input
            type="text"
            placeholder="Enter your message here..."
            v-model="message"
            @keyup.enter="sendMessage"
        >
        <button
            v-if="message.length"
            @click="sendMessage">
                Send Message
        </button>

    </section>

</template>

<script>
    export default {

        data(){
            return {
                message: ''
            }
        },
        methods: {
            sendMessage(){
                let toSubmit = {
                    message: this.message,
                    time: Date.now()
                }
                this.$emit('submittedMessage', toSubmit)
                this.message = ''
            }
        }

    }
</script>

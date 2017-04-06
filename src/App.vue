<template>
    <div class="app">

        <compose-message @submittedMessage="submitMessage"></compose-message>

        <message-history></message-history>

    </div>
</template>

<script>
    import composeMessage from './components/compose-message.vue'
    import messageHistory from './components/message-history.vue'

    export default {
        data(){
            return {
                chat: this.$root.horizon('chat')
            }
        },
        components: {
            'compose-message': composeMessage,
            'message-history': messageHistory
        },
        methods: {
            submitMessage(messageObject){
                this.chat.store(messageObject)
            }
        }
    }
</script>

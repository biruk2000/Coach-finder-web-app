<template>
    <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
    </base-card>
</template>


<script>
import CoachForm from '../../Components/coaches/CoachForm.vue' 
import BaseCard from '../../Components/Ui/BaseCard.vue'
export default {
    components: {
        CoachForm,
        BaseCard
    },
    methods: {
        saveData(formData){
            this.$store.dispatch('coaches/registerCoach', formData);
            this.$router.replace('/coaches');
        }
    }
}
</script>
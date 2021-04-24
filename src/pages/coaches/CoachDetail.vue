<template>
   <section>
       <base-card>
            <h2>{{fullName}}</h2>
            <h3>${{rate}}/hour</h3>
       </base-card>
   </section>
   <section>
       <base-card>
            <p>{{description}}</p>
            <base-badge v-for="area in areas" :key="area" 
            :type="area" :title="area"></base-badge>
       </base-card>
   </section>
   <section>
       <base-card>
        <header>
            <h2>Interested? Reach out now</h2>
            <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
       </base-card>
   </section>
</template>

<script>
export default {
    props: ['id'],

    data(){
        return {
            selectedCoache: null
        }
    },
    created(){
        this.selectedCoache = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
        
    },

    computed: {
        fullName(){
            return this.selectedCoache.firstName + ' ' + this.selectedCoache.lastName;
        },
        contactLink(){
            return this.$route.path + '/' + this.id + '/contact';
        },

        rate(){
            return this.selectedCoache.hourlyRate;
        },

        areas(){
            return this.selectedCoache.areas;
        },

        description(){
            return this.selectedCoache.description;
        }
    }

}
</script>
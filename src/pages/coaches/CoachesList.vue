<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coache-item v-for="coach in filteredCoaches" :key="coach.id" 
                :id="coach.id" 
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :rate="coach.hourlyRate" 
                :areas="coach.areas">
                </coache-item>
            </ul>
            <h2 v-else>No coaches found</h2>
        </base-card>
    </section> 
</template>


<script>
import CoacheItem from '../../Components/coaches/CoachItem.vue'
import CoachFilter from '../../Components/coaches/CoachFilter.vue';

export default {
    
    components:{
        CoacheItem,
        CoachFilter
    },
    data(){
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    methods: {
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters;
        }
    },
    computed: {
        filteredCoaches(){
           const coaches = this.$store.getters['coaches/coaches'];
           return coaches.filter(coache => {
               if(this.activeFilters.frontend && coache.areas.includes('frontend')){
                   return true;
               }
               if(this.activeFilters.backend && coache.areas.includes('backend')){
                   return true;
               }
               if(this.activeFilters.career && coache.areas.includes('career')){
                   return true;
               }
               return false;
           })
        },
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches']
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .controls{
        display: flex;
        justify-content: space-between;
    }
</style>
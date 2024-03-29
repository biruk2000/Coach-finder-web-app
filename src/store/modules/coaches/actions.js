export default {
   async registerCoach(context, data){
        const coachId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            areas: data.areas,
            hourlyRate: data.rate
        }
       const response = await fetch(`https://vue-http-demo-658a5-default-rtdb.firebaseio.com/coaches/${coachId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });
        // const responseData = await response.json();
        if(!response.ok){
            // error
        }
        context.commit('registerCoach',{
            ...coachData, 
            id: coachId
        });
    }
};
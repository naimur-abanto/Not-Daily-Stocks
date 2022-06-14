<template>    
    <div class="sign-up-box"> 
        <h3>Log in</h3>
        <card-sign></card-sign>        
        <h3>
            Don't have an account yet? 
            <router-link to="/SignUp">Sign Up</router-link> 
        </h3>
    </div>            
</template>

<script lang="ts">
import CardSign from './CardSign.vue'
export default{
    components: {
        CardSign
    }
}
</script>


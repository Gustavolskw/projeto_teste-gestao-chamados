<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  // Implement login logic here
  console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>

<template>
  <div class="container-fluid h-100">
    <div class="row h-100 align-items-center justify-content-center">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-body p-5">
            <h2 class="text-center mb-5">Login</h2>
            
            <form @submit.prevent="handleLogin">
              <div class="mb-4">
                <label for="email" class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  id="email"
                  v-model="email"
                  required
                  placeholder="Digite seu email"
                >
              </div>
              
              <div class="mb-4">
                <label for="password" class="form-label">Senha</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password"
                  v-model="password"
                  required
                  placeholder="Digite sua senha"
                >
              </div>
              
              <div class="mb-4 form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="rememberMe"
                  v-model="rememberMe"
                >
                <label class="form-check-label" for="rememberMe">
                  Lembrar-me
                </label>
              </div>
              
              <button type="submit" class="btn btn-primary w-100 mb-4">
                Entrar
              </button>
              
              <div class="text-center">
                <a href="#" class="text-decoration-none d-block mb-2">
                  Esqueceu sua senha?
                </a>
                <a href="#" class="text-decoration-none">
                  Criar nova conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 15px;
  border: none;
}

.btn-primary {
  padding: 12px;
  font-weight: 500;
}

.form-control {
  padding: 12px;
}

.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}
</style>
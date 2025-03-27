<script setup lang="ts">
import { ref } from 'vue'

const usuario = ref({
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: '',
  tipo: '',
  empresa: '',
  ativo: true
})

const empresas = ref([
  { id: 1, nome: 'Empresa A' },
  { id: 2, nome: 'Empresa B' }
])

const salvarUsuario = () => {
  console.log('Usuário:', usuario.value)
  // Implementar lógica de salvamento
}
</script>

<template>
  <div class="container">
    <h2 class="mb-4">Cadastro de Usuário</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="salvarUsuario">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nome</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="usuario.nome"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="usuario.email"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Senha</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="usuario.senha"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Confirmar Senha</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="usuario.confirmarSenha"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Tipo de Usuário</label>
              <select class="form-select" v-model="usuario.tipo" required>
                <option value="">Selecione...</option>
                <option value="cliente">Cliente</option>
                <option value="tecnico">Técnico</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Empresa</label>
              <select class="form-select" v-model="usuario.empresa" required>
                <option value="">Selecione...</option>
                <option v-for="empresa in empresas" :key="empresa.id" :value="empresa.id">
                  {{ empresa.nome }}
                </option>
              </select>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="ativo"
                  v-model="usuario.ativo"
                >
                <label class="form-check-label" for="ativo">Usuário Ativo</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-save me-2"></i>
              Salvar Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
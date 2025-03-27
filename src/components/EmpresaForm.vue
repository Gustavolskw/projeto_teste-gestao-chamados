<script setup lang="ts">
import { ref } from 'vue'

const empresa = ref({
  nome: '',
  cnpj: '',
  email: '',
  telefone: '',
  endereco: '',
  cep: '',
  cidade: '',
  estado: ''
})

const salvarEmpresa = () => {
  console.log('Empresa:', empresa.value)
  // Implementar lógica de salvamento
}
</script>

<template>
  <div class="container">
    <h2 class="mb-4">Cadastro de Empresa</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="salvarEmpresa">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nome da Empresa</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="empresa.nome"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">CNPJ</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="empresa.cnpj"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="empresa.email"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Telefone</label>
              <input 
                type="tel" 
                class="form-control" 
                v-model="empresa.telefone"
                required
              >
            </div>
            <div class="col-md-4">
              <label class="form-label">CEP</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="empresa.cep"
                required
              >
            </div>
            <div class="col-md-8">
              <label class="form-label">Endereço</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="empresa.endereco"
                required
              >
            </div>
            <div class="col-md-8">
              <label class="form-label">Cidade</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="empresa.cidade"
                required
              >
            </div>
            <div class="col-md-4">
              <label class="form-label">Estado</label>
              <select class="form-select" v-model="empresa.estado" required>
                <option value="">Selecione...</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <!-- Adicionar outros estados -->
              </select>
            </div>
          </div>
          <div class="mt-4">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-save me-2"></i>
              Salvar Empresa
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
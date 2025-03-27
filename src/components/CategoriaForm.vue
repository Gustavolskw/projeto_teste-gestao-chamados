<script setup lang="ts">
import { ref } from 'vue'

const categoria = ref({
  nome: '',
  descricao: '',
  tempoEstimado: '',
  precoBase: ''
})

const salvarCategoria = () => {
  console.log('Categoria:', categoria.value)
  // Implementar lógica de salvamento
}
</script>

<template>
  <div class="container">
    <h2 class="mb-4">Cadastro de Categoria de Serviço</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="salvarCategoria">
          <div class="row g-3">
            <div class="col-md-12">
              <label class="form-label">Nome da Categoria</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="categoria.nome"
                required
              >
            </div>
            <div class="col-md-12">
              <label class="form-label">Descrição</label>
              <textarea 
                class="form-control" 
                v-model="categoria.descricao"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="col-md-6">
              <label class="form-label">Tempo Estimado (horas)</label>
              <input 
                type="number" 
                class="form-control" 
                v-model="categoria.tempoEstimado"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Preço Base (R$)</label>
              <input 
                type="number" 
                class="form-control" 
                v-model="categoria.precoBase"
                step="0.01"
                required
              >
            </div>
          </div>
          <div class="mt-4">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-save me-2"></i>
              Salvar Categoria
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
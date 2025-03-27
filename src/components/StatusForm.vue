<script setup lang="ts">
import { ref } from 'vue'

const status = ref({
  nome: '',
  descricao: '',
  cor: '#000000',
  ordem: 0,
  notificarCliente: false
})

const salvarStatus = () => {
  console.log('Status:', status.value)
  // Implementar lógica de salvamento
}
</script>

<template>
  <div class="container">
    <h2 class="mb-4">Cadastro de Status de Pedido</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="salvarStatus">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nome do Status</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="status.nome"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Cor</label>
              <input 
                type="color" 
                class="form-control form-control-color" 
                v-model="status.cor"
                required
              >
            </div>
            <div class="col-md-12">
              <label class="form-label">Descrição</label>
              <textarea 
                class="form-control" 
                v-model="status.descricao"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="col-md-6">
              <label class="form-label">Ordem de Exibição</label>
              <input 
                type="number" 
                class="form-control" 
                v-model="status.ordem"
                required
              >
            </div>
            <div class="col-12">
              <div class="form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="notificarCliente"
                  v-model="status.notificarCliente"
                >
                <label class="form-check-label" for="notificarCliente">
                  Notificar cliente quando pedido entrar neste status
                </label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-save me-2"></i>
              Salvar Status
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
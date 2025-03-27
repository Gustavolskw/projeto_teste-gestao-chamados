<script setup lang="ts">
import { ref } from 'vue'

const tecnico = ref({
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: '',
  especialidade: '',
  disponivel: true,
  horarioInicio: '',
  horarioFim: ''
})

const especialidades = [
  'Manutenção de Hardware',
  'Suporte de Software',
  'Redes',
  'Segurança',
  'Banco de Dados'
]

const salvarTecnico = () => {
  console.log('Técnico:', tecnico.value)
  // Implementar lógica de salvamento
}
</script>

<template>
  <div class="container">
    <h2 class="mb-4">Cadastro de Técnico</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="salvarTecnico">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nome</label>
              <input 
                type="text" 
                class="form-control" 
                v-model="tecnico.nome"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input 
                type="email" 
                class="form-control" 
                v-model="tecnico.email"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Senha</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="tecnico.senha"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Confirmar Senha</label>
              <input 
                type="password" 
                class="form-control" 
                v-model="tecnico.confirmarSenha"
                required
              >
            </div>
            <div class="col-md-12">
              <label class="form-label">Especialidade</label>
              <select class="form-select" v-model="tecnico.especialidade" required>
                <option value="">Selecione...</option>
                <option v-for="esp in especialidades" :key="esp" :value="esp">
                  {{ esp }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Horário de Início</label>
              <input 
                type="time" 
                class="form-control" 
                v-model="tecnico.horarioInicio"
                required
              >
            </div>
            <div class="col-md-6">
              <label class="form-label">Horário de Fim</label>
              <input 
                type="time" 
                class="form-control" 
                v-model="tecnico.horarioFim"
                required
              >
            </div>
            <div class="col-12">
              <div class="form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="disponivel"
                  v-model="tecnico.disponivel"
                >
                <label class="form-check-label" for="disponivel">Disponível para Atendimento</label>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <button type="submit" class="btn btn-primary">
              <i class="fas fa-save me-2"></i>
              Salvar Técnico
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const orderStatusData = {
  labels: ["Pendentes", "Em Andamento", "Concluídos"],
  datasets: [
    {
      data: [12, 19, 8],
      backgroundColor: ["#ffc107", "#0dcaf0", "#198754"],
      borderWidth: 0,
    },
  ],
};

const performanceData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Tempo Médio de Atendimento (horas)",
      data: [4.2, 3.8, 3.2, 3.5, 2.8, 2.5],
      borderColor: "#0d6efd",
      tension: 0.4,
    },
  ],
};

const completedOrdersData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Pedidos Concluídos",
      data: [65, 78, 82, 75, 90, 85],
      backgroundColor: "#0d6efd",
    },
  ],
};

const recentOrders = ref([
  {
    id: 1,
    client: "João Silva",
    service: "Manutenção PC",
    status: "Pendente",
    priority: "Alta",
    technician: "Carlos",
  },
  {
    id: 2,
    client: "Maria Santos",
    service: "Instalação Software",
    status: "Em Andamento",
    priority: "Média",
    technician: "Ana",
  },
  {
    id: 3,
    client: "Pedro Costa",
    service: "Reparo Notebook",
    status: "Concluído",
    priority: "Baixa",
    technician: "Roberto",
  },
  {
    id: 4,
    client: "Ana Oliveira",
    service: "Backup Dados",
    status: "Pendente",
    priority: "Alta",
    technician: "Paulo",
  },
  {
    id: 5,
    client: "Lucas Mendes",
    service: "Formatação",
    status: "Em Andamento",
    priority: "Média",
    technician: "Carlos",
  },
]);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const selectedStatus = ref("todos");
const selectedPriority = ref("todas");
const selectedTechnician = ref("todos");

const filterOrders = () => {
  // Implement filter logic here
  console.log("Filtering orders:", {
    status: selectedStatus.value,
    priority: selectedPriority.value,
    technician: selectedTechnician.value,
  });
};
</script>

<template>
  <div class="dashboard">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Painel de Controle</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fas fa-bell"></i> Notificações</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fas fa-user"></i> Perfil</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container-fluid py-4">
      <!-- Status Cards -->
      <div class="row mb-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Pedidos Pendentes</h5>
              <h2 class="text-warning">12</h2>
              <p class="card-text">
                <i class="fas fa-clock"></i> Aguardando atendimento
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Em Andamento</h5>
              <h2 class="text-info">19</h2>
              <p class="card-text"><i class="fas fa-tools"></i> Em execução</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Concluídos</h5>
              <h2 class="text-success">8</h2>
              <p class="card-text">
                <i class="fas fa-check-circle"></i> Finalizados hoje
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts -->
      <div class="row mb-4">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Status dos Pedidos</h5>
              <div style="height: 250px">
                <Doughnut :data="orderStatusData" :options="chartOptions" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Tempo Médio de Atendimento</h5>
              <div style="height: 250px">
                <Line :data="performanceData" :options="chartOptions" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Pedidos Concluídos por Mês</h5>
              <div style="height: 250px">
                <Bar :data="completedOrdersData" :options="chartOptions" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters and Recent Orders -->
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title mb-4">Pedidos Recentes</h5>

          <div class="row mb-4">
            <div class="col-md-3">
              <select
                v-model="selectedStatus"
                class="form-select"
                @change="filterOrders"
              >
                <option value="todos">Todos os Status</option>
                <option value="pendente">Pendente</option>
                <option value="andamento">Em Andamento</option>
                <option value="concluido">Concluído</option>
              </select>
            </div>
            <div class="col-md-3">
              <select
                v-model="selectedPriority"
                class="form-select"
                @change="filterOrders"
              >
                <option value="todas">Todas as Prioridades</option>
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>
            </div>
            <div class="col-md-3">
              <select
                v-model="selectedTechnician"
                class="form-select"
                @change="filterOrders"
              >
                <option value="todos">Todos os Técnicos</option>
                <option value="carlos">Carlos</option>
                <option value="ana">Ana</option>
                <option value="roberto">Roberto</option>
                <option value="paulo">Paulo</option>
              </select>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Serviço</th>
                  <th>Status</th>
                  <th>Prioridade</th>
                  <th>Técnico</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in recentOrders" :key="order.id">
                  <td>#{{ order.id }}</td>
                  <td>{{ order.client }}</td>
                  <td>{{ order.service }}</td>
                  <td>
                    <span
                      :class="{
                        badge: true,
                        'bg-warning': order.status === 'Pendente',
                        'bg-info': order.status === 'Em Andamento',
                        'bg-success': order.status === 'Concluído',
                      }"
                      >{{ order.status }}</span
                    >
                  </td>
                  <td>
                    <span
                      :class="{
                        badge: true,
                        'bg-danger': order.priority === 'Alta',
                        'bg-warning': order.priority === 'Média',
                        'bg-info': order.priority === 'Baixa',
                      }"
                      >{{ order.priority }}</span
                    >
                  </td>
                  <td>{{ order.technician }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary me-1">
                      <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-success me-1">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.card-title {
  color: #495057;
  font-weight: 600;
}

.table th {
  font-weight: 600;
  color: #495057;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
}

.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-select {
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.form-select:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
}
</style>

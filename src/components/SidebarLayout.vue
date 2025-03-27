<script setup lang="ts">
import { ref } from "vue";

const isSidebarCollapsed = ref(false);

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};
</script>

<template>
  <div class="layout">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <button class="btn btn-link text-light me-3" @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <a class="navbar-brand" href="#">Sistema de Gestão</a>
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

    <!-- Sidebar and Content -->
    <div class="wrapper">
      <!-- Sidebar -->
      <nav :class="['sidebar', { collapsed: isSidebarCollapsed }]">
        <div class="sidebar-content">
          <div class="sidebar-header">
            <h5>Menu</h5>
          </div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">
                <i class="fas fa-tachometer-alt me-2"></i>
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/empresas" class="nav-link">
                <i class="fas fa-building me-2"></i>
                Empresas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/usuarios" class="nav-link">
                <i class="fas fa-users me-2"></i>
                Usuários
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tecnicos" class="nav-link">
                <i class="fas fa-user-cog me-2"></i>
                Técnicos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categorias" class="nav-link">
                <i class="fas fa-tags me-2"></i>
                Categorias
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/status" class="nav-link">
                <i class="fas fa-tasks me-2"></i>
                Status
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main :class="['content', { 'content-collapsed': isSidebarCollapsed }]">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.wrapper {
  padding-top: 56px;
  display: flex;
  min-height: calc(100vh - 56px);
}

.sidebar {
  width: 250px;
  background: #343a40;
  color: white;
  transition: all 0.3s;
  position: fixed;
  height: calc(100vh - 56px);
  z-index: 1000;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-content {
  height: 100%;
  overflow-y: auto;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar .nav-link {
  color: rgba(255, 255, 255, 0.8);
  padding: 0.8rem 1rem;
  transition: all 0.3s;
}

.sidebar .nav-link:hover,
.sidebar .nav-link.active {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.content {
  margin-left: 250px;
  padding: 2rem;
  width: calc(100% - 250px);
  transition: all 0.3s;
}

.content-collapsed {
  margin-left: 80px;
  width: calc(100% - 80px);
}

.sidebar.collapsed .nav-link span {
  display: none;
}

@media (max-width: 768px) {
  .sidebar {
    margin-left: -250px;
  }

  .sidebar.collapsed {
    margin-left: 0;
  }

  .content {
    margin-left: 0;
    width: 100%;
  }

  .content-collapsed {
    margin-left: 80px;
    width: calc(100% - 80px);
  }
}
</style>

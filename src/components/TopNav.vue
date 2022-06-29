<template>
  <nav>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div>
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              @click="toggleDash"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <img
                class="hidden lg:block h-12 w-auto"
                src="../assets/logo-with-horizontal-name.png"
                alt="Daily Stocks"
              />
              <img
                class="block lg:hidden h-12 w-auto"
                src="@/assets/justlogo.png"
                alt="Daily Stocks"
              />
            </router-link>
          </div>
          <div v-if="isLogged" class="hidden sm:block sm:ml-6">
            <router-link
              class="px-3 py-2 rounded-md text-lg underline font-normal"
              aria-current="page"
              to="/dashboard"
              >Dashboard</router-link
            >
          </div>
        </div>

        <div v-if="!isLogged">
          <router-link to="/auth/login">Login</router-link>
        </div>
        <div
          v-if="isLogged"
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                @click="toggle"
                type="button"
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>

            <div
              v-if="!isHidden"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <router-link
                to="/user/account"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Account</router-link
              >

              <a
                @click="logOut"
                class="block px-4 py-2 text-sm text-gray-700 hover:backdrop:first-letter:first-line:marker:"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Log out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="!dashboardHidden" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Dashboard</a
        >
      </div>
    </div>
  </nav>
</template>

<script lang="TS">
import { storeToRefs } from 'pinia'
import {ref} from 'vue'
import { useUserStore } from '@/stores/user'
export default{
  setup(){
    const userStore = useUserStore()
    const {isLogged} = storeToRefs(userStore)
    const {currentUser} = storeToRefs(userStore)
    const {logOut} = userStore
    const isHidden = ref(true)
    const dashboardHidden = ref(true)

    function toggleDash() {
      dashboardHidden.value = !dashboardHidden.value
    }
    function toggle() {
      isHidden.value = !isHidden.value
    }
    return{
      isLogged,
      currentUser,
      toggle,
      isHidden,
      dashboardHidden,
      logOut,
      toggleDash
    }
  }
}
</script>

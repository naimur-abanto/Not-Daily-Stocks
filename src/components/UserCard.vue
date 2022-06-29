<template>
  <div
    class="bg-black bg-opacity-40 shadow overflow-hidden sm:rounded-lg w-max mx-auto my-auto"
  >
    <div class="px-3 py-5">
      <div class="py-2 sm:px-6">
        <h3>Account Settings</h3>
        <p class="text-sm text-gray-800">
          This is the personal information you use to access and manage your
          account.
        </p>
      </div>
      <div class="border-t border-gray-200"></div>

      <div class="px-5 py-4">
        <div class="flex items-center">
          <img
            class="h-16 w-16 rounded-full -center"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile-image"
          />

          <div class="mx-1">
            <p class="text-black text-bold text-start">
              {{ currentUser.firstname + " " + currentUser.lastname }}
            </p>
            <p class="text-start">{{ currentUser.email }}</p>
          </div>
          <span class="translate-x-40">
            <button
              @click="editInfo()"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <!-- Heroicon name: solid/pencil -->
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>
              Edit
            </button>
          </span>
        </div>

        <div class="py-5">
          <p class="text-sm font-bold">Email address</p>
          <p class="text-sm text-gray-900">{{ currentUser.email }}</p>
          <div class="divide-y">
            <div class="flex items-start space-x-3 py-2">
              <input type="checkbox" class="border-gray-300 rounded h-5 w-5" />
              <p class="text-gray-900 leading-none">
                I’d like to receive stock news in email for my chosen stocks.
              </p>
            </div>
          </div>
        </div>

        <div class="flex py-4">
          <div>
            <p class="text-sm font-bold">Password</p>
            <p class="text-sm text-gray-900">{{ currentUser.password }}</p>
          </div>
          <div class="translate-x-20 w-max">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const userStore = useUserStore();
    const { currentUser } = storeToRefs(userStore);
    const { editInfo } = userStore;
    return {
      currentUser,
      editInfo,
    };
  },
};
</script>

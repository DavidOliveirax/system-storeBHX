<template>
  <div class="flex h-screen w-44 flex-col justify-between border-e bg-black-900">
    <div>
      <div class="inline-flex size-16 items-center justify-center">
        <span class="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          L
        </span>
      </div>
  
      <div class="border-t border-gray-100">
        <div class="px-2">
          <div class="py-4">
            <a
              href="#"
              class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
            >
            <span>Caixa</span>
              
  
              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Caixa
              </span>
            </a>
          </div>
  
          <ul class="space-y-1 border-t border-gray-100 pt-4">
            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
              <span>Clientes</span>
  
                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Clientes
                </span>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
              <span>Produtos</span>
  
                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Produtos
                </span>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
              <span>Vendas</span>
  
                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Vendas
                </span>
              </a>
            </li>
  
            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
              <span>Ordem de Serviço</span>
  
                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Ordem de Serviço
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
      <form action="#">
        <button
          type="submit"
          class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
  
          <span
            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
          >
            Logout
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
  <script setup lang="ts">
  /* const { data } = await useFetch('/api/teste')*/
  </script>
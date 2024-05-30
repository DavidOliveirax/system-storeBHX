<template>
  <div class="flex justify-between">
    <div class="flex h-screen flex-col justify-between border-e bg-gray-800">
      <div class="px-4 py-6">
        <img class="flex place-content-center rounded-lg" src="/assets/image/logo-ddm.png" alt="Logo DDM">
        <ul class="mt-6 space-y-1">
          <li>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                <span class="text-sm font-medium"> Clientes </span>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </summary>

              <ul class="mt-2 space-y-1 px-4">
                <li>
                  <a href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                    CPF
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                    CNPJ
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                <span class="text-sm font-medium"> Produtos </span>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </summary>

              <ul class="mt-2 space-y-1 px-4">
                <li>
                  <a href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                    Produtos
                  </a>
                </li>

                <li>
                  <a href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                    Serviços
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
              Vendas
            </a>
          </li>

          <li>
            <a href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
              Ordem de Serviço
            </a>
          </li>

          <li>
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                <span class="text-sm font-medium"> Caixa </span>

                <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
              </summary>

              <ul class="mt-2 space-y-1 px-4">
                <li>
                  <a href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                    Caixa
                  </a>
                </li>

                <li>
                  <a href="#"
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                    Relatório
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" class="flex items-center gap-2 bg-black p-4 hover:bg-gray-50">
          <img alt=""
          src="/assets/image/logo-d.png"
            class="size-10 rounded-full object-cover" />

          <div>
            <p class="text-xs">
              <strong class="block font-medium">DDM INFORMÁTICA</strong>

              <span> atendimentoddm@gmail.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>

/* const menus = [
    { id: 1, nome: "CPF", path: '/clientesP' },
] */

</script>
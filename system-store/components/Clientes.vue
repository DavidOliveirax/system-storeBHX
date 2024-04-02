import BuscadorCep from './Dropdown/BuscadorCep.vue';
<template>
    <div class="flex justify-center mt-9 ml-9">
        <form action="form.py" method="GET" autocomplete="on" class="form" id="formulario">
            <div class="flex">
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserName"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                        <span class="text-xs font-medium text-white"> Nome: </span>
                        <input type="name" id="UserName" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserSocial"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                        <span class="text-xs font-medium text-white"> Razão Social: </span>
                        <input type="name" id="UserSocial" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserDocument"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                        <span class="text-xs font-medium text-white"> CPF/CNPJ: </span>
                        <input type="number" id="UserDocument" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserEmail"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Email: </span>
                        <input type="email" id="UserEmail" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
            </div>
            <div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserCep"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> CEP: </span>
                        <input type="number" id="UserCep" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
            </div>
            <div class="flex">
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserLocal"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Endereço: </span>
                        <input type="text" id="UserLocal" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserBairro"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Bairro: </span>
                        <input type="text" id="UserBairro" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="UserCidade"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Cidade: </span>
                        <input type="text" id="UserCidade" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
                <div>
                    <ChangeState />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    
</script>
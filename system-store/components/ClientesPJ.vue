import BuscadorCep from './Dropdown/BuscadorCep.vue';
<template>
        <div class="rounded-xl border border-gray-700 bg-gray-800 p-4">
            <form class="">
                <div class="flex">
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userName"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                            <span class="text-xs font-medium text-white"> Razão Social: </span>
                            <input v-model="userData.name" type="name" id="userName" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                        </label>
                    </div>
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userSocial"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                            <span class="text-xs font-medium text-white"> Nome Fantasia: </span>
                            <input v-model="userData.social" type="text" id="UserSocial" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                        </label>
                    </div>
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userDocument"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                            <span class="text-xs font-medium text-white"> CNPJ: </span>
                            <input v-model="userData.document" type="number" id="UserDocument" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                        </label>
                    </div>
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userEmail"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span class="text-xs font-medium text-white"> Email: </span>
                            <input v-model="userData.email" type="email" id="UserEmail" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                        </label>
                    </div>
                </div>
                <div class="flex space-x-11">
                    <div class="w-72 pb-2.5 pr-1">
                            <label for="userName"
                                class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                                <span class="text-xs font-medium text-white"> Responsável: </span>
                                <input v-model="userData.name" type="name" id="userName" placeholder=""
                                    class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                            </label>
                        </div>
                        <div class="w-72 pb-2.5 pr-1">
                            <label for="userName"
                                class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                                <span class="text-xs font-medium text-white"> Telefone: </span>
                                <input v-model="userData.name" type="name" id="userName" placeholder=""
                                    class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                            </label>
                        </div>
                    <div>
                        <SearchCep />
                    </div>
                </div>
                <div class="flex">
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userLocal"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span class="text-xs font-medium text-white"> Endereço: </span>
                            <input v-model="userData.local" type="text" id="UserLocal" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                        </label>
                    </div>
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userBairro"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span class="text-xs font-medium text-white"> Bairro: </span>
                            <input v-model="userData.district" type="text" id="UserBairro" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                        </label>
                    </div>
                    <div class="w-72 pb-2.5 pr-1">
                        <label for="userCidade"
                            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                            <span class="text-xs font-medium text-white"> Cidade: </span>
                            <input v-model="userData.city" type="text" id="UserCidade" placeholder=""
                                class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                        </label>
                    </div>
                    <div>
                        <ChangeState />
                    </div>
                </div>
                <div class="flex justify-end pt-2.5">
                    <button
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        type="submit" @click.prevent="submit">
                        Enviar
                    </button>
                </div>
                Nome {{ userData.name }} <br>
                Razão Social {{ userData.social }} <br>
                Documento {{ userData.document }} <br>
                Email {{ userData.email }} <br>
                Endereço {{ userData.local }} <br>
                Bairro {{ userData.district }} <br>
                Cidade {{ userData.city }} <br>
            </form>
        </div>        
</template>

<script setup lang="ts">
const userData = ref({
    name: "",
    social: "",
    document: "",
    email: "",
    local: "",
    district: "",
    city: "",
})


function submit() {
    console.log('Cadastro Enviado!')
    console.log(userData.value)
}

function emailValid(email: string) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/)
    if(emailRegex.test(email)) {
        return true
    }
    return false
}


</script>
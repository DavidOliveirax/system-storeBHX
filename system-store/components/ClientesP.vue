import BuscadorCep from './Dropdown/BuscadorCep.vue';
<template>
    <div class="flex justify-center mt-9 ml-9">
        <form action="form.py" method="GET" autocomplete="on" class="form" id="formulario">
            <div class="flex">

                <div class="w-72 pb-2.5 pr-1">
                    <label for="userName"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                        <span class="text-xs font-medium text-white"> Nome: </span>
                        <input v-model="name" type="name" id="userName" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="userSocial"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                        <span class="text-xs font-medium text-white"> Razão Social: </span>
                        <input v-model="social" type="text" id="UserSocial" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="userDocument"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-60">
                        <span class="text-xs font-medium text-white"> CPF/CNPJ: </span>
                        <input v-model="document" type="number" id="UserDocument" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="userEmail"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Email: </span>
                        <input v-model="email" type="email" id="UserEmail" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
            </div>
            <div>
                <SearchCep />
            </div>
            <div class="flex">
                <div class="w-72 pb-2.5 pr-1">
                    <label for="userLocal"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Endereço: </span>
                        <input v-model="local" type="text" id="UserLocal" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="userBairro"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Bairro: </span>
                        <input v-model="district" type="text" id="UserBairro" placeholder=""
                            class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                    </label>
                </div>
                <div class="w-72 pb-2.5 pr-1">
                    <label for="userCidade"
                        class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                        <span class="text-xs font-medium text-white"> Cidade: </span>
                        <input v-model="city" type="text" id="UserCidade" placeholder=""
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
                    type="submit" @click="submit">
                    Enviar
                </button>
            </div>
            Nome {{ name }} <br>
            Razão Social {{ social }} <br>
            Documento {{ document }} <br>
            Email {{ email }} <br>
            Endereço {{ local }} <br>
            Bairro {{ district }} <br>
            Cidade {{ city }} <br>
        </form>
    </div>
</template>

<script setup>
const name = defineModel("name", {default: ""})
const social = defineModel("social", {default: ""})
const document = defineModel("document", {default: ""})
const email = defineModel("email", {default: ""})
const local = defineModel("local", {default: ""})
const district = defineModel("district", {default: ""})
const city = defineModel("city", {default: ""})

function submit() {
    console.log('Cadastro Enviado!')
}

function emailValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/)
    if(emailRegex.test(email)) {
        return true
    }
    return false
}


</script>
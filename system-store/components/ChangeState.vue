<template>
    <div class="w-72 pb-2.5 pr-1">
        <label for="HeadlineAct"
            class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <span class="text-xs font-medium text-white"> Estado: </span>

            <USelect color="gray" variant="outline" size="2xs" placeholder="Selecione um estado."v-model="estados" :options="estados" />
        </label>
    </div>
</template>

<script>
import brasil from "./assets/brasil.json";

export default {
    name: "Estados",
    data() {
        return {
            cidades: [],
            estado: null,
            cidade: null,
            brasil,
            estados: [
                { value: "Acre", text: "Acre" },
                { value: "Alagoas", text: "Alagoas" },
                { value: "Amapá", text: "Amapá" },
                { value: "Amazonas", text: "Amazonas" },
                { value: "Bahia", text: "Bahia" },
                { value: "Ceará", text: "Ceará" },
                { value: "Distrito Federal", text: "Distrito Federal" },
                { value: "Espírito Santo", text: "Espírito Santo" },
                { value: "Goiás", text: "Goiás" },
                { value: "Maranhão", text: "Maranhão" },
                { value: "Mato Grosso", text: "Mato Grosso" },
                { value: "Mato Grosso do Sul", text: "Mato Grosso do Sul" },
                { value: "Minas Gerais", text: "Minas Gerais" },
                { value: "Pará", text: "Pará" },
                { value: "Paraíba", text: "Paraíba" },
                { value: "Paraná", text: "Paraná" },
                { value: "Pernambuco", text: "Pernambuco" },
                { value: "Piauí", text: "Piauí" },
                { value: "Rio de Janeiro", text: "Rio de Janeiro" },
                { value: "Rio Grande do Norte", text: "Rio Grande do Norte" },
                { value: "Rio Grande do Sul", text: "Rio Grande do Sul" },
                { value: "Rondônia", text: "Rondônia" },
                { value: "Roraima", text: "Roraima" },
                { value: "Santa Catarina", text: "Santa Catarina" },
                { value: "São Paulo", text: "São Paulo" },
                { value: "Sergipe", text: "Sergipe" },
                { value: "Tocantins", text: "Tocantins" }
            ]
        };
    },
    watch: {
        'estado': function () {
            this.cidades = brasil[this.estado].cidades
        }
    },
    methods: {
    }
};
</script>
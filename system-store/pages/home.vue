<template>
    <div class="flex">
        <div>
            <MenuHeader />
        </div>
        <div class="w-full h-screen">
            <section class="">
                    <ClientesP />
                </section>
            <img class="w-full h-screen bg-local" src="@/assets/image/galaxy.png" alt="Background">
        </div>
    </div>
</template>

<script setup lang="ts">
const pages = [
    { id: 1, nome: "", path: '/' },
]

</script>
<template>
    <div>
        <form action="form.py" method="GET" autocomplete="on" class="form" id="formulario">

            <label for="inome">Nome completo:
                <input type="text" name="nome" id="inome"></label><br>

            <label for="inasce">Data de Nascimento:
                <input type="date" name="nasce" id="inasce"></label><br>

            <label for="idoc">CPF:
                <input type="document" name="CPF" id="idoc"></label><br>

            <label for="itel">Numero de telefone:
                <input type="tel" name="telefone" id="itel"></label><br>

            <div>
                <label for="UserEmail" class="block text-xs font-medium text-white"> Email </label>
                <input type="email" id="UserEmail" placeholder=""
                    class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
            </div>

            <label
    for="UserEmail"
    class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <span class="text-xs font-medium text-gray-700"> Email </span>
  
    <input
      type="email"
      id="UserEmail"
      placeholder="anthony@rhcp.com"
      class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    />
  </label>

            <label for="isenha1">Digite sua senha:
                <input type="password" name="senha" id="isenha1"></label><br>

            <p><input type="submit" value="Salvar" id="submit" class="bg-white text-black"></p>

        </form>
    </div>
</template>
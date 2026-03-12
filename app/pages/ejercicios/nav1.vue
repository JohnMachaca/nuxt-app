<template>
    <header class="w-full font-sans text-sm min-w-min">
        <div
            class="hidden md:flex items-center justify-between px-4 py-2 bg-[#131921] text-white"
        >
            <div
                class="flex items-center border border-transparent hover:border-white p-1 cursor-pointer rounded-[2px] mt-1"
            >
                <span class="text-2xl font-bold tracking-tighter">amazon</span>
            </div>

            <div
                class="flex flex-col border border-transparent hover:border-white p-1 cursor-pointer rounded-[2px] ml-2"
            >
                <span class="text-[#cccccc] text-[11px] leading-3 ml-4"
                    >Enviar a</span
                >
                <div class="flex items-center font-bold text-sm leading-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4 mr-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                    </svg>
                    Perú
                </div>
            </div>

            <div
                class="flex flex-1 max-w-screen-xl mx-5 h-10 rounded-[4px] overflow-hidden focus-within:ring-2 focus-within:ring-[#f90] focus-within:border-transparent bg-white"
            >
                <select
                    class="bg-[#f3f3f3] text-gray-600 text-xs px-2 border-r border-gray-300 outline-none w-auto max-w-xs cursor-pointer hover:bg-gray-200 z-10"
                >
                    <option>Computadoras</option>
                    <option>Todo</option>
                </select>
                <input
                    type="text"
                    placeholder="Buscar en Amazon"
                    class="flex-1 px-3 text-black text-[15px] outline-none"
                />
                <button
                    class="bg-[#febd69] hover:bg-[#f3a847] px-4 flex items-center justify-center text-gray-800 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>

            <div class="flex items-center space-x-1">
                <div
                    class="flex items-center border border-transparent hover:border-white p-2 font-bold cursor-pointer rounded-[2px]"
                >
                    <span class="mr-1">🇺🇸</span> ES
                    <span class="text-[10px] text-gray-400 ml-1">▼</span>
                </div>
                <div
                    class="flex flex-col border border-transparent hover:border-white p-1 cursor-pointer rounded-[2px]"
                >
                    <span class="text-[11px] leading-3 text-white"
                        >Hola, Identifícate</span
                    >
                    <span
                        class="font-bold text-[13px] leading-4 flex items-center"
                        >Cuenta y Listas
                        <span class="text-[10px] text-gray-400 ml-1"
                            >▼</span
                        ></span
                    >
                </div>
                <div
                    class="flex flex-col border border-transparent hover:border-white p-1 cursor-pointer rounded-[2px]"
                >
                    <span class="text-[11px] leading-3 text-white"
                        >Devoluciones</span
                    >
                    <span class="font-bold text-[13px] leading-4"
                        >y pedidos</span
                    >
                </div>
                <div
                    class="flex items-end border border-transparent hover:border-white p-2 cursor-pointer rounded-[2px] relative"
                >
                    <div class="relative flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-9 h-9 text-white"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                        <span
                            class="absolute top-0 left-4 text-[#f08804] font-bold text-[15px] leading-4"
                            >0</span
                        >
                    </div>
                    <span class="font-bold text-[13px] mt-2 hidden lg:block"
                        >Carrito</span
                    >
                </div>
            </div>
        </div>

        <div
            class="hidden md:flex items-center px-4 py-[6px] bg-[#232f3e] text-white text-[13px]"
        >
            <div
                @click="isMenuOpen = true"
                class="flex items-center border border-transparent hover:border-white p-1 font-bold cursor-pointer rounded-[2px] mr-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="w-5 h-5 mr-1"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                Todo
            </div>
            <div class="flex items-center space-x-1">
                <NuxtLink
                    to="#"
                    class="border border-transparent hover:border-white px-2 py-1 rounded-[2px]"
                    >Amazon Bazaar</NuxtLink
                >
                <NuxtLink
                    to="#"
                    class="border border-transparent hover:border-white px-2 py-1 rounded-[2px]"
                    >Ofertas del Día</NuxtLink
                >
                <NuxtLink
                    to="#"
                    class="border border-transparent hover:border-white px-2 py-1 rounded-[2px]"
                    >Servicio al Cliente</NuxtLink
                >
            </div>
        </div>

        <div class="md:hidden flex flex-col w-full text-white">
            <div
                class="flex items-center justify-between px-3 py-3 bg-[#131921]"
            >
                <div class="flex items-center space-x-3">
                    <button @click="isMenuOpen = true" class="p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-7 h-7"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                    <span class="text-xl font-bold tracking-tighter mt-1"
                        >amazon</span
                    >
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex items-center text-[15px]">
                        <span>Identifícate</span> <span class="mx-1">›</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </div>
                    <div class="relative flex items-center pr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-8 h-8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                        <span
                            class="absolute top-0 left-3.5 text-[#f08804] font-bold text-[14px]"
                            >0</span
                        >
                    </div>
                </div>
            </div>
            <div class="px-3 pb-3 bg-[#131921]">
                <div
                    class="flex flex-1 h-11 rounded-md overflow-hidden bg-white shadow-md"
                >
                    <input
                        type="text"
                        placeholder="Buscar en Amazon"
                        class="flex-1 px-4 text-black text-[16px] outline-none"
                    />
                    <button
                        class="bg-[#febd69] hover:bg-[#f3a847] px-4 flex items-center justify-center text-gray-800 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div
            v-if="isMenuOpen"
            class="relative z-[100]"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                class="fixed inset-0 bg-black bg-opacity-80 transition-opacity"
                @click="isMenuOpen = false"
            ></div>

            <div class="fixed inset-y-0 left-0 flex max-w-full">
                <div
                    class="w-screen max-w-[365px] bg-white transform transition-transform ease-in-out duration-300"
                    :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
                >
                    <div
                        class="bg-[#232f3e] text-white px-8 py-3 text-[19px] font-bold flex items-center h-[50px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-7 h-7 mr-2"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Hola, Identifícate
                    </div>

                    <div
                        class="overflow-y-auto h-[calc(100vh-50px)] pb-10 text-[14px] text-[#111]"
                    >
                        <div class="py-2 border-b border-gray-300">
                            <div class="font-bold text-[16px] px-8 py-2">
                                Contenido y dispositivos digitales
                            </div>
                            <a
                                href="#"
                                class="flex justify-between items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                Prime Video
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="flex justify-between items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                Amazon Music
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="flex justify-between items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                E-readers Kindle y Libros
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div class="py-2 border-b border-gray-300">
                            <div class="font-bold text-[16px] px-8 py-2">
                                Buscar por departamento
                            </div>
                            <a
                                href="#"
                                class="flex justify-between items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                Electrónicos
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="flex justify-between items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                Computadoras
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                Ver todo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 ml-2 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div class="py-2">
                            <div class="font-bold text-[16px] px-8 py-2">
                                Programas y funcionalidades
                            </div>
                            <a
                                href="#"
                                class="flex justify-between items-center px-8 py-[10px] hover:bg-gray-200"
                            >
                                Tarjetas de Regalo
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-4 h-4 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="pt-3 pl-2">
                    <button
                        @click="isMenuOpen = false"
                        class="p-1 text-white hover:text-gray-300 focus:outline-none cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                            stroke="currentColor"
                            class="w-8 h-8"
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
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";

// Estado para controlar la visibilidad del menú lateral
const isMenuOpen = ref(false);

// Aquí irá tu lógica de Sanity para poblar las categorías del Sidebar
</script>

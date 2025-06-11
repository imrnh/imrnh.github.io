<style scoped>
.site_owner_name {
    color: #2D4CEE;
    font-family: "Nunito", sans-serif;
    font-size: 32px;
    font-weight: 700;
}

.custom_font_setup_for_header {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16;
}
</style>


<template>
    <header class="relative z-50 bg-white mt-7 custom_font_setup_for_header">
        <nav class="w-full flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <div class="site_owner_name">Imran Hossen</div>
                </a>
            </div>


            <!-- Hamburger button visible only on small screens -->
            <button type="button"
                class="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true" aria-label="Open menu">
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>




            <PopoverGroup class="hidden lg:flex lg:gap-x-12 ml-auto">
                <a href="#" class="text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header">Research</a>
                <a href="#" class="text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header">Blog</a>
                <Popover class="relative">

                    <PopoverButton
                        class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header">
                        <p class="custom_font_setup_for_header">About me</p>
                        <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>

                    <!-- ✅ Dropdown full screen but below nav -->
                    <transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition ease-in duration-150"
                        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">

                        <teleport to="body">
                            <PopoverPanel class="fixed inset-0 z-40 w-full h-[600px] bg-white shadow-lg">
                                <div class="p-10 text-2xl text-gray-900">

                                    <!-- Content of about us will be here. -->

                                </div>
                            </PopoverPanel>
                        </teleport>

                    </transition>
                </Popover>

                <a href="#" class="text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header"
                    style="font-weight: 300; margin-left: -8px;">
                    <!-- <u style="border-bottom: 0.001em solid #2D4CEE; text-decoration: none; color: #2D4CEE;">-->
                    <font color="#2D4CEE">Download CV</font>
                    <!-- </u> -->
                </a>

            </PopoverGroup>
        </nav>



        <!-- For small screen -->
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <!-- <a href="#" class="-m-1.5 p-1.5">
                        <div class="site_owner_name">Imran Hossen</div>
                    </a> -->
                    <br>
                    <br>
                    <br>
                    <br>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="size-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">

                        <div class="space-y-2 py-3">
                            <a href="#"
                                class="text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header">Research</a>
                        </div>

                        <div class="space-y-2 py-3">
                            <a href="#"
                                class="text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header">Blog</a>
                        </div>

                        <div class="space-y-2 py-3">


                            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                <DisclosureButton
                                    class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                    About me
                                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']"
                                        aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    Write info about myself again but for small screen now.
                                </DisclosurePanel>
                            </Disclosure>

                            <div class="space-y-2 py-3">
                                <a href="#"
                                    class="text-sm/6 font-semibold text-gray-900 custom_font_setup_for_header">Download
                                    CV</a>
                            </div>

                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>



    </header>






    <slot />
</template>

<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false)
</script>

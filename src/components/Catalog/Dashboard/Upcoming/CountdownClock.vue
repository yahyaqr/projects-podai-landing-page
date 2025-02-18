<template>
    <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base font-mono">
        <div v-for="(unit, index) in units" :key="index" class="flex flex-row sm:flex-col items-center">
            <div class="flip-clock w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16">
                <div class="flip-clock__digit text-lg sm:text-xl md:text-2xl">
                    {{ String(unit.value).padStart(2, '0') }}
                </div>
            </div>
            <span class="flip-clock__label sm:text-xs md:text-sm ml-1 mr-2 sm:ml-0 sm:mt-1 sm:block hidden">
                {{ unit.label }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
    targetDate: {
        type: String,
        required: true,
    },
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const units = computed(() => [
    { value: days.value, label: 'days' },
    { value: hours.value, label: 'hrs' },
    { value: minutes.value, label: 'min' },
    { value: seconds.value, label: 'sec' },
])

const updateCountdown = () => {
    const now = new Date()
    const targetDateObj = new Date(props.targetDate)
    const diff = targetDateObj - now

    if (diff <= 0) {
        clearInterval(countdownInterval)
        return
    }

    days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

let countdownInterval
onMounted(() => {
    updateCountdown()
    countdownInterval = setInterval(updateCountdown, 1000)
})
</script>

<style scoped>
.flip-clock {
    position: relative;
    display: inline-block;
    background: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flip-clock__digit {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: bold;
    color: #333;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(240, 240, 240, 1) 50%,
            rgba(230, 230, 230, 1) 51%,
            rgba(220, 220, 220, 1) 100%);
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
    box-shadow:
        inset 0 1px 2px rgba(255, 255, 255, 0.5),
        inset 0 -1px 2px rgba(0, 0, 0, 0.1);
}

.flip-clock__digit::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
}

.flip-clock__label {
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;
}
</style>
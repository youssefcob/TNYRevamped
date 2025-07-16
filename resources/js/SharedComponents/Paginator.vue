<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
    current_page: {
        type: Number,
        required: true
    },
    last_page: {
        type: Number,
        required: true
    }
})

const emit = defineEmits<{
    'page-changed': [page: number]
}>()

const goToInput = ref<number>(props.current_page)

// Watch for current_page changes to update input
watch(() => props.current_page, (newPage) => {
    goToInput.value = newPage
})

const pageNumbers = computed(() => {
    const pages: (number | 'ellipsis')[] = []
    const current = props.current_page
    const last = props.last_page

    if (last <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 1; i <= last; i++) {
            pages.push(i)
        }
    } else {
        // Always show first page
        pages.push(1)
        
        // Determine if we need ellipsis after first page
        const startRange = Math.max(2, current - 2)
        const endRange = Math.min(last - 1, current + 2)
        
        // Add ellipsis after first page if needed
        if (startRange > 2) {
            pages.push('ellipsis')
        }
        
        // Add pages around current page
        for (let i = startRange; i <= endRange; i++) {
            if (i !== 1 && i !== last) {
                pages.push(i)
            }
        }
        
        // Add ellipsis before last page if needed
        if (endRange < last - 1) {
            pages.push('ellipsis')
        }
        
        // Always show last page
        pages.push(last)
    }
    
    return pages
})

const handlePageClick = (page: number) => {
    if (page !== props.current_page && page >= 1 && page <= props.last_page) {
        emit('page-changed', page)
    }
}

const handleNextPage = () => {
    if (props.current_page < props.last_page) {
        emit('page-changed', props.current_page + 1)
    }
}

const handlePrevPage = () => {
    if (props.current_page > 1) {
        emit('page-changed', props.current_page - 1)
    }
}

const handleGoToPage = () => {
    const page = goToInput.value
    if (page >= 1 && page <= props.last_page) {
        emit('page-changed', page)
    }
}

const handleGoToKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        handleGoToPage()
    }
}
</script>

<template>
    <div class="pagination-container">
        <!-- Previous arrow -->
        <a 
            href="#" 
            class="pagination-item nav-arrow"
            :class="{ disabled: current_page === 1 }"
            @click.prevent="handlePrevPage"
        >
            &lt;
        </a>

        <!-- Page numbers -->
        <template v-for="(page, index) in pageNumbers" :key="index">
            <span 
                v-if="page === 'ellipsis'" 
                class="pagination-item ellipsis"
            >
                ...
            </span>
            <a 
                v-else
                href="#" 
                class="pagination-item"
                :class="{ active: page === current_page }"
                @click.prevent="handlePageClick(page)"
            >
                {{ page }}
            </a>
        </template>

        <!-- Next arrow -->
        <a 
            href="#" 
            class="pagination-item nav-arrow"
            :class="{ disabled: current_page === last_page }"
            @click.prevent="handleNextPage"
        >
            &gt;
        </a>
        
        <div class="pagination-divider"></div>
        
        <!-- Go to page -->
        <div class="goto-section">
            <span>Go to</span>
            <input 
                type="number" 
                :min="1" 
                :max="last_page" 
                v-model.number="goToInput"
                @keypress="handleGoToKeyPress"
                @blur="handleGoToPage"
            />
        </div>
    </div>
</template>

<style scoped>
.pagination-container {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
}

.pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid #e0e0e0;
    background: white;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s ease;
    cursor: pointer;
    user-select: none;
}

.pagination-item:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
}

.pagination-item.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}

.pagination-item.active:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

.pagination-item.ellipsis {
    border: none;
    background: transparent;
    cursor: default;
    color: #666;
}

.pagination-item.ellipsis:hover {
    background: transparent;
    border: none;
}

.pagination-item.nav-arrow {
    font-weight: bold;
}

.pagination-item.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}

.pagination-divider {
    width: 1px;
    height: 20px;
    background-color: #e0e0e0;
    margin: 0 8px;
}

.goto-section {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: #666;
}

.goto-section input {
    width: 50px;
    padding: 4px 8px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
}

.goto-section input:focus {
    outline: none;
    border-color: #007bff;
}
</style>
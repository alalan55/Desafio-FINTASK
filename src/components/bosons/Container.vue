<template>
    <div class="container">
        <slot/>
    </div>
</template>
<style lang="css" scoped>
.container{
    max-width: var(--max-width);
    padding: var(--min-padding);
    margin: 0 auto;
}
</style>
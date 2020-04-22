<template>
    <div class="breadcrumb">
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    props: {
        items: Array
    }
}
</script>
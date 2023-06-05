<template>
    <div class="detail">
        <div class="street_name">{{ lang=='ru'?street.street_name_ru:street.street_name_en }}</div>
        <div class="person_name">{{ lang=='ru'?person.person_name_ru:person.person_name_en }}</div>
        <div class="person_life">{{ person.birth_date }} - {{ person.death_date }}</div>
        <div class="person_content">{{ lang=='ru'?person.content_ru:person.content_en }}</div>
    </div>
</template>

<script>
//import { useMapStore } from '../store/store';
//let {lang}= useMapStore()

export default {
    name: "PersonDetail",
    props: {
        person: {
            type: Object,
            required: true,
        },
        street: {
            type: Object,
            required: true,
        },
        lang:{
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>
.detail {
    background: rgba(34, 34, 34, 0.4);
    margin: 40px 0 0 0;
}
</style>

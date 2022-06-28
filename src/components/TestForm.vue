<template>
	<v-container>
		<v-row class="d-flex flex-row" align="center">
			<v-col cols="12" lg="2">
				<div class="font-weight-bold text-lg-h5">Тесты</div>
			</v-col>
		</v-row>
		<v-row class="white" justify="start">		
			<v-col cols="12" lg="6">
				<TestDateModal />
			</v-col>
		</v-row>
		<v-row>
			<v-col class = "px-0" cols="12" lg="12">
				<v-data-table
					class="elevation-1 studentsTable"
					:headers="headers"
					:items = "filteredDesserts"
					item-key="Id"
					:search="search"
					no-data-text = "Нет Записи"
					show-expand
					single-expand
				>
					<template v-slot:top>
						<v-toolbar flat>
							<v-row>
								<v-col cols="12">
									<v-text-field
										v-model="search"
										append-icon="mdi-magnify"
										label="Поиск"
										color="#fbab17"
										single-line
										hide-details
									></v-text-field>
								</v-col>
							</v-row>
						</v-toolbar>
						<v-row class="align-center justify-space-around px-2">
								<v-col class="pt-6 pb-0" v-for="header in filterHeaders" :key="header.text">
									<v-select
										rounded outlined flat multiple clearable dense
										color="#fbab17"
										:label="header.text"
										:items="columnValueList(header.value)" 
										no-data-text="Нет данных"
										item-color='#fbab17'
										@click:clear="Clear"
										v-model="filters[header.value]">
									</v-select>
								</v-col>
							</v-row>
					</template>
				</v-data-table>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import TestDateModal from '@/components/modal/TestDate'

export default {
	name: 'TestForm',
	components: {
		TestDateModal
	},
	data(){
		return{
			headers: [
				{
					text: 'ClientId',
					value: 'ClientId',
				},
				{
					text: 'Ученик',
					value: 'FullName'
                },
                {
					text: 'Филиал',
					value: 'Filial',
					filterable: true,
				},
				{
					text: 'Отделение',
					value: 'Branch',
					filterable: true,
				},
				{
					text: 'Класс',
					value: 'Klass',
					filterable: true,
				},
                {
					text: 'Время',
					value: 'Time',
					filterable: true,
				},
				{
					text: 'Балл',
					value: 'Score',
				},
                {
					text: 'Преподаватель',
					value: 'Teacher',
					filterable: true,
				},
                {
					text: 'Предмет',
					value: 'Subject',
					filterable: true,
				},
                {
					text: 'День',
					value: 'LessonDay',
					filterable: true,
				},
                
				
			],
			filters: {
				Subject: [],
				Time: [],
				FullName: [],
				Branch: [],
                Filial: [],
                Klass: [],
                Teacher: [],
                LessonDay: []
			},
			search: '',
			dateFrom: null,
			dateTo: null
		}
	},
	computed : {
		adminTests(){
			return this.$store.state.adminTests;
		},
		filterHeaders:function(){
			return this.headers.filter(function(header){
				return header.filterable;
			});
		},
		filteredDesserts() {
			return this.adminTests.filter(d => {
				return Object.keys(this.filters).every(f => {
					return this.filters[f].length < 1 || this.filters[f].includes(d[f])
				});
			});
		}
	},
	beforeCreate(){
		var user = JSON.parse(window.localStorage.currentUser);
		if ((Object.keys(user).length === 0 && user.constructor === Object)) {
			this.$router.push('/');
		}
	},
	async mounted(){
		await this.$store.dispatch('GeTestsToAdmin',{dateFrom: new Date().toISOString().substr(0, 10),dateTo: new Date().toISOString().substr(0, 10)});
	},
	methods:{
		columnValueList(val) {
			var s = this.adminTests.map(d => d[val]);
			
            return s;	
		},
		Clear(){
			this.filteredDesserts = this.adminTests;
		}
	}
}
</script>

<style scoped>

</style>
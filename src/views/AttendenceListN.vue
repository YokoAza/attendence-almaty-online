<template>
	<v-container fluid>
		<v-row class="d-flex justify-space-around align-center">
			<Header/>
		</v-row>
		<v-row>
			<v-col class="px-0">
				<AttendenceFormN />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import AttendenceFormN from '@/components/AttendenceFormN'
import Header from '@/components/Header'
export default {
	name: 'AttendenceList',
	components: {
		AttendenceFormN,
		Header
	}
}
</script>
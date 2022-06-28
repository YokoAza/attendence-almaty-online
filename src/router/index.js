
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About'
import Change from '@/views/Change'
import Union from '@/views/Union'
import AttendenceList from '@/views/AttendenceList'
import AttendenceListN from '@/views/AttendenceListN'
import AttendenceListT from '@/views/AttendenceListT'
import Journal from '@/views/Journal'
import Statistic from '@/views/Statistic'
import AllJournal from '@/views/AllJournal'
import PersonalTest from '@/views/PersonalTest'
import AdminBot from '@/views/AdminBot'
import AdminTeachers from '@/views/admin/AdminTeachers'
import AdminStudents from '@/views/admin/AdminStudents'
import AdminTopics from '@/views/admin/AdminTopics'
import AdminSchools from '@/views/admin/AdminSchools'
import AdminRooms from '@/views/admin/AdminRooms'
import AdminSubjects from '@/views/admin/AdminSubjects'
import AdminTests from '@/views/Test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teacher/:teacherId',
    name: 'About',
	component: About,
	props: true
  },
  {
	path: '/change',
    name: 'Change',
	component: Change,
	props: true
  },
  {
	path: '/union',
    name: 'Union',
	component: Union,
	props: true
  },
  {
	path: '/group',
	name: 'AttendenceList',
	component: AttendenceList
  },
  {
	path: '/groupn',
	name: 'AttendenceListN',
	component: AttendenceListN
  },
  {
	path: '/groupt',
	name: 'AttendenceListT',
	component: AttendenceListT
  },
  {
	path: '/journal',
	name: 'Journal',
	component: Journal
  },
  {
	path: '/statistics',
	name: 'Statistic',
	component: Statistic
  },
  {
	path: '/journals',
	name: 'AllJournal',
	component: AllJournal
  },
  {
	path: '/tests',
	name: 'PersonalTest',
	component: PersonalTest
  },
  {
	path: '/telegram',
	name: 'AdminBot',
	component: AdminBot
  },
  {
	path: '/admin/teachers',
	name: 'AdminTeachers',
	component: AdminTeachers
  },
  {
	path: '/admin/students',
	name: 'AdminStudents',
	component: AdminStudents
  },
  {
	path: '/admin/topics',
	name: 'AdminTopics',
	component: AdminTopics
  },
  {
	path: '/admin/schools',
	name: 'AdminSchools',
	component: AdminSchools
  },
  {
	path: '/admin/rooms',
	name: 'AdminRooms',
	component: AdminRooms
  },
  {
	path: '/admin/subjects',
	name: 'AdminSubjects',
	component: AdminSubjects
  },
  {
	path: '/admin/tests',
	name: 'AdminTests',
	component: AdminTests
  }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router

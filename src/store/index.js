import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../service/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	currentUser : {},
	currentTeacher : {},
	subTeacher: {},
	currentGroup : {},
	groupStudents: [],
	timesFrom : ['07:50','08:00','08:30','08:40','08:45','08:50','09:00','09:15','09:30','09:40','09:45','09:55','10:00','10:15','10:35','10:45','10:55','11:00','11:05','11:20','11:25','11:45','11:55','12:00','12:15','12:30','12:45','13:00','13:30','13:45','14:00','14:30','14:45','14:50','15:00','15:05','15:15','15:30','15:35','15:45','16:00','16:15','16:20','16:35','16:45','17:00','17:10','17:20','17:25','17:30','17:45','17:55','18:00','18:15','18:20','18:25','18:30','18:45','19:00','19:10','19:15','19:30','19:35','19:45'],
	timesTo : ['00:00'],
	srezLevel: ['A','B','C'],	
	offices : [],
	equal: true,
	suboffices : [],
	homeworks : [
			{
				text:'0',
				value: 0
			},
			{
				text: '1',
				value: 1
			},
			{
				text: '2',
				value: 2
			},
			{
				text: '3',
				value: 3
			},
			{
				text: '4',
				value: 4
			},
			{
				text: '5',
				value: 5
			},
			{
				text: '6',
				value: 6
			},
			{
				text: '7',
				value: 7
			},
			{
				text: '8',
				value: 8
			},
			{
				text: '9',
				value: 9
			},
			{
				text: '10',
				value: 10
			},
			{
				text:'Не задавали',
				value: 11
			}
		],
	comments:[
		{
			block: 'A',
			title: 'Поведение.',
			comments:[
				{
					value: 'A1',
					text: 'Регулярно достает телефон, игнорирует требование его убрать.'
				},
				{
					value: 'A2',
					text: 'Ругается в адрес других учеников, использует грубую лексику.'
				},
				{
					value: 'A3',
					text: 'Мешает учиться, отвлекая других учеников.'
				},
				{
					value: 'A4',
					text: 'Много отпрашивается в уборную.'
				},
				{
					value: 'A5',
					text: 'Много разговаривает на посторонние темы.'
				},
				{
					value: 'A6',
					text: 'Не хватает родительского контроля.'
				},
				{
					value: 'A7',
					text: 'Проявляет неуважение к тренеру.'
				},
				{
					value: 'A8',
					text: 'Слишком вольное, неусидчивое поведение.'
				},
				{
					value: 'A9',
					text: 'Поведение хорошее, дисциплинированный, сдержанный, спокойный.'
				}
			]
		},
		{
			block: 'B',
			title: 'Учебный процесс.',
			comments: [
				{
					value: 'B1',
					text: 'Для выполнения работы ученику требуется более длительное время, чем другим.'
				},
				{
					value: 'B2',
					text: 'Списывает во время теста/среза.'
				},
				{
					value: 'B3',
					text: 'Приходит без учебных принадлежностей (тетрадь, ручка, материал).'
				},
				{
					value: 'B4',
					text: 'На уроке выполняет домашнее задание по другому предмету.'
				},
				{
					value: 'B5',
					text: 'Плохо читает и не говорит на изучаемом языке.'
				},
				{
					value: 'B6',
					text: 'Молчит и не задает вопросы, если не понимает темы.'
				},
				{
					value: 'B7',
					text: 'Требуется много повторения и практики, чтобы запомнить информацию.'
				},
				{
					value: 'B8',
					text: 'Опоздал более чем на 5 минут по неуважительной причине.'
				},
				{
					value: 'B9',
					text: 'Хорошо понимает темы, но плохо пишет тест.'
				},
				{
					value: 'B10',
					text: 'Выполняет все задания молча, не участвует в активном обсуждении.'
				},
				{
					value: 'B11',
					text: 'В течение урока не работает, ленится.'
				},
				{
					value: 'B12',
					text: 'Выполняет задания быстрее других учеников (возможно, необходимо поменять группу).'
				},
				{
					value: 'B13',
					text: 'Отстает от класса по многим темам.'
				},
				{
					value: 'B14',
					text: 'Активно и прилежно работает на уроке.'
				},
				{
					value: 'B15',
					text: 'Невнимательный, часто спешит и совершает ошибки.'
				}
			]
		},
		{
			block: 'C',
			title: 'Домашнее задание.',
			comments:[
				{
					value: 'C1',
					text: 'Невнимательный, часто спешит и совершает ошибки.'
				},
				{
					value: 'C2',
					text: 'Потерял рабочий материал.'
				},
				{
					value: 'C3',
					text: 'Не записал заданные правила в тетрадь.'
				},
				{
					value: 'C4',
					text: 'Не выучил формулы (слова, правила).'
				},
				{
					value: 'C5',
					text: 'Не выполнил домашнее задание из-за высокой нагрузки в школе.'
				},
				{
					value: 'C6',
					text: 'Регулярно не выполняет д/з.'
				},
				{
					value: 'C7',
					text: 'Списывает д/з (Интернет, photomath и т.д.).'
				},
				{
					value: 'C8',
					text: 'Выполняет домашнее задание наугад.'
				}
			]
		},
		{
			block: 'D',
			title: 'Психологические характеристики ученика.',
			comments:[
				{
					value: 'D1',
					text: 'Трудно сосредоточить внимание на учебном процессе.'
				},
				{
					value: 'D2',
					text: 'Быстро забывает о чём идёт речь или что было задано.'
				},
				{
					value: 'D3',
					text: 'Был неактивным во время урока по состоянию здоровья.'
				},
				{
					value: 'D4',
					text: 'Сильно расстраивается при неудачах и ошибках.'
				},
				{
					value: 'D5',
					text: 'Отсутствует мотивация к учебе.'
				},
				{
					value: 'D6',
					text: 'Стесняется отвечать на вопросы, отмалчивается.'
				},
				{
					value: 'D7',
					text: 'Часто обманывает тренера.'
				},
				{
					value: 'D8',
					text: 'Без настроения и не расположен к учебе.'
				},
				{
					value: 'D9',
					text: 'Не выспался и на уроке был сонным, не мог сосредоточиться.'
				},
				{
					value: 'D10',
					text: 'Был в хорошем расположении духа, активным и общительным.'
				},
				{
					value: 'D11',
					text: 'Слабое абстрактное мышление.'
				}
			]
		},
		{
			block: 'E',
			title: 'ПРОГРЕСС УЧЕНИКА',
			comments:[
				{
					value: 'E1',
					text: 'Виден прогресс в сравнении с предыдущими результатами.'
				},
				{
					value: 'E2',
					text: 'Отличная успеваемость, необходимо поддерживать уровень знаний.'
				},
				{
					value: 'E3',
					text: 'Низкая успеваемость, но учащийся проявляет старания.'
				},
				{
					value: 'E4',
					text: 'Хорошая успеваемость, но часто ленится.'
				},
				{
					value: 'E5',
					text: 'Нет прогресса из-за частых пропусков.'
				}
			]
		}
	],
	commentsN:[
		{
			block: 'A',
			title: 'Поведение.',
			comments: [
				{
					value: 'A1',
					text: 'Отвлекается на уроках.'
				},
				{
					value: 'A2',
					text: 'Внимательно слушает учителя.'
				},
				{
					value: 'A3',
					text: 'Регулярно достает телефон, игнорирует требование его убрать.'
				},
				{
					value: 'A4',
					text: 'Не слышит учителя.'
				},
				{
					value: 'A5',
					text: 'Не настроен на учебу.'
				},
				{
					value: 'A6',
					text: 'Не Выспался. Засыпает на уроке.'
				},
				{
					value: 'A7',
					text: 'Мешает учиться, отвлекая других учеников.'
				},
				{
					value: 'A8',
					text: 'Был уставшим на уроке.'
				},
				{
					value: 'A9',
					text: 'Разговаривает во время урока на посторонние темы.'
				}
			]
		},
		{
			block: 'B',
			title: 'Учебный процесс.',
			comments: [
				{
					value: 'B1',
					text: 'В течении урока не работает, ленится.'
				},
				{
					value: 'B2',
					text: 'Молчит и не задает вопросы, если не понимает темы.'
				},
				{
					value: 'B3',
					text: 'Хорошо понимает темы.'
				},
				{
					value: 'B4',
					text: 'Активно работает на уроке.'
				},
				{
					value: 'B5',
					text: 'Из-за частых пропусков у ученика появились большие пробелы.'
				},
				{
					value: 'B6',
					text: 'Невнимательный, часто спешит и совершает ошибки.'
				},
				{
					value: 'B7',
					text: 'Не выполняет задания на уроке. Не хочет писать в тетради.'
				},
				{
					value: 'B8',
					text: 'Опоздал более чем на 10 минут.'
				},
				{
					value: 'B9',
					text: 'Имеется языковой барьер.'
				},
				{
					value: 'B10',
					text: 'Хорошо развито критическое мышление.'
				},
				{
					value: 'B11',
					text: 'Легко даются логические задачи.'
				},
				{
					value: 'B12',
					text: 'Тяжело даются логические задачи.'
				},
				{
					value: 'B13',
					text: 'Приходит без учебных принадлежностей (тетрадь, ручка, материал).'
				},
				{
					value: 'B14',
					text: 'Медленный, на выполнение задания требуется много времени чем остальным.'
				},
				{
					value: 'B15',
					text: 'Часто спешит при выполнении заданий.'
				},
				{
					value: 'B16',
					text: 'Есть способности, но ленится'
				},
				{
					value: 'B17',
					text: 'Хорошо понимает темы, но не выполняет домашнее задание.'
				},
				{
					value: 'B18',
					text: 'Прилежно работает на уроке.'
				},
				{
					value: 'B19',
					text: 'Высокая концентрация внимания.'
				},
				{
					value: 'B20',
					text: 'Умеет свободно выражать свою мысль.'
				},
				{
					value: 'B21',
					text: 'Сложно дается выразить свою мысль.'
				},
				{
					value: 'B22',
					text: 'Сложное восприятие учебного материала(возможно, необходимо поменять группу).'
				}
			]
		},
		{
			block: 'C',
			title: 'Домашнее задание.',
			comments: [
				{
					value: 'C1',
					text: 'Систематически не выполняет д/з.'
				},
				{
					value: 'C2',
					text: 'Забыл д/з дома.'
				},
				{
					value: 'C3',
					text: 'Регулярно выполняет д/з.'
				},
				{
					value: 'C4',
					text: 'Не учит слова по казахскому.'
				},
				{
					value: 'C5',
					text: 'Не учит слова по английскому.'
				},
				{
					value: 'C6',
					text: 'Не учит правила и формулы.'
				},
				{
					value: 'C7',
					text: 'Часто выполняет домашнее задания не полностью, невнимательно'
				}
			]
		},
		{
			block: 'D',
			title: 'Общее развитие.',
			comments: [
				{
					value: 'D1',
					text: 'Хорошая память.'
				},
				{
					value: 'D2',
					text: 'Хорошо развита речь.'
				},
				{
					value: 'D3',
					text: 'Не богатый словарный запас.'
				},
				{
					value: 'D4',
					text: 'Не выговаривает отдельные звуки.'
				},
				{
					value: 'D5',
					text: 'Плохая память.'
				},
				{
					value: 'D6',
					text: 'Нет концентрации внимания.'
				},
				{
					value: 'D7',
					text: 'Плохая моторика руки.'
				},
				{
					value: 'D8',
					text: 'Неправильно держит ручку.'
				},
				{
					value: 'D9',
					text: 'Не богатый словарный запас по английскому .'
				},
				{
					value: 'D10',
					text: 'Виден прогресс в сравнении с предыдущими результатами.'
				},
				{
					value: 'D11',
					text: 'Отличная успеваемость, необходимо поддерживать уровень знаний.'
				},
				{
					value: 'D12',
					text: 'Низкая успеваемость, но учащийся проявляет старания.'
				},
				{
					value: 'D13',
					text: 'Хорошая успеваемость, но часто ленится.'
				},
				{
					value: 'D14',
					text: 'Нет прогресса из-за частых пропусков.'
				}
			]
		},
		{
			block: 'E',
			title: 'Рекомендации.',
			comments: [
				{
					value: 'E1',
					text: 'Уделять больше внимания (времени) чтению.'
				},
				{
					value: 'E2',
					text: 'Уделять больше внимания (времени) письму.'
				},
				{
					value: 'E3',
					text: 'Учить правила (формулы, слова, правила).'
				},
				{
					value: 'E4',
					text: 'Уделять больше времени на упражнения по математике.'
				},
				{
					value: 'E5',
					text: 'Уделять больше внимание для повтора букв.'
				},
				{
					value: 'E6',
					text: 'Уделять внимание для выполнение домашнего задания.'
				},
				{
					value: 'E7',
					text: 'Контролировать, выполнение домашнее задание самостоятельно.'
				}
			]
		}
	],
	tests : [
			{
				text:'0',
				value: 0
			},
			{
				text: '1',
				value: 1
			},
			{
				text: '2',
				value: 2
			},
			{
				text: '3',
				value: 3
			},
			{
				text: '4',
				value: 4
			},
			{
				text: '5',
				value: 5
			},
			{
				text: '6',
				value: 6
			},
			{
				text: '7',
				value: 7
			},
			{
				text: '8',
				value: 8
			},
			{
				text: '9',
				value: 9
			},
			{
				text: '10',
				value: 10
			},
			{
				text:'Не писал',
				value: 11
			},
			{
				text: 'Не писала группа',
				value: 12
			}
	],
	currentRegister: [],
	adminRegisters: [],
	adminTests: [],
	personalTest:{},
	testSubjects: [],
	testStudents:[],
	levels: [],
	topics: [],
	newStudents : [{value:null,icon:''}],
	homeWorkLevels: ['A','B','C'],
	personalHeaders: [],
	personalItems: [],
	adminTable : {
		Name: 'Преповадатели',
		Table: 'Teachers',
		Router: 'teachers'
	},
	adminItems: []
},
  mutations: {
		SET_ADMIN_TABLE(state,table){
			state.adminTable = table;
			window.localStorage.adminTable = JSON.stringify(table);
		},
		SET_ADMIN_TABLEITEMS(state,items){
			state.adminItems = items;
		},
		SET_CURRENT_USER(state,user){
			state.currentUser = user;
			window.localStorage.currentUser = JSON.stringify(user);
		},
		UPDATE_CURRENT_USER(state,fio){
			var user = JSON.parse(window.localStorage.currentUser);
			user.firstname = fio[1]?fio[1]:user.firstname;
			user.lastname = fio[0]?fio[0]:user.lastname;
			state.currentUser = user;
			window.localStorage.currentUser = JSON.stringify(user);
		},
		SET_CURRENT_GROUP(state,group){
			state.currentGroup = group;
			window.localStorage.currentGroup = JSON.stringify(group);
		},
		SET_EXTRA_CURRENT_GROUP(state,extra){
			state.currentGroup.roomId = extra.room.Id;
			state.currentGroup.level = extra.level;
			window.localStorage.currentGroup = JSON.stringify(state.currentGroup);
		},
		SET_GROUP_STUDENTS(state,students){
			state.groupStudents = students;
			window.localStorage.groupStudents = JSON.stringify(students);
		},
		SET_CURRENT_TEACHER(state,teacher){
			state.offices = teacher.Offices;
			state.currentTeacher = teacher;
			window.localStorage.currentTeacher = JSON.stringify(teacher);
		},
		SET_SUBTEACHER(state,teacher){
			state.suboffices = teacher.Offices;
			state.subTeacher = teacher;
			window.localStorage.subTeacher = JSON.stringify(teacher);
		},
		SET_CURRENT_REGISTER(state,register){
			state.currentRegister = register;
		},
		SET_ADMIN_REGISTER(state,register){
			state.adminRegisters = register;
		},
		SET_ADMIN_TEST(state,test){
			state.adminTests = test;
		},
		SET_TIMES_TO(state, timeFrom){
			state.timesTo = [];
			var time = timeFrom.split(':');
			var seconds = parseInt(time[0])*60+parseInt(time[1]);
			seconds+=45;
			var mm = parseInt(seconds/60);
			var ss = seconds%60==0 ? '00' : seconds%60;
			if(ss > 0 && ss < 10){
				ss = '0'+ss;
			}
			var halfLesson = mm<10? '0'+mm+':'+ss:mm+':'+ss;
			seconds+=15;
			mm = parseInt(seconds/60);
			ss = seconds%60==0 ? '00' : seconds%60;
			if(ss > 0 && ss < 10){
				ss = '0'+ss;
			}
			var hourLesson = mm<10? '0'+mm+':'+ss:mm+':'+ss;			
			seconds+=30;
			mm = parseInt(seconds/60);
			ss = seconds%60==0 ? '00' : seconds%60;
			if(ss > 0 && ss < 10){
				ss = '0'+ss;
			}
			var fullLesson = mm<10? '0'+mm+':'+ss:mm+':'+ss;
			state.timesTo.push(halfLesson);
			state.timesTo.push(hourLesson);
			state.timesTo.push(fullLesson);	

		},
		SET_GROUP_DETAILS(state,params){
			state.currentGroup.isStudentAdd = params.isStudentAdd;
			state.currentGroup.isOperator = params.isOperator;
		},
		SET_LEVELS(state,levels){
			state.levels = levels
		},
		SET_PERSONAL_TEST(state, personalTest){
			state.personalTest = personalTest;
		},
		SET_TEST_SUBJECTS(state,testSubjects){
			state.testSubjects = testSubjects;
		},
		SET_TEST_STUDENTS(state,students){
			state.testStudents = state.testStudents.concat(students); 
		},
		SET_TOPICS(state,topics){
			state.topics = topics;
		},
		SET_PERSONAL_TEST_DETAILS(state,details){
			state.personalHeaders = details.headers;
			state.personalItems = details.items;
		},
		ADD_STUDENT_GROUP(state, student){
			state.groupStudents.push(student);
		},
		RESET_GROUP(state){
			state.currentGroup = {};
			state.subTeacher = {};
			window.localStorage.officeName = "";
			window.localStorage.timeFrom = "";
			window.localStorage.timeTo = "";
			window.localStorage.groupStudents = JSON.stringify([]);
			window.localStorage.currentGroup = JSON.stringify({});
			window.localStorage.subTeacher = JSON.stringify({});
		},
		RESET_CURRENT_USER(state){
			state.currentUser = {};
			window.localStorage.currentUser = JSON.stringify({});
		},
		RESET_LOGOUT(state){
			state.currentUser = {};
			state.currentTeacher = {};
			state.subTeacher = {};
			window.localStorage.currentUser = JSON.stringify({});
			window.localStorage.currentTeacher = JSON.stringify({});
			window.localStorage.subTeacher = JSON.stringify({});
			state.currentGroup = {};
			window.localStorage.officeName = "";
			window.localStorage.timeFrom = "";
			window.localStorage.timeTo = "";
			window.localStorage.change = false;
			window.localStorage.union = false;
			window.localStorage.groupStudents = JSON.stringify([]);
			window.localStorage.currentGroup = JSON.stringify({});
			window.localStorage.adminTable = JSON.stringify({});
		},
		RESET_SUBTEACHER(state){
			state.subTeacher = {};
			state.suboffices = [];
			window.localStorage.subTeacher = JSON.stringify({});
		},
		RESET_EQUAL(state,equal){
			state.equal = equal;
		},
		RESET(){
		},
		REMOVE_NEW_STUDENT(state,index){
			state.newStudents.splice(index, 1);
		},
		RESET_NEW_STUDENTS(state){
			state.newStudents =  [{value:null,icon:''}];
		}
  },
  actions: {
	setAdminTable({commit},table){
		commit('SET_ADMIN_TABLE',table);
	},
	changeTimesTo({commit},timeFrom){
		commit('SET_TIMES_TO',timeFrom);
	},
	LogOut({commit}){
		commit('RESET_LOGOUT');
	},
	Reset_user({commit}){
		commit('RESET_CURRENT_USER');
	},
	async LogIn({commit},login){
		try{
			var response  = await Api().post('/login', login);
			
			if(response.data.status == 200)
				commit('SET_CURRENT_USER',response.data.data);
				
			return response.data;
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetTeacherById({commit},teacherId){
		try{
			var response = await Api().post('/teacher', {teacherId});
			
			if(response.data.status == 200)
				commit('SET_CURRENT_TEACHER',response.data.data[0]);
			else if(response.data.status == 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetTeacherRate({commit},teacherId){
		try{
			var response = await Api().get(`/teachers/${teacherId}`);
			
			if(response.data.status == 200)
				return response.data.data[0];
			else if(response.data.status == 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	SetGroup({commit}, group){
		try{
			commit('SET_CURRENT_GROUP', group);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetGroup({commit}, params){
		try{
			var teacherId = params.params.change ? params.subTeacher.Id:params.params.teacherId;
			teacherId = params.params.union ? 8007:params.params.teacherId;
			var response = await Api().post('/groups', {params:params.params,teacherId:teacherId});
			if(response.data.status === 200){
				if(Object.keys(response.data.data).length === 0 && response.data.data.constructor === Object)
					return {status: 404};
				else {
					var group = response.data.data;
					group.date = params.params.date;
					group.change = params.params.change;
					group.union = params.params.union;
					group.officeId = params.params.office.Id;
					group.teacherId = params.params.teacherId;
					group.subteacherId = params.params.change ? params.subTeacher.Id:null;
					commit('SET_CURRENT_GROUP', group);
					return {status: 200,groupId: group.Id};	
				}
			} else if(response.data.status === 401 || response.data.status == 400){
				commit('RESET_CURRENT_USER');
				return {status: response.data.status};
			} 
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetOfficeGroups({commit}, params){
		try{
			var response = await Api().post('/officegoups', {office:params.office,teacherId: params.teacherId});
			
			return response;
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	SetExtraFieldsGroup({commit},params){
		try{
			commit('SET_EXTRA_CURRENT_GROUP', params.params);
			return {status: 200};
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetStudents({commit}, params){
		try{
			var response = await Api().post('/groupstudents', {group: params.group,teacherId: params.teacherId});
			
			if(response.data.status == 200)
				commit('SET_GROUP_STUDENTS',response.data.data);
			else if(response.data.status === 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');
			
			return {status: response.data.status};
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetCode({commit}, Id){
		try{
			var response = await Api().post('/sendmail', Id);
			if(response.data.status == 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');
				
			return response.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SetAttendence({commit}, params){
		try{
			var response = await Api().post('/registeramount',{groupId:params.group.Id,lessonDate: params.group.date,officeId:params.group.officeId});
			if(response.data.status == 200){		
				var today = new Date();
				var day = today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
				var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
				var pass_response = await Api().post('/setattendence',{group: params.group, submitDay: day, submitTime: time, isSubmitted: false, students: params.students,Aibucks: params.Aibucks,topic: params.topic,homework: params.homework,foskres: params.foskres, kolhar: params.kolhar,teacherName: params.teacherName});

				if(pass_response.data.status == 200){
					commit('RESET_GROUP');
					return {status: 200};
				} else if(pass_response.data.status == 100){
					commit('RESET_GROUP');
					return {status: 100};
				}
				else {
					return {status: 500};
				}
			} else if(response.data.status == 401 || response.data.status == 400){
				return {status: response.data.status, text: 'Заполните уровень группы и номер кабинета'};
			}else if(response.data.status == 410){
				commit('RESET_GROUP');
				return {status: response.data.status, text: 'Аттенданс уже заполнен'};
			}
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SetAttendenceT({commit}, params){
		try{
			var response = await Api().post('/registeramount',{groupId:params.group.Id,lessonDate: params.group.date,officeId:params.group.officeId});
			if(response.data.status == 200){		
				var today = new Date();
				var day = today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
				var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
				var pass_response = await Api().post('/setattendencet',{group: params.group, submitDay: day, submitTime: time, isSubmitted: false, students: params.students,Aibucks: params.Aibucks,block: params.block,topic: params.topic,homework: params.homework,foskres: params.foskres, kolhar: params.kolhar,teacherName: params.teacherName});

				if(pass_response.data.status == 200){
					commit('RESET_GROUP');
					return {status: 200};
				} else {
					return {status: 500};
				}
			} else if(response.data.status == 401 || response.data.status == 400){
				return {status: response.data.status, text: 'Заполните уровень группы и номер кабинета'};
			}else if(response.data.status == 410){
				commit('RESET_GROUP');
				return {status: response.data.status, text: 'Аттенданс уже заполнен'};
			}
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SetAttendenceN({commit}, params){
		try{
			var response = await Api().post('/registeramount',{groupId:params.group.Id,lessonDate: params.group.date,officeId:params.group.officeId});
			if(response.data.status == 200){		
				var today = new Date();
				var day = today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
				var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
				var pass_response = await Api().post('/setattendencen',{group: params.group, submitDay: day, submitTime: time, isSubmitted: false, students: params.students,Aibucks: params.Aibucks,theme: params.theme,homework: params.homework,teacherName: params.teacherName});

				if(pass_response.data.status == 200){
					commit('RESET_GROUP');
					return {status: 200};
				} else {
					return {status: 500};
				}
			} else if(response.data.status == 401 || response.data.status == 400){
				return {status: response.data.status, text: 'Заполните уровень группы и номер кабинета'};
			}else if(response.data.status == 410){
				commit('RESET_GROUP');
				return {status: response.data.status, text: 'Аттенданс уже заполнен'};
			}
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SearchTeacher({commit}, name){
		try{
			var response = await Api().get('/searchteacher', {params: {value: name}});


			if(response.data.status == 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');

			return response.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SearchStudent({commit}, params){
		try{
			var response = await Api().get('/searchstudent',{params});

			if(response.data.status == 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');
				
			return response.data.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	AddStudentGroup({commit},params){
		try{
			var arr = params.students.map(async function(student){
				var response = await Api().post('/addtogroup',{group: params.group, clientId: student.value.ClientId});
				if(response.data.status == 200){
					commit('ADD_STUDENT_GROUP',{attendence: true, clientid: student.value.ClientId, name: student.value.FullName, status: false, aibaks: 0});
					return true;
				} else {
					commit('ADD_STUDENT_GROUP',{attendence: true, clientid: student.value.ClientId, name: student.value.FullName, status: true, aibaks: 0});
					return false;					
				}	
			});
			var isOperator = arr.every(elem => elem == true);
			commit('SET_GROUP_DETAILS',{isStudentAdd: true, isOperator: !isOperator});
			return {status: 200};	
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetTeacherByTeacherFullName({commit},fullname){
		try{
			var response = await Api().get('/subteacher',{params: {FullName: fullname}});
			if(response.data.status == 200)
				return {status: response.data.status, data: response.data.data};
			else {
				return {status: response.data.status};
			}
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetRegisterByTeacherId({commit},params){
		try{
			var response = await Api().get('/getregister',{params});
			if(response.data.status == 200)
				commit('SET_CURRENT_REGISTER',response.data.data);
			else if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');
			else 
				commit('RESET_CURRENT_USER');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetRegisterToAdmin({commit},params){
		try{
			var response = await Api().get('/getdayregisters',{params});
			if(response.data.status == 200)
				commit('SET_ADMIN_REGISTER',response.data.data);
			else if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');
			else 
				commit('RESET_CURRENT_USER');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetRegisterDetails({commit},params){
		try{
			var response = await Api().get('/getregisterdetails',{params});
			if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');

			return response.data;
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetUniqueRegister({commit}){
		try{
			var response = await Api().get('/getuniqueregister');
			if(response.data.status == 200)
				commit('SET_CURRENT_REGISTER',response.data.data);
			else if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');
			else 
				commit('RESET_CURRENT_USER');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetRegisterDetailsAVG({commit},params){
		try{
			var response = await Api().get('/getsubregistersavg',{params});
			if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');

			return response.data;
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GeTestsToAdmin({commit},params){
		try{
			var response = await Api().get('/gettests',{params});
			if(response.data.status == 200)
				commit('SET_ADMIN_TEST',response.data.data);
			else if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');
			else 
				commit('RESET_CURRENT_USER');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	ResetSubTeacher({commit}){
		commit('RESET_SUBTEACHER');
	},
	ResetEqual({commit},equal){
		commit('RESET_EQUAL',equal);
	},
	ResetGroup({commit}){
		commit('RESET_GROUP');
		
	},
	async GetSubTeacher({commit},teacherId){
		try{
			var response = await Api().post('/teacher', {teacherId});
			if(response.data.status == 200)
				commit('SET_SUBTEACHER',response.data.data[0]);
			else if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');

		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async EditPersonal({commit},params){
		try{
			var response = await Api().post('editpersonal',params);
		
			if(response.data.status == 200)
				commit('UPDATE_CURRENT_USER',response.data.data);
	
			return response.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetOfficeRooms({commit},params){
		try{
			var response = await Api().get('/getofficerooms', {params});
			if(response.data.status == 200)
				return response.data.data;
			else if(response.data.status == 400 || response.data.status == 401)
				commit('RESET_CURRENT_USER');

		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetLastLessonRoom({commit},params){
		try{
			var response = await Api().get('/lastlessonroom', {params});

				return {status: response.data.status,data: response.data.data};
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetTestCategories({commit}){
		try{
			var response = await Api().get('/testcategories');
			return response.data.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}		
	},
	async GetTests({commit},params){
		try{
			var response = await Api().get('/tests', {params});

				return response.data.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetPersonalTest({commit},params){
		try{
			var response = await Api().get('/gettestsubjects',{params:{testId: params.params.test.Id}});

			if(response.data.status == 200)
				commit('SET_TEST_SUBJECTS',response.data.data);
				
			commit('SET_PERSONAL_TEST',params.params);
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SearchStudentTest({commit}, params){
		try{
			var response = await Api().get('/searchstudenttest',{params});

			if(response.data.status == 401 || response.data.status == 400)
				commit('RESET_CURRENT_USER');
				
			return response.data;
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	AddStudentTest({commit},params){
		try{
			commit('SET_TEST_STUDENTS',params.students);
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async SetPersonalTests({commit},params){
		try{
			var response = await Api().post('/setpersonaltests',{students:params.students,personalTest: params.personalTest,teacherId:params.teacherId});
			return response;
		}catch{
			commit('RESET_CURRENT_USER');

		}
	},
	async SetLevels({commit}){
		try{
			var response = await Api().get('/levels');
			commit('SET_LEVELS',response.data.data);
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	async GetTopics({commit},params){
		try{
			var response = await Api().get('/gettopics',{params});
			commit('SET_TOPICS',response.data.data);
		}catch{
			commit('RESET_CURRENT_USER');
		}
	},
	RemoveNewStudent({commit},index){
		commit('REMOVE_NEW_STUDENT',index);
	},
	ResetNewStudents({commit}){
		commit('RESET_NEW_STUDENTS');
	},
	async GetPersonalTestTeacherId({commit},params){
		try{
			var response = await Api().get('/getpersonaltestteacher',{params});
			commit('SET_PERSONAL_TEST_DETAILS',response.data.data);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async TelegramOnline({commit},params){
		try{
			await Api().post('/telegram/online',{params});
		}catch(err){
			commit('RESET_CURRENT_USER');
		}	
	},
	async TelegramIntensiv({commit},params){
		try{
			await Api().post('/telegram/intensiv',{params});
		}catch(err){
			commit('RESET_CURRENT_USER');
		}	
	},
	async TelegramAttendance({commit},params){
		try{
			await Api().post('/telegram/attendance',{params});
		}catch(err){
			commit('RESET_CURRENT_USER');
		}	
	},
	async TelegramAttendancePersonal({commit},params){
		try{
			await Api().post('/telegram/personal/attendance',{params});
		}catch(err){
			commit('RESET_CURRENT_USER');
		}	
	},
	async TelegramPersonalTest({commit},params){
		try{
			await Api().post('/telegram/personal/tests',{params});
		}catch(err){
			commit('RESET_CURRENT_USER');
		}	
	},
	async TelegramNotification({commit},params){
		try{
			await Api().post('/telegram/notification',{params});
		}catch(err){
			commit('RESET_CURRENT_USER');
		}	
	},
	async TelegramUpload({commit},formData){
		try{
			await Api().post('/telegram/upload',formData);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetOffices({commit}){
		try{
			var response = await Api().get('/schools');
			return response.data.data;
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async UpdateRegiterFine({commit},register){
		try{
			Api().put(`/registers/${register.Id}`,register);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetTableColumns({commit},params){
		try{
			var response = await Api().get(`/${params}`);
			
			commit('SET_ADMIN_TABLEITEMS',response.data.data);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async GetExtraTableColumns({commit},params){
		try{
			var response = await Api().get(`/${params}`);
			
			return response.data.data;
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async AdminEdit({commit},params){
		try{
			Api().put(`/${params.router}/${params.item.Id}`,params.item);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async AdminDelete({commit},params){
		try{
			Api().delete(`/${params.router}/${params.Id}`);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async AdminCreate({commit},params){
		try{
			await Api().post(`/${params.router}`,params.item);
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	},
	async AddSutdentsHH({commit}){

			try{
				//await Api().post('/scheduler');
				
				await Api().delete('/deleteoldstudents');
				await Api().post('/addstudentexample');
			}catch(err){
				commit('RESET_CURRENT_USER');
			}
		
	},
	async AddTeachersHH({commit}){
		try{
			await Api().post('/addteacherexample');
		}catch(err){
			commit('RESET_CURRENT_USER');
		}
	}
  },
  modules: {
  }
})

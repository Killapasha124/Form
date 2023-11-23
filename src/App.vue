<template>
	<div id="app">
	<body>
	<div class="container">
		<h1 class="text">Форма создания Клиента</h1>
		<form  @submit.prevent="submitForm">
			<!-- Основные данные -->
				<div>
					<label for="surname">Фамилия<span class="required-indicator" :class="{ 'valid-indicator': !$v.client.surname.$error && client.surname }"></span></label>
					<input
						class="input-data"
						type="text"
						id="surname"
						v-model="client.surname"
						placeholder="Введите вашу фамилию"
						:class="{ 'invalid': $v.client.surname.$error, 'valid': !$v.client.surname.$error && client.surname }"
						@input="validateInput('surname')"
						@blur="$v.client.surname.$touch()"
					>
					<span v-if="$v.client.surname.$error" class="error-message">Это обязательное поле</span>
					<span v-if="!$v.client.surname.minLength" class="error-message">Минимальная длина 3 символа</span>
				</div>
				
			<div>
				<label for="name">Имя<span class="required-indicator" :class="{ 'valid-indicator': !$v.client.name.$error && client.name }"></span></label>
				<input class="input-data" 
				type="text" 
				id="name" 
				v-model="client.name"
				placeholder="Введите ваше имя"
		          :class="{ 'invalid': $v.client.name.$error, 'valid': !$v.client.name.$error && client.name }"
		          @input="validateInput('name')"
				  @blur="$v.client.name.$touch()"
				  >
				<span v-if="$v.client.name.$error" class="error-message">Это обязательное поле</span>
		        <span v-if="!$v.client.name.minLength" class="error-message">Минимальная длина 3 символа</span>
				
			</div>
			<div>
				<label for="patronymic">Отчество</label>
				<input type="text" id="patronymic" v-model="client.patronymic">
			</div>
			<div>
				<label for="birthdate">Дата рождения
					<span class="required-indicator" 
					:class="{ 'valid-indicator': !$v.client.birthdate.$error && client.birthdate }">
					</span>
			</label>
				<input 
				class="input-data"
				type="date" 
				id="birthdate" 
				v-model="client.birthdate" 
				:class="{ 'invalid': $v.client.birthdate.$error, 'valid': !$v.client.birthdate.$error && client.birthdate }"
				>
				<span v-if="$v.client.birthdate.$error" class="error-message">Укажите дату</span>
			</div>
  				<div>
					<label for="phone">Номер телефона<span class="required-indicator" :class="{ 'valid-indicator': !$v.client.phone.$error  && client.phone}"></span></label>
					<input 
					class="input-data"
					type="tel" 
					id="phone" 
					v-model="formattedPhone" 
					placeholder="+7(900)111-11-11"
					@input="validatePhone"
					@blur="$v.client.surname.$touch()"
					:maxlength="12"
					:class="{ 'invalid': $v.client.phone.$error, 'valid': !$v.client.phone.$error && client.phone }"
					
					>
					<span v-if="$v.client.phone.$error" class="error-message">Это обязательное поле</span>
				</div>
				
			<div class="gender">
				<label class="gender__title">Пол</label>
				<div class="gender__options">
					<div class="sex__option">
					<input type="radio" id="male" value="male" v-model="client.gender">
					<label for="male">Мужской</label>
					
					</div>
					<div class="sex__option">
					<input type="radio" id="female" value="female" v-model="client.gender">
					<label for="female">Женский</label>
					</div>
				</div>
				
				</div>
			<div class="client-group">
	  <label class="client-group__title">Группа клиентов</label>
	  <div class="multi-selector">
	    <div class="selected-items">
	      <div v-for="(item, index) in client.clientGroup" :key="index" class="selected-item">
	        {{ item }}
	        <button @click="removeItem(index)">X</button>
	      </div>
	    </div>
	    <div class="selection">
	      <select v-model="selectedValue" @change="addItem" class="client-group__select">
	        <option disabled value="">Выберите элемент</option>
	        <option value="VIP">VIP</option>
	        <option value="Проблемные">Проблемные</option>
	        <option value="ОМС">ОМС</option>
	      </select>
	    </div>
	  </div>
	</div>
			<div>
				<label for="doctor">Лечащий врач</label>
				<select id="doctor" v-model="client.doctor">
					<option value="Иванов">Иванов</option>
					<option value="Захаров">Захаров</option>
					<option value="Чернышева">Чернышева</option>
				</select>
			</div>
			<div>
				<input type="checkbox" id="noSMS" v-model="client.noSMS">
				<label for="noSMS">Не отправлять СМС</label>
			</div>

			<!-- Адрес -->
			<h2>Адрес</h2>
			<div>
				<label for="index">Индекс</label>
				<input type="text" id="index" v-model="client.address.index">
			</div>
			<div>
				<label for="country">Страна</label>
				<input type="text" id="country" v-model="client.address.country">
			</div>
			<div>
				<label for="region">Область</label>
				<input type="text" id="region" v-model="client.address.region">
			</div>
			<div>
				<label for="city">Город<span class="required-indicator" :class="{ 'valid-indicator': !$v.client.address.city.$error && client.address.city }"></span></label>
				<input 
				class="input-data"
				type="text" 
				id="city" 
				placeholder="Укажите ваш город проживания"
				v-model="client.address.city"
				@input="validateInput('city')"
				@blur="$v.client.address.city.$touch()"
				:class="{ 'invalid': $v.client.address.city.$error, 'valid': !$v.client.address.city.$error && client.address.city}"
				>
			<span v-if="$v.client.phone.$error" class="error-message">Это обязательное поле</span>
	</div>
			<div>
				<label for="street">Улица</label>
				<input type="text" id="street" v-model="client.address.street">
			</div>
			<div>
				<label for="house">Дом</label>
				<input type="text" id="house" v-model="client.address.house">
			</div>

			<!-- Паспорт -->
			<div>
	    <h2>Паспорт</h2>
	    <div>
				<label for="documentType">Тип документа<span class="required-indicator" :class="{ 'valid-indicator': !$v.client.passport.documentType.$error && client.passport.documentType}"></span></label>
				<select 
				class="input-data"
				id="documentType" 
				v-model="client.passport.documentType"
				:class="{ 'invalid': $v.client.passport.documentType.$error, 'valid': !$v.client.passport.documentType.$error && client.passport.documentType }"
				>
					<option value="Паспорт">Паспорт</option>
					<option value="Свидетельство о рождении">Свидетельство о рождении</option>
					<option value="Вод. удостоверение">Вод. удостоверение</option>
				</select>
				<span v-if="$v.client.passport.documentType.$error" class="error-message">Укажите тип пасспорта</span>
				</div>
				<div>
				<label for="passportSeries">Серия</label>
				<input type="text" 
						class="input-data"
						id="passportSeries" 
						v-model="client.passport.series" 
						maxlength="4"
						placeholder="1111"
						pattern="[0-9]{4}" 
						:class="{ 'invalid': !$v.client.passport.series.minLength, 'valid': $v.client.passport.series.minLength && client.passport.series  }"
						@input="validatePassportSeries"
				>
				<span v-if="!$v.client.passport.series.minLength" class="error-message">Серия паспорта должна содержать 4 цифры</span>
				
				</div>
						<div>
						<label for="passportNumber">Номер</label>
						<input type="text" 
						class="input-data"
						id="passportNumber" 
						v-model="client.passport.number" 
							maxlength="6"
							placeholder="111111"
							:class="{ 'invalid': !$v.client.passport.number.minLength, 'valid': $v.client.passport.number.minLength && client.passport.number }"
							@input="validatePassportNumber"
						
							>
						<span v-if="!$v.client.passport.number.minLength" class="error-message">Серия паспорта должна содержать 6 цифры</span>
						
					</div>
					<div>
					<label for="issuedBy">Кем выдан</label>
					<input type="text" id="issuedBy" v-model="client.passport.issuedBy">
					</div>
					<div>
					<label for="issueDate">Дата выдачи<span class="required-indicator" 
						:class="{ 'valid-indicator': !$v.client.passport.issueDate.$error && client.passport.issueDate }">
						</span></label>
					<input 
					class="input-data"
					type="date" 
					id="issueDate" 
					v-model="client.passport.issueDate"
					:class="{ 'invalid': $v.client.passport.issueDate.$error, 'valid': !$v.client.passport.issueDate.$error && client.passport.issueDate }"
					>
					<span v-if="$v.client.passport.documentType.$error" class="error-message">Укажите дату выдачи пасспорта</span>
					</div>
	  </div>

			<!-- Кнопка отправки -->
			<button @click="submitForm">Создать Клиента</button>
			<div v-if="successModal" class="modal success">
	        <span class="modal-close" @click="successModal = false">✖</span>
	        <span class="modal-icon">✔</span>
	        <p>Клиент успешно создан!</p>
	    </div>
	    <div v-if="errorModal" class="modal error">
	        <span class="modal-close" @click="errorModal = false">✖</span>
	        <span class="modal-icon">X</span>
	        <p>Проверьте правильность заполнения полей.</p>
	    </div>

		</form>
	</div>
	</body>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, } from 'vuelidate/lib/validators'
export default {
	mixins: [validationMixin],
	validations: {
		client: {
			surname: { required, minLength: minLength(3) },
			name: { required, minLength: minLength(3) },
			birthdate: { required },
			phone: { required, minLength: minLength(12) },
			address:{ city: { required, minLength: minLength(3)} },
			passport: {
				documentType:{ required },
				series: {required, minLength: minLength(4)},
				number: { required, minLength: minLength(6) },
				issueDate: { required }
				}
		
		},
		
	},
	data() {
		return {
			
			client: {
				surname: '',
				name: '',
				patronymic: '',
				birthdate: '',
				phone: '',
				gender: '',
				clientGroup: [],
				doctor: '',
				noSMS: false,
				address: {
					index: '',
					country: '',
					region: '',
					city: '',
					street: '',
					house: ''
				},
				
				passport: {
					documentType: '',
					series: '',
					number: '',
					issuedBy: '',
					issueDate: ''
				},
				
				
			
			},
			selectedValue: '',
			successModal: false,
			errorModal: false,
			
		};
	},
	  computed: {
		formattedPhone: {
			get() {
				return this.client.phone;
			},
			set(value) {
				this.client.phone = this.formatPhoneNumber(value);
			}
		}
	},
	methods: {
		
		
		  addItem() {
			if (this.selectedValue && !this.client.clientGroup.includes(this.selectedValue)) {
				this.client.clientGroup.push(this.selectedValue);
				this.selectedValue = ''; 
			}
		},
		validateInput(field) {
			if (field === 'surname') {
				this.client.surname = this.client.surname.replace(/[^a-zA-Zа-яА-Я]/g, '');
			} else if (field === 'city') {
				this.client.address.city = this.client.address.city.replace(/[^a-zA-Zа-яА-Я]/g, '');
			} else if (field === 'name') {
				this.client.name = this.client.name.replace(/[^a-zA-Zа-яА-Я]/g, '');
			}
		},
	
			

		formatPhoneNumber(phoneNumber) {
			return phoneNumber.replace(/\D/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7($2)$3-$4-$5');
		},
		validatePhone() {
			const isValid = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(this.client.phone);
			const maxLengthExceeded = this.client.phone.replace(/\D/g, '').length > 11;
			this.$v.client.phone.$touch();
			if (!isValid || maxLengthExceeded) {
				return false;
			}
		},
	  validatePassportSeries() {
			this.client.passport.series = this.client.passport.series.replace(/\D/g, '').slice(0, 4);
		},
		validatePassportNumber() {
			this.client.passport.number = this.client.passport.number.replace(/\D/g, '').slice(0, 6);
		},
	
	

		removeItem(index) {
			this.client.clientGroup.splice(index, 1);
		},
		submitForm() {
			this.$v.$touch(); 

			if (!this.$v.$invalid) { 
				
				this.successModal = true; 
				
			} else {
				this.errorModal = true; 
			}
		}
	},
		
	}

</script>

<style lang="sass">

 @import './assets/style'


</style>

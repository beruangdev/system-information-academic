import{f as r}from"./fetch-b8ff0b47.js";window.editStudentModal=y;function y(a){return{element:a,errors:null,body:{...c},editStudentModalInit(){},async editStudentModalChangeHandler(e){if(e){const t=await this.fetchStudentById();this.facultyChangeHandler(t.faculty_id),this.body=t}else this.body={...c}},editSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},updateStudentHandler(){this.errors=null,r.put(this.urlUpdate,{body:this.body}).then(e=>{this.editSuccess(e)}).catch(e=>{const t=e.message;let s=[];Object.keys(e.errors).forEach(l=>{s.push(e.errors[l])}),this.errors={message:t,errors:s}})},async fetchStudentById(){const e=await r(this.urlEdit);return{...e.user,...e,faculty_id:e.major.faculty_id,major_id:e.major.id}},_majors:[],facultyChangeHandler(e){return this._majors=[],this._majors=this.majors.filter(t=>t.faculty_id==e),this._majors}}}const i=document.querySelector("#table-filter-min-admission_year"),o=document.querySelector("#table-filter-max-admission_year");document.addEventListener("DOMContentLoaded",()=>{i&&o&&["input","change"].forEach(a=>{i.addEventListener(a,function(){this.value>o.value&&(this.value=o.value)}),o.addEventListener(a,function(){this.value<i.value&&(this.value=i.value)})})});const d=document.querySelector("#table-filter-min-current_credits"),u=document.querySelector("#table-filter-max-current_credits");document.addEventListener("DOMContentLoaded",()=>{d&&u&&["input","change"].forEach(a=>{d.addEventListener(a,function(){this.value>u.value&&(this.value=u.value)}),u.addEventListener(a,function(){this.value<d.value&&(this.value=d.value)})})});var m="#table-filter-faculty-wrapper input[type=checkbox]:not(#table-filter-faculty-select-all)",b="#table-filter-major-wrapper input[type=checkbox]:not(#table-filter-major-select-all)";function w(a){return new Promise(e=>setTimeout(e,a))}document.addEventListener("livewire:load",async()=>{await f(),document.querySelectorAll(m).forEach(e=>{e.addEventListener("change",()=>{f();const t=document.querySelector('button[aria-label="Refresh Table"]');t&&t.click()})})});async function f(){let a=window.faculties,e=window.majors;do a=window.faculties,e=window.majors,await w(20);while(a.length==0||e.length==0);const t=[],s=[];document.querySelectorAll(m).forEach(n=>{n.checked&&t.push(n.value)}),e.forEach(n=>{t.includes(String(n.faculty_id))&&s.push(n.id)}),document.querySelectorAll(b).forEach(n=>{s.includes(parseInt(n.value))?n.parentElement.style.display="block":(n.parentElement.style.display="none",n.parentElement.checked=!1,n.parentElement.destroy())})}window.faculties=[];window.majors=[];const c={name:"",email:"",password:"",date_of_birth:"",address:"",phone_number:"",guardian_name:"",guardian_phone_number:"",gender:"",blood_type:"",faculty_id:"",major_id:"",student_id:"",current_credits:0,admission_year:"",tuition_fee:5e4,status:""};window.pagedashboardStudent=p;function p(a){return{element:a,loading:!1,faculties:[],majors:[],data_id:null,urlEdit:null,urlUpdate:null,initPagedashboardStudent(){},fetchFaculties(e){r(e).then(t=>{this.faculties=t,window.faculties=t})},fetchMajors(e){r(e).then(t=>{this.majors=t,window.majors=t})},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}window.createStudentModal=S;function S(a){return{element:a,errors:null,body:{...c},createStudentModalInit(){},createStudentModalChangeHandler(e){this.body={...c}},storeSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},storeStudentHandler(){this.errors=null;const e=this.element.getAttribute("action");r.post(e,{body:this.body}).then(t=>{this.storeSuccess(t)}).catch(t=>{const s=t.message;let l=[];Object.keys(t.errors).forEach(h=>{l.push(t.errors[h])}),this.errors={message:s,errors:l}})},_majors:[],facultyChangeHandler(e){this._majors=[],this._majors=this.majors.filter(t=>t.faculty_id==e)}}}window.faculties=[];window.majors=[];window.pagedashboardStudent=_;function _(a){return{element:a,loading:!1,faculties:[],majors:[],data_id:null,urlEdit:null,urlUpdate:null,initPagedashboardStudent(){},fetchFaculties(e){r(e).then(t=>{this.faculties=t,window.faculties=t})},fetchMajors(e){r(e).then(t=>{this.majors=t,window.majors=t})},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}
import{f as s}from"./fetch-b8ff0b47.js";window.editModal=n;function n(a){return{element:a,errors:null,body:{...i},editModalInit(){},async editModalChangeHandler(e){if(e){const t=await this.fetchById();this.facultyChangeHandler(t.faculty_id),this.body=t}else this.body={...i}},editSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},updateHandler(){this.errors=null,s.put(this.urlUpdate,{body:this.body}).then(e=>{this.editSuccess(e)}).catch(e=>{const t=e.message;let r=[];Object.keys(e.errors).forEach(o=>{r.push(e.errors[o])}),this.errors={message:t,errors:r}})},async fetchById(){const e=await s(this.urlEdit);return{...e.user,...e,faculty_id:e.major.faculty_id,major_id:e.major.id}},_majors:[],facultyChangeHandler(e){return this._majors=[],this._majors=this.majors.filter(t=>t.faculty_id==e),this._majors}}}const i={name:"",code:"",credits:"",major_id:"",faculty_id:""};window.pageDashboard=c;function c(a){return{element:a,loading:!1,faculties:[],majors:[],data_id:null,urlEdit:null,urlUpdate:null,initPageDashboard(){},fetchFaculties(e){s(e).then(t=>{this.faculties=t,window.faculties=t})},fetchMajors(e){s(e).then(t=>{this.majors=t,window.majors=t})},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}window.createModal=d;function d(a){return{element:a,errors:null,body:{...i},createModalInit(){},createModalChangeHandler(e){this.body={...i}},storeSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},storeHandler(){this.errors=null;const e=this.element.getAttribute("action");s.post(e,{body:this.body}).then(t=>{this.storeSuccess(t)}).catch(t=>{const r=t.message;let o=[];Object.keys(t.errors).forEach(l=>{o.push(t.errors[l])}),this.errors={message:r,errors:o}})},_majors:[],facultyChangeHandler(e){this._majors=[],this._majors=this.majors.filter(t=>t.faculty_id==e)}}}window.pageDashboard=u;function u(a){return{element:a,loading:!1,faculties:[],majors:[],data_id:null,urlEdit:null,urlUpdate:null,initPageDashboard(){},fetchFaculties(e){s(e).then(t=>{this.faculties=t,window.faculties=t})},fetchMajors(e){s(e).then(t=>{this.majors=t,window.majors=t})},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}
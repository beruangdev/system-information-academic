import{f as l}from"./fetch-b8ff0b47.js";window.editModal=i;function i(a){return{element:a,errors:null,body:{...o},editModalInit(){},async editModalChangeHandler(e){if(e){const t=await this.fetchById();this.body=t}else this.body={...o}},editSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},updateHandler(){this.errors=null,l.put(this.urlUpdate,{body:this.body}).then(e=>{this.editSuccess(e)}).catch(e=>{const t=e.message;let s=[];Object.keys(e.errors).forEach(r=>{s.push(e.errors[r])}),this.errors={message:t,errors:s}})},async fetchById(){const e=await l(this.urlEdit);return{...e.user,...e}}}}const o={name:"",position:"",specialization:"",phone_number:"",status:""};window.pageDashboard=d;function d(a){return{element:a,loading:!1,data_id:null,urlEdit:null,urlUpdate:null,initPageDashboard(){},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}window.createModal=c;function c(a){return{element:a,errors:null,body:{...o},createModalInit(){},createModalChangeHandler(e){this.body={...o}},storeSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},storeHandler(){this.errors=null;const e=this.element.getAttribute("action");l.post(e,{body:this.body}).then(t=>{this.storeSuccess(t)}).catch(t=>{const s=t.message;let r=[];Object.keys(t.errors).forEach(n=>{r.push(t.errors[n])}),this.errors={message:s,errors:r}})}}}window.pageDashboard=u;function u(a){return{element:a,loading:!1,data_id:null,urlEdit:null,urlUpdate:null,initPageDashboard(){},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}
import{f as l}from"./fetch-b8ff0b47.js";import{f as r}from"./choices-b42e1b7a.js";import{s}from"./selectSeasons-873b5e3f.js";import{s as i}from"./selectCourses-8a0dc8fa.js";import"./_commonjsHelpers-725317a4.js";window.editModal=n;function n(t){return{element:t,errors:null,body:{...a},editModalInit(){this.initSelectSeasons(),this.initSelectCourses()},...r({method:"update"}),...s({method:"edit"}),...i({method:"edit"}),async editModalChangeHandler(e){e?(await this.fetchById(),await Promise.all([this.fetchCurrentSeason(),this.fetchCurrentCourse()])):this.body={...a}},editSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()},async fetchById(){const e=await l(this.urlEdit),o={...e.user,...e};return this.body=o,o}}}const a={name:"",capacity:0,credits:0,season_id:"",course_id:""};window.pageDashboard=d;function d(t){return{element:t,loading:!1,data_id:null,urlEdit:null,urlUpdate:null,initPageDashboard(){},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}window.createModal=c;function c(t){return{element:t,errors:null,body:{...a},createModalInit(){this.initSelectSeasons(),this.initSelectCourses()},...r({method:"store"}),...s({method:"create"}),...i({method:"create"}),createModalChangeHandler(e){this.body={...a}},storeSuccess(e){this.element.querySelector('button[aria-label="Close"]').click(),this.refreshTable()}}}window.pageDashboard=u;function u(t){return{element:t,loading:!1,data_id:null,urlEdit:null,urlUpdate:null,initPageDashboard(){},refreshTable(){const e=document.querySelector('button[aria-label="Refresh Table"]');e&&e.click()}}}
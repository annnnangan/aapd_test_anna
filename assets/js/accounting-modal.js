document.addEventListener('DOMContentLoaded', function() {
const addCategoryCard = document.getElementById('addCategoryCard');
const addSubCategoryCard = document.getElementById('addSubCategoryCard');
const selectDateCard = document.getElementById('selectDateCard');
const periodSettingCard = document.getElementById('periodSettingCard');
const remarksCard = document.getElementById('remarksCard');

const closeAddCategoryCard = document.getElementById('closeAddCategoryCard');
const closeAddSubCategoryCard = document.getElementById('closeAddSubCategoryCard');
const closeSelectDateCard = document.getElementById('closeSelectDateCard');
const closePeriodSettingCard = document.getElementById('closePeriodSettingCard');
const closeRemarksCard = document.getElementById('closeRemarksCard');

const addCategoryModalTrigger = document.getElementById('addCategoryModal');
const addSubCategoryModalTrigger = document.getElementById('addSubCategoryModal');
const addSelectDateModalTrigger = document.getElementById('addSelectDateModal');
const periodSettingModalTrigger = document.getElementById('periodSettingModal');
const remarksModalTrigger = document.getElementById('remarksModal');

const calTotalRemark = document.getElementById('cal-total-remark');
const addPeriodSettingBtn = document.getElementById('addPeriodSettingBtn');

addCategoryModalTrigger.addEventListener('click', function() {
  event.preventDefault();
  addCategoryCard.classList.remove('d-none');
});
addSubCategoryModalTrigger.addEventListener('click', function() {
  event.preventDefault();
  addSubCategoryCard.classList.remove('d-none');
});
addSelectDateModalTrigger.addEventListener('click', function() {
  event.preventDefault();
  selectDateCard.classList.remove('d-none');
});
periodSettingModalTrigger.addEventListener('click', function() {
  event.preventDefault();
  periodSettingCard.classList.remove('d-none');
});
remarksModalTrigger.addEventListener('click', function() {
  event.preventDefault();
  remarksCard.classList.remove('d-none');
});

closeAddCategoryCard.addEventListener('click', function() {
  addCategoryCard.classList.add('d-none');
});
closeAddSubCategoryCard.addEventListener('click', function() {
  addSubCategoryCard.classList.add('d-none');
});
closeSelectDateCard.addEventListener('click', function() {
  selectDateCard.classList.add('d-none');
});
closePeriodSettingCard.addEventListener('click', function() {
  periodSettingCard.classList.add('d-none');
});
closeRemarksCard.addEventListener('click', function() {
  remarksCard.classList.add('d-none');
});


const cancelAddCategory = document.getElementById('cancelAddCategory');
cancelAddCategory.addEventListener('click', function() {
  addCategoryCard.classList.add('d-none');
});
const cancelAddSubCategory = document.getElementById('cancelAddSubCategory');
cancelAddSubCategory.addEventListener('click', function() {
  addSubCategoryCard.classList.add('d-none');
});
const cancelPeriodSettingCard = document.getElementById('cancelPeriodSettingCard');
cancelPeriodSettingCard.addEventListener('click', function() {
  periodSettingCard.classList.add('d-none');
});

/* 計算機週期文字 */
addPeriodSettingBtn.addEventListener('click', function() {
  event.preventDefault();
  periodSettingCard.classList.add('d-none');
  calTotalRemark.classList.remove('d-none');
});
});


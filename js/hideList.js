const arrow = document.querySelector('.icon');
const list = document.querySelector('.list-of-literature__block');

console.log(list);
console.log(arrow);
arrow.addEventListener('click',()=>{
    
    if(list.classList.contains('fade')) {
        list.classList.toggle('fade');
        list.classList.toggle('no-fade');
        list.innerHTML= `
        <ol>
        <li>Бойцов С. А., Баланова Ю. А., Шальнова С. А., Деев А. Д., Артамонова Г. В., Гатагонова Т. М. и др. Артериальная гипертония среди лиц 25–64 лет: распространенность, осведомленность, лечение и контроль. По материалам исследования ЭССЕ. Кардиоваскулярная терапия и профилактика. 2014;13(4): 4–14. doi:10.15829/1728-8800-2014-4-4-14.</li>
        <li>Beaney T, Schutte AE, Stergiou GS, Borghi C, Burger D, Charchar F, et al.; MMM Investigators. May Measurement Month 2019: The Global Blood Pressure Screening Campaign of the International Society of Hypertension. Hypertension. 2020;76(2): 333–341. doi:10.1161/HYPERTENSIONAHA.120.14874.</li>
        <li>Lowering blood pressure significantly reduces cardiovascular risk even at normal levels. Cardiovasc J Afr. 2021 Nov-Dec;32(6):319–26. PMCID: PMC8756007.</li>
        <li>Артериальная гипертензия у взрослых. Клинические рекомендации 2020. Российский кардиологический журнал. 2020;25(3):3786. doi:10.15829/1560-4071-2020-3-3786.</li>
        <li>Ротарь О. П., Ерина А. М., Бояринова М. А., Могучая Е. В., Колесова Е. П., Толкунова К. М. и др. Контроль артериальной гипертензии в период пандемии коронавирусной инфекции: результаты российской акции скрининга МММ2021. Российский кардиологический журнал. 2022;27(4):5014. doi:10.15829/1560-4071-2022-5014.</li>
        <li>Hutchins et al. circ cardiovascular outcomes. 2015;8:00-00. doi: 1161/circoutcomes.114.001240.</li>
        <li>Збышевская Е. В., Гумерова В. Е., Эринчек В. П., Логунова Н. А. Оценка эффективности тройной фиксированной комбинации у пациентов с недостаточным контролем артериального давления. Российский кардиологический журнал. 2022;27(1):4821. doi:10.15829/1560-4071-2022-4821.</li>
        <li><a href="https://vrachirf.ru/storage/date202307/e3/19/a8/69/7f/c8/f5/86/4f51-7288b3-10cba3.pdf" style="color:#fff;"><span>Общая характеристика лекарственного препарата Трипликсам. РУ ЛП-№(002311)-(РГ-RU) от 05.05.2023</span></a></li>
        <li>Cicero A et al. Long-Term Impact of Different Triple Combination Antihypertensive Medications on Blood Pressure Control, Metabolic Pattern and Incident Events: Data from the Brisighella Heart Study. J Clin Med. 2021;10(24):5921. Published 2021 Dec 17. doi:10.3390/jcm10245921.</li>
        <li>Lewis C.E. et al. Final Report of a Trial of Intensive versus Standard Blood-Pressure Control Engl J Med 2021; 384: 1921-30.</li>
      </ol>
        `;
    }
    else{
        list.classList.toggle('fade');
        list.classList.toggle('no-fade');
        list.querySelector('ol').remove();
    }
});
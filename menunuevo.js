const btnToggole=document.querySelector('.toggle-btn');

btnToggole.addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active');
});
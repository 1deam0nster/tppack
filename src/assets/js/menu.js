// function toggleMenu() {
//     const menu = document.querySelector('.menu');
//     menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
// }

// function toggleDropdown(event) {
//     event.preventDefault();
//     const dropdownContent = event.target.nextElementSibling;
//     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
// }

// function toggleSubDropdown(event) {
//     event.preventDefault();
//     const subDropdownContent = event.target.nextElementSibling;
//     subDropdownContent.style.display = subDropdownContent.style.display === 'block' ? 'none' : 'block';
// }

// document.addEventListener('click', function(event) {
//     const target = event.target;
//     const isClickInsideMenu = target.closest('.menu') !== null || target.closest('.hamburger') !== null;

//     if (!isClickInsideMenu) {
//         const dropdowns = document.querySelectorAll('.dropdown-content');
//         const subDropdowns = document.querySelectorAll('.sub-dropdown-content');

//         dropdowns.forEach(dropdown => {
//             dropdown.style.display = 'none';
//         });

//         subDropdowns.forEach(subDropdown => {
//             subDropdown.style.display = 'none';
//         });
//     }
// });


/* global bootstrap: false */
(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()


// var myOffcanvas = document.getElementById('menu')
// var displayStyle = window.getComputedStyle(asideElement).display;


// document.getElementById("menu").addEventListener("click", function() {
//   var asideElement = document.querySelector("aside");
//   var infoBlock = document.querySelector(".info-block");
//   // Проверяем, виден ли элемент (не имеет ли он стиля display: none)
//   if (asideElement.style.display === "none") {
//       // Если элемент скрыт, показываем его
//       asideElement.style.display = "block";
//       infoBlock.style.display = "block";
//   } else {
//       // Если элемент виден, скрываем его
//       asideElement.style.display = "none";
//       infoBlock.style.display = "none";
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  function isMobile() {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobile()) {
      var asides = document.querySelectorAll('aside');
      var infoBlocks = document.querySelectorAll('.info-block');

      asides.forEach(function(aside) {
          aside.classList.add('hide');
      });

      infoBlocks.forEach(function(infoBlock) {
          infoBlock.classList.add('hide');
      });
  }
});


document.getElementById('menu').addEventListener('click', function() {
  // Находим элементы, которым нужно добавить или удалить класс
  var asideElement = document.querySelector('aside');
  var infoBlockElement = document.querySelector('.info-block');

  // Проверяем, есть ли у элементов класс 'active'
  // Если есть - удаляем, если нет - добавляем
  asideElement.classList.toggle('hide');
  infoBlockElement.classList.toggle('hide');
});



// function checkAsideDisplay() {
//   // Проверяем, соответствует ли текущее разрешение экрана мобильному
//   if (window.matchMedia("(max-width: 500px)").matches) {
//       // Получаем элемент <aside>
//       var asideElement = document.querySelector("aside");
//       var infoBlocks = document.querySelectorAll(".info-block");

//       // Получаем текущее значение свойства display
//       var displayStyle = window.getComputedStyle(asideElement).display;
//       infoBlocks.style.display = "none";
//       asideElement.style.display = "none";
//       console.log("Текущее состояние display для <aside>: ", displayStyle);
      
//       // Здесь можно добавить дополнительные действия в зависимости от значения displayStyle
//       // Например, изменить стиль или выполнить какие-либо другие манипуляции с элементом
//   } else if (screenWidth > 500){
//       console.log("Текущее разрешение экрана не соответствует мобильному");
//   }
// }

// // Вызываем функцию при загрузке страницы
// checkAsideDisplay();

// // Также можно вызвать функцию при изменении размера окна, чтобы проверка выполнялась динамически
// window.addEventListener('resize', checkAsideDisplay);






// document.getElementById("menu").addEventListener("click", function() {
//   // Получаем все элементы, которые нужно скрыть или показать
//   const asideElements = document.querySelectorAll("aside");
//   const infoBlocks = document.querySelectorAll(".info-block");

//   // Функция для переключения стиля display
//   function toggleDisplay(elements) {
//       elements.forEach(element => {
//           if (element.style.display === "none") {
//               element.style.display = ""; // Удаляем стиль display, возвращая к стандартному поведению
//           } else {
//               element.style.display = "none"; // Добавляем стиль display: none, чтобы скрыть элемент
//           }
//       });
//   }

//   // Применяем функцию к элементам
//   toggleDisplay(asideElements);
//   toggleDisplay(infoBlocks);
// });







// function executeIfScreenWidthMoreThan500px() {
//   // Получаем ширину экрана
//   const screenWidth = window.innerWidth;

//   // Проверяем, больше ли ширина экрана 500 пикселей
//   if (screenWidth > 500) {
//     // Ваш код здесь
//     console.log('Ширина экрана больше 500px, выполняем код...');
//     // Например, можно изменить цвет фона страницы
//     asideElement.style.display = "block";
//   } else {
//     console.log('Ширина экрана 500px или меньше, код не выполняется.');
//   }
// }

// // Вызываем функцию
// executeIfScreenWidthMoreThan500px();

// // Также можно вызвать функцию при изменении размера окна, чтобы проверять условие динамически
// window.onresize = executeIfScreenWidthMoreThan500px;


// function executeIfScreenWidthMoreThan500px() {
//   // Получаем ширину экрана
//   var screenWidth = window.innerWidth;

//   // Проверяем, больше ли ширина экрана 500 пикселей
//   if (screenWidth < 500) {
//     // Ваш код здесь
//     console.log('Ширина экрана больше 500px, выполняем код...');
//     // Например, можно изменить цвет фона страницы
//     asideElement.style.display = "none";
//   } else {
//     asideElement.style.display = "block";
//     console.log('Ширина экрана 500px или меньше, код не выполняется.');
//   }
// }

// // Вызываем функцию
// executeIfScreenWidthMoreThan500px();

// // Также можно вызвать функцию при изменении размера окна, чтобы проверять условие динамически
// window.onresize = executeIfScreenWidthMoreThan500px;
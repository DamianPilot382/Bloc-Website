(function () {
  var version = document.getElementById('version').innerHTML,
    defaultLocalizationPath = 'localization/default_localization.json?v=' + version,
    localizationFiles = {
      'bauen.everblocksystems.de': 'localization/localization_de.json',
      'build.myblock.jp': 'localization/localization_jp.json',
      'build.everblockaustralia.com.au': 'localization/localization_au.json',
      'build.modularbuildingblocks.co.uk': 'localization/localization_uk_modular.json',
      'creez.everblocksystems.fr': 'localization/localization_fr.json',
      'build.everblockhire.co.uk': 'localization/localization_uk_hire.json',
      'build.everblock.se': 'localization/localization_se.json',
      'build.everblock.ru': 'localization/localization_ru.json', 
      'construir.everblocksystems.com.br': 'localization/localization_pt.json',            
      'postav.everblocksystems.sk': 'localization/localization_sk.json',
      'build.everblocklb.com': 'localization/localization_lb.json'
    },
    localizationNames = {
      'build.everblockaustralia.com.au': 'au',
      'bauen.everblocksystems.de': 'de',
      'build.myblock.jp': 'jp',
      'build.modularbuildingblocks.co.uk': 'uk_modular',
      'creez.everblocksystems.fr': 'fr',
      'build.everblockhire.co.uk': 'uk_hire',
      'build.everblock.se': 'se',
      'build.everblock.ru': 'ru',      
      'postav.everblocksystems.sk': 'sk',
      'construir.everblocksystems.com.br': 'pt',
      'build.everblocklb.com': 'lb'
    },
    partials = ['main', 'wall_builder', 'tips', 'library', 'models-list', 'instructions_form'],
    TOTAL_CONTENT_TO_LOAD = partials.length + 2, // two localizations
    defaultLocalization,
    localization,
    templatesMap = {},
    loadedCount = 0,
    Ajax = {
      get: function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        return new Promise(function (resolve, reject) {
          xhr.send();
          xhr.onload = function () {
            if (xhr.status < 400) {
              resolve(xhr);
            } else {
              reject(xhr);
            }
          };
        });
      }
    },
    showPage = function () {
      var container = document.createElement('div');
      if (localization) {
        window.localization = mergeObjects(defaultLocalization, localization);
      } else {
        window.localization = defaultLocalization;
      }
      templatesMap.localization = window.localization;
      container.innerHTML = Mustache.render('{{> main }}', {localization: window.localization}, templatesMap);
      document.body.appendChild(container);
      var event = document.createEvent('Event');
      event.initEvent("localization-loaded", true, false);
      document.body.dispatchEvent(event);
      document.body.classList.add('localization-loaded');
    },
    mergeObjects = function (target, source) {
      Object.getOwnPropertyNames(source).forEach(function (property) {
        var sourceProperty = source[property];
        if (typeof sourceProperty === 'object') {
          if (!target[property]) {
            target[property] = {};
          }
          target[property] = mergeObjects(target[property], sourceProperty);
          return;
        }
        target[property] = sourceProperty;
      });

      return target;
    },
    checkIfAllLoaded = function () {
      loadedCount += 1;
      if (loadedCount === TOTAL_CONTENT_TO_LOAD) {
        showPage();
      }
    };

  Ajax.get(defaultLocalizationPath)
    .then(function (xhr) {
      defaultLocalization = JSON.parse(xhr.response);
      checkIfAllLoaded();
    });

  partials.forEach(function (partialName) {
    var path = './views/' + partialName + '.mustache?v=' + version;
    Ajax.get(path)
      .then(function (xhr) {
        templatesMap[partialName] = xhr.response;
        checkIfAllLoaded();
      });
  });

  window.locale = 'en';
  window.libraryMode = location.search.indexOf('library=true') > -1;

  var isQaOrLocalhost = /(^app-qa\.|^127\.)/.test(location.host),

     anyLocalization = Object.getOwnPropertyNames(localizationFiles)
      .some(function (domain) {
        if (location.host === domain || (isQaOrLocalhost && new RegExp('.' + localizationNames[domain]).test(location.hash))) {
          Ajax.get(localizationFiles[domain])
            .then(function (xhr) {
              localization = JSON.parse(xhr.response);
              window.locale = localizationNames[domain];
              checkIfAllLoaded();
            });
          return true;
        }
        return false;
      });

  if (!anyLocalization) {
    checkIfAllLoaded()
  }

})();

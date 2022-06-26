let carte = L.map('map').setView([48.8499198, 2.6370411], 8);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                        // Il est toujours bien de laisser le lien vers la source des données
                        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                        minZoom: 5,
                        maxZoom: 20
                    }).addTo(carte);
                    var circle = L.circle([48.866667, 2.333333], {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0.5,
                        radius: 10000
                    }).addTo(carte);
                    circle.bindPopup("<p> Paris et partout en france! </p>");
                
<c>{{=it.user.rank}} {{=it.user.name}} de {{=it.user.country}}</c>
<c>An {{=it.game.year}}</c>
<c>Les rats ont mangé {{=it.game.rats}} % de vos réserves de grain</c>
<c>&#x2554&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2557</c>
<c>&#x2551  Récoltes   &#x2502  Réserves   &#x2502   Besoins   &#x2502   Besoins   &#x2502    Trésor   &#x2551</c>
<c>&#x2551  de grain   &#x2502  de grain   &#x2502  du peuple  &#x2502   de l'ost  &#x2502     royal   &#x2551</c>
<c>&#x2551  {{=it.user.harvest.toString().padStart(8," ")}}   &#x2502  {{=it.user.supply.toString().padStart(8," ")}}   &#x2502   {{=it.user.needPeople.toString().padStart(8," ")}}  &#x2502   {{=it.user.needOst.toString().padStart(8," ")}}  &#x2502  {{=it.user.money.toString().padStart(8," ")}}   &#x2551</c>
<c>&#x2551  boisseaux  &#x2502  boisseaux  &#x2502  boisseaux  &#x2502  boisseaux  &#x2502    francs   &#x2551</c>
<c>&#x255A&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x255D</c>
<l></l>
<l>                     * * * Grain à vendre :</l>
<c><invert>Pays              Boisseaux          Prix</invert></c>
<l>{{~ it.sales :sale:index }}<c>{{=index+1}} {{=sale.country.toString().padEnd(10," ")}}    {{=sale.boisseaux.toString().padStart(10," ")}}    {{=(Math.round(sale.price * 100)/100).toString().padStart(8," ")}}<br/>{{~}}</l>
<l>                     {{? !it.sales.length }}Pas de grain à vendre...{{?}}</l>
<l></l>
<l></l>
<l>&#8617; ou 1=Achat de grain 2=Vente de grain 3=Vente de terres :</l>
{{? it.game.errors.includes("NOT_IMPLEMENTED") }}<l>Fonction non implémentée 	&#x1F49D;</l>{{?}}

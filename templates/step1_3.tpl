<c>{{=it.user.rank}} {{=it.user.name}} de {{=it.user.country}}
<c>An {{=it.game.year}}
<c>Les rats ont mangé {{=it.game.rats}} % de vos réserves de grain
<c>&#x2554&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x44&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2557
<c>&#x2551  Récoltes   &#x2502  Réserves   &#x2502   Besoins   &#x2502   Besoins   &#x2502    Trésor   &#x2551
<c>&#x2551  de grain   &#x2502  de grain   &#x2502  du peuple  &#x2502   de l'ost  &#x2502     royal   &#x2551
<c>&#x2551  {{=it.user.harvest.toString().padStart(8," ")}}   &#x2502  {{=it.user.supply.toString().padStart(8," ")}}   &#x2502   {{=it.user.needPeople.toString().padStart(8," ")}}  &#x2502   {{=it.user.needOst.toString().padStart(8," ")}}  &#x2502  {{=it.user.money.toString().padStart(8," ")}}   &#x2551
<c>&#x2551  boisseaux  &#x2502  boisseaux  &#x2502  boisseaux  &#x2502  boisseaux  &#x2502    francs   &#x2551
<c>&#x255A&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#xa4&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x2550&#x255D

                     * * * Grain à vendre :
<c><invert>Pays              Boisseaux          Prix</invert>
{{~ it.sales :sale:index }}<c>{{=index+1}} {{=sale.country.toString().padEnd(10," ")}}    {{=sale.boisseaux.toString().padStart(10," ")}}    {{=(Math.round(sale.price * 100)/100).toString().padStart(8," ")}}<br/>{{~}}
                     {{? !it.sales.length }}Pas de grain à vendre...{{?}}


&#8617; ou Combien {{= it.game.getLandPrice() }}fr l'arpant ? (Vous possedez {{=it.user.land}}) arpents : {{=it.game.keyboardInput}}&#9617;
{{? it.game.errors.includes("NOT_ENOUGHT_LAND") }}Vous ne pouvez en vendre autant{{?}}

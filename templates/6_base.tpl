<l></l>
<c><invert>Situation à la fin de l'an {{=game.year}}</invert></c>
<l></l>
<l>              Nobles     Hommes    Marchands   Serfs   Terres   Palais</l>
<l>                         d'armes</l>
<l></l>
{{~ it.game.getUsersAsArray() :user:index }}
<invert><l> {{=user.getRank()}} {{=user.getName()}} de {{=user.getCountry()}}</l></invert>
<l>             todo     {{=user.getOst().toString().padStart(8," ")}}       todo {{=user.getPeople().toString().padStart(10," ")}} {{=user.getLand().toString().padStart(8," ")}}    {{=user.getPalais().toString().padStart(4," ")}}%</l>
{{~}}
<l></l>
<l>               &#8617;</l>

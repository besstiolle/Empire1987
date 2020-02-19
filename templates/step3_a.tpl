<c>{{=it.user.rank}} {{=it.user.name}} de {{=it.user.country}}</c>
<c>en l'an {{=it.game.year}}</c>
<l><invert> Revenus d'état </invert></l>
<l>          Trésor = {{=it.user.money.toString().padStart(6)}} francs</l>
<l>          <invert>  Droits         Taxe       Impôts  </invert></l>
<l>          <invert> de douane    commerciale   directs </invert></l>
<l>              {{=it.user.taxeA.toString().padStart(2)}} %         {{=it.user.taxeB.toString().padStart(2)}} %         {{=it.user.taxeC.toString().padStart(2)}} %</l>
<l>                 0            0            0</l>
<l></l>
<l>  <invert>  Investissements    Nombre       Profits      Coût </invert></l>
<l> 1) Champs de foire  {{=it.user.foires.toString().padStart(7)}}              0       1000</l>
<l> 2) Moulins à grain  {{=it.user.moulins.toString().padStart(7)}}              0       2000</l>
<l> 3) Fonderies        {{=it.user.fonderies.toString().padStart(7)}}            274       7000</l>
<l> 4) Chantiers navals {{=it.user.chantiers.toString().padStart(7)}}              0       8000</l>
<l> 5) Hommes d'armes   {{=it.user.ost.toString().padStart(7)}}           -160          8</l>
<l> 6) Palais           {{=it.user.palais.toString().padStart(7)}}% terminé             5000</l>
<l></l>
<l></l>
<l>Quelle valeur pour la taxe de douane (50% max) ? {{=it.game.keyboardInput}}&#9617;</l>
{{? it.game.errors.includes("TAXE_A_TOO_HIGH") }}<l>Vous ne pouvez dépasser les 50%.</l>{{?}}

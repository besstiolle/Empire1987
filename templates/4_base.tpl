<c>{{=it.user.rank}} {{=it.user.name}} de {{=it.user.country}}</c>
<c>en l'an {{=it.game.year}}</c>
<l><invert> Revenus d'état </invert></l>
<l>          Trésor = {{=it.user.money.toString().padStart(6)}} francs</l>
<l>          <invert>  Droits         Taxe       Impôts  </invert></l>
<l>          <invert> de douane    commerciale   directs </invert></l>
<l>              {{=it.user.taxeA.toString().padStart(2)}} %         {{=it.user.taxeB.toString().padStart(2)}} %         {{=it.user.taxeC.toString().padStart(2)}} %</l>
<l>            {{=it.user.gains.taxeA.toString().padStart(6)}}       {{=it.user.gains.taxeB.toString().padStart(6)}}       {{=it.user.gains.taxeC.toString().padStart(6)}}</l>
<l></l>
<l>  <invert>  Investissements    Nombre       Profits      Coût </invert></l>
<l> 1) Champs de foire  {{=it.user.foires.toString().padStart(7)}}         {{=it.user.gains.gainFoires.toString().padStart(6)}}       1000</l>
<l> 2) Moulins à grain  {{=it.user.moulins.toString().padStart(7)}}         {{=it.user.gains.gainMoulins.toString().padStart(6)}}       2000</l>
<l> 3) Fonderies        {{=it.user.fonderies.toString().padStart(7)}}         {{=it.user.gains.gainFonderies.toString().padStart(6)}}       7000</l>
<l> 4) Chantiers navals {{=it.user.chantiers.toString().padStart(7)}}         {{=it.user.gains.gainChantiers.toString().padStart(6)}}       8000</l>
<l> 5) Hommes d'armes   {{=it.user.ost.toString().padStart(7)}}         {{=it.user.gains.gainOst.toString().padStart(6)}}          8</l>
<l> 6) Palais           {{=it.user.palais.toString().padStart(7)}}% terminé             5000</l>
<l></l>
<l></l>

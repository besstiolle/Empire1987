<l></l>
<l></l>
<l></l>
<l>          <invert> Terres vassales </invert></l>
<l></l>
<l></l>
{{~ it.game.getOpponentsAsArray() :opponent:index }}
<l>          {{=index+1}}) {{=opponent.getCountry().padEnd(20," ")}}      {{=opponent.getLand().toString().padStart(7," ")}}</l>
{{~}}




<l></l>
<l></l>
<l></l>
<l></l>
<l></l>

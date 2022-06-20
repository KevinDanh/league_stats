import "./css/champion.css"

const Champion = ({ name, stats }) => {
  let image = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+ name + "_0.jpg";
  console.log(stats)
  return (
    <>
        <h2>{name}</h2>
        <img src={image} alt="" width="100%"/>
        <h3>{stats.title}</h3>
        <h3>{stats.tags[0]} {stats.tags[1]}</h3>
        <ul className="championStats">
          <li>     Armor                : {stats.stats.armor}                 </li>
          <li> Armor Per level          : {stats.stats.armorperlevel}         </li>
          <li> Attack Damage            : {stats.stats.attackdamage}          </li>
          <li> Attack Damage per Level  : {stats.stats.attackdamageperlevel}  </li>
          <li> Attack Range             : {stats.stats.attackrange}           </li>
          <li> Attack Speed             : {stats.stats.attackspeed}           </li>
          <li> Attack Speed per Level   : {stats.stats.attackspeedperlevel}   </li>
          <li> Crit                     : {stats.stats.crit}                  </li>
          <li> Crit per Level           : {stats.stats.critperlevel}          </li>
          <li> Hp                       : {stats.stats.hp}                    </li>
          <li> Hp per Level             : {stats.stats.hpperlevel}            </li>
          <li> Hp Regen                 : {stats.stats.hpregen}               </li>
          <li> Hp Regen per Level       : {stats.stats.hpregenperlevel}       </li>
          <li> Move Speed               : {stats.stats.movespeed}             </li>
          <li> Mp                       : {stats.stats.mp}                    </li>
          <li> Mp per Level             : {stats.stats.mpperlevel}            </li>
          <li> Mp Regen                 : {stats.stats.mpregen}               </li>
          <li> Mp Regen per Level       : {stats.stats.mpregenperlevel}       </li>
          <li> Magic Resist             : {stats.stats.spellblock}            </li>
          <li> Magic Resist per Level   : {stats.stats.spellblockperlevel}    </li>
        </ul>
    </>
  )
}

export default Champion
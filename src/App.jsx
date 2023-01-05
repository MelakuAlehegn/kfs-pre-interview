import './App.css'

function App() {

  return (
    <div className='app'>
      <table>
        <tr className='grey'><td>Groups / Slots</td><td></td></tr>
        <tr className='height-add'><td colspan="2"></td></tr>
        <tr>
          <th className='slots--right'><span>#</span> Group</th>
          <th className='slots--left'>Slot</th>
        </tr>
        <tr>
          <td className='top' valign="top">
            <hr  className='gg'/>
            <button className='removegroup--btn'><i class="fas fa-minus"></i></button>
            <input className='input--group' type="text" placeholder='group1'/>
          </td>
          <td  className='slot--inputs'>
            <hr />
            <div><input className='input--slot' type="text" placeholder='g1_slot1'/><button className='small'><i class="fas fa-minus"></i></button></div><hr />
            <div><input className='input--slot' type="text" placeholder='g1_slot2'/><button className='small'><i class="fas fa-minus"></i></button></div><hr />
            <div><input className='input--slot' type="text" placeholder='g1_slot3'/><button className='small'><i class="fas fa-minus"></i></button></div><hr />
            <button className='addgroup--btn addslot--btn'>+ Add Slot</button>
            </td>
        </tr>
        <tr>
          <th className='slots--right'><span>#</span> Group</th>
          <th className='slots--left'>Slots</th>
        </tr>
        <tr>
          <td className='top' valign="top">
            <hr className='gg' />
            <button className='removegroup--btn'><i class="fas fa-minus"></i></button>
            <input className='input--group' type="text" placeholder='group2'/>
          </td>
          <td className='slot--inputs'>
            <hr />
            <div><input className='input--slot' type="text" placeholder='g2_slot1'/><button className='small'><i class="fas fa-minus"></i></button></div><hr />
            <div><input className='input--slot' type="text" placeholder='g2_slot2'/><button className='small'><i class="fas fa-minus"></i></button></div><hr />
            <div><input className='input--slot' type="text" placeholder='g2_slot3'/><button className='small'><i class="fas fa-minus"></i></button></div><hr />
            <button className='addgroup--btn addslot--btn'>+ Add Slot</button>
            </td>
        </tr>
        <tr className='grey'><button className='addgroup--btn'>+ Add Group</button><td></td></tr>
      </table>
    </div>
  )
}

export default App

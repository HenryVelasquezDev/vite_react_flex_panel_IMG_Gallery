import {panels} from '../Data/panels';
import { PanelItem } from './PanelItem';

export const Panel = () => {
  return (
    <div className="panels">
      {
        panels.map( (obj) => (
          <PanelItem key={obj.idpanel} panel = {obj}/>
        ))
      }
    </div>
  )
}

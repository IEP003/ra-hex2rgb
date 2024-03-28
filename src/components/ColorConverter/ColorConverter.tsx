
import { useEffect, useState } from 'react';
import './ColorConverter.css'
import { hexToRgb } from '../../utils/hexToRgb';

const state = { message: '', color: '#fff'};

export const ColorConverter = () => {
    const [hexColor, setHexColor] = useState('');
    const [output, setOutput] = useState(state);

    useEffect(() => {
        if(hexColor.length === 7 && /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi.test(hexColor)) {
            const rgb = hexToRgb(hexColor);
            setOutput({ message: rgb, color: hexColor})
        } else if (hexColor.length === 7 && !/#([a-f0-9]{6}|[a-f0-9]{3})\b/gi.test(hexColor)) {
            setOutput({ message: 'Ошибка', color: 'red'})
        } else {
            setOutput(state)
        }
    }, [hexColor])


  return (
    <div className='container' style={{backgroundColor: output.color}}>
        <form className='color-converter-form' action="">
            <input 
            className='card input-color' 
            id='color'
            name='color'
            onChange={(e) => setHexColor(e.target.value)}
            value={hexColor}
            />
            <label className='card info' htmlFor="">{output.message}</label>
        </form>
    </div>
  )
}

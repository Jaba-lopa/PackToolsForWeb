import { observer } from 'mobx-react-lite';
import OperationColor from '../../../../entities/Create__button/OperationColor/OperationColor';
import OperationItem from '../../../../entities/Create__button/OperationItem/OperationItem';
import { useValueStyles } from '../../../../pages/CreateButtonPage/hooks/useValueStyle';
import cl from '../StyleOperation.module.scss';
import { operations } from "../operationsInterface";


interface operation{
    title: string,
    style: string,
    unit?: string
}

export interface operationsArray extends Array<operation>{};

const operationItems: operationsArray = [
    {title: 'Размер текста', style: 'fontSize',  unit: 'px'},
    {title: 'Отступ сверху и снизу', style: 'paddingHor', unit: 'px'},
    {title: 'Отступ слева и справа', style: 'paddingVer', unit: 'px'},
    {title: 'Закругление', style: 'borderRadius', unit: 'px'},
    {title: 'Ширина обводки', style: 'borderWidth', unit: 'px'},
    {title: 'Плавность анимаций', style: 'transition', unit: 's'},
    {title: 'Тень offset-x', style: 'shadowX', unit: 'px'},
    {title: 'Тень offset-y', style: 'shadowY', unit: 'px'},
    {title: 'Размытие тени', style: 'shadowBlur', unit: 'px'},
    {title: 'Тень во все стороны', style: 'shadowSpread', unit: 'px'}
]

const operationColor: operationsArray = [
    {title: 'Цвет кнопки',style: 'backgroundColor'},
    {title: 'Цвет обводки', style: 'borderColor'},
    {title: 'Цвет текста', style: 'color'},
    {title: 'Цвет тени', style: 'shadowColor'}
]

const StyleBtn = () => {
    const operations: operations = useValueStyles('styles');

    return(
        <div className={cl.styleBtn}>

            <div className={cl.styleBtn__color}>
                {operationColor.map((el, index) => 
                    <OperationColor type='styles' style={el.style} key={el.title} title={el.title} valueStyle={operations[`${el.style}`]}/>
                )}
            </div>  
            
            <div className={cl.styleBtn__operationsWrapper}>
                {operationItems.map((el, index) => 
                    <OperationItem type='styles' style={el.style} key={el.title} title={el.title} unit={el.unit} valueStyle={operations[el.style]}/>
                )}
            </div>

        </div>
    )
}

export default observer(StyleBtn);